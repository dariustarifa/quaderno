// Unità 34 · Secondo me — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[34] = {
    n: 34,
    level: "B1",
    title: "Secondo me",
    goal: "Esprimere e chiedere opinioni, essere d'accordo o in disaccordo, usando il congiuntivo presente.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a dare la tua opinione su temi quotidiani e di attualità, a chiedere quella degli altri, a essere d'accordo e a non esserlo con educazione.",
              "Grammatica: il congiuntivo presente, il modo dell'opinione, del dubbio e della soggettività: «Penso che sia giusto», «Credo che abbia ragione».",
              "Il congiuntivo è uno dei simboli dell'italiano: anche molti italiani lo sbagliano, ma usarlo bene fa una grande impressione.",
            ],
          },
          {
            kind: "intro", title: "Secondo me è… / Penso che sia…", hint: "Un'anticipazione: opinione e congiuntivo",
            text: ["Con «secondo me», «per me», «a mio parere» si usa l'indicativo: «Secondo me è giusto».", "Con i verbi di opinione (penso che, credo che, mi sembra che, ritengo che) si usa il congiuntivo: «Penso che sia giusto»."],
            examples: [
              { it: "Secondo me questa legge è utile.", es: "secondo me + indicativo" },
              { it: "Credo che questa legge sia utile.", es: "credo che + congiuntivo" },
              { it: "Mi sembra che tu abbia ragione.", es: "mi sembra che + congiuntivo" },
            ],
          },
          { kind: "speak", title: "Una tua opinione", hint: "Prima di cominciare: secondo te, è meglio vivere in città o in campagna? Rispondi con «secondo me».", items: ["Secondo me…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Opinioni e dibattito", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il parere", "il punto di vista", "ritenere", "sostenere", "essere favorevole a",
              "essere contrario a", "il vantaggio", "lo svantaggio", "convincere", "la polemica",
              "discutere", "il dibattito", "avere ragione", "avere torto", "dipende",
              "in un certo senso", "da un lato… dall'altro", "non sono d'accordo", "assolutamente", "ammettere",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Contrari",
            hint: "Scrivi il contrario di ogni parola o espressione.",
            items: ["favorevole", "giusto", "utile", "vantaggio", "avere ragione", "essere d'accordo", "possibile", "logico"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: penso che → Penso che lo smart working sia una buona idea.", items: ["penso che", "secondo me", "mi sembra che", "non credo che", "sono favorevole a", "da un lato", "dipende da", "ammetto che"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Sia, abbia, faccia", hint: "Pronuncia del congiuntivo",
            text: [
              "Molte forme del congiuntivo finiscono in «-ia»: sia (sì-a), abbia (àb-bia), faccia (fàc-cia), vada, venga, possa, voglia (vò-glia).",
              "Attenzione alle doppie: abbia, faccia, possa, debba, sappia.",
              "Nelle discussioni, l'intonazione è importante: per non sembrare aggressivo, usa formule morbide come «Mah, non so…», «Capisco, però…».",
            ],
            table: { head: ["", "congiuntivo"], rows: [["essere / avere", "sia / abbia"], ["fare / andare", "faccia / vada"], ["potere / volere", "possa / voglia"], ["sapere / dovere", "sappia / debba"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti curando le doppie.", items: ["che io sia, che io abbia, che io faccia", "che tu possa, che tu voglia, che tu sappia", "che lui vada, che lui venga, che lui debba", "che loro siano, che loro abbiano, che loro facciano"] },
          { kind: "shadow", title: "Discutere con garbo", hint: "Ripeti con un tono gentile ma deciso.", items: ["Penso che tu abbia ragione, però…", "Non credo che sia così semplice.", "Mi sembra che il problema sia un altro.", "Capisco il tuo punto di vista, ma non sono d'accordo.", "Dipende da come la guardi."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il congiuntivo presente", hint: "Come si forma",
            text: [
              "Verbi in -are: -i, -i, -i, -iamo, -iate, -ino (che io parli, che loro parlino). Verbi in -ere e -ire: -a, -a, -a, -iamo, -iate, -ano (che io prenda, che io dorma, che io finisca).",
              "Le tre persone singolari sono uguali: per chiarezza si usa spesso il pronome: «che io parli», «che tu parli».",
              "Irregolari principali: essere → sia; avere → abbia; fare → faccia; andare → vada; venire → venga; dire → dica; potere → possa; volere → voglia; dovere → debba; sapere → sappia; stare → stia; dare → dia; uscire → esca. Trucco: molti nascono dalla prima persona del presente (vengo → venga, dico → dica).",
            ],
            table: { head: ["", "parlare", "prendere", "finire"], rows: [["io / tu / lui", "parli", "prenda", "finisca"], ["noi", "parliamo", "prendiamo", "finiamo"], ["voi", "parliate", "prendiate", "finiate"], ["loro", "parlino", "prendano", "finiscano"]] },
          },
          k.table("Tabella del congiuntivo", [
            ["essere", "sia", "", "", "", "", ""],
            ["avere", "", "", "", "abbiamo", "", ""],
            ["fare", "", "", "", "", "", ""],
            ["andare", "", "", "vada", "", "", ""],
            ["potere", "", "", "", "", "", ""],
            ["venire", "", "", "", "", "", "vengano"],
          ], "Completa la tabella con il congiuntivo presente (che io…, che tu…)."),
          {
            kind: "fill", title: "Penso che…", hint: "Completa con il congiuntivo presente del verbo tra parentesi.",
            items: [
              "Penso che questo film ___ (essere) noioso.", "Credo che Marco ___ (avere) ragione.", "Mi sembra che i prezzi ___ (aumentare) ogni mese.", "Non credo che tu ___ (potere) finire entro stasera.", "Ritengo che il governo ___ (dovere) aiutare i giovani.", "Pensi che ___ (piovere) domani?", "Immagino che voi ___ (sapere) già la notizia.", "Mi pare che loro ___ (uscire) sempre insieme.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Indicativo o congiuntivo?", hint: "Quando si usa il congiuntivo",
            text: [
              "Congiuntivo dopo i verbi di opinione e di incertezza seguiti da «che»: pensare, credere, ritenere, supporre, immaginare, dubitare, sembrare, parere.",
              "Indicativo con «secondo me», «per me», «a mio parere» e dopo i verbi di certezza: «So che è vero», «Sono sicuro che viene», «È chiaro che…».",
              "Se il soggetto è lo stesso, non si usa «che» ma «di + infinito»: «Penso di avere ragione» (io penso, io ho ragione), NON «Penso che io abbia ragione».",
            ],
            table: { head: ["", "esempio"], rows: [["opinione", "Penso che sia vero."], ["certezza", "So che è vero."], ["secondo me", "Secondo me è vero."], ["stesso soggetto", "Penso di sbagliare."]] },
          },
          {
            kind: "fill", title: "Indicativo, congiuntivo o infinito?", hint: "Completa con la forma giusta del verbo tra parentesi.",
            items: ["Secondo me Luca ___ (essere) troppo severo.", "Sono sicura che domani ___ (fare) bel tempo.", "Penso che tu ___ (dovere) chiedere scusa.", "Credo di ___ (avere) la febbre.", "So che loro ___ (vivere) a Torino da anni.", "Mi sembra che questa soluzione ___ (costare) troppo.", "Non penso di ___ (potere) venire.", "È evidente che il problema ___ (esistere)."],
          },
          {
            kind: "intro", title: "Essere d'accordo e non esserlo", hint: "Formule per discutere",
            text: ["Accordo: «Sono d'accordo con te», «Hai ragione», «Esatto», «Lo penso anch'io».", "Disaccordo morbido: «Capisco, però…», «Non sono del tutto d'accordo», «Dipende». Forte: «Non sono per niente d'accordo», «Non è affatto vero».", "Concedere: «Ammetto che…» (+ congiuntivo o indicativo), «È vero che…, ma…»."],
          },
          k.negativa(["Penso che sia giusto.", "Credo che vengano.", "Mi sembra che abbia ragione.", "Secondo me è vero.", "Penso di potercela fare."], "Trasforma ogni frase nel suo contrario (negativo o con il senso opposto), mantenendo il modo corretto.", "contrario"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Smart working sì o no?", "Tre colleghi discutono alla macchinetta del caffè.", [
            { who: "Carla", text: "Avete letto? L'azienda vuole eliminare lo smart working. Secondo me è un errore enorme." },
            { who: "Franco", text: "Io invece penso che abbiano ragione. Lavorando da casa, ci vediamo pochissimo e la squadra non esiste più." },
            { who: "Carla", text: "Capisco, però io risparmio due ore di treno al giorno. Credo che la qualità della vita sia importante quanto la squadra." },
            { who: "Lucia", text: "Per me la soluzione è nel mezzo. Penso che due giorni in ufficio e tre a casa siano l'ideale." },
            { who: "Franco", text: "Mah, non credo che il capo accetti. Lui vuole vederci tutti i giorni." },
            { who: "Lucia", text: "Allora proponiamolo noi, tutti insieme. Mi sembra che sia l'unico modo per convincerlo." },
          ], ["Che cosa vuole fare l'azienda? Che cosa ne pensa Carla?", "Perché Franco è d'accordo con l'azienda?", "Che vantaggio ha lo smart working per Carla?", "Qual è la proposta di Lucia?", "Che cosa pensa Franco del capo? Che cosa propone Lucia alla fine?"]),
          k.listen("La radio: il tema del giorno", "Gli ascoltatori telefonano a una trasmissione sul turismo nelle città d'arte.", [
            { who: "Conduttore", text: "Oggi parliamo di turismo di massa. Venezia ha introdotto un biglietto d'ingresso per i turisti giornalieri. Che cosa ne pensate?" },
            { who: "Ascoltatrice", text: "Io sono veneziana e sono favorevole. Penso che sia l'unico modo per proteggere la città: noi residenti siamo sempre meno." },
            { who: "Ascoltatore", text: "Io invece sono contrario. Non credo che una città debba diventare un museo con il biglietto. Venezia è di tutti." },
            { who: "Conduttore", text: "E secondo lei qual è la soluzione?" },
            { who: "Ascoltatore", text: "Secondo me bisogna limitare le grandi navi e gli affitti brevi, non le persone." },
          ], ["Di che tema si parla?", "Che cosa ha introdotto Venezia?", "Perché l'ascoltatrice è favorevole?", "Perché l'ascoltatore è contrario?", "Qual è la sua soluzione? Tu che cosa ne pensi?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Discutere all'italiana", [
            "Molti stranieri, quando sentono due italiani discutere al bar, pensano che stiano litigando: voci alte, mani che si muovono, interruzioni continue. In realtà, spesso stanno solo parlando di calcio.",
            "In Italia discutere è quasi uno sport. Si discute di politica, di cucina, di quale sia la vera ricetta della carbonara. Avere un'opinione forte è normale, e cambiarla durante la discussione non è vergognoso.",
            "Interrompere, poi, non è sempre maleducato: in molte situazioni mostra che sei interessato e che segui il discorso. Il silenzio, invece, può sembrare freddezza.",
            "Ci sono però delle regole non scritte: si alza la voce, ma non si offende la persona; si critica l'idea, non chi la sostiene. E alla fine si beve un caffè insieme.",
            "Gli esperti di comunicazione dicono che questo stile è tipico delle culture mediterranee, in cui la conversazione è un modo per stare insieme, più che per scambiare informazioni.",
          ], ["Che cosa pensano molti stranieri quando sentono discutere due italiani?", "Di che cosa si discute in Italia?", "Interrompere è sempre maleducato? Perché?", "Quali sono le regole non scritte?", "Come spiegano gli esperti questo stile?", "Nel tuo paese come si discute? Ti sembra simile?"]),
          k.spagna("Come si discute nel tuo paese? Si interrompe? Si alza la voce? Usa almeno tre verbi di opinione con il congiuntivo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Argomentare un'opinione", hint: "Struttura di un breve intervento",
            text: ["1) La tua posizione: «Penso che…», «Sono favorevole / contrario a…». 2) Due ragioni: «Prima di tutto…», «Inoltre…». 3) Un esempio: «Per esempio…». 4) La concessione: «È vero che…, però…». 5) La conclusione: «Per questo credo che…»."],
          },
          k.rispondi(["È giusto vietare i telefoni a scuola?", "I giovani dovrebbero vivere da soli prima dei 25 anni?", "È meglio lavorare in ufficio o da casa?", "Il turismo di massa è un problema o una risorsa?", "Si dovrebbe lavorare quattro giorni alla settimana?", "È giusto che lo sport professionistico paghi stipendi così alti?"]),
          { kind: "speak", title: "D'accordo o no?", hint: "Reagisci a ogni affermazione: d'accordo, in parte d'accordo o in disaccordo, con una ragione e il congiuntivo.", items: ["La pizza con l'ananas non dovrebbe esistere.", "I social rendono le persone più sole.", "Imparare il latino a scuola è inutile.", "Gli animali dovrebbero poter entrare nei ristoranti.", "La televisione è morta.", "I compiti per casa andrebbero aboliti."] },
          {
            kind: "roleplay", title: "Il dibattito in classe", hint: "Tema: «Le auto dovrebbero essere vietate nei centri storici». Tu sei a favore, l'IA è contraria e interrompe spesso.",
            steps: ["Presenta la tua posizione con due ragioni.", "Ascolta l'obiezione e rispondi con «Capisco, però…».", "Fai un esempio concreto di una città che conosci.", "Concedi un punto all'altra persona.", "Concludi riassumendo la tua opinione."],
          },
          {
            kind: "roleplay", title: "La riunione di condominio", hint: "Nel tuo palazzo si discute se installare un ascensore che costa molto. L'IA fa un vicino anziano che è contrario. Usa il «Lei».",
            steps: ["Spiega perché pensi che l'ascensore sia necessario.", "Ascolta le sue ragioni e mostrati comprensivo.", "Proponi una soluzione per il problema dei costi.", "Rispondi a una nuova obiezione.", "Cercate un compromesso."],
          },
          { kind: "speak", title: "Il mio parere", hint: "Parla per due minuti di un tema di attualità che ti interessa, seguendo la struttura della pagina: posizione, ragioni, esempio, concessione, conclusione.", items: ["Vorrei parlare di…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Secondo me questa città è troppo cara. (comincia con: «Penso che…»)", "Lui ha ragione, ne sono sicuro. (comincia con: «Sono sicuro che…»)", "Forse loro non vengono. (comincia con: «Non credo che…»)", "Io mi sbaglio, credo. (comincia con: «Credo di…»)", "Il problema, a mio parere, è un altro. (comincia con: «Mi sembra che…»)", "Va bene, hai ragione tu su questo punto. (usa: ammetto che)", "Non sono d'accordo per niente. (usa: affatto)", "Ci sono vantaggi e svantaggi. (usa: da un lato… dall'altro)"], "Riscrivi ogni frase come indicato tra parentesi, facendo attenzione al modo del verbo."),
          { kind: "write", title: "Un testo argomentativo", hint: "Scrivi un testo (180–200 parole) per un blog: «È giusto pagare un biglietto per entrare a Venezia?». Segui la struttura: posizione, due ragioni, esempio, concessione, conclusione. Usa almeno sei congiuntivi.", rows: 14, items: ["Secondo molti…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: congiuntivo", ["che sia", "che abbiano", "che tu possa", "che voi facciate", "che lui venga", "che io sappia"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Penso che tu abbia ragione.", "Non credo che sia vero.", "Secondo me è un errore.", "Mi sembra che costi troppo.", "Sono sicuro che verrà."]),
          k.media([
            { type: "Programma", title: "Piazzapulita / Otto e mezzo", where: "La7, YouTube", why: "Talk show di attualità: guarda dieci minuti e conta quante volte sentono «penso che» o «credo che»." },
            { type: "Film", title: "Il capitale umano (Paolo Virzì, 2013)", where: "Cerca dove vederlo su JustWatch", why: "Un incidente collega due famiglie molto diverse: ognuno ha la sua versione e la sua opinione." },
            { type: "Podcast", title: "Il Post · Morning", where: "Spotify, app Il Post", why: "Ogni mattina le notizie dei giornali commentate: ascolta come si presentano opinioni diverse." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi le opinioni diverse che hai sentito nel programma o nel film. Con chi sei d'accordo e perché?", items: ["Secondo uno degli ospiti… Io penso che…"] },
        ],
      },
    ],

    exam: k.exam(34, {
      parole: ["il parere", "ritenere", "sostenere", "la polemica", "convincere", "ammettere", "dipende", "da un lato… dall'altro", "essere contrario", "affatto"],
      contrario: ["favorevole → contrario", "giusto → contrario", "utile → contrario", "avere ragione → contrario", "vantaggio → contrario", "possibile → contrario"],
      verbiHint: "Completa con il congiuntivo presente.",
      verbi: [["essere", "", "", "", "", "", ""], ["fare", "", "", "", "", "", ""], ["sapere", "", "", "", "", "", ""]],
      completaHint: "Completa con l'indicativo, il congiuntivo o l'infinito del verbo tra parentesi.",
      completa: ["Penso che Laura ___ (avere) ragione.", "Secondo me questo ristorante ___ (essere) troppo caro.", "Non credo che loro ___ (venire) stasera.", "Sono certo che tu ___ (potere) farcela.", "Credo di ___ (essere) in ritardo.", "Mi sembra che i ragazzi ___ (uscire) troppo.", "Ritengo che il comune ___ (dovere) intervenire.", "So che Marco ___ (dire) sempre la verità."],
      trasformaHint: "Riscrivi ogni frase cominciando con le parole tra parentesi.",
      trasforma: ["Secondo me è giusto. (Penso che…)", "Forse non lo sanno. (Non credo che…)", "Sicuramente arriva tardi. (Sono sicuro che…)", "Io ho torto, forse. (Penso di…)", "Mi pare un'idea pessima. (Mi sembra che…)", "Hai ragione su questo punto. (Ammetto che…)"],
      leggi: {
        text: [
          "Dal prossimo anno il comune di Bologna vuole chiudere al traffico tutte le strade del centro storico, anche per i residenti, dalle 7 alle 20.",
          "I commercianti sono contrari: pensano che i clienti preferiscano i centri commerciali in periferia, dove si parcheggia facilmente. Gli ambientalisti, invece, ritengono che sia una scelta coraggiosa e necessaria.",
          "Il sindaco sostiene che le città europee più vivibili abbiano già fatto questa scelta. Molti residenti, però, temono che la vita quotidiana diventi più complicata, soprattutto per gli anziani.",
        ],
        questions: ["Che cosa vuole fare il comune di Bologna?", "Perché i commercianti sono contrari?", "Che cosa pensano gli ambientalisti?", "Che cosa temono molti residenti?"],
      },
      ascolta: {
        script: [
          { who: "Paola", text: "Hai visto? Vogliono vietare i telefoni in tutte le scuole, anche durante l'intervallo." },
          { who: "Giorgio", text: "Finalmente! Penso che i ragazzi passino troppo tempo con lo schermo." },
          { who: "Paola", text: "Sì, però non credo che vietare sia la soluzione. Bisogna insegnare a usarli bene." },
          { who: "Giorgio", text: "Mah, secondo me a quattordici anni non è facile. Le regole servono." },
        ],
        questions: ["Che cosa vogliono vietare?", "Che cosa ne pensa Giorgio? Perché?", "Che cosa pensa Paola? Qual è la sua proposta?", "Come risponde Giorgio alla fine?"],
      },
      parla: ["Esprimi la tua opinione sul lavoro da casa con due ragioni.", "Reagisci: «Il latino a scuola è inutile».", "Che cosa pensi del turismo di massa nelle città d'arte?", "Racconta una discussione che hai avuto di recente: chi aveva ragione?"],
      role: ["L'IA sostiene che i social siano solo negativi: esprimi la tua opinione contraria.", "Rispondi alle sue obiezioni con «Capisco, però…».", "Trovate almeno un punto su cui siete d'accordo."],
      dettato: ["Penso che sia giusto.", "Non credo che vengano.", "Secondo me hai torto.", "Mi sembra che costi troppo.", "Credo di aver capito.", "Sono sicura che lo sa."],
      traduci: ["Secondo me hanno ragione. (Penso che…)", "Forse il treno è in ritardo. (Credo che…)", "Sicuramente lui lo sa. (Sono sicuro che…)", "Io ho capito, credo. (Credo di…)", "Non sono per niente d'accordo. (usa: affatto)", "Ha dei vantaggi e degli svantaggi. (usa: da un lato… dall'altro)"],
      scrivi: { hint: "Scrivi un commento (120–150 parole) all'articolo della parte 6: sei favorevole o contrario alla chiusura del centro di Bologna? Argomenta con almeno quattro congiuntivi.", start: "Ho letto l'articolo e penso che…" },
    }),
  };
})();
