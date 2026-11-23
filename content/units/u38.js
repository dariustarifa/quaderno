// Unità 38 · Fiabe e leggende — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[38] = {
    n: 38,
    level: "B1",
    title: "Fiabe e leggende",
    goal: "Leggere e raccontare fiabe, leggende e storie del passato, riconoscendo il passato remoto.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Leggerai e racconterai fiabe e leggende italiane, da Pinocchio a Colapesce.",
              "Grammatica: il passato remoto (andò, fece, disse), il tempo delle fiabe, dei romanzi e dei libri di storia. A questo livello l'obiettivo è riconoscerlo e capirlo bene; lo userai attivamente al livello B2.",
              "Nel Sud Italia il passato remoto si usa anche nella lingua parlata: «Ieri andai al mare» è normale a Palermo, molto meno a Milano.",
            ],
          },
          {
            kind: "intro", title: "C'era una volta un re…", hint: "Un'anticipazione: il passato remoto",
            text: ["Il passato remoto racconta fatti lontani e conclusi, senza legame con il presente. Le sue forme sono brevi e spesso irregolari: «fu, fece, disse».", "Nelle fiabe convive con l'imperfetto: imperfetto per la scena, passato remoto per i fatti."],
            examples: [
              { it: "C'era una volta un re che aveva tre figlie.", es: "imperfetto: la scena" },
              { it: "Un giorno il re partì per la guerra.", es: "passato remoto: un fatto" },
              { it: "Pinocchio disse una bugia e il naso gli crebbe.", es: "disse (dire), crebbe (crescere)" },
            ],
          },
          { kind: "speak", title: "La tua fiaba preferita", hint: "Prima di cominciare: qual era la tua fiaba preferita da bambino? Raccontala in breve con i tempi che conosci.", items: ["La mia fiaba preferita era…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il mondo delle fiabe", hint: "Spiega il significato di ogni parola in italiano.",
            placeholder: "significato",
            items: [
              "la fiaba", "la favola", "la leggenda", "il mito", "la morale",
              "il re / la regina", "il principe", "la strega", "il mago", "la fata",
              "l'orco", "il drago", "il bosco", "il castello", "l'incantesimo",
              "trasformarsi", "il tesoro", "la prova", "l'eroe", "vissero felici e contenti",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "infinito", title: "Riconosci il verbo",
            hint: "Scrivi l'infinito di ogni forma del passato remoto.",
            items: ["fu", "ebbe", "fece", "disse", "venne", "vide", "nacque", "prese", "scrisse", "volle", "seppe", "rimase"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento, come in una fiaba. Dilla ad alta voce e scrivila. Esempio: la strega → La strega trasformò il principe in un ranocchio.", items: ["c'era una volta", "un giorno", "la strega", "trasformarsi", "il bosco", "il tesoro", "la morale", "vissero felici e contenti"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Andò, partì, credé", hint: "L'accento del passato remoto",
            text: [
              "Nella terza persona singolare dei verbi regolari l'accento cade sull'ultima sillaba e si scrive: parlò, partì, credé (o credette).",
              "Attenzione: «parlo» (presente) e «parlò» (passato remoto) si distinguono solo per l'accento!",
              "Nella terza persona plurale l'accento va sulla terzultima sillaba: par-là-ro-no, par-tì-ro-no.",
              "Le forme irregolari hanno l'accento sulla penultima: fé-ce, dis-se, vèn-ne, nàc-que.",
            ],
            table: { head: ["", "pronuncia"], rows: [["parlo / parlò", "pàr-lo / par-lò"], ["partirono", "par-tì-ro-no"], ["fece / disse", "fé-ce / dìs-se"], ["nacque / venne", "nàc-que / vèn-ne"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti curando l'accento.", items: ["parlò, mangiò, arrivò, partì", "parlarono, mangiarono, arrivarono", "fu, ebbe, fece, disse", "venne, vide, nacque, morì"] },
          { kind: "shadow", title: "Come in una fiaba", hint: "Ripeti con la voce di chi racconta una storia ai bambini.", items: ["C'era una volta, in un paese lontano, un re molto triste.", "Un giorno arrivò al castello un vecchio con un mantello nero.", "La principessa aprì la scatola e vide una luce fortissima.", "E da quel giorno vissero tutti felici e contenti."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passato remoto regolare", hint: "Forma",
            text: [
              "Verbi in -are: -ai, -asti, -ò, -ammo, -aste, -arono (parlai, parlasti, parlò…).",
              "Verbi in -ere: -ei / -etti, -esti, -é / -ette, -emmo, -este, -erono / -ettero (credei o credetti, credé o credette…).",
              "Verbi in -ire: -ii, -isti, -ì, -immo, -iste, -irono (partii, partisti, partì…).",
              "Nelle fiabe e nei testi narrativi troverai soprattutto la terza persona: parlò, parlarono.",
            ],
            table: { head: ["", "parlare", "credere", "partire"], rows: [["io", "parlai", "credei / credetti", "partii"], ["tu", "parlasti", "credesti", "partisti"], ["lui / lei", "parlò", "credé / credette", "partì"], ["loro", "parlarono", "crederono / credettero", "partirono"]] },
          },
          {
            kind: "intro", title: "I più frequenti irregolari", hint: "Sono quasi tutti in -ere",
            text: [
              "Molti verbi irregolari sono irregolari solo in io, lui / lei e loro, e regolari nelle altre persone: «io dissi, tu dicesti, lui disse, noi dicemmo, voi diceste, loro dissero».",
              "essere: fui, fosti, fu, fummo, foste, furono. avere: ebbi, avesti, ebbe, avemmo, aveste, ebbero. fare: feci, facesti, fece… dire: dissi, dicesti, disse… venire: venni, venisti, venne… vedere: vidi, vedesti, vide… nascere: nacqui, nascesti, nacque…",
            ],
          },
          k.table("Riconosci e completa", [
            ["essere", "fui", "fu", ""],
            ["avere", "", "", "ebbero"],
            ["fare", "", "fece", ""],
            ["dire", "dissi", "", ""],
            ["venire", "", "", ""],
            ["vedere", "", "", ""],
          ], "Completa il passato remoto: io, lui / lei, loro.", ["io", "lui / lei", "loro"]),
          {
            kind: "fill", title: "Dal passato remoto al passato prossimo", hint: "Scrivi il passato prossimo che corrisponde alla forma tra parentesi.",
            items: ["(andò) Il principe ___ nel bosco.", "(fece) La strega ___ un incantesimo.", "(dissero) I contadini ___ la verità.", "(vide) La ragazza ___ una luce.", "(nacque) Il bambino ___ in una notte di tempesta.", "(rimasero) I fratelli ___ nel castello.", "(scrisse) Collodi ___ Pinocchio.", "(venne) Un vecchio ___ a chiedere aiuto."],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Passato remoto o passato prossimo?", hint: "Quando si usa",
            text: [
              "Passato remoto: fatti lontani e conclusi, senza legame con il presente: storia, biografie di personaggi del passato, fiabe, romanzi. «Garibaldi nacque nel 1807».",
              "Passato prossimo: fatti recenti o che hanno un effetto sul presente: «Ho vissuto a Roma tre anni (e questo è importante per me oggi)».",
              "Nel parlato del Nord quasi non si usa il passato remoto; nel Sud e in Toscana è più vivo. Nei testi scritti formali è normale.",
            ],
          },
          {
            kind: "fill", title: "Una fiaba", hint: "Completa con il passato remoto (fatti) o l'imperfetto (scena) del verbo tra parentesi.",
            items: ["C'___ (essere) una volta un mugnaio che ___ (avere) tre figli.", "Quando il mugnaio ___ (morire), ai figli ___ (lasciare) solo un mulino, un asino e un gatto.", "Il più piccolo, che ___ (ricevere) il gatto, ___ (essere) molto triste.", "Ma il gatto ___ (parlare) e gli ___ (dire): «Non preoccuparti, padrone».", "Il gatto ___ (andare) dal re e gli ___ (portare) molti regali.", "Alla fine il ragazzo ___ (sposare) la principessa e tutti ___ (vivere) felici."],
          },
          {
            kind: "intro", title: "Le parole delle fiabe", hint: "Formule fisse",
            text: ["Inizio: «C'era una volta…», «Tanto tempo fa…», «In un paese lontano lontano…».", "Svolta: «Un bel giorno…», «All'improvviso…», «Ma ecco che…».", "Fine: «…e vissero felici e contenti», «Stretta la foglia, larga la via, dite la vostra che ho detto la mia» (formula toscana)."],
          },
          k.negativa(["Il re partì per la guerra.", "Pinocchio disse una bugia.", "La fata apparve nel bosco.", "I fratelli ebbero paura.", "Il principe fece una promessa.", "Dante nacque a Firenze."], "Riscrivi ogni frase al passato prossimo, come la diresti oggi a voce.", "al passato prossimo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Pinocchio in breve", "Una maestra racconta ai bambini l'inizio di Pinocchio.", [
            { who: "Maestra", text: "C'era una volta… un pezzo di legno. Non era un legno di lusso, ma un semplice pezzo da catasta." },
            { who: "Maestra", text: "Un giorno quel pezzo di legno capitò nella bottega di un vecchio falegname, Geppetto, che voleva fabbricare un burattino." },
            { who: "Maestra", text: "Geppetto lo scolpì e lo chiamò Pinocchio. Ma appena il burattino ebbe le gambe, scappò dalla bottega e corse per la strada." },
            { who: "Maestra", text: "Geppetto vendette la sua giacca per comprargli l'abbecedario e mandarlo a scuola. Pinocchio, invece, vendette l'abbecedario per andare a vedere il teatro dei burattini." },
            { who: "Bambino", text: "E il naso? Quando gli crebbe il naso?" },
            { who: "Maestra", text: "Più avanti, quando disse le sue prime bugie alla Fata Turchina. Ma questa è un'altra storia!" },
          ], ["Che cos'era Pinocchio all'inizio?", "Chi era Geppetto? Che cosa voleva fare?", "Che cosa fece Pinocchio appena ebbe le gambe?", "Che sacrificio fece Geppetto? E che cosa fece Pinocchio con l'abbecedario?", "Quando crebbe il naso a Pinocchio?"]),
          k.listen("Un nonno racconta", "Un nonno siciliano racconta un ricordo usando il passato remoto, come si fa al Sud.", [
            { who: "Nonno", text: "Nel 1968, l'anno del terremoto del Belice, io avevo diciotto anni. Quella notte ci svegliammo tutti di colpo." },
            { who: "Nonno", text: "Mio padre ci prese per mano e uscimmo in strada in pigiama. Faceva un freddo terribile: era gennaio." },
            { who: "Nonno", text: "Dormimmo in macchina per due settimane. Poi venne l'esercito e ci diede delle tende." },
            { who: "Nonno", text: "Molti amici partirono per il Nord e per la Germania. Io restai, e qualche anno dopo conobbi tua nonna." },
          ], ["Che cosa successe nel 1968? Quanti anni aveva il nonno?", "Che cosa fece il padre quella notte?", "Dove dormirono? Per quanto tempo?", "Che cosa fecero molti amici?", "Che cosa fece il nonno?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La leggenda di Colapesce", [
            "Tanto tempo fa, a Messina, viveva un ragazzo di nome Nicola, figlio di un pescatore. Passava così tanto tempo in mare che tutti lo chiamavano Colapesce.",
            "Un giorno il re Federico, che era curioso di conoscere i segreti del mare, lo chiamò e gli chiese di scendere sul fondo per raccontargli che cosa c'era.",
            "Colapesce si tuffò e quando tornò raccontò meraviglie: pesci mai visti, coralli, tesori. Il re, per metterlo alla prova, gettò in mare una coppa d'oro e gli ordinò di riprenderla. Il ragazzo ci riuscì.",
            "Allora il re gettò in mare la sua corona, ancora più lontano. Colapesce si tuffò di nuovo, ma questa volta non tornò. Dal fondo vide che la Sicilia poggiava su tre colonne e che una era rovinata.",
            "Secondo la leggenda, Colapesce decise di restare sotto il mare per tenere in piedi la colonna e salvare la sua isola. E quando la terra trema, si dice che sia lui che cambia spalla.",
          ], ["Chi era Colapesce? Perché si chiamava così?", "Che cosa gli chiese il re?", "Che cosa raccontò dopo il primo tuffo?", "Come lo mise alla prova il re?", "Che cosa vide sul fondo del mare l'ultima volta?", "Che cosa si dice quando c'è un terremoto in Sicilia?"]),
          k.spagna("Racconta una leggenda del tuo paese o della tua regione. Prova a usare il passato remoto almeno cinque volte."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare una fiaba", hint: "Come si racconta",
            text: ["Struttura classica: situazione iniziale → problema → viaggio o prova → aiuto magico → soluzione → morale.", "A voce puoi raccontare con il passato prossimo; per esercitarti, prova anche con il passato remoto alla terza persona."],
          },
          k.rispondi(["Qual era la tua fiaba preferita? Raccontala.", "Ti piaceva che ti leggessero le fiabe prima di dormire? Chi lo faceva?", "Le fiabe classiche sono adatte ai bambini di oggi? Perché?", "Quale personaggio delle fiabe ti somiglia di più?", "Conosci una leggenda della tua città?", "Che cosa ci insegnano le fiabe, secondo te?"]),
          { kind: "speak", title: "Dal passato remoto al parlato", hint: "Leggi ogni frase e ripetila come la diresti a un amico, con il passato prossimo.", items: ["Garibaldi sbarcò in Sicilia nel 1860.", "Leonardo dipinse la Gioconda.", "I Romani costruirono il Colosseo.", "Marco Polo partì per la Cina e vi rimase molti anni.", "Galileo scoprì le lune di Giove."] },
          {
            kind: "roleplay", title: "La fiaba al contrario", hint: "Raccontate insieme una fiaba famosa cambiando il finale. L'IA comincia, tu continui.",
            steps: ["Scegliete insieme la fiaba.", "L'IA racconta l'inizio: tu aggiungi un cambiamento.", "Inventate un nuovo problema.", "Trovate una soluzione inaspettata.", "Decidete la nuova morale."],
          },
          {
            kind: "roleplay", title: "La guida turistica", hint: "Sei una guida a Messina. Racconti la leggenda di Colapesce a un gruppo di turisti. L'IA fa un turista curioso.",
            steps: ["Presenta il posto e la leggenda.", "Racconta la storia con ordine.", "Rispondi alle domande del turista.", "Spiega che cosa significa la leggenda per i siciliani.", "Saluta il gruppo."],
          },
          { kind: "speak", title: "La mia leggenda", hint: "Inventa e racconta in due minuti una leggenda sulla tua città: perché ha quel nome, o perché c'è un certo monumento.", items: ["Tanto tempo fa…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il principe è partito per un lungo viaggio. (al passato remoto)", "La strega ha fatto un incantesimo. (al passato remoto)", "Pinocchio ha detto una bugia. (al passato remoto)", "I due fratelli sono rimasti nel castello. (al passato remoto)", "Il re ebbe tre figli. (al passato prossimo)", "Colapesce vide la colonna rotta. (al passato prossimo)", "Un giorno arrivò un mago. (al passato prossimo)", "Alla fine si sposarono. (aggiungi la formula finale delle fiabe)"], "Trasforma ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Una fiaba moderna", hint: "Scrivi una fiaba (220–250 parole) ambientata oggi: un principe che lavora in un call center, una strega che fa l'influencer… Usa imperfetto per la scena e passato remoto (terza persona) per i fatti, e chiudi con una morale.", rows: 18, items: ["C'era una volta…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: passato remoto", ["fu", "ebbero", "disse", "nacque", "partirono", "vide"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["C'era una volta un re.", "Un giorno arrivò un mago.", "La principessa aprì la porta.", "Il burattino scappò.", "E vissero felici e contenti."]),
          k.media([
            { type: "Libro", title: "Fiabe italiane, Italo Calvino", where: "Biblioteca, libreria", why: "Calvino raccolse e riscrisse duecento fiabe di tutte le regioni d'Italia. Testi brevi, perfetti per il B1." },
            { type: "Film", title: "Pinocchio (Matteo Garrone, 2019)", where: "Cerca dove vederlo su JustWatch", why: "Una versione fedele e bellissima del libro di Collodi, con Roberto Benigni nel ruolo di Geppetto." },
            { type: "Film", title: "Il racconto dei racconti (Matteo Garrone, 2015)", where: "Cerca dove vederlo su JustWatch", why: "Tre fiabe barocche del Seicento napoletano, misteriose e un po' paurose. In inglese con atmosfere italiane: cerca la versione doppiata." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta la fiaba che hai letto o visto, prima con il passato prossimo, poi prova le frasi principali con il passato remoto.", items: ["C'era una volta…"] },
        ],
      },
    ],

    exam: k.exam(38, {
      parole: ["la fiaba", "la leggenda", "la morale", "l'incantesimo", "trasformarsi", "la strega", "l'orco", "il tesoro", "mettere alla prova", "tuffarsi"],
      contrario: ["fece → infinito", "disse → infinito", "nacque → infinito", "ebbero → infinito", "venne → infinito", "rimase → infinito"],
      verbiHint: "Completa il passato remoto: io, lui / lei, loro.",
      verbiCols: ["io", "lui / lei", "loro"],
      verbi: [["parlare", "", "", ""], ["partire", "", "", ""], ["essere", "", "", ""], ["prendere", "", "", ""]],
      completaHint: "Completa con il passato remoto (fatti) o con l'imperfetto (scena).",
      completa: ["C'___ (essere) una volta una ragazza che ___ (vivere) in un bosco.", "Un giorno la ragazza ___ (trovare) una chiave d'oro.", "La regina ___ (avere) tre figli e li ___ (amare) molto.", "Il lupo ___ (vedere) Cappuccetto Rosso e le ___ (dire): «Dove vai?».", "I due fratelli ___ (partire) all'alba.", "Mentre il re ___ (dormire), il ladro ___ (entrare).", "Garibaldi ___ (nascere) a Nizza nel 1807.", "Alla fine ___ (loro, vivere) felici e contenti."],
      trasformaHint: "Trasforma dal passato remoto al passato prossimo, o viceversa, come indicato.",
      trasforma: ["La fata apparve. (passato prossimo)", "I soldati vinsero la battaglia. (passato prossimo)", "Il re ha chiamato il ragazzo. (passato remoto)", "Pinocchio è scappato. (passato remoto)", "Dante scrisse la Commedia. (passato prossimo)", "I bambini hanno avuto paura. (passato remoto)"],
      leggi: {
        text: [
          "La Befana, secondo la tradizione, era una vecchia che viveva sola. Una notte i Re Magi bussarono alla sua porta per chiedere la strada per Betlemme e la invitarono ad andare con loro.",
          "La vecchia rifiutò, perché aveva troppo da fare in casa. Ma poco dopo si pentì: prese un sacco pieno di dolci e partì per cercare il bambino Gesù.",
          "Non lo trovò mai. Per questo, ogni anno, nella notte tra il 5 e il 6 gennaio, vola su una scopa e lascia dolci a tutti i bambini, sperando che uno di loro sia quello che cercava.",
        ],
        questions: ["Chi era la Befana, secondo la tradizione?", "Chi bussò alla sua porta? Che cosa le chiesero?", "Che cosa fece dopo aver rifiutato?", "Che cosa fa ogni anno? Perché?"],
      },
      ascolta: {
        script: [
          { who: "Guida", text: "Secondo la leggenda, Roma fu fondata da Romolo il 21 aprile del 753 avanti Cristo." },
          { who: "Guida", text: "Romolo e suo fratello Remo erano figli del dio Marte. Da piccoli furono abbandonati nel fiume Tevere e una lupa li allattò." },
          { who: "Guida", text: "Da grandi decisero di fondare una città, ma litigarono sul nome e sul luogo. Romolo uccise Remo e diede il suo nome alla città." },
        ],
        questions: ["Quando fu fondata Roma, secondo la leggenda?", "Di chi erano figli Romolo e Remo?", "Che cosa successe loro da piccoli?", "Perché litigarono? Come finì?"],
      },
      parla: ["Racconta la tua fiaba preferita.", "Racconta una leggenda del tuo paese.", "Trasforma al passato prossimo: «Colombo partì nel 1492 e arrivò in America».", "Le fiabe sono ancora utili oggi? Argomenta."],
      role: ["L'IA è un bambino che non vuole dormire: raccontagli una fiaba breve.", "Rispondi alle sue domande sui personaggi.", "Concludi con una morale."],
      dettato: ["C'era una volta", "il principe partì", "la strega disse", "nacque in un castello", "ebbero paura", "vissero felici e contenti"],
      traduci: ["Il re è morto. (passato remoto)", "La principessa ha visto il drago. (passato remoto)", "Sono venuti tre maghi. (passato remoto)", "Leopardi nacque a Recanati. (passato prossimo)", "I fratelli fecero un patto. (passato prossimo)", "La regina disse di no. (passato prossimo)"],
      scrivi: { hint: "Racconta (150–180 parole) una fiaba classica dal punto di vista del cattivo (il lupo, la strega…), con imperfetto e passato remoto.", start: "Tutti pensano che io sia cattivo, ma…" },
    }),
  };
})();
