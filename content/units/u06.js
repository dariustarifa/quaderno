// Unità 6 · Che cosa fai stasera?
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[6] = {
  n: 6,
  level: "A1",
  title: "Che cosa fai stasera?",
  goal: "Quedar con alguien: proponer un plan, aceptar o rechazar y fijar día, hora y lugar.",
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
            "Vas a aprender a quedar: proponer un plan, aceptar, rechazar con educación y decidir cuándo y dónde os veis. También los días de la semana.",
            "Gramática: cuatro verbos irregulares muy usados (fare, andare, venire, uscire), andare a / in / da y las fórmulas para invitar, aceptar y rechazar.",
            "Fare ya apareció en «Che lavoro fai?» y «fare colazione»: ahora lo ves entero.",
          ],
        },
        {
          kind: "intro",
          title: "Ti va di…?",
          hint: "Invitar a alguien",
          text: [
            "La forma más natural de proponer un plan entre amigos es «Ti va di…?» (¿te apetece…?) + infinitivo. También «Perché non…?» o directamente «Andiamo…?».",
            "Para responder que sí: «Volentieri!», «Perché no?», «Va bene». Para decir que no: «Mi dispiace, non posso».",
          ],
          examples: [
            { it: "Ti va di andare al cinema stasera?", es: "¿Te apetece ir al cine esta noche?" },
            { it: "Volentieri! A che ora?", es: "¡Con mucho gusto! ¿A qué hora?" },
            { it: "Mi dispiace, stasera non posso.", es: "Lo siento, esta noche no puedo." },
          ],
        },
        {
          kind: "speak",
          title: "Il tuo fine settimana",
          hint: "Antes de empezar: ¿qué haces normalmente el fin de semana? Dilo como puedas, aunque sea con palabras sueltas.",
          items: ["Il fine settimana…"],
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
          title: "Il tempo libero",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "il cinema", "il teatro", "la mostra", "il concerto", "la festa",
            "la partita", "la discoteca", "il locale", "la pizzeria", "fare una passeggiata",
            "fare un giro", "uscire con gli amici", "restare a casa", "l'appuntamento", "l'invito",
            "il biglietto", "stasera", "volentieri", "purtroppo", "un impegno",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "I giorni",
          hint: "Escribe en italiano. Los días de la semana van en minúscula, como en español.",
          items: [
            "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo",
            "hoy", "mañana", "pasado mañana", "esta noche", "el fin de semana",
            "la semana que viene", "el sábado por la noche", "los domingos (todos)",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: volentieri → Vengo volentieri alla tua festa.",
          items: ["stasera", "uscire", "venire", "andare a", "ti va di", "la domenica", "purtroppo", "volentieri"],
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
          title: "Lunedì, martedì… e la melodia della proposta",
          hint: "Los días y la entonación",
          text: [
            "De lunedì a venerdì, los días llevan el acento en la última sílaba y se escribe: lunedì, martedì, mercoledì, giovedì, venerdì. Sabato y domenica no llevan tilde: sà-ba-to, do-mè-ni-ca.",
            "«Il sabato» con artículo significa «todos los sábados»; sin artículo, «este sábado»: «Il sabato gioco a calcio» / «Sabato vado a Roma».",
            "Una propuesta sube al final como una pregunta («Andiamo al cinema?»); la misma frase con la voz bajando es una decisión («Andiamo al cinema.»).",
          ],
          table: {
            head: ["", "fuerza en"],
            rows: [
              ["lunedì, martedì, venerdì", "la última sílaba"],
              ["sabato", "sà-"],
              ["domenica", "-mè-"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "I giorni",
          hint: "Escucha y repite. Marca bien la fuerza al final de los cinco primeros.",
          items: [
            "lunedì, martedì, mercoledì",
            "giovedì, venerdì",
            "sabato, domenica",
            "oggi, domani, dopodomani",
            "stasera, stanotte, stamattina",
          ],
        },
        {
          kind: "shadow",
          title: "Proposte e risposte",
          hint: "Imita la melodía: la propuesta sube, la respuesta baja.",
          items: [
            "Ti va di uscire stasera?",
            "Andiamo a mangiare una pizza?",
            "Volentieri! A che ora ci vediamo?",
            "Mi dispiace, sabato non posso.",
            "Perché non venite anche voi?",
            "Va bene, allora a domani!",
          ],
        },
        {
          kind: "shadow",
          title: "Faccio, vado, vengo, esco",
          hint: "Las formas de io de los verbos nuevos. Repite hasta que salgan sin pensar.",
          items: ["faccio, fai, fa", "vado, vai, va", "vengo, vieni, viene", "esco, esci, esce"],
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
          title: "Fare e andare",
          hint: "Hacer e ir: fare y andare",
          text: [
            "«Fare» significa hacer, pero se usa en muchísimas expresiones donde en español va otro verbo: fare colazione (desayunar), fare la spesa (hacer la compra), fare una passeggiata (dar un paseo), fare sport.",
            "«Andare» significa ir. Ojo: andar (caminar) en italiano es «camminare».",
            "Los dos son irregulares: busca sus formas para la tabla. Pista: fare se parece a «faccio, fai, fa…»; andare empieza con «vado, vai, va…» pero noi y voi son regulares.",
          ],
          examples: [
            { it: "Che cosa fai stasera?", es: "¿Qué haces esta noche?" },
            { it: "Facciamo una passeggiata?", es: "¿Damos un paseo?" },
            { it: "Vado al cinema con Luca.", es: "Voy al cine con Luca." },
            { it: "Dove andate sabato?", es: "¿Adónde vais el sábado?" },
          ],
        },
        {
          kind: "intro",
          title: "Venire e uscire",
          hint: "Venir y salir: venire y uscire",
          text: [
            "«Venire» es venir: se usa cuando vas hacia donde está la otra persona. Por eso en italiano se dice «Vengo anch'io!» (¡voy yo también!) cuando te unes a un plan.",
            "«Uscire» es salir. Cambia la u en e en io, tu, lui / lei y loro: esco, esci, esce, escono.",
          ],
          examples: [
            { it: "Vieni con noi alla festa?", es: "¿Vienes con nosotros a la fiesta?" },
            { it: "Sì, vengo volentieri!", es: "¡Sí, voy encantada!" },
            { it: "Il venerdì esco con i colleghi.", es: "Los viernes salgo con los compañeros." },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla con ayuda de las pistas y de un diccionario.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["fare", "faccio", "", "", "", "", ""],
            ["andare", "", "", "", "andiamo", "", ""],
            ["venire", "", "vieni", "", "", "", ""],
            ["uscire", "esco", "", "", "", "", ""],
            ["stare", "", "", "", "", "", "stanno"],
          ],
        },
        {
          kind: "fill",
          title: "Fare o andare?",
          hint: "Completa con fare o andare en la forma correcta.",
          items: [
            "Io ___ colazione al bar e poi ___ in ufficio.",
            "Che cosa ___ tu domenica?",
            "Noi ___ al mare ad agosto.",
            "Voi ___ sport?",
            "Marco e Lucia ___ la spesa il sabato.",
            "Dove ___ Giulia stasera?",
            "Noi ___ una passeggiata in centro.",
          ],
        },
        {
          kind: "fill",
          title: "Venire o uscire?",
          hint: "Completa con venire o uscire en la forma correcta.",
          items: [
            "Stasera io ___ con i miei amici.",
            "Tu ___ alla festa di Marta?",
            "A che ora ___ di casa, la mattina?",
            "Noi ___ al concerto con voi!",
            "Voi ___ spesso il sabato sera?",
            "I miei cugini ___ a Roma a Natale.",
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
          title: "Andare a, in, da",
          hint: "Adónde vas: a, in o da",
          text: [
            "«A» con ciudades y con infinitivos: vado a Roma, vado a mangiare. También en expresiones fijas: a casa, a teatro, a scuola, a letto. Con algunos sitios aparece «al» (a + il): al cinema, al bar, al mare. Las contracciones las verás bien en la unidad 8.",
            "«In» con países y con muchos lugares, casi siempre sin artículo: in Italia, in centro, in piazza, in palestra, in discoteca, in montagna, in vacanza, in ufficio, in pizzeria.",
            "«Da» con personas: vado da Marco (a casa de Marco), vado dal medico (al médico).",
          ],
          table: {
            head: ["", "ejemplos"],
            rows: [
              ["a", "a Roma, a casa, a teatro, a mangiare"],
              ["al", "al cinema, al bar, al mare, al ristorante"],
              ["in", "in centro, in palestra, in discoteca, in montagna"],
              ["da", "da Marco, da mia nonna, dal medico"],
            ],
          },
        },
        {
          kind: "fill",
          title: "A, al, in o da?",
          hint: "Completa con a, al, in o da.",
          items: [
            "Stasera vado ___ cinema con Paolo.",
            "Domenica andiamo ___ montagna.",
            "Vieni ___ me dopo cena?",
            "Il sabato mattina vado ___ palestra.",
            "Ad agosto andate ___ Napoli?",
            "Adesso torno ___ casa.",
            "Venerdì andiamo ___ ballare ___ discoteca.",
            "Ci vediamo ___ centro, ___ piazza Maggiore.",
          ],
        },
        {
          kind: "intro",
          title: "Proporre, accettare, rifiutare",
          hint: "Proponer, aceptar y rechazar",
          text: [
            "Para proponer: «Ti va di…?», «Perché non…?», «Andiamo…?», «Facciamo…?».",
            "Para aceptar: «Volentieri!», «Perché no?», «D'accordo», «Va bene», «Ottima idea!».",
            "Para rechazar con educación se da una excusa y, si quieres, otra propuesta: «Mi dispiace, non posso: ho un impegno. Magari un'altra volta?». «Posso» viene de potere; de momento apréndelo como fórmula.",
            "Para fijar los detalles: «A che ora ci vediamo?», «Dove ci vediamo?», «Ci vediamo alle otto davanti al cinema».",
          ],
          examples: [
            { it: "Perché non andiamo a teatro sabato?", es: "¿Por qué no vamos al teatro el sábado?" },
            { it: "Ottima idea! Dove ci vediamo?", es: "¡Muy buena idea! ¿Dónde quedamos?" },
            { it: "Purtroppo domenica non posso, vado da mia nonna.", es: "Por desgracia el domingo no puedo, voy a casa de mi abuela." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Vado al cinema. → Dove vai?",
          items: [
            "Stasera esco con Marta.",
            "Ci vediamo alle nove.",
            "Ci vediamo davanti al teatro.",
            "Sabato faccio una festa a casa mia.",
            "Sì, vengo volentieri!",
            "Il fine settimana andiamo al mare.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Esco stasera.", "Vengo alla festa.", "Facciamo sport la domenica.", "Andate in discoteca?", "Escono spesso con i colleghi."],
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
          title: "Che cosa facciamo sabato?",
          hint: "Dos amigos organizan el sábado por teléfono. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Simone", text: "Ciao Bea! Senti, che cosa fai sabato sera?" },
            { who: "Beatrice", text: "Ciao! Niente di speciale, perché?" },
            { who: "Simone", text: "Ti va di andare al concerto in piazza? È gratis." },
            { who: "Beatrice", text: "Mmm, sabato sera… Purtroppo non posso, vado alla festa di compleanno di mia cugina." },
            { who: "Simone", text: "Peccato! E domenica? Facciamo un giro in bici sul lungomare?" },
            { who: "Beatrice", text: "Domenica sì, volentieri! A che ora?" },
            { who: "Simone", text: "Alle dieci? Ci vediamo davanti al bar della stazione." },
            { who: "Beatrice", text: "Perfetto. Viene anche Giorgio?" },
            { who: "Simone", text: "No, la domenica lavora. Allora a domenica!" },
          ],
          questions: [
            "Che cosa propone Simone per sabato?",
            "Perché Beatrice non può?",
            "Che cosa fanno domenica?",
            "A che ora e dove si vedono?",
            "Perché Giorgio non va con loro?",
          ],
        },
        {
          kind: "listen",
          title: "Un messaggio vocale",
          hint: "Sara deja un audio en un grupo de amigos. Responde en voz alta.",
          script: [
            { who: "Sara", text: "Ciao a tutti! Allora, venerdì è il mio compleanno e faccio una festa a casa mia." },
            { who: "Sara", text: "Comincia alle nove. Io preparo la pizza, voi portate da bere, va bene?" },
            { who: "Sara", text: "Vengono anche i miei colleghi, sono simpaticissimi." },
            { who: "Sara", text: "Abito in via Mazzini 8, al terzo piano. Il citofono non funziona: quando arrivate, mandate un messaggio." },
            { who: "Sara", text: "Rispondete entro mercoledì, così so quante pizze fare. Un bacio!" },
          ],
          questions: [
            "Perché Sara fa una festa?",
            "Quando comincia?",
            "Che cosa devono portare gli amici?",
            "Che cosa fanno quando arrivano? Perché?",
            "Entro quando devono rispondere?",
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
          title: "Il fine settimana degli italiani",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "Per molti italiani il fine settimana comincia il venerdì sera, con un aperitivo dopo il lavoro.",
            "Il sabato sera i giovani escono con gli amici: prima una pizza, poi un giro in centro o in un locale. Le discoteche aprono tardi e la gente arriva dopo mezzanotte.",
            "In estate in molte città ci sono concerti e cinema all'aperto, spesso nelle piazze. E nei paesi ci sono le sagre: feste con musica e cibo tipico.",
            "La domenica è un giorno più tranquillo. Molti pranzano con la famiglia; altri fanno una gita «fuori porta», cioè una breve gita al mare, al lago o in montagna, vicino alla città.",
            "E il pomeriggio, per tanti, c'è il calcio: allo stadio, al bar con gli amici o in televisione, sul divano.",
          ],
          questions: [
            "Quando comincia il fine settimana per molti italiani?",
            "Che cosa fanno i giovani il sabato sera?",
            "A che ora arriva la gente in discoteca?",
            "Che cos'è una sagra?",
            "Che cos'è una gita «fuori porta»?",
            "Dove si guarda il calcio la domenica?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Cómo es el fin de semana típico en España o en tu ciudad? ¿A qué hora se sale? Explícalo en italiano con 3 o 4 frases, en voz alta.",
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
          title: "Quando? Dove? A che ora?",
          hint: "Fijar los detalles de una cita",
          text: [
            "«Ci vediamo» significa «nos vemos» y sirve para quedar: «Ci vediamo sabato alle otto».",
            "Para el sitio: davanti a (delante de), al bar, in piazza, a casa mia / a casa tua. Para la hora: alle otto, verso le nove (hacia las nueve).",
            "Para cambiar un plan: «Facciamo alle nove invece delle otto?» o «Possiamo fare domenica?».",
          ],
          examples: [
            { it: "Ci vediamo alle otto davanti al cinema.", es: "Quedamos a las ocho delante del cine." },
            { it: "Passo da te verso le nove.", es: "Paso por tu casa hacia las nueve." },
            { it: "Facciamo domenica invece di sabato?", es: "¿Lo hacemos el domingo en vez del sábado?" },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Che cosa fai stasera?",
            "Che cosa fai di solito il sabato sera?",
            "Esci spesso con gli amici? Dove andate?",
            "Vai spesso al cinema? Con chi?",
            "Che cosa fai la domenica mattina?",
            "Qual è il tuo giorno preferito della settimana? Perché?",
          ],
        },
        {
          kind: "speak",
          title: "Accetta o rifiuta",
          hint: "Responde a cada invitación. En las tres primeras acepta y pregunta un detalle; en las demás, rechaza con una excusa y propón otra cosa.",
          items: [
            "Ti va di andare al cinema stasera?",
            "Facciamo una passeggiata in centro?",
            "Venite a cena da noi sabato?",
            "Andiamo in discoteca venerdì?",
            "Vieni alla partita domenica?",
            "Usciamo a bere qualcosa dopo il lavoro?",
          ],
        },
        {
          kind: "roleplay",
          title: "Organizziamo il sabato",
          hint: "Llamas a un amigo para quedar el sábado. La IA hace del amigo, que no puede a la primera. Es informal.",
          steps: [
            "Saluda y pregunta qué hace el sábado.",
            "Propón un plan.",
            "Tu amigo no puede: pregunta por qué y propón otro día.",
            "Poneos de acuerdo en la hora.",
            "Decidid dónde os veis.",
            "Pregunta si viene alguien más y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "Un invito del capo",
          hint: "Tu jefe te invita a una cena con clientes el viernes, pero tú ya tienes planes. Usa «Lei» y rechaza con mucha educación.",
          steps: [
            "Da las gracias por la invitación.",
            "Di que lo sientes, pero que el viernes no puedes, y explica por qué.",
            "Pregunta si hay otra ocasión.",
            "Acepta su nueva propuesta.",
            "Despídete formalmente.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio fine settimana ideale",
          hint: "Cuenta durante un minuto tu fin de semana ideal: qué haces, adónde vas, con quién y a qué hora.",
          items: ["Il venerdì sera…"],
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
            "¿Qué haces esta noche?",
            "¿Te apetece ir al teatro el viernes?",
            "Lo siento, no puedo: tengo un compromiso.",
            "Los sábados salgo con mis amigos.",
            "¿Vienes con nosotros a la playa?",
            "Voy a casa de Marco a las nueve.",
            "¿Dónde quedamos?",
            "Hacemos la compra el domingo por la mañana.",
          ],
        },
        {
          kind: "write",
          title: "Messaggi",
          hint: "Escribe tres mensajes de móvil: una invitación a un amigo (plan, día, hora y lugar), una respuesta aceptando otra invitación y una respuesta rechazando con una excusa. Entre 2 y 4 frases cada uno.",
          rows: 4,
          items: ["L'invito:", "Accetto:", "Rifiuto:"],
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
          title: "Dettato: giorni e orari",
          hint: "Escucha y escribe lo que oyes, con letras.",
          items: ["mercoledì", "sabato sera", "domenica mattina", "giovedì alle otto", "venerdì alle nove e mezza", "dopodomani"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Che cosa fai stasera?", "Vengo anch'io!", "Usciamo alle dieci.", "Andate al cinema?", "Mi dispiace, non posso."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Serie", title: "Summertime", where: "Netflix", why: "Un verano de jóvenes en la costa de Romaña: fiestas, planes y quedadas. Italiano actual y sencillo." },
            { type: "Película", title: "Notte prima degli esami (2006)", where: "Busca dónde verla en JustWatch", why: "Comedia sobre un grupo de amigos el verano de la selectividad italiana. Muchas escenas de quedar y salir." },
            { type: "Canción", title: "Via con me, Paolo Conte", where: "Spotify, YouTube", why: "Clásico de 1981: una invitación a irse juntos. Escucha cuántas veces aparece el verbo venire." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Fíjate en cómo invitan y responden.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Cuenta qué hacen los personajes en su tiempo libre: adónde van, con quién y cuándo.",
          items: ["Il sabato sera vanno…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 6",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["volentieri", "purtroppo", "un impegno", "la mostra", "dopodomani", "giovedì", "fare un giro", "restare a casa"],
      },
      {
        kind: "table",
        title: "2. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["fare", "", "", "", "", "", ""],
          ["andare", "", "", "", "", "", ""],
          ["uscire", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con el verbo entre paréntesis o con a, al, in, da.",
        items: [
          "Noi ___ al mare domenica. (andare)",
          "Tu ___ alla festa? (venire)",
          "Loro ___ sempre tardi. (uscire)",
          "Che cosa ___ voi stasera? (fare)",
          "Vado ___ Marco dopo cena.",
          "Il sabato andiamo ___ palestra.",
          "Stasera andate ___ cinema?",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Fabio", text: "Ciao Elena! Ti va di andare alla mostra di Caravaggio giovedì?" },
          { who: "Elena", text: "Giovedì purtroppo non posso, lavoro fino alle otto. Facciamo venerdì?" },
          { who: "Fabio", text: "Venerdì va bene. Il museo apre alle dieci." },
          { who: "Elena", text: "Perfetto. Ci vediamo alle dieci davanti al museo?" },
          { who: "Fabio", text: "D'accordo. E dopo andiamo a mangiare qualcosa in centro." },
        ],
        questions: ["Che cosa propone Fabio?", "Perché Elena non può giovedì?", "Quando e dove si vedono?", "Che cosa fanno dopo?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Invita un amico a fare qualcosa sabato: giorno, ora e luogo.",
          "Rifiuta un invito con una scusa e proponi un altro giorno.",
          "Racconta che cosa fai di solito il fine settimana.",
          "Rifiuta in modo formale l'invito di un collega più anziano.",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Ti va di uscire?", "venerdì sera", "Escono con gli amici.", "Ci vediamo in piazza."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Te apetece dar un paseo?",
          "El domingo vamos a la montaña.",
          "Lo siento, esta noche no salgo.",
          "¿Venís vosotros también?",
        ],
      },
    ],
  },
};
