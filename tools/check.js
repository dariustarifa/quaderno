// Revisa las unidades: estructura, tablas y regla de idioma (sin español desde B1).
// Uso: node tools/check.js            (todas las unidades listas)
//      node tools/check.js 17 18 19   (solo esas)
global.window = {};
require("../content/kit.js");
global.K = window.K;
require("../content/course.js");
const fs = require("fs");
const path = require("path");

const want = process.argv.slice(2).map(Number);
const units = window.COURSE.units.filter((u) => (want.length ? want.includes(u.n) : fs.existsSync(path.join(__dirname, `../content/units/u${String(u.n).padStart(2, "0")}.js`))));
const SPANISH = /[¿¡ñ]|\b(Escribe|Traduce|Haz|Busca|Escucha|Pulsa|Responde|español|frases|para|cuando|también|después|ejemplo|porque|está|qué|cómo|quiero|había|haría|tuviera|pretérito|llegaría|vendría)\b|ía\b/;
let problems = 0;

function strings(o, out = []) {
  if (typeof o === "string") out.push(o);
  else if (Array.isArray(o)) o.forEach((x) => strings(x, out));
  else if (o && typeof o === "object") Object.entries(o).forEach(([k, v]) => k !== "where" && strings(v, out));
  return out;
}

for (const meta of units) {
  const file = path.join(__dirname, `../content/units/u${String(meta.n).padStart(2, "0")}.js`);
  try {
    require(file);
  } catch (e) {
    console.log(`u${meta.n}: ERROR al cargar → ${e.message}`);
    problems++;
    continue;
  }
  const u = window.UNITS[meta.n];
  const issues = [];
  if (!u) issues.push("no define window.UNITS[n]");
  else {
    if (u.level !== meta.level) issues.push(`nivel ${u.level} ≠ ${meta.level}`);
    if (u.pages.length !== 10) issues.push(`${u.pages.length} páginas`);
    const blocks = [...u.pages.flatMap((p) => p.blocks), ...u.exam.blocks];
    blocks.forEach((b) => {
      if (!b.kind || !b.title) issues.push(`bloque sin kind/title`);
      if (b.kind === "table") b.rows.forEach((r) => r.length !== b.cols.length + 1 && issues.push(`tabla «${b.title}» fila ${r[0]}`));
      if (b.table) {
        b.table.rows.forEach((r) => r.length !== b.table.head.length && issues.push(`ref «${b.title}» fila ${r[0]}`));
        // En móvil caben unos 40 caracteres por fila (suma del texto más largo de cada columna).
        const widths = b.table.head.map((_, ci) => Math.max(...[b.table.head, ...b.table.rows].map((r) => Math.max(...String(r[ci] || "").split(/,\s*|\s\/\s/).map((w) => w.length)))));
        const total = widths.reduce((a, x) => a + x, 0);
        if (b.table.head.length > 3 && total > 44) issues.push(`ref «${b.title}» quizá ancha en móvil (${total})`);
      }
      if (["vocab", "fill", "translate", "shadow", "speak", "dictation", "write"].includes(b.kind) && !(b.items || []).length) issues.push(`«${b.title}» sin items`);
      if (b.kind === "listen" && (!b.script?.length || !b.questions?.length)) issues.push(`listen «${b.title}» incompleto`);
      if (b.kind === "fill") b.items.forEach((it) => !it.includes("___") && issues.push(`fill sin hueco: ${it}`));
    });
    if (u.exam.blocks.length < 7) issues.push(`examen con ${u.exam.blocks.length} partes`);
    // Restos de borrador (dudas escritas dentro del contenido).
    strings(u).filter((s) => /\? No\s*[:,—–]|No: cerca|No: busca|\bTODO\b/.test(s)).forEach((s) => issues.push(`borrador: ${s.slice(0, 70)}`));
    if (meta.level === "B1" || meta.level === "B2") {
      const bad = strings(u).filter((s) => SPANISH.test(s));
      bad.slice(0, 5).forEach((s) => issues.push(`¿español?: ${s.slice(0, 80)}`));
    }
  }
  if (issues.length) problems += issues.length;
  console.log(`u${meta.n} ${meta.level} ${issues.length ? "→ " + issues.join(" | ") : "ok"}`);
}
process.exitCode = problems ? 1 : 0;
