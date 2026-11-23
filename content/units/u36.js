// Unità 36 · Speranze e paure — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[36] = {
    n: 36,
    level: "B1",
    title: "Speranze e paure",
    goal: "Parlare di speranze, paure, emozioni e necessità con le espressioni impersonali e i verbi di sentimento seguiti dal congiuntivo.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di quello che speri e di quello che temi, delle tue emozioni davanti ai fatti («Sono contento che tu sia qui») e di ciò che è necessario o importante.",
              "Grammatica: il congiuntivo dopo le espressioni impersonali (è importante che, bisogna che, è possibile che) e dopo i verbi ed espressioni di sentimento (ho paura che, sono felice che, mi dispiace che).",
              "Cultura: la scaramanzia, cioè le superstizioni degli italiani.",
            ],
          },
          {
            kind: "intro", title: "È importante che… / Ho paura che…", hint: "Un'anticipazione",
            text: ["Dopo un'espressione impersonale con «che» si usa il congiuntivo: «È importante che tu dorma».", "Anche dopo le emozioni: «Ho paura che piova», «Sono contenta che siate venuti»."],
            examples: [
              { it: "È meglio che tu parta presto.", es: "espressione impersonale + congiuntivo" },
              { it: "Temo che non ci sia più tempo.", es: "paura + congiuntivo" },
              { it: "Mi dispiace che tu stia male.", es: "sentimento + congiuntivo" },
            ],
          },
          { kind: "speak", title: "Speranze e paure", hint: "Prima di cominciare: di che cosa avevi paura da bambino? E oggi?", items: ["Da bambino avevo paura di… Oggi…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Emozioni forti", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la speranza", "la paura", "temere", "l'ansia", "preoccuparsi",
              "rassicurare", "il timore", "la fobia", "il coraggio", "affrontare",
              "fiducioso", "pessimista", "la scaramanzia", "portare sfortuna", "toccare ferro",
              "in bocca al lupo", "lo spavento", "il sollievo", "sognare a occhi aperti", "avere i brividi",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["sperare → (sostantivo)", "paura → (aggettivo)", "ansia → (aggettivo)", "coraggio → (aggettivo)", "preoccuparsi → (sostantivo)", "spaventare → (sostantivo)", "fiducia → (aggettivo)", "sollevato → (sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: bisogna che → Bisogna che tutti facciano la loro parte.", items: ["è importante che", "bisogna che", "ho paura che", "sono contento che", "è un peccato che", "temo di", "in bocca al lupo", "affrontare"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Esclamazioni ed emozioni", hint: "Intonazione",
            text: [
              "Le espressioni di emozione si dicono con un'intonazione marcata: «Che bello che tu sia venuto!» (gioia), «Peccato che tu non possa restare!» (dispiacere), «Speriamo bene…» (preoccupazione, tono basso).",
              "Formule fisse da conoscere: «In bocca al lupo!» — «Crepi!» (per augurare fortuna, senza dire «grazie»); «Tocca ferro!»; «Meno male!».",
              "«Speriamo» da solo è molto comune: «Speriamo che non piova».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti con l'emozione giusta.", items: ["Che bello che tu sia qui!", "Peccato che non possiate venire.", "Speriamo che vada tutto bene.", "Ho paura che sia troppo tardi.", "Meno male che sei arrivato!"] },
          { kind: "shadow", title: "Scaramanzia", hint: "Ripeti le formule.", items: ["In bocca al lupo per l'esame! — Crepi!", "Non dirlo, porta sfortuna!", "Tocca ferro!", "Speriamo bene, incrociamo le dita."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Espressioni impersonali", hint: "È + aggettivo + che + congiuntivo",
            text: [
              "Necessità e importanza: bisogna che, occorre che, è necessario che, è importante che, è fondamentale che, è meglio che.",
              "Possibilità: è possibile che, è probabile che, può darsi che, è difficile che, è impossibile che.",
              "Giudizio: è giusto che, è strano che, è normale che, è un peccato che, è incredibile che.",
              "Se non c'è un soggetto preciso, si usa l'infinito: «È importante dormire» (tutti), ma «È importante che tu dorma».",
              "Attenzione: con la certezza si usa l'indicativo: «È vero che…», «È chiaro che…», «È sicuro che…».",
            ],
          },
          k.table("Congiuntivo: ripasso", [
            ["dormire", "dorma", "", ""],
            ["capire", "", "capiamo", ""],
            ["piovere (solo 3ª)", "piova", "—", "—"],
            ["esserci", "ci sia", "—", "ci siano"],
            ["volerci", "ci voglia", "—", ""],
            ["riuscire", "", "", ""],
          ], "Completa il congiuntivo presente: che io / che lui, che noi, che loro.", ["che io / lui", "che noi", "che loro"]),
          {
            kind: "fill", title: "È importante che…", hint: "Completa con il congiuntivo, l'indicativo o l'infinito del verbo tra parentesi.",
            items: [
              "È importante che i bambini ___ (dormire) almeno nove ore.", "Bisogna che tutti ___ (fare) la loro parte.", "È possibile che domani ___ (nevicare).", "È meglio ___ (partire) presto, c'è traffico.", "È strano che Marco non ___ (rispondere) al telefono.", "È vero che lui ___ (essere) un po' pessimista.", "Può darsi che ___ (esserci) uno sciopero dei treni.", "È un peccato che voi non ___ (potere) restare.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Sentimenti e paure", hint: "Verbi ed espressioni di emozione",
            text: [
              "Con «che» + congiuntivo: essere contento / felice / triste che, mi dispiace che, mi fa piacere che, ho paura che, temo che, mi preoccupa che, mi stupisce che, non vedo l'ora che.",
              "Con lo stesso soggetto: «di» + infinito: «Sono contento di vederti», «Ho paura di sbagliare», «Temo di non farcela».",
              "«Speriamo che» e «Peccato che» si usano anche da soli, senza verbo principale.",
            ],
            table: { head: ["", "esempio"], rows: [["due soggetti", "Ho paura che tu ti faccia male."], ["stesso soggetto", "Ho paura di farmi male."], ["gioia", "Sono felice che siate qui."], ["dispiacere", "Peccato che piova."]] },
          },
          {
            kind: "fill", title: "Emozioni", hint: "Completa con il congiuntivo o con «di» + infinito.",
            items: ["Sono contenta che tu ___ (trovare) lavoro.", "Sono contenta di ___ (trovare) lavoro.", "Ho paura che i miei genitori non ___ (capire).", "Temo di ___ (avere) sbagliato strada.", "Mi dispiace che voi ___ (dovere) andare via.", "Non vedo l'ora che ___ (arrivare) l'estate.", "Mi preoccupa che lui ___ (lavorare) così tanto.", "Peccato che non ___ (esserci) più biglietti!"],
          },
          {
            kind: "intro", title: "Rassicurare qualcuno", hint: "Formule utili",
            text: ["Per tranquillizzare: «Non preoccuparti», «Vedrai che andrà tutto bene», «Sono sicuro che ce la farai» (certezza → indicativo), «Stai tranquillo», «Non è niente di grave»."],
          },
          k.negativa(["Ho paura di sbagliare. (soggetto: tu)", "Sono felice di essere qui. (soggetto: voi)", "È importante studiare. (soggetto: tu)", "Temo di non arrivare in tempo. (soggetto: loro)", "Spero di vincere. (soggetto: la mia squadra)"], "Riscrivi ogni frase cambiando il soggetto della seconda parte come indicato: passa dall'infinito al congiuntivo.", "con il congiuntivo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La paura di volare", "Una ragazza confessa a un amico la sua fobia prima di un viaggio.", [
            { who: "Marta", text: "Domani parto per New York e ho una paura terribile. Non ho mai preso un aereo per più di due ore." },
            { who: "Pietro", text: "Di che cosa hai paura, esattamente?" },
            { who: "Marta", text: "Ho paura che ci siano turbolenze, che l'aereo cada… lo so che è irrazionale." },
            { who: "Pietro", text: "È normale che tu sia agitata. Ma statisticamente è molto più pericoloso andare in macchina." },
            { who: "Marta", text: "Lo so, ma non serve a niente saperlo." },
            { who: "Pietro", text: "Allora è importante che tu ti distragga: scarica dei film, porta un libro. E bisogna che tu dorma bene stanotte." },
            { who: "Marta", text: "Speriamo… Grazie, Pietro. Sono contenta che tu mi abbia ascoltata." },
            { who: "Pietro", text: "Figurati! In bocca al lupo!" },
          ], ["Dove va Marta? Perché ha paura?", "Che cosa teme esattamente?", "Come prova a rassicurarla Pietro all'inizio?", "Che consigli le dà?", "Come si conclude la conversazione?"]),
          k.listen("Il clima e i giovani", "Un servizio radiofonico su giovani e futuro.", [
            { who: "Giornalista", text: "Secondo una ricerca, sette giovani italiani su dieci hanno paura che il cambiamento climatico peggiori la loro vita nei prossimi anni." },
            { who: "Ragazza", text: "Io temo che fra trent'anni non si possa più vivere bene nel Sud, con le estati sempre più calde." },
            { who: "Ragazzo", text: "Io invece sono fiducioso. È vero che il problema è grave, ma è possibile che la tecnologia ci aiuti." },
            { who: "Giornalista", text: "Gli psicologi parlano di «ecoansia». Per affrontarla, consigliano di non restare soli e di agire: è importante che ognuno faccia qualcosa di concreto." },
          ], ["Di che cosa hanno paura molti giovani italiani?", "Che cosa teme la ragazza?", "Perché il ragazzo è fiducioso?", "Che cos'è l'«ecoansia»?", "Che cosa consigliano gli psicologi?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La scaramanzia", [
            "Anche gli italiani più razionali, a volte, sono un po' superstiziosi. In Italia la superstizione si chiama «scaramanzia» e serve, scherzando ma non troppo, a tenere lontana la sfortuna.",
            "Il numero sfortunato non è il 13 ma il 17, perché in numeri romani si scrive XVII, l'anagramma di «VIXI», cioè «ho vissuto», quindi «sono morto». Venerdì 17 è il giorno peggiore: alcuni non partono e non si sposano.",
            "Porta sfortuna anche il gatto nero che attraversa la strada, rompere uno specchio (sette anni di guai!) o aprire un ombrello in casa. Per proteggersi si «tocca ferro» o si fanno le corna con la mano.",
            "Prima di un esame non si dice «buona fortuna», ma «in bocca al lupo», e chi riceve l'augurio risponde «crepi», cioè «che muoia il lupo».",
            "Nel Sud, soprattutto a Napoli, il corno rosso è un portafortuna molto diffuso. Molti dicono di non crederci… ma ne tengono uno in tasca, non si sa mai.",
          ], ["Che cos'è la scaramanzia?", "Perché il 17 porta sfortuna?", "Quali altre cose portano sfortuna? Che cosa si fa per proteggersi?", "Che cosa si dice prima di un esame? Che cosa si risponde?", "Che cos'è il corno rosso?", "Sei superstizioso? Che cosa pensi di queste tradizioni?"]),
          k.spagna("Quali superstizioni esistono nel tuo paese? Sono simili a quelle italiane? Usa espressioni come «è strano che», «è normale che»."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare del futuro con speranza o timore", hint: "Formule utili",
            text: ["Speranza: «Spero che…», «Mi auguro che…», «Sarebbe bello se…», «Sono fiducioso».", "Timore: «Temo che…», «Ho paura che…», «Mi preoccupa che…», «Non sono molto ottimista».", "Possibilità: «È probabile che…», «Può darsi che…», «È difficile che…»."],
          },
          k.rispondi(["Di che cosa hai più paura? Come la affronti?", "Che cosa speri per il tuo futuro?", "È possibile che tra vent'anni lavoriamo tutti da casa?", "Che cosa ti preoccupa del mondo di oggi?", "Sei ottimista o pessimista di carattere?", "Che cosa è importante che i giovani sappiano prima di andare a vivere da soli?"]),
          { kind: "speak", title: "Reagisci con un'emozione", hint: "Reagisci a ogni notizia con un'espressione di emozione + congiuntivo. Esempio: Ho vinto il concorso! → Sono felicissimo che tu l'abbia vinto!", items: ["Domani c'è sciopero dei treni.", "Mia sorella aspetta un bambino.", "Hanno chiuso il cinema del quartiere.", "Non posso venire alla tua festa.", "Finalmente ho trovato casa.", "Il tuo volo è stato cancellato."] },
          {
            kind: "roleplay", title: "Il colloquio di domani", hint: "Un amico ha un colloquio importante domani ed è nel panico. L'IA fa l'amico.",
            steps: ["Chiedigli di che cosa ha paura esattamente.", "Rassicuralo con almeno tre formule diverse.", "Dagli consigli con espressioni impersonali (è importante che, bisogna che).", "Proponi di fare una simulazione del colloquio.", "Salutalo con la formula giusta della scaramanzia."],
          },
          {
            kind: "roleplay", title: "Dal medico: l'ansia", hint: "Vai dal medico perché da settimane dormi male e ti senti agitato. L'IA fa il medico. Usa il «Lei».",
            steps: ["Descrivi i sintomi e da quando li hai.", "Spiega che cosa ti preoccupa in questo periodo.", "Ascolta le domande e rispondi con sincerità.", "Chiedi che cosa è meglio fare.", "Ringrazia e riassumi i consigli."],
          },
          { kind: "speak", title: "Il futuro che spero", hint: "Parla per due minuti: come speri che sia il mondo tra trent'anni? Che cosa temi? Che cosa bisogna che facciamo oggi?", items: ["Spero che fra trent'anni…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Devi dormire di più. (È importante che…)", "Forse piove domani. (È possibile che…)", "Che peccato! Non puoi venire. (Peccato che…)", "Sono felice: siete qui! (Sono felice che…)", "Sbaglio, ho paura. (Ho paura di…)", "Lui sbaglia, ho paura. (Ho paura che…)", "Sicuramente ce la farai. (Sono sicuro che…)", "Buona fortuna per l'esame! (usa la formula della scaramanzia)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Lettera al te stesso di domani", hint: "Scrivi una lettera (180–200 parole) a te stesso tra dieci anni: che cosa speri di aver realizzato, che cosa temi, che cosa è importante che tu non dimentichi. Usa almeno otto congiuntivi diversi.", rows: 14, items: ["Caro me / Cara me del futuro,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: espressioni", ["è importante che", "bisogna che", "può darsi che", "è un peccato che", "in bocca al lupo", "tocca ferro"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ho paura che sia tardi.", "Sono contenta che tu sia qui.", "È possibile che nevichi.", "Temo di non farcela.", "Speriamo che vada bene."]),
          k.media([
            { type: "Film", title: "Il ragazzo invisibile (Gabriele Salvatores, 2014)", where: "Cerca dove vederlo su JustWatch", why: "Un ragazzo timido di Trieste scopre di poter diventare invisibile: paure, coraggio e crescita." },
            { type: "YouTube", title: "Superstizioni italiane", where: "YouTube", why: "Cerca video sulle superstizioni italiane (il 17, il corno, il gatto nero): persone vere raccontano a che cosa credono «per scaramanzia»." },
            { type: "Podcast", title: "Indagini (Il Post)", where: "Spotify, Apple Podcasts", why: "Se ti è piaciuto nell'unità 18, adesso puoi seguirlo meglio. Ascolta un episodio intero." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Di che cosa ha paura il protagonista? Come la affronta? Che cosa speri che succeda dopo la fine?", items: ["Il protagonista ha paura che…"] },
        ],
      },
    ],

    exam: k.exam(36, {
      parole: ["temere", "rassicurare", "affrontare", "il timore", "la scaramanzia", "portare sfortuna", "il sollievo", "fiducioso", "può darsi che", "in bocca al lupo"],
      contrario: ["coraggioso → contrario", "ottimista → contrario", "speranza → contrario", "fortuna → contrario", "tranquillo → contrario", "possibile → contrario"],
      verbiHint: "Completa il congiuntivo presente: che io / che lui, che noi, che loro.",
      verbiCols: ["che io / lui", "che noi", "che loro"],
      verbi: [["riuscire", "", "", ""], ["esserci", "", "—", ""], ["capire", "", "", ""], ["volere", "", "", ""]],
      completaHint: "Completa con il congiuntivo, l'indicativo o l'infinito.",
      completa: ["È importante che tutti ___ (sapere) la verità.", "È vero che lui ___ (avere) molta esperienza.", "Ho paura di ___ (perdere) il treno.", "Ho paura che voi ___ (perdere) il treno.", "Peccato che non ___ (esserci) più posto.", "Sono contenta che i miei genitori ___ (venire) a trovarmi.", "È meglio ___ (partire) all'alba.", "Può darsi che domani ___ (fare) freddo."],
      trasformaHint: "Riscrivi ogni frase come indicato tra parentesi.",
      trasforma: ["Devi studiare. (È fondamentale che…)", "Forse arrivano tardi. (È probabile che…)", "Non puoi restare: che peccato! (Peccato che…)", "Siete venuti: sono felice! (Sono felice che…)", "Non ce la faccio, temo. (Temo di…)", "Ce la farai, ne sono sicuro. (Sono sicuro che…)"],
      leggi: {
        text: [
          "Domani Andrea comincia il suo primo lavoro in un grande studio di architettura a Milano. È felice che l'abbiano scelto tra cento candidati, ma ha paura di non essere all'altezza.",
          "Sua madre gli ha scritto: «È normale che tu sia agitato. Bisogna che tu abbia fiducia in te stesso: se ti hanno preso, è perché sei bravo».",
          "Andrea spera che i colleghi siano simpatici e che il capo gli dia il tempo di imparare. Stasera andrà a dormire presto e, per scaramanzia, si metterà la camicia portafortuna dell'esame di laurea.",
        ],
        questions: ["Che cosa succede domani ad Andrea?", "Perché è felice? Di che cosa ha paura?", "Che cosa gli scrive la madre?", "Che cosa spera Andrea? Che cosa farà per scaramanzia?"],
      },
      ascolta: {
        script: [
          { who: "Elena", text: "Mi dispiace che tu non sia potuto venire alla cena. Ti abbiamo pensato!" },
          { who: "Luca", text: "Ero a letto con la febbre. Ho paura che sia influenza." },
          { who: "Elena", text: "È meglio che tu stia a casa qualche giorno. Vuoi che ti porti qualcosa?" },
          { who: "Luca", text: "Sei gentilissima. Basta che tu mi porti un po' di brodo della tua nonna!" },
        ],
        questions: ["Perché Luca non è andato alla cena?", "Di che cosa ha paura?", "Che cosa gli consiglia Elena?", "Che cosa le chiede Luca?"],
      },
      parla: ["Di che cosa hai paura e come la affronti?", "Reagisci: «Il tuo migliore amico si trasferisce in Australia».", "Che cosa è importante che faccia un governo per i giovani?", "Racconta una superstizione del tuo paese."],
      role: ["Un'amica ha paura di guidare in autostrada: chiedile perché.", "Rassicurala e dalle consigli con il congiuntivo.", "Proponi di accompagnarla la prima volta."],
      dettato: ["È meglio che tu vada.", "Ho paura che piova.", "Sono felice che siate qui.", "Temo di sbagliare.", "Peccato che non ci sia.", "In bocca al lupo! Crepi!"],
      traduci: ["Dovete arrivare puntuali. (È necessario che…)", "Forse il negozio è chiuso. (Può darsi che…)", "Sono contento: hai vinto! (Sono contento che…)", "Ho paura: forse sbaglio. (Ho paura di…)", "Che peccato, il concerto è annullato! (Peccato che…)", "Sicuramente andrà bene. (Sono sicuro che…)"],
      scrivi: { hint: "Scrivi un messaggio (120–150 parole) ad Andrea (parte 6) per incoraggiarlo prima del primo giorno di lavoro: rassicuralo, dagli consigli e fagli gli auguri. Usa almeno cinque congiuntivi.", start: "Caro Andrea," },
    }),
  };
})();
