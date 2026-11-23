// Unità 4 · Al bar
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[4] = {
  n: 4,
  level: "A1",
  title: "Al bar",
  goal: "Pedir en un bar, preguntar precios y pagar.",
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
            "Vas a aprender a pedir en un bar, a preguntar precios, a pagar y a entender la cuenta. También vas a conocer las costumbres del café en Italia.",
            "Gramática: el plural de los sustantivos con sus excepciones, «vorrei» para pedir con educación, «costa / costano» y los precios.",
            "Repasa los números hasta 100: aquí los necesitas para los euros y los céntimos.",
          ],
        },
        {
          kind: "intro",
          title: "Un caffè, per favore",
          hint: "Pedir en el bar",
          text: [
            "En Italia «un caffè» es siempre un espresso. Si lo quieres con un poco de leche, pide «un caffè macchiato»; si quieres mucha leche, «un caffellatte».",
            "Para pedir hay tres fórmulas: «Vorrei…» (quisiera), «Prendo…» (tomo) y, entre amigos, «Per me…» (para mí).",
          ],
          examples: [
            { it: "Vorrei un cappuccino, per favore.", es: "Quisiera un capuchino, por favor." },
            { it: "Per me un caffè.", es: "Para mí un café." },
            { it: "Prendo una spremuta d'arancia.", es: "Tomo un zumo de naranja natural." },
            { it: "Quanto pago?", es: "¿Cuánto es?" },
          ],
        },
        {
          kind: "speak",
          title: "Che cosa prendi?",
          hint: "Antes de empezar: ¿qué tomas normalmente por la mañana? Dilo en italiano como puedas.",
          items: ["La mattina prendo…"],
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
          title: "Al bar",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "il caffè", "il cappuccino", "il cornetto", "la spremuta", "il succo di frutta",
            "l'acqua frizzante", "l'acqua naturale", "il tè", "la cioccolata calda", "il tramezzino",
            "il panino", "il bicchiere", "la tazza", "lo zucchero", "il latte",
            "lo scontrino", "la cassa", "il bancone", "il tavolino", "l'aperitivo",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Chiedere e pagare",
          hint: "Ahora al revés: escribe en italiano.",
          items: [
            "quisiera", "¿cuánto cuesta?", "¿cuánto es? (al pagar)", "la cuenta",
            "para llevar", "con hielo", "sin azúcar", "caliente",
            "frío", "el céntimo", "el cambio (lo que te devuelven)", "pagar con tarjeta",
            "en efectivo", "la propina",
          ],
        },
        {
          kind: "vocab",
          title: "I prezzi",
          hint: "Escribe cada precio en cifras. Ejemplo: due euro e venti → 2,20 €.",
          placeholder: "€",
          items: [
            "un euro e dieci", "un euro e cinquanta", "novanta centesimi", "due euro e quaranta", "tre euro e ottanta",
            "quattro euro e novantanove", "sei euro e trenta", "dodici euro", "diciotto euro e cinquanta", "venticinque euro",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: senza → Un tè senza zucchero, per favore.",
          items: ["vorrei", "quanto costa", "lo scontrino", "senza", "al banco", "un bicchiere d'acqua", "per me", "i cornetti"],
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
          title: "Le doppie al bar",
          hint: "Las dobles, el acento y la z",
          text: [
            "En el bar aparecen muchas dobles: cappuccino, latte, frizzante, bicchiere, tazza. Si no las alargas, te entienden, pero suena extranjero.",
            "«Caffè» y «tè» llevan acento escrito: la fuerza va al final.",
            "La z tiene dos sonidos, y ninguno es la z española: «ts» en pizza, grazie y tazza; «ds» en zucchero, zero y zaino.",
            "La cortesía también está en el tono: «per favore» y «grazie» se dicen con la voz amable, sin cortar.",
          ],
          table: {
            head: ["", "ejemplos"],
            rows: [
              ["z = «ts»", "pizza, grazie, tazza, frizzante"],
              ["z = «ds»", "zucchero, zero, zaino"],
              ["doble", "cappuccino, latte, bicchiere, cornetto"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Le doppie",
          hint: "Repite cada línea. Ojo: algunas palabras llevan doble y otras no.",
          items: [
            "cappuccino, latte, frizzante",
            "bicchiere, tazza, mozzarella",
            "cornetto, spremuta, panino",
            "caffè, caffellatte, tè",
            "pizza, grazie, zucchero, zero",
          ],
        },
        {
          kind: "shadow",
          title: "Al bancone",
          hint: "Repite con la misma melodía. Imita el tono amable.",
          items: [
            "Buongiorno! Un caffè, per favore.",
            "Vorrei un cappuccino e un cornetto.",
            "Per me una spremuta d'arancia.",
            "Quanto pago?",
            "Sono tre euro e venti.",
            "Grazie, buona giornata!",
          ],
        },
        {
          kind: "speak",
          title: "Leggi i prezzi",
          hint: "Di cada precio en voz alta antes de escucharlo. Ejemplo: 1,20 € → un euro e venti.",
          items: ["1,30 €", "2,50 €", "0,80 €", "4,70 €", "9,90 €", "15,40 €"],
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
          title: "Vorrei e prendo",
          hint: "Pedir: vorrei y prendo",
          text: [
            "«Vorrei» es una forma de «volere» (querer) y equivale a «quisiera». Es la manera más educada de pedir y sirve con todo el mundo. De momento apréndela como fórmula: io vorrei, tu vorresti, lui / lei / Lei vorrebbe.",
            "«Voglio» (quiero) existe, pero en un bar suena brusco: mejor vorrei.",
            "«Prendere» (tomar) es un verbo en -ere. Lo verás completo en la unidad 5; por ahora basta con prendo (tomo), prendi (tomas) y prende (toma).",
          ],
          examples: [
            { it: "Vorrei un'acqua naturale.", es: "Quisiera un agua sin gas." },
            { it: "Che cosa vorresti?", es: "¿Qué te apetece?" },
            { it: "Signora, che cosa prende?", es: "Señora, ¿qué va a tomar?" },
            { it: "Prendo un tramezzino al tonno.", es: "Tomo un sándwich de atún." },
          ],
        },
        {
          kind: "intro",
          title: "Quanto costa? Quanto costano?",
          hint: "Costar en singular y en plural",
          text: [
            "Si preguntas por una cosa: «Quanto costa il cornetto?». Si son varias: «Quanto costano i cornetti?». La respuesta concuerda igual: «Costa un euro», «Costano due euro».",
            "Al pagar se pregunta el total: «Quanto pago?» o «Quant'è?». La respuesta va con «sono»: «Sono sei euro». Con un solo euro: «È un euro».",
          ],
          examples: [
            { it: "Quanto costa un caffè? — Costa un euro e venti.", es: "¿Cuánto cuesta un café? — Cuesta un euro con veinte." },
            { it: "Quanto costano i panini? — Costano quattro euro.", es: "¿Cuánto cuestan los bocadillos? — Cuestan cuatro euros." },
            { it: "Quant'è? — Sono sei euro e cinquanta.", es: "¿Cuánto es? — Son seis euros con cincuenta." },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Son verbos regulares en -are; ojo con pagare y lasciare al escribirlos.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["ordinare", "ordino", "", "", "", "", ""],
            ["pagare", "", "", "", "", "pagate", ""],
            ["desiderare", "", "", "desidera", "", "", ""],
            ["assaggiare", "", "assaggi", "", "", "", ""],
            ["lasciare", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Costa o costano?",
          hint: "Completa con costa o costano.",
          items: [
            "Quanto ___ il cappuccino?",
            "I tramezzini ___ tre euro.",
            "Quanto ___ due caffè?",
            "La spremuta ___ tre euro e cinquanta.",
            "Quanto ___ le brioche?",
            "Un bicchiere d'acqua non ___ niente.",
          ],
        },
        {
          kind: "fill",
          title: "Al bar",
          hint: "Completa con vorrei, prendo, prendi, prende, pago o per me.",
          items: [
            "Buongiorno, ___ un caffè, per favore.",
            "Signora, che cosa ___?",
            "Io ___ un cornetto alla crema.",
            "Quanto ___? — Sono quattro euro.",
            "E tu, Marco, che cosa ___?",
            "Per lui un tè e ___ una spremuta.",
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
          title: "Il plurale dei nomi",
          hint: "El plural de los sustantivos",
          text: [
            "La regla básica ya la conoces: -o → -i (cornetto, cornetti), -a → -e (tazza, tazze), -e → -i (bicchiere, bicchieri).",
            "No cambian en plural: las palabras con acento final (un caffè, due caffè; la città, le città), las que acaban en consonante (il bar, i bar; lo sport, gli sport) y las palabras acortadas (la foto, le foto; la bici, le bici).",
            "Las que acaban en -ca y -ga añaden h: amica → amiche. Las que acaban en -co y -go varían: tedesco → tedeschi, pero amico → amici. Si dudas, búscalo.",
            "Algunas son irregulares: l'uovo → le uova, l'uomo → gli uomini. Y recuerda que el artículo cambia con el plural: il → i, lo / l' → gli, la / l' → le.",
          ],
          table: {
            head: ["", "singular", "plural"],
            rows: [
              ["-o → -i", "il cornetto", "i cornetti"],
              ["-a → -e", "la tazza", "le tazze"],
              ["-e → -i", "il bicchiere", "i bicchieri"],
              ["no cambian", "il caffè, il bar, la foto", "i caffè, i bar, le foto"],
              ["-ca → -che", "l'amica", "le amiche"],
            ],
          },
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "al plurale",
          title: "Al plurale",
          hint: "Pasa al plural, con el artículo. Ejemplo: il panino → i panini.",
          items: [
            "il cornetto", "la spremuta", "il caffè", "lo scontrino", "l'aperitivo", "la brioche",
            "il bicchiere", "il bar", "l'amica", "lo studente", "la foto", "l'uovo",
          ],
        },
        {
          kind: "fill",
          title: "Un caffè, due caffè",
          hint: "Completa la terminación del plural. Si la palabra no cambia, escribe la última letra igual.",
          items: [
            "Due cappuccin___, per favore.",
            "Tre caff___ e una spremuta.",
            "Quanto costano le pizzett___?",
            "Vorrei due bicchier___ d'acqua.",
            "Ho due amic___ a Napoli: sono simpatiche.",
            "I nostri amic___ sono tedesch___.",
          ],
        },
        {
          kind: "intro",
          title: "Avete…? Non abbiamo…",
          hint: "Preguntar y negar en el bar",
          text: [
            "Para preguntar si tienen algo se usa «avete» (voi), porque hablas al bar entero: «Avete il latte di soia?».",
            "Para decir que no: «No, mi dispiace, non abbiamo…» (no, lo siento, no tenemos…).",
          ],
          examples: [
            { it: "Avete il latte senza lattosio?", es: "¿Tienen leche sin lactosa?" },
            { it: "No, mi dispiace, non abbiamo cornetti integrali.", es: "No, lo siento, no tenemos cruasanes integrales." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Costa un euro. → Quanto costa?",
          items: [
            "Il cappuccino costa un euro e sessanta.",
            "Sono otto euro in tutto.",
            "Sì, abbiamo il latte di soia.",
            "Prendo un tè, grazie.",
            "No, non abbiamo tramezzini vegetariani.",
            "Sì, può pagare con la carta.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Abbiamo le brioche.", "Prendo lo zucchero.", "I panini costano molto.", "Pago con la carta.", "Lasciamo la mancia."],
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
          title: "Al bar la mattina",
          hint: "Laura desayuna en un bar. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Barista", text: "Buongiorno! Che cosa prende?" },
            { who: "Laura", text: "Buongiorno. Vorrei un cappuccino e un cornetto, per favore." },
            { who: "Barista", text: "Cornetto vuoto, alla crema o alla marmellata?" },
            { who: "Laura", text: "Alla crema. E anche una spremuta d'arancia." },
            { who: "Barista", text: "Certo. Cappuccino normale o con latte di soia?" },
            { who: "Laura", text: "Normale, grazie. Quanto pago?" },
            { who: "Barista", text: "Allora: un cappuccino, un cornetto e una spremuta… sono cinque euro e ottanta." },
            { who: "Laura", text: "Posso pagare con la carta?" },
            { who: "Barista", text: "Sì, certo. Ecco lo scontrino. Buona giornata!" },
          ],
          questions: [
            "Che cosa ordina Laura?",
            "Che cornetto prende?",
            "Vuole il latte di soia?",
            "Quanto paga?",
            "Come paga?",
          ],
        },
        {
          kind: "listen",
          title: "L'aperitivo",
          hint: "Dos amigos toman algo por la tarde. Responde en voz alta.",
          script: [
            { who: "Cameriere", text: "Buonasera, ragazzi. Che cosa vi porto?" },
            { who: "Giulia", text: "Per me uno spritz, grazie." },
            { who: "Pietro", text: "Io vorrei un analcolico. Che cosa avete?" },
            { who: "Cameriere", text: "Abbiamo succhi di frutta, acqua tonica e un cocktail analcolico alla frutta." },
            { who: "Pietro", text: "Prendo il cocktail analcolico." },
            { who: "Giulia", text: "Con l'aperitivo ci sono anche gli stuzzichini?" },
            { who: "Cameriere", text: "Sì: patatine, olive e piccoli tramezzini. Sono compresi nel prezzo." },
            { who: "Pietro", text: "Scusi, il conto per favore!" },
            { who: "Cameriere", text: "Sono quattordici euro." },
            { who: "Giulia", text: "Facciamo alla romana: sette euro a testa." },
          ],
          questions: [
            "Che cosa prende Giulia?",
            "Pietro beve alcol?",
            "Che cosa c'è da mangiare? Si paga a parte?",
            "Quanto costa in totale?",
            "Che cosa significa «fare alla romana»?",
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
          title: "Il caffè all'italiana",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In Italia il caffè è un rito. Quando un italiano dice «un caffè», parla di un espresso: piccolo, forte e caldo.",
            "Molti italiani prendono il caffè in piedi, al banco. È veloce ed è più economico: al tavolo, spesso, costa di più.",
            "In molti bar, soprattutto al Nord, prima si paga alla cassa e poi si dà lo scontrino al barista.",
            "Il cappuccino è per la mattina, a colazione, con un cornetto. Dopo pranzo o dopo cena quasi nessun italiano ordina un cappuccino: dopo i pasti si prende un espresso.",
            "A Napoli c'è una bella tradizione: il «caffè sospeso». Un cliente paga due caffè, ne beve uno e lascia l'altro pagato per una persona che non ha soldi.",
          ],
          questions: [
            "Che cos'è «un caffè» in Italia?",
            "Perché molti italiani prendono il caffè al banco?",
            "Che cosa si fa prima di ordinare in molti bar del Nord?",
            "Quando si beve il cappuccino?",
            "Che cos'è il «caffè sospeso»?",
            "Che cosa pensi di questa tradizione?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Cómo se pide el café en España? ¿Qué tipos hay (solo, cortado, con leche…) y cómo se pedirían en Italia? Explícalo con 3 o 4 frases, en voz alta.",
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
          title: "Chiedere con cortesia",
          hint: "Pedir con educación",
          text: [
            "Con el camarero se usa «Lei». Para llamar su atención: «Scusi!». Él también te habla de Lei: «Che cosa prende?», «Desidera?».",
            "Fórmulas útiles: «Mi porta…?» (¿me trae…?), «Il conto, per favore», «Posso pagare con la carta?», «Tenga il resto» (quédese con el cambio).",
          ],
          examples: [
            { it: "Scusi, mi porta un bicchiere d'acqua?", es: "Perdone, ¿me trae un vaso de agua?" },
            { it: "Il conto, per favore.", es: "La cuenta, por favor." },
            { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" },
            { it: "Tenga il resto.", es: "Quédese con el cambio." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Che cosa prendi di solito a colazione?",
            "Prendi il caffè con lo zucchero?",
            "Quanto costa un caffè nella tua città?",
            "Paghi di solito con la carta o in contanti?",
            "Lasci la mancia al bar?",
            "Qual è il tuo bar preferito? Com'è?",
          ],
        },
        {
          kind: "speak",
          title: "Ordina",
          hint: "Pide cada cosa en voz alta con una fórmula de cortesía. Ejemplo: caffè + cornetto → Vorrei un caffè e un cornetto, per favore.",
          items: [
            "due caffè + un'acqua frizzante",
            "un cappuccino senza zucchero",
            "una spremuta + un tramezzino",
            "tre cornetti da portare via",
            "il conto + pagare con la carta",
          ],
        },
        {
          kind: "roleplay",
          title: "Al bar della stazione",
          hint: "Te quedan cinco minutos antes de que salga tu tren. La IA hace de barista. Usa «Lei».",
          steps: [
            "Saluda y pide un café y algo de comer.",
            "Pregunta cuánto cuesta un sándwich.",
            "Pregunta si tienen leche sin lactosa («senza lattosio»).",
            "Pídelo para llevar.",
            "Pregunta cuánto es y paga en efectivo.",
            "Despídete con prisa: ¡pierdes el tren! («Ho fretta!»)",
          ],
        },
        {
          kind: "roleplay",
          title: "Il conto sbagliato",
          hint: "Estás con dos amigos. Al pedir la cuenta, hay un error. La IA hace de camarero.",
          steps: [
            "Pide la cuenta.",
            "Repasa en voz alta lo que habéis tomado y cuánto cuesta cada cosa.",
            "Di con educación que hay un error («Scusi, c'è un errore»).",
            "Explica cuál es el precio correcto.",
            "Decid cuánto paga cada uno («alla romana»).",
            "Da las gracias y deja propina.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio bar preferito",
          hint: "Habla 45 segundos de tu bar o cafetería favorita: dónde está, qué tomas, cuánto cuesta y cómo es.",
          items: ["Il mio bar preferito…"],
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
            "Quisiera un café y un cruasán, por favor.",
            "¿Cuánto cuestan los bocadillos?",
            "Dos capuchinos sin azúcar.",
            "¿Tienen leche de soja?",
            "La cuenta, por favor.",
            "¿Puedo pagar con tarjeta?",
            "Son ocho euros con cincuenta.",
            "No tenemos zumo de naranja, lo siento.",
          ],
        },
        {
          kind: "write",
          title: "Il menù",
          hint: "Inventa la carta de tu bar ideal: 6 cosas de beber y 4 de comer, con el precio escrito en letras. Ejemplo: Cappuccino — un euro e cinquanta.",
          rows: 6,
          items: ["Da bere:", "Da mangiare:"],
        },
        {
          kind: "write",
          title: "Una recensione",
          hint: "Escribe una reseña corta de un bar para una app (5 o 6 frases): dónde está, qué se puede tomar, cuánto cuesta, cómo es el sitio y si lo recomiendas.",
          rows: 7,
          items: ["Bar …"],
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
          title: "Dettato: prezzi",
          hint: "Escucha y escribe el precio en cifras.",
          placeholder: "€",
          items: ["un euro e venti", "due euro e settanta", "ottanta centesimi", "cinque euro e cinquanta", "nove euro e novanta", "quattordici euro"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes. Cuidado con las dobles.",
          items: ["Vorrei due cappuccini.", "Quanto costano i tramezzini?", "Il conto, per favore.", "Posso pagare con la carta?", "Non abbiamo le uova."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "YouTube", title: "Easy Italian", where: "YouTube", why: "Busca un episodio sobre el café o el bar: gente real pidiendo y hablando de sus costumbres." },
            { type: "Canción", title: "Il caffè della Peppina", where: "YouTube", why: "Canción infantil del Zecchino d'Oro. Clara y repetitiva: perfecta para el vocabulario del café." },
            { type: "Película", title: "Bar Sport (2011)", where: "Busca dónde verla en JustWatch", why: "Comedia basada en el libro de Stefano Benni sobre los personajes de un bar de pueblo." },
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
          hint: "Describe el bar del vídeo o de la película: qué se pide, quién trabaja allí y cómo es la gente.",
          items: ["Nel bar c'è… La gente prende…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 4",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        from: "es",
        title: "1. Parole",
        hint: "Traduce al italiano.",
        items: ["la cuenta", "el cambio", "la propina", "para llevar", "con hielo", "el vaso", "la taza", "el tique de caja"],
      },
      {
        kind: "translate",
        from: "it",
        placeholder: "al plurale",
        title: "2. Plurali",
        hint: "Pasa al plural, con el artículo.",
        items: ["il tè", "lo spritz", "la tazza", "l'amica", "il bicchiere", "l'uovo"],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con costa / costano, vorrei, prende o el artículo que falta.",
        items: [
          "Quanto ___ i cornetti?",
          "Quanto ___ una spremuta?",
          "Signora, che cosa ___?",
          "___ un tè, per favore.",
          "Non abbiamo ___ uova.",
          "___ scontrini sono alla cassa.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Cameriera", text: "Buongiorno, desiderate?" },
          { who: "Marco", text: "Per me un caffè macchiato e un tramezzino al prosciutto." },
          { who: "Anna", text: "Io vorrei un tè caldo, senza zucchero. Avete dei biscotti?" },
          { who: "Cameriera", text: "Mi dispiace, i biscotti sono finiti. Abbiamo le brioche." },
          { who: "Anna", text: "Va bene, una brioche alla marmellata." },
          { who: "Marco", text: "Quant'è?" },
          { who: "Cameriera", text: "Sono nove euro e quaranta." },
        ],
        questions: ["Che cosa prende Marco?", "Come vuole il tè Anna?", "Perché Anna non prende i biscotti?", "Quanto pagano?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Ordina una colazione per due persone.",
          "Chiedi il prezzo di tre cose diverse.",
          "Spiega al cameriere che il conto è sbagliato.",
          "Leggi questi prezzi: 2,40 € · 0,90 € · 13,50 €",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["tre euro e quaranta", "Vorrei un'acqua frizzante.", "Quanto costano?", "Gli amici e le amiche."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Quisiera dos zumos y un bocadillo.",
          "¿Cuánto es?",
          "Los cafés cuestan un euro con veinte.",
          "No tengo efectivo: ¿puedo pagar con tarjeta?",
        ],
      },
    ],
  },
};
