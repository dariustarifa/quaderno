// Unità 44 · Dialetti e accenti — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[44] = {
    n: 44,
    level: "B1",
    title: "Dialetti e accenti",
    goal: "Capire la varietà linguistica italiana (dialetti, accenti, lingue minoritarie) e parlare di azioni future già concluse con il futuro anteriore.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Scoprirai che in Italia non si parla solo italiano: ci sono decine di dialetti, molti accenti regionali e alcune lingue minoritarie protette dalla legge.",
              "Grammatica: il futuro anteriore (avrò finito, sarò arrivato) per un'azione futura che sarà conclusa prima di un'altra, e per fare ipotesi sul passato («Avrà perso il treno»).",
              "Imparerai anche a riconoscere qualche parola di dialetto molto usata in tutta Italia.",
            ],
          },
          {
            kind: "intro", title: "Quando avrò finito…", hint: "Un'anticipazione: il futuro anteriore",
            text: ["Il futuro anteriore si forma con il futuro di avere o essere + participio: «avrò mangiato», «sarò partito».", "Indica un'azione che sarà già conclusa nel futuro: «Quando avrò finito l'università, partirò»."],
            examples: [
              { it: "Ti chiamo appena sarò arrivato.", es: "prima arrivo, poi chiamo" },
              { it: "Entro giugno avremo finito i lavori.", es: "conclusione nel futuro" },
              { it: "Marco non risponde: avrà dimenticato il telefono.", es: "ipotesi sul passato" },
            ],
          },
          { kind: "speak", title: "Dialetti", hint: "Prima di cominciare: nel tuo paese ci sono dialetti o lingue regionali? Li parli o li capisci?", items: ["Nel mio paese…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Lingue e varietà", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il dialetto", "la lingua standard", "l'italiano regionale", "l'accento", "la cadenza",
              "la lingua minoritaria", "il bilinguismo", "la parlata", "il vernacolo", "l'inflessione",
              "il modo di dire", "la variante", "comprensibile", "tutelare", "la Crusca",
              "la lingua madre", "l'alfabetizzazione", "il prestito linguistico", "il gergo", "lo slang",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "in italiano standard", title: "Parole regionali famose",
            hint: "Queste parole regionali sono conosciute in tutta Italia. Scrivi l'equivalente in italiano standard (cercale se non le conosci).",
            items: ["(romano) daje!", "(napoletano) guaglione", "(toscano) ganzo", "(romano) avoja", "(siciliano) picciotto", "(veneto) schei", "(romano) annamo", "(napoletano) scugnizzo"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: avrò finito → Domani a quest'ora avrò finito l'esame.", items: ["avrò finito", "sarò arrivato / arrivata", "appena avremo", "avrà dimenticato", "il dialetto", "l'accento", "tutelare", "la lingua madre"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Riconoscere gli accenti", hint: "Ascolto attivo",
            text: [
              "Milano e il Nord: vocali più chiuse, «s» sonora tra vocali (rosa = «roza»), consonanti doppie a volte più deboli.",
              "Roma: «l» davanti a consonante diventa «r» (il → er), le parole si accorciano (andiamo → annamo), cadenza lenta e cantilenante.",
              "Napoli: vocali finali poco pronunciate, «s» davanti a consonante quasi «sh» (scuola = «shcuola»), molta musicalità.",
              "Firenze: la «gorgia» toscana: c, t, p tra vocali diventano aspirate («la hoha hola» = la coca cola).",
            ],
          },
          { kind: "shadow", title: "Futuro anteriore", hint: "Ripeti legando l'ausiliare al participio.", items: ["avrò finito, avrai finito, avrà finito", "sarò arrivato, saremo arrivati, saranno arrivate", "Quando avrò finito, ti chiamerò.", "Sarà uscito, non risponde.", "Avranno perso il treno."] },
          { kind: "shadow", title: "Accenti", hint: "Prova a ripetere queste frasi in italiano standard, poi chiedi all'IA come suonerebbero con l'accento di Roma, Napoli o Milano.", items: ["Andiamo a mangiare qualcosa?", "Che cosa fai stasera?", "Questo ragazzo è proprio simpatico.", "La casa di mia nonna è vicino al mare."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il futuro anteriore", hint: "Forma e uso",
            text: [
              "Futuro di avere o essere + participio: avrò fatto, avrai fatto…; sarò andato/a, sarai andato/a… Con essere il participio concorda.",
              "Uso 1: azione futura conclusa prima di un'altra azione futura, spesso dopo «quando», «appena», «dopo che»: «Appena avrò ricevuto i soldi, ti pagherò».",
              "Uso 2: azione conclusa prima di un momento futuro: «Entro le otto avremo finito».",
              "Uso 3: ipotesi su un fatto passato: «Sarà già partito» (= probabilmente è già partito).",
              "Nel parlato si usa spesso il futuro semplice o il presente al posto del futuro anteriore: «Quando finisco, ti chiamo».",
            ],
            table: { head: ["", "finire", "partire"], rows: [["io", "avrò finito", "sarò partito/a"], ["tu", "avrai finito", "sarai partito/a"], ["lui / lei", "avrà finito", "sarà partito/a"], ["noi / voi / loro", "avremo / avrete / avranno finito", "saremo / sarete / saranno partiti/e"]] },
          },
          k.table("Tabella dei verbi", [
            ["leggere", "avrò letto", "", ""],
            ["arrivare", "", "sarai arrivato/a", ""],
            ["fare", "", "", "avranno fatto"],
            ["uscire", "", "", ""],
            ["scrivere", "", "", ""],
            ["svegliarsi", "", "", ""],
          ], "Completa con il futuro anteriore: io, tu, loro.", ["io", "tu", "loro"]),
          {
            kind: "fill", title: "Quando avrò finito…", hint: "Completa con il futuro anteriore del verbo tra parentesi.",
            items: [
              "Quando ___ (io, finire) il corso, parlerò meglio il dialetto di mia nonna.", "Appena ___ (tu, arrivare) a Napoli, mandami un messaggio.", "Entro la fine dell'anno ___ (noi, risparmiare) abbastanza soldi.", "Dopo che ___ (loro, cenare), usciranno.", "Luca non è ancora qui: ___ (perdere) l'autobus.", "Sono le dieci: i bambini ___ già ___ (addormentarsi).", "Quando ___ (voi, leggere) il libro, ne parleremo insieme.", "Chi ___ (mangiare) tutta la torta? I ragazzi, sicuramente!",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ipotesi sul presente e sul passato", hint: "Futuro semplice e futuro anteriore",
            text: [
              "Futuro semplice per un'ipotesi sul presente: «Dov'è Anna? — Sarà in ufficio» (probabilmente è in ufficio).",
              "Futuro anteriore per un'ipotesi sul passato: «Perché Anna non è venuta? — Avrà avuto da fare» (probabilmente ha avuto da fare).",
              "È molto comune nel parlato quotidiano e suona naturalissimo.",
            ],
            table: { head: ["certezza", "ipotesi"], rows: [["È a casa.", "Sarà a casa."], ["Ha quarant'anni.", "Avrà quarant'anni."], ["È uscito.", "Sarà uscito."], ["Ha dimenticato.", "Avrà dimenticato."]] },
          },
          {
            kind: "fill", title: "Fai un'ipotesi", hint: "Rispondi con un'ipotesi: futuro semplice (presente) o futuro anteriore (passato).",
            items: ["Quanti anni ha il professore? — ___ (avere) cinquant'anni.", "Perché Giulia non ha risposto? — ___ (essere) in riunione. (adesso)", "Perché Giulia non ha risposto ieri? — ___ (avere) il telefono spento.", "Di chi è questa giacca? — ___ (essere) di Paolo.", "Come mai la strada è bagnata? — ___ (piovere) stanotte.", "Dove sono le chiavi? — Le ___ (lasciare) in macchina."],
          },
          {
            kind: "intro", title: "Dialetto o italiano?", hint: "Una distinzione importante",
            text: ["I dialetti italiani non sono «italiano sbagliato»: sono lingue nate dal latino come l'italiano, con la loro grammatica e la loro letteratura.", "L'italiano standard nasce dal fiorentino del Trecento, la lingua di Dante, Petrarca e Boccaccio. Oggi quasi tutti parlano un «italiano regionale», cioè l'italiano con l'accento e qualche parola della propria zona."],
          },
          k.negativa(["Probabilmente è malato.", "Probabilmente hanno perso il treno.", "Prima finisco, poi esco. (al futuro)", "Probabilmente ha trent'anni.", "Entro venerdì finiamo il progetto.", "Probabilmente si è addormentato."], "Riscrivi ogni frase usando il futuro semplice o il futuro anteriore, senza «probabilmente».", "con il futuro"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il dialetto della nonna", "Una ragazza di Milano parla con il nonno siciliano.", [
            { who: "Sara", text: "Nonno, quando parli con la nonna in siciliano non capisco quasi niente!" },
            { who: "Nonno", text: "È normale. Io sono cresciuto a Catania e in casa si parlava solo dialetto. L'italiano l'ho imparato a scuola." },
            { who: "Sara", text: "E a Milano come hai fatto, quando sei arrivato?" },
            { who: "Nonno", text: "All'inizio i colleghi mi prendevano in giro per l'accento. Poi ho imparato anche qualche parola di milanese!" },
            { who: "Sara", text: "Mi insegni il siciliano? Quando l'avrò imparato, parlerò con la nonna senza che tu mi traduca." },
            { who: "Nonno", text: "Ci vorrà un po' di tempo, ma quando avrai finito, sarai la prima siciliana di Milano!" },
          ], ["Perché Sara non capisce i nonni?", "Dove ha imparato l'italiano il nonno?", "Che cosa succedeva a Milano all'inizio?", "Che cosa vuole fare Sara?", "Che cosa le promette il nonno?"]),
          k.listen("Lingue protette", "Un servizio radiofonico sulle lingue minoritarie.", [
            { who: "Giornalista", text: "In Italia una legge del 1999 tutela dodici lingue minoritarie, tra cui il sardo, il friulano, il ladino, il francese, il tedesco e l'albanese." },
            { who: "Giornalista", text: "In Alto Adige la maggioranza della popolazione parla tedesco e le scuole sono bilingui. In Valle d'Aosta i cartelli stradali sono in italiano e in francese." },
            { who: "Insegnante", text: "Io insegno friulano in una scuola elementare di Udine. Molti bambini lo parlano con i nonni, ma a scuola non lo scrivevano mai." },
            { who: "Giornalista", text: "Secondo gli esperti, entro qualche decennio alcune di queste lingue saranno scomparse, se non verranno protette." },
          ], ["Che cosa ha fatto la legge del 1999?", "Quali lingue minoritarie vengono nominate?", "Che cosa succede in Alto Adige e in Valle d'Aosta?", "Che cosa fa l'insegnante? Perché è importante?", "Che cosa temono gli esperti?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Come gli italiani hanno imparato l'italiano", [
            "Quando l'Italia diventò uno stato unito, nel 1861, solo una piccola parte della popolazione parlava italiano: secondo il linguista Tullio De Mauro, circa il due o tre per cento. Gli altri parlavano il dialetto della propria zona.",
            "L'italiano scritto esisteva da secoli: era la lingua di Dante e della letteratura, basata sul fiorentino. Ma nella vita quotidiana un contadino veneto e uno calabrese non si capivano.",
            "La scuola obbligatoria, il servizio militare e le migrazioni interne aiutarono a diffondere la lingua comune. Ma il contributo più grande arrivò negli anni Cinquanta con la televisione.",
            "Programmi come «Non è mai troppo tardi», in cui un maestro insegnava a leggere e scrivere agli adulti, portarono l'italiano nelle case di milioni di persone.",
            "Oggi quasi tutti parlano italiano, ma molti usano ancora il dialetto in famiglia e tra amici. E non è raro che, tra qualche anno, il dialetto sarà diventato soprattutto una lingua del cuore, usata per scherzare, cantare e ricordare.",
          ], ["Quanti italiani parlavano italiano nel 1861, secondo De Mauro?", "Su che cosa era basato l'italiano scritto?", "Che cosa aiutò a diffondere l'italiano?", "Quale fu il ruolo della televisione?", "Che cos'era «Non è mai troppo tardi»?", "Come si usa oggi il dialetto?"]),
          k.spagna("Nel tuo paese ci sono lingue o dialetti diversi? Come si usano oggi? Che cosa succederà, secondo te, tra cinquant'anni? Usa il futuro anteriore."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di lingue", hint: "Formule utili",
            text: ["«È madrelingua…», «Lo capisco ma non lo parlo», «Ha un forte accento…», «Si sente che è di…», «Parla un italiano molto pulito / molto regionale».", "Per le ipotesi: «Sarà di Roma, dall'accento», «Avrà vissuto al Nord per anni»."],
          },
          k.rispondi(["Quali lingue parli? Quale è la tua lingua madre?", "Nel tuo paese ci sono accenti molto diversi? Quale ti piace di più?", "Ti piacerebbe imparare un dialetto italiano? Quale?", "Che cosa avrai fatto entro la fine di quest'anno?", "Che cosa avrai imparato quando avrai finito questo quaderno?", "Secondo te, è importante conservare i dialetti? Perché?"]),
          { kind: "speak", title: "Ipotesi", hint: "Fai un'ipotesi su ogni situazione, con il futuro semplice o il futuro anteriore.", items: ["Il tuo collega arriva con un'ora di ritardo e sorride.", "Il tuo vicino ha una macchina nuova e costosissima.", "Senti una persona che dice «annamo».", "Il frigorifero è vuoto e i tuoi coinquilini dormono.", "Una persona in treno parla con un accento che non conosci.", "La tua amica non risponde ai messaggi da due giorni."] },
          {
            kind: "roleplay", title: "Da dove vieni?", hint: "In treno conosci una persona che parla con un accento forte. L'IA fa questa persona: indovina da dove viene.",
            steps: ["Inizia una conversazione.", "Fai ipotesi sulla sua provenienza dall'accento («Sarà…»).", "Chiedile di insegnarti tre parole del suo dialetto.", "Raccontale come si parla nella tua regione.", "Salutala."],
          },
          {
            kind: "roleplay", title: "Il progetto per la scuola", hint: "Organizzi con un collega (l'IA) un progetto per insegnare il dialetto ai bambini. Pianificate le tappe con il futuro anteriore.",
            steps: ["Presenta l'idea.", "Decidete che cosa avrete fatto entro il primo mese.", "Decidete che cosa avrete fatto entro la fine dell'anno.", "Discutete un problema possibile.", "Riassumete il piano."],
          },
          { kind: "speak", title: "La mia lingua", hint: "Parla per due minuti della lingua o delle lingue della tua famiglia: come parlavano i nonni, come parli tu, come parleranno (o avranno smesso di parlare) i tuoi figli.", items: ["Nella mia famiglia…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Prima finisco l'esame, poi ti chiamo. (Appena avrò…)", "Probabilmente ha perso il treno. (con il futuro anteriore)", "Probabilmente è a casa. (con il futuro semplice)", "Entro dicembre traslochiamo. (con il futuro anteriore)", "Probabilmente si sono dimenticati. (con il futuro anteriore)", "Dopo la laurea partirò. (Dopo che mi sarò…)", "Quando torni, mangiamo. (al futuro, registro scritto)", "Probabilmente ci sono cento persone. (con il futuro semplice)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Il mio piano", hint: "Scrivi un testo (200–220 parole): che cosa avrai fatto tra un anno con il tuo italiano? Quali obiettivi avrai raggiunto, che cosa avrai letto e visto, e che cosa farai dopo. Usa almeno otto futuri anteriori.", rows: 16, items: ["Tra un anno…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: futuro anteriore", ["avrò finito", "sarai arrivata", "avremo letto", "saranno partiti", "si sarà addormentato", "avranno dimenticato"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Appena sarò arrivato, ti chiamo.", "Avrà perso il treno.", "Entro giugno avremo finito.", "Sarà di Napoli, dall'accento.", "Il dialetto è la lingua del cuore."]),
          k.media([
            { type: "Serie", title: "Gomorra", where: "Sky, NOW", why: "Interamente in napoletano con sottotitoli: un esercizio difficile ma utile per sentire quanto è diverso un dialetto." },
            { type: "Canzone", title: "Napule è, Pino Daniele", where: "Spotify, YouTube", why: "Una delle canzoni più belle in napoletano, del 1977. Prova a capire che cosa dice della città." },
            { type: "Film", title: "Non è mai troppo tardi (miniserie Rai, 2014)", where: "RaiPlay", why: "La storia del maestro Alberto Manzi e del programma che insegnò l'italiano a milioni di adulti." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che differenze hai notato tra il dialetto e l'italiano? Quali parole hai capito?", items: ["Nel dialetto ho sentito che…"] },
        ],
      },
    ],

    exam: k.exam(44, {
      parole: ["il dialetto", "l'italiano regionale", "la cadenza", "la lingua minoritaria", "il bilinguismo", "tutelare", "l'inflessione", "la lingua madre", "l'alfabetizzazione", "il gergo"],
      contrario: ["comprensibile → contrario", "tutelare → sostantivo", "bilingue → sostantivo", "dialetto → aggettivo", "alfabetizzato → contrario", "regione → aggettivo"],
      verbiHint: "Completa con il futuro anteriore: io, tu, loro.",
      verbiCols: ["io", "tu", "loro"],
      verbi: [["vedere", "", "", ""], ["venire", "", "", ""], ["dire", "", "", ""], ["laurearsi", "", "", ""]],
      completaHint: "Completa con il futuro semplice o il futuro anteriore.",
      completa: ["Quando ___ (io, finire) di lavorare, ti raggiungerò.", "Appena ___ (noi, arrivare), vi chiameremo.", "Entro domani ___ (loro, ricevere) il pacco.", "Dov'è Marta? — ___ (essere) in palestra.", "Perché non è venuto? — ___ (avere) un problema.", "Dopo che ___ (tu, leggere) la lettera, capirai.", "Quanti anni ha tuo nonno? — ___ (avere) novant'anni.", "Le chiavi? Le ___ (lasciare) in ufficio."],
      trasformaHint: "Riscrivi ogni frase con il futuro anteriore o il futuro semplice, come indicato.",
      trasforma: ["Probabilmente è uscito. (futuro anteriore)", "Probabilmente sono le sei. (futuro semplice)", "Prima finisco, poi esco. (Quando avrò…)", "Probabilmente hanno litigato. (futuro anteriore)", "Entro sabato dipingiamo la casa. (futuro anteriore)", "Probabilmente è stanca. (futuro semplice)"],
      leggi: {
        text: [
          "La Sardegna ha una delle lingue minoritarie più parlate d'Italia: il sardo. Secondo alcune stime lo capiscono più di un milione di persone, ma i giovani lo parlano sempre meno.",
          "Da alcuni anni in molte scuole si fanno corsi di sardo e alcune radio trasmettono programmi nella lingua dell'isola. Anche diversi cantanti scrivono canzoni in sardo.",
          "Gli esperti dicono che, se non si interviene, tra due o tre generazioni il sardo sarà diventato una lingua parlata solo dagli anziani. Ma se i progetti avranno successo, potrà tornare a vivere.",
        ],
        questions: ["Quante persone capiscono il sardo?", "Qual è il problema?", "Che cosa si fa per proteggerlo?", "Che cosa dicono gli esperti sul futuro?"],
      },
      ascolta: {
        script: [
          { who: "Marco", text: "Hai sentito la nuova collega? Da dove sarà?" },
          { who: "Laura", text: "Dall'accento direi Bari. Avrà studiato al Nord, però: usa molte parole milanesi." },
          { who: "Marco", text: "Le chiederò a pranzo. Quando l'avrò conosciuta meglio, ti dirò." },
        ],
        questions: ["Di chi parlano Marco e Laura?", "Da dove viene, secondo Laura? Perché?", "Che altra ipotesi fa Laura?", "Che cosa farà Marco?"],
      },
      parla: ["Racconta le lingue e i dialetti del tuo paese.", "Che cosa avrai fatto entro la fine dell'anno?", "Fai un'ipotesi: perché il tuo amico non è venuto alla festa?", "È importante conservare i dialetti? Argomenta."],
      role: ["L'IA è un turista che non capisce il dialetto di un paese: aiutalo.", "Spiega la differenza tra dialetto e italiano.", "Fate insieme ipotesi sul significato di alcune parole."],
      dettato: ["Quando avrò finito…", "Sarà a casa.", "Avranno perso l'aereo.", "la lingua minoritaria", "l'italiano regionale", "Entro giugno avremo finito."],
      traduci: ["Probabilmente ha dimenticato l'appuntamento. (futuro anteriore)", "Prima ti laurei, poi cerchi lavoro. (Quando ti sarai…)", "Probabilmente ha cinquant'anni. (futuro semplice)", "Entro le otto ceniamo. (futuro anteriore)", "Probabilmente si sono persi. (futuro anteriore)", "Appena arriva, partiamo. (al futuro)"],
      scrivi: { hint: "Scrivi un testo (150–180 parole) sul futuro di una lingua o di un dialetto che conosci: come è oggi, che cosa sarà successo tra cinquant'anni e che cosa si dovrebbe fare.", start: "Tra cinquant'anni…" },
    }),
  };
})();
