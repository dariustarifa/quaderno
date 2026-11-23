// Unità 76 · Salute pubblica — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[76] = {
    n: 76,
    level: "B2",
    title: "Salute pubblica",
    goal: "Parlare di salute, prevenzione e sanità pubblica usando con sicurezza le costruzioni impersonali (ci si cura, si è più stanchi, bisogna che, uno non sa mai…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare della salute come tema sociale: il sistema sanitario, la prevenzione, gli stili di vita, le campagne di informazione.",
              "Grammatica: le costruzioni impersonali avanzate. Il «si» impersonale con i verbi riflessivi («ci si sveglia»), con «essere» e gli aggettivi («si è più stanchi»), nei tempi composti («si è mangiato bene», «ci si è divertiti»); e gli altri modi di generalizzare: bisogna, occorre, è necessario, «uno», «la gente», il «tu» generico.",
            ],
          },
          {
            kind: "intro", title: "Parlare in generale", hint: "Un'anticipazione",
            examples: [
              { it: "Quando si invecchia, ci si stanca più facilmente.", es: "si impersonale con verbo riflessivo: ci si" },
              { it: "Dopo una malattia si è più deboli.", es: "si + essere + aggettivo plurale" },
              { it: "Bisogna che tutti si vaccinino.", es: "bisogna che + congiuntivo" },
              { it: "Uno non sa mai che cosa può succedere.", es: "«uno» impersonale" },
            ],
            text: ["Sono le strutture tipiche delle campagne di salute pubblica e dei consigli medici."],
          },
          { kind: "speak", title: "Salute e te", hint: "Prima di cominciare: che cosa fai per restare in salute? Come funziona la sanità nel tuo paese?", items: ["Per stare bene, io…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della salute pubblica", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il Servizio Sanitario Nazionale", "il medico di base", "il pronto soccorso", "la lista d'attesa", "il ticket",
              "la prevenzione", "lo screening", "la vaccinazione", "l'epidemia", "il contagio",
              "lo stile di vita", "la sedentarietà", "l'obesità", "la dieta mediterranea", "la salute mentale",
              "la campagna di sensibilizzazione", "ricoverare", "dimettere (un paziente)", "prescrivere", "l'aspettativa di vita",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["prevenire → (sostantivo)", "contagiare → (sostantivo)", "vaccinare → (sostantivo)", "ricoverare → (sostantivo)", "sedentario → (sostantivo)", "prescrivere → (sostantivo)", "sano → (sostantivo)", "curare → (sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione, sulla sanità del tuo paese.", items: ["il medico di base", "la lista d'attesa", "il pronto soccorso", "la prevenzione", "lo stile di vita", "la salute mentale", "l'aspettativa di vita", "pagare il ticket"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ci si, si è", hint: "Pronuncia delle forme impersonali",
            text: [
              "«Ci si» si pronuncia tutto legato al verbo: «ci-si-àl-za». Non dire «si si».",
              "Nelle forme composte l'ausiliare è sempre «essere»: «si è mangiato», «ci si è divertiti».",
              "Le campagne di salute usano frasi brevi e ritmate: «Più ci si muove, meglio si sta».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Fluido, senza pause.", items: ["Ci si sveglia presto.", "Quando si è stanchi, si sbaglia di più.", "Ci si è divertiti molto.", "Più ci si muove, meglio si sta.", "Uno non sa mai."] },
          { kind: "shadow", title: "Campagne", hint: "Con il tono di una pubblicità progresso.", items: ["Prevenire è meglio che curare.", "Bisogna lavarsi spesso le mani.", "Occorre fare movimento ogni giorno.", "Non si deve guidare dopo aver bevuto."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il «si» impersonale avanzato", hint: "Casi difficili",
            text: [
              "Con i verbi riflessivi si usa «ci si»: alzarsi → ci si alza, vestirsi → ci si veste. (Non «si si»!)",
              "Con «essere» o «diventare» + aggettivo, l'aggettivo va al plurale maschile: «Quando si è giovani, si è più forti». «Si diventa più saggi».",
              "Nei tempi composti l'ausiliare è sempre «essere». Il participio: invariabile (-o) se il verbo vuole «avere» («si è mangiato bene»); al plurale (-i) se il verbo vuole «essere» («si è arrivati tardi», «ci si è divertiti»).",
            ],
            table: { head: ["verbo", "si impersonale"], rows: [["alzarsi", "ci si alza"], ["essere stanco", "si è stanchi"], ["mangiare (passato)", "si è mangiato"], ["partire (passato)", "si è partiti"], ["divertirsi (passato)", "ci si è divertiti"]] },
          },
          k.table("Al «si» impersonale", [
            ["La gente si sveglia presto in campagna.", "In campagna ci si sveglia presto."],
            ["Quando siamo malati, siamo deboli.", ""],
            ["Abbiamo mangiato benissimo.", ""],
            ["Siamo arrivati in ospedale alle tre.", ""],
            ["Ci siamo stancati molto.", ""],
            ["Quando invecchiamo, diventiamo più prudenti.", ""],
          ], "Riscrivi ogni frase con il «si» impersonale.", ["si impersonale"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con il «si» impersonale al tempo giusto (attenzione a «ci si» e agli aggettivi plurali).",
            items: [
              "Quando ___ (essere) stressati, ___ (dormire) male.", "In vacanza ___ (rilassarsi) di più.", "Ieri sera ___ (mangiare) troppo.", "Dopo l'intervento ___ (sentirsi) deboli per giorni.", "Più ___ (muoversi), meglio ___ (stare).", "Alla festa ___ (divertirsi) moltissimo.", "Da giovani ___ (essere) più spensierati.", "In ospedale ___ (arrivare) tardi per colpa del traffico.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Altri modi di generalizzare", hint: "Bisogna, occorre, uno, la gente, tu",
            text: [
              "«Bisogna / occorre / è necessario / è importante + infinito» per una regola generale: «Bisogna fare movimento».",
              "«Bisogna / occorre / è necessario che + congiuntivo» con un soggetto preciso: «Bisogna che tutti si vaccinino».",
              "«Uno» (parlato): «Uno lavora tutta la vita e poi…». «La gente» + verbo singolare: «La gente ha paura». «Tu» generico (parlato): «Quando sei malato, non hai voglia di niente».",
              "Forme passive impersonali (avvisi, regole): «È vietato fumare», «È consigliato bere molta acqua», «Si raccomanda di…».",
            ],
          },
          k.negativa(["Dobbiamo tutti lavarci spesso le mani. (bisogna + infinito)", "I cittadini devono fare gli screening. (è necessario che)", "Le persone hanno paura degli ospedali. (la gente)", "Se una persona lavora troppo, si ammala. (uno)", "Non fumate qui. (è vietato)", "Vi consigliamo di bere due litri d'acqua. (si raccomanda di)"], "Riscrivi ogni frase con la struttura impersonale indicata.", "impersonale"),
          {
            kind: "intro", title: "Il linguaggio delle campagne", hint: "Pubblicità progresso",
            text: ["Le campagne di salute pubblica usano frasi impersonali, brevi e positive: «Prevenire è meglio che curare», «Più ci si muove, meglio si sta», «Un controllo ti salva la vita». Spesso alternano il «si» impersonale con il «tu» per sembrare più vicine."],
          },
          {
            kind: "fill", title: "Completa la campagna", hint: "Completa con la forma impersonale adatta.",
            items: ["___ (bisognare) fare un controllo ogni anno.", "Quando ___ (essere) giovani, ___ (pensare) di essere invincibili.", "È importante che tutti ___ (fare) movimento.", "Non ___ (dovere) mai sottovalutare un sintomo.", "___ (essere) vietato fumare nei luoghi pubblici.", "Con la dieta mediterranea ___ (vivere) più a lungo."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Dal medico di base", "Un paziente va dal suo medico di famiglia.", [
            { who: "Dott.ssa Fumagalli", text: "Allora, signor Ricci, che cosa la porta qui?" },
            { who: "Sig. Ricci", text: "Mah, dottoressa, mi sento sempre stanco. Uno lavora, torna a casa, e non ha più energie." },
            { who: "Dott.ssa Fumagalli", text: "Capisco. Quanto si muove durante la giornata?" },
            { who: "Sig. Ricci", text: "Poco. In ufficio si sta seduti otto ore, e la sera ci si butta sul divano." },
            { who: "Dott.ssa Fumagalli", text: "Ecco. Quando si è sedentari, ci si stanca di più, non di meno. Bisogna che lei cammini almeno trenta minuti al giorno. E le prescrivo anche gli esami del sangue, per sicurezza." },
            { who: "Sig. Ricci", text: "Devo pagare il ticket?" },
            { who: "Dott.ssa Fumagalli", text: "Sì, una piccola parte. Ma prevenire costa sempre meno che curare." },
          ], ["Di che cosa si lamenta il signor Ricci?", "Com'è la sua giornata tipo?", "Che cosa gli spiega la dottoressa?", "Che cosa gli consiglia e che cosa gli prescrive?", "Che cosa dice sul ticket?", "Trova tutte le costruzioni impersonali."]),
          k.listen("La campagna", "Uno spot radiofonico del Ministero.", [
            { who: "Voce", text: "D'estate si sta all'aperto, ci si diverte, si viaggia. Ma con il caldo si rischia anche di più." },
            { who: "Voce", text: "È importante bere spesso, anche quando non si ha sete. È consigliato evitare il sole nelle ore più calde." },
            { who: "Voce", text: "E bisogna che nessuno resti solo: se hai un vicino anziano, bussa alla sua porta." },
            { who: "Voce", text: "Contro il caldo, ci si protegge insieme." },
          ], ["Di quale rischio parla lo spot?", "Che cosa è importante fare?", "Che cosa è consigliato evitare?", "Che cosa si chiede di fare per gli anziani?", "Perché lo spot alterna il «si» impersonale e il «tu»?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Una sanità per tutti", [
            "Il Servizio Sanitario Nazionale italiano nacque con una legge approvata alla fine del 1978. A firmarla fu Tina Anselmi, la prima donna ministro nella storia della Repubblica. Da allora, in Italia ci si cura in base ai propri bisogni, non in base al proprio reddito.",
            "Il principio è l'universalità: tutti i residenti hanno diritto a un medico di base, alle cure ospedaliere e alle medicine essenziali. Si paga attraverso le tasse e, per alcune prestazioni, con un contributo chiamato ticket.",
            "Il sistema ha ottenuto risultati importanti: l'Italia è tra i paesi con l'aspettativa di vita più alta al mondo. Naturalmente, non dipende solo dagli ospedali: contano anche lo stile di vita e la dieta mediterranea, riconosciuta dall'UNESCO come patrimonio immateriale dell'umanità.",
            "Non mancano però i problemi. Le liste d'attesa possono essere lunghe, la qualità dei servizi cambia molto da regione a regione, e molti medici lasciano il pubblico per il privato o per l'estero. Chi può permetterselo, sempre più spesso, si rivolge alle strutture private.",
            "Gli esperti concordano: bisogna che il sistema venga rafforzato, soprattutto nella prevenzione e nella medicina territoriale, affinché la sanità resti davvero per tutti.",
          ], ["Quando nacque il Servizio Sanitario Nazionale? Chi firmò la legge?", "Qual è il principio fondamentale del sistema?", "Come si paga?", "Quali risultati ha ottenuto l'Italia? Da che cosa dipendono?", "Quali sono i problemi attuali?", "Che cosa propongono gli esperti?"]),
          k.spagna("Come funziona la sanità nel tuo paese? Confrontala con quella italiana: accesso, costi, qualità, problemi. Usa almeno sei costruzioni impersonali."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dare consigli di salute", hint: "Dal generale al personale",
            text: ["Generale: «Si dovrebbe…», «Bisogna…», «È consigliato…». Personale: «Al posto tuo…», «Dovresti…», «Perché non provi a…?». Con prudenza: «Non sono un medico, ma…», «Forse è meglio chiedere a uno specialista»."],
          },
          k.rispondi(["Che cosa si fa nel tuo paese quando si ha l'influenza?", "Quanto si aspetta per una visita specialistica?", "Che cosa pensi della sanità privata?", "Segui la dieta mediterranea? Che cosa mangi di solito?", "Che cosa si dovrebbe fare per la salute mentale dei giovani?", "Quali campagne di salute pubblica ricordi?"]),
          { kind: "speak", title: "La campagna", hint: "Inventa in un minuto uno spot di salute pubblica su un tema (sonno, movimento, schermi, alimentazione), con almeno cinque costruzioni impersonali.", items: ["Quando si dorme poco…"] },
          {
            kind: "roleplay", title: "Al pronto soccorso", hint: "Accompagni un amico al pronto soccorso. L'IA è l'infermiere del triage.",
            steps: ["Spiega che cosa è successo.", "Descrivi i sintomi.", "Chiedi quanto si deve aspettare.", "Chiedi che cosa bisogna fare con i documenti.", "Ringrazia e chiedi informazioni per le dimissioni."],
          },
          {
            kind: "roleplay", title: "Il dibattito sulla sanità", hint: "L'IA sostiene che la sanità dovrebbe essere soprattutto privata. Tu difendi la sanità pubblica.",
            steps: ["Presenta la tua posizione.", "Usa un dato o un esempio (l'aspettativa di vita, le liste d'attesa).", "Ammetti un problema del sistema pubblico.", "Proponi due soluzioni con «bisogna che».", "Concludete con un punto in comune."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di come si vive in modo sano nel tuo paese: abitudini, alimentazione, sport, problemi.", items: ["Nel mio paese si…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["La gente si alza presto in campagna. (si impersonale)", "Quando siamo stanchi, sbagliamo. (si impersonale)", "Ci siamo divertiti alla festa. (si impersonale)", "Tutti devono vaccinarsi. (bisogna che)", "Le persone hanno paura dei medici. (la gente)", "Non usate il telefono in sala d'attesa. (è vietato)", "Se una persona non dorme, si ammala. (uno)", "Vi consigliamo di bere molta acqua. (è consigliato)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Un opuscolo informativo", hint: "Scrivi un opuscolo informativo (280–320 parole) per una campagna di salute pubblica (prevenzione cardiovascolare, sonno, salute mentale, uso degli schermi…): perché il tema è importante, che cosa si deve fare, che cosa si deve evitare, a chi ci si può rivolgere. Usa almeno dieci costruzioni impersonali diverse.", rows: 20, items: ["Titolo della campagna:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["ci si sveglia", "si è stanchi", "ci si è divertiti", "bisogna che", "è vietato fumare", "il medico di base"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Prevenire è meglio che curare.", "Più ci si muove, meglio si sta.", "Quando si è giovani, ci si sente invincibili.", "Bisogna che tutti facciano gli screening.", "Uno non sa mai che cosa può succedere."]),
          k.media([
            { type: "Film", title: "Il medico della mutua (Luigi Zampa, 1968)", where: "Cerca dove vederlo su JustWatch", why: "Alberto Sordi interpreta un giovane medico ambizioso che colleziona pazienti: satira della sanità degli anni Sessanta." },
            { type: "Serie", title: "DOC – Nelle tue mani (Rai 1)", where: "raiplay.it", why: "Serie ambientata in un ospedale milanese: lessico medico, rapporti tra medici e pazienti." },
            { type: "Sito", title: "Ministero della Salute", where: "salute.gov.it", why: "Leggi una campagna di prevenzione e annota le costruzioni impersonali." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che immagine della sanità italiana danno il film o la serie? Come è cambiata dagli anni Sessanta a oggi?", items: ["Nel film si vede che…"] },
        ],
      },
    ],

    exam: k.exam(76, {
      parole: ["il medico di base", "il pronto soccorso", "la lista d'attesa", "il ticket", "la prevenzione", "lo screening", "la sedentarietà", "la salute mentale", "ricoverare", "l'aspettativa di vita"],
      contrario: ["prevenire → sostantivo", "sano → contrario", "ricoverare → contrario (dimettere)", "pubblico → contrario", "sedentario → contrario", "contagiare → sostantivo"],
      verbiHint: "Riscrivi con il «si» impersonale.",
      verbiCols: ["si impersonale"],
      verbi: [["Ci alziamo presto.", ""], ["Siamo stanchi.", ""], ["Abbiamo mangiato bene.", ""], ["Siamo partiti tardi.", ""], ["Ci siamo annoiati.", ""], ["Diventiamo vecchi.", ""]],
      completaHint: "Completa con la forma impersonale giusta.",
      completa: ["Quando ___ (essere) malati, ___ (riposarsi).", "Ieri ___ (camminare) per tre ore.", "In montagna ___ (sentirsi) meglio.", "___ (bisognare) che tutti si lavino le mani.", "La gente ___ (avere) paura delle malattie.", "___ (essere) vietato fumare in ospedale.", "Alla cena ___ (divertirsi) molto.", "Da anziani ___ (diventare) più fragili."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Dobbiamo tutti fare movimento. (bisogna + infinito)", "Tutti i bambini devono vaccinarsi. (è necessario che)", "Le persone si lamentano delle liste d'attesa. (la gente)", "Se lavori troppo, ti ammali. (uno)", "Non entrate senza mascherina. (è vietato)", "Ci siamo svegliati presto. (si impersonale)"],
      leggi: {
        text: [
          "Secondo un recente rapporto, in Italia si dorme sempre meno: molti adulti dormono meno di sei ore per notte, soprattutto a causa dello stress e degli schermi.",
          "Quando si dorme poco, ci si concentra peggio, si è più irritabili e ci si ammala più facilmente. Gli esperti raccomandano di spegnere telefoni e computer almeno un'ora prima di andare a letto.",
          "Bisogna anche che le aziende rispettino il diritto alla disconnessione: non si dovrebbero ricevere mail di lavoro alle undici di sera.",
        ],
        questions: ["Che cosa dice il rapporto sul sonno degli italiani?", "Quali sono le cause?", "Che cosa succede quando si dorme poco?", "Che cosa raccomandano gli esperti? Che cosa si chiede alle aziende?"],
      },
      ascolta: {
        script: [
          { who: "Infermiera", text: "Buongiorno. Qui al pronto soccorso si aspetta in base alla gravità, non all'ordine di arrivo." },
          { who: "Paziente", text: "E quanto si deve aspettare, più o meno?" },
          { who: "Infermiera", text: "Per il suo caso, circa due ore. Bisogna che lei resti in sala d'attesa e che non mangi niente fino alla visita." },
          { who: "Paziente", text: "Va bene. Uno viene per una cosa piccola e ci passa la giornata!" },
        ],
        questions: ["Come si aspetta al pronto soccorso?", "Quanto deve aspettare il paziente?", "Che cosa deve fare nel frattempo?", "Come commenta il paziente?"],
      },
      parla: ["Come funziona la sanità nel tuo paese?", "Che cosa si dovrebbe fare per vivere in modo sano?", "Racconta un'esperienza in ospedale o dal medico.", "Sanità pubblica o privata?"],
      role: ["L'IA è il tuo medico di base.", "Descrivi un problema di salute e ascolta i consigli.", "Chiedi che cosa bisogna fare per gli esami."],
      dettato: ["ci si sveglia", "si è stanchi", "bisogna che", "il medico di base", "la lista d'attesa", "prevenire è meglio che curare"],
      traduci: ["Ci divertiamo in vacanza. (si impersonale)", "Quando siamo giovani, siamo forti. (si impersonale)", "Abbiamo mangiato troppo. (si impersonale)", "Tutti devono fare gli esami. (bisogna che)", "Se una persona non mangia, si indebolisce. (uno)", "Non correte nei corridoi. (è vietato)"],
      scrivi: { hint: "Scrivi (180–220 parole) un decalogo per vivere in modo sano nella tua città, spiegando perché ogni regola è importante. Usa almeno otto costruzioni impersonali diverse.", start: "Per vivere bene a…, bisogna…" },
    }),
  };
})();
