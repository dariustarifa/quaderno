// Unità 23 · Lavoro e studio — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[23] = {
    n: 23,
    level: "A2",
    title: "Lavoro e studio",
    goal: "Hablar de tus estudios y tu trabajo, presentarte en una entrevista y resolver trámites sin repetir palabras.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de tu formación y tu experiencia, a prepararte para una entrevista de trabajo y a hacer gestiones en una secretaría o una oficina.",
              "Gramática: los pronombres combinados (me lo, te la, glielo, ce li…): cuando en la misma frase hay un «a quién» y un «qué».",
              "Es lo que en español haces con «se lo»: «Se lo doy» = «Glielo do».",
            ],
          },
          {
            kind: "intro", title: "Me lo dai? Glielo mando", hint: "Un adelanto: dos pronombres juntos",
            text: ["Cuando van juntos, el indirecto va primero y cambia la i por e: mi → me, ti → te, ci → ce, vi → ve. Gli y le se convierten en «glie-» y se unen al directo: glielo, gliela, glieli, gliele.", "Como en español: «Me lo das?» → «Me lo dai?»."],
            examples: [
              { it: "Il curriculum? Te lo mando stasera.", es: "¿El currículum? Te lo mando esta noche." },
              { it: "La lettera? Gliel'ho già spedita.", es: "¿La carta? Ya se la he enviado." },
              { it: "Ce lo può spiegare di nuovo?", es: "¿Nos lo puede explicar otra vez?" },
            ],
          },
          { kind: "speak", title: "Che cosa fai?", hint: "Antes de empezar: ¿estudias o trabajas? ¿Qué te gusta y qué no de lo que haces?", items: ["Io studio / lavoro…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Lavoro", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il curriculum", "il colloquio", "l'annuncio di lavoro", "il contratto", "a tempo determinato",
              "a tempo indeterminato", "lo stipendio", "il capo", "il collega", "l'azienda",
              "il tirocinio / lo stage", "le ferie", "licenziare", "dimettersi", "assumere",
              "fare carriera", "il turno", "lo smart working", "la riunione", "la scadenza",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Studio", hint: "Escribe en italiano.",
            items: ["la carrera (universitaria)", "licenciarse / graduarse", "la asignatura", "aprobar un examen", "suspender un examen", "la nota", "el trabajo de fin de grado", "la matrícula", "la beca", "el instituto", "selectividad", "el máster", "la secretaría", "el plazo", "la experiencia laboral"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: glielo → Il contratto? Glielo mando domani.", items: ["me lo", "te la", "glielo", "ce li", "il colloquio", "lo stipendio", "laurearsi", "il tirocinio"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Glielo, gliela", hint: "Pronunciar los combinados",
            text: [
              "«Glielo» se dice todo junto: «llié-lo», con el sonido gli de famiglia. Igual gliela (llié-la), glieli, gliele.",
              "Cuando se pegan al verbo, la fuerza del verbo no cambia: «màn-da» → «màn-da-glie-lo». Son palabras largas: no te apresures.",
              "«Me lo», «te lo», «ce lo» son átonos: van pegados al verbo sin fuerza: «me lo dài?».",
            ],
            table: { head: ["", "suena"], rows: [["glielo", "llié-lo"], ["mandaglielo", "màn-da-llie-lo"], ["dammelo", "dàm-me-lo"], ["spiegamelo", "spiè-ga-me-lo"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite despacio, luego normal.", items: ["me lo, te lo, glielo, ce lo, ve lo", "me la, te la, gliela, ce la, ve la", "dammelo, diglielo, mandaglielo", "Gliel'ho detto. Me l'ha dato."] },
          { kind: "shadow", title: "Al lavoro", hint: "Repite con la misma melodía.", items: ["Il report? Glielo mando entro venerdì.", "Le chiavi dell'ufficio? Me le ha date il capo.", "Ce lo puoi spiegare di nuovo?", "Il contratto? Gliel'ho già firmato.", "Te lo dico domani, va bene?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I pronomi combinati", hint: "Pronombres combinados",
            text: [
              "Orden: indirecto + directo. mi → me, ti → te, ci → ce, vi → ve: me lo, te la, ce li, ve le. Gli y le (a él, a ella, a usted y a ellos) → glielo, gliela, glieli, gliele (en una sola palabra).",
              "Posición: delante del verbo conjugado («Te lo do»), pegados al infinitivo («Devo dartelo») y al imperativo de tu («Dammelo!»).",
              "En el passato prossimo el participio concuerda con el directo: «La lettera? Te l'ho mandata». «I documenti? Glieli ho dati».",
              "Ojo: «se lo» en italiano solo existe con verbos reflexivos («Se lo mette», se lo pone). Para «se lo doy a él», siempre glielo.",
            ],
            table: { head: ["", "+ lo", "+ la", "+ li / le"], rows: [["mi", "me lo", "me la", "me li / me le"], ["ti", "te lo", "te la", "te li / te le"], ["gli / le", "glielo", "gliela", "glieli / gliele"], ["ci / vi", "ce lo / ve lo", "ce la / ve la", "ce li / ve le"]] },
          },
          k.table("Combina", [
            ["mi + lo", "me lo", ""],
            ["ti + la", "", "te l'ho data"],
            ["gli + li", "", ""],
            ["le + le", "gliele", ""],
            ["ci + lo", "", ""],
            ["vi + la", "", ""],
          ], "Escribe el pronombre combinado y luego la frase en passato prossimo con «dare» (io). Ejemplo: ti + la → te la → te l'ho data.", ["pronombre", "passato con dare (io)"]),
          {
            kind: "fill", title: "Me lo, glielo…", hint: "Completa con el pronombre combinado.",
            items: [
              "Mi presti il computer? — Sì, ___ presto.", "Hai dato la relazione al capo? — Sì, ___ ho data ieri.", "Ci spieghi l'esercizio? — Sì, ___ spiego subito.", "Signora, Le mando i documenti? — Sì, ___ mandi per email.", "Ti ha restituito i libri Marco? — No, non ___ ha ancora restituiti.", "Hai detto la verità ai tuoi genitori? — Sì, ___ ho detta.", "Ragazzi, vi porto il caffè? — Sì, ___ porti, grazie!", "Il nuovo indirizzo? Scrivi___ su un foglio. (a me)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Con i verbi modali", hint: "Con poter, querer y deber",
            text: ["Con un modal, el pronombre combinado puede ir delante o pegado al infinitivo, como con los simples: «Te lo devo dire» = «Devo dirtelo».", "Y con el imperativo negativo de tu: «Non dirglielo!» = «Non glielo dire!»."],
            examples: [{ it: "Il contratto? Glielo posso mandare domani. / Posso mandarglielo domani.", es: "¿El contrato? Se lo puedo mandar mañana." }],
          },
          {
            kind: "fill", title: "Prima o dopo il verbo?", hint: "Reescribe el hueco poniendo el pronombre combinado detrás del infinitivo, pegado.",
            items: ["Te lo voglio dire. → Voglio ___.", "Glielo devo spiegare. → Devo ___.", "Me lo puoi prestare? → Puoi ___?", "Ce lo dovete dire. → Dovete ___.", "Non glielo dire! → Non ___!", "Me la vuoi mostrare? → Vuoi ___?"],
          },
          {
            kind: "intro", title: "Il curriculum italiano", hint: "Cómo se presenta uno en una entrevista",
            text: ["En una entrevista: «Mi sono laureato in… nel 2020», «Ho lavorato come… per tre anni», «Sono una persona organizzata / flessibile», «Parlo… a livello…».", "Preguntas típicas: «Mi parli di Lei», «Quali sono i suoi punti di forza?», «Perché vuole lavorare con noi?», «Dove si vede tra cinque anni?»."],
          },
          k.domanda(["Me l'ha dato il direttore.", "Gliel'ho mandato ieri.", "Sì, te lo spiego dopo pranzo.", "Ce le hanno date in segreteria.", "No, non gliel'ho ancora detto.", "Me la può mandare per email?"], "Escribe la pregunta que corresponde a cada respuesta (piensa qué es «lo» o «la»). Ejemplo: Me l'ha dato Marco. → Chi ti ha dato il libro?"),
          k.negativa(["Te lo dico.", "Gliel'ho mandata.", "Dammelo!", "Ce li hanno restituiti.", "Me la puoi prestare?"]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il colloquio", "Una candidata en una entrevista de trabajo en una agencia de viajes.", [
            { who: "Sig. Ferri", text: "Buongiorno, si accomodi. Allora, mi parli un po' di Lei." },
            { who: "Lucía", text: "Mi chiamo Lucía Martín, sono spagnola e vivo a Milano da due anni. Mi sono laureata in Turismo a Salamanca." },
            { who: "Sig. Ferri", text: "Ha esperienza nel settore?" },
            { who: "Lucía", text: "Sì, ho fatto un tirocinio di sei mesi in un'agenzia a Madrid e adesso lavoro in un albergo, alla reception." },
            { who: "Sig. Ferri", text: "Che lingue parla?" },
            { who: "Lucía", text: "Spagnolo, inglese molto bene e italiano a livello B1. Sto facendo un corso serale." },
            { who: "Sig. Ferri", text: "Bene. Il contratto è a tempo determinato, un anno, poi vediamo. Ha una lettera di referenze?" },
            { who: "Lucía", text: "Sì, me l'ha scritta il direttore dell'albergo. Gliela mando oggi per email." },
          ], ["Da quanto tempo vive a Milano Lucía?", "Che cosa ha studiato?", "Che esperienza ha?", "Che lingue parla? Come sta migliorando l'italiano?", "Che contratto le offrono? Che cosa deve mandare?"]),
          k.listen("In segreteria", "Un estudiante Erasmus en la secretaría de la universidad.", [
            { who: "Studente", text: "Buongiorno, sono uno studente Erasmus. Mi serve il certificato degli esami." },
            { who: "Impiegata", text: "Ha fatto la richiesta online?" },
            { who: "Studente", text: "Sì, la settimana scorsa." },
            { who: "Impiegata", text: "Allora è pronto. Glielo stampo subito. Le serve anche in inglese?" },
            { who: "Studente", text: "Sì, per la mia università in Spagna. Me lo può mandare anche per email?" },
            { who: "Impiegata", text: "Certo, glielo mando nel pomeriggio. Ah, e si ricordi di consegnare la tessera della biblioteca prima di partire." },
          ], ["Che cosa serve allo studente?", "Quando ha fatto la richiesta?", "In che lingua gli serve? Perché?", "Come lo riceverà?", "Che cosa deve consegnare prima di partire?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("L'università in Italia", [
            "In Italia l'università si divide in laurea triennale (tre anni) e laurea magistrale (due anni). Alcuni corsi, come Medicina o Giurisprudenza, durano cinque o sei anni.",
            "Gli esami sono spesso orali: lo studente si siede davanti al professore e risponde alle domande. Il voto va da 18 a 30; il massimo è il «30 e lode».",
            "Se il voto non ti piace, puoi rifiutarlo e ripetere l'esame in un altro appello. Per questo molti studenti finiscono l'università più tardi del previsto: sono i «fuori corso».",
            "Alla fine c'è la tesi e la discussione davanti a una commissione. Il voto di laurea va fino a 110 e lode.",
            "Il giorno della laurea è una grande festa: lo studente porta una corona d'alloro in testa e gli amici gli preparano scherzi, cartelloni e a volte vestiti ridicoli.",
          ], ["Quanto dura una laurea triennale? E una magistrale?", "Come sono spesso gli esami? Che voti ci sono?", "Che cosa si può fare se il voto non piace?", "Chi sono i «fuori corso»?", "Fino a quanto arriva il voto di laurea?", "Che cosa succede il giorno della laurea?"]),
          k.spagna("¿Cómo funciona la universidad en España? ¿Exámenes escritos u orales? ¿Cómo se celebra el final de la carrera?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di sé al lavoro", hint: "Presentarte profesionalmente",
            text: ["Formación: «Mi sono laureato / diplomato in…», «Ho frequentato un corso di…». Experiencia: «Ho lavorato come… presso… per…», «Mi occupo di…» (me encargo de).", "Cualidades: «Sono una persona precisa, puntuale, creativa, con capacità di lavorare in gruppo»."],
          },
          k.rispondi(["Che cosa hai studiato? Dove?", "Che lavoro fai o vorresti fare?", "Qual è stato il tuo primo lavoro?", "Che cosa ti piace del tuo lavoro o dei tuoi studi? E che cosa no?", "Hai mai fatto un colloquio di lavoro? Com'è andato?", "Quali sono i tuoi punti di forza e i tuoi punti deboli?"]),
          { kind: "speak", title: "Rispondi con i pronomi", hint: "Responde usando un pronombre combinado. Ejemplo: Mi presti la penna? → Sì, te la presto.", items: ["Mi dai il tuo numero?", "Hai mandato il curriculum all'azienda?", "Ci spieghi la regola?", "Hai detto la notizia a tua sorella?", "Il capo ti ha dato le ferie?", "Mi puoi prestare i tuoi appunti?"] },
          {
            kind: "roleplay", title: "Il colloquio di lavoro", hint: "Tienes una entrevista en una empresa italiana. La IA hace de entrevistador y hará preguntas difíciles. Usa «Lei».",
            steps: ["Saluda y preséntate.", "Habla de tu formación y experiencia.", "Explica por qué quieres trabajar allí.", "Responde a una pregunta difícil (punto débil, sueldo…).", "Pregunta por el contrato y el horario, y despídete."],
          },
          {
            kind: "roleplay", title: "Il collega pasticcione", hint: "Un compañero de trabajo ha perdido unos documentos que le diste. La IA hace del compañero. Es informal.",
            steps: ["Pregúntale si le dio los documentos al jefe.", "Él no los encuentra: reacciona.", "Pregunta si se los ha dado a otra persona.", "Buscad una solución: ¿se los mandas otra vez?", "Cerrad el tema con calma."],
          },
          { kind: "speak", title: "Il mio percorso", hint: "Habla durante un minuto y medio de tu formación y tu experiencia laboral, como en una entrevista.", items: ["Mi sono laureato / laureata…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["¿El informe? Se lo mando mañana al jefe.", "¿Me lo puedes explicar otra vez?", "Te la doy después de la reunión.", "Me licencié en Economía en 2019.", "Tengo un contrato temporal de seis meses.", "¿Las notas? Nos las han dado hoy.", "No se lo digas a nadie.", "He suspendido el examen de Historia."]),
          { kind: "write", title: "La lettera di presentazione", hint: "Escribe una carta de presentación (10–12 frases) para un trabajo en Italia que te interese: quién eres, tu formación, tu experiencia, por qué quieres el puesto y tu disponibilidad.", rows: 12, items: ["Gentile responsabile del personale,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: pronomi combinati", ["glielo", "me la", "ce li", "dammelo", "te l'ho detto", "gliele"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Gliel'ho già mandato.", "Me lo puoi spiegare?", "Ho un contratto a tempo determinato.", "Mi sono laureata nel 2021.", "Non dirglielo!"]),
          k.media([
            { type: "Película", title: "Tutta la vita davanti (Paolo Virzì, 2008)", where: "Busca dónde verla en JustWatch", why: "Una licenciada en Filosofía con matrícula de honor acaba trabajando en un call center. Comedia amarga sobre el trabajo precario." },
            { type: "Película", title: "Smetto quando voglio (2014)", where: "Busca dónde verla en JustWatch", why: "Si no la viste en la unidad 2, ahora la entenderás mucho mejor: investigadores sin trabajo." },
            { type: "Podcast", title: "Il Post · Morning", where: "Spotify, app Il Post", why: "Un repaso de los periódicos de cada mañana. Nivel alto: escucha 5 minutos y quédate con una noticia sobre trabajo o economía." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta la historia laboral de la protagonista: qué estudió, dónde trabaja y qué problemas tiene.", items: ["Si è laureata… Lavora…"] },
        ],
      },
    ],

    exam: k.exam(23, {
      parole: ["il colloquio", "a tempo indeterminato", "lo stipendio", "il tirocinio", "dimettersi", "assumere", "le ferie", "la scadenza", "il 30 e lode", "i fuori corso"],
      contrario: ["aprobar un examen", "suspender", "la beca", "el plazo", "licenciarse", "el contrato temporal"],
      verbiHint: "Escribe el pronombre combinado y úsalo en passato prossimo con «mandare» (io).",
      verbiCols: ["pronombre", "passato con mandare (io)"],
      verbi: [["mi + la", "", ""], ["gli + lo", "", ""], ["ci + li", "", ""], ["le (a lei) + le", "", ""]],
      completaHint: "Completa con el pronombre combinado (y la terminación del participio si hace falta).",
      completa: ["Mi presti il libro? — Sì, ___ presto.", "Hai dato le chiavi a Luca? — Sì, ___ ho dat___.", "Ci spiega la lezione? — Certo, ___ spiego subito.", "Il contratto? Signor Neri, ___ mando oggi.", "La notizia? Non ___ ho detta a nessuno. (a voi)", "Vuoi i miei appunti? Posso prestar___. (a te, i)", "Diglielo! → Non ___ dire!", "Le foto? Me ___ ha mandat___ Marta."],
      trasformaHint: "Sustituye los dos complementos por un pronombre combinado.",
      trasforma: ["Do il libro a Marco.", "Ho mandato la mail alla professoressa.", "Spiegami la regola!", "Ci hanno dato i risultati.", "Devo restituire le chiavi a te.", "Ho detto la verità ai miei genitori."],
      leggi: {
        text: [
          "Annuncio: Cercasi receptionist per hotel 4 stelle a Verona. Requisiti: diploma o laurea in turismo, inglese e tedesco fluenti, esperienza di almeno un anno.",
          "Offriamo: contratto a tempo determinato di 8 mesi (marzo–ottobre), possibilità di rinnovo, turni di 8 ore anche nel fine settimana, vitto e alloggio.",
          "Inviare il curriculum con foto e una lettera di presentazione entro il 15 gennaio. I candidati selezionati saranno contattati per un colloquio online.",
        ],
        questions: ["Che lavoro offrono? Dove?", "Quali lingue servono?", "Che tipo di contratto è? Che cosa offrono oltre allo stipendio?", "Che cosa bisogna mandare e entro quando?"],
      },
      ascolta: {
        script: [
          { who: "Capo", text: "Marta, ha finito la presentazione per il cliente?" },
          { who: "Marta", text: "Quasi. Gliela mando entro le cinque." },
          { who: "Capo", text: "Bene. E i dati delle vendite? Me li ha chiesti il direttore." },
          { who: "Marta", text: "Glieli ho già mandati stamattina, con una copia anche a Lei." },
          { who: "Capo", text: "Perfetto, grazie. Domani mi può sostituire alla riunione delle nove?" },
          { who: "Marta", text: "Sì, nessun problema." },
        ],
        questions: ["Quando manderà Marta la presentazione?", "Chi ha chiesto i dati delle vendite?", "Quando li ha mandati Marta? A chi?", "Che cosa le chiede il capo per domani?"],
      },
      parla: ["Presentati come in un colloquio di lavoro.", "Racconta i tuoi studi e il tuo primo lavoro.", "Rispondi con i pronomi: Mi presti la macchina? Hai detto la verità a Marco? Ci mandi le foto?", "Spiega come funziona l'università nel tuo paese."],
      roleHint: "Usa «Lei».",
      role: ["Llamas a una empresa por un anuncio de trabajo: pregunta si el puesto sigue libre.", "Pregunta qué documentos tienes que enviar y a quién.", "Confirma que se los mandarás hoy y despídete."],
      dettato: ["Gliel'ho detto ieri.", "Me lo mandi?", "il colloquio di lavoro", "Ce le hanno date.", "Non dirmelo!", "Mi sono dimesso."],
      traduci: ["¿Me prestas tu ordenador? — Sí, te lo presto.", "¿El currículum? Se lo he mandado a la directora.", "Nos lo han explicado dos veces.", "Tengo que decírselo a mis padres.", "Me han ofrecido un contrato indefinido.", "No se lo digas a Marco."],
      scrivi: { hint: "Escribe un correo (60–80 palabras) a una empresa para enviar tu candidatura: qué puesto te interesa, qué adjuntas y cuándo estás disponible para una entrevista.", start: "Gentile dottoressa Rinaldi," },
    }),
  };
})();
