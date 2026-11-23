// Unità 45 · Colloquio — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[45] = {
    n: 45,
    level: "B1",
    title: "Colloquio",
    goal: "Riferire quello che dicono, chiedono e ordinano gli altri (discorso indiretto al presente) e affrontare un colloquio di lavoro.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a riferire le parole degli altri: «Il direttore dice che il colloquio è alle dieci», «Mi chiede se ho esperienza», «Mi dice di portare il curriculum».",
              "Grammatica: il discorso indiretto con il verbo introduttivo al presente: come cambiano le persone, i possessivi e i pronomi, e come si riportano domande e ordini.",
              "Tema: il colloquio di lavoro in Italia, dalle domande più comuni alle risposte migliori.",
            ],
          },
          {
            kind: "intro", title: "Dice che…, chiede se…, dice di…", hint: "Un'anticipazione",
            text: ["Affermazione: «Sono stanco» → Dice che è stanco.", "Domanda sì/no: «Hai esperienza?» → Chiede se ho esperienza. Domanda aperta: «Dove abiti?» → Chiede dove abito.", "Ordine: «Porta il curriculum!» → Mi dice di portare il curriculum."],
            examples: [
              { it: "«Arrivo tra dieci minuti.» → Marco dice che arriva tra dieci minuti.", es: "affermazione" },
              { it: "«Parli inglese?» → Mi chiede se parlo inglese.", es: "domanda sì/no" },
              { it: "«Siediti!» → Mi dice di sedermi.", es: "ordine" },
            ],
          },
          { kind: "speak", title: "Il tuo ultimo colloquio", hint: "Prima di cominciare: ricordi il tuo ultimo colloquio di lavoro o di studio? Che cosa ti hanno chiesto?", items: ["Mi hanno chiesto…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il colloquio di lavoro", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il selezionatore", "il candidato", "la candidatura", "la posizione aperta", "i requisiti",
              "le competenze", "le soft skills", "il punto di forza", "il punto debole", "la retribuzione",
              "la RAL (retribuzione annua lorda)", "il periodo di prova", "il preavviso", "la referenza", "il percorso professionale",
              "lavorare in squadra", "la flessibilità", "la proattività", "essere all'altezza", "farsi valere",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "verbo", title: "Verbi per riferire",
            hint: "Scrivi un verbo per riferire adatto a ogni situazione (dire, chiedere, rispondere, spiegare, ordinare, consigliare, promettere, ammettere…).",
            items: ["«Ti aiuterò, te lo giuro.»", "«Hai ragione, ho sbagliato io.»", "«Che ore sono?»", "«Chiudi la porta!»", "«Al posto tuo, accetterei.»", "«Il motivo è semplice: non ho tempo.»", "«No, non vengo.»", "«Sì, d'accordo, vengo.»"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: chiede se → Il selezionatore chiede se sono disponibile a viaggiare.", items: ["dice che", "chiede se", "chiede dove", "mi dice di", "il punto di forza", "il periodo di prova", "lavorare in squadra", "farsi valere"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Domande dirette e indirette", hint: "L'intonazione cambia",
            text: [
              "La domanda diretta sale alla fine: «Hai esperienza? ↗». Quella indiretta è un'affermazione e scende: «Mi chiede se ho esperienza ↘».",
              "Nel discorso indiretto non ci sono virgolette né pause: la frase è unica e continua.",
              "Nei colloqui si parla in modo chiaro e misurato: evita di parlare troppo veloce e fai pause dopo i concetti importanti.",
            ],
          },
          { kind: "shadow", title: "Dal diretto all'indiretto", hint: "Ripeti le coppie facendo sentire la differenza di intonazione.", items: ["Dove lavori? / Mi chiede dove lavoro.", "Sei disponibile da subito? / Mi chiede se sono disponibile da subito.", "Mandami il curriculum! / Mi dice di mandargli il curriculum.", "Abbiamo già scelto. / Dicono che hanno già scelto."] },
          { kind: "shadow", title: "Frasi da colloquio", hint: "Ripeti con tono sicuro.", items: ["Mi chiamo Laura Díaz e lavoro nel marketing da cinque anni.", "Il mio punto di forza è la capacità di organizzare.", "Un mio punto debole? A volte sono troppo perfezionista.", "Sono disponibile da subito.", "Avete domande per me? — Sì: com'è organizzata la squadra?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Che cosa cambia nel discorso indiretto", hint: "Persone, possessivi, pronomi",
            text: [
              "Quando il verbo che introduce è al presente (dice, chiede, risponde), i tempi verbali NON cambiano.",
              "Cambiano invece le persone, i possessivi e i pronomi, secondo chi parla: «Sono stanco» (dice Luca) → Luca dice che è stanco. «Il mio capo mi ha chiamato» → Dice che il suo capo l'ha chiamato.",
              "Gli ordini all'imperativo diventano «di» + infinito: «Vieni!» → Mi dice di venire. «Non parlare!» → Mi dice di non parlare.",
            ],
            table: { head: ["diretto", "indiretto (dice / chiede)"], rows: [["«Io sono…»", "dice che lui è…"], ["«Il mio lavoro…»", "dice che il suo lavoro…"], ["«Vieni!»", "dice di venire"], ["«Vieni?»", "chiede se vengo"]] },
          },
          k.table("Verbi per riferire", [
            ["dire", "dice che", "ha detto che"],
            ["chiedere", "", ""],
            ["rispondere", "", ""],
            ["spiegare", "", ""],
            ["promettere", "", ""],
            ["ammettere", "", ""],
          ], "Completa: presente (lui) + che / se e passato prossimo (lui).", ["presente (lui)", "passato (lui)"]),
          {
            kind: "fill", title: "Discorso indiretto", hint: "Trasforma la frase tra virgolette nel discorso indiretto.",
            items: [
              "«Ho tre anni di esperienza.» → Il candidato dice che ___ tre anni di esperienza.", "«Il mio ultimo lavoro era a Torino.» → Dice che ___ ultimo lavoro era a Torino.", "«Parli tedesco?» → La selezionatrice mi chiede ___ tedesco.", "«Quando puoi cominciare?» → Mi chiede ___ cominciare.", "«Mandaci le referenze!» → Ci dice ___ le referenze.", "«Non arrivare in ritardo!» → Mi dice ___ in ritardo.", "«Vi chiameremo entro venerdì.» → Dicono che ci ___ entro venerdì.", "«Perché vuoi lavorare con noi?» → Mi chiedono ___ lavorare con loro.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Domande indirette", hint: "Se, dove, quando, perché…",
            text: [
              "Domande sì/no: «se» + verbo: «Mi chiede se ho la patente».",
              "Domande con parola interrogativa: la stessa parola + verbo: «Mi chiede dove abito / quanto guadagnavo / perché me ne sono andato».",
              "Nella lingua curata, dopo «chiedere» e «domandare» si può usare il congiuntivo: «Mi chiede dove io abiti». Nel parlato si usa quasi sempre l'indicativo.",
              "Formule di cortesia: «Le dispiace dirmi se…?», «Vorrei sapere se…», «Potrebbe dirmi quando…?».",
            ],
          },
          {
            kind: "fill", title: "Domande indirette", hint: "Trasforma ogni domanda in una domanda indiretta che comincia con «Vorrei sapere…».",
            items: ["«C'è un periodo di prova?» → Vorrei sapere ___ un periodo di prova.", "«Quanto dura il contratto?» → Vorrei sapere ___ il contratto.", "«Chi sarà il mio responsabile?» → Vorrei sapere ___ il mio responsabile.", "«Si può lavorare da casa?» → Vorrei sapere ___ lavorare da casa.", "«Quando avrò una risposta?» → Vorrei sapere ___ una risposta.", "«Perché la posizione è libera?» → Vorrei sapere ___ la posizione è libera."],
          },
          {
            kind: "intro", title: "Il colloquio: domande classiche", hint: "Che cosa ti chiederanno",
            text: ["«Mi parli di Lei», «Perché ha lasciato il lavoro precedente?», «Quali sono i suoi punti di forza e di debolezza?», «Dove si vede tra cinque anni?», «Quali sono le sue aspettative economiche?», «Ha domande per noi?».", "Consiglio: rispondi con esempi concreti («Per esempio, nel mio ultimo lavoro ho…») e prepara sempre almeno due domande da fare tu."],
          },
          k.negativa(["«Sono molto motivata», dice Anna.", "«Hai la macchina?», mi chiede.", "«Dove hai studiato?», mi domanda.", "«Rispondi entro lunedì!», mi dice.", "«Non ti preoccupare», mi dice il selezionatore.", "«Il mio stipendio è troppo basso», dice Marco."], "Trasforma ogni frase nel discorso indiretto con il verbo al presente.", "discorso indiretto"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il colloquio di Carla", "Una candidata in un colloquio per una casa editrice.", [
            { who: "Selezionatore", text: "Buongiorno, si accomodi. Allora, ci parli un po' di Lei." },
            { who: "Carla", text: "Ho trentadue anni, mi sono laureata in Lettere a Bologna e da sei anni lavoro come redattrice in una piccola casa editrice." },
            { who: "Selezionatore", text: "Perché vuole cambiare?" },
            { who: "Carla", text: "Perché la casa editrice è piccola e non ci sono possibilità di crescita. Voi pubblicate anche libri per ragazzi, che è la mia passione." },
            { who: "Selezionatore", text: "Qual è un suo punto debole?" },
            { who: "Carla", text: "A volte faccio fatica a dire di no e accetto troppi progetti. Sto imparando a organizzarmi meglio." },
            { who: "Selezionatore", text: "Bene. Il contratto prevede tre mesi di prova. Le faremo sapere entro due settimane." },
          ], ["Che cosa ha studiato Carla? Che lavoro fa?", "Perché vuole cambiare lavoro?", "Qual è il suo punto debole? Che cosa sta facendo per migliorare?", "Che cosa prevede il contratto?", "Quando avrà una risposta?"]),
          k.listen("Che cosa ti hanno chiesto?", "Carla racconta il colloquio a un'amica.", [
            { who: "Amica", text: "Allora, com'è andato? Che cosa ti hanno chiesto?" },
            { who: "Carla", text: "Il selezionatore mi chiede subito di parlare di me. Poi mi chiede perché voglio cambiare." },
            { who: "Carla", text: "Dico che nella mia casa editrice non posso crescere e che loro pubblicano libri per ragazzi, la mia passione." },
            { who: "Carla", text: "Poi mi chiede qual è il mio punto debole. Io gli dico che a volte non so dire di no." },
            { who: "Amica", text: "E alla fine?" },
            { who: "Carla", text: "Mi dice che c'è un periodo di prova di tre mesi e che mi faranno sapere entro due settimane." },
          ], ["Come racconta Carla il colloquio? Con quale tempo?", "Che cosa le chiede prima il selezionatore?", "Che cosa risponde Carla sul perché vuole cambiare?", "Come riferisce il punto debole?", "Che cosa le dice alla fine il selezionatore?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il colloquio all'italiana", [
            "I consulenti del lavoro dicono che in Italia il primo colloquio è spesso con le risorse umane, il secondo con il futuro responsabile. In alcune aziende ce n'è anche un terzo, con il direttore.",
            "Una domanda che sorprende molti stranieri è quella sulle «aspettative economiche». Gli esperti consigliano di non dire subito una cifra precisa, ma di chiedere qual è la retribuzione prevista per la posizione.",
            "In Italia si parla spesso di RAL, la retribuzione annua lorda: è lo stipendio di un anno prima delle tasse. Attenzione: molti contratti prevedono anche la tredicesima e, in alcuni settori, la quattordicesima mensilità.",
            "L'abbigliamento conta: anche se l'azienda è informale, al primo colloquio è meglio vestirsi in modo curato. E arrivare in ritardo, dicono i selezionatori, è l'errore che si perdona di meno.",
            "Infine, quasi sempre il selezionatore chiede se hai domande. Rispondere «no» dà l'impressione di poco interesse: è meglio chiedere com'è organizzato il lavoro o quali sono i prossimi passi.",
          ], ["Con chi si fa di solito il primo colloquio? E il secondo?", "Che cosa consigliano gli esperti sulle aspettative economiche?", "Che cos'è la RAL? Che cosa sono la tredicesima e la quattordicesima?", "Che cosa dicono i selezionatori dell'abbigliamento e del ritardo?", "Perché è importante fare domande alla fine?", "Come sono i colloqui nel tuo paese? Ci sono differenze?"]),
          k.spagna("Come funziona un colloquio di lavoro nel tuo paese? Riferisci consigli che ti hanno dato («Mi hanno detto di…», «Dicono che…»)."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Riferire con precisione", hint: "Verbi più precisi di «dire»",
            text: ["Invece di ripetere sempre «dice», usa verbi più precisi: «spiega che», «racconta che», «sostiene che», «ammette che», «promette che / di», «consiglia di», «ricorda che», «aggiunge che», «risponde che»."],
          },
          k.rispondi(["Che cosa ti chiedono di solito ai colloqui?", "Qual è la domanda più difficile che ti hanno fatto?", "Come rispondi alla domanda sul tuo punto debole?", "Che cosa diresti in un colloquio per un lavoro in Italia?", "Che consiglio daresti a chi fa il primo colloquio?", "Riferisci la conversazione più interessante che hai avuto questa settimana."]),
          { kind: "speak", title: "Il telefono senza fili", hint: "Riferisci ogni frase a un'altra persona, con il discorso indiretto e un verbo preciso.", items: ["«Domani non vengo in ufficio perché ho la febbre.» (Paolo)", "«Puoi mandarmi la presentazione entro le cinque?» (il capo)", "«Non dire niente a nessuno!» (Giulia)", "«Ho sbagliato i conti, scusate.» (il collega)", "«Dove avete messo le chiavi?» (la vicina)", "«Vi pagherò entro la fine del mese.» (il cliente)"] },
          {
            kind: "roleplay", title: "Il colloquio", hint: "Fai un colloquio per un lavoro in un'azienda italiana. L'IA fa la selezionatrice e fa domande difficili. Usa il «Lei».",
            steps: ["Presentati e parla del tuo percorso.", "Rispondi alla domanda sui punti di forza e di debolezza.", "Rispondi alla domanda sulle aspettative economiche.", "Fai almeno due domande indirette («Vorrei sapere se…»).", "Concludi il colloquio."],
          },
          {
            kind: "roleplay", title: "Il racconto del colloquio", hint: "Dopo il colloquio, racconta tutto a un amico (l'IA) usando il discorso indiretto.",
            steps: ["Racconta come è cominciato.", "Riferisci tre domande che ti hanno fatto.", "Riferisci le tue risposte.", "Riferisci che cosa ti hanno detto alla fine.", "Chiedi al tuo amico che cosa ne pensa."],
          },
          { kind: "speak", title: "Presentati", hint: "Presentati per due minuti come all'inizio di un colloquio per il lavoro dei tuoi sogni: formazione, esperienze, punti di forza e perché vuoi quel posto.", items: ["Mi chiamo… e…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["«Sono molto interessata alla posizione.» (Dice che…)", "«Quanto guadagnava prima?» (Mi chiede…)", "«Ha la patente?» (Mi chiede…)", "«Mi mandi due referenze.» (Mi dice di…)", "«Non si preoccupi.» (Mi dice di…)", "«Ho sbagliato a lasciare il lavoro.» (usa: ammette che)", "«Ti chiamerò domani, promesso.» (usa: promette di)", "«Quando comincio?» (Vorrei sapere…)"], "Trasforma ogni frase nel discorso indiretto come indicato."),
          { kind: "write", title: "La mail dopo il colloquio", hint: "Scrivi una mail (180–200 parole) a un'amica per raccontarle un colloquio (vero o immaginario): che cosa ti hanno chiesto, che cosa hai risposto, che cosa ti hanno detto alla fine. Usa il discorso indiretto in almeno otto frasi.", rows: 14, items: ["Cara Elena,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: riferire", ["dice che è stanco", "mi chiede se vengo", "mi dice di aspettare", "chiede dove abito", "risponde che non lo sa", "promette di chiamare"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il selezionatore mi chiede di parlare di me.", "Dicono che mi faranno sapere.", "Vorrei sapere se c'è un periodo di prova.", "Mi dice di non preoccuparmi.", "Mi chiede perché voglio cambiare."]),
          k.media([
            { type: "Film", title: "Mi piace lavorare – Mobbing (Francesca Comencini, 2004)", where: "Cerca dove vederlo su JustWatch", why: "Una impiegata affronta il mobbing in azienda: dialoghi sul lavoro molto realistici." },
            { type: "Serie", title: "Boris", where: "Disney+", why: "Se l'hai vista nell'unità 28, riguarda un episodio: i personaggi riferiscono di continuo ordini assurdi del regista." },
            { type: "YouTube", title: "Simulazione di colloquio in italiano", where: "YouTube", why: "Cerca «simulazione colloquio di lavoro»: domande vere e risposte commentate da esperti." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riferisci un dialogo del film o del video con il discorso indiretto: chi dice che cosa a chi.", items: ["Il capo dice alla protagonista che…"] },
        ],
      },
    ],

    exam: k.exam(45, {
      parole: ["il selezionatore", "la candidatura", "i requisiti", "le competenze", "il periodo di prova", "il preavviso", "la RAL", "la referenza", "farsi valere", "essere all'altezza"],
      contrario: ["«Ti aiuterò.» → verbo per riferire", "«Ho sbagliato io.» → verbo per riferire", "«Chiudi la porta!» → verbo per riferire", "«Al posto tuo accetterei.» → verbo per riferire", "«Che ore sono?» → verbo per riferire", "«No, non vengo.» → verbo per riferire"],
      verbiHint: "Completa: presente (lui) + che / se e passato prossimo (lui).",
      verbiCols: ["presente (lui)", "passato (lui)"],
      verbi: [["domandare", "", ""], ["aggiungere", "", ""], ["sostenere", "", ""], ["ricordare", "", ""]],
      completaHint: "Completa il discorso indiretto (verbo introduttivo al presente).",
      completa: ["«Sono disponibile da lunedì.» → Dice che ___ disponibile da lunedì.", "«Hai lavorato all'estero?» → Mi chiede ___ all'estero.", "«Dove vivi adesso?» → Mi chiede ___ adesso.", "«Firma il contratto!» → Mi dice ___ il contratto.", "«Il mio capo è severo.» → Dice che ___ capo è severo.", "«Non fumare in ufficio!» → Mi dice ___ in ufficio.", "«Vi chiameremo noi.» → Dicono che ci ___ loro.", "«Perché hai lasciato il lavoro?» → Mi chiede ___ il lavoro."],
      trasformaHint: "Trasforma nel discorso indiretto con un verbo preciso (dice, chiede, consiglia, promette…).",
      trasforma: ["«Sono molto contento del risultato», dice il direttore.", "«Hai esperienza nel settore?», mi chiede.", "«Mandateci il portfolio!», ci dice.", "«Al posto tuo chiederei di più», mi dice un collega.", "«Ti aiuterò a preparare il colloquio», mi dice Paola.", "«Quanto guadagnerò?», chiede il candidato."],
      leggi: {
        text: [
          "Annuncio: Azienda di moda di Firenze cerca assistente commerciale. Requisiti: laurea in economia o lingue, inglese fluente, disponibilità a viaggiare.",
          "Si offre contratto di un anno con possibilità di trasformazione a tempo indeterminato, periodo di prova di tre mesi, RAL tra 26.000 e 30.000 euro.",
          "I candidati interessati devono inviare curriculum e lettera di presentazione entro il 30 aprile. L'azienda dice che contatterà solo i candidati selezionati.",
        ],
        questions: ["Che cosa cerca l'azienda?", "Quali sono i requisiti?", "Che contratto offre? Quanto si guadagna?", "Che cosa bisogna fare? Chi verrà contattato?"],
      },
      ascolta: {
        script: [
          { who: "Luca", text: "Allora, com'è andato il colloquio?" },
          { who: "Sofia", text: "Bene! La direttrice mi chiede se sono disposta a trasferirmi a Milano." },
          { who: "Luca", text: "E tu?" },
          { who: "Sofia", text: "Le dico che per me non è un problema. Poi mi spiega che il primo mese c'è una formazione e mi dice di portare i certificati di inglese al prossimo incontro." },
        ],
        questions: ["Che cosa chiede la direttrice a Sofia?", "Che cosa risponde Sofia?", "Che cosa spiega la direttrice sul primo mese?", "Che cosa deve portare Sofia?"],
      },
      parla: ["Racconta un colloquio che hai fatto, con il discorso indiretto.", "Rispondi: «Qual è il suo punto debole?»", "Fai tre domande indirette a un selezionatore («Vorrei sapere…»).", "Riferisci una conversazione di oggi con un amico o un collega."],
      role: ["L'IA è un selezionatore: rispondi alle sue domande.", "Fai tu due domande indirette.", "Alla fine riassumi all'IA che cosa ti ha detto, con il discorso indiretto."],
      dettato: ["Dice che è disponibile.", "Mi chiede se ho la patente.", "Mi dice di aspettare.", "Vorrei sapere quando comincio.", "Promette di chiamarmi.", "il periodo di prova"],
      traduci: ["«Ho molta esperienza.» (Dice che…)", "«Parli francese?» (Mi chiede…)", "«Portami il contratto!» (Mi dice di…)", "«Quanto dura il periodo di prova?» (Vorrei sapere…)", "«Ho sbagliato tutto.» (usa: ammette che)", "«Non ti preoccupare.» (Mi dice di…)"],
      scrivi: { hint: "Scrivi una mail di candidatura (150–180 parole) per l'annuncio della parte 6. Includi almeno due domande indirette sull'offerta.", start: "Gentile responsabile delle risorse umane," },
    }),
  };
})();
