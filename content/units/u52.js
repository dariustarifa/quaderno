// Unità 52 · Lavoro e diritti — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[52] = {
    n: 52,
    level: "B1",
    title: "Lavoro e diritti",
    goal: "Parlare di condizioni di lavoro e di diritti, spiegando cause e conseguenze con i connettivi causali e consecutivi.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di lavoro in modo più approfondito: contratti, stipendi, sindacati, scioperi, ferie e diritti, e a discutere dei problemi del mondo del lavoro.",
              "Grammatica: i connettivi causali (perché, poiché, siccome, dato che, visto che, a causa di, grazie a) e consecutivi (quindi, perciò, per questo, così… che, tanto… che, di conseguenza).",
              "Cultura: il Primo Maggio, lo Statuto dei lavoratori e il «Concertone» di Roma.",
            ],
          },
          {
            kind: "intro", title: "Siccome…, quindi…", hint: "Un'anticipazione: causa e conseguenza",
            text: ["Causa: «Siccome lo stipendio è basso, cerco un altro lavoro». «Siccome» si mette all'inizio della frase.", "Conseguenza: «Lo stipendio è basso, quindi cerco un altro lavoro»."],
            examples: [
              { it: "Dato che c'era sciopero, sono andato a piedi.", es: "dato che = causa" },
              { it: "Ha lavorato tanto che si è ammalato.", es: "tanto… che = conseguenza" },
              { it: "Grazie al sindacato, abbiamo avuto un aumento.", es: "grazie a + nome (causa positiva)" },
            ],
          },
          { kind: "speak", title: "Il lavoro ideale", hint: "Prima di cominciare: che cosa è più importante per te in un lavoro: lo stipendio, il tempo libero, la stabilità, la passione?", items: ["Per me la cosa più importante è…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il mondo del lavoro", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il datore di lavoro", "il dipendente", "il lavoratore autonomo", "il libero professionista", "il sindacato",
              "lo sciopero", "il contratto collettivo", "la busta paga", "lo stipendio netto", "lo stipendio lordo",
              "la tredicesima", "le ferie", "il congedo di maternità", "gli straordinari", "il licenziamento",
              "il precariato", "la disoccupazione", "la pensione", "la sicurezza sul lavoro", "il lavoro nero",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["licenziare → (sostantivo)", "assumere → (sostantivo)", "scioperare → (sostantivo)", "disoccupato → (sostantivo)", "pensione → (persona)", "sindacato → (persona)", "precario → (sostantivo)", "lavorare → (persona: chi lavora)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: siccome → Siccome c'era sciopero, i treni erano fermi.", items: ["siccome", "dato che", "a causa di", "grazie a", "quindi", "per questo", "così… che", "di conseguenza"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Argomentare a voce", hint: "Pronuncia e ritmo",
            text: [
              "Quando spieghi una causa, metti l'accento sulla parola importante: «Siccome il CONTRATTO scade, devo decidere».",
              "Le parole «poiché», «perché», «affinché» si scrivono con l'accento acuto (é) e hanno l'accento sull'ultima sillaba.",
              "Negli slogan delle manifestazioni si parla con ritmo e ripetizioni: «Il lavoro è un diritto!».",
            ],
          },
          { kind: "shadow", title: "Causa e conseguenza", hint: "Ripeti con l'accento sulla parola importante.", items: ["Siccome il contratto scade, devo decidere.", "C'era sciopero, quindi siamo venuti a piedi.", "Ho lavorato così tanto che non ho visto i miei figli.", "Grazie al sindacato, abbiamo ottenuto più ferie.", "A causa della crisi, l'azienda ha chiuso."] },
          { kind: "shadow", title: "Slogan", hint: "Ripeti come in una manifestazione.", items: ["Il lavoro è un diritto!", "Più sicurezza, meno morti!", "Stesso lavoro, stesso salario!", "No al lavoro nero!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I connettivi causali", hint: "Perché, poiché, siccome…",
            text: [
              "«Perché»: il più comune, di solito dopo la frase principale: «Cerco lavoro perché sono disoccupato».",
              "«Siccome», «dato che», «visto che»: di solito all'inizio della frase: «Siccome sono disoccupato, cerco lavoro».",
              "«Poiché»: più formale, all'inizio o in mezzo.",
              "«A causa di» + nome (causa negativa) / «grazie a» + nome (causa positiva): «A causa dello sciopero…», «Grazie al nuovo contratto…».",
            ],
            table: { head: ["connettivo", "posizione / uso"], rows: [["perché", "dopo la principale"], ["siccome / dato che", "all'inizio"], ["poiché", "formale"], ["a causa di / grazie a", "+ nome"]] },
          },
          k.table("Connettivi e preposizioni", [
            ["lo sciopero", "a causa dello sciopero", ""],
            ["il sindacato", "", "grazie al sindacato"],
            ["la crisi", "", ""],
            ["i nuovi contratti", "", ""],
            ["l'aumento", "", ""],
          ], "Scrivi «a causa di» e «grazie a» con la preposizione articolata giusta.", ["a causa di…", "grazie a…"]),
          {
            kind: "fill", title: "Perché, siccome, a causa di…", hint: "Completa con il connettivo causale giusto.",
            items: [
              "___ il treno era in ritardo, sono arrivato tardi al lavoro.", "Ho cambiato lavoro ___ lo stipendio era troppo basso.", "___ della pioggia, la manifestazione è stata rinviata.", "___ all'accordo con il sindacato, avremo una settimana di ferie in più.", "___ non avevi il contratto firmato, non potevi lamentarti.", "La fabbrica ha chiuso ___ della concorrenza straniera.", "Non posso uscire stasera ___ devo fare gli straordinari.", "___ siamo tutti d'accordo, possiamo firmare.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I connettivi consecutivi", hint: "Quindi, perciò, così… che",
            text: [
              "«Quindi», «perciò», «per questo», «di conseguenza», «allora»: introducono la conseguenza: «Lo stipendio è basso, quindi cerco altro».",
              "«Così / tanto + aggettivo o avverbio + che»: «Era così stanco che si è addormentato in ufficio».",
              "«Talmente… che», «a tal punto che»: più forti. «Ha lavorato a tal punto che si è ammalato».",
              "«Cosicché» (formale) = in modo che come conseguenza: «Hanno ridotto l'orario, cosicché molti hanno perso parte dello stipendio».",
            ],
          },
          {
            kind: "fill", title: "Conseguenze", hint: "Completa con quindi, perciò, così… che, tanto… che o di conseguenza.",
            items: ["Il contratto è scaduto, ___ devo cercare un altro lavoro.", "Il lavoro era ___ stressante ___ ha deciso di licenziarsi.", "L'azienda ha perso molti clienti; ___, ha ridotto il personale.", "Guadagnavo ___ poco ___ non riuscivo a pagare l'affitto.", "C'è sciopero dei mezzi, ___ andiamo in bicicletta.", "Ha lavorato ___ ___ si è dimenticato di mangiare."],
          },
          {
            kind: "intro", title: "Spiegare un problema", hint: "Formule utili",
            text: ["«Il problema nasce dal fatto che…», «La causa principale è…», «Questo comporta che…» (+ congiuntivo), «Ne consegue che…», «Il risultato è che…»."],
          },
          k.negativa(["Lo stipendio è basso. Cerco un altro lavoro. (siccome)", "C'è sciopero. I treni non partono. (quindi)", "Era molto stanco. Si è addormentato. (così… che)", "La crisi ha colpito l'azienda. Hanno chiuso. (a causa di)", "Il sindacato ha negoziato. Abbiamo più ferie. (grazie a)", "Non ho un contratto. Non ho diritti. (dato che)"], "Unisci le due frasi con il connettivo indicato.", "una sola frase"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Lo sciopero", "Una conversazione tra due colleghe prima di uno sciopero.", [
            { who: "Marta", text: "Domani fai sciopero anche tu?" },
            { who: "Daniela", text: "Sì. Siccome il contratto nazionale è scaduto da due anni, il sindacato ha proclamato otto ore di sciopero." },
            { who: "Marta", text: "Io non so… perdo una giornata di stipendio e a fine mese sono già in difficoltà." },
            { who: "Daniela", text: "Ti capisco, ma se nessuno sciopera, non cambierà niente. Grazie agli scioperi degli anni scorsi abbiamo ottenuto la mensa e le ferie in più." },
            { who: "Marta", text: "È vero. Però i prezzi sono aumentati così tanto che ogni euro conta." },
            { who: "Daniela", text: "Appunto, per questo chiediamo un aumento. Pensaci stasera." },
          ], ["Perché il sindacato ha proclamato lo sciopero?", "Perché Marta è indecisa?", "Che cosa hanno ottenuto grazie agli scioperi passati?", "Che problema hanno con i prezzi?", "Perché, secondo Daniela, bisogna scioperare?"]),
          k.listen("Il primo lavoro", "Un ragazzo racconta la sua prima esperienza di lavoro alla radio.", [
            { who: "Simone", text: "Il mio primo lavoro è stato in un ristorante, a diciannove anni. Lavoravo in nero: niente contratto, niente contributi." },
            { who: "Simone", text: "Siccome avevo bisogno di soldi, accettavo tutto: dodici ore al giorno, anche la domenica." },
            { who: "Simone", text: "Un giorno mi sono fatto male in cucina e, dato che non ero assicurato, ho dovuto pagare tutto io." },
            { who: "Simone", text: "Per questo oggi, quando cerco lavoro, chiedo sempre per prima cosa il contratto. E consiglio a tutti di fare lo stesso." },
          ], ["Dove ha lavorato Simone per la prima volta?", "Che cosa significa che lavorava «in nero»?", "Perché accettava quelle condizioni?", "Che cosa è successo quando si è fatto male?", "Che cosa fa oggi? Che cosa consiglia?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il Primo Maggio e i diritti dei lavoratori", [
            "Il primo maggio in Italia è la Festa dei lavoratori. Dal 1990, a Roma, in piazza San Giovanni si organizza un grande concerto gratuito, il «Concertone», che dura tutto il pomeriggio e la sera.",
            "La festa ricorda le lotte per i diritti dei lavoratori, come la giornata di otto ore. In Italia una tappa fondamentale è stata lo Statuto dei lavoratori del 1970, una legge che ha protetto la libertà sindacale e la dignità dei dipendenti.",
            "I sindacati più grandi sono la CGIL, la CISL e la UIL. Negoziano con i datori di lavoro i contratti collettivi nazionali, che stabiliscono stipendi minimi, orari e ferie per ogni settore.",
            "Oggi però i problemi sono diversi: il precariato, cioè i contratti brevi e incerti, gli stipendi che crescono poco rispetto ai prezzi e il lavoro nero, ancora diffuso in alcuni settori.",
            "Anche la sicurezza è un tema centrale: siccome ogni anno ci sono ancora molti morti sul lavoro, i sindacati chiedono più controlli e più formazione.",
          ], ["Che cos'è il «Concertone»? Dove e da quando si fa?", "Che cosa ricorda la festa del Primo Maggio?", "Che cos'è lo Statuto dei lavoratori?", "Che cosa fanno i sindacati?", "Quali sono i problemi di oggi?", "Perché la sicurezza è un tema centrale?"]),
          k.spagna("Come si festeggia il Primo Maggio nel tuo paese? Quali sono i problemi principali del lavoro? Usa almeno cinque connettivi causali o consecutivi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Negoziare al lavoro", hint: "Formule utili",
            text: ["Chiedere: «Vorrei parlare delle mie condizioni», «Dato che lavoro qui da tre anni, credo di meritare…», «Sarebbe possibile…?».", "Argomentare: «Visto che i risultati sono buoni…», «Considerando che…», «Per questo motivo chiedo…»."],
          },
          k.rispondi(["Che cosa ti piace e che cosa non ti piace del tuo lavoro o dei tuoi studi?", "Hai mai fatto uno sciopero? Perché?", "Che cosa pensi del lavoro precario?", "È meglio un lavoro stabile e noioso o uno precario e appassionante?", "Quali diritti dei lavoratori sono più importanti, secondo te?", "Come cambierà il lavoro nei prossimi vent'anni?"]),
          { kind: "speak", title: "Cause e conseguenze", hint: "Spiega cause e conseguenze di ogni situazione, con almeno due connettivi diversi.", items: ["i giovani che vanno a lavorare all'estero", "lo smart working", "gli stipendi bassi", "il lavoro nero", "la settimana di quattro giorni", "l'intelligenza artificiale nel lavoro"] },
          {
            kind: "roleplay", title: "La richiesta di aumento", hint: "Chiedi un aumento al tuo responsabile (l'IA), che è gentile ma dice che l'azienda ha pochi soldi. Usa il «Lei».",
            steps: ["Spiega perché chiedi l'incontro.", "Argomenta con i tuoi risultati (dato che, visto che…).", "Rispondi alle sue obiezioni.", "Proponi un'alternativa (più ferie, smart working…).", "Concludete con un accordo."],
          },
          {
            kind: "roleplay", title: "Il sindacalista", hint: "Sei un rappresentante sindacale. Convinci un collega (l'IA) a partecipare allo sciopero.",
            steps: ["Spiega perché si fa lo sciopero.", "Ascolta i suoi dubbi.", "Spiega le conseguenze se nessuno partecipa.", "Racconta un risultato ottenuto in passato.", "Rispetta la sua decisione finale."],
          },
          { kind: "speak", title: "Il mio lavoro ideale", hint: "Parla per due minuti del tuo lavoro ideale e spiega perché: condizioni, orari, stipendio, diritti. Usa i connettivi causali e consecutivi.", items: ["Il mio lavoro ideale…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Cerco un altro lavoro perché lo stipendio è basso. (comincia con: Siccome…)", "C'è sciopero e quindi i negozi sono chiusi. (comincia con: Dato che…)", "Era molto stressato e ha lasciato il lavoro. (così… che)", "Hanno chiuso la fabbrica per la crisi. (a causa di)", "Abbiamo più diritti per merito dei sindacati. (grazie a)", "Il contratto è scaduto; devo firmarne un altro. (perciò)", "Lavorava molto e non vedeva mai la famiglia. (tanto… che)", "L'azienda ha perso clienti e ha licenziato. (di conseguenza)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Lettera al giornale", hint: "Scrivi una lettera (220–250 parole) a un giornale su un problema del lavoro (precariato, stipendi, sicurezza, lavoro nero…): spiega le cause, le conseguenze e proponi una soluzione. Usa almeno otto connettivi.", rows: 18, items: ["Gentile direttore,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: connettivi", ["siccome il contratto è scaduto", "a causa dello sciopero", "grazie al sindacato", "così stanco che", "di conseguenza", "dato che lavoro qui"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il lavoro è un diritto.", "Lavorava in nero, senza contratto.", "Domani c'è sciopero dei treni.", "Ho chiesto un aumento.", "Lo stipendio netto è basso."]),
          k.media([
            { type: "Film", title: "La classe operaia va in paradiso (Elio Petri, 1971)", where: "Cerca dove vederlo su JustWatch", why: "Un operaio stakanovista perde un dito e cambia completamente idea sul lavoro. Palma d'oro a Cannes." },
            { type: "Film", title: "Tutta la vita davanti (Paolo Virzì, 2008)", where: "Cerca dove vederlo su JustWatch", why: "Se non l'hai visto nell'unità 23: il precariato nei call center, con ironia." },
            { type: "Programma", title: "Concerto del Primo Maggio", where: "RaiPlay, YouTube", why: "Guarda qualche esibizione e ascolta i discorsi tra una canzone e l'altra." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Quali problemi del lavoro mostra il film? Quali sono le cause e le conseguenze?", items: ["Nel film, siccome…"] },
        ],
      },
    ],

    exam: k.exam(52, {
      parole: ["il datore di lavoro", "il sindacato", "la busta paga", "lo stipendio lordo", "la tredicesima", "gli straordinari", "il precariato", "il lavoro nero", "il congedo di maternità", "il contratto collettivo"],
      contrario: ["licenziare → sostantivo", "assumere → sostantivo", "scioperare → sostantivo", "disoccupato → sostantivo", "netto → contrario", "precario → contrario"],
      verbiHint: "Scrivi «a causa di» e «grazie a» con la preposizione articolata giusta.",
      verbiCols: ["a causa di…", "grazie a…"],
      verbi: [["il traffico", "", ""], ["la riforma", "", ""], ["gli scioperi", "", ""], ["l'orario flessibile", "", ""]],
      completaHint: "Completa con il connettivo causale o consecutivo giusto.",
      completa: ["___ non avevo il contratto, non potevo protestare.", "L'azienda ha chiuso ___ della crisi.", "Il lavoro era ___ faticoso ___ si è ammalato.", "Non c'erano treni, ___ sono andato in bici.", "___ al nuovo contratto, abbiamo più ferie.", "Cerco lavoro ___ sono disoccupato da sei mesi.", "I prezzi aumentano; ___, gli stipendi valgono meno.", "___ siamo tutti d'accordo, possiamo cominciare."],
      trasformaHint: "Unisci le due frasi con il connettivo indicato.",
      trasforma: ["Guadagno poco. Cambio lavoro. (siccome)", "C'è sciopero. Non ci sono autobus. (perciò)", "Era molto arrabbiato. Ha lasciato la riunione. (così… che)", "C'era lo sciopero. Il traffico era fermo. (a causa di)", "L'accordo è stato firmato. Abbiamo un aumento. (grazie a)", "Lavoro qui da dieci anni. Merito un aumento. (visto che)"],
      leggi: {
        text: [
          "Domani i lavoratori dei trasporti incrociano le braccia per otto ore. Siccome il contratto nazionale è scaduto da tre anni, i sindacati chiedono un aumento degli stipendi e più sicurezza.",
          "A causa dello sciopero, treni e autobus potrebbero non circolare dalle 9 alle 17. Sono garantite solo le fasce del mattino e della sera, perciò si consiglia di organizzarsi in anticipo.",
          "L'azienda dei trasporti dice che le richieste sono troppo alte e che, di conseguenza, rischierebbe di aumentare il prezzo dei biglietti.",
        ],
        questions: ["Chi fa sciopero domani? Per quanto tempo?", "Perché i sindacati scioperano?", "Che conseguenze avrà lo sciopero?", "Che cosa dice l'azienda?"],
      },
      ascolta: {
        script: [
          { who: "Elena", text: "Ho lasciato il lavoro in banca." },
          { who: "Luca", text: "Davvero? Perché?" },
          { who: "Elena", text: "Siccome facevo straordinari tutte le sere, non vedevo mai mio figlio. Ero così stanca che non dormivo più." },
          { who: "Luca", text: "E adesso?" },
          { who: "Elena", text: "Adesso lavoro part-time in una cooperativa: guadagno meno, ma grazie all'orario flessibile sono molto più serena." },
        ],
        questions: ["Che cosa ha fatto Elena?", "Perché?", "Come stava?", "Che lavoro fa adesso? Che cosa è cambiato?"],
      },
      parla: ["Spiega cause e conseguenze della fuga dei giovani all'estero.", "Racconta un'esperienza di lavoro difficile.", "Che cosa pensi degli scioperi?", "Descrivi il tuo lavoro ideale e perché."],
      role: ["Chiedi un aumento all'IA, che fa il tuo capo.", "Argomenta con almeno tre connettivi causali.", "Trovate un accordo."],
      dettato: ["siccome era tardi", "a causa della crisi", "grazie al sindacato", "così stanco che", "di conseguenza", "il lavoro nero"],
      traduci: ["Guadagno poco, quindi cerco altro. (comincia con: Siccome…)", "Era molto stressata e ha lasciato il lavoro. (così… che)", "Per colpa dello sciopero sono arrivato tardi. (a causa di)", "Per merito del sindacato abbiamo la mensa. (grazie a)", "Lavoro qui da anni e merito di più. (visto che)", "Il contratto è finito; devo trovare un lavoro. (perciò)"],
      scrivi: { hint: "Scrivi un'email formale (150–180 parole) al tuo responsabile per chiedere la riduzione dell'orario: spiega le cause e le conseguenze positive per l'azienda.", start: "Gentile dottor Ferri," },
    }),
  };
})();
