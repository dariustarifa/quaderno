// Unità 48 · Musica — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[48] = {
    n: 48,
    level: "B1",
    title: "Musica",
    goal: "Parlare di musica, gusti e concerti, usando l'infinito con le preposizioni giuste (cominciare a, smettere di, riuscire a…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare dei tuoi gusti musicali, di concerti, festival e strumenti, e conoscerai il Festival di Sanremo e i grandi cantautori italiani.",
              "Grammatica: i verbi seguiti da «a» o «di» + infinito (comincio a suonare, ho smesso di cantare), l'infinito dopo preposizioni (per, senza, prima di) e l'infinito usato come nome («Il cantare mi rilassa»).",
              "La scelta tra «a» e «di» non segue sempre una regola: per questo ti diamo le liste dei verbi più frequenti.",
            ],
          },
          {
            kind: "intro", title: "Ho cominciato a suonare…", hint: "Un'anticipazione",
            text: ["Alcuni verbi vogliono «a» + infinito: cominciare a, imparare a, riuscire a, continuare a, provare a.", "Altri vogliono «di»: finire di, smettere di, cercare di, decidere di, sperare di, pensare di."],
            examples: [
              { it: "A dieci anni ho cominciato a suonare la chitarra.", es: "cominciare a" },
              { it: "Ho smesso di suonare quando sono andato all'università.", es: "smettere di" },
              { it: "Non riesco a cantare quella canzone: è troppo alta.", es: "riuscire a" },
            ],
          },
          { kind: "speak", title: "La tua musica", hint: "Prima di cominciare: che musica ascolti? Suoni uno strumento? Conosci qualche canzone italiana?", items: ["Di solito ascolto…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il mondo della musica", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il cantautore", "il testo", "il ritornello", "la strofa", "la melodia",
              "il ritmo", "l'album", "il singolo", "il tormentone", "il concerto dal vivo",
              "la tournée", "il palco", "la band", "l'orchestra", "il direttore d'orchestra",
              "stonato", "intonato", "suonare a orecchio", "fare le prove", "il pubblico",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "chi lo suona", title: "Strumenti e musicisti",
            hint: "Scrivi il nome di chi suona ogni strumento. Esempio: il pianoforte → il / la pianista.",
            items: ["la chitarra", "il violino", "la batteria", "il basso", "il flauto", "la tromba", "il violoncello", "l'arpa"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: imparare a → Vorrei imparare a suonare il pianoforte.", items: ["cominciare a", "smettere di", "riuscire a", "cercare di", "senza", "prima di", "il ritornello", "il tormentone"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Cantare per pronunciare", hint: "La musica come esercizio",
            text: [
              "Cantare è uno dei modi migliori per migliorare la pronuncia: le canzoni allungano le vocali e fanno sentire bene le doppie.",
              "Nelle canzoni italiane le vocali finali si sentono sempre, anche quando le parole si legano: «amore mio» si canta «amoremìo».",
              "Scegli una canzone lenta, leggi il testo ad alta voce come una poesia e poi canta sopra la registrazione.",
            ],
          },
          { kind: "shadow", title: "Verbi con a e di", hint: "Ripeti fino a memorizzare le coppie.", items: ["cominciare a, continuare a, imparare a", "riuscire a, provare a, aiutare a", "finire di, smettere di, cercare di", "decidere di, sperare di, pensare di"] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con ritmo, quasi cantando.", items: ["Ho imparato a suonare a orecchio.", "Ha smesso di cantare dopo il primo album.", "Cerco di andare a un concerto ogni mese.", "Non riesco a togliermi dalla testa quel ritornello.", "Prima di salire sul palco, era agitatissimo."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "A o di + infinito", hint: "Le liste da sapere",
            text: [
              "Con «a»: cominciare, iniziare, continuare, imparare, insegnare, riuscire, provare, aiutare, abituarsi, prepararsi, andare / venire (a fare qualcosa), mettersi.",
              "Con «di»: finire, smettere, cercare, decidere, sperare, pensare, credere, dimenticare, ricordarsi, avere paura, avere bisogno, avere voglia, accettare, rifiutare, permettere, chiedere, dire.",
              "Senza preposizione: i verbi modali (voglio cantare), «preferire», «piacere», «sapere» (so suonare), «bisogna», «è importante».",
              "Attenzione: «provare a» = tentare; «cercare di» = sforzarsi. Sono quasi sinonimi, ma con preposizioni diverse.",
            ],
            table: { head: ["a", "di", "nessuna"], rows: [["cominciare a", "finire di", "volere"], ["riuscire a", "cercare di", "sapere"], ["imparare a", "smettere di", "preferire"], ["aiutare a", "decidere di", "bisogna"]] },
          },
          k.table("A, di o niente?", [
            ["cominciare", "a", "ho cominciato a cantare"],
            ["smettere", "", ""],
            ["riuscire", "", ""],
            ["sapere", "", ""],
            ["decidere", "", ""],
            ["insegnare", "", ""],
          ], "Scrivi la preposizione (o «—») e una frase al passato prossimo con il verbo «cantare» o «suonare».", ["preposizione", "esempio"]),
          {
            kind: "fill", title: "La preposizione giusta", hint: "Completa con «a», «di» o lascia vuoto con «—».",
            items: [
              "A sei anni ho cominciato ___ studiare il violino.", "Mia madre ha smesso ___ cantare nel coro.", "Non riesco ___ suonare questo accordo.", "Ho deciso ___ partecipare al concorso.", "Sai ___ suonare la chitarra?", "Cerca ___ non stonare!", "Mi ha insegnato ___ leggere la musica.", "Abbiamo bisogno ___ provare ancora prima del concerto.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Per, senza, prima di + infinito", hint: "Infinito dopo le preposizioni",
            text: [
              "«Per» + infinito = scopo: «Studio per diventare musicista».",
              "«Senza» + infinito: «È uscito senza salutare».",
              "«Prima di» + infinito: «Prima di cantare, mi scaldo la voce». «Dopo» + infinito passato: «Dopo aver cantato, era senza voce».",
              "Il soggetto dell'infinito è lo stesso della frase principale. Se è diverso, serve una frase con «che» o «perché» + congiuntivo: «Canto perché tu sia felice».",
            ],
          },
          {
            kind: "fill", title: "Per, senza, prima di, dopo", hint: "Completa con la preposizione giusta (e l'infinito passato quando serve).",
            items: ["Sono andato a Milano ___ vedere il concerto.", "Ha cantato tutta la canzone ___ guardare il testo.", "___ salire sul palco, beve sempre un tè caldo.", "___ aver suonato tre ore, avevano male alle dita.", "Si allena ogni giorno ___ migliorare.", "Non uscire ___ salutare la nonna!"],
          },
          {
            kind: "intro", title: "L'infinito come nome", hint: "Il cantare, il suonare",
            text: ["L'infinito può fare da soggetto o da nome, a volte con l'articolo: «Cantare mi rilassa», «Il suonare insieme crea amicizia», «Ascoltare musica è il mio passatempo preferito».", "È molto usato nei testi scritti e nei proverbi: «Volere è potere»."],
          },
          k.negativa(["Ho iniziato le lezioni di piano. (con «a» + infinito: cominciare…)", "Non canto più. (con smettere di)", "Spero: vincerò il concorso. (con sperare di)", "Sono uscito e non ho salutato. (con senza)", "Mi scaldo la voce, poi canto. (con prima di)", "Ascolto musica: mi rilassa. (con l'infinito soggetto)"], "Riscrivi ogni frase come indicato tra parentesi.", "con l'infinito"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La band del liceo", "Un ragazzo racconta la sua esperienza con la musica.", [
            { who: "Tommaso", text: "Ho cominciato a suonare la batteria a tredici anni, perché mio cugino aveva una band e gli serviva un batterista." },
            { who: "Tommaso", text: "All'inizio non riuscivo a tenere il ritmo e i vicini si lamentavano. Mia madre mi ha detto di provare in garage." },
            { who: "Tommaso", text: "Al liceo abbiamo deciso di partecipare a un concorso per band giovani e, incredibilmente, abbiamo vinto." },
            { who: "Tommaso", text: "Poi ognuno è andato all'università in una città diversa e abbiamo smesso di suonare insieme." },
            { who: "Tommaso", text: "L'anno scorso ci siamo ritrovati per un concerto di beneficenza. Prima di salire sul palco tremavamo, ma è stato bellissimo." },
          ], ["Perché Tommaso ha cominciato a suonare la batteria?", "Che problemi aveva all'inizio?", "Che cosa hanno deciso di fare al liceo? Com'è andata?", "Perché hanno smesso di suonare insieme?", "Che cosa è successo l'anno scorso?"]),
          k.listen("Sanremo in famiglia", "Una famiglia guarda il Festival di Sanremo in televisione.", [
            { who: "Figlia", text: "Papà, perché ogni anno guardiamo Sanremo? Le canzoni sono quasi tutte uguali!" },
            { who: "Papà", text: "Perché è una tradizione. Da bambino lo guardavo con i nonni e commentavamo tutto: i vestiti, i testi, le stonature." },
            { who: "Mamma", text: "E poi qualche volta escono capolavori. Pensa a «Nel blu dipinto di blu» o, più di recente, ai Måneskin." },
            { who: "Figlia", text: "I Måneskin hanno vinto Sanremo e poi l'Eurovision, vero?" },
            { who: "Papà", text: "Esatto, nel 2021. Vedi? Senza guardare Sanremo, non li avresti conosciuti così presto!" },
          ], ["Che cosa pensa la figlia delle canzoni di Sanremo?", "Perché il padre guarda il festival?", "Che cosa commentavano da bambini?", "Quali canzoni famose cita la mamma?", "Che cosa hanno vinto i Måneskin? Quando?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il Festival di Sanremo", [
            "Ogni febbraio, per cinque sere, milioni di italiani guardano in televisione il Festival della canzone italiana di Sanremo, una città della Liguria. È nato nel 1951 ed è uno degli spettacoli più antichi della TV europea.",
            "Al festival partecipano cantanti famosi ed esordienti con canzoni inedite. Il vincitore viene scelto da una combinazione di voti: giuria, giornalisti e televoto del pubblico.",
            "Molte canzoni rimaste nella storia sono passate da Sanremo: «Nel blu dipinto di blu» di Domenico Modugno, conosciuta nel mondo come «Volare», partecipò nel 1958.",
            "Il festival non è solo musica: per una settimana non si parla d'altro. Si discute dei vestiti, delle polemiche, dei monologhi dei presentatori e delle esibizioni degli ospiti.",
            "Molti dicono di non guardarlo mai… ma il giorno dopo sanno tutto. Il vincitore, inoltre, ha spesso la possibilità di rappresentare l'Italia all'Eurovision.",
          ], ["Quando e dove si svolge il Festival di Sanremo? Da quando esiste?", "Chi partecipa? Come si sceglie il vincitore?", "Quale canzone famosa è passata da Sanremo?", "Di che cosa si discute durante il festival oltre alla musica?", "Che cosa succede spesso al vincitore?", "Esiste un evento simile nel tuo paese?"]),
          k.spagna("Che musica si ascolta nel tuo paese? Esiste un festival o un programma musicale molto seguito? Usa almeno quattro verbi con «a» o «di» + infinito."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di gusti musicali", hint: "Formule utili",
            text: ["«Vado matto per…» (mi piace moltissimo), «Non sopporto…», «Mi mette di buon umore», «Mi fa venire la pelle d'oca» (mi emoziona fisicamente), «Mi ricorda…», «È la colonna sonora della mia estate»."],
          },
          k.rispondi(["Che genere di musica ascolti? Quando?", "Suoni uno strumento? Quando hai cominciato?", "Qual è il concerto più bello a cui sei andato?", "C'è una canzone che ti ricorda un momento importante?", "Hai mai provato a cantare in pubblico?", "Riesci a lavorare o a studiare con la musica?"]),
          { kind: "speak", title: "La colonna sonora della mia vita", hint: "Per ogni momento, di' quale canzone sceglieresti e perché.", items: ["la tua infanzia", "il tuo primo amore", "un viaggio importante", "un momento difficile", "una festa", "oggi"] },
          {
            kind: "roleplay", title: "L'audizione", hint: "Vuoi entrare in un coro (o in una band). L'IA fa il direttore che ti fa un breve colloquio.",
            steps: ["Presentati e racconta la tua esperienza musicale.", "Spiega quando hai cominciato e se hai mai smesso.", "Rispondi: che cosa riesci a fare e che cosa no?", "Spiega che cosa speri di imparare.", "Chiedi informazioni su prove e concerti."],
          },
          {
            kind: "roleplay", title: "Il concerto", hint: "Convinci un amico (l'IA) a venire con te al concerto di un cantante che lui non conosce.",
            steps: ["Presenta il cantante e il suo stile.", "Spiega perché ti piace.", "Rispondi alle sue obiezioni (prezzo, distanza…).", "Proponi di ascoltare una canzone insieme prima di decidere.", "Organizzate il viaggio."],
          },
          { kind: "speak", title: "La mia storia con la musica", hint: "Parla per due minuti del tuo rapporto con la musica: che cosa ascoltavi da piccolo, che cosa hai imparato, che cosa hai smesso di fare e che cosa vorresti provare.", items: ["Da piccolo…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non canto più nel coro. (con smettere di)", "Ho fatto le prime lezioni di chitarra a dieci anni. (con cominciare a)", "Faccio tutto il possibile per non stonare. (con cercare di)", "Alla fine ce l'ho fatta a suonare il pezzo. (con riuscire a)", "Ha cantato e non ha guardato il testo. (con senza)", "Ascoltare musica mi rilassa. (con l'infinito come nome)", "Studio molto: voglio entrare al conservatorio. (con per)", "Mi scaldo la voce e poi canto. (con prima di)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Recensione di un concerto", hint: "Scrivi la recensione (220–250 parole) di un concerto a cui sei andato (o immaginario): artista, luogo, atmosfera, canzoni migliori, che cosa ti ha emozionato e che cosa no. Usa almeno otto verbi con «a» / «di» + infinito.", rows: 18, items: ["Ieri sera…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: verbi e preposizioni", ["ho cominciato a suonare", "ha smesso di cantare", "non riesco a capire", "cerco di migliorare", "prima di salire sul palco", "senza guardare il testo"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il ritornello è orecchiabile.", "Ho deciso di imparare il violino.", "Mi fa venire la pelle d'oca.", "Hanno vinto il festival di Sanremo.", "È stonato come una campana."]),
          k.media([
            { type: "Canzone", title: "Nel blu dipinto di blu (Volare), Domenico Modugno", where: "Spotify, YouTube", why: "La canzone di Sanremo 1958 di cui hai letto: riascoltala adesso che capisci molto di più." },
            { type: "Canzone", title: "Zitti e buoni, Måneskin", where: "Spotify, YouTube", why: "Il rock che ha vinto Sanremo e l'Eurovision nel 2021: veloce e difficile, perfetto per allenare l'orecchio." },
            { type: "Canzone", title: "La guerra di Piero, Fabrizio De André", where: "Spotify, YouTube", why: "Uno dei grandi cantautori italiani: una canzone lenta, poetica e contro la guerra." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Di che cosa parla una delle canzoni che hai ascoltato? Che cosa ti ha fatto provare?", items: ["La canzone parla di…"] },
        ],
      },
    ],

    exam: k.exam(48, {
      parole: ["il cantautore", "il ritornello", "la strofa", "il tormentone", "la tournée", "stonato", "suonare a orecchio", "fare le prove", "il palco", "l'esordiente"],
      contrario: ["la chitarra → chi la suona", "il violino → chi lo suona", "la batteria → chi la suona", "la tromba → chi la suona", "stonato → contrario", "dal vivo → contrario"],
      verbiHint: "Scrivi la preposizione (o «—») e una frase al passato prossimo.",
      verbiCols: ["preposizione", "esempio"],
      verbi: [["imparare", "", ""], ["cercare", "", ""], ["volere", "", ""], ["finire", "", ""]],
      completaHint: "Completa con «a», «di», «per», «senza», «prima di», «dopo» o «—».",
      completa: ["Ho deciso ___ iscrivermi al conservatorio.", "Non riesco ___ dormire con la musica alta.", "Sai ___ leggere le note?", "È uscito ___ pagare il biglietto.", "___ cantare, beve un tè caldo.", "___ aver suonato, erano stanchissimi.", "Mi ha aiutato ___ preparare il concerto.", "Ho bisogno ___ esercitarmi di più."],
      trasformaHint: "Riscrivi ogni frase con un verbo + preposizione + infinito.",
      trasforma: ["Non fumo più. (smettere)", "Ho iniziato a studiare pianoforte. (cominciare)", "Alla fine ho capito la canzone. (riuscire)", "Mi sforzo di non stonare. (cercare)", "Spero: vinceremo! (sperare)", "Ho dimenticato: dovevo comprare i biglietti. (dimenticarsi)"],
      leggi: {
        text: [
          "Fabrizio De André (1940–1999) è considerato uno dei più grandi cantautori italiani. Nato a Genova, cominciò a suonare la chitarra da ragazzo e decise di dedicarsi alla musica invece di finire gli studi di legge.",
          "Nelle sue canzoni raccontava gli ultimi: prostitute, emarginati, soldati, poveri. Cercava di dare voce a chi non l'aveva.",
          "Negli anni Ottanta scrisse un intero album in dialetto genovese, «Crêuza de mä», che molti critici considerano uno dei dischi più importanti della musica italiana.",
        ],
        questions: ["Dove nacque De André? Che cosa decise di fare?", "Di chi parlava nelle sue canzoni?", "Che cosa cercava di fare?", "Che cos'ha di speciale l'album «Crêuza de mä»?"],
      },
      ascolta: {
        script: [
          { who: "Giulia", text: "Vieni al concerto di sabato? Suona un gruppo jazz fantastico." },
          { who: "Andrea", text: "Mi piacerebbe, ma ho promesso di aiutare mio fratello a traslocare." },
          { who: "Giulia", text: "Il concerto comincia alle dieci di sera: puoi venire dopo aver finito!" },
          { who: "Andrea", text: "Allora cercherò di finire presto. Se riesco a liberarmi, ti chiamo." },
        ],
        questions: ["Che concerto c'è sabato?", "Che cosa ha promesso Andrea?", "Che cosa propone Giulia?", "Che cosa farà Andrea?"],
      },
      parla: ["Racconta il tuo rapporto con la musica.", "Quale canzone sceglieresti come colonna sonora della tua vita? Perché?", "Che cosa sai del Festival di Sanremo?", "Che strumento ti piacerebbe imparare a suonare? Perché?"],
      role: ["Convinci l'IA a venire a un concerto con te.", "Rispondi alle sue obiezioni.", "Organizzate insieme la serata."],
      dettato: ["Ho smesso di suonare.", "Non riesco a cantare.", "il ritornello", "Cerco di andare a tempo.", "prima di salire sul palco", "senza guardare"],
      traduci: ["Non suono più. (smettere di)", "Ho imparato a cantare da sola. (con imparare a)", "Finalmente ho capito il testo. (riuscire a)", "Ha cantato e non ha sbagliato una nota. (senza)", "Mi scaldo la voce, poi canto. (prima di)", "Suonare mi rende felice. (infinito come soggetto)"],
      scrivi: { hint: "Scrivi (150–180 parole) della canzone più importante della tua vita: quando l'hai sentita per la prima volta, che cosa significa per te e che cosa ti fa provare.", start: "La canzone più importante della mia vita è…" },
    }),
  };
})();
