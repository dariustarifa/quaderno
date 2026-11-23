// Unità 46 · Riferire — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[46] = {
    n: 46,
    level: "B1",
    title: "Riferire",
    goal: "Riferire conversazioni passate, riunioni e interviste, con i cambiamenti di tempo e di riferimenti del discorso indiretto al passato.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a raccontare quello che qualcuno ha detto in passato: «Ieri Marco mi ha detto che era stanco e che sarebbe andato a letto presto».",
              "Grammatica: il discorso indiretto con il verbo introduttivo al passato, con i cambi dei tempi (presente → imperfetto, futuro → condizionale passato…) e delle espressioni di tempo e di luogo (oggi → quel giorno, qui → lì).",
              "Genere testuale: il verbale di una riunione, un testo in cui tutto è riferito.",
            ],
          },
          {
            kind: "intro", title: "Mi ha detto che sarebbe venuto", hint: "Un'anticipazione",
            text: ["Se il verbo che introduce è al passato (ha detto, diceva, disse), il tempo del discorso riferito «fa un passo indietro».", "«Sono stanco» → Ha detto che era stanco. «Verrò domani» → Ha detto che sarebbe venuto il giorno dopo."],
            examples: [
              { it: "«Abito a Roma.» → Mi ha detto che abitava a Roma.", es: "presente → imperfetto" },
              { it: "«Ho perso il treno.» → Ha raccontato che aveva perso il treno.", es: "passato prossimo → trapassato" },
              { it: "«Ti chiamerò.» → Mi ha promesso che mi avrebbe chiamato.", es: "futuro → condizionale passato" },
            ],
          },
          { kind: "speak", title: "Che cosa ti hanno detto?", hint: "Prima di cominciare: racconta una cosa interessante che ti ha detto qualcuno questa settimana.", items: ["Questa settimana un amico mi ha detto che…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Riunioni e conversazioni", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il verbale", "l'ordine del giorno", "i presenti", "l'assente", "la proposta",
              "approvare", "respingere", "rinviare", "sottolineare", "precisare",
              "aggiungere", "ribadire", "obiettare", "proporre", "concludere",
              "il punto della situazione", "la scadenza", "il resoconto", "testuali parole", "in sintesi",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "nel discorso indiretto al passato", title: "Tempo e luogo",
            hint: "Scrivi come cambia ogni espressione nel discorso indiretto al passato.",
            items: ["oggi", "ieri", "domani", "adesso", "qui", "questo", "la settimana prossima", "fra due giorni"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: ha precisato che → Il direttore ha precisato che la riunione sarebbe durata un'ora.", items: ["ha detto che", "ha chiesto se", "ha precisato che", "ha proposto di", "ha ribadito che", "il giorno dopo", "quel giorno", "in sintesi"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare una conversazione", hint: "Ritmo e varietà",
            text: [
              "Quando riferisci una lunga conversazione, varia i verbi (ha detto, ha risposto, ha aggiunto, ha ammesso) per non annoiare chi ascolta.",
              "Nel parlato spontaneo molti italiani mescolano discorso diretto e indiretto: «E lui mi fa: ma sei sicuro?». È normale, ma nei testi scritti è meglio essere coerenti.",
              "Le frasi del discorso indiretto sono lunghe: respira prima di «che» e non accelerare alla fine.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti le frasi lunghe con calma.", items: ["Mi ha detto che era stanco e che sarebbe andato a letto presto.", "Le ho chiesto se voleva venire con noi il giorno dopo.", "Ha ammesso che non aveva letto il documento.", "Ci ha promesso che avrebbe sistemato tutto entro quel venerdì."] },
          { kind: "shadow", title: "Verbale", hint: "Ripeti come un segretario che legge il verbale.", items: ["Il direttore ha aperto la riunione alle nove.", "La dottoressa Neri ha proposto di rinviare la decisione.", "Il signor Bassi ha obiettato che non c'era più tempo.", "In sintesi, la proposta è stata approvata all'unanimità."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La concordanza dei tempi", hint: "Come cambiano i tempi",
            text: [
              "Presente → imperfetto: «Lavoro molto» → Ha detto che lavorava molto.",
              "Passato prossimo → trapassato prossimo: «Ho finito» → Ha detto che aveva finito.",
              "Futuro → condizionale passato: «Partirò» → Ha detto che sarebbe partito.",
              "Imperativo → di + infinito: «Vieni!» → Mi ha detto di venire.",
              "Congiuntivo presente → congiuntivo imperfetto: «Penso che sia vero» → Ha detto che pensava che fosse vero.",
              "L'imperfetto e il trapassato non cambiano.",
            ],
            table: { head: ["diretto", "indiretto al passato"], rows: [["presente", "imperfetto"], ["passato prossimo", "trapassato prossimo"], ["futuro", "condizionale passato"], ["imperativo", "di + infinito"]] },
          },
          k.table("Dal diretto all'indiretto", [
            ["«Sono stanco.»", "Ha detto che era stanco."],
            ["«Ho mangiato.»", ""],
            ["«Verrò domani.»", ""],
            ["«Chiudi la finestra!»", ""],
            ["«Vivevo a Pisa.»", ""],
            ["«Credo che abbia ragione.»", ""],
          ], "Scrivi la frase nel discorso indiretto, introdotta da «Ha detto che…» o «Mi ha detto di…».", ["discorso indiretto al passato"]),
          {
            kind: "fill", title: "Riferisci al passato", hint: "Completa con il tempo giusto del discorso indiretto.",
            items: [
              "«Abito a Bari.» → Mi ha detto che ___ a Bari.", "«Ho perso le chiavi.» → Ha raccontato che ___ le chiavi.", "«Arriverò tardi.» → Ci ha avvisato che ___ tardi.", "«Aspettami!» → Mi ha detto ___.", "«Che cosa fai stasera?» → Mi ha chiesto che cosa ___ quella sera.", "«Sei mai stato in Sicilia?» → Mi ha chiesto se ___ mai ___ in Sicilia.", "«Penso che tu abbia ragione.» → Mi ha detto che pensava che io ___ ragione.", "«Non lo farò mai più.» → Ha promesso che non lo ___ mai più.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Tempo, luogo e persone", hint: "Le espressioni che cambiano",
            text: [
              "oggi → quel giorno; ieri → il giorno prima; domani → il giorno dopo; adesso → allora / in quel momento; la settimana prossima → la settimana dopo; fra due giorni → due giorni dopo.",
              "qui → lì; questo → quello; venire → andare (spesso).",
              "Attenzione: se le parole sono ancora valide nel momento in cui le riferisci, il tempo può restare: «Mi ha detto che domani c'è sciopero» (domani è ancora domani).",
            ],
            table: { head: ["diretto", "indiretto al passato"], rows: [["oggi / ieri", "quel giorno / il giorno prima"], ["domani", "il giorno dopo"], ["qui / questo", "lì / quello"], ["fra tre giorni", "tre giorni dopo"]] },
          },
          {
            kind: "fill", title: "Espressioni di tempo e luogo", hint: "Completa con l'espressione giusta del discorso indiretto.",
            items: ["«Ci vediamo domani.» → Ha detto che ci saremmo visti ___.", "«Oggi sono stanchissimo.» → Ha detto che ___ era stanchissimo.", "«Ieri ho visto Marco.» → Ha raccontato che ___ aveva visto Marco.", "«Resto qui fino a sera.» → Ha detto che sarebbe rimasto ___ fino a sera.", "«Questo libro è mio.» → Ha detto che ___ libro era suo.", "«Partiamo fra una settimana.» → Hanno detto che sarebbero partiti ___."],
          },
          {
            kind: "intro", title: "Il verbale", hint: "Come si scrive un resoconto",
            text: ["Un verbale riferisce una riunione con il discorso indiretto: «Il presidente ha aperto la seduta e ha ricordato che…», «La signora X ha chiesto se…», «Il signor Y ha proposto di…», «Dopo la discussione, l'assemblea ha deciso di…».", "Si usano verbi precisi e non si riportano le parole esatte, ma il contenuto."],
          },
          k.negativa(["«Domani vengo a trovarti», mi ha detto Anna.", "«Hai già cenato?», mi ha chiesto mia madre.", "«Ho sbagliato tutto ieri», ha ammesso Paolo.", "«Chiudete la porta!», ci ha detto il professore.", "«Fra un mese mi trasferirò qui», ha detto Luca.", "«Credo che il film sia noioso», ha detto Sara."], "Trasforma ogni frase nel discorso indiretto al passato, cambiando tempi ed espressioni.", "discorso indiretto"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Che cosa ti ha detto?", "Due amiche al telefono: una racconta la discussione con il fidanzato.", [
            { who: "Giorgia", text: "Ieri sera ho parlato con Davide. Gli ho chiesto perché non mi aveva chiamato per tre giorni." },
            { who: "Elena", text: "E lui che cosa ti ha detto?" },
            { who: "Giorgia", text: "Mi ha detto che aveva avuto una settimana terribile al lavoro e che non aveva avuto tempo nemmeno per mangiare." },
            { who: "Elena", text: "Mah… e tu gli hai creduto?" },
            { who: "Giorgia", text: "Non del tutto. Poi ha aggiunto che mi avrebbe portata a cena il sabato dopo per farsi perdonare." },
            { who: "Elena", text: "Almeno questo! E gli hai detto quello che pensavi?" },
            { who: "Giorgia", text: "Sì, gli ho detto di non sparire più così e che, se fosse successo ancora, l'avrei lasciato." },
          ], ["Che cosa ha chiesto Giorgia a Davide?", "Come si è giustificato Davide?", "Che cosa ha promesso?", "Che cosa gli ha detto Giorgia alla fine?", "Che cosa pensi della reazione di Giorgia?"]),
          k.listen("La riunione di condominio", "Il segretario legge il verbale dell'ultima riunione.", [
            { who: "Segretario", text: "Verbale della riunione del 12 marzo. Erano presenti quattordici condomini su venti." },
            { who: "Segretario", text: "L'amministratore ha ricordato che il tetto aveva bisogno di lavori urgenti e che il preventivo era di quarantamila euro." },
            { who: "Segretario", text: "La signora Ferri ha obiettato che la cifra era troppo alta e ha proposto di chiedere altri due preventivi." },
            { who: "Segretario", text: "Il signor Conti ha precisato che, se si fosse aspettato troppo, il danno sarebbe aumentato." },
            { who: "Segretario", text: "In sintesi, l'assemblea ha deciso di chiedere un secondo preventivo e di riunirsi di nuovo entro due settimane." },
          ], ["Quante persone erano presenti?", "Che cosa ha ricordato l'amministratore?", "Che cosa ha proposto la signora Ferri? Perché?", "Che cosa ha precisato il signor Conti?", "Che cosa ha deciso l'assemblea?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("L'intervista al cuoco", [
            "La settimana scorsa abbiamo intervistato Marco Rinaldi, lo chef romano che ha appena ottenuto la sua seconda stella Michelin. Ci ha accolti nella cucina del suo ristorante, a Trastevere.",
            "Gli abbiamo chiesto quando aveva capito di voler fare il cuoco. Ci ha raccontato che da bambino passava le domeniche in cucina con la nonna e che lei gli diceva sempre di assaggiare tutto prima di servirlo.",
            "Rinaldi ha ammesso che i primi anni erano stati durissimi: lavorava quattordici ore al giorno e per due volte aveva pensato di smettere.",
            "Quando gli abbiamo domandato quale fosse il segreto del suo successo, ha risposto che non c'era nessun segreto: solo ingredienti buoni e tanto rispetto per i clienti.",
            "Alla fine ci ha confidato che l'anno successivo avrebbe aperto una scuola di cucina per ragazzi in difficoltà, «perché a me qualcuno ha dato una possibilità», ha concluso.",
          ], ["Chi è Marco Rinaldi? Dove ha incontrato i giornalisti?", "Che cosa ha raccontato della sua infanzia?", "Com'erano i primi anni di lavoro?", "Qual è il segreto del suo successo, secondo lui?", "Che progetto ha per l'anno successivo? Perché?", "Trasforma in discorso diretto la sua ultima risposta."]),
          k.spagna("Riferisci un'intervista o una conversazione interessante che hai letto o ascoltato recentemente, con il discorso indiretto al passato."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Riferire con fedeltà", hint: "Formule utili",
            text: ["Per riferire con precisione: «Mi ha detto testualmente che…», «Le sue parole sono state…».", "Per riferire con distanza: «Secondo lui…», «Sosteneva che…», «Da quanto ho capito, …».", "Per riassumere: «In pratica mi ha detto che…», «Il succo del discorso era che…»."],
          },
          k.rispondi(["Che cosa ti dicevano sempre i tuoi genitori quando eri piccolo?", "Qual è il miglior consiglio che ti hanno dato? Chi te l'ha dato?", "Racconta una discussione recente: chi ha detto che cosa?", "Che cosa ti ha detto il tuo capo o il tuo insegnante l'ultima volta?", "Hai mai riferito una cosa sbagliata? Che cosa è successo?", "Che cosa ti hanno promesso e non hanno mantenuto?"]),
          { kind: "speak", title: "Il messaggio in segreteria", hint: "Hai ascoltato questi messaggi ieri. Riferiscili oggi a un'altra persona.", items: ["«Ciao, sono Giulia. Domani non posso venire perché sto male.»", "«Sono il tecnico: passerò giovedì mattina, lasciate le chiavi alla vicina.»", "«Mamma, ho perso il treno: arrivo stasera con quello delle nove.»", "«Sono la dottoressa: gli esami sono buoni, non si preoccupi.»", "«Ragazzi, la festa è annullata. Ci vediamo la settimana prossima!»"] },
          {
            kind: "roleplay", title: "Il testimone del litigio", hint: "Hai assistito a un litigio tra due vicini. Un altro vicino (l'IA) ti chiede che cosa si sono detti.",
            steps: ["Spiega dove eri e che cosa hai visto.", "Riferisci che cosa ha detto il primo vicino.", "Riferisci che cosa ha risposto l'altro.", "Riferisci come è finita.", "Di' che cosa ne pensi."],
          },
          {
            kind: "roleplay", title: "Il resoconto al capo", hint: "Il tuo capo (l'IA) non è potuto venire a una riunione importante. Riferiscigli che cosa si è detto. Usa il «Lei».",
            steps: ["Riferisci chi c'era e qual era l'ordine del giorno.", "Riferisci le proposte principali.", "Riferisci le obiezioni.", "Riferisci la decisione finale.", "Rispondi alle sue domande."],
          },
          { kind: "speak", title: "Una conversazione importante", hint: "Riferisci per due minuti una conversazione che ha cambiato qualcosa nella tua vita: chi ha detto che cosa, come hai risposto e che cosa è successo dopo.", items: ["Qualche anno fa…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["«Sono stanca.» (Ieri mi ha detto che…)", "«Ho vinto la borsa di studio!» (Mi ha raccontato che…)", "«Ti chiamerò stasera.» (Mi ha promesso che…)", "«Siediti qui!» (Mi ha detto di…)", "«Domani parto.» (Una settimana fa mi ha detto che…)", "«Hai visto le mie chiavi?» (Mi ha chiesto se…)", "«Penso che sia una buona idea.» (Ha detto che pensava che…)", "«Questo è il mio ultimo giorno qui.» (Ha detto che…)"], "Trasforma nel discorso indiretto al passato, come indicato."),
          { kind: "write", title: "Il verbale", hint: "Scrivi il verbale (200–220 parole) di una riunione (di lavoro, di condominio, di classe…), vera o inventata: presenti, ordine del giorno, interventi riferiti con verbi precisi, decisioni finali.", rows: 16, items: ["Verbale della riunione del…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: discorso indiretto", ["ha detto che era stanco", "mi ha chiesto se venivo", "ha promesso che avrebbe chiamato", "mi ha detto di aspettare", "il giorno dopo", "quel giorno"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Mi ha detto che sarebbe arrivato il giorno dopo.", "Ha ammesso che aveva sbagliato.", "Le ho chiesto se voleva venire.", "Ci ha detto di non preoccuparci.", "In sintesi, la proposta è stata approvata."]),
          k.media([
            { type: "Podcast", title: "Il Post · Morning", where: "Spotify, app Il Post", why: "Ogni episodio riferisce che cosa hanno scritto i giornali: ascolta come si riportano le parole degli altri." },
            { type: "Film", title: "La ragazza del lago (Andrea Molaioli, 2007)", where: "Cerca dove vederlo su JustWatch", why: "Un commissario interroga gli abitanti di un paese: ognuno riferisce una versione diversa." },
            { type: "Programma", title: "Report", where: "RaiPlay", why: "Inchieste giornalistiche: i giornalisti riferiscono continuamente dichiarazioni e documenti." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riferisci un dialogo importante del film o del programma con il discorso indiretto al passato.", items: ["Il commissario ha chiesto… e lei ha risposto che…"] },
        ],
      },
    ],

    exam: k.exam(46, {
      parole: ["il verbale", "l'ordine del giorno", "respingere", "rinviare", "obiettare", "ribadire", "precisare", "il resoconto", "testuali parole", "in sintesi"],
      contrario: ["oggi → (discorso indiretto al passato)", "domani → (discorso indiretto al passato)", "ieri → (discorso indiretto al passato)", "qui → (discorso indiretto al passato)", "questo → (discorso indiretto al passato)", "fra una settimana → (discorso indiretto al passato)"],
      verbiHint: "Scrivi la frase nel discorso indiretto al passato.",
      verbiCols: ["discorso indiretto al passato"],
      verbi: [["«Studio ingegneria.»", ""], ["«Sono partito ieri.»", ""], ["«Ti scriverò.»", ""], ["«Non urlare!»", ""]],
      completaHint: "Completa con il tempo giusto del discorso indiretto al passato.",
      completa: ["«Lavoro a Milano.» → Mi ha detto che ___ a Milano.", "«Ho comprato casa.» → Ha raccontato che ___ casa.", "«Verrò alla festa.» → Ha promesso che ___ alla festa.", "«Telefonami!» → Mi ha detto ___.", "«Dove sei stato?» → Mi ha chiesto dove ___.", "«Domani piove.» → Ha detto che ___ sarebbe piovuto.", "«Credo che sia tardi.» → Ha detto che credeva che ___ tardi.", "«Resto qui.» → Ha detto che sarebbe rimasto ___."],
      trasformaHint: "Trasforma nel discorso indiretto al passato.",
      trasforma: ["«Domani non vengo», mi ha detto Luca.", "«Avete finito il progetto?», ci ha chiesto il capo.", "«Ho dimenticato il compleanno di mia madre», ha ammesso Paolo.", "«Prendi un ombrello!», mi ha detto mia nonna.", "«Fra un anno mi sposerò», ha annunciato Sara.", "«Penso che tu abbia torto», mi ha detto Marco."],
      leggi: {
        text: [
          "Verbale della riunione di redazione del 4 maggio. Il direttore ha aperto la riunione ricordando che il giornale aveva perso il dieci per cento dei lettori in un anno.",
          "La giornalista Bianchi ha proposto di creare una newsletter quotidiana gratuita. Il caporedattore ha obiettato che il personale era già insufficiente e che non avrebbero avuto tempo.",
          "Dopo una lunga discussione, il direttore ha deciso di provare per tre mesi con due giornalisti giovani e ha precisato che i risultati sarebbero stati valutati a settembre.",
        ],
        questions: ["Che cosa ha ricordato il direttore?", "Che cosa ha proposto la giornalista Bianchi?", "Perché il caporedattore non era d'accordo?", "Che cosa ha deciso il direttore? Quando si valuteranno i risultati?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Ieri ho incontrato Paolo. Mi ha detto che aveva lasciato il lavoro in banca." },
          { who: "Marco", text: "Davvero? E che cosa farà?" },
          { who: "Anna", text: "Mi ha spiegato che avrebbe aperto un agriturismo in Umbria con la sorella e che cercavano un cuoco." },
          { who: "Marco", text: "Un cuoco? Io! Gli hai detto che io cucino benissimo?" },
          { who: "Anna", text: "Sì, e mi ha detto di darti il suo numero." },
        ],
        questions: ["Che cosa ha detto Paolo ad Anna?", "Che progetto ha Paolo?", "Che cosa cercano?", "Che cosa ha detto Paolo di fare ad Anna?"],
      },
      parla: ["Riferisci una conversazione importante che hai avuto.", "Che cosa ti dicevano sempre i tuoi insegnanti?", "Riferisci il messaggio: «Domani non vengo perché ho un esame».", "Riferisci una riunione o una lezione recente."],
      role: ["L'IA ti racconta una notizia: ascoltala.", "Poi riferisci all'IA, come se fosse un'altra persona, quello che ti ha detto.", "Rispondi alle sue domande sui dettagli."],
      dettato: ["Mi ha detto che era malata.", "il giorno dopo", "Ha promesso che sarebbe tornato.", "Mi ha chiesto se avevo fame.", "Ci ha detto di non toccare niente.", "In sintesi, è stato deciso di rinviare."],
      traduci: ["«Abito qui da dieci anni.» (Ha detto che…)", "«Ho perso il lavoro.» (Mi ha raccontato che…)", "«Partirò fra due giorni.» (Ha detto che…)", "«Non dirlo a nessuno!» (Mi ha detto di…)", "«Ti piace questo vestito?» (Mi ha chiesto se…)", "«Penso che sia sbagliato.» (Ha detto che pensava che…)"],
      scrivi: { hint: "Scrivi il resoconto (150–180 parole) di una conversazione con un amico che ti ha dato una notizia importante: che cosa ti ha detto, che cosa gli hai chiesto e che cosa ti ha promesso.", start: "Ieri ho visto…" },
    }),
  };
})();
