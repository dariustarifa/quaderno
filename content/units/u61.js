// Unità 61 · Interviste — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[61] = {
    n: 61,
    level: "B2",
    title: "Interviste",
    goal: "Condurre e riferire un'intervista con le domande indirette (mi chiedo se…, vorrei sapere come…, mi domandò dove…), con il modo e il tempo giusti.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a fare domande in modo indiretto e cortese, come in un colloquio di lavoro, in un'intervista giornalistica o in un ufficio.",
              "Grammatica: le interrogative indirette. Dopo «mi chiedo», «vorrei sapere», «non so», «chissà» la domanda diventa una frase dipendente: «Dove abiti?» → «Vorrei sapere dove abiti / dove tu abiti».",
              "Imparerai quando usare l'indicativo (più colloquiale) e quando il congiuntivo (più formale e più dubbioso), e come cambiano i tempi al passato.",
            ],
          },
          {
            kind: "intro", title: "Domande dirette e indirette", hint: "Un'anticipazione",
            text: ["La domanda indiretta non ha punto interrogativo (tranne se la frase principale è una domanda) e spesso è più cortese."],
            examples: [
              { it: "Quanti anni ha? → Posso chiederLe quanti anni ha?", es: "più cortese" },
              { it: "È vero? → Mi chiedo se sia vero.", es: "dubbio, congiuntivo" },
              { it: "Dove abiti? → Mi chiese dove abitassi.", es: "al passato" },
            ],
          },
          { kind: "speak", title: "La tua intervista", hint: "Prima di cominciare: quale persona famosa vorresti intervistare? Che cosa vorresti sapere da lei?", items: ["Vorrei intervistare… perché vorrei sapere…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico dell'intervista", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'intervistatore", "l'intervistato", "la domanda scomoda", "eludere una domanda", "andare dritto al punto",
              "mettere in difficoltà", "il colloquio di lavoro", "il selezionatore", "il candidato", "i punti di forza",
              "i punti deboli", "la disponibilità", "il curriculum", "rilasciare un'intervista", "lo scoop",
              "la curiosità", "indagare", "insistere", "approfondire", "il «fuori onda»",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["intervistare → (chi fa le domande)", "selezionare → (sostantivo)", "candidarsi → (sostantivo)", "disponibile → (sostantivo)", "curioso → (sostantivo)", "indagare → (sostantivo)", "insistere → (sostantivo)", "approfondire → (sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione. Dilla ad alta voce e scrivila.", items: ["eludere una domanda", "mettere in difficoltà", "andare dritto al punto", "i punti di forza", "rilasciare un'intervista", "insistere", "approfondire", "la domanda scomoda"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Domanda o affermazione?", hint: "Intonazione delle domande indirette",
            text: [
              "La domanda diretta sale alla fine: «Dove abita? ↗». La domanda indiretta, invece, ha l'intonazione di un'affermazione: «Vorrei sapere dove abita ↘».",
              "Se la frase principale è una domanda, sale alla fine: «Potrebbe dirmi dove abita? ↗».",
              "Nelle formule di cortesia la voce è più morbida e lenta: «Le dispiacerebbe…», «Saprebbe dirmi…».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Attenzione all'intonazione.", items: ["Dove abita?", "Vorrei sapere dove abita.", "Potrebbe dirmi dove abita?", "Mi chiedo se sia davvero così.", "Chissà se verrà."] },
          { kind: "shadow", title: "Formule di cortesia", hint: "Voce morbida.", items: ["Le dispiacerebbe ripetere?", "Saprebbe dirmi a che ora apre?", "Posso chiederLe una cosa?", "Mi permette una domanda personale?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Indicativo o congiuntivo?", hint: "Il modo nelle domande indirette",
            text: [
              "Con «sapere», «dire», «spiegare» si usa di solito l'indicativo: «Dimmi dove abiti», «Non so dove abita».",
              "Con «chiedersi», «domandarsi», «non sapere se», «chissà se» il congiuntivo è più elegante e sottolinea il dubbio: «Mi chiedo se abbia ragione».",
              "Nel parlato l'indicativo è sempre possibile; nello scritto formale si preferisce il congiuntivo.",
            ],
            table: { head: ["principale", "modo"], rows: [["dimmi, spiegami", "indicativo"], ["non so (se)", "indicativo / congiuntivo"], ["mi chiedo, mi domando", "congiuntivo (formale)"], ["chissà se", "indicativo / congiuntivo"]] },
          },
          k.table("Diretta → indiretta", [
            ["Dove lavori? → Vorrei sapere…", "dove lavori"],
            ["Quanto costa? → Mi può dire…", ""],
            ["È arrivato? → Non so…", ""],
            ["Chi ha vinto? → Mi chiedo…", ""],
            ["Perché piange? → Chissà…", ""],
            ["Che cosa fate stasera? → Ditemi…", ""],
          ], "Trasforma la domanda in domanda indiretta.", ["domanda indiretta"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo tra parentesi (scegli il modo più adatto al registro).",
            items: [
              "Mi chiedo se il candidato ___ (avere) abbastanza esperienza.", "Dimmi dove ___ (tu, mettere) le chiavi.", "Non so chi ___ (essere) quella signora.", "Ci domandiamo se la ditta ___ (fallire) davvero l'anno scorso.", "Spiegami come ___ (funzionare) questo programma.", "Chissà se ___ (lui, ricordarsi) di me.", "Mi piacerebbe capire perché ___ (voi, rifiutare) l'offerta.", "Non sappiamo ancora quando ___ (arrivare) i risultati.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Le domande indirette al passato", hint: "Concordanza",
            text: [
              "Se il verbo principale è al passato, la domanda indiretta segue la concordanza: «Dove abiti?» → Mi chiese dove abitassi / abitavo. «Dove hai studiato?» → Mi chiese dove avessi studiato / avevo studiato. «Che cosa farai?» → Mi chiese che cosa avrei fatto.",
              "Domande sì/no: si introducono con «se»: «Sei sposato?» → Mi chiese se fossi sposato.",
              "Domanda con infinito, quando il soggetto è chiaro: «Non so che cosa fare», «Mi chiedo dove andare».",
            ],
          },
          k.negativa(["«Dove abita?» (Il selezionatore mi chiese…)", "«Ha mai lavorato all'estero?» (Mi domandò se…)", "«Che cosa farà fra cinque anni?» (Volle sapere…)", "«Perché ha lasciato il lavoro precedente?» (Mi chiese…)", "«È disposto a trasferirsi?» (Mi chiese se…)", "«Quanto vuole guadagnare?» (Mi domandò…)"], "Riferisci le domande del colloquio al passato, con la concordanza.", "domanda indiretta"),
          {
            kind: "intro", title: "Domandare con cortesia", hint: "Il condizionale e le formule",
            text: ["«Potrebbe dirmi…?», «Saprebbe dirmi…?», «Le dispiacerebbe spiegarmi…?», «Mi chiedevo se…» (molto cortese: «Mi chiedevo se potesse aiutarmi»), «Volevo chiederLe se…»."],
          },
          {
            kind: "fill", title: "Domande cortesi", hint: "Completa con la forma più cortese.",
            items: ["___ dirmi a che ora parte il treno?", "Mi ___ se potesse darmi un consiglio.", "Le ___ chiudere la finestra?", "Volevo chiederLe ___ fosse possibile cambiare data.", "___ spiegarmi come compilare questo modulo?", "Non so se mi ___ (potere) aiutare."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il colloquio", "Un colloquio di lavoro per un posto in una casa editrice.", [
            { who: "Dott.ssa Rinaldi", text: "Buongiorno, si accomodi. Ho letto il suo curriculum. Vorrei capire innanzitutto perché ha deciso di lasciare l'insegnamento." },
            { who: "Candidato", text: "Ho insegnato per sei anni e mi è piaciuto molto, ma mi chiedevo se fossi davvero portato per quel lavoro. I libri sono sempre stati la mia passione." },
            { who: "Dott.ssa Rinaldi", text: "Capisco. Mi sa dire quali sono, secondo lei, i suoi punti deboli?" },
            { who: "Candidato", text: "Sono un po' perfezionista: a volte perdo tempo sui dettagli." },
            { who: "Dott.ssa Rinaldi", text: "Ultima domanda: è disponibile a trasferirsi a Milano per i primi sei mesi?" },
            { who: "Candidato", text: "Sì, assolutamente. Posso chiederLe, invece, quando saprò l'esito del colloquio?" },
            { who: "Dott.ssa Rinaldi", text: "Entro due settimane. La contatteremo noi." },
          ], ["Che cosa vuole capire per prima cosa la dottoressa?", "Perché il candidato ha lasciato l'insegnamento?", "Qual è il suo punto debole?", "Che cosa gli chiede alla fine la dottoressa?", "Che cosa domanda il candidato?", "Riferisci tre domande della dottoressa al passato: «Gli chiese…»."]),
          k.listen("Il fuori onda", "Dopo un'intervista televisiva, la giornalista parla con il suo produttore.", [
            { who: "Produttore", text: "Allora, com'è andata con il calciatore?" },
            { who: "Giornalista", text: "Malissimo. Gli ho chiesto se fosse vero che vuole cambiare squadra e ha cambiato discorso." },
            { who: "Produttore", text: "E sul contratto?" },
            { who: "Giornalista", text: "Gli ho domandato quanto avesse chiesto alla società e mi ha risposto che non erano affari miei. Mi chiedo perché abbia accettato l'intervista!" },
          ], ["Chi ha intervistato la giornalista?", "Che cosa gli ha chiesto sulla squadra? Come ha reagito?", "Che cosa gli ha chiesto sul contratto?", "Che cosa si chiede la giornalista alla fine?", "Trova tre domande indirette nel dialogo."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("L'arte di fare domande", [
            "Oriana Fallaci, nata a Firenze nel 1929, è stata una delle giornaliste italiane più famose al mondo. Negli anni Sessanta e Settanta intervistò alcuni dei personaggi più potenti dell'epoca, e molte di quelle conversazioni furono raccolte nel libro «Intervista con la storia».",
            "Il suo metodo era semplice e spietato: si preparava per settimane, poi andava dritta al punto. Non le interessava sapere che cosa pensassero i suoi interlocutori del tempo o del cibo; voleva capire come avessero conquistato il potere e come lo usassero.",
            "Famosa è l'intervista del 1972 a Henry Kissinger, allora consigliere del presidente americano. Fallaci gli chiese perché fosse così popolare, e Kissinger si paragonò a un cowboy solitario. Anni dopo, lui stesso ammise che quella era stata la conversazione più disastrosa della sua vita.",
            "Le sue interviste erano spesso scontri: Fallaci insisteva, interrompeva, faceva domande scomode e non accettava risposte vaghe. Molti la criticavano per questo; altri la consideravano un modello di giornalismo libero.",
            "Ci si chiede ancora oggi se quel tipo di intervista sia possibile nell'epoca degli uffici stampa e delle risposte preparate. Forse la lezione più importante di Fallaci è che una buona domanda vale più di mille risposte.",
          ], ["Chi era Oriana Fallaci?", "Come preparava le interviste? Che cosa voleva capire?", "Che cosa successe nell'intervista a Kissinger?", "Perché le sue interviste erano «scontri»?", "Quale domanda ci si fa ancora oggi?", "Trova nel testo quattro domande indirette e indica il modo del verbo."]),
          k.spagna("Chi è il giornalista o l'intervistatore più famoso del tuo paese? Com'è il suo stile? Scrivi tre domande che faresti tu a un personaggio del tuo paese, in forma diretta e indiretta."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Condurre un'intervista", hint: "Insistere, riformulare, chiudere",
            text: ["Insistere: «Mi scusi, ma non ha risposto alla mia domanda», «Torniamo un attimo a…». Riformulare: «In altre parole, lei sostiene che…». Approfondire: «Può farci un esempio?», «Che cosa intende esattamente con…?». Chiudere: «Un'ultima domanda…», «Grazie per il tempo che ci ha dedicato»."],
          },
          k.rispondi(["Qual è stato il colloquio più difficile della tua vita? Che cosa ti chiesero?", "Quali domande trovi indiscrete?", "Che cosa ti chiedi spesso sul tuo futuro?", "Che cosa vorresti sapere sull'Italia che ancora non sai?", "Chissà come sarà il mondo fra cinquant'anni: che cosa ne pensi?", "Come rispondi a una domanda scomoda?"]),
          { kind: "speak", title: "Le domande che mi faccio", hint: "Parla per un minuto delle domande che ti fai in questo periodo della tua vita: «Mi chiedo se…», «Non so ancora come…», «Chissà se…».", items: ["In questo periodo mi chiedo…"] },
          {
            kind: "roleplay", title: "Il colloquio di lavoro", hint: "L'IA è il selezionatore di un'azienda italiana. Tu sei il candidato.",
            steps: ["Rispondi alle domande sul tuo percorso.", "Parla dei tuoi punti di forza e di un punto debole.", "Gestisci una domanda scomoda con eleganza.", "Fai tu due domande indirette e cortesi sull'azienda.", "Chiudi chiedendo quando saprai l'esito."],
          },
          {
            kind: "roleplay", title: "L'intervista difficile", hint: "Sei un giornalista. L'IA è un politico che elude le domande. Devi ottenere una risposta.",
            steps: ["Fai la prima domanda in modo diretto.", "Insisti con una formula cortese.", "Riformula ciò che ha detto per metterlo in difficoltà.", "Chiedi un esempio concreto.", "Chiudi e poi riferisci al tuo direttore che cosa gli hai chiesto e che cosa ha risposto."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti un colloquio o un esame orale che hai fatto: che cosa ti chiesero, che cosa rispondesti e che cosa ti chiedevi mentre aspettavi il risultato.", items: ["Mi chiesero…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Quando parte il treno? (Saprebbe dirmi…)", "È vero quello che dicono? (Mi chiedo se…)", "Dove avete passato le vacanze? (Raccontateci…)", "Che cosa farai dopo la laurea? (Mi chiese…)", "Hai mai vissuto all'estero? (Mi domandò se…)", "Perché ha rifiutato? (Non capisco…)", "Potete aiutarmi? (Mi chiedevo se…)", "Che cosa devo fare? (Non so… + infinito)"], "Trasforma ogni domanda diretta in domanda indiretta con l'inizio indicato."),
          { kind: "write", title: "Il resoconto di un'intervista", hint: "Scrivi il resoconto di un'intervista (280–320 parole) a una persona che ammiri (reale o inventata). Racconta come si è svolta: che cosa le hai chiesto, che cosa ha risposto, quale domanda ha eluso e che cosa ti chiedi ancora. Usa almeno otto domande indirette al passato.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: formule", ["mi chiedo se", "saprebbe dirmi", "le dispiacerebbe", "mi domandò dove", "chissà se", "non so che cosa fare"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Mi chiese se fossi disponibile a trasferirmi.", "Non so ancora quando arriveranno i risultati.", "Mi chiedevo se potesse aiutarmi.", "Non ha risposto alla mia domanda.", "Chissà se si ricorda di me."]),
          k.media([
            { type: "TV", title: "Belve (Francesca Fagnani)", where: "raiplay.it", why: "Interviste televisive incalzanti a personaggi famosi: osserva come la giornalista insiste e riformula." },
            { type: "Libro", title: "Intervista con la storia (Oriana Fallaci)", where: "Libreria o biblioteca", why: "Le interviste raccontate nel testo di lettura. Leggine una e annota le domande più scomode." },
            { type: "TV", title: "Che tempo che fa (Fabio Fazio)", where: "Canale Nove / discovery+", why: "Interviste lunghe e cordiali con ospiti italiani e internazionali: confronta lo stile con «Belve»." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riferisci un'intervista che hai visto: che cosa ha chiesto il giornalista e come ha risposto l'ospite?", items: ["Il giornalista gli ha chiesto se…"] },
        ],
      },
    ],

    exam: k.exam(61, {
      parole: ["l'intervistatore", "eludere una domanda", "la domanda scomoda", "il selezionatore", "il candidato", "i punti di forza", "rilasciare un'intervista", "insistere", "approfondire", "mettere in difficoltà"],
      contrario: ["intervistare → chi risponde", "candidarsi → sostantivo", "disponibile → sostantivo", "punti di forza → contrario", "indagare → sostantivo", "approfondire → sostantivo"],
      verbiHint: "Trasforma in domanda indiretta.",
      verbiCols: ["domanda indiretta"],
      verbi: [["Dove vai? → Dimmi…", ""], ["È sposato? → Non so…", ""], ["Chi l'ha detto? → Mi chiedo…", ""], ["Dove lavori? → Mi chiese… (al passato)", ""], ["Che cosa farai? → Volle sapere…", ""], ["Hai finito? → Mi domandò se…", ""]],
      completaHint: "Completa con la forma giusta del verbo o con la parola mancante.",
      completa: ["Mi chiedo se il progetto ___ (funzionare) davvero.", "Dimmi che cosa ___ (tu, volere) per cena.", "Mi chiese dove ___ (io, studiare) prima di allora.", "___ dirmi dov'è la stazione?", "Mi chiedevo ___ potesse aiutarmi.", "Non so che cosa ___ (fare, infinito).", "Gli domandai se ___ (lui, essere) disposto a partire.", "Chissà se ___ (lei, ricordarsi) di noi."],
      trasformaHint: "Riferisci ogni domanda al passato, con la concordanza.",
      trasforma: ["«Quanti anni hai?» (Mi chiese…)", "«Hai mai lavorato in un team?» (Mi domandò se…)", "«Perché vuoi questo lavoro?» (Volle sapere…)", "«Dove ti vedi fra cinque anni?» (Mi chiese…)", "«Quando puoi cominciare?» (Mi domandò…)", "«Parli altre lingue?» (Mi chiese se…)"],
      leggi: {
        text: [
          "Durante un colloquio di lavoro, le domande più temute sono quelle sui punti deboli. Molti candidati si chiedono se sia meglio dire la verità o presentare un difetto che sembri una qualità.",
          "Secondo i selezionatori, la seconda strategia è ormai riconoscibile: quando un candidato dice di essere «troppo perfezionista», spesso ci si chiede se stia recitando.",
          "Il consiglio degli esperti è di scegliere un difetto reale ma non grave e spiegare che cosa si sta facendo per migliorarlo.",
        ],
        questions: ["Quali sono le domande più temute in un colloquio?", "Che cosa si chiedono molti candidati?", "Perché la strategia del «perfezionista» non funziona più?", "Che cosa consigliano gli esperti?"],
      },
      ascolta: {
        script: [
          { who: "Marta", text: "Com'è andato il colloquio?" },
          { who: "Luca", text: "Bene, credo. Mi hanno chiesto perché avessi scelto quell'azienda e se fossi disposto a viaggiare." },
          { who: "Marta", text: "E tu che cosa hai chiesto?" },
          { who: "Luca", text: "Ho chiesto quando avrei saputo il risultato. Mi hanno detto che mi avrebbero chiamato entro venerdì. Chissà se lo faranno davvero!" },
        ],
        questions: ["Che cosa hanno chiesto a Luca?", "Che cosa ha chiesto lui?", "Che cosa gli hanno risposto?", "Che dubbio ha Luca alla fine?"],
      },
      parla: ["Racconta un colloquio o un esame: che cosa ti chiesero?", "Fai tre domande cortesi a un impiegato pubblico.", "Che cosa ti chiedi sul tuo futuro?", "Come risponderesti a una domanda sui tuoi punti deboli?"],
      role: ["L'IA è il selezionatore di un'azienda italiana.", "Rispondi alle sue domande e fai tu due domande indirette e cortesi.", "Alla fine riferisci il colloquio a un amico al passato."],
      dettato: ["mi chiedo se", "saprebbe dirmi", "mi domandò dove", "chissà se", "le dispiacerebbe", "mi chiedevo se"],
      traduci: ["Dov'è l'ufficio? (Potrebbe dirmi…)", "Ha detto la verità? (Mi chiedo se…)", "Quanto guadagni? (Mi chiese…)", "Sei libero domani? (Mi domandò se…)", "Possiamo entrare? (Ci chiedevamo se…)", "Dove devo andare? (Non so… + infinito)"],
      scrivi: { hint: "Scrivi (180–220 parole) il resoconto di un colloquio di lavoro immaginario: quali domande ti hanno fatto, come hai risposto, quali domande hai fatto tu e che cosa ti chiedi ora mentre aspetti.", start: "Il colloquio è cominciato con una domanda…" },
    }),
  };
})();
