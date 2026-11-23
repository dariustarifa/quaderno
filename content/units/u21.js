// Unità 21 · In cucina — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[21] = {
    n: 21,
    level: "A2",
    title: "In cucina",
    goal: "Entender y dar recetas e instrucciones, en formal y en informal, sin repetir palabras gracias a los pronombres.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a leer y dar recetas, a explicar cómo se hace algo y a hablar de cocina italiana.",
              "Gramática: el imperativo formal con Lei (prenda, metta, giri) y los pronombres de objeto directo (lo, la, li, le), con el presente, el imperativo y el passato prossimo.",
              "Los pronombres son la clave para hablar con naturalidad: en vez de «Compro il pane e mangio il pane» → «Compro il pane e lo mangio».",
            ],
          },
          {
            kind: "intro", title: "Lo, la, li, le", hint: "Un adelanto: los pronombres directos",
            text: ["Sustituyen a una cosa o persona que ya se ha mencionado, como «lo, la, los, las» en español.", "Van delante del verbo conjugado, pero detrás y pegados al imperativo con tu: «Lo prendo» / «Prendilo!»."],
            examples: [
              { it: "Il pane? Lo compro io.", es: "¿El pan? Lo compro yo." },
              { it: "Le cipolle, tagliale sottili.", es: "Las cebollas, córtalas finas." },
              { it: "Prenda la pentola e la metta sul fuoco.", es: "Coja la olla y póngala al fuego." },
            ],
          },
          { kind: "speak", title: "Sai cucinare?", hint: "Antes de empezar: ¿sabes cocinar? ¿Qué plato te sale mejor? Dilo como puedas.", items: ["Io so cucinare…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "In cucina", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "la pentola", "la padella", "il coltello", "il tagliere", "il forno",
              "il fornello", "la ciotola", "il cucchiaio di legno", "lo scolapasta", "la grattugia",
              "tagliare", "affettare", "tritare", "mescolare", "bollire",
              "friggere", "cuocere", "scolare", "aggiungere", "assaggiare",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Quantità e cottura", hint: "Escribe en italiano.",
            items: ["una cucharada", "una pizca de sal", "un chorrito de aceite", "a fuego lento", "a fuego vivo", "dorar", "pelar", "rallar", "calentar", "hervir el agua", "al dente", "crudo", "quemado", "la receta", "los ingredientes"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: scolare → Quando la pasta è al dente, scolala.", items: ["la padella", "tagliare", "lo mangio", "la compro", "mescolare", "metta", "assaggialo", "q.b. (quanto basta)"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Tagliala, mescolalo", hint: "Pronombres pegados al verbo",
            text: [
              "Cuando el pronombre se pega al imperativo, la fuerza no se mueve: tà-glia → tà-glia-la, mé-sco-la → mé-sco-la-lo. Como en español: «corta» → «córtala».",
              "Con los imperativos cortos (fa', da', di'), la consonante del pronombre se duplica: fallo!, dammi!, dillo! Lo verás más en la unidad 22.",
              "Palabras de cocina con dobles: pentola no, padella sí (pa-dèl-la), mescolare no, friggere sí (frìg-ge-re), aggiungere sí.",
            ],
            table: { head: ["", "suena"], rows: [["tagliala", "tà-glia-la"], ["mescolalo", "mé-sco-la-lo"], ["fallo / dillo", "fàl-lo / dìl-lo"], ["friggere", "frìg-ge-re"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite.", items: ["taglialo, tagliala, tagliali, tagliale", "mescolalo, assaggialo, scolala", "padella, pentola, ciotola, grattugia", "friggere, aggiungere, cuocere, bollire"] },
          { kind: "shadow", title: "Una ricetta", hint: "Repite como un cocinero de la tele.", items: ["Prenda una pentola grande e la riempia d'acqua.", "Quando l'acqua bolle, butti la pasta e la mescoli.", "Nel frattempo tagli il guanciale e lo faccia dorare in padella.", "Scoli la pasta al dente e la metta nella padella.", "Assaggi e aggiunga pepe q.b."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "L'imperativo formale (Lei)", hint: "El imperativo de usted",
            text: [
              "Con Lei (usted), los verbos en -are terminan en -i y los verbos en -ere / -ire en -a, al revés que con tu: «Parli più piano!», «Prenda!», «Senta!».",
              "Se forma a partir de la forma io del presente: prendo → prenda; vengo → venga; faccio → faccia; esco → esca; dico → dica; vado → vada.",
              "Con Lei, los pronombres van delante: «La prenda», «Lo metta nel forno», «Si accomodi». Negativo: «Non lo tocchi!».",
              "En las recetas escritas también se usa mucho el infinitivo: «Tagliare le cipolle e farle dorare».",
            ],
            table: {
              head: ["", "tu", "Lei"],
              rows: [["girare", "gira!", "giri!"], ["prendere", "prendi!", "prenda!"], ["sentire", "senti!", "senta!"], ["fare", "fa'!", "faccia!"], ["andare", "va'!", "vada!"]],
            },
          },
          k.table("Tu, Lei e voi", [
            ["tagliare", "taglia!", "", ""],
            ["mettere", "", "metta!", ""],
            ["aggiungere", "", "", "aggiungete!"],
            ["venire", "", "", ""],
            ["dire", "", "dica!", ""],
            ["accomodarsi", "", "", ""],
          ], "Completa el imperativo con tu, con Lei y con voi.", ["tu", "Lei", "voi"]),
          {
            kind: "fill", title: "Signora, faccia così", hint: "Completa con el imperativo formal (Lei).",
            items: [
              "Signora, ___ (prendere) due uova e le ___ (sbattere) in una ciotola.",
              "___ (aggiungere) un po' di sale e ___ (mescolare).",
              "Non ___ (aprire) il forno prima di venti minuti!",
              "Prego, ___ (accomodarsi) e ___ (assaggiare) questo vino.",
              "___ (scusare), ___ (ripetere) la ricetta, per favore?",
              "___ (andare) sempre dritto e ___ (girare) a destra.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I pronomi diretti", hint: "Pronombres de objeto directo",
            text: [
              "mi (me), ti (te), lo (lo, a él), la (la, a ella, y también a usted: La), ci (nos), vi (os), li (los), le (las).",
              "Posición: delante del verbo conjugado («Lo compro»); pegados al infinitivo («Devo comprarlo» = «Lo devo comprare») y al imperativo de tu, noi y voi («Compralo!», «Compratelo!»).",
              "En el passato prossimo, lo y la se apostrofan delante de avere y el participio concuerda: «La pasta? L'ho mangiata», «I biscotti? Li ho mangiati», «Le mele? Le ho comprate».",
            ],
            table: { head: ["", "presente", "passato"], rows: [["il pane", "lo compro", "l'ho comprato"], ["la pizza", "la mangio", "l'ho mangiata"], ["i funghi", "li cucino", "li ho cucinati"], ["le uova", "le rompo", "le ho rotte"]] },
          },
          {
            kind: "fill", title: "Lo, la, li, le", hint: "Completa con el pronombre directo (y la terminación del participio cuando haga falta).",
            items: [
              "Il parmigiano? ___ grattugio io.", "Queste zucchine sono buone: ___ compro sempre al mercato.", "Dov'è la ricetta? Non ___ trovo!", "I pomodori? ___ ho tagliat___ a pezzi.", "La torta? ___ ho fatt___ ieri sera.", "Le cipolle, ___ devi tagliare sottili.", "Gli spaghetti? Scola___ subito!", "Ti piace il tiramisù? ___ preparo io stasera.",
            ],
          },
          {
            kind: "intro", title: "Ricette scritte e parlate", hint: "Cómo se escribe una receta",
            text: ["Recetas escritas: infinitivo o imperativo de voi. «Tagliare le patate» / «Tagliate le patate». En la tele, el cocinero suele usar voi o Lei.", "Abreviaturas: q.b. = quanto basta (la cantidad necesaria), g = grammi, cucchiaio, cucchiaino, un pizzico di."],
          },
          k.domanda(["Lo compro al panificio.", "Le ho tagliate sottili.", "La cuoci per dieci minuti.", "Li ho comprati ieri.", "Sì, l'ho già assaggiata.", "No, non lo metto mai."], "Escribe la pregunta que corresponde a cada respuesta, con el nombre de la cosa. Ejemplo: Lo compro io. → Chi compra il pane?"),
          k.negativa(["Mangialo!", "Lo metta nel forno!", "L'ho assaggiata.", "Le compro sempre.", "Tagliateli!"], "Pasa cada frase a negativo. Cuidado con la posición del pronombre."),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il corso di cucina", "Una cocinera da una clase de cocina a una alumna.", [
            { who: "Chef Rita", text: "Allora signora Lopez, oggi facciamo il risotto alla milanese. Prenda la cipolla e la tagli molto fine." },
            { who: "Sig.ra Lopez", text: "Così va bene?" },
            { who: "Chef Rita", text: "Perfetto. Adesso la metta nella pentola con il burro e la faccia appassire a fuoco basso. Non la bruci!" },
            { who: "Sig.ra Lopez", text: "E il riso quando lo metto?" },
            { who: "Chef Rita", text: "Adesso. Lo tosti due minuti, poi aggiunga un bicchiere di vino bianco e lo lasci evaporare." },
            { who: "Sig.ra Lopez", text: "E lo zafferano?" },
            { who: "Chef Rita", text: "Lo sciolga in un po' di brodo caldo e lo aggiunga a metà cottura. Alla fine, burro e parmigiano: si chiama mantecare." },
          ], ["Che piatto preparano?", "Come deve tagliare la cipolla la signora?", "Che cosa fa con il riso? E con il vino?", "Come si usa lo zafferano? Quando?", "Che cosa significa «mantecare»?"]),
          k.listen("Mamma, come si fa?", "Un chico llama a su madre para pedirle una receta.", [
            { who: "Paolo", text: "Mamma, stasera ho ospiti. Come si fa la tua pasta al pomodoro?" },
            { who: "Mamma", text: "Facile! Prendi l'aglio, sbuccialo e fallo dorare nell'olio. Non bruciarlo, eh!" },
            { who: "Paolo", text: "E poi i pomodori?" },
            { who: "Mamma", text: "Sì, i pelati. Schiacciali con la forchetta e cuocili venti minuti. Alla fine aggiungi il basilico." },
            { who: "Paolo", text: "Il basilico lo taglio con il coltello?" },
            { who: "Mamma", text: "No! Spezzalo con le mani, così non diventa nero. E la pasta scolala al dente!" },
          ], ["Perché Paolo chiama la mamma?", "Che cosa deve fare con l'aglio?", "Che cosa fa con i pomodori? Per quanto tempo?", "Come deve tagliare il basilico? Perché?", "Come deve scolare la pasta?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La carbonara: regole e polemiche", [
            "La carbonara è uno dei piatti italiani più famosi del mondo e anche uno dei più discussi. Gli ingredienti originali sono pochi: guanciale, uova, pecorino romano e pepe nero.",
            "La sua storia non è chiara. Secondo molti, è nata a Roma dopo la Seconda guerra mondiale, quando i soldati americani portavano uova e bacon.",
            "Per i romani ci sono regole sacre: niente panna, niente aglio, niente cipolla. E il guanciale non si sostituisce con la pancetta, anche se in molte case si fa.",
            "Il segreto è la cremosità: le uova non devono cuocere troppo. Si mescolano con il pecorino e un po' d'acqua della pasta, e si aggiungono fuori dal fuoco.",
            "Quando all'estero qualcuno mette la panna o i piselli nella carbonara, sui social italiani scoppia la polemica. Per molti italiani la cucina è una questione molto seria!",
          ], ["Quali sono gli ingredienti originali della carbonara?", "Quando e dove è nata, probabilmente?", "Quali sono le «regole sacre» dei romani?", "Qual è il segreto della carbonara? Come si ottiene?", "Che cosa succede quando all'estero qualcuno cambia la ricetta?", "E tu: sei «purista» in cucina o ti piace cambiare le ricette?"]),
          k.spagna("¿Hay en España un plato con «reglas sagradas», como la paella? Explica la receta con el imperativo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Spiegare una ricetta", hint: "Explicar una receta en orden",
            text: ["Orden: «Prima…», «Poi…», «Nel frattempo…» (mientras tanto), «Quando… è pronto / bolle…», «Alla fine…».", "Para cantidades aproximadas: «un po' di», «un pizzico di», «q.b.», «più o meno»."],
          },
          k.rispondi(["Chi cucina a casa tua?", "Qual è il tuo piatto preferito? Lo sai fare?", "Che cosa hai mangiato ieri a cena? Chi l'ha cucinato?", "Qual è il piatto più difficile che hai preparato?", "Che cosa pensi della cucina italiana all'estero?", "Che cosa non mangeresti mai?"]),
          { kind: "speak", title: "Rispondi con il pronome", hint: "Responde usando un pronombre directo, sin repetir la palabra. Ejemplo: Chi compra il pane? → Lo compro io.", items: ["Chi lava i piatti a casa tua?", "Mangi spesso la pizza?", "Dove compri le verdure?", "Hai mai preparato il tiramisù?", "Quando bevi il caffè?", "Inviti spesso i tuoi amici a cena?"] },
          {
            kind: "roleplay", title: "Il cuoco televisivo", hint: "Eres cocinero en un programa de televisión y explicas tu receta al presentador. La IA hace de presentador y te interrumpe con preguntas. Usa «Lei» o «voi» con el público.",
            steps: ["Presenta el plato y los ingredientes.", "Explica los pasos con el imperativo y en orden.", "Responde a las preguntas del presentador sin repetir las palabras (pronombres).", "Da un truco secreto.", "Despídete del público."],
          },
          {
            kind: "roleplay", title: "La cena con gli amici", hint: "Vas a cocinar con un amigo para una cena de seis personas. La IA hace del amigo. Es informal.",
            steps: ["Decidid el menú.", "Haced la lista de lo que hay que comprar.", "Repartíos las tareas con el imperativo («Tu taglia le verdure…»).", "El amigo ha quemado algo: busca una solución.", "Preparad la mesa juntos."],
          },
          { kind: "speak", title: "La mia ricetta", hint: "Explica durante un minuto y medio la receta de un plato típico de tu casa o de tu región, paso a paso.", items: ["Per questa ricetta ci vogliono…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Coja las patatas y pélelas.", "¿La pasta? La he comprado esta mañana.", "Córtalo en trozos pequeños.", "No lo pongas en el horno todavía.", "Siéntese, por favor.", "Los tomates los compro en el mercado.", "Hay que probarla antes de servirla.", "Añadid sal al gusto."]),
          { kind: "write", title: "La ricetta di famiglia", hint: "Escribe la receta de un plato de tu familia como en un libro de cocina: ingredientes con cantidades y preparación con el imperativo (voi) o el infinitivo. Entre 10 y 12 frases.", rows: 12, items: ["Ingredienti per 4 persone:", "Preparazione:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: in cucina", ["la padella", "lo scolapasta", "q.b.", "un pizzico di sale", "a fuoco basso", "al dente"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Prenda la pentola.", "Tagliala sottile.", "Li ho comprati ieri.", "Non lo bruciare!", "Lo metta nel forno."]),
          k.media([
            { type: "YouTube", title: "Giallo Zafferano", where: "YouTube", why: "Ya lo conoces de la unidad 10: ahora fíjate en el imperativo y en los pronombres de las recetas." },
            { type: "Programa", title: "MasterChef Italia", where: "Sky, NOW", why: "Concurso de cocina con jueces muy duros. Mucho imperativo, mucho vocabulario de cocina y muchas emociones." },
            { type: "Película", title: "Pranzo di ferragosto (Gianni Di Gregorio, 2008)", where: "Busca dónde verla en JustWatch", why: "Si no la viste en la unidad 10, ahora es el momento: se cocina todo el rato." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Explica una receta que hayas visto en el vídeo o en el programa, con el imperativo.", items: ["Prima prendete…"] },
        ],
      },
    ],

    exam: k.exam(21, {
      parole: ["la padella", "il tagliere", "lo scolapasta", "tritare", "scolare", "aggiungere", "assaggiare", "q.b.", "al dente", "mantecare"],
      contrario: ["la olla", "el horno", "rallar", "pelar", "a fuego lento", "quemado"],
      verbiHint: "Completa el imperativo con tu, con Lei y con voi.",
      verbiCols: ["tu", "Lei", "voi"],
      verbi: [["prendere", "", "", ""], ["fare", "", "", ""], ["venire", "", "", ""], ["sentire", "", "", ""]],
      completaHint: "Completa con un pronombre directo, la terminación del participio o el imperativo formal.",
      completa: ["La pizza? ___ ho mangiat___ tutta io!", "I biscotti, ___ compro al supermercato.", "Gli spaghetti? Scola___ adesso!", "Le uova? ___ ho rott___ in una ciotola.", "Signora, ___ (prendere) il sale, per favore.", "Non ___ (Lei, toccare) il forno: è caldissimo!", "Il vino? Devo comprar___.", "___ (Lei, scusare), dov'è la cucina?"],
      trasformaHint: "Sustituye el complemento directo por un pronombre (lo, la, li, le). En el pasado, cuidado con el participio.",
      trasforma: ["Mangio la mela.", "Ho comprato i pomodori.", "Taglia le cipolle!", "Devo lavare i piatti.", "Ho fatto la torta.", "Signora, prenda il cucchiaio."],
      leggi: {
        text: [
          "Tiramisù (per 6 persone): 500 g di mascarpone, 4 uova, 100 g di zucchero, savoiardi q.b., caffè, cacao amaro.",
          "Separate i tuorli dagli albumi. Montate i tuorli con lo zucchero e aggiungete il mascarpone. Montate gli albumi a neve e uniteli alla crema piano piano.",
          "Bagnate i savoiardi nel caffè freddo e metteteli in una pirofila. Copriteli con la crema, fate un altro strato e alla fine mettete il cacao. Lasciatelo in frigo almeno sei ore.",
        ],
        questions: ["Per quante persone è la ricetta?", "Che cosa si fa con i tuorli?", "Come si usano i savoiardi?", "Quanto tempo deve restare in frigo?"],
      },
      ascolta: {
        script: [
          { who: "Nonna", text: "Allora, Giulia, per gli gnocchi prendi un chilo di patate e falle bollire con la buccia." },
          { who: "Giulia", text: "E poi le sbuccio?" },
          { who: "Nonna", text: "Sì, quando sono ancora calde. Schiacciale e aggiungi la farina, piano piano." },
          { who: "Giulia", text: "Quanta farina?" },
          { who: "Nonna", text: "Trecento grammi, più o meno. Non metterne troppa, se no gli gnocchi diventano duri." },
        ],
        questions: ["Che cosa preparano?", "Come si cuociono le patate?", "Quando si sbucciano?", "Quanta farina serve? Perché non troppa?"],
      },
      parla: ["Spiega la ricetta del tuo piatto preferito.", "Rispondi con i pronomi: Chi cucina a casa tua? Dove compri la frutta? Hai mai fatto il pane?", "Dai istruzioni formali a un ospite: come preparare un caffè con la moka.", "Racconta un disastro in cucina."],
      roleHint: "Usa «Lei».",
      role: ["Un turista te pregunta cómo se hace la carbonara: explícaselo.", "Te pregunta si puede poner nata: responde.", "Recomiéndale un restaurante para probarla."],
      dettato: ["Lo metta nel forno.", "Le ho tagliate.", "Assaggiala!", "un pizzico di sale", "Non bruciarlo!", "Li compriamo al mercato."],
      traduci: ["¿Las patatas? Las he pelado ya.", "Señora, pruebe esta salsa.", "No la toques, está caliente.", "¿Dónde has comprado este queso? — Lo he comprado en el mercado.", "Escurrid la pasta y servidla.", "Hay que cocinarlos diez minutos."],
      scrivi: { hint: "Escribe (60–80 palabras) las instrucciones para preparar un plato sencillo para alguien que no sabe cocinar, con el imperativo (tu) y pronombres.", start: "Allora, prima prendi…" },
    }),
  };
})();
