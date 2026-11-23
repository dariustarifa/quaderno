// Unità 80 · Il mio italiano — B2: tutto in italiano. Ripasso integrato finale. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[80] = {
    n: 80,
    level: "B2",
    title: "Il mio italiano",
    goal: "Preparare ed esporre una presentazione finale sul proprio percorso con l'italiano, ripassando in modo integrato tutta la grammatica e le strategie del livello B2.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "L'ultima unità", hint: "Che cosa farai",
            text: [
              "Sei arrivato alla fine del Quaderno: ottanta unità, dal primo «ciao» al livello B2. In questa unità ripassi tutto ciò che hai imparato nel B2 e prepari una presentazione finale: «Il mio italiano».",
              "Ripasso integrato: concordanza dei tempi, periodo ipotetico dell'irrealtà e misto, discorso indiretto, domande indirette, registri, nominalizzazione, passivo con «andare», passato e trapassato remoto, concessive, connettivi avanzati, «fare» e «lasciare» + infinito, futuro di supposizione, impersonali, verbi pronominali, gerundio composto e participio assoluto.",
              "Alla fine dell'unità sarai pronto per l'esame di livello B2.",
            ],
          },
          {
            kind: "intro", title: "Tutto il B2 in quattro frasi", hint: "Un'anticipazione",
            examples: [
              { it: "Se non avessi cominciato questo corso, adesso non leggerei Calvino.", es: "periodo ipotetico misto" },
              { it: "Benché all'inizio non ce la facessi, non ho mollato.", es: "concessiva + verbo pronominale" },
              { it: "Finita l'ultima unità, mi sono chiesto che cosa avrei fatto dopo.", es: "participio assoluto + domanda indiretta" },
              { it: "Il mio professore mi ha detto che ce l'avrei fatta.", es: "discorso indiretto" },
            ],
            text: ["Ogni frase usa almeno due strutture del B2."],
          },
          { kind: "speak", title: "Bilancio", hint: "Prima di cominciare: qual è la cosa di cui sei più orgoglioso del tuo percorso con l'italiano?", items: ["La cosa di cui sono più orgoglioso…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico del percorso", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il percorso", "il traguardo", "la tappa", "i progressi", "la costanza",
              "la motivazione", "lo scoglio", "superare un ostacolo", "fare passi avanti", "mettersi alla prova",
              "la padronanza", "la scioltezza", "l'autonomia", "la soddisfazione", "il punto di partenza",
              "guardarsi indietro", "porsi un obiettivo", "non mollare", "togliersi una soddisfazione", "il bilancio",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["progredire → (sostantivo)", "costante → (sostantivo)", "motivare → (sostantivo)", "sciolto (nel parlare) → (sostantivo)", "autonomo → (sostantivo)", "soddisfare → (sostantivo)", "padrone (di una lingua) → (sostantivo)", "obiettivo → (aggettivo: oggettivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase sul tuo percorso con ogni espressione.", items: ["il punto di partenza", "lo scoglio più grande", "fare passi avanti", "non mollare", "togliersi una soddisfazione", "guardarsi indietro", "porsi un nuovo obiettivo", "il traguardo"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ripasso di pronuncia", hint: "Tutto quello che conta",
            text: [
              "Le doppie (fatto, anno, cappuccino), le vocali aperte e chiuse più comuni (bène, perché), l'accento delle parole sdrucciole (tàvolo, sàbato, scrìvere), l'intonazione delle domande e delle frasi sospese.",
              "Per la presentazione: velocità moderata, pause dopo le idee importanti, voce che scende alla fine delle affermazioni, contatto visivo con il pubblico (o con la telecamera).",
              "Registrati, riascoltati e confronta con le tue registrazioni delle prime unità: sentirai la differenza.",
            ],
          },
          { kind: "shadow", title: "Frasi da presentazione", hint: "Con sicurezza.", items: ["Buongiorno a tutti, e grazie di essere qui.", "Oggi vorrei raccontarvi il mio percorso con l'italiano.", "All'inizio non ce la facevo nemmeno a presentarmi.", "Se mi avessero detto che sarei arrivato fin qui, non ci avrei creduto.", "Grazie per l'attenzione: ci sono domande?"] },
          { kind: "shadow", title: "Scioglilingua finale", hint: "Lentamente, poi veloce.", items: ["Trentatré trentini entrarono a Trento, tutti e trentatré trotterellando.", "Sopra la panca la capra campa, sotto la panca la capra crepa.", "Apelle figlio di Apollo fece una palla di pelle di pollo."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: tempi e modi del B2", hint: "La mappa completa",
            text: [
              "Il B2 ti ha dato gli strumenti per collocare con precisione ogni azione nel tempo, nella realtà o nell'ipotesi, e per scegliere il registro giusto.",
            ],
            table: { head: ["struttura", "esempio"], rows: [["congiuntivo trapassato", "pensavo che fosse partito"], ["periodo ipotetico irreale", "se avessi saputo, sarei venuto"], ["periodo ipotetico misto", "se avessi studiato, ora saprei"], ["trapassato remoto", "appena ebbe finito, uscì"], ["passivo con andare", "il modulo va firmato"], ["futuro di supposizione", "avrà perso il treno"], ["condizionale giornalistico", "si sarebbe dimesso"]] },
          },
          k.table("Il verbo giusto", [
            ["Pensavo che tu (partire) già ieri.", "fossi partito"],
            ["Se l'(sapere, io), sarei venuto.", ""],
            ["Se avessi accettato quel lavoro, ora (vivere) a Milano.", ""],
            ["Appena (finire, lui) il discorso, uscì.", ""],
            ["Non risponde: (addormentarsi, futuro anteriore).", ""],
            ["Secondo indiscrezioni, il ministro (dimettersi, condizionale passato).", ""],
            ["La domanda (presentare, andare) entro venerdì.", ""],
          ], "Scrivi la forma giusta del verbo.", ["verbo"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo nel tempo e nel modo giusti.",
            items: [
              "Benché ___ (essere) stanca, continuò a studiare.", "Non sapevo se il corso ___ (piacermi).", "Mi chiese dove ___ (io, imparare) l'italiano così bene.", "___ (finire) l'ultima unità, ho festeggiato.", "___ (studiare) ogni giorno, ho fatto molti progressi.", "Mi ha detto che il giorno dopo ___ (lui, partire).", "È il corso più lungo che io ___ (fare) mai.", "Ce l'___ (fare, io): sono arrivato al B2!",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: strutture e stile", hint: "Dalla frase al testo",
            text: [
              "Connettivi avanzati: dal momento che, affinché, purché, a meno che, senza che, ragion per cui. Concessive: benché, sebbene, nonostante, pur + gerundio, anche se.",
              "Causativi: fare / lasciare + infinito (mi ha fatto cambiare idea, lasciami parlare). Impersonali: ci si, si è + aggettivo plurale, bisogna che.",
              "Verbi pronominali: farcela, cavarsela, prendersela, andarsene, metterci, volerci. Alterati: casetta, librone, tempaccio.",
              "Stile: riprese per evitare ripetizioni, punteggiatura, registro coerente, nominalizzazione con misura.",
            ],
          },
          k.negativa(["Ero stanco. Ho continuato. (benché)", "Il professore mi ha detto: «Ce la farai». (discorso indiretto)", "Dove hai studiato? (Mi chiese…)", "Ho finito il corso e poi sono partito per l'Italia. (participio assoluto)", "Probabilmente ha dimenticato l'appuntamento. (futuro anteriore)", "Il discorso: io ho cambiato idea. (fare + infinito)"], "Riscrivi ogni frase con la struttura indicata.", "struttura B2"),
          {
            kind: "intro", title: "La presentazione finale", hint: "Struttura",
            text: ["1. Apertura (saluto, tema, scaletta). 2. Il punto di partenza: perché hai cominciato. 3. Il percorso: le tappe, gli scogli, i momenti di svolta. 4. Che cosa sai fare oggi. 5. Che cosa avresti fatto diversamente. 6. I prossimi obiettivi. 7. Chiusura e domande. Durata: cinque minuti."],
          },
          {
            kind: "fill", title: "Formule per la presentazione", hint: "Completa con: innanzitutto, passiamo ora, se mi avessero detto, ce l'ho fatta, col senno di poi, per concludere.",
            items: ["___, vorrei ringraziarvi per essere qui.", "___ che sarei arrivato al B2, non ci avrei creduto.", "___ al momento più difficile del percorso.", "Alla fine, ___: ho superato l'esame.", "___, avrei studiato di più i verbi.", "___, vi lascio con i miei prossimi obiettivi."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La presentazione di Carmen", "Una studentessa presenta il suo percorso alla fine del corso.", [
            { who: "Carmen", text: "Buongiorno a tutti. Oggi vorrei raccontarvi come l'italiano mi ha cambiato la vita. Innanzitutto, il punto di partenza: due anni fa non sapevo nemmeno ordinare un caffè." },
            { who: "Carmen", text: "Ho cominciato perché mi ero innamorata di un film, «La vita è bella». Pensavo che sarebbe stato facile, visto che parlo spagnolo. Mi sbagliavo." },
            { who: "Carmen", text: "Lo scoglio più grande è stato il congiuntivo. Benché lo studiassi ogni giorno, all'inizio non ce la facevo a usarlo parlando. Poi, guardando film e parlando con amici italiani, è diventato naturale." },
            { who: "Carmen", text: "Se non avessi fatto quel viaggio a Bologna, forse adesso non parlerei così. Lì ho capito che sbagliare non era un problema: bisognava buttarsi." },
            { who: "Carmen", text: "Per concludere, il mio prossimo obiettivo è il C1. E un giorno, chissà, vorrei vivere in Italia. Grazie per l'attenzione: ci sono domande?" },
          ], ["Qual era il punto di partenza di Carmen?", "Perché ha cominciato a studiare italiano? Che cosa pensava?", "Qual è stato lo scoglio più grande? Come l'ha superato?", "Che cosa è successo a Bologna?", "Quali sono i suoi prossimi obiettivi?", "Trova almeno sei strutture del B2 nella presentazione."]),
          k.listen("La telefonata alla nonna", "Un ragazzo racconta alla nonna italiana che ha passato l'esame B2.", [
            { who: "Daniel", text: "Nonna! Ce l'ho fatta: ho superato l'esame B2!" },
            { who: "Nonna", text: "Ma che bravo! Lo sapevo che ce l'avresti fatta. E adesso? Smetterai di studiare?" },
            { who: "Daniel", text: "Macché! Adesso voglio leggere tutti i libri che mi hai regalato e che non riuscivo a capire." },
            { who: "Nonna", text: "Allora ti mando anche le lettere del nonno. Erano scritte in dialetto, ma te le traduco io." },
          ], ["Che notizia dà Daniel alla nonna?", "Come reagisce la nonna?", "Che cosa vuole fare adesso Daniel?", "Che cosa gli offre la nonna?", "Riferisci la conversazione al discorso indiretto."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Breve storia di una lingua", [
            "L'italiano è nato da un caso piuttosto raro: una lingua scelta grazie ai libri. Nel Trecento Dante, Petrarca e Boccaccio scrissero capolavori nel volgare di Firenze, e quei testi divennero il modello per chi voleva scrivere bene in tutta la penisola.",
            "Per secoli, però, l'italiano fu soprattutto una lingua scritta. Nella vita quotidiana si parlavano i dialetti. Quando, nel 1840, Alessandro Manzoni pubblicò la versione definitiva dei «Promessi sposi», lo fece dopo aver rivisto tutto il romanzo sul modello del fiorentino parlato: andò, come disse lui stesso, a «risciacquare i panni in Arno».",
            "Al momento dell'Unità, nel 1861, solo una piccola minoranza degli italiani usava davvero l'italiano per parlare: secondo le stime del linguista Tullio De Mauro, forse meno di tre su cento. A diffondere la lingua comune furono, nel secolo successivo, la scuola obbligatoria, il servizio militare, le migrazioni interne e, soprattutto, la radio e la televisione.",
            "Oggi l'italiano è parlato da circa sessantacinque milioni di persone ed è studiato in tutto il mondo, spesso non per necessità, ma per amore: della musica, dell'arte, del cibo, del cinema, della letteratura.",
            "Chi lo impara da adulto, come te, entra a far parte di questa storia: una lingua che è nata dai libri e che continua a vivere grazie a chi sceglie di farla propria.",
          ], ["Perché l'italiano è nato «grazie ai libri»?", "Che cosa si parlava nella vita quotidiana per secoli?", "Che cosa fece Manzoni? Che cosa significa «risciacquare i panni in Arno»?", "Quanti italiani parlavano italiano nel 1861, secondo De Mauro?", "Che cosa ha diffuso la lingua comune?", "Perché, secondo il testo, molti studiano l'italiano oggi? E tu?"]),
          k.spagna("Scrivi la storia del tuo italiano: perché hai cominciato, che cosa ti ha fatto continuare, che cosa ti ha dato. Usa almeno dieci strutture diverse del B2."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Rispondere alle domande del pubblico", hint: "L'ultima parte della presentazione",
            text: ["«Grazie per la domanda», «Se ho capito bene, mi chiede se…», «È una bella domanda: ci devo pensare un attimo», «Non ne sono sicuro, ma credo che…», «Come dicevo prima…», «Spero di aver risposto»."],
          },
          k.rispondi(["Che cosa sapevi fare in italiano all'inizio del corso? E adesso?", "Qual è stata l'unità più difficile? E la più divertente?", "Che cosa avresti fatto diversamente?", "Quale film, libro o podcast ti ha aiutato di più?", "Che cosa farai per non dimenticare l'italiano?", "Qual è il tuo prossimo obiettivo?"]),
          { kind: "speak", title: "La presentazione finale", hint: "Prepara e registra la tua presentazione «Il mio italiano» (cinque minuti), seguendo la struttura della pagina di grammatica. Riascoltala e confrontala con la tua prima registrazione del corso.", items: ["Buongiorno a tutti. Oggi vorrei raccontarvi…"] },
          {
            kind: "roleplay", title: "Le domande della commissione", hint: "Hai appena fatto la tua presentazione. L'IA è una commissione d'esame che ti fa domande difficili, anche su argomenti del B2.",
            steps: ["Ringrazia e invita le domande.", "Rispondi a una domanda sulla grammatica (spiega una struttura).", "Rispondi a una domanda di attualità con un'opinione sfumata.", "Riformula una domanda che non hai capito bene.", "Chiudi riassumendo il tuo percorso in tre frasi."],
          },
          {
            kind: "roleplay", title: "Conversazione libera", hint: "Parla per dieci minuti con l'IA, come con un amico italiano, di qualsiasi argomento. Alla fine chiedile di indicarti i tre errori più frequenti che hai fatto.",
            steps: ["Inizia la conversazione con naturalezza.", "Cambia argomento almeno due volte.", "Usa almeno un modo di dire e un proverbio.", "Racconta un aneddoto al passato.", "Chiedi un parere sul tuo italiano."],
          },
          { kind: "speak", title: "Un messaggio al futuro", hint: "Registra un messaggio di due minuti per te stesso tra un anno: come parli oggi, che cosa speri di saper fare, che cosa non dovrai dimenticare.", items: ["Caro me fra un anno…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non ho studiato abbastanza e oggi non parlo bene. (periodo ipotetico misto)", "Ero stanco, ma ho finito. (pur + gerundio)", "Il professore mi ha detto: «Domani avrai i risultati». (discorso indiretto)", "Quando cominci? (Mi chiese… al passato)", "Probabilmente è arrivata. (futuro anteriore)", "Il modulo deve essere firmato. (andare)", "Ho finito l'esame e sono uscito. (participio assoluto)", "Sono riuscito! (farcela, passato prossimo)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Il mio italiano", hint: "Scrivi il testo della tua presentazione finale (300–350 parole): punto di partenza, percorso, scogli, momenti di svolta, che cosa sai fare oggi, che cosa avresti fatto diversamente, prossimi obiettivi. Usa almeno dodici strutture diverse del B2 e cura coesione, punteggiatura e registro.", rows: 22, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: strutture del B2", ["se l'avessi saputo", "benché fosse tardi", "finito il corso", "avrà perso il treno", "va compilato", "ce l'ho fatta"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi finali", ["Se mi avessero detto che sarei arrivato fin qui, non ci avrei creduto.", "Benché all'inizio non ce la facessi, non ho mollato.", "Finita l'ultima unità, mi sono posto un nuovo obiettivo.", "La lingua è nata dai libri e vive grazie a chi la sceglie.", "Grazie per l'attenzione: ci sono domande?"]),
          k.media([
            { type: "Film", title: "Dante (Pupi Avati, 2022)", where: "Cerca dove vederlo su JustWatch", why: "La vita del poeta raccontata da Boccaccio: un viaggio alle origini della lingua italiana." },
            { type: "YouTube", title: "Roberto Benigni legge Dante (TuttoDante)", where: "YouTube / raiplay.it", why: "Benigni spiega e recita i canti della Divina Commedia con passione e ironia: la prova finale del tuo ascolto." },
            { type: "Libro", title: "I promessi sposi (Alessandro Manzoni, 1840)", where: "Libreria, biblioteca o testo libero online", why: "Il romanzo che ha dato forma all'italiano moderno: leggi il primo capitolo, «Quel ramo del lago di Como…»." },
          ]),
          k.caccia(),
          { kind: "speak", title: "L'ultima parola", hint: "Hai finito il Quaderno. Racconta in un minuto che cosa farai adesso con il tuo italiano. Complimenti!", items: ["Adesso che ho finito il Quaderno…"] },
        ],
      },
    ],

    exam: k.exam(80, {
      parole: ["il traguardo", "lo scoglio", "la costanza", "la padronanza", "la scioltezza", "fare passi avanti", "mettersi alla prova", "non mollare", "guardarsi indietro", "il bilancio"],
      contrario: ["progredire → sostantivo", "costante → sostantivo", "sciolto → sostantivo", "autonomo → sostantivo", "punto di partenza → contrario", "mollare → contrario"],
      verbiHint: "Scrivi la forma giusta del verbo.",
      verbiCols: ["verbo"],
      verbi: [["Pensavo che lui (arrivare) già.", ""], ["Se (sapere, io), te l'avrei detto.", ""], ["Se avessi studiato, ora (parlare) meglio.", ""], ["Appena (finire, lei), uscì.", ""], ["Non risponde: (uscire, futuro anteriore).", ""], ["Il ministro (dimettersi, condizionale giornalistico).", ""]],
      completaHint: "Completa con la forma o la parola giusta.",
      completa: ["Benché ___ (essere) tardi, continuammo.", "Mi chiese dove ___ (io, vivere) prima.", "___ (finire) il corso, partirò per l'Italia.", "Il modulo ___ (firmare, andare) entro lunedì.", "Il suo discorso mi ha ___ riflettere.", "Quando ___ (essere) giovani, ___ (sentirsi) invincibili.", "Ci ___ molta pazienza per imparare una lingua.", "È il libro più bello che io ___ (leggere)."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Non sono andato in Italia e oggi non parlo fluentemente. (periodo ipotetico misto)", "Il professore disse: «Tornerò domani». (discorso indiretto)", "Ero malato, ma sono venuto. (pur + gerundio)", "Probabilmente ha dimenticato. (futuro anteriore)", "Quando ebbe finito, se ne andò. (participio assoluto)", "Il ministro si è dimesso. (notizia non confermata)"],
      leggi: {
        text: [
          "Secondo un'indagine tra studenti stranieri di italiano, la motivazione principale per imparare la lingua non è il lavoro, ma la cultura: arte, musica, cinema e cucina.",
          "Molti raccontano che, superato il livello intermedio, il rapporto con la lingua cambia: non la si studia più soltanto, la si vive, leggendo libri, guardando film senza sottotitoli e parlando con amici italiani.",
          "Lo scoglio più citato resta il congiuntivo; eppure, quasi tutti dicono che, una volta imparato, è diventato il loro modo preferito di esprimere dubbi, desideri e sfumature.",
        ],
        questions: ["Qual è la motivazione principale degli studenti stranieri?", "Come cambia il rapporto con la lingua dopo il livello intermedio?", "Qual è lo scoglio più citato?", "Che cosa dicono gli studenti del congiuntivo, una volta imparato?"],
      },
      ascolta: {
        script: [
          { who: "Esaminatrice", text: "Mi racconti come ha imparato l'italiano." },
          { who: "Candidato", text: "Ho cominciato da solo, con un quaderno di esercizi. Se non avessi avuto costanza, avrei mollato dopo un mese." },
          { who: "Esaminatrice", text: "E che cosa le è servito di più?" },
          { who: "Candidato", text: "Guardare film e parlare con italiani. Benché all'inizio mi vergognassi, alla fine ce l'ho fatta." },
        ],
        questions: ["Come ha cominciato a studiare il candidato?", "Che cosa sarebbe successo senza costanza?", "Che cosa gli è servito di più?", "Trova un periodo ipotetico, una concessiva e un verbo pronominale."],
      },
      parla: ["Presenta in tre minuti il tuo percorso con l'italiano.", "Spiega una struttura del B2 con esempi.", "Che cosa avresti fatto diversamente?", "Quali sono i tuoi prossimi obiettivi?"],
      role: ["L'IA è la commissione dell'esame finale.", "Rispondi a domande sul tuo percorso e su un tema di attualità.", "Usa almeno dieci strutture diverse del B2."],
      roleHint: "Simulazione orale finale del livello B2.",
      dettato: ["se l'avessi saputo", "benché fosse tardi", "finito il corso", "avrà dimenticato", "ce l'ho fatta", "non mollare"],
      traduci: ["Non ho viaggiato e oggi non conosco l'Italia. (periodo ipotetico misto)", "Mi disse: «Ti aiuterò». (discorso indiretto)", "Era difficile, ma ci sono riuscito. (benché + farcela)", "Dove abiti? (Mi chiese… al passato)", "Finii il libro e lo prestai. (participio assoluto)", "Probabilmente sono già partiti. (futuro anteriore)"],
      scrivi: { hint: "Scrivi (200–240 parole) una lettera a una persona che sta per cominciare a studiare l'italiano: racconta la tua esperienza, dai consigli concreti e incoraggiala. Usa almeno otto strutture diverse del B2.", start: "Caro futuro studente di italiano," },
    }),
  };
})();
