// Unità 13 · Al ristorante
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[13] = {
  n: 13,
  level: "A1",
  title: "Al ristorante",
  goal: "Reservar mesa, entender la carta, pedir con educación, resolver un problema y pagar.",
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
            "Vas a aprender a reservar mesa, a entender una carta italiana (antipasto, primo, secondo…), a pedir, a decir si algo no está bien y a pagar.",
            "Gramática: los verbos modales volere, potere y dovere con infinitivo, y las fórmulas educadas para pedir («Potrei avere…?», «Mi porta…?»).",
            "Vuelve vorrei de la unidad 4: ahora verás el verbo volere entero.",
          ],
        },
        {
          kind: "intro",
          title: "Primo, secondo e contorno",
          hint: "Un adelanto: la carta italiana",
          text: [
            "Una comida italiana completa tiene varias partes: antipasto (entrante), primo (pasta, arroz o sopa), secondo (carne o pescado), contorno (guarnición, que se pide aparte) y dolce (postre).",
            "Nadie está obligado a pedirlo todo: es muy normal pedir solo un primo, o un secondo con contorno.",
          ],
          examples: [
            { it: "Per primo prendo gli spaghetti alle vongole.", es: "De primero tomo espaguetis con almejas." },
            { it: "Come secondo vorrei il pesce del giorno.", es: "De segundo quisiera el pescado del día." },
            { it: "Con un contorno di patate, per favore.", es: "Con una guarnición de patatas, por favor." },
          ],
        },
        {
          kind: "speak",
          title: "Il tuo piatto italiano preferito",
          hint: "Antes de empezar: ¿qué platos italianos conoces? ¿Cuál te gusta más? Dilo como puedas.",
          items: ["Il mio piatto preferito è…"],
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
          title: "Al ristorante",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "il menù", "la carta dei vini", "l'antipasto", "il primo", "il secondo",
            "il contorno", "il dolce", "il piatto del giorno", "il coperto", "il servizio",
            "la prenotazione", "il tavolo", "il cameriere", "il conto", "la forchetta",
            "il coltello", "il cucchiaio", "il tovagliolo", "la tovaglia", "la mancia",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Come lo vuole?",
          hint: "Escribe en italiano.",
          items: [
            "a la plancha", "al horno", "frito", "hervido", "crudo",
            "poco hecho", "en su punto", "muy hecho", "picante", "salado",
            "soso (con poca sal)", "vegetariano", "sin gluten", "soy alérgico a…", "delicioso",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: prenotare → Vorrei prenotare un tavolo per due.",
          items: ["prenotare", "per primo", "il conto", "posso", "devo", "volete", "allergico", "buonissimo"],
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
          title: "Gnocchi, tagliatelle, bruschetta",
          hint: "Pronunciar bien la carta",
          text: [
            "Los nombres de platos son una gran práctica: gnocchi (ñòk-ki), tagliatelle (ta-llia-tèl-le), bruschetta (brus-kèt-ta, no «brushéta»), focaccia (fo-kàt-cha), lasagne (la-sà-ñe).",
            "Atención a «bruschetta»: sch suena «sk». Es el error más típico de los extranjeros.",
            "Y a «spaghetti»: gh suena «gu», no «y».",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["bruschetta", "brus-kèt-ta"],
              ["gnocchi, lasagne", "ñòk-ki, la-sà-ñe"],
              ["tagliatelle", "ta-llia-tèl-le"],
              ["focaccia, carpaccio", "fo-kàt-cha, kar-pàt-cho"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Il menù ad alta voce",
          hint: "Escucha y repite cada línea, como si leyeras la carta al camarero.",
          items: [
            "bruschetta, focaccia, carpaccio",
            "gnocchi, lasagne, tagliatelle",
            "spaghetti alle vongole, risotto ai funghi",
            "saltimbocca alla romana, pollo alla griglia",
            "tiramisù, panna cotta, gelato",
          ],
        },
        {
          kind: "shadow",
          title: "Ordinare",
          hint: "Repite con la misma melodía. Imita el tono amable.",
          items: [
            "Buonasera, abbiamo prenotato a nome Ruiz.",
            "Possiamo vedere il menù?",
            "Per me un risotto ai funghi, grazie.",
            "Potrei avere un'altra forchetta?",
            "Scusi, possiamo avere il conto?",
            "Era tutto buonissimo, grazie!",
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
          title: "Volere, potere, dovere",
          hint: "Querer, poder y deber",
          text: [
            "Los tres son irregulares y van casi siempre con un infinitivo detrás, como en español: «Voglio mangiare», «Posso pagare?», «Devo andare».",
            "Volere: voglio, vuoi, vuole, vogliamo, volete, vogliono. Busca potere y dovere para la tabla: siguen una lógica parecida (posso…, devo…).",
            "«Voglio» es directo y puede sonar brusco con un camarero: para pedir, mejor «vorrei». «Posso…?» sirve para pedir permiso: «Posso pagare con la carta?».",
            "«Dovere» expresa obligación: «Dobbiamo prenotare?» (¿hay que reservar?).",
          ],
          examples: [
            { it: "Volete ordinare?", es: "¿Queréis pedir?" },
            { it: "Possiamo sederci fuori?", es: "¿Podemos sentarnos fuera?" },
            { it: "Devo prenotare per sabato?", es: "¿Tengo que reservar para el sábado?" },
          ],
        },
        {
          kind: "intro",
          title: "Potrei avere…?",
          hint: "Pedir con mucha educación",
          text: [
            "Igual que «vorrei» viene de volere, «potrei» viene de potere y equivale a «podría». Son formas del condicional (las verás en A2), muy útiles en el restaurante.",
            "«Potrei avere un po' d'acqua?» (¿podría traerme un poco de agua?), «Mi porta il conto?» (¿me trae la cuenta?). Las dos son educadas y naturales.",
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["volere", "voglio", "", "", "", "", ""],
            ["potere", "posso", "", "", "", "", ""],
            ["dovere", "devo", "", "", "", "", ""],
            ["bere", "", "", "", "", "", ""],
            ["ordinare", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Volere, potere o dovere?",
          hint: "Completa con el verbo que tiene sentido, en la forma correcta.",
          items: [
            "Scusi, ___ pagare con la carta? (io)",
            "Ragazzi, che cosa ___ mangiare?",
            "Il ristorante è sempre pieno: ___ prenotare. (noi)",
            "Marco non ___ mangiare il glutine: è celiaco.",
            "Signora, ___ vedere la carta dei vini?",
            "I bambini non ___ il pesce: preferiscono la pizza.",
            "Domani mi alzo presto: ___ andare a casa. (io)",
            "___ sedervi qui, se volete.",
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
          title: "Il modale + infinito",
          hint: "Modal + infinitivo: la posición de non y de los pronombres",
          text: [
            "El modal se conjuga y el segundo verbo va en infinitivo: «Vogliamo ordinare», «Non posso venire».",
            "«Non» va delante del modal: «Non devo pagare», nunca «Devo non pagare» para decir «no tengo que pagar».",
            "Con un verbo reflexivo, el pronombre puede ir delante del modal o pegado al infinitivo: «Ci possiamo sedere?» = «Possiamo sederci?». Las dos son correctas.",
          ],
          examples: [
            { it: "Non posso bere alcol: guido.", es: "No puedo beber alcohol: conduzco." },
            { it: "Mi devo alzare presto. / Devo alzarmi presto.", es: "Me tengo que levantar pronto." },
            { it: "Non vogliamo aspettare un'ora.", es: "No queremos esperar una hora." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "con il modale",
          title: "Aggiungi il modale",
          hint: "Reescribe la frase con el verbo entre paréntesis. Ejemplo: Pago con la carta. (potere) → Posso pagare con la carta?",
          items: [
            "Prenotiamo un tavolo. (volere)",
            "Ordini tu il vino. (dovere)",
            "Vi sedete fuori. (potere)",
            "Non mangio la carne. (potere)",
            "Lasciano la mancia. (dovere)",
            "Mi alzo presto domani. (dovere)",
          ],
        },
        {
          kind: "intro",
          title: "Allo, alla, al: i nomi dei piatti",
          hint: "Cómo se llaman los platos",
          text: [
            "Los nombres de los platos usan mucho las preposiciones articuladas de la unidad 8: «spaghetti alle vongole» (con almejas), «risotto ai funghi», «pizza al prosciutto».",
            "«Alla» + adjetivo significa «al estilo de»: «saltimbocca alla romana», «pasta alla norma», «pollo alla diavola».",
            "Y con «di» se dice de qué está hecho: «torta di mele», «zuppa di pesce».",
          ],
          examples: [
            { it: "Tagliatelle al ragù", es: "Tallarines con salsa boloñesa" },
            { it: "Pesce alla griglia", es: "Pescado a la parrilla" },
            { it: "Torta di cioccolato", es: "Tarta de chocolate" },
          ],
        },
        {
          kind: "fill",
          title: "Il menù",
          hint: "Completa los platos con al, allo, alla, ai, alle o di.",
          items: [
            "spaghetti ___ vongole",
            "risotto ___ funghi",
            "pizza ___ prosciutto e funghi",
            "saltimbocca ___ romana",
            "zuppa ___ pesce",
            "penne ___ arrabbiata",
            "torta ___ mele",
            "gnocchi ___ quattro formaggi",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Sì, potete sedervi qui. → Possiamo sederci qui?",
          items: [
            "Per primo prendo le lasagne.",
            "Sì, deve prenotare: il sabato siamo pieni.",
            "No, mi dispiace, non può pagare con la carta.",
            "Vogliamo un tavolo per quattro.",
            "Il coperto costa due euro e cinquanta.",
            "Sì, abbiamo dei piatti senza glutine.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Voglio il dolce.", "Possiamo sederci fuori.", "Devo prenotare.", "Bevono il vino.", "Il servizio è compreso."],
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
          title: "Prenotare un tavolo",
          hint: "Una llamada para reservar. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Ristorante", text: "Trattoria da Gino, buonasera!" },
            { who: "Cliente", text: "Buonasera. Vorrei prenotare un tavolo per sabato sera." },
            { who: "Ristorante", text: "Per quante persone?" },
            { who: "Cliente", text: "Per sei, verso le otto e mezza." },
            { who: "Ristorante", text: "Alle otto e mezza siamo pieni. Potete venire alle nove e un quarto?" },
            { who: "Cliente", text: "Va bene, alle nove e un quarto. Possiamo stare in terrazza?" },
            { who: "Ristorante", text: "Sì, se non piove. A che nome?" },
            { who: "Cliente", text: "Ferraro. Ah, una persona è vegetariana: è un problema?" },
            { who: "Ristorante", text: "Nessun problema, abbiamo diversi piatti vegetariani. A sabato!" },
          ],
          questions: [
            "Per quando e per quante persone è la prenotazione?",
            "Perché non possono andare alle otto e mezza?",
            "A che ora vanno alla fine?",
            "Dove vogliono mangiare? C'è una condizione?",
            "A che nome è la prenotazione? Che cosa chiede ancora il cliente?",
          ],
        },
        {
          kind: "listen",
          title: "Che cosa vi porto?",
          hint: "Una pareja pide en una trattoria y hay un problema. Responde en voz alta.",
          script: [
            { who: "Cameriere", text: "Allora, avete deciso?" },
            { who: "Chiara", text: "Sì. Per me un antipasto misto e poi le tagliatelle al ragù." },
            { who: "Daniele", text: "Io vorrei il risotto ai funghi e come secondo la tagliata." },
            { who: "Cameriere", text: "Mi dispiace, il risotto è finito. Posso consigliarvi gli gnocchi al pomodoro?" },
            { who: "Daniele", text: "Va bene, gli gnocchi. E la tagliata la vorrei al sangue." },
            { who: "Cameriere", text: "Perfetto. Da bere?" },
            { who: "Chiara", text: "Una bottiglia d'acqua naturale e mezzo litro di vino rosso della casa." },
            { who: "Cameriere", text: "Benissimo, arriva subito." },
          ],
          questions: [
            "Che cosa ordina Chiara?",
            "Qual è il problema con l'ordine di Daniele?",
            "Che cosa prende Daniele al posto del risotto?",
            "Come vuole la carne?",
            "Che cosa bevono?",
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
          title: "Le regole della tavola",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In Italia il pranzo si fa verso l'una e la cena verso le otto. Prima di queste ore molti ristoranti sono chiusi.",
            "Sul conto c'è spesso il «coperto»: un piccolo prezzo fisso a persona per il pane e la tavola. Non è una truffa: è normale. La mancia, invece, non è obbligatoria; si lascia qualche euro se il servizio è stato buono.",
            "Alcune abitudini sorprendono gli stranieri: la pasta è un piatto, non un contorno; il pane non si mangia con il burro; e il cappuccino dopo pranzo o dopo cena… meglio di no. Dopo il pasto si beve un espresso.",
            "Quando finisci il sugo nel piatto con un pezzo di pane fai «la scarpetta»: in famiglia è un complimento al cuoco, ma in un ristorante elegante non è molto fine.",
            "E se siete in gruppo, di solito si fa «alla romana»: si divide il conto in parti uguali.",
          ],
          questions: [
            "A che ora si pranza e si cena in Italia?",
            "Che cos'è il coperto?",
            "La mancia è obbligatoria?",
            "Che cosa non si fa con il pane? E con il cappuccino?",
            "Che cos'è «la scarpetta»? Si può fare sempre?",
            "Che cosa significa pagare «alla romana»?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "Compara con España: horarios, propina, pan, café después de comer, pagar a escote. 3 o 4 frases, en voz alta.",
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
          title: "Quando qualcosa non va",
          hint: "Cuando algo no está bien",
          text: [
            "Para quejarte con educación, empieza siempre con «Scusi»: «Scusi, la pasta è fredda», «Scusi, manca un piatto», «Scusi, c'è un errore nel conto».",
            "Si eres alérgico o tienes una dieta: «Sono allergico / allergica a…», «Non mangio carne», «C'è glutine in questo piatto?».",
          ],
          examples: [
            { it: "Scusi, la carne è un po' cruda. Può cuocerla ancora un po'?", es: "Perdone, la carne está un poco cruda. ¿Puede hacerla un poco más?" },
            { it: "Sono allergica alla frutta secca.", es: "Soy alérgica a los frutos secos." },
            { it: "Scusi, aspettiamo da mezz'ora.", es: "Perdone, llevamos media hora esperando." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Vai spesso al ristorante? Con chi?",
            "Che cosa ordini di solito in un ristorante italiano?",
            "Devi stare attento a qualche cibo? Sei allergico a qualcosa?",
            "Lasci la mancia? Quanto?",
            "Qual è il miglior ristorante della tua città? Che cosa si può mangiare?",
            "Che cosa non vuoi mangiare mai?",
          ],
        },
        {
          kind: "speak",
          title: "Ordina dal menù",
          hint: "Pide estos menús en voz alta, completos y con educación (per primo…, come secondo…, da bere…).",
          items: [
            "bruschetta + spaghetti alle vongole + acqua frizzante",
            "risotto ai funghi + pollo alla griglia con insalata + vino rosso",
            "solo un secondo: pesce del giorno con patate al forno",
            "un menù vegetariano per due",
            "il dolce e due caffè",
          ],
        },
        {
          kind: "roleplay",
          title: "Una cena difficile",
          hint: "Cenas en una trattoria de Bolonia. La IA hace de camarero y te pone tres problemas. Usa «Lei».",
          steps: [
            "Di que tienes una reserva y a qué nombre.",
            "Pide primo y secondo. El primo que quieres se ha acabado: elige otro.",
            "Pregunta si un plato lleva algo a lo que eres alérgico.",
            "El secondo llega frío: díselo con educación.",
            "Pide la cuenta: hay un plato que no has pedido. Explícalo.",
            "Paga, deja propina si quieres y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "Dove andiamo a cena?",
          hint: "Decidís con un amigo a qué restaurante ir y lo reserváis. La IA hace del amigo. Es informal.",
          steps: [
            "Propón un tipo de restaurante (pizzería, trattoria, sushi…).",
            "Tu amigo no puede comer algo: buscad otra opción.",
            "Decidid el día y la hora.",
            "Decidid quién llama para reservar y si hay que reservar.",
            "Decidid cómo pagáis.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio ristorante",
          hint: "Habla un minuto de tu restaurante favorito: dónde está, cómo es, qué pides siempre y cuánto cuesta.",
          items: ["Il mio ristorante preferito è…"],
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
            "Quisiera reservar una mesa para cuatro a las nueve.",
            "¿Podemos sentarnos fuera?",
            "De primero tomo la lasaña y de segundo el pescado a la plancha.",
            "Soy alérgico al marisco.",
            "Perdone, la sopa está fría.",
            "¿Tenemos que pagar el cubierto?",
            "No puedo beber vino: conduzco.",
            "Estaba todo buenísimo. ¿Nos trae la cuenta?",
          ],
        },
        {
          kind: "write",
          title: "Una recensione",
          hint: "Escribe una reseña de un restaurante (7–9 frases): dónde está, si hay que reservar, qué has pedido de primero y de segundo, el servicio, el precio y si lo recomiendas.",
          rows: 9,
          items: ["Trattoria …"],
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
          title: "Dettato: il menù",
          hint: "Escucha y escribe el nombre del plato.",
          items: ["bruschetta al pomodoro", "gnocchi al pesto", "tagliatelle al ragù", "pesce alla griglia", "patate al forno", "tiramisù"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Vogliamo ordinare.", "Posso avere il conto?", "Dobbiamo prenotare?", "Non possono venire.", "Il servizio è compreso?"],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Película", title: "Big Night (1996)", where: "Busca dónde verla en JustWatch", why: "Dos hermanos italianos y su restaurante en Estados Unidos. Hay partes en italiano y una cena famosa en la historia del cine." },
            { type: "Serie", title: "4 ristoranti (Alessandro Borghese)", where: "YouTube, Sky", why: "Concurso en el que cuatro restaurantes de una ciudad se juzgan entre sí. Mucho vocabulario de carta, servicio y precios." },
            { type: "Canción", title: "Tu vuò fà l'americano, Renato Carosone", where: "Spotify, YouTube", why: "Clásico napolitano de 1956 sobre un chico que imita a los americanos (whisky, rock and roll…). Muy rítmico; está en napolitano, así que fíjate en lo que se parece al italiano." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Apunta los nombres de platos.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Cuenta qué piden los personajes o los concursantes y qué te parece cada plato.",
          items: ["Ordinano… Secondo me…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 13",
    hint: "Unos 40 minutos, sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["il contorno", "il coperto", "il tovagliolo", "il cucchiaio", "alla griglia", "al sangue", "bollito", "la prenotazione", "il piatto del giorno", "la mancia"],
      },
      {
        kind: "vocab",
        from: "es",
        title: "2. Al contrario",
        hint: "Traduce al italiano.",
        items: ["el cuchillo", "al horno", "sin gluten", "frito", "el postre", "la carta de vinos"],
      },
      {
        kind: "table",
        title: "3. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["volere", "", "", "", "", "", ""],
          ["potere", "", "", "", "", "", ""],
          ["dovere", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "4. Completa",
        hint: "Completa con volere, potere, dovere o una preposición (al, alla, ai, alle, di).",
        items: [
          "Scusi, ___ avere un po' di pane? (io)",
          "Ragazzi, ___ il dolce?",
          "Il sabato ___ prenotare: è sempre pieno. (voi)",
          "Mia sorella non ___ mangiare il glutine.",
          "I bambini non ___ mangiare il pesce: dicono che non gli piace.",
          "spaghetti ___ vongole",
          "saltimbocca ___ romana",
          "torta ___ cioccolato",
        ],
      },
      {
        kind: "translate",
        from: "it",
        placeholder: "trasforma",
        title: "5. Trasforma",
        hint: "Las tres primeras, añade el modal entre paréntesis. Las tres últimas, a negativo.",
        items: [
          "Paghiamo alla romana. (volere)",
          "Ti siedi qui. (potere)",
          "Lasciate la mancia. (dovere)",
          "Posso bere il vino.",
          "Vogliamo il coperto.",
          "Dobbiamo aspettare.",
        ],
      },
      {
        kind: "reading",
        title: "6. Leggi",
        hint: "Lee el texto y responde en italiano.",
        text: [
          "Trattoria La Pergola — Menù del giorno, 15 euro: un primo a scelta (lasagne o risotto agli asparagi), un secondo (pollo al limone o pesce alla griglia) con un contorno, acqua e caffè. Il dolce non è compreso: 4 euro.",
          "Il menù del giorno è disponibile solo a pranzo, dal lunedì al venerdì. Il sabato e la domenica si ordina dalla carta.",
          "Coperto: 2 euro. Piatti senza glutine su richiesta. Si consiglia la prenotazione per gruppi di più di sei persone.",
        ],
        questions: [
          "Quanto costa il menù del giorno? Che cosa comprende?",
          "Il dolce è compreso?",
          "Si può ordinare il menù del giorno la domenica? E la sera?",
          "Che cosa devono fare i gruppi di otto persone?",
        ],
      },
      {
        kind: "listen",
        title: "7. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Cliente", text: "Scusi, possiamo avere il conto?" },
          { who: "Cameriera", text: "Certo, ecco qua. Sono sessantaquattro euro." },
          { who: "Cliente", text: "Mmm… scusi, ma noi non abbiamo preso i dolci. Qui ci sono due tiramisù." },
          { who: "Cameriera", text: "Ha ragione, mi scusi! Allora sono cinquantasei euro." },
          { who: "Cliente", text: "Possiamo pagare con la carta?" },
          { who: "Cameriera", text: "Sì. E il coperto è già compreso." },
        ],
        questions: ["Che cosa chiede il cliente?", "Quanto è il primo conto?", "Qual è l'errore?", "Quanto pagano alla fine?", "Il coperto è compreso?"],
      },
      {
        kind: "speak",
        title: "8. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Prenota per telefono un tavolo per cinque, sabato alle nove.",
          "Ordina un pranzo completo: antipasto, primo, secondo, contorno e da bere.",
          "Spiega al cameriere che sei allergico a qualcosa e chiedi un consiglio.",
          "Racconta che cosa devi fare, che cosa vuoi fare e che cosa non puoi fare questa settimana.",
        ],
      },
      {
        kind: "roleplay",
        title: "9. Al ristorante",
        hint: "Hazlo con la IA, de una vez y sin preparar. Usa «Lei».",
        steps: [
          "Llegas sin reserva: pide mesa para dos.",
          "Pide un primo y un secondo, y una bebida.",
          "Hay un error en la cuenta: resuélvelo y paga.",
        ],
      },
      {
        kind: "dictation",
        title: "10. Dettato",
        hint: "Escucha y escribe.",
        items: ["Vorrei prenotare.", "risotto ai funghi", "Non posso bere.", "Dovete aspettare.", "Il conto, per favore.", "Volete il dolce?"],
      },
      {
        kind: "translate",
        title: "11. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Tenemos que reservar?",
          "Queremos una mesa fuera.",
          "¿Puedo pagar con tarjeta?",
          "De segundo quisiera el pollo a la plancha.",
          "No pueden comer gluten.",
          "Perdone, falta un plato.",
        ],
      },
      {
        kind: "write",
        title: "12. Scrivi",
        hint: "Escribe un correo a un restaurante (50–60 palabras) para reservar una cena de cumpleaños: día, hora, número de personas, una persona vegetariana y una pregunta sobre la tarta.",
        rows: 6,
        items: ["Gentile Trattoria…"],
      },
    ],
  },
};
