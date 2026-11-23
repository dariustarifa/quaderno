// Unità 37 · C'era una volta — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[37] = {
    n: 37,
    level: "B1",
    title: "C'era una volta",
    goal: "Raccontare storie complesse, mettendo in ordine i fatti del passato con il trapassato prossimo.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a raccontare storie in cui i fatti non vanno in ordine: «Quando sono arrivato, il film era già cominciato».",
              "Grammatica: il trapassato prossimo (avevo fatto, ero andato), il suo rapporto con il passato prossimo e l'imperfetto, e i connettivi del racconto (già, appena, non ancora, prima che, dopo che).",
              "Si forma come il passato prossimo, ma con l'ausiliare all'imperfetto: «ho fatto» → «avevo fatto».",
            ],
          },
          {
            kind: "intro", title: "Era già partito", hint: "Un'anticipazione: il passato del passato",
            text: ["Il trapassato prossimo indica un'azione avvenuta prima di un'altra azione passata.", "Si forma con l'imperfetto di avere o essere + participio: avevo mangiato, ero uscita."],
            examples: [
              { it: "Quando sono arrivata alla stazione, il treno era già partito.", es: "prima: il treno parte; dopo: io arrivo" },
              { it: "Non avevo mai visto il mare prima di quel viaggio.", es: "esperienza precedente" },
              { it: "Mi ha restituito il libro che gli avevo prestato.", es: "prima: io presto; dopo: lui restituisce" },
            ],
          },
          { kind: "speak", title: "Una volta…", hint: "Prima di cominciare: racconta una volta in cui sei arrivato troppo tardi a un appuntamento, a una festa o a un treno.", items: ["Una volta…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Raccontare", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il racconto", "la vicenda", "il protagonista", "l'antefatto", "il colpo di scena",
              "accadere", "svolgersi", "scoprire", "rendersi conto", "nel frattempo",
              "all'improvviso", "a un tratto", "in seguito", "fino a quel momento", "ormai",
              "appena", "non… ancora", "già", "da allora", "il finale",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Sinonimi",
            hint: "Scrivi un sinonimo per ogni parola o espressione.",
            items: ["accadere", "all'improvviso", "in seguito", "scoprire", "la vicenda", "rendersi conto", "terminare", "cominciare"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: era già → Quando sono arrivato, la lezione era già finita.", items: ["era già", "non avevo mai", "appena", "mi sono reso conto che", "nel frattempo", "da allora", "a un tratto", "ormai"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Avevo, ero: il ritmo del racconto", hint: "Pronuncia e ritmo",
            text: [
              "Nel trapassato l'ausiliare all'imperfetto si lega al participio: «avevo già visto» si dice «avevogià vìsto». L'accento cade sul participio.",
              "Quando racconti, rallenta prima del colpo di scena: «Quando ho aperto la porta… … non c'era più nessuno».",
              "«C'era una volta» è l'inizio di tutte le fiabe italiane: «C'era una volta un re…».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti legando le parole.", items: ["avevo già mangiato", "eravamo appena arrivati", "non aveva ancora capito", "se n'era già andata", "C'era una volta un piccolo paese…"] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con la pausa prima del colpo di scena.", items: ["Quando sono arrivato, la festa… era già finita.", "Avevo cercato le chiavi dappertutto… ed erano in tasca!", "Non l'avevo mai visto prima, ma sapeva il mio nome.", "Mi sono reso conto che avevo dimenticato il passaporto."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il trapassato prossimo", hint: "Forma",
            text: [
              "Imperfetto di avere o essere + participio passato. L'ausiliare è lo stesso del passato prossimo: «ho mangiato» → «avevo mangiato»; «sono uscito» → «ero uscito».",
              "Con essere, il participio concorda: «Le ragazze erano già partite».",
              "Gli avverbi «già», «appena», «mai», «non… ancora» si mettono tra l'ausiliare e il participio: «Non avevo ancora finito».",
            ],
            table: { head: ["", "mangiare", "partire"], rows: [["io", "avevo mangiato", "ero partito/a"], ["tu", "avevi mangiato", "eri partito/a"], ["lui / lei", "aveva mangiato", "era partito/a"], ["noi / voi / loro", "avevamo / avevate / avevano…", "eravamo / eravate / erano partiti/e"]] },
          },
          k.table("Tabella dei verbi", [
            ["fare", "ho fatto", "avevo fatto"],
            ["andare", "", ""],
            ["vedere", "", ""],
            ["rimanere", "", ""],
            ["rendersi conto", "", ""],
            ["scoprire", "", ""],
          ], "Completa con la prima persona (io): passato prossimo e trapassato prossimo.", ["passato (io)", "trapassato (io)"]),
          {
            kind: "fill", title: "Prima e dopo", hint: "Completa con il trapassato prossimo del verbo tra parentesi.",
            items: [
              "Quando sono arrivato al cinema, il film ___ già ___ (cominciare).", "Mi ha raccontato una storia che io ___ già ___ (sentire).", "Non ___ mai ___ (mangiare) il sushi prima di quel viaggio.", "Quando la polizia è arrivata, i ladri ___ già ___ (scappare).", "Era stanca perché ___ (lavorare) tutta la notte.", "Ho trovato le chiavi che ___ (perdere) la settimana prima.", "Le mie amiche ___ appena ___ (uscire) quando è cominciato il temporale.", "Mi sono accorto che ___ (dimenticare) il portafoglio a casa.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I tre tempi del racconto", hint: "Passato prossimo, imperfetto, trapassato",
            text: [
              "Passato prossimo: i fatti principali, uno dopo l'altro («Sono entrato, ho visto…»).",
              "Imperfetto: la scena, la descrizione, le azioni in corso («Pioveva, c'era molta gente…»).",
              "Trapassato prossimo: quello che era successo prima («…perché avevo perso l'autobus»). Spesso spiega la causa di un fatto.",
              "Connettivi utili: «perché», «dato che», «quando», «dopo che» + trapassato («Dopo che avevamo cenato, siamo usciti»), «appena» + passato prossimo o trapassato.",
            ],
          },
          {
            kind: "fill", title: "Una storia vera", hint: "Completa con il tempo giusto: passato prossimo, imperfetto o trapassato prossimo.",
            items: ["Era una domenica di agosto e ___ (fare) un caldo terribile.", "Giulio ___ (decidere) di andare al mare, anche se la sera prima ___ (dormire) pochissimo.", "Quando ___ (arrivare) in spiaggia, si è accorto che ___ (dimenticare) il costume.", "Mentre ___ (cercare) un negozio, ___ (incontrare) una vecchia compagna di scuola.", "Non la ___ (vedere) da quindici anni!", "Da quel giorno ___ (cominciare) a vedersi ogni settimana."],
          },
          {
            kind: "intro", title: "Già, appena, non ancora, ormai", hint: "Avverbi del tempo",
            text: ["«Già»: prima del momento di cui si parla. «Appena»: pochissimo tempo prima. «Non… ancora»: l'azione non era successa. «Ormai»: era troppo tardi per cambiare. «Ormai il treno era partito»."],
          },
          k.negativa(["Arrivo alla stazione. Prima il treno è partito.", "Vedo il film. Prima ho letto il libro.", "La polizia arriva. Prima i ladri sono scappati.", "Mi accorgo di una cosa. Prima ho dimenticato le chiavi.", "Lei telefona. Prima io sono uscito."], "Unisci le due frasi in una sola frase al passato, usando «quando» e il trapassato prossimo per l'azione precedente.", "una sola frase"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Una serata disastrosa", "Un ragazzo racconta a un'amica il suo primo appuntamento.", [
            { who: "Simona", text: "Allora? Com'è andato l'appuntamento con Chiara?" },
            { who: "Davide", text: "Un disastro. Avevo prenotato in un ristorante bellissimo, ma quando siamo arrivati ci hanno detto che la prenotazione non c'era." },
            { who: "Simona", text: "No! E poi?" },
            { who: "Davide", text: "Siamo andati in pizzeria. Lì mi sono reso conto che avevo lasciato il portafoglio nell'altra giacca." },
            { who: "Simona", text: "Oddio, e chi ha pagato?" },
            { who: "Davide", text: "Lei. Ero morto di vergogna. Ma alla fine ha riso: mi ha detto che non si era mai divertita così tanto a un primo appuntamento." },
            { who: "Simona", text: "Quindi vi rivedete?" },
            { who: "Davide", text: "Sabato. E questa volta il portafoglio l'ho già messo in tasca!" },
          ], ["Che cosa aveva organizzato Davide?", "Che cosa è successo al ristorante?", "Di che cosa si è reso conto in pizzeria?", "Come ha reagito Chiara?", "Come finisce la storia?"]),
          k.listen("Il nonno partigiano", "Una donna racconta un ricordo di famiglia in un podcast di storia.", [
            { who: "Lucia", text: "Mio nonno aveva diciannove anni nel 1943. Era tornato a casa dal fronte da pochi mesi quando i tedeschi hanno occupato il Nord Italia." },
            { who: "Lucia", text: "Non voleva combattere con i fascisti, così è scappato in montagna e si è unito ai partigiani." },
            { who: "Lucia", text: "Per due anni la famiglia non ha saputo niente di lui. Sua madre era sicura che fosse morto." },
            { who: "Lucia", text: "Il 25 aprile del 1945 è tornato in paese. Era magrissimo e aveva la barba lunga: all'inizio sua madre non l'aveva riconosciuto." },
          ], ["Quanti anni aveva il nonno nel 1943? Da dove era tornato?", "Che cosa è successo poco dopo?", "Che cosa ha fatto il nonno? Perché?", "Che cosa pensava sua madre?", "Quando è tornato? Che cosa è successo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I Bronzi di Riace", [
            "Il 16 agosto 1972 Stefano Mariottini, un chimico romano appassionato di immersioni, era in vacanza in Calabria, vicino a Riace. Quella mattina aveva deciso di nuotare un po' più lontano del solito.",
            "A circa otto metri di profondità ha visto qualcosa che usciva dalla sabbia: un braccio. Per un momento ha pensato che fosse un cadavere. Poi ha capito che era di bronzo.",
            "Nei giorni successivi i carabinieri e gli archeologi hanno portato in superficie due grandi statue di guerrieri greci. Erano rimaste in fondo al mare per più di duemila anni.",
            "Nessuno sa con certezza da dove venissero: forse una nave che le trasportava era affondata durante una tempesta. Gli studiosi pensano che fossero state realizzate nel V secolo a.C.",
            "Dopo un lungo restauro, i Bronzi sono diventati il simbolo della Calabria. Oggi si trovano nel Museo Archeologico Nazionale di Reggio Calabria e ogni anno migliaia di persone vanno a vederli.",
          ], ["Chi era Stefano Mariottini? Che cosa faceva quel giorno?", "Che cosa ha visto? Che cosa ha pensato prima?", "Che cosa hanno trovato in seguito?", "Da quanto tempo erano in mare le statue?", "Come erano arrivate lì, forse?", "Dove si trovano oggi?"]),
          k.spagna("Racconta una scoperta, un fatto storico o una leggenda del tuo paese usando passato prossimo, imperfetto e trapassato prossimo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare bene", hint: "Struttura di un racconto orale",
            text: ["1) Ambientazione (imperfetto): quando, dove, chi c'era. 2) Antefatto (trapassato): che cosa era successo prima. 3) Fatti (passato prossimo): che cosa è successo. 4) Colpo di scena: «All'improvviso…», «A un tratto…». 5) Finale: «Alla fine…», «Da allora…».", "Per tenere viva l'attenzione: «E sai che cosa è successo?», «Non ci crederai, ma…»."],
          },
          k.rispondi(["Racconta una volta in cui sei arrivato troppo tardi.", "Qual è la cosa più strana che ti è successa in un viaggio?", "Che cosa non avevi mai fatto prima dei vent'anni?", "Racconta un malinteso divertente.", "Ti è mai successo di dimenticare qualcosa di importante?", "Qual è la storia di famiglia che senti raccontare più spesso?"]),
          { kind: "speak", title: "Perché?", hint: "Spiega ogni fatto con il trapassato prossimo. Esempio: Ero stanchissimo. → Perché avevo lavorato dodici ore.", items: ["Ho perso il treno.", "Non avevo fame a cena.", "Il professore era arrabbiato.", "Mia madre piangeva di gioia.", "Il ristorante era vuoto.", "Non ho riconosciuto il mio vecchio amico."] },
          {
            kind: "roleplay", title: "Il testimone", hint: "Hai visto un piccolo incidente in strada. Un poliziotto ti chiede di raccontare tutto in ordine. L'IA fa il poliziotto. Usa il «Lei».",
            steps: ["Descrivi la scena: dove eri, che cosa facevi.", "Racconta che cosa era successo prima dell'incidente.", "Racconta l'incidente.", "Rispondi alle domande precise del poliziotto.", "Dai i tuoi dati."],
          },
          {
            kind: "roleplay", title: "Storia a due voci", hint: "Inventate insieme una storia: l'IA comincia, tu continui, e così via. Ogni intervento deve usare almeno un trapassato prossimo.",
            steps: ["L'IA comincia con «C'era una volta…».", "Continua la storia con un antefatto.", "Aggiungi un colpo di scena.", "Rispondi alle sue aggiunte.", "Concludi la storia con un finale."],
          },
          { kind: "speak", title: "La mia storia", hint: "Racconta per due minuti una storia vera della tua vita seguendo la struttura della pagina: ambientazione, antefatto, fatti, colpo di scena, finale.", items: ["Era…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Sono arrivato. Prima il film è cominciato. (Quando sono arrivato…)", "Lei ha telefonato. Io prima ero uscito. (Quando lei ha telefonato…)", "Ho trovato le chiavi. Le avevo perse il giorno prima. (usa: che)", "Era la prima volta che vedevo la neve. (Non avevo mai…)", "Era troppo tardi per cambiare idea. (usa: ormai)", "Abbiamo cenato e poi siamo usciti. (usa: dopo che + trapassato)", "Non avevo finito i compiti. (usa: non… ancora)", "Da quel giorno siamo amici. (usa: da allora)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Un racconto breve", hint: "Scrivi un racconto (200–220 parole) che comincia così: «Quando ho aperto la porta, ho capito subito che qualcuno era entrato in casa». Usa i tre tempi del passato e almeno sei trapassati prossimi.", rows: 16, items: ["Quando ho aperto la porta…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: trapassato", ["avevo già mangiato", "erano appena partiti", "non aveva ancora capito", "ci eravamo conosciuti", "avevate visto", "se n'era andata"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Quando sono arrivato, era già finito.", "Non l'avevo mai visto prima.", "Mi sono reso conto che avevo sbagliato.", "Ormai era troppo tardi.", "Da allora non ci siamo più visti."]),
          k.media([
            { type: "Film", title: "Il postino (Michael Radford, 1994)", where: "Cerca dove vederlo su JustWatch", why: "Un postino di un'isola diventa amico del poeta Pablo Neruda. Una storia raccontata con tempi e ricordi che si intrecciano." },
            { type: "Serie", title: "Il nome della rosa", where: "RaiPlay", why: "Un'indagine in un'abbazia del Trecento: per capire i delitti bisogna scoprire che cosa era successo prima." },
            { type: "Programma", title: "Ulisse: il piacere della scoperta (Alberto Angela)", where: "RaiPlay", why: "Racconti di storia ricchi di trapassati prossimi: ascolta come si costruisce una narrazione." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi la trama del film o della serie in due minuti, con i tre tempi del passato.", items: ["All'inizio… Prima, però, era successo che…"] },
        ],
      },
    ],

    exam: k.exam(37, {
      parole: ["la vicenda", "l'antefatto", "il colpo di scena", "svolgersi", "rendersi conto", "nel frattempo", "a un tratto", "ormai", "da allora", "appena"],
      contrario: ["accadere → sinonimo", "all'improvviso → sinonimo", "in seguito → sinonimo", "cominciare → contrario", "già → contrario (non…)", "scoprire → sostantivo"],
      verbiHint: "Completa con io: passato prossimo e trapassato prossimo.",
      verbiCols: ["passato (io)", "trapassato (io)"],
      verbi: [["dire", "", ""], ["venire", "", ""], ["perdere", "", ""], ["accorgersi", "", ""]],
      completaHint: "Completa con passato prossimo, imperfetto o trapassato prossimo.",
      completa: ["Quando siamo arrivati, la cena ___ già ___ (finire).", "Non ___ mai ___ (vedere) una città così bella.", "Ieri ___ (essere) stanchissimo perché la notte prima non ___ (dormire).", "Mentre ___ (noi, aspettare) l'autobus, ___ (cominciare) a piovere.", "Lei mi ha ridato i soldi che le ___ (prestare).", "Quando la polizia ___ (arrivare), il ladro ___ già ___ (scappare).", "Ci siamo resi conto che ___ (sbagliare) strada.", "___ (essere) le dieci e ormai i negozi ___ (chiudere)."],
      trasformaHint: "Unisci le frasi con il trapassato prossimo per l'azione precedente.",
      trasforma: ["Arrivo in ufficio. Prima la riunione è cominciata. (Quando…)", "Trovo il libro. L'ho cercato per giorni. (che)", "Lei mi chiama. Io prima sono andato a letto. (Quando…)", "Ceniamo. Poi usciamo. (Dopo che…)", "Non ho mai visto la neve fino a quel giorno. (Non avevo mai…)", "È troppo tardi: il treno è partito. (ormai)"],
      leggi: {
        text: [
          "Nel 1991 due escursionisti tedeschi camminavano sulle Alpi, al confine tra Italia e Austria, quando hanno visto un corpo che usciva dal ghiaccio.",
          "Pensavano che fosse un alpinista morto da poco, ma gli scienziati hanno scoperto che quell'uomo era morto più di cinquemila anni prima. Lo hanno chiamato Ötzi.",
          "Gli studi hanno rivelato che, prima di morire, Ötzi aveva mangiato carne di stambecco e che era stato colpito da una freccia. Oggi si trova nel museo di Bolzano.",
        ],
        questions: ["Che cosa facevano i due escursionisti?", "Che cosa hanno visto? Che cosa pensavano?", "Che cosa hanno scoperto gli scienziati?", "Che cosa era successo a Ötzi prima di morire?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Sai che cosa mi è successo ieri? Ero uscita di casa presto per andare all'aeroporto." },
          { who: "Anna", text: "Quando sono arrivata al check-in, mi sono accorta che avevo preso il passaporto scaduto: quello nuovo l'avevo lasciato sul tavolo." },
          { who: "Anna", text: "Ho chiamato mio fratello, che per fortuna non era ancora uscito per andare al lavoro, e me l'ha portato in taxi." },
          { who: "Anna", text: "Sono salita sull'aereo per ultima. Ormai pensavo che l'avessi perso!" },
        ],
        questions: ["Dove stava andando Anna?", "Di che cosa si è accorta al check-in?", "Dove aveva lasciato il passaporto nuovo?", "Come ha risolto il problema? Com'è finita?"],
      },
      parla: ["Racconta una volta in cui eri arrivato troppo tardi.", "Racconta la trama di un film che ti è piaciuto con i tre tempi del passato.", "Spiega con il trapassato: perché ieri eri stanco? perché eri contento?", "Racconta una storia di famiglia."],
      role: ["Sei un testimone: racconta a un giornalista un fatto strano che hai visto.", "Spiega che cosa era successo prima.", "Rispondi alle sue domande precise."],
      dettato: ["era già partito", "Non l'avevo mai visto.", "Mi sono accorta che avevo dimenticato tutto.", "Ormai era tardi.", "Dopo che avevamo cenato…", "erano appena arrivate"],
      traduci: ["Arrivo. Prima il concerto è finito. (Quando…)", "Ritrovo l'anello. L'ho perso un anno fa. (che)", "Era la prima volta che volavo. (Non avevo mai…)", "Prima abbiamo studiato, poi siamo usciti. (Dopo che…)", "Era troppo tardi per tornare. (ormai)", "Da quel giorno non lo vedo più. (da allora, al passato)"],
      scrivi: { hint: "Racconta (150–180 parole) un giorno in cui tutto è andato storto, spiegando con il trapassato prossimo le cause di ogni problema.", start: "Quel giorno era cominciato male…" },
    }),
  };
})();
