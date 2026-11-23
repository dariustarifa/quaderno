// Unità 17 · Da bambino — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[17] = {
    n: 17,
    level: "A2",
    title: "Da bambino",
    goal: "Hablar de tu infancia y de cómo eran las cosas antes: costumbres, descripciones y recuerdos.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Empieza A2. Vas a aprender a contar cómo era tu infancia: dónde vivías, cómo eras, a qué jugabas y qué hacías siempre.",
              "Gramática: el imperfetto (giocavo, ero, avevo), sus usos (costumbres, descripciones, acciones en curso) y las expresiones que lo acompañan: da bambino, di solito, ogni estate, mentre.",
              "El imperfetto es muy parecido al pretérito imperfecto español (jugaba, era): te va a resultar fácil.",
            ],
          },
          {
            kind: "intro", title: "Quando ero piccolo…", hint: "Un adelanto: el imperfetto",
            text: ["Para hablar de lo que hacías habitualmente en el pasado o de cómo eran las cosas, se usa el imperfetto, igual que en español.", "Las terminaciones son muy regulares: -avo, -evo, -ivo para io."],
            examples: [
              { it: "Quando ero piccola, abitavo in campagna.", es: "Cuando era pequeña, vivía en el campo." },
              { it: "Ogni estate andavamo dai nonni.", es: "Todos los veranos íbamos a casa de los abuelos." },
              { it: "Mio padre aveva i capelli lunghi.", es: "Mi padre tenía el pelo largo." },
            ],
          },
          { kind: "speak", title: "Da piccolo", hint: "Antes de empezar: ¿dónde vivías de pequeño? ¿Qué te gustaba? Dilo como puedas, aunque sea en presente.", items: ["Da piccolo / piccola…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "L'infanzia", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "l'infanzia", "il bambino / la bambina", "l'asilo", "la scuola elementare", "la maestra",
              "il compagno di classe", "il giocattolo", "la bambola", "il pallone", "nascondino",
              "l'altalena", "il cortile", "i compiti", "la merenda", "il cartone animato",
              "litigare", "fare i capricci", "crescere", "ubbidire", "viziato",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Com'eri?", hint: "Escribe en italiano.",
            items: ["travieso", "tranquilo", "tímido", "hablador", "obediente", "curioso", "mimado", "miedoso", "llorar", "jugar al escondite", "trepar a los árboles", "el recuerdo", "acordarse de", "echar de menos", "antes"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: la merenda → Per merenda mangiavo pane e cioccolata.", items: ["da bambino", "giocavo", "ogni estate", "la maestra", "avevo paura di", "mi ricordo", "mentre", "una volta"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Giocavo, giocavamo", hint: "La fuerza en el imperfetto",
            text: [
              "En el imperfetto la fuerza cae en la vocal de la terminación: gio-cà-vo, a-vé-vo, dor-mì-vo. En noi y voi se mueve: gio-ca-và-mo, gio-ca-và-te.",
              "En loro vuelve atrás: gio-cà-va-no, a-vé-va-no. Es un error típico decir «giocavàno»: la fuerza nunca va en -no.",
              "«Essere» es irregular: ero, eri, era, eravamo, eravate, erano (è-ro, e-ra-và-mo, è-ra-no).",
            ],
            table: { head: ["", "fuerza en"], rows: [["giocavo", "-cà-"], ["giocavamo", "-và-"], ["giocavano", "-cà-"], ["eravamo / erano", "-và- / è-"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite. Cuidado con loro: la fuerza no va al final.", items: ["giocavo, giocavi, giocava", "giocavamo, giocavate, giocavano", "ero, eri, era, eravamo, erano", "avevo, facevo, dicevo, bevevo"] },
          { kind: "shadow", title: "Ricordi", hint: "Repite con la misma melodía, un poco nostálgica.", items: ["Quando ero piccolo, abitavo a Siviglia.", "Ogni domenica andavamo dalla nonna.", "Mia madre mi leggeva una favola ogni sera.", "Non mi piaceva la verdura.", "Mentre mangiavamo, guardavamo i cartoni animati."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "L'imperfetto", hint: "Cómo se forma el imperfetto",
            text: [
              "Se quita -re del infinitivo y se añade: -vo, -vi, -va, -vamo, -vate, -vano. Parlare → parla-vo; vedere → vede-vo; dormire → dormi-vo.",
              "Casi todos son regulares. Irregulares: essere (ero…), y los que en presente se «alargan»: fare → facevo, dire → dicevo, bere → bevevo, porre → ponevo, tradurre → traducevo.",
            ],
            table: {
              head: ["", "giocare", "avere", "essere"],
              rows: [["io", "giocavo", "avevo", "ero"], ["tu", "giocavi", "avevi", "eri"], ["lui / lei", "giocava", "aveva", "era"], ["noi", "giocavamo", "avevamo", "eravamo"], ["voi", "giocavate", "avevate", "eravate"], ["loro", "giocavano", "avevano", "erano"]],
            },
          },
          k.table("Tabella dei verbi", [
            ["abitare", "abitavo", "", "", "", "", ""],
            ["leggere", "", "", "leggeva", "", "", ""],
            ["dormire", "", "", "", "", "", ""],
            ["fare", "facevo", "", "", "", "", ""],
            ["dire", "", "", "", "dicevamo", "", ""],
            ["bere", "", "", "", "", "", ""],
          ], "Completa la tabla en imperfetto."),
          {
            kind: "fill", title: "Com'era?", hint: "Completa con el imperfetto del verbo entre paréntesis.",
            items: [
              "Da bambina io ___ molto timida. (essere)",
              "Mio fratello ___ sempre a calcio in cortile. (giocare)",
              "Noi ___ in un appartamento piccolo. (abitare)",
              "La nonna ci ___ la torta di mele ogni domenica. (fare)",
              "Tu che cosa ___ da grande? Il medico? (volere fare)",
              "I miei genitori ___ tutto il giorno. (lavorare)",
              "A scuola noi ___ un grembiule blu. (avere)",
              "La maestra ci ___ sempre: «Silenzio!». (dire)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Quando si usa l'imperfetto", hint: "Los usos del imperfetto",
            text: [
              "1. Costumbres en el pasado: «Ogni estate andavo al mare».",
              "2. Descripciones en el pasado (personas, lugares, tiempo, edad, hora): «Era alto», «Faceva freddo», «Avevo dieci anni», «Erano le otto».",
              "3. Dos acciones en curso a la vez, con «mentre»: «Mentre io studiavo, mia sorella guardava la tv».",
              "Palabras que suelen acompañarlo: da bambino, da piccolo, di solito, sempre, spesso, ogni giorno, ogni estate, una volta (antes, en aquella época).",
            ],
          },
          {
            kind: "fill", title: "Abitudini e descrizioni", hint: "Completa con el imperfetto.",
            items: ["Quando ___ (io, avere) otto anni, ___ (io, andare) a scuola a piedi.", "Il nostro paese ___ (essere) piccolo e non ___ (esserci) un cinema.", "D'estate ___ (fare) caldissimo e noi ___ (dormire) con le finestre aperte.", "Mentre la mamma ___ (cucinare), papà ___ (leggere) il giornale.", "Una volta la gente ___ (scrivere) lettere, non messaggi.", "Che cosa ___ (tu, mangiare) a merenda?"],
          },
          {
            kind: "intro", title: "Una volta e adesso", hint: "Antes y ahora",
            text: ["Para comparar el pasado con el presente: «Una volta… , adesso / oggi invece…».", "«Non… più» = ya no: «Prima fumavo, adesso non fumo più»."],
            examples: [{ it: "Una volta i bambini giocavano in strada; oggi invece giocano con il telefono.", es: "Antes los niños jugaban en la calle; hoy, en cambio, juegan con el móvil." }, { it: "Da piccolo mangiavo la carne, adesso non la mangio più.", es: "De pequeño comía carne, ahora ya no la como." }],
          },
          k.domanda(["Abitavo in un piccolo paese vicino a Granada.", "Giocavo con mio cugino Pablo.", "Da grande volevo fare l'astronauta.", "Ogni estate andavamo in campeggio.", "La mia maestra si chiamava Carmen.", "No, non mi piaceva la scuola."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Abitavo a Madrid. → Dove abitavi da piccolo?"),
          k.negativa(["Da bambino ero obbediente.", "Mi piacevano i cartoni animati.", "Andavamo spesso al cinema.", "Mio nonno guidava la macchina.", "C'era un parco vicino a casa."], "Pasa cada frase a negativo. En la última, usa «non… più» en presente: «adesso non c'è più»."),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La nonna racconta", "Una abuela le cuenta a su nieta cómo era su infancia.", [
            { who: "Sofia", text: "Nonna, com'era la tua vita quando eri piccola?" },
            { who: "Nonna", text: "Molto diversa! Abitavamo in campagna, in Abruzzo. Eravamo sette fratelli in una casa con due stanze." },
            { who: "Sofia", text: "Sette! E andavate a scuola?" },
            { who: "Nonna", text: "Sì, ma la scuola era lontana: camminavamo un'ora ogni mattina, anche quando nevicava." },
            { who: "Sofia", text: "E che cosa facevate il pomeriggio?" },
            { who: "Nonna", text: "Aiutavamo i genitori con gli animali. Ma la domenica giocavamo tutti in piazza, senza giocattoli: bastava un pallone." },
            { who: "Sofia", text: "E la televisione?" },
            { who: "Nonna", text: "La televisione ce l'aveva solo il bar del paese! Ci andavamo il sabato sera, tutti insieme." },
          ], ["Dove abitava la nonna da piccola?", "Quanti fratelli erano? Com'era la casa?", "Come andavano a scuola?", "Che cosa facevano il pomeriggio e la domenica?", "Dove guardavano la televisione? Quando?"]),
          k.listen("Il mio amico immaginario", "Un hombre habla en un podcast sobre su infancia.", [
            { who: "Andrea", text: "Da bambino ero figlio unico e mi sentivo spesso solo. Così avevo un amico immaginario: si chiamava Bartolo." },
            { who: "Andrea", text: "Bartolo era piccolo, aveva i capelli rossi e parlava solo in dialetto. Mangiava con noi e dormiva nel mio letto." },
            { who: "Andrea", text: "Mia madre gli preparava anche il piatto! I miei genitori non erano preoccupati: dicevano che ero un bambino creativo." },
            { who: "Andrea", text: "Poi, a sette anni, ho cominciato la scuola, ho conosciuto altri bambini e Bartolo è sparito." },
          ], ["Perché Andrea aveva un amico immaginario?", "Com'era Bartolo?", "Che cosa faceva la madre di Andrea?", "Che cosa pensavano i genitori?", "Quando e perché è sparito Bartolo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I bambini degli anni Ottanta", [
            "In Italia i bambini degli anni Ottanta ricordano tutti le stesse cose: i cartoni animati giapponesi del pomeriggio, le figurine dei calciatori e le merende con pane e Nutella.",
            "Molti giocavano in cortile o in strada fino all'ora di cena. Non c'erano i telefoni: quando era il momento di tornare a casa, la mamma chiamava dalla finestra.",
            "La scuola elementare durava cinque anni e i bambini avevano spesso una sola maestra per tutte le materie. Portavano il grembiule, blu per i maschi e bianco per le femmine.",
            "D'estate le famiglie partivano tutte nello stesso periodo, ad agosto: la «grande partenza» creava code enormi in autostrada.",
            "Oggi quei bambini hanno più di quarant'anni e molti dicono con nostalgia: «Avevamo meno cose, ma eravamo più liberi». È vero o è solo nostalgia?",
          ], ["Che cosa ricordano i bambini degli anni Ottanta?", "Dove giocavano? Fino a quando?", "Come sapevano che dovevano tornare a casa?", "Com'era la scuola elementare?", "Che cos'era la «grande partenza»?", "Che cosa dicono oggi con nostalgia? Sei d'accordo?"]),
          k.spagna("¿Cómo era la infancia en España cuando eras pequeño? ¿A qué se jugaba? Usa el imperfetto."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ricordare", hint: "Hablar de recuerdos",
            text: ["Para hablar de recuerdos: «Mi ricordo che…» (me acuerdo de que), «Mi ricordo di…» (me acuerdo de…), «Non mi ricordo», «Mi manca…» (echo de menos).", "«Mi manca» funciona como piacere: «Mi manca la mia città», «Mi mancano i miei nonni»."],
            examples: [{ it: "Mi ricordo che la casa dei nonni odorava di pane.", es: "Me acuerdo de que la casa de los abuelos olía a pan." }, { it: "Mi mancano le estati al mare.", es: "Echo de menos los veranos en la playa." }],
          },
          k.rispondi(["Dove abitavi da bambino o bambina?", "Com'eri: tranquillo, vivace, timido?", "Qual era il tuo gioco preferito?", "Chi era il tuo migliore amico o la tua migliore amica?", "Che cosa volevi fare da grande?", "Che cosa ti manca della tua infanzia?"]),
          { kind: "speak", title: "Una volta e adesso", hint: "Compara cada cosa entre tu infancia y ahora: «Una volta… , adesso invece…».", items: ["la tua città", "la tua famiglia", "il cibo che ti piace", "il tuo tempo libero", "la tecnologia", "le vacanze"] },
          {
            kind: "roleplay", title: "Intervista al nonno", hint: "Entrevistas a un señor mayor sobre cómo era su pueblo hace 60 años, para un trabajo de clase. La IA hace del señor. Usa «Lei».",
            steps: ["Preséntate y explica para qué es la entrevista.", "Pregunta cómo era el pueblo y cuánta gente vivía allí.", "Pregunta a qué jugaba de pequeño y cómo era la escuela.", "Pregunta qué cosas eran mejores antes y cuáles son mejores ahora.", "Agradece y despídete."],
          },
          {
            kind: "roleplay", title: "Vecchi compagni di classe", hint: "Te encuentras por casualidad con un antiguo compañero del colegio. La IA hace del compañero. Es informal.",
            steps: ["Reconócele y salúdale con sorpresa.", "Recordad juntos cómo era la clase y la maestra.", "Recordad una travesura que hacíais.", "Contad qué hacéis ahora (presente).", "Intercambiad el número y quedad para un café."],
          },
          { kind: "speak", title: "La mia infanzia", hint: "Habla un minuto y medio de tu infancia: dónde vivías, cómo eras, tu familia, tus juegos y un recuerdo especial.", items: ["Quando ero piccolo / piccola…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Cuando era pequeña vivía con mis abuelos.", "Todos los veranos íbamos a la playa.", "Mi hermano era muy travieso.", "Mientras yo estudiaba, mi madre cocinaba.", "Antes no había móviles.", "De pequeño no me gustaba la verdura.", "Echo de menos a mis amigos del colegio.", "Ya no vivo en esa ciudad."]),
          { kind: "write", title: "Un ricordo", hint: "Describe un lugar importante de tu infancia (la casa de los abuelos, el colegio, un pueblo): cómo era, quién estaba, qué hacíais siempre. Entre 8 y 10 frases, en imperfetto.", rows: 10, items: ["Quando ero piccolo / piccola…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: imperfetto", ["giocavamo", "erano", "facevi", "dicevano", "bevevo", "avevate"], "Escucha y escribe el verbo."),
          k.dettato("Dettato: frasi", ["Da bambino ero molto timido.", "Ogni estate andavamo al mare.", "Mentre mangiavamo, parlavamo.", "Mi mancano i nonni.", "Non c'era la televisione."]),
          k.media([
            { type: "Película", title: "Nuovo Cinema Paradiso (Giuseppe Tornatore, 1988)", where: "Busca dónde verla en JustWatch", why: "Un director recuerda su infancia en un pueblo de Sicilia y su amistad con el operador del cine. La gran película de la nostalgia." },
            { type: "Película", title: "Io non ho paura (Gabriele Salvatores, 2003)", where: "Busca dónde verla en JustWatch", why: "Un verano de 1978 en el sur de Italia, contado desde los ojos de un niño de diez años." },
            { type: "Canción", title: "La canzone del sole, Lucio Battisti", where: "Spotify, YouTube", why: "Clásico de 1971: un hombre recuerda a una chica de su juventud. Todo es recuerdo y el imperfetto aparece por todas partes." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta cómo era la vida del niño protagonista: dónde vivía, qué hacía cada día, cómo era su familia.", items: ["Il bambino abitava…"] },
        ],
      },
    ],

    exam: k.exam(17, {
      parole: ["l'infanzia", "l'asilo", "il giocattolo", "l'altalena", "la merenda", "litigare", "fare i capricci", "crescere", "viziato", "nascondino"],
      contrario: ["travieso", "obediente", "el recuerdo", "echar de menos", "antes (en otra época)", "trepar"],
      verbiHint: "Completa la tabla en imperfetto.",
      verbi: [["essere", "", "", "", "", "", ""], ["fare", "", "", "", "", "", ""], ["dire", "", "", "", "", "", ""]],
      completaHint: "Completa con el imperfetto del verbo entre paréntesis o con una palabra que falte.",
      completa: ["Quando ___ (io, essere) piccola, ___ (io, avere) paura del buio.", "I miei nonni ___ (bere) il caffè d'orzo.", "Mentre noi ___ (giocare), cominciava a piovere.", "Da bambini voi ___ (fare) sempre i compiti?", "Ogni sera mio padre ci ___ (leggere) una storia.", "Mi ___ molto i miei compagni di classe. (mancare)", "Prima fumavo, adesso non fumo ___.", "___ volta non c'erano i telefoni."],
      trasformaHint: "Pasa cada frase al imperfetto y añade la expresión entre paréntesis.",
      trasforma: ["Gioco a calcio. (da bambino)", "Andiamo al mare. (ogni estate)", "Mio padre fa il pane. (una volta)", "Le mie sorelle dicono sempre la verità. (da piccole)", "Sei molto timido. (a scuola)", "Bevete il latte. (a colazione, da bambini)"],
      leggi: {
        text: [
          "Mio nonno Gino faceva il postino in un paese delle Marche. Ogni mattina si alzava alle cinque e partiva con la sua bicicletta nera.",
          "Conosceva tutti: sapeva chi aspettava una lettera d'amore e chi aveva paura delle bollette. Spesso le signore gli offrivano un caffè o un pezzo di torta.",
          "Quando pioveva, metteva le lettere sotto il cappotto per non bagnarle. Diceva sempre: «Una lettera è un pezzo di persona: bisogna trattarla bene».",
        ],
        questions: ["Che lavoro faceva il nonno Gino?", "Come andava al lavoro?", "Che cosa gli offrivano le signore?", "Che cosa faceva quando pioveva? Perché?"],
      },
      ascolta: {
        script: [
          { who: "Elena", text: "Hai visto questa foto? Ero in seconda elementare." },
          { who: "Marco", text: "Che carina! Avevi le trecce!" },
          { who: "Elena", text: "Sì, me le faceva la nonna ogni mattina. Odiavo le trecce!" },
          { who: "Marco", text: "E questa signora chi è?" },
          { who: "Elena", text: "La maestra Lucia. Era severissima, ma ci voleva bene. Ci leggeva le favole ogni venerdì." },
        ],
        questions: ["In che classe era Elena nella foto?", "Chi le faceva le trecce? Le piacevano?", "Com'era la maestra Lucia?", "Che cosa faceva ogni venerdì?"],
      },
      parla: ["Racconta com'era la tua infanzia in un minuto e mezzo.", "Descrivi la tua scuola elementare e il tuo maestro o la tua maestra.", "Confronta la tua città di una volta e quella di oggi.", "Che cosa ti manca di quando eri piccolo o piccola?"],
      roleHint: "Es informal.",
      role: ["Enseñas a un amigo una foto tuya de pequeño: explica dónde estabas y con quién.", "Él te pregunta cómo eras: responde con detalles.", "Pregúntale tú por su infancia y compara."],
      dettato: ["Ero molto vivace.", "Giocavamo in cortile.", "Faceva freddo.", "Mi mancano le estati al mare.", "Non dicevano niente.", "Una volta non c'era internet."],
      traduci: ["Cuando tenía diez años vivía en Valencia.", "Todos los domingos comíamos con los abuelos.", "Mientras ella leía, yo dormía.", "Mi abuelo era alto y tenía bigote.", "¿Qué querías ser de mayor?", "Ya no juego a fútbol."],
      scrivi: { hint: "Escribe (60–70 palabras) cómo era tu mejor amigo o amiga de la infancia: cómo era, qué hacíais juntos y qué recuerdas de él o ella.", start: "Il mio migliore amico / La mia migliore amica si chiamava…" },
    }),
  };
})();
