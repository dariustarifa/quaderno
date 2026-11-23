// Unità 65 · Burocrazia — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[65] = {
    n: 65,
    level: "B2",
    title: "Burocrazia",
    goal: "Capire moduli, avvisi e comunicazioni ufficiali e sbrigare pratiche, usando il passivo con «andare» (il modulo va compilato), «da» + infinito e il lessico amministrativo.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "La burocrazia italiana ha una lingua tutta sua: frasi lunghe, passivi, parole che non si usano da nessun'altra parte. Chi vive in Italia deve imparare a capirla: per la residenza, il codice fiscale, il medico, le tasse.",
              "Grammatica: il passivo con «andare» per esprimere obbligo («La domanda va presentata entro il 30 giugno»), «da» + infinito («documenti da allegare»), il participio presente (il richiedente, il sottoscritto) e il si passivante.",
              "Imparerai anche a tradurre il «burocratese» in italiano semplice.",
            ],
          },
          {
            kind: "intro", title: "Burocratese e italiano semplice", hint: "Un'anticipazione",
            examples: [
              { it: "Il modulo va compilato in stampatello. = Bisogna compilare il modulo in stampatello.", es: "andare + participio: obbligo" },
              { it: "Documenti da allegare: copia del passaporto. = Bisogna allegare…", es: "da + infinito" },
              { it: "Il sottoscritto chiede il rilascio del certificato. = Io chiedo il certificato.", es: "formula ufficiale" },
            ],
            text: ["Lo stesso contenuto, due registri molto lontani."],
          },
          { kind: "speak", title: "La tua esperienza", hint: "Prima di cominciare: qual è la pratica burocratica più complicata che hai dovuto fare? Com'è andata?", items: ["Una volta ho dovuto…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della burocrazia", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il modulo", "la domanda (amministrativa)", "la pratica", "lo sportello", "l'anagrafe",
              "il codice fiscale", "la residenza", "il permesso di soggiorno", "l'autocertificazione", "la marca da bollo",
              "lo SPID", "la PEC", "il richiedente", "il sottoscritto", "la scadenza",
              "il rilascio", "il rinnovo", "allegare", "presentare (una domanda)", "sbrigare una pratica",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sostantivo", title: "Verbi e sostantivi",
            hint: "Scrivi il sostantivo burocratico corrispondente.",
            items: ["rilasciare", "rinnovare", "richiedere", "certificare", "iscriversi", "firmare", "consegnare", "versare (denaro)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione, come se spiegassi una pratica a un amico appena arrivato in Italia.", items: ["fare la residenza", "il codice fiscale", "prendere il numero allo sportello", "la marca da bollo", "lo SPID", "rinnovare il permesso di soggiorno", "l'autocertificazione", "sbrigare una pratica"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Sigle e codici", hint: "Leggere lettere e numeri",
            text: [
              "Le lettere dell'alfabeto si dicono spesso con il nome di una città: A come Ancona, B come Bologna, C come Como, D come Domodossola, E come Empoli, F come Firenze, G come Genova…",
              "Sigle: SPID (spìd), PEC (pèc), INPS (ìnps), CAF (càf), ISEE (isèe), CIE (ci-i-e).",
              "Allo sportello si parla in modo chiaro e lento, e si ripetono i dati importanti.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Dettare un codice fiscale.", items: ["R come Roma, S come Savona, S come Savona.", "M come Milano, R come Roma, A come Ancona.", "ottantacinque, E come Empoli, zero due.", "H come hotel, cinquecentouno, Z come zeta.", "Ripeto: R, S, S, M, R, A."] },
          { kind: "shadow", title: "Allo sportello", hint: "Ripeti con cortesia.", items: ["Buongiorno, ho il numero quarantadue.", "Dovrei rinnovare il permesso di soggiorno.", "Che documenti devo portare?", "Serve la marca da bollo?", "Posso fare tutto online con lo SPID?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passivo con «andare»", hint: "Obbligo e necessità",
            text: [
              "«Andare» + participio passato è un passivo che esprime obbligo: «Il modulo va firmato» = deve essere firmato.",
              "Si usa solo nei tempi semplici (va, andava, andrà, andrebbe), mai nei tempi composti.",
              "Con alcuni verbi esprime una conseguenza negativa: «Il documento è andato perso» (si è perso), «I biglietti sono andati esauriti».",
              "Il participio concorda con il soggetto: «Le domande vanno presentate entro marzo».",
            ],
            table: { head: ["con «dovere»", "con «andare»"], rows: [["deve essere firmato", "va firmato"], ["devono essere allegati", "vanno allegati"], ["doveva essere pagata", "andava pagata"], ["dovrà essere rinnovato", "andrà rinnovato"]] },
          },
          k.table("Con «andare»", [
            ["La domanda deve essere presentata entro il 30.", "La domanda va presentata entro il 30."],
            ["I documenti devono essere consegnati allo sportello.", ""],
            ["La tassa doveva essere pagata a gennaio.", ""],
            ["Il permesso dovrà essere rinnovato fra due anni.", ""],
            ["Le firme devono essere autenticate.", ""],
            ["Il modulo deve essere compilato in stampatello.", ""],
          ], "Riscrivi ogni frase con il passivo con «andare».", ["con andare"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con «andare» al tempo giusto + participio concordato.",
            items: [
              "Il codice fiscale ___ (indicare) in ogni modulo.", "Le ricevute ___ (conservare) per cinque anni.", "La bolletta ___ (pagare) entro la fine del mese scorso, ma me ne sono dimenticato.", "Il passaporto ___ (rinnovare) l'anno prossimo.", "La foto ___ (incollare) nello spazio indicato.", "I bambini sotto i sei anni non ___ (registrare) separatamente.", "Purtroppo la mia domanda ___ (perdere).", "Questi problemi ___ (risolvere) subito, secondo me.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Altre strutture del burocratese", hint: "Da + infinito, participio presente, si passivante",
            text: [
              "«Da» + infinito: indica qualcosa che deve essere fatto: «documenti da allegare», «pratiche da sbrigare», «il modulo è da compilare».",
              "Participio presente come sostantivo o aggettivo: il richiedente (chi richiede), il dichiarante, il sottoscritto, l'ente erogante, la normativa vigente.",
              "Si passivante e impersonale: «Si comunica che…», «Si prega di…», «Si rende noto che…».",
              "Formule fisse: «Il/La sottoscritto/a… nato/a a… il… CHIEDE…», «Ai sensi della legge…», «In allegato si trasmette…».",
            ],
          },
          k.negativa(["Bisogna allegare la copia del documento.", "Chi fa la domanda deve avere diciotto anni.", "Vi informiamo che l'ufficio resterà chiuso.", "Per favore, non fumate.", "Ci sono ancora tre pratiche che devo finire.", "Io chiedo il certificato di residenza."], "Riscrivi ogni frase in burocratese, con la struttura più adatta (da + infinito, participio presente, si passivante, formula ufficiale).", "burocratese"),
          {
            kind: "intro", title: "Tradurre il burocratese", hint: "La semplificazione",
            text: ["Da anni lo Stato italiano invita gli uffici a scrivere in modo più semplice. Le regole: frasi brevi, verbi attivi, soggetto chiaro, parole comuni. «Si rende noto che è fatto obbligo ai residenti di provvedere…» → «I residenti devono…»."],
          },
          {
            kind: "fill", title: "In italiano semplice", hint: "Scrivi l'equivalente comune della parola tra parentesi.",
            items: ["Lei deve ___ (recarsi) in Comune.", "Bisogna ___ (provvedere al pagamento).", "Il documento è ___ (pervenuto) ieri.", "Non ___ (è consentito) fumare.", "Il certificato vi sarà ___ (rilasciato) in tre giorni.", "La ___ (normativa vigente) cambia spesso."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("All'anagrafe", "Lucia, appena arrivata a Bologna, va all'ufficio anagrafe per la residenza.", [
            { who: "Impiegato", text: "Buongiorno, numero cinquantasette? Prego, mi dica." },
            { who: "Lucia", text: "Buongiorno. Mi sono trasferita a Bologna il mese scorso e vorrei fare la residenza." },
            { who: "Impiegato", text: "Ha già il codice fiscale? E un documento d'identità valido?" },
            { who: "Lucia", text: "Sì, ecco il passaporto e il codice fiscale. Ho anche il contratto d'affitto." },
            { who: "Impiegato", text: "Bene. Il modulo va compilato e firmato qui. Poi, entro quarantacinque giorni, passerà un vigile per verificare che lei abiti davvero all'indirizzo indicato." },
            { who: "Lucia", text: "E se non sono a casa quando passa?" },
            { who: "Impiegato", text: "Le lascerà un avviso. In quel caso va chiamato il numero indicato per fissare un appuntamento." },
          ], ["Perché Lucia va all'anagrafe?", "Quali documenti le chiede l'impiegato?", "Che cosa deve fare con il modulo?", "Che cosa succederà entro quarantacinque giorni?", "Che cosa deve fare se non è a casa?", "Trova due passivi con «andare» nel dialogo."]),
          k.listen("Lo sfogo", "Lucia racconta la sua giornata a un amico.", [
            { who: "Lucia", text: "Tre ore di fila! E alla fine mi mancava un foglio: la copia del contratto andava firmata anche dal proprietario." },
            { who: "Pietro", text: "Classico. Ma l'hai chiesto se si poteva fare online?" },
            { who: "Lucia", text: "Sì: con lo SPID si poteva fare tutto da casa. Ma per avere lo SPID serviva… la residenza!" },
            { who: "Pietro", text: "Benvenuta in Italia!" },
          ], ["Quanto tempo ha aspettato Lucia?", "Che cosa le mancava?", "Perché non ha potuto fare tutto online?", "Che cosa significa la battuta finale di Pietro?", "Racconta una situazione «circolare» simile che hai vissuto."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Avviso ai cittadini", [
            "AVVISO. Si rende noto che, a decorrere dal 1° marzo, le domande per l'iscrizione ai servizi educativi per la prima infanzia (asili nido) vanno presentate esclusivamente in modalità telematica, attraverso il portale del Comune.",
            "Per l'accesso al portale è necessario essere in possesso di SPID o di Carta d'Identità Elettronica (CIE). I richiedenti privi di tali strumenti potranno rivolgersi allo Sportello del Cittadino, previo appuntamento.",
            "Documenti da allegare: attestazione ISEE in corso di validità; eventuale certificazione relativa a disabilità del minore; autocertificazione relativa alla situazione lavorativa dei genitori.",
            "Le domande pervenute oltre il termine del 15 aprile non saranno prese in considerazione ai fini della graduatoria. Per ulteriori informazioni si prega di consultare il sito istituzionale o di contattare l'ufficio competente.",
          ], ["Di che cosa parla l'avviso?", "Che cosa cambia dal 1° marzo?", "Che cosa serve per accedere al portale? E chi non ce l'ha?", "Quali documenti vanno allegati?", "Che cosa succede alle domande presentate dopo il 15 aprile?", "Riscrivi tutto l'avviso in italiano semplice, in cinque frasi brevi."]),
          k.spagna("Com'è la burocrazia nel tuo paese? Racconta una pratica tipica (passaporto, residenza, tasse) e confrontala con quella italiana."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Sopravvivere allo sportello", hint: "Formule utili",
            text: ["«Scusi, è qui la fila per…?», «Che documenti servono?», «Mi può spiegare in parole semplici?», «Dove va firmato?», «Entro quando va presentato?», «Posso farlo online?», «Mi può dare una ricevuta?», «A chi mi devo rivolgere?»."],
          },
          k.rispondi(["Quale pratica burocratica ti fa più paura?", "La burocrazia digitale ha migliorato le cose? Perché?", "Hai mai perso una scadenza importante? Che cosa è successo?", "Che cosa cambieresti negli uffici pubblici del tuo paese?", "Perché, secondo te, il linguaggio burocratico è così complicato?", "Come ti prepari prima di andare in un ufficio pubblico?"]),
          { kind: "speak", title: "Istruzioni", hint: "Spiega a un amico straniero, passo per passo, come fare una pratica del tuo paese (passaporto, patente, iscrizione all'università). Usa «va / vanno» + participio almeno quattro volte.", items: ["Prima di tutto, va prenotato…"] },
          {
            kind: "roleplay", title: "Lo sportello impossibile", hint: "Sei all'ufficio delle entrate per un problema con una multa. L'IA è un impiegato molto burocratico.",
            steps: ["Spiega il problema.", "Chiedi di spiegarti le sue risposte in parole semplici.", "Chiedi quali documenti vanno presentati e entro quando.", "Proponi una soluzione alternativa (online, per PEC).", "Fatti dare una ricevuta e il nome del responsabile."],
          },
          {
            kind: "roleplay", title: "Il nuovo coinquilino", hint: "Il tuo nuovo coinquilino (l'IA) è appena arrivato in Italia. Spiegagli che cosa deve fare nei primi mesi.",
            steps: ["Spiega come ottenere il codice fiscale.", "Spiega come fare la residenza.", "Spiega come scegliere il medico di base.", "Avvisalo sulle scadenze importanti.", "Rassicuralo con un po' di ironia."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti la tua peggiore (o migliore) esperienza con la burocrazia, in Italia o nel tuo paese.", items: ["La mia peggiore esperienza…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il modulo deve essere firmato. (andare)", "Bisogna allegare la ricevuta. (da + infinito)", "Chi chiede il certificato deve essere maggiorenne. (il richiedente)", "Vi informiamo che l'ufficio è chiuso. (si comunica che)", "Si rende noto che è fatto divieto di sosta. (italiano semplice)", "Il documento si è perso. (andare)", "Io chiedo il rinnovo del passaporto. (formula ufficiale)", "I biglietti sono finiti tutti. (andare esauriti)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "Domanda e traduzione", hint: "Scrivi una domanda formale (150–180 parole) a un ufficio comunale per chiedere un permesso (per un evento in piazza, per un posto auto, per un'iscrizione), con la formula «Il/La sottoscritto/a… chiede…». Poi riscrivi lo stesso testo in italiano semplice (100–130 parole).", rows: 22, items: ["Domanda formale:", "In italiano semplice:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: termini", ["il codice fiscale", "la marca da bollo", "il permesso di soggiorno", "l'autocertificazione", "documenti da allegare", "il sottoscritto"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il modulo va compilato in stampatello.", "Le domande vanno presentate entro il 15 aprile.", "Si prega di attendere il proprio turno.", "La pratica è andata persa.", "Mi può spiegare in parole semplici?"]),
          k.media([
            { type: "Film", title: "Quo vado? (Gennaro Nunziante, con Checco Zalone, 2016)", where: "Cerca dove vederlo su JustWatch", why: "Un impiegato pubblico pronto a tutto pur di non perdere il «posto fisso»: satira della burocrazia italiana." },
            { type: "Film", title: "Il posto (Ermanno Olmi, 1961)", where: "Cerca dove vederlo su JustWatch", why: "Un ragazzo affronta il concorso per un impiego in una grande azienda milanese: classico del neorealismo." },
            { type: "Sito", title: "Agenzia delle Entrate", where: "agenziaentrate.gov.it", why: "Cerca la pagina sul codice fiscale: un ottimo esercizio di lettura del linguaggio amministrativo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Descrivi la scena più divertente del film: che cosa succede e che cosa dice della burocrazia italiana?", items: ["La scena che mi ha fatto ridere di più…"] },
        ],
      },
    ],

    exam: k.exam(65, {
      parole: ["il modulo", "lo sportello", "l'anagrafe", "il codice fiscale", "l'autocertificazione", "la marca da bollo", "il richiedente", "il rilascio", "sbrigare una pratica", "allegare"],
      contrario: ["rilasciare → sostantivo", "rinnovare → sostantivo", "richiedere → chi richiede", "dichiarare → chi dichiara", "firmare → sostantivo", "recarsi → italiano semplice"],
      verbiHint: "Riscrivi con il passivo con «andare».",
      verbiCols: ["con andare"],
      verbi: [["Deve essere pagato.", ""], ["Devono essere firmate.", ""], ["Doveva essere consegnato.", ""], ["Dovrà essere rinnovata.", ""]],
      completaHint: "Completa con la forma giusta.",
      completa: ["La domanda ___ (presentare, andare) entro il 30 giugno.", "Le ricevute ___ (conservare, andare) per dieci anni.", "Documenti ___ allegare: copia del passaporto.", "Il ___ (chi richiede) deve essere maggiorenne.", "Si ___ di non fumare.", "Il mio pacco è ___ perso.", "Il sottoscritto ___ (chiedere) il rilascio del certificato.", "I biglietti sono andati ___ in un'ora."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Bisogna compilare il modulo in stampatello. (andare)", "Ci sono ancora molte pratiche che devo sbrigare. (da + infinito)", "Vi informiamo che il servizio è sospeso. (si comunica)", "È fatto obbligo ai cittadini di differenziare i rifiuti. (italiano semplice)", "Chi dichiara deve firmare. (il dichiarante)", "Io chiedo l'iscrizione al corso. (formula ufficiale)"],
      leggi: {
        text: [
          "Dal prossimo anno, il rinnovo della carta d'identità potrà essere richiesto solo su appuntamento, da prenotare sul sito del Comune.",
          "Il giorno dell'appuntamento vanno portati: una fototessera recente, il vecchio documento e la ricevuta del pagamento. In caso di furto o smarrimento, va presentata anche la denuncia.",
          "Il documento non viene consegnato subito: arriva per posta all'indirizzo di residenza entro sei giorni lavorativi.",
        ],
        questions: ["Come si potrà chiedere il rinnovo della carta d'identità?", "Che cosa va portato il giorno dell'appuntamento?", "Che cosa serve in caso di furto?", "Come e quando arriva il nuovo documento?"],
      },
      ascolta: {
        script: [
          { who: "Impiegata", text: "Buongiorno. Per il rinnovo del permesso il modulo va compilato online e poi spedito dall'ufficio postale." },
          { who: "Sig. Mendes", text: "E che documenti vanno allegati?" },
          { who: "Impiegata", text: "Passaporto, contratto di lavoro e una marca da bollo da sedici euro. Le ricevute vanno conservate fino alla consegna del permesso." },
          { who: "Sig. Mendes", text: "Grazie. Speriamo che non vada perso niente!" },
        ],
        questions: ["Come va presentata la domanda di rinnovo?", "Quali documenti vanno allegati?", "Quanto costa la marca da bollo?", "Fino a quando vanno conservate le ricevute?"],
      },
      parla: ["Spiega come si fa una pratica burocratica del tuo paese.", "Racconta un problema che hai avuto con la burocrazia.", "Traduci in italiano semplice un avviso ufficiale.", "Burocrazia digitale: vantaggi e svantaggi."],
      role: ["L'IA è un impiegato dell'anagrafe che usa solo burocratese.", "Chiedi spiegazioni e fatti dire quali documenti vanno presentati.", "Riassumi la conversazione a un amico in italiano semplice."],
      dettato: ["va compilato", "documenti da allegare", "il richiedente", "si prega di", "la marca da bollo", "è andato perso"],
      traduci: ["La tassa deve essere pagata entro marzo. (andare)", "Bisogna allegare due foto. (da + infinito)", "Vi informiamo che l'orario cambia. (si rende noto)", "Chi fa domanda deve essere residente. (il richiedente)", "La lettera si è persa. (andare)", "Si prega di provvedere al pagamento. (italiano semplice)"],
      scrivi: { hint: "Scrivi una guida (180–220 parole) per uno straniero che arriva nella tua città: che cosa va fatto nel primo mese, quali documenti vanno preparati, dove ci si deve rivolgere. Usa almeno cinque passivi con «andare».", start: "Appena arrivati, va richiesto…" },
    }),
  };
})();
