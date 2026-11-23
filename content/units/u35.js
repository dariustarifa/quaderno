// Unità 35 · Desideri — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[35] = {
    n: 35,
    level: "B1",
    title: "Desideri",
    goal: "Esprimere desideri, richieste e preferenze su quello che fanno gli altri, distinguendo congiuntivo, indicativo e infinito.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a dire che cosa vuoi, che cosa preferisci e che cosa chiedi agli altri: «Voglio che tu venga», «Preferisco che restiate a casa», «Ti chiedo di aiutarmi».",
              "Grammatica: congiuntivo dopo i verbi di volontà e di desiderio, la differenza con l'infinito (stesso soggetto) e con l'indicativo (verbi di certezza e di percezione).",
              "Se conosci altre lingue romanze, questa struttura ti sembrerà familiare.",
            ],
          },
          {
            kind: "intro", title: "Voglio che… / Voglio…", hint: "Un'anticipazione: due soggetti o uno",
            text: ["Se il soggetto è diverso: verbo di volontà + «che» + congiuntivo: «Voglio che tu sia felice».", "Se il soggetto è lo stesso: verbo + infinito: «Voglio essere felice»."],
            examples: [
              { it: "Mia madre vuole che io studi medicina.", es: "due soggetti → congiuntivo" },
              { it: "Io voglio studiare musica.", es: "stesso soggetto → infinito" },
              { it: "Spero che vi piaccia il regalo.", es: "sperare che + congiuntivo" },
            ],
          },
          { kind: "speak", title: "Un desiderio", hint: "Prima di cominciare: che cosa desideri per te quest'anno? E per le persone che ami?", items: ["Quest'anno vorrei… e spero che…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Desideri e richieste", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "desiderare", "pretendere", "esigere", "augurarsi", "permettere",
              "vietare", "pregare (qualcuno di…)", "insistere", "accontentarsi", "il capriccio",
              "l'aspettativa", "deludere", "la richiesta", "il sogno", "l'ambizione",
              "realizzare", "rinunciare", "non vedere l'ora di", "avere voglia di", "fare a meno di",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["desiderare → (sostantivo)", "permettere → (sostantivo)", "richiedere → (sostantivo)", "deludere → (aggettivo)", "ambizione → (aggettivo)", "sognare → (sostantivo)", "pretendere → (sostantivo)", "accontentarsi → (aggettivo: chi si accontenta)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: non vedo l'ora di → Non vedo l'ora di partire per le vacanze.", items: ["voglio che", "preferisco che", "spero che", "ti chiedo di", "non vedo l'ora di", "ho voglia di", "mi auguro che", "permettere di"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Venga, vada, dica", hint: "Pronuncia del congiuntivo irregolare",
            text: [
              "I congiuntivi irregolari che nascono dalla prima persona: vengo → venga, dico → dica, esco → esca, scelgo → scelga, rimango → rimanga, tengo → tenga.",
              "Attenzione a «esca» (è-sca): la c è dura davanti alla a.",
              "Il tono delle richieste: «Vorrei che tu venissi» suona più gentile di «Voglio che tu venga». Lo vedrai meglio con il congiuntivo imperfetto (unità 41).",
            ],
            table: { head: ["indicativo (io)", "congiuntivo"], rows: [["vengo", "venga"], ["dico", "dica"], ["esco", "esca"], ["scelgo / rimango", "scelga / rimanga"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti con attenzione.", items: ["che venga, che dica, che esca", "che scelga, che rimanga, che tenga", "Voglio che tu venga con me.", "Preferisco che rimaniate a casa.", "Spero che scelgano bene."] },
          { kind: "shadow", title: "Richieste", hint: "Ripeti con un tono gentile.", items: ["Ti chiedo solo di ascoltarmi.", "Vorrei che fossi sincero con me.", "Mi auguro che vada tutto bene.", "Non pretendo che tu capisca.", "Ho bisogno che qualcuno mi aiuti."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Verbi di volontà e desiderio", hint: "Che + congiuntivo o di + infinito",
            text: [
              "Con «che» + congiuntivo: volere, preferire, desiderare, sperare, augurarsi, pretendere, esigere, avere bisogno, aspettarsi.",
              "Alcuni verbi preferiscono «di» + infinito anche con soggetti diversi, perché la persona è già nella frase: chiedere a qualcuno di, dire a qualcuno di, permettere a qualcuno di, vietare a qualcuno di, pregare qualcuno di. «Ti chiedo di venire» = «Ti chiedo che tu venga» (meno naturale).",
              "Stesso soggetto: sempre infinito: «Spero di vederti», «Preferisco restare».",
            ],
          },
          k.table("Congiuntivo irregolare", [
            ["dire", "dica", "", ""],
            ["uscire", "", "usciamo", ""],
            ["scegliere", "", "", "scelgano"],
            ["rimanere", "", "", ""],
            ["stare", "", "", ""],
            ["dare", "", "", ""],
          ], "Completa il congiuntivo presente: che io, che noi, che loro.", ["che io", "che noi", "che loro"]),
          {
            kind: "fill", title: "Voglio che…", hint: "Completa con il congiuntivo presente del verbo tra parentesi.",
            items: [
              "I miei genitori vogliono che io ___ (trovare) un lavoro stabile.", "Preferisco che tu non ___ (dire) niente a nessuno.", "Il capo esige che tutti ___ (arrivare) puntuali.", "Spero che voi ___ (stare) bene.", "Ho bisogno che qualcuno mi ___ (dare) una mano.", "Mi auguro che domani ___ (fare) bel tempo.", "La professoressa pretende che noi ___ (leggere) tre libri al mese.", "Non voglio che i bambini ___ (uscire) da soli.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Congiuntivo, infinito o indicativo?", hint: "Il quadro completo",
            text: [
              "Congiuntivo: volontà, desiderio, speranza, opinione, dubbio (voglio che, spero che, penso che, dubito che).",
              "Infinito: stesso soggetto (voglio partire) e dopo chiedere / dire / permettere / vietare a qualcuno di.",
              "Indicativo: certezza, percezione, informazione (so che, vedo che, è vero che, ho sentito che, mi ha detto che è…).",
              "Attenzione: «dire che» + indicativo riferisce un fatto («Mi ha detto che viene»), «dire di» + infinito dà un ordine («Mi ha detto di venire»).",
            ],
            table: { head: ["", "esempio"], rows: [["volontà", "Voglio che tu venga."], ["stesso soggetto", "Voglio venire."], ["ordine", "Ti dico di venire."], ["informazione", "Ti dico che vengo."]] },
          },
          {
            kind: "fill", title: "Scegli il modo giusto", hint: "Completa con il congiuntivo, l'indicativo o l'infinito del verbo tra parentesi.",
            items: ["Spero di ___ (vincere) la borsa di studio.", "Spero che tu ___ (vincere) la borsa di studio.", "Mi ha detto che ___ (arrivare) alle otto.", "Mi ha detto di ___ (arrivare) alle otto.", "So che Paola ___ (volere) cambiare lavoro.", "Il medico mi ha vietato di ___ (fumare).", "Preferiamo che i ragazzi ___ (dormire) da noi.", "Vedo che ___ (tu, essere) stanco."],
          },
          {
            kind: "intro", title: "Esprimere desideri con delicatezza", hint: "Formule utili",
            text: ["Per desideri e richieste gentili: «Mi piacerebbe che…», «Vorrei tanto…», «Ti dispiacerebbe…?», «Sarebbe bello se…». Con il condizionale, il congiuntivo che segue va all'imperfetto: lo studierai nell'unità 41.", "Per desideri forti: «Non vedo l'ora di…», «Il mio sogno è…», «Darei qualsiasi cosa per…»."],
          },
          k.negativa(["Voglio che tu venga.", "Spero di vederti.", "Ti chiedo di aiutarmi.", "Preferisco che restiate.", "Mi ha detto che viene."], "Trasforma come indicato: le prime tre al negativo; le ultime due cambiando il soggetto della frase secondaria in «io».", "trasforma"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Che cosa vuoi fare da grande?", "Una madre e una figlia di diciotto anni discutono del futuro.", [
            { who: "Mamma", text: "Giulia, la scadenza per l'iscrizione all'università è venerdì. Hai deciso?" },
            { who: "Giulia", text: "Sì. Voglio fare l'Accademia di Belle Arti." },
            { who: "Mamma", text: "Belle Arti? Io speravo che tu scegliessi qualcosa di più sicuro, come economia. Papà vuole che tu abbia un lavoro stabile." },
            { who: "Giulia", text: "Lo so, ma non voglio passare la vita a fare una cosa che non mi piace. Vi chiedo solo di fidarvi di me." },
            { who: "Mamma", text: "Non è che non mi fidi… ho paura che tu resti senza lavoro." },
            { who: "Giulia", text: "Facciamo così: io faccio Belle Arti, ma intanto lavoro qualche ora in uno studio di grafica. Così imparo anche un mestiere." },
            { who: "Mamma", text: "Va bene. Ma voglio che tu ne parli con papà stasera." },
          ], ["Che cosa vuole fare Giulia?", "Che cosa speravano i genitori? Perché?", "Che cosa chiede Giulia ai genitori?", "Di che cosa ha paura la madre?", "Qual è il compromesso? Che cosa deve fare Giulia stasera?"]),
          k.listen("Lettera alla radio", "Una trasmissione legge le lettere degli ascoltatori sui loro sogni.", [
            { who: "Conduttrice", text: "Ci scrive Massimo, 52 anni, da Cagliari: «Lavoro in banca da venticinque anni. Il mio sogno è aprire una piccola libreria con un caffè.»" },
            { who: "Conduttrice", text: "«Mia moglie vuole che io aspetti la pensione, i miei figli invece mi dicono di farlo subito, finché ho energia.»" },
            { who: "Conduttrice", text: "«Io non pretendo di diventare ricco: mi basterebbe essere felice. Che cosa mi consigliate?»" },
            { who: "Conduttrice", text: "Caro Massimo, noi ci auguriamo che tu possa realizzare il tuo sogno. E vogliamo che ci inviti all'inaugurazione!" },
          ], ["Che lavoro fa Massimo? Da quanto tempo?", "Qual è il suo sogno?", "Che cosa vuole la moglie? E i figli?", "Che cosa non pretende Massimo?", "Che cosa si augura la conduttrice?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Che cosa vogliono gli italiani?", [
            "Un recente sondaggio ha chiesto agli italiani che cosa desiderano di più per il futuro. Al primo posto c'è la salute, al secondo la stabilità economica e al terzo la casa di proprietà.",
            "Per molti, la casa è il simbolo della sicurezza: i genitori sperano che i figli possano comprarne una, e spesso li aiutano con i propri risparmi.",
            "I giovani, invece, mettono al primo posto un lavoro che piaccia e il tempo libero. Molti vogliono che il lavoro sia più flessibile e che lasci spazio ai viaggi, alla famiglia e alle passioni.",
            "C'è anche una differenza tra Nord e Sud: al Sud molti giovani desiderano restare nella propria città, ma temono di doverla lasciare per trovare lavoro.",
            "Tutti, però, si augurano la stessa cosa per il paese: che i giovani non siano più costretti a partire e che chi è partito possa tornare.",
          ], ["Che cosa desiderano di più gli italiani, secondo il sondaggio?", "Perché la casa è così importante?", "Che cosa vogliono i giovani dal lavoro?", "Che differenza c'è tra Nord e Sud?", "Che cosa si augurano tutti per il paese?", "Nel tuo paese le persone desiderano le stesse cose?"]),
          k.spagna("Che cosa desiderano i giovani nel tuo paese? E i genitori per i figli? Usa almeno quattro verbi di volontà con il congiuntivo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Negoziare", hint: "Chiedere, cedere, trovare un accordo",
            text: ["Chiedere: «Vorrei che…», «Ti chiederei di…», «Ho bisogno che…». Cedere: «Va bene, però voglio che…», «D'accordo, a patto che…» (+ congiuntivo). Trovare un accordo: «Facciamo così:…», «Che ne dici se…?»."],
          },
          k.rispondi(["Che cosa volevano i tuoi genitori che tu facessi da grande? Hai seguito i loro desideri?", "Qual è il tuo sogno nel cassetto?", "Che cosa ti auguri per le persone che ami?", "Che cosa pretendi da un buon amico?", "C'è qualcosa a cui hai rinunciato? Perché?", "Che cosa non vedi l'ora di fare?"]),
          { kind: "speak", title: "Desideri per gli altri", hint: "Esprimi un desiderio per ogni persona, con il congiuntivo. Esempio: un amico che ha un esame → Spero che vada benissimo!", items: ["un'amica che si sposa", "tuo fratello che cerca lavoro", "un collega che va in pensione", "i tuoi genitori", "il tuo paese", "te stesso tra cinque anni (attenzione: stesso soggetto!)"] },
          {
            kind: "roleplay", title: "Le regole di casa", hint: "Sei il genitore di un ragazzo di sedici anni che vuole andare a un concerto a Milano con gli amici. L'IA fa il figlio.",
            steps: ["Chiedigli i dettagli: con chi, come, dove dorme.", "Esprimi le tue condizioni con «voglio che» e «a patto che».", "Ascolta le sue proposte.", "Negoziate l'orario e il modo di restare in contatto.", "Chiudete l'accordo."],
          },
          {
            kind: "roleplay", title: "Il cliente esigente", hint: "Lavori in un'agenzia di viaggi. Un cliente molto esigente vuole organizzare il viaggio di nozze. L'IA fa il cliente. Usa il «Lei».",
            steps: ["Chiedigli che tipo di viaggio desidera.", "Ascolta le sue richieste e riassumile.", "Proponi due destinazioni.", "Una richiesta è impossibile: spiegalo con gentilezza.", "Trovate una soluzione."],
          },
          { kind: "speak", title: "Il mio sogno nel cassetto", hint: "Parla per due minuti di un tuo sogno: che cosa desideri, perché, che cosa vorrebbero gli altri che tu facessi, e che cosa ti serve per realizzarlo.", items: ["Il mio sogno è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Studia medicina! dicono i miei genitori. (I miei genitori vogliono che…)", "Venite alla festa, per favore. (Spero che…)", "Voglio che io diventi pilota. (correggi: stesso soggetto)", "Aiutami! (Ti chiedo di…)", "Non fumare qui. (Il medico mi ha vietato di…)", "Lui arriva domani: me l'ha detto. (Mi ha detto che…)", "Arriva domani! mi ha ordinato. (Mi ha detto di…)", "Spero che tutto vada bene per te. (usa: mi auguro che)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Una lettera di richiesta", hint: "Scrivi una lettera formale (180–200 parole) al sindaco della tua città: che cosa desideri che cambi nel tuo quartiere e perché. Usa almeno sei verbi di volontà e desiderio, con congiuntivo e infinito.", rows: 14, items: ["Gentile Sindaco,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: congiuntivo", ["che venga", "che dicano", "che rimanga", "che scelga", "che stiate", "che diano"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Voglio che tu sia felice.", "Spero di vederti presto.", "Mi ha detto di aspettare.", "Preferisco che restiate.", "Non vedo l'ora di partire."]),
          k.media([
            { type: "Film", title: "La mafia uccide solo d'estate (Pif, 2013)", where: "Cerca dove vederlo su JustWatch", why: "Un bambino di Palermo che desidera solo conquistare una compagna di classe, sullo sfondo della Palermo degli anni Settanta e Ottanta." },
            { type: "Canzone", title: "Vorrei, Francesco Guccini", where: "Spotify, YouTube", why: "Un cantautore elenca i suoi desideri in una canzone d'amore. Ascolta come si esprimono i desideri." },
            { type: "Podcast", title: "Daily Italian Words", where: "Spotify, YouTube", why: "Cerca gli episodi sul congiuntivo: spiegazioni brevi con tanti esempi." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che cosa desidera il protagonista? Che cosa vogliono gli altri che faccia? Usa il congiuntivo.", items: ["Il protagonista vuole… ma i suoi genitori vogliono che…"] },
        ],
      },
    ],

    exam: k.exam(35, {
      parole: ["pretendere", "esigere", "augurarsi", "accontentarsi", "deludere", "l'aspettativa", "rinunciare", "non vedere l'ora di", "fare a meno di", "il capriccio"],
      contrario: ["permettere → contrario", "deludere → (aggettivo)", "desiderare → (sostantivo)", "richiedere → (sostantivo)", "sognare → (sostantivo)", "ambizione → (aggettivo)"],
      verbiHint: "Completa il congiuntivo presente: che io, che noi, che loro.",
      verbiCols: ["che io", "che noi", "che loro"],
      verbi: [["venire", "", "", ""], ["uscire", "", "", ""], ["dire", "", "", ""], ["dare", "", "", ""]],
      completaHint: "Completa con il congiuntivo, l'indicativo o l'infinito.",
      completa: ["Voglio che voi ___ (essere) sinceri.", "Spero di ___ (trovare) presto un lavoro.", "Mi ha detto che ___ (partire) domani.", "Mi ha detto di ___ (partire) subito.", "Il capo pretende che tutti ___ (rimanere) fino alle sette.", "Ti chiedo di ___ (ascoltarmi) un momento.", "Mi auguro che i ragazzi ___ (scegliere) bene.", "So che lei ___ (volere) cambiare città."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Studia! (Mia madre vuole che io…)", "Venite tutti. (Spero che…)", "Io voglio che io parta. (correggi)", "Aiutatemi! (Vi chiedo di…)", "Non uscire! (Mi ha detto di…)", "Arriva alle otto, mi ha informato. (Mi ha detto che…)"],
      leggi: {
        text: [
          "Cara Sofia, so che sei arrabbiata perché non voglio che tu vada in Erasmus a gennaio. Non è che non mi fidi di te: voglio solo che tu finisca prima gli esami di questo semestre.",
          "Capisco che per te sia un'occasione importante e non pretendo che tu rinunci. Ti chiedo solo di aspettare sei mesi e partire a settembre.",
          "Spero che tu capisca che lo dico perché ti voglio bene. Se proprio vuoi partire a gennaio, ne parliamo con calma domenica. Un abbraccio, papà.",
        ],
        questions: ["Perché Sofia è arrabbiata?", "Che cosa vuole il padre? Perché?", "Che cosa le chiede di fare?", "Che cosa propone alla fine?"],
      },
      ascolta: {
        script: [
          { who: "Capo", text: "Ragazzi, il cliente vuole che il progetto sia pronto entro lunedì." },
          { who: "Lucia", text: "Lunedì? È impossibile. Abbiamo bisogno che ci dia almeno una settimana." },
          { who: "Capo", text: "Lo so. Gli ho chiesto di aspettare fino a mercoledì, ma pretende di vedere almeno una bozza lunedì." },
          { who: "Marco", text: "Allora preferisco che lavoriamo sabato mattina, così domenica siamo liberi." },
        ],
        questions: ["Che cosa vuole il cliente?", "Che cosa chiede Lucia?", "Che cosa ha chiesto il capo al cliente? Che cosa pretende il cliente?", "Che cosa propone Marco?"],
      },
      parla: ["Che cosa vorresti che cambiasse nella tua città? (usa voglio che, spero che)", "Racconta che cosa volevano i tuoi genitori per te.", "Fai tre auguri a un amico che parte per l'estero.", "Che cosa pretendi da un lavoro ideale?"],
      role: ["Sei un genitore: tuo figlio vuole un cane, tu hai delle condizioni.", "Esprimi le tue condizioni con il congiuntivo.", "Trovate un accordo."],
      dettato: ["Voglio che tu venga.", "Spero di farcela.", "Ti chiedo di aspettare.", "Mi auguro che vada bene.", "Preferisco che rimangano.", "Non vedo l'ora!"],
      traduci: ["Studiate! dice il professore. (Il professore vuole che…)", "Spero che io vinca. (correggi: stesso soggetto)", "Vieni alle otto! mi ha detto. (Mi ha detto di…)", "Viene alle otto, mi ha detto. (Mi ha detto che…)", "Aiutami, per favore. (Ho bisogno che…)", "Che tutto vada bene! (Mi auguro che…)"],
      scrivi: { hint: "Rispondi alla lettera del papà di Sofia come se fossi Sofia (120–150 parole): spiega che cosa desideri, che cosa chiedi ai genitori e quale compromesso proponi.", start: "Caro papà," },
    }),
  };
})();
