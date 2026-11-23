// Unità 63 · Italiano regionale — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[63] = {
    n: 63,
    level: "B2",
    title: "Italiano regionale",
    goal: "Riconoscere e capire i tratti più diffusi dell'italiano regionale (pronuncia, grammatica e lessico del Nord, del Centro e del Sud) e saperli ricondurre all'italiano standard.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Nell'unità 44 hai scoperto i dialetti. Qui studi una cosa diversa: l'italiano regionale, cioè l'italiano che si parla davvero nelle diverse regioni. Non è dialetto: è italiano, ma con una pronuncia, alcune strutture e alcune parole tipiche del luogo.",
              "Un milanese, un romano e un palermitano parlano tutti italiano, ma si riconoscono subito. Al livello B2 devi capirli tutti e sapere che cosa è standard e che cosa no.",
              "Non devi imitare questi tratti: devi riconoscerli, capirli e, se scrivi in modo formale, evitarli.",
            ],
          },
          {
            kind: "intro", title: "Tre frasi, tre regioni", hint: "Un'anticipazione",
            examples: [
              { it: "Ho visto la Giulia, che è andata al mare tre anni fa.", es: "Nord: articolo davanti al nome, passato prossimo" },
              { it: "Noi si va al mare, te che fai?", es: "Toscana: «noi si va», «te» soggetto" },
              { it: "Andai al mare ieri, tengo tre figli.", es: "Sud: passato remoto, «tenere» per «avere»" },
            ],
            text: ["Ogni frase è comprensibile, ma nessuna è completamente standard."],
          },
          { kind: "speak", title: "Accenti", hint: "Prima di cominciare: nella tua lingua ci sono forti differenze regionali? Riesci a capire da dove viene una persona quando parla?", items: ["Nella mia lingua…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Parole regionali", hint: "Scrivi l'equivalente in italiano standard (o una spiegazione).",
            placeholder: "italiano standard",
            items: [
              "l'anguria (Nord)", "il cocomero (Centro)", "il bocia (Veneto)", "il pischello (Roma)", "il guaglione (Napoli)",
              "il caruso (Sicilia)", "ganzo (Toscana)", "sfizioso (Sud)", "la michetta (Milano)", "la rosetta (Roma)",
              "il moroso (Nord)", "la cadrega (Nord)", "il cacio (Centro-Sud)", "la mappina (Napoli)", "ammazza! (Roma)",
              "mica (Nord)", "boh", "uè (Milano, Napoli)", "cioè", "il tocco (Toscana: l'una)",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "italiano standard", title: "Strutture regionali",
            hint: "Riscrivi in italiano standard.",
            items: ["Scendi la macchina dal garage. (Sud)", "Esci il cane. (Sud)", "Tengo fame. (Sud)", "Sto a casa. (Roma: «sono a casa»)", "La Maria è arrivata. (Nord)", "Noi si mangia alle otto. (Toscana)", "Te sei pronto? (Nord/Toscana)", "A me mi piace. (parlato ovunque)"],
          },
          { kind: "speak", title: "Dove siamo?", hint: "Leggi ogni frase ad alta voce e di' da quale zona potrebbe venire. Poi dilla in italiano standard.", items: ["Uè, ciao! Hai visto la Carla?", "Ammazza quanto sei alto!", "Noi si va al cinema, venite?", "Salutami a tua madre!", "Tengo un appuntamento alle cinque.", "È un film ganzo."] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Riconoscere un accento", hint: "I tratti di pronuncia più evidenti",
            text: [
              "Nord: la «s» tra vocali è sempre sonora (ca[z]a); le «e» e le «o» aperte e chiuse sono diverse dallo standard; poche doppie («fato» per «fatto», in alcune zone).",
              "Toscana: la «gorgia»: la «c» tra vocali diventa un'aspirazione: «la hasa» per «la casa», «la Hoha-Hola» per «la Coca-Cola».",
              "Roma: «r» per «l» davanti a consonante («er» per «il»), troncamenti («annamo», «magnà»), raddoppiamenti («Roma» → «a Rroma»).",
              "Sud: vocali finali indistinte (Napoli), raddoppiamento di molte consonanti («a ccasa»), «b» e «g» rafforzate («abbile»).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti in standard", hint: "Ripeti in italiano standard: cura le doppie e le vocali.", items: ["la casa, la cosa, la Coca-Cola", "fatto, tutto, cappuccino", "andiamo a mangiare", "il ragazzo è uscito", "a casa, a Roma, a me"] },
          { kind: "shadow", title: "Parole insidiose", hint: "Ripeti con la «e» e la «o» giuste dello standard.", items: ["bène, pèsca (frutto), pésca (sport)", "tèsta, véndere, pòrta", "cósa, sóle, nòve", "perché, caffè, ventitré"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Verbi regionali", hint: "Tempi e usi",
            text: [
              "Nord: il passato prossimo sostituisce quasi sempre il passato remoto, anche per fatti lontani: «Mio nonno è nato nel 1920».",
              "Sud (soprattutto Sicilia e Calabria): il passato remoto si usa anche per fatti recenti: «Stamattina andai al mercato».",
              "Sud: «tenere» al posto di «avere» (tengo fame), «stare» al posto di «essere» (sto stanco), verbi intransitivi usati come transitivi (scendi / esci / sali qualcosa).",
              "Toscana: «noi si» + terza persona singolare: «Noi si va», «noi si è mangiato».",
            ],
            table: { head: ["regionale", "standard"], rows: [["tengo fame", "ho fame"], ["sto stanco", "sono stanco"], ["scendi la valigia", "porta giù la valigia"], ["noi si va", "noi andiamo"], ["ieri andai (Sud)", "ieri sono andato"]] },
          },
          k.table("In italiano standard", [
            ["Tengo due fratelli.", "Ho due fratelli."],
            ["Sto preoccupato per l'esame.", ""],
            ["Grazie, sto bene così.", ""],
            ["Sali la spesa, per favore.", ""],
            ["Noi si parte domani.", ""],
            ["Stamattina mi svegliai tardi.", ""],
          ], "Riscrivi in italiano standard. (Una frase è già corretta: individuala.)", ["standard"]),
          {
            kind: "fill", title: "Standard o regionale?", hint: "Completa con il verbo in italiano standard.",
            items: [
              "Ieri sera ___ (andare, io) al cinema con Paola.", "Non ___ (avere) tempo, scusa.", "Puoi ___ (portare giù) il cane? Deve uscire.", "Domani noi ___ (partire) presto.", "Oggi ___ (essere, io) molto stanco.", "Mio nonno ___ (nascere) nel 1930 a Lecce.", "Stamattina ___ (svegliarsi, io) alle sei.", "Mi ___ (piacere) molto questa canzone.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Strutture regionali", hint: "Articoli, pronomi, ordine delle parole",
            text: [
              "Articolo davanti al nome proprio femminile (Nord, Toscana): «la Giulia». Nello standard formale si evita.",
              "«Te» al posto di «tu» come soggetto (Nord, Toscana): «Te vieni?». Standard: «Tu vieni?».",
              "Verbo alla fine della frase (Sicilia): «Montalbano sono» = «Sono Montalbano». «Che fai, studiando sei?».",
              "Doppio pronome («a me mi piace»): diffusissimo nel parlato di tutta Italia, ma da evitare nello scritto.",
              "«Mica» (Nord) per rafforzare la negazione: «Non è mica facile». Ormai comune anche nello standard informale.",
            ],
          },
          k.negativa(["Ho visto la Maria al supermercato.", "Te cosa ne pensi?", "A me mi sembra giusto.", "Medico sono, non mago!", "Noi si torna a casa.", "Uè, ma che fai?"], "Riscrivi ogni frase in italiano standard, adatto a uno scritto formale.", "standard"),
          {
            kind: "intro", title: "Quando l'italiano regionale va bene", hint: "Registro e contesto",
            text: ["Con gli amici, in famiglia, nei dialoghi di un romanzo o di un film, l'italiano regionale è normale e anzi dà colore. In un esame, in una mail di lavoro, in un testo formale, si usa lo standard. Alcuni tratti (come «mica» o il passato prossimo al posto del remoto) sono ormai accettati quasi ovunque."],
          },
          {
            kind: "fill", title: "Accettabile nello scritto formale?", hint: "Scrivi «sì» o «no» e, se è «no», correggi.",
            items: ["Non è mica semplice. → ___", "A me mi piace il mare. → ___", "Mio padre è nato nel 1950. → ___", "La Francesca è in ufficio. → ___", "Esci il cane, per favore. → ___", "Tengo freddo. → ___"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("In treno da Milano a Palermo", "Tre passeggeri di regioni diverse chiacchierano nello stesso scompartimento.", [
            { who: "Sig. Brambilla", text: "Uè, buongiorno! Anche voi fino a Palermo? Io vado a trovare la Luisa, mia figlia: si è trasferita là tre anni fa." },
            { who: "Sig.ra Ciampi", text: "No, noi si scende a Roma. Mi' marito lavora là. Lei di dov'è?" },
            { who: "Sig. Brambilla", text: "Di Milano, si sente, no? E il signore?" },
            { who: "Sig. Pirrone", text: "Di Palermo sono. Tornai ieri da Torino, oggi riparto: la mia famiglia mi aspetta." },
            { who: "Sig.ra Ciampi", text: "Ma lei tornò ieri e riparte già? Che vita!" },
            { who: "Sig. Pirrone", text: "Eh, signora, lavoro tengo dappertutto. Ma casa è casa." },
          ], ["Dove va il signor Brambilla? Perché?", "Dove scende la signora Ciampi?", "Di dov'è ciascun passeggero? Da che cosa lo capisci?", "Trova almeno quattro tratti regionali nel dialogo.", "Riscrivi le frasi del signor Pirrone in italiano standard."]),
          k.listen("Al bar a Roma", "Due amici romani al bar.", [
            { who: "Daniele", text: "Ammazza, che caldo! Annamo a prende un gelato?" },
            { who: "Valerio", text: "Daje! Ma prima pijo er caffè, che sto mezzo addormentato." },
            { who: "Daniele", text: "A me me sa che te serve più de un caffè!" },
            { who: "Valerio", text: "Ahò, nun me rompe, che stamattina so' stato in ufficio dalle sette!" },
          ], ["Che tempo fa?", "Che cosa propone Daniele?", "Che cosa vuole fare prima Valerio? Perché?", "Che cosa risponde Valerio alla battuta di Daniele?", "Riscrivi tutto il dialogo in italiano standard informale."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Montalbano sono", [
            "Andrea Camilleri, nato in provincia di Agrigento nel 1925 e morto nel 2019, è uno degli scrittori italiani più letti degli ultimi decenni. Il suo personaggio più famoso è il commissario Salvo Montalbano, protagonista di decine di romanzi e racconti ambientati nell'immaginaria città siciliana di Vigàta.",
            "La particolarità dei libri di Camilleri è la lingua: un impasto di italiano e siciliano che lo scrittore costruì con grande precisione. I personaggi dicono «taliare» per «guardare», «camurria» per «seccatura», «macari» per «anche»; e spesso mettono il verbo alla fine, come nella famosa frase con cui il commissario risponde al telefono: «Montalbano sono».",
            "All'inizio molti editori pensarono che nessun lettore fuori dalla Sicilia avrebbe capito quella lingua. Si sbagliavano: i romanzi vendettero milioni di copie e la serie televisiva della Rai, iniziata nel 1999, fu vista da milioni di spettatori in Italia e all'estero.",
            "Il successo di Camilleri dimostrò che l'italiano regionale non è un ostacolo, ma una ricchezza. Molti lettori del Nord hanno imparato parole siciliane senza accorgersene, e alcune sono entrate nell'uso comune.",
          ], ["Chi era Andrea Camilleri?", "Chi è Montalbano e dove vive?", "Che cosa ha di particolare la lingua dei suoi romanzi?", "Che cosa pensavano gli editori all'inizio? Avevano ragione?", "Che cosa dimostra il successo di Camilleri, secondo il testo?", "Riscrivi «Montalbano sono» in italiano standard e spiega la differenza."]),
          k.spagna("Conosci uno scrittore, un film o una serie del tuo paese che usa la lingua regionale? Come lo ha accolto il pubblico? Confrontalo con il caso di Camilleri."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di accenti senza offendere", hint: "Formule utili",
            text: ["«Si sente che sei di…», «Hai un accento… molto simpatico», «Da che parte d'Italia vieni?», «Non ho capito, puoi ripetere?», «Che cosa vuol dire…? Da voi si dice così?». Evita di imitare un accento davanti a chi lo ha: può sembrare una presa in giro."],
          },
          k.rispondi(["Quale accento italiano ti piace di più? Perché?", "Quale accento trovi più difficile da capire?", "Ci sono pregiudizi legati agli accenti nel tuo paese?", "Pensi che la televisione stia cancellando le differenze regionali?", "Quale parola regionale italiana conosci e ti piace?", "Che italiano vorresti parlare: neutro o con un accento di una regione?"]),
          { kind: "speak", title: "Traduttore", hint: "Leggi ogni frase regionale e «traducila» in italiano standard, ad alta voce.", items: ["Ahò, ma che stai a fa'?", "Uè, sei andato dalla Marta?", "Noi si mangia fuori stasera.", "Tengo una fame che non ti dico.", "Scendi le valigie, che partiamo.", "Studiando sei?"] },
          {
            kind: "roleplay", title: "Il turista confuso", hint: "Sei in vacanza in Italia. L'IA è un passante che usa molte espressioni regionali. Chiedi chiarimenti con cortesia.",
            steps: ["Chiedi un'indicazione stradale.", "Chiedi che cosa significa una parola che non capisci.", "Chiedi se quella parola si usa anche in altre regioni.", "Ripeti l'indicazione in italiano standard per verificare.", "Ringrazia e commenta l'accento con simpatia."],
          },
          {
            kind: "roleplay", title: "Il dibattito sugli accenti", hint: "L'IA sostiene che a scuola e in TV bisognerebbe parlare solo un italiano neutro. Tu difendi la ricchezza dell'italiano regionale.",
            steps: ["Presenta la tua posizione.", "Fai un esempio (Camilleri, un film, una serie).", "Ammetti un vantaggio dell'italiano neutro.", "Distingui tra contesti formali e informali.", "Concludi con una proposta equilibrata."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti delle differenze regionali nella tua lingua: pronuncia, parole e pregiudizi.", items: ["Nel mio paese, quando uno parla…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["La Chiara è uscita con il moroso.", "Te vieni con noi?", "Tengo sonno, vado a letto.", "Sali la spesa, per piacere.", "Noi si va al mare domenica.", "A me mi piace un sacco.", "Stamattina feci colazione al bar.", "Ammazza quanto costa!"], "Riscrivi ogni frase in italiano standard (registro neutro)."),
          { kind: "write", title: "Un dialogo e la sua traduzione", hint: "Scrivi un breve dialogo (120–150 parole) tra due persone di regioni diverse, con almeno sei tratti regionali. Poi riscrivilo in italiano standard (120–150 parole) e spiega in tre righe quali tratti hai cambiato.", rows: 22, items: ["Dialogo regionale:", "Versione standard:", "Che cosa ho cambiato:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: parole", ["il cocomero e l'anguria", "la michetta", "non è mica facile", "noi andiamo", "porta giù la valigia", "ho fame"], "Ascolta e scrivi in italiano standard."),
          k.dettato("Dettato: frasi", ["Si sente che sei di Milano.", "Da voi si dice così?", "Montalbano sono.", "L'italiano regionale non è dialetto.", "Nello scritto formale si usa lo standard."]),
          k.media([
            { type: "Serie", title: "Il commissario Montalbano (Rai, 1999–2021)", where: "raiplay.it", why: "Siciliano leggero, molto comprensibile: annota le parole regionali e cerca il loro significato." },
            { type: "Film", title: "Benvenuti al Sud (Luca Miniero, 2010)", where: "Cerca dove vederlo su JustWatch", why: "Un direttore delle poste lombardo trasferito in Campania: commedia sui pregiudizi tra Nord e Sud." },
            { type: "Serie", title: "L'amica geniale (Rai / HBO, 2018–2024)", where: "raiplay.it", why: "Dai romanzi di Elena Ferrante: napoletano e italiano si alternano, spesso con i sottotitoli." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Quali tratti regionali hai notato nella serie o nel film? Fai almeno tre esempi e «traducili» in standard.", items: ["Ho notato che…"] },
        ],
      },
    ],

    exam: k.exam(63, {
      parole: ["l'italiano regionale", "il cocomero", "il moroso", "mica", "ganzo", "la gorgia", "il guaglione", "sfizioso", "l'accento", "la michetta"],
      contrario: ["anguria → sinonimo (Centro)", "michetta → sinonimo (Roma)", "regionale → contrario", "formale → contrario", "pischello → standard", "tenere fame → standard"],
      verbiHint: "Riscrivi in italiano standard.",
      verbiCols: ["standard"],
      verbi: [["Tengo freddo.", ""], ["Sto stanca.", ""], ["Esci il cane.", ""], ["Noi si va.", ""], ["Ieri mangiai la pizza. (Sud, fatto recente)", ""], ["Te sei pronto?", ""]],
      completaHint: "Completa in italiano standard.",
      completa: ["Ieri sera ___ (uscire, noi) con gli amici.", "Non ___ (avere) voglia di studiare.", "Puoi ___ (portare su) la spesa?", "Domani noi ___ (andare) in montagna.", "Mio nonno ___ (nascere) nel 1940.", "___ vieni anche tu? (soggetto)", "Mi ___ (piacere) molto questa città.", "Oggi ___ (essere, io) preoccupato."],
      trasformaHint: "Riscrivi ogni frase in italiano standard formale.",
      trasforma: ["La Paola è andata via.", "A me mi sembra strano.", "Medico sono, non indovino!", "Sali le valigie, per favore.", "Noi si mangia alle otto.", "Ahò, annamo!"],
      leggi: {
        text: [
          "Secondo i linguisti, la televisione ha avuto un ruolo enorme nella diffusione dell'italiano: negli anni Cinquanta molti italiani parlavano quasi solo dialetto, e fu proprio la TV a portare in ogni casa una lingua comune.",
          "Oggi, però, si osserva un fenomeno nuovo: l'italiano regionale torna in televisione e sui social. Comici, influencer e serie TV usano accenti e parole locali per sembrare autentici.",
          "Alcuni temono che questo impoverisca lo standard; altri pensano che sia il segno di una lingua viva, sicura di sé e finalmente capace di accettare le proprie differenze.",
        ],
        questions: ["Che ruolo ha avuto la televisione negli anni Cinquanta?", "Quale fenomeno nuovo si osserva oggi?", "Perché comici e influencer usano l'italiano regionale?", "Quali sono le due opinioni su questo fenomeno?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Uè, Paolo! Hai visto la Silvia ieri?" },
          { who: "Paolo", text: "Sì, siamo andati al cinema. Un film ganzo, te l'assicuro!" },
          { who: "Anna", text: "Ganzo? Ma da quando parli toscano?" },
          { who: "Paolo", text: "Da quando esco con la Silvia, che è di Firenze! Ormai anche noi si dice così." },
        ],
        questions: ["Che cosa hanno fatto Paolo e Silvia?", "Che parola usa Paolo? Che cosa significa?", "Perché Anna è sorpresa?", "Da dove viene Silvia? Come lo capisci?"],
      },
      parla: ["Descrivi tre tratti dell'italiano regionale che conosci.", "Spiega la differenza tra dialetto e italiano regionale.", "Quando è accettabile l'italiano regionale?", "Racconta un'esperienza con un accento difficile da capire."],
      role: ["L'IA parla con molte espressioni regionali.", "Chiedi il significato delle parole che non capisci.", "Riassumi la conversazione in italiano standard."],
      dettato: ["non è mica facile", "noi andiamo", "porta giù la valigia", "ho fame", "si sente che sei di Roma", "l'italiano regionale"],
      traduci: ["Tengo due figli.", "La Marta è partita.", "Te cosa fai stasera?", "A me mi piace il cinema.", "Scendi la bici dal balcone.", "Noi si torna tardi."],
      scrivi: { hint: "Scrivi (180–220 parole) un testo sull'accento della tua lingua o dell'italiano che preferisci: come riconoscerlo, quali parole tipiche ha e che cosa pensano le persone di chi lo parla.", start: "L'accento che preferisco…" },
    }),
  };
})();
