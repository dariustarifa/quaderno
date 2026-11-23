// Unità 66 · Arte — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[66] = {
    n: 66,
    level: "B2",
    title: "Arte",
    goal: "Raccontare la vita degli artisti e descrivere opere d'arte usando attivamente il passato remoto, regolare e irregolare.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Nell'unità 38 hai imparato a riconoscere il passato remoto. Ora impari a usarlo: per scrivere una biografia, raccontare la storia di un'opera, presentare un artista come in una guida o in un museo.",
              "Grammatica: il passato remoto attivo, con le forme regolari e i principali irregolari (fece, disse, nacque, dipinse, visse, morì…).",
              "Lessico: descrivere un quadro (in primo piano, sullo sfondo, la luce, la composizione) e parlare di stili e movimenti.",
            ],
          },
          {
            kind: "intro", title: "La biografia", hint: "Un'anticipazione",
            text: ["Il passato remoto è il tempo delle biografie e della storia dell'arte: crea distanza e dà solennità al racconto."],
            examples: [
              { it: "Michelangelo nacque nel 1475 a Caprese.", es: "nascere → nacque" },
              { it: "Dipinse la volta della Cappella Sistina tra il 1508 e il 1512.", es: "dipingere → dipinse" },
              { it: "Visse quasi novant'anni e morì a Roma nel 1564.", es: "vivere → visse, morire → morì" },
            ],
          },
          { kind: "speak", title: "Il tuo artista", hint: "Prima di cominciare: qual è un'opera d'arte che ti ha colpito? Dove l'hai vista?", items: ["Un'opera che mi ha colpito…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico dell'arte", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'affresco", "la tela", "la pala d'altare", "la scultura", "il chiaroscuro",
              "la prospettiva", "il committente", "la bottega", "l'allievo", "il capolavoro",
              "in primo piano", "sullo sfondo", "la composizione", "il ritratto", "la natura morta",
              "il restauro", "commissionare", "ritrarre", "scolpire", "esporre",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["dipingere → (chi dipinge)", "scolpire → (chi scolpisce)", "dipingere → (l'opera)", "restaurare → (sostantivo)", "commissionare → (chi commissiona)", "esporre → (sostantivo)", "ritrarre → (l'opera)", "affrescare → (l'opera)"],
          },
          { kind: "speak", title: "Descrivi", hint: "Pensa a un quadro famoso e descrivilo usando ogni espressione.", items: ["in primo piano", "sullo sfondo", "a sinistra / a destra", "la luce viene da…", "i colori sono…", "il personaggio principale", "lo sguardo", "l'atmosfera"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "L'accento del passato remoto", hint: "Dove cade?",
            text: [
              "Terza persona singolare dei verbi regolari: accento sull'ultima sillaba, scritto: parlò, finì, credé (o credette).",
              "Terza persona plurale: accento sulla terzultima: parlàrono, finìrono, dìssero, fécero, nàcquero.",
              "Irregolari con doppia consonante: nacque, ebbe, venne, volle, conobbe, piacque, tenne. Cura le doppie!",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Attenzione agli accenti.", items: ["Caravaggio nacque a Milano nel 1571.", "Dipinse la Vocazione di San Matteo.", "Fuggì da Roma dopo un omicidio.", "Morì a Porto Ercole nel 1610.", "I suoi quadri piacquero moltissimo."] },
          { kind: "shadow", title: "Terze persone", hint: "Singolare e plurale.", items: ["fece / fecero", "disse / dissero", "nacque / nacquero", "visse / vissero", "dipinse / dipinsero"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passato remoto", hint: "Regolari e irregolari",
            text: [
              "Regolari: -are: parlai, parlasti, parlò, parlammo, parlaste, parlarono. -ere: credei (credetti), credesti, credé (credette), credemmo, credeste, crederono (credettero). -ire: finii, finisti, finì, finimmo, finiste, finirono.",
              "Gli irregolari sono irregolari solo in tre persone (io, lui/lei, loro); le altre sono regolari: scrissi, scrivesti, scrisse, scrivemmo, scriveste, scrissero.",
              "Essere: fui, fosti, fu, fummo, foste, furono. Avere: ebbi, avesti, ebbe, avemmo, aveste, ebbero.",
            ],
            table: { head: ["infinito", "io / lui / loro"], rows: [["fare", "feci, fece, fecero"], ["dire", "dissi, disse, dissero"], ["vedere", "vidi, vide, videro"], ["nascere", "nacqui, nacque, nacquero"], ["dipingere", "dipinsi, dipinse, dipinsero"], ["vivere", "vissi, visse, vissero"]] },
          },
          k.table("Passato remoto: terza persona", [
            ["scrivere", "scrisse"],
            ["venire", ""],
            ["prendere", ""],
            ["mettere", ""],
            ["decidere", ""],
            ["conoscere", ""],
            ["rimanere", ""],
          ], "Scrivi la terza persona singolare (lui/lei) del passato remoto.", ["lui / lei"]),
          {
            kind: "fill", title: "Completa la biografia", hint: "Coniuga i verbi al passato remoto.",
            items: [
              "Artemisia Gentileschi ___ (nascere) a Roma nel 1593.", "Suo padre, Orazio, ___ (essere) un pittore famoso.", "___ (imparare) a dipingere nella bottega del padre.", "A Firenze ___ (diventare) la prima donna dell'Accademia delle Arti del Disegno.", "___ (dipingere) molte eroine bibliche.", "Più tardi ___ (lavorare) anche a Londra e a Napoli.", "I suoi quadri ___ (piacere) a principi e collezionisti.", "___ (morire) a Napoli intorno al 1656.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Passato remoto e imperfetto", hint: "Fatti e descrizioni",
            text: [
              "Come con il passato prossimo, il passato remoto racconta i fatti (che cosa successe), l'imperfetto descrive lo sfondo (com'era, che cosa succedeva).",
              "«Quando Caravaggio arrivò a Roma, aveva circa vent'anni e non conosceva nessuno».",
              "Il trapassato remoto (ebbe finito, fu arrivato) si usa solo dopo «quando», «appena», «dopo che» con un passato remoto: lo vedrai nella prossima unità.",
            ],
          },
          k.negativa(["Michelangelo è nato nel 1475.", "Leonardo ha dipinto la Gioconda.", "Giotto ha affrescato la Cappella degli Scrovegni.", "Bernini e Borromini sono stati grandi rivali.", "Raffaello è morto giovane, a trentasette anni.", "I Medici hanno protetto molti artisti."], "Riscrivi ogni frase al passato remoto, come in una guida d'arte.", "passato remoto"),
          {
            kind: "fill", title: "Remoto o imperfetto?", hint: "Coniuga il verbo al passato remoto o all'imperfetto.",
            items: ["Quando Raffaello ___ (arrivare) a Roma, ___ (avere) venticinque anni.", "Mentre Michelangelo ___ (dipingere) la volta, il papa ___ (andare) spesso a controllare.", "La città ___ (essere) piena di cantieri quando Bernini ___ (cominciare) a lavorare.", "Leonardo ___ (lasciare) Milano perché i francesi ___ (occupare) la città.", "Il quadro ___ (essere) rubato nel 1911 e ___ (ritornare) al Louvre due anni dopo.", "I visitatori ___ (restare) in silenzio: la luce ___ (sembrare) vera."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La guida al museo", "Una guida presenta un quadro ai visitatori.", [
            { who: "Guida", text: "Siamo davanti alla «Vocazione di San Matteo», che Caravaggio dipinse tra il 1599 e il 1600 per la chiesa di San Luigi dei Francesi, a Roma." },
            { who: "Guida", text: "Guardate la luce: entra da destra e cade sui volti dei personaggi seduti al tavolo. Cristo, quasi nascosto in ombra, indica Matteo con la mano." },
            { who: "Visitatore", text: "Ma qual è Matteo? Non si capisce bene." },
            { who: "Guida", text: "Ottima domanda: è proprio uno dei grandi dibattiti degli storici dell'arte. Per molti è l'uomo con la barba che indica se stesso; per altri è il giovane a sinistra, chino sulle monete." },
            { who: "Guida", text: "Quando il quadro fu scoperto, il pubblico rimase colpito: nessuno aveva mai visto santi vestiti come uomini del popolo, in una taverna." },
          ], ["Chi dipinse il quadro e quando?", "Per quale chiesa?", "Da dove entra la luce?", "Quali sono le due interpretazioni su Matteo?", "Perché il pubblico rimase colpito?", "Trova tutti i verbi al passato remoto."]),
          k.listen("Il restauro", "Una restauratrice racconta il suo lavoro.", [
            { who: "Restauratrice", text: "Quando cominciammo il restauro, l'affresco era quasi invisibile: era coperto da secoli di polvere e fumo di candele." },
            { who: "Restauratrice", text: "Lavorammo per tre anni, centimetro per centimetro. Un giorno, togliendo uno strato di vernice, scoprimmo una firma che nessuno aveva mai visto." },
            { who: "Intervistatore", text: "Che cosa provò in quel momento?" },
            { who: "Restauratrice", text: "Un'emozione enorme. Chiamai subito i colleghi e restammo tutti in silenzio per qualche minuto." },
          ], ["Com'era l'affresco all'inizio del restauro?", "Quanto durò il lavoro?", "Che cosa scoprirono un giorno?", "Che cosa fece la restauratrice in quel momento?", "Riscrivi il racconto al passato prossimo: che effetto fa?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Caravaggio, genio e fuggitivo", [
            "Michelangelo Merisi, detto Caravaggio dal nome del paese della sua famiglia, nacque a Milano nel 1571. Rimase presto orfano e studiò pittura nella bottega di un artista milanese.",
            "Intorno al 1592 arrivò a Roma, povero e sconosciuto. In pochi anni, però, diventò il pittore più discusso della città: i suoi santi avevano i piedi sporchi, le sue Madonne erano donne del popolo, e la luce violenta dei suoi quadri sembrava uscire dal buio.",
            "Il suo carattere era difficile quanto la sua pittura era rivoluzionaria. Fu arrestato più volte per risse e aggressioni, e nel 1606, durante una lite, uccise un uomo. Condannato a morte, fuggì da Roma.",
            "Negli ultimi quattro anni della sua vita visse da fuggitivo: Napoli, Malta, la Sicilia, di nuovo Napoli. Dovunque andasse, dipingeva capolavori. Nel 1610, mentre tornava verso Roma sperando nel perdono del papa, morì a Porto Ercole, sulla costa toscana, a trentotto anni.",
            "Per secoli fu quasi dimenticato. Solo nel Novecento la critica lo riscoprì e lo riconobbe come uno dei padri della pittura moderna.",
          ], ["Perché Michelangelo Merisi è chiamato Caravaggio?", "Che cosa rendeva nuova la sua pittura?", "Che cosa successe nel 1606?", "Come visse gli ultimi anni?", "Dove e in che circostanze morì?", "Trova dieci verbi al passato remoto e scrivi il loro infinito."]),
          k.spagna("Scegli un artista del tuo paese e scrivi una breve biografia al passato remoto: nascita, formazione, opere principali, morte."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Descrivere e interpretare un'opera", hint: "Formule utili",
            text: ["Descrivere: «Il quadro rappresenta…», «In primo piano si vede…», «Sullo sfondo…», «La luce proviene da…». Interpretare: «L'artista sembra voler dire…», «Colpisce il contrasto tra…», «Secondo alcuni critici…». Valutare: «Ciò che mi colpisce di più è…», «Trovo affascinante…»."],
          },
          k.rispondi(["Qual è il museo più bello che hai visitato?", "Preferisci l'arte antica o quella contemporanea? Perché?", "Quale artista italiano conosci meglio? Racconta qualcosa della sua vita.", "Pensi che la vita di un artista influenzi le sue opere?", "Che cosa ne pensi dei musei affollati di turisti?", "Se potessi avere un quadro famoso a casa, quale sceglieresti?"]),
          { kind: "speak", title: "La guida sei tu", hint: "Scegli un'opera famosa (cercane un'immagine) e presentala per due minuti come una guida: autore, data, storia, descrizione, interpretazione. Usa il passato remoto per la storia.", items: ["Ci troviamo davanti a…"] },
          {
            kind: "roleplay", title: "Al museo", hint: "Sei una guida agli Uffizi. L'IA è un turista curioso che fa molte domande sulla «Nascita di Venere» di Botticelli.",
            steps: ["Presenta l'opera e l'autore.", "Racconta la storia del quadro al passato remoto.", "Descrivi la composizione.", "Rispondi a una domanda difficile con prudenza.", "Consiglia un'altra opera da vedere."],
          },
          {
            kind: "roleplay", title: "L'intervista impossibile", hint: "L'IA interpreta Caravaggio. Intervistalo sulla sua vita.",
            steps: ["Chiedigli della sua giovinezza.", "Chiedigli perché dipingeva i santi come uomini del popolo.", "Chiedigli che cosa successe nel 1606.", "Chiedigli quale opera preferisce.", "Riassumi l'intervista al passato remoto."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti la biografia di un artista che ammiri, al passato remoto.", items: ["Nacque nel…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Leonardo è nato a Vinci nel 1452. (passato remoto)", "Ha lavorato per gli Sforza a Milano. (passato remoto)", "Ha dipinto l'Ultima Cena. (passato remoto)", "Si è trasferito in Francia. (passato remoto)", "È morto ad Amboise nel 1519. (passato remoto)", "I suoi quaderni sono stati pubblicati molto dopo. (passivo al passato remoto)", "Quando è arrivato a Roma era giovane. (remoto + imperfetto)", "Ha detto che l'arte non è mai finita. (passato remoto)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "La scheda per il museo", hint: "Scrivi una scheda (280–320 parole) per un'audioguida su un'opera e il suo autore: biografia essenziale al passato remoto, storia dell'opera, descrizione e interpretazione. Usa almeno dodici verbi al passato remoto, di cui sei irregolari.", rows: 20, items: ["Opera e autore:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["nacque", "dipinsero", "visse", "fece", "conobbe", "rimasero"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Caravaggio nacque a Milano nel 1571.", "Fuggì da Roma dopo un omicidio.", "La luce proviene da destra.", "In primo piano si vede un giovane.", "Per secoli fu quasi dimenticato."]),
          k.media([
            { type: "Film", title: "L'ombra di Caravaggio (Michele Placido, 2022)", where: "Cerca dove vederlo su JustWatch", why: "La vita del pittore raccontata come un'indagine: luce, violenza e arte nella Roma del Seicento." },
            { type: "Film", title: "Michelangelo – Infinito (Emanuele Imbucci, 2018)", where: "Cerca dove vederlo su JustWatch", why: "Docufilm sulla vita e le opere di Michelangelo: ascolta il passato remoto della narrazione." },
            { type: "Sito", title: "Gallerie degli Uffizi", where: "uffizi.it", why: "Schede delle opere in italiano: leggine tre e annota il lessico della descrizione." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta al passato remoto un episodio della vita dell'artista del film.", items: ["Un giorno l'artista…"] },
        ],
      },
    ],

    exam: k.exam(66, {
      parole: ["l'affresco", "la tela", "il chiaroscuro", "la prospettiva", "il committente", "la bottega", "il capolavoro", "sullo sfondo", "il restauro", "commissionare"],
      contrario: ["dipingere → chi dipinge", "scolpire → chi scolpisce", "restaurare → sostantivo", "esporre → sostantivo", "in primo piano → contrario", "luce → contrario"],
      verbiHint: "Scrivi la terza persona singolare e plurale del passato remoto.",
      verbiCols: ["lui / lei", "loro"],
      verbi: [["fare", "", ""], ["dire", "", ""], ["nascere", "", ""], ["vivere", "", ""], ["essere", "", ""], ["avere", "", ""]],
      completaHint: "Coniuga al passato remoto o all'imperfetto.",
      completa: ["Giotto ___ (nascere) intorno al 1267.", "Botticelli ___ (dipingere) la Primavera per i Medici.", "Quando Raffaello ___ (morire), ___ (avere) solo trentasette anni.", "Bernini ___ (scolpire) l'Apollo e Dafne da giovane.", "Michelangelo ___ (lavorare) quattro anni alla volta della Sistina.", "Mentre gli artisti ___ (lavorare), il papa ___ (visitare) spesso il cantiere.", "I critici ___ (riscoprire) Caravaggio nel Novecento.", "Leonardo ___ (scrivere) migliaia di pagine di appunti."],
      trasformaHint: "Riscrivi ogni frase al passato remoto.",
      trasforma: ["Donatello ha scolpito il David in bronzo.", "Tiziano ha vissuto a lungo a Venezia.", "I Medici hanno commissionato molte opere.", "Canova è nato a Possagno.", "Il pubblico è rimasto colpito.", "Gli artisti si sono conosciuti a Firenze."],
      leggi: {
        text: [
          "Il 21 agosto 1911 la Gioconda scomparve dal Louvre. Per più di un giorno nessuno si accorse del furto: i custodi pensarono che il quadro fosse stato portato via per essere fotografato.",
          "Il ladro era Vincenzo Peruggia, un operaio italiano che aveva lavorato nel museo. Nascose il quadro sotto il cappotto e lo tenne per due anni in una valigia, nella sua stanza a Parigi.",
          "Nel 1913 provò a venderlo a un antiquario di Firenze, che avvertì la polizia. Peruggia fu arrestato e disse di aver voluto riportare il capolavoro in Italia. La Gioconda tornò al Louvre e diventò ancora più famosa.",
        ],
        questions: ["Che cosa successe il 21 agosto 1911?", "Perché nessuno si accorse subito del furto?", "Chi era il ladro e come rubò il quadro?", "Come fu scoperto? Come giustificò il furto?"],
      },
      ascolta: {
        script: [
          { who: "Guida", text: "Questa statua fu scolpita da Antonio Canova tra il 1805 e il 1808." },
          { who: "Visitatrice", text: "Chi è la donna rappresentata?" },
          { who: "Guida", text: "È Paolina Borghese, sorella di Napoleone. Volle essere ritratta come Venere, e lo scandalo fu enorme." },
          { who: "Visitatrice", text: "E suo marito che cosa disse?" },
          { who: "Guida", text: "Si dice che la tenne nascosta per anni, perché era troppo geloso di quella bellezza!" },
        ],
        questions: ["Chi scolpì la statua e quando?", "Chi è la donna rappresentata?", "Perché ci fu uno scandalo?", "Che cosa fece il marito, secondo la guida?"],
      },
      parla: ["Racconta la vita di un artista al passato remoto.", "Descrivi un quadro che conosci.", "Arte antica o contemporanea? Perché?", "Racconta la tua visita a un museo."],
      role: ["L'IA è un turista agli Uffizi e ti fa domande su un quadro.", "Racconta la storia dell'opera al passato remoto.", "Descrivi la composizione e dai la tua interpretazione."],
      dettato: ["nacque a Firenze", "dipinse la volta", "fu arrestato", "visse a Venezia", "in primo piano", "il chiaroscuro"],
      traduci: ["Raffaello è nato a Urbino. (passato remoto)", "Ha dipinto la Scuola di Atene. (passato remoto)", "È morto a Roma nel 1520. (passato remoto)", "Bernini ha fatto la fontana. (passato remoto)", "I due artisti si sono incontrati. (passato remoto)", "Quando è arrivato, la chiesa era vuota. (remoto + imperfetto)"],
      scrivi: { hint: "Scrivi una breve biografia (180–220 parole) di un artista (italiano o del tuo paese) al passato remoto, con un'opera descritta in dettaglio.", start: "Nacque nel…" },
    }),
  };
})();
