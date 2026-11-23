// Unità 57 · Società — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[57] = {
    n: 57,
    level: "B2",
    title: "Società",
    goal: "Discutere dei cambiamenti della società italiana usando con precisione la concordanza dei tempi del congiuntivo (presente, passato, imperfetto, trapassato).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "Benvenuto nel B2", hint: "Che cosa cambia da qui in avanti",
            text: [
              "Il livello B2 ti chiede di matizzare: non solo dire che cosa pensi, ma con quale grado di certezza, in quale registro e in quale rapporto di tempo tra i fatti.",
              "In questa unità parlerai della società italiana: denatalità, famiglie che cambiano, giovani che partono, nuovi italiani.",
              "Grammatica: la concordanza dei tempi con il congiuntivo. Lo conosci già al presente, al passato e all'imperfetto; qui aggiungi il trapassato e impari a scegliere il tempo giusto secondo il verbo principale.",
            ],
          },
          {
            kind: "intro", title: "Prima, durante, dopo", hint: "Un'anticipazione",
            text: ["Il tempo del congiuntivo dipende da due cose: il tempo del verbo principale e il rapporto tra le due azioni (anteriorità, contemporaneità, posteriorità)."],
            examples: [
              { it: "Penso che i giovani partano.", es: "presente + contemporaneità" },
              { it: "Penso che i giovani siano partiti.", es: "presente + anteriorità" },
              { it: "Pensavo che i giovani partissero.", es: "passato + contemporaneità" },
              { it: "Pensavo che i giovani fossero partiti.", es: "passato + anteriorità" },
            ],
          },
          { kind: "speak", title: "La tua società", hint: "Prima di cominciare: qual è secondo te il cambiamento sociale più importante degli ultimi vent'anni nel tuo paese?", items: ["Credo che il cambiamento più importante sia stato…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della società", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la denatalità", "il tasso di natalità", "l'invecchiamento della popolazione", "il ricambio generazionale", "la famiglia allargata",
              "la convivenza", "il nucleo familiare", "la fuga dei cervelli", "il precariato", "il divario",
              "la cittadinanza", "l'integrazione", "le pari opportunità", "il welfare", "l'ascensore sociale",
              "il disagio", "la disuguaglianza", "il ceto medio", "emanciparsi", "il pregiudizio",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["nascere → (sostantivo astratto)", "invecchiare → (sostantivo)", "integrare → (sostantivo)", "uguale → (contrario del sostantivo)", "precario → (sostantivo collettivo)", "emancipare → (sostantivo)", "convivere → (sostantivo)", "cittadino → (sostantivo astratto)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione, sulla società del tuo paese. Dilla ad alta voce e scrivila.", items: ["la denatalità", "la fuga dei cervelli", "l'ascensore sociale", "il divario tra Nord e Sud", "le pari opportunità", "il precariato", "il pregiudizio", "il ricambio generazionale"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il congiuntivo si sente", hint: "Pronuncia delle forme difficili",
            text: [
              "Nel congiuntivo imperfetto la doppia s è fondamentale: «fosse», «avessi», «partissero». Se la pronunci semplice, sembra un altro tempo o un errore.",
              "Nel trapassato l'accento cade sull'ausiliare: «fòssero partiti», «avèssimo saputo».",
              "Attenzione a «siano» (sià-no) e «abbiano» (àb-bia-no): tre sillabe, non due.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Cura le doppie.", items: ["Pensavo che fossero già partiti.", "Non credevo che avessimo così pochi figli.", "Spero che abbiano capito.", "Era necessario che tutti partecipassero.", "Mi sembra che la situazione sia peggiorata."] },
          { kind: "shadow", title: "Coppie", hint: "Ripeti e senti la differenza.", items: ["fosse / fossero", "avesse / avessero", "sia stato / fosse stato", "abbia avuto / avesse avuto"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La concordanza dei tempi", hint: "Lo schema completo",
            text: [
              "Verbo principale al presente o al futuro: contemporaneità → congiuntivo presente; anteriorità → congiuntivo passato; posteriorità → futuro (o congiuntivo presente).",
              "Verbo principale al passato o al condizionale: contemporaneità → congiuntivo imperfetto; anteriorità → congiuntivo trapassato; posteriorità → condizionale passato.",
              "Il congiuntivo trapassato si forma con il congiuntivo imperfetto di avere/essere + participio: avessi detto, fossi arrivato.",
            ],
            table: { head: ["frase", "rapporto"], rows: [["Penso che sia partito", "prima"], ["Penso che parta", "durante"], ["Penso che partirà", "dopo"], ["Pensavo che fosse partito", "prima"], ["Pensavo che partisse", "durante"], ["Pensavo che sarebbe partito", "dopo"]] },
          },
          k.table("Congiuntivo trapassato", [
            ["(io) capire", "avessi capito"],
            ["(tu) arrivare", ""],
            ["(lei) decidere", ""],
            ["(noi) andarsene", ""],
            ["(voi) vivere", ""],
            ["(loro) nascere", ""],
          ], "Scrivi il congiuntivo trapassato.", ["forma"]),
          {
            kind: "fill", title: "Scegli il tempo", hint: "Coniuga il verbo al tempo giusto del congiuntivo (o al condizionale passato, se l'azione è posteriore al passato).",
            items: [
              "Credo che negli ultimi anni la natalità ___ (diminuire).", "Credevo che negli anni Settanta le famiglie ___ (essere) più numerose.", "Non pensavo che mio fratello ___ (già, partire) per Londra.", "È possibile che il governo ___ (cambiare) la legge l'anno scorso.", "Era strano che nessuno ___ (accorgersi) del problema prima.", "Ero sicuro che lei non ___ (tornare) più in Italia.", "Speriamo che la situazione ___ (migliorare) presto.", "Sembrava che i giovani ___ (perdere) fiducia nella politica.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Casi particolari", hint: "Condizionale, «come se», passato remoto",
            text: [
              "Dopo un condizionale (vorrei, preferirei, sarebbe meglio) si usa il congiuntivo imperfetto o trapassato: «Vorrei che ci fossero più asili», «Avrei preferito che me l'avessi detto».",
              "«Come se» vuole sempre l'imperfetto o il trapassato, anche con il presente: «Parla come se fosse il capo», «Si comporta come se non fosse successo niente».",
              "Un passato remoto o un imperfetto nella principale si comporta come un passato prossimo: «Non immaginò che fosse così difficile».",
            ],
          },
          {
            kind: "fill", title: "Condizionale e «come se»", hint: "Coniuga il verbo tra parentesi.",
            items: ["Vorrei che lo Stato ___ (aiutare) di più le famiglie.", "Sarebbe stato meglio che ___ (voi, avvisare) prima.", "Parla dell'Italia come se non ci ___ (vivere) mai.", "Si comportano come se il problema non ___ (esistere).", "Preferirei che i miei figli ___ (restare) vicino a casa.", "Mi guardò come se ___ (vedere) un fantasma."],
          },
          {
            kind: "intro", title: "Quando il congiuntivo sparisce", hint: "Implicita e indicativo",
            text: ["Se il soggetto è lo stesso, si usa l'infinito: «Penso di aver capito» (non «penso che io abbia capito»). Con «sapere», «essere sicuro», «è chiaro» si usa l'indicativo."],
          },
          k.negativa(["Penso: i giovani sono partiti per necessità. (penso che)", "Pensavo: i giovani partivano per avventura. (pensavo che)", "Pensavo: i giovani erano già partiti. (pensavo che)", "Ero sicuro: lei sarebbe tornata. (non ero sicuro che)", "Lui si comporta da padrone, ma non lo è. (come se)", "Credo di aver sbagliato. (lui crede che io…)"], "Riscrivi ogni frase con la struttura indicata, rispettando la concordanza.", "frase con concordanza"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Inverno demografico", "Un'intervista radiofonica a una demografa.", [
            { who: "Giornalista", text: "Professoressa Marini, nel 2023 in Italia sono nati meno di quattrocentomila bambini. Se lo aspettava?" },
            { who: "Prof.ssa Marini", text: "Purtroppo sì. Già vent'anni fa i demografi temevano che si arrivasse a questi numeri. Non credo che qualcuno ne sia davvero sorpreso." },
            { who: "Giornalista", text: "Quali sono le cause, secondo lei?" },
            { who: "Prof.ssa Marini", text: "Sono molte. I giovani escono di casa tardi, il lavoro è spesso precario e mancano gli asili nido. Molte coppie mi dicono che avrebbero voluto un secondo figlio, ma che non se lo potevano permettere." },
            { who: "Giornalista", text: "Che cosa bisognerebbe fare?" },
            { who: "Prof.ssa Marini", text: "Bisognerebbe che le politiche per la famiglia fossero stabili, non bonus che cambiano ogni anno. E che il lavoro delle donne venisse davvero tutelato." },
          ], ["Quanti bambini sono nati in Italia nel 2023?", "Perché la professoressa non è sorpresa?", "Quali cause indica?", "Che cosa le dicono molte coppie?", "Quali soluzioni propone?", "Trova due esempi di congiuntivo e spiega perché sono all'imperfetto."]),
          k.listen("Nuovi italiani", "Amina, nata a Bologna da genitori marocchini, racconta.", [
            { who: "Amina", text: "Sono nata a Bologna, parlo bolognese meglio di mia nonna italiana, ma fino a diciotto anni non ero cittadina italiana." },
            { who: "Intervistatore", text: "Com'è stato?" },
            { who: "Amina", text: "Strano. A scuola i compagni pensavano che fossi straniera, anche se non avevo mai vissuto altrove. Mi chiedevano come se fossi appena arrivata." },
            { who: "Intervistatore", text: "E adesso?" },
            { who: "Amina", text: "Adesso ho la cittadinanza. Ma vorrei che per i ragazzi come me fosse più semplice: non è giusto che si sentano ospiti nel paese in cui sono cresciuti." },
          ], ["Dove è nata Amina? Di dove sono i suoi genitori?", "Quando ha avuto la cittadinanza?", "Che cosa pensavano i compagni?", "Che cosa vorrebbe Amina per i ragazzi come lei?", "Spiega la frase «come se fossi appena arrivata»."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Un paese che invecchia", [
            "Secondo l'Istat, nel 2023 in Italia sono nati circa 379.000 bambini: il numero più basso dall'Unità d'Italia. La fecondità è scesa a circa 1,2 figli per donna, molto al di sotto della soglia di 2,1 necessaria per il ricambio generazionale.",
            "Contemporaneamente, l'Italia è uno dei paesi più longevi del mondo. Il risultato è una popolazione che invecchia rapidamente: gli over 65 sono ormai quasi un quarto degli abitanti.",
            "Per decenni si è pensato che il problema riguardasse soprattutto il futuro. Oggi le conseguenze sono già visibili: scuole che chiudono nei piccoli comuni, ospedali che faticano a trovare personale, un sistema pensionistico sotto pressione.",
            "Gli esperti concordano su un punto: nessuna misura isolata basterà. Servirebbe che lavoro stabile, servizi per l'infanzia, politiche abitative e immigrazione regolare venissero affrontati insieme. Molti avrebbero voluto che questo dibattito fosse iniziato vent'anni fa.",
          ], ["Quanti bambini sono nati nel 2023? Perché è un dato storico?", "Che cos'è la «soglia di ricambio»?", "Perché la popolazione invecchia così rapidamente?", "Quali conseguenze sono già visibili?", "Su che cosa concordano gli esperti?", "Spiega l'ultima frase del testo e il tempo dei verbi."]),
          k.spagna("Com'è la situazione demografica nel tuo paese? Si discute degli stessi problemi? Usa almeno quattro tempi diversi del congiuntivo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Matizzare un'opinione", hint: "Gradi di certezza",
            text: ["Dal più sicuro al meno sicuro: «Sono convinto che…» (indicativo), «Credo che…», «Mi pare che…», «Non escludo che…», «Dubito che…», «Non è affatto detto che…». Il B2 ti chiede di scegliere il grado giusto, non solo il verbo giusto."],
          },
          k.rispondi(["Che cosa pensavi della società italiana prima di studiare l'italiano? È cambiato qualcosa?", "Perché, secondo te, in molti paesi europei nascono pochi bambini?", "Che cosa avrebbero dovuto fare i governi vent'anni fa?", "È giusto che chi nasce in un paese ne sia automaticamente cittadino?", "Che cosa vorresti che cambiasse nella tua società?", "Ti sei mai sentito trattato come se fossi straniero?"]),
          { kind: "speak", title: "Ieri e oggi", hint: "Per ogni tema, di' che cosa si pensava una volta e che cosa si pensa oggi: «Una volta si pensava che…, oggi invece si crede che…».", items: ["il matrimonio", "il lavoro fisso", "i figli", "l'emigrazione", "il ruolo della donna", "la vecchiaia"] },
          {
            kind: "roleplay", title: "Il talk show", hint: "Sei ospite di un programma televisivo sulla denatalità. L'IA è un politico che sostiene che basti un bonus economico.",
            steps: ["Presenta la tua posizione con un grado di certezza preciso.", "Contesta la sua tesi con un dato o un esempio.", "Ammetti un punto valido nella sua proposta.", "Di' che cosa si sarebbe dovuto fare in passato.", "Proponi tre misure concrete."],
          },
          {
            kind: "roleplay", title: "Il nonno e il nipote", hint: "L'IA è un nonno che critica i giovani di oggi. Tu sei il nipote e difendi la tua generazione.",
            steps: ["Ascolta la sua critica e riassumila.", "Spiega com'era la sua situazione alla tua età, secondo te.", "Confronta con la tua situazione oggi.", "Usa «come se» almeno una volta.", "Trovate un punto in comune."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di un pregiudizio che avevi su un gruppo sociale e di come l'hai superato.", items: ["Pensavo che… finché…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Penso: la crisi è finita. (penso che)", "Pensavo: la crisi era finita. (pensavo che)", "Pensavo: la crisi finiva in un anno. (pensavo che + posteriorità)", "Vorrei: i giovani restano. (vorrei che)", "Avrei preferito: me l'hai detto prima. (avrei preferito che)", "Si comporta da esperto, ma non lo è. (come se)", "Non sapevo: lei è partita. (non sapevo che)", "È strano: nessuno ha protestato. (era strano che)"], "Riscrivi ogni frase con la struttura indicata, rispettando la concordanza dei tempi."),
          { kind: "write", title: "Un articolo di opinione", hint: "Scrivi un articolo (280–320 parole) per un giornale online: «Che cosa avremmo dovuto fare per evitare l'inverno demografico?». Analizza le cause, di' che cosa ci si aspettava in passato, valuta le proposte attuali e concludi con la tua posizione. Usa tutti e quattro i tempi del congiuntivo e almeno un «come se».", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["che fossero partiti", "che avessimo saputo", "come se niente fosse", "che sia cambiato", "che venisse tutelato", "il ricambio generazionale"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Non credevo che fosse già nato.", "Avrei voluto che me lo dicessi.", "Parla come se fosse il padrone.", "Temevano che si arrivasse a questi numeri.", "Non è detto che la situazione migliori."]),
          k.media([
            { type: "Film", title: "La meglio gioventù (Marco Tullio Giordana, 2003)", where: "Cerca dove vederlo su JustWatch", why: "Quasi quarant'anni di storia italiana attraverso una famiglia: osserva come cambiano lavoro, rapporti e valori." },
            { type: "Film", title: "Tutta la vita davanti (Paolo Virzì, 2008)", where: "Cerca dove vederlo su JustWatch", why: "Una giovane laureata finisce in un call center: il precariato raccontato con ironia amara." },
            { type: "Podcast", title: "Il Mondo (Internazionale)", where: "internazionale.it o app di podcast", why: "Podcast quotidiano su attualità e società: ascolta un episodio e prendi nota di tre congiuntivi." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Quale aspetto della società italiana ti ha sorpreso nel film o nel podcast? Che cosa pensavi prima?", items: ["Pensavo che… invece…"] },
        ],
      },
    ],

    exam: k.exam(57, {
      parole: ["la denatalità", "il ricambio generazionale", "la fuga dei cervelli", "il precariato", "l'ascensore sociale", "il divario", "la cittadinanza", "le pari opportunità", "la disuguaglianza", "emanciparsi"],
      contrario: ["nascere → sostantivo astratto", "invecchiare → sostantivo", "integrare → sostantivo", "uguaglianza → contrario", "precario → sostantivo collettivo", "convivere → sostantivo"],
      verbiHint: "Scrivi il congiuntivo trapassato.",
      verbiCols: ["forma"],
      verbi: [["(io) sapere", ""], ["(tu) partire", ""], ["(lui) dire", ""], ["(noi) accorgersi", ""], ["(voi) vedere", ""], ["(loro) rimanere", ""]],
      completaHint: "Coniuga il verbo rispettando la concordanza dei tempi.",
      completa: ["Credo che l'anno scorso la natalità ___ (scendere) ancora.", "Credevo che a quell'epoca le donne non ___ (lavorare).", "Non sapevo che tu ___ (già, laurearsi).", "Vorrei che il governo ___ (investire) di più.", "Parla come se ___ (vivere) qui da sempre.", "Ero sicura che lui non ___ (tornare) più.", "Avrei preferito che ___ (voi, chiedere) a me.", "Speriamo che la legge ___ (cambiare) presto."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Penso: è stata una scelta giusta. (pensavo che)", "Temo: non hanno capito. (temevo che)", "Spero: arrivi in tempo. (speravo che)", "Si comporta da ricco, ma non lo è. (come se)", "Era convinto: lei lo avrebbe aspettato. (non era convinto che)", "Voglio: dici la verità. (vorrei che)"],
      leggi: {
        text: [
          "Negli ultimi dieci anni più di un milione di italiani si è trasferito all'estero. Molti pensavano che fosse una scelta temporanea, ma la maggior parte non è tornata.",
          "Chi è rimasto all'estero racconta che avrebbe voluto rientrare, se ci fossero state condizioni di lavoro migliori. Alcuni dicono di sentirsi stranieri sia in Italia sia nel paese in cui vivono.",
          "Il governo ha introdotto sgravi fiscali per chi rientra, ma molti esperti dubitano che bastino: servirebbe che cambiasse l'intero mercato del lavoro.",
        ],
        questions: ["Quanti italiani si sono trasferiti all'estero negli ultimi dieci anni?", "Che cosa pensavano molti di loro?", "A quale condizione sarebbero rientrati?", "Che cosa dubitano gli esperti? Perché?"],
      },
      ascolta: {
        script: [
          { who: "Chiara", text: "Hai letto? Anche Giorgio se n'è andato a Berlino." },
          { who: "Fabio", text: "Davvero? Pensavo che avesse trovato lavoro qui." },
          { who: "Chiara", text: "Sì, ma era un contratto di sei mesi. Diceva che avrebbe preferito restare, ma che non poteva vivere come se fosse ancora uno studente." },
          { who: "Fabio", text: "Lo capisco. Spero che almeno là si trovi bene." },
        ],
        questions: ["Dove è andato Giorgio?", "Che cosa pensava Fabio?", "Perché Giorgio è partito?", "Che cosa spera Fabio?"],
      },
      parla: ["Di' che cosa pensavi di un tema sociale e che cosa pensi oggi.", "Che cosa avrebbero dovuto fare i governi per i giovani?", "Che cosa vorresti che cambiasse nella tua città?", "Descrivi una persona che si comporta come se…"],
      role: ["L'IA sostiene che i giovani di oggi non vogliano fare sacrifici: tu non sei d'accordo.", "Usa almeno tre tempi diversi del congiuntivo.", "Chiudete riassumendo le due posizioni."],
      dettato: ["che fosse già partito", "come se niente fosse", "avrei voluto che", "il tasso di natalità", "che abbiano capito", "la fuga dei cervelli"],
      traduci: ["Credo: hanno sbagliato. (credo che)", "Credevo: avevano sbagliato. (credevo che)", "Credevo: avrebbero vinto. (credevo che + posteriorità)", "Vorrei: rimani qui. (vorrei che)", "Parla da esperto, ma non lo è. (come se)", "Avrei voluto: mi hai chiamato. (avrei voluto che)"],
      scrivi: { hint: "Scrivi (180–220 parole) di un cambiamento sociale che ti ha sorpreso: che cosa pensavi prima, che cosa è successo, che cosa avresti voluto che succedesse e che cosa speri per il futuro.", start: "Non avrei mai pensato che…" },
    }),
  };
})();
