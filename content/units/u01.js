// Unità 1 · Ciao! Piacere
// Tipos de bloque:
//   intro (explicación: text, examples [{it, es}], table {head, rows}) · vocab (from: "es" para español→italiano)
//   table (conjugación: cols + rows [verbo, celdas…]; "" = hueco) · fill (___ = hueco)
//   translate (from: "it" + placeholder para transformar frases) · reading (text, questions, translate)
//   shadow · speak · listen · roleplay · write · dictation · media
// Orden de cada tema: pequeña introducción y después los ejercicios.
window.UNITS = window.UNITS || {};
window.UNITS[1] = {
  n: 1,
  level: "A1",
  title: "Ciao! Piacere",
  goal: "Saludar, presentarte, decir de dónde eres y deletrear tu nombre.",
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
            "Vas a aprender a saludar, a presentarte, a decir de dónde eres y dónde vives, a deletrear tu nombre y a contar del 0 al 20.",
            "Gramática: el verbo essere, los verbos en -are, chiamarsi, la negación, las preguntas, el masculino y el femenino, y las preposiciones di, a, in.",
            "Cada tema empieza con una explicación corta y después practicas. No hay soluciones: si no sabes una palabra, búscala. Al terminar cada página, pulsa «Copiar para corregir» y pégalo en ChatGPT o Claude.",
          ],
        },
        {
          kind: "intro",
          title: "Ciao o buongiorno?",
          hint: "Saludar: informal y formal",
          text: [
            "«Ciao» sirve para hola y para adiós, pero solo con amigos, familia y gente joven.",
            "Con alguien que no conoces o con gente mayor, usa «buongiorno» por la mañana y «buonasera» a partir de media tarde. Para despedirte, «arrivederci».",
          ],
          examples: [
            { it: "Ciao, Marco!", es: "¡Hola, Marco! / ¡Adiós, Marco! (informal)" },
            { it: "Buongiorno, signora.", es: "Buenos días, señora." },
            { it: "Buonasera, signor Rossi.", es: "Buenas tardes, señor Rossi." },
            { it: "Arrivederci!", es: "¡Adiós! (formal)" },
            { it: "Piacere!", es: "¡Encantado! / ¡Encantada!" },
          ],
        },
        {
          kind: "speak",
          title: "Quello che sai già",
          hint: "Antes de empezar: di en voz alta todas las palabras en italiano que ya conozcas. Seguro que son más de las que crees.",
          items: ["Le parole che conosco già"],
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
          title: "Saluti e parole utili",
          hint: "Busca cada palabra y escribe su traducción al español. Si tiene más de un uso, anota los dos.",
          items: [
            "ciao", "buongiorno", "buonasera", "buonanotte", "arrivederci",
            "a presto", "piacere", "grazie", "prego", "scusa",
            "scusi", "per favore", "come", "chi", "dove",
            "anche", "ma", "bene", "male", "così così",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Paesi e nazionalità",
          hint: "Ahora al revés: escribe cada palabra en italiano. Fíjate en cuáles cambian para masculino y femenino.",
          items: [
            "España", "español / española", "Italia", "italiano / italiana",
            "Francia", "francés / francesa", "Alemania", "alemán / alemana",
            "Inglaterra", "inglés / inglesa", "Estados Unidos", "estadounidense",
          ],
        },
        {
          kind: "vocab",
          title: "I numeri",
          hint: "Escribe cada número en cifras.",
          placeholder: "cifra",
          items: [
            "tre", "sette", "zero", "undici", "quattordici", "nove",
            "diciassette", "venti", "dodici", "sedici", "diciannove", "otto",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: grazie → Grazie, sei molto gentile.",
          items: ["piacere", "di dove", "abitare", "italiana", "anche", "bene", "studiare", "arrivederci"],
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
          title: "La pronuncia",
          hint: "Cómo suena el italiano",
          text: [
            "El italiano se lee casi como se escribe, pero algunas letras suenan distinto que en español.",
            "La C y la G cambian según la vocal que va detrás. Delante de e, i suenan suaves: ce, ci como «che, chi» en español; ge, gi como la j inglesa de «jeans». Delante de a, o, u suenan duras, como en español.",
            "Para que suenen duras delante de e, i se añade una h: che, chi = «que, qui»; ghe, ghi = «gue, gui».",
            "Además: gn suena como ñ, gli se parece a «lli», sce y sci suenan como «she, shi» en inglés, y la z suena «ts» o «ds», nunca como la z española.",
          ],
          table: {
            head: ["", "suave (delante de e, i)", "dura"],
            rows: [
              ["c", "cena, ciao", "casa, che"],
              ["g", "gelato, giro", "gatto, ghiaccio"],
              ["sc", "scena, sci", "scuola, schiena"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti: i suoni difficili",
          hint: "Escucha cada línea, primero lenta y luego normal. Repite en voz alta hasta que suene igual. Graba la última repetición.",
          items: [
            "ciao, cena, cinema, cucina",
            "che, chi, chiesa, anche",
            "gelato, giro, gente, gatto",
            "spaghetti, ghiaccio, lunghi",
            "famiglia, figlio, moglie, gli",
            "gnocchi, bagno, signore, sogno",
            "pesce, scena, scuola, schiena",
          ],
        },
        {
          kind: "shadow",
          title: "Le doppie",
          hint: "En italiano las consonantes dobles se alargan. Escucha las parejas y exagera la diferencia.",
          items: ["pala, palla", "sete, sette", "caro, carro", "nono, nonno", "papa, pappa"],
        },
        {
          kind: "shadow",
          title: "Frasi",
          hint: "Repite con la misma melodía. Imita también la entonación de las preguntas.",
          items: [
            "Ciao, come stai?",
            "Bene, grazie. E tu?",
            "Piacere, mi chiamo Luca.",
            "Di dove sei?",
            "Sono spagnola, di Madrid.",
            "Come si scrive?",
          ],
        },
        {
          kind: "speak",
          title: "L'alfabeto",
          hint: "Busca cómo se pronuncian las letras en italiano y deletrea en voz alta. Ejemplo: Roma → erre, o, emme, a.",
          items: [
            "Come si scrive il tuo nome?",
            "Come si scrive il tuo cognome?",
            "Come si scrive il nome della tua città?",
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
          title: "Il verbo essere e i verbi in -are",
          hint: "Los verbos: essere y los verbos en -are",
          text: [
            "«Essere» significa ser y, a veces, estar. Es irregular: sus formas se aprenden de memoria. Búscalas para completar la tabla de abajo.",
            "Casi siempre se omite el pronombre, como en español: «Sono Marco» (soy Marco).",
            "Los verbos que acaban en -are (parlare, abitare, studiare…) son regulares: quitas -are y añades la terminación. Aquí tienes el modelo con parlare (hablar).",
          ],
          examples: [
            { it: "Sono spagnolo.", es: "Soy español." },
            { it: "Sei italiana?", es: "¿Eres italiana?" },
            { it: "Parlo un po' di italiano.", es: "Hablo un poco de italiano." },
          ],
          table: {
            head: ["", "parlare"],
            rows: [
              ["io", "parlo"],
              ["tu", "parli"],
              ["lui / lei / Lei", "parla"],
              ["noi", "parliamo"],
              ["voi", "parlate"],
              ["loro", "parlano"],
            ],
          },
        },
        {
          kind: "intro",
          title: "Chiamarsi",
          hint: "Llamarse: chiamarsi",
          text: [
            "Funciona como «llamarse»: delante del verbo va una palabra pequeña (mi, ti, si, ci, vi, si), igual que me, te, se en español.",
            "Ojo con la pronunciación: «chiamo» se dice «kiamo».",
          ],
          examples: [
            { it: "Come ti chiami?", es: "¿Cómo te llamas?" },
            { it: "Mi chiamo Ana.", es: "Me llamo Ana." },
            { it: "Come si chiama?", es: "¿Cómo se llama? / ¿Cómo se llama usted?" },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Tienes alguna forma de ayuda; el resto, dedúcelo del modelo de parlare o búscalo.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["essere", "sono", "", "", "", "", ""],
            ["abitare", "", "", "", "abitiamo", "", ""],
            ["studiare", "", "studi", "", "", "", ""],
            ["lavorare", "", "", "", "", "", ""],
            ["chiamarsi", "mi chiamo", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Il verbo essere",
          hint: "Completa con la forma correcta de «essere».",
          items: [
            "Io ___ spagnolo.",
            "Tu ___ italiana?",
            "Marco ___ di Roma.",
            "Lei ___ Giulia, vero?",
            "Noi ___ studenti.",
            "Voi ___ di Barcellona?",
            "Loro ___ francesi.",
            "Io non ___ inglese, ___ tedesco.",
          ],
        },
        {
          kind: "fill",
          title: "Chiamarsi, abitare, parlare",
          hint: "Completa con el verbo que toca en la forma correcta.",
          items: [
            "Io mi ___ Paolo.",
            "Tu come ti ___?",
            "Lei come si ___, signora?",
            "Noi ___ a Valencia.",
            "Voi ___ inglese?",
            "Loro si ___ Carlo e Pietro.",
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
          title: "Non e il punto interrogativo",
          hint: "Negar y preguntar",
          text: [
            "Para negar, pon «non» delante del verbo: «Non sono italiano».",
            "Para preguntar, el orden de las palabras no cambia: solo cambia la entonación. El signo de interrogación va solo al final: «Sei spagnolo?».",
            "Palabras para preguntar: come (cómo), dove (dónde), di dove (de dónde), chi (quién), che cosa (qué), perché (por qué).",
          ],
          examples: [
            { it: "Non parlo tedesco.", es: "No hablo alemán." },
            { it: "Abiti a Roma?", es: "¿Vives en Roma?" },
            { it: "Di dove sei?", es: "¿De dónde eres?" },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Sono italiano.", "Marco è di Roma.", "Parlo francese.", "Abitate a Milano.", "Ci chiamiamo Rossi.", "Lei è la professoressa."],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Mi chiamo Luca. → Come ti chiami?",
          items: ["Mi chiamo Luca.", "Sono di Napoli.", "Abito a Torino.", "Sto bene, grazie.", "Sì, parlo inglese.", "Si scrive L-U-C-A."],
        },
        {
          kind: "intro",
          title: "Maschile, femminile e preposizioni",
          hint: "Masculino, femenino y las preposiciones di, a, in",
          text: [
            "Las nacionalidades en -o cambian a -a en femenino: italiano, italiana. Las que acaban en -e no cambian: francese vale para los dos.",
            "De dónde eres: di + ciudad («Sono di Madrid»). Dónde vives: a + ciudad («Abito a Madrid») e in + país («Abito in Spagna»).",
          ],
          examples: [
            { it: "Giulia è italiana, Pierre è francese.", es: "Giulia es italiana, Pierre es francés." },
            { it: "Sono di Siviglia, ma abito a Roma, in Italia.", es: "Soy de Sevilla, pero vivo en Roma, en Italia." },
          ],
        },
        {
          kind: "fill",
          title: "Maschile o femminile?",
          hint: "Completa la nacionalidad con la terminación que toca.",
          items: [
            "Pedro è spagnol___. Lucía è spagnol___.",
            "Luca è italian___. Giulia è italian___.",
            "John è ingles___. Kate è ingles___.",
            "Hans è tedesc___. Anna è tedesc___.",
            "Pierre è frances___. Marie è frances___.",
          ],
        },
        {
          kind: "fill",
          title: "Di, a o in?",
          hint: "Completa con di, a o in.",
          items: [
            "Sono ___ Valencia.",
            "Abito ___ Spagna.",
            "Marco è ___ Bologna, ma abita ___ Germania.",
            "Abitate ___ Roma?",
            "Giulia è ___ Torino e abita ___ Milano.",
            "Noi abitiamo ___ Francia, ___ Parigi.",
          ],
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
          title: "A una festa",
          hint: "Escucha sin leer. Dale otra vez las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Marco", text: "Ciao! Io sono Marco. E tu, come ti chiami?" },
            { who: "Elena", text: "Ciao Marco, mi chiamo Elena. Piacere!" },
            { who: "Marco", text: "Piacere mio. Di dove sei, Elena?" },
            { who: "Elena", text: "Sono spagnola, di Valencia. E tu?" },
            { who: "Marco", text: "Io sono di Bologna. Sei qui in vacanza?" },
            { who: "Elena", text: "No, sono qui per studiare l'italiano." },
            { who: "Marco", text: "Brava! Parli già molto bene." },
            { who: "Elena", text: "Grazie, sei gentile!" },
          ],
          questions: [
            "Come si chiama il ragazzo?",
            "Di dov'è Elena?",
            "Di dov'è Marco?",
            "Elena è in vacanza?",
            "Perché Elena è in Italia?",
          ],
        },
        {
          kind: "listen",
          title: "Il nuovo vicino",
          hint: "Ahora una situación formal. Responde en voz alta.",
          script: [
            { who: "Sig. Rossi", text: "Buongiorno, signora. Lei è la signora Bianchi?" },
            { who: "Sig.ra Bianchi", text: "Sì, sono io. Buongiorno." },
            { who: "Sig. Rossi", text: "Piacere, sono Giorgio Rossi, il nuovo vicino." },
            { who: "Sig.ra Bianchi", text: "Ah, piacere! Benvenuto. Lei di dov'è?" },
            { who: "Sig. Rossi", text: "Sono di Napoli, ma abito qui a Milano da un mese." },
            { who: "Sig.ra Bianchi", text: "Bene. Allora, a presto, signor Rossi!" },
            { who: "Sig. Rossi", text: "Arrivederci, signora!" },
          ],
          questions: [
            "Chi è Giorgio Rossi?",
            "Di dov'è il signor Rossi?",
            "Dove abita adesso?",
            "Marco ed Elena usano «tu». Il signor Rossi e la signora Bianchi usano…? Perché?",
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
          title: "Come si salutano gli italiani",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In Italia la gente si saluta molto. Con gli amici e con la famiglia si dice «ciao», per salutare e anche per andare via.",
            "«Ciao» è una parola antica. Viene dal veneziano «s'ciavo», cioè «schiavo»: era un modo gentile per dire «sono al tuo servizio».",
            "Con le persone che non conosci, invece, si dice «buongiorno» la mattina e «buonasera» il pomeriggio e la sera. Con loro si usa il «Lei», non il «tu».",
            "Tra amici e parenti, quando si incontrano, gli italiani si danno due baci sulle guance. Al lavoro, invece, si danno la mano.",
            "Quando vai via, con le persone che non conosci dici «arrivederci». E se le rivedi presto, puoi dire «a presto» o «a dopo».",
          ],
          questions: [
            "Che cosa si dice agli amici per salutare?",
            "Da dove viene la parola «ciao»?",
            "Quando si dice «buonasera»?",
            "Con chi si usa il «Lei»?",
            "Che cosa fanno gli amici quando si incontrano? E al lavoro?",
            "Che cosa dici quando vai via da un negozio?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Y en España cómo se saluda? Explícalo en italiano con 3 o 4 frases, en voz alta.",
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
          title: "Tu o Lei?",
          hint: "Tú o usted: tu y Lei",
          text: [
            "Con amigos, familia y gente joven se usa «tu». Con desconocidos, en tiendas o con gente mayor, «Lei» (usted).",
            "«Lei» lleva el verbo en tercera persona, igual que «usted»: «Come si chiama?», «Di dov'è?». Se suele escribir con mayúscula para distinguirlo de «lei» (ella).",
          ],
          examples: [
            { it: "Come ti chiami? → Come si chiama?", es: "¿Cómo te llamas? → ¿Cómo se llama usted?" },
            { it: "Come stai? → Come sta?", es: "¿Cómo estás? → ¿Cómo está usted?" },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta en italiano con frases completas. Si no sabes una palabra, búscala y vuelve a intentarlo.",
          items: [
            "Ciao! Come ti chiami?",
            "Come stai oggi?",
            "Di dove sei?",
            "Sei italiano o italiana?",
            "Dove abiti?",
            "Parli inglese?",
            "Sei uno studente o una studentessa?",
            "Perché studi l'italiano?",
          ],
        },
        {
          kind: "speak",
          title: "Dal tu al Lei",
          hint: "Convierte la pregunta informal en formal. Ejemplo: Come ti chiami? → Come si chiama?",
          items: ["Come stai?", "Di dove sei?", "Sei di Roma?", "Tu sei Paolo?", "Dove abiti?"],
        },
        {
          kind: "speak",
          title: "No, non è così",
          hint: "Niega y corrige. Ejemplo: Sei italiano? (Spagna) → No, non sono italiano, sono spagnolo.",
          items: [
            "Sei francese? (Germania)",
            "Marco è di Milano? (Bologna)",
            "Siete inglesi? (Stati Uniti)",
            "Ti chiami Paolo? (Pietro)",
            "Lei è la signora Rossi? (Bianchi)",
          ],
        },
        {
          kind: "roleplay",
          title: "In un ostello a Firenze",
          hint: "Conoces a alguien en la cocina del albergue. Hazlo en voz alta. Si quieres, pide a la IA que haga del otro personaje.",
          steps: [
            "Saluda de forma informal.",
            "Di cómo te llamas y pregunta su nombre.",
            "Pregunta de dónde es.",
            "Di de dónde eres y dónde vives.",
            "Pregunta cómo se escribe su nombre.",
            "Despídete: «nos vemos pronto».",
          ],
        },
        {
          kind: "roleplay",
          title: "Alla segreteria della scuola",
          hint: "Te apuntas a un curso de italiano. Hablas con la directora: usa «Lei».",
          steps: [
            "Saluda formalmente (es por la mañana).",
            "Preséntate con nombre y apellido.",
            "Deletrea tu apellido.",
            "Di tu nacionalidad y tu ciudad.",
            "Da las gracias y despídete formalmente.",
          ],
        },
        {
          kind: "speak",
          title: "Presentati",
          hint: "Preséntate durante 30 segundos sin parar: saludo, nombre, de dónde eres, dónde vives y despedida.",
          items: ["La mia presentazione"],
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
            "Hola, me llamo Ana.",
            "¿De dónde eres?",
            "Soy de Sevilla, pero vivo en Madrid.",
            "Encantado.",
            "Buenas noches, señora.",
            "No soy italiano, soy español.",
            "¿Cómo se escribe?",
            "¡Hasta pronto!",
          ],
        },
        {
          kind: "write",
          title: "Un messaggio per un tandem",
          hint: "Escribe tu mensaje de presentación para una app de intercambio de idiomas: nombre, de dónde eres, dónde vives y por qué estudias italiano. Entre 5 y 6 frases.",
          rows: 7,
          items: ["Il mio messaggio:"],
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
          title: "Dettato: numeri",
          hint: "Escucha y escribe el número en cifras.",
          placeholder: "cifra",
          items: ["tredici", "sette", "venti", "quindici", "otto", "diciannove", "undici", "quattro"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes. Cuidado con las dobles.",
          items: ["Piacere, sono Giulia.", "Di dove sei?", "Siamo di Napoli.", "Arrivederci, signora.", "Mi chiamo Pietro, e tu?"],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "YouTube", title: "Easy Italian", where: "YouTube", why: "Entrevistas en la calle con subtítulos en italiano y en inglés. Busca un episodio para principiantes sobre presentarse." },
            { type: "Podcast", title: "Coffee Break Italian", where: "Spotify, Apple Podcasts", why: "Episodios cortos para empezar de cero. Escucha los primeros capítulos." },
            { type: "Canción", title: "Nel blu dipinto di blu (Volare), Domenico Modugno", where: "Spotify, YouTube", why: "Clásica, lenta y muy clara. Ideal para oír las vocales italianas." },
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
          hint: "Habla de una persona del vídeo o del podcast: cómo se llama, de dónde es, cómo está.",
          items: ["Si chiama… È di…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 1",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["buonasera", "arrivederci", "piacere", "scusi", "dove", "anche", "tedesca", "diciotto"],
      },
      {
        kind: "table",
        title: "2. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["essere", "", "", "", "", "", ""],
          ["parlare", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con «essere», «chiamarsi» o una preposición (di, a, in).",
        items: [
          "Noi ___ di Siviglia.",
          "Come ti ___?",
          "Lei ___ la professoressa?",
          "Mio fratello si ___ Luca.",
          "Abito ___ Italia, ___ Firenze.",
          "Io non ___ francese.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Sara", text: "Buonasera! Scusi, Lei è il professor Conti?" },
          { who: "Prof. Conti", text: "Sì, sono io. Buonasera." },
          { who: "Sara", text: "Piacere, mi chiamo Sara Gómez. Sono la nuova studentessa." },
          { who: "Prof. Conti", text: "Ah, piacere! Lei è spagnola?" },
          { who: "Sara", text: "No, sono argentina, di Buenos Aires. Ma abito a Roma." },
          { who: "Prof. Conti", text: "Benvenuta! A domani, allora." },
        ],
        questions: ["Come si chiama la ragazza?", "È spagnola?", "Dove abita?", "Usano «tu» o «Lei»?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Presentati in 30 secondi.",
          "Come si scrive il tuo cognome?",
          "Chiedi a un signore come si chiama e di dov'è (formale).",
          "Saluta un amico la sera e chiedi come sta.",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Sono di Bologna.", "quattordici", "Come si chiama?", "Siete inglesi?"],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Buenos días, ¿cómo está usted?",
          "No somos italianos, somos españoles.",
          "Ella se llama Giulia y es de Turín.",
          "¿Vosotros vivís en Madrid?",
        ],
      },
    ],
  },
};
