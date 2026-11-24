// Genera un MP3 por diálogo (bloques con `script`) con las voces neuronales de edge-tts.
// Uso: node voces.js <raíz Quaderno> <edge-tts> [unidades separadas por coma | all]
// El nombre del archivo es la huella FNV-1a del texto del diálogo: si el diálogo cambia, el audio deja de usarse.
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const [root, edge, which = "1"] = process.argv.slice(2);
const outDir = path.join(root, "audio");
fs.mkdirSync(outDir, { recursive: true });

const window = { UNITS: {}, LEVELS: {} };
global.window = window;
const load = (f) => {
  try {
    new Function("window", fs.readFileSync(f, "utf8"))(window);
  } catch (e) {
    console.error("No se pudo leer", f, e.message);
  }
};
const unitFiles = fs.readdirSync(path.join(root, "content/units")).filter((f) => /^u\d+\.js$/.test(f));
const wanted = which === "all" ? null : new Set(which.split(",").map(Number));
for (const f of unitFiles) if (!wanted || wanted.has(+f.slice(1, -3))) load(path.join(root, "content/units", f));
if (!wanted) for (const f of fs.readdirSync(path.join(root, "content/levels"))) load(path.join(root, "content/levels", f));

const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
};
const scriptKey = (lines) => fnv(lines.map((l) => `${l.who || ""}|${l.text}`).join("\n"));

// Mismas reglas de género que la app.
const MALE_A = /^(luca|andrea|nicola|mattia|elia|enea|tobia|gianluca|battista|giosuè)$/i;
const FEMALE_E = /^(beatrice|irene|adele|rachele|matilde|alice|noemi|clarice|agnese|ester|giuditta)$/i;
function whoGender(who) {
  const w = String(who || "").trim().toLowerCase();
  if (/^(sig\.?ra|signora|dott\.?ssa|prof\.?ssa|mamma|nonna|zia|commessa|cameriera|segretaria|impiegata|ragazza|bambina)(?![a-zà-ù])/.test(w)) return "f";
  if (/^(sig\.|signor|signore|dott\.|prof\.|papà|nonno|zio|commesso|cameriere|impiegato|fruttivendolo|salumiere|fornaio|ragazzo|bambino)(?![a-zà-ù])/.test(w)) return "m";
  const name = w.split(/[\s(]/)[0];
  if (!/^[a-zàèéìòù]+$/.test(name) || name.length < 3) return null;
  if (MALE_A.test(name)) return "m";
  if (FEMALE_E.test(name)) return "f";
  if (/a$/.test(name)) return "f";
  if (/[oei]$/.test(name)) return "m";
  return null;
}
const VOICES = { f: ["it-IT-IsabellaNeural", "it-IT-ElsaNeural"], m: ["it-IT-DiegoNeural", "it-IT-GiuseppeMultilingualNeural"] };

function cast(lines) {
  const roles = {};
  const used = { f: 0, m: 0 };
  let flip = 0;
  for (const l of lines) {
    const who = l.who || "";
    if (roles[who]) continue;
    const g = whoGender(who) || (flip++ % 2 ? "m" : "f");
    roles[who] = VOICES[g][used[g]++ % 2];
  }
  return roles;
}

const scripts = [];
const walk = (o) => {
  if (Array.isArray(o)) return o.forEach(walk);
  if (o && typeof o === "object") {
    if (Array.isArray(o.script) && o.script.length && o.script[0].text) scripts.push(o.script);
    Object.values(o).forEach(walk);
  }
};
walk(window.UNITS);
walk(window.LEVELS);

const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "voces-"));
let made = 0;
for (const lines of scripts) {
  const key = scriptKey(lines);
  const out = path.join(outDir, `${key}.mp3`);
  if (fs.existsSync(out)) continue;
  const roles = cast(lines);
  const parts = [];
  lines.forEach((l, i) => {
    const f = path.join(tmp, `${key}-${i}.mp3`);
    const text = String(l.text).replace(/\s*\|\s*/g, ", ");
    const r = spawnSync(edge, ["--voice", roles[l.who || ""], "--rate=-5%", "--text", text, "--write-media", f], { encoding: "utf8" });
    if (r.status !== 0) throw new Error(`edge-tts falló: ${r.stderr}`);
    parts.push(fs.readFileSync(f));
  });
  fs.writeFileSync(out, Buffer.concat(parts));
  made++;
  console.log(key, lines.length, "líneas", Object.entries(roles).map(([w, v]) => `${w}=${v.split("-")[2]}`).join(" "));
}

// Índice que lee la app: solo las huellas con audio.
const all = fs.readdirSync(outDir).filter((f) => /^[0-9a-f]{8}\.mp3$/.test(f)).map((f) => f.slice(0, 8)).sort();
fs.writeFileSync(path.join(outDir, "index.js"), `// Generado por voces.js (edge-tts). Huellas de los diálogos con audio grabado.\nwindow.AUDIO = new Set(${JSON.stringify(all)});\n`);
console.log(`Hechos ${made}; total con audio ${all.length}`);
