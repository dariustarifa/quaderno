/* Moka · rediseño del Quaderno (copia). Usa el mismo contenido (../content) y el mismo progreso guardado. Interfaz siempre en castellano. */
(() => {
  "use strict";

  const C = window.COURSE;
  const $app = document.getElementById("app");
  const $toast = document.getElementById("toast");
  const STORE_KEY = "quaderno.it.v1";

  /* ---------- Sin zoom: Safari ignora user-scalable=no, así que se bloquea el pellizco a mano ---------- */
  ["gesturestart", "gesturechange", "gestureend"].forEach((ev) => document.addEventListener(ev, (e) => e.preventDefault(), { passive: false }));
  document.addEventListener("touchmove", (e) => e.touches.length > 1 && e.preventDefault(), { passive: false });
  let lastTouch = 0;
  document.addEventListener(
    "touchend",
    (e) => {
      // Doble toque rápido fuera de los campos = zoom en iOS antiguos: se anula.
      const now = Date.now();
      if (now - lastTouch < 300 && !e.target.closest("input, textarea, select")) e.preventDefault();
      lastTouch = now;
    },
    { passive: false },
  );

  /* ---------- Estado guardado ---------- */
  let S = {};
  try {
    S = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch (_) {
    S = {};
  }
  S.answers = S.answers || {};
  S.done = S.done || {};
  S.exam = S.exam || {};
  let saveTimer = 0;
  function save() {
    S._savedAt = Date.now();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(S));
      } catch (_) {}
      try {
        Sync.schedule();
      } catch (_) {}
    }, 250);
  }
  // ?blank en la URL: muestra el cuaderno vacío (para imprimir sin tus respuestas).
  // En la vista PDF también se puede elegir «En blanco» (S.printBlank): solo cambia lo que se imprime,
  // tus respuestas siguen guardadas.
  const BLANK = /[?&]blank\b/.test(location.search);
  let printingBlank = false;
  const val = (k) => (BLANK || printingBlank ? "" : S.answers[k] || "");

  /* ---------- Utilidades ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const pad = (n) => String(n).padStart(2, "0");
  // Enunciado arriba (castellano hasta A2, italiano desde B1) y nombre del ejercicio en italiano debajo.
  const blockHead = (b) =>
    b.hint
      ? `<h3>${esc(b.hint)}</h3><p class="hint" lang="it">${esc(b.title)}</p>`
      : `<h3 lang="it">${esc(b.title)}</h3>`;
  const SKILL = { habla: "Habla", escritura: "Escritura", mixto: "Mixto" };
  // Desde B1 todo va en italiano, también la interfaz de la página.
  let IT = false;
  const isIt = (level) => level === "B1" || level === "B2";
  const t = (es) => es; // interfaz siempre en castellano
  const SKILL_IT = { habla: "Parlato", escritura: "Scrittura", mixto: "Misto" };
  const skillLabel = (k) => SKILL[k] || "";

  function toast(msg) {
    $toast.textContent = msg;
    $toast.setAttribute("data-show", "");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => $toast.removeAttribute("data-show"), 2200);
  }

  /* ---------- Iconos (SVG, trazo 1.75) ---------- */
  const svg = (p, s = 18) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    play: svg('<path d="M8 5.5v13l10.5-6.5z"/>'),
    slow: svg('<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l-3.5-4.5"/>'),
    stop: svg('<rect x="7" y="7" width="10" height="10" rx="1.5"/>'),
    mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>', 20),
    copy: svg('<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 16),
    left: svg('<path d="M15 5l-7 7 7 7"/>', 20),
    right: svg('<path d="M9 5l7 7-7 7"/>'),
    print: svg('<path d="M7 9V4h10v5"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v6H7z"/>'),
    eye: svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    chat: svg('<path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>'),
    pen: svg('<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>'),
    eraser: svg('<path d="M8 20h12"/><path d="M4.5 15.5l9-9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L12 18H7.5z"/>'),
    undo: svg('<path d="M9 7L4 12l5 5"/><path d="M4 12h10a6 6 0 0 1 0 12h-2" transform="translate(0 -6)"/>'),
    hand: svg('<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5"/><path d="M11 11V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 11V6a1.5 1.5 0 0 1 3 0v7a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L3 15.5a1.6 1.6 0 0 1 2.4-2.1L8 16"/>'),
  };

  /* ---------- Voz italiana (síntesis) ---------- */
  const VOICE_F = /alice|federica|emma|paola|elsa|isabella|fabiola|fiamma|imelda|irma|palmira|pierina|google/i;
  const VOICE_M = /luca|diego|giuseppe|benigno|calimero|cataldo|gianni|lisandro|rinaldo|cosimo|giorgio/i;
  const voiceGender = (v) => (!v ? null : VOICE_M.test(v.name) ? "m" : VOICE_F.test(v.name) ? "f" : null);
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
  const BAD_VOICES = /eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|nonna|nonno/i;
  const TTS = {
    ok: "speechSynthesis" in window,
    voices: [],
    load() {
      if (!this.ok) return;
      // Orden: voces premium o mejoradas (las mejores) → voces de Google (en línea, bastante naturales)
      // → voces normales de Apple/Microsoft → el resto. Las voces de broma (Eddy, Flo…) van al final.
      const rank = (v) => {
        const id = `${v.name} ${v.voiceURI || ""}`;
        if (BAD_VOICES.test(v.name)) return 100;
        if (/premium|enhanced|migliorat|avanzat|natural|neural|online/i.test(id)) return 0;
        if (/google/i.test(id)) return 5;
        if (/federica|emma|luca|paola|alice|elsa|isabella|diego|cosimo|giorgio/i.test(id)) return 10;
        return 15;
      };
      this.quality = (v) => (v ? rank(v) : 100);
      this.voices = speechSynthesis
        .getVoices()
        .filter((v) => /^it/i.test(v.lang))
        .sort((a, b) => rank(a) - rank(b));
    },
    voice(alt = 0) {
      const vs = this.voices.filter((v) => !BAD_VOICES.test(v.name));
      const list = vs.length ? vs : this.voices;
      if (!list.length) return null;
      let i = Math.max(0, list.findIndex((v) => v.name === S.voice));
      return list[(i + alt) % list.length];
    },
    // Reparto de voces de un diálogo: cada personaje recibe una voz distinta y, si se puede,
    // de su mismo género (los personajes son inventados; el género se deduce del nombre o del título).
    cast(lines) {
      const main = this.voice(0);
      const pool = this.voices.filter((v) => !BAD_VOICES.test(v.name));
      const used = new Set();
      const roles = {};
      let first = true;
      for (const l of lines) {
        if (!l.who || roles[l.who]) continue;
        const g = whoGender(l.who);
        let v = null;
        if (first && (!g || !main || voiceGender(main) === g || !voiceGender(main))) v = main;
        if (!v) v = pool.find((x) => !used.has(x.name) && g && voiceGender(x) === g) || null;
        if (!v && !g) v = pool.find((x) => !used.has(x.name)) || null;
        if (v) {
          used.add(v.name);
          roles[l.who] = { voice: v, pitch: 1, rate: 1 };
        } else {
          // No queda otra voz: la principal con otro tono (más grave para hombres, más agudo para mujeres).
          // Si hay una voz del mismo género ya usada, se reutiliza con otro tono.
          const n = Object.keys(roles).length;
          const base = (g && pool.find((x) => voiceGender(x) === g)) || main;
          const vg = voiceGender(base);
          const pitch = g === "m" && vg !== "m" ? 0.78 : g === "f" && vg !== "f" ? 1.2 : [0.9, 1.1, 0.95, 1.05][n % 4];
          roles[l.who] = { voice: base, pitch, rate: g === "m" ? 0.97 : 1.02 };
        }
        first = false;
      }
      return roles;
    },
    say(text, rate = 1, role = null) {
      return new Promise((resolve) => {
        if (!this.ok) return resolve();
        const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\|\s*/g, ", ").replace(/,\s*,/g, ","));
        const v = role ? role.voice : this.voice(0);
        if (v) u.voice = v;
        u.lang = v ? v.lang : "it-IT";
        u.rate = rate * (role ? role.rate : 1);
        u.pitch = role ? role.pitch : 1;
        u.onend = u.onerror = () => resolve();
        speechSynthesis.speak(u);
      });
    },
    stop() {
      if (this.ok) speechSynthesis.cancel();
      this.run = (this.run || 0) + 1;
      document.querySelectorAll('[data-playing="true"]').forEach((b) => (b.dataset.playing = "false"));
    },
  };
  if (TTS.ok) {
    TTS.load();
    speechSynthesis.onvoiceschanged = () => {
      TTS.load();
      const sel = document.getElementById("voice-select");
      if (sel) fillVoiceSelect(sel);
    };
  }

  async function playButton(btn, lines, rate) {
    const playing = btn.dataset.playing === "true";
    TTS.stop();
    if (playing) return;
    const run = TTS.run;
    btn.dataset.playing = "true";
    const roles = TTS.cast(lines);
    for (const l of lines) {
      if (run !== TTS.run) break;
      await TTS.say(l.text, rate, l.who ? roles[l.who] : null);
      if (lines.length > 1) await new Promise((r) => setTimeout(r, 350));
    }
    if (run === TTS.run) btn.dataset.playing = "false";
  }

  /* ---------- Micrófono → texto ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  function toggleMic(btn) {
    if (rec) {
      rec.stop();
      return;
    }
    const field = document.querySelector(`[data-key="${CSS.escape(btn.dataset.target)}"]`);
    if (!field) return;
    TTS.stop();
    rec = new SR();
    rec.lang = "it-IT";
    rec.interimResults = true;
    rec.continuous = true;
    const base = field.value.trim() ? field.value.trimEnd() + " " : "";
    rec.onresult = (e) => {
      let text = "";
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      field.value = (base + text).trim();
      persist(field);
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") toast("El navegador no tiene permiso para el micrófono");
      else if (e.error !== "no-speech" && e.error !== "aborted") toast("No se pudo escuchar (" + e.error + ")");
    };
    rec.onend = () => {
      btn.dataset.on = "false";
      btn.setAttribute("aria-label", "Responder hablando");
      rec = null;
    };
    try {
      rec.start();
      btn.dataset.on = "true";
      btn.setAttribute("aria-label", "Parar de escuchar");
    } catch (_) {
      rec = null;
    }
  }
  function stopMic() {
    if (rec) rec.abort();
  }

  /* ---------- Campos ---------- */
  function persist(el) {
    S.answers[el.dataset.key] = el.value;
    save();
  }
  const inp = (key, ph = "", cls = "in", lang = "it") =>
    `<input class="${cls}" data-key="${esc(key)}" value="${esc(val(key))}" placeholder="${esc(ph)}" autocomplete="off" autocapitalize="off" spellcheck="false" lang="${lang}" />`;
  function ta(key, rows = 2, ph = "", mic = false) {
    const t = `<textarea class="ta" data-key="${esc(key)}" rows="${rows}" placeholder="${esc(ph)}" spellcheck="false" lang="it">${esc(val(key))}</textarea>`;
    if (!mic || !SR) return t;
    return `<div class="answer-box">${t}<button class="icon-btn mic" data-act="mic" data-target="${esc(key)}" aria-label="Responder hablando">${I.mic}</button></div>`;
  }
  const sayBtns = (text, label) =>
    `<div class="tools"><button class="tool" data-act="say" data-say="${esc(text)}" data-rate="0.7" aria-label="${t("Escuchar lento", "Ascolta lentamente")}">${I.slow}Lento</button><button class="tool" data-act="say" data-say="${esc(text)}" data-rate="0.95">${I.play}${label || t("Escuchar", "Ascolta")}</button></div>`;

  /* ---------- Bloques de ejercicio ---------- */
  const SCRIPTS = {};
  const ROLES = {};

  // Tabla de consulta (intros): { head: [...], rows: [[...], ...] }
  const refTable = (t) =>
    `<div class="ref-wrap"><table class="ref" lang="it"><thead><tr>${t.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.rows
      .map((r) => `<tr>${r.map((c, i) => (i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`)).join("")}</tr>`)
      .join("")}</tbody></table></div>`;

  function renderBlock(b, bi, scope, unit) {
    const k = `${scope}.b${bi}`;
    let body = "";
    switch (b.kind) {
      case "intro":
        body = `<div class="intro">${(b.text || []).map((p) => `<p>${esc(p)}</p>`).join("")}${
          b.examples
            ? `<ul class="examples">${b.examples
                .map(
                  (e) =>
                    `<li><span class="ex-text"><span class="it" lang="it">${esc(e.it)}</span>${e.es ? `<span class="es">${esc(e.es)}</span>` : ""}</span><button class="tool mini" data-act="say" data-say="${esc(e.it)}" data-rate="0.85" aria-label="${t("Escuchar", "Ascolta")}: ${esc(e.it)}">${I.play}</button></li>`,
                )
                .join("")}</ul>`
            : ""
        }${b.table ? refTable(b.table) : ""}</div>`;
        break;
      case "table":
        body = `<div class="conj">${b.rows
          .map(
            (r, ri) =>
              `<fieldset class="conj-row"><legend lang="it">${esc(r[0])}</legend><div class="conj-grid">${b.cols
                .map(
                  (c, ci) =>
                    `<label class="conj-cell"><span class="lab" lang="it">${esc(c)}</span>${
                      r[ci + 1] ? `<span class="given" lang="it">${esc(r[ci + 1])}</span>` : inp(`${k}.r${ri}.c${ci}`)
                    }</label>`,
                )
                .join("")}</div></fieldset>`,
          )
          .join("")}</div>`;
        break;
      case "reading":
        body = `<div class="reading" lang="it">${b.text.map((p) => `<p>${esc(p)}</p>`).join("")}</div>${sayBtns(b.text.join(" "), t("Escuchar texto", "Ascolta il testo"))}
        <div class="items">${b.questions
          .map((q, i) => `<label class="item"><span class="prompt" lang="it">${esc(q)}</span>${ta(`${k}.q${i}`, 2, SR ? t("Responde hablando o escribiendo", "Rispondi parlando o scrivendo") : "", true)}</label>`)
          .join("")}${b.translate ? `<label class="item"><span class="prompt">${esc(b.translate)}</span>${ta(`${k}.tr`, 8, "")}</label>` : ""}</div>`;
        break;
      case "vocab": {
        const fromEs = b.from === "es";
        body = `<div class="items cols">${b.items
          .map(
            (w, i) =>
              `<label class="item pair"><span class="prompt" lang="${fromEs ? "es" : "it"}">${esc(w)}</span>${inp(`${k}.i${i}`, b.placeholder || (fromEs ? "in italiano" : t("traducción", "significato")), "in", fromEs ? "it" : "es")}</label>`,
          )
          .join("")}</div>`;
        break;
      }
      case "fill":
        body = `<div class="items">${b.items
          .map((s, i) => {
            const parts = s.split("___");
            let html = esc(parts[0]);
            for (let g = 1; g < parts.length; g++) {
              const short = /[A-Za-zÀ-ú]$/.test(parts[g - 1]);
              html += inp(`${k}.i${i}.g${g - 1}`, "", "in gap" + (short ? " short" : "")) + esc(parts[g]);
            }
            return `<div class="item"><div class="prompt fill-line" lang="it">${html}</div></div>`;
          })
          .join("")}</div>`;
        break;
      case "translate":
        body = `<div class="items">${b.items
          .map((s, i) => `<label class="item"><span class="prompt" lang="${b.from || "es"}">${esc(s)}</span>${inp(`${k}.i${i}`, b.placeholder || "in italiano")}</label>`)
          .join("")}</div>`;
        break;
      case "shadow":
        body = `<div class="items">${b.items
          .map(
            (s, i) => `<div class="shadow-row"><div class="line"><span class="text" lang="it">${esc(s)}</span>${sayBtns(s)}</div>${ta(
              `${k}.i${i}`,
              1,
              SR ? t("Pulsa el micro y repite: aquí verás lo que ha entendido", "Premi il microfono e ripeti: qui vedrai che cosa ha capito") : t("Repite en voz alta", "Ripeti ad alta voce"),
              true,
            )}</div>`,
          )
          .join("")}</div>`;
        break;
      case "speak":
        body = `<div class="items">${b.items
          .map(
            (s, i) => `<div class="shadow-row"><div class="line"><span class="text" lang="it">${esc(s)}</span>${sayBtns(s)}</div>${ta(
              `${k}.i${i}`,
              2,
              SR ? t("Responde hablando (micro) o escribiendo", "Rispondi parlando (microfono) o scrivendo") : t("Responde en voz alta y anótalo", "Rispondi ad alta voce e annotalo"),
              true,
            )}</div>`,
          )
          .join("")}</div>`;
        break;
      case "listen":
        SCRIPTS[k] = b.script;
        body = `<div class="player"><div class="tools"><button class="tool" data-act="script" data-bk="${k}" data-rate="0.75">${I.slow}Lento</button><button class="tool" data-act="script" data-bk="${k}" data-rate="0.95">${I.play}${t("Escuchar diálogo", "Ascolta il dialogo")}</button></div><button class="tool" data-act="toggle" data-target="${k}.script" aria-expanded="false">${I.eye}${t("Transcripción", "Trascrizione")}</button></div>
        <div class="script" id="${k}.script" hidden lang="it">${b.script.map((l) => `<p><b>${esc(l.who)}</b><span>${esc(l.text)}</span></p>`).join("")}</div>
        <div class="items">${b.questions
          .map(
            (q, i) => `<div class="shadow-row"><div class="line"><span class="text" lang="it">${esc(q)}</span>${sayBtns(q, t("Pregunta", "Domanda"))}</div>${ta(
              `${k}.q${i}`,
              2,
              SR ? t("Responde hablando o escribiendo", "Rispondi parlando o scrivendo") : t("Responde en voz alta y anótalo", "Rispondi ad alta voce e annotalo"),
              true,
            )}</div>`,
          )
          .join("")}</div>`;
        break;
      case "roleplay":
        ROLES[k] = { b, unit };
        body = `<ol class="steps-list">${b.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        <div class="items">${ta(`${k}.i0`, 6, SR ? t("Tu parte del diálogo, hablando o escribiendo", "La tua parte del dialogo, parlando o scrivendo") : t("Tu parte del diálogo", "La tua parte del dialogo"), true)}</div>
        <div class="tools" style="margin-top:12px"><button class="tool" data-act="roleprompt" data-bk="${k}">${I.chat}${t("Practicar con la IA", "Esercitati con l'IA")}</button></div>`;
        break;
      case "write":
        body = `<div class="items">${b.items
          .map((s, i) => `<label class="item"><span class="prompt">${esc(s)}</span>${ta(`${k}.i${i}`, b.rows || 4, "")}</label>`)
          .join("")}</div>`;
        break;
      case "dictation":
        body = `<div class="items cols">${b.items
          .map(
            (s, i) => `<div class="item"><div class="line" style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span class="prompt"></span>${sayBtns(s, t("Oír", "Ascolta"))}</div>${inp(`${k}.i${i}`, b.placeholder || t("escribe lo que oyes", "scrivi quello che senti"))}</div>`,
          )
          .join("")}</div>`;
        break;
      case "media":
        body = `<div class="media-list">${b.items
          .map((m) => `<article class="media"><div class="meta"><span class="badge">${esc(m.type)}</span><span class="small muted">${esc(m.where)}</span></div><h4>${esc(m.title)}</h4><p>${esc(m.why)}</p></article>`)
          .join("")}</div>`;
        break;
    }
    return `<section class="block${b.kind === "intro" ? " intro" : ""}" style="--i:${bi + 1}">${b.kind === "intro" ? "" : `<span class="mk-bn" aria-hidden="true">${pad(bi + 1)}</span>`}${blockHead(b)}${body}</section>`;
  }

  /* ---------- Texto para corregir con IA ---------- */
  function correctionText(unit, label, blocks, scope, isExam) {
    const out = [];
    if (IT) {
      out.push(
        unit.levelExam
          ? `Sei il mio insegnante di italiano ed esaminatore ufficiale (stile CILS / CELI / PLIDA). Correggi il mio esame di livello ${unit.level} (${unit.minutes} minuti).`
          : `Sei il mio insegnante di italiano. Correggi le mie risposte di un quaderno di esercizi (livello ${unit.level}, Unità ${unit.n} «${unit.title}», ${label}).`,
        `Per ogni risposta: ✅ se è corretta, ❌ se non lo è, con la forma corretta e una breve spiegazione in italiano semplice. Le risposte orali sono trascritte dal microfono: se la trascrizione non corrisponde, può essere un problema di pronuncia; segnalamelo.`,
        unit.levelExam
          ? `L'esame ha ${unit.parts.length} parti e ognuna vale ${Math.round(100 / unit.parts.length)} punti. Dammi il voto di ogni parte e il voto totale su 100. Superato: 70 in totale e almeno metà dei punti in ogni parte. Alla fine indicami le 5 cose più importanti da ripassare.`
          : isExam
            ? `È l'esame dell'unità: alla fine dammi un voto su 100 (superato con 70) e le 3 cose più importanti da ripassare.`
            : `Alla fine, dimmi in 2-3 righe che cosa devo ripassare.`,
        "",
      );
    } else if (unit.levelExam)
      out.push(
        `Eres mi profesor de italiano y examinador oficial (estilo CILS / CELI / PLIDA). Corrige mi examen de nivel ${unit.level} (${unit.minutes} minutos).`,
        `Para cada respuesta: ✅ si es correcta, ❌ si no, con la forma correcta y una explicación breve en español. Las respuestas orales vienen transcritas por el micrófono.`,
        `El examen tiene ${unit.parts.length} partes y cada una vale ${Math.round(100 / unit.parts.length)} puntos. Dame la nota de cada parte y la nota total sobre 100. Aprobado: 70 en total y al menos la mitad de los puntos en cada parte. Termina con las 5 cosas que más tengo que repasar antes de pasar al nivel siguiente.`,
        "",
      );
    else out.push(
      `Eres mi profesor de italiano. Corrige mis respuestas de un workbook (nivel ${unit.level}, Unidad ${unit.n} «${unit.title}», ${label}).`,
      `Para cada respuesta: ✅ si es correcta, ❌ si no, con la forma correcta y una explicación breve en español. Las respuestas orales vienen transcritas por el micrófono: si la transcripción no coincide con lo esperado, puede ser un fallo de pronunciación; avísame.`,
      isExam
        ? `Es el examen de la unidad: al final dame una nota sobre 100 (aprobado con 70) y las 3 cosas que más tengo que repasar.`
        : `Al final, dime en 2-3 líneas qué tengo que repasar.`,
      "",
    );
    const a = (key) => val(key).trim() || t("(sin responder)", "(senza risposta)");
    blocks.forEach((b, bi) => {
      const k = `${scope}.b${bi}`;
      if (b.kind === "media" || b.kind === "intro") return;
      out.push(`## ${b.title}`, b.hint ? `${t("Consigna", "Consegna")}: ${b.hint}` : "");
      switch (b.kind) {
        case "table":
          b.rows.forEach((r, ri) =>
            out.push(`${r[0]}: ` + b.cols.map((c, ci) => `${c} ${r[ci + 1] ? `${r[ci + 1]} (dado)` : a(`${k}.r${ri}.c${ci}`)}`).join(" · ")),
          );
          break;
        case "reading":
          out.push(t("Texto:", "Testo:"), ...b.text.map((p) => `   ${p}`));
          b.questions.forEach((q, i) => out.push(`${i + 1}. ${q}`, `   ${t("Mi respuesta", "La mia risposta")}: ${a(`${k}.q${i}`)}`));
          if (b.translate) out.push(`${t("Mi traducción del texto", "Il mio riassunto del testo")}:`, a(`${k}.tr`));
          break;
        case "vocab":
          b.items.forEach((w, i) => out.push(`${i + 1}. ${w} → ${a(`${k}.i${i}`)}`));
          break;
        case "fill":
          b.items.forEach((s, i) => {
            const parts = s.split("___");
            let line = parts[0];
            for (let g = 1; g < parts.length; g++) line += `[${val(`${k}.i${i}.g${g - 1}`).trim() || "…"}]` + parts[g];
            out.push(`${i + 1}. ${line}`);
          });
          break;
        case "translate":
          b.items.forEach((s, i) => out.push(`${i + 1}. ${s}`, `   → ${a(`${k}.i${i}`)}`));
          break;
        case "shadow":
          b.items.forEach((s, i) => out.push(`${i + 1}. ${t("Modelo", "Modello")}: ${s}`, `   ${t("El micro entendió", "Il microfono ha capito")}: ${a(`${k}.i${i}`)}`));
          break;
        case "speak":
          b.items.forEach((s, i) => out.push(`${i + 1}. ${s}`, `   ${t("Mi respuesta", "La mia risposta")}: ${a(`${k}.i${i}`)}`));
          break;
        case "listen":
          out.push(t("Transcripción del audio:", "Trascrizione dell'audio:"));
          b.script.forEach((l) => out.push(`   ${l.who}: ${l.text}`));
          b.questions.forEach((q, i) => out.push(`${i + 1}. ${q}`, `   ${t("Mi respuesta", "La mia risposta")}: ${a(`${k}.q${i}`)}`));
          break;
        case "roleplay":
          out.push(t("Pasos:", "Passi:"), ...b.steps.map((s, i) => `   ${i + 1}. ${s}`), t("Mi diálogo:", "Il mio dialogo:"), a(`${k}.i0`));
          break;
        case "write":
          b.items.forEach((s, i) => out.push(s, a(`${k}.i${i}`)));
          break;
        case "dictation":
          b.items.forEach((s, i) => out.push(`${i + 1}. ${t("Dictado", "Dettato")}: «${s}» · ${t("Lo que escribí", "Ho scritto")}: ${a(`${k}.i${i}`)}`));
          break;
      }
      out.push("");
    });
    return out.filter((l, i, arr) => !(l === "" && arr[i - 1] === "")).join("\n");
  }

  function rolePrompt({ b, unit }) {
    if (isIt(unit.level))
      return [
        `Facciamo un gioco di ruolo in italiano. Il mio livello è ${unit.level} (Unità ${unit.n}: «${unit.title}»).`,
        `Situazione: ${b.title}. ${b.hint}`,
        `Che cosa devo fare io:`,
        ...b.steps.map((s, i) => `${i + 1}. ${s}`),
        ``,
        `Tu sei l'altra persona. Parla solo in italiano, in modo naturale per il mio livello, un intervento alla volta, e aspetta la mia risposta. Non correggermi durante il dialogo. Alla fine correggi i miei errori in italiano e proponi una versione migliore delle mie frasi.`,
      ].join("\n");
    return [
      `Hagamos un juego de rol en italiano. Mi nivel es ${unit.level} (Unidad ${unit.n}: «${unit.title}»).`,
      `Situación: ${b.title}. ${b.hint}`,
      `Lo que yo tengo que hacer:`,
      ...b.steps.map((s, i) => `${i + 1}. ${s}`),
      ``,
      `Tú eres la otra persona. Habla solo en italiano, con frases cortas y sencillas, una intervención cada vez, y espera mi respuesta. No me corrijas durante el diálogo. Cuando terminemos, corrige mis errores en español y dame una versión mejorada de mis frases.`,
    ].join("\n");
  }

  async function copy(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const t = document.createElement("textarea");
      t.value = text;
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    toast(msg);
  }


  /* ---------- Moka: la mascota ---------- */
  // Un único personaje SVG por piezas (ojos, brazos, piernas, tapa y depósito) para poder animar cada estado.
  // Prioridad: carga o transición > celebración > reposo. Nunca dos a la vez. Con «reducir movimiento» se queda quieta.
  let mokaUid = 0;
  const MK_G = "#b9bbbd", MK_K = "#141414";
  const MK_TANK = "M152 296 H298 L326 372 Q330 386 316 386 H134 Q120 386 124 372 Z";
  function mokaSvg(cls = "", label = "Moka") {
    const id = `mk${++mokaUid}`;
    return `<svg class="moka ${cls}" viewBox="62 34 312 388" role="img" aria-label="${label}" fill="none" stroke="${MK_K}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"><g class="m-leg m-leg-l"><path d="M182 386 V411 H166"/></g><g class="m-leg m-leg-r"><path d="M264 386 V411 H280"/></g><g class="m-body"><g class="m-arm m-arm-l"><path d="M156 296 Q128 300 110 321"/><circle cx="109" cy="322" r="7" fill="${MK_K}" stroke="none"/></g><g class="m-arm m-arm-r"><path d="M296 296 Q324 300 340 321"/><circle cx="341" cy="322" r="7" fill="${MK_K}" stroke="none"/></g><path d="M318 160 Q340 152 354 168 Q368 190 350 232 Q332 266 300 280 Z" fill="${MK_G}"/><path d="M322 178 Q336 186 330 214 Q324 240 306 262" stroke-width="12"/><path d="M104 146 H326 L300 293 H152 L112 194 Q102 172 78 160 Q76 150 104 146 Z" fill="${MK_G}"/><g class="m-lid"><path d="M214 104 Q196 82 198 64 Q202 47 216 47 Q232 48 236 64 Q236 82 222 104 Z" fill="${MK_G}"/><path d="M120 134 Q140 108 218 106 Q300 108 330 132 Z" fill="${MK_G}"/><path d="M116 138 H334"/></g><clipPath id="${id}"><path d="${MK_TANK}"/></clipPath><path d="${MK_TANK}" fill="${MK_G}" stroke="none"/><g clip-path="url(#${id})"><rect class="m-fill" x="118" y="290" width="214" height="100" fill="#e8742a" stroke="none"/></g><path d="M178 300 L168 382 M272 300 L282 382" stroke-width="8"/><path d="${MK_TANK}"/><g class="m-eyes" fill="${MK_K}" stroke="none"><circle cx="188" cy="215" r="7.5"/><circle cx="262" cy="215" r="7.5"/></g><path d="M209 238 Q225 252 241 238" stroke-width="7"/></g></svg>`;
  }
  const Moka = {
    lastKey: null,
    pendingParty: false,
    el() {
      return $app.querySelector(".moka");
    },
    play(state, ms) {
      const m = this.el();
      if (!m) return;
      m.classList.remove("is-run", "is-party");
      void m.getBoundingClientRect(); // reinicia la animación
      m.classList.add(state);
      clearTimeout(this.t);
      this.t = setTimeout(() => m.classList.remove(state), ms);
    },
    // Transición: al abrir una unidad o cambiar de sección corre en el sitio y vuelve al reposo.
    arrive(parts) {
      const key = parts[0] === "u" ? `u${parts[1]}/${parts[2] || ""}/${parts[2] === "p" ? parts[3] : ""}` : parts.join("/");
      const changed = this.lastKey !== null && key !== this.lastKey;
      this.lastKey = key;
      if (this.pendingParty || Boot.active) return; // la carga y la celebración tienen prioridad sobre la transición
      if (changed) this.play("is-run", 1700);
    },
    // Celebración: una sola vez por logro (unidad o nivel superados).
    celebrateOnce(key) {
      S.cele = S.cele || {};
      if (S.cele[key]) return false;
      S.cele[key] = Date.now();
      save();
      this.play("is-party", 1700);
      return true;
    },
  };

  /* ---------- Pantalla de carga con progreso real ---------- */
  // Solo aparece si la carga tarda más de 250 ms. El depósito se llena con el porcentaje real de bytes recibidos;
  // si el servidor no da un tamaño fiable (o llega comprimido), Moka espera en reposo con un mensaje y sin porcentaje.
  const Loader = {
    node: null,
    show(instant) {
      if (!this.node) {
        this.node = document.createElement("div");
        this.node.className = "mk-loader";
        this.node.setAttribute("role", "status");
        this.node.innerHTML = `<div class="mk-steam" aria-hidden="true"><i></i><i></i><i></i></div><div class="mk-loader-moka">${mokaSvg("moka-load", "Moka preparando la página")}</div><p class="mk-loader-word" aria-hidden="true">Moka</p><p class="mk-loader-pct" hidden></p><p class="mk-loader-msg">Preparando el café…</p><p class="mk-loader-foot">Un café, una unidad</p>`;
        document.body.appendChild(this.node);
      }
      this.set(null);
      this.node.hidden = false;
      // Al abrir la app aparece ya opaca (sin fundido) para que no se vea la página por detrás.
      if (instant) this.node.classList.add("is-on");
      else requestAnimationFrame(() => this.node.classList.add("is-on"));
    },
    set(frac) {
      if (!this.node) return;
      const pct = this.node.querySelector(".mk-loader-pct");
      const m = this.node.querySelector(".moka");
      if (frac == null) {
        pct.hidden = true;
        m.style.setProperty("--p", 0);
        this.node.querySelector(".mk-loader-msg").textContent = "Preparando el café…";
        return;
      }
      pct.hidden = false;
      pct.textContent = `${Math.round(frac * 100)} %`;
      m.style.setProperty("--p", frac);
      this.node.querySelector(".mk-loader-msg").textContent = frac >= 1 ? "¡Listo!" : "Preparando el café…";
    },
    hide(hold) {
      if (!this.node) return Promise.resolve();
      return new Promise((r) =>
        setTimeout(() => {
          this.node.classList.remove("is-on");
          setTimeout(() => {
            this.node.hidden = true;
            r();
          }, 220);
        }, hold),
      );
    },
  };
  // Al abrir la app la carga dura al menos 2 s: el porcentaje avanza con el tiempo pero nunca por delante
  // del progreso real (tipografía + primera pantalla), así que si algo tarda, espera.
  const Boot = {
    active: false,
    font: 0,
    view: 0,
    MIN: 2000,
    start() {
      this.active = true;
      this.t0 = performance.now();
      Loader.show(true);
      const fontDone = () => (this.font = 1);
      // Sin conexión la fuente puede no llegar nunca: a los 2,5 s se da por hecha (se usa la del sistema).
      this.fonts = Promise.race([document.fonts ? document.fonts.load('900 40px "Archivo"') : Promise.resolve(), new Promise((r) => setTimeout(r, 2500))]).then(fontDone, fontDone);
      const tick = () => {
        if (!this.active) return;
        this.update();
        this.raf = requestAnimationFrame(tick);
      };
      tick();
    },
    update() {
      if (!this.active) return;
      const t = Math.min(1, (performance.now() - this.t0) / this.MIN);
      Loader.set(Math.min((this.font + this.view) / 2, t));
    },
    async viewReady() {
      this.view = 1;
      await this.fonts;
      const left = this.MIN - (performance.now() - this.t0);
      if (left > 0) await new Promise((r) => setTimeout(r, left));
      cancelAnimationFrame(this.raf);
      Loader.set(1);
      await Loader.hide(450); // al 100 % se mantiene un instante y aparece la página
      this.active = false;
    },
  };
  async function loadScript(url) {
    let shown = false;
    let measurable = false;
    const timer = Boot.active
      ? 0
      : setTimeout(() => {
          shown = true;
          Loader.show();
        }, 250);
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(res.status);
      const total = +res.headers.get("content-length") || 0;
      measurable = !!total && !res.headers.get("content-encoding") && !!res.body;
      let text;
      if (measurable) {
        const reader = res.body.getReader();
        const chunks = [];
        let got = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          got += value.length;
          if (shown) Loader.set(Math.min(1, got / total));
          else if (Boot.active) {
            Boot.view = Math.min(0.95, got / total);
            Boot.update();
          }
        }
        text = new TextDecoder().decode(await new Blob(chunks).arrayBuffer());
      } else text = await res.text();
      const s = document.createElement("script");
      s.textContent = text;
      document.head.appendChild(s);
    } catch (_) {
      /* sin conexión o error: la vista decide (vuelve al inicio) */
    } finally {
      clearTimeout(timer);
      if (shown) {
        if (measurable) Loader.set(1);
        await Loader.hide(measurable ? 450 : 0); // al 100 % se mantiene un instante y aparece la página
      }
    }
  }

  /* ---------- Carga de unidades ---------- */
  window.UNITS = window.UNITS || {};
  function loadUnit(n) {
    if (window.UNITS[n]) return Promise.resolve(window.UNITS[n]);
    const meta = C.units.find((u) => u.n === n);
    if (!meta || !meta.ready) return Promise.resolve(null);
    // sin caché: así ves siempre la última versión del contenido
    return loadScript(`../content/units/u${pad(n)}.js?t=${Date.now()}`).then(() => window.UNITS[n] || null);
  }

  /* ---------- Examen de nivel ---------- */
  window.LEVELS = window.LEVELS || {};
  function loadLevel(id) {
    if (window.LEVELS[id]) return Promise.resolve(window.LEVELS[id]);
    const lv = C.levels.find((l) => l.id === id);
    if (!lv || !lv.exam || !lv.exam.ready) return Promise.resolve(null);
    return loadScript(`../content/levels/${id.toLowerCase()}.js?t=${Date.now()}`).then(() => window.LEVELS[id] || null);
  }
  // El examen de nivel se reparte en partes; los bloques se numeran seguidos para que las claves no se repitan.
  function levelUnit(L) {
    const blocks = [];
    const parts = L.parts.map((p) => {
      const start = blocks.length;
      blocks.push(...p.blocks);
      return { ...p, start };
    });
    return { levelExam: true, level: L.id, n: L.id, title: L.title, minutes: L.minutes, parts, blocks, exam: { hint: L.hint, blocks } };
  }
  function viewLevel(L) {
    const U = levelUnit(L);
    const scope = `lv${L.id}`;
    const ex = (S.levelExam || {})[L.id];
    document.title = L.title;
    $app.innerHTML = `${topbar(L.title, `${L.minutes} ${t("minutos", "minuti")} · ${L.parts.length} ${t("partes", "parti")}`, "#/")}
      <div class="page-head mk-head"><div><h2 class="display">${esc(L.title)}</h2><p>${esc(L.hint)}</p></div><div class="mk-mini">${mokaSvg("moka-level")}</div></div>
      ${supportNotice(U.blocks)}
      <div class="enter">${U.parts
        .map(
          (p, pi) =>
            `<h2 class="section-title">${pi + 1}. ${esc(p.title)}<span>${p.minutes} min</span></h2>${p.blocks
              .map((b, j) => renderBlock(b, p.start + j, scope, U))
              .join("")}`,
        )
        .join("")}</div>
      <div class="page-foot">
        <div class="row"><button class="btn-quiet" data-act="correct" data-scope="${scope}">${I.copy}${t("Copiar para corregir", "Copia per la correzione")}</button><a class="btn-quiet" href="#/level/${L.id}/print">${I.print}PDF</a></div>
        <section class="block">
          <h3>${t("Tu nota", "Il tuo voto")}</h3>
          <p class="hint">${t("Pega el examen en la IA y apunta aquí la nota total que te dé. Aprobado: 70, con al menos la mitad en cada parte.", "Incolla l'esame nell'IA e annota qui il voto totale. Superato: 70, con almeno la metà dei punti in ogni parte.")}</p>
          <div class="score">
            <input class="in" id="score" type="number" inputmode="numeric" min="0" max="100" value="${ex ? ex.score : ""}" placeholder="0–100" aria-label="Nota sobre 100" />
            <button class="btn-quiet" data-act="score" data-level="${L.id}">${t("Guardar nota", "Salva il voto")}</button>
            ${ex ? `<span class="badge" ${ex.score >= 70 ? 'data-state="watch"' : 'data-state="warn"'}>${ex.score >= 70 ? t("Aprobado", "Superato") : t("Toca repetir", "Da ripetere")} · ${ex.score}/100</span>` : ""}
          </div>
        </section>
      </div>`;
  }
  function viewLevelPrint(L) {
    const U = levelUnit(L);
    const scope = `lv${L.id}`;
    const blank = BLANK || !!S.printBlank;
    printingBlank = blank;
    const sections = U.parts.map(
      (p, pi) =>
        `<section class="pg"><div class="pg-title"><h2>${pi + 1}. ${esc(p.title)}</h2><span>${p.minutes} min · ______ / ${Math.round(100 / U.parts.length)}</span></div>${p.blocks
          .map((b, j) => printBlock(b, p.start + j, scope))
          .join("")}</section>`,
    );
    const appendix = U.blocks
      .filter((b) => b.kind === "listen" || b.kind === "dictation")
      .map((b) =>
        b.kind === "listen"
          ? `<div class="pblock pscript"><h3>${esc(b.title)}</h3>${b.script.map((l) => `<p><b>${esc(l.who)}:</b> ${esc(l.text)}</p>`).join("")}</div>`
          : `<div class="pblock pscript"><h3>${esc(b.title)}</h3><p>${b.items.map(esc).join(" · ")}</p></div>`,
      )
      .join("");
    printingBlank = false;
    $app.innerHTML = `${printBar(`#/level/${L.id}`, blank)}
      <article class="paper" lang="it">
        <div class="cover"><p>Moka · Italiano ${esc(L.id)}</p><h1>${esc(L.title)}</h1><p>${esc(L.hint)}</p><p style="font-size:.875rem">Nombre: ______________________ &nbsp; Fecha: ____________ &nbsp; Voto: ______ / 100</p></div>
        ${sections.join("")}
        ${appendix ? `<section class="pg"><div class="pg-title"><h2>Transcripciones</h2><span>Para quien corrige</span></div>${appendix}</section>` : ""}
      </article>`;    setupInk(scope, blank);
  }

  /* ---------- Progreso ---------- */
  const doneCount = (n) => Array.from({ length: 10 }, (_, i) => S.done[`u${n}.p${i + 1}`]).filter(Boolean).length;
  const examPassed = (n) => (S.exam[n]?.score ?? -1) >= 70;
  function nextStep(n, total = 10) {
    for (let i = 1; i <= total; i++) if (!S.done[`u${n}.p${i}`]) return { href: `#/u/${n}/p/${i}`, label: `${t("Página", "Pagina")} ${i}` };
    return { href: `#/u/${n}/exam`, label: t("Examen", "Esame") };
  }

  /* Barra de la vista PDF: volver, qué imprimir y guardar. Compacta para el móvil. */
  function printBar(back, blank) {
    const inkTools = INK.on
      ? `<div class="ink-tools" role="toolbar" aria-label="${t("Lápiz", "Matita")}">
          ${INK_COLORS.map((c) => `<button type="button" class="ink-color" data-act="inkcolor" data-color="${c.v}" style="--c:${c.v}" aria-label="${c.n}" aria-pressed="${!INK.eraser && INK.color === c.v}"></button>`).join("")}
          <button type="button" class="ink-tool" data-act="inkeraser" aria-pressed="${INK.eraser}" aria-label="${t("Goma", "Gomma")}">${I.eraser}</button>
          <button type="button" class="ink-tool" data-act="inkundo" aria-label="${t("Deshacer", "Annulla")}">${I.undo}</button>
          <button type="button" class="ink-tool" data-act="inkfinger" aria-pressed="${INK.finger}" aria-label="${t("Dibujar también con el dedo", "Disegna anche con il dito")}">${I.hand}</button>
          <button type="button" class="ink-clear" data-act="inkclear">${t("Borrar trazos", "Cancella tratti")}</button>
          <p class="ink-hint">${t("Escribe con el Apple Pencil o el ratón; con el dedo te desplazas (o activa la mano para dibujar con él). Al terminar, pulsa PDF y adjunta el archivo en ChatGPT, Claude o Gemini.", "Scrivi con l'Apple Pencil o il mouse; con il dito scorri (o attiva la mano per disegnare). Alla fine premi PDF e allega il file in ChatGPT, Claude o Gemini.")}</p>
        </div>`
      : "";
    return `<div class="print-bar">
      <a class="icon-btn" href="${back}" aria-label="${t("Volver", "Indietro")}">${I.left}</a>
      <div class="seg" role="group" aria-label="${t("Qué imprimir", "Che cosa stampare")}"><button type="button" data-act="printmode" data-mode="answers" aria-pressed="${!blank}">${t("Respuestas", "Con risposte")}</button><button type="button" data-act="printmode" data-mode="blank" aria-pressed="${blank}">${t("En blanco", "In bianco")}</button></div>
      <button type="button" class="icon-btn ink-toggle" data-act="ink" aria-pressed="${INK.on}" aria-label="${t("Lápiz", "Matita")}">${I.pen}</button>
      <button class="btn-primary print-btn" data-act="print" aria-label="${t("Guardar como PDF", "Salva come PDF")}">${I.print}<span>PDF</span></button>
      ${inkTools}
    </div>`;
  }

  /* ---------- Lápiz digital sobre la hoja (vista PDF) ----------
     La hoja se pinta a ancho A4 (como al imprimir) para que los trazos caigan en el mismo sitio en
     pantalla y en el PDF. Cada página del cuaderno guarda sus trazos en coordenadas propias. */
  const SVGNS = "http://www.w3.org/2000/svg";
  const INK_COLORS = [
    { v: "#1f3fbf", n: "Azul" },
    { v: "#111111", n: "Negro" },
    { v: "#c8281e", n: "Rojo" },
  ];
  const INK = { on: false, color: INK_COLORS[0].v, eraser: false, finger: false, undo: [], cur: null };
  S.ink = S.ink || {};

  function inkPath(pts) {
    if (pts.length < 4) return `M${pts[0]} ${pts[1]}l0.01 0`;
    let d = `M${pts[0]} ${pts[1]}`;
    for (let i = 2; i < pts.length - 2; i += 2) {
      const mx = (pts[i] + pts[i + 2]) / 2, my = (pts[i + 1] + pts[i + 3]) / 2;
      d += `Q${pts[i]} ${pts[i + 1]} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    return d + `L${pts[pts.length - 2]} ${pts[pts.length - 1]}`;
  }
  function inkDraw(svg) {
    const strokes = (S.ink || {})[svg.dataset.key] || [];
    svg.innerHTML = strokes.map((st) => `<path d="${inkPath(st.p)}" stroke="${st.c}" stroke-width="${st.w}"/>`).join("");
  }
  function inkSize(svg) {
    const w = svg.parentNode.offsetWidth, h = svg.parentNode.offsetHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  }
  function fitPaper() {
    const fit = $app.querySelector(".paper-fit");
    const paper = fit && fit.querySelector(".paper.a4");
    if (!paper) return;
    paper.style.transform = "";
    const scale = Math.min(1, fit.clientWidth / paper.offsetWidth);
    paper.style.transform = scale < 1 ? `scale(${scale})` : "";
    paper.style.marginLeft = scale < 1 ? "0" : "";
    fit.style.height = scale < 1 ? `${paper.offsetHeight * scale + 32}px` : "";
  }
  addEventListener("resize", () => fitPaper());

  function setupInk(scope, blank) {
    S.ink = S.ink || {};
    const paper = $app.querySelector(".paper");
    if (!paper) return;
    const prefix = `${scope}|${blank ? "b" : "a"}|`;
    const has = Object.keys(S.ink).some((k) => k.startsWith(prefix) && S.ink[k].length);
    document.body.classList.toggle("inking", INK.on);
    document.body.classList.toggle("ink-finger", INK.on && INK.finger);
    if (!INK.on && !has) return;
    paper.classList.add("a4");
    const fit = document.createElement("div");
    fit.className = "paper-fit";
    paper.before(fit);
    fit.appendChild(paper);
    paper.querySelectorAll("section.pg").forEach((sec, i) => {
      const wrap = document.createElement("div");
      wrap.className = "pg-ink";
      while (sec.firstChild) wrap.appendChild(sec.firstChild);
      sec.appendChild(wrap);
      const svg = document.createElementNS(SVGNS, "svg");
      svg.setAttribute("class", "ink");
      svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
      svg.dataset.key = prefix + i;
      wrap.appendChild(svg);
      inkSize(svg);
      inkDraw(svg);
      if (window.ResizeObserver) new ResizeObserver(() => inkSize(svg)).observe(wrap);
    });
    fitPaper();
    if (window.ResizeObserver) new ResizeObserver(() => fitPaper()).observe(paper);
  }

  function inkPoint(svg, e) {
    const r = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    const k = vb && vb.width ? vb.width / r.width : 1;
    return [Math.round((e.clientX - r.left) * k * 10) / 10, Math.round((e.clientY - r.top) * k * 10) / 10];
  }
  function inkErase(svg, x, y) {
    const key = svg.dataset.key;
    const list = S.ink[key] || [];
    const keep = list.filter((st) => {
      for (let i = 0; i < st.p.length; i += 2) if (Math.hypot(st.p[i] - x, st.p[i + 1] - y) < 12) return false;
      return true;
    });
    if (keep.length !== list.length) {
      list.filter((st) => !keep.includes(st)).forEach((st) => INK.undo.push({ key, st, del: true }));
      S.ink[key] = keep;
      inkDraw(svg);
      save();
    }
  }
  $app.addEventListener("pointerdown", (e) => {
    const svg = e.target.closest && e.target.closest("svg.ink");
    if (!svg || !INK.on) return;
    if (e.pointerType === "touch" && !INK.finger) return; // el dedo desplaza la página
    e.preventDefault();
    try {
      svg.setPointerCapture(e.pointerId);
    } catch (_) {}
    const [x, y] = inkPoint(svg, e);
    if (INK.eraser) {
      INK.cur = { svg, erase: true, id: e.pointerId };
      return inkErase(svg, x, y);
    }
    const path = document.createElementNS(SVGNS, "path");
    path.setAttribute("stroke", INK.color);
    path.setAttribute("stroke-width", "2.2");
    svg.appendChild(path);
    INK.cur = { svg, path, id: e.pointerId, st: { c: INK.color, w: 2.2, p: [x, y] } };
    path.setAttribute("d", inkPath(INK.cur.st.p));
  });
  $app.addEventListener("pointermove", (e) => {
    const c = INK.cur;
    if (!c || c.id !== e.pointerId) return;
    e.preventDefault();
    const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of evs.length ? evs : [e]) {
      const [x, y] = inkPoint(c.svg, ev);
      if (c.erase) inkErase(c.svg, x, y);
      else {
        const p = c.st.p;
        if (Math.hypot(x - p[p.length - 2], y - p[p.length - 1]) >= 0.8) p.push(x, y);
      }
    }
    if (!c.erase) c.path.setAttribute("d", inkPath(c.st.p));
  });
  const inkEnd = (e) => {
    const c = INK.cur;
    if (!c || c.id !== e.pointerId) return;
    INK.cur = null;
    if (c.erase) return;
    const key = c.svg.dataset.key;
    (S.ink[key] = S.ink[key] || []).push(c.st);
    INK.undo.push({ key, st: c.st });
    save();
  };
  $app.addEventListener("pointerup", inkEnd);
  $app.addEventListener("pointercancel", inkEnd);
  // En el iPad, el Apple Pencil también desplaza la página: mientras dibujas, se bloquea.
  const stylusBlock = (e) => {
    if (!INK.on || !e.target.closest || !e.target.closest("svg.ink")) return;
    if ([...e.touches].some((tt) => tt.touchType === "stylus") || INK.finger) e.preventDefault();
  };
  document.addEventListener("touchstart", stylusBlock, { passive: false });
  document.addEventListener("touchmove", stylusBlock, { passive: false });

  function inkAction(act, btn) {
    if (act === "inkcolor") {
      INK.color = btn.dataset.color;
      INK.eraser = false;
    } else if (act === "inkeraser") INK.eraser = !INK.eraser;
    else if (act === "inkfinger") {
      INK.finger = !INK.finger;
      document.body.classList.toggle("ink-finger", INK.finger);
    } else if (act === "inkundo") {
      const last = INK.undo.pop();
      if (!last) return toast(t("No hay nada que deshacer", "Niente da annullare"));
      const list = (S.ink[last.key] = S.ink[last.key] || []);
      if (last.del) list.push(last.st);
      else list.splice(list.lastIndexOf(last.st), 1);
      const svg = $app.querySelector(`svg.ink[data-key="${last.key}"]`);
      if (svg) inkDraw(svg);
      save();
    }
    const bar = $app.querySelector(".ink-tools");
    if (bar) {
      bar.querySelectorAll(".ink-color").forEach((b) => b.setAttribute("aria-pressed", String(!INK.eraser && INK.color === b.dataset.color)));
      bar.querySelector('[data-act="inkeraser"]').setAttribute("aria-pressed", String(INK.eraser));
      bar.querySelector('[data-act="inkfinger"]').setAttribute("aria-pressed", String(INK.finger));
    }
  }

  /* ---------- Vistas ---------- */
  function topbar(title, sub, back, extra = "") {
    return `<header class="topbar"><div style="flex:1;min-width:0"><div class="head">${
      back ? `<a class="icon-btn" href="${back}" aria-label="Volver">${I.left}</a>` : ""
    }<div style="min-width:0"><h1>${esc(title)}</h1>${sub ? `<p class="sub">${esc(sub)}</p>` : ""}</div></div>${extra}</div></header>`;
  }

  function viewHome() {
    document.title = "Moka · Italiano";
    const started = C.units.filter((u) => u.ready).find((u) => !examPassed(u.n)) || C.units[0];
    const step = nextStep(started.n);
    const d = doneCount(started.n);
    const lead = `<div class="tile tile-lead" style="--i:0">
      <span class="small muted">${d ? "Sigues por aquí" : "Empieza aquí"}</span>
      <div class="tile-name lg">Unità ${started.n} · ${esc(started.title)}</div>
      <div class="figure lg num">${d}<span class="of">/ 10 páginas</span></div>
      <div class="progress" aria-hidden="true">${Array.from({ length: 11 }, (_, i) => `<span ${(i < 10 ? S.done[`u${started.n}.p${i + 1}`] : examPassed(started.n)) ? "data-done" : ""}></span>`).join("")}</div>
      <div class="row-actions"><a class="btn-primary" href="${step.href}">${d ? "Continuar" : "Empezar"} · ${step.label} ${I.right}</a><a class="btn-quiet" href="#/u/${started.n}">Ver unidad</a></div>
    </div>`;

    S.open = S.open || {};
    const levels = C.levels
      .map((lv) => {
        const lvUnits = C.units.filter((u) => u.level === lv.id);
        const passedN = lvUnits.filter((u) => examPassed(u.n)).length;
        const rows = lvUnits
          .map((u) => {
            const passed = examPassed(u.n);
            const dc = u.ready ? doneCount(u.n) : 0;
            const state = !u.ready
              ? `<span class="small muted">Pronto</span>`
              : passed
                ? `<span class="check" aria-label="Superada">${I.check}</span>`
                : `<span class="small muted num">${dc ? `${dc}/10` : ""}</span>`;
            return `<a class="unit-row ${u.ready ? "" : "locked"}" href="#/u/${u.n}" ${u.ready ? "" : 'aria-disabled="true" tabindex="-1"'}>
              <span class="n num">${pad(u.n)}</span><span class="unit-row-text"><span class="unit-row-name">${esc(u.title)}</span><span class="goal">${esc(u.goal)}</span></span>${state}</a>`;
          })
          .join("");
        const ex = lv.exam || {};
        const lvScore = (S.levelExam || {})[lv.id];
        const lvState = lvScore
          ? `<span class="badge" ${lvScore.score >= 70 ? 'data-state="watch"' : 'data-state="warn"'}>${lvScore.score}/100</span>`
          : "";
        const examRow = `<${ex.ready ? `a href="#/level/${lv.id}"` : 'div aria-disabled="true"'} class="unit-row exam-row ${ex.ready ? "" : "locked"}">
          <span class="n">${lv.id}</span><span class="unit-row-text"><span class="unit-row-name">Examen de nivel ${lv.id}</span><span class="goal">${ex.minutes || 60} minutos · todo el nivel</span></span>${lvState}</${ex.ready ? "a" : "div"}>`;
        const pct = Math.round((passedN / lvUnits.length) * 100);
        return `<details class="level-panel" data-level="${lv.id}" ${S.open[lv.id] ? "open" : ""}>
          <summary>
            <span class="level-text"><span class="level-name">Nivel ${pad(C.levels.indexOf(lv) + 1)} · ${esc(lv.name)}</span><span class="level-id">${lv.id}</span></span>
            <span class="level-count"><span class="num">${passedN} / ${lvUnits.length}</span><span class="level-bar" aria-hidden="true"><span style="width:${pct}%"></span></span></span>
            <span class="chev" aria-hidden="true">${I.right}</span>
          </summary>
          <div class="level-body">${rows}${examRow}</div>
        </details>`;
      })
      .join("");

    $app.innerHTML = `<header class="mk-hero"><p class="mk-meta"><span>Italiano · A1 → B2</span><span>${C.units.length} unidades</span></p><div class="mk-title"><h1>Moka</h1><div class="mk-perch">${mokaSvg("moka-home")}</div></div><p class="mk-lede">Un café, una unidad. Italiano de cero a B2, a tu ritmo.</p></header>
      <h2 class="section-title" id="temario">Temario<span>Toca un nivel para ver sus unidades</span></h2>
      <div class="levels enter">${levels}</div>
      <section class="settings" id="ajustes">
        <h2 class="title">Cómo se usa</h2>
        <p class="muted">Cada unidad tiene 10 páginas y un examen, unas 2 horas en total. Ritmo recomendado: 2 unidades por semana. Cada tema empieza con una explicación corta; lo demás, búscalo (diccionario, WordReference, IA). Al final de cada nivel hay un examen de nivel. Responde hablando con el micro siempre que puedas. Al terminar una página, pulsa <b class="white">Copiar para corregir</b> y pégalo en ChatGPT o Claude.</p>
        <label class="field">Voz italiana<select id="voice-select"></select></label>
        <div class="row" style="margin-top:8px"><button class="btn-quiet" data-act="voicetest">${I.play}Probar voces</button><span class="small muted" id="voice-count"></span></div>
        <p class="small muted" id="voice-tip" hidden>Tu sistema solo tiene voces italianas básicas y suenan robóticas. En Mac: Ajustes del Sistema → Accesibilidad → Contenido leído → Voz del sistema → Gestionar voces → Italiano, y descarga Federica (Premium), Emma (Premium) y Luca (Mejorada). En iPhone: Ajustes → Accesibilidad → Contenido leído → Voces → Italiano. Después recarga la página: cada personaje tendrá su propia voz.</p>
        <p class="small muted">${SR ? "Micrófono → texto: disponible en este navegador." : "Este navegador no transcribe la voz. Usa Chrome o Safari para responder hablando."}</p>
        <h2 class="title" style="margin-top:20px">Tu progreso</h2>
        <p class="muted">Se guarda solo en este dispositivo y en este navegador, sin cuentas ni servidores. El móvil y el ordenador no se sincronizan: si quieres pasar tu progreso de uno a otro, o no perderlo al cambiar de móvil, guarda una copia y cárgala en el otro.</p>
        <div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap"><button class="btn-quiet" data-act="backup">Guardar copia</button><button class="btn-quiet" data-act="restore">Cargar copia</button><input type="file" id="restore-file" accept="application/json,.json" hidden /></div>
        ${syncPanel()}
        ${standalone ? "" : `<p class="small muted" style="margin-top:12px"><b class="white">Instálalo en el móvil</b> para usarlo como una app y sin conexión. iPhone: ábrelo en Safari → Compartir → Añadir a pantalla de inicio. Android: ábrelo en Chrome → menú ⋮ → Instalar app.</p>`}
        <button class="btn-ghost danger" data-act="reset" style="width:auto;padding-left:0;margin-top:12px">Borrar todo el progreso</button>
      </section>
      <footer class="credits">Moka · un café, una unidad</footer>
      <nav class="mk-dock mk-tabs" aria-label="Secciones"><button type="button" class="mk-dock-btn" data-act="tab" data-to="temario" aria-current="true">Temario</button><button type="button" class="mk-dock-btn" data-act="tab" data-to="ajustes" aria-current="false">Ajustes</button></nav>`;
    fillVoiceSelect(document.getElementById("voice-select"));
  }

  /* ---------- Copia de seguridad del progreso ---------- */
  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

  async function backupProgress() {
    const data = JSON.stringify({ app: "quaderno-italiano", version: 1, savedAt: new Date().toISOString(), progress: S }, null, 1);
    const name = `quaderno-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    const file = new File([data], name, { type: "application/json" });
    // En el móvil, la hoja de compartir permite guardarlo en Archivos, mandarlo por correo, etc.
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "Progreso de Moka" });
        return toast("Copia lista");
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast("Copia descargada");
  }

  function restoreProgress(file) {
    const r = new FileReader();
    r.onload = () => {
      let d;
      try {
        d = JSON.parse(r.result);
      } catch (_) {
        return toast("Ese archivo no es una copia de tu progreso");
      }
      const p = d && d.app === "quaderno-italiano" ? d.progress : null;
      if (!p || typeof p !== "object") return toast("Ese archivo no es una copia de tu progreso");
      const when = d.savedAt ? new Date(d.savedAt).toLocaleDateString("es-ES") : "fecha desconocida";
      if (!confirm(`¿Cargar la copia del ${when}? Sustituye el progreso de este dispositivo.`)) return;
      S = Object.assign({ answers: {}, done: {}, exam: {} }, p);
      save();
      viewHome();
      toast("Progreso cargado");
    };
    r.readAsText(file);
  }

  document.addEventListener("change", (e) => {
    if (e.target.id === "restore-file" && e.target.files[0]) restoreProgress(e.target.files[0]);
  });

  // Casillas en rojo (por rellenar) o verde (rellenas); el número del apartado se pone verde cuando está todo.
  function markFields(root) {
    if (!root) return;
    const blocks = root.classList && root.classList.contains("block") ? [root] : root.querySelectorAll(".block");
    blocks.forEach((b) => {
      const fields = b.querySelectorAll(".in, .ta");
      if (!fields.length) return b.removeAttribute("data-state");
      let all = true;
      fields.forEach((f) => {
        const ok = f.value.trim() !== "";
        f.classList.toggle("is-filled", ok);
        f.classList.toggle("is-empty", !ok);
        if (!ok) all = false;
      });
      b.dataset.state = all ? "done" : "todo";
    });
  }

  // Portada en móvil: Temario y Ajustes llevan a su sección; la activa se marca según el scroll.
  function syncTabs() {
    const tabs = document.querySelector(".mk-tabs");
    const set = document.getElementById("ajustes");
    if (!tabs || !set) return;
    const onSet = set.getBoundingClientRect().top < innerHeight * 0.55;
    tabs.querySelectorAll("[data-to]").forEach((b) => b.setAttribute("aria-current", String((b.dataset.to === "ajustes") === onSet)));
  }
  addEventListener("scroll", syncTabs, { passive: true });

  // Despliegue fluido de los niveles: la altura se abre con curva expo-out y las filas entran en cascada.
  // Se puede interrumpir a mitad (vuelve a tocar y se recoge desde donde esté). Sin movimiento reducido.
  const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  document.addEventListener("click", (e) => {
    const sum = e.target.closest(".level-panel > summary, .side-level > summary");
    if (!sum || reduceMotion.matches) return;
    e.preventDefault();
    const d = sum.parentElement;
    const from = d.getBoundingClientRect().height;
    const opening = !d.open || d.classList.contains("is-closing");
    if (d._anim) d._anim.cancel();
    d.style.overflow = "hidden";
    d.classList.toggle("is-closing", !opening);
    if (opening) d.open = true;
    let to = d.getBoundingClientRect().height;
    if (!opening) {
      d.open = false; // mide la altura cerrada y vuelve a abrir hasta que acabe la animación
      to = d.getBoundingClientRect().height;
      d.open = true;
    }
    const a = d.animate({ height: [`${from}px`, `${to}px`] }, { duration: opening ? 620 : 420, easing: EXPO });
    d._anim = a;
    if (opening && from <= sum.getBoundingClientRect().height + 4) {
      [...d.querySelectorAll(".level-body > *, :scope > a")].slice(0, 18).forEach((row, i) =>
        row.animate({ opacity: [0, 1], transform: ["translateY(14px)", "none"] }, { duration: 520, delay: 60 + i * 26, easing: EXPO, fill: "backwards" }),
      );
    }
    a.onfinish = () => {
      if (!opening) d.open = false;
      d.classList.remove("is-closing");
      d.style.overflow = "";
      d._anim = null;
    };
  });

  // Recuerda qué niveles dejaste abiertos.
  document.addEventListener(
    "toggle",
    (e) => {
      const d = e.target;
      if (!d.classList || !(d.classList.contains("level-panel") || d.classList.contains("side-level"))) return;
      S.open = S.open || {};
      S.open[d.dataset.level] = d.open;
      save();
    },
    true,
  );

  /* ---------- Sincronización entre dispositivos (Gist privado de GitHub) ----------
     El progreso se guarda también en un gist privado de tu cuenta. Al abrir la web se descarga la
     versión más reciente; cada cambio se sube unos segundos después. Gana la versión guardada más tarde.
     El token vive solo en este dispositivo (no entra en las copias ni en el gist). */
  const SYNC_KEY = "quaderno.sync";
  const SYNC_FILE = "quaderno-progreso.json";
  const Sync = {
    cfg: (() => {
      try {
        return JSON.parse(localStorage.getItem(SYNC_KEY)) || null;
      } catch (_) {
        return null;
      }
    })(),
    status: "",
    timer: 0,
    busy: false,
    get on() {
      return !!(this.cfg && this.cfg.token && this.cfg.gist);
    },
    store() {
      try {
        if (this.cfg) localStorage.setItem(SYNC_KEY, JSON.stringify(this.cfg));
        else localStorage.removeItem(SYNC_KEY);
      } catch (_) {}
    },
    setStatus(msg) {
      this.status = msg;
      const el = document.getElementById("sync-status");
      if (el) el.textContent = msg;
    },
    async api(path, opts = {}) {
      const r = await fetch(`https://api.github.com${path}`, {
        ...opts,
        headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${this.cfg.token}`, "Content-Type": "application/json", ...(opts.headers || {}) },
      });
      if (r.status === 401) throw new Error("token");
      if (!r.ok) throw new Error(`http ${r.status}`);
      return r.status === 204 ? null : r.json();
    },
    payload() {
      return JSON.stringify({ app: "quaderno-italiano", version: 1, savedAt: S._savedAt || 0, progress: S });
    },
    async connect(token) {
      this.cfg = { token: token.trim() };
      try {
        this.setStatus("Conectando…");
        const user = await this.api("/user");
        // ¿Ya existe un gist del Quaderno en esta cuenta? (si conectas un segundo dispositivo)
        const gists = await this.api("/gists?per_page=100");
        const found = gists.find((g) => g.files && g.files[SYNC_FILE]);
        if (found) {
          this.cfg.gist = found.id;
          this.cfg.login = user.login;
          this.store();
          await this.pull(true);
        } else {
          const g = await this.api("/gists", {
            method: "POST",
            body: JSON.stringify({ description: "Quaderno · progreso (privado)", public: false, files: { [SYNC_FILE]: { content: this.payload() } } }),
          });
          this.cfg.gist = g.id;
          this.cfg.login = user.login;
          this.store();
          this.setStatus("Sincronizado");
        }
        return true;
      } catch (err) {
        this.cfg = null;
        this.store();
        this.setStatus(err.message === "token" ? "El token no es válido o no tiene permiso de gist." : "No se pudo conectar. Revisa la conexión.");
        return false;
      }
    },
    disconnect() {
      this.cfg = null;
      this.store();
      this.status = "";
    },
    // Descarga la versión remota. Si es más nueva, sustituye la local; si la local es más nueva, la sube.
    async pull(force = false) {
      if (!this.on || this.busy || !navigator.onLine) {
        if (this.on && !navigator.onLine) this.setStatus("Sin conexión: se sincronizará al volver.");
        return;
      }
      this.busy = true;
      try {
        const g = await this.api(`/gists/${this.cfg.gist}`);
        const f = g.files[SYNC_FILE];
        if (!f) throw new Error("missing");
        const text = f.truncated ? await (await fetch(f.raw_url)).text() : f.content;
        const remote = JSON.parse(text);
        const rAt = remote.savedAt || 0, lAt = S._savedAt || 0;
        if (rAt > lAt && remote.progress) {
          S = Object.assign({ answers: {}, done: {}, exam: {} }, remote.progress);
          S._savedAt = rAt;
          try {
            localStorage.setItem(STORE_KEY, JSON.stringify(S));
          } catch (_) {}
          if (!document.activeElement || !document.activeElement.matches("input, textarea")) router();
          this.setStatus("Actualizado con tu otro dispositivo");
        } else if (lAt > rAt) {
          this.busy = false;
          return this.push();
        } else this.setStatus("Sincronizado");
      } catch (err) {
        if (err.message === "missing" || err.message === "http 404") {
          // Borraste el gist: se crea otro en la próxima conexión.
          this.disconnect();
          this.setStatus("No encuentro el gist. Vuelve a conectar.");
        } else this.setStatus(err.message === "token" ? "El token ya no es válido. Vuelve a conectar." : "No se pudo sincronizar. Lo intentaré luego.");
      } finally {
        this.busy = false;
      }
    },
    async push() {
      if (!this.on || !navigator.onLine) return;
      if (this.busy) return this.schedule();
      this.busy = true;
      try {
        await this.api(`/gists/${this.cfg.gist}`, { method: "PATCH", body: JSON.stringify({ files: { [SYNC_FILE]: { content: this.payload() } } }) });
        this.setStatus("Sincronizado");
      } catch (err) {
        this.setStatus(err.message === "token" ? "El token ya no es válido. Vuelve a conectar." : "No se pudo subir. Lo intentaré luego.");
      } finally {
        this.busy = false;
      }
    },
    schedule() {
      if (!this.on) return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.push(), 3000);
    },
  };
  // Al volver a la app (otra pestaña, otro dispositivo usado entretanto) se comprueba si hay algo nuevo.
  document.addEventListener("visibilitychange", () => {
    if (!Sync.on) return;
    if (document.visibilityState === "visible") Sync.pull();
    else if (Sync.timer) {
      clearTimeout(Sync.timer);
      Sync.push();
    }
  });
  addEventListener("online", () => Sync.pull());

  function syncPanel() {
    if (Sync.on)
      return `<h2 class="title" style="margin-top:20px">Sincronización</h2>
        <p class="muted">Conectado a GitHub${Sync.cfg.login ? ` como <b class="white">${esc(Sync.cfg.login)}</b>` : ""}. Tu progreso se guarda en un gist privado y se actualiza solo en todos tus dispositivos.</p>
        <p class="small muted" id="sync-status" role="status">${esc(Sync.status || "Sincronizado")}</p>
        <div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap"><button class="btn-quiet" data-act="sync-now">Sincronizar ahora</button><button class="btn-quiet" data-act="sync-off">Desconectar este dispositivo</button></div>`;
    return `<h2 class="title" style="margin-top:20px">Sincronización</h2>
      <p class="muted">Para tener el mismo progreso en el móvil y en el ordenador, guárdalo en un gist privado de tu cuenta de GitHub. Se hace una vez en cada dispositivo:</p>
      <ol class="small muted sync-steps">
        <li>Crea un token con <a class="white" href="https://github.com/settings/tokens/new?scopes=gist&amp;description=Quaderno" target="_blank" rel="noopener">este enlace</a>: deja marcado solo «gist» y, en «Expiration», elige «No expiration» (o la fecha que prefieras).</li>
        <li>Copia el token y pégalo aquí. Usa el mismo token en todos tus dispositivos.</li>
      </ol>
      <label class="field">Token de GitHub<input id="sync-token" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ghp_…" /></label>
      <div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap"><button class="btn-quiet" data-act="sync-connect">Conectar</button></div>
      <p class="small muted" id="sync-status" role="status">${esc(Sync.status)}</p>`;
  }

  // App instalable y sin conexión (solo funciona servido por http/https, no abriendo el archivo).
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    addEventListener("load", () => navigator.serviceWorker.register("../sw.js").catch(() => {}));
  }
  // Pide al navegador que no borre el progreso si falta espacio.
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

  function fillVoiceSelect(sel) {
    if (!TTS.ok || !TTS.voices.length) {
      sel.innerHTML = `<option>No hay voz italiana instalada en el sistema</option>`;
      sel.disabled = true;
      return;
    }
    sel.disabled = false;
    const current = TTS.voice()?.name;
    sel.innerHTML = TTS.voices.map((v) => `<option value="${esc(v.name)}" ${v.name === current ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("");
    const cnt = document.getElementById("voice-count");
    if (cnt) {
      const good = TTS.voices.filter((v) => !BAD_VOICES.test(v.name));
      const f = good.filter((v) => voiceGender(v) === "f").length, m = good.filter((v) => voiceGender(v) === "m").length;
      cnt.textContent = `${good.length} voz${good.length === 1 ? "" : "es"} italiana${good.length === 1 ? "" : "s"} (${f} de mujer, ${m} de hombre)`;
    }
    const tip = document.getElementById("voice-tip");
    if (tip) tip.hidden = TTS.quality(TTS.voices[0]) <= 5;
  }

  const pagerTile = (href, label, name, dir) =>
    `<a class="tile ${dir}" href="${href}"><span class="pager-arrow">${dir === "next" ? I.right : I.left}</span><span class="pager-text"><span class="small muted">${label}</span><span class="tile-name" style="min-height:0">${esc(name)}</span></span></a>`;

  function viewUnit(u) {
    document.title = `Unidad ${u.n} · ${u.title}`;
    const d = doneCount(u.n);
    const step = nextStep(u.n, u.pages.length);
    const ex = S.exam[u.n];
    const lvName = C.levels.find((l) => l.id === u.level)?.name || "";
    const inLevel = C.units.filter((x) => x.level === u.level);
    $app.innerHTML = `<header class="mk-unit" data-level="${u.level}">
        <div class="mk-unit-top"><a class="mk-pill" href="#/" aria-label="Volver al temario">${I.left}<span>${u.level} · Temario</span></a><span class="mk-label">N° ${pad(inLevel.findIndex((x) => x.n === u.n) + 1)} / ${inLevel.length}</span></div>
        <p class="mk-eyebrow">Unidad ${pad(u.n)} · ${esc(lvName)}</p>
        <div class="mk-unit-body"><h1 class="mk-unit-title">${esc(u.title)}</h1><div class="mk-unit-moka">${mokaSvg("moka-unit")}</div></div>
        <p class="mk-unit-goal">${esc(u.goal)}</p>
        <div class="mk-unit-count"><span class="mk-count">${d}<span> / ${u.pages.length} páginas</span></span><span class="mk-segs" aria-hidden="true">${u.pages.map((_, i) => `<i ${S.done[`u${u.n}.p${i + 1}`] ? "data-done" : ""}></i>`).join("")}<i ${examPassed(u.n) ? "data-done" : ""}></i></span></div>
      </header>
      <ol class="mk-list enter">${u.pages
        .map((p, i) => {
          const done = S.done[`u${u.n}.p${i + 1}`];
          return `<li><a class="mk-row ${done ? "is-done" : ""}" href="#/u/${u.n}/p/${i + 1}"><span class="mk-row-n">${pad(i + 1)}</span><span class="mk-row-t">${esc(p.title)}</span><span class="mk-row-s">${done ? "Hecha" : skillLabel(p.skill)}</span></a></li>`;
        })
        .join("")}
        <li><a class="mk-row ${examPassed(u.n) ? "is-done" : ""}" href="#/u/${u.n}/exam"><span class="mk-row-n">Ex</span><span class="mk-row-t">Examen</span><span class="mk-row-s">${ex ? `${ex.score} / 100` : "Aprobado con 70"}</span></a></li>
        <li><a class="mk-row" href="#/u/${u.n}/print"><span class="mk-row-n">${I.print}</span><span class="mk-row-t">Exportar PDF</span><span class="mk-row-s">Para imprimir o el lápiz</span></a></li>
      </ol>
      <nav class="mk-dock" aria-label="Seguir"><a class="mk-cta" href="${step.href}"><span>${d ? "Continuar" : "Empezar"} · ${step.label}</span>${I.right}</a></nav>`;
  }

  function progressBar(u, current) {
    const segs = u.pages.map(
      (p, i) =>
        `<a href="#/u/${u.n}/p/${i + 1}" aria-label="Página ${i + 1}: ${esc(p.title)}" ${S.done[`u${u.n}.p${i + 1}`] ? "data-done" : ""} ${current === i + 1 ? 'data-current aria-current="page"' : ""}></a>`,
    );
    segs.push(`<a href="#/u/${u.n}/exam" aria-label="Examen" ${examPassed(u.n) ? "data-done" : ""} ${current === "exam" ? 'data-current aria-current="page"' : ""}></a>`);
    return `<nav class="progress" aria-label="Páginas de la unidad">${segs.join("")}</nav>`;
  }

  function supportNotice(blocks) {
    const oral = blocks.some((b) => ["shadow", "speak", "listen", "roleplay", "dictation"].includes(b.kind));
    const msgs = [];
    if (oral && TTS.ok && !TTS.voices.length)
      msgs.push("No hay voz italiana en tu sistema. En Mac: Ajustes del Sistema → Accesibilidad → Contenido leído → Voz del sistema → Gestionar voces → Italiano.");
    if (oral && !SR) msgs.push(t("Este navegador no transcribe la voz: responde en voz alta y escribe lo que has dicho, o abre la web en Chrome o Safari.", "Questo browser non trascrive la voce: rispondi ad alta voce e scrivi quello che hai detto, oppure apri il sito in Chrome o Safari."));
    return msgs.map((m) => `<p class="notice-inline">${esc(m)}</p>`).join("");
  }

  function viewPage(u, idx) {
    const p = u.pages[idx - 1];
    if (!p) return (location.hash = `#/u/${u.n}`);
    document.title = `${p.title} · Unidad ${u.n}`;
    const scope = `u${u.n}.p${idx}`;
    const done = !!S.done[scope];
    const prev = idx > 1 ? { href: `#/u/${u.n}/p/${idx - 1}`, t: u.pages[idx - 2].title } : null;
    const next = idx < u.pages.length ? { href: `#/u/${u.n}/p/${idx + 1}`, t: u.pages[idx].title } : { href: `#/u/${u.n}/exam`, t: "Examen" };

    $app.innerHTML = `<header class="mk-ph"><div class="mk-ph-top"><a class="mk-pill" href="#/u/${u.n}">${I.left}<span>Unidad ${pad(u.n)}</span></a><span class="mk-label">${skillLabel(p.skill)} · ${u.level}</span></div>${progressBar(u, idx)}</header>
      <div class="mk-title-row"><span class="mk-title-n">${pad(idx)}</span><h1 class="mk-big">${esc(p.title)}</h1><div class="mk-mini">${mokaSvg("moka-page")}</div></div>
      ${supportNotice(p.blocks)}
      <div class="enter">${p.blocks.map((b, bi) => renderBlock(b, bi, scope, u)).join("")}</div>
      <div class="page-foot">
        <div class="row">
          <button class="btn-quiet" data-act="correct" data-scope="${scope}">${I.copy}${t("Copiar para corregir", "Copia per la correzione")}</button>
          <button class="btn-quiet" data-act="done" data-scope="${scope}" aria-pressed="${done}">${I.check}${done ? t("Página hecha", "Pagina fatta") : t("Marcar como hecha", "Segna come fatta")}</button>
        </div>
      </div>
      <nav class="pager">
        ${prev ? pagerTile(prev.href, t("Anterior", "Precedente"), prev.t, "prev") : ""}
        ${pagerTile(next.href, t("Siguiente", "Successiva"), next.t, "next")}
      </nav>
      <nav class="mk-dock" aria-label="Página"><button type="button" class="mk-dock-btn" data-act="correct" data-scope="${scope}">Copiar para corregir</button><a class="mk-cta" href="${next.href}"><span>${esc(next.t)}</span>${I.right}</a></nav>`;
  }

  function viewExam(u) {
    const e = u.exam;
    document.title = `Examen · Unidad ${u.n}`;
    const scope = `u${u.n}.exam`;
    const ex = S.exam[u.n];
    $app.innerHTML = `<header class="mk-ph"><div class="mk-ph-top"><a class="mk-pill" href="#/u/${u.n}">${I.left}<span>Unidad ${pad(u.n)}</span></a><span class="mk-label">Examen · ${u.level}</span></div>${progressBar(u, "exam")}</header>
      <div class="mk-title-row"><span class="mk-title-n">Ex</span><h1 class="mk-big">Examen</h1><div class="mk-mini">${mokaSvg("moka-exam")}</div></div>
      <p class="mk-hint">${esc(e.hint)}</p>
      ${supportNotice(e.blocks)}
      <div class="enter">${e.blocks.map((b, bi) => renderBlock(b, bi, scope, u)).join("")}</div>
      <div class="page-foot">
        <div class="row"><button class="btn-quiet" data-act="correct" data-scope="${scope}">${I.copy}${t("Copiar para corregir", "Copia per la correzione")}</button></div>
        <section class="block">
          <h3>${t("Tu nota", "Il tuo voto")}</h3>
          <p class="hint">${t("Pega el examen en la IA y apunta aquí la nota que te dé.", "Incolla l'esame nell'IA e annota qui il voto che ti dà.")}</p>
          <div class="score">
            <input class="in" id="score" type="number" inputmode="numeric" min="0" max="100" value="${ex ? ex.score : ""}" placeholder="0–100" aria-label="Nota sobre 100" />
            <button class="btn-quiet" data-act="score" data-unit="${u.n}">${t("Guardar nota", "Salva il voto")}</button>
            ${ex ? `<span class="badge" ${ex.score >= 70 ? 'data-state="watch"' : 'data-state="warn"'}>${ex.score >= 70 ? t("Aprobado", "Superato") : t("Toca repetir", "Da ripetere")} · ${ex.score}/100</span>` : ""}
          </div>
        </section>
      </div>
      <nav class="pager">
        ${pagerTile(`#/u/${u.n}/p/${u.pages.length}`, t("Anterior", "Precedente"), u.pages[u.pages.length - 1].title, "prev")}
        ${C.units.find((x) => x.n === u.n + 1)?.ready ? pagerTile(`#/u/${u.n + 1}`, t("Siguiente", "Successiva"), `Unidad ${u.n + 1}`, "next") : ""}
      </nav>`;
  }

  /* ---------- PDF ---------- */
  function printBlock(b, bi, scope) {
    const k = `${scope}.b${bi}`;
    const line = (key, n = 1) => {
      const v = val(key);
      return v ? `<span class="wline">${esc(v)}</span>` : Array.from({ length: n }, () => `<span class="wline"></span>`).join("");
    };
    const inl = (key) => `<span class="inl">${esc(val(key)) || "&nbsp;"}</span>`;
    let body = "";
    switch (b.kind) {
      case "intro":
        body = `<div class="pintro">${(b.text || []).map((p) => `<p>${esc(p)}</p>`).join("")}${
          b.examples ? `<ul class="pex">${b.examples.map((e) => `<li><b lang="it">${esc(e.it)}</b>${e.es ? ` · ${esc(e.es)}` : ""}</li>`).join("")}</ul>` : ""
        }${b.table ? refTable(b.table) : ""}</div>`;
        break;
      case "table":
        body = `<div class="ref-wrap"><table class="ptable"><thead><tr><th></th>${b.cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${b.rows
          .map(
            (r, ri) =>
              `<tr><th scope="row">${esc(r[0])}</th>${b.cols
                .map((_, ci) => (r[ci + 1] ? `<td class="given">${esc(r[ci + 1])}</td>` : `<td class="blank">${esc(val(`${k}.r${ri}.c${ci}`))}</td>`))
                .join("")}</tr>`,
          )
          .join("")}</tbody></table></div>`;
        break;
      case "reading":
        body = `<div class="ptext">${b.text.map((p) => `<p>${esc(p)}</p>`).join("")}</div><ol>${b.questions
          .map((q, i) => `<li>${esc(q)}${line(`${k}.q${i}`)}</li>`)
          .join("")}</ol>${b.translate ? `<p style="margin-top:10px">${esc(b.translate)}</p>${line(`${k}.tr`, 10)}` : ""}`;
        break;
      case "vocab":
        body = `<ol class="two">${b.items.map((w, i) => `<li>${esc(w)} — ${inl(`${k}.i${i}`)}</li>`).join("")}</ol>`;
        break;
      case "fill":
        body = `<ol>${b.items
          .map((s, i) => {
            const parts = s.split("___");
            let h = esc(parts[0]);
            for (let g = 1; g < parts.length; g++) h += inl(`${k}.i${i}.g${g - 1}`) + esc(parts[g]);
            return `<li>${h}</li>`;
          })
          .join("")}</ol>`;
        break;
      case "translate":
        body = `<ol>${b.items.map((s, i) => `<li>${esc(s)}${line(`${k}.i${i}`)}</li>`).join("")}</ol>`;
        break;
      case "shadow":
        body = `<p class="note">${t("Audio en la web. Repite cada línea en voz alta.", "Audio sul sito. Ripeti ogni riga ad alta voce.")}</p><ol class="two">${b.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`;
        break;
      case "speak":
        body = `<ol>${b.items.map((s, i) => `<li>${esc(s)}${line(`${k}.i${i}`, 2)}</li>`).join("")}</ol>`;
        break;
      case "listen":
        body = `<p class="note">${t("Audio en la web. Transcripción en el apéndice.", "Audio sul sito. Trascrizione in appendice.")}</p><ol>${b.questions.map((q, i) => `<li>${esc(q)}${line(`${k}.q${i}`)}</li>`).join("")}</ol>`;
        break;
      case "roleplay":
        body = `<ol>${b.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>${line(`${k}.i0`, 6)}`;
        break;
      case "write":
        body = b.items.map((s, i) => `<p>${esc(s)}</p>${line(`${k}.i${i}`, b.rows || 4)}`).join("");
        break;
      case "dictation":
        body = `<p class="note">Audio en la web, o que alguien te lo dicte (texto en el apéndice).</p><ol class="two">${b.items.map((_, i) => `<li>${line(`${k}.i${i}`)}</li>`).join("")}</ol>`;
        break;
      case "media":
        body = `<ol>${b.items.map((m) => `<li><b>${esc(m.title)}</b> (${esc(m.where && m.where !== m.type ? `${m.type}: ${m.where}` : m.type)}). ${esc(m.why)}</li>`).join("")}</ol>`;
        break;
    }
    return `<div class="pblock">${blockHead(b)}${body}</div>`;
  }

  function viewPrint(u) {
    document.title = `Moka · Unidad ${u.n} · ${u.title}`;
    const blank = BLANK || !!S.printBlank;
    printingBlank = blank;
    const sections = u.pages.map(
      (p, i) =>
        `<section class="pg"><div class="pg-title"><h2>${i + 1}. ${esc(p.title)}</h2><span>Unidad ${u.n} · ${skillLabel(p.skill)}</span></div>${p.blocks
          .map((b, bi) => printBlock(b, bi, `u${u.n}.p${i + 1}`))
          .join("")}</section>`,
    );
    sections.push(
      `<section class="pg"><div class="pg-title"><h2>Examen</h2><span>Nota: ______ / 100</span></div><p class="note">${esc(u.exam.hint)}</p>${u.exam.blocks
        .map((b, bi) => printBlock(b, bi, `u${u.n}.exam`))
        .join("")}</section>`,
    );
    const all = [...u.pages.flatMap((p) => p.blocks), ...u.exam.blocks];
    const appendix = all
      .filter((b) => b.kind === "listen" || b.kind === "dictation")
      .map((b) =>
        b.kind === "listen"
          ? `<div class="pblock pscript"><h3>${esc(b.title)}</h3>${b.script.map((l) => `<p><b>${esc(l.who)}:</b> ${esc(l.text)}</p>`).join("")}</div>`
          : `<div class="pblock pscript"><h3>${esc(b.title)}</h3><p>${b.items.map(esc).join(" · ")}</p></div>`,
      )
      .join("");
    sections.push(`<section class="pg"><div class="pg-title"><h2>Trascrizioni</h2><span>${t("Apéndice", "Appendice")}</span></div>${appendix}</section>`);

    printingBlank = false;
    $app.innerHTML = `${printBar(`#/u/${u.n}`, blank)}
      <article class="paper" lang="it">
        <div class="cover"><p>Moka · Italiano ${esc(u.level)}</p><h1>Unidad ${u.n}<br>${esc(u.title)}</h1><p lang="es">${esc(u.goal)}</p><p style="font-size:.875rem">${t("Nombre", "Nome")}: ______________________ &nbsp; ${t("Fecha", "Data")}: ____________</p></div>
        ${sections.join("")}
      </article>`;
    setupInk(`u${u.n}`, blank);
  }

  /* ---------- Router ---------- */
  async function router() {
    TTS.stop();
    if (!/\/print$/.test(location.hash)) {
      INK.on = false;
      document.body.classList.remove("inking", "ink-finger");
    }
    stopMic();
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "level") {
      const L = await loadLevel(parts[1]);
      IT = !!L && isIt(L.id);
      if (!L) {
        location.hash = "#/";
        return;
      }
      if (parts[2] === "print") viewLevelPrint(L);
      else viewLevel(L);
    } else if (parts[0] !== "u") {
      IT = false;
      viewHome();
    } else {
      const u = await loadUnit(+parts[1]);
      IT = !!u && isIt(u.level);
      if (!u) {
        location.hash = "#/";
        return;
      }
      if (parts[2] === "p") viewPage(u, +parts[3] || 1);
      else if (parts[2] === "exam") viewExam(u);
      else if (parts[2] === "print") viewPrint(u);
      else viewUnit(u);
    }
    const lvNow = parts[0] === "level" ? parts[1] : parts[0] === "u" ? C.units.find((x) => x.n === +parts[1])?.level : "";
    document.documentElement.dataset.level = lvNow || "";
    renderChrome(parts);
    window.scrollTo(0, 0);
    markFields($app);
    syncTabs();
    Moka.arrive(parts);
  }
  window.addEventListener("hashchange", router);

  /* ---------- Ordenador: barra lateral con el temario y ruta de navegación ---------- */
  const $side = document.getElementById("side");
  const $crumbs = document.getElementById("crumbs");
  function renderChrome(parts) {
    if (!$side || !$crumbs) return;
    const unitN = parts[0] === "u" ? +parts[1] : null;
    const u = unitN ? C.units.find((x) => x.n === unitN) : null;
    const lvId = u ? u.level : parts[0] === "level" ? parts[1] : null;
    const lv = lvId ? C.levels.find((l) => l.id === lvId) : null;
    const U = unitN ? window.UNITS[unitN] : null;

    // Ruta: Inicio › A1 · Sobrevivir › Unità 1 · Ciao! Piacere › Parole
    const crumbs = [`<a href="#/">Inicio</a>`];
    if (lv) crumbs.push(`<a href="#/" data-open-level="${lv.id}">${lv.id} · ${esc(lv.name)}</a>`);
    if (u) crumbs.push(`<a href="#/u/${u.n}">Unidad ${u.n} · ${esc(u.title)}</a>`);
    if (parts[0] === "level") crumbs.push(`<a href="#/level/${lv.id}">Examen de nivel ${lv.id}</a>`);
    if (U && parts[2] === "p") {
      const pg = U.pages[(+parts[3] || 1) - 1];
      if (pg) crumbs.push(`<span>${esc(pg.title)}</span>`);
    } else if (parts[2] === "exam") crumbs.push(`<span>Examen</span>`);
    if (parts[2] === "print") crumbs.push(`<span>PDF</span>`);
    // El último elemento no es un enlace: es donde estás.
    const last = crumbs.length - 1;
    crumbs[last] = crumbs[last].replace(/^<a [^>]*>(.*)<\/a>$/, '<span aria-current="page">$1</span>');
    $crumbs.innerHTML = crumbs.join(`<span class="sep" aria-hidden="true">›</span>`);

    // Barra lateral: niveles plegables, unidad actual con sus páginas.
    S.open = S.open || {};
    $side.innerHTML =
      `<a class="side-brand" href="#/"><b class="mk-brand">Moka</b><span class="muted small">Italiano de cero a B2</span></a>` +
      C.levels
        .map((L) => {
          const open = L.id === lvId || S.open[L.id];
          const units = C.units
            .filter((x) => x.level === L.id)
            .map((x) => {
              const cur = x.n === unitN;
              const sub =
                cur && U
                  ? `<div class="side-pages">${U.pages
                      .map((pg, i) => `<a href="#/u/${x.n}/p/${i + 1}" ${parts[2] === "p" && +parts[3] === i + 1 ? 'aria-current="page"' : ""}>${S.done[`u${x.n}.p${i + 1}`] ? "✓ " : ""}${esc(pg.title)}</a>`)
                      .join("")}<a href="#/u/${x.n}/exam" ${parts[2] === "exam" ? 'aria-current="page"' : ""}>Examen</a></div>`
                  : "";
              return `<a class="side-unit ${cur ? "is-current" : ""} ${x.ready ? "" : "locked"}" href="#/u/${x.n}"><span class="num">${pad(x.n)}</span><span class="t">${esc(x.title)}</span>${examPassed(x.n) ? `<span class="ok" aria-label="Superada">✓</span>` : ""}</a>${sub}`;
            })
            .join("");
          const ex = L.exam && L.exam.ready ? `<a class="side-unit side-exam ${parts[0] === "level" && parts[1] === L.id ? "is-current" : ""}" href="#/level/${L.id}"><span class="num">${L.id}</span><span class="t">Examen de nivel</span></a>` : "";
          return `<details class="side-level" data-level="${L.id}" ${open ? "open" : ""}><summary><span class="side-id">${L.id}</span>${esc(L.name)}</summary>${units}${ex}</details>`;
        })
        .join("");
    const cur = $side.querySelector(".is-current");
    if (cur && matchMedia("(min-width: 1024px)").matches) cur.scrollIntoView({ block: "nearest" });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-open-level]");
    if (!a) return;
    S.open = { [a.dataset.openLevel]: true };
    save();
    if (location.hash === "#/" || location.hash === "") viewHome();
  });

  /* ---------- Eventos ---------- */
  $app.addEventListener("input", (e) => {
    if (e.target.dataset && e.target.dataset.key) {
      persist(e.target);
      markFields(e.target.closest(".block"));
    }
  });

  $app.addEventListener("change", (e) => {
    if (e.target.id === "voice-select") {
      S.voice = e.target.value;
      save();
      TTS.stop();
      TTS.say("Ciao! Benvenuto nel tuo quaderno.");
    }
  });

  $app.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const act = btn.dataset.act;
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const L = parts[0] === "level" ? window.LEVELS[parts[1]] : null;
    const u = L ? levelUnit(L) : window.UNITS[+parts[1]];

    if (act === "tab") {
      const el = document.getElementById(btn.dataset.to);
      if (el) el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
      return;
    }
    if (act === "say") playButton(btn, [{ text: btn.dataset.say }], +btn.dataset.rate);
    else if (act === "script") playButton(btn, SCRIPTS[btn.dataset.bk] || [], +btn.dataset.rate);
    else if (act === "voicetest")
      playButton(btn, [
        { who: "Giulia", text: "Ciao! Io sono Giulia. E tu come ti chiami?" },
        { who: "Marco", text: "Piacere, io sono Marco. Sono di Napoli." },
        { who: "Sig.ra Bianchi", text: "Buongiorno ragazzi, io sono la professoressa Bianchi." },
      ], 0.95);
    else if (act === "mic") toggleMic(btn);
    else if (act === "toggle") {
      const el = document.getElementById(btn.dataset.target);
      el.hidden = !el.hidden;
      btn.setAttribute("aria-expanded", String(!el.hidden));
    } else if (act === "roleprompt") copy(rolePrompt(ROLES[btn.dataset.bk]), "Prompt copiado: pégalo en ChatGPT o Claude (mejor en modo voz)");
    else if (act === "done") {
      const s = btn.dataset.scope;
      S.done[s] = !S.done[s];
      save();
      btn.setAttribute("aria-pressed", String(!!S.done[s]));
      btn.innerHTML = `${I.check}${S.done[s] ? t("Página hecha", "Pagina fatta") : t("Marcar como hecha", "Segna come fatta")}`;
      document.querySelector(".progress a[data-current]")?.toggleAttribute("data-done", !!S.done[s]);
      if (S.done[s]) toast("Página marcada como hecha");
    } else if (act === "correct" && L) {
      copy(correctionText(u, "examen de nivel", u.blocks, btn.dataset.scope, true), "Copiado: pégalo en ChatGPT o Claude");
    } else if (act === "score" && L) {
      const v = Math.round(+document.getElementById("score").value);
      if (!Number.isFinite(v) || v < 0 || v > 100 || document.getElementById("score").value === "") return toast("Escribe una nota entre 0 y 100");
      S.levelExam = S.levelExam || {};
      S.levelExam[L.id] = { score: v, at: new Date().toISOString() };
      save();
      viewLevel(L);
      const party = v >= 70 && Moka.celebrateOnce(`L${L.id}`);
      toast(v >= 70 ? `Nivel ${L.id} superado${party ? ". ¡Enhorabuena!" : ""}` : "Repasa lo que te diga la IA y repite");
    } else if (act === "correct" && u) {
      const s = btn.dataset.scope;
      const isExam = s.endsWith(".exam");
      const idx = isExam ? 0 : +s.split(".p")[1];
      const blocks = isExam ? u.exam.blocks : u.pages[idx - 1].blocks;
      const label = isExam ? "examen" : `página ${idx} «${u.pages[idx - 1].title}»`;
      copy(correctionText(u, label, blocks, s, isExam), "Copiado: pégalo en ChatGPT o Claude");
    } else if (act === "score" && u) {
      const v = Math.round(+document.getElementById("score").value);
      if (!Number.isFinite(v) || v < 0 || v > 100 || document.getElementById("score").value === "") return toast("Escribe una nota entre 0 y 100");
      S.exam[u.n] = { score: v, at: new Date().toISOString() };
      save();
      viewExam(u);
      const party = v >= 70 && Moka.celebrateOnce(`u${u.n}`);
      toast(v >= 70 ? (party ? "¡Unidad superada! A por la siguiente" : "Aprobado. A por la siguiente unidad") : "Repasa lo que te diga la IA y repite");
    } else if (act === "print") window.print();
    else if (act === "printmode" && u) {
      S.printBlank = btn.dataset.mode === "blank";
      save();
      const y = window.scrollY;
      if (L) viewLevelPrint(L);
      else viewPrint(u);
      window.scrollTo(0, y);
    }
    else if (act === "ink" && u) {
      INK.on = !INK.on;
      INK.undo = [];
      const y = window.scrollY;
      if (L) viewLevelPrint(L);
      else viewPrint(u);
      window.scrollTo(0, y);
      if (INK.on) toast(t("Lápiz activado", "Matita attiva"));
    } else if (act.startsWith("ink") && act !== "ink") {
      if (act === "inkclear") {
        const blank = BLANK || !!S.printBlank;
        const scope = L ? `lv${L.id}` : `u${u.n}`;
        const prefix = `${scope}|${blank ? "b" : "a"}|`;
        if (!confirm(t("¿Borrar todos los trazos de esta hoja?", "Cancellare tutti i tratti di questo foglio?"))) return;
        S.ink = S.ink || {};
        Object.keys(S.ink).filter((k) => k.startsWith(prefix)).forEach((k) => delete S.ink[k]);
        INK.undo = [];
        save();
        $app.querySelectorAll("svg.ink").forEach(inkDraw);
      } else inkAction(act, btn);
    }
    else if (act === "sync-connect") {
      const tok = (document.getElementById("sync-token").value || "").trim();
      if (!tok) return toast("Pega primero el token");
      btn.disabled = true;
      const ok = await Sync.connect(tok);
      btn.disabled = false;
      if (ok) {
        viewHome();
        toast("Sincronización activada");
      }
    } else if (act === "sync-now") Sync.pull();
    else if (act === "sync-off") {
      if (confirm("¿Desconectar este dispositivo? Tu progreso se queda aquí y en el gist, pero dejará de sincronizarse.")) {
        Sync.disconnect();
        viewHome();
      }
    }
    else if (act === "backup") backupProgress();
    else if (act === "restore") document.getElementById("restore-file").click();
    else if (act === "reset") {
      if (confirm(`¿Borrar todas tus respuestas, páginas hechas y notas? No se puede deshacer.${Sync.on ? " También se borrará en tus otros dispositivos." : ""}`)) {
        S = { answers: {}, done: {}, exam: {} };
        try {
          localStorage.removeItem(STORE_KEY);
        } catch (_) {}
        save(); // con sincronización, el borrado también llega a tus otros dispositivos
        viewHome();
        toast("Progreso borrado");
      }
    }
  });

  // Arranque: pantalla de carga con Moka. El progreso es real: tipografía cargada + primera pantalla lista
  // (si hay que descargar una unidad, cuenta los bytes recibidos).
  Boot.start();
  router().finally(() => Boot.viewReady());
  if (Sync.on) Sync.pull();
})();
