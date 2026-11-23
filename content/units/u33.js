// Unità 33 · Relazioni — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[33] = {
    n: 33,
    level: "B1",
    title: "Relazioni",
    goal: "Parlare di amicizia, amore e rapporti familiari, descrivere le persone con frasi più ricche grazie ai pronomi relativi.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Benvenuto al livello B1",
            text: [
              "Da questa unità tutto il quaderno è in italiano: consegne, spiegazioni ed esempi. Se una parola non è chiara, cercala in un dizionario monolingue (per esempio il Treccani online) e non nella traduzione.",
              "In questa unità parlerai di relazioni: amicizie, coppie, famiglie, colleghi, e di come cambiano i rapporti nel tempo.",
              "Grammatica: i pronomi relativi «che» e «cui» (la persona con cui vivo, il motivo per cui…) e una prima idea di «il quale».",
            ],
          },
          {
            kind: "intro", title: "La persona che…, l'amico con cui…", hint: "Un'anticipazione: i relativi",
            text: ["«Che» collega due frasi e sostituisce un soggetto o un oggetto: «Ho un'amica. L'amica vive a Parigi» → «Ho un'amica che vive a Parigi».", "Dopo una preposizione si usa «cui»: «l'amico con cui parlo», «la città in cui sono nato»."],
            examples: [
              { it: "Marco è l'amico che conosco da più tempo.", es: "che = oggetto: conosco Marco" },
              { it: "Lei è la ragazza di cui ti ho parlato.", es: "di cui = della quale: ti ho parlato di lei" },
              { it: "Questo è il motivo per cui ci siamo lasciati.", es: "per cui = per il quale" },
            ],
          },
          { kind: "speak", title: "Le persone importanti", hint: "Prima di cominciare: chi sono le tre persone più importanti della tua vita? Perché?", items: ["Le persone più importanti per me sono…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Rapporti e sentimenti", hint: "Spiega il significato di ogni parola o espressione in italiano, con un sinonimo o una breve definizione. Esempio: litigare → discutere in modo arrabbiato.",
            placeholder: "significato",
            items: [
              "l'amicizia", "il / la conoscente", "fidanzarsi", "convivere", "lasciarsi",
              "tradire", "la fiducia", "andare d'accordo", "litigare", "fare pace",
              "innamorarsi", "il colpo di fulmine", "geloso", "affettuoso", "il / la single",
              "il suocero", "il patrigno", "la famiglia allargata", "il rapporto", "volersi bene",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia. Esempio: amico → (sostantivo astratto) amicizia.",
            items: ["amare → (sostantivo)", "fidarsi → (sostantivo)", "geloso → (sostantivo)", "sposarsi → (sostantivo)", "affetto → (aggettivo)", "separarsi → (sostantivo)", "tradire → (sostantivo)", "solitudine → (aggettivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: con cui → Luca è l'amico con cui ho fatto il giro d'Europa.", items: ["che", "con cui", "di cui", "a cui", "in cui", "per cui", "andare d'accordo", "volersi bene"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il ritmo delle frasi lunghe", hint: "Pronuncia: pause e intonazione",
            text: [
              "Con i relativi le frasi diventano più lunghe. Per farti capire, fai una piccola pausa prima della frase relativa quando aggiunge un'informazione extra: «Mia sorella, che vive a Londra, viene a Natale».",
              "Se invece la relativa serve a identificare la persona, non c'è pausa: «La sorella che vive a Londra viene a Natale» (non l'altra).",
              "«Cui» si pronuncia «cùi», con la u ben chiara: non confonderlo con «qui».",
            ],
          },
          { kind: "shadow", title: "Con e senza pausa", hint: "Ascolta e ripeti. Rispetta le pause.", items: ["Mia madre, che è medico, lavora di notte.", "Il medico che mi ha visitato era giovanissimo.", "Paolo, con cui vivo da tre anni, è di Torino.", "La ragazza con cui parli è mia cugina."] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con la stessa melodia.", items: ["È la persona di cui mi fido di più.", "Non è questo il motivo per cui ti ho chiamato.", "Ti ricordi la città in cui ci siamo conosciuti?", "Ho un amico a cui racconto tutto.", "Quella è la casa in cui sono cresciuto."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Verbi reciproci", hint: "Verbi per le relazioni",
            text: [
              "Molti verbi delle relazioni sono reciproci: si usano al plurale con «ci, vi, si» e significano che l'azione va in due direzioni: «Ci conosciamo da anni», «Si sono lasciati».",
              "Al passato prossimo prendono «essere» e il participio concorda: «Ci siamo innamorati», «Si sono sposate».",
              "Verbi utili: conoscersi, incontrarsi, innamorarsi, fidanzarsi, sposarsi, lasciarsi, separarsi, volersi bene, sentirsi (al telefono), capirsi.",
            ],
          },
          k.table("Tabella dei verbi", [
            ["conoscersi", "ci conosciamo", "", "ci siamo conosciuti/e"],
            ["lasciarsi", "", "si lasciano", ""],
            ["volersi bene", "", "", ""],
            ["innamorarsi", "", "", ""],
            ["capirsi", "", "", ""],
          ], "Completa: presente (noi), presente (loro), passato prossimo (noi).", ["presente (noi)", "presente (loro)", "passato (noi)"]),
          {
            kind: "fill", title: "Storie di coppia", hint: "Completa con il verbo tra parentesi al tempo giusto.",
            items: [
              "Anna e Luca ___ (conoscersi) all'università dieci anni fa.", "Noi ___ (sentirsi) ogni sera al telefono, anche se viviamo lontani.", "Dopo tre anni insieme, Giulia e Marco ___ (lasciarsi): ma sono rimasti amici.", "Voi due ___ (volersi) davvero bene, si vede!", "I miei genitori ___ (sposarsi) nel 1985 e non ___ (litigare) mai sul serio.", "Quando eravamo piccoli, io e mio fratello non ___ (capirsi) per niente.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Che e cui", hint: "I pronomi relativi",
            text: [
              "«Che» è invariabile e si usa per soggetto e oggetto diretto: «la ragazza che parla» (soggetto), «la ragazza che vedo» (oggetto).",
              "«Cui» si usa dopo una preposizione: di cui, a cui, da cui, in cui, con cui, su cui, per cui, tra cui. Anche «cui» è invariabile.",
              "«In cui» può essere sostituito da «dove» per i luoghi («la città dove / in cui vivo») e da «quando» per il tempo («il giorno in cui ci siamo conosciuti»).",
              "«Per cui» all'inizio di una frase significa anche «quindi»: «Era tardi, per cui sono andato a casa».",
            ],
            table: { head: ["", "esempio"], rows: [["che", "l'amico che mi aiuta"], ["di cui", "il libro di cui parlo"], ["a cui", "la persona a cui scrivo"], ["con cui", "il collega con cui lavoro"], ["in cui", "la casa in cui abito"]] },
          },
          {
            kind: "fill", title: "Che o cui?", hint: "Completa con «che» oppure con la preposizione giusta + «cui».",
            items: ["È un'amica ___ conosco dalle elementari.", "Ecco il ragazzo ___ ti ho parlato ieri.", "La persona ___ chiedo sempre consiglio è mia nonna.", "Non dimenticherò mai il giorno ___ ci siamo conosciuti.", "Il collega ___ divido l'ufficio è simpaticissimo.", "Questi sono i motivi ___ ho deciso di partire.", "Ho visto un film ___ mi ha fatto piangere.", "È una cosa ___ non posso fare a meno."],
          },
          {
            kind: "intro", title: "Il quale", hint: "Una forma più formale",
            text: ["«Il quale, la quale, i quali, le quali» sostituiscono «che» o «cui» soprattutto nella lingua scritta e formale, e concordano con il nome: «la collega con la quale lavoro», «i ragazzi dei quali ti ho parlato».", "Si usa anche per evitare ambiguità: «Ho parlato con la sorella di Marco, la quale vive a Roma» (vive a Roma la sorella, non Marco)."],
          },
          k.negativa(["Ho un'amica. L'amica vive in Australia.", "Ti presento Luca. Lavoro con Luca da due anni.", "Questa è la casa. Sono cresciuto in questa casa.", "Mi piace la ragazza. Mi hai parlato della ragazza.", "Ecco il motivo. Ti ho chiamato per questo motivo.", "Il libro è sul tavolo. Il libro è di Paola."], "Unisci le due frasi con un pronome relativo (che, cui, il quale…).", "una sola frase"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Come vi siete conosciuti?", "Una coppia racconta la sua storia a una cena tra amici.", [
            { who: "Amica", text: "Allora, come vi siete conosciuti voi due? Non ce l'avete mai raccontato!" },
            { who: "Sara", text: "È una storia un po' buffa. Eravamo in un treno per Napoli, che era in ritardo di tre ore." },
            { who: "Diego", text: "Io ero seduto davanti a lei e leggevo un libro di cui lei era appassionata. A un certo punto mi ha detto: «Non leggere l'ultimo capitolo, ti rovina tutto!»" },
            { who: "Sara", text: "E lui, invece di arrabbiarsi, si è messo a ridere. Abbiamo parlato per tre ore. È stato un colpo di fulmine." },
            { who: "Diego", text: "Il problema è che io vivevo a Madrid e lei a Bologna. Per un anno ci siamo sentiti ogni sera in videochiamata." },
            { who: "Sara", text: "Poi lui ha trovato un lavoro a Bologna e adesso conviviamo. E quel libro? Non l'ha mai finito!" },
          ], ["Dove si sono conosciuti Sara e Diego? Che cosa succedeva?", "Che cosa leggeva Diego? Perché è importante?", "Come ha reagito Diego alla frase di Sara?", "Qual era il problema dopo? Come l'hanno risolto all'inizio?", "Com'è finita la storia? E il libro?"]),
          k.listen("L'amicizia secondo Nonna Rosa", "Un'anziana parla dell'amicizia in un podcast.", [
            { who: "Nonna Rosa", text: "Io ho ottantadue anni e ho un'amica, Teresa, che conosco da quando avevamo sei anni. Abitavamo nella stessa via, a Lecce." },
            { who: "Nonna Rosa", text: "Abbiamo litigato tante volte: per un ragazzo, per i soldi, per la politica. Ma abbiamo sempre fatto pace." },
            { who: "Nonna Rosa", text: "Il segreto? Dire la verità anche quando fa male, e non tenere il conto di chi telefona per primo." },
            { who: "Nonna Rosa", text: "Oggi i giovani hanno cinquecento amici sui social, ma quante persone hanno a cui telefonare alle tre di notte? Io una: Teresa." },
          ], ["Da quanto tempo Rosa conosce Teresa? Dove si sono conosciute?", "Per quali motivi hanno litigato?", "Qual è il segreto della loro amicizia?", "Che cosa pensa Rosa dell'amicizia sui social?", "Sei d'accordo con lei? Perché?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Come cambiano le famiglie italiane", [
            "La famiglia italiana tradizionale, con padre, madre e due o tre figli, è sempre meno comune. Oggi ci sono molte forme diverse di famiglia.",
            "Sono aumentate le coppie che convivono senza sposarsi, le persone che vivono da sole e le famiglie allargate, in cui i figli crescono con i nuovi partner dei genitori, fratellastri e sorellastre.",
            "Dal 2016 in Italia esistono anche le unioni civili tra persone dello stesso sesso, che danno alle coppie diritti simili a quelli del matrimonio.",
            "Una cosa però resta forte: il legame con i genitori e con i nonni. Molti italiani vedono i genitori ogni settimana e i nonni sono spesso la persona a cui si affidano i bambini.",
            "Gli esperti dicono che la famiglia non è in crisi, ma sta cambiando: conta meno la forma e conta di più la qualità dei rapporti.",
          ], ["Perché la famiglia tradizionale è meno comune?", "Quali nuove forme di famiglia ci sono? Spiega che cos'è una famiglia allargata.", "Che cosa è cambiato nel 2016?", "Che cosa resta forte nelle famiglie italiane?", "Che cosa dicono gli esperti?", "Com'è cambiata la famiglia nel tuo paese?"]),
          k.spagna("Com'è la famiglia nel tuo paese? Ci sono gli stessi cambiamenti? Usa almeno tre pronomi relativi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Descrivere un rapporto", hint: "Formule utili",
            text: ["Per descrivere un rapporto: «Ci conosciamo da…», «Andiamo d'accordo / non andiamo d'accordo su…», «Ci vediamo poco ma ci sentiamo spesso», «Mi fido di lei», «È una persona su cui posso contare».", "Per parlare di un conflitto: «Abbiamo avuto una discussione su…», «Ci siamo chiariti», «Non ci parliamo più»."],
          },
          k.rispondi(["Chi è la persona con cui passi più tempo?", "Hai un amico o un'amica che conosci da più di dieci anni? Com'è il vostro rapporto?", "Che cosa è importante per te in un'amicizia?", "Con chi della tua famiglia vai più d'accordo? E meno?", "Credi nel colpo di fulmine? Perché?", "È possibile un'amicizia vera tra ex fidanzati?"]),
          { kind: "speak", title: "Definizioni", hint: "Definisci ogni parola con una frase relativa, senza dire la parola. Esempio: il suocero → È il padre della persona con cui sei sposato.", items: ["la suocera", "un conoscente", "il migliore amico", "un ex", "un collega", "un vicino di casa"] },
          {
            kind: "roleplay", title: "Il consiglio all'amico", hint: "Un amico ti racconta che il suo partner vuole andare a vivere all'estero e lui non sa che cosa fare. L'IA fa l'amico.",
            steps: ["Chiedi da quanto tempo stanno insieme e come va il rapporto.", "Fai domande per capire che cosa vuole davvero.", "Dai almeno due consigli, con il condizionale.", "Racconta un'esperienza simile, tua o di qualcuno che conosci.", "Concludi incoraggiandolo."],
          },
          {
            kind: "roleplay", title: "Il malinteso tra coinquilini", hint: "Un coinquilino è offeso perché non l'hai invitato alla tua festa. L'IA fa il coinquilino.",
            steps: ["Chiedigli che cosa c'è che non va.", "Ascolta e spiega il malinteso.", "Chiedi scusa per quello che hai sbagliato.", "Proponi qualcosa per fare pace.", "Chiarite le regole per il futuro."],
          },
          { kind: "speak", title: "Una persona speciale", hint: "Parla per due minuti di una persona importante nella tua vita: come vi siete conosciuti, com'è il vostro rapporto, un ricordo e perché è speciale. Usa almeno cinque relativi.", items: ["La persona di cui voglio parlare è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ho un'amica. Lei vive in Canada. (una frase sola)", "Ti ho parlato di quel film. (comincia con: «Il film…»)", "Sono nato in questa città. (comincia con: «Questa è la città…»)", "Mi fido completamente di lui. (usa: «una persona su cui…»)", "Abbiamo litigato per questo motivo. (comincia con: «È il motivo…»)", "Lavoro con una collega molto simpatica. (comincia con: «La collega…»)", "Si sono conosciuti e si sono innamorati subito. (usa: colpo di fulmine)", "Era tardi, quindi siamo tornati a casa. (usa: per cui)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Lettera a un vecchio amico", hint: "Scrivi una lettera (150–180 parole) a un amico o un'amica che non senti da anni: ricorda come vi siete conosciuti, raccontagli com'è la tua vita adesso e proponi di rivedervi. Usa almeno sei pronomi relativi.", rows: 14, items: ["Caro / Cara…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: relativi", ["la persona con cui vivo", "il motivo per cui", "il giorno in cui", "l'amica di cui ti ho parlato", "la collega con la quale lavoro", "il ragazzo a cui ho scritto"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ci conosciamo da quando eravamo bambini.", "È una persona su cui posso sempre contare.", "Si sono lasciati dopo dieci anni.", "Non andiamo d'accordo su niente.", "Abbiamo litigato, ma poi abbiamo fatto pace."]),
          k.media([
            { type: "Film", title: "L'ultimo bacio (Gabriele Muccino, 2001)", where: "Cerca dove vederlo su JustWatch", why: "Un gruppo di amici trentenni in crisi: paura di crescere, coppie, tradimenti e amicizia." },
            { type: "Serie", title: "L'amica geniale", where: "RaiPlay, HBO Max", why: "Se l'hai iniziata nell'unità 14, ora puoi seguirla meglio: è la storia di un'amicizia lunga una vita." },
            { type: "Canzone", title: "Amici mai, Antonello Venditti", where: "Spotify, YouTube", why: "Una canzone famosa sull'amicizia e l'amore che non finiscono mai." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Descrivi il rapporto tra due personaggi del film o della serie: come si conoscono, come cambia il loro rapporto e perché.", items: ["I due protagonisti, che…"] },
        ],
      },
    ],

    exam: k.exam(33, {
      parole: ["la fiducia", "tradire", "convivere", "il colpo di fulmine", "andare d'accordo", "la famiglia allargata", "il conoscente", "fare pace", "volersi bene", "il patrigno"],
      contrario: ["amare → sostantivo", "fidarsi → sostantivo", "geloso → sostantivo", "sposarsi → sostantivo", "separarsi → sostantivo", "affetto → aggettivo"],
      verbiHint: "Completa: presente (noi), presente (loro), passato prossimo (noi).",
      verbiCols: ["presente (noi)", "presente (loro)", "passato (noi)"],
      verbi: [["incontrarsi", "", "", ""], ["sentirsi", "", "", ""], ["sposarsi", "", "", ""], ["volersi bene", "", "", ""]],
      completaHint: "Completa con «che», con preposizione + «cui» o con «il quale / la quale…».",
      completa: ["È il collega ___ divido l'ufficio.", "Ti ricordi la ragazza ___ ti ho parlato?", "Questa è la casa ___ sono cresciuta.", "Ho un amico ___ abita a Parigi.", "Non capisco il motivo ___ si sono lasciati.", "È una persona ___ puoi sempre contare.", "Ho parlato con la madre di Luca, ___ è medico.", "La persona ___ ho scritto non mi ha risposto."],
      trasformaHint: "Unisci le due frasi con un pronome relativo.",
      trasforma: ["Ho un fratello. Mio fratello vive in Giappone.", "Ecco la ragazza. Sono uscito con lei ieri.", "Questo è il libro. Ti ho parlato del libro.", "Ricordo il giorno. Ci siamo sposati quel giorno.", "Ho un'amica. Racconto tutto a questa amica.", "È il quartiere. Abitavo nel quartiere da bambino."],
      leggi: {
        text: [
          "Lettera alla rubrica «Cuori in ascolto»: Ho 34 anni e da sei anni vivo con Paolo, che amo molto. Il problema è sua madre, con cui non vado per niente d'accordo.",
          "Viene a casa nostra senza avvisare, critica il modo in cui cucino e dà consigli che nessuno le chiede. Paolo dice che lo fa per affetto e che dovrei avere pazienza.",
          "Io però mi sento sola in questa situazione, perché lui non mi difende mai. Non voglio litigare con la persona che amo, ma non ce la faccio più. — Elisa, Verona",
        ],
        questions: ["Con chi vive Elisa? Da quanto tempo?", "Qual è il problema con la suocera?", "Che cosa pensa Paolo della situazione?", "Perché Elisa si sente sola?"],
      },
      ascolta: {
        script: [
          { who: "Matteo", text: "Ti ricordi di Andrea, il ragazzo con cui giocavo a calcio al liceo?" },
          { who: "Laura", text: "Quello che si è trasferito in Australia?" },
          { who: "Matteo", text: "Proprio lui. Mi ha scritto dopo quindici anni: torna in Italia a giugno e vuole organizzare una cena con tutta la vecchia squadra." },
          { who: "Laura", text: "Che bello! Ma vi sentivate ancora?" },
          { who: "Matteo", text: "No, ci eravamo persi di vista. È il tipo di persona a cui pensi spesso, ma che non chiami mai." },
        ],
        questions: ["Chi è Andrea?", "Dove vive adesso?", "Che cosa vuole organizzare? Quando?", "Matteo e Andrea si sentivano ancora? Come lo spiega Matteo?"],
      },
      parla: ["Parla di un'amicizia importante della tua vita.", "Definisci con frasi relative: un ex, la suocera, un conoscente.", "Come sono cambiate le famiglie nel tuo paese?", "Che cosa è più importante in una relazione, secondo te? Argomenta."],
      role: ["Un amico ti chiede consiglio: vuole lasciare la fidanzata ma ha paura di ferirla.", "Fagli domande per capire bene la situazione.", "Dagli un consiglio chiaro e argomentato."],
      dettato: ["la persona di cui mi fido", "Ci siamo conosciuti in treno.", "il motivo per cui ti ho chiamato", "Non andiamo d'accordo.", "la collega con la quale lavoro", "Si vogliono molto bene."],
      traduci: ["Ho un'amica. L'amica vive a Lisbona. (una frase sola)", "Lavoro con Marco. (comincia con: «Marco è il collega…»)", "Ti ho parlato di questa canzone. (comincia con: «Questa è la canzone…»)", "Era molto tardi, quindi abbiamo preso un taxi. (usa: per cui)", "Mi posso fidare di lei. (usa: una persona su cui…)", "Ci siamo innamorati il primo giorno. (usa: colpo di fulmine)"],
      scrivi: { hint: "Rispondi a Elisa (la lettera della parte 6) come esperto della rubrica: 120–150 parole, con consigli concreti e almeno quattro pronomi relativi.", start: "Cara Elisa," },
    }),
  };
})();
