// Unità 79 · Scrivere bene — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[79] = {
    n: 79,
    level: "B2",
    title: "Scrivere bene",
    goal: "Scrivere testi chiari, coesi e ben punteggiati: evitare ripetizioni con le riprese (pronomi, sinonimi, iperonimi), usare bene la punteggiatura e mantenere un registro coerente.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Al livello B2 non basta scrivere frasi corrette: bisogna scrivere testi. Un testo è buono quando le frasi sono collegate tra loro (coesione), le idee seguono un ordine logico (coerenza), la punteggiatura guida il lettore e il registro resta lo stesso dall'inizio alla fine.",
              "Imparerai le tecniche di revisione che usano giornalisti e scrittori: eliminare le ripetizioni, accorciare le frasi troppo lunghe, scegliere il connettivo giusto, controllare virgole e punti.",
            ],
          },
          {
            kind: "intro", title: "Prima e dopo", hint: "Un'anticipazione",
            text: ["Lo stesso contenuto, scritto male e scritto bene."],
            examples: [
              { it: "Marco ha comprato una macchina. La macchina è rossa. Marco ha pagato la macchina molto.", es: "ripetizioni, frasi slegate" },
              { it: "Marco ha comprato una macchina rossa, che gli è costata parecchio.", es: "coesione: relativo, pronome" },
            ],
          },
          { kind: "speak", title: "Tu e la scrittura", hint: "Prima di cominciare: scrivi spesso nella tua lingua? Che cosa trovi più difficile quando scrivi in italiano?", items: ["Quando scrivo in italiano, la cosa più difficile è…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della scrittura", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la coesione", "la coerenza", "il capoverso", "la ripresa", "il sinonimo",
              "l'iperonimo", "la ripetizione", "la virgola", "il punto e virgola", "i due punti",
              "le virgolette", "la lineetta", "la parentesi", "la bozza", "rileggere",
              "rivedere", "tagliare", "la chiarezza", "la concisione", "il refuso",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "iperonimo", title: "Iperonimi",
            hint: "Scrivi una parola più generale che possa sostituire ogni parola per evitare ripetizioni.",
            items: ["la rosa", "il cane", "la Ferrari", "il romanzo", "la mela", "Milano", "il violino", "la cattedrale"],
          },
          { kind: "speak", title: "Sinonimi", hint: "Trova almeno due sinonimi per ogni parola e usali in una frase.", items: ["dire", "fare", "importante", "problema", "cosa", "bello", "grande", "molto"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La punteggiatura si sente", hint: "Leggere per controllare",
            text: [
              "Uno dei migliori modi per controllare un testo è leggerlo ad alta voce. Dove ti manca il fiato, probabilmente manca un punto. Dove ti fermi spontaneamente, forse serve una virgola.",
              "La virgola è una pausa breve; il punto e virgola una pausa media; il punto una pausa lunga, con la voce che scende.",
              "I due punti annunciano qualcosa: la voce resta sospesa. Le virgolette e le parentesi si leggono con un leggero cambio di tono.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Rispetta la punteggiatura.", items: ["Volevo uscire; pioveva troppo.", "Ho capito una cosa: devo scrivere meno.", "Il libro (che ti avevo prestato) è sparito.", "Mi ha detto: «Torno subito».", "Arrivò, si sedette, non disse niente."] },
          { kind: "shadow", title: "Virgola sì, virgola no", hint: "Senti la differenza.", items: ["Mangiamo, nonna!", "Mangiamo nonna!", "Gli studenti, che erano stanchi, uscirono.", "Gli studenti che erano stanchi uscirono."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Le riprese", hint: "Come evitare le ripetizioni",
            text: [
              "Pronomi: «Ho letto il libro e l'ho trovato bellissimo».",
              "Sinonimi: «Il romanzo… Il libro… L'opera…».",
              "Iperonimi (parola più generale): «Ho comprato delle rose. Questi fiori…».",
              "Espressioni descrittive: «Dante… Il sommo poeta…», «Roma… La capitale…».",
              "Ellissi (non ripetere il soggetto): «Marco è arrivato tardi. (Marco) Si è scusato».",
              "Relativi: «Ho un'amica. Questa amica vive a Torino» → «Ho un'amica che vive a Torino».",
            ],
            table: { head: ["tecnica", "esempio"], rows: [["pronome", "l'ho letto"], ["sinonimo", "il romanzo → il libro"], ["iperonimo", "le rose → i fiori"], ["descrizione", "Roma → la capitale"], ["relativo", "un'amica che…"]] },
          },
          k.table("Elimina le ripetizioni", [
            ["Ho visto Giulia. Giulia mi ha salutato.", "Ho visto Giulia, che mi ha salutato."],
            ["Ho comprato un libro. Il libro è molto lungo. Leggerò il libro in vacanza.", ""],
            ["Firenze è bellissima. A Firenze ci sono molti musei. Firenze è la città di Dante.", ""],
            ["Il cane abbaia. Il cane abbaia tutta la notte. I vicini si lamentano del cane.", ""],
            ["Ho scritto a Paolo. Paolo non mi ha risposto. Scriverò di nuovo a Paolo.", ""],
            ["Il presidente ha parlato. Il presidente ha detto che il presidente si dimette.", ""],
          ], "Riscrivi ogni testo senza ripetizioni.", ["testo migliorato"]),
          {
            kind: "fill", title: "Completa con una ripresa", hint: "Completa con un pronome, un sinonimo, un iperonimo o un'espressione descrittiva.",
            items: [
              "Leonardo da Vinci nacque nel 1452. ___ è considerato il genio del Rinascimento.", "Ho comprato dei tulipani e delle margherite. ___ sono sul tavolo. (iperonimo)", "Napoli è famosa per la pizza. ___ campana è anche ricca di musei.", "Ho letto «Il nome della rosa». ___ di Umberto Eco mi è piaciuto molto.", "Ho chiamato mia madre e ___ ho raccontato tutto.", "Il Po attraversa la pianura padana. ___ è il più lungo d'Italia.", "La Ferrari ha vinto la gara. ___ di Maranello ha festeggiato.", "Ho un collega ___ parla cinque lingue.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La punteggiatura", hint: "Le regole principali",
            text: [
              "Virgola: separa gli elementi di un elenco, le frasi incidentali, il vocativo («Marco, vieni!»), e molte subordinate quando vengono prima della principale. Non si mette mai tra soggetto e verbo («Il ragazzo, è uscito» è sbagliato).",
              "Punto e virgola: separa due frasi collegate, ma autonome: «Ho studiato molto; l'esame, però, è andato male».",
              "Due punti: annunciano una spiegazione, un elenco o un discorso diretto: «Ho capito una cosa: devo riposare».",
              "Virgolette « »: per il discorso diretto e le citazioni. Lineetta e parentesi: per incisi più forti o meno importanti.",
            ],
          },
          k.negativa(["Il ragazzo che hai conosciuto ieri, è mio cugino.", "Ho comprato pane latte uova e frutta.", "Marco vieni qui!", "Mi ha detto sono stanco.", "Volevo uscire ma pioveva così sono rimasto a casa e ho letto.", "Ho capito una cosa la pazienza è tutto."], "Correggi la punteggiatura di ogni frase.", "punteggiatura corretta"),
          {
            kind: "intro", title: "Le frasi troppo lunghe", hint: "Chiarezza e concisione",
            text: ["Una frase italiana può essere lunga, ma deve restare chiara. Regole pratiche: una sola idea principale per frase; massimo due subordinate; il soggetto vicino al verbo; meglio un verbo che un sostantivo astratto («decidere» invece di «prendere una decisione»); taglia le parole inutili («al fine di» → «per»; «in data odierna» → «oggi»)."],
          },
          {
            kind: "fill", title: "Più conciso", hint: "Sostituisci l'espressione tra parentesi con una parola sola o più semplice.",
            items: ["___ (al fine di) migliorare il testo, rileggilo.", "Ti scrivo ___ (in data odierna).", "___ (a causa del fatto che) pioveva, siamo rimasti a casa.", "Dobbiamo ___ (prendere una decisione) entro domani.", "___ (nel caso in cui) tu abbia domande, scrivimi.", "Ho letto il libro ___ (in maniera attenta)."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il laboratorio di scrittura", "Un'insegnante corregge il testo di uno studente.", [
            { who: "Prof.ssa Neri", text: "Allora, Luca, il contenuto del tuo articolo è interessante, ma leggiamo insieme il primo paragrafo." },
            { who: "Luca", text: "Va bene. «Il turismo è importante. Il turismo porta soldi. Però il turismo crea anche problemi»." },
            { who: "Prof.ssa Neri", text: "Senti quante volte ripeti «turismo»? Prova a usare un pronome, un sinonimo, o a unire le frasi." },
            { who: "Luca", text: "Mmm… «Il turismo è importante perché porta ricchezza; tuttavia, crea anche diversi problemi»." },
            { who: "Prof.ssa Neri", text: "Molto meglio! Hai usato un connettivo causale, il punto e virgola e un avversativo. E hai sostituito «soldi», un po' informale, con «ricchezza». Adesso il registro è coerente." },
          ], ["Che cosa pensa la professoressa del contenuto?", "Qual è il problema principale del primo paragrafo?", "Che cosa consiglia di fare?", "Come riscrive Luca la frase?", "Quali miglioramenti nota la professoressa?", "Migliora tu un'altra frase sullo stesso tema."]),
          k.listen("La redattrice", "Una redattrice di una casa editrice spiega il suo lavoro.", [
            { who: "Redattrice", text: "Il mio lavoro è rendere i testi più chiari, senza cambiare la voce dell'autore." },
            { who: "Intervistatore", text: "Qual è l'errore più frequente che corregge?" },
            { who: "Redattrice", text: "La virgola tra soggetto e verbo, senza dubbio. E poi le frasi troppo lunghe: autori che scrivono periodi di dieci righe senza un punto." },
            { who: "Intervistatore", text: "Un consiglio per chi scrive?" },
            { who: "Redattrice", text: "Rileggere ad alta voce, sempre. E tagliare: quasi ogni testo migliora se lo si accorcia di un quinto." },
          ], ["Qual è il lavoro della redattrice?", "Qual è l'errore più frequente?", "Quale altro problema nota spesso?", "Quali consigli dà?", "Sei d'accordo con l'idea di tagliare un quinto del testo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("L'antilingua", [
            "Nel 1965 Italo Calvino pubblicò su un quotidiano un breve articolo diventato famoso: «L'antilingua». In esso immaginava un brigadiere che trascrive la deposizione di un uomo semplice. L'uomo racconta con parole chiare di essere sceso in cantina ad accendere la stufa; il brigadiere trasforma tutto in un italiano burocratico, pieno di formule astratte e di parole che nessuno userebbe parlando.",
            "Calvino chiamava «antilingua» questo modo di scrivere: una lingua che ha paura delle parole concrete e preferisce sostantivi astratti, perifrasi e passivi. Secondo lui, era una malattia diffusa non solo negli uffici, ma anche nei giornali, nella politica e perfino nella scuola.",
            "Il problema, spiegava, non è solo estetico. Chi scrive in antilingua spesso non vuole farsi capire, o non sa davvero che cosa vuole dire. La lingua viva, al contrario, cerca la parola esatta, concreta, quella che fa vedere le cose.",
            "Più di sessant'anni dopo, l'articolo di Calvino è ancora citato nei corsi di scrittura. Molte amministrazioni pubbliche italiane hanno adottato guide per una scrittura più semplice, e i manuali di stile dei giornali raccomandano frasi brevi e verbi concreti.",
            "La lezione resta attuale per chiunque scriva, in qualsiasi lingua: prima di scrivere, chiediti che cosa vuoi dire davvero; poi dillo nel modo più semplice e preciso possibile.",
          ], ["Che cosa pubblicò Calvino nel 1965?", "Che cosa fa il brigadiere nell'esempio di Calvino?", "Che cos'è l'«antilingua»?", "Perché, secondo Calvino, il problema non è solo estetico?", "Che effetto ha avuto l'articolo nel tempo?", "Qual è la lezione finale del testo? Sei d'accordo?"]),
          k.spagna("Esiste una «antilingua» anche nella tua lingua? Fai un esempio (un modulo, un avviso, un discorso politico) e riscrivilo in modo semplice. Spiega che cosa hai cambiato."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dare e ricevere un parere su un testo", hint: "Revisione tra pari",
            text: ["Dare un parere: «Il contenuto è chiaro, ma…», «Qui ripeti troppe volte…», «Questa frase è un po' lunga: potresti dividerla?», «Il registro cambia in questo punto». Ricevere: «Grazie, hai ragione», «Non ci avevo pensato», «Che cosa suggeriresti?»."],
          },
          k.rispondi(["Rileggi sempre quello che scrivi? Come?", "Quali errori fai più spesso quando scrivi in italiano?", "Preferisci scrivere a mano o al computer? Perché?", "Hai mai letto un testo in «antilingua»? Com'era?", "Ti piace che qualcuno corregga i tuoi testi?", "Quale scrittore ammiri per il suo stile?"]),
          { kind: "speak", title: "Leggi e correggi", hint: "Leggi ad alta voce un tuo testo scritto in questo corso. Fermati dove ti manca il fiato e decidi se serve un punto o una virgola.", items: ["Il testo che ho scelto…"] },
          {
            kind: "roleplay", title: "La revisione", hint: "L'IA ti mostra un paragrafo pieno di ripetizioni e frasi lunghe. Aiutala a migliorarlo, con tatto.",
            steps: ["Fai un complimento sul contenuto.", "Indica le ripetizioni e proponi riprese.", "Proponi di dividere una frase lunga.", "Correggi due errori di punteggiatura.", "Leggi insieme la versione finale."],
          },
          {
            kind: "roleplay", title: "Traduttore di antilingua", hint: "L'IA legge avvisi e frasi in italiano burocratico. Tu le «traduci» in italiano semplice.",
            steps: ["Traduci il primo avviso.", "Traduci la seconda frase eliminando le nominalizzazioni.", "Chiedi chiarimenti se qualcosa non è chiaro.", "Spiega perché la tua versione è migliore.", "Proponi una regola per scrivere chiaro."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti delle tue regole personali per scrivere bene, in italiano e nella tua lingua.", items: ["Per scrivere bene, secondo me…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ho visto un film. Il film era lungo. Il film mi è piaciuto. (una frase, senza ripetizioni)", "Il ragazzo, ha vinto la gara. (correggi la punteggiatura)", "Al fine di procedere alla verifica, si richiede la documentazione. (italiano semplice)", "Ho capito una cosa la lingua è un viaggio. (aggiungi i due punti)", "Ho studiato molto ma l'esame è andato male però non mi arrendo. (riscrivi con il punto e virgola)", "Roma è bella. Roma è antica. Roma è la capitale. (usa una descrizione)", "In data odierna si comunica che l'ufficio è chiuso. (italiano semplice)", "Mi ha detto sono felice. (aggiungi la punteggiatura del discorso diretto)"], "Migliora ogni frase come indicato."),
          { kind: "write", title: "Revisione di un tuo testo", hint: "Scegli un testo che hai scritto in un'unità precedente del B1 o del B2. Riscrivilo (280–320 parole) applicando tutto ciò che hai imparato: elimina le ripetizioni, controlla la punteggiatura, accorcia le frasi troppo lunghe, rendi coerente il registro. Poi elenca in cinque punti che cosa hai cambiato.", rows: 22, items: ["Testo rivisto:", "Che cosa ho cambiato:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: punteggiatura", ["Volevo uscire; pioveva.", "Ho capito una cosa: devo riposare.", "Marco, vieni qui!", "Mi ha detto: «Torno subito».", "Il libro (quello rosso) è mio.", "Arrivò, si sedette, tacque."], "Ascolta e scrivi con la punteggiatura giusta."),
          k.dettato("Dettato: un paragrafo", ["Scrivere bene non significa scrivere difficile.", "Significa scegliere la parola giusta, al posto giusto.", "Prima di scrivere, chiediti che cosa vuoi dire.", "Poi dillo nel modo più semplice possibile.", "E alla fine, rileggi ad alta voce."]),
          k.media([
            { type: "Libro", title: "Lezioni americane (Italo Calvino, 1988)", where: "Libreria o biblioteca", why: "Cinque lezioni su leggerezza, rapidità, esattezza, visibilità e molteplicità: un classico sulla scrittura." },
            { type: "Sito", title: "Treccani — Lingua italiana", where: "treccani.it", why: "Articoli e schede su grammatica, punteggiatura e stile: cerca «punto e virgola» o «virgola»." },
            { type: "Sito", title: "Il Post", where: "ilpost.it", why: "Un giornale noto per la scrittura chiara: leggi un articolo e osserva come costruisce i paragrafi e le riprese." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Analizza un paragrafo di un articolo del Post o di una lezione di Calvino: quali riprese usa? Com'è la punteggiatura?", items: ["Nel paragrafo che ho scelto…"] },
        ],
      },
    ],

    exam: k.exam(79, {
      parole: ["la coesione", "la coerenza", "il capoverso", "la ripresa", "l'iperonimo", "il punto e virgola", "i due punti", "la bozza", "la concisione", "il refuso"],
      contrario: ["la rosa → iperonimo", "il violino → iperonimo", "il cane → iperonimo", "chiaro → contrario", "conciso → contrario", "coerente → contrario"],
      verbiHint: "Riscrivi senza ripetizioni.",
      verbiCols: ["testo migliorato"],
      verbi: [["Ho un gatto. Il gatto è nero.", ""], ["Ho visto Anna. Anna mi ha sorriso.", ""], ["Ho letto il libro. Il libro è bello.", ""], ["Milano è grande. Milano è moderna.", ""]],
      completaHint: "Completa con la punteggiatura giusta (scrivi il segno) o con una ripresa.",
      completa: ["Ho capito una cosa ___ bisogna avere pazienza.", "Ho studiato molto ___ l'esame, però, è andato male.", "Marco ___ vieni qui!", "Mi ha detto ___ «Arrivo subito».", "Ho comprato delle rose. ___ sono sul tavolo. (iperonimo)", "Dante scrisse la Commedia. ___ poeta nacque a Firenze.", "Ho chiamato Paolo e ___ ho detto tutto.", "Ho un'amica ___ vive a Parigi."],
      trasformaHint: "Migliora ogni frase come indicato.",
      trasforma: ["Il ragazzo, è arrivato. (correggi)", "Al fine di imparare, studio ogni giorno. (più semplice)", "Volevo uscire ma pioveva e quindi sono rimasto e ho letto. (dividi con il punto e virgola)", "Roma è antica. Roma è la capitale. (una frase, con descrizione)", "In data odierna l'ufficio è chiuso. (più semplice)", "Prendere una decisione. (un verbo solo)"],
      leggi: {
        text: [
          "Secondo un'indagine tra insegnanti di italiano, gli errori più frequenti nei testi degli studenti non riguardano la grammatica, ma l'organizzazione del testo.",
          "Molti studenti scrivono frasi corrette una per una, ma il testo nel suo insieme non funziona: le idee si ripetono, mancano i connettivi, il registro passa dal formale all'informale senza motivo.",
          "Gli insegnanti consigliano di scrivere sempre una scaletta prima di cominciare e di rileggere il testo almeno due volte: la prima per il contenuto, la seconda per la forma.",
        ],
        questions: ["Che cosa ha scoperto l'indagine?", "Quali problemi hanno i testi degli studenti?", "Che cosa consigliano gli insegnanti prima di scrivere?", "Come consigliano di rileggere?"],
      },
      ascolta: {
        script: [
          { who: "Studentessa", text: "Professore, perché mi ha segnato in rosso questa virgola?" },
          { who: "Professore", text: "Perché separa il soggetto dal verbo: «Il direttore, ha deciso». Non si fa mai." },
          { who: "Studentessa", text: "E qui, il punto e virgola va bene?" },
          { who: "Professore", text: "Sì, perfetto: le due frasi sono collegate, ma autonome. E complimenti: hai eliminato quasi tutte le ripetizioni!" },
        ],
        questions: ["Perché il professore ha segnato la virgola?", "Qual è la regola?", "Il punto e virgola della studentessa va bene? Perché?", "Per che cosa la complimenta il professore?"],
      },
      parla: ["Spiega tre tecniche per evitare le ripetizioni.", "Spiega quando si usano il punto e virgola e i due punti.", "Che cos'è l'«antilingua»?", "Quali sono le tue regole per scrivere bene?"],
      role: ["L'IA ti fa leggere un suo testo pieno di ripetizioni.", "Aiutala a migliorarlo con tatto.", "Proponi tre correzioni concrete."],
      dettato: ["il punto e virgola", "i due punti", "la coesione", "rileggere ad alta voce", "la ripresa", "scrivere chiaro"],
      traduci: ["Ho un cane. Il cane si chiama Leo. (una frase)", "La ragazza, è partita. (correggi)", "A causa del fatto che pioveva, siamo rimasti. (più semplice)", "Ho capito tutto mi serve tempo. (due punti)", "Effettuare un pagamento. (un verbo solo)", "Mi ha chiesto vieni? (punteggiatura del discorso diretto)"],
      scrivi: { hint: "Scrivi (180–220 parole) un testo su «Che cosa ho imparato sulla scrittura in questo corso», curando coesione, punteggiatura e registro. Alla fine, rileggilo ad alta voce e correggilo.", start: "Quando ho cominciato a scrivere in italiano…" },
    }),
  };
})();
