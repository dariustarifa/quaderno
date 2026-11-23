// Unità 51 · Scuola e università — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[51] = {
    n: 51,
    level: "B1",
    title: "Scuola e università",
    goal: "Parlare di scuola, studi ed esami, ordinando gli eventi nel tempo con i connettivi temporali (prima che, dopo che, finché, appena…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare del sistema scolastico italiano, della tua esperienza di studente, degli esami e dei ricordi di scuola.",
              "Grammatica: i connettivi temporali e il modo che vogliono: «prima che» + congiuntivo, «prima di» + infinito, «dopo che» + indicativo, «finché (non)», «appena», «da quando», «ogni volta che», «mentre».",
              "Cultura: la maturità, l'esame che chiude la scuola superiore e che ogni italiano ricorda per tutta la vita.",
            ],
          },
          {
            kind: "intro", title: "Prima che…, dopo che…", hint: "Un'anticipazione",
            text: ["«Prima che» vuole il congiuntivo: «Studia prima che arrivino gli esami».", "Se il soggetto è lo stesso, si usa «prima di» + infinito: «Ripasso prima di dormire». «Dopo che» vuole l'indicativo: «Dopo che hai finito, chiamami»."],
            examples: [
              { it: "Devo finire la tesi prima che scada la borsa di studio.", es: "prima che + congiuntivo" },
              { it: "Prima di dare l'esame, ho studiato tre mesi.", es: "prima di + infinito (stesso soggetto)" },
              { it: "Appena ho saputo il voto, ho chiamato mia madre.", es: "appena + indicativo" },
            ],
          },
          { kind: "speak", title: "I tuoi ricordi di scuola", hint: "Prima di cominciare: che ricordo hai della tua scuola? Eri un bravo studente?", items: ["A scuola io…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Scuola e università", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la scuola dell'infanzia", "la scuola primaria", "le medie", "il liceo", "l'istituto tecnico",
              "la maturità", "la pagella", "l'interrogazione", "il compito in classe", "essere bocciato",
              "essere promosso", "il debito (scolastico)", "la lode", "l'appello", "la sessione d'esami",
              "il fuori corso", "la tesi", "il relatore", "marinare la scuola", "copiare",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["studiare → (aggettivo: che studia molto)", "bocciare → (sostantivo)", "promuovere → (sostantivo)", "interrogare → (sostantivo)", "laurearsi → (sostantivo)", "insegnare → (sostantivo: chi insegna)", "imparare → (sostantivo: l'…)", "scuola → (aggettivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: finché non → Non esco finché non ho finito i compiti.", items: ["prima che", "prima di", "dopo che", "appena", "finché non", "da quando", "ogni volta che", "l'interrogazione"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il ritmo della frase complessa", hint: "Pronuncia",
            text: [
              "Con i connettivi temporali le frasi diventano lunghe: fai una piccola pausa dopo la parte introdotta dal connettivo. «Appena ho finito l'esame, | ho chiamato mia madre».",
              "«Finché» ha l'accento sulla e finale e si scrive con l'accento acuto: fin-ché. Anche «perché», «affinché», «poiché».",
              "Il linguaggio della scuola è pieno di espressioni colloquiali: «essere secchione» (studiare troppo), «fare filone / sega / forca» (marinare la scuola, secondo la regione).",
            ],
          },
          { kind: "shadow", title: "Connettivi", hint: "Ripeti con la pausa giusta.", items: ["Appena suona la campanella, | usciamo.", "Prima che arrivi il professore, | ripasso gli appunti.", "Finché non avrai finito, | non uscirai.", "Da quando studio con te, | prendo voti migliori.", "Ogni volta che ho un'interrogazione, | non dormo."] },
          { kind: "shadow", title: "Frasi di scuola", hint: "Ripeti con la melodia di uno studente.", items: ["Prof, posso andare in bagno?", "Oggi interroga? Speriamo di no!", "Ho preso otto in latino!", "Mi hanno bocciato in matematica.", "Domani c'è il compito in classe."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Connettivi e modi", hint: "Quale modo dopo ogni connettivo",
            text: [
              "Con l'indicativo: quando, mentre, appena / non appena, dopo che, da quando, ogni volta che, finché (non).",
              "Con il congiuntivo: prima che (soggetti diversi). Nel registro curato anche «finché non» + congiuntivo per il futuro: «Aspetto finché non arrivi».",
              "Con l'infinito (stesso soggetto): prima di, dopo + infinito passato.",
              "«Finché» = per tutto il tempo che; «finché non» = fino al momento in cui. Spesso significano la stessa cosa: «Resto finché (non) finisci».",
            ],
            table: { head: ["connettivo", "modo"], rows: [["prima che", "congiuntivo"], ["prima di", "infinito"], ["dopo che / appena", "indicativo"], ["dopo", "infinito passato"]] },
          },
          k.table("Prima e dopo", [
            ["finire i compiti", "prima di finire i compiti", "dopo aver finito i compiti"],
            ["uscire di casa", "", ""],
            ["laurearsi", "", ""],
            ["dare l'esame", "", ""],
            ["arrivare a scuola", "", ""],
          ], "Scrivi l'espressione con «prima di» e con «dopo» + infinito passato.", ["prima di…", "dopo…"]),
          {
            kind: "fill", title: "Il modo giusto", hint: "Completa con il modo giusto del verbo tra parentesi (indicativo, congiuntivo o infinito).",
            items: [
              "Prima che il professore ___ (entrare), copiavamo i compiti.", "Prima di ___ (entrare) in classe, spegni il telefono.", "Appena ___ (io, finire) il liceo, sono partito per un anno.", "Dopo che ___ (tu, avere) i risultati, dimmi tutto.", "Non esco finché non ___ (io, finire) questo capitolo.", "Da quando ___ (lei, cambiare) scuola, è più felice.", "Ogni volta che ___ (esserci) un'interrogazione, ho mal di pancia.", "Dopo ___ (laurearsi), ha trovato subito lavoro.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il sistema scolastico italiano", hint: "Come funziona",
            text: [
              "Scuola dell'infanzia (3–6 anni) → scuola primaria, le «elementari» (5 anni) → scuola secondaria di primo grado, le «medie» (3 anni) → scuola secondaria di secondo grado (5 anni): licei, istituti tecnici o professionali.",
              "Alla fine c'è l'esame di Stato, chiamato «maturità», con voto in centesimi (da 60 a 100). Durante l'anno i voti vanno da 1 a 10 e il 6 è la sufficienza.",
              "All'università gli esami si valutano in trentesimi (da 18 a 30 e lode) e la laurea in centodecimi.",
            ],
          },
          {
            kind: "fill", title: "Connettivi", hint: "Completa con il connettivo giusto: prima che, prima di, dopo che, appena, finché, mentre, da quando, ogni volta che.",
            items: ["___ uscire, ricordati di prendere la pagella.", "___ ho saputo di essere stato promosso, ho festeggiato.", "___ studiavo, il mio coinquilino suonava la chitarra.", "Devo consegnare la tesi ___ finisca la sessione.", "___ ho un esame, bevo dieci caffè.", "___ insegna in quella scuola, è molto più motivata.", "Ripeterò la lezione ___ non la saprò a memoria.", "___ avete finito il compito, consegnatelo."],
          },
          {
            kind: "intro", title: "Raccontare il percorso di studi", hint: "Formule utili",
            text: ["«Ho fatto il liceo classico / scientifico», «Mi sono diplomato in…», «Mi sono iscritto a…», «Ho dato tutti gli esami tranne…», «Mi sono laureato con 110 e lode», «Ho fatto un Erasmus a…»."],
          },
          k.negativa(["Studio, poi esco. (prima di)", "Tu arrivi, io finisco di studiare. (prima che)", "Ho finito l'esame e ho chiamato casa. (appena)", "Ho cominciato a studiare il latino e da allora lo adoro. (da quando)", "Hai finito? Allora chiamami. (dopo che)", "Non esco: prima devo finire. (finché non)"], "Unisci le frasi con il connettivo indicato, usando il modo giusto.", "una sola frase"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La notte prima della maturità", "Due amici al telefono la sera prima dell'esame di maturità.", [
            { who: "Giulia", text: "Non riesco a dormire. Ogni volta che chiudo gli occhi, penso alla traccia del tema." },
            { who: "Matteo", text: "Anch'io. Prima che mi chiamassi stavo rileggendo Leopardi per la decima volta." },
            { who: "Giulia", text: "Mia madre dice che prima di un esame bisogna dormire, non studiare." },
            { who: "Matteo", text: "Ha ragione. Facciamo così: appena chiudiamo il telefono, spegniamo tutto e andiamo a letto." },
            { who: "Giulia", text: "Va bene. E domani, dopo che hai consegnato il tema, mandami un messaggio." },
            { who: "Matteo", text: "Promesso. E dopo l'orale, a luglio, andiamo al mare finché non finiscono i soldi!" },
          ], ["Perché Giulia non riesce a dormire?", "Che cosa faceva Matteo prima della telefonata?", "Che cosa consiglia la madre di Giulia?", "Che cosa decidono di fare appena chiudono il telefono?", "Che progetti hanno per luglio?"]),
          k.listen("Il professore che mi ha cambiato la vita", "Una donna racconta un ricordo di scuola in un podcast.", [
            { who: "Ilaria", text: "Alle medie ero una pessima studentessa. Da quando avevo cominciato la scuola, odiavo la matematica." },
            { who: "Ilaria", text: "Poi in terza media è arrivato il professor Bassi. Prima di cominciare la lezione, ci raccontava sempre una storia: un problema di matematica nascosto in un'avventura." },
            { who: "Ilaria", text: "Appena ho capito che la matematica poteva essere un gioco, ho cominciato a studiare." },
            { who: "Ilaria", text: "Oggi sono ingegnera. Ogni volta che risolvo un problema difficile, penso a lui." },
          ], ["Com'era Ilaria alle medie?", "Che cosa faceva il professor Bassi prima della lezione?", "Che cosa è cambiato quando Ilaria ha capito il metodo?", "Che lavoro fa oggi?", "Hai avuto un insegnante così? Raccontalo."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La maturità", [
            "In Italia l'esame di Stato alla fine della scuola superiore si chiama, quasi per tutti, «maturità». È un vero rito di passaggio: per molti è la prima grande prova della vita.",
            "Comincia a giugno con la prima prova scritta, uguale in tutta Italia: il tema di italiano. La mattina dell'esame milioni di persone aspettano di sapere quali sono le tracce, che vengono commentate da giornali e televisioni.",
            "Dopo il tema c'è la seconda prova, diversa secondo la scuola: latino o greco al liceo classico, matematica o fisica allo scientifico. Alla fine c'è il colloquio orale davanti a una commissione.",
            "La sera prima della prima prova si chiama «la notte prima degli esami», come una famosa canzone di Antonello Venditti e un film del 2006. Pochi riescono a dormire bene.",
            "Il voto finale va da sessanta a cento. Ma molti adulti, ripensando alla maturità anni dopo, dicono che il ricordo più bello non è il voto: sono le estati passate con gli amici subito dopo l'esame.",
          ], ["Che cos'è la maturità?", "Com'è la prima prova? Perché ne parlano i giornali?", "Che cos'è la seconda prova? Fai un esempio.", "Che cos'è «la notte prima degli esami»?", "Da quanto a quanto va il voto finale?", "Qual è il ricordo più bello per molti adulti? E per te, della tua scuola?"]),
          k.spagna("Com'è il sistema scolastico nel tuo paese? C'è un esame simile alla maturità? Usa almeno cinque connettivi temporali."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Confrontare sistemi scolastici", hint: "Formule utili",
            text: ["«Da noi invece…», «A differenza dell'Italia…», «Mentre in Italia…, nel mio paese…», «In entrambi i paesi…», «La differenza principale è che…»."],
          },
          k.rispondi(["Che scuola superiore hai fatto? Ti è piaciuta?", "Qual era la tua materia preferita? E quella che odiavi?", "Hai mai marinato la scuola o copiato a un compito?", "Come ti preparavi prima di un esame importante?", "Che cosa cambieresti del sistema scolastico del tuo paese?", "Che cosa hai imparato fuori dalla scuola che è stato più utile?"]),
          { kind: "speak", title: "Prima o dopo?", hint: "Racconta che cosa fai (o facevi) prima e dopo ogni momento, con prima di / prima che / dopo / dopo che.", items: ["un esame importante", "il primo giorno di lavoro", "una presentazione in pubblico", "un colloquio", "un lungo viaggio", "un appuntamento importante"] },
          {
            kind: "roleplay", title: "Il colloquio con il professore", hint: "Sei il genitore di uno studente che rischia di essere bocciato. Parli con il professore (l'IA). Usa il «Lei».",
            steps: ["Chiedi come va tuo figlio.", "Ascolta i problemi e fai domande.", "Chiedi che cosa può fare prima che finisca l'anno.", "Proponi una soluzione (ripetizioni, studio a casa…).", "Ringrazia e concorda il prossimo incontro."],
          },
          {
            kind: "roleplay", title: "Studiare insieme", hint: "Tu e un compagno (l'IA) avete un esame tra due settimane. Organizzate un piano di studio.",
            steps: ["Decidete che cosa studiare prima e che cosa dopo.", "Stabilite le regole (niente telefono finché non…).", "Decidete come ripassare prima dell'esame.", "Il compagno vuole uscire: convincilo ad aspettare.", "Fissate il piano."],
          },
          { kind: "speak", title: "Il mio percorso di studi", hint: "Racconta per due minuti il tuo percorso: scuole, esami importanti, momenti difficili, professori che ricordi e che cosa farai o vorresti fare in futuro.", items: ["Ho cominciato la scuola…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ripasso. Poi vado all'esame. (prima di)", "Arrivano i professori. Prima voglio finire. (prima che)", "Ho avuto il risultato e ho pianto di gioia. (appena)", "Ho cambiato scuola. Da allora sono felice. (da quando)", "Hai consegnato il compito? Poi puoi uscire. (dopo che)", "Non dormo. Prima devo finire la tesi. (finché non)", "Ho studiato tre anni e poi mi sono laureato. (dopo + infinito passato)", "Mi agito sempre agli esami. (ogni volta che)"], "Riscrivi ogni frase con il connettivo indicato."),
          { kind: "write", title: "Lettera a uno studente", hint: "Scrivi una lettera (220–250 parole) a uno studente che domani comincia la maturità o un esame importante: racconta la tua esperienza e dagli consigli su che cosa fare prima, durante e dopo l'esame. Usa almeno otto connettivi temporali.", rows: 18, items: ["Caro / Cara…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: connettivi", ["prima che arrivi", "prima di uscire", "dopo che hai finito", "appena ho saputo", "finché non torni", "da quando studio"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Mi hanno bocciato in latino.", "Ho preso trenta e lode.", "Domani c'è l'interrogazione.", "La notte prima degli esami non ho dormito.", "Ogni volta che studio con te, imparo."]),
          k.media([
            { type: "Canzone", title: "Notte prima degli esami, Antonello Venditti", where: "Spotify, YouTube", why: "La canzone del 1984 che ogni maturando conosce: nostalgia, paura e amore." },
            { type: "Film", title: "La scuola (Daniele Luchetti, 1995)", where: "Cerca dove vederlo su JustWatch", why: "L'ultimo giorno di scuola in un istituto tecnico romano, tra professori stanchi e studenti difficili. Divertente e amaro." },
            { type: "Serie", title: "Skam Italia", where: "Netflix", why: "Se l'hai cominciata nell'unità 5, adesso capirai molto di più della vita al liceo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Com'è la scuola nel film o nella serie? Che cosa succede prima e dopo gli esami?", items: ["Nel film la scuola…"] },
        ],
      },
    ],

    exam: k.exam(51, {
      parole: ["la pagella", "l'interrogazione", "essere bocciato", "il debito scolastico", "la maturità", "l'appello", "la tesi", "il relatore", "marinare la scuola", "il secchione"],
      contrario: ["promosso → contrario", "bocciare → sostantivo", "interrogare → sostantivo", "insegnare → chi insegna", "imparare → sostantivo", "scuola → aggettivo"],
      verbiHint: "Scrivi l'espressione con «prima di» e con «dopo» + infinito passato.",
      verbiCols: ["prima di…", "dopo…"],
      verbi: [["studiare", "", ""], ["partire", "", ""], ["diplomarsi", "", ""], ["consegnare", "", ""]],
      completaHint: "Completa con il modo giusto (indicativo, congiuntivo o infinito) o con il connettivo.",
      completa: ["Prima che ___ (finire) l'anno, devo recuperare il debito.", "Prima di ___ (rispondere), pensa bene.", "Appena ___ (io, sapere) il voto, ti scrivo.", "Dopo che ___ (voi, finire) il compito, uscite in silenzio.", "Non mi muovo finché non ___ (tu, arrivare).", "___ studio italiano, capisco le canzoni. (da quando)", "___ ho un esame, non dormo. (ogni volta che)", "Dopo ___ (laurearsi), è partita per Londra."],
      trasformaHint: "Unisci le frasi con il connettivo indicato.",
      trasforma: ["Studio. Poi esco. (prima di)", "Arrivano gli ospiti. Prima puliamo. (prima che)", "Ho saputo la notizia. Subito dopo ti ho chiamato. (appena)", "Ho finito la tesi. Poi sono andata in vacanza. (dopo + infinito passato)", "Vivo qui. Da allora sono felice. (da quando)", "Aspetto. Tu devi tornare. (finché non)"],
      leggi: {
        text: [
          "Lorenzo ha 19 anni e ha appena finito la maturità con 98 su 100. Da quando era piccolo sognava di studiare medicina, ma prima di iscriversi deve superare il test d'ingresso.",
          "Il test è molto difficile: ogni anno lo fanno decine di migliaia di studenti per pochi posti. Appena ha finito gli esami orali, Lorenzo ha cominciato a prepararsi.",
          "«Non vado al mare finché non avrò fatto il test», dice. I suoi amici lo prendono in giro, ma lui è convinto: prima che arrivi settembre, vuole essere pronto.",
        ],
        questions: ["Com'è andata la maturità di Lorenzo?", "Che cosa sognava da piccolo? Che cosa deve fare prima di iscriversi?", "Com'è il test d'ingresso?", "Che cosa ha deciso Lorenzo per l'estate?"],
      },
      ascolta: {
        script: [
          { who: "Mamma", text: "Sara, prima di uscire hai finito i compiti?" },
          { who: "Sara", text: "Quasi. Mi manca solo l'esercizio di inglese." },
          { who: "Mamma", text: "Allora non esci finché non l'hai finito. E appena torni, prepara lo zaino per domani." },
          { who: "Sara", text: "Va bene, ma posso uscire prima che faccia buio?" },
          { who: "Mamma", text: "Sì, se ti sbrighi." },
        ],
        questions: ["Che cosa chiede la mamma a Sara?", "Che cosa le manca?", "Che regole le dà la mamma?", "Che cosa chiede Sara? Che cosa risponde la mamma?"],
      },
      parla: ["Racconta il tuo percorso di studi.", "Confronta la scuola del tuo paese con quella italiana.", "Che cosa fai prima e dopo un esame importante?", "Racconta un insegnante che ricordi."],
      role: ["L'IA è uno studente agitato prima di un esame: rassicuralo.", "Dagli consigli su che cosa fare prima e dopo.", "Raccontagli la tua esperienza."],
      dettato: ["prima che finisca", "appena ho saputo", "finché non arrivi", "la maturità", "Mi hanno promosso.", "dopo aver studiato"],
      traduci: ["Studio. Poi vado a dormire. (prima di)", "Lui arriva. Prima voglio finire. (prima che)", "Ho saputo il voto e ho festeggiato. (appena)", "Ho finito la tesi e poi sono partito. (dopo + infinito passato)", "Lavoro qui. Da allora sono più tranquillo. (da quando)", "Non esco: prima devo finire. (finché non)"],
      scrivi: { hint: "Racconta (150–180 parole) il tuo esame più importante: che cosa hai fatto prima, com'è andato e che cosa è successo dopo. Usa almeno sei connettivi temporali.", start: "L'esame più importante della mia vita…" },
    }),
  };
})();
