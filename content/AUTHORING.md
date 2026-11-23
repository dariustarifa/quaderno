# Cómo se escribe una unidad (guía interna)

Cada unidad es `content/units/uNN.js`. Al terminarla, pon `ready: true` en `content/course.js`.
Desde la unidad 14 se usa el kit (`content/kit.js`) para los bloques repetidos:

```js
(() => {
  const k = K.at("A2");                 // "A1", "A2", "B1" o "B2"
  window.UNITS = window.UNITS || {};
  window.UNITS[17] = { n: 17, level: "A2", title: "…", goal: "…", pages: [ … ], exam: k.exam(17, { … }) };
})();
```

## Reglas de idioma
- **A1 y A2**: `hint` (enunciado) en español arriba y `title` en italiano debajo. Intros en español, ejemplos con `{it, es}`.
- **B1 y B2**: todo en italiano. Sin español en ningún sitio: ni hints, ni intros, ni ejemplos (`{it}` solo, o `{it, es: "spiegazione in italiano"}`).
  Sin traducción: en su lugar *riformula*, *trasforma*, *correggi l'errore*, definiciones y sinónimos. El texto de lectura se resume, no se traduce (el kit ya lo hace).
- Sin soluciones. Sin dibujos. Sin letras de canciones citadas.

## Las 10 páginas (siempre en este orden)
1. **Introduzione** (mixto): intro «In questa unità», intro adelanto con ejemplos, speak de calentamiento.
2. **Parole** (escritura): vocab IT→ES (A1/A2) o «Spiega» (B1/B2, `placeholder: "significato"`), vocab ES→IT o familias de palabras, speak «Fai una frase» con 8 elementos.
3. **Suoni** (habla) en A1–A2 / **Ascolto attivo e pronuncia** en B1–B2: intro con tabla pequeña, 2–3 shadow.
4. **Verbi** (escritura): intro(s) con explicación + tabla de verbos (`k.table`) + 1–2 fill.
5. **Grammatica** (escritura): intro → ejercicio, intro → ejercicio, `k.domanda`, `k.negativa` (en B1/B2: transformaciones).
6. **Ascolta** (habla): 2 `k.listen` con 5 preguntas.
7. **Leggi** (mixto): `k.reading` (5 párrafos cortos de cultura italiana, 6 preguntas) + `k.spagna(hint)`.
8. **Parla** (habla): intro de fórmulas, `k.rispondi`, otro speak, 2 roleplay (uno con giro inesperado), speak de 1 minuto.
9. **Scrivi** (escritura): `k.traduci` (8 frases) + write.
10. **Ripasso e immersione** (mixto): 2 `k.dettato`, `k.media([...3 items])`, `k.caccia()`, speak «Racconta».

## Tablas
- Tablas de referencia (`table: {head, rows}`): máximo 3–4 columnas de texto corto; en móvil (295 px) no deben desbordar.
- Tablas de conjugación: `k.table(title, rows)` con filas `[verbo, io, tu, lui, noi, voi, loro]`, `""` = hueco.

## Examen de unidad (12 partes, ~40 min A1–A2, ~50 min B1–B2)
`k.exam(n, { parole[10], contrario[6], verbi[rows], completaHint, completa[8], trasformaHint, trasforma[6], leggi{text[3], questions[4]}, ascolta{script, questions[4–5]}, parla[4], role[3], roleHint?, dettato[6], traduci[6], scrivi{hint, start, rows?} })`.
Va a lo más difícil de la unidad (excepciones, irregulares, trampas).

## Examen de nivel
`content/levels/a1.js` → `window.LEVELS.A1 = { id, title, minutes, hint, parts: [{ title, minutes, blocks: [...] }] }`.
5 partes: Ascolto, Lettura, Grammatica e lessico, Scrittura, Parlato. Mezcla todo el nivel, centrado en lo más complejo. En course.js: `exam: { ready: true, minutes }`.

## Medios
Solo obras que existan de verdad (películas, series, canciones, canales, podcasts conocidos). Si no hay seguridad de dónde verla: «Busca dónde verla en JustWatch».

## Errores ya cometidos (evitar)
- Nada de comparaciones con el español en B1/B2 («in spagnolo si dice…»), ni glosas en español entre paréntesis.
- No dejar dudas de borrador en el texto («Film X? No: cerca…»). Si no hay seguridad de que una obra existe, cambiarla por otra segura.
- Dentro de las cadenas JS, usar comillas « » y nunca comillas dobles rectas (rompen el archivo).
- En B1/B2 los bloques `vocab` llevan siempre `placeholder` en italiano («significato»).
- Después de cada unidad: `node tools/check.js NN` y marcar `ready: true` en course.js.
