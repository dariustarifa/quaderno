// Unità 11 · Vestiti
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[11] = {
  n: 11,
  level: "A1",
  title: "Vestiti",
  goal: "Comprar ropa: pedir talla y color, probarte algo, decir cómo te queda y describir lo que llevas.",
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
            "Vas a aprender a comprar ropa y zapatos: pedir la talla y el color, probarte algo, decir si te queda bien y describir cómo vas vestido.",
            "Gramática: los colores y su concordancia (con los que no cambian), bello y quello delante de un sustantivo, y «mi sta bene / mi stanno bene», que funciona como piacere.",
            "Verbos: portare (llevar puesto), mettersi (ponerse), provare (probar) y togliersi (quitarse).",
          ],
        },
        {
          kind: "intro",
          title: "Che taglia porta?",
          hint: "Un adelanto: en la tienda",
          text: [
            "En una tienda te preguntarán «Che taglia porta?» (¿qué talla usa?) y, para los zapatos, «Che numero porta?».",
            "Para probarte algo: «Posso provare questa giacca?». Los probadores son «i camerini».",
          ],
          examples: [
            { it: "Porto la 42.", es: "Uso la 42." },
            { it: "Posso provare questi pantaloni?", es: "¿Puedo probarme estos pantalones?" },
            { it: "Come mi sta? — Ti sta benissimo!", es: "¿Qué tal me queda? — ¡Te queda genial!" },
          ],
        },
        {
          kind: "speak",
          title: "Che cosa porti oggi?",
          hint: "Antes de empezar: di qué ropa llevas hoy, con las palabras que sepas.",
          items: ["Oggi porto…"],
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
          title: "I vestiti",
          hint: "Busca cada palabra y escribe su traducción al español. Ojo a los falsos amigos: «la camicia» y «la gonna».",
          items: [
            "la maglietta", "la camicia", "il maglione", "la felpa", "i pantaloni",
            "i jeans", "la gonna", "il vestito", "la giacca", "il cappotto",
            "il giubbotto", "le scarpe", "le scarpe da ginnastica", "gli stivali", "i sandali",
            "le calze", "la cintura", "la sciarpa", "il cappello", "la borsa",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Colori e negozio",
          hint: "Escribe en italiano.",
          items: [
            "blanco", "negro", "rojo", "azul claro", "azul marino", "verde",
            "amarillo", "gris", "marrón", "rosa", "morado", "naranja",
            "la talla", "el probador", "las rebajas", "el descuento", "estrecho / ajustado", "ancho / holgado",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: azzurro → Mi metto la camicia azzurra.",
          items: ["azzurro", "mi sta", "mi stanno", "quel", "bello", "provare", "la taglia", "i saldi"],
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
          title: "Camicia, maglione, giacca",
          hint: "Los sonidos de la ropa",
          text: [
            "Repaso de sonidos con la ropa: camicia (ka-mì-cha), maglione (ma-llò-ne), giacca (yàk-ka), sciarpa (shàr-pa), scarpe (skàr-pe).",
            "Fíjate en la pareja «sciarpa / scarpe»: una lleva i y suena «sh», la otra no y suena «sk».",
            "Varios colores llevan doble: rosso, giallo, azzurro. «Azzurro» suena «a-dsùr-ro».",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["sciarpa / scarpe", "shar / skar"],
              ["maglione, maglietta", "-llio-, -llie-"],
              ["giacca, giallo", "ya-"],
              ["azzurro, rosso, giallo", "dobles largas"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Escucha y repite cada línea.",
          items: [
            "sciarpa, scarpe, sciarpa, scarpe",
            "camicia, maglione, maglietta",
            "giacca, giallo, giubbotto",
            "rosso, giallo, azzurro, marrone",
            "bianco, bianchi, bianca, bianche",
          ],
        },
        {
          kind: "shadow",
          title: "In negozio",
          hint: "Repite con la misma melodía.",
          items: [
            "Buongiorno, posso aiutarLa?",
            "Sì, cerco un maglione blu.",
            "Che taglia porta?",
            "Posso provare quella giacca?",
            "I camerini sono in fondo a destra.",
            "Mi sta un po' stretta. Avete la taglia più grande?",
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
          title: "Portare, mettersi, provare",
          hint: "Llevar, ponerse y probarse",
          text: [
            "«Portare» significa llevar puesto: «Porto sempre i jeans». También sirve para la talla: «Porto la 40».",
            "«Mettersi» es ponerse (reflexivo, como svegliarsi): «Che cosa ti metti stasera?». Su contrario es «togliersi» (quitarse), irregular en io y loro: mi tolgo, si tolgono.",
            "«Provare» es probar o probarse: «Posso provare queste scarpe?». No hace falta el reflexivo.",
          ],
          examples: [
            { it: "Oggi porto una camicia bianca.", es: "Hoy llevo una camisa blanca." },
            { it: "Mi metto il cappotto: fa freddo.", es: "Me pongo el abrigo: hace frío." },
            { it: "In casa mi tolgo sempre le scarpe.", es: "En casa siempre me quito los zapatos." },
          ],
        },
        {
          kind: "intro",
          title: "Mi sta bene",
          hint: "Quedar bien: stare como piacere",
          text: [
            "Para decir cómo te queda la ropa se usa stare con los mismos pronombres que piacere: mi, ti, gli, le, ci, vi, gli.",
            "«Sta» con una prenda y «stanno» con varias o con prendas en plural: «La giacca mi sta bene», «I pantaloni mi stanno corti».",
            "Matices: mi sta bene / male / grande / piccolo / stretto / largo / lungo / corto. El adjetivo concuerda con la prenda.",
          ],
          examples: [
            { it: "Come mi sta questo vestito?", es: "¿Qué tal me queda este vestido?" },
            { it: "Ti stanno benissimo quei jeans!", es: "¡Te quedan genial esos vaqueros!" },
            { it: "La gonna le sta un po' larga.", es: "La falda le queda un poco ancha." },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["portare", "", "", "", "", "", ""],
            ["mettersi", "mi metto", "", "", "", "", ""],
            ["togliersi", "mi tolgo", "", "", "", "", "si tolgono"],
            ["provare", "", "", "proviamo", "", "", ""],
            ["vestirsi", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Portare, mettersi o togliersi?",
          hint: "Completa con el verbo que tiene sentido, en la forma correcta.",
          items: [
            "Al lavoro Marco ___ sempre la giacca.",
            "Fa caldo: io ___ il maglione.",
            "Stasera c'è la festa: che cosa ___ tu?",
            "In Giappone, in casa, le persone ___ le scarpe.",
            "Mia sorella ___ la 38.",
            "Piove: ___ gli stivali! (voi)",
          ],
        },
        {
          kind: "fill",
          title: "Sta o stanno?",
          hint: "Completa con el pronombre (si falta) y sta o stanno.",
          items: [
            "Questa camicia mi ___ benissimo.",
            "Le scarpe ti ___ grandi?",
            "(a lui) Il cappotto ___ ___ lungo.",
            "(a lei) Quei pantaloni ___ ___ stretti.",
            "Come ci ___ queste magliette?",
            "Signora, la gonna Le ___ molto bene.",
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
          title: "I colori",
          hint: "Los colores y la concordancia",
          text: [
            "Los colores en -o tienen cuatro formas: rosso, rossa, rossi, rosse. Ojo con bianco → bianchi, bianche.",
            "Los colores en -e tienen dos: verde / verdi, marrone / marroni, arancione / arancioni.",
            "Algunos no cambian nunca: rosa, viola, blu, beige. «Una gonna rosa», «due gonne rosa», «i pantaloni blu».",
            "Con «chiaro» y «scuro» el color tampoco cambia: «una giacca verde scuro», «delle camicie azzurro chiaro».",
          ],
          table: {
            head: ["", "masc. sing.", "fem. pl."],
            rows: [
              ["-o", "il maglione rosso", "le magliette rosse"],
              ["-co", "il cappello bianco", "le scarpe bianche"],
              ["-e", "il vestito verde", "le giacche verdi"],
              ["no cambian", "il cappotto blu", "le borse rosa"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Di che colore?",
          hint: "Completa la terminación del color. Si no cambia, deja la palabra entera.",
          items: [
            "una camicia bianc___",
            "dei pantaloni ner___",
            "le scarpe marron___",
            "due magliette ros___ (rosa)",
            "una giacca gial___",
            "gli stivali gri___",
            "delle calze bl___",
            "una sciarpa verd___",
          ],
        },
        {
          kind: "intro",
          title: "Bello e quello",
          hint: "Bello y quello delante del sustantivo",
          text: [
            "Delante de un sustantivo, «quello» y «bello» cambian como el artículo determinado: il → quel / bel, lo → quello / bello, l' → quell' / bell', la → quella / bella, i → quei / bei, gli → quegli / begli, le → quelle / belle.",
            "Truco: piensa primero el artículo. «Il cappotto» → «quel cappotto», «un bel cappotto». «Gli stivali» → «quegli stivali», «dei begli stivali».",
            "Detrás del sustantivo o solo, «bello» es normal: «Il cappotto è bello», «Sono belli».",
          ],
          table: {
            head: ["artículo", "quello", "bello"],
            rows: [
              ["il", "quel maglione", "un bel maglione"],
              ["lo", "quello zaino", "un bello zaino"],
              ["l'", "quell'abito", "un bell'abito"],
              ["la", "quella gonna", "una bella gonna"],
              ["i", "quei jeans", "dei bei jeans"],
              ["gli", "quegli stivali", "dei begli stivali"],
              ["le", "quelle scarpe", "delle belle scarpe"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Quel, quello, quella…",
          hint: "Completa con la forma de quello que corresponde.",
          items: [
            "Quanto costa ___ cappotto?",
            "Posso provare ___ scarpe?",
            "Mi piace ___ zaino nero.",
            "___ stivali sono in saldo?",
            "Mi sta bene ___ giacca?",
            "___ jeans sono troppo cari.",
            "Che bello ___ impermeabile!",
          ],
        },
        {
          kind: "fill",
          title: "Bel, bello, bella…",
          hint: "Completa con la forma de bello que corresponde.",
          items: [
            "Hai un ___ vestito!",
            "Che ___ scarpe!",
            "È un ___ zaino.",
            "Ci sono dei ___ maglioni in vetrina.",
            "Che ___ occhiali!",
            "Questa gonna è molto ___.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Porto la 42. → Che taglia porta?",
          items: [
            "Porto il 39 di scarpe.",
            "Il cappotto costa centoventi euro.",
            "I camerini sono in fondo a destra.",
            "Sì, ce l'abbiamo anche in nero.",
            "Ti sta benissimo!",
            "Stasera mi metto il vestito rosso.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["La giacca mi sta bene.", "Porto la cravatta al lavoro.", "Mi metto gli stivali.", "Quelle scarpe sono in saldo.", "Provo questi pantaloni."],
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
          title: "In negozio",
          hint: "Un chico busca una chaqueta. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Commessa", text: "Buongiorno! Posso aiutarLa?" },
            { who: "Alessio", text: "Sì, grazie. Cerco una giacca per un matrimonio." },
            { who: "Commessa", text: "Di che colore la cerca? Abbiamo questa blu e quella grigia." },
            { who: "Alessio", text: "Mi piace quella grigia. Posso provarla? Porto la 50." },
            { who: "Commessa", text: "Certo, i camerini sono lì a sinistra." },
            { who: "Alessio", text: "Mmm… mi sta un po' stretta. Avete la 52?" },
            { who: "Commessa", text: "Grigia no, mi dispiace. In blu sì." },
            { who: "Alessio", text: "Va bene, provo quella blu." },
            { who: "Commessa", text: "Le sta benissimo! E oggi c'è il venti per cento di sconto." },
            { who: "Alessio", text: "Perfetto, la prendo!" },
          ],
          questions: [
            "Perché Alessio cerca una giacca?",
            "Di che colore sono le giacche?",
            "Che taglia porta? Qual è il problema?",
            "Che giacca compra alla fine?",
            "Perché è contento del prezzo?",
          ],
        },
        {
          kind: "listen",
          title: "Che cosa mi metto?",
          hint: "Dos amigas deciden qué ponerse para una cena. Responde en voz alta.",
          script: [
            { who: "Giorgia", text: "Stasera c'è la cena con i colleghi di Luca e non so che cosa mettermi!" },
            { who: "Silvia", text: "Metti quel vestito verde, quello lungo. Ti sta benissimo." },
            { who: "Giorgia", text: "È troppo elegante. È una pizzeria, non un ristorante di lusso." },
            { who: "Silvia", text: "Allora jeans neri, la camicia bianca e una bella giacca." },
            { who: "Giorgia", text: "Sì, mi piace. E le scarpe? I tacchi o le scarpe da ginnastica?" },
            { who: "Silvia", text: "Né i tacchi né le scarpe da ginnastica: gli stivaletti marroni!" },
            { who: "Giorgia", text: "Perfetto. Sei la mia consulente di moda!" },
          ],
          questions: [
            "Dov'è la cena stasera?",
            "Perché Giorgia non si mette il vestito verde?",
            "Che cosa le consiglia Silvia?",
            "Che scarpe si mette alla fine?",
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
          title: "La bella figura",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "Per molti italiani vestirsi bene è importante. Non per forza con abiti cari, ma in modo curato: è la «bella figura», cioè fare una buona impressione.",
            "Milano è una delle capitali mondiali della moda. Due volte all'anno, con la Settimana della moda, la città si riempie di stilisti, modelle e giornalisti.",
            "Ci sono anche alcune regole non scritte: i pantaloncini e le infradito sono per la spiaggia, non per la città. E nelle chiese, soprattutto a Roma, bisogna coprire le spalle e le ginocchia.",
            "I saldi cominciano all'inizio di gennaio e all'inizio di luglio. Molti aspettano quei giorni per comprare un bel cappotto o un paio di scarpe con il trenta o il cinquanta per cento di sconto.",
            "E il «made in Italy» non è solo lusso: in molte città ci sono piccoli laboratori dove artigiani fanno scarpe, borse e camicie a mano.",
          ],
          questions: [
            "Che cosa significa «fare bella figura»?",
            "Che cosa succede a Milano due volte all'anno?",
            "Dove si portano i pantaloncini e le infradito?",
            "Come bisogna vestirsi in chiesa?",
            "Quando cominciano i saldi?",
            "Che cosa fanno gli artigiani nei laboratori?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Existe en España algo parecido a la «bella figura»? ¿Cuándo son las rebajas? ¿Cómo se viste la gente para trabajar? 3 o 4 frases, en voz alta.",
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
          title: "Descrivere un look",
          hint: "Describir cómo va vestido alguien",
          text: [
            "Para describir: «Porta / Ha / Indossa…» + prenda + color: «Porta una giacca blu e dei jeans chiari». «Indossare» es más formal.",
            "Para opinar: «È elegante / sportivo / casual / comodo / di moda». Y para la ropa en general: «Ti sta bene», «Ti dona» (te favorece).",
          ],
          examples: [
            { it: "Oggi porto un look sportivo: felpa grigia e scarpe da ginnastica.", es: "Hoy voy de sport: sudadera gris y zapatillas." },
            { it: "Quel colore ti dona.", es: "Ese color te favorece." },
            { it: "Al lavoro mi vesto in modo elegante.", es: "Para trabajar me visto elegante." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Che cosa porti oggi? Di che colore?",
            "Qual è il tuo colore preferito per i vestiti?",
            "Come ti vesti per andare al lavoro o a lezione?",
            "Che cosa ti metti per una festa?",
            "Dove compri i vestiti? Aspetti i saldi?",
            "C'è un capo che porti sempre?",
          ],
        },
        {
          kind: "speak",
          title: "Descrivi",
          hint: "Describe cómo van vestidas estas personas (reales o imaginadas): prendas, colores y estilo.",
          items: ["Una persona della tua famiglia oggi", "Il tuo look ideale per un matrimonio", "Il tuo look per una domenica a casa", "Un personaggio famoso"],
        },
        {
          kind: "roleplay",
          title: "Il maglione per la nonna",
          hint: "Compras un regalo para tu abuela en una tienda. La IA hace de dependienta. Usa «Lei».",
          steps: [
            "Saluda y explica qué buscas y para quién.",
            "Pide un color y pregunta los precios.",
            "Elige entre quel maglione y quello.",
            "Pregunta si se puede cambiar si no le queda bien («cambiare»).",
            "Pide que te lo envuelvan para regalo («incartare»).",
            "Paga y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "Shopping con un amico",
          hint: "Vas de compras con un amigo que se prueba ropa y te pregunta qué tal le queda. La IA hace del amigo. Es informal.",
          steps: [
            "Tu amigo se prueba unos pantalones: di cómo le quedan.",
            "Le quedan pequeños: propón otra talla u otro color.",
            "Él te pregunta qué te parece una chaqueta: da tu opinión con bello y quello.",
            "Pruébate tú algo y pregunta qué tal te queda.",
            "Decidid qué compráis cada uno.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio stile",
          hint: "Habla un minuto de tu forma de vestir: qué llevas normalmente, tus colores, dónde compras y qué no te pondrías nunca.",
          items: ["Di solito porto…"],
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
            "¿Puedo probarme esa chaqueta?",
            "¿Qué talla usa?",
            "Estos zapatos me quedan pequeños.",
            "Hoy llevo una camisa blanca y unos vaqueros azules.",
            "¡Qué vestido tan bonito!",
            "Me pongo el abrigo porque hace frío.",
            "Esas botas no están rebajadas.",
            "Las faldas rosas cuestan treinta euros.",
          ],
        },
        {
          kind: "write",
          title: "La valigia",
          hint: "Vas una semana a Milán en noviembre. Escribe qué ropa metes en la maleta y por qué: para el día, para salir por la noche y por si llueve. Entre 6 y 8 frases.",
          rows: 8,
          items: ["Nella mia valigia metto…"],
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
          title: "Dettato: vestiti e colori",
          hint: "Escucha y escribe lo que oyes.",
          items: ["una camicia bianca", "i pantaloni neri", "quegli stivali", "un bel maglione", "le scarpe marroni", "una gonna rosa"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Che taglia porta?", "Mi sta un po' stretta.", "Posso provare quel cappotto?", "Ti stanno benissimo!", "Mi tolgo le scarpe."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Serie", title: "Made in Italy (2019)", where: "Busca dónde verla en JustWatch", why: "Milán en los años 70: una chica empieza a trabajar en una revista de moda y conoce a los grandes diseñadores italianos." },
            { type: "Canción", title: "Bella, Jovanotti", where: "Spotify, YouTube", why: "Canción de 1997 llena de adjetivos y comparaciones. Fíjate en cómo cambia «bello» según la palabra." },
            { type: "YouTube", title: "Haul o try-on in italiano", where: "YouTube", why: "Busca «haul vestiti» o «prova vestiti»: gente real enseñando la ropa que se ha comprado, con tallas, colores y precios." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Fíjate en las prendas y los colores.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Describe la ropa de una persona del vídeo o de la serie: qué lleva, de qué color y qué te parece.",
          items: ["Porta… Secondo me…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 11",
    hint: "Unos 40 minutos, sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["la camicia", "la gonna", "il cappotto", "le calze", "il camerino", "i saldi", "stretto", "largo", "indossare", "la cintura"],
      },
      {
        kind: "vocab",
        from: "es",
        title: "2. Al contrario",
        hint: "Traduce al italiano.",
        items: ["las zapatillas de deporte", "la bufanda", "gris", "marrón", "azul marino", "el descuento"],
      },
      {
        kind: "table",
        title: "3. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["mettersi", "", "", "", "", "", ""],
          ["togliersi", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "4. Completa",
        hint: "Completa con quello, bello, el color, sta / stanno o el verbo entre paréntesis.",
        items: [
          "Quanto costano ___ stivali?",
          "Posso provare ___ giacca?",
          "Hai un ___ cappotto!",
          "Che ___ occhiali!",
          "Ho due camicie bianc___.",
          "Le scarpe mi ___ grandi.",
          "Questa felpa ti ___ benissimo.",
          "Stasera io ___ il vestito nero. (mettersi)",
        ],
      },
      {
        kind: "translate",
        from: "it",
        placeholder: "trasforma",
        title: "5. Trasforma",
        hint: "Las tres primeras, al plural. Las tres últimas, a negativo.",
        items: [
          "Quel maglione rosso è bello.",
          "Quello zaino è blu.",
          "Questa gonna bianca mi sta bene.",
          "Mi metto la cravatta.",
          "Quei jeans ti stanno bene.",
          "Porto la giacca al lavoro.",
        ],
      },
      {
        kind: "reading",
        title: "6. Leggi",
        hint: "Lee el texto y responde en italiano.",
        text: [
          "Elena lavora in una banca a Torino. Dal lunedì al giovedì si veste in modo elegante: pantaloni scuri, camicia chiara e una giacca blu o grigia.",
          "Il venerdì, invece, in ufficio si può venire più casual: Elena porta i jeans, un maglione colorato e le scarpe da ginnastica bianche.",
          "Il fine settimana non vuole pensare ai vestiti: tuta, felpa larga e niente trucco. «Ma se esco la sera», dice, «mi metto sempre qualcosa di bello».",
        ],
        questions: ["Come si veste Elena dal lunedì al giovedì?", "Che cosa cambia il venerdì?", "Che cosa porta nel fine settimana?", "Che cosa fa quando esce la sera?"],
      },
      {
        kind: "listen",
        title: "7. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Commesso", text: "Buonasera, cerca qualcosa?" },
          { who: "Cliente", text: "Sì, delle scarpe nere per l'ufficio. Porto il trentotto." },
          { who: "Commesso", text: "Abbiamo queste, in pelle. Costano novanta euro." },
          { who: "Cliente", text: "Sono belle, ma un po' care. E quelle?" },
          { who: "Commesso", text: "Quelle sono in saldo: sessanta euro. Ma il trentotto c'è solo in marrone." },
          { who: "Cliente", text: "Marrone va bene lo stesso. Le provo." },
        ],
        questions: ["Che cosa cerca la cliente?", "Che numero porta?", "Quanto costano le prime scarpe?", "Perché le seconde costano meno?", "Che colore sceglie? Perché?"],
      },
      {
        kind: "speak",
        title: "8. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Descrivi che cosa porti oggi, con i colori.",
          "Chiedi in un negozio di provare una giacca nella tua taglia.",
          "Di' a un amico come gli stanno dei pantaloni (troppo lunghi).",
          "Racconta come ti vesti per il lavoro e per una festa.",
        ],
      },
      {
        kind: "roleplay",
        title: "9. In negozio",
        hint: "Hazlo con la IA, de una vez y sin preparar. Usa «Lei».",
        steps: [
          "Pide una prenda en tu talla y en un color.",
          "No te queda bien: explica por qué y pide otra talla.",
          "Pregunta si hay descuento y decide si la compras.",
        ],
      },
      {
        kind: "dictation",
        title: "10. Dettato",
        hint: "Escucha y escribe.",
        items: ["quegli stivali marroni", "Mi sta grande.", "delle belle scarpe", "Che taglia porti?", "una sciarpa grigia", "Si tolgono le scarpe."],
      },
      {
        kind: "translate",
        title: "11. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Tienen esta camisa en azul?",
          "Esos pantalones te quedan cortos.",
          "¡Qué zapatos tan bonitos!",
          "Me quito la chaqueta.",
          "Las rebajas empiezan en enero.",
          "Uso la talla 44.",
        ],
      },
      {
        kind: "write",
        title: "12. Scrivi",
        hint: "Describe (50–60 palabras) qué te pones para una entrevista de trabajo importante y por qué.",
        rows: 6,
        items: ["Per un colloquio importante mi metto…"],
      },
    ],
  },
};
