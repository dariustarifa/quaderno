// Unità 71 · Parole alterate — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[71] = {
    n: 71,
    level: "B2",
    title: "Parole alterate",
    goal: "Capire e usare i suffissi alterativi (-ino, -etto, -ello, -uccio, -one, -accio, -astro) per esprimere dimensione, affetto, ironia o disprezzo, e riconoscere i falsi alterati.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "L'italiano può cambiare il significato di una parola aggiungendo un suffisso: casa → casetta (piccola e carina), casona (grande), casaccia (brutta). Sono le parole alterate.",
              "Gli alterati non indicano solo la dimensione, ma anche un giudizio o un'emozione: affetto, ironia, disprezzo. Per questo sono fondamentali per matizzare.",
              "Imparerai anche a riconoscere i falsi alterati: parole che sembrano alterate ma non lo sono (mulino non è un piccolo mulo!).",
            ],
          },
          {
            kind: "intro", title: "Una parola, molti significati", hint: "Un'anticipazione",
            examples: [
              { it: "un ragazzino", es: "piccolo (-ino)" },
              { it: "un ragazzone", es: "grande e grosso (-one)" },
              { it: "un ragazzaccio", es: "cattivo (-accio)" },
              { it: "un ragazzetto", es: "piccolo, a volte con un po' di disprezzo (-etto)" },
            ],
            text: ["Il suffisso cambia l'immagine, e spesso anche il giudizio di chi parla."],
          },
          { kind: "speak", title: "Nella tua lingua", hint: "Prima di cominciare: la tua lingua usa i diminutivi? Ne usi molti? Con chi?", items: ["Nella mia lingua i diminutivi…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Alterati comuni", hint: "Scrivi la parola di base e il significato dell'alterato.",
            placeholder: "base e significato",
            items: [
              "il fratellino", "la casetta", "il libretto", "l'alberello", "la boccuccia",
              "il gattone", "il librone", "il nasone", "il portone", "il febbrone",
              "la parolaccia", "il tempaccio", "la giornataccia", "il poetastro", "il giovinastro",
              "un attimino", "benino", "maluccio", "un pochino", "caruccio",
            ],
          },
          {
            kind: "vocab", title: "Falsi alterati", hint: "Spiega il significato di ogni parola: attenzione, non sono alterati!",
            placeholder: "significato",
            items: ["il mulino", "il bottone", "il lampone", "il tacchino", "il cerino", "il postino", "il burrone", "il mattone", "il rubinetto", "il limone"],
          },
          {
            kind: "translate", from: "it", placeholder: "alterato", title: "Altera",
            hint: "Scrivi l'alterato richiesto.",
            items: ["gatto (piccolo e carino)", "libro (grande)", "tempo (brutto)", "parola (volgare)", "naso (grande)", "bacio (piccolo, affettuoso)", "vento (leggero)", "porta (grande, di un palazzo)"],
          },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il tono dell'alterato", hint: "Affetto, ironia, disprezzo",
            text: [
              "Lo stesso alterato può cambiare senso con l'intonazione: «Che bel vestitino!» (affetto) / «Bel vestitino…» (ironia).",
              "Con i bambini e gli animali la voce si alza e si addolcisce: «Ciao, piccolino!».",
              "L'accento si sposta sul suffisso: càsa → casètta, casóna; gàtto → gattìno.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con il tono giusto.", items: ["Che bel gattino!", "Aspetta un attimino!", "Che tempaccio, oggi!", "Ha un nasone enorme.", "Vieni qui, tesoruccio!"] },
          { kind: "shadow", title: "Coppie", hint: "Senti come si sposta l'accento.", items: ["casa, casetta, casona", "libro, libretto, librone", "gatto, gattino, gattone", "parola, parolina, parolaccia"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I suffissi alterativi", hint: "Sostantivi, aggettivi, avverbi",
            text: [
              "Diminutivi: -ino, -etto, -ello, -icello, -olino (casina, casetta, alberello, venticello). Vezzeggiativi (affetto): -uccio, -uzzo (boccuccia, tesoruccio).",
              "Accrescitivi: -one (librone). Molti femminili diventano maschili: la porta → il portone, la donna → il donnone, la febbre → il febbrone.",
              "Peggiorativi: -accio, -astro, -ucolo (tempaccio, poetastro, giornalucolo).",
              "Anche aggettivi e avverbi: bellino, carino, grandicello, benino, maluccio, pochino, prestino.",
            ],
            table: { head: ["suffisso", "esempio"], rows: [["-ino / -etto", "tavolino, cassetta"], ["-ello / -icello", "paesello, venticello"], ["-uccio", "boccuccia"], ["-one", "portone"], ["-accio", "parolaccia"], ["-astro", "giovinastro"]] },
          },
          k.table("Quale alterato?", [
            ["Un bambino piccolo, tenero.", "un bambinello / un bambino piccolino"],
            ["Una giornata brutta.", ""],
            ["Una porta grande, di un palazzo.", ""],
            ["Una febbre molto alta.", ""],
            ["Un vento leggero.", ""],
            ["Un poeta mediocre.", ""],
          ], "Scrivi l'alterato adatto.", ["alterato"]),
          {
            kind: "intro", title: "I verbi alterati", hint: "Azioni ripetute o leggere",
            text: ["Anche i verbi hanno forme alterate, con -icchiare, -ellare, -erellare: canticchiare (cantare piano), dormicchiare (dormire poco e male), mordicchiare (mordere leggermente), saltellare (fare piccoli salti), giocherellare (giocare distrattamente con qualcosa)."],
          },
          {
            kind: "fill", title: "Completa", hint: "Completa con un verbo alterato al tempo giusto: canticchiare, dormicchiare, mordicchiare, saltellare, giocherellare, sorseggiare.",
            items: [
              "Mentre cucina, mia madre ___ sempre una vecchia canzone.", "Durante il film, il nonno ___ sul divano.", "Era nervosa e ___ con la penna.", "Il bambino ___ felice per il giardino.", "Quando studio, ___ la matita.", "Il signore ___ il suo caffè guardando il mare.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Alterati lessicalizzati", hint: "Parole nuove",
            text: [
              "Alcuni alterati sono diventati parole autonome, con un significato proprio: il cavalletto (non è un piccolo cavallo, ma un supporto), il fumetto (racconto a disegni), il rossetto (trucco per le labbra), il cassetto, il finestrino (del treno), il pancone, lo spaghetto.",
              "Il significato originale si sente ancora, ma la parola vive da sola: «il cavalletto del pittore».",
            ],
          },
          k.negativa(["Abitiamo in una casa piccola e carina.", "Oggi c'è un tempo bruttissimo.", "Ha detto una parola volgare.", "Mi presti un po' di zucchero?", "Il ragazzo è cattivo e maleducato.", "Abbiamo mangiato un pranzo abbondante, enorme."], "Riscrivi ogni frase usando un alterato.", "con un alterato"),
          {
            kind: "intro", title: "Attenzione all'uso", hint: "Registro e ironia",
            text: ["Gli alterati sono frequenti nel parlato e nei testi informali. In un testo formale o tecnico si evitano. Possono anche essere ironici o offensivi: «il tuo lavoretto» può sminuire il lavoro di qualcuno; «un attimino» è ormai molto diffuso, ma a molti sembra un'espressione da evitare negli scritti curati."],
          },
          {
            kind: "fill", title: "Vero o falso alterato?", hint: "Scrivi «vero» o «falso». Se è vero, scrivi la parola di base.",
            items: ["il gattino → ___", "il mulino → ___", "la casetta → ___", "il bottone → ___", "il tacchino → ___", "il librone → ___", "il lampone → ___", "la parolaccia → ___"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La nonna e il nipotino", "La nonna accoglie il nipote che arriva per le vacanze.", [
            { who: "Nonna", text: "Eccolo, il mio tesoruccio! Come sei cresciuto! Sei diventato un ragazzone!" },
            { who: "Matteo", text: "Ciao, nonna! Ho fatto un viaggio lunghissimo, con un tempaccio…" },
            { who: "Nonna", text: "Vieni, vieni, ti ho preparato una cenetta: un brodino, due polpettine e una torta piccolina." },
            { who: "Matteo", text: "Nonna, ho fame da lupi! Altro che «piccolina»!" },
            { who: "Nonna", text: "Va bene, allora ti faccio anche un piattone di pasta. E dopo, a letto: sei stanchino!" },
          ], ["Come chiama la nonna il nipote? Che cosa esprime?", "Com'è stato il viaggio di Matteo?", "Che cosa ha preparato la nonna?", "Perché Matteo protesta?", "Fai l'elenco di tutti gli alterati del dialogo e spiega ognuno."]),
          k.listen("Il nuovo appartamento", "Due amiche parlano della casa di una conoscente.", [
            { who: "Silvia", text: "Sei stata a vedere la casa nuova di Federica?" },
            { who: "Elena", text: "Sì… Lei la chiama «una casetta deliziosa», ma è un buchetto di quaranta metri quadri." },
            { who: "Silvia", text: "Dai, non essere cattiva. E il quartiere?" },
            { who: "Elena", text: "Un quartieraccio, sinceramente. Però ha un terrazzino carino, con le piantine." },
          ], ["Come descrive Federica la sua casa?", "Come la descrive invece Elena?", "Che cosa pensa Elena del quartiere?", "C'è qualcosa che le piace?", "Spiega come gli alterati esprimono il giudizio di Elena."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La pasta parla per alterati", [
            "Basta guardare il menù di una trattoria italiana per scoprire quanto gli alterati siano radicati nella lingua. Molti formati di pasta portano nel nome un diminutivo o un accrescitivo.",
            "Gli spaghetti sono piccoli «spaghi», cioè cordicelle sottili. I vermicelli, il cui nome fa sorridere chi lo scopre per la prima volta, sono letteralmente «piccoli vermi». Le orecchiette pugliesi ricordano piccole orecchie, e le linguine piccole lingue.",
            "Sul versante opposto ci sono gli accrescitivi: i cannelloni sono grandi «canne», tubi di pasta ripieni, e i paccheri, in alcune zone, vengono chiamati anche «paccheroni» quando sono particolarmente grandi.",
            "Anche i ripieni seguono la stessa logica: il tortello è una piccola «torta», e il tortellino è un tortello ancora più piccolo. Così, in un solo piatto, si nasconde una piccola lezione di grammatica.",
            "Non è un caso: i diminutivi esprimono affetto, e il cibo, in Italia, è prima di tutto una questione di affetto. Forse per questo nessuno ordina mai «gli spaghi».",
          ], ["Che cosa si scopre guardando un menù italiano?", "Da quale parola vengono gli spaghetti? E i vermicelli?", "Quali formati di pasta hanno nomi accrescitivi?", "Che rapporto c'è tra torta, tortello e tortellino?", "Perché, secondo il testo, i diminutivi sono così frequenti nei nomi del cibo?", "Conosci altri nomi di cibi italiani alterati?"]),
          k.spagna("La tua lingua usa gli alterati nei nomi dei cibi o nella vita quotidiana? Confronta con l'italiano con almeno sei esempi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ironia e affetto", hint: "Usare gli alterati con intenzione",
            text: ["«Un regalino» (modestia: «Ti ho portato un regalino»), «un lavoretto» (piccolo lavoro, o lavoro poco importante), «un problemino» (minimizzare: «C'è un problemino…» che spesso è un problema grande!), «un caffettino», «un attimino» (attenuare una richiesta)."],
          },
          k.rispondi(["Usi i diminutivi quando parli con bambini o animali?", "Ti è mai capitato che qualcuno minimizzasse un problema con un diminutivo?", "Qual è stata la tua ultima giornataccia?", "Quali alterati italiani ti piacciono di più?", "Ti piacciono i tortellini, le orecchiette o i cannelloni?", "Che cosa canticchi quando sei sotto la doccia?"]),
          { kind: "speak", title: "Descrivi con gli alterati", hint: "Descrivi ogni cosa due volte: una con affetto (diminutivo) e una con disprezzo (peggiorativo).", items: ["la tua prima casa", "il tempo di ieri", "un ristorante dove hai mangiato", "il tuo vecchio telefono"] },
          {
            kind: "roleplay", title: "L'agente immobiliare", hint: "L'IA è un agente immobiliare che usa diminutivi per far sembrare tutto perfetto. Tu sei un cliente diffidente.",
            steps: ["Chiedi di vedere un appartamento.", "Reagisci alla descrizione «una casetta deliziosa».", "Fai notare un problema che lui chiama «un problemino».", "Descrivi la casa con alterati negativi.", "Proponi un prezzo più basso con ironia."],
          },
          {
            kind: "roleplay", title: "Il racconto per bambini", hint: "Racconta all'IA (che fa il bambino) una fiaba piena di alterati: un gattino, una casetta nel bosco, un lupaccio…",
            steps: ["Presenta il protagonista con un diminutivo.", "Descrivi il luogo con alterati.", "Introduci il cattivo con un peggiorativo.", "Rispondi alle domande del bambino.", "Concludi con un finale dolce."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti la tua giornata ideale usando almeno otto alterati diversi.", items: ["Mi sveglio presto, faccio una colazioncina…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Abbiamo una casa piccola e graziosa in campagna.", "È stata una giornata bruttissima.", "C'è un piccolo problema con la prenotazione.", "Ha un naso grande.", "Mi dai un po' di pane?", "Che tempo orribile!", "Mia nipote ha una bocca piccola e graziosa.", "Il bambino fa piccoli salti in giardino."], "Riscrivi ogni frase con un alterato (sostantivo, aggettivo, avverbio o verbo)."),
          { kind: "write", title: "Una fiaba moderna", hint: "Scrivi una fiaba moderna (280–320 parole) ambientata in una città italiana. Usa almeno quindici alterati diversi (diminutivi, accrescitivi, peggiorativi, vezzeggiativi, verbi alterati) e almeno due falsi alterati.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: alterati", ["il fratellino", "la giornataccia", "il portone", "un attimino", "canticchiare", "il venticello"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ti ho portato un regalino.", "Che tempaccio, oggi!", "C'è un problemino con la prenotazione.", "Il mulino non è un piccolo mulo.", "Mentre cucina, canticchia sempre."]),
          k.media([
            { type: "Libro", title: "Favole al telefono (Gianni Rodari, 1962)", where: "Libreria o biblioteca", why: "Brevissime storie per bambini piene di giochi di parole e di alterati: perfette da leggere ad alta voce." },
            { type: "Libro", title: "Grammatica della fantasia (Gianni Rodari, 1973)", where: "Libreria o biblioteca", why: "Rodari spiega come si inventano storie giocando con le parole: lettura per adulti curiosi." },
            { type: "Libro", title: "Le avventure di Pinocchio (Carlo Collodi, 1883)", where: "Libreria, biblioteca o testo libero online", why: "Il burattino più famoso del mondo: anche il suo nome è un alterato (da «pino»). Leggi il primo capitolo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta una delle favole che hai letto, usando gli alterati del testo e aggiungendone altri.", items: ["C'era una volta un omino…"] },
        ],
      },
    ],

    exam: k.exam(71, {
      parole: ["il fratellino", "il portone", "la parolaccia", "il tempaccio", "il poetastro", "benino", "canticchiare", "il mulino", "il bottone", "la boccuccia"],
      contrario: ["casetta → accrescitivo", "librone → diminutivo", "parolina → peggiorativo", "giornataccia → diminutivo", "gattino → accrescitivo", "benone → contrario (maluccio)"],
      verbiHint: "Scrivi l'alterato richiesto.",
      verbiCols: ["alterato"],
      verbi: [["porta (grande)", ""], ["tempo (brutto)", ""], ["vento (leggero)", ""], ["bocca (piccola, affettuoso)", ""], ["cantare (piano, distrattamente)", ""], ["poco (diminutivo)", ""]],
      completaHint: "Completa con l'alterato adatto.",
      completa: ["Che ___ (tempo brutto) oggi!", "Abitiamo in una ___ (casa piccola) in montagna.", "Il bambino ___ (fare piccoli salti) nel prato.", "Ha la ___ (febbre alta): resta a letto.", "Non dire ___ (parole volgari)!", "Aspetta un ___ (attimo, diminutivo).", "Mi sento ___ (bene, diminutivo), grazie.", "È stata proprio una ___ (giornata brutta)."],
      trasformaHint: "Riscrivi ogni frase con un alterato.",
      trasforma: ["Abbiamo un cane piccolo e carino.", "Ha scritto un libro enorme.", "Mi presti un po' di sale?", "Era un ragazzo cattivo.", "C'è un piccolo problema.", "Il gatto morde leggermente la mia mano."],
      leggi: {
        text: [
          "Secondo un sondaggio, l'alterato più usato dagli italiani sul lavoro è «un attimino»: «Aspetta un attimino», «Mi serve un attimino di tempo».",
          "Molti linguisti lo considerano una forma di cortesia, perché attenua le richieste. Altri, invece, lo trovano irritante e consigliano di evitarlo negli scritti formali.",
          "Al secondo posto c'è «un problemino», spesso usato per presentare una brutta notizia in modo meno diretto. Come scherzano molti impiegati: «Quando il capo dice “problemino”, preparati al peggio».",
        ],
        questions: ["Qual è l'alterato più usato sul lavoro?", "Perché alcuni linguisti lo considerano cortese?", "Che cosa pensano gli altri?", "Come si usa «un problemino»? Che cosa dicono scherzando gli impiegati?"],
      },
      ascolta: {
        script: [
          { who: "Cliente", text: "Buongiorno, vorrei un caffettino e una brioche." },
          { who: "Barista", text: "Subito! Fuori c'è un tempaccio, eh?" },
          { who: "Cliente", text: "Terribile. E poi ho una giornataccia: il capo mi ha chiamato per «un problemino»…" },
          { who: "Barista", text: "Ahi, quando dicono «problemino» è un problemone!" },
        ],
        questions: ["Che cosa ordina il cliente?", "Che tempo fa fuori?", "Perché il cliente ha una giornataccia?", "Che battuta fa il barista? Spiega il gioco tra «problemino» e «problemone»."],
      },
      parla: ["Spiega la differenza tra casetta, casona e casaccia.", "Racconta una giornataccia.", "Descrivi la tua casa ideale con gli alterati.", "Spiega tre falsi alterati."],
      role: ["L'IA è un venditore che minimizza tutto con i diminutivi.", "Fai notare i problemi con alterati negativi.", "Negozia con ironia."],
      dettato: ["il portone", "la giornataccia", "un attimino", "il fratellino", "il mulino", "canticchiare"],
      traduci: ["Che tempo brutto!", "Abito in una casa piccola e carina.", "Mi dai un po' d'acqua?", "Ha una febbre altissima.", "Il bambino fa piccoli salti.", "C'è un piccolo problema."],
      scrivi: { hint: "Scrivi (180–220 parole) la descrizione del paese o del quartiere della tua infanzia, con almeno dieci alterati che esprimano affetto, ironia o nostalgia.", start: "Il paesello dove sono cresciuto…" },
    }),
  };
})();
