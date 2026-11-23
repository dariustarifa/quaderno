// Unità 74 · Dibattito — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[74] = {
    n: 74,
    level: "B2",
    title: "Dibattito",
    goal: "Persuadere e dibattere in modo efficace, riconoscendo le tecniche retoriche, e usare le costruzioni causative con «fare» e «lasciare» + infinito (mi ha fatto cambiare idea, lascialo parlare).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Nell'unità 55 hai imparato a costruire un argomento. Ora passi al dibattito vero: persuadere, rispondere alle obiezioni, riconoscere i trucchi retorici degli altri.",
              "Grammatica: le costruzioni causative. «Fare + infinito» indica che qualcuno provoca un'azione («Mi hai fatto ridere», «Ho fatto riparare la bici»). «Lasciare + infinito» indica che qualcuno permette un'azione («Lasciami parlare!»). Vedrai anche «farsi + infinito» e la posizione dei pronomi.",
            ],
          },
          {
            kind: "intro", title: "Fare e lasciare", hint: "Un'anticipazione",
            examples: [
              { it: "Il suo discorso mi ha fatto cambiare idea.", es: "fare: provocare" },
              { it: "Lasciami finire, per favore!", es: "lasciare: permettere" },
              { it: "Si è fatto convincere troppo facilmente.", es: "farsi: subire / chiedere" },
              { it: "Gliel'ho fatto notare.", es: "pronomi combinati" },
            ],
            text: ["In un dibattito queste costruzioni servono continuamente: per chiedere la parola, per accusare, per concedere."],
          },
          { kind: "speak", title: "Chi ti convince?", hint: "Prima di cominciare: c'è stata una persona o un discorso che ti ha fatto cambiare idea su qualcosa di importante?", items: ["Una volta qualcuno mi ha fatto cambiare idea su…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico del dibattito", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "persuadere", "confutare", "controbattere", "la retorica", "l'oratore",
              "il moderatore", "il diritto di replica", "prendere la parola", "interrompere", "il punto debole",
              "la fallacia", "l'attacco personale", "il falso dilemma", "la generalizzazione", "lo slogan",
              "la propaganda", "il pubblico", "fare leva su", "smontare un argomento", "avere l'ultima parola",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["persuadere → (sostantivo)", "persuadere → (aggettivo)", "confutare → (sostantivo)", "convincere → (aggettivo)", "replicare → (sostantivo)", "interrompere → (sostantivo)", "dibattere → (sostantivo)", "moderare → (chi modera)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione, su un dibattito che hai visto o immaginato.", items: ["prendere la parola", "smontare un argomento", "fare leva su", "avere l'ultima parola", "il diritto di replica", "un attacco personale", "il punto debole", "controbattere"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La voce dell'oratore", hint: "Persuadere con la voce",
            text: [
              "Un buon oratore varia il volume e la velocità: rallenta sui punti importanti, accelera sugli esempi, fa pause prima delle frasi chiave.",
              "La regola del tre: le idee in gruppi di tre si ricordano meglio. «Più lavoro, più scuole, più futuro».",
              "Per interrompere con cortesia: tono basso e deciso: «Scusi, | posso dire una cosa?».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con il ritmo dell'oratore.", items: ["Più lavoro, | più scuole, | più futuro.", "Lasciatemi finire, | per favore.", "Questo mi fa pensare | che abbiamo sbagliato.", "Non fatevi ingannare | dagli slogan.", "Scusi, | posso replicare?"] },
          { kind: "shadow", title: "Pronomi e causativi", hint: "Ripeti con fluidità.", items: ["Fammi parlare.", "Lasciala stare.", "Gliel'ho fatto notare.", "Me l'hanno fatto capire.", "Non farti convincere."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Fare + infinito", hint: "La costruzione causativa",
            text: [
              "«Fare + infinito»: il soggetto non fa l'azione, ma la provoca o la fa fare a qualcun altro: «Ho fatto riparare la macchina» (dal meccanico), «Il film mi ha fatto piangere».",
              "Chi compie l'azione si introduce con «a» o «da» se c'è anche un oggetto: «Ho fatto leggere il testo a Marco / da Marco».",
              "I pronomi vanno prima di «fare» (o attaccati all'imperativo e all'infinito): «L'ho fatto riparare», «Fammi vedere», «Gliel'ho fatto notare».",
              "«Farsi + infinito»: l'azione è fatta da altri per il soggetto, o il soggetto la subisce: «Mi sono fatto tagliare i capelli», «Si è fatto ingannare».",
            ],
            table: { head: ["costruzione", "esempio"], rows: [["fare + inf.", "ho fatto riparare la bici"], ["fare + inf. + a", "l'ho fatto leggere a Marco"], ["farsi + inf.", "mi sono fatto aiutare"], ["imperativo", "fammi vedere"]] },
          },
          k.table("Fare + infinito", [
            ["Il meccanico ha riparato la mia macchina. (io → fare)", "Ho fatto riparare la macchina."],
            ["Il suo discorso: io ho cambiato idea. (fare)", ""],
            ["Il parrucchiere mi ha tagliato i capelli. (io → farsi)", ""],
            ["Ho chiesto a Paolo di leggere il testo. (fare + a)", ""],
            ["Voglio vedere il documento. (imperativo: tu → fare)", ""],
            ["Hanno ingannato Luca facilmente. (Luca → farsi)", ""],
          ], "Riscrivi ogni frase con la costruzione causativa.", ["causativa"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con «fare» o «farsi» al tempo giusto (con i pronomi se servono).",
            items: [
              "Quel comico mi ___ sempre ridere.", "Domani ___ (io) controllare la vista dall'oculista.", "Il moderatore ci ___ parlare due minuti ciascuno.", "Non ___ (tu) prendere in giro: quello slogan è falso!", "Le sue parole mi ___ riflettere a lungo.", "Il candidato ___ scrivere il discorso da un esperto.", "Ho notato un errore e gliel'ho ___ notare.", "___ (tu, imperativo) vedere quel grafico!",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Lasciare + infinito", hint: "Permettere",
            text: [
              "«Lasciare + infinito» = permettere: «Lascia parlare gli altri!», «I genitori non lo lasciano uscire la sera».",
              "Pronomi: «Lasciami parlare», «Non lasciarti convincere», «Lasciala stare».",
              "Espressioni fisse: lasciar perdere (non insistere), lasciar correre (non reagire), lasciar stare (non toccare / non disturbare), lasciarsi andare (rilassarsi, abbandonarsi).",
              "«Fare sì che + congiuntivo» = fare in modo che: «Dobbiamo fare sì che tutti possano parlare».",
            ],
          },
          k.negativa(["Permetti agli altri di parlare!", "Non insistere, non vale la pena.", "Non permettere che ti convincano!", "I suoi genitori non le permettono di uscire.", "Non reagire, questa volta.", "Dobbiamo fare in modo che tutti partecipino."], "Riscrivi ogni frase con «lasciare» + infinito, un'espressione fissa o «fare sì che».", "con lasciare / fare"),
          {
            kind: "intro", title: "Le fallacie", hint: "I trucchi della retorica",
            text: ["Attacco personale: criticare la persona invece dell'argomento. Falso dilemma: presentare solo due alternative quando ce ne sono di più. Generalizzazione: da un caso trarre una regola. Uomo di paglia: deformare l'argomento dell'altro per attaccarlo più facilmente. Appello alla paura: convincere spaventando."],
          },
          {
            kind: "fill", title: "Riconosci la fallacia", hint: "Scrivi il nome della fallacia: attacco personale, falso dilemma, generalizzazione, uomo di paglia, appello alla paura.",
            items: ["«O sei con noi, o sei contro di noi.» → ___", "«Lui parla di ambiente, ma ha la macchina!» → ___", "«Mio cugino è stato derubato a Napoli: tutta Napoli è pericolosa.» → ___", "«Se non votate per noi, il paese crollerà.» → ___", "«Lei vuole meno auto in centro: quindi vuole distruggere i negozi!» → ___", "«Gli esperti sbagliano sempre: guardate quella volta…» → ___"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il dibattito in TV", "Due candidati sindaci discutono della chiusura del centro storico alle auto.", [
            { who: "Moderatrice", text: "Signor Bassi, lei è contrario alla chiusura del centro alle auto. Perché?" },
            { who: "Sig. Bassi", text: "Perché i commercianti rischiano di chiudere. La mia avversaria vuole far morire il centro!" },
            { who: "Sig.ra Conti", text: "Mi lasci rispondere. Io non voglio far morire niente: voglio far respirare la città. E i dati di altre città dimostrano che, chiuso il traffico, i negozi vendono di più." },
            { who: "Sig. Bassi", text: "I dati si possono far dire quello che si vuole." },
            { who: "Sig.ra Conti", text: "Questo è un modo comodo di non rispondere. Le faccio notare che anche i commercianti di Pontevedra, in Spagna, all'inizio erano contrari." },
            { who: "Moderatrice", text: "Grazie. Lasciamo l'ultima parola al pubblico." },
          ], ["Perché il signor Bassi è contrario?", "Quale fallacia usa contro la signora Conti?", "Come risponde lei? Con quale argomento?", "Che cosa dice il signor Bassi sui dati? Che cosa risponde la signora Conti?", "Trova tutte le costruzioni con «fare» e «lasciare».", "Chi ti ha convinto di più? Perché?"]),
          k.listen("Il consiglio dell'allenatore", "Un insegnante prepara una studentessa a una gara di dibattito.", [
            { who: "Prof. Marchi", text: "Ricordati: non farti trascinare nelle provocazioni. Lascia che l'avversario parli, prendi appunti e poi rispondi con calma." },
            { who: "Irene", text: "E se mi interrompe?" },
            { who: "Prof. Marchi", text: "Fagli notare con gentilezza che non hai finito. E se usa un attacco personale, lascia perdere: rispondi solo agli argomenti." },
            { who: "Irene", text: "Mi fa paura soprattutto il pubblico." },
            { who: "Prof. Marchi", text: "Fatti aiutare dai tuoi dati: chi ha prove concrete non ha bisogno di alzare la voce." },
          ], ["Qual è il primo consiglio del professore?", "Che cosa deve fare Irene se l'avversario la interrompe?", "E se usa un attacco personale?", "Di che cosa ha paura Irene?", "Come la rassicura il professore?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Le armi della persuasione", [
            "Più di duemila anni fa, Aristotele individuò tre strumenti per convincere un pubblico. Il primo è l'ethos: la credibilità di chi parla. Se l'oratore sembra competente e onesto, il pubblico è disposto ad ascoltarlo.",
            "Il secondo è il pathos: la capacità di suscitare emozioni. Una storia personale, un'immagine forte, un tono appassionato possono far commuovere, indignare o sperare. Il terzo è il logos: la forza degli argomenti, dei dati e dei ragionamenti.",
            "I grandi oratori usano tutti e tre gli strumenti insieme. Il problema nasce quando uno di essi prende il sopravvento: un discorso fatto solo di emozioni può far dimenticare al pubblico di verificare i fatti; uno fatto solo di dati rischia di non far muovere nessuno.",
            "Oggi, nell'epoca dei social network, il pathos domina: i messaggi brevi, gli slogan e le immagini scioccanti si diffondono molto più rapidamente dei ragionamenti complessi. Per questo è sempre più importante imparare a riconoscere le fallacie e non lasciarsi manipolare.",
            "Un buon cittadino, oggi, dovrebbe essere un po' oratore e un po' critico: saper difendere le proprie idee, ma anche fermarsi a chiedersi, davanti a un discorso che lo emoziona molto, «che cosa mi sta facendo provare, e perché?».",
          ], ["Quali sono i tre strumenti della persuasione secondo Aristotele?", "Che cos'è l'ethos? E il pathos?", "Che cosa succede quando uno strumento prende il sopravvento?", "Perché oggi domina il pathos?", "Quale consiglio dà il testo ai cittadini?", "Trova cinque costruzioni con «fare» o «lasciare» + infinito."]),
          k.spagna("Scegli un discorso politico o pubblicitario del tuo paese e analizzalo: quali strumenti usa (ethos, pathos, logos)? Ci sono fallacie? Che cosa ti ha fatto provare?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Gestire un dibattito", hint: "Formule utili",
            text: ["Chiedere la parola: «Posso intervenire?», «Mi permetta di replicare». Difendere il proprio turno: «Mi lasci finire», «Non mi faccia dire cose che non ho detto». Smascherare una fallacia: «Questo è un attacco personale, non un argomento», «Non è vero che le alternative sono solo due». Concludere: «Lascio giudicare al pubblico»."],
          },
          k.rispondi(["Ti piace discutere o preferisci evitare i conflitti?", "Che cosa ti fa arrabbiare in una discussione?", "Ti sei mai lasciato convincere da qualcuno e poi te ne sei pentito?", "Quali slogan pubblicitari o politici ricordi?", "Che cosa ti fa fidare di un oratore?", "Ti sei mai fatto aiutare per preparare un discorso?"]),
          { kind: "speak", title: "Ethos, pathos, logos", hint: "Difendi per due minuti la tesi «Ogni città dovrebbe avere un giorno al mese senza auto», usando prima un argomento di credibilità, poi uno emotivo, poi uno razionale.", items: ["Come cittadino che…"] },
          {
            kind: "roleplay", title: "Il dibattito pubblico", hint: "L'IA è il tuo avversario in un dibattito sulla settimana lavorativa di quattro giorni. Usa almeno due fallacie: tu devi riconoscerle e smascherarle.",
            steps: ["Presenta la tua tesi con ethos, pathos e logos.", "Difendi il tuo turno se vieni interrotto.", "Smaschera la prima fallacia.", "Smaschera la seconda fallacia.", "Chiudi lasciando giudicare il pubblico."],
          },
          {
            kind: "roleplay", title: "Il moderatore", hint: "Sei il moderatore di un dibattito acceso tra due ospiti (entrambi l'IA). Devi far rispettare i turni.",
            steps: ["Presenta il tema e le regole.", "Dai la parola al primo ospite.", "Fai tacere con cortesia chi interrompe.", "Fai notare a un ospite che non ha risposto alla domanda.", "Chiudi il dibattito con un riassunto imparziale."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti una discussione in cui qualcuno ti ha fatto cambiare idea, o in cui tu hai fatto cambiare idea a qualcuno.", items: ["Quella volta…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il discorso mi ha commosso. (fare + infinito)", "Il tecnico ha riparato il computer per me. (farsi + infinito)", "Permettimi di spiegare! (lasciare)", "Ho chiesto a Giulia di controllare il testo. (fare + a)", "Non insistere. (lasciar perdere)", "Non permettere che ti manipolino. (lasciarsi)", "Devono garantire che tutti abbiano accesso. (fare sì che)", "Gli ho fatto notare l'errore. (sostituisci «l'errore» con un pronome)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "Il discorso", hint: "Scrivi un discorso persuasivo (280–320 parole) da pronunciare davanti al consiglio comunale su un tema a scelta. Usa ethos, pathos e logos, la regola del tre, almeno sei costruzioni con «fare» o «lasciare» e rispondi in anticipo a una possibile obiezione, senza usare fallacie.", rows: 20, items: ["Tema:", "Discorso:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: espressioni", ["mi ha fatto cambiare idea", "lasciami finire", "gliel'ho fatto notare", "lascia perdere", "non farti ingannare", "fare sì che"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il suo discorso mi ha fatto riflettere.", "Mi sono fatto tagliare i capelli.", "Questo è un attacco personale, non un argomento.", "Non è vero che le alternative sono solo due.", "Lascio giudicare al pubblico."]),
          k.media([
            { type: "Film", title: "Viva la libertà (Roberto Andò, 2013)", where: "Cerca dove vederlo su JustWatch", why: "Un politico in crisi viene sostituito dal fratello gemello, che conquista tutti con discorsi sinceri: riflessione sulla retorica." },
            { type: "Film", title: "Il divo (Paolo Sorrentino, 2008)", where: "Cerca dove vederlo su JustWatch", why: "Ritratto grottesco di Giulio Andreotti: potere, silenzi e frasi memorabili." },
            { type: "TV", title: "Piazzapulita (La7)", where: "la7.it", why: "Talk show politico: ascolta un dibattito e prendi nota delle fallacie che riconosci." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta un discorso del film o del talk show che ti ha colpito: che cosa ti ha fatto provare? Quali tecniche usava?", items: ["Il discorso che mi ha colpito…"] },
        ],
      },
    ],

    exam: k.exam(74, {
      parole: ["persuadere", "confutare", "controbattere", "la retorica", "il moderatore", "il diritto di replica", "la fallacia", "il falso dilemma", "fare leva su", "smontare un argomento"],
      contrario: ["persuadere → sostantivo", "convincere → aggettivo", "convincente → contrario", "interrompere → sostantivo", "moderare → chi modera", "pubblico → contrario"],
      verbiHint: "Riscrivi con la costruzione causativa.",
      verbiCols: ["causativa"],
      verbi: [["Il meccanico ha riparato la mia bici. (io → fare)", ""], ["Il film: io ho pianto. (fare)", ""], ["Il dentista mi ha curato un dente. (io → farsi)", ""], ["Permetti a Luca di parlare. (lasciare)", ""], ["Voglio vedere la foto. (tu, imperativo: fare)", ""], ["Hanno truffato Anna. (Anna → farsi)", ""]],
      completaHint: "Completa con «fare», «farsi» o «lasciare» al tempo giusto.",
      completa: ["Quel film mi ___ piangere.", "Domani ___ (io) tagliare i capelli.", "___ (tu, imperativo) parlare gli altri!", "Non ___ (tu) ingannare dagli slogan.", "Gli ho ___ notare l'errore.", "Il professore ci ___ uscire prima.", "Dobbiamo ___ sì che tutti partecipino.", "Lascia ___ (non insistere): non ne vale la pena."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Ho chiesto a Marco di leggere la lettera. (fare + a)", "Permettimi di finire. (lasciare)", "Non insistere. (lasciar perdere)", "Il parrucchiere mi ha tinto i capelli. (farsi)", "Non permettere che ti convincano. (lasciarsi)", "«O voti per me o il paese fallisce.» (spiega quale fallacia è)"],
      leggi: {
        text: [
          "Durante una campagna elettorale, un candidato ha dichiarato: «Chi vota per il mio avversario vuole far fallire la città». La frase ha fatto discutere molto.",
          "Secondo gli esperti di comunicazione, si tratta di un falso dilemma unito a un attacco personale: il candidato non ha confutato le proposte dell'avversario, ma ha cercato di far paura agli elettori.",
          "Il giorno dopo, l'avversario ha risposto con calma: «Non mi lascerò trascinare nelle provocazioni. Lascio giudicare ai cittadini, dati alla mano».",
        ],
        questions: ["Che cosa ha dichiarato il candidato?", "Quali fallacie ha usato secondo gli esperti?", "Che cosa non ha fatto il candidato?", "Come ha risposto l'avversario?"],
      },
      ascolta: {
        script: [
          { who: "Andrea", text: "Ieri al dibattito non mi hanno lasciato parlare per più di un minuto!" },
          { who: "Sara", text: "E tu che cosa hai fatto?" },
          { who: "Andrea", text: "Ho fatto notare al moderatore che l'altro aveva parlato il doppio. Alla fine mi ha fatto replicare." },
          { who: "Sara", text: "Bravo. E sei riuscito a convincere il pubblico?" },
          { who: "Andrea", text: "Non lo so, ma almeno non mi sono fatto mettere i piedi in testa!" },
        ],
        questions: ["Qual è stato il problema di Andrea al dibattito?", "Che cosa ha fatto notare al moderatore?", "Come si è risolta la situazione?", "Che cosa significa «non farsi mettere i piedi in testa»?"],
      },
      parla: ["Difendi una tesi usando ethos, pathos e logos.", "Racconta quando qualcuno ti ha fatto cambiare idea.", "Spiega tre fallacie con un esempio.", "Come si modera un dibattito?"],
      role: ["L'IA è il tuo avversario in un dibattito e usa due fallacie.", "Riconoscile e smascherale.", "Difendi il tuo turno di parola."],
      dettato: ["mi ha fatto riflettere", "lasciami finire", "gliel'ho fatto notare", "lascia perdere", "il falso dilemma", "l'attacco personale"],
      traduci: ["La canzone mi ha fatto ballare. (fare)", "Ho fatto pulire la casa. (da un'impresa)", "Permettetemi di parlare! (lasciare)", "Non permettere che ti ingannino. (lasciarsi / farsi)", "Il medico mi ha visitato. (io → farsi visitare)", "Devono garantire che il voto sia libero. (fare sì che)"],
      scrivi: { hint: "Scrivi (180–220 parole) l'analisi di un dibattito o di una pubblicità che hai visto: quali strumenti di persuasione usava, quali fallacie, che cosa ti ha fatto provare e se ti ha convinto.", start: "Il dibattito che ho visto…" },
    }),
  };
})();
