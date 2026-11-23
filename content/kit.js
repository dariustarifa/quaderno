// Kit común para escribir unidades sin repetir los bloques que siempre son iguales.
// Uso dentro de una unidad:  (() => { const k = K.at("A2"); window.UNITS[17] = { ... k.caccia() ... }; })();
// En A1 y A2 los enunciados van en español; desde B1, todo en italiano (sin español).
window.K = (() => {
  const T = {
    es: {
      cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
      tableHint: "Completa la tabla.",
      inUnit: "En esta unidad",
      caccia: ["Caccia alle parole", "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas).", ["Parole che conosco:", "Parole nuove:"]],
      media: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
      mediaTitle: "Da guardare e ascoltare",
      spagna: ["E in Spagna?", "Explícalo en italiano con 3 o 4 frases, en voz alta.", ["In Spagna…"]],
      rispondi: ["Rispondi ad alta voce", "Pulsa el micro y contesta con frases completas."],
      traduci: ["Traduci in italiano", "Traduce al italiano."],
      domanda: ["Fai la domanda", "Escribe la pregunta que corresponde a cada respuesta."],
      negativa: ["Frasi negative", "Pasa cada frase a negativo.", "in forma negativa"],
      readHint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
      readTr: "Traduce el texto entero al español.",
      listenHint: "Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
      dettato: "Escucha y escribe la frase tal como la oyes.",
      examHint: "Unos 40 minutos, sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
      ex: {
        parole: ["1. Parole", "Traduce al español."],
        contrario: ["2. Al contrario", "Traduce al italiano."],
        verbi: ["3. Verbi", "Completa la tabla."],
        leggi: ["6. Leggi", "Lee el texto y responde en italiano."],
        ascolta: ["7. Ascolta", "Escucha dos veces como máximo y responde en voz alta."],
        parla: ["8. Parla", "Responde en voz alta con frases completas."],
        role: ["9. Gioco di ruolo", "Hazlo con la IA, de una vez y sin preparar."],
        dettato: ["10. Dettato", "Escucha y escribe."],
        traduci: ["11. Traduci", "Traduce al italiano."],
        scrivi: ["12. Scrivi", ""],
      },
    },
    it: {
      cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
      tableHint: "Completa la tabella.",
      inUnit: "In questa unità",
      caccia: ["Caccia alle parole", "Mentre ascolti o guardi, annota 5 parole che conosci e 5 nuove (e cercane il significato in un dizionario monolingue).", ["Parole che conosco:", "Parole nuove:"]],
      media: "Scegline almeno uno questa settimana. Non è necessario capire tutto.",
      mediaTitle: "Da guardare e ascoltare",
      spagna: ["E nel tuo paese?", "Confronta con il tuo paese: 4 o 5 frasi, ad alta voce.", ["Nel mio paese…"]],
      rispondi: ["Rispondi ad alta voce", "Premi il microfono e rispondi con frasi complete, argomentando."],
      traduci: ["Riformula", "Riscrivi ogni frase con altre parole, senza cambiarne il significato."],
      domanda: ["Fai la domanda", "Scrivi la domanda che corrisponde a ogni risposta."],
      negativa: ["Trasforma", "Trasforma ogni frase come indicato.", "trasforma"],
      readHint: "Leggi il testo (o ascoltalo). Cerca le parole che non conosci in un dizionario monolingue e rispondi alle domande.",
      readTr: "Riassumi il testo con parole tue in 5-6 righe.",
      listenHint: "Ascolta senza leggere, tutte le volte che serve. Apri la trascrizione solo alla fine.",
      dettato: "Ascolta e scrivi la frase esattamente come la senti.",
      examHint: "Circa 50 minuti, senza cercare niente. Fallo tutto di seguito, copia le risposte per la correzione e annota il voto. Superato: 70 %.",
      ex: {
        parole: ["1. Parole", "Spiega il significato in italiano (sinonimo o breve definizione)."],
        contrario: ["2. Contrari e famiglie di parole", "Scrivi la parola richiesta."],
        verbi: ["3. Verbi", "Completa la tabella."],
        leggi: ["6. Leggi", "Leggi il testo e rispondi."],
        ascolta: ["7. Ascolta", "Ascolta al massimo due volte e rispondi ad alta voce."],
        parla: ["8. Parla", "Rispondi ad alta voce con frasi complete e argomentate."],
        role: ["9. Gioco di ruolo", "Fallo con l'IA, tutto di seguito e senza prepararti."],
        dettato: ["10. Dettato", "Ascolta e scrivi."],
        traduci: ["11. Riformula", "Riscrivi ogni frase con la struttura indicata, senza cambiarne il significato."],
        scrivi: ["12. Scrivi", ""],
      },
    },
  };

  function at(level) {
    const t = T[level === "B1" || level === "B2" ? "it" : "es"];
    return {
      t,
      cols: t.cols,
      caccia: (hint) => ({ kind: "write", title: t.caccia[0], hint: hint || t.caccia[1], rows: 5, items: t.caccia[2] }),
      media: (items, hint) => ({ kind: "media", title: t.mediaTitle, hint: hint || t.media, items }),
      spagna: (hint) => ({ kind: "speak", title: t.spagna[0], hint: hint ? `${hint} ${t.spagna[1]}` : t.spagna[1], items: t.spagna[2] }),
      rispondi: (items, hint) => ({ kind: "speak", title: t.rispondi[0], hint: hint || t.rispondi[1], items }),
      traduci: (items, hint) =>
        t === T.es
          ? { kind: "translate", title: t.traduci[0], hint: hint || t.traduci[1], items }
          : { kind: "translate", from: "it", placeholder: "riformula", title: t.traduci[0], hint: hint || t.traduci[1], items },
      domanda: (items, hint) => ({ kind: "translate", from: "it", placeholder: t === T.es ? "la domanda" : "la domanda", title: t.domanda[0], hint: hint || t.domanda[1], items }),
      negativa: (items, hint, placeholder) => ({ kind: "translate", from: "it", placeholder: placeholder || t.negativa[2], title: t.negativa[0], hint: hint || t.negativa[1], items }),
      reading: (title, text, questions, hint) => ({ kind: "reading", title, hint: hint || t.readHint, text, questions, translate: t.readTr }),
      listen: (title, hint, script, questions) => ({ kind: "listen", title, hint: hint ? `${hint} ${t.listenHint}` : t.listenHint, script, questions }),
      dettato: (title, items, hint, placeholder) => ({ kind: "dictation", title, hint: hint || t.dettato, items, ...(placeholder ? { placeholder } : {}) }),
      table: (title, rows, hint, cols) => ({ kind: "table", title, hint: hint || t.tableHint, cols: cols || t.cols, rows }),
      // Examen de unidad de 12 partes (A1 desde la unidad 10, A2, B1 y B2).
      exam(n, p) {
        const e = t.ex;
        const blocks = [
          { kind: "vocab", title: e.parole[0], hint: e.parole[1], items: p.parole, ...(t === T.it ? { placeholder: "significato" } : {}) },
          t === T.es
            ? { kind: "vocab", from: "es", title: e.contrario[0], hint: e.contrario[1], items: p.contrario }
            : { kind: "translate", from: "it", placeholder: "parola", title: e.contrario[0], hint: e.contrario[1], items: p.contrario },
          { kind: "table", title: e.verbi[0], hint: p.verbiHint || e.verbi[1], cols: p.verbiCols || t.cols, rows: p.verbi },
          { kind: "fill", title: "4. Completa", hint: p.completaHint, items: p.completa },
          { kind: "translate", from: "it", placeholder: t === T.es ? "trasforma" : "trasforma", title: "5. Trasforma", hint: p.trasformaHint, items: p.trasforma },
          { kind: "reading", title: e.leggi[0], hint: e.leggi[1], text: p.leggi.text, questions: p.leggi.questions },
          { kind: "listen", title: e.ascolta[0], hint: e.ascolta[1], script: p.ascolta.script, questions: p.ascolta.questions },
          { kind: "speak", title: e.parla[0], hint: e.parla[1], items: p.parla },
          { kind: "roleplay", title: e.role[0], hint: p.roleHint ? `${e.role[1]} ${p.roleHint}` : e.role[1], steps: p.role },
          { kind: "dictation", title: e.dettato[0], hint: e.dettato[1], items: p.dettato },
          t === T.es
            ? { kind: "translate", title: e.traduci[0], hint: e.traduci[1], items: p.traduci }
            : { kind: "translate", from: "it", placeholder: "riformula", title: e.traduci[0], hint: e.traduci[1], items: p.traduci },
          { kind: "write", title: e.scrivi[0], hint: p.scrivi.hint, rows: p.scrivi.rows || 7, items: [p.scrivi.start] },
        ];
        return { title: `Esame · Unità ${n}`, hint: p.hint || t.examHint, blocks };
      },
    };
  }
  return { at };
})();
