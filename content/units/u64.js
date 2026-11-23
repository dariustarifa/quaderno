// Unità 64 · Economia — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[64] = {
    n: 64,
    level: "B2",
    title: "Economia",
    goal: "Capire e commentare notizie economiche e usare la nominalizzazione (aumentare → l'aumento) per scrivere in modo sintetico, come nei titoli e nei rapporti.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a leggere e commentare notizie di economia: prezzi, lavoro, imprese, consumi, il «Made in Italy».",
              "Grammatica: la nominalizzazione, cioè trasformare un verbo o un aggettivo in un sostantivo. È lo stile dei giornali, dei rapporti e dei titoli: «I prezzi sono aumentati» → «L'aumento dei prezzi».",
              "Imparerai anche a descrivere grafici e tendenze: crescere, calare, stabilizzarsi, toccare il massimo.",
            ],
          },
          {
            kind: "intro", title: "Verbo o sostantivo?", hint: "Un'anticipazione",
            text: ["La stessa informazione può essere detta con un verbo (più parlato) o con un sostantivo (più scritto e sintetico)."],
            examples: [
              { it: "I consumi sono calati a marzo. → Calo dei consumi a marzo.", es: "titolo di giornale" },
              { it: "Il governo ha approvato la legge. → L'approvazione della legge da parte del governo.", es: "stile da rapporto" },
              { it: "È importante che il lavoro sia stabile. → L'importanza della stabilità del lavoro.", es: "aggettivo → sostantivo" },
            ],
          },
          { kind: "speak", title: "L'economia e te", hint: "Prima di cominciare: com'è cambiato il costo della vita nel tuo paese negli ultimi anni? Che cosa è aumentato di più?", items: ["Negli ultimi anni i prezzi…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico dell'economia", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il PIL", "l'inflazione", "il potere d'acquisto", "la disoccupazione", "il tasso di interesse",
              "il mutuo", "il bilancio", "il fatturato", "l'utile", "la perdita",
              "l'esportazione", "l'importazione", "l'impresa", "la piccola e media impresa", "il distretto industriale",
              "la recessione", "la ripresa", "il debito pubblico", "le tasse", "l'evasione fiscale",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sostantivo", title: "Dal verbo al sostantivo",
            hint: "Scrivi il sostantivo corrispondente con l'articolo.",
            items: ["aumentare", "diminuire", "crescere", "calare", "ridurre", "esportare", "investire", "licenziare"],
          },
          { kind: "speak", title: "Descrivi la tendenza", hint: "Fai una frase con ogni verbo, su un dato economico del tuo paese. Esempio: calare → La disoccupazione è calata al sette per cento.", items: ["crescere", "calare", "raddoppiare", "dimezzarsi", "stabilizzarsi", "toccare il massimo", "crollare", "riprendersi"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Numeri, percentuali, sigle", hint: "Leggere i dati",
            text: [
              "Percentuali: «il 3,5%» si legge «il tre virgola cinque per cento». Decimali con la virgola, migliaia con il punto: 1.500 = millecinquecento.",
              "Grandi numeri: un milione, due milioni, un miliardo (mille milioni), «2,4 miliardi» = due virgola quattro miliardi.",
              "Sigle: il PIL (pil), l'IVA (iva), l'Istat (ìstat), la BCE (bi-ci-e).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Leggi i numeri con chiarezza.", items: ["L'inflazione è scesa all'1,8 per cento.", "Il PIL è cresciuto dello 0,7 per cento.", "Le esportazioni valgono 620 miliardi di euro.", "La disoccupazione giovanile è al 20 per cento.", "Il fatturato è raddoppiato in tre anni."] },
          { kind: "shadow", title: "Coppie", hint: "Ripeti.", items: ["un milione / un miliardo", "lo 0,5 / il 5 per cento", "1.200 / 1,2", "il doppio / la metà"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La nominalizzazione", hint: "Suffissi più comuni",
            text: [
              "-zione / -sione: approvare → l'approvazione, ridurre → la riduzione, diminuire → la diminuzione, decidere → la decisione.",
              "-mento: aumentare → l'aumento, pagare → il pagamento, licenziare → il licenziamento, investire → l'investimento.",
              "-ita / -enza / -anza: crescere → la crescita, perdere → la perdita, dipendere → la dipendenza.",
              "Forma breve (senza suffisso): calare → il calo, costare → il costo, crollare → il crollo, rinviare → il rinvio.",
              "Da aggettivo: stabile → la stabilità, povero → la povertà, debole → la debolezza, ricco → la ricchezza.",
            ],
            table: { head: ["verbo / aggettivo", "sostantivo"], rows: [["aumentare", "l'aumento"], ["ridurre", "la riduzione"], ["crescere", "la crescita"], ["calare", "il calo"], ["stabile", "la stabilità"]] },
          },
          k.table("Nominalizza", [
            ["pagare", "il pagamento"],
            ["chiudere", ""],
            ["fallire", ""],
            ["assumere", ""],
            ["vendere", ""],
            ["debole", ""],
            ["povero", ""],
          ], "Scrivi il sostantivo con l'articolo.", ["sostantivo"]),
          {
            kind: "fill", title: "Completa con il sostantivo", hint: "Trasforma il verbo o l'aggettivo tra parentesi in un sostantivo.",
            items: [
              "Preoccupa ___ (aumentare) dei prezzi dell'energia.", "Il governo ha annunciato ___ (ridurre) delle tasse sul lavoro.", "___ (crescere) dell'economia è stata più debole del previsto.", "Gli economisti prevedono ___ (calare) dei consumi.", "___ (chiudere) della fabbrica ha lasciato senza lavoro trecento persone.", "Le famiglie chiedono ___ (stabile) dei prezzi.", "___ (investire) in ricerca è fondamentale.", "___ (povero) è aumentata nel Sud.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Dalla frase al titolo", hint: "Lo stile nominale",
            text: [
              "I titoli dei giornali eliminano spesso il verbo: «Inflazione in calo», «Boom dell'export», «Tasse: stop all'aumento», «Fiat, accordo con i sindacati».",
              "Nella nominalizzazione il soggetto e l'oggetto diventano complementi: «Il governo ha approvato la legge» → l'approvazione della legge da parte del governo.",
              "Attenzione: troppe nominalizzazioni rendono un testo pesante e poco chiaro. Usale nei titoli e nei rapporti, non nella conversazione.",
            ],
          },
          k.negativa(["I consumi sono calati a marzo.", "Le esportazioni di vino sono aumentate del 10%.", "Il governo ha approvato il bilancio.", "La fabbrica di Brescia chiuderà a giugno.", "I sindacati e l'azienda hanno raggiunto un accordo.", "La disoccupazione giovanile cresce."], "Trasforma ogni frase in un titolo di giornale in stile nominale.", "titolo"),
          {
            kind: "intro", title: "Denominalizzare", hint: "Il percorso inverso",
            text: ["Per spiegare un testo tecnico a qualcuno, bisogna fare il contrario: «La riduzione della pressione fiscale sulle imprese» → Il governo vuole che le imprese paghino meno tasse."],
          },
          {
            kind: "fill", title: "Spiega con un verbo", hint: "Riscrivi la parte tra virgolette con un verbo, in modo semplice. Scrivi solo il verbo coniugato.",
            items: ["«Il calo delle vendite» → Le vendite ___ .", "«L'aumento della disoccupazione» → La disoccupazione ___ .", "«La crescita del turismo» → Il turismo ___ .", "«Il crollo della borsa» → La borsa ___ .", "«Il rinvio della riforma» → La riforma ___ (passivo, passato prossimo).", "«La stabilizzazione dei prezzi» → I prezzi ___ ."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il notiziario economico", "La rubrica economica di un giornale radio.", [
            { who: "Speaker", text: "Buongiorno. Apriamo con i dati Istat sull'inflazione: a ottobre i prezzi sono cresciuti dell'1,5 per cento rispetto allo scorso anno, in calo rispetto ai mesi precedenti." },
            { who: "Speaker", text: "Restano però alti i prezzi dei generi alimentari, che pesano soprattutto sulle famiglie a basso reddito." },
            { who: "Speaker", text: "Buone notizie per l'export: le vendite di prodotti italiani all'estero hanno toccato un nuovo massimo, trainate da moda, meccanica e agroalimentare." },
            { who: "Speaker", text: "Sul fronte del lavoro, la disoccupazione è stabile, ma preoccupa il numero di giovani che non studiano e non lavorano." },
          ], ["Di quanto sono cresciuti i prezzi a ottobre?", "Che cosa pesa soprattutto sulle famiglie a basso reddito?", "Quali settori trainano le esportazioni?", "Qual è la situazione del lavoro?", "Trasforma ogni notizia in un titolo in stile nominale."]),
          k.listen("Il mutuo", "Una giovane coppia parla con un consulente della banca.", [
            { who: "Consulente", text: "Allora, per un appartamento di duecentomila euro, la banca può finanziare fino all'ottanta per cento." },
            { who: "Giulia", text: "Quindi dovremmo avere quarantamila euro da parte?" },
            { who: "Consulente", text: "Esatto, più le spese del notaio. Con un tasso fisso al tre per cento, la rata sarebbe di circa novecento euro al mese per venticinque anni." },
            { who: "Stefano", text: "E con il tasso variabile?" },
            { who: "Consulente", text: "Oggi la rata sarebbe un po' più bassa, ma se i tassi aumentassero, aumenterebbe anche la rata. È una questione di quanto rischio volete correre." },
          ], ["Quanto costa l'appartamento?", "Quanto finanzia la banca? Quanto devono avere da parte?", "Quanto sarebbe la rata con il tasso fisso?", "Che differenza c'è tra tasso fisso e variabile?", "Che cosa consiglieresti alla coppia? Perché?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I distretti del Made in Italy", [
            "Quando si parla di «Made in Italy» si pensa subito alla moda, al cibo e al design. Ma dietro a questi marchi c'è una struttura economica particolare: quella dei distretti industriali.",
            "Un distretto è una zona, spesso piccola, in cui si concentrano centinaia di imprese specializzate nello stesso settore. A Sassuolo, in Emilia, si producono piastrelle di ceramica esportate in tutto il mondo; a Prato, in Toscana, i tessuti; nel Bellunese, gli occhiali; in Brianza, i mobili.",
            "La forza dei distretti sta nella collaborazione e nella competizione allo stesso tempo: le imprese si scambiano conoscenze, lavoratori e fornitori, ma si sfidano continuamente sulla qualità e sull'innovazione.",
            "Questo modello ha contribuito a fare dell'Italia uno dei principali paesi manifatturieri d'Europa. Tuttavia, la concorrenza dei paesi con costi più bassi, la difficoltà nel ricambio generazionale delle imprese familiari e la lentezza della burocrazia ne mettono a rischio il futuro.",
            "Per molti economisti, la sopravvivenza dei distretti dipenderà dalla capacità di investire in tecnologia e formazione senza perdere ciò che li rende unici: l'artigianalità e la qualità.",
          ], ["Che cos'è un distretto industriale?", "Fai tre esempi di distretti e di che cosa producono.", "Dove sta la forza dei distretti?", "Quali rischi minacciano il loro futuro?", "Da che cosa dipenderà la loro sopravvivenza?", "Trova nel testo cinque nominalizzazioni e scrivi il verbo o l'aggettivo da cui derivano."]),
          k.spagna("Quali sono i prodotti più esportati dal tuo paese? Esistono zone specializzate come i distretti italiani? Scrivi un breve rapporto in stile nominale."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Descrivere un grafico", hint: "Formule utili",
            text: ["«Il grafico mostra…», «Nel periodo considerato…», «Si registra un aumento / un calo di…», «I valori toccano il massimo nel…», «Dopo una fase di crescita, si osserva una stabilizzazione», «Rispetto all'anno precedente…», «In sintesi, la tendenza è…»."],
          },
          k.rispondi(["Che cosa costa di più oggi rispetto a cinque anni fa?", "Preferiresti lavorare per una grande azienda o per una piccola impresa?", "Che cosa compreresti «Made in Italy»?", "Pensi che l'evasione fiscale sia un problema nel tuo paese?", "Hai mai fatto un mutuo o un prestito? Come è andata?", "Come immagini l'economia del tuo paese fra dieci anni?"]),
          { kind: "speak", title: "Il grafico immaginario", hint: "Immagina un grafico con le vendite di un'azienda negli ultimi cinque anni (crescita, crollo, ripresa) e descrivilo per un minuto con le formule della pagina.", items: ["Il grafico mostra…"] },
          {
            kind: "roleplay", title: "In banca", hint: "Chiedi un prestito per aprire un piccolo negozio. L'IA è il consulente della banca.",
            steps: ["Presenta il tuo progetto e la cifra che ti serve.", "Rispondi alle domande sul bilancio previsto.", "Chiedi informazioni su tassi e rate.", "Negozia le condizioni.", "Riassumi l'accordo in stile nominale."],
          },
          {
            kind: "roleplay", title: "La riunione di bilancio", hint: "Sei il responsabile commerciale. L'IA è il direttore generale, preoccupato per il calo delle vendite.",
            steps: ["Presenta i dati del trimestre.", "Spiega le cause del calo.", "Proponi due soluzioni.", "Rispondi alle obiezioni del direttore.", "Concludi con le prossime azioni."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di un prodotto italiano che conosci (un'azienda, un marchio, un distretto): storia, successo, problemi attuali.", items: ["Il prodotto che conosco meglio…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Le vendite online sono aumentate del 20%. (titolo nominale)", "Il comune ha ridotto le tasse sui rifiuti. (titolo nominale)", "La fabbrica ha licenziato cento operai. (titolo nominale)", "I prezzi del gas sono crollati. (titolo nominale)", "«Calo della produzione industriale» (spiega con una frase con il verbo)", "«Aumento della povertà nel Sud» (spiega con una frase con il verbo)", "È importante che i prezzi siano stabili. (l'importanza della…)", "Il governo ha deciso di rinviare la riforma. (la decisione di…)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Un breve rapporto", hint: "Scrivi un rapporto (280–320 parole) sull'andamento economico di un settore che conosci (turismo, ristorazione, tecnologia…) negli ultimi tre anni: dati, cause, conseguenze, previsioni. Usa almeno dieci nominalizzazioni, ma mantieni il testo leggibile.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: termini", ["il potere d'acquisto", "il tasso di interesse", "la piccola e media impresa", "il calo dei consumi", "la crescita del PIL", "l'evasione fiscale"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["L'inflazione è scesa all'1,5 per cento.", "Si registra un aumento delle esportazioni.", "La chiusura della fabbrica preoccupa i sindacati.", "Il grafico mostra una crescita costante.", "La ripresa è più lenta del previsto."]),
          k.media([
            { type: "Film", title: "Il capitale umano (Paolo Virzì, 2014)", where: "Cerca dove vederlo su JustWatch", why: "Finanza, ambizione e famiglie in Brianza: il denaro come motore di tutte le scelte." },
            { type: "Sito", title: "Il Sole 24 Ore", where: "ilsole24ore.com", why: "Il principale quotidiano economico italiano: leggi tre titoli al giorno e trasformali in frasi con il verbo." },
            { type: "TV", title: "Report (Rai 3)", where: "raiplay.it", why: "Inchieste giornalistiche su economia, imprese e sprechi: lessico economico in contesto." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi in un minuto un'inchiesta o un articolo economico che hai letto o visto: dati, cause, conseguenze.", items: ["L'articolo parlava di…"] },
        ],
      },
    ],

    exam: k.exam(64, {
      parole: ["il PIL", "l'inflazione", "il potere d'acquisto", "il fatturato", "il mutuo", "la recessione", "la ripresa", "il distretto industriale", "l'evasione fiscale", "il debito pubblico"],
      contrario: ["esportazione → contrario", "utile → contrario", "recessione → contrario", "aumento → contrario", "assumere → contrario", "crescita → contrario"],
      verbiHint: "Scrivi il sostantivo con l'articolo.",
      verbiCols: ["sostantivo"],
      verbi: [["approvare", ""], ["licenziare", ""], ["perdere", ""], ["crollare", ""], ["stabile", ""], ["ricco", ""]],
      completaHint: "Completa con il sostantivo derivato dalla parola tra parentesi.",
      completa: ["Preoccupa ___ (aumentare) delle bollette.", "È stata annunciata ___ (ridurre) delle tasse.", "___ (crescere) del turismo ha aiutato il Sud.", "Si prevede ___ (calare) delle vendite.", "___ (chiudere) dello stabilimento è stata rinviata.", "Le imprese chiedono ___ (semplice) della burocrazia.", "___ (investire) in tecnologia è fondamentale.", "___ (debole) dell'euro favorisce le esportazioni."],
      trasformaHint: "Trasforma ogni frase in un titolo nominale, o il titolo in una frase con il verbo.",
      trasforma: ["Le esportazioni di vino sono cresciute. (titolo)", "La disoccupazione è calata al 6%. (titolo)", "Il governo ha approvato la riforma delle pensioni. (titolo)", "Crollo delle vendite di auto a gennaio. (frase con il verbo)", "Rinvio dello sciopero dei trasporti. (frase con il verbo)", "Boom delle prenotazioni per l'estate. (frase con il verbo)"],
      leggi: {
        text: [
          "Secondo un recente rapporto, il potere d'acquisto delle famiglie italiane è diminuito negli ultimi anni: l'aumento dei prezzi è stato più veloce della crescita degli stipendi.",
          "Il calo dei consumi riguarda soprattutto l'abbigliamento e i viaggi, mentre la spesa alimentare è rimasta stabile. Cresce invece la quota di famiglie che rinunciano alle cure mediche private.",
          "Gli autori del rapporto chiedono una riduzione delle tasse sul lavoro e un rafforzamento dei servizi pubblici.",
        ],
        questions: ["Che cosa è successo al potere d'acquisto delle famiglie? Perché?", "Quali consumi sono calati di più?", "Quale tendenza preoccupante si osserva nella sanità?", "Che cosa chiedono gli autori del rapporto?"],
      },
      ascolta: {
        script: [
          { who: "Direttore", text: "I dati del trimestre non sono buoni: il fatturato è calato del dodici per cento." },
          { who: "Responsabile", text: "Sì, ma il calo riguarda solo il mercato interno. Le esportazioni sono cresciute." },
          { who: "Direttore", text: "Quindi che cosa propone?" },
          { who: "Responsabile", text: "Un rafforzamento della rete commerciale all'estero e una riduzione dei costi di magazzino." },
        ],
        questions: ["Di quanto è calato il fatturato?", "Quale mercato va male e quale va bene?", "Che cosa propone il responsabile?", "Riassumi la riunione in un titolo nominale."],
      },
      parla: ["Descrivi un grafico immaginario sulle vendite di un'azienda.", "Che cosa è aumentato e che cosa è diminuito nel tuo paese negli ultimi anni?", "Spiega che cos'è un distretto industriale.", "Tasso fisso o variabile? Argomenta."],
      role: ["L'IA è un giornalista economico che ti intervista sulla tua azienda.", "Presenta i dati con almeno quattro nominalizzazioni.", "Spiega le prospettive per il prossimo anno."],
      dettato: ["il calo dei consumi", "la crescita del PIL", "il potere d'acquisto", "si registra un aumento", "la riduzione delle tasse", "il debito pubblico"],
      traduci: ["I prezzi sono aumentati. (titolo)", "La banca ha alzato i tassi. (titolo)", "L'azienda ha assunto cento giovani. (titolo)", "Calo della natalità. (frase con il verbo)", "Fallimento di una grande catena di negozi. (frase con il verbo)", "È necessario che il mercato sia trasparente. (la necessità di…)"],
      scrivi: { hint: "Scrivi un breve articolo economico (180–220 parole) su un prodotto o un'azienda del tuo paese: storia, dati recenti, problemi e prospettive. Includi un titolo nominale e almeno sei nominalizzazioni.", start: "Titolo: …" },
    }),
  };
})();
