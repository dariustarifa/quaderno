// Unità 10 · Fare la spesa
// Mismo formato que u01.js (ver los tipos de bloque allí).
// Desde esta unidad el examen es más largo (unos 40 minutos).
window.UNITS = window.UNITS || {};
window.UNITS[10] = {
  n: 10,
  level: "A1",
  title: "Fare la spesa",
  goal: "Comprar comida en el mercado, en la tienda y en el supermercado: pedir cantidades, elegir y pagar.",
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
            "Vas a aprender a hacer la compra: nombres de alimentos, cantidades y envases, cómo pedir en el mercado o en la charcutería y cómo elegir entre «este» y «ese».",
            "Gramática: el partitivo (del pane, dei pomodori: «algo de»), las cantidades (un chilo di, un etto di, un po' di), questo y quello, y los verbos dare, bere y scegliere.",
            "Repasa los números y los precios de la unidad 4: aquí los usarás todo el rato.",
          ],
        },
        {
          kind: "intro",
          title: "Un etto di prosciutto",
          hint: "Un adelanto: pesos y cantidades",
          text: [
            "En Italia los embutidos y el queso se piden por «etti»: un etto son 100 gramos. «Due etti di prosciutto» son 200 gramos.",
            "Para pedir: «Mi dà…?» (¿me da…?) o «Vorrei…». Para terminar: «Basta così, grazie» (ya está, gracias).",
          ],
          examples: [
            { it: "Mi dà un chilo di pomodori?", es: "¿Me da un kilo de tomates?" },
            { it: "Vorrei due etti di prosciutto crudo.", es: "Quisiera doscientos gramos de jamón serrano." },
            { it: "Altro? — No, basta così, grazie.", es: "¿Algo más? — No, ya está, gracias." },
          ],
        },
        {
          kind: "speak",
          title: "La tua lista della spesa",
          hint: "Antes de empezar: di en voz alta qué compras normalmente en una semana, con las palabras que ya sepas.",
          items: ["Di solito compro…"],
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
          title: "Il cibo",
          hint: "Busca cada palabra y escribe su traducción al español.",
          items: [
            "il pane", "la pasta", "il riso", "la farina", "l'olio",
            "il burro", "le uova", "il formaggio", "il prosciutto crudo", "il prosciutto cotto",
            "la carne", "il pollo", "il pesce", "la frutta", "la verdura",
            "le mele", "le arance", "i pomodori", "le patate", "le zucchine",
            "le cipolle", "l'aglio", "i funghi", "il sale",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Quantità e confezioni",
          hint: "Escribe en italiano.",
          items: [
            "un kilo de", "medio kilo de", "cien gramos (en Italia)", "un litro de", "una botella de",
            "un paquete de", "una caja de", "un tarro de", "una lata de", "una docena de",
            "un trozo de", "una loncha", "un poco de", "la bolsa", "el carrito",
          ],
        },
        {
          kind: "vocab",
          title: "I negozi",
          hint: "Traduce al español. ¿Qué se compra en cada tienda?",
          items: ["il panificio", "la macelleria", "la pescheria", "il fruttivendolo", "la salumeria", "gli alimentari", "il mercato", "il supermercato"],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: un etto → Vorrei un etto di parmigiano.",
          items: ["un etto", "dei pomodori", "un po' di", "questo", "quello", "mi dà", "scegliere", "basta così"],
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
          title: "Funghi, zucchine, prosciutto",
          hint: "Los sonidos de la compra",
          text: [
            "Repaso de c y g con los alimentos: funghi (fun-gui), zucchine (dsuk-kì-ne), prosciutto (pro-shùt-to), formaggio (for-màd-yo), arance (a-ràn-che).",
            "La z de «zucchine» suena «ds»; la de «pizza», «ts». «Uova» suena con la u muy corta: «uò-va».",
            "Muchos nombres de comida llevan doble: prosciutto, formaggio, zucchine, latte, mozzarella, pollo. Alárgalas.",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["funghi, spaghetti", "gui, gue"],
              ["arance, cipolle", "che, chi"],
              ["prosciutto, pesce", "sh"],
              ["formaggio, aglio", "dy, lli"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Escucha y repite cada línea. Cuida las dobles.",
          items: [
            "funghi, zucchine, arance, cipolle",
            "prosciutto, formaggio, aglio, pesce",
            "pollo, latte, mozzarella, olio",
            "un chilo, un etto, mezzo chilo",
            "un etto e mezzo, due etti, tre etti",
          ],
        },
        {
          kind: "shadow",
          title: "Al banco",
          hint: "Repite con la misma melodía.",
          items: [
            "Buongiorno, chi è l'ultimo?",
            "Mi dà due etti di prosciutto crudo?",
            "Lo vuole tagliato fino?",
            "Sì, grazie. E anche un pezzo di parmigiano.",
            "Altro? — No, basta così.",
            "Sono otto euro e venti.",
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
          title: "Dare, bere, scegliere",
          hint: "Tres verbos irregulares para la compra",
          text: [
            "«Dare» (dar) es corto e irregular: do, dai, dà, diamo, date, danno. La forma «dà» lleva tilde para no confundirla con la preposición «da». En las tiendas lo oirás mucho: «Mi dà…?» (¿me da…?).",
            "«Bere» (beber) se conjuga como si fuera «bevere»: bevo, bevi, beve… Busca el resto.",
            "«Scegliere» (elegir) añade una g en io y loro: scelgo, scelgono. Las demás formas mantienen el sonido gli: scegli, sceglie, scegliamo, scegliete.",
          ],
          examples: [
            { it: "Mi dà mezzo chilo di mele?", es: "¿Me da medio kilo de manzanas?" },
            { it: "A cena beviamo solo acqua.", es: "En la cena solo bebemos agua." },
            { it: "Scelgo io la frutta, va bene?", es: "Elijo yo la fruta, ¿vale?" },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla con ayuda de las pistas.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["dare", "do", "", "", "", "", ""],
            ["bere", "bevo", "", "", "", "", ""],
            ["scegliere", "scelgo", "", "", "", "", "scelgono"],
            ["comprare", "", "", "", "", "", ""],
            ["spendere", "", "", "", "spendiamo", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Dare, bere o scegliere?",
          hint: "Completa con el verbo que tiene sentido, en la forma correcta.",
          items: [
            "Scusi, mi ___ un chilo di arance?",
            "Tu che cosa ___ a colazione, tè o caffè?",
            "Io ___ sempre la frutta più matura.",
            "Noi ___ molta acqua d'estate.",
            "Voi ___ il vino rosso o il bianco?",
            "I miei genitori ___ i soldi ai nonni per la spesa.",
            "Che cosa ___ i bambini? Un succo?",
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
          title: "Del pane, dei pomodori",
          hint: "El partitivo: «algo de»",
          text: [
            "Para decir una cantidad sin precisar («pan», «unos tomates»), el italiano usa di + artículo: del pane, della frutta, dell'olio, dei pomodori, degli spinaci, delle mele.",
            "En español muchas veces no se dice nada: «Compro pan» = «Compro del pane». También se puede quitar en italiano, pero con el partitivo suena más natural en frases positivas.",
            "Con una cantidad exacta va solo «di», sin artículo: un chilo di pane, una bottiglia di vino, un po' di sale.",
            "En frases negativas el partitivo desaparece: «Non compro pane», «Non ci sono uova».",
          ],
          table: {
            head: ["", "partitivo", "con cantidad"],
            rows: [
              ["pane", "del pane", "un chilo di pane"],
              ["frutta", "della frutta", "un po' di frutta"],
              ["olio", "dell'olio", "un litro di olio"],
              ["pomodori", "dei pomodori", "mezzo chilo di pomodori"],
              ["mele", "delle mele", "un sacchetto di mele"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Partitivo o di?",
          hint: "Completa con el partitivo (del, della, dell', dei, degli, delle) o solo con di.",
          items: [
            "Compro ___ pane e ___ formaggio.",
            "Vorrei un chilo ___ patate.",
            "Ci sono ___ uova nel frigorifero?",
            "Prendo una bottiglia ___ acqua frizzante.",
            "Mi dà ___ olive verdi?",
            "Metti un po' ___ sale nella pasta.",
            "Al mercato compriamo ___ zucchine e ___ funghi.",
            "Non ho ___ latte: vado al supermercato.",
          ],
        },
        {
          kind: "intro",
          title: "Questo o quello?",
          hint: "Este y ese",
          text: [
            "«Questo» es lo que está cerca de ti (este, esto). Concuerda como un adjetivo en -o: questo, questa, questi, queste.",
            "«Quello» es lo que está lejos (ese, aquel). Solo, como pronombre, también tiene cuatro formas: quello, quella, quelli, quelle. Delante de un sustantivo cambia como el artículo (quel pane, quei pomodori): lo verás en la unidad 11.",
            "En la tienda: «Quanto costa questo?», «Preferisco quello lì».",
          ],
          examples: [
            { it: "Questi pomodori sono buonissimi.", es: "Estos tomates están buenísimos." },
            { it: "Questa mozzarella o quella?", es: "¿Esta mozzarella o esa?" },
            { it: "Non questi, quelli lì, per favore.", es: "Estos no, esos de ahí, por favor." },
          ],
        },
        {
          kind: "fill",
          title: "Questo e quello",
          hint: "Completa con la forma correcta de questo o quello (como pronombre).",
          items: [
            "___ mele sono più dolci. (cerca)",
            "Ti piace ___ formaggio? (cerca)",
            "Non questa bottiglia, ___ lì. (lejos)",
            "___ funghi sono freschi? (cerca)",
            "Questi pomodori o ___? (lejos)",
            "___ zucchine sono italiane? (cerca)",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Due etti, grazie. → Quanto ne vuole?",
          items: [
            "Le mele costano due euro al chilo.",
            "Sì, abbiamo delle uova fresche.",
            "No, basta così, grazie.",
            "Il pane è al panificio, in fondo alla strada.",
            "Preferisco quelle rosse.",
            "Di solito faccio la spesa il sabato mattina.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo. Recuerda: en negativo el partitivo desaparece.",
          items: ["Compro del pane.", "Ci sono delle uova.", "Beviamo del vino.", "Mi dà dei funghi?", "Ho della frutta in casa."],
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
          title: "Dal fruttivendolo",
          hint: "Una clienta compra fruta y verdura en el mercado. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Fruttivendolo", text: "Buongiorno signora, che cosa le do?" },
            { who: "Cliente", text: "Buongiorno. Mi dà un chilo di pomodori, per favore? Quelli per l'insalata." },
            { who: "Fruttivendolo", text: "Questi qui? Sono di Sicilia, dolcissimi." },
            { who: "Cliente", text: "Sì, quelli. E anche mezzo chilo di zucchine." },
            { who: "Fruttivendolo", text: "Ecco. Altro?" },
            { who: "Cliente", text: "Delle mele… Quanto costano?" },
            { who: "Fruttivendolo", text: "Queste due euro al chilo, quelle verdi due e cinquanta." },
            { who: "Cliente", text: "Prendo un chilo di quelle verdi. Basta così." },
            { who: "Fruttivendolo", text: "Allora… sono sette euro e trenta. Le do anche un po' di prezzemolo, gratis." },
            { who: "Cliente", text: "Che gentile, grazie!" },
          ],
          questions: [
            "Che pomodori compra la signora? Da dove vengono?",
            "Quanto compra di zucchine?",
            "Quanto costano le mele verdi?",
            "Quanto paga in tutto?",
            "Che cosa le regala il fruttivendolo?",
          ],
        },
        {
          kind: "listen",
          title: "Alla salumeria",
          hint: "Un chico compra para una cena con amigos. Responde en voz alta.",
          script: [
            { who: "Salumiere", text: "Chi è il prossimo?" },
            { who: "Giacomo", text: "Io. Buongiorno! Vorrei due etti di prosciutto crudo." },
            { who: "Salumiere", text: "San Daniele o Parma? Lo vuole tagliato fino?" },
            { who: "Giacomo", text: "Parma, tagliato fino, grazie. Poi un etto e mezzo di salame piccante." },
            { who: "Salumiere", text: "Ecco qua. Altro?" },
            { who: "Giacomo", text: "Un pezzo di parmigiano, più o meno tre etti, e una mozzarella di bufala." },
            { who: "Salumiere", text: "Il parmigiano è un po' di più, tre etti e venti. Va bene lo stesso?" },
            { who: "Giacomo", text: "Sì, va benissimo. Basta così." },
            { who: "Salumiere", text: "Sono diciannove euro e cinquanta. Buona cena!" },
          ],
          questions: [
            "Quanto prosciutto compra Giacomo? Di che tipo?",
            "Come lo vuole?",
            "Che salame prende? Quanto?",
            "Perché il parmigiano costa un po' di più?",
            "Per che cosa fa la spesa Giacomo, secondo te?",
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
          title: "Fare la spesa in Italia",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "Molti italiani fanno la spesa grossa al supermercato una volta alla settimana, ma per il pane, la frutta e il pesce preferiscono i piccoli negozi o il mercato.",
            "Nei mercati rionali, la mattina, ci sono banchi di frutta, verdura, formaggi e salumi. I clienti conoscono i venditori e spesso chiacchierano con loro.",
            "Attenzione: dal fruttivendolo e al mercato non si tocca la frutta. È il venditore che sceglie per te. Al supermercato, invece, la prendi tu, ma devi usare i guanti di plastica.",
            "Al banco dei salumi e dei formaggi si prende il numero e si aspetta il proprio turno. Si chiede «un etto», «due etti»: il chilo si usa soprattutto per la frutta e la verdura.",
            "Molti italiani comprano prodotti di stagione e locali: d'estate pomodori, pesche e zucchine; d'inverno arance, carciofi e cavoli. Costano meno e sono più buoni.",
          ],
          questions: [
            "Dove fanno la spesa grossa molti italiani? E dove comprano il pane e la frutta?",
            "Com'è un mercato rionale?",
            "Che cosa non si fa dal fruttivendolo?",
            "Che cosa bisogna fare al supermercato con la frutta?",
            "Che cosa si fa al banco dei salumi?",
            "Perché molti comprano prodotti di stagione?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Cómo se hace la compra en España? ¿Mercado, tiendas pequeñas o supermercado? ¿Se toca la fruta? Explícalo con 3 o 4 frases, en voz alta.",
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
          title: "Altro? Basta così",
          hint: "Las fórmulas del mostrador",
          text: [
            "Lo que oirás: «Chi è il prossimo?» (¿quién va?), «Che cosa le do?» (¿qué le pongo?), «Altro?» (¿algo más?), «Va bene così o un po' di più?».",
            "Lo que dirás: «Chi è l'ultimo?» (¿quién es el último?), «Mi dà…?», «Un po' di più / un po' di meno», «Basta così, grazie».",
          ],
          examples: [
            { it: "Chi è l'ultimo? — Sono io.", es: "¿Quién es el último? — Soy yo." },
            { it: "È un po' di più, va bene lo stesso?", es: "Es un poco más, ¿le vale igual?" },
            { it: "Un po' di meno, per favore.", es: "Un poco menos, por favor." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Dove fai la spesa di solito?",
            "Quante volte alla settimana fai la spesa?",
            "Che cosa compri sempre? E che cosa non compri mai?",
            "Quanto spendi più o meno alla settimana?",
            "Ti piace andare al mercato? Perché?",
            "Che cosa c'è adesso nel tuo frigorifero?",
          ],
        },
        {
          kind: "speak",
          title: "Ordina al banco",
          hint: "Pide cada cosa en voz alta con «Mi dà…?» o «Vorrei…» y la cantidad. Ejemplo: 200 g prosciutto → Mi dà due etti di prosciutto?",
          items: ["300 g di parmigiano", "1 kg di arance", "500 g di funghi", "6 uova", "150 g di salame", "2 bottiglie d'acqua"],
        },
        {
          kind: "roleplay",
          title: "Al mercato",
          hint: "Tienes 20 euros para la cena de esta noche. La IA hace de vendedor y te propone cosas. Usa «Lei».",
          steps: [
            "Saluda y pregunta quién es el último.",
            "Pide fruta y verdura con cantidades.",
            "Pregunta el precio de dos productos y elige entre questo y quello.",
            "El vendedor te pone un poco más: di si te vale.",
            "Pregunta cuánto es en total y comprueba que no pasas de 20 euros.",
            "Paga y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "La lista della spesa",
          hint: "Con tu compañero de piso, haced la lista de la compra para la semana. La IA hace de compañero. Es informal.",
          steps: [
            "Mirad qué hay y qué falta en la nevera («C'è del latte? Non ci sono uova»).",
            "Decidid qué vais a cocinar dos días.",
            "Haced la lista con cantidades.",
            "Decidid dónde compráis cada cosa (mercado, supermercado…).",
            "Decidid quién va y cuánto pone cada uno.",
          ],
        },
        {
          kind: "speak",
          title: "La mia spesa",
          hint: "Cuenta durante un minuto cómo haces la compra: dónde, cuándo, qué compras y cuánto gastas.",
          items: ["Di solito faccio la spesa…"],
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
            "¿Me da un kilo de manzanas, por favor?",
            "Quisiera doscientos gramos de jamón cocido.",
            "No hay huevos en la nevera.",
            "Compramos pan y fruta en el mercado.",
            "¿Cuánto cuestan estos tomates?",
            "Estos no, esos de ahí.",
            "Ya está, gracias. ¿Cuánto es?",
            "Bebo un litro de agua al día.",
          ],
        },
        {
          kind: "write",
          title: "La lista e la ricetta",
          hint: "Elige un plato que sepas cocinar. Escribe la lista de la compra con cantidades y después explica en 4 o 5 frases dónde compras cada cosa.",
          rows: 6,
          items: ["Il piatto e la lista:", "Dove compro tutto:"],
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
          title: "Dettato: quantità",
          hint: "Escucha y escribe lo que oyes.",
          items: ["due etti di prosciutto", "mezzo chilo di funghi", "una bottiglia di olio", "un pacco di pasta", "una dozzina di uova", "un po' di sale"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Mi dà delle arance?", "Basta così, grazie.", "Quanto costano queste?", "Scelgo io.", "Non ci sono zucchine."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "YouTube", title: "Giallo Zafferano", where: "YouTube", why: "El canal de recetas más famoso de Italia. Recetas cortas con ingredientes y cantidades: perfecto para esta unidad." },
            { type: "Serie", title: "Il commissario Montalbano", where: "RaiPlay", why: "Sicilia, mercados de pescado y comidas largas. El comisario habla de comida en casi todos los episodios." },
            { type: "Película", title: "Pranzo di ferragosto (Gianni Di Gregorio, 2008)", where: "Busca dónde verla en JustWatch", why: "Un hombre de Roma cuida de cuatro señoras mayores en pleno agosto: compras, cocina y comidas. Corta, lenta y fácil de seguir." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras miras una receta o un episodio, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Apunta también las cantidades.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Explica una receta que hayas visto: qué ingredientes lleva y cuánto de cada uno.",
          items: ["Per questa ricetta ci vogliono…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 10",
    hint: "Unos 40 minutos, sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["il burro", "le zucchine", "l'aglio", "un etto", "la salumeria", "il panificio", "un vasetto", "una lattina", "il sacchetto", "scegliere"],
      },
      {
        kind: "vocab",
        from: "es",
        title: "2. Al contrario",
        hint: "Traduce al italiano.",
        items: ["la pescadería", "medio kilo", "una docena de huevos", "una loncha", "el carrito", "ya está, gracias"],
      },
      {
        kind: "table",
        title: "3. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["dare", "", "", "", "", "", ""],
          ["bere", "", "", "", "", "", ""],
          ["scegliere", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "4. Completa",
        hint: "Completa con un partitivo, di, questo / quello o el verbo entre paréntesis.",
        items: [
          "Vorrei ___ pane integrale.",
          "Mi dà un litro ___ latte?",
          "Ci sono ___ uova?",
          "Non compro mai ___ carne.",
          "___ mele qui sono buonissime. (cerca)",
          "Non questi pomodori, ___ lì.",
          "Che cosa ___ i ragazzi? Acqua o succo? (bere)",
          "Noi ___ sempre il pesce fresco. (scegliere)",
        ],
      },
      {
        kind: "translate",
        from: "it",
        placeholder: "trasforma",
        title: "5. Trasforma",
        hint: "Las tres primeras, a negativo. Las tres últimas, escribe la pregunta.",
        items: [
          "Compriamo della frutta.",
          "Ci sono dei funghi.",
          "Beve del vino.",
          "Costano tre euro al chilo.",
          "Faccio la spesa al mercato.",
          "Sì, basta così.",
        ],
      },
      {
        kind: "reading",
        title: "6. Leggi",
        hint: "Lee el texto y responde en italiano.",
        text: [
          "Ogni sabato mattina Rosa va al mercato di Campo de' Fiori, a Roma. Compra la frutta da Mario, un fruttivendolo che conosce da vent'anni.",
          "Mario sceglie per lei le pesche più mature e le dà sempre un po' di basilico gratis. Poi Rosa va al banco del formaggio: due etti di pecorino e una ricotta fresca.",
          "Al supermercato compra solo l'acqua, la pasta e i prodotti per la casa. «Il mercato costa un po' di più», dice, «ma lì la spesa è anche una chiacchierata».",
        ],
        questions: ["Dove va Rosa il sabato?", "Chi è Mario? Che cosa fa per Rosa?", "Che cosa compra al banco del formaggio?", "Perché Rosa preferisce il mercato?"],
      },
      {
        kind: "listen",
        title: "7. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Commessa", text: "Buongiorno, ha il numero?" },
          { who: "Cliente", text: "Sì, il quarantadue. Vorrei tre etti di prosciutto cotto." },
          { who: "Commessa", text: "Ecco. Altro?" },
          { who: "Cliente", text: "Del formaggio… quanto costa questo?" },
          { who: "Commessa", text: "Questo diciotto euro al chilo, quello lì ventidue." },
          { who: "Cliente", text: "Allora due etti di questo, grazie. Basta così." },
          { who: "Commessa", text: "Sono otto euro e ottanta." },
        ],
        questions: ["Che numero ha il cliente?", "Quanto prosciutto compra?", "Quanto costa il formaggio più caro?", "Quale formaggio sceglie? Quanto?", "Quanto paga?"],
      },
      {
        kind: "speak",
        title: "8. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Racconta come fai la spesa: dove, quando, che cosa compri.",
          "Ordina al banco: prosciutto, formaggio e pane, con le quantità.",
          "Che cosa c'è e che cosa non c'è nel tuo frigorifero?",
          "Chiedi il prezzo di due prodotti e scegli il più economico.",
        ],
      },
      {
        kind: "roleplay",
        title: "9. Al mercato",
        hint: "Hazlo con la IA, de una vez y sin preparar. Usa «Lei».",
        steps: [
          "Saluda y pide tres productos con cantidades.",
          "El vendedor no tiene uno: elige otra cosa.",
          "Pregunta el total y paga.",
        ],
      },
      {
        kind: "dictation",
        title: "10. Dettato",
        hint: "Escucha y escribe.",
        items: ["un etto e mezzo", "Mi dà delle mele?", "Non ci sono uova.", "Queste o quelle?", "una bottiglia di vino", "Bevono solo acqua."],
      },
      {
        kind: "translate",
        title: "11. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Quisiera medio kilo de tomates.",
          "¿Tiene huevos frescos?",
          "No compramos carne.",
          "¿Cuánto cuesta ese queso?",
          "Elijo yo la fruta.",
          "Ya está, gracias.",
        ],
      },
      {
        kind: "write",
        title: "12. Scrivi",
        hint: "Escribe un mensaje a tu compañero de piso (50–60 palabras): qué falta en casa, qué tiene que comprar, cuánto y dónde.",
        rows: 6,
        items: ["Ciao! Vai tu a fare la spesa?"],
      },
    ],
  },
};
