// Unità 25 · Feste e tradizioni — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[25] = {
    n: 25,
    level: "A2",
    title: "Feste e tradizioni",
    goal: "Hablar de fiestas y tradiciones, describir lo que está pasando en este momento y lo que está a punto de pasar.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de las fiestas italianas (Navidad, Carnaval, Pascua, las fiestas de los patronos) y de tus tradiciones, y a describir lo que está pasando ahora mismo.",
              "Gramática: stare + gerundio (sto mangiando: estoy comiendo) en presente y en pasado, y stare per + infinitivo (sto per uscire: estoy a punto de salir).",
              "Funciona casi igual que en español, pero el italiano lo usa menos: solo para lo que está pasando justo en ese momento.",
            ],
          },
          {
            kind: "intro", title: "Che cosa stai facendo?", hint: "Un adelanto: stare + gerundio",
            text: ["Como «estar + gerundio»: «Sto cucinando» (estoy cocinando). El gerundio es -ando para los verbos en -are y -endo para -ere / -ire.", "«Stare per» + infinitivo = estar a punto de: «Il treno sta per partire»."],
            examples: [
              { it: "Che cosa stai facendo? — Sto preparando l'albero di Natale.", es: "¿Qué estás haciendo? — Estoy preparando el árbol de Navidad." },
              { it: "Stiamo per uscire: ti richiamo dopo.", es: "Estamos a punto de salir: te llamo después." },
            ],
          },
          { kind: "speak", title: "La tua festa preferita", hint: "Antes de empezar: ¿cuál es tu fiesta preferida del año? ¿Qué haces ese día?", items: ["La mia festa preferita…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Feste", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "la festa", "festeggiare", "la tradizione", "il santo patrono", "la processione",
              "i fuochi d'artificio", "il Carnevale", "la maschera", "i coriandoli", "il presepe",
              "l'albero di Natale", "il panettone", "la vigilia", "il cenone", "Capodanno",
              "la Pasqua", "la colomba", "l'uovo di cioccolato", "Pasquetta", "la sfilata",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Fare festa", hint: "Escribe en italiano.",
            items: ["los Reyes Magos", "la Nochebuena", "la Nochevieja", "brindar", "el brindis", "disfrazarse", "el disfraz", "las uvas de la suerte", "la misa", "el desfile", "celebrar", "invitar", "la costumbre", "el día festivo", "el puente (festivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: sto preparando → Sto preparando il cenone per dodici persone.", items: ["sto facendo", "stavamo guardando", "sta per cominciare", "festeggiare", "il presepe", "la maschera", "brindare", "di solito"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Facendo, dicendo, bevendo", hint: "El gerundio y sus irregulares",
            text: [
              "El gerundio lleva la fuerza en -àn- o -èn-: man-giàn-do, scri-vèn-do, dor-mèn-do.",
              "Irregulares: los mismos que en el imperfetto: fare → facendo, dire → dicendo, bere → bevendo (fa-cèn-do, di-cèn-do, be-vèn-do).",
              "Palabras de fiestas con sonidos difíciles: coriandoli (co-riàn-do-li), fuochi (fuò-ki), presepe (pre-sè-pe), panettone (pa-net-tò-ne).",
            ],
            table: { head: ["", "gerundio"], rows: [["fare", "facendo"], ["dire", "dicendo"], ["bere", "bevendo"], ["porre / tradurre", "ponendo / traducendo"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite.", items: ["mangiando, bevendo, dormendo", "facendo, dicendo, traducendo", "coriandoli, maschere, fuochi d'artificio", "presepe, panettone, colomba, Pasquetta"] },
          { kind: "shadow", title: "In diretta", hint: "Como un periodista retransmitiendo una fiesta. Repite con energía.", items: ["Siamo in piazza San Marco e il Carnevale sta per cominciare!", "Le maschere stanno sfilando davanti a noi.", "I bambini stanno lanciando i coriandoli.", "Mancano dieci secondi: l'anno nuovo sta per arrivare!", "Tutti stanno brindando. Buon anno!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Stare + gerundio", hint: "Estar + gerundio",
            text: [
              "Presente de stare + gerundio para una acción que pasa en este momento: sto lavorando, stai leggendo, sta dormendo, stiamo mangiando, state uscendo, stanno arrivando.",
              "Imperfetto de stare + gerundio para una acción que estaba en curso en el pasado: «Stavo dormendo quando hai chiamato».",
              "Diferencia con el español: en italiano no se usa con ir / venir ni para costumbres. «Vengo ahora» → «Arrivo!», no «Sto venendo».",
              "Los pronombres pueden ir delante de stare o pegados al gerundio: «Lo sto preparando» = «Sto preparandolo».",
            ],
            table: { head: ["", "presente", "imperfetto"], rows: [["io", "sto mangiando", "stavo mangiando"], ["tu", "stai leggendo", "stavi leggendo"], ["lui / lei", "sta dormendo", "stava dormendo"], ["noi / voi / loro", "stiamo / state / stanno…", "stavamo / stavate / stavano…"]] },
          },
          k.table("Il gerundio", [
            ["cantare", "cantando", "", ""],
            ["leggere", "", "stai leggendo", ""],
            ["partire", "", "", "stavamo partendo"],
            ["fare", "", "", ""],
            ["bere", "", "", ""],
            ["dire", "", "", ""],
          ], "Completa: gerundio, presente con tu y imperfetto con noi.", ["gerundio", "presente (tu)", "imperfetto (noi)"]),
          {
            kind: "fill", title: "Che cosa stanno facendo?", hint: "Completa con stare + gerundio (presente o imperfetto).",
            items: [
              "Shh! Il bambino ___ (dormire).", "Mamma, che cosa ___ (cucinare)? Che profumo!", "Quando mi hai chiamato, ___ (fare) la doccia.", "Guarda: i fuochi d'artificio ___ (cominciare)!", "Ieri alle otto noi ___ (cenare) dai nonni.", "Ragazzi, che cosa ___ (dire)? Non vi sento.", "Il presepe? Lo ___ (preparare) adesso con mio figlio.", "Mentre ___ (noi, tornare) a casa, ha cominciato a nevicare.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Stare per", hint: "Estar a punto de",
            text: ["«Stare per» + infinitivo: algo va a pasar en un instante. «Il film sta per cominciare», «Stavo per uscire quando è arrivato Luca».", "No confundir con «stare + gerundio» (algo que ya está pasando)."],
            examples: [{ it: "Sbrigati, il treno sta per partire!", es: "¡Date prisa, el tren está a punto de salir!" }, { it: "Stavo per chiamarti!", es: "¡Estaba a punto de llamarte!" }],
          },
          {
            kind: "fill", title: "Gerundio o stare per?", hint: "Completa con stare + gerundio o stare per + infinitivo, según el sentido.",
            items: ["Corri! Lo spettacolo ___ (cominciare) tra un minuto.", "Non posso parlare: ___ (guidare).", "Ero già sulla porta: ___ (uscire) quando ha squillato il telefono.", "Silenzio, la nonna ___ (raccontare) una storia.", "Il panettone è quasi finito: ___ (finire)!", "Quando sono arrivato, i miei amici ___ (ballare)."],
          },
          {
            kind: "intro", title: "Le feste: preposizioni e auguri", hint: "Cómo se dicen las fiestas",
            text: ["«A Natale», «a Pasqua», «a Capodanno», «a Carnevale», pero «il giorno di Natale», «la notte di San Silvestro».", "Felicitaciones: «Buon Natale!», «Buone feste!», «Buona Pasqua!», «Buon anno!», «Buon compleanno!», «Buon onomastico!» (el día de tu santo)."],
          },
          k.domanda(["Sto preparando il cenone.", "Stavo dormendo.", "A Natale andiamo dai nonni.", "Il concerto sta per cominciare.", "Si mangia la colomba.", "Stanno sfilando i carri del Carnevale."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Sto leggendo. → Che cosa stai facendo?"),
          k.negativa(["Sto lavorando.", "Stavano ballando.", "Il film sta per finire.", "A Capodanno mangiamo le lenticchie.", "Lo sto preparando."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("In diretta dal Carnevale", "Una chica llama a su hermano desde el Carnaval de Venecia.", [
            { who: "Irene", text: "Pronto, Matteo? Sono a Venezia, al Carnevale! Non sai che cosa sto vedendo!" },
            { who: "Matteo", text: "Dimmi tutto!" },
            { who: "Irene", text: "Sono in piazza San Marco: ci sono centinaia di persone in maschera. Davanti a me una coppia sta ballando in costume del Settecento." },
            { who: "Matteo", text: "E tu sei in maschera?" },
            { who: "Irene", text: "Certo! Ho una maschera bianca e dorata. Tutti mi stanno facendo foto." },
            { who: "Matteo", text: "E che cosa stai mangiando? Sento che mastichi…" },
            { who: "Irene", text: "Le frittelle! Sono buonissime. Scusa, devo andare: il volo dell'Angelo sta per cominciare!" },
          ], ["Dov'è Irene?", "Che cosa sta facendo la coppia davanti a lei?", "Com'è la maschera di Irene?", "Che cosa sta mangiando?", "Perché deve chiudere la telefonata?"]),
          k.listen("Natale in famiglia", "Una madre explica a una amiga española la Navidad en su casa.", [
            { who: "Rosa", text: "Da noi, in Puglia, il momento più importante è la vigilia, il ventiquattro sera." },
            { who: "Rosa", text: "Facciamo il cenone di magro: niente carne, solo pesce. Di solito siamo in venti!" },
            { who: "Rosa", text: "Dopo cena giochiamo a tombola fino a mezzanotte, poi apriamo i regali." },
            { who: "Rosa", text: "Il venticinque c'è il pranzo con le lasagne e, alla fine, panettone o pandoro. In casa mia c'è una guerra: mio marito vuole il pandoro, io il panettone!" },
            { who: "Rosa", text: "E il sei gennaio arriva la Befana con le calze per i bambini." },
          ], ["Qual è il momento più importante del Natale per Rosa?", "Che cosa si mangia la vigilia? Quante persone sono?", "Che cosa fanno dopo cena?", "Che cosa si mangia il venticinque? Qual è la «guerra»?", "Che cosa succede il sei gennaio?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Un anno di feste", [
            "In Italia ogni città e ogni paese ha il suo santo patrono e il suo giorno di festa: a Milano Sant'Ambrogio (7 dicembre), a Napoli San Gennaro (19 settembre), a Roma i Santi Pietro e Paolo (29 giugno).",
            "Il Carnevale è la festa più colorata: a Venezia ci sono le maschere eleganti, a Viareggio i grandi carri di cartapesta che prendono in giro i politici. Si mangiano chiacchiere e frittelle.",
            "A Natale non possono mancare il presepe, che in alcune famiglie è più importante dell'albero, e il panettone. A Pasqua, invece, si mangia la colomba e i bambini aprono le uova di cioccolato con la sorpresa.",
            "A Capodanno molti mangiano lenticchie e cotechino: le lenticchie, che sembrano piccole monete, dovrebbero portare soldi nell'anno nuovo.",
            "E d'estate in tutta Italia ci sono le sagre, feste di paese dedicate a un prodotto: la sagra del tartufo, della porchetta, del pesce. Si mangia, si balla e si sta insieme fino a tardi.",
          ], ["Che cos'è il santo patrono? Chi è quello di Napoli?", "Che differenza c'è tra il Carnevale di Venezia e quello di Viareggio?", "Che cosa si mangia a Carnevale, a Natale e a Pasqua?", "Perché si mangiano le lenticchie a Capodanno?", "Che cos'è una sagra?", "Quale di queste feste ti piacerebbe vedere? Perché?"]),
          k.spagna("¿Cuáles son las fiestas más importantes de tu ciudad o de España? ¿Qué se come? Usa stare + gerundio para describir una foto de esa fiesta."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Descrivere una scena", hint: "Describir lo que pasa en una foto",
            text: ["Para describir una foto o una escena: «Nella foto si vede…», «In primo piano…» (en primer plano), «Sullo sfondo…» (al fondo), «A destra / a sinistra…», y stare + gerundio para las acciones: «Due bambini stanno giocando»."],
          },
          k.rispondi(["Come festeggi il Natale o la fine dell'anno?", "Qual è la festa più importante della tua città?", "Ti sei mai travestito o travestita a Carnevale? Da che cosa?", "Che cosa stavi facendo ieri alle nove di sera?", "Che cosa stai per fare dopo questa pagina?", "C'è una tradizione della tua famiglia che ti piace molto?"]),
          { kind: "speak", title: "Che cosa sta succedendo?", hint: "Imagina cada escena y descríbela con al menos tres acciones con stare + gerundio.", items: ["Una cena di Natale in famiglia", "Una piazza a mezzanotte di Capodanno", "Una sagra estiva in un paese", "La tua cucina adesso", "Un matrimonio italiano"] },
          {
            kind: "roleplay", title: "La videochiamata", hint: "Estás en una fiesta en Italia y haces una videollamada a un amigo. La IA hace del amigo y te hace preguntas. Es informal.",
            steps: ["Saluda y di dónde estás.", "Describe qué está pasando a tu alrededor (stare + gerundio).", "Cuéntale qué estás comiendo y bebiendo.", "Algo está a punto de pasar (stare per): explícalo.", "Despídete deprisa."],
          },
          {
            kind: "roleplay", title: "Le tradizioni dell'altro", hint: "Un compañero italiano te pregunta por las tradiciones españolas de Navidad. La IA hace del compañero. Es informal.",
            steps: ["Explica qué se hace en Nochebuena y en Nochevieja en España.", "Explica las uvas y los Reyes Magos.", "Pregúntale por las tradiciones italianas.", "Comparad qué os gusta más de cada país.", "Invítale a pasar una fiesta en España."],
          },
          { kind: "speak", title: "La mia festa", hint: "Describe durante un minuto y medio cómo celebras tu fiesta preferida, y luego cuenta qué estabas haciendo el año pasado ese mismo día.", items: ["Per me la festa più bella è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["¿Qué estás haciendo? — Estoy envolviendo los regalos.", "Cuando llegaste, estábamos cenando.", "La procesión está a punto de empezar.", "En Navidad comemos con toda la familia.", "Los niños se están disfrazando.", "¡Feliz Año Nuevo a todos!", "Estaba a punto de salir cuando empezó a llover.", "Lo estoy preparando ahora mismo."]),
          { kind: "write", title: "Una festa spagnola", hint: "Escribe un texto (10–12 frases) para un blog italiano sobre una fiesta española (Fallas, San Fermín, Semana Santa, la Feria…): cuándo es, qué se hace, qué se come y por qué merece la pena.", rows: 12, items: ["Se venite in Spagna a…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: feste", ["i fuochi d'artificio", "il presepe", "la vigilia di Natale", "i coriandoli", "Buone feste!", "il santo patrono"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Che cosa stai facendo?", "Stavamo cenando.", "Il film sta per cominciare.", "Sto preparando il cenone.", "Stavo per chiamarti."]),
          k.media([
            { type: "Película", title: "Vacanze di Natale (1983)", where: "Busca dónde verla en JustWatch", why: "La comedia navideña italiana por excelencia, en Cortina d'Ampezzo. Retrato divertido de los años 80." },
            { type: "Película", title: "Il primo Natale (Ficarra e Picone, 2019)", where: "Busca dónde verla en JustWatch", why: "Un ladrón y un cura viajan por error a la Palestina del año cero. Comedia siciliana muy popular." },
            { type: "YouTube", title: "Carnevale di Venezia / di Viareggio", where: "YouTube", why: "Busca vídeos del Carnaval: describe lo que ves con stare + gerundio." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Describe una escena de fiesta de la película o del vídeo: qué está pasando, qué están haciendo las personas.", items: ["Nella scena stanno…"] },
        ],
      },
    ],

    exam: k.exam(25, {
      parole: ["il santo patrono", "la processione", "i coriandoli", "il presepe", "il cenone", "la colomba", "Pasquetta", "la sagra", "brindare", "travestirsi"],
      contrario: ["Nochevieja", "los fuegos artificiales", "el disfraz", "el desfile", "el día festivo", "la costumbre"],
      verbiHint: "Completa: gerundio, presente con tu y imperfetto con noi.",
      verbiCols: ["gerundio", "presente (tu)", "imperfetto (noi)"],
      verbi: [["fare", "", "", ""], ["dire", "", "", ""], ["uscire", "", "", ""], ["bere", "", "", ""]],
      completaHint: "Completa con stare + gerundio, stare per + infinitivo o una preposición.",
      completa: ["Non posso rispondere, ___ (guidare).", "Quando sei arrivato, noi ___ (cenare).", "Presto, la sfilata ___ (cominciare)!", "Che cosa ___ (voi, dire)? Non capisco.", "Le maschere? Le ___ (preparare) adesso.", "Ero in ritardo: il treno ___ (partire).", "___ Natale andiamo dai nonni.", "Mentre ___ (io, guardare) i fuochi, ho perso il telefono."],
      trasformaHint: "Pasa las tres primeras a stare + gerundio. Las tres últimas, a stare per + infinitivo.",
      trasforma: ["Mangio il panettone.", "I bambini aprono i regali.", "Leggevo quando è arrivata Marta.", "La festa comincia tra un minuto.", "Il treno parte adesso adesso.", "Uscivo, ma è suonato il telefono."],
      leggi: {
        text: [
          "La Notte della Taranta è il festival di musica popolare più grande d'Italia. Si celebra ogni estate in Salento, in Puglia, e il concerto finale è a Melpignano, a fine agosto.",
          "La pizzica è una danza velocissima: secondo la tradizione, curava le donne morse dalla tarantola, un ragno. Le donne «tarantate» ballavano per giorni fino a guarire.",
          "Oggi al concerto finale arrivano più di centomila persone: tutti stanno ballando, anche chi non sa ballare.",
        ],
        questions: ["Che cos'è la Notte della Taranta? Dove si celebra?", "Che cos'è la pizzica?", "A che cosa serviva, secondo la tradizione?", "Quante persone ci sono al concerto finale?"],
      },
      ascolta: {
        script: [
          { who: "Giulia", text: "Mamma, sono io! Che cosa stai facendo?" },
          { who: "Mamma", text: "Sto facendo il presepe con tuo padre. E tu?" },
          { who: "Giulia", text: "Sto per partire: il treno parte tra dieci minuti. Arrivo stasera alle undici." },
          { who: "Mamma", text: "Bene! Stavamo proprio parlando di te: tuo fratello vuole venirti a prendere in stazione." },
        ],
        questions: ["Che cosa sta facendo la mamma? Con chi?", "Che cosa sta per fare Giulia?", "A che ora arriva?", "Di chi stavano parlando i genitori? Perché?"],
      },
      parla: ["Racconta come festeggi la tua festa preferita.", "Descrivi che cosa sta succedendo intorno a te in questo momento.", "Che cosa stavi facendo ieri a mezzogiorno?", "Spiega una tradizione spagnola a un italiano."],
      roleHint: "Es informal.",
      role: ["Llamas a un amigo durante una fiesta: describe lo que está pasando.", "Él te pregunta qué estás comiendo: responde.", "Algo está a punto de empezar: despídete."],
      dettato: ["Sto preparando il presepe.", "Stavano ballando.", "Sta per cominciare.", "Buon anno a tutti!", "Che cosa state facendo?", "Stavo per uscire."],
      traduci: ["¿Qué estás bebiendo?", "Estaba durmiendo cuando sonó el teléfono.", "El año nuevo está a punto de llegar.", "En Pascua se come la colomba.", "Los niños están lanzando confeti.", "Estábamos a punto de irnos."],
      scrivi: { hint: "Escribe un mensaje (60–80 palabras) a un amigo desde una fiesta italiana: dónde estás, qué está pasando, qué estás haciendo y qué está a punto de empezar.", start: "Ciao! Indovina dove sono…" },
    }),
  };
})();
