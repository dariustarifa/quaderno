// Unità 7 · La casa
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[7] = {
  n: 7,
  level: "A1",
  title: "La casa",
  goal: "Describir tu casa, decir qué hay y dónde está cada cosa.",
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
            "Vas a aprender a describir tu casa: las habitaciones, los muebles, cómo es y dónde está cada cosa. También a leer un anuncio de alquiler.",
            "Gramática: c'è / ci sono (hay), la diferencia con è / sono, y las preposiciones de lugar (sopra, sotto, accanto a, davanti a…).",
            "Vuelven los artículos de las unidades 2 y 3: los vas a necesitar en cada frase.",
          ],
        },
        {
          kind: "intro",
          title: "C'è o ci sono?",
          hint: "Un adelanto: «hay» en italiano",
          text: [
            "«Hay» tiene dos formas: «c'è» con una cosa y «ci sono» con varias. En español no cambia; en italiano sí.",
          ],
          examples: [
            { it: "Nel mio appartamento c'è un balcone.", es: "En mi piso hay un balcón." },
            { it: "Ci sono due camere da letto.", es: "Hay dos dormitorios." },
            { it: "Non c'è l'ascensore.", es: "No hay ascensor." },
          ],
        },
        {
          kind: "speak",
          title: "Dove abiti?",
          hint: "Antes de empezar: di dónde vives y cómo es tu casa con las palabras que ya sabes (grande, piccola, bella…).",
          items: ["Abito in…"],
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
          title: "Stanze e mobili",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "l'appartamento", "la stanza", "la camera da letto", "il soggiorno", "la cucina",
            "il bagno", "il corridoio", "l'ingresso", "il balcone", "il terrazzo",
            "il letto", "l'armadio", "il divano", "la poltrona", "il tavolo",
            "la sedia", "la scrivania", "il frigorifero", "la lavatrice", "il tappeto",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Com'è la casa?",
          hint: "Escribe en italiano. Ojo con «estantería» y «planta»: son falsos amigos.",
          items: [
            "alquilar", "el alquiler", "la planta (de un edificio)", "el ascensor", "la escalera",
            "la estantería", "la ventana", "la puerta", "la llave", "la lámpara",
            "luminoso", "oscuro", "tranquilo", "ruidoso", "amueblado",
            "nuevo", "viejo", "moderno",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: luminoso → Il mio soggiorno è molto luminoso.",
          items: ["c'è", "ci sono", "accanto a", "luminoso", "affittare", "al secondo piano", "il divano", "la libreria"],
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
          title: "Camera, tavolo, comodo",
          hint: "Dónde va la fuerza de la palabra",
          text: [
            "Casi todas las palabras italianas llevan la fuerza en la penúltima sílaba: cu-cì-na, di-và-no, ar-mà-dio.",
            "Pero muchas la llevan en la antepenúltima y no se escribe ninguna tilde: càmera, tàvolo, còmodo, lampada, sàbato. Un hispanohablante tiende a decir «camèra» o «tavòlo»: escucha y copia.",
            "En el diccionario o en las apps, la fuerza suele aparecer marcada. Cuando aprendas una palabra nueva, mira dónde va.",
            "La r italiana es siempre vibrante, como en «pero»; la doble rr vibra más tiempo: caro / carro, cara / carra.",
          ],
          table: {
            head: ["", "fuerza en"],
            rows: [
              ["cucina, divano, armadio, balcone", "penúltima"],
              ["camera, tavolo, comodo, lampada", "antepenúltima"],
              ["città, perché, lunedì", "última (con tilde)"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Marca bien la sílaba fuerte. Exagera al principio.",
          items: [
            "camera, tavolo, comodo",
            "lampada, sabato, piccolo",
            "cucina, divano, armadio",
            "frigorifero, lavatrice, corridoio",
            "caro, carro, terra, terrazzo",
          ],
        },
        {
          kind: "shadow",
          title: "Frasi",
          hint: "Repite con la misma melodía.",
          items: [
            "Il mio appartamento è al terzo piano.",
            "C'è un divano davanti alla finestra.",
            "In camera ci sono un letto e un armadio.",
            "La cucina è piccola ma luminosa.",
            "Non c'è l'ascensore: salgo a piedi.",
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
          title: "C'è, ci sono… e dov'è?",
          hint: "Hay frente a está",
          text: [
            "«C'è / ci sono» dice que algo existe en un lugar: «C'è una farmacia vicino a casa mia». Normalmente va con un, uno, una o un número: «Ci sono tre sedie».",
            "«È / sono» dice dónde está algo que ya conocemos: «La farmacia è in via Roma». Va con il, la, lo: «Le chiavi sono sul tavolo».",
            "Lo mismo pasa en español con «hay» y «está»: «hay un sofá» pero «el sofá está en el salón».",
            "Para preguntar: «C'è un supermercato qui vicino?» / «Dov'è il bagno?».",
          ],
          examples: [
            { it: "In soggiorno c'è un divano grande.", es: "En el salón hay un sofá grande." },
            { it: "Il divano è davanti alla televisione.", es: "El sofá está delante de la tele." },
            { it: "Dove sono le chiavi?", es: "¿Dónde están las llaves?" },
          ],
        },
        {
          kind: "intro",
          title: "Verbi per la casa",
          hint: "Verbos útiles en casa",
          text: [
            "Vivere y mettere (poner) siguen el modelo de prendere. Pulire (limpiar) sigue el de finire, con -isc-.",
            "«Salire» (subir) es irregular en io y loro: salgo, salgono. «Abitare» y «vivere» significan los dos vivir: «abito / vivo a Madrid».",
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Si dudas, vuelve a los modelos de la unidad 5.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["vivere", "", "", "vive", "", "", ""],
            ["mettere", "", "", "", "", "", ""],
            ["pulire", "pulisco", "", "", "", "", ""],
            ["salire", "salgo", "", "", "", "", "salgono"],
            ["affittare", "", "", "", "", "affittate", ""],
          ],
        },
        {
          kind: "fill",
          title: "C'è o ci sono?",
          hint: "Completa con c'è o ci sono.",
          items: [
            "In cucina ___ un tavolo e quattro sedie.",
            "Nel mio palazzo non ___ l'ascensore.",
            "In camera mia ___ due finestre.",
            "___ un bagno o due?",
            "Vicino a casa mia ___ molti negozi.",
            "Sul balcone ___ tante piante.",
          ],
        },
        {
          kind: "fill",
          title: "C'è o è?",
          hint: "Completa con c'è, ci sono, è o sono.",
          items: [
            "Il bagno ___ in fondo al corridoio.",
            "In soggiorno ___ una libreria.",
            "Dove ___ le chiavi?",
            "Qui vicino ___ un supermercato?",
            "La mia camera ___ piccola ma comoda.",
            "Nel frigorifero non ___ niente!",
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
          title: "Dove si trova?",
          hint: "Las preposiciones de lugar",
          text: [
            "Algunas van solas, con el artículo detrás: sopra (encima de), sotto (debajo de), dietro (detrás de), tra o fra (entre), dentro (dentro de).",
            "Otras llevan «a»: accanto a (al lado de), vicino a (cerca de), davanti a (delante de), di fronte a (enfrente de), in fondo a (al fondo de). «Lontano» (lejos) lleva «da»: lontano da.",
            "Cuando «a» o «da» van con el artículo, se juntan: a + il = al, a + la = alla, da + il = dal. «Accanto al letto», «vicino alla finestra». Lo verás todo en la unidad 8; de momento fíjate en los ejemplos.",
            "«A destra» y «a sinistra» son a la derecha y a la izquierda.",
          ],
          table: {
            head: ["", "ejemplo"],
            rows: [
              ["sopra / sotto", "sopra il tavolo, sotto il letto"],
              ["dietro / tra", "dietro la porta, tra il divano e la finestra"],
              ["accanto a / vicino a", "accanto al letto, vicino alla finestra"],
              ["davanti a / di fronte a", "davanti al divano, di fronte alla cucina"],
              ["a destra / a sinistra", "a destra c'è il bagno"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Dov'è il gatto?",
          hint: "Completa con la preposición que tiene sentido: sopra, sotto, dietro, tra, accanto, davanti, in fondo.",
          items: [
            "Il gatto dorme ___ il letto: non si vede!",
            "La lampada è ___ il tavolo.",
            "Il bagno è ___ la cucina e la camera.",
            "Le scarpe sono ___ la porta.",
            "La televisione è ___ al divano.",
            "La mia camera è ___ al corridoio, l'ultima porta.",
            "La scrivania è ___ alla finestra, così ho luce.",
          ],
        },
        {
          kind: "intro",
          title: "Al primo piano",
          hint: "Las plantas y los números ordinales",
          text: [
            "Para decir en qué planta vives se usan los ordinales: primo, secondo, terzo, quarto, quinto, sesto. La planta baja es «il piano terra».",
            "Se dice «al» + ordinal + piano: «Abito al quarto piano». Y para preguntar: «A che piano abiti?».",
          ],
          examples: [
            { it: "A che piano abiti? — Al terzo, senza ascensore.", es: "¿En qué planta vives? — En la tercera, sin ascensor." },
            { it: "Il negozio è al piano terra.", es: "La tienda está en la planta baja." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Il bagno è a destra. → Dov'è il bagno?",
          items: [
            "Abito al secondo piano.",
            "Sì, c'è un supermercato qui vicino.",
            "Le chiavi sono sopra il tavolo.",
            "Ci sono tre camere da letto.",
            "L'affitto costa seicento euro al mese.",
            "No, l'appartamento non è arredato.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["C'è un balcone.", "Ci sono molti negozi.", "La cucina è grande.", "Pulisco la casa il sabato.", "Abitiamo al primo piano."],
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
          title: "Visita a un appartamento",
          hint: "Una agente inmobiliaria enseña un piso. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Agente", text: "Buongiorno, signor Moretti. Prego, entri. Questo è l'ingresso." },
            { who: "Sig. Moretti", text: "Buongiorno. È molto luminoso!" },
            { who: "Agente", text: "Sì, ci sono finestre grandi in tutte le stanze. A sinistra c'è il soggiorno, con un piccolo balcone." },
            { who: "Sig. Moretti", text: "E la cucina?" },
            { who: "Agente", text: "La cucina è qui a destra. È piccola, ma c'è tutto: il frigorifero, il forno e la lavatrice." },
            { who: "Sig. Moretti", text: "Quante camere da letto ci sono?" },
            { who: "Agente", text: "Due: una matrimoniale e una singola. Il bagno è in fondo al corridoio." },
            { who: "Sig. Moretti", text: "C'è l'ascensore? Siamo al quarto piano…" },
            { who: "Agente", text: "Purtroppo no. Ma l'affitto è basso: settecento euro al mese, spese comprese." },
          ],
          questions: [
            "Com'è l'appartamento?",
            "Che cosa c'è nel soggiorno?",
            "Com'è la cucina? Che cosa c'è?",
            "Quante camere ci sono? E dov'è il bagno?",
            "Qual è il problema? E il vantaggio?",
          ],
        },
        {
          kind: "listen",
          title: "La stanza di Paolo",
          hint: "Paolo enseña su habitación nueva a su madre por videollamada. Responde en voz alta.",
          script: [
            { who: "Paolo", text: "Ciao mamma! Guarda, questa è la mia nuova stanza." },
            { who: "Mamma", text: "Che bella! Ma è piccola…" },
            { who: "Paolo", text: "Sì, ma è comoda. Qui c'è il letto, accanto alla finestra, e lì c'è l'armadio." },
            { who: "Mamma", text: "E dove studi?" },
            { who: "Paolo", text: "C'è una scrivania davanti al letto, con una lampada." },
            { who: "Mamma", text: "E i tuoi libri?" },
            { who: "Paolo", text: "Sono sotto il letto, per ora. Non c'è una libreria." },
            { who: "Mamma", text: "Va bene, sabato vengo e la compriamo insieme!" },
          ],
          questions: [
            "Com'è la stanza di Paolo?",
            "Dov'è il letto?",
            "Dove studia Paolo?",
            "Dove sono i libri? Perché?",
            "Che cosa propone la mamma?",
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
          title: "Come abitano gli italiani",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In Italia circa tre famiglie su quattro hanno una casa di proprietà. Comprare casa è un obiettivo importante per molti italiani.",
            "Nelle città la maggior parte delle persone abita in un appartamento, in un condominio. I palazzi del centro sono spesso vecchi, con soffitti alti e, a volte, senza ascensore.",
            "Le finestre italiane hanno quasi sempre le persiane o le tapparelle, per il sole d'estate e per il buio la notte.",
            "Nel bagno c'è il bidet: in Italia è quasi obbligatorio, perché una norma del 1975 lo prevede nelle case nuove. Molti stranieri lo scoprono per la prima volta qui.",
            "E poi c'è il balcone: d'estate gli italiani ci mettono piante, fiori e, quando è possibile, un piccolo tavolo per cenare all'aperto.",
          ],
          questions: [
            "Quante famiglie italiane hanno una casa di proprietà?",
            "Dove abita la maggior parte delle persone in città?",
            "Come sono i palazzi del centro?",
            "A che cosa servono le persiane?",
            "Perché c'è il bidet in quasi tutti i bagni?",
            "Che cosa fanno gli italiani sul balcone d'estate?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Cómo son las casas en España? ¿Se alquila o se compra? ¿Hay bidet, persianas, balcón? Explícalo en italiano con 3 o 4 frases, en voz alta.",
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
          title: "Descrivere la casa",
          hint: "Describir una casa en orden",
          text: [
            "Para describir una casa, ve de lo general a lo concreto: dónde está y en qué planta, cuántas habitaciones hay, cómo es cada una y qué hay dentro.",
            "Adjetivos útiles: grande, piccolo, luminoso, buio (oscuro), comodo, moderno, antico, tranquilo, rumoroso, arredato (amueblado).",
          ],
          examples: [
            { it: "Abito in un appartamento in centro, al secondo piano.", es: "Vivo en un piso en el centro, en la segunda planta." },
            { it: "Ci sono due camere, un soggiorno, la cucina e un bagno.", es: "Hay dos dormitorios, un salón, la cocina y un baño." },
            { it: "Il soggiorno è la stanza più luminosa.", es: "El salón es la habitación más luminosa." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Abiti in una casa o in un appartamento?",
            "A che piano abiti? C'è l'ascensore?",
            "Quante stanze ci sono?",
            "Com'è la tua camera? Che cosa c'è?",
            "Qual è la tua stanza preferita? Perché?",
            "Che cosa c'è vicino a casa tua?",
          ],
        },
        {
          kind: "speak",
          title: "Dov'è?",
          hint: "Mira a tu alrededor y di dónde están estas cosas en tu casa, con una preposición de lugar.",
          items: ["il letto", "la televisione", "le chiavi", "il tuo telefono", "la lampada", "le scarpe"],
        },
        {
          kind: "roleplay",
          title: "Cerco una stanza",
          hint: "Llamas por un anuncio de una habitación en alquiler en Bolonia. La IA hace del propietario. Usa «Lei».",
          steps: [
            "Saluda y di que llamas por el anuncio.",
            "Pregunta cuánto cuesta y si los gastos están incluidos («le spese»).",
            "Pregunta cómo es la habitación y qué muebles tiene.",
            "Pregunta en qué planta está y si hay ascensor.",
            "Pregunta qué hay cerca (supermercado, autobús, universidad).",
            "Pide verla: propón un día y una hora.",
          ],
        },
        {
          kind: "roleplay",
          title: "Arrediamo il soggiorno",
          hint: "Te mudas con un amigo y decidís dónde poner los muebles del salón. Es informal.",
          steps: [
            "Propón dónde poner el sofá («Mettiamo il divano…»).",
            "Tu amigo no está de acuerdo: escucha y propón otra cosa.",
            "Decidid dónde va la televisión.",
            "Decidid dónde va la estantería y la mesa.",
            "Haz un resumen final de cómo queda el salón.",
          ],
        },
        {
          kind: "speak",
          title: "La mia casa",
          hint: "Describe tu casa durante un minuto, como si se la enseñaras a alguien por videollamada.",
          items: ["Allora, questa è casa mia…"],
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
            "En mi piso hay dos dormitorios y un baño.",
            "No hay ascensor: vivo en la cuarta planta.",
            "¿Dónde está la cocina?",
            "Las llaves están encima de la mesa.",
            "Hay una farmacia cerca de mi casa.",
            "El sofá está delante de la ventana.",
            "El alquiler cuesta quinientos euros al mes.",
            "Limpio la casa los sábados.",
          ],
        },
        {
          kind: "write",
          title: "Un annuncio",
          hint: "Escribe un anuncio para alquilar tu piso (real o inventado): zona, planta, habitaciones, cómo es, qué hay cerca y precio. Entre 5 y 6 frases.",
          rows: 6,
          items: ["Affittasi appartamento…"],
        },
        {
          kind: "write",
          title: "La mia stanza",
          hint: "Describe tu habitación: qué hay y dónde está cada cosa. Usa al menos cuatro preposiciones de lugar.",
          rows: 6,
          items: ["Nella mia stanza…"],
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
          title: "Dettato: parole",
          hint: "Escucha y escribe el artículo y la palabra.",
          items: ["il soggiorno", "la camera", "l'armadio", "le sedie", "il frigorifero", "gli specchi", "la lavatrice", "il terzo piano"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["C'è un balcone.", "Ci sono due bagni.", "Dov'è la cucina?", "Il gatto è sotto il letto.", "Abito al quinto piano."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Canción", title: "La casa, Sergio Endrigo", where: "Spotify, YouTube", why: "Canción infantil de 1969 sobre una casa muy rara, sin techo y sin cocina. Lenta, clara y llena de vocabulario de la casa." },
            { type: "Película", title: "La finestra di fronte (Ferzan Özpetek, 2003)", where: "Busca dónde verla en JustWatch", why: "Una mujer de Roma observa la vida del vecino de enfrente. Fíjate en los pisos, los patios y los balcones romanos." },
            { type: "YouTube", title: "Tour della casa", where: "YouTube", why: "Busca «tour della casa» o «house tour italiano»: gente real enseñando su casa habitación por habitación." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Fíjate en los muebles y las habitaciones.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Describe una casa que hayas visto en la película o en el vídeo: cómo es y qué hay.",
          items: ["È una casa… C'è… Ci sono…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 7",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["il soggiorno", "l'armadio", "la libreria", "il piano terra", "affittare", "buio", "arredato", "la scrivania"],
      },
      {
        kind: "table",
        title: "2. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["salire", "", "", "", "", "", ""],
          ["pulire", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con c'è, ci sono, è, sono o una preposición de lugar.",
        items: [
          "Nel mio palazzo ___ dieci appartamenti.",
          "Dov'___ il bagno?",
          "In cucina non ___ la lavatrice.",
          "I libri ___ sopra la scrivania.",
          "Il divano è ___ alla televisione.",
          "Il bagno è ___ la cucina e la camera.",
          "Abito ___ terzo piano.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Laura", text: "Allora, com'è la casa nuova?" },
          { who: "Marco", text: "Bellissima! È al primo piano, in una via tranquilla." },
          { who: "Laura", text: "Quante stanze ci sono?" },
          { who: "Marco", text: "Tre: il soggiorno, la camera e uno studio. E c'è un terrazzo grande." },
          { who: "Laura", text: "E la cucina?" },
          { who: "Marco", text: "È nel soggiorno, accanto alla finestra. È piccola, ma è nuova." },
        ],
        questions: ["A che piano è la casa?", "Quante stanze ci sono?", "Che cosa c'è di speciale?", "Dov'è la cucina? Com'è?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Descrivi la tua casa in un minuto.",
          "Chiedi al proprietario quanto costa l'affitto e se ci sono le spese (formale).",
          "Di' dove sono tre oggetti nella tua stanza.",
          "Che cosa c'è vicino a casa tua?",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Ci sono tre camere.", "sotto il tavolo", "Non c'è l'ascensore.", "Salgo a piedi."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Hay un supermercado cerca?",
          "El baño está al fondo del pasillo.",
          "En el salón hay un sofá y dos sillones.",
          "Vivimos en la planta baja.",
        ],
      },
    ],
  },
};
