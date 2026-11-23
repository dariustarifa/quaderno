// Unità 53 · Cibo e identità — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[53] = {
    n: 53,
    level: "B1",
    title: "Cibo e identità",
    goal: "Parlare del cibo come cultura e identità, descrivere prodotti e tradizioni con i relativi avanzati (il cui, ciò che, chi, il che).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare del cibo non solo come nutrimento, ma come identità: prodotti tipici, marchi di qualità, tradizioni familiari e movimenti come Slow Food.",
              "Grammatica: i relativi avanzati: «il cui» (la città il cui nome…), «ciò che / quello che», «chi» (= la persona che), «il che» (= e questo) e «dove».",
              "Dopo l'unità 33 sai usare «che» e «cui»: ora completi il quadro.",
            ],
          },
          {
            kind: "intro", title: "Il formaggio il cui nome…", hint: "Un'anticipazione",
            text: ["«Il cui» indica possesso: «Il Parmigiano, il cui nome viene da Parma, è prodotto anche a Reggio Emilia» (= il nome del Parmigiano).", "«Ciò che» = la cosa che: «Ciò che mangiamo dice chi siamo». «Chi» = la persona che: «Chi cucina non lava i piatti»."],
            examples: [
              { it: "È una ricetta il cui segreto è la pazienza.", es: "il segreto della ricetta" },
              { it: "Ciò che mi manca di più dell'Italia è il pane.", es: "ciò che = la cosa che" },
              { it: "Ha mangiato tre piatti di pasta, il che mi ha sorpreso.", es: "il che = e questo fatto" },
            ],
          },
          { kind: "speak", title: "Il piatto della tua identità", hint: "Prima di cominciare: quale piatto rappresenta meglio la tua famiglia o la tua regione? Perché?", items: ["Il piatto che mi rappresenta è…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Cibo e cultura", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il prodotto tipico", "la DOP (Denominazione di Origine Protetta)", "l'IGP", "la filiera corta", "il km zero",
              "la stagionatura", "il presidio Slow Food", "la ricetta tradizionale", "il piatto povero", "la cucina casalinga",
              "il produttore", "l'artigiano", "la contraffazione", "l'Italian sounding", "l'eccellenza",
              "il patrimonio gastronomico", "la sagra", "la dieta mediterranea", "il comfort food", "il ricettario",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "regione", title: "Di dove sono?",
            hint: "Scrivi la regione d'origine di ogni prodotto o piatto (cerca se non lo sai).",
            items: ["il Parmigiano Reggiano", "la mozzarella di bufala campana", "il pesto", "i cannoli", "il prosciutto di San Daniele", "la bistecca alla fiorentina", "le orecchiette", "il tartufo bianco d'Alba"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: il cui → Il Parmigiano, la cui stagionatura dura anni, è famosissimo.", items: ["il cui", "la cui", "ciò che", "chi", "il che", "dove", "il prodotto tipico", "la filiera corta"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "I nomi dei prodotti", hint: "Pronunciare bene il cibo italiano",
            text: [
              "Molti stranieri pronunciano male i nomi dei prodotti italiani: «bruschetta» (brus-kèt-ta), «gnocchi» (gnòk-ki), «prosciutto» (pro-shùt-to), «tagliatelle», «mascarpone» (con la «e» finale).",
              "Gli italiani sono molto sensibili a questi errori: pronunciare bene è un segno di rispetto per la loro cultura.",
              "«Il cui» si dice legato: «ilcùi», «lacùi»: l'articolo concorda con la cosa posseduta, non con il possessore.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti i nomi con la pronuncia giusta.", items: ["bruschetta, prosciutto, mascarpone", "gnocchi, tagliatelle, orecchiette", "Parmigiano Reggiano, mozzarella di bufala", "cannoli, sfogliatelle, arancini"] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti legando l'articolo e «cui».", items: ["Il Parmigiano, il cui nome viene da Parma, è antichissimo.", "È una nonna la cui cucina è famosa in tutto il paese.", "Ciò che conta è la qualità degli ingredienti.", "Chi mangia bene vive meglio.", "Ha portato i dolci della sua città, il che ci ha fatto molto piacere."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il cui", hint: "Il relativo di possesso",
            text: [
              "«Il cui, la cui, i cui, le cui» significano «del quale / della quale». L'articolo concorda con la cosa posseduta, non con il possessore.",
              "«La regione il cui vino è più famoso» (il vino), «Il ristorante la cui chef è giapponese» (la chef), «Il paese le cui feste sono antiche» (le feste).",
              "Si usa soprattutto nella lingua scritta e nel parlato curato.",
            ],
            table: { head: ["possessore", "cosa posseduta"], rows: [["il formaggio…", "il cui sapore"], ["la ricetta…", "il cui segreto"], ["il ristorante…", "la cui cucina"], ["la città…", "i cui mercati"]] },
          },
          k.table("Unisci con il cui", [
            ["un formaggio + il suo nome viene da una città", "un formaggio il cui nome viene da una città"],
            ["una chef + i suoi piatti sono famosi", ""],
            ["un paese + la sua sagra è in agosto", ""],
            ["un vino + le sue uve sono rare", ""],
            ["una nonna + il suo ragù è leggendario", ""],
          ], "Unisci le due parti con «il cui / la cui / i cui / le cui».", ["con il cui"]),
          {
            kind: "fill", title: "Il cui, la cui, i cui, le cui", hint: "Completa con la forma giusta di «il cui».",
            items: [
              "Bologna, ___ cucina è famosa nel mondo, si chiama «la Grassa».", "Il pesto, ___ ingredienti sono pochi e semplici, nasce in Liguria.", "Ho conosciuto un pastore ___ formaggi vincono premi ogni anno.", "È un ristorante ___ chef è una donna di venticinque anni.", "La pizza napoletana, ___ arte è patrimonio UNESCO, ha regole precise.", "Alba è una città ___ tartufi costano moltissimo.", "Mi ha dato una ricetta ___ origine è un mistero.", "È un piatto povero ___ storia è legata ai contadini.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ciò che, chi, il che, dove", hint: "Altri relativi",
            text: [
              "«Ciò che / quello che» = la cosa che: «Ciò che mangiamo influenza la salute».",
              "«Chi» = la persona che (sempre singolare): «Chi arriva tardi trova la pasta fredda». Anche nei proverbi: «Chi va piano va sano e va lontano».",
              "«Il che» si riferisce a tutta la frase precedente: «Ha cucinato per venti persone, il che non è facile».",
              "«Dove» per i luoghi = in cui: «Il mercato dove compro la frutta».",
            ],
            table: { head: ["relativo", "significato"], rows: [["ciò che / quello che", "la cosa che"], ["chi", "la persona che"], ["il che", "e questo fatto"], ["dove", "in cui (luogo)"]] },
          },
          {
            kind: "fill", title: "Quale relativo?", hint: "Completa con ciò che, chi, il che, dove, il cui o che.",
            items: ["___ non ha mai assaggiato i cannoli non conosce la Sicilia.", "Non ho capito ___ hai detto sul vino.", "Ha finito tutta la torta da sola, ___ mi sembra esagerato.", "Questo è il mercato ___ mia nonna faceva la spesa.", "Il piatto ___ preferisco è la parmigiana.", "È un formaggio ___ stagionatura dura tre anni.", "___ mi piace di più della cucina italiana è la semplicità.", "___ cucina non lava i piatti: è la regola di casa."],
          },
          {
            kind: "intro", title: "Proverbi sul cibo", hint: "Proverbi con «chi»",
            text: ["«Chi mangia solo crepa solo» (bisogna condividere). «A tavola non si invecchia» (a tavola il tempo non passa). «L'appetito vien mangiando» (il desiderio cresce facendo). «Chi va a letto senza cena tutta la notte si dimena»."],
          },
          k.negativa(["La persona che cucina sceglie il menù. (chi)", "Mi interessa la cosa che dici. (ciò che)", "Ho mangiato cinque arancini. Questo fatto è incredibile. (il che)", "Questa è la trattoria. Ho cenato lì ieri. (dove)", "Il vino è eccellente. Le sue uve vengono dalle colline. (le cui)", "Ho conosciuto uno chef. Il suo ristorante ha tre stelle. (il cui)"], "Riscrivi o unisci le frasi con il relativo indicato.", "con il relativo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il caseificio", "Una turista visita un caseificio di Parmigiano Reggiano.", [
            { who: "Casaro", text: "Benvenuti. Questo è un caseificio la cui storia comincia nel 1932, con mio nonno." },
            { who: "Turista", text: "Come si fa il Parmigiano?" },
            { who: "Casaro", text: "Con tre ingredienti: latte, sale e caglio. Nient'altro. Ciò che lo rende speciale è il tempo: almeno dodici mesi di stagionatura, spesso ventiquattro o trenta." },
            { who: "Turista", text: "E chi controlla la qualità?" },
            { who: "Casaro", text: "Un consorzio. Dopo dodici mesi un esperto batte ogni forma con un martelletto e ascolta il suono. Chi non supera il controllo non può chiamarsi Parmigiano Reggiano." },
            { who: "Turista", text: "Incredibile! E all'estero?" },
            { who: "Casaro", text: "All'estero vendono molte imitazioni con nomi simili, il che danneggia tutti i produttori veri." },
          ], ["Da quando esiste il caseificio?", "Quali sono gli ingredienti del Parmigiano?", "Che cosa lo rende speciale?", "Come si controlla la qualità?", "Qual è il problema all'estero?"]),
          k.listen("La cucina della nonna", "Una ragazza italo-argentina parla del cibo e della sua identità.", [
            { who: "Lucia", text: "Mia nonna è partita dalla Calabria nel 1955 per Buenos Aires. Ciò che ha portato con sé, oltre alla valigia, erano le sue ricette." },
            { who: "Lucia", text: "La domenica a casa sua si mangiavano i maccheroni fatti a mano, il che in Argentina era una cosa rara." },
            { who: "Lucia", text: "Quando sono venuta a studiare in Italia, ho cercato il paese dove era nata. Una signora la cui famiglia conosceva la nostra mi ha invitata a pranzo." },
            { who: "Lucia", text: "Ha preparato gli stessi maccheroni della nonna. Mi sono messa a piangere: era il sapore di casa mia, dall'altra parte del mondo." },
          ], ["Quando e dove è partita la nonna di Lucia?", "Che cosa ha portato con sé?", "Che cosa si mangiava la domenica?", "Che cosa è successo nel paese della nonna?", "Perché Lucia si è messa a piangere?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Slow Food", [
            "Nel 1986, a Roma, in piazza di Spagna, aprì un grande fast food. Molti italiani protestarono: per loro, il cibo veloce e uguale in tutto il mondo era il contrario di ciò che rappresenta la cucina italiana.",
            "In quegli anni Carlo Petrini, un giornalista di Bra, in Piemonte, fondò un movimento il cui nome era una risposta ironica: Slow Food, il cibo lento.",
            "L'idea è semplice: il cibo deve essere «buono, pulito e giusto». Buono per chi lo mangia, pulito per l'ambiente e giusto per chi lo produce, che deve essere pagato in modo corretto.",
            "Slow Food protegge i prodotti a rischio di scomparire con i «presìdi»: un formaggio di montagna, una varietà di fagioli, un pane antico. Ogni due anni a Torino organizza Terra Madre, dove si incontrano contadini di tutto il mondo.",
            "Oggi il movimento è presente in più di cento paesi, il che dimostra che l'idea di Petrini non riguardava solo l'Italia: chi difende il cibo locale difende anche una cultura e un'identità.",
          ], ["Che cosa successe nel 1986 a Roma? Come reagirono molti italiani?", "Chi fondò Slow Food? Perché questo nome?", "Che cosa significa «buono, pulito e giusto»?", "Che cosa sono i presìdi?", "Che cos'è Terra Madre?", "Sei d'accordo con l'idea che il cibo sia identità? Perché?"]),
          k.spagna("Quali prodotti o piatti rappresentano l'identità del tuo paese o della tua regione? Ci sono movimenti per proteggerli? Usa almeno quattro relativi avanzati."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Difendere una tradizione", hint: "Formule utili",
            text: ["«Ciò che rende speciale questo piatto è…», «È un prodotto la cui storia…», «Chi lo prova una volta…», «Non è solo cibo: è…», «Fa parte di ciò che siamo»."],
          },
          k.rispondi(["Qual è il piatto della tua infanzia che ti manca di più?", "Che cosa pensi delle imitazioni dei prodotti italiani all'estero?", "Compri prodotti a km zero? Perché?", "Che cosa rende una cucina «identitaria»?", "Ci sono piatti stranieri che sono diventati parte della tua cultura?", "Che cosa porteresti con te se dovessi emigrare? Quale ricetta?"]),
          { kind: "speak", title: "Definizioni gastronomiche", hint: "Definisci ogni cosa con un relativo avanzato (il cui, ciò che, chi, dove).", items: ["un buongustaio", "una trattoria", "un prodotto DOP", "la dieta mediterranea", "un piatto povero", "un mercato contadino"] },
          {
            kind: "roleplay", title: "Il produttore", hint: "Intervisti un produttore di olio (l'IA) per un blog di cucina.",
            steps: ["Chiedigli la storia della sua azienda.", "Chiedigli che cosa rende speciale il suo olio.", "Chiedigli quali sono le difficoltà di oggi.", "Chiedigli che cosa pensa delle imitazioni.", "Ringrazia e riassumi l'intervista."],
          },
          {
            kind: "roleplay", title: "Il menù tipico", hint: "Organizzi una cena per amici italiani con piatti del tuo paese. Un amico (l'IA) ti fa domande su ogni piatto.",
            steps: ["Presenta il menù.", "Spiega l'origine di ogni piatto (il cui, dove…).", "Rispondi alle sue domande sugli ingredienti.", "Racconta un ricordo legato a un piatto.", "Invita l'amico a cucinare con te."],
          },
          { kind: "speak", title: "Cibo e identità", hint: "Parla per due minuti di un piatto o di un prodotto che rappresenta la tua identità: storia, ingredienti, ricordi, perché è importante per te.", items: ["Il piatto di cui voglio parlare…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["La città è famosa. I suoi mercati sono antichi. (i cui)", "La persona che arriva per ultima lava i piatti. (chi)", "La cosa che preferisco è il pane caldo. (ciò che)", "Ha cucinato per trenta persone e questo è incredibile. (il che)", "Questo è il paese. Sono nati qui i miei nonni. (dove)", "Ho conosciuto una pasticcera. I suoi dolci sono famosi. (i cui)", "Mangiare insieme è importante. (ciò che conta è…)", "Tutte le persone che amano la cucina devono visitare Bologna. (chi)"], "Riscrivi ogni frase con il relativo indicato."),
          { kind: "write", title: "Un prodotto da proteggere", hint: "Scrivi un articolo (220–250 parole) per un blog su un prodotto tipico (italiano o del tuo paese) che secondo te va protetto: origine, produzione, persone, pericoli. Usa almeno sei relativi avanzati.", rows: 18, items: ["Un prodotto il cui futuro…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: relativi", ["il cui nome", "la cui storia", "ciò che conta", "chi cucina", "il che mi sorprende", "dove sono nato"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il Parmigiano ha solo tre ingredienti.", "Chi mangia solo crepa solo.", "Ciò che mi manca è il pane di casa.", "È un presidio Slow Food.", "A tavola non si invecchia."]),
          k.media([
            { type: "Programma", title: "Gambero Rosso / Linea Verde", where: "RaiPlay, YouTube", why: "Programmi sui prodotti tipici e sui produttori italiani, regione per regione." },
            { type: "Film", title: "Pranzo di ferragosto (Gianni Di Gregorio, 2008)", where: "Cerca dove vederlo su JustWatch", why: "Se non l'hai visto: cibo, famiglia e anziane signore romane." },
            { type: "Libro", title: "La scienza in cucina e l'arte di mangiar bene, Pellegrino Artusi", where: "Biblioteca, online", why: "Il ricettario del 1891 che unì la cucina d'Italia: leggi una ricetta, è scritta con molta ironia." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Presenta un prodotto o una ricetta che hai scoperto, con almeno tre relativi avanzati.", items: ["Ho scoperto un prodotto il cui…"] },
        ],
      },
    ],

    exam: k.exam(53, {
      parole: ["la DOP", "la filiera corta", "la stagionatura", "il presidio Slow Food", "il piatto povero", "la contraffazione", "l'Italian sounding", "il patrimonio gastronomico", "il casaro", "il buongustaio"],
      contrario: ["il pesto → regione", "i cannoli → regione", "le orecchiette → regione", "il tartufo d'Alba → regione", "veloce → contrario", "industriale → contrario"],
      verbiHint: "Unisci le due parti con «il cui / la cui / i cui / le cui».",
      verbiCols: ["con il cui"],
      verbi: [["un vino + il suo profumo è unico", ""], ["una città + le sue piazze sono belle", ""], ["uno chef + la sua cucina è creativa", ""], ["un formaggio + i suoi produttori sono pochi", ""]],
      completaHint: "Completa con il cui (nella forma giusta), ciò che, chi, il che, dove o che.",
      completa: ["Napoli, ___ pizza è famosa nel mondo, ha una lunga tradizione.", "___ non ama il cibo non può capire gli italiani.", "Non mi piace ___ hai cucinato.", "Ha mangiato da solo tutta la pizza, ___ non mi stupisce.", "È la trattoria ___ abbiamo festeggiato il compleanno.", "Ho conosciuto un produttore ___ olio è eccezionale.", "___ conta è la qualità, non la quantità.", "Il piatto ___ ordino sempre è la carbonara."],
      trasformaHint: "Unisci o riscrivi con il relativo indicato.",
      trasforma: ["La ricetta è antica. Il suo segreto è il tempo. (il cui)", "La persona che cucina decide. (chi)", "La cosa che amo è il mercato. (ciò che)", "Ha ordinato tre dolci. Questo fatto mi ha fatto ridere. (il che)", "Questo è il caseificio. Lavoro qui. (dove)", "Ho visitato una cantina. I suoi vini sono premiati. (i cui)"],
      leggi: {
        text: [
          "La pizza napoletana, la cui arte è stata riconosciuta dall'UNESCO nel 2017 come patrimonio immateriale dell'umanità, ha regole precise.",
          "L'impasto si fa con farina, acqua, sale e lievito, e deve riposare molte ore. Ciò che la rende unica è la cottura: pochi secondi nel forno a legna, a più di quattrocento gradi.",
          "Chi visita Napoli trova pizzerie storiche dove si fa la fila anche per un'ora, il che dimostra quanto questo piatto sia amato.",
        ],
        questions: ["Che cosa ha riconosciuto l'UNESCO? Quando?", "Quali sono gli ingredienti dell'impasto?", "Che cosa rende unica la pizza napoletana?", "Che cosa succede nelle pizzerie storiche?"],
      },
      ascolta: {
        script: [
          { who: "Guida", text: "Benvenuti a Modena, la città il cui aceto balsamico è famoso in tutto il mondo." },
          { who: "Guida", text: "Ciò che vedete sono botti di legni diversi: ciliegio, castagno, rovere. L'aceto passa da una botte all'altra per almeno dodici anni." },
          { who: "Guida", text: "Chi compra il vero aceto tradizionale riconosce la bottiglia speciale e il marchio DOP. Quello dei supermercati, invece, è spesso molto diverso." },
        ],
        questions: ["Per che cosa è famosa Modena?", "Che cosa sono le botti? Di che legno sono?", "Quanto tempo invecchia l'aceto?", "Come si riconosce il vero aceto tradizionale?"],
      },
      parla: ["Presenta un prodotto tipico della tua regione con almeno tre relativi.", "Che cosa pensi di Slow Food?", "Racconta un piatto legato alla tua famiglia.", "Definisci: un buongustaio, una trattoria, un piatto povero."],
      role: ["L'IA è un turista che vuole comprare prodotti tipici: consigliagli che cosa comprare.", "Spiega l'origine di ogni prodotto con «il cui» o «dove».", "Mettilo in guardia contro le imitazioni."],
      dettato: ["il cui sapore", "la cui origine", "ciò che preferisco", "chi arriva tardi", "il che è strano", "il mercato dove compro"],
      traduci: ["Il vino è ottimo. Le sue uve sono rare. (le cui)", "Le persone che amano il formaggio devono andare a Parma. (chi)", "La cosa che mi manca è il mare. (ciò che)", "Ha mangiato quattro gelati, e questo è troppo. (il che)", "Questo è il paese. Ci sono nato. (dove)", "Ho conosciuto un cuoco. Il suo ristorante è famoso. (il cui)"],
      scrivi: { hint: "Scrivi (150–180 parole) di un piatto o di un prodotto che consideri parte della tua identità, usando almeno cinque relativi avanzati.", start: "Il piatto che mi rappresenta…" },
    }),
  };
})();
