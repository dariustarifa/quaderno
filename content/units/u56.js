// Unità 56 · Presentare un progetto — B1: tutto in italiano. Ripasso integrato. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[56] = {
    n: 56,
    level: "B1",
    title: "Presentare un progetto",
    goal: "Presentare un progetto in pubblico e rispondere alle domande, ripassando tutta la grammatica del livello B1.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Ultima unità del livello B1. Imparerai a presentare un progetto (di lavoro, di studio, di quartiere) davanti a un pubblico: aprire, spiegare, convincere, rispondere alle domande e chiudere.",
              "Ripasso integrato: congiuntivo presente, passato e imperfetto; periodo ipotetico; condizionale passato; futuro anteriore; forma passiva; discorso indiretto; pronomi relativi; gerundio; connettivi.",
              "Alla fine dell'unità sarai pronto per l'esame di livello B1.",
            ],
          },
          {
            kind: "intro", title: "La struttura di una presentazione", hint: "Un'anticipazione",
            text: ["Apertura (saluto, tema, scaletta) → problema → proposta → vantaggi → costi e tempi → conclusione → domande."],
            examples: [
              { it: "Oggi vi presento un progetto che ci sta molto a cuore.", es: "apertura" },
              { it: "Se il comune ci desse lo spazio, potremmo cominciare a marzo.", es: "periodo ipotetico" },
              { it: "Entro giugno avremo finito i lavori.", es: "futuro anteriore" },
              { it: "Il progetto è stato approvato dal consiglio.", es: "forma passiva" },
            ],
          },
          { kind: "speak", title: "Un progetto che ti piacerebbe", hint: "Prima di cominciare: descrivi in un minuto un progetto che ti piacerebbe realizzare (nel lavoro, nel quartiere, nella vita).", items: ["Mi piacerebbe realizzare…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico del progetto", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'obiettivo", "la scaletta", "il preventivo", "il budget", "la scadenza",
              "il finanziamento", "la fase", "i destinatari", "la fattibilità", "il risultato atteso",
              "realizzare", "proporre", "approvare", "finanziare", "coinvolgere",
              "la diapositiva", "il pubblico", "fare il punto", "a lungo termine", "il riscontro",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["realizzare → (sostantivo)", "proporre → (sostantivo)", "approvare → (sostantivo)", "finanziare → (sostantivo)", "fattibile → (sostantivo)", "presentare → (sostantivo)", "partecipare → (chi partecipa)", "progettare → (chi progetta)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase sul tuo progetto con ogni parola. Esempio: la scadenza → La scadenza per la domanda è il 30 aprile.", items: ["l'obiettivo", "il budget", "la scadenza", "coinvolgere", "la fattibilità", "a lungo termine", "il riscontro", "fare il punto"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare in pubblico", hint: "Voce, ritmo e pause",
            text: [
              "In pubblico si parla più lentamente del solito e si fanno pause dopo ogni idea importante.",
              "I numeri si dicono con chiarezza: «diecimila euro», «il trenta per cento», «entro il quindici giugno».",
              "Le parole chiave si mettono in rilievo con la voce: «Il punto PIÙ importante è…».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Lentamente, con le pause.", items: ["Buongiorno a tutti, | e grazie di essere qui.", "Oggi vi presento | un progetto per il quartiere.", "Il budget totale | è di dodicimila euro.", "Entro giugno | avremo finito la prima fase.", "Ci sono domande?"] },
          { kind: "shadow", title: "Numeri e date", hint: "Ripeti con chiarezza.", items: ["il venticinque per cento", "quindicimilacinquecento euro", "dal primo marzo al trentuno maggio", "tre fasi in diciotto mesi"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: i modi e i tempi del B1", hint: "Tutto in una tabella",
            text: [
              "Il livello B1 ti ha dato gli strumenti per parlare del passato, del futuro, dell'ipotesi e dell'opinione. Ecco una mappa.",
            ],
            table: { head: ["tempo / modo", "esempio"], rows: [["congiuntivo presente", "Spero che approviate"], ["congiuntivo passato", "Credo che abbiano capito"], ["congiuntivo imperfetto", "Se avessimo i fondi…"], ["condizionale passato", "Avremmo voluto iniziare prima"], ["futuro anteriore", "Quando avremo finito…"], ["trapassato prossimo", "Avevamo già provato"], ["passivo", "È stato approvato"]] },
          },
          k.table("Il verbo giusto", [
            ["Spero che il comune ___ (approvare) il progetto.", "approvi"],
            ["Se ___ (avere) più fondi, assumeremmo due persone.", ""],
            ["Avremmo iniziato prima, ma i permessi non ___ (arrivare).", ""],
            ["Quando ___ (finire) la prima fase, faremo il punto.", ""],
            ["Il progetto ___ (finanziare, passivo) dalla regione l'anno scorso.", ""],
            ["Penso che voi ___ (fare) un ottimo lavoro finora.", ""],
            ["Prima di questo progetto ne ___ (realizzare, noi) un altro simile.", ""],
          ], "Scrivi la forma giusta del verbo.", ["verbo"]),
          {
            kind: "fill", title: "Completa la presentazione", hint: "Coniuga i verbi tra parentesi nel tempo e nel modo giusti.",
            items: [
              "È importante che tutti i residenti ___ (partecipare).", "Se ci ___ (dare) lo spazio, apriremmo a settembre.", "L'anno scorso ___ (provare, noi) a chiedere un finanziamento, ma era troppo tardi.", "Entro dicembre ___ (raccogliere, noi) tutte le firme.", "La sala ___ (ristrutturare, passivo) nel 2022.", "Vorrei che ___ (pensare, voi) a una cosa.", "Non credo che il costo ___ (essere) un problema.", "Ci ___ (piacere) cominciare prima, ma non è stato possibile.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: le strutture del B1", hint: "Relativi, discorso indiretto, gerundio",
            text: [
              "Relativi: «il progetto che vi presento», «lo spazio di cui abbiamo bisogno», «la ragione per cui siamo qui», «ciò che conta è…».",
              "Discorso indiretto: «Il sindaco ha detto che avrebbe valutato la proposta». Ricorda: futuro → condizionale passato, presente → imperfetto.",
              "Gerundio: «Lavorando insieme, abbiamo trovato una soluzione». «Pur essendo piccolo, il progetto è importante».",
              "Periodo ipotetico: della realtà (se + presente), della possibilità (se + congiuntivo imperfetto + condizionale), dell'irrealtà nel passato (se + congiuntivo trapassato + condizionale passato).",
            ],
          },
          {
            kind: "fill", title: "Relativi e connettivi", hint: "Completa con il relativo (che, cui, ciò che, il quale…) o il connettivo adatto.",
            items: ["Lo spazio di ___ abbiamo bisogno è una vecchia scuola.", "___ ci serve davvero è il sostegno del quartiere.", "Il motivo per ___ siamo qui è semplice.", "Le persone con ___ lavoriamo sono volontari.", "Il budget è limitato; ___, il progetto è fattibile.", "Abbiamo coinvolto le scuole; ___, abbiamo chiesto aiuto ai negozi.", "La proposta ___ vi abbiamo mandato è cambiata.", "Il progetto è utile ed economico: ___, conviene a tutti."],
          },
          {
            kind: "intro", title: "Riferire una risposta", hint: "Discorso indiretto nel passato",
            text: ["«Approveremo il progetto» → Ha detto che avrebbero approvato il progetto. «Non abbiamo fondi» → Ha detto che non avevano fondi. «Mandateci il preventivo» → Ci ha chiesto di mandare il preventivo."],
          },
          k.negativa(["L'assessore ha detto: «Valuteremo la proposta».", "La preside ha detto: «La scuola mette a disposizione la palestra».", "Il tecnico ha detto: «Abbiamo già controllato l'impianto».", "Il presidente ci ha detto: «Mandate il preventivo entro venerdì».", "Se avessimo saputo dei fondi, avremmo fatto domanda. (spiega che cosa è successo davvero)", "Benché il progetto sia piccolo, è importante. (pur + gerundio)"], "Riscrivi ogni frase: discorso indiretto al passato, oppure la struttura indicata.", "frase riscritta"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Un orto in cortile", "Giulia presenta un progetto all'assemblea di quartiere.", [
            { who: "Giulia", text: "Buonasera a tutti e grazie di essere venuti. Stasera vi presento un progetto a cui lavoriamo da sei mesi: un orto condiviso nel cortile della vecchia scuola." },
            { who: "Giulia", text: "Il problema è semplice: il cortile è abbandonato da anni ed è diventato un deposito di rifiuti. Ciò che proponiamo è di trasformarlo in uno spazio verde aperto a tutti." },
            { who: "Giulia", text: "Il budget è di ottomila euro. La metà sarà finanziata dal comune, se il progetto verrà approvato, e il resto lo raccoglieremo con una festa di quartiere." },
            { who: "Giulia", text: "Se tutto va bene, entro maggio avremo preparato il terreno e a giugno raccoglieremo i primi pomodori. Ci sono domande?" },
            { who: "Sig. Rizzo", text: "Chi si occuperà dell'orto d'estate, quando la gente è in vacanza?" },
            { who: "Giulia", text: "Ottima domanda. Abbiamo pensato a dei turni: ognuno darà la sua disponibilità per due settimane." },
          ], ["Da quanto tempo lavorano al progetto?", "Qual è il problema del cortile?", "Quanto costa il progetto e come sarà finanziato?", "Quali sono i tempi?", "Quale domanda fa il signor Rizzo e come risponde Giulia?"]),
          k.listen("Dopo la presentazione", "Due colleghi commentano una presentazione di lavoro.", [
            { who: "Davide", text: "Allora, com'è andata la presentazione?" },
            { who: "Serena", text: "Bene, credo. Il direttore ha detto che il progetto gli piaceva e che ne avrebbe parlato con il consiglio." },
            { who: "Davide", text: "Ottimo! E le domande?" },
            { who: "Serena", text: "Mi hanno chiesto quanto sarebbe costato il secondo anno. Avrei dovuto preparare quella diapositiva: non ci avevo pensato." },
            { who: "Davide", text: "Pazienza: mandagliela domani. Pur non essendo perfetta, la presentazione ha funzionato." },
          ], ["Che cosa ha detto il direttore?", "Quale domanda hanno fatto a Serena?", "Di che cosa si rimprovera Serena?", "Che consiglio le dà Davide?", "Trova un esempio di discorso indiretto e uno di condizionale passato."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il bilancio partecipativo", [
            "In alcune città italiane una parte del bilancio comunale viene decisa direttamente dai cittadini. Si chiama «bilancio partecipativo»: i residenti propongono progetti, li presentano in pubblico e poi votano quelli che preferiscono.",
            "A Bologna, per esempio, il comune ha organizzato diverse edizioni del bilancio partecipativo, nelle quali i cittadini hanno potuto scegliere progetti per il proprio quartiere: piazze rinnovate, giardini, spazi per i giovani.",
            "Chi ha partecipato racconta che la parte più difficile è stata la presentazione. Bisogna spiegare in pochi minuti perché un progetto è utile, quanto costa e chi ne trarrà vantaggio. Se la proposta non è chiara, i cittadini non la votano.",
            "Pur con qualche limite, questa esperienza ha avvicinato molte persone alla vita del quartiere. Chi era abituato a lamentarsi ha scoperto che, presentando un'idea, si può cambiare davvero qualcosa.",
          ], ["Che cos'è il bilancio partecipativo?", "Come funziona a Bologna?", "Qual è la parte più difficile per i partecipanti? Perché?", "Che cosa succede se la proposta non è chiara?", "Quale effetto positivo ha avuto questa esperienza?", "Trova nel testo una forma passiva, un relativo con preposizione e un gerundio."]),
          k.spagna("Esiste qualcosa di simile nella tua città? Se potessi proporre un progetto per il tuo quartiere, quale sarebbe? Spiega problema, proposta, costi e vantaggi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Le formule della presentazione", hint: "Dall'apertura alle domande",
            text: [
              "Aprire: «Buongiorno a tutti», «Oggi vi parlerò di…», «La presentazione è divisa in tre parti».",
              "Passare da un punto all'altro: «Passiamo ora a…», «Veniamo al punto più importante», «Come vedete in questa diapositiva…».",
              "Chiudere: «Per concludere…», «Riassumendo…», «Grazie per l'attenzione. Ci sono domande?».",
              "Rispondere: «Ottima domanda», «Se ho capito bene, lei chiede se…», «Non ho il dato preciso, ma glielo mando domani».",
            ],
          },
          k.rispondi(["Hai mai presentato qualcosa in pubblico? Com'è andata?", "Che cosa rende una presentazione noiosa?", "Che cosa avresti fatto diversamente nella tua ultima presentazione?", "Se dovessi presentare un progetto domani, di che cosa parleresti?", "Che cosa avrai imparato alla fine di questo corso?", "Che cosa è stato più difficile del livello B1?"]),
          { kind: "speak", title: "La presentazione", hint: "Presenta il tuo progetto in tre minuti, seguendo la struttura: apertura, problema, proposta, vantaggi, costi e tempi, conclusione. Registrati e riascoltati.", items: ["Buongiorno a tutti…"] },
          {
            kind: "roleplay", title: "Le domande del pubblico", hint: "Hai appena presentato il tuo progetto. L'IA è un membro della commissione e ti fa domande difficili.",
            steps: ["Ringrazia e invita le domande.", "Rispondi a una domanda sui costi.", "Riformula una domanda che non hai capito bene.", "Ammetti un limite del progetto.", "Concludi in modo convincente."],
          },
          {
            kind: "roleplay", title: "Riferire al capo", hint: "La riunione è finita. Il tuo capo (l'IA) non c'era e ti chiede che cosa hanno detto tutti.",
            steps: ["Riferisci che cosa ha detto il cliente.", "Riferisci le domande che ti hanno fatto.", "Di' che cosa avresti voluto dire.", "Proponi i prossimi passi.", "Indica le scadenze con il futuro anteriore."],
          },
          { kind: "speak", title: "Bilancio del B1", hint: "Parla per due minuti del tuo percorso: che cosa sai fare adesso che prima non sapevi fare, che cosa devi ancora migliorare e quali obiettivi ti dai per il B2.", items: ["All'inizio del B1…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il comune approverà il progetto. (forma passiva)", "Il sindaco ha detto: «Ne parleremo a settembre». (discorso indiretto)", "Non abbiamo i fondi, quindi non possiamo cominciare. (periodo ipotetico della possibilità)", "Non sapevamo della scadenza e non abbiamo fatto domanda. (periodo ipotetico dell'irrealtà)", "Prima finiremo i lavori, poi inaugureremo lo spazio. (dopo che + futuro anteriore)", "Abbiamo bisogno di uno spazio. Lo spazio deve essere grande. (relativo con di cui)", "Lavoriamo insieme e troviamo le soluzioni. (gerundio)", "Il progetto è piccolo, ma è utile. (pur + gerundio)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "La proposta scritta", hint: "Scrivi una proposta di progetto (250–280 parole) da mandare al comune o alla tua azienda: titolo, problema, obiettivi, attività, budget, tempi, risultati attesi. Usa almeno: un congiuntivo, un periodo ipotetico, una forma passiva, un futuro anteriore, un relativo con preposizione, un gerundio.", rows: 20, items: ["Titolo del progetto:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: formule", ["grazie per l'attenzione", "passiamo ora a", "ci sono domande?", "ottima domanda", "riassumendo", "il budget totale"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi del B1", ["Se avessimo i fondi, cominceremmo subito.", "Il progetto è stato approvato ieri.", "Ha detto che ne avrebbe parlato al consiglio.", "Quando avremo finito, faremo una festa.", "Ciò che conta è il risultato."]),
          k.media([
            { type: "YouTube", title: "TEDx Talks in italiano", where: "YouTube", why: "Guarda due interventi e osserva come gli oratori aprono, passano da un punto all'altro e chiudono." },
            { type: "Film", title: "Smetto quando voglio (Sydney Sibilia, 2014)", where: "Cerca dove vederlo su JustWatch", why: "Un gruppo di ricercatori precari presenta e realizza un «progetto» molto particolare: commedia veloce, lingua di oggi." },
            { type: "Podcast", title: "Morning (Il Post)", where: "ilpost.it o app di podcast", why: "Rassegna stampa quotidiana di circa venti minuti: un buon modello di esposizione chiara e ordinata." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Pronto per l'esame", hint: "Prima dell'esame di livello: ripassa le unità con il punteggio più basso e rileggi i tuoi testi scritti. Poi racconta in un minuto come ti prepari.", items: ["Per prepararmi all'esame…"] },
        ],
      },
    ],

    exam: k.exam(56, {
      parole: ["l'obiettivo", "il preventivo", "la scadenza", "il finanziamento", "la fattibilità", "i destinatari", "coinvolgere", "approvare", "la scaletta", "il riscontro"],
      contrario: ["realizzare → sostantivo", "proporre → sostantivo", "approvare → sostantivo", "approvare → contrario", "a breve termine → contrario", "partecipare → chi partecipa"],
      verbiHint: "Scrivi la forma giusta del verbo.",
      verbiCols: ["verbo"],
      verbi: [["Spero che voi (capire) il progetto.", ""], ["Se (avere, noi) più tempo, lo faremmo meglio.", ""], ["Quando (finire, noi), faremo il punto.", ""], ["Avremmo cominciato, ma il permesso non (arrivare).", ""], ["Il progetto (approvare, passivo) ieri.", ""], ["Credo che loro (lavorare) molto l'anno scorso.", ""]],
      completaHint: "Completa con la parola o la forma verbale giusta.",
      completa: ["Lo spazio di ___ abbiamo bisogno è grande.", "___ conta di più è la partecipazione.", "Il direttore ha detto che ne ___ (parlare) al consiglio.", "Se avessimo saputo della scadenza, ___ (fare) domanda.", "___ (lavorare) insieme, abbiamo trovato la soluzione.", "È necessario che tutti ___ (essere) presenti.", "Il budget è limitato; ___, il progetto è fattibile.", "Entro giugno ___ (finire, noi) i lavori."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["La regione ha finanziato il progetto. (forma passiva)", "L'assessore ha detto: «Valuteremo la proposta». (discorso indiretto)", "Non abbiamo uno spazio, quindi non possiamo aprire. (se + congiuntivo imperfetto)", "Non conoscevamo il bando e non abbiamo partecipato. (se + congiuntivo trapassato)", "Il progetto è piccolo, ma ha avuto successo. (pur + gerundio)", "Ci serve un aiuto. Questa è la cosa più importante. (ciò che)"],
      leggi: {
        text: [
          "Tre studentesse di Torino hanno presentato al comune un progetto per riutilizzare il cibo invenduto dei mercati. Se il progetto non fosse stato approvato, avrebbero cercato fondi privati.",
          "Il comune, invece, ha accettato subito: il progetto è stato finanziato con quindicimila euro e coinvolge oggi venti volontari.",
          "Le ragazze raccontano che la presentazione è stata la parte più difficile, ma che, preparandosi bene, sono riuscite a rispondere a tutte le domande.",
        ],
        questions: ["Che progetto hanno presentato le studentesse?", "Che cosa avrebbero fatto se il comune avesse detto di no?", "Come è stato finanziato il progetto?", "Che cosa raccontano della presentazione?"],
      },
      ascolta: {
        script: [
          { who: "Capo", text: "Allora, com'è andata la riunione con il cliente?" },
          { who: "Irene", text: "Bene. Ha detto che il progetto gli piaceva molto, ma che il budget era troppo alto." },
          { who: "Capo", text: "E che cosa gli hai risposto?" },
          { who: "Irene", text: "Che avremmo potuto dividere il lavoro in due fasi. Entro venerdì gli avrò mandato il nuovo preventivo." },
        ],
        questions: ["Che cosa ha detto il cliente del progetto?", "Qual era il problema?", "Che soluzione ha proposto Irene?", "Che cosa farà entro venerdì?"],
      },
      parla: ["Presenta un progetto in due minuti, con apertura e conclusione.", "Racconta una riunione usando il discorso indiretto.", "Che cosa avresti fatto diversamente in un progetto passato?", "Che cosa farai se il tuo progetto verrà approvato?"],
      role: ["L'IA è la commissione che valuta il tuo progetto e fa domande difficili.", "Rispondi su costi, tempi e rischi.", "Chiudi riassumendo i vantaggi."],
      roleHint: "Simulazione orale finale del livello B1.",
      dettato: ["grazie per l'attenzione", "è stato approvato", "se avessimo i fondi", "quando avremo finito", "ciò che conta", "pur essendo piccolo"],
      traduci: ["Il consiglio approverà il bilancio. (forma passiva)", "Ha detto: «Arrivo domani». (discorso indiretto al passato)", "Non ho tempo e non vengo. (se + congiuntivo imperfetto)", "Non ho studiato e non ho passato l'esame. (periodo ipotetico dell'irrealtà)", "Finisco il lavoro e poi ti chiamo. (dopo che + futuro anteriore)", "È stanco, ma continua. (pur + gerundio)"],
      scrivi: { hint: "Scrivi una mail (160–200 parole) al tuo capo per riassumere una riunione: che cosa è stato deciso, che cosa ha detto il cliente (discorso indiretto), che cosa avreste potuto fare meglio e quali sono le prossime scadenze.", start: "Gentile dottoressa Conti," },
    }),
  };
})();
