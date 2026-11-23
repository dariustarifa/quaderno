// Unità 9 · Tempo libero
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[9] = {
  n: 9,
  level: "A1",
  title: "Tempo libero",
  goal: "Hablar de tus gustos y aficiones, de con qué frecuencia las haces y reaccionar a los gustos de otros.",
  pages: [
    /* 1 ------------------------------------------------------------ */
    {
      title: "Introduzione",
      skill: "mixto",
      blocks: [
        {
          kind: "intro",
          title: "In questa unità",
          hint: "En esta unidad",
          text: [
            "Vas a aprender a hablar de lo que te gusta y de lo que no, de tus aficiones y de con qué frecuencia las haces. También a reaccionar: «a mí también», «a mí no».",
            "Gramática: el verbo piacere (mi piace / mi piacciono), los pronombres que lo acompañan (mi, ti, gli, le…), anche a me / neanche a me y las expresiones de frecuencia.",
            "Piacere funciona casi igual que «gustar». La trampa está en un pronombre: «gli».",
          ],
        },
        {
          kind: "intro",
          title: "Mi piace!",
          hint: "Un adelanto: me gusta",
          text: [
            "Como en español: lo que gusta es el sujeto. Una cosa o un verbo: «mi piace». Varias cosas: «mi piacciono».",
          ],
          examples: [
            { it: "Mi piace il cinema.", es: "Me gusta el cine." },
            { it: "Mi piace leggere.", es: "Me gusta leer." },
            { it: "Mi piacciono le serie italiane.", es: "Me gustan las series italianas." },
            { it: "Non mi piace correre.", es: "No me gusta correr." },
          ],
        },
        {
          kind: "speak",
          title: "Che cosa ti piace?",
          hint: "Antes de empezar: di tres cosas que te gustan y una que no, como puedas.",
          items: ["Mi piace… Non mi piace…"],
        },
      ],
    },

    /* 2 ------------------------------------------------------------ */
    {
      title: "Parole",
      skill: "escritura",
      blocks: [
        {
          kind: "vocab",
          title: "Gli hobby",
          hint: "Busca cada expresión y escribe su traducción al español.",
          items: [
            "suonare la chitarra", "cantare", "ballare", "dipingere", "disegnare",
            "cucinare", "viaggiare", "fare fotografie", "giocare ai videogiochi", "nuotare",
            "correre", "andare in bicicletta", "fare escursioni", "guardare le serie", "ascoltare musica",
            "fare giardinaggio", "andare in palestra", "giocare a calcio", "giocare a scacchi", "fare volontariato",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Gusti e frequenza",
          hint: "Escribe en italiano.",
          items: [
            "me encanta", "lo odio", "no me gusta nada", "prefiero", "el tiempo libre",
            "la afición", "aburrido", "divertido", "relajante", "cansado (que cansa)",
            "una vez a la semana", "dos veces al mes", "de vez en cuando", "casi nunca", "todos los días",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: ogni tanto → Ogni tanto vado a teatro.",
          items: ["mi piace", "mi piacciono", "ogni tanto", "suonare", "divertente", "anche a me", "neanche", "preferire"],
        },
      ],
    },

    /* 3 ------------------------------------------------------------ */
    {
      title: "Suoni",
      skill: "habla",
      blocks: [
        {
          kind: "intro",
          title: "Piace, piacciono",
          hint: "Sonidos de esta unidad",
          text: [
            "«Piace» se dice «pià-che»; «piacciono» lleva doble c y la fuerza en la primera a: «pià-cio-no». No digas «piaciono».",
            "«Gli» como pronombre (a él) suena igual que en famiglia: «Gli piace il calcio».",
            "En «A me sì!» o «A me no!» la fuerza va en «me» y en la respuesta: así marcas el contraste con la otra persona.",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["piace", "pià-che"],
              ["piacciono", "pià-cio-no (c larga)"],
              ["scacchi", "skàk-ki"],
              ["dipingere", "di-pìn-ge-re"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Escucha y repite. Marca bien la c doble de piacciono.",
          items: [
            "piace, piacciono, mi piace, mi piacciono",
            "gli piace, le piace, ci piace",
            "scacchi, giocare a scacchi",
            "dipingere, disegnare, suonare",
            "ogni tanto, quasi mai, spesso",
          ],
        },
        {
          kind: "shadow",
          title: "Botta e risposta",
          hint: "Repite cada pareja. La reacción lleva la fuerza en «me».",
          items: [
            "Mi piace il jazz. — Anche a me!",
            "Non mi piace il calcio. — Neanche a me.",
            "Mi piace ballare. — A me no!",
            "Non mi piacciono i film horror. — A me sì!",
            "Ti piace cucinare? — Sì, tantissimo!",
          ],
        },
      ],
    },

    /* 4 ------------------------------------------------------------ */
    {
      title: "Verbi",
      skill: "escritura",
      blocks: [
        {
          kind: "intro",
          title: "Il verbo piacere",
          hint: "El verbo piacere (gustar)",
          text: [
            "Piacere casi solo se usa en dos formas: «piace» (con una cosa o un verbo) y «piacciono» (con varias cosas).",
            "Delante va un pronombre: mi (me), ti (te), gli (le, a él), le (le, a ella), Le (le, a usted), ci (nos), vi (os), gli (les, a ellos).",
            "La gran trampa: «gli» es «a él» y «le» es «a ella» o «a usted». En español es al revés de lo que parece: «Gli piace il calcio» = A él le gusta el fútbol.",
            "También se puede decir con «a» + persona, sobre todo para dar énfasis: «A Marco piace il calcio», «A me piace, a te no».",
          ],
          examples: [
            { it: "Ti piace la pizza? — Sì, mi piace molto.", es: "¿Te gusta la pizza? — Sí, me gusta mucho." },
            { it: "A Luca piacciono i videogiochi. Gli piacciono molto.", es: "A Luca le gustan los videojuegos. Le gustan mucho." },
            { it: "A Giulia piace dipingere. Le piace molto.", es: "A Giulia le gusta pintar. Le gusta mucho." },
            { it: "Signora, Le piace il teatro?", es: "Señora, ¿le gusta el teatro?" },
          ],
        },
        {
          kind: "table",
          title: "Piace o piacciono?",
          hint: "Completa la tabla: el pronombre más piace (con una cosa o un verbo) o piacciono (con varias cosas).",
          cols: ["il cinema / ballare", "i film italiani"],
          rows: [
            ["a me", "mi piace", ""],
            ["a te", "", ""],
            ["a lui", "", ""],
            ["a lei / a Lei", "", ""],
            ["a noi", "", ""],
            ["a voi", "", "vi piacciono"],
            ["a loro", "", ""],
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla con verbos para hablar de aficiones. Divertirsi (divertirse) es reflexivo, como svegliarsi.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["correre", "", "", "", "", "", ""],
            ["suonare", "", "suoni", "", "", "", ""],
            ["dipingere", "", "", "", "", "dipingono", ""],
            ["preferire", "preferisco", "", "", "", "", ""],
            ["divertirsi", "", "", "", "ci divertiamo", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Piace o piacciono?",
          hint: "Completa con piace o piacciono.",
          items: [
            "Mi ___ molto la musica classica.",
            "Ti ___ i libri gialli?",
            "A Marco non ___ cucinare.",
            "Ci ___ le passeggiate in montagna.",
            "Vi ___ questo ristorante?",
            "A mia madre ___ i fiori.",
            "Non mi ___ alzarmi presto.",
          ],
        },
        {
          kind: "fill",
          title: "Mi, ti, gli, le…",
          hint: "Completa con el pronombre que corresponde a la persona entre paréntesis.",
          items: [
            "(a me) ___ piace il cinema.",
            "(a lui) ___ piacciono le moto.",
            "(a lei) Non ___ piace il calcio.",
            "(a noi) ___ piace viaggiare.",
            "(a voi) ___ piacciono gli scacchi?",
            "(a Lei, signora) ___ piace il caffè?",
            "(a te) ___ piace ballare?",
          ],
        },
      ],
    },

    /* 5 ------------------------------------------------------------ */
    {
      title: "Grammatica",
      skill: "escritura",
      blocks: [
        {
          kind: "intro",
          title: "Anche a me, neanche a me",
          hint: "A mí también, a mí tampoco",
          text: [
            "Para estar de acuerdo con una frase positiva: «Anche a me» (a mí también). Con una negativa: «Neanche a me» o «Nemmeno a me» (a mí tampoco).",
            "Para no estar de acuerdo: «A me no» (después de una positiva) y «A me sì» (después de una negativa).",
            "Con los demás verbos es igual, pero sin «a»: «Io gioco a tennis. — Anch'io!», «Non cucino mai. — Neanch'io».",
          ],
          table: {
            head: ["", "de acuerdo", "en desacuerdo"],
            rows: [
              ["Mi piace il jazz.", "Anche a me.", "A me no."],
              ["Non mi piace il jazz.", "Neanche a me.", "A me sì."],
              ["Suono la chitarra.", "Anch'io.", "Io no."],
              ["Non suono niente.", "Neanch'io.", "Io sì."],
            ],
          },
        },
        {
          kind: "fill",
          title: "Rispondi",
          hint: "Reacciona a cada frase con lo que se pide entre paréntesis: anche a me, neanche a me, a me sì, a me no, anch'io, neanch'io, io sì o io no.",
          items: [
            "Mi piace il mare. (de acuerdo) — ___",
            "Non mi piacciono i gatti. (de acuerdo) — ___",
            "Mi piace correre. (en desacuerdo) — ___",
            "Non mi piace il teatro. (en desacuerdo) — ___",
            "Vado in palestra tre volte alla settimana. (de acuerdo) — ___",
            "Non guardo mai la tv. (en desacuerdo) — ___",
          ],
        },
        {
          kind: "intro",
          title: "Quante volte?",
          hint: "Con qué frecuencia",
          text: [
            "Ya conoces sempre, spesso, a volte y non… mai. Para ser más preciso: una volta al giorno, due volte alla settimana, tre volte al mese, una volta all'anno.",
            "Más expresiones: ogni giorno / tutti i giorni (cada día), ogni tanto (de vez en cuando), quasi mai (casi nunca), raramente.",
            "Para preguntar: «Quante volte alla settimana vai in palestra?», «Ogni quanto vai al cinema?».",
          ],
          examples: [
            { it: "Nuoto due volte alla settimana.", es: "Nado dos veces por semana." },
            { it: "Ogni tanto vado a un concerto.", es: "De vez en cuando voy a un concierto." },
            { it: "Non vado quasi mai a teatro.", es: "Casi nunca voy al teatro." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Sì, mi piace molto. → Ti piace…?",
          items: [
            "Sì, mi piacciono molto i film di Fellini.",
            "Vado in palestra tre volte alla settimana.",
            "Nel tempo libero suono il pianoforte.",
            "No, a mio fratello non piace leggere.",
            "Preferisco il mare.",
            "Sì, signora, mi piace molto Roma.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Mi piace ballare.", "Gli piacciono i videogiochi.", "Ci piace il calcio.", "Suono la chitarra.", "Le piacciono i musei."],
        },
      ],
    },

    /* 6 ------------------------------------------------------------ */
    {
      title: "Ascolta",
      skill: "habla",
      blocks: [
        {
          kind: "listen",
          title: "Che cosa ti piace fare?",
          hint: "Dos compañeros nuevos de clase se conocen. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Nicola", text: "Allora, Valeria, che cosa fai nel tempo libero?" },
            { who: "Valeria", text: "Mi piace molto camminare in montagna. Faccio un'escursione quasi ogni domenica." },
            { who: "Nicola", text: "Anche a me piace la montagna! Ma vado solo d'estate." },
            { who: "Valeria", text: "E tu? Che cosa ti piace fare?" },
            { who: "Nicola", text: "Suono la batteria in un gruppo. Proviamo due volte alla settimana." },
            { who: "Valeria", text: "Che bello! Che musica suonate?" },
            { who: "Nicola", text: "Rock italiano. Ti piace il rock?" },
            { who: "Valeria", text: "Mmm, non molto. Preferisco il jazz. Ma vengo volentieri a un vostro concerto!" },
          ],
          questions: [
            "Che cosa fa Valeria nel tempo libero? Quante volte?",
            "A Nicola piace la montagna? Quando ci va?",
            "Che strumento suona Nicola?",
            "Quante volte alla settimana prova il gruppo?",
            "A Valeria piace il rock? Che cosa preferisce?",
          ],
        },
        {
          kind: "listen",
          title: "Alla scuola di ballo",
          hint: "Un hombre se informa en una escuela de baile. Responde en voz alta.",
          script: [
            { who: "Segretaria", text: "Buonasera, posso aiutarLa?" },
            { who: "Sig. Gallo", text: "Buonasera. Mia moglie e io vorremmo fare un corso di ballo. Che corsi avete?" },
            { who: "Segretaria", text: "Abbiamo salsa, tango e liscio. A Lei che cosa piace?" },
            { who: "Sig. Gallo", text: "A me piace il tango, ma a mia moglie piace di più la salsa." },
            { who: "Segretaria", text: "La salsa è il martedì e il giovedì alle otto. Il tango solo il venerdì." },
            { who: "Sig. Gallo", text: "E quanto costa?" },
            { who: "Segretaria", text: "Cinquanta euro al mese a persona, per due lezioni alla settimana." },
            { who: "Sig. Gallo", text: "Va bene, allora proviamo la salsa. Così mia moglie è contenta!" },
          ],
          questions: [
            "Che cosa vogliono fare il signor Gallo e sua moglie?",
            "Che corsi ci sono?",
            "Che cosa piace al signor Gallo? E alla moglie?",
            "Quando c'è il corso di salsa?",
            "Che cosa decidono? Perché?",
          ],
        },
      ],
    },

    /* 7 ------------------------------------------------------------ */
    {
      title: "Leggi",
      skill: "mixto",
      blocks: [
        {
          kind: "reading",
          title: "Gli italiani e il tempo libero",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "Che cosa fanno gli italiani nel tempo libero? Prima di tutto, stanno con gli amici e con la famiglia: una cena, un aperitivo, una passeggiata.",
            "Lo sport più seguito è il calcio. Molti italiani hanno una squadra del cuore e la domenica guardano la partita allo stadio, al bar o a casa.",
            "Ma gli italiani non guardano solo lo sport: molti vanno in palestra, corrono, nuotano o vanno in bicicletta. E in montagna, d'estate, ci sono tante persone che fanno escursioni.",
            "Si legge poco: circa quattro italiani su dieci leggono almeno un libro all'anno. Però le librerie e i festival letterari sono molto popolari.",
            "Molto diffuso è anche il volontariato: milioni di italiani aiutano gratis in ospedali, associazioni e parrocchie, spesso una o due volte alla settimana.",
          ],
          questions: [
            "Con chi passano il tempo libero gli italiani, prima di tutto?",
            "Qual è lo sport più seguito? Dove si guarda la partita?",
            "Quali sport fanno gli italiani?",
            "Gli italiani leggono molto?",
            "Che cos'è il volontariato? Quante volte lo fanno, spesso?",
            "E a te, che cosa piace fare tra queste attività?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Qué hace la gente en España en su tiempo libre? ¿Es parecido? Explícalo en italiano con 3 o 4 frases, en voz alta.",
          items: ["In Spagna…"],
        },
      ],
    },

    /* 8 ------------------------------------------------------------ */
    {
      title: "Parla",
      skill: "habla",
      blocks: [
        {
          kind: "intro",
          title: "Quanto ti piace?",
          hint: "Matizar los gustos",
          text: [
            "De más a menos: adoro… / mi piace tantissimo → mi piace molto → mi piace abbastanza → non mi piace molto → non mi piace per niente → odio…",
            "Para dar una razón: «perché è divertente / rilassante / noioso». Para comparar: «Preferisco il mare alla montagna».",
          ],
          examples: [
            { it: "Adoro cucinare: è rilassante.", es: "Me encanta cocinar: es relajante." },
            { it: "Il calcio non mi piace per niente.", es: "El fútbol no me gusta nada." },
            { it: "Preferisco leggere che guardare la tv.", es: "Prefiero leer a ver la tele." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas y con una razón.",
          items: [
            "Che cosa fai nel tempo libero?",
            "Fai sport? Quante volte alla settimana?",
            "Che musica ti piace?",
            "Ti piacciono i film italiani? Quali conosci?",
            "C'è qualcosa che odi fare?",
            "Preferisci il mare o la montagna? Perché?",
            "Che cosa piace fare al tuo migliore amico o alla tua migliore amica?",
          ],
        },
        {
          kind: "speak",
          title: "E a te?",
          hint: "Reacciona a cada frase con anche a me, neanche a me, a me sì o a me no, y añade una razón.",
          items: [
            "Mi piacciono i film d'azione.",
            "Non mi piace cucinare.",
            "Mi piace alzarmi presto la domenica.",
            "Non mi piacciono i cani.",
            "Mi piace ballare in discoteca.",
            "Non mi piace viaggiare in aereo.",
          ],
        },
        {
          kind: "roleplay",
          title: "Un hobby in comune",
          hint: "Tú y un amigo queréis empezar una actividad juntos. La IA hace del amigo. Buscad algo que os guste a los dos.",
          steps: [
            "Propón una actividad y explica por qué te gusta.",
            "A tu amigo no le gusta: pregunta qué le gusta a él.",
            "Comentad dos o tres opciones más.",
            "Elegid una y decidid cuántas veces a la semana.",
            "Decidid qué día empezáis.",
          ],
        },
        {
          kind: "roleplay",
          title: "Iscrizione in palestra",
          hint: "Vas a apuntarte a un gimnasio. La IA hace de recepcionista. Usa «Lei».",
          steps: [
            "Saluda y di que quieres información.",
            "Explica qué deportes te gustan y cuáles no.",
            "Pregunta qué clases hay y qué días.",
            "Pregunta cuánto cuesta al mes.",
            "Elige una clase y di cuántas veces a la semana vas a ir.",
            "Da las gracias y despídete.",
          ],
        },
        {
          kind: "speak",
          title: "Le mie passioni",
          hint: "Habla un minuto de tus aficiones: qué haces, con quién, con qué frecuencia y por qué te gusta. Añade algo que no soportas.",
          items: ["La mia passione è…"],
        },
      ],
    },

    /* 9 ------------------------------------------------------------ */
    {
      title: "Scrivi",
      skill: "escritura",
      blocks: [
        {
          kind: "translate",
          title: "Traduci in italiano",
          hint: "Traduce al italiano.",
          items: [
            "Me gusta mucho viajar.",
            "Me gustan las películas italianas.",
            "A él no le gusta el fútbol.",
            "A ella le encanta pintar.",
            "¿Os gustan los videojuegos?",
            "Voy a la piscina dos veces por semana.",
            "— No me gusta correr. — A mí tampoco.",
            "De vez en cuando vamos a un concierto.",
          ],
        },
        {
          kind: "write",
          title: "Il mio profilo",
          hint: "Escribe tu perfil para una app de intercambio de idiomas: preséntate y habla de tus aficiones, de qué te gusta, qué no y con qué frecuencia haces cada cosa. Entre 6 y 8 frases.",
          rows: 8,
          items: ["Ciao! Sono…"],
        },
      ],
    },

    /* 10 ----------------------------------------------------------- */
    {
      title: "Ripasso e immersione",
      skill: "mixto",
      blocks: [
        {
          kind: "dictation",
          title: "Dettato: espressioni",
          hint: "Escucha y escribe lo que oyes.",
          items: ["due volte alla settimana", "ogni tanto", "quasi mai", "mi piacciono", "gli piace", "neanche a me"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Ti piace ballare?", "Mi piacciono gli scacchi.", "A lei piace dipingere.", "Preferisco il mare.", "Anch'io suono la chitarra."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Canción", title: "Azzurro, Adriano Celentano", where: "Spotify, YouTube", why: "Clásico de 1968 sobre un verano aburrido en la ciudad. «Azzurro» es la palabra de tu ejemplo: escucha cuántas veces sale." },
            { type: "Película", title: "L'allenatore nel pallone (1984)", where: "Busca dónde verla en JustWatch", why: "Comedia de culto sobre un entrenador de fútbol desastroso. Para entender la pasión italiana por el calcio." },
            { type: "Podcast", title: "Podcast Italiano", where: "Spotify, YouTube", why: "Davide habla de cultura y aficiones italianas. Tiene episodios para principiantes con transcripción." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas).",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Di qué te ha gustado y qué no de lo que has visto o escuchado, y por qué. Usa piace / piacciono.",
          items: ["Mi piace… perché… Non mi piacciono…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 9",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["suonare", "dipingere", "fare escursioni", "ogni tanto", "quasi mai", "noioso", "rilassante", "gli scacchi"],
      },
      {
        kind: "table",
        title: "2. Piacere",
        hint: "Completa la tabla.",
        cols: ["la musica", "i libri"],
        rows: [
          ["a me", "", ""],
          ["a lui", "", ""],
          ["a lei", "", ""],
          ["a noi", "", ""],
          ["a loro", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con piace / piacciono, un pronombre o una reacción (anche a me, neanche a me…).",
        items: [
          "Ti ___ i film horror?",
          "A Marco ___ giocare a tennis.",
          "(a lei) Non ___ piace cucinare.",
          "(a lui) ___ piacciono le moto.",
          "— Non mi piace il caffè. — ___ (de acuerdo)",
          "— Mi piace nuotare. — ___ (en desacuerdo)",
          "Vado in palestra tre ___ alla settimana.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Chiara", text: "Che cosa fai il sabato, Tommaso?" },
          { who: "Tommaso", text: "La mattina gioco a calcetto con gli amici, il pomeriggio dormo!" },
          { who: "Chiara", text: "Ti piace il calcio, allora." },
          { who: "Tommaso", text: "Moltissimo. E a te?" },
          { who: "Chiara", text: "Per niente. A me piace leggere e ogni tanto vado a teatro." },
          { who: "Tommaso", text: "Io a teatro non vado quasi mai. Forse è il momento di provare!" },
        ],
        questions: ["Che cosa fa Tommaso il sabato mattina?", "A Chiara piace il calcio?", "Che cosa piace a Chiara?", "Tommaso va spesso a teatro?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Parla dei tuoi hobby per un minuto, con la frequenza.",
          "Di' due cose che ti piacciono e due che non ti piacciono, con il perché.",
          "Che cosa piace fare a una persona della tua famiglia?",
          "Chiedi a una signora che cosa le piace fare nel tempo libero (formale).",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Mi piacciono i musei.", "una volta al mese", "Gli piace correre.", "Neanche a me."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "A mi hermano le gustan los videojuegos.",
          "¿Le gusta el teatro, señor?",
          "Casi nunca voy a la piscina.",
          "No nos gusta nada el frío.",
        ],
      },
    ],
  },
};
