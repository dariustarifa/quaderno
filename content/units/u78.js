// Unità 78 · Lingua e identità — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[78] = {
    n: 78,
    level: "B2",
    title: "Lingua e identità",
    goal: "Riflettere sul rapporto tra lingua e identità e usare con naturalezza i verbi pronominali idiomatici (cavarsela, prendersela, farcela, andarsene, avercela con, metterci, volerci…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Parlerai di che cosa significa vivere tra due lingue: chi sei quando parli italiano? Cambia la tua personalità? Che cosa resta della tua lingua madre?",
              "Grammatica: i verbi pronominali idiomatici, cioè verbi con uno o due pronomi fissi che ne cambiano il significato: farcela (riuscire), cavarsela (superare una difficoltà), prendersela (offendersi), andarsene (partire), avercela con (essere arrabbiato con), metterci (impiegare tempo), volerci (essere necessario).",
              "Sono verbi frequentissimi nel parlato: chi li usa bene sembra subito più naturale.",
            ],
          },
          {
            kind: "intro", title: "Pronomi fissi", hint: "Un'anticipazione",
            examples: [
              { it: "Ce l'ho fatta: ho superato l'esame!", es: "farcela = riuscire" },
              { it: "Me la cavo bene in italiano.", es: "cavarsela = riuscire abbastanza bene" },
              { it: "Non prendertela, era uno scherzo!", es: "prendersela = offendersi" },
              { it: "Per imparare una lingua ci vuole pazienza.", es: "volerci = essere necessario" },
            ],
            text: ["I pronomi «la», «ne», «ci» non si riferiscono a niente di preciso: fanno parte del verbo."],
          },
          { kind: "speak", title: "Due lingue", hint: "Prima di cominciare: ti senti una persona diversa quando parli italiano? In che cosa?", items: ["Quando parlo italiano mi sento…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Verbi pronominali idiomatici", hint: "Spiega il significato di ogni verbo in italiano.",
            placeholder: "significato",
            items: [
              "farcela", "cavarsela", "prendersela", "andarsene", "avercela con",
              "metterci", "volerci", "smetterla", "sentirsela", "passarsela (bene / male)",
              "godersela", "aspettarsela", "cercarsela", "legarsela al dito", "darsela a gambe",
              "fregarsene (colloquiale)", "tenerci (a qualcosa)", "rimetterci", "farla franca", "starci (accettare)",
            ],
          },
          {
            kind: "vocab", title: "Lingua e identità", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: ["la lingua madre", "il bilinguismo", "l'identità", "le radici", "l'accento straniero", "sentirsi a casa", "lo sradicamento", "l'appartenenza", "la seconda generazione", "integrarsi"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase personale con ogni verbo.", items: ["farcela", "cavarsela", "prendersela", "andarsene", "avercela con", "metterci", "volerci", "sentirsela"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Pronomi legati", hint: "Pronuncia fluida",
            text: [
              "I pronomi fissi si pronunciano legati al verbo, senza pause: «ce-l'ho-fàt-ta», «me-la-càvo», «se-n'è-an-dà-to».",
              "Davanti a «ho», «ha», «hanno» la «la» si elide: «ce l'ho», «ce l'ha», «ce l'hanno».",
              "All'imperativo i pronomi si attaccano al verbo: «Smettila!», «Vattene!», «Prenditela con calma!».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Tutto legato.", items: ["Ce l'ho fatta!", "Me la cavo abbastanza bene.", "Non prendertela!", "Se n'è andato senza salutare.", "Ce l'hai con me?"] },
          { kind: "shadow", title: "Imperativi", hint: "Con il tono giusto.", items: ["Smettila!", "Vattene!", "Sbrigatevela da soli!", "Godetevela!", "Non te la prendere!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Coniugare i verbi pronominali", hint: "Presente e passato prossimo",
            text: [
              "Presente: io me la cavo, tu te la cavi, lui se la cava, noi ce la caviamo, voi ve la cavate, loro se la cavano. Con «farcela»: ce la faccio, ce la fai, ce la fa…",
              "Passato prossimo: i verbi con «la» concordano il participio al femminile: «me la sono cavata», «se l'è presa», «ce l'ho fatta». Con «ne»: «se n'è andato / andata».",
              "«Metterci» (soggetto: la persona): «Ci metto un'ora». «Volerci» (soggetto: la cosa necessaria): «Ci vuole un'ora», «Ci vogliono due ore».",
              "«Avercela con» qualcuno: «Ce l'ho con te», «Ce l'aveva con il mondo».",
            ],
            table: { head: ["infinito", "presente / passato"], rows: [["farcela", "ce la faccio / ce l'ho fatta"], ["cavarsela", "me la cavo / me la sono cavata"], ["prendersela", "te la prendi / te la sei presa"], ["andarsene", "se ne va / se n'è andato"], ["avercela con", "ce l'ho con / ce l'avevo con"]] },
          },
          k.table("Coniuga", [
            ["(io) farcela, presente", "ce la faccio"],
            ["(lei) prendersela, passato prossimo", ""],
            ["(noi) cavarsela, passato prossimo", ""],
            ["(loro) andarsene, presente", ""],
            ["(tu) avercela con, presente", ""],
            ["(voi) farcela, passato prossimo", ""],
          ], "Coniuga il verbo come indicato.", ["forma"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con il verbo pronominale giusto al tempo giusto: farcela, cavarsela, prendersela, andarsene, avercela, metterci, volerci.",
            items: [
              "Per imparare bene una lingua ___ anni.", "Quanto tempo ___ (tu) per venire al lavoro?", "All'esame ___ (io) bene, anche se avevo paura.", "Non ___ (tu), stavo solo scherzando!", "Era così annoiato che ___ prima della fine.", "Finalmente ___ (noi): abbiamo finito la maratona!", "Perché non mi saluti? ___ con me?", "Per questa ricetta ___ tre uova.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Altri verbi utili", hint: "Significati da conoscere",
            text: [
              "smetterla (smettere di fare una cosa fastidiosa): «Smettila di lamentarti!». sentirsela (avere il coraggio): «Non me la sento di parlare in pubblico». passarsela (vivere in una certa situazione): «Come te la passi?».",
              "godersela (approfittarne con piacere): «Goditela, la vacanza!». aspettarsela: «Non me l'aspettavo!». cercarsela (provocare i propri guai): «Se l'è cercata».",
              "tenerci (dare importanza): «Ci tengo molto a questa amicizia». rimetterci (perdere qualcosa): «Ci ho rimesso mille euro». legarsela al dito (non dimenticare un torto). darsela a gambe (scappare).",
              "Registro: «fregarsene» (non importare) è colloquiale e un po' volgare; in un contesto formale si dice «non dare importanza a».",
            ],
          },
          k.negativa(["Sono riuscito a finire il lavoro in tempo.", "Si è offesa per quello che ho detto.", "Non ho il coraggio di dirglielo.", "È necessaria molta pazienza.", "Ho perso molti soldi in quell'affare.", "Non mi aspettavo questa sorpresa."], "Riscrivi ogni frase con un verbo pronominale idiomatico.", "verbo pronominale"),
          {
            kind: "intro", title: "Lingua e personalità", hint: "Un tema di riflessione",
            text: ["Molti bilingui dicono di sentirsi diversi in ogni lingua: più ironici, più formali, più timidi, più diretti. Gli studiosi discutono se sia la lingua a cambiare la personalità, o se sia il contesto culturale in cui quella lingua è stata imparata."],
          },
          {
            kind: "fill", title: "Completa", hint: "Completa con: smetterla, sentirsela, passarsela, godersela, tenerci, legarsela al dito, darsela a gambe, cercarsela.",
            items: ["Ciao! Come te la ___?", "Non me la ___ di guidare di notte.", "Ci ___ molto a parlare bene l'italiano.", "Quando ha visto il cane, se l'è ___ a gambe.", "Gli ho chiesto scusa, ma se l'è ___ al dito.", "Smetti___ di interrompermi!"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Due lingue, una vita", "Intervista a Sofia, nata a Buenos Aires da genitori italiani e trasferita a Bologna a vent'anni.", [
            { who: "Intervistatore", text: "Sofia, quando è arrivata in Italia parlava già italiano?" },
            { who: "Sofia", text: "Me la cavavo, ma era l'italiano dei miei nonni, pieno di parole calabresi. All'università all'inizio non ce la facevo a seguire le lezioni." },
            { who: "Intervistatore", text: "Quanto tempo ci ha messo per sentirsi a suo agio?" },
            { who: "Sofia", text: "Ci sono voluti quasi due anni. E all'inizio me la prendevo quando mi chiedevano di dove fossi: mi sentivo italiana, ma per gli altri ero «l'argentina»." },
            { who: "Intervistatore", text: "E adesso?" },
            { who: "Sofia", text: "Adesso non ce l'ho più con nessuno. Ho capito che non devo scegliere: sono tutte e due le cose. E quando torno a Buenos Aires, i miei amici dicono che ormai parlo spagnolo con l'accento bolognese!" },
          ], ["Com'era l'italiano di Sofia quando è arrivata?", "Che difficoltà aveva all'università?", "Quanto tempo ci è voluto per sentirsi a suo agio?", "Perché all'inizio se la prendeva?", "Come vive oggi la sua doppia identità?", "Trova tutti i verbi pronominali idiomatici."]),
          k.listen("Lo sfogo", "Due amici, uno dei quali è appena tornato da un esame di lingua.", [
            { who: "Paolo", text: "Allora, com'è andato l'esame di tedesco?" },
            { who: "Marco", text: "Lascia stare. Ci ho messo un'ora a scrivere un paragrafo. Non ce la facevo più." },
            { who: "Paolo", text: "Dai, non prendertela. Per il tedesco ci vuole tempo." },
            { who: "Marco", text: "Lo so, ma ci tengo tanto! L'anno prossimo vorrei andarmene a Berlino." },
            { who: "Paolo", text: "E ce la farai. Smettila di buttarti giù!" },
          ], ["Com'è andato l'esame di Marco?", "Quanto tempo ci ha messo per un paragrafo?", "Come lo consola Paolo?", "Perché Marco ci tiene tanto?", "Che cosa gli dice Paolo alla fine?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("In altre parole", [
            "Jhumpa Lahiri, scrittrice nata a Londra da genitori bengalesi e cresciuta negli Stati Uniti, aveva già vinto il premio Pulitzer quando, a più di quarant'anni, decise di fare una cosa che sorprese tutti: trasferirsi a Roma con la famiglia e scrivere solo in italiano.",
            "Nel 2015 pubblicò «In altre parole», un libro in cui racconta questa esperienza. Lo scrisse direttamente in italiano, una lingua che aveva cominciato a studiare da adulta, per passione.",
            "Lahiri racconta la fatica di esprimersi in una lingua nuova, la sensazione di essere una principiante, la frustrazione quando gli italiani, sentendo il suo accento, le rispondevano in inglese. Ma racconta anche la libertà: in italiano si sentiva meno prigioniera delle aspettative legate alle sue altre due lingue.",
            "Molti lettori stranieri che studiano l'italiano si sono riconosciuti in quelle pagine: la paura di sbagliare, la gioia di riuscire finalmente a farcela, l'idea che una lingua imparata per scelta possa diventare un luogo in cui sentirsi a casa.",
            "Il suo esempio dimostra che non ci vuole per forza essere nati in un paese per appartenere alla sua lingua: ci vogliono tempo, passione e il coraggio di sentirsi, per un po', ancora una volta principianti.",
          ], ["Chi è Jhumpa Lahiri? Che cosa decise di fare?", "Che cos'è «In altre parole» e in che lingua è scritto?", "Quali difficoltà racconta?", "Perché in italiano si sentiva più libera?", "Perché molti studenti di italiano si riconoscono in quel libro?", "Che cosa dimostra, secondo il testo, il suo esempio?"]),
          k.spagna("Qual è il tuo rapporto con l'italiano dopo questo corso? Ti senti diverso quando lo parli? Rispondi con almeno sei verbi pronominali idiomatici."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di sé con sincerità", hint: "Emozioni e identità",
            text: ["«Mi sento a casa quando…», «Mi sento straniero quando…», «Ci tengo a…», «Non me la sento di…», «Ce l'ho fatta a…», «Me la prendo quando…», «Quello che mi manca di più è…», «Mi sento a metà tra…»."],
          },
          k.rispondi(["Quando ti sei sentito più fiero del tuo italiano?", "Te la prendi quando qualcuno corregge i tuoi errori?", "Quanto ci hai messo per arrivare a questo livello?", "Che cosa ci vuole, secondo te, per imparare bene una lingua?", "Ti senti a casa in un altro paese o in un'altra lingua?", "Ce l'hai con qualche aspetto della lingua italiana?"]),
          { kind: "speak", title: "Il mio percorso", hint: "Racconta per due minuti il tuo percorso con l'italiano: all'inizio, i momenti difficili, quando ce l'hai fatta. Usa almeno sei verbi pronominali.", items: ["All'inizio non ce la facevo a…"] },
          {
            kind: "roleplay", title: "L'amico scoraggiato", hint: "Un amico (l'IA) vuole abbandonare lo studio di una lingua. Convincilo a continuare.",
            steps: ["Chiedigli come se la passa con lo studio.", "Ascolta le sue difficoltà.", "Raccontagli quando tu non ce la facevi.", "Spiegagli che cosa ci vuole per farcela.", "Incoraggialo: «Non mollare, ce la farai!»."],
          },
          {
            kind: "roleplay", title: "Il malinteso", hint: "Un collega italiano (l'IA) se l'è presa per una tua frase che hai detto male in italiano. Chiarisci.",
            steps: ["Chiedigli se ce l'ha con te.", "Spiega che cosa volevi dire.", "Scusati con sincerità.", "Riflettete su come la lingua può creare malintesi.", "Riconciliatevi."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti del rapporto tra lingua e identità: chi sei in ogni lingua che parli?", items: ["Nella mia lingua madre sono…, in italiano invece…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Sono riuscito a superare l'esame. (farcela, passato)", "Lei si è offesa. (prendersela, passato)", "Siamo riusciti a risolvere il problema, più o meno. (cavarsela, passato)", "È andato via senza salutare. (andarsene)", "Sei arrabbiato con me? (avercela con)", "Impiego mezz'ora per arrivare. (metterci)", "Sono necessarie due ore. (volerci)", "Non ho il coraggio di dirglielo. (sentirsela)"], "Riscrivi ogni frase con il verbo pronominale indicato."),
          { kind: "write", title: "La mia lingua, le mie lingue", hint: "Scrivi un testo autobiografico (280–320 parole) sul tuo rapporto con le lingue: la lingua madre, l'italiano e le altre che conosci. Chi sei in ognuna? Che cosa ti hanno dato? Quali difficoltà hai superato? Usa almeno dieci verbi pronominali idiomatici diversi.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: verbi", ["ce l'ho fatta", "me la cavo", "non prendertela", "se n'è andato", "ce l'hai con me?", "ci vuole pazienza"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ci sono voluti due anni per sentirmi a casa.", "Me la sono cavata meglio del previsto.", "Non me la sento di parlare in pubblico.", "Ci tengo molto a questa lingua.", "Non mollare: ce la farai!"]),
          k.media([
            { type: "Libro", title: "In altre parole (Jhumpa Lahiri, 2015)", where: "Libreria o biblioteca", why: "Il libro del testo di lettura: una scrittrice adulta racconta, in italiano, come ha imparato l'italiano." },
            { type: "Film", title: "Nuovomondo (Emanuele Crialese, 2006)", where: "Cerca dove vederlo su JustWatch", why: "Una famiglia siciliana emigra in America all'inizio del Novecento: lingua, sradicamento e speranza." },
            { type: "Film", title: "Lamerica (Gianni Amelio, 1994)", where: "Cerca dove vederlo su JustWatch", why: "L'Albania dopo il comunismo e il sogno italiano: identità, lingua e migrazione viste al contrario." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Come vivono la lingua e l'identità i personaggi del film o del libro? Ti riconosci in qualcuno di loro?", items: ["Il personaggio che mi ha colpito…"] },
        ],
      },
    ],

    exam: k.exam(78, {
      parole: ["farcela", "cavarsela", "prendersela", "andarsene", "avercela con", "metterci", "volerci", "sentirsela", "la lingua madre", "lo sradicamento"],
      contrario: ["farcela → contrario (non…)", "andarsene → contrario (restare)", "prendersela → contrario (non…)", "sentirsi a casa → contrario", "integrarsi → sostantivo", "appartenere → sostantivo"],
      verbiHint: "Coniuga il verbo come indicato.",
      verbiCols: ["forma"],
      verbi: [["(io) farcela, passato prossimo", ""], ["(lei) prendersela, passato prossimo", ""], ["(noi) cavarsela, presente", ""], ["(lui) andarsene, passato prossimo", ""], ["(tu) avercela con, presente", ""], ["(loro) metterci, presente", ""]],
      completaHint: "Completa con il verbo pronominale giusto.",
      completa: ["Per imparare una lingua ___ anni.", "Quanto ___ (tu) per arrivare a scuola?", "Finalmente ___ (io): ho la patente!", "Non ___ (tu): era una battuta.", "Se n'___ andata senza dire niente.", "Perché ___ con me? Che cosa ho fatto?", "Non me la ___ di guidare con la neve.", "Ci ___ molto a questa amicizia."],
      trasformaHint: "Riscrivi ogni frase con un verbo pronominale idiomatico.",
      trasforma: ["Sono riuscita a finire in tempo.", "Si è offeso per la critica.", "Siamo andati via presto.", "Sono necessarie tre ore.", "Impiego venti minuti.", "Ho perso molti soldi in quell'affare."],
      leggi: {
        text: [
          "Ogni anno migliaia di discendenti di emigrati italiani in America Latina chiedono la cittadinanza italiana. Molti non parlano italiano, ma ci tengono a recuperare le proprie radici.",
          "Per alcuni è soprattutto una questione pratica: con il passaporto italiano si può lavorare in tutta l'Unione Europea. Per altri è una questione di identità: «Mia nonna parlava solo dialetto veneto. Imparando l'italiano, mi sembra di riavvicinarmi a lei», racconta una ragazza brasiliana.",
          "Chi si trasferisce in Italia scopre però che non basta il passaporto per sentirsi a casa: ci vogliono la lingua, il tempo e la pazienza.",
        ],
        questions: ["Che cosa chiedono ogni anno migliaia di discendenti di emigrati?", "Quali sono i motivi pratici?", "Quali sono i motivi legati all'identità?", "Che cosa scopre chi si trasferisce in Italia?"],
      },
      ascolta: {
        script: [
          { who: "Laura", text: "Allora, com'è andato il primo mese a Roma?" },
          { who: "Kenji", text: "All'inizio non ce la facevo: tutti parlavano velocissimo. Ma adesso me la cavo." },
          { who: "Laura", text: "E ti trovi bene?" },
          { who: "Kenji", text: "Sì, anche se a volte me la prendo quando mi rispondono in inglese. Ci tengo a parlare italiano!" },
        ],
        questions: ["Com'era il primo periodo di Kenji a Roma?", "Come se la cava adesso?", "Che cosa lo fa arrabbiare?", "Perché?"],
      },
      parla: ["Racconta il tuo percorso con l'italiano.", "Ti senti diverso in un'altra lingua?", "Che cosa ci vuole per imparare bene una lingua?", "Racconta un momento in cui ce l'hai fatta."],
      role: ["L'IA vuole smettere di studiare l'italiano.", "Convincila a continuare con il tuo esempio.", "Usa almeno cinque verbi pronominali idiomatici."],
      dettato: ["ce l'ho fatta", "me la cavo", "se l'è presa", "se n'è andato", "ci vuole tempo", "non me la sento"],
      traduci: ["Sei riuscito? (farcela)", "Non offenderti! (prendersela, imperativo negativo)", "Me ne vado. (andarsene, passato prossimo)", "Sono arrabbiata con lui. (avercela con)", "Ci impiego un'ora. (metterci, passato prossimo)", "Sono necessari molti soldi. (volerci)"],
      scrivi: { hint: "Scrivi (180–220 parole) una lettera alla persona che eri all'inizio di questo corso: che cosa non riuscivi a fare, quando ce l'hai fatta, che cosa ti ha aiutato, che cosa ci vuole ancora.", start: "Caro me di qualche mese fa," },
    }),
  };
})();
