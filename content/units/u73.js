// Unità 73 · Cinema d'autore — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[73] = {
    n: 73,
    level: "B2",
    title: "Cinema d'autore",
    goal: "Recensire film e opere esprimendo giudizi sfumati: attenuare, intensificare, concedere e precisare (tutto sommato, per certi versi, non che + congiuntivo, più che… direi…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di cinema d'autore italiano e, soprattutto, a valutare: non solo «mi è piaciuto» o «non mi è piaciuto», ma con tutte le sfumature intermedie.",
              "Grammatica e lessico: attenuatori (piuttosto, tutto sommato, per certi versi, non del tutto), intensificatori (decisamente, del tutto, assolutamente), le strutture «non che + congiuntivo», «non tanto… quanto…», «più che… direi…», e il superlativo relativo con il congiuntivo («il film più bello che io abbia mai visto»).",
            ],
          },
          {
            kind: "intro", title: "Giudizi sfumati", hint: "Un'anticipazione",
            examples: [
              { it: "Non che sia brutto, ma è troppo lungo.", es: "concessione con «non che»" },
              { it: "Più che un film, direi che è una poesia per immagini.", es: "precisare" },
              { it: "Tutto sommato, mi è piaciuto.", es: "bilancio finale" },
              { it: "È il film più bello che io abbia mai visto.", es: "superlativo + congiuntivo" },
            ],
            text: ["Un buon recensore non giudica in bianco e nero."],
          },
          { kind: "speak", title: "Il tuo film", hint: "Prima di cominciare: qual è il film più bello che tu abbia mai visto? Perché?", items: ["Il film più bello che io abbia mai visto…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico del cinema", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il regista", "la sceneggiatura", "la fotografia", "il montaggio", "la colonna sonora",
              "l'inquadratura", "il piano sequenza", "il cast", "l'interpretazione", "la recensione",
              "il capolavoro", "sopravvalutato", "sottovalutato", "deludente", "girare un film",
              "uscire nelle sale", "il festival", "la Palma d'oro", "il Leone d'oro", "il cinema d'autore",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "giudizio sfumato", title: "Attenua il giudizio",
            hint: "Riscrivi ogni giudizio in modo più sfumato.",
            items: ["Il film è brutto.", "Gli attori sono bravi.", "È troppo lungo.", "La trama è noiosa.", "Mi è piaciuto.", "Il finale è assurdo.", "La musica è bellissima.", "È un capolavoro."],
          },
          { kind: "speak", title: "Dal più forte al più debole", hint: "Metti in ordine i giudizi dal più positivo al più negativo e dilli ad alta voce.", items: ["un capolavoro / niente di speciale / un disastro / piuttosto riuscito / deludente / da vedere assolutamente"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il tono del giudizio", hint: "Esitazione e convinzione",
            text: [
              "Un giudizio sfumato si dice spesso con esitazione: «Mah… tutto sommato… non era male». Le pause e i suoni come «mah», «boh», «beh» comunicano dubbio.",
              "Un giudizio convinto ha un accento forte sull'intensificatore: «È DAVVERO un capolavoro», «Non mi è piaciuto AFFATTO».",
              "Nomi difficili: Fellini, Antonioni, Rossellini, Pasolini, Visconti, Sorrentino, Rohrwacher (ròr-va-ker).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con esitazione o con convinzione.", items: ["Mah… tutto sommato, non era male.", "È davvero un capolavoro!", "Non che sia brutto, ma è troppo lungo.", "Più che un film, è una poesia.", "Non mi ha convinto del tutto."] },
          { kind: "shadow", title: "Registi", hint: "Ripeti i nomi.", items: ["Federico Fellini, Michelangelo Antonioni", "Pier Paolo Pasolini, Luchino Visconti", "Roberto Rossellini, Vittorio De Sica", "Paolo Sorrentino, Alice Rohrwacher"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il congiuntivo nel giudizio", hint: "Superlativo relativo e «non che»",
            text: [
              "Superlativo relativo + che + congiuntivo: «È il film più noioso che io abbia mai visto». Anche con «il primo, l'ultimo, l'unico, il solo»: «È l'unico regista che mi faccia piangere».",
              "«Non che + congiuntivo, ma…»: per negare una possibile interpretazione: «Non che il film sia brutto, ma non mi ha emozionato».",
              "«Non è che + congiuntivo (o indicativo nel parlato)»: «Non è che mi dispiaccia, però…».",
            ],
            table: { head: ["struttura", "esempio"], rows: [["il più… che + cong.", "il più bello che abbia visto"], ["l'unico che + cong.", "l'unico che mi piaccia"], ["non che + cong.", "non che sia brutto"], ["non è che + cong.", "non è che mi dispiaccia"]] },
          },
          k.table("Superlativo + congiuntivo", [
            ["È un film bellissimo. Non ne ho mai visto uno così.", "È il film più bello che io abbia mai visto."],
            ["È un'attrice bravissima. Non ne conosco una più brava.", ""],
            ["Questo regista mi fa ridere. Nessun altro ci riesce.", ""],
            ["È una scena lunghissima. Non ne ho mai vista una più lunga.", ""],
            ["Questo festival è il primo. Ci sono stato una volta sola.", ""],
            ["È un finale sorprendente. Non ne ricordo uno più sorprendente.", ""],
          ], "Unisci con il superlativo relativo e il congiuntivo.", ["superlativo"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo al congiuntivo.",
            items: [
              "È il film più lungo che io ___ (vedere) quest'anno.", "Non che la storia ___ (essere) noiosa, ma il ritmo è lento.", "Fellini è uno dei pochi registi che ___ (vincere) quattro Oscar per il miglior film straniero.", "Non è che il film mi ___ (dispiacere), però me lo aspettavo migliore.", "È la colonna sonora più bella che ___ (comporre) Morricone, secondo me.", "Non che gli attori non ___ (essere) bravi, ma la sceneggiatura è debole.", "È il primo film che mi ___ (fare) piangere.", "È la recensione più severa che io ___ (leggere) mai.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Attenuare, intensificare, precisare", hint: "Le formule della critica",
            text: [
              "Attenuare: piuttosto, abbastanza, un po', in un certo senso, per certi versi, non del tutto, non proprio, tutto sommato, nel complesso.",
              "Intensificare: decisamente, davvero, assolutamente, del tutto, estremamente, a dir poco.",
              "Precisare e correggere: «Più che… direi…», «Non tanto… quanto…», «O meglio…», «Anzi…», «Per essere precisi…».",
              "Concedere: «Pur riconoscendo che…», «Se da un lato…, dall'altro…», «È vero che…, ma…».",
            ],
          },
          k.negativa(["Il film è noioso. (non tanto… quanto lento)", "È una commedia. (più che… direi una satira)", "Gli attori sono bravi, il regista meno. (se da un lato… dall'altro)", "Il film non è brutto, ma è troppo lungo. (non che + congiuntivo)", "Mi è piaciuto abbastanza. (tutto sommato)", "È bello. (intensifica: a dir poco)"], "Riscrivi ogni giudizio con la struttura indicata.", "giudizio sfumato"),
          {
            kind: "intro", title: "La recensione", hint: "Struttura",
            text: ["Una recensione ha di solito: titolo e dati (regista, anno, attori) → breve trama senza finale → analisi (regia, sceneggiatura, interpretazioni, fotografia, musica) → giudizio complessivo sfumato → consiglio («da vedere», «per gli appassionati», «evitabile»)."],
          },
          {
            kind: "fill", title: "Completa la recensione", hint: "Completa con: tutto sommato, se da un lato, dall'altro, a dir poco, non tanto, quanto, più che, piuttosto.",
            items: ["La fotografia è ___ straordinaria.", "___ la sceneggiatura è debole, ___ le interpretazioni sono eccellenti.", "Il problema non è ___ la durata, ___ il ritmo.", "___ una commedia, direi che è una tragedia mascherata.", "Il finale è ___ prevedibile.", "___, è un film che consiglio."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Dopo il cinema", "Due amici escono dal cinema dopo aver visto un film d'autore.", [
            { who: "Chiara", text: "Allora? Che te n'è sembrato?" },
            { who: "Davide", text: "Mah… non che sia brutto, ma mi aspettavo di più. Due ore e mezza senza quasi dialoghi…" },
            { who: "Chiara", text: "Per me, invece, è il film più intenso che io abbia visto quest'anno. Più che un racconto, è un'esperienza visiva." },
            { who: "Davide", text: "Se da un lato la fotografia è splendida, dall'altro la storia non decolla mai. Il problema non è tanto la lentezza, quanto la mancanza di tensione." },
            { who: "Chiara", text: "Capisco. Però l'ultima scena, almeno, ti è piaciuta?" },
            { who: "Davide", text: "Quella sì, lo ammetto: a dir poco commovente. Tutto sommato, non è stata una serata persa." },
          ], ["Che cosa pensa Davide del film all'inizio?", "Che cosa pensa invece Chiara?", "Qual è, secondo Davide, il vero problema del film?", "Che cosa ammette Davide alla fine?", "Trova cinque espressioni di giudizio sfumato.", "Con chi saresti d'accordo, secondo te?"]),
          k.listen("Il critico", "Un critico cinematografico alla radio presenta un film italiano.", [
            { who: "Critico", text: "Il nuovo film della regista è, nel complesso, un'opera riuscita, pur con qualche limite." },
            { who: "Critico", text: "Le interpretazioni sono decisamente convincenti, in particolare quella della giovane protagonista, al suo primo ruolo." },
            { who: "Critico", text: "Più che la trama, a colpire è lo sguardo della regista: ogni inquadratura sembra un quadro." },
            { who: "Critico", text: "Non è un film per tutti: chi cerca azione resterà deluso. Ma per gli amanti del cinema d'autore, è da non perdere." },
          ], ["Qual è il giudizio complessivo del critico?", "Che cosa pensa delle interpretazioni?", "Che cosa colpisce più della trama?", "A chi consiglia il film e a chi no?", "Trasforma la recensione in un giudizio negativo, usando le stesse strutture."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Fellini e la dolce vita", [
            "Federico Fellini, nato a Rimini nel 1920, è probabilmente il regista italiano più famoso al mondo. Il suo nome è diventato un aggettivo: «felliniano» indica qualcosa di onirico, grottesco, esagerato e poetico insieme.",
            "Nel 1960 uscì «La dolce vita», ambientato nella Roma mondana dell'epoca. Il film, che segue per una settimana un giornalista tra feste, nobili annoiati e star del cinema, fece scandalo: alcuni lo considerarono immorale, altri un ritratto spietato della società del boom economico. Quello stesso anno vinse la Palma d'oro al Festival di Cannes.",
            "Il film ha lasciato tracce anche nella lingua: il fotografo che accompagna il protagonista si chiama Paparazzo, e da allora i fotografi che inseguono i personaggi famosi si chiamano così in molte lingue del mondo. E l'espressione «dolce vita» è entrata nel vocabolario internazionale.",
            "Nel corso della sua carriera Fellini vinse quattro Oscar per il miglior film straniero e, nel 1993, un Oscar alla carriera. Non che tutti i suoi film siano stati capolavori: alcune opere degli ultimi anni furono accolte con freddezza dalla critica. Ma pochi registi hanno creato un mondo tanto riconoscibile.",
            "Oggi, a più di sessant'anni dalla sua uscita, «La dolce vita» resta uno dei film più citati e imitati della storia del cinema.",
          ], ["Che cosa significa l'aggettivo «felliniano»?", "Di che cosa parla «La dolce vita»?", "Perché fece scandalo? Quale premio vinse?", "Quali tracce ha lasciato nella lingua?", "Quali premi vinse Fellini? Furono tutti capolavori i suoi film?", "Trova nel testo un «non che» e spiega che cosa concede l'autore."]),
          k.spagna("Scegli un regista del tuo paese e scrivi un breve ritratto: stile, film principali, influenza. Includi un giudizio sfumato con almeno quattro espressioni della pagina di grammatica."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Non essere d'accordo con eleganza", hint: "Nel dibattito culturale",
            text: ["«Capisco cosa intendi, però…», «Non sono del tutto d'accordo», «Vedo il film in modo un po' diverso», «Hai ragione sulla fotografia, ma sulla storia…», «Diciamo che su questo la pensiamo diversamente», «Rispetto la tua opinione, anche se…»."],
          },
          k.rispondi(["Qual è il film più sopravvalutato che tu abbia mai visto?", "Quale film ti sembra invece sottovalutato?", "Preferisci il cinema d'autore o quello commerciale? Perché?", "Hai mai visto un film di Fellini, Sorrentino o di un altro regista italiano?", "Leggi le recensioni prima di vedere un film?", "Qual è l'unico film che riguarderesti all'infinito?"]),
          { kind: "speak", title: "Mini-recensione", hint: "Recensisci in un minuto l'ultimo film o l'ultima serie che hai visto, con almeno un attenuatore, un intensificatore e un «non che».", items: ["L'ultimo film che ho visto…"] },
          {
            kind: "roleplay", title: "La giuria del festival", hint: "Tu e l'IA siete giurati di un festival. Dovete scegliere il vincitore tra due film. Voi preferite film diversi.",
            steps: ["Presenta il tuo film preferito con un giudizio forte.", "Riconosci i meriti del film dell'altro giurato.", "Precisa il tuo giudizio con «più che… direi…».", "Esprimi disaccordo con eleganza.", "Raggiungete una decisione."],
          },
          {
            kind: "roleplay", title: "Il critico e il regista", hint: "L'IA è un regista che ha letto la tua recensione negativa del suo film e ti chiama, un po' offeso.",
            steps: ["Ascolta la sua protesta.", "Riconosci gli aspetti positivi del film.", "Spiega le tue critiche con tatto.", "Rispondi a una sua obiezione con «non che…, ma…».", "Chiudi la conversazione con cortesia."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di un film italiano che hai visto durante questo corso: trama, regia, interpretazioni e giudizio sfumato.", items: ["Durante il corso ho visto…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il film è brutto. (attenua)", "Il film non è brutto, ma è lungo. (non che + congiuntivo)", "È una commedia, ma soprattutto è una satira. (più che… direi…)", "Il problema è il ritmo, non la durata. (non tanto… quanto…)", "Non ho mai visto un film così bello. (superlativo + congiuntivo)", "Gli attori sono bravi; la storia è debole. (se da un lato… dall'altro…)", "Considerando tutto, mi è piaciuto. (tutto sommato)", "La fotografia è bellissima. (a dir poco)"], "Riscrivi ogni giudizio come indicato."),
          { kind: "write", title: "La recensione", hint: "Scrivi la recensione (280–320 parole) di un film italiano (uno di quelli consigliati nel corso o un altro): dati, trama senza finale, analisi di regia, sceneggiatura, interpretazioni e musica, giudizio complessivo sfumato e consiglio finale. Usa almeno otto strutture di questa unità.", rows: 20, items: ["Titolo e dati del film:", "Recensione:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: espressioni", ["tutto sommato", "per certi versi", "a dir poco", "non che sia brutto", "più che altro", "da non perdere"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["È il film più bello che io abbia mai visto.", "Non che sia brutto, ma è troppo lungo.", "Il problema non è tanto la trama, quanto il ritmo.", "Se da un lato la fotografia è splendida, dall'altro la storia non decolla.", "Nel complesso, è un'opera riuscita."]),
          k.media([
            { type: "Film", title: "La dolce vita (Federico Fellini, 1960)", where: "Cerca dove vederlo su JustWatch", why: "Il film del testo di lettura. Guardalo e scrivi un giudizio sfumato su almeno tre scene." },
            { type: "Film", title: "Lazzaro felice (Alice Rohrwacher, 2018)", where: "Cerca dove vederlo su JustWatch", why: "Una favola moderna sospesa tra realismo e magia, premiata a Cannes per la sceneggiatura." },
            { type: "Film", title: "Io capitano (Matteo Garrone, 2023)", where: "Cerca dove vederlo su JustWatch", why: "Il viaggio di due ragazzi senegalesi verso l'Europa: premiato alla Mostra di Venezia per la regia." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Confronta due dei film consigliati: quale ti è piaciuto di più e perché? Usa un giudizio sfumato.", items: ["Se da un lato…"] },
        ],
      },
    ],

    exam: k.exam(73, {
      parole: ["il regista", "la sceneggiatura", "il montaggio", "la colonna sonora", "l'inquadratura", "il piano sequenza", "sopravvalutato", "deludente", "il capolavoro", "la recensione"],
      contrario: ["sopravvalutato → contrario", "deludente → contrario", "capolavoro → contrario", "lento → contrario", "intensificare → contrario", "riuscito → contrario"],
      verbiHint: "Unisci con il superlativo relativo e il congiuntivo.",
      verbiCols: ["superlativo"],
      verbi: [["È un film lunghissimo. Non ne ho visto uno più lungo.", ""], ["È un regista originale. Nessuno è più originale.", ""], ["È l'unico film. Mi fa ridere.", ""], ["È un'attrice bravissima. Non ne conosco una più brava.", ""]],
      completaHint: "Completa con il verbo al congiuntivo o con l'espressione adatta.",
      completa: ["È il film più bello che io ___ (vedere) quest'anno.", "Non che il film ___ (essere) brutto, ma è lento.", "È l'unico regista che mi ___ (commuovere) sempre.", "Il problema non è ___ la durata, quanto il ritmo.", "___ una commedia, direi che è una satira.", "Se da un lato la musica è bella, ___ la storia è debole.", "___ sommato, è un buon film.", "La fotografia è a dir ___ straordinaria."],
      trasformaHint: "Riscrivi ogni giudizio come indicato.",
      trasforma: ["Il film è noioso. (attenua)", "Gli attori non sono cattivi, ma la storia è debole. (non che)", "È un dramma, soprattutto una storia d'amore. (più che… direi…)", "È lento, non lungo. (non tanto… quanto…)", "Mi è piaciuto, considerando tutto. (tutto sommato)", "È bello. (intensifica)"],
      leggi: {
        text: [
          "«La grande bellezza» di Paolo Sorrentino, uscito nel 2013, ha diviso pubblico e critica. Per alcuni è un capolavoro, un omaggio a Fellini e alla Roma eterna; per altri è un film sopravvalutato, bello da vedere ma vuoto.",
          "Non che i suoi detrattori neghino la bellezza delle immagini: la fotografia è a dir poco spettacolare. Il problema, secondo loro, non è tanto lo stile, quanto la mancanza di una vera storia.",
          "Tutto sommato, il film ha avuto un enorme successo internazionale e ha vinto l'Oscar come miglior film straniero nel 2014.",
        ],
        questions: ["Perché il film ha diviso pubblico e critica?", "Che cosa riconoscono anche i detrattori?", "Qual è il problema secondo loro?", "Quale premio importante ha vinto il film?"],
      },
      ascolta: {
        script: [
          { who: "Laura", text: "Com'era la serie che mi hai consigliato?" },
          { who: "Pietro", text: "Non che sia brutta, ma dopo la prima stagione perde ritmo." },
          { who: "Laura", text: "Quindi non la consigli?" },
          { who: "Pietro", text: "Più che sconsigliarla, direi: guarda la prima stagione, che è la cosa più bella che io abbia visto da anni, e poi decidi." },
        ],
        questions: ["Che cosa pensa Pietro della serie?", "Quando perde ritmo?", "Che cosa consiglia di fare a Laura?", "Come giudica la prima stagione?"],
      },
      parla: ["Recensisci l'ultimo film che hai visto con un giudizio sfumato.", "Qual è il film più bello che tu abbia mai visto? Perché?", "Parla di un film sopravvalutato.", "Cinema d'autore o commerciale?"],
      role: ["L'IA ama un film che a te non è piaciuto.", "Esprimi il tuo disaccordo con eleganza.", "Riconosci almeno due meriti del film."],
      dettato: ["tutto sommato", "non che sia brutto", "a dir poco", "il più bello che abbia visto", "più che altro", "da non perdere"],
      traduci: ["È noioso. (attenua)", "Non è brutto, ma è lento. (non che)", "Non ho mai visto un finale così triste. (superlativo + congiuntivo)", "È una commedia, anzi una satira. (più che… direi…)", "Il problema è la trama, non la regia. (non tanto… quanto…)", "Gli attori sono bravi, la musica no. (se da un lato… dall'altro…)"],
      scrivi: { hint: "Scrivi una recensione (180–220 parole) di una serie TV o di un film: dati, trama senza finale, punti di forza e di debolezza, giudizio sfumato e consiglio.", start: "Titolo: …" },
    }),
  };
})();
