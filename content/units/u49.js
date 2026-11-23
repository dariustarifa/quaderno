// Unità 49 · Ambiente — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[49] = {
    n: 49,
    level: "B1",
    title: "Ambiente",
    goal: "Parlare di ambiente, rifiuti e abitudini sostenibili, dando istruzioni e consigli con l'imperativo e i pronomi.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di ambiente: raccolta differenziata, sprechi, energia, clima, e a dare istruzioni pratiche («La bottiglia? Buttala nella plastica!»).",
              "Grammatica: l'imperativo con i pronomi diretti, indiretti, combinati, «ci» e «ne» (spegnila, dammelo, non buttarlo, la butti, ne prenda due), con tu, noi, voi e Lei.",
              "Cultura: come funziona la raccolta differenziata in Italia, che cambia da comune a comune.",
            ],
          },
          {
            kind: "intro", title: "Spegnila! Non sprecarla!", hint: "Un'anticipazione: imperativo e pronomi",
            text: ["Con tu, noi e voi i pronomi si attaccano all'imperativo: «Spegni la luce» → «Spegnila!», «Ricicliamola!», «Buttatela!».", "Con Lei vanno prima: «La spenga», «Lo butti qui»."],
            examples: [
              { it: "La luce? Spegnila quando esci!", es: "tu + pronome attaccato" },
              { it: "Questa bottiglia non buttarla: riusala!", es: "negativo con tu" },
              { it: "Signora, il vetro lo metta nel cassonetto verde.", es: "Lei + pronome prima" },
            ],
          },
          { kind: "speak", title: "Le tue abitudini", hint: "Prima di cominciare: che cosa fai tu per l'ambiente? Fai la raccolta differenziata?", items: ["Per l'ambiente io…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Ambiente e rifiuti", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la raccolta differenziata", "i rifiuti", "l'umido / l'organico", "l'indifferenziato", "il cassonetto",
              "riciclare", "riutilizzare", "lo spreco", "sprecare", "l'impronta ecologica",
              "le energie rinnovabili", "il pannello solare", "l'inquinamento", "le emissioni", "il riscaldamento globale",
              "la siccità", "l'alluvione", "sostenibile", "a chilometro zero", "l'usa e getta",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "dove va?", title: "Dove lo butto?",
            hint: "Scrivi in quale raccolta va ogni rifiuto: carta, plastica, vetro, umido, indifferenziato, metalli (spesso insieme alla plastica), pile, abiti usati.",
            items: ["la buccia di banana", "il giornale vecchio", "la bottiglia d'olio di vetro", "lo yogurt (vasetto vuoto)", "le pile esaurite", "la lattina", "il fondo del caffè", "lo scontrino"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: spegnila → Hai lasciato la luce accesa: spegnila!", items: ["buttalo", "non sprecarla", "riciclatele", "lo metta", "dammelo", "non buttarne", "la raccolta differenziata", "sostenibile"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Fallo, dillo, dammi", hint: "Le doppie dell'imperativo",
            text: [
              "Con i cinque imperativi brevi (da', di', fa', sta', va') la consonante del pronome si raddoppia: dammi, dillo, fallo, stammi (vicino), vacci. Eccezione: «gli» non raddoppia: «digli», «dagli».",
              "L'accento non si sposta quando aggiungi pronomi: bùt-ta → bùt-ta-lo → bùt-ta-glie-lo.",
              "Gli ordini si possono ammorbidire con «dai», «su», «per favore», «mi raccomando».",
            ],
            table: { head: ["imperativo", "+ pronome"], rows: [["fa'", "fallo, falle"], ["di'", "dillo, dimmi"], ["da'", "dammelo, dallo"], ["va'", "vacci"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti facendo sentire le doppie.", items: ["fallo, dillo, dammi, vacci", "buttala, spegnila, riciclalo", "dammelo, diglielo, portatemelo", "non buttarlo, non lo buttare"] },
          { kind: "shadow", title: "Istruzioni", hint: "Ripeti con tono deciso ma gentile.", items: ["La plastica? Sciacquala e mettila nel sacco giallo.", "Le pile non buttarle: portale al supermercato.", "Signora, la carta la metta nel cassonetto blu.", "Ragazzi, spegnete le luci e chiudetele bene!", "L'acqua? Non sprecarla, mi raccomando."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Imperativo + pronomi", hint: "Dove va il pronome",
            text: [
              "Tu, noi, voi (affermativo): pronome attaccato alla fine: «Prendilo», «Buttiamola», «Riciclateli».",
              "Tu (negativo): «non» + infinito con il pronome attaccato, oppure prima: «Non buttarlo» = «Non lo buttare». Noi / voi negativo: «Non buttiamola», «Non lo buttate».",
              "Lei (formale): pronome sempre prima: «Lo butti», «Non lo butti», «Me lo dia».",
              "Funziona anche con ci e ne: «Vacci», «Prendine due», «Non metterne troppa».",
            ],
            table: { head: ["", "affermativo", "negativo"], rows: [["tu", "buttalo", "non buttarlo / non lo buttare"], ["noi", "buttiamolo", "non buttiamolo"], ["voi", "buttatelo", "non buttatelo"], ["Lei", "lo butti", "non lo butti"]] },
          },
          k.table("Aggiungi il pronome", [
            ["spegni (la luce)", "spegnila", "non spegnerla", "la spenga"],
            ["butta (i giornali)", "", "", ""],
            ["ricicla (la plastica)", "", "", ""],
            ["di' (a me la verità)", "", "", ""],
            ["prendi (due sacchi: ne)", "", "", ""],
            ["porta (le pile al negozio)", "", "", ""],
          ], "Completa: affermativo (tu), negativo (tu) e formale (Lei).", ["tu", "tu (negativo)", "Lei"]),
          {
            kind: "fill", title: "Istruzioni ecologiche", hint: "Completa con l'imperativo e il pronome giusto (attaccato o separato).",
            items: [
              "Le bottiglie di vetro? ___ (tu, metterle) nel cassonetto verde.", "Il computer di notte non ___ (tu, lasciarlo) acceso.", "I vestiti vecchi? ___ (voi, darli) a chi ne ha bisogno.", "Signore, le pile non ___ (Lei, buttarle) nell'indifferenziato.", "La borsa di plastica? Non ___ (tu, comprarla): usa quella di stoffa.", "Il compost? ___ (noi, farlo) in giardino!", "La verità sull'inquinamento? ___ (tu, dirla) a tutti.", "Signora, ___ (Lei, darmi) il sacco dell'umido, per favore.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Imperativo e pronomi combinati", hint: "Me lo, glielo, ce ne…",
            text: [
              "Con due pronomi, la regola non cambia: attaccati con tu / noi / voi, prima con Lei: «Dammelo», «Portiamoglielo», «Me lo dia», «Glielo porti».",
              "Con i cinque imperativi brevi si raddoppia: «Dammelo», «Fammelo vedere», «Dillo».",
              "Negativo con tu: «Non darmelo» / «Non me lo dare».",
            ],
          },
          {
            kind: "fill", title: "Due pronomi", hint: "Sostituisci con i pronomi combinati, all'imperativo indicato.",
            items: ["Da' il sacchetto a me! → ___!", "Porta i vestiti a tua nonna! → ___!", "Signora, mi dia la ricevuta. → ___ dia.", "Spiegate la regola a noi! → ___!", "Non dire la notizia a Marco! → Non ___!", "Fa' vedere a me il progetto! → ___ vedere!"],
          },
          {
            kind: "intro", title: "Consigli per l'ambiente", hint: "Formule utili",
            text: ["Oltre all'imperativo, per consigli più morbidi: «Sarebbe meglio…», «Conviene…» (è utile), «Bisogna…», «Basta + infinito» (= è sufficiente): «Basta spegnere la luce per risparmiare».", "Per le regole: «È vietato…», «È obbligatorio…», «Si prega di…» (nei cartelli)."],
          },
          k.negativa(["Butta la bottiglia nella plastica!", "Spegnete la televisione!", "Signora, prenda il sacco giallo.", "Da' a me le pile!", "Compriamo l'acqua in bottiglia!", "Porta i vestiti al mercatino!"], "Riscrivi ogni frase con il pronome; poi trasformala al negativo.", "con pronome e al negativo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La nuova coinquilina", "Una ragazza spiega la raccolta differenziata a una nuova coinquilina straniera.", [
            { who: "Silvia", text: "Allora, qui la raccolta è porta a porta: ogni giorno si porta fuori un tipo di rifiuto diverso." },
            { who: "Mei", text: "E come faccio a sapere quale?" },
            { who: "Silvia", text: "C'è il calendario sul frigo: guardalo ogni sera. Il lunedì l'umido, il martedì la plastica, il giovedì la carta." },
            { who: "Mei", text: "E le bottiglie di vetro?" },
            { who: "Silvia", text: "Quelle portale tu al cassonetto verde in fondo alla strada. E le scatole della pizza non metterle nella carta se sono sporche: vanno nell'indifferenziato." },
            { who: "Mei", text: "Che complicato! In Cina, nella mia città, era diverso." },
            { who: "Silvia", text: "Tranquilla, dopo una settimana ti viene naturale. E se sbagli, il comune può dare una multa: quindi chiedimelo sempre!" },
          ], ["Come funziona la raccolta in casa di Silvia?", "Dove si trova il calendario? Che cosa deve fare Mei?", "Che cosa si porta il lunedì, il martedì e il giovedì?", "Dove vanno le bottiglie di vetro? E le scatole della pizza sporche?", "Che cosa succede se si sbaglia?"]),
          k.listen("Il clima e il Po", "Un servizio radiofonico sulla siccità nel Nord Italia.", [
            { who: "Giornalista", text: "Il Po, il fiume più lungo d'Italia, negli ultimi anni ha avuto estati di siccità gravissima: in alcuni punti si camminava sul letto del fiume." },
            { who: "Agricoltore", text: "Coltivo riso da trent'anni e non avevo mai visto niente di simile. Senza acqua, le piante muoiono." },
            { who: "Esperta", text: "Bisogna cambiare abitudini: riparare le tubature che perdono, raccogliere l'acqua piovana, scegliere colture che consumano meno." },
            { who: "Giornalista", text: "E i cittadini che cosa possono fare?" },
            { who: "Esperta", text: "Tanto: chiudete il rubinetto mentre vi lavate i denti, fate docce brevi e non lavate la macchina con l'acqua potabile." },
          ], ["Che problema ha avuto il Po?", "Che cosa racconta l'agricoltore?", "Che soluzioni propone l'esperta?", "Che cosa possono fare i cittadini?", "Trova tre imperativi nel testo."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La raccolta differenziata in Italia", [
            "In Italia la raccolta dei rifiuti è organizzata da ogni comune, quindi le regole cambiano da città a città. Anche i colori dei cassonetti e dei sacchi possono essere diversi: informati sempre al tuo arrivo.",
            "In molti comuni la raccolta è «porta a porta»: ogni famiglia lascia fuori dalla porta il sacco giusto nel giorno stabilito. In altri si usano i cassonetti in strada.",
            "Le categorie principali sono: umido (gli avanzi di cibo), carta e cartone, plastica e metalli, vetro e indifferenziato. Pile, farmaci e oggetti elettronici vanno portati in punti di raccolta speciali.",
            "Alcune regioni, soprattutto al Nord, superano il settanta per cento di raccolta differenziata. In altre zone i risultati sono più bassi, ma stanno migliorando.",
            "Gli esperti ricordano che il rifiuto migliore è quello che non si produce: scegliete prodotti senza imballaggi, riparate gli oggetti prima di buttarli e comprate solo quello che vi serve.",
          ], ["Chi organizza la raccolta dei rifiuti? Che conseguenza ha?", "Che cos'è la raccolta porta a porta?", "Quali sono le categorie principali?", "Dove vanno le pile e i farmaci?", "Dove si raggiungono i risultati migliori?", "Qual è il consiglio degli esperti? Che cosa ne pensi?"]),
          k.spagna("Come funziona la raccolta dei rifiuti nel tuo paese o nella tua città? Dai tre istruzioni a un italiano che arriva a vivere lì, con l'imperativo e i pronomi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Convincere a cambiare abitudini", hint: "Formule utili",
            text: ["Per convincere: «Pensaci: se tutti lo facessero…», «Provaci per una settimana», «Non costa niente», «Basta poco».", "Per rispondere alle obiezioni: «Hai ragione, però…», «Lo so che è scomodo, ma…», «Anche un piccolo gesto conta»."],
          },
          k.rispondi(["Che cosa fai ogni giorno per l'ambiente?", "Che cosa potresti fare di più?", "Ti preoccupa il cambiamento climatico? Perché?", "Nel tuo paese la raccolta differenziata funziona bene?", "Che cosa butti più spesso? Si potrebbe evitare?", "Quali cambiamenti dovrebbero fare i governi, secondo te?"]),
          { kind: "speak", title: "Il coinquilino sprecone", hint: "Il tuo coinquilino fa queste cose: digli che cosa fare, usando l'imperativo con il pronome.", items: ["Lascia la luce accesa tutta la notte.", "Butta le bottiglie di vetro nell'indifferenziato.", "Fa la doccia di venti minuti.", "Compra sempre bottiglie d'acqua di plastica.", "Lascia il caricatore attaccato alla presa.", "Butta il pane vecchio invece di usarlo."] },
          {
            kind: "roleplay", title: "Lo sportello del comune", hint: "Ti sei appena trasferito in un comune italiano e vai allo sportello rifiuti. L'IA fa l'impiegata. Usa il «Lei».",
            steps: ["Spiega la tua situazione e chiedi come funziona la raccolta.", "Chiedi dove buttare tre oggetti difficili (pile, olio, un vecchio divano).", "Chiedi il calendario e i sacchi.", "Chiedi che cosa succede se sbagli.", "Ringrazia."],
          },
          {
            kind: "roleplay", title: "La riunione di condominio verde", hint: "Proponi al condominio di installare pannelli solari. Un vicino (l'IA) è contrario.",
            steps: ["Presenta la proposta e i vantaggi.", "Ascolta le obiezioni (costi, estetica…).", "Rispondi con dati e argomenti.", "Proponi un compromesso.", "Concludi con una richiesta concreta («Votiamolo!»)."],
          },
          { kind: "speak", title: "La mia campagna", hint: "Prepara uno spot radiofonico di un minuto e mezzo per convincere i cittadini a sprecare meno acqua o meno cibo. Usa l'imperativo con voi e i pronomi.", items: ["Cittadini, ascoltateci…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Spegni la luce! (con il pronome)", "Non buttare la carta qui! (con il pronome, due modi)", "Signora, metta il vetro nel cassonetto verde. (con il pronome)", "Da' a me il sacco. (con i pronomi)", "Porta i vestiti a tua sorella. (con i pronomi)", "Ricicliamo le bottiglie! (con il pronome)", "Prendete due sacchetti. (con ne)", "Va' al centro di raccolta! (con ci)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Il decalogo", hint: "Scrivi un decalogo (dieci regole) per una famiglia più sostenibile, con una breve introduzione (220–250 parole in tutto). Usa l'imperativo (voi o tu) con i pronomi in almeno otto regole.", rows: 18, items: ["Dieci regole per una casa più verde"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: imperativo e pronomi", ["spegnila", "non buttarlo", "dammelo", "la metta qui", "ricicliamoli", "prendine due"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["La plastica sciacquala prima di buttarla.", "Le pile portale al supermercato.", "Non sprecate l'acqua.", "Signora, la carta la metta nel blu.", "Il rifiuto migliore è quello che non si produce."]),
          k.media([
            { type: "Film", title: "Le meraviglie (Alice Rohrwacher, 2014)", where: "Cerca dove vederlo su JustWatch", why: "Una famiglia di apicoltori in campagna, tra natura, lavoro e tradizioni. Gran Premio a Cannes." },
            { type: "Podcast", title: "Il Post · Ci vuole una scienza", where: "Spotify, app Il Post", why: "Scienza spiegata in modo semplice, con molti episodi su clima ed energia." },
            { type: "YouTube", title: "Raccolta differenziata: istruzioni", where: "YouTube", why: "Cerca il video del comune di una città italiana (es. «raccolta differenziata Milano»): istruzioni chiare all'imperativo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che rapporto hanno i personaggi con la natura? Che consigli daresti loro?", items: ["Nel film la natura…"] },
        ],
      },
    ],

    exam: k.exam(49, {
      parole: ["l'umido", "l'indifferenziato", "il cassonetto", "lo spreco", "l'impronta ecologica", "le rinnovabili", "la siccità", "l'usa e getta", "a chilometro zero", "porta a porta"],
      contrario: ["la buccia d'arancia → dove va?", "il cartone della pizza pulito → dove va?", "il vasetto di vetro → dove va?", "le pile → dove vanno?", "sprecare → sostantivo", "inquinare → sostantivo"],
      verbiHint: "Completa: affermativo (tu), negativo (tu) e formale (Lei).",
      verbiCols: ["tu", "tu (negativo)", "Lei"],
      verbi: [["butta (la carta)", "", "", ""], ["di' (a lui la verità)", "", "", ""], ["fa' (il compost)", "", "", ""], ["prendi (tre sacchi: ne)", "", "", ""]],
      completaHint: "Completa con l'imperativo e il pronome giusto.",
      completa: ["Il vetro? ___ (tu, metterlo) nel cassonetto verde.", "La luce non ___ (tu, lasciarla) accesa!", "Signora, il sacco ___ (Lei, lasciarlo) fuori alle venti.", "Le bottiglie? ___ (noi, riciclarle)!", "Da' a me le pile → ___!", "Ragazzi, i rifiuti non ___ (voi, buttarli) per terra!", "Va' al centro di raccolta → ___ domani!", "Prendi due sacchetti → ___ due!"],
      trasformaHint: "Riscrivi con il pronome, poi al negativo.",
      trasforma: ["Spegni il computer!", "Signore, butti la plastica qui.", "Portate i vestiti alla Caritas!", "Di' a me la verità!", "Ricicliamo i giornali!", "Compra le mele al mercato!"],
      leggi: {
        text: [
          "Avviso ai cittadini: dal primo marzo la raccolta della plastica passa dal martedì al mercoledì. I sacchi vanno esposti la sera prima, dopo le ore 20, e non prima.",
          "Si ricorda che i contenitori vanno sciacquati e schiacciati per occupare meno spazio. Le bottiglie di vetro non vanno mai messe nella plastica.",
          "Per gli oggetti ingombranti (mobili, materassi, elettrodomestici) chiamate il numero verde e prenotate il ritiro gratuito. Chi abbandona rifiuti in strada riceverà una multa.",
        ],
        questions: ["Che cosa cambia dal primo marzo?", "Quando bisogna esporre i sacchi?", "Che cosa bisogna fare con i contenitori?", "Che cosa si fa con gli oggetti ingombranti? Che cosa rischia chi abbandona rifiuti?"],
      },
      ascolta: {
        script: [
          { who: "Mamma", text: "Luca, la bottiglia di succo dove l'hai buttata?" },
          { who: "Luca", text: "Nell'indifferenziato." },
          { who: "Mamma", text: "No! Riprendila e mettila nella plastica. E il tappo non buttarlo: lo raccogliamo per la scuola." },
          { who: "Luca", text: "Va bene. E la scatola della pizza?" },
          { who: "Mamma", text: "Se è sporca, buttala nell'indifferenziato; se è pulita, nella carta." },
        ],
        questions: ["Dove ha buttato Luca la bottiglia?", "Che cosa deve fare con la bottiglia?", "Perché non deve buttare il tappo?", "Dove va la scatola della pizza?"],
      },
      parla: ["Che cosa fai per l'ambiente? Che cosa potresti fare di più?", "Spiega a un nuovo coinquilino come funziona la raccolta, con l'imperativo.", "Il cambiamento climatico ti preoccupa? Argomenta.", "Convinci un amico a non usare l'usa e getta."],
      role: ["L'IA è un turista che non sa dove buttare i rifiuti: spiegaglielo con l'imperativo formale.", "Rispondi alle sue domande su tre oggetti.", "Dagli un consiglio per sprecare meno."],
      dettato: ["Buttalo nella plastica.", "Non sprecarla!", "La metta nel cassonetto.", "Dammelo, per favore.", "Prendine solo uno.", "la raccolta differenziata"],
      traduci: ["Chiudi il rubinetto! (con il pronome)", "Non lasciare la luce accesa! (con il pronome)", "Signora, mi dia il sacchetto. (con i pronomi)", "Portiamo le pile al negozio. (con il pronome)", "Di' a lui di riciclare. (con il pronome)", "Prendete tre bottiglie. (con ne)"],
      scrivi: { hint: "Scrivi un messaggio (150–180 parole) ai tuoi coinquilini con le nuove regole per la casa: rifiuti, luce, acqua. Usa l'imperativo con i pronomi.", start: "Ciao ragazzi, da oggi in casa…" },
    }),
  };
})();
