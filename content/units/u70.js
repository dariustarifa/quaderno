// Unità 70 · Modi di dire — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[70] = {
    n: 70,
    level: "B2",
    title: "Modi di dire",
    goal: "Capire e usare con naturalezza i modi di dire e i proverbi più comuni dell'italiano, nel contesto e nel registro giusti.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "I modi di dire sono espressioni fisse il cui significato non si capisce dalle singole parole: «essere al verde» non ha niente a che fare con i colori, significa non avere soldi.",
              "Gli italiani li usano continuamente, nel parlato e anche nei giornali. Al livello B2 devi capirli subito e usarne alcuni con naturalezza.",
              "Studierai i modi di dire per gruppi: con le parti del corpo, con gli animali, con il cibo, con i colori; e i proverbi più comuni.",
            ],
          },
          {
            kind: "intro", title: "Letterale o figurato?", hint: "Un'anticipazione",
            examples: [
              { it: "In bocca al lupo per l'esame! — Crepi!", es: "augurio prima di una prova" },
              { it: "Questa borsa costa un occhio della testa.", es: "costa moltissimo" },
              { it: "Acqua in bocca, mi raccomando!", es: "non dirlo a nessuno" },
            ],
            text: ["Un buon uso dei modi di dire rende il tuo italiano più vivo; un uso eccessivo, invece, lo rende artificiale."],
          },
          { kind: "speak", title: "La tua lingua", hint: "Prima di cominciare: qual è il tuo modo di dire preferito nella tua lingua? Prova a spiegarlo in italiano.", items: ["Nella mia lingua si dice… e significa…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Modi di dire con il corpo", hint: "Spiega il significato di ogni modo di dire.",
            placeholder: "significato",
            items: [
              "costare un occhio della testa", "avere le mani bucate", "non avere peli sulla lingua", "avere la testa fra le nuvole", "acqua in bocca",
              "fare orecchie da mercante", "essere in gamba", "alzare il gomito", "avere un diavolo per capello", "mettere il dito nella piaga",
              "fare il passo più lungo della gamba", "a occhio e croce", "avere la puzza sotto il naso", "stare con le mani in mano", "parlare a cuore aperto",
              "rompere le scatole", "perdere la testa", "a bocca aperta", "tenere d'occhio", "dare una mano",
            ],
          },
          {
            kind: "vocab", title: "Animali, cibo e colori", hint: "Spiega il significato di ogni modo di dire.",
            placeholder: "significato",
            items: [
              "in bocca al lupo", "prendere due piccioni con una fava", "essere una buona forchetta", "essere al verde", "dire pane al pane e vino al vino",
              "essere come il prezzemolo", "rendere pan per focaccia", "vedere tutto rosa", "passare la notte in bianco", "essere la pecora nera",
              "avere una fame da lupi", "fare il pesce in barile", "essere un pesce fuor d'acqua", "conoscere i propri polli", "ogni morte di papa",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "modo di dire", title: "Trova il modo di dire",
            hint: "Scrivi un modo di dire con lo stesso significato.",
            items: ["spendere troppo", "non avere soldi", "dire tutto in modo diretto", "essere molto bravo", "non dormire tutta la notte", "raramente", "fingere di non sentire", "essere molto arrabbiato"],
          },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il ritmo dei proverbi", hint: "Rima e cadenza",
            text: [
              "Molti proverbi hanno una rima o un ritmo regolare, per essere ricordati facilmente: «Chi dorme non piglia pesci», «Tra il dire e il fare c'è di mezzo il mare».",
              "Si pronunciano con un tono sentenzioso, come una verità indiscutibile, con una pausa al centro.",
              "Nei modi di dire l'accento cade sulla parola chiave: «Costa un OCCHIO della testa».",
            ],
          },
          { kind: "shadow", title: "Proverbi", hint: "Ripeti con il ritmo giusto.", items: ["Chi dorme | non piglia pesci.", "Tra il dire e il fare | c'è di mezzo il mare.", "L'abito | non fa il monaco.", "A caval donato | non si guarda in bocca.", "Chi va piano | va sano e va lontano."] },
          { kind: "shadow", title: "Modi di dire", hint: "Ripeti con naturalezza.", items: ["In bocca al lupo! — Crepi!", "Acqua in bocca, eh!", "Sono al verde.", "Ho una fame da lupi.", "Ha un diavolo per capello."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Coniugare i modi di dire", hint: "Sono espressioni fisse, ma il verbo cambia",
            text: [
              "Nei modi di dire il verbo si coniuga normalmente; il resto dell'espressione non cambia: «Ieri ho perso la testa», «Se avessi le mani bucate…», «Non fare orecchie da mercante!».",
              "Alcuni modi di dire hanno un pronome fisso: «farcela», «cavarsela», «prendersela» (li studierai nell'unità 78).",
              "Alcune espressioni si usano solo in una forma: «Acqua in bocca!», «In bocca al lupo!», «Toccare ferro».",
            ],
            table: { head: ["espressione", "esempio coniugato"], rows: [["essere al verde", "Fino a venerdì sono al verde."], ["perdere la testa", "Ha perso la testa per lei."], ["dare una mano", "Mi daresti una mano?"], ["fare orecchie da mercante", "Fa sempre orecchie da mercante."]] },
          },
          k.table("Il modo di dire giusto", [
            ["Marco spende tutto quello che guadagna.", "Ha le mani bucate."],
            ["Non ho più un euro.", ""],
            ["Quel vestito costa tantissimo.", ""],
            ["Paola dice sempre quello che pensa.", ""],
            ["Il capo è furioso oggi.", ""],
            ["Lo vediamo molto raramente.", ""],
          ], "Riscrivi ogni frase con un modo di dire.", ["modo di dire"]),
          {
            kind: "fill", title: "Completa il modo di dire", hint: "Completa con la parola mancante.",
            items: [
              "Domani ho l'esame. — In bocca al ___!", "È così distratto: ha sempre la testa fra le ___.", "Non dirlo a nessuno: acqua in ___!", "Ho lavorato tutta la notte: ho passato la notte in ___.", "Ho preso due piccioni con una ___: ho fatto la spesa e ho visto Luisa.", "Mangia tantissimo: è una buona ___.", "Lo zio Gino è dappertutto, è come il ___.", "Gli ho chiesto i soldi, ma lui ha fatto orecchie da ___.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I proverbi", hint: "Saggezza popolare",
            text: [
              "«Chi dorme non piglia pesci»: chi non si impegna non ottiene niente.",
              "«Tra il dire e il fare c'è di mezzo il mare»: è facile promettere, difficile fare.",
              "«L'abito non fa il monaco»: l'apparenza inganna.",
              "«A caval donato non si guarda in bocca»: non si critica un regalo.",
              "«Meglio un uovo oggi che una gallina domani»: meglio un vantaggio piccolo e sicuro.",
              "«Non tutto il male vien per nuocere»: anche da una cosa negativa può nascere qualcosa di buono.",
              "«Chi trova un amico trova un tesoro», «Paese che vai, usanza che trovi», «Ride bene chi ride ultimo».",
            ],
          },
          k.negativa(["Ti hanno regalato un maglione brutto, ma non lamentarti.", "Il nuovo collega sembrava antipatico, invece è gentilissimo.", "Lui promette sempre, ma non fa mai niente.", "Ho perso il treno, ma ho conosciuto una persona interessante.", "In Giappone si mangia con le bacchette: bisogna adattarsi.", "Se ti svegli tardi, perdi le occasioni migliori."], "Per ogni situazione scrivi il proverbio adatto.", "proverbio"),
          {
            kind: "intro", title: "Usare i modi di dire con misura", hint: "Registro e contesto",
            text: ["Quasi tutti i modi di dire sono informali: vanno bene in una conversazione, in una mail a un amico, in un articolo di costume. In una lettera formale o in un testo tecnico è meglio evitarli. Alcuni («rompere le scatole», «alzare il gomito») sono colloquiali e un po' bruschi."],
          },
          {
            kind: "fill", title: "Adatto o no?", hint: "Scrivi «sì» se il modo di dire è adatto al contesto, «no» se non lo è, e perché.",
            items: ["In una mail al direttore: «Il progetto costa un occhio della testa.» → ___", "A un amico prima di un esame: «In bocca al lupo!» → ___", "In un curriculum: «Sono una persona in gamba.» → ___", "A un collega: «Mi daresti una mano?» → ___", "In un verbale ufficiale: «Il sindaco ha fatto orecchie da mercante.» → ___", "In un articolo di costume: «Gli italiani? Buone forchette.» → ___"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Al bar con gli amici", "Tre amici chiacchierano dopo il lavoro.", [
            { who: "Luca", text: "Ragazzi, offro io? Macché, scherzo: questo mese sono proprio al verde." },
            { who: "Sara", text: "Per forza: hai le mani bucate! Hai comprato quella moto che costava un occhio della testa." },
            { who: "Luca", text: "Va bene, va bene, ho fatto il passo più lungo della gamba." },
            { who: "Paolo", text: "Comunque, acqua in bocca: domani ho il colloquio per quel lavoro a Milano." },
            { who: "Sara", text: "Davvero? In bocca al lupo!" },
            { who: "Paolo", text: "Crepi! Speriamo bene: sono così nervoso che stanotte passerò la notte in bianco." },
          ], ["Perché Luca non può offrire?", "Che cosa ha comprato Luca? Che cosa ne pensa Sara?", "Che cosa ammette Luca?", "Che segreto rivela Paolo?", "Come risponde Paolo all'augurio di Sara?", "Spiega con parole tue tutti i modi di dire del dialogo."]),
          k.listen("La nonna e i proverbi", "Una nonna commenta i problemi della nipote con un proverbio per ogni occasione.", [
            { who: "Giulia", text: "Nonna, ho perso il lavoro." },
            { who: "Nonna", text: "Non tutto il male vien per nuocere: adesso puoi cercare qualcosa che ti piaccia davvero." },
            { who: "Giulia", text: "Mi hanno offerto un posto a tempo determinato, ma ne aspetto uno migliore…" },
            { who: "Nonna", text: "Meglio un uovo oggi che una gallina domani, tesoro." },
            { who: "Giulia", text: "E il mio ex dice che tornerà a cercarmi." },
            { who: "Nonna", text: "Tra il dire e il fare c'è di mezzo il mare!" },
          ], ["Che problema ha Giulia all'inizio? Che cosa risponde la nonna?", "Che offerta ha ricevuto Giulia? Che consiglio le dà la nonna?", "Che cosa dice l'ex di Giulia?", "Che cosa significa la risposta della nonna?", "Quale proverbio useresti tu in ciascuna situazione?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Da dove vengono i modi di dire?", [
            "Molti modi di dire italiani hanno origini antiche e curiose. «In bocca al lupo», per esempio, viene probabilmente dal linguaggio dei cacciatori: augurare apertamente «buona caccia» portava sfortuna, così si augurava il contrario. La risposta tradizionale è «Crepi (il lupo)!», ma oggi alcuni, per amore degli animali, preferiscono rispondere «Viva il lupo!».",
            "«Essere al verde» ha un'origine meno sicura. Secondo una delle ipotesi più diffuse, deriva dalle candele usate un tempo nelle aste e in alcuni locali: la parte inferiore era colorata di verde, e quando la fiamma arrivava al verde, il tempo (o il denaro) era finito.",
            "«Ogni morte di papa» significa «molto raramente», perché un tempo i papi restavano in carica per molti anni e la loro morte era un evento raro. «Piantare in asso», cioè abbandonare qualcuno all'improvviso, verrebbe secondo alcuni da Arianna, abbandonata da Teseo sull'isola di Nasso.",
            "Non tutti sono d'accordo su queste origini: per molte espressioni circolano spiegazioni diverse, a volte inventate. Ma è proprio questo il fascino dei modi di dire: sono piccoli racconti condensati in poche parole, che passano di generazione in generazione.",
          ], ["Da dove viene probabilmente «in bocca al lupo»?", "Perché alcuni rispondono «Viva il lupo»?", "Qual è una delle ipotesi sull'origine di «essere al verde»?", "Perché si dice «ogni morte di papa»?", "Da dove verrebbe «piantare in asso»?", "Perché il testo dice che i modi di dire sono «piccoli racconti condensati»?"]),
          k.spagna("Scegli tre modi di dire della tua lingua: spiega il significato, l'origine (se la conosci) e se esiste un equivalente in italiano."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Reagire con un modo di dire", hint: "Nella conversazione",
            text: ["I modi di dire servono spesso per commentare: «Eh, chi dorme non piglia pesci!», «Ma dai, sei proprio un pesce fuor d'acqua!», «Tocca ferro!», «Meglio così: non tutto il male vien per nuocere». Il trucco è usarne pochi, ma al momento giusto."],
          },
          k.rispondi(["Hai le mani bucate o sei risparmiatore?", "Quando è stata l'ultima volta che hai passato la notte in bianco? Perché?", "Ti senti mai un pesce fuor d'acqua? In quali situazioni?", "Conosci qualcuno che non ha peli sulla lingua?", "Che cosa fai ogni morte di papa?", "Quale proverbio italiano ti sembra più vero?"]),
          { kind: "speak", title: "Racconta con un modo di dire", hint: "Racconta un breve episodio della tua vita che si può riassumere con ciascun modo di dire.", items: ["fare il passo più lungo della gamba", "cadere dalle nuvole", "prendere due piccioni con una fava", "non tutto il male vien per nuocere"] },
          {
            kind: "roleplay", title: "Il consiglio dell'amico", hint: "Un amico (l'IA) ti racconta i suoi problemi. Tu rispondi usando modi di dire e proverbi, al momento giusto.",
            steps: ["Ascolta il primo problema e commenta con un modo di dire.", "Dai un consiglio con un proverbio.", "Chiedi di mantenere un segreto con un modo di dire.", "Fai un augurio.", "Chiudi con un proverbio ottimista."],
          },
          {
            kind: "roleplay", title: "La sfida", hint: "Sfida l'IA: a turno, uno dice un modo di dire italiano e l'altro deve spiegarlo e usarlo in una frase.",
            steps: ["Comincia tu con un modo di dire del corpo.", "Spiega quello proposto dall'IA.", "Proponi un modo di dire con un animale.", "Proponi un proverbio.", "Chiedi all'IA un modo di dire che non conosci."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti una giornata disastrosa usando almeno sei modi di dire.", items: ["Ieri avevo un diavolo per capello…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non ho più soldi fino a fine mese.", "Spende tutto quello che guadagna.", "È bravissima nel suo lavoro.", "Non dire niente a nessuno!", "Ha fatto finta di non sentire.", "Era furioso.", "Ho ottenuto due risultati con una sola azione.", "Lo vedo pochissimo."], "Riscrivi ogni frase con un modo di dire."),
          { kind: "write", title: "Una storia con i modi di dire", hint: "Scrivi un racconto breve (280–320 parole) in cui un personaggio vive una giornata piena di imprevisti. Usa almeno dieci modi di dire e due proverbi, in modo naturale. Poi sottolinea (o scrivi tra parentesi) ogni modo di dire.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: modi di dire", ["costare un occhio della testa", "avere le mani bucate", "acqua in bocca", "essere al verde", "ogni morte di papa", "in bocca al lupo"], "Ascolta e scrivi."),
          k.dettato("Dettato: proverbi", ["Chi dorme non piglia pesci.", "Tra il dire e il fare c'è di mezzo il mare.", "L'abito non fa il monaco.", "Non tutto il male vien per nuocere.", "Meglio un uovo oggi che una gallina domani."]),
          k.media([
            { type: "Film", title: "Amici miei (Mario Monicelli, 1975)", where: "Cerca dove vederlo su JustWatch", why: "Cinque amici fiorentini e i loro scherzi: un classico pieno di espressioni colloquiali e giochi di parole." },
            { type: "YouTube", title: "Learn Italian with Lucrezia", where: "YouTube", why: "Cerca i video sui modi di dire italiani: spiegazioni chiare con esempi della vita quotidiana." },
            { type: "Podcast", title: "Podcast Italiano (Davide Gemello)", where: "podcastitaliano.com o app di podcast", why: "Episodi in italiano per studenti di livello intermedio e avanzato, anche su espressioni e lingua colloquiale." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Quali modi di dire hai sentito nel film o nel video? Spiegane tre e inventa una situazione in cui usarli.", items: ["Ho sentito…"] },
        ],
      },
    ],

    exam: k.exam(70, {
      parole: ["costare un occhio della testa", "avere le mani bucate", "non avere peli sulla lingua", "acqua in bocca", "essere in gamba", "essere al verde", "passare la notte in bianco", "essere un pesce fuor d'acqua", "fare orecchie da mercante", "ogni morte di papa"],
      contrario: ["avere le mani bucate → contrario (essere…)", "essere al verde → contrario (essere…)", "stare con le mani in mano → contrario", "vedere tutto rosa → contrario (vedere tutto…)", "avere la testa fra le nuvole → contrario (avere i piedi…)", "in bocca al lupo → risposta"],
      verbiHint: "Riscrivi con un modo di dire.",
      verbiCols: ["modo di dire"],
      verbi: [["Non ha più soldi.", ""], ["È molto arrabbiato.", ""], ["Dice tutto quello che pensa.", ""], ["È distratta.", ""], ["Non ha dormito tutta la notte.", ""], ["Mangia moltissimo.", ""]],
      completaHint: "Completa il modo di dire o il proverbio.",
      completa: ["Chi dorme non piglia ___.", "Tra il dire e il fare c'è di mezzo il ___.", "L'abito non fa il ___.", "A caval donato non si guarda in ___.", "Ho una fame da ___.", "Ho preso due piccioni con una ___.", "Questa borsa costa un occhio della ___.", "Non tutto il male vien per ___."],
      trasformaHint: "Per ogni situazione scrivi il modo di dire o il proverbio adatto.",
      trasforma: ["Hai comprato una casa troppo cara per te.", "Il regalo non ti piace, ma non devi lamentarti.", "Non dire a nessuno della festa a sorpresa.", "Il tuo amico parte per un esame.", "Il collega finge di non sentire le tue richieste.", "Hai perso l'autobus e hai incontrato un vecchio amico."],
      leggi: {
        text: [
          "Una ricerca linguistica ha rivelato che i giovani italiani usano sempre meno i proverbi tradizionali. «Chi dorme non piglia pesci» o «Meglio un uovo oggi che una gallina domani» suonano, per molti ventenni, come frasi da nonni.",
          "Al loro posto si diffondono nuove espressioni, spesso nate sui social o prese dall'inglese. Eppure alcuni modi di dire resistono benissimo: «in bocca al lupo», «essere al verde» e «costare un occhio della testa» sono conosciuti e usati da tutte le generazioni.",
          "Secondo i linguisti, è normale: la lingua cambia, e i modi di dire che sopravvivono sono quelli che descrivono situazioni sempre attuali, come i soldi, la fortuna e la fame.",
        ],
        questions: ["Che cosa ha rivelato la ricerca?", "Come percepiscono i proverbi molti ventenni?", "Quali espressioni si diffondono al loro posto?", "Quali modi di dire resistono? Perché, secondo i linguisti?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Hai sentito? Marco ha lasciato il lavoro e ha aperto un ristorante." },
          { who: "Carlo", text: "Davvero? Ma non aveva soldi: era sempre al verde!" },
          { who: "Anna", text: "Ha chiesto un prestito. Speriamo che non abbia fatto il passo più lungo della gamba." },
          { who: "Carlo", text: "Beh, chi non risica non rosica. E poi Marco è in gamba." },
        ],
        questions: ["Che cosa ha fatto Marco?", "Perché Carlo è sorpreso?", "Che cosa teme Anna?", "Che cosa risponde Carlo? Che cosa significa il proverbio che usa?"],
      },
      parla: ["Spiega tre modi di dire italiani con un esempio.", "Racconta un episodio con un proverbio.", "Confronta un modo di dire della tua lingua con uno italiano.", "Quando è meglio evitare i modi di dire?"],
      role: ["L'IA ti racconta tre problemi.", "Commenta ognuno con un modo di dire o un proverbio adatto.", "Chiudi con un augurio."],
      dettato: ["essere al verde", "acqua in bocca", "in bocca al lupo", "ogni morte di papa", "chi dorme non piglia pesci", "l'abito non fa il monaco"],
      traduci: ["Spende moltissimo.", "Costa tantissimo.", "È bravissimo.", "Non dirlo a nessuno.", "È sempre distratto.", "Finge di non sentire."],
      scrivi: { hint: "Scrivi (180–220 parole) una mail a un amico in cui racconti un periodo difficile ma finito bene. Usa almeno sei modi di dire e un proverbio.", start: "Caro…, non sai che mese ho passato!" },
    }),
  };
})();
