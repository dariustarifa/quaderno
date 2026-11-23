// Unità 72 · Letteratura — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[72] = {
    n: 72,
    level: "B2",
    title: "Letteratura",
    goal: "Leggere e scrivere testi narrativi riconoscendo e usando il gerundio composto (avendo finito, essendo arrivato) e il participio assoluto (finita la cena, arrivati a casa).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a leggere la narrativa italiana con meno fatica e a scrivere racconti più eleganti, con le costruzioni tipiche della lingua letteraria.",
              "Grammatica: il gerundio composto (avendo letto, essendo partito), che indica un'azione anteriore; il participio assoluto (letta la lettera, partiti gli ospiti), che rende il racconto più rapido; e il participio presente usato come aggettivo o sostantivo (il passante, una storia avvincente).",
              "Conoscerai anche alcuni grandi scrittori del Novecento italiano.",
            ],
          },
          {
            kind: "intro", title: "Un racconto più rapido", hint: "Un'anticipazione",
            text: ["Le stesse azioni, raccontate in modo più compatto."],
            examples: [
              { it: "Dopo che ebbe letto la lettera, la bruciò. → Letta la lettera, la bruciò.", es: "participio assoluto" },
              { it: "Poiché aveva perso il treno, tornò a casa a piedi. → Avendo perso il treno, tornò a casa a piedi.", es: "gerundio composto" },
              { it: "Una persona che passava → un passante.", es: "participio presente" },
            ],
          },
          { kind: "speak", title: "Che cosa leggi?", hint: "Prima di cominciare: che tipo di libri leggi? Hai mai letto un romanzo italiano, anche tradotto?", items: ["Di solito leggo…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della narrativa", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il romanzo", "il racconto", "la raccolta", "il narratore", "il protagonista",
              "la trama", "l'ambientazione", "il colpo di scena", "il finale aperto", "il flashback",
              "la prima persona", "il punto di vista", "lo stile", "il ritmo", "l'incipit",
              "avvincente", "commovente", "scorrevole", "pesante", "il premio Strega",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "participio presente", title: "Participi presenti",
            hint: "Scrivi il participio presente (come aggettivo o sostantivo) con il significato indicato.",
            items: ["chi passa per la strada", "una storia che avvince", "un film che commuove", "chi abita in una città", "un'acqua che corre", "chi canta", "un libro che interessa", "chi parla una lingua"],
          },
          { kind: "speak", title: "Descrivi un libro", hint: "Pensa a un libro che hai letto e descrivilo usando ogni parola.", items: ["la trama", "il protagonista", "l'ambientazione", "il narratore", "il colpo di scena", "il finale", "lo stile", "avvincente / pesante"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Leggere ad alta voce", hint: "La lettura espressiva",
            text: [
              "Leggere narrativa ad alta voce è uno degli esercizi migliori per la pronuncia e il ritmo.",
              "Le costruzioni con il gerundio e il participio assoluto si leggono con una pausa dopo: «Finita la cena, | uscirono in giardino».",
              "I dialoghi si leggono cambiando leggermente voce; le descrizioni con un ritmo più lento.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con la pausa dopo la costruzione implicita.", items: ["Finita la cena, | uscirono in giardino.", "Avendo perso il treno, | tornò a piedi.", "Arrivati a casa, | trovarono la porta aperta.", "Essendo già tardi, | decise di restare.", "Letta la lettera, | la mise in un cassetto."] },
          { kind: "shadow", title: "Un incipit", hint: "Leggi questo inizio di racconto con espressione.", items: ["Era una sera di novembre, e la nebbia saliva dal fiume.", "Chiusa la bottega, il vecchio Arturo si incamminò verso casa.", "Non aveva fretta: nessuno lo aspettava da anni."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il gerundio composto", hint: "Forma e uso",
            text: [
              "Forma: avendo / essendo + participio passato: avendo letto, avendo capito, essendo arrivato/a/i/e, essendosi alzato.",
              "Uso: indica un'azione anteriore a quella principale, spesso con valore causale: «Avendo studiato molto, superò l'esame» (= poiché aveva studiato).",
              "Con «essere», il participio concorda con il soggetto: «Essendo arrivate tardi, le ragazze non trovarono posto».",
              "Il soggetto del gerundio è normalmente lo stesso della frase principale.",
            ],
            table: { head: ["forma esplicita", "gerundio composto"], rows: [["poiché aveva letto", "avendo letto"], ["dopo che era partito", "essendo partito"], ["siccome si era alzata", "essendosi alzata"], ["visto che avevano finito", "avendo finito"]] },
          },
          k.table("Gerundio composto", [
            ["Poiché aveva perso le chiavi, dormì da un'amica.", "Avendo perso le chiavi, dormì da un'amica."],
            ["Dato che era nata a Napoli, conosceva bene la città.", ""],
            ["Siccome avevano già mangiato, rifiutarono l'invito.", ""],
            ["Poiché si era svegliato tardi, perse l'autobus.", ""],
            ["Visto che aveva letto il libro, non volle vedere il film.", ""],
            ["Dopo che erano arrivate, le ragazze si riposarono.", ""],
          ], "Riscrivi ogni frase con il gerundio composto.", ["gerundio composto"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con il gerundio composto del verbo tra parentesi.",
            items: [
              "___ (finire) il romanzo, lo prestò alla sorella.", "___ (nascere) in una famiglia povera, conosceva la fatica.", "___ (vivere) molti anni all'estero, parlava quattro lingue.", "___ (addormentarsi) sul divano, non sentì il telefono.", "___ (ricevere) la notizia, partì subito.", "___ (partire) presto, arrivarono prima degli altri.", "___ (capire) l'errore, chiese scusa.", "___ (laurearsi) in medicina, decise di fare lo scrittore.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il participio assoluto", hint: "Narrare con rapidità",
            text: [
              "Il participio passato, da solo, può sostituire una frase temporale o causale: «Finita la cena, uscirono» (= dopo che la cena fu finita).",
              "Il participio concorda con il suo soggetto (o con l'oggetto, per i verbi transitivi): «Finiti i compiti», «Partita la nave», «Lette le lettere».",
              "Il soggetto del participio può essere diverso da quello della frase principale: «Partiti gli ospiti, la madre si sedette».",
              "I pronomi si attaccano al participio: «Salutatolo, se ne andò», «Vistala arrivare, le corse incontro».",
            ],
          },
          k.negativa(["Dopo che ebbe finito il lavoro, tornò a casa.", "Quando gli ospiti furono partiti, la casa tornò silenziosa.", "Dopo che aveva letto la lettera, scoppiò a piangere.", "Una volta che fu arrivata la primavera, i contadini tornarono nei campi.", "Dopo che l'ebbe salutato, chiuse la porta.", "Quando fu calato il sole, accesero il fuoco."], "Riscrivi ogni frase con il participio assoluto.", "participio assoluto"),
          {
            kind: "intro", title: "Gerundio o participio?", hint: "Che differenza c'è",
            text: ["Il participio assoluto è più rapido e si usa soprattutto per le azioni concluse in sequenza (finita la cena, uscirono). Il gerundio composto sottolinea spesso la causa (avendo finito, poteva uscire). Nella lingua parlata entrambi si sostituiscono con «dopo + infinito passato» o con una frase esplicita."],
          },
          {
            kind: "fill", title: "Completa", hint: "Completa con il participio assoluto (concordato) del verbo tra parentesi.",
            items: ["___ (chiudere) la porta, si sedette alla scrivania.", "___ (finire) le vacanze, i bambini tornarono a scuola.", "___ (arrivare) a Roma, la scrittrice cercò un albergo.", "___ (vendere) la casa, partirono per l'America.", "___ (scrivere) l'ultima pagina, spense la lampada.", "___ (partire) il treno, la stazione restò deserta."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il racconto", "Un attore legge l'inizio di un racconto breve.", [
            { who: "Narratore", text: "Chiusa la bottega, il vecchio Arturo si incamminò verso casa. Era una sera di novembre, e la nebbia saliva dal fiume." },
            { who: "Narratore", text: "Avendo lavorato tutto il giorno, sentiva le gambe pesanti; ma non aveva fretta: nessuno lo aspettava, da quando sua moglie se n'era andata." },
            { who: "Narratore", text: "Arrivato al ponte, si fermò. Sul parapetto c'era una ragazza, ferma, con lo sguardo rivolto all'acqua." },
            { who: "Narratore", text: "«Signorina», disse Arturo, avvicinandosi piano, «la nebbia è traditrice, stasera. Posso accompagnarla da qualche parte?»" },
            { who: "Narratore", text: "La ragazza si voltò. Aveva gli occhi di sua moglie." },
          ], ["Chi è il protagonista? Che cosa fa all'inizio?", "Com'è l'ambientazione?", "Perché Arturo non ha fretta?", "Chi incontra sul ponte?", "Qual è il colpo di scena finale? Come lo interpreti?", "Trova un gerundio composto e due participi assoluti."]),
          k.listen("Il club del libro", "Tre amici discutono di un romanzo letto insieme.", [
            { who: "Marta", text: "Allora, vi è piaciuto? Io, finito il libro, sono rimasta sveglia a pensarci per ore." },
            { who: "Giorgio", text: "A me è sembrato pesante all'inizio. Superate le prime cinquanta pagine, però, non riuscivo più a smettere." },
            { who: "Silvia", text: "Il finale aperto non mi ha convinto. Avendo seguito la protagonista per quattrocento pagine, volevo sapere che cosa le succedeva!" },
            { who: "Marta", text: "Ma è proprio questo il bello: ognuno immagina il suo finale." },
          ], ["Che effetto ha avuto il libro su Marta?", "Che cosa pensa Giorgio dell'inizio?", "Perché Silvia non è convinta del finale?", "Come risponde Marta?", "Trova le costruzioni implicite e trasformale in frasi esplicite."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Le parole di una famiglia", [
            "Natalia Ginzburg nacque a Palermo nel 1916, ma crebbe a Torino, in una famiglia della borghesia intellettuale. Suo padre, Giuseppe Levi, era un famoso professore di anatomia: tra i suoi allievi ci furono tre futuri premi Nobel, tra cui Rita Levi-Montalcini.",
            "Avendo vissuto gli anni del fascismo, le leggi razziali e la guerra, Natalia conobbe presto il dolore: il marito, Leone Ginzburg, antifascista, morì in carcere a Roma nel 1944.",
            "Nel 1963 pubblicò «Lessico famigliare», il suo libro più famoso, con il quale vinse il premio Strega. Non è un romanzo nel senso tradizionale: è il ritratto di una famiglia attraverso le sue parole, le frasi ripetute, i modi di dire inventati che solo i suoi membri potevano capire.",
            "Riletta oggi, l'opera colpisce per lo stile: frasi brevi, semplici, quasi parlate, e un tono ironico anche nei momenti più tragici. Scomparsi i protagonisti, sopravvivono le loro parole, che diventano la vera memoria della famiglia.",
            "Morta a Roma nel 1991, Ginzburg è considerata una delle voci più importanti della letteratura italiana del Novecento. Il suo stile limpido la rende anche una delle autrici più consigliate a chi studia l'italiano.",
          ], ["Dove nacque e dove crebbe Natalia Ginzburg?", "Chi era suo padre? Che legame c'è con un'unità precedente?", "Quali eventi drammatici visse?", "Di che cosa parla «Lessico famigliare»? Perché non è un romanzo tradizionale?", "Com'è il suo stile?", "Trova nel testo un gerundio composto e tre participi assoluti."]),
          k.spagna("Ogni famiglia ha il suo «lessico»: parole e frasi che usano solo i suoi membri. Racconta il lessico della tua famiglia, usando almeno tre gerundi composti o participi assoluti."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di un libro", hint: "Formule utili",
            text: ["«Il libro racconta la storia di…», «È ambientato a… negli anni…», «Il narratore è…», «Mi ha colpito soprattutto…», «Lo consiglierei a chi…», «L'ho trovato scorrevole / pesante / avvincente», «Senza svelare il finale, posso dire che…»."],
          },
          k.rispondi(["Qual è l'ultimo libro che hai finito? Ti è piaciuto?", "Preferisci romanzi o racconti brevi? Perché?", "Hai mai lasciato un libro a metà? Perché?", "Che cosa pensi dei finali aperti?", "Quale scrittore italiano vorresti leggere in lingua originale?", "La tua famiglia ha un «lessico» suo?"]),
          { kind: "speak", title: "Racconta un libro", hint: "Presenta per due minuti un libro che ami, senza svelare il finale: trama, ambientazione, personaggi, stile, a chi lo consigli.", items: ["Il libro che voglio presentare…"] },
          {
            kind: "roleplay", title: "Il club del libro", hint: "Tu e l'IA avete letto lo stesso romanzo (sceglietelo voi). Avete opinioni diverse.",
            steps: ["Presenta la tua opinione generale.", "Parla del protagonista.", "Discuti del finale.", "Ammetti un punto valido nella sua opinione.", "Consigliate insieme un altro libro."],
          },
          {
            kind: "roleplay", title: "Scrivere insieme", hint: "Tu e l'IA scrivete un racconto a turno, una frase ciascuno, usando gerundi composti e participi assoluti.",
            steps: ["Scrivi l'incipit con un participio assoluto.", "Continua la frase dell'IA con un gerundio composto.", "Introduci un colpo di scena.", "Scrivi un dialogo breve.", "Scegliete un finale aperto o chiuso."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti una storia vera della tua famiglia, come se fosse un racconto letterario, con almeno tre costruzioni implicite.", items: ["Finita la guerra, mio nonno…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Dopo che ebbe finito di scrivere, spense la luce. (participio assoluto)", "Poiché aveva vissuto a Parigi, amava la cucina francese. (gerundio composto)", "Quando la festa fu finita, tutti andarono via. (participio assoluto)", "Siccome era arrivata tardi, non trovò posto. (gerundio composto)", "Dopo che l'ebbe salutata, uscì. (participio assoluto con pronome)", "Le persone che passavano si fermavano a guardare. (participio presente)", "Avendo perso il lavoro, cambiò città. (frase esplicita)", "Letta la lettera, sorrise. (frase esplicita)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "Un racconto breve", hint: "Scrivi un racconto breve (280–320 parole) con un incipit forte, un colpo di scena e un finale (aperto o chiuso). Usa il passato remoto, almeno quattro gerundi composti, quattro participi assoluti e due participi presenti.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["avendo finito", "essendo arrivata", "finita la cena", "partiti gli ospiti", "salutatolo", "un passante"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Chiusa la bottega, si incamminò verso casa.", "Avendo lavorato tutto il giorno, era stanco.", "Arrivati al ponte, si fermarono.", "È una storia avvincente.", "Senza svelare il finale, posso dire che è commovente."]),
          k.media([
            { type: "Libro", title: "Lessico famigliare (Natalia Ginzburg, 1963)", where: "Libreria o biblioteca", why: "Il libro del testo di lettura: stile limpido, frasi brevi, perfetto per un lettore di livello B2." },
            { type: "Libro", title: "Marcovaldo (Italo Calvino, 1963)", where: "Libreria o biblioteca", why: "Racconti brevi su un operaio che cerca la natura nella città industriale: ironici e poetici." },
            { type: "Libro", title: "Il sistema periodico (Primo Levi, 1975)", where: "Libreria o biblioteca", why: "Ventuno racconti, ognuno legato a un elemento chimico: memoria, scienza e letteratura insieme." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Leggi un racconto di Marcovaldo o un capitolo di uno dei libri e riassumilo usando costruzioni implicite.", items: ["Finita la giornata di lavoro, Marcovaldo…"] },
        ],
      },
    ],

    exam: k.exam(72, {
      parole: ["il romanzo", "la raccolta", "il narratore", "la trama", "l'ambientazione", "il colpo di scena", "il finale aperto", "l'incipit", "avvincente", "scorrevole"],
      contrario: ["scorrevole → contrario", "romanzo → testo breve", "prima persona → contrario", "finale aperto → contrario", "avvincente → contrario", "chi passa → participio presente"],
      verbiHint: "Scrivi il gerundio composto.",
      verbiCols: ["gerundio composto"],
      verbi: [["leggere", ""], ["partire (lei)", ""], ["capire", ""], ["arrivare (loro)", ""], ["alzarsi (lui)", ""], ["scrivere", ""]],
      completaHint: "Completa con il gerundio composto o il participio assoluto.",
      completa: ["___ (finire) la cena, uscirono a passeggiare.", "___ (perdere) il treno, prese un taxi.", "___ (arrivare) a casa, le ragazze accesero la radio.", "___ (nascere) in montagna, amava la neve.", "___ (partire) gli ospiti, la casa era vuota.", "___ (leggere) la lettera, la strappò.", "___ (svegliarsi) tardi, saltò la colazione.", "___ (vendere) la casa, si trasferirono al mare."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Dopo che ebbe chiuso la porta, si sedette. (participio assoluto)", "Poiché aveva studiato, era tranquillo. (gerundio composto)", "Quando i bambini furono partiti, la nonna pianse. (participio assoluto)", "Siccome si era ammalata, non venne. (gerundio composto)", "Finito il libro, lo regalò a un amico. (frase esplicita)", "Le persone che abitano qui sono gentili. (participio presente)"],
      leggi: {
        text: [
          "Italo Calvino nacque a Cuba nel 1923, ma crebbe a Sanremo, in Liguria. Avendo partecipato alla Resistenza, raccontò quell'esperienza nel suo primo romanzo, «Il sentiero dei nidi di ragno», pubblicato nel 1947.",
          "Conclusa la fase realista, Calvino si dedicò a storie fantastiche: un visconte diviso in due metà, un barone che vive sugli alberi, un cavaliere che non esiste.",
          "Morto nel 1985, è oggi uno degli scrittori italiani più tradotti al mondo. Le sue opere, lette da generazioni di studenti, uniscono leggerezza e profondità.",
        ],
        questions: ["Dove nacque e dove crebbe Calvino?", "Di che cosa parla il suo primo romanzo? Perché?", "A che tipo di storie si dedicò dopo?", "Perché, secondo il testo, è ancora così letto?"],
      },
      ascolta: {
        script: [
          { who: "Libraia", text: "Cerca qualcosa in particolare?" },
          { who: "Cliente", text: "Un romanzo italiano, non troppo difficile. Avendo studiato italiano per due anni, vorrei provare a leggerne uno in originale." },
          { who: "Libraia", text: "Allora le consiglio Natalia Ginzburg: frasi brevi, stile limpido. Letto questo, potrà passare a Calvino." },
          { who: "Cliente", text: "Perfetto, lo prendo!" },
        ],
        questions: ["Che cosa cerca il cliente?", "Perché vuole leggere in originale?", "Che cosa gli consiglia la libraia? Perché?", "Che cosa potrà leggere dopo?"],
      },
      parla: ["Presenta un libro che ami senza svelare il finale.", "Racconta una storia di famiglia con costruzioni implicite.", "Finale aperto o chiuso? Perché?", "Quale scrittore italiano vorresti leggere?"],
      role: ["L'IA è un libraio che ti consiglia un libro.", "Descrivi i tuoi gusti e chiedi informazioni sulla trama.", "Alla fine riassumi la conversazione con due costruzioni implicite."],
      dettato: ["avendo finito", "finita la cena", "essendo arrivata", "partiti gli ospiti", "una storia avvincente", "il colpo di scena"],
      traduci: ["Dopo che ebbe finito, uscì. (participio assoluto)", "Poiché aveva letto molto, sapeva tutto. (gerundio composto)", "Quando lo spettacolo fu finito, applaudirono. (participio assoluto)", "Siccome era nato a Roma, tifava per la Roma. (gerundio composto)", "Una persona che passava mi aiutò. (participio presente)", "Arrivati alla stazione, presero un caffè. (frase esplicita)"],
      scrivi: { hint: "Scrivi la recensione (180–220 parole) di un libro o di un racconto che hai letto: trama senza finale, personaggi, stile, giudizio. Usa almeno due gerundi composti e due participi assoluti.", start: "Finito di leggere…" },
    }),
  };
})();
