// Unità 42 · Sogni nel cassetto — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[42] = {
    n: 42,
    level: "B1",
    title: "Sogni nel cassetto",
    goal: "Parlare di sogni, ambizioni e progetti, distinguendo quello che farai (futuro) da quello che faresti (condizionale).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare dei tuoi «sogni nel cassetto» (i desideri che tieni nascosti), delle tue ambizioni e dei progetti concreti.",
              "Grammatica: la differenza tra futuro (farò: un progetto, una previsione) e condizionale (farei: un desiderio, una possibilità), e il condizionale per le notizie non confermate.",
              "Un errore tipico degli studenti è confondere «faremo» e «faremmo»: qui impari a sentirli e a usarli bene.",
            ],
          },
          {
            kind: "intro", title: "Farò o farei?", hint: "Un'anticipazione",
            text: ["Futuro: qualcosa che hai deciso o che prevedi. «L'anno prossimo farò un master».", "Condizionale: qualcosa che desideri o che dipende da una condizione. «Mi piacerebbe fare un master, ma costa troppo»."],
            examples: [
              { it: "Tra un anno andrò a vivere a Lisbona.", es: "progetto deciso" },
              { it: "Andrei a vivere a Lisbona, se trovassi lavoro.", es: "possibilità con condizione" },
              { it: "Faremo una festa / Faremmo una festa.", es: "una sola m o due: cambia tutto" },
            ],
          },
          { kind: "speak", title: "Il tuo sogno nel cassetto", hint: "Prima di cominciare: hai un sogno nel cassetto? Lo racconti spesso o lo tieni per te?", items: ["Il mio sogno nel cassetto è…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Sogni e ambizioni", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il sogno nel cassetto", "l'ambizione", "l'obiettivo", "il traguardo", "realizzare",
              "puntare a", "farcela", "rinunciare", "la tenacia", "la determinazione",
              "il talento", "il sacrificio", "rischiare", "inseguire un sogno", "la svolta",
              "l'occasione", "mettersi in gioco", "lanciarsi", "il fallimento", "rialzarsi",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta della stessa famiglia.",
            items: ["ambizione → (aggettivo)", "determinazione → (aggettivo)", "realizzare → (sostantivo)", "rinunciare → (sostantivo)", "talento → (aggettivo)", "rischiare → (sostantivo)", "fallire → (sostantivo)", "tenacia → (aggettivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: inseguire un sogno → Ha lasciato tutto per inseguire il suo sogno.", items: ["realizzerò", "mi piacerebbe", "farei", "faremo", "faremmo", "inseguire un sogno", "mettersi in gioco", "rialzarsi"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Faremo o faremmo?", hint: "Una m o due",
            text: [
              "La prima persona plurale del futuro ha una m sola (faremo, andremo, saremo), quella del condizionale ne ha due (faremmo, andremmo, saremmo).",
              "Nel parlato la doppia m si sente come una piccola pausa: «fa-rem-mo». Se non la pronunci, cambi il significato.",
              "Anche la terza persona si distingue bene: «farà» (accento finale) / «farebbe»; «faranno» / «farebbero».",
            ],
            table: { head: ["futuro", "condizionale"], rows: [["faremo", "faremmo"], ["andremo", "andremmo"], ["farà / faranno", "farebbe / farebbero"], ["sarete", "sareste"]] },
          },
          { kind: "shadow", title: "Coppie", hint: "Ascolta la differenza e ripeti.", items: ["faremo, faremmo", "andremo, andremmo", "saremo, saremmo", "potremo, potremmo", "vivremo, vivremmo"] },
          { kind: "shadow", title: "Frasi", hint: "Ripeti con attenzione alla doppia.", items: ["Sabato faremo una cena a casa.", "Faremmo una cena, ma la casa è piccola.", "L'anno prossimo andremo in Australia.", "Andremmo in Australia, se avessimo i soldi.", "Saremmo felici di aiutarvi."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Futuro e condizionale a confronto", hint: "Stessa radice, uso diverso",
            text: [
              "Futuro e condizionale hanno la stessa radice: farò / farei; sarò / sarei; verrò / verrei; vorrò / vorrei. Cambia solo la terminazione.",
              "Futuro: progetti decisi, previsioni, promesse, ipotesi sul presente («Sarà a casa»).",
              "Condizionale: desideri, possibilità legate a una condizione, consigli, richieste gentili, notizie non confermate («Il ministro sarebbe malato»).",
            ],
            table: { head: ["", "futuro", "condizionale"], rows: [["io", "farò", "farei"], ["tu", "farai", "faresti"], ["lui / lei", "farà", "farebbe"], ["noi", "faremo", "faremmo"], ["voi", "farete", "fareste"], ["loro", "faranno", "farebbero"]] },
          },
          k.table("Futuro e condizionale", [
            ["andare (noi)", "andremo", "andremmo"],
            ["venire (io)", "", "verrei"],
            ["volere (loro)", "", ""],
            ["potere (voi)", "", ""],
            ["vivere (tu)", "", ""],
            ["rimanere (lei)", "", ""],
          ], "Completa con il futuro e il condizionale presente.", ["futuro", "condizionale"]),
          {
            kind: "fill", title: "Farò o farei?", hint: "Completa con il futuro o con il condizionale, secondo il senso.",
            items: [
              "Ho già comprato il biglietto: il mese prossimo ___ (andare) in Giappone.", "Mi ___ (piacere) andare in Giappone, ma il viaggio costa troppo.", "Se avessi più tempo, ___ (imparare) a suonare la chitarra.", "Domani ___ (noi, fare) una riunione alle nove: è già fissata.", "Al posto tuo, ___ (io, accettare) subito quell'offerta.", "Prometto che ti ___ (scrivere) ogni settimana.", "Secondo indiscrezioni, il cantante ___ (stare) per sposarsi.", "Non so dov'è Luca: ___ (essere) ancora in ufficio.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il condizionale della notizia non confermata", hint: "Il condizionale «giornalistico»",
            text: [
              "Nei giornali e nei telegiornali il condizionale indica un'informazione non ancora confermata: «Il presidente sarebbe in vacanza in Sardegna», «I ladri avrebbero rubato tre quadri».",
              "Equivale a «secondo alcune fonti, il presidente è…». Al passato si usa il condizionale passato (avrebbe rubato), che studierai bene nell'unità 43.",
            ],
            examples: [{ it: "Secondo la stampa, l'attrice avrebbe firmato un contratto con Netflix.", es: "notizia non confermata" }],
          },
          {
            kind: "fill", title: "Notizie non confermate", hint: "Trasforma la parte tra parentesi nel condizionale presente.",
            items: ["Secondo alcune fonti, il ministro ___ (essere) pronto a dimettersi.", "La famosa coppia ___ (aspettare) un figlio.", "Il nuovo stadio ___ (costare) più di cento milioni.", "I due calciatori ___ (volere) cambiare squadra.", "Secondo i medici, il paziente ___ (stare) meglio.", "Il film ___ (uscire) a dicembre."],
          },
          {
            kind: "intro", title: "Parlare di sogni con precisione", hint: "Dal sogno al progetto",
            text: ["Sogno lontano: «Un giorno mi piacerebbe…», «Il mio sogno sarebbe…», «Darei qualsiasi cosa per…».", "Progetto: «Ho deciso di…», «L'anno prossimo + futuro», «Sto per…», «Ho intenzione di…».", "Ostacolo: «Lo farei, ma…», «Se solo + congiuntivo imperfetto…»."],
          },
          k.negativa(["Andremo a vivere in campagna. (desiderio)", "Mi piacerebbe aprire un ristorante. (progetto deciso)", "Il sindaco si è dimesso. (notizia non confermata)", "Faremmo volentieri una vacanza. (progetto deciso)", "Comprerò una casa. (desiderio con condizione: se avessi i soldi)", "Partiranno domani. (notizia non confermata)"], "Trasforma ogni frase secondo l'indicazione tra parentesi, passando dal futuro al condizionale o viceversa.", "trasforma"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il sogno di Matteo", "Un ragazzo racconta il suo progetto a un'amica.", [
            { who: "Matteo", text: "Ho deciso: a settembre lascerò il lavoro in banca e aprirò un laboratorio di ceramica." },
            { who: "Irene", text: "Davvero? Era il tuo sogno nel cassetto da anni!" },
            { who: "Matteo", text: "Sì. All'inizio guadagnerò poco, lo so. Ma se restassi in banca, mi pentirei per sempre." },
            { who: "Irene", text: "E i tuoi genitori che cosa dicono?" },
            { who: "Matteo", text: "Mia madre preferirebbe che restassi. Mio padre invece dice che, se fosse giovane, farebbe la stessa cosa." },
            { who: "Irene", text: "Io verrei a fare un corso da te! Quando aprirai?" },
            { who: "Matteo", text: "Il primo ottobre. E tu sarai la mia prima cliente." },
          ], ["Che cosa farà Matteo a settembre?", "Perché ha deciso di farlo?", "Che cosa pensano i genitori?", "Che cosa farebbe Irene?", "Quando aprirà il laboratorio?"]),
          k.listen("Intervista a una sportiva", "Una giovane atleta paralimpica risponde alle domande di un giornalista.", [
            { who: "Giornalista", text: "Dopo le medaglie, qual è il suo prossimo obiettivo?" },
            { who: "Atleta", text: "Le prossime Paralimpiadi. Mi allenerò ogni giorno e farò di tutto per vincere ancora." },
            { who: "Giornalista", text: "E se non dovesse fare sport, che lavoro farebbe?" },
            { who: "Atleta", text: "Farei la designer o forse la giornalista. Mi piacerebbe raccontare le storie degli altri." },
            { who: "Giornalista", text: "Che consiglio darebbe a un ragazzo che ha un sogno?" },
            { who: "Atleta", text: "Gli direi di non ascoltare chi dice «è impossibile». Io l'ho sentito mille volte." },
          ], ["Qual è il prossimo obiettivo dell'atleta?", "Che cosa farà per raggiungerlo?", "Che lavoro farebbe se non facesse sport?", "Perché le piacerebbe quel lavoro?", "Che consiglio darebbe ai ragazzi?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Bebe Vio: un sogno più forte di tutto", [
            "Beatrice Vio, conosciuta come Bebe, è nata a Venezia nel 1997. Da bambina aveva un sogno chiaro: diventare una campionessa di scherma.",
            "Nel 2008, quando aveva undici anni, una meningite molto grave la costrinse a lunghi mesi di ospedale. Per salvarle la vita, i medici dovettero amputarle gli avambracci e le gambe.",
            "Molti avrebbero rinunciato. Lei no: con delle protesi speciali tornò in pedana e ricominciò ad allenarsi. «Mi dicevano che non ce l'avrei fatta», ha raccontato più volte.",
            "Nel 2016 vinse la medaglia d'oro nel fioretto alle Paralimpiadi di Rio de Janeiro e nel 2021 ripeté l'impresa a Tokyo. È diventata uno dei personaggi sportivi più amati d'Italia.",
            "Oggi Bebe Vio parla nelle scuole e, con la sua famiglia, sostiene un'associazione che aiuta i bambini con disabilità a fare sport. Il suo messaggio è semplice: i sogni non si chiudono nel cassetto.",
          ], ["Chi è Bebe Vio? Qual era il suo sogno da bambina?", "Che cosa le successe nel 2008?", "Come reagì?", "Quali medaglie ha vinto? Dove e quando?", "Che cosa fa oggi?", "Qual è il suo messaggio? Che cosa ne pensi?"]),
          k.spagna("Racconta la storia di una persona del tuo paese che ha realizzato un sogno nonostante le difficoltà. Usa il futuro e il condizionale per parlare dei suoi progetti."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dal sogno al piano", hint: "Formule per raccontare un progetto",
            text: ["Presentare: «Da anni sogno di…», «Finalmente ho deciso di…». Spiegare il piano: «Prima…, poi…, entro un anno…». Ammettere i rischi: «So che sarà difficile, ma…», «Il rischio più grande sarebbe…». Motivare: «Se non lo facessi, mi pentirei»."],
          },
          k.rispondi(["Qual è il tuo sogno nel cassetto?", "Che cosa farai nei prossimi due anni? E che cosa ti piacerebbe fare?", "C'è un sogno a cui hai rinunciato? Perché?", "Che cosa saresti disposto a sacrificare per un sogno?", "Chi è una persona che ammiri per la sua determinazione?", "Che cosa diresti a un amico che ha paura di inseguire il suo sogno?"]),
          { kind: "speak", title: "Farò o farei?", hint: "Per ogni tema, di' una cosa che farai sicuramente e una che faresti in certe condizioni.", items: ["le prossime vacanze", "il lavoro", "la casa", "lo studio dell'italiano", "lo sport", "la famiglia"] },
          {
            kind: "roleplay", title: "Il prestito in banca", hint: "Vuoi aprire una piccola attività (un bar, un laboratorio, una libreria) e chiedi un prestito. L'IA fa il direttore della banca, molto prudente. Usa il «Lei».",
            steps: ["Presenta il tuo progetto con il futuro.", "Spiega quanto ti servirebbe e perché.", "Rispondi alle sue obiezioni.", "Spiega che cosa faresti se le cose andassero male.", "Concludi la riunione."],
          },
          {
            kind: "roleplay", title: "L'amico indeciso", hint: "Un amico (l'IA) sogna di diventare cuoco ma ha paura di lasciare il suo lavoro sicuro.",
            steps: ["Chiedigli da quanto tempo ci pensa.", "Fagli immaginare: che cosa farebbe se ci provasse?", "Discutete i rischi.", "Proponi un piano graduale con il futuro.", "Incoraggialo."],
          },
          { kind: "speak", title: "Il mio piano", hint: "Presenta per due minuti un tuo sogno come se fosse un progetto: che cosa farai, quando, come, quali rischi ci sarebbero e che cosa faresti se fallisse.", items: ["Il mio progetto è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Vorrei fare un master. (progetto deciso, con il futuro)", "Farò un viaggio in India. (desiderio, con il condizionale)", "L'attore è malato. (notizia non confermata)", "Andremo al mare domenica. (desiderio con condizione)", "Diventerò medico. (sogno: «Il mio sogno sarebbe…»)", "Non lo faccio perché ho paura. (Lo farei, ma…)", "Ce la farai! (al passato, come lo dicevano a Bebe: «Mi dicevano che non…»)", "Un giorno apriremo un ristorante. (con il condizionale e «se»)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "La lettera di motivazione", hint: "Scrivi una lettera di motivazione (200–220 parole) per una borsa di studio che ti permetterebbe di realizzare un tuo sogno: che cosa farai con la borsa, perché è importante per te, che cosa faresti se non la ottenessi.", rows: 16, items: ["Gentile commissione,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: futuro o condizionale?", ["faremo", "faremmo", "andranno", "andrebbero", "sarete", "sareste"], "Ascolta e scrivi: attenzione alla differenza."),
          k.dettato("Dettato: frasi", ["Il mese prossimo apriremo il negozio.", "Lo farei, ma non ho tempo.", "Secondo la stampa, sarebbe in vacanza.", "Mi piacerebbe tanto riuscirci.", "Non rinuncerò al mio sogno."]),
          k.media([
            { type: "Film", title: "Il colibrì (Francesca Archibugi, 2022)", where: "Cerca dove vederlo su JustWatch", why: "Una vita intera di desideri, rinunce e scelte, dal romanzo premio Strega di Sandro Veronesi." },
            { type: "Canzone", title: "Il cielo in una stanza, Gino Paoli", where: "Spotify, YouTube", why: "Un classico del 1960 in cui una stanza si trasforma con l'amore: un sogno ad occhi aperti." },
            { type: "YouTube", title: "Bebe Vio: interviste", where: "YouTube", why: "Ascolta come parla dei suoi obiettivi: veloce, ironica e piena di energia." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Qual è il sogno del protagonista? Lo realizza? Che cosa faresti al suo posto?", items: ["Il protagonista sogna di…"] },
        ],
      },
    ],

    exam: k.exam(42, {
      parole: ["il sogno nel cassetto", "il traguardo", "puntare a", "la tenacia", "il sacrificio", "inseguire un sogno", "mettersi in gioco", "rialzarsi", "l'occasione", "lanciarsi"],
      contrario: ["ambizione → aggettivo", "realizzare → sostantivo", "rinunciare → sostantivo", "fallire → sostantivo", "talento → aggettivo", "successo → contrario"],
      verbiHint: "Completa con il futuro e il condizionale presente.",
      verbiCols: ["futuro", "condizionale"],
      verbi: [["fare (noi)", "", ""], ["essere (voi)", "", ""], ["venire (loro)", "", ""], ["sapere (io)", "", ""]],
      completaHint: "Completa con il futuro o il condizionale, secondo il senso.",
      completa: ["Ho già prenotato: a luglio ___ (noi, andare) in Grecia.", "Se potessi, ___ (io, vivere) al mare tutto l'anno.", "Ti prometto che non lo ___ (io, dire) a nessuno.", "Mi ___ (piacere) diventare pilota.", "Secondo la stampa, il calciatore ___ (lasciare) la squadra.", "Dov'è Anna? ___ (essere) dal dentista.", "Al posto tuo, ___ (io, chiedere) un aumento.", "Domani ___ (piovere) in tutto il Nord."],
      trasformaHint: "Trasforma come indicato tra parentesi.",
      trasforma: ["Andremo a Parigi. (desiderio)", "Comprerebbero casa. (progetto deciso)", "Il ministro si dimette. (notizia non confermata)", "Apriremo un bar. (con «se avessimo i soldi»)", "Studierò medicina. (sogno: «Mi piacerebbe…»)", "Lo farei. (promessa con il futuro)"],
      leggi: {
        text: [
          "Lucia ha 45 anni e fa l'infermiera da vent'anni. Il suo sogno nel cassetto è sempre stato scrivere libri per bambini.",
          "«Per anni ho detto: lo farò quando avrò tempo. Poi ho capito che il tempo non arriva mai da solo», racconta. Ogni sera, dopo il lavoro, scrive per un'ora.",
          "Il suo primo libro uscirà a primavera. «Non so se avrà successo, ma se non ci avessi provato, oggi mi sentirei peggio», dice.",
        ],
        questions: ["Che lavoro fa Lucia? Qual è il suo sogno?", "Che cosa diceva per anni? Che cosa ha capito?", "Che cosa fa ogni sera?", "Che cosa succederà a primavera?"],
      },
      ascolta: {
        script: [
          { who: "Paolo", text: "Che cosa farai dopo la laurea?" },
          { who: "Giulia", text: "Farò un tirocinio a Bruxelles: ho già firmato il contratto." },
          { who: "Paolo", text: "Che bello! Io invece vorrei andare in Canada, ma non so se ce la farei da solo." },
          { who: "Giulia", text: "Ce la faresti benissimo. E se non provi, non lo saprai mai." },
        ],
        questions: ["Che cosa farà Giulia dopo la laurea?", "È un progetto sicuro? Perché?", "Che cosa vorrebbe fare Paolo?", "Che cosa gli dice Giulia?"],
      },
      parla: ["Racconta il tuo sogno nel cassetto.", "Che cosa farai l'anno prossimo e che cosa ti piacerebbe fare?", "Dai un consiglio a chi ha paura di inseguire un sogno.", "Leggi come un giornalista: «Il cantante si sposa a giugno» (non confermato)."],
      role: ["Presenta all'IA il tuo progetto per aprire un'attività.", "Rispondi alle sue domande sui rischi.", "Spiega che cosa faresti se fallissi."],
      dettato: ["faremo una festa", "faremmo una festa", "Mi piacerebbe riuscirci.", "Secondo la stampa, sarebbe malato.", "Lo farò, te lo prometto.", "Lo farei, ma non posso."],
      traduci: ["Voglio cambiare lavoro. (progetto deciso)", "Andremo in Messico. (desiderio)", "L'attrice si è sposata. (notizia non confermata, condizionale passato)", "Viaggerei di più. (con «se avessi tempo»)", "Diventerò fotografa. (Il mio sogno sarebbe…)", "Non lo faccio per paura. (Lo farei, ma…)"],
      scrivi: { hint: "Scrivi un testo (150–180 parole): il tuo sogno nel cassetto, che cosa farai concretamente per realizzarlo e che cosa faresti se non ci riuscissi.", start: "Da anni sogno di…" },
    }),
  };
})();
