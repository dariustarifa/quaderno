// Unità 43 · L'Italia delle regioni — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[43] = {
    n: 43,
    level: "B1",
    title: "L'Italia delle regioni",
    goal: "Conoscere le regioni italiane, parlare di viaggi fatti e non fatti, di rimpianti e di promesse nel passato, con il condizionale passato.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Scoprirai le venti regioni italiane, le loro differenze e il «campanilismo», cioè l'amore (a volte esagerato) per la propria città.",
              "Grammatica: il condizionale passato (avrei fatto, sarei andato) per i desideri non realizzati, i rimpianti, il futuro nel passato («Ha detto che sarebbe venuto») e le notizie non confermate al passato.",
              "Attenzione: per parlare di un futuro visto dal passato, l'italiano usa il condizionale passato e non quello presente.",
            ],
          },
          {
            kind: "intro", title: "Sarei venuto, ma…", hint: "Un'anticipazione",
            text: ["Il condizionale passato si forma con il condizionale di avere o essere + participio: «avrei visto», «sarei partito».", "Esprime ciò che era desiderato o possibile ma non è successo."],
            examples: [
              { it: "Sarei venuto alla festa, ma avevo la febbre.", es: "desiderio non realizzato" },
              { it: "Avrei voluto visitare la Sicilia, ma non ho avuto tempo.", es: "rimpianto" },
              { it: "Mi ha detto che sarebbe arrivato alle otto.", es: "futuro nel passato" },
            ],
          },
          { kind: "speak", title: "Quali regioni conosci?", hint: "Prima di cominciare: quali regioni italiane conosci o hai visitato? Quale ti piacerebbe vedere?", items: ["Conosco… Mi piacerebbe vedere…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Territorio e identità", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la regione", "il capoluogo", "la provincia", "il comune", "lo statuto speciale",
              "il campanilismo", "il dialetto", "l'identità", "la pianura", "la catena montuosa",
              "la costa", "l'isola", "il confine", "il paesaggio", "la specialità tipica",
              "il patrimonio", "l'entroterra", "lo spopolamento", "rivale", "l'orgoglio",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "aggettivo", title: "Regioni e abitanti",
            hint: "Scrivi l'aggettivo o il nome degli abitanti di ogni regione. Esempio: Toscana → toscano.",
            items: ["Sicilia", "Sardegna", "Piemonte", "Lombardia", "Veneto", "Puglia", "Calabria", "Campania", "Liguria", "Umbria", "Marche", "Abruzzo"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: avrei voluto → Avrei voluto vedere le Dolomiti, ma ha piovuto tutto il tempo.", items: ["avrei voluto", "sarei andato / andata", "avrebbe detto", "il capoluogo", "il campanilismo", "il dialetto", "la specialità tipica", "l'entroterra"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Gli accenti regionali", hint: "Riconoscere da dove viene qualcuno",
            text: [
              "In Italia si capisce spesso da dove viene una persona dal suo accento. Al Nord molte «e» sono chiuse e la «s» tra vocali è sonora (casa = «caza»); in Toscana la «c» tra vocali diventa aspirata (la hasa); a Roma la «l» diventa spesso «r» (er gatto).",
              "Al Sud si allungano molte consonanti e si chiudono le vocali finali; in Sicilia la «d» doppia diventa «dd» con un suono particolare (beddu = bello).",
              "Non devi imitare gli accenti, ma riconoscerli ti aiuterà a capire le persone in tutta Italia.",
            ],
          },
          { kind: "shadow", title: "Condizionale passato", hint: "Ripeti legando l'ausiliare al participio.", items: ["avrei fatto, avresti fatto, avrebbe fatto", "sarei andato, saresti andato, sarebbe andata", "avremmo voluto, avreste potuto, avrebbero detto", "Sarei venuto, ma ero stanco."] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con un tono di rimpianto.", items: ["Avrei voluto vedere la Sardegna, ma non c'è stato tempo.", "Mi aveva detto che sarebbe tornato presto.", "Al tuo posto avrei preso il treno.", "Saremmo rimasti ancora, ma il volo partiva all'alba."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il condizionale passato", hint: "Forma",
            text: [
              "Condizionale presente di avere o essere + participio: avrei mangiato, saresti partita, avrebbero visto.",
              "L'ausiliare è lo stesso del passato prossimo; con essere il participio concorda: «Le ragazze sarebbero venute».",
              "Con i verbi modali, l'ausiliare è spesso quello del verbo che segue: «Sarei voluto partire» / «Avrei voluto partire» (tutte e due si usano).",
            ],
            table: { head: ["", "fare", "andare"], rows: [["io", "avrei fatto", "sarei andato/a"], ["tu", "avresti fatto", "saresti andato/a"], ["lui / lei", "avrebbe fatto", "sarebbe andato/a"], ["noi", "avremmo fatto", "saremmo andati/e"], ["voi / loro", "avreste / avrebbero fatto", "sareste / sarebbero andati/e"]] },
          },
          k.table("Tabella dei verbi", [
            ["vedere", "avrei visto", "", ""],
            ["venire", "", "saresti venuto/a", ""],
            ["dire", "", "", "avrebbero detto"],
            ["rimanere", "", "", ""],
            ["volere", "", "", ""],
            ["divertirsi", "", "", ""],
          ], "Completa con il condizionale passato: io, tu, loro.", ["io", "tu", "loro"]),
          {
            kind: "fill", title: "Avrei, sarei…", hint: "Completa con il condizionale passato del verbo tra parentesi.",
            items: [
              "___ (io, venire) volentieri alla tua festa, ma ero a Napoli.", "Al posto tuo ___ (io, prendere) il traghetto, non l'aereo.", "Senza il tuo aiuto non ___ (noi, trovare) mai la strada.", "Marco ___ (dovere) arrivare ieri, ma ha perso il treno.", "Le mie cugine ___ (restare) in Puglia un'altra settimana.", "Con un po' di fortuna ___ (voi, vincere) la partita.", "Mi ___ (piacere) conoscerti prima.", "Che cosa ___ (fare) tu al mio posto?",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il futuro nel passato", hint: "Un uso tipico dell'italiano",
            text: [
              "Quando racconti al passato una cosa che allora era futura, l'italiano usa il condizionale passato: «Mi ha detto che sarebbe venuto».",
              "Non si usa il condizionale presente in questo caso: NON «Mi ha detto che verrebbe».",
              "Lo trovi dopo i verbi al passato: diceva che, pensavo che, sapevo che, mi ha promesso che, ha scritto che.",
            ],
            examples: [{ it: "Pensavo che avresti chiamato.", es: "allora la telefonata era nel futuro" }, { it: "Ci avevano promesso che il treno sarebbe partito in orario.", es: "futuro nel passato" }],
          },
          {
            kind: "fill", title: "Futuro nel passato", hint: "Completa con il condizionale passato.",
            items: ["Giulia mi ha detto che ___ (arrivare) alle nove.", "Pensavo che voi ___ (venire) in macchina.", "Il meteo diceva che ___ (fare) bel tempo, invece è piovuto.", "Mi avevano promesso che ___ (loro, chiamare) entro venerdì.", "Sapevo che prima o poi ___ (tu, cambiare) idea.", "Credevamo che il viaggio ___ (durare) solo tre ore."],
          },
          {
            kind: "intro", title: "Rimpianti e rimproveri", hint: "Altri usi",
            text: ["Rimpianto: «Avrei dovuto studiare di più», «Avrei voluto dirglielo».", "Rimprovero: «Avresti potuto avvisarmi!», «Avreste dovuto chiedere».", "Notizia non confermata al passato: «Secondo la polizia, i ladri sarebbero entrati dalla finestra»."],
          },
          k.negativa(["Volevo andare in Sicilia, ma non ho potuto.", "Ha detto: «Verrò alle otto».", "Dovevi avvisarmi!", "Secondo le fonti, il ministro si è dimesso. (non confermato)", "Volevamo restare, ma era tardi.", "Pensavo: «Lui chiamerà»."], "Trasforma ogni frase usando il condizionale passato.", "con il condizionale passato"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il viaggio in Calabria", "Due amici parlano di un viaggio non proprio riuscito.", [
            { who: "Chiara", text: "Allora, com'è andato il viaggio in Calabria?" },
            { who: "Simone", text: "Bello, ma non come avevamo immaginato. Avremmo voluto vedere anche l'Aspromonte, ma ha piovuto quattro giorni su sette." },
            { who: "Chiara", text: "Peccato! E Tropea?" },
            { who: "Simone", text: "Bellissima. Ci saremmo rimasti volentieri una settimana intera. Il problema è stato il treno: ci avevano detto che sarebbe arrivato in sei ore, ce ne ha messe nove." },
            { who: "Chiara", text: "Avresti dovuto noleggiare una macchina!" },
            { who: "Simone", text: "Lo so. La prossima volta la noleggerò. E porterò un ombrello più grande." },
          ], ["Che cosa avrebbero voluto vedere? Perché non l'hanno visto?", "Com'era Tropea? Quanto ci sarebbero rimasti?", "Che problema c'è stato con il treno?", "Che cosa avrebbe dovuto fare Simone, secondo Chiara?", "Che cosa farà la prossima volta?"]),
          k.listen("Campanilismo", "Un pisano e un livornese discutono, scherzando, in un bar.", [
            { who: "Pisano", text: "Voi livornesi siete sempre gelosi di Pisa: noi abbiamo la Torre!" },
            { who: "Livornese", text: "Una torre storta! Se l'avessimo costruita noi, sarebbe venuta dritta." },
            { who: "Pisano", text: "E però tutti vengono a Pisa, non a Livorno." },
            { who: "Livornese", text: "Perché a Livorno si mangia il cacciucco migliore della Toscana. Chi lo assaggia non torna più a Pisa!" },
            { who: "Barista", text: "Ragazzi, da cinquecento anni dite le stesse cose. Avreste potuto fare pace almeno per Natale!" },
          ], ["Di che cosa è orgoglioso il pisano?", "Che cosa risponde il livornese sulla Torre?", "Qual è l'orgoglio di Livorno?", "Che cosa dice il barista?", "Che cos'è il campanilismo, secondo questo dialogo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Venti regioni, venti Italie", [
            "L'Italia è divisa in venti regioni, ognuna con il suo capoluogo. Cinque hanno uno «statuto speciale», cioè più autonomia: Valle d'Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia, Sicilia e Sardegna.",
            "Le ragioni sono storiche e linguistiche: in Valle d'Aosta si parla anche francese, in Alto Adige la maggioranza parla tedesco, e le due grandi isole hanno sempre avuto una forte identità.",
            "L'Italia è diventata uno stato unito solo nel 1861. Prima, per secoli, era divisa in tanti stati diversi: per questo ogni regione, e spesso ogni città, ha la sua cucina, il suo dialetto e le sue tradizioni.",
            "Da qui nasce il campanilismo: l'amore per il proprio «campanile», cioè per la propria città, e la rivalità con quella vicina. Pisa e Livorno, Bergamo e Brescia, Siena e Firenze si prendono in giro da secoli.",
            "Molti storici dicono che senza questa varietà l'Italia non sarebbe diventata così ricca di arte e di cultura. Altri pensano che le differenze tra Nord e Sud avrebbero dovuto essere ridotte molto prima.",
          ], ["Quante regioni ci sono? Quali hanno lo statuto speciale?", "Perché alcune regioni hanno più autonomia?", "Quando è diventata unita l'Italia? Che cosa ha comportato?", "Che cos'è il campanilismo? Fai un esempio.", "Che cosa dicono gli storici della varietà regionale?", "Nel tuo paese ci sono differenze simili tra regioni?"]),
          k.spagna("Com'è organizzato il tuo paese? Ci sono regioni con identità molto forti? Usa almeno tre condizionali passati."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare un viaggio con rimpianti", hint: "Formule utili",
            text: ["«Avrei voluto vedere anche…», «Sarebbe stato bello…», «Se avessi saputo…» (lo studierai nel B2), «La prossima volta + futuro».", "Per consigliare un itinerario: «Non potete perdervi…», «Vale la pena di…», «Io avrei evitato…»."],
          },
          k.rispondi(["Quale regione italiana ti piacerebbe visitare? Perché?", "C'è un viaggio che avresti voluto fare ma non hai fatto?", "Che cosa avresti fatto diversamente nella tua ultima vacanza?", "Nel tuo paese esiste il campanilismo? Fai un esempio.", "Che cosa ti avevano detto dell'Italia prima di conoscerla? Era vero?", "Quale specialità regionale italiana vorresti assaggiare?"]),
          { kind: "speak", title: "Rimpianti", hint: "Per ogni situazione, di' che cosa avresti fatto o che cosa avresti dovuto fare.", items: ["Hai perso l'aereo per Palermo.", "Sei andato a Venezia ad agosto e c'era una folla enorme.", "Non hai assaggiato la specialità locale.", "Hai prenotato un albergo lontanissimo dal centro.", "Sei rimasto in Italia solo tre giorni.", "Non hai imparato una parola di dialetto."] },
          {
            kind: "roleplay", title: "L'itinerario", hint: "Un amico (l'IA) ha appena fatto un giro in Sicilia e ti racconta che cosa è andato storto. Tu ci andrai il mese prossimo.",
            steps: ["Chiedigli com'è andato il viaggio.", "Ascolta i suoi rimpianti e fai domande.", "Chiedigli che cosa avrebbe fatto diversamente.", "Organizza il tuo itinerario con i suoi consigli (futuro).", "Ringrazialo."],
          },
          {
            kind: "roleplay", title: "Il reclamo dell'agenzia", hint: "Il viaggio organizzato in Puglia non è stato come promesso. L'IA fa l'impiegato dell'agenzia. Usa il «Lei».",
            steps: ["Spiega che cosa vi avevano promesso (futuro nel passato).", "Racconta che cosa è successo invece.", "Di' che cosa avrebbero dovuto fare.", "Chiedi un rimborso parziale.", "Accetta o rifiuta la proposta."],
          },
          { kind: "speak", title: "La mia regione ideale", hint: "Presenta per due minuti una regione italiana (vera o la tua «ideale»): paesaggio, città, cucina, tradizioni. Aggiungi che cosa avresti voluto sapere prima di visitarla.", items: ["La regione che voglio presentare è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Volevo venire, ma ero malato. (Sarei…)", "Ha detto: «Telefonerò domani». (Ha detto che…)", "Dovevi dirmelo prima! (rimprovero)", "Pensavo: «Partiranno presto». (Pensavo che…)", "Secondo la polizia, l'uomo è fuggito in moto. (non confermato)", "Mi è dispiaciuto non vedere Napoli. (Avrei voluto…)", "Senza di te mi perdevo. (Senza di te mi…)", "Al tuo posto prendevo il treno. (registro corretto)"], "Riscrivi ogni frase con il condizionale passato, come indicato tra parentesi."),
          { kind: "write", title: "Recensione di un viaggio", hint: "Scrivi una recensione (200–220 parole) di un viaggio in una regione italiana (vero o immaginario): che cosa ti avevano promesso, che cosa hai visto, che cosa avresti voluto fare e che consigli daresti. Usa almeno sei condizionali passati.", rows: 16, items: ["Il mio viaggio in…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: condizionale passato", ["avrei voluto", "sarebbe venuta", "avremmo visto", "sareste rimasti", "avrebbero detto", "avresti dovuto"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Sarei venuto, ma ero stanco.", "Mi ha detto che sarebbe arrivata.", "Avresti potuto avvisarmi!", "Avremmo voluto restare.", "Pensavo che avresti chiamato."]),
          k.media([
            { type: "Programma", title: "Linea Verde / Sereno Variabile", where: "RaiPlay", why: "Programmi di viaggio nelle regioni italiane: paesaggi, prodotti tipici e accenti diversi." },
            { type: "Film", title: "Basilicata coast to coast (Rocco Papaleo, 2010)", where: "Cerca dove vederlo su JustWatch", why: "Quattro musicisti attraversano a piedi la Basilicata, una delle regioni meno conosciute." },
            { type: "Libro", title: "Viaggio in Italia, Guido Piovene", where: "Biblioteca, libreria", why: "Un giornalista negli anni Cinquanta attraversa tutte le regioni e descrive come vivevano gli italiani." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta il viaggio dei protagonisti: che cosa avevano programmato, che cosa è successo davvero e che cosa avrebbero potuto fare diversamente.", items: ["I protagonisti avevano deciso di… ma…"] },
        ],
      },
    ],

    exam: k.exam(43, {
      parole: ["il capoluogo", "lo statuto speciale", "il campanilismo", "l'entroterra", "lo spopolamento", "l'orgoglio", "il confine", "il patrimonio", "rivale", "la specialità tipica"],
      contrario: ["Sicilia → aggettivo", "Piemonte → aggettivo", "Puglia → aggettivo", "Lombardia → aggettivo", "Sardegna → aggettivo", "Campania → aggettivo"],
      verbiHint: "Completa con il condizionale passato: io, tu, loro.",
      verbiCols: ["io", "tu", "loro"],
      verbi: [["andare", "", "", ""], ["fare", "", "", ""], ["potere", "", "", ""], ["alzarsi", "", "", ""]],
      completaHint: "Completa con il condizionale passato.",
      completa: ["___ (io, venire) volentieri, ma lavoravo.", "Mi ha promesso che ___ (lui, chiamare) subito.", "Al posto tuo non ___ (io, dire) niente.", "Pensavamo che il treno ___ (arrivare) in orario.", "Ragazzi, ___ (potere) avvisarmi!", "Secondo la stampa, l'attore ___ (sposarsi) in segreto.", "Senza di voi non ce l'___ (io, fare).", "Le mie amiche ___ (restare) di più, ma il volo partiva."],
      trasformaHint: "Trasforma usando il condizionale passato.",
      trasforma: ["Ha detto: «Arriverò alle otto».", "Volevo vedere la Sardegna, ma non ho potuto.", "Dovevate chiamarmi!", "Pensavo: «Pioverà».", "I ladri sono entrati dalla finestra. (non confermato)", "Volevamo restare, ma era tardi."],
      leggi: {
        text: [
          "Cara agenzia, vi scrivo per esprimere la mia delusione per il viaggio in Toscana. Nel programma c'era scritto che avremmo visitato Firenze, Siena e San Gimignano in tre giorni.",
          "Invece il pullman è arrivato a Siena con quattro ore di ritardo e non abbiamo visto San Gimignano. La guida ci aveva promesso che avremmo recuperato il giorno dopo, ma non è successo.",
          "Avrei preferito un programma meno ricco ma rispettato. Vi chiedo un rimborso parziale. Cordiali saluti, Laura Bassi.",
        ],
        questions: ["Che cosa c'era scritto nel programma?", "Che cosa è successo invece?", "Che cosa aveva promesso la guida?", "Che cosa avrebbe preferito Laura? Che cosa chiede?"],
      },
      ascolta: {
        script: [
          { who: "Paola", text: "Non sei venuto al matrimonio di Luca! Ti abbiamo aspettato." },
          { who: "Andrea", text: "Lo so, mi dispiace. Sarei venuto, ma il mio volo da Cagliari è stato cancellato." },
          { who: "Paola", text: "Avresti potuto prendere il traghetto!" },
          { who: "Andrea", text: "Ci ho pensato, ma sarei arrivato a cerimonia finita. Gli ho promesso che li avrei invitati a cena." },
        ],
        questions: ["Dove non è andato Andrea?", "Perché?", "Che cosa avrebbe potuto fare, secondo Paola?", "Perché non l'ha fatto? Che cosa ha promesso?"],
      },
      parla: ["Racconta un viaggio che avresti voluto fare diversamente.", "Che cosa ti avevano detto dell'Italia prima di conoscerla?", "Presenta una regione italiana in un minuto.", "Che cos'è il campanilismo? Esiste nel tuo paese?"],
      role: ["L'IA è un amico che non è venuto alla tua festa: chiedigli perché.", "Esprimi la tua delusione con il condizionale passato.", "Accetta le sue scuse e fate pace."],
      dettato: ["avrei voluto vederlo", "Ha detto che sarebbe venuta.", "Avresti dovuto dirmelo.", "il capoluogo della regione", "le regioni a statuto speciale", "Saremmo rimasti volentieri."],
      traduci: ["Ha detto: «Ti scriverò». (Ha detto che…)", "Volevo chiamarti ma ero senza telefono. (Ti avrei…)", "Dovevi studiare di più! (rimprovero)", "Pensavo: «Verranno in treno». (Pensavo che…)", "Volevamo visitare Matera. (rimpianto)", "Secondo i giornali, il sindaco ha mentito. (non confermato)"],
      scrivi: { hint: "Rispondi alla lettera di Laura Bassi (parte 6) come responsabile dell'agenzia (150–180 parole): scusati, spiega che cosa avreste dovuto fare e proponi una soluzione.", start: "Gentile signora Bassi," },
    }),
  };
})();
