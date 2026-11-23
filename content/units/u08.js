// Unità 8 · In città
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[8] = {
  n: 8,
  level: "A1",
  title: "In città",
  goal: "Orientarte por la ciudad: preguntar dónde está algo, entender las indicaciones y darlas.",
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
            "Vas a aprender a moverte por una ciudad: preguntar por un sitio, entender cómo llegar, dar indicaciones y hablar de tu barrio.",
            "Gramática: las preposiciones articuladas (al, nel, sul, dal, del…), sapere y conoscere, y unas fórmulas para dar indicaciones.",
            "Es una unidad clave: las preposiciones articuladas aparecen en casi todas las frases a partir de ahora.",
          ],
        },
        {
          kind: "intro",
          title: "Scusi, dov'è…?",
          hint: "Preguntar por un sitio",
          text: [
            "Para preguntar por un sitio concreto: «Scusi, dov'è la stazione?». Si buscas uno cualquiera: «Scusi, c'è una farmacia qui vicino?».",
            "Con desconocidos se usa «Lei», por eso «scusi» y no «scusa».",
          ],
          examples: [
            { it: "Scusi, dov'è il Duomo?", es: "Perdone, ¿dónde está la catedral?" },
            { it: "C'è una banca qui vicino?", es: "¿Hay un banco por aquí cerca?" },
            { it: "È lontano? — No, sono cinque minuti a piedi.", es: "¿Está lejos? — No, son cinco minutos andando." },
          ],
        },
        {
          kind: "speak",
          title: "La tua città",
          hint: "Antes de empezar: di qué sitios hay en tu ciudad o en tu barrio, con las palabras que ya sabes.",
          items: ["Nella mia città c'è… ci sono…"],
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
          title: "In città",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "la piazza", "la via", "la strada", "il semaforo", "l'incrocio",
            "la fermata dell'autobus", "la stazione", "la farmacia", "la banca", "l'ufficio postale",
            "il supermercato", "la chiesa", "il comune", "il museo", "il parcheggio",
            "il marciapiede", "l'edicola", "la tabaccheria", "il ponte", "l'angolo",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Le indicazioni",
          hint: "Escribe en italiano.",
          items: [
            "todo recto", "girar a la derecha", "a la izquierda", "cruzar (la calle)",
            "al final de la calle", "la primera calle", "la segunda a la izquierda", "cerca",
            "lejos", "andando / a pie", "coger el autobús", "bajarse (del autobús)",
            "perderse", "el mapa", "el barrio",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: semaforo → Al semaforo giri a destra.",
          items: ["sempre dritto", "il semaforo", "vicino alla", "nella piazza", "sapere", "conoscere", "a piedi", "il quartiere"],
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
          title: "Della, nella, sulla",
          hint: "Las dobles de las preposiciones",
          text: [
            "Las preposiciones con la, lo, le, gli llevan doble l: della, nella, sulla, allo, dalle. Si dices «dela» o «nela», suena extranjero: alarga la l.",
            "Con gli suenan «-gli»: negli, sugli, agli, degli, como en famiglia.",
            "Delante de vocal la a se pierde: all'angolo, nell'ufficio, dell'ospedale. Se pronuncia todo junto, sin pausa: «nellufficio».",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["della, nella, sulla", "doble l larga"],
              ["negli, sugli, agli", "-lli como en famiglia"],
              ["all'angolo, nell'ufficio", "todo junto"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Alarga la doble l y une la palabra siguiente.",
          items: [
            "della, nella, sulla, alla, dalla",
            "dello, nello, sullo, allo, dallo",
            "negli, sugli, agli, degli, dagli",
            "all'angolo, nell'ufficio, dell'ospedale",
            "in fondo alla strada, vicino alla stazione",
          ],
        },
        {
          kind: "shadow",
          title: "Indicazioni",
          hint: "Repite con la misma melodía. En las indicaciones la voz baja al final de cada paso.",
          items: [
            "Scusi, dov'è la stazione?",
            "Vada sempre dritto fino al semaforo.",
            "Poi giri a sinistra.",
            "Prenda la seconda strada a destra.",
            "La farmacia è all'angolo, accanto alla banca.",
            "Sono dieci minuti a piedi.",
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
          title: "Sapere o conoscere?",
          hint: "Saber y conocer",
          text: [
            "Funcionan como en español. «Sapere» es saber un dato o saber hacer algo: «Sa dov'è la stazione?», «So nuotare». «Conoscere» es conocer una persona o un lugar: «Conosci Roma?», «Conosco Marco».",
            "Sapere es irregular: so, sai, sa, sappiamo, sapete, sanno. Conoscere es regular, pero ojo a la pronunciación: conosco (ko), conosci (shi).",
            "La pregunta más útil de esta unidad es formal: «Scusi, sa dov'è…?».",
          ],
          examples: [
            { it: "Scusi, sa dov'è via Dante?", es: "Perdone, ¿sabe dónde está la calle Dante?" },
            { it: "Non lo so, non sono di qui.", es: "No lo sé, no soy de aquí." },
            { it: "Conosci un buon ristorante in centro?", es: "¿Conoces un buen restaurante en el centro?" },
          ],
        },
        {
          kind: "intro",
          title: "Vada, giri, prenda",
          hint: "Fórmulas para dar indicaciones",
          text: [
            "Para indicar el camino a un desconocido se usa el imperativo de Lei. Lo estudiarás en A2; de momento apréndete estas formas como fórmulas.",
            "Entre amigos, con tu, se suele usar el presente: «Vai dritto, giri a destra…».",
          ],
          table: {
            head: ["", "con Lei", "con tu"],
            rows: [
              ["andare", "vada", "vai"],
              ["girare", "giri", "giri"],
              ["prendere", "prenda", "prendi"],
              ["attraversare", "attraversi", "attraversi"],
            ],
          },
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla en presente.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["sapere", "so", "", "", "", "", ""],
            ["conoscere", "", "conosci", "", "", "", ""],
            ["girare", "", "", "", "", "", ""],
            ["scendere", "", "", "", "scendiamo", "", ""],
            ["attraversare", "", "", "", "", "", "attraversano"],
          ],
        },
        {
          kind: "fill",
          title: "Sapere o conoscere?",
          hint: "Completa con sapere o conoscere en la forma correcta.",
          items: [
            "Scusi, ___ dov'è la fermata dell'autobus?",
            "Tu ___ Firenze?",
            "Noi non ___ il nome della via.",
            "Io ___ bene questo quartiere: abito qui.",
            "Voi ___ a che ora apre il museo?",
            "Loro ___ tutti i bar del centro!",
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
          title: "Le preposizioni articolate",
          hint: "Las preposiciones con artículo",
          text: [
            "En español «a + el» se une en «al» y «de + el» en «del». En italiano se unen cinco preposiciones (di, a, da, in, su) con todos los artículos.",
            "La preposición cambia un poco: di → de-, in → ne-. Y se añade el artículo: di + la = della, in + il = nel, su + gli = sugli.",
            "Con, per, tra y fra van separadas: con il, per la, tra le.",
          ],
          table: {
            head: ["", "di", "a", "da", "in", "su"],
            rows: [
              ["il", "del", "al", "dal", "nel", "sul"],
              ["lo", "dello", "allo", "dallo", "nello", "sullo"],
              ["l'", "dell'", "all'", "dall'", "nell'", "sull'"],
              ["la", "della", "alla", "dalla", "nella", "sulla"],
              ["i", "dei", "ai", "dai", "nei", "sui"],
              ["gli", "degli", "agli", "dagli", "negli", "sugli"],
              ["le", "delle", "alle", "dalle", "nelle", "sulle"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Unisci",
          hint: "Escribe la preposición articulada. Ejemplo: (in + la) piazza → nella piazza.",
          items: [
            "(a + il) ___ semaforo",
            "(di + la) ___ stazione",
            "(in + il) ___ centro storico",
            "(su + il) ___ ponte",
            "(da + il) ___ medico",
            "(a + l') ___ angolo",
            "(in + gli) ___ uffici",
            "(di + i) ___ negozi",
            "(su + la) ___ destra",
            "(a + le) ___ otto",
          ],
        },
        {
          kind: "fill",
          title: "In città",
          hint: "Completa con la preposición articulada que falta.",
          items: [
            "La farmacia è vicino ___ banca.",
            "Il museo è in fondo ___ strada.",
            "Giri a destra ___ incrocio.",
            "La fermata è davanti ___ supermercato.",
            "Ci sono molti turisti ___ piazza.",
            "Il bar è ___ angolo, accanto ___ edicola.",
            "L'autobus parte ___ stazione ___ nove.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: La stazione è a destra. → Dov'è la stazione?",
          items: [
            "Sì, c'è una farmacia vicino alla chiesa.",
            "No, non è lontano: cinque minuti a piedi.",
            "Prenda l'autobus numero 12.",
            "Scenda alla terza fermata.",
            "Sì, conosco bene Bologna.",
            "No, non so dov'è via Garibaldi.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Conosco questo quartiere.", "La stazione è vicino al centro.", "So dov'è il museo.", "Scendiamo alla prossima fermata.", "C'è un parcheggio in piazza."],
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
          title: "Scusi, per la stazione?",
          hint: "Una turista pregunta por la calle. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Turista", text: "Scusi, sa dov'è la stazione?" },
            { who: "Signore", text: "La stazione centrale? È un po' lontano, circa venti minuti a piedi." },
            { who: "Turista", text: "Ah. C'è un autobus?" },
            { who: "Signore", text: "Sì, il 27. La fermata è lì, davanti alla farmacia. Scenda all'ultima fermata." },
            { who: "Turista", text: "E a piedi? Preferisco camminare." },
            { who: "Signore", text: "Allora vada sempre dritto fino alla piazza. Lì giri a sinistra e attraversi il ponte." },
            { who: "Turista", text: "Dopo il ponte?" },
            { who: "Signore", text: "Prenda la seconda strada a destra. La stazione è in fondo alla strada." },
            { who: "Turista", text: "Grazie mille!" },
            { who: "Signore", text: "Prego, buona giornata!" },
          ],
          questions: [
            "Quanto tempo ci vuole a piedi?",
            "Che autobus prende per la stazione? Dov'è la fermata?",
            "Che cosa fa la turista: prende l'autobus o cammina?",
            "Che cosa fa alla piazza?",
            "Dov'è la stazione, alla fine?",
          ],
        },
        {
          kind: "listen",
          title: "Dove sei?",
          hint: "Anna se ha perdido y llama a su amigo. Responde en voz alta.",
          script: [
            { who: "Luca", text: "Pronto, Anna? Dove sei? Ti aspetto al ristorante!" },
            { who: "Anna", text: "Scusa, Luca! Credo di essermi persa. Sono in una piazza con una chiesa grande." },
            { who: "Luca", text: "C'è una fontana nella piazza?" },
            { who: "Anna", text: "Sì, e c'è un'edicola accanto alla chiesa." },
            { who: "Luca", text: "Ah, è piazza San Marco! Sei vicina. Prendi la via a destra della chiesa." },
            { who: "Anna", text: "Quella con la gelateria all'angolo?" },
            { who: "Luca", text: "Esatto. Vai dritto e al secondo incrocio giri a sinistra. Il ristorante è lì, di fronte alla banca." },
            { who: "Anna", text: "Perfetto, arrivo in cinque minuti!" },
          ],
          questions: [
            "Perché Anna telefona a Luca?",
            "Che cosa c'è nella piazza?",
            "Che via prende Anna?",
            "Dove gira?",
            "Dov'è il ristorante?",
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
          title: "La piazza italiana",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In quasi tutte le città italiane il centro è una piazza. Nella piazza principale ci sono spesso la chiesa più importante e il comune.",
            "Da secoli la piazza è il «salotto» della città: qui le persone si incontrano, parlano, fanno la passeggiata e prendono un caffè al bar.",
            "Alcune piazze sono famose in tutto il mondo. Piazza del Campo, a Siena, ha la forma di una conchiglia: due volte all'anno, in estate, qui c'è il Palio, una corsa di cavalli.",
            "Piazza Navona, a Roma, ha una forma lunga e stretta perché è costruita sopra un antico stadio romano.",
            "Nelle piazze più piccole, la mattina, c'è spesso il mercato. E la sera, d'estate, ci sono bambini che giocano e anziani seduti sulle panchine.",
          ],
          questions: [
            "Che cosa c'è spesso nella piazza principale?",
            "Perché la piazza è il «salotto» della città?",
            "Che forma ha Piazza del Campo?",
            "Che cos'è il Palio? Quando c'è?",
            "Perché Piazza Navona è lunga e stretta?",
            "Che cosa succede nelle piccole piazze la mattina e la sera?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Las plazas son tan importantes en España? Describe una plaza que conozcas: dónde está, qué hay y qué hace la gente allí. 3 o 4 frases, en voz alta.",
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
          title: "Capire le indicazioni",
          hint: "Cuando no entiendes",
          text: [
            "Es normal no entenderlo todo la primera vez. Estas frases te salvan: «Scusi, può ripetere?» (¿puede repetir?), «Più piano, per favore» (más despacio), «Quindi, a destra e poi dritto?» (entonces…).",
            "Repetir en voz alta lo que has entendido es la mejor forma de comprobarlo.",
          ],
          examples: [
            { it: "Scusi, può ripetere più piano?", es: "Perdone, ¿puede repetirlo más despacio?" },
            { it: "Quindi giro a sinistra al semaforo?", es: "Entonces, ¿giro a la izquierda en el semáforo?" },
            { it: "È lontano da qui?", es: "¿Está lejos de aquí?" },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Com'è il tuo quartiere?",
            "Che cosa c'è vicino a casa tua?",
            "Dov'è la farmacia più vicina?",
            "Come vai al lavoro o a scuola?",
            "Qual è la piazza più bella della tua città?",
            "Conosci bene la tua città? E una città italiana?",
          ],
        },
        {
          kind: "speak",
          title: "Spiega la strada",
          hint: "Explica cómo llegar a pie desde tu casa a cada sitio. Usa vai dritto, giri, prendi, attraversi y las preposiciones articuladas.",
          items: ["al supermercato", "alla fermata dell'autobus", "al tuo bar preferito", "alla stazione"],
        },
        {
          kind: "roleplay",
          title: "Turista a Roma",
          hint: "Estás en Roma y buscas la Fontana di Trevi. La IA hace de vecino. Usa «Lei» y pide que repita si no entiendes.",
          steps: [
            "Para a alguien con educación.",
            "Pregunta dónde está la Fontana di Trevi y si está lejos.",
            "Pide que repita una parte más despacio.",
            "Repite las indicaciones para comprobar que las has entendido.",
            "Pregunta si hay un bar o una farmacia por el camino.",
            "Da las gracias y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "La guida sei tu",
          hint: "Ahora al revés: un turista italiano se ha perdido en tu ciudad. La IA hace de turista y tú le explicas el camino.",
          steps: [
            "Pregunta qué busca.",
            "Di si está lejos y cuánto se tarda.",
            "Explícale el camino a pie, paso a paso.",
            "Recomiéndale un sitio para comer por la zona.",
            "Despídete deseándole buen viaje.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio quartiere",
          hint: "Habla un minuto de tu barrio: cómo es, qué hay, dónde está cada cosa y qué te gusta de él.",
          items: ["Abito in un quartiere…"],
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
            "Perdone, ¿sabe dónde está la estación?",
            "Siga todo recto hasta el semáforo.",
            "La farmacia está al lado del banco.",
            "El museo está en el centro, en la plaza.",
            "No conozco este barrio.",
            "Bájese en la segunda parada.",
            "Hay muchos turistas en las calles del centro.",
            "Mi casa está lejos de la estación.",
          ],
        },
        {
          kind: "write",
          title: "Come arrivare a casa mia",
          hint: "Un amigo italiano viene a cenar. Escríbele un mensaje con cómo llegar desde la estación o la parada más cercana: qué autobús coger, dónde bajar y el camino a pie. Entre 5 y 7 frases.",
          rows: 7,
          items: ["Ciao! Allora, quando arrivi…"],
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
          title: "Dettato: preposizioni",
          hint: "Escucha y escribe. Cuidado con las dobles.",
          items: ["nella piazza", "sul ponte", "dall'ufficio", "degli amici", "alla stazione", "nei negozi", "sulle panchine", "allo stadio"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Scusi, sa dov'è il museo?", "Vada sempre dritto.", "Giri a destra al semaforo.", "Conosco bene questa città.", "È vicino alla chiesa."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Película", title: "Caro diario (Nanni Moretti, 1993)", where: "Busca dónde verla en JustWatch", why: "En el primer capítulo, el director recorre Roma en Vespa y comenta los barrios. Ideal para ver calles y plazas reales." },
            { type: "Canción", title: "Piazza Grande, Lucio Dalla", where: "Spotify, YouTube", why: "Clásico de 1972 sobre una persona que vive en una plaza. Escucha cómo habla de la plaza como de su casa." },
            { type: "YouTube", title: "Easy Italian", where: "YouTube", why: "Busca un episodio sobre pedir indicaciones o sobre una ciudad italiana: gente real explicando cómo moverse." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Apunta también nombres de calles y plazas.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Describe un sitio de la ciudad que aparece en la película o el vídeo: dónde está y qué hay alrededor.",
          items: ["È una piazza… Vicino c'è…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 8",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["il semaforo", "l'incrocio", "il marciapiede", "l'edicola", "sempre dritto", "attraversare", "scendere", "il quartiere"],
      },
      {
        kind: "table",
        title: "2. Preposizioni",
        hint: "Completa la tabla con la preposición articulada.",
        cols: ["di", "a", "in", "su"],
        rows: [
          ["il", "", "", "", ""],
          ["lo", "", "", "", ""],
          ["la", "", "", "", ""],
          ["gli", "", "", "", ""],
          ["le", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con sapere, conoscere o una preposición articulada.",
        items: [
          "Scusi, ___ dov'è la posta?",
          "Tu ___ Venezia?",
          "La banca è accanto ___ farmacia.",
          "Il bar è ___ angolo.",
          "Ci sono tanti turisti ___ strade del centro.",
          "Il treno parte ___ stazione centrale.",
          "Noi non ___ questa zona.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Ragazzo", text: "Scusi, c'è un ufficio postale qui vicino?" },
          { who: "Signora", text: "Sì, in via Cavour. Attraversi la piazza e prenda la prima a sinistra." },
          { who: "Ragazzo", text: "È lontano?" },
          { who: "Signora", text: "No, tre minuti. È accanto al supermercato, di fronte alla chiesa." },
          { who: "Ragazzo", text: "Grazie! Sa anche a che ora chiude?" },
          { who: "Signora", text: "Alle due, credo. Si sbrighi!" },
        ],
        questions: ["Che cosa cerca il ragazzo?", "Come ci arriva?", "Dov'è esattamente?", "A che ora chiude?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Chiedi a un signore dov'è la stazione e se è lontana.",
          "Spiega come arrivare da casa tua al bar più vicino.",
          "Descrivi il tuo quartiere.",
          "Non capisci le indicazioni: chiedi di ripetere e controlla.",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Giri a sinistra.", "nella piazza", "Non so dov'è.", "dalla stazione al museo"],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Hay una farmacia por aquí cerca?",
          "El museo está al final de la calle.",
          "No conozco bien la ciudad.",
          "Cruce el puente y gire a la derecha.",
        ],
      },
    ],
  },
};
