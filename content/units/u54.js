// Unità 54 · Città che cambiano — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[54] = {
    n: 54,
    level: "B1",
    title: "Città che cambiano",
    goal: "Descrivere e confrontare i cambiamenti delle città, con i comparativi avanzati (sempre più, più… di quanto, più… più…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di come cambiano le città: nuovi quartieri, turismo, affitti, traffico, verde urbano, e a confrontare il passato con il presente.",
              "Grammatica: i comparativi avanzati: «sempre più / sempre meno», «più… di quanto» + congiuntivo o indicativo, «più… più…» (quanto più…, tanto più…), «il più… possibile», «di gran lunga», «molto più / molto meno».",
              "Hai visto i comparativi di base nell'unità 24: adesso li rendi più precisi ed eleganti.",
            ],
          },
          {
            kind: "intro", title: "Sempre più caro", hint: "Un'anticipazione",
            text: ["«Sempre più» indica un cambiamento continuo: «Milano è sempre più cara».", "«Più… di quanto» confronta con un'aspettativa: «È più bella di quanto pensassi» (o, nel parlato, «di quanto pensavo»)."],
            examples: [
              { it: "Gli affitti sono sempre più alti.", es: "cambiamento continuo" },
              { it: "Il quartiere è più tranquillo di quanto immaginassi.", es: "confronto con un'aspettativa" },
              { it: "Più si costruisce, più il traffico aumenta.", es: "più… più (proporzione)" },
            ],
          },
          { kind: "speak", title: "La tua città ieri e oggi", hint: "Prima di cominciare: com'è cambiata la tua città negli ultimi dieci anni?", items: ["Negli ultimi anni la mia città…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "La città che cambia", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la riqualificazione", "la gentrificazione", "il quartiere popolare", "il grattacielo", "la pista ciclabile",
              "la zona pedonale", "il verde urbano", "il trasporto pubblico", "gli affitti brevi", "il sovraffollamento",
              "lo spopolamento del centro", "la periferia", "il degrado", "l'urbanistica", "il cantiere",
              "abbattere", "ristrutturare", "il bosco verticale", "vivibile", "il residente",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Contrari e derivati",
            hint: "Scrivi la parola richiesta.",
            items: ["costruire → contrario", "centro → contrario", "vivibile → contrario", "aumentare → contrario", "pedonale → (sostantivo: chi va a piedi)", "riqualificare → (sostantivo)", "affollato → (sostantivo)", "residente → (verbo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: sempre più → Il centro è sempre più pieno di turisti.", items: ["sempre più", "sempre meno", "più di quanto", "più… più", "il più possibile", "di gran lunga", "la gentrificazione", "vivibile"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Confrontare con enfasi", hint: "Intonazione",
            text: [
              "Nelle frasi con «più… più» la voce sale nella prima parte e scende nella seconda: «Più si costruisce ↗, più il traffico aumenta ↘».",
              "Per enfatizzare: «molto più», «di gran lunga», «infinitamente più». L'accento va su «molto» e «gran lunga».",
              "Parole difficili: gentrificazione (gen-tri-fi-ca-zió-ne), riqualificazione, urbanistica (ur-ba-nì-sti-ca).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti con l'intonazione giusta.", items: ["Più si costruisce, più il traffico aumenta.", "Milano è sempre più cara.", "È molto più bella di quanto pensassi.", "È di gran lunga il quartiere più vivace.", "Bisogna usare la macchina il meno possibile."] },
          { kind: "shadow", title: "Parole lunghe", hint: "Ripeti piano, poi veloce.", items: ["gentrificazione, riqualificazione", "urbanistica, sovraffollamento", "spopolamento, degrado, cantiere", "vivibile, invivibile, pedonale"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Sempre più, più di quanto", hint: "Forme del comparativo avanzato",
            text: [
              "«Sempre più / sempre meno» + aggettivo o avverbio: «sempre più cari», «sempre meno spesso».",
              "«Più / meno… di quanto» + verbo: «È più grande di quanto credessi / credevo». Nella lingua curata si usa il congiuntivo; nel parlato spesso l'indicativo.",
              "«Più (meno)… di quello che»: stessa funzione: «Costa più di quello che pensavamo».",
              "«Il più / il meno + avverbio + possibile»: «Torna il prima possibile», «Spendi il meno possibile».",
            ],
            table: { head: ["forma", "esempio"], rows: [["sempre più", "sempre più traffico"], ["più… di quanto", "più caro di quanto pensassi"], ["il più… possibile", "il prima possibile"], ["di gran lunga", "di gran lunga il migliore"]] },
          },
          k.table("Il comparativo giusto", [
            ["(la città diventa cara, continuamente)", "La città è sempre più cara."],
            ["(il quartiere è bello; non lo pensavo)", ""],
            ["(arriva presto; non può prima)", ""],
            ["(è il parco migliore; nessuno è vicino)", ""],
            ["(ci sono meno residenti, continuamente)", ""],
          ], "Scrivi una frase con il comparativo avanzato adatto alla situazione tra parentesi.", ["frase"]),
          {
            kind: "fill", title: "Completa il confronto", hint: "Completa con sempre più, sempre meno, di quanto, possibile, di gran lunga o molto.",
            items: [
              "Ogni anno il centro è ___ affollato di turisti.", "La nuova metro è più comoda ___ pensassi.", "Ci sono ___ negozi di quartiere: chiudono uno dopo l'altro.", "Questo è ___ il parco più bello della città.", "Cerca di usare la macchina il meno ___.", "Gli affitti sono ___ più alti di dieci anni fa.", "Il quartiere è cambiato più ___ immaginassimo.", "Torna a casa il prima ___!",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Più… più, meno… meno", hint: "Il comparativo di proporzione",
            text: [
              "Per due cose che crescono o diminuiscono insieme: «Più… più…», «Meno… meno…», «Più… meno…». Nella lingua curata: «Quanto più… tanto più…».",
              "«Più ci sono piste ciclabili, più persone usano la bici». «Meno macchine ci sono, meno inquinamento c'è».",
              "Superlativi assoluti con forme speciali: ottimo (buonissimo), pessimo (cattivissimo), massimo (grandissimo), minimo (piccolissimo).",
            ],
          },
          {
            kind: "fill", title: "Più… più", hint: "Completa la seconda parte della proporzione con «più» o «meno».",
            items: ["Più verde c'è in città, ___ la gente sta bene.", "Più il centro diventa caro, ___ residenti ci restano.", "Meno traffico c'è, ___ si respira meglio.", "Più si aspetta, ___ costa ristrutturare.", "Più turisti arrivano, ___ negozi per i residenti restano aperti.", "Meno si investe nei trasporti, ___ macchine ci sono."],
          },
          {
            kind: "intro", title: "Descrivere un cambiamento", hint: "Formule utili",
            text: ["«Rispetto a dieci anni fa…», «Negli ultimi anni…», «È diventato molto più…», «Non è più quello di una volta», «Ha cambiato faccia», «Il cambiamento più evidente è…»."],
          },
          k.negativa(["Il quartiere è bello. Non me lo aspettavo così. (più… di quanto)", "Le case costano tanto, e costano ogni anno di più. (sempre più)", "Se ci sono più bici, c'è meno inquinamento. (più… meno)", "Devi venire prestissimo. (il prima possibile)", "Questo è il museo migliore, nessuno si avvicina. (di gran lunga)", "Il cinema è chiuso da anni. (non è più)"], "Riscrivi ogni frase con la struttura indicata.", "comparativo avanzato"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il mio quartiere non c'è più", "Un signore anziano parla del suo quartiere a Roma.", [
            { who: "Sig. Proietti", text: "Abito a Trastevere da settant'anni. Quando ero bambino, qui c'erano botteghe di artigiani, osterie e famiglie in ogni palazzo." },
            { who: "Sig. Proietti", text: "Oggi è sempre più difficile trovare un romano: quasi tutti gli appartamenti sono diventati case per turisti." },
            { who: "Giornalista", text: "Che cosa le manca di più?" },
            { who: "Sig. Proietti", text: "I vicini. Più turisti arrivano, meno persone conosco. La sera sento parlare inglese, francese, spagnolo… ma nessuno mi saluta." },
            { who: "Giornalista", text: "Ci sono anche cose positive?" },
            { who: "Sig. Proietti", text: "Certo: le strade sono più pulite e sicure di quanto fossero negli anni Settanta. Ma il quartiere non è più quello di una volta." },
          ], ["Da quanto tempo abita a Trastevere il signor Proietti?", "Com'era il quartiere quando era bambino?", "Che cosa è cambiato?", "Che cosa gli manca di più? Perché?", "Quali cambiamenti positivi riconosce?"]),
          k.listen("Bologna Città 30", "Due amici discutono del nuovo limite di velocità.", [
            { who: "Andrea", text: "Hai visto? Adesso in quasi tutta Bologna il limite è trenta all'ora." },
            { who: "Chiara", text: "Sì, e secondo me è un'ottima idea. Meno velocità, meno incidenti." },
            { who: "Andrea", text: "Ma ci metto molto più tempo ad andare al lavoro!" },
            { who: "Chiara", text: "Pochi minuti in più. E più persone si sentono sicure, più usano la bici e i mezzi pubblici." },
            { who: "Andrea", text: "Mah, i mezzi qui non sono ancora efficienti come dovrebbero. Prima bisogna migliorare quelli." },
          ], ["Che cosa è cambiato a Bologna?", "Perché Chiara è favorevole?", "Qual è il problema per Andrea?", "Come risponde Chiara?", "Che cosa pensa Andrea dei mezzi pubblici?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Milano, la città che cambia", [
            "Negli ultimi vent'anni Milano è cambiata più velocemente di qualsiasi altra città italiana. Interi quartieri industriali abbandonati sono stati riqualificati e trasformati in zone di uffici, case e parchi.",
            "Il simbolo di questa trasformazione è il Bosco Verticale, due torri residenziali completate nel 2014 su progetto dell'architetto Stefano Boeri, sui cui balconi crescono centinaia di alberi.",
            "L'Expo del 2015 ha portato milioni di visitatori e ha reso la città sempre più internazionale: oggi Milano attira studenti, aziende e turisti da tutto il mondo.",
            "Ma il successo ha un prezzo. Gli affitti sono di gran lunga i più alti d'Italia e molti giovani, insegnanti e infermieri compresi, non riescono più a vivere in città. Più Milano diventa attraente, più diventa cara.",
            "Gli urbanisti discutono su come rendere la città più giusta: più case a prezzi accessibili, più trasporti verso la periferia e più spazi verdi per tutti, non solo per chi può permetterseli.",
          ], ["Come è cambiata Milano negli ultimi vent'anni?", "Che cos'è il Bosco Verticale? Chi l'ha progettato?", "Che effetto ha avuto l'Expo 2015?", "Qual è il prezzo del successo?", "Che cosa propongono gli urbanisti?", "La tua città è cambiata in modo simile?"]),
          k.spagna("Com'è cambiata una città del tuo paese che conosci bene? È migliorata o peggiorata? Usa almeno cinque comparativi avanzati."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Bilanci", hint: "Valutare pro e contro di un cambiamento",
            text: ["«Da un lato…, dall'altro…», «Il lato positivo è che…, il lato negativo…», «Ha migliorato…, ma ha peggiorato…», «Tutto sommato…» (considerando tutto), «In conclusione, credo che…»."],
          },
          k.rispondi(["Com'è cambiato il tuo quartiere?", "Il turismo migliora o peggiora le città? Perché?", "Che cosa renderebbe la tua città più vivibile?", "Preferisci vivere in centro o in periferia? Perché?", "Le città diventeranno sempre più verdi? Che cosa ne pensi?", "Quale città ti ha sorpreso di più rispetto a ciò che ti aspettavi?"]),
          { kind: "speak", title: "Prima e adesso", hint: "Confronta ogni cosa tra il passato e oggi, con «sempre più», «non è più», «più… di quanto»…", items: ["i negozi di quartiere", "il traffico", "i prezzi delle case", "i parchi", "i rapporti tra vicini", "il turismo"] },
          {
            kind: "roleplay", title: "L'assemblea di quartiere", hint: "Il comune vuole trasformare una vecchia fabbrica del tuo quartiere. Tu proponi un parco, un vicino (l'IA) vuole un centro commerciale.",
            steps: ["Presenta la tua proposta e i vantaggi.", "Ascolta la sua e fai un confronto.", "Usa «più… più» per spiegare le conseguenze.", "Ammetti un vantaggio della sua idea.", "Proponi un compromesso."],
          },
          {
            kind: "roleplay", title: "Il ritorno dopo vent'anni", hint: "Torni nella tua città dopo vent'anni e un vecchio amico (l'IA) ti fa da guida. Commentate i cambiamenti.",
            steps: ["Reagisci a un cambiamento positivo.", "Reagisci a un cambiamento negativo.", "Chiedi che cosa non c'è più.", "Confronta con ciò che ti aspettavi.", "Fai un bilancio finale."],
          },
          { kind: "speak", title: "La città del futuro", hint: "Parla per due minuti di come immagini la tua città tra trent'anni: che cosa sarà sempre più presente, che cosa sparirà e che cosa bisognerebbe fare.", items: ["Tra trent'anni la mia città…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il traffico aumenta ogni anno. (sempre più)", "Pensavo che la città fosse brutta; invece è bellissima. (più bella di quanto)", "Se costruiscono di più, il verde diminuisce. (più… meno)", "Vieni prestissimo! (il prima possibile)", "È senza dubbio il quartiere più caro. (di gran lunga)", "I residenti del centro diminuiscono continuamente. (sempre meno)", "Il quartiere è diverso da com'era una volta. (non è più quello di…)", "Il nuovo parco è buonissimo per i bambini. (superlativo speciale)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Un articolo di opinione", hint: "Scrivi un articolo (230–260 parole) sul tema «Turismo nelle città d'arte: risorsa o minaccia?». Descrivi i cambiamenti, fai un bilancio e proponi soluzioni. Usa almeno otto comparativi avanzati.", rows: 18, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: comparativi", ["sempre più caro", "più bello di quanto pensassi", "il prima possibile", "di gran lunga il migliore", "più si aspetta, più costa", "sempre meno residenti"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il quartiere ha cambiato faccia.", "Non è più quello di una volta.", "Gli affitti brevi svuotano il centro.", "La riqualificazione è durata dieci anni.", "Tutto sommato, è migliorato."]),
          k.media([
            { type: "Film", title: "Caro diario (Nanni Moretti, 1993)", where: "Cerca dove vederlo su JustWatch", why: "Riguarda il primo episodio: la Roma dei quartieri negli anni Novanta. Confrontala con quella di oggi." },
            { type: "Film", title: "La grande bellezza (Paolo Sorrentino, 2013)", where: "Cerca dove vederlo su JustWatch", why: "Roma tra splendore e decadenza: come vedono la città i romani e i turisti?" },
            { type: "YouTube", title: "Bosco Verticale / Stefano Boeri", where: "YouTube", why: "Cerca un'intervista all'architetto: spiega come immagina le città del futuro." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Come appare la città nel film o nel video? Che cosa ti sembra cambiato rispetto a quello che conoscevi?", items: ["Nel film la città…"] },
        ],
      },
    ],

    exam: k.exam(54, {
      parole: ["la riqualificazione", "la gentrificazione", "il degrado", "la zona pedonale", "gli affitti brevi", "il sovraffollamento", "l'urbanistica", "vivibile", "abbattere", "il residente"],
      contrario: ["costruire → contrario", "centro → contrario", "vivibile → contrario", "aumentare → contrario", "affollato → sostantivo", "riqualificare → sostantivo"],
      verbiHint: "Scrivi una frase con il comparativo avanzato adatto alla situazione.",
      verbiCols: ["frase"],
      verbi: [["(i turisti aumentano, continuamente)", ""], ["(il museo è grande; non lo pensavo)", ""], ["(spendi poco; meno non puoi)", ""], ["(è la piazza più bella; senza dubbio)", ""]],
      completaHint: "Completa con il comparativo avanzato giusto.",
      completa: ["La città è ___ più cara: ogni anno aumentano i prezzi.", "Il nuovo quartiere è più vivace ___ pensassimo.", "Più alberi ci sono, ___ caldo fa d'estate.", "Torna ___ prima possibile.", "È ___ gran lunga la zona più costosa.", "Meno macchine ci sono, ___ si sta meglio.", "Ci sono ___ meno negozi di una volta.", "Questo ristorante è ___ (molto buono, superlativo speciale)."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Il centro si svuota continuamente. (sempre più vuoto)", "Pensavo fosse lontano, ma è vicino. (più vicino di quanto)", "Se si investe di più, i servizi migliorano. (più… più)", "Rispondi prestissimo. (il prima possibile)", "È sicuramente la città più verde d'Italia. (di gran lunga)", "Il quartiere non è come prima. (non è più)"],
      leggi: {
        text: [
          "Venezia ha ormai meno di cinquantamila abitanti nel centro storico, mentre negli anni Cinquanta erano più di centocinquantamila. Ogni anno i residenti sono sempre meno.",
          "Più case diventano affitti per turisti, più i prezzi salgono e più le famiglie vanno a vivere in terraferma. Chiudono scuole, negozi di quartiere e uffici pubblici.",
          "Il comune ha introdotto un biglietto d'ingresso per i turisti giornalieri in alcuni giorni dell'anno. Molti pensano che sia una misura utile, ma di gran lunga insufficiente.",
        ],
        questions: ["Quanti abitanti ha oggi il centro storico di Venezia? E negli anni Cinquanta?", "Che cosa succede quando le case diventano affitti per turisti?", "Che cosa chiude?", "Che cosa ha introdotto il comune? Che cosa ne pensano molti?"],
      },
      ascolta: {
        script: [
          { who: "Luca", text: "Sono tornato a Torino dopo dieci anni: non la riconoscevo." },
          { who: "Anna", text: "In meglio o in peggio?" },
          { who: "Luca", text: "In meglio, direi. È molto più verde di quanto ricordassi, ci sono piste ciclabili ovunque." },
          { who: "Anna", text: "E i prezzi?" },
          { who: "Luca", text: "Sempre più alti, come dappertutto. Ma meno di Milano, per fortuna." },
        ],
        questions: ["Dopo quanto tempo è tornato Luca a Torino?", "Com'è cambiata la città?", "Che cosa c'è di nuovo?", "Che cosa dice dei prezzi?"],
      },
      parla: ["Confronta la tua città di dieci anni fa con quella di oggi.", "Il turismo è una risorsa o un problema? Argomenta.", "Che cosa renderebbe la tua città più vivibile?", "Descrivi un quartiere che ha cambiato faccia."],
      role: ["L'IA difende la costruzione di un grande parcheggio in centro: tu sei contrario.", "Usa almeno tre comparativi avanzati.", "Proponete un compromesso."],
      dettato: ["sempre più affollato", "più di quanto credessi", "il meno possibile", "di gran lunga", "non è più lo stesso", "la riqualificazione"],
      traduci: ["Gli affitti salgono di continuo. (sempre più)", "Credevo fosse caro, invece è economico. (meno caro di quanto)", "Se piove di più, ci sono più problemi. (più… più)", "Usa la macchina pochissimo. (il meno possibile)", "È senza dubbio il parco migliore. (di gran lunga)", "Il bar non è come una volta. (non è più)"],
      scrivi: { hint: "Scrivi (150–180 parole) di un luogo della tua infanzia che è cambiato molto: com'era, com'è oggi e che cosa ne pensi.", start: "Il luogo della mia infanzia…" },
    }),
  };
})();
