// Unità 50 · Viaggiare — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[50] = {
    n: 50,
    level: "B1",
    title: "Viaggiare",
    goal: "Raccontare esperienze di viaggio e commentare fatti passati con opinioni, emozioni e dubbi, usando il congiuntivo passato.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di viaggi in modo più ricco: tipi di viaggio, imprevisti, viaggi lenti a piedi o in bicicletta, e a commentare quello che è successo.",
              "Grammatica: il congiuntivo passato (che io abbia fatto, che tu sia partito) per esprimere opinioni, emozioni e dubbi su fatti già accaduti: «Spero che abbiate fatto buon viaggio».",
              "Cultura: la Via Francigena e i cammini a piedi in Italia.",
            ],
          },
          {
            kind: "intro", title: "Spero che sia andato tutto bene", hint: "Un'anticipazione",
            text: ["Il congiuntivo passato si forma con il congiuntivo presente di avere o essere + participio: «abbia visto», «sia arrivato».", "Si usa dopo le stesse espressioni del congiuntivo presente, ma per un fatto passato: «Penso che sia partito ieri»."],
            examples: [
              { it: "Sono contento che tu sia venuto.", es: "emozione su un fatto passato" },
              { it: "Credo che abbiano perso il treno.", es: "opinione su un fatto passato" },
              { it: "È strano che non abbia ancora chiamato.", es: "giudizio su un fatto passato" },
            ],
          },
          { kind: "speak", title: "Il tuo viaggio più bello", hint: "Prima di cominciare: qual è il viaggio più bello che hai fatto? Che cosa lo ha reso speciale?", items: ["Il mio viaggio più bello…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Viaggi ed esperienze", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "lo zaino in spalla", "il viaggio organizzato", "il viaggio fai da te", "l'itinerario", "la tappa",
              "il pellegrino", "il cammino", "l'ostello", "il campeggio", "la meta",
              "l'imprevisto", "il ritardo", "la coincidenza persa", "il souvenir", "il turismo lento",
              "fare scalo", "fare l'autostop", "esplorare", "perdersi", "il mal d'Africa",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sinonimo", title: "Sinonimi",
            hint: "Scrivi un sinonimo per ogni parola o espressione.",
            items: ["la meta", "l'itinerario", "l'imprevisto", "esplorare", "fare un giro", "alloggiare", "partire", "il viaggiatore"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: spero che abbiate → Spero che abbiate fatto un buon viaggio.", items: ["spero che sia", "penso che abbia", "sono contento che", "è strano che", "la tappa", "l'imprevisto", "zaino in spalla", "perdersi"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Abbia fatto, sia andato", hint: "Pronuncia e ritmo",
            text: [
              "Nel congiuntivo passato l'ausiliare è breve e si appoggia al participio: «chesiaandàto», «cheabbiafàtto».",
              "Attenzione alla doppia b di «abbia» e alla i di «sia»: «àb-bia», «sì-a».",
              "Quando chiedi notizie di un viaggio, il tono è caldo e interessato: «Spero che sia andato tutto bene!».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti legando le parole.", items: ["che io abbia visto, che tu abbia visto", "che lui sia partito, che lei sia partita", "che abbiamo fatto, che abbiate fatto", "che siano arrivati, che siano arrivate"] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con un tono caldo.", items: ["Spero che abbiate fatto buon viaggio!", "Sono felice che siate arrivati sani e salvi.", "Mi dispiace che abbiate perso la coincidenza.", "Penso che abbiano sbagliato strada.", "È incredibile che tu abbia fatto tutto a piedi!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il congiuntivo passato", hint: "Forma",
            text: [
              "Congiuntivo presente di avere o essere + participio passato: «che io abbia mangiato», «che tu sia partito/a».",
              "Con essere il participio concorda: «Spero che le ragazze siano arrivate».",
              "Si usa quando il verbo principale è al presente (o al futuro) e l'azione della frase dipendente è passata: «Penso (ora) che ieri sia piovuto».",
            ],
            table: { head: ["", "fare", "partire"], rows: [["io / tu / lui", "abbia fatto", "sia partito/a"], ["noi", "abbiamo fatto", "siamo partiti/e"], ["voi", "abbiate fatto", "siate partiti/e"], ["loro", "abbiano fatto", "siano partiti/e"]] },
          },
          k.table("Tabella del congiuntivo passato", [
            ["vedere", "abbia visto", "", ""],
            ["arrivare", "", "siamo arrivati/e", ""],
            ["perdere", "", "", "abbiano perso"],
            ["rimanere", "", "", ""],
            ["divertirsi", "", "", ""],
            ["essere", "", "", ""],
          ], "Completa con il congiuntivo passato: che io, che noi, che loro.", ["che io", "che noi", "che loro"]),
          {
            kind: "fill", title: "Commenti sul viaggio", hint: "Completa con il congiuntivo passato del verbo tra parentesi.",
            items: [
              "Spero che voi ___ (divertirsi) in Sicilia.", "Penso che Luca ___ (prendere) il treno sbagliato.", "Sono contenta che tu ___ (venire) a trovarmi.", "Mi sembra strano che non ___ (loro, chiamare).", "Non credo che Marta ___ (vedere) il Colosseo: è rimasta in albergo.", "È un peccato che il museo ___ (essere) chiuso.", "Immagino che ___ (voi, camminare) tantissimo.", "Dubito che ___ (loro, trovare) posto in ostello ad agosto.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Presente o passato?", hint: "Scegliere il congiuntivo giusto",
            text: [
              "Verbo principale al presente + azione contemporanea o futura → congiuntivo presente: «Penso che parta oggi / domani».",
              "Verbo principale al presente + azione passata → congiuntivo passato: «Penso che sia partito ieri».",
              "Verbo principale al passato → congiuntivo imperfetto (contemporaneità) o trapassato (anteriorità): lo approfondirai al B2.",
            ],
            table: { head: ["", "esempio"], rows: [["ora / dopo", "Credo che arrivi stasera."], ["prima", "Credo che sia arrivato ieri."], ["ora", "Spero che stiate bene."], ["prima", "Spero che abbiate dormito bene."]] },
          },
          {
            kind: "fill", title: "Presente o passato?", hint: "Completa con il congiuntivo presente o passato.",
            items: ["Penso che domani ___ (piovere).", "Penso che ieri ___ (piovere) tutto il giorno.", "Spero che il volo ___ (partire) in orario stasera.", "Spero che il volo ___ (partire) in orario stamattina.", "Credo che Giulia ___ (essere) già a casa adesso.", "Credo che Giulia ___ (tornare) dal viaggio sabato scorso."],
          },
          {
            kind: "intro", title: "Raccontare un viaggio", hint: "Formule utili",
            text: ["«È stato un viaggio indimenticabile», «Ne è valsa la pena» (è valso lo sforzo), «Ci siamo persi, ma è stato bellissimo», «Non vedo l'ora di tornarci», «Mi è rimasto nel cuore».", "Per commentare: «Mi è sembrato che…», «Non pensavo che…», «Sono rimasto sorpreso che…»."],
          },
          k.negativa(["È arrivato tardi, credo. (Credo che…)", "Abbiamo perso il treno: che peccato! (È un peccato che…)", "Siete venuti: sono felice! (Sono felice che…)", "Forse hanno sbagliato strada. (Può darsi che…)", "Ti sei divertito, spero. (Spero che…)", "Ha camminato venti chilometri: è incredibile! (È incredibile che…)"], "Riscrivi ogni frase con il congiuntivo passato, come indicato.", "con il congiuntivo passato"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il ritorno dal viaggio", "Una madre chiama la figlia appena tornata da un viaggio in India.", [
            { who: "Mamma", text: "Finalmente! Spero che tu abbia fatto buon viaggio. Sei stanca?" },
            { who: "Chiara", text: "Distrutta! Il volo da Delhi aveva sei ore di ritardo e abbiamo perso la coincidenza a Dubai." },
            { who: "Mamma", text: "Mi dispiace che abbiate avuto tutti questi problemi. E il viaggio com'è andato?" },
            { who: "Chiara", text: "Indimenticabile. Ma credo di aver mangiato qualcosa di sbagliato l'ultimo giorno: sono stata male in aereo." },
            { who: "Mamma", text: "Oddio! Penso che tu debba andare dal medico domani." },
            { who: "Chiara", text: "Sì, ci vado. Ma sono felice che siamo partiti: è stata un'esperienza che mi ha cambiato la vita." },
          ], ["Che problemi ci sono stati con il volo?", "Com'è stato il viaggio, secondo Chiara?", "Che cosa è successo l'ultimo giorno?", "Che cosa le consiglia la madre?", "Perché Chiara è felice di essere partita?"]),
          k.listen("Il cammino", "Un uomo racconta la sua esperienza sulla Via Francigena.", [
            { who: "Roberto", text: "L'anno scorso ho fatto un tratto della Via Francigena, da Lucca a Roma: quattrocento chilometri a piedi, in tre settimane." },
            { who: "Roberto", text: "I miei amici non credevano che ce l'avrei fatta. In effetti i primi giorni avevo le vesciche ai piedi e volevo tornare a casa." },
            { who: "Roberto", text: "Poi il corpo si è abituato. Dormivo negli ostelli per pellegrini e ho conosciuto persone da tutto il mondo." },
            { who: "Roberto", text: "Quando sono arrivato in piazza San Pietro, ho pianto. Sono contento di averlo fatto e penso che sia stata la cosa più bella della mia vita." },
          ], ["Che percorso ha fatto Roberto? Quanto tempo ci ha messo?", "Che cosa pensavano i suoi amici?", "Che problemi ha avuto all'inizio?", "Dove dormiva? Chi ha conosciuto?", "Come si è sentito all'arrivo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La Via Francigena", [
            "Nel 990 Sigerico, arcivescovo di Canterbury, tornò dal suo viaggio a Roma e annotò in un diario le settantanove tappe del percorso. Grazie a quel documento oggi possiamo ricostruire la Via Francigena.",
            "Nel Medioevo era una delle strade più importanti d'Europa: la percorrevano pellegrini, mercanti ed eserciti. Il nome significa «strada che viene dalla Francia».",
            "Oggi il cammino va da Canterbury a Roma, per circa duemila chilometri, e attraversa Inghilterra, Francia, Svizzera e Italia. In Italia entra dal passo del Gran San Bernardo e attraversa Valle d'Aosta, Piemonte, Lombardia, Emilia, Toscana e Lazio.",
            "Negli ultimi anni è diventata molto popolare tra chi cerca un turismo lento: si cammina tra borghi, colline e campagne, lontano dalle città affollate. Molti la percorrono a tratti, una settimana all'anno.",
            "Chi arriva a Roma può ricevere il «Testimonium», un attestato del pellegrinaggio. Ma molti dicono che il regalo più grande sia il tempo trascorso a camminare e a pensare.",
          ], ["Chi era Sigerico? Perché è importante per la Via Francigena?", "Chi percorreva la strada nel Medioevo? Che cosa significa il nome?", "Da dove a dove va oggi il cammino? Quali regioni italiane attraversa?", "Perché è diventata popolare?", "Che cos'è il «Testimonium»?", "Ti piacerebbe fare un cammino a piedi? Perché?"]),
          k.spagna("Nel tuo paese ci sono cammini famosi? Racconta un viaggio che hai fatto, commentandolo con il congiuntivo passato («Penso che…», «Sono contento che…»)."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Chiedere e dare notizie di un viaggio", hint: "Formule utili",
            text: ["Chiedere: «Allora, com'è andato il viaggio?», «Spero che vi siate divertiti», «Racconta tutto!».", "Rispondere: «È andato benissimo / così così», «È stato un disastro, ma…», «Ne è valsa la pena»."],
          },
          k.rispondi(["Preferisci viaggi organizzati o fai da te? Perché?", "Qual è stato il peggior imprevisto in un viaggio?", "Hai mai fatto un viaggio lento (a piedi, in bici, in treno)?", "Quale paese ti ha sorpreso di più? Perché?", "Che cosa porti sempre nello zaino?", "Dove vorresti andare il prossimo anno?"]),
          { kind: "speak", title: "Commenta", hint: "Commenta ogni notizia con il congiuntivo passato (sono felice che, mi dispiace che, è strano che, penso che…).", items: ["I tuoi amici hanno perso l'aereo per Parigi.", "Tua sorella ha attraversato il Sudamerica in bici.", "Il tuo collega è tornato dalle vacanze più stanco di prima.", "Il museo che volevi vedere era chiuso per restauro.", "Hai trovato il portafoglio che avevi perso in treno.", "Due amici si sono sposati durante un viaggio."] },
          {
            kind: "roleplay", title: "All'aeroporto", hint: "Il tuo bagaglio non è arrivato. L'IA fa l'impiegato dell'ufficio bagagli smarriti. Usa il «Lei».",
            steps: ["Spiega che cosa è successo e da dove arrivi.", "Descrivi la valigia e il contenuto.", "Esprimi la tua opinione («Penso che l'abbiate mandata…»).", "Chiedi quando la riceverai e se ti rimborsano.", "Lascia i tuoi dati."],
          },
          {
            kind: "roleplay", title: "Il racconto del viaggio", hint: "Un amico (l'IA) è appena tornato da un viaggio. Chiedigli com'è andato e commenta ogni cosa che racconta.",
            steps: ["Accoglilo e chiedigli del viaggio.", "Reagisci alle buone notizie con il congiuntivo passato.", "Reagisci agli imprevisti.", "Chiedi un consiglio per un tuo viaggio futuro.", "Proponi di vedere le foto insieme."],
          },
          { kind: "speak", title: "Un viaggio che mi ha cambiato", hint: "Parla per due minuti di un viaggio importante: dove, con chi, che cosa è successo e perché ti ha cambiato. Commenta con il congiuntivo passato.", items: ["Il viaggio che mi ha cambiato…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Avete fatto buon viaggio, spero. (Spero che…)", "Forse hanno dormito in tenda. (Può darsi che…)", "Siamo arrivati in tempo: che fortuna! (Per fortuna…)", "Sei tornato: che bello! (Che bello che…)", "Ha camminato mille chilometri, non ci credo. (Non credo che…)", "Hanno chiuso l'ostello: che peccato! (Peccato che…)", "Ti sei perso: è normale. (È normale che…)", "Hai visto Venezia, immagino. (Immagino che…)"], "Riscrivi ogni frase con il congiuntivo passato, come indicato."),
          { kind: "write", title: "Il diario di viaggio", hint: "Scrivi la pagina di diario (220–250 parole) dell'ultimo giorno di un viaggio: che cosa hai fatto, che cosa hai provato e che cosa pensi del viaggio intero. Usa almeno sei congiuntivi passati.", rows: 18, items: ["Ultimo giorno a…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: congiuntivo passato", ["che abbia visto", "che siano partiti", "che vi siate divertiti", "che abbiamo perso", "che sia stato", "che abbiate camminato"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Spero che abbiate fatto buon viaggio.", "Credo che abbiano perso la coincidenza.", "Sono felice che tu sia venuto.", "Ne è valsa la pena.", "La Via Francigena arriva a Roma."]),
          k.media([
            { type: "Film", title: "Il ladro di bambini (Gianni Amelio, 1992)", where: "Cerca dove vederlo su JustWatch", why: "Se non l'hai visto nell'unità 18: un viaggio da Milano alla Sicilia che cambia tre persone." },
            { type: "Film", title: "Mediterraneo (Gabriele Salvatores, 1991)", where: "Cerca dove vederlo su JustWatch", why: "Premio Oscar: otto soldati italiani dimenticati su un'isola greca durante la guerra." },
            { type: "Web", title: "Via Francigena (sito ufficiale)", where: "viefrancigene.org", why: "Mappe, tappe e racconti di pellegrini: leggi la descrizione di una tappa in Toscana." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che viaggio fanno i protagonisti? Che cosa pensi che abbiano imparato?", items: ["I protagonisti… Penso che abbiano capito…"] },
        ],
      },
    ],

    exam: k.exam(50, {
      parole: ["l'itinerario", "la tappa", "il pellegrino", "il cammino", "l'imprevisto", "fare scalo", "il turismo lento", "la coincidenza", "esplorare", "ne è valsa la pena"],
      contrario: ["la meta → sinonimo", "l'imprevisto → sinonimo", "alloggiare → sinonimo", "partire → contrario", "il viaggiatore → sinonimo", "perdersi → contrario"],
      verbiHint: "Completa con il congiuntivo passato: che io, che noi, che loro.",
      verbiCols: ["che io", "che noi", "che loro"],
      verbi: [["fare", "", "", ""], ["andare", "", "", ""], ["dire", "", "", ""], ["svegliarsi", "", "", ""]],
      completaHint: "Completa con il congiuntivo presente o passato.",
      completa: ["Spero che voi ___ (divertirsi) in vacanza la settimana scorsa.", "Penso che domani ___ (fare) bel tempo.", "Mi dispiace che tu ___ (stare) male durante il viaggio.", "Credo che i ragazzi ___ (arrivare) ieri sera.", "Non credo che Paolo ___ (prenotare) l'albergo: è sempre in ritardo con tutto.", "Sono felice che ___ (voi, venire) a trovarci.", "È strano che non ___ (loro, scrivere) ancora.", "Spero che adesso ___ (voi, stare) bene."],
      trasformaHint: "Riscrivi ogni frase con il congiuntivo passato.",
      trasforma: ["Ha sbagliato strada, credo.", "Siete arrivati: che bello!", "Forse il treno è già partito.", "Hai visto Napoli, spero.", "Abbiamo perso l'aereo: che peccato!", "Ha fatto il giro del mondo: è incredibile!"],
      leggi: {
        text: [
          "Cara Laura, scusa se non ti ho scritto prima: sono appena tornata dal cammino di Santiago. Spero che tu abbia ricevuto la cartolina che ti ho mandato da León!",
          "Sono stati trenta giorni durissimi: penso di aver consumato due paia di scarpe. Ma sono felice di averlo fatto e credo che sia stata l'esperienza più importante della mia vita.",
          "Mi dispiace che tu non sia potuta venire: la prossima volta dobbiamo farlo insieme. Un abbraccio, Giulia.",
        ],
        questions: ["Da dove è appena tornata Giulia?", "Che cosa spera?", "Com'è stato il cammino? Che cosa pensa Giulia dell'esperienza?", "Che cosa le dispiace?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Dove sono Marco e Sara? Dovevano essere qui alle otto." },
          { who: "Paolo", text: "Non lo so. Credo che abbiano preso l'autostrada sbagliata: Marco non ascolta mai il navigatore." },
          { who: "Anna", text: "Oppure è possibile che siano rimasti senza benzina." },
          { who: "Paolo", text: "Speriamo di no! Li chiamo io." },
        ],
        questions: ["Chi stanno aspettando Anna e Paolo?", "Che cosa pensa Paolo che sia successo?", "Quale altra ipotesi fa Anna?", "Che cosa decide di fare Paolo?"],
      },
      parla: ["Racconta il tuo viaggio più bello e commentalo.", "Commenta: «I tuoi amici sono tornati dalle vacanze dopo tre giorni».", "Che cosa pensi del turismo lento?", "Racconta un imprevisto di viaggio."],
      role: ["L'IA è un amico appena tornato da un viaggio disastroso: chiedigli che cosa è successo.", "Commenta ogni problema con il congiuntivo passato.", "Dagli un consiglio per il prossimo viaggio."],
      dettato: ["che sia arrivato", "Spero che vi siate divertiti.", "Credo che abbiano perso il treno.", "Ne è valsa la pena.", "la Via Francigena", "il turismo lento"],
      traduci: ["Siete tornati, che bello! (Che bello che…)", "Forse ha dormito in macchina. (Può darsi che…)", "Ti sei divertito, spero. (Spero che…)", "Hanno perso le valigie, mi dispiace. (Mi dispiace che…)", "Ha già visto Firenze, credo. (Credo che…)", "Avete camminato tanto, immagino. (Immagino che…)"],
      scrivi: { hint: "Rispondi alla lettera di Giulia (parte 6) come Laura (150–180 parole): commenta la sua esperienza con il congiuntivo passato e racconta che cosa hai fatto tu nel frattempo.", start: "Cara Giulia," },
    }),
  };
})();
