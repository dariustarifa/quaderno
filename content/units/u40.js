// Unità 40 · Si dice che… — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[40] = {
    n: 40,
    level: "B1",
    title: "Si dice che…",
    goal: "Parlare di voci, abitudini e stereotipi in modo generale e impersonale, con il «si» impersonale e passivo.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di quello che «si dice», delle abitudini di un popolo, dei pettegolezzi e degli stereotipi, senza dire chi fa l'azione.",
              "Grammatica: il «si» impersonale e il «si» passivo in tutti i tempi («si è parlato», «si sono vendute»), con i verbi modali («si può», «si deve») e con i verbi riflessivi («ci si»).",
              "Hai già visto il «si» nell'unità 29: ora lo approfondisci con i tempi composti e con i casi difficili.",
            ],
          },
          {
            kind: "intro", title: "Si dice che…", hint: "Un'anticipazione",
            text: ["«Si dice che» introduce una voce, una cosa che non è sicura: si usa spesso con il congiuntivo («Si dice che sia ricchissimo»).", "Il «si» passivo concorda con il nome: «Si vende una casa», «Si vendono case»."],
            examples: [
              { it: "Si dice che il nuovo vicino sia un attore famoso.", es: "voce non confermata" },
              { it: "In Italia si mangia la pasta quasi ogni giorno.", es: "abitudine generale" },
              { it: "Ieri si è parlato molto di te.", es: "tempo composto" },
            ],
          },
          { kind: "speak", title: "Che cosa si dice del tuo paese?", hint: "Prima di cominciare: quali stereotipi si sentono sul tuo paese? Sono veri?", items: ["Del mio paese si dice che…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Voci e stereotipi", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il pettegolezzo", "spettegolare", "la voce (che gira)", "il luogo comune", "lo stereotipo",
              "il pregiudizio", "generalizzare", "l'usanza", "la tradizione", "l'abitudine",
              "il modo di dire", "la fama", "avere la reputazione di", "esagerare", "smentire",
              "confermare", "a quanto pare", "si mormora", "secondo voci", "fare una brutta figura",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["pettegolezzo → (verbo)", "generalizzare → (sostantivo)", "esagerare → (sostantivo)", "abitudine → (aggettivo)", "confermare → (sostantivo)", "smentire → (sostantivo)", "tradizione → (aggettivo)", "pregiudizio → (verbo: avere…)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: si mormora che → Si mormora che il direttore stia per dimettersi.", items: ["si dice che", "si vendono", "si è parlato", "ci si diverte", "non si deve", "il luogo comune", "a quanto pare", "esagerare"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il tono del pettegolezzo", hint: "Intonazione",
            text: [
              "Il pettegolezzo si racconta a voce bassa, con pause e un tono di complicità: «Sai che cosa si dice…?», «Non dirlo a nessuno, ma…».",
              "Per prendere le distanze da una voce: «Dicono che…», «Si sente dire che…», «Io non ci credo, però…».",
              "Attenzione a «ci si»: si pronuncia veloce, quasi una parola sola: «ci si vede» (ci vediamo, informale).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti con il tono giusto.", items: ["Sai che cosa si dice in ufficio?", "Non dirlo a nessuno, ma pare che si sposino.", "Dicono che sia stato licenziato.", "Io non ci credo, però è quello che si sente dire.", "Va bene, ci si vede domani!"] },
          { kind: "shadow", title: "Abitudini", hint: "Ripeti con tono neutro, da documentario.", items: ["In Italia si cena verso le otto.", "Al bar si beve il caffè in piedi.", "A Natale si mangia il panettone.", "Non si mette il formaggio sulla pasta con il pesce.", "Ci si saluta con due baci."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il si nei tempi composti", hint: "Si + essere",
            text: [
              "Nei tempi composti il «si» vuole sempre l'ausiliare «essere»: «Si è mangiato bene», «Si è parlato di te».",
              "Se c'è un nome (si passivo), il participio concorda con il nome: «Si sono vendute tutte le case», «Si è vista una stella cadente».",
              "Se il verbo normalmente usa «essere» (andare, partire…), il participio va al plurale maschile: «Si è partiti presto», «Si è arrivati tardi».",
            ],
            table: { head: ["", "esempio"], rows: [["impersonale (avere)", "si è lavorato molto"], ["passivo", "si sono venduti i biglietti"], ["verbi con essere", "si è partiti all'alba"], ["riflessivi", "ci si è divertiti"]] },
          },
          k.table("Il si in tutti i tempi", [
            ["mangiare bene", "si mangia bene", "si è mangiato bene", ""],
            ["vendere case", "si vendono case", "", ""],
            ["partire presto", "", "si è partiti presto", ""],
            ["divertirsi", "ci si diverte", "", ""],
            ["dire molte cose", "", "", "si diranno molte cose"],
          ], "Completa: presente, passato prossimo e futuro con il «si».", ["presente", "passato prossimo", "futuro"]),
          {
            kind: "fill", title: "Si è…", hint: "Completa con il «si» al passato prossimo del verbo tra parentesi.",
            items: [
              "Ieri alla festa ___ (ballare) fino alle tre.", "In quel ristorante ___ (mangiare) benissimo.", "Durante la riunione ___ (parlare) solo di soldi.", "In pochi minuti ___ (vendere) tutti i biglietti.", "Per arrivare in tempo ___ (partire) alle cinque.", "Alla cena ___ (divertirsi) molto.", "Quest'anno ___ (costruire) tre nuove scuole.", "In quella casa ___ (vivere) bene per anni.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Casi particolari", hint: "Modali, aggettivi e riflessivi",
            text: [
              "Con i verbi modali: «si può / si deve / si vuole» + infinito. Se segue un nome plurale, anche il modale va al plurale: «Si possono prenotare i biglietti online».",
              "Con essere / diventare + aggettivo, l'aggettivo va al plurale: «Quando si è giovani, si è spesso impazienti».",
              "Con i verbi riflessivi, «si si» diventa «ci si»: «Ci si alza presto», «Ci si annoia». Al passato: «Ci si è alzati presto».",
              "Con un pronome diretto, «si» va dopo: «Lo si fa», «La si vede spesso» (lingua scritta).",
            ],
          },
          {
            kind: "fill", title: "Casi difficili", hint: "Completa con la forma giusta.",
            items: ["Qui non ___ fumare. (potere)", "In questo negozio ___ pagare solo in contanti. (dovere)", "___ prenotare i biglietti anche online. (potere, con «i biglietti»)", "Quando ___ stanchi, si lavora male. (essere)", "In montagna ___ presto la mattina. (svegliarsi)", "Dopo una lunga camminata ___ sempre affamati. (sentirsi)"],
          },
          {
            kind: "intro", title: "Riferire voci", hint: "Si dice che + congiuntivo",
            text: ["Per riferire una voce non confermata: «Si dice che…», «Pare che…», «Sembra che…», «Si mormora che…» + congiuntivo.", "Se l'informazione è sicura: «È stato confermato che…» + indicativo. Al giornale: «secondo indiscrezioni» (secondo voci non ufficiali)."],
          },
          k.negativa(["La gente dice che è molto ricco.", "Le persone vendono case a un euro.", "Abbiamo mangiato benissimo.", "Le persone si annoiano in questo paese.", "In Italia le persone cenano tardi.", "Tutti sono partiti all'alba."], "Trasforma ogni frase usando il «si» impersonale o passivo, senza dire chi fa l'azione.", "con il «si»"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Pettegolezzi di condominio", "Due vicine chiacchierano sulle scale.", [
            { who: "Sig.ra Pina", text: "Signora Carla, ha sentito? Si dice che quelli del terzo piano si separino." },
            { who: "Sig.ra Carla", text: "Ma no! Chi l'ha detto?" },
            { who: "Sig.ra Pina", text: "Eh, si sentono le discussioni tutte le sere. E pare che lui dorma sul divano." },
            { who: "Sig.ra Carla", text: "Ma secondo me si esagera sempre in questo palazzo. Ieri l'ho visto: era tranquillissimo." },
            { who: "Sig.ra Pina", text: "Sarà… Però si vede che qualcosa non va. Hanno anche messo in vendita la macchina." },
            { who: "Sig.ra Carla", text: "Ma forse ne comprano una nuova! Lasciamoli in pace, su." },
          ], ["Che cosa si dice dei vicini del terzo piano?", "Su che cosa si basa la signora Pina?", "Che cosa pensa la signora Carla dei pettegolezzi nel palazzo?", "Che cosa hanno messo in vendita i vicini?", "Come interpreta la cosa la signora Carla?"]),
          k.listen("Come si fa il caffè con la moka", "Un barista spiega il rito del caffè di casa.", [
            { who: "Barista", text: "La moka è un rito. Prima si riempie la caldaia d'acqua fino alla valvola, non di più." },
            { who: "Barista", text: "Poi si mette il caffè nel filtro senza pressarlo: si fa una piccola montagnetta e si livella con un cucchiaino." },
            { who: "Barista", text: "Si avvita bene e si mette sul fuoco basso. Quando si sente il gorgoglio, si spegne subito." },
            { who: "Barista", text: "E un consiglio: la moka non si lava con il sapone, solo con acqua. Si dice che il caffè venga più buono!" },
          ], ["Fino a dove si riempie la caldaia?", "Come si mette il caffè nel filtro?", "A che fuoco si mette la moka?", "Quando si spegne?", "Come si lava la moka? Perché?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Gli italiani: luoghi comuni veri e falsi", [
            "Si dice che gli italiani siano sempre in ritardo, che parlino con le mani, che vivano con la mamma fino a quarant'anni e che mangino pasta tre volte al giorno. Ma quanto c'è di vero?",
            "Sulla gestualità, il luogo comune è in parte vero: in Italia si gesticola molto, ma non dappertutto allo stesso modo. Al Sud si usano più gesti che al Nord.",
            "Sulla puntualità, dipende dalla situazione: al lavoro e dal medico si arriva in orario; a una cena tra amici, invece, arrivare con quindici minuti di ritardo è considerato normale.",
            "Quanto ai «mammoni», è vero che si lascia la casa dei genitori tardi, ma spesso non per scelta: gli stipendi bassi e gli affitti alti rendono difficile vivere da soli.",
            "E la pasta? Si mangia quasi tutti i giorni, è vero, ma una volta sola, come primo piatto. Gli stereotipi, insomma, contengono un pezzo di verità, ma si rischia sempre di generalizzare.",
          ], ["Quali stereotipi si sentono sugli italiani?", "È vero che gli italiani gesticolano? Dappertutto allo stesso modo?", "Come funziona la puntualità in Italia?", "Perché i giovani lasciano tardi la casa dei genitori?", "Quante volte si mangia la pasta, di solito?", "Qual è il rischio degli stereotipi, secondo il testo?"]),
          k.spagna("Quali luoghi comuni si sentono sul tuo paese? Quali sono veri e quali falsi? Usa il «si» impersonale almeno cinque volte."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare in generale", hint: "Formule utili",
            text: ["Per generalizzare con prudenza: «In genere…», «Di solito si…», «Molti pensano che…», «Non tutti, però…», «Dipende dalla regione».", "Per smentire un luogo comune: «Non è del tutto vero», «È un'esagerazione», «È un luogo comune che non regge»."],
          },
          k.rispondi(["Come si festeggia il compleanno nel tuo paese?", "Che cosa non si deve mai fare a tavola, secondo te?", "Quali luoghi comuni sugli italiani ti sembrano veri?", "Che cosa si dice di te in famiglia?", "Ti piacciono i pettegolezzi? Perché?", "Come si vive nella tua città rispetto a vent'anni fa?"]),
          { kind: "speak", title: "Le regole non scritte", hint: "Spiega con il «si» le regole non scritte di ogni situazione (almeno tre per ognuna).", items: ["in treno", "a una cena in casa di italiani", "in un ufficio pubblico", "in palestra", "in una riunione di lavoro", "in una chat di gruppo"] },
          {
            kind: "roleplay", title: "La voce in ufficio", hint: "In ufficio gira una voce: l'azienda sta per essere venduta. Un collega (l'IA) ne parla con te durante la pausa.",
            steps: ["Ascolta la voce e chiedi da dove viene.", "Esprimi dubbi con prudenza.", "Ipotizzate che cosa succederebbe.", "Decidete come verificare l'informazione.", "Chiudete la conversazione."],
          },
          {
            kind: "roleplay", title: "La guida per stranieri", hint: "Un amico straniero (l'IA) si trasferisce in Italia e ti fa domande sulle abitudini. Rispondi con il «si».",
            steps: ["Spiega come ci si saluta.", "Spiega come si mangia e a che ora.", "Spiega che cosa non si deve fare.", "Smentisci un luogo comune che crede vero.", "Dagli un consiglio finale."],
          },
          { kind: "speak", title: "Vero o falso?", hint: "Parla per due minuti di tre stereotipi sul tuo paese o sull'Italia: che cosa si dice, che cosa c'è di vero, che cosa è esagerato.", items: ["Si dice che…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["La gente dice che sono parenti. (Si dice che…)", "Abbiamo ballato tutta la notte. (con il «si»)", "Vendiamo biciclette usate. (come un cartello, con il «si»)", "Le persone si annoiano qui. (con «ci si»)", "Non è permesso fumare. (con «non si può»)", "Quando sei giovane, sei spesso impaziente. (con il «si»)", "Forse il direttore si dimette. (Pare che…)", "È tutto vero, è stato confermato. (È stato confermato che…)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Galateo per stranieri", hint: "Scrivi un piccolo galateo (200–220 parole) per gli stranieri che vengono a vivere nel tuo paese: come ci si saluta, come si mangia, che cosa si fa e che cosa non si fa. Usa il «si» in almeno dieci frasi, anche al passato.", rows: 16, items: ["Nel mio paese…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: il si", ["si è parlato", "si sono venduti", "ci si diverte", "si è partiti", "si possono prenotare", "si dice che"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Si dice che sia molto ricco.", "In Italia si cena tardi.", "Ieri si è mangiato benissimo.", "Ci si vede domani!", "Non si deve generalizzare."]),
          k.media([
            { type: "Film", title: "Benvenuti al Sud / Benvenuti al Nord", where: "Cerca dove vederli su JustWatch", why: "Due commedie costruite interamente sui luoghi comuni tra Nord e Sud Italia." },
            { type: "YouTube", title: "Italian stereotypes / stereotipi sugli italiani", where: "YouTube", why: "Cerca video in cui italiani reagiscono agli stereotipi: si ride molto e si impara tanto." },
            { type: "Libro", title: "La testa degli italiani, Beppe Severgnini", where: "Libreria, biblioteca", why: "Un giornalista accompagna un americano in Italia e spiega con ironia le abitudini degli italiani." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Quali luoghi comuni hai visto nel film o nel video? Ti sembrano veri o esagerati? Usa il «si».", items: ["Nel film si vede che…"] },
        ],
      },
    ],

    exam: k.exam(40, {
      parole: ["il pettegolezzo", "il luogo comune", "il pregiudizio", "generalizzare", "smentire", "l'usanza", "a quanto pare", "si mormora", "la fama", "esagerare"],
      contrario: ["confermare → contrario", "vero → contrario", "esagerare → sostantivo", "abitudine → aggettivo", "tradizione → aggettivo", "generalizzare → sostantivo"],
      verbiHint: "Completa: presente, passato prossimo e futuro con il «si».",
      verbiCols: ["presente", "passato prossimo", "futuro"],
      verbi: [["lavorare molto", "", "", ""], ["vendere i biglietti", "", "", ""], ["arrivare tardi", "", "", ""], ["annoiarsi", "", "", ""]],
      completaHint: "Completa con il «si» al tempo e nella forma giusta.",
      completa: ["Si dice che il sindaco ___ (volere) dimettersi.", "Ieri alla festa ___ (ballare) fino all'alba.", "In poche ore ___ (vendere) tutte le copie.", "___ (potere) pagare anche con la carta.", "Quando ___ (essere) stanchi, si sbaglia di più.", "In montagna ___ (alzarsi) presto.", "Per prendere il treno ___ (partire) alle sei.", "In questo ristorante ___ (mangiare) sempre bene."],
      trasformaHint: "Trasforma ogni frase con il «si», senza dire chi fa l'azione.",
      trasforma: ["La gente dice che è malato.", "Abbiamo parlato tutta la sera.", "In questo negozio vendono libri usati.", "Le persone si divertono molto a Carnevale.", "Tutti sono arrivati in ritardo.", "Non è permesso entrare con il cane."],
      leggi: {
        text: [
          "Cartello in un bar di Roma: «Qui il caffè si beve al banco: 1,20 euro. Al tavolo si paga il servizio: 2,50 euro.»",
          "«Il cappuccino dopo le 11 non si serve: è una regola della casa. Si accettano solo pagamenti con carta. Non si usa il bagno senza consumare.»",
          "«Si ringraziano i gentili clienti per la comprensione. Ci si vede domani!»",
        ],
        questions: ["Quanto si paga il caffè al banco? E al tavolo?", "Che cosa non si serve dopo le 11?", "Come si può pagare?", "Che cosa non si può fare senza consumare?"],
      },
      ascolta: {
        script: [
          { who: "Marco", text: "Sai che cosa si dice in ufficio? Pare che chiudano la sede di Torino." },
          { who: "Lisa", text: "Davvero? E chi l'ha detto?" },
          { who: "Marco", text: "Nessuno ufficialmente. Ma si è visto il direttore con quelli dell'agenzia immobiliare." },
          { who: "Lisa", text: "Mah, prima di preoccuparmi voglio una conferma. Si esagera sempre." },
        ],
        questions: ["Che cosa si dice in ufficio?", "Chi l'ha detto ufficialmente?", "Su che cosa si basa la voce?", "Che cosa pensa Lisa?"],
      },
      parla: ["Quali stereotipi si sentono sul tuo paese? Sono veri?", "Spiega le regole non scritte di un ristorante nel tuo paese.", "Racconta un pettegolezzo che si è rivelato falso.", "Com'è cambiato il modo in cui si vive nella tua città?"],
      role: ["Un amico (l'IA) ha sentito una voce su di te: chiedigli che cosa si dice.", "Smentisci la voce con argomenti.", "Spiega perché, secondo te, si diffondono queste voci."],
      dettato: ["Si dice che sia vero.", "si sono vendute", "ci si diverte", "Non si può fumare.", "si è partiti presto", "Quando si è giovani…"],
      traduci: ["La gente dice che è fidanzato. (Si dice che…)", "Abbiamo riso molto. (con il «si»)", "Affittiamo camere. (come cartello)", "Le persone si stancano presto. (con «ci si»)", "Non è permesso parcheggiare. (con «non si può»)", "Forse chiudono il cinema. (Pare che…)"],
      scrivi: { hint: "Scrivi un testo (150–180 parole) su uno stereotipo del tuo paese: che cosa si dice, che cosa c'è di vero e che cosa è esagerato. Usa il «si» almeno sei volte.", start: "Del mio paese si dice spesso che…" },
    }),
  };
})();
