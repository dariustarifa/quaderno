// Unità 75 · Media e informazione — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[75] = {
    n: 75,
    level: "B2",
    title: "Media e informazione",
    goal: "Informarsi con spirito critico e distinguere fatti, ipotesi e voci, usando il futuro e il condizionale di supposizione (sarà vero?, avrà perso il treno, il ministro si sarebbe dimesso).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a leggere le notizie con occhio critico: riconoscere le fonti affidabili, le notizie false, i titoli acchiappaclic.",
              "Grammatica: il futuro e il futuro anteriore usati per fare supposizioni («Dov'è Marco? Sarà in ufficio», «Avrà perso il treno»), e il condizionale giornalistico, che presenta una notizia non confermata («Il ministro si sarebbe dimesso»).",
              "Sono strumenti fondamentali per distinguere, nella lingua, ciò che è certo da ciò che è solo probabile o riferito.",
            ],
          },
          {
            kind: "intro", title: "Certo, probabile, riferito", hint: "Un'anticipazione",
            examples: [
              { it: "Il treno è in ritardo.", es: "fatto certo" },
              { it: "Il treno sarà in ritardo, come sempre.", es: "supposizione (futuro)" },
              { it: "Il treno avrà avuto un guasto.", es: "supposizione sul passato (futuro anteriore)" },
              { it: "Secondo alcune fonti, il treno sarebbe deragliato.", es: "notizia non confermata (condizionale)" },
            ],
            text: ["Il verbo stesso dice al lettore quanto fidarsi."],
          },
          { kind: "speak", title: "Come ti informi?", hint: "Prima di cominciare: dove leggi le notizie? Ti fidi delle tue fonti? Ti è mai capitato di credere a una notizia falsa?", items: ["Di solito mi informo…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico dell'informazione", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la fonte", "la testata", "la notizia falsa (fake news)", "la bufala", "il titolo acchiappaclic",
              "la verifica dei fatti", "l'indiscrezione", "la smentita", "il sensazionalismo", "la disinformazione",
              "la bolla informativa", "il pregiudizio di conferma", "l'agenzia di stampa", "il corrispondente", "l'inviato",
              "attendibile", "fazioso", "imparziale", "virale", "condividere",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["attendibile → (sostantivo)", "fazioso → (sostantivo)", "imparziale → (contrario)", "verificare → (sostantivo)", "informare → (sostantivo)", "smentire → (sostantivo)", "virale → (verbo: diventare…)", "condividere → (sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione.", items: ["una fonte attendibile", "diventare virale", "una bufala", "verificare i fatti", "un titolo acchiappaclic", "la bolla informativa", "un giornale fazioso", "secondo indiscrezioni"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il tono della supposizione", hint: "Dubbio e ipotesi",
            text: [
              "Le supposizioni con il futuro si dicono con un tono rilassato, spesso con un'alzata di spalle: «Boh, sarà a casa».",
              "Le domande retoriche con il futuro esprimono dubbio o sorpresa: «Sarà vero?», «Chi sarà a quest'ora?», «Che cosa avrà voluto dire?».",
              "Il condizionale giornalistico si legge con il tono neutro del notiziario: «Il ministro | avrebbe presentato | le dimissioni».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con il tono della supposizione.", items: ["Chi sarà a quest'ora?", "Sarà vero?", "Avrà perso il treno.", "Saranno le dieci, più o meno.", "Che cosa avrà voluto dire?"] },
          { kind: "shadow", title: "Notiziario", hint: "Con il tono neutro.", items: ["Secondo indiscrezioni, | il ministro si sarebbe dimesso.", "L'uomo | avrebbe agito da solo.", "I ladri | sarebbero fuggiti in moto.", "Il governo | starebbe preparando una nuova legge."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il futuro di supposizione", hint: "Ipotesi sul presente e sul passato",
            text: [
              "Futuro semplice = supposizione sul presente: «Dov'è Anna? Sarà al lavoro» (= probabilmente è al lavoro). «Quanti anni avrà? Ne avrà cinquanta».",
              "Futuro anteriore = supposizione sul passato: «Non risponde: avrà spento il telefono» (= probabilmente ha spento). «Sarà uscito presto».",
              "Si usa molto con «sarà», «avrà», «ci sarà», e in domande che esprimono dubbio: «Sarà vero?».",
              "«Sarà, ma…» = forse hai ragione, ma non ne sono convinto.",
            ],
            table: { head: ["certezza", "supposizione"], rows: [["è a casa", "sarà a casa"], ["ha quarant'anni", "avrà quarant'anni"], ["ha perso il treno", "avrà perso il treno"], ["è uscita", "sarà uscita"]] },
          },
          k.table("Fai una supposizione", [
            ["Probabilmente Marco è in palestra.", "Marco sarà in palestra."],
            ["Probabilmente sono le sei.", ""],
            ["Probabilmente ha dimenticato l'appuntamento.", ""],
            ["Probabilmente la notizia è falsa.", ""],
            ["Probabilmente sono già partiti.", ""],
            ["Probabilmente costa molto.", ""],
          ], "Riscrivi con il futuro o il futuro anteriore di supposizione.", ["supposizione"]),
          {
            kind: "fill", title: "Completa", hint: "Completa con il futuro semplice o anteriore di supposizione.",
            items: [
              "Non risponde al telefono: ___ (essere) in riunione.", "Il pacco non è arrivato: ___ (perdersi).", "Quanti anni ha la nuova vicina? — Mah, ne ___ (avere) trenta.", "Hanno gli occhi rossi: ___ (piangere).", "Chi ha scritto questo articolo? ___ (essere) un giornalista esperto.", "Sono già le nove: i ragazzi ___ (arrivare) a scuola.", "La strada è bagnata: ___ (piovere) stanotte.", "Questa notizia ___ (essere) vera? Non mi fido.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il condizionale giornalistico", hint: "Notizie non confermate",
            text: [
              "I giornalisti usano il condizionale per riferire notizie non verificate o attribuite ad altre fonti: «Secondo fonti vicine al governo, il ministro si sarebbe dimesso».",
              "Condizionale presente = fatto presente non confermato: «L'azienda starebbe per chiudere». Condizionale passato = fatto passato non confermato: «Il ladro sarebbe entrato dalla finestra».",
              "Spesso è accompagnato da: secondo…, stando a…, a quanto risulta, pare che…, secondo indiscrezioni.",
              "Il condizionale protegge il giornalista: dice al lettore «questo non è un fatto accertato».",
            ],
          },
          k.negativa(["Il ministro si è dimesso. (non confermato)", "La squadra vuole comprare un nuovo attaccante. (secondo indiscrezioni)", "I ladri sono fuggiti in moto. (secondo i testimoni)", "L'attrice si sposa a giugno. (pare / condizionale)", "Il governo prepara una nuova tassa. (stando a fonti vicine)", "L'incendio è partito da un mozzicone. (secondo i vigili del fuoco)"], "Riscrivi ogni notizia come non confermata, con il condizionale giornalistico.", "condizionale giornalistico"),
          {
            kind: "intro", title: "Fatto, supposizione o voce?", hint: "Leggere tra le righe",
            text: ["Un lettore attento si chiede sempre: questa frase è un fatto (indicativo), una supposizione di chi scrive (futuro, «probabilmente», «forse»), o una notizia riferita e non verificata (condizionale, «secondo…»)? Spesso i titoli acchiappaclic presentano come fatti ciò che nell'articolo è solo una voce."],
          },
          {
            kind: "fill", title: "Fatto, supposizione o voce?", hint: "Scrivi «fatto», «supposizione» o «voce» per ogni frase.",
            items: ["«Il presidente ha firmato la legge ieri.» → ___", "«Il presidente avrebbe firmato in segreto.» → ___", "«Saranno state almeno diecimila persone in piazza.» → ___", "«Secondo indiscrezioni, il cantante si ritirerebbe.» → ___", "«L'incidente è avvenuto alle otto.» → ___", "«Avrà avuto le sue ragioni.» → ___"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il messaggio virale", "Due amici discutono di un messaggio ricevuto in una chat.", [
            { who: "Giorgio", text: "Hai visto il messaggio nel gruppo? Dice che da lunedì chiudono tutte le scuole della regione!" },
            { who: "Valentina", text: "Mah, sarà l'ennesima bufala. Chi l'ha scritto?" },
            { who: "Giorgio", text: "Non c'è scritto. Me l'ha inoltrato mia zia, che l'avrà ricevuto da qualcun altro." },
            { who: "Valentina", text: "Ecco. Controlliamo sul sito della Regione… Niente. E nessun giornale ne parla." },
            { who: "Giorgio", text: "Però sembrava così vero… C'era anche il logo ufficiale." },
            { who: "Valentina", text: "Un logo si copia in due secondi. Prima di condividere, verifica sempre la fonte." },
          ], ["Che cosa dice il messaggio?", "Come reagisce Valentina?", "Da dove arriva il messaggio?", "Come verificano la notizia?", "Perché Giorgio ci aveva creduto?", "Trova le supposizioni con il futuro e spiegale."]),
          k.listen("Il giornale radio", "Le notizie del mattino.", [
            { who: "Speaker", text: "Buongiorno. Ancora poco chiara la dinamica dell'incidente avvenuto ieri sera sull'autostrada vicino a Bologna." },
            { who: "Speaker", text: "Secondo i primi accertamenti, un camion avrebbe perso il controllo a causa della pioggia e avrebbe invaso la corsia opposta." },
            { who: "Speaker", text: "Fortunatamente non ci sono vittime. Tre persone sono state ricoverate, ma non sarebbero in pericolo di vita." },
            { who: "Speaker", text: "La polizia sta ascoltando i testimoni. Il tratto di autostrada è stato riaperto questa mattina alle sei." },
          ], ["Dove è avvenuto l'incidente?", "Che cosa sarebbe successo, secondo i primi accertamenti?", "Quali informazioni sono certe e quali no?", "Come stanno i feriti?", "Perché lo speaker usa il condizionale in alcune frasi e l'indicativo in altre?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Come riconoscere una bufala", [
            "Ogni giorno milioni di notizie circolano sui social network e nelle chat. Molte sono vere, alcune sono imprecise, altre sono completamente inventate. Le bufale si diffondono velocemente perché fanno leva sulle emozioni: paura, indignazione, sorpresa.",
            "In Italia esistono diverse redazioni specializzate nella verifica dei fatti, come Pagella Politica e Facta, che controllano le dichiarazioni dei politici e le notizie virali, spiegando ai lettori che cosa è vero, che cosa è falso e che cosa è solo esagerato.",
            "Gli esperti suggeriscono alcune domande da farsi prima di condividere. Chi è la fonte? È una testata conosciuta o un sito sconosciuto? La notizia è riportata anche da altri giornali? Il titolo corrisponde al contenuto dell'articolo? La foto è recente o è stata presa da un altro contesto?",
            "Bisogna fare attenzione anche ai verbi: un articolo serio usa il condizionale per le notizie non confermate, mentre una bufala presenta tutto come certo. Se un testo dice «il ministro avrebbe detto», significa che non è sicuro; se dice «il ministro ha detto», dovrebbe esserci una prova.",
            "Infine, c'è un nemico interno: il pregiudizio di conferma. Tendiamo a credere più facilmente alle notizie che confermano ciò che già pensiamo. Per questo, quando una notizia ci sembra troppo perfetta, conviene dubitarne due volte.",
          ], ["Perché le bufale si diffondono velocemente?", "Che cosa fanno Pagella Politica e Facta?", "Quali domande consigliano gli esperti prima di condividere?", "Che cosa dice il testo sull'uso dei verbi?", "Che cos'è il pregiudizio di conferma?", "Quale consiglio del testo ti sembra più utile? Perché?"]),
          k.spagna("Ti è mai capitato di ricevere una notizia falsa? Racconta com'era, come l'hai scoperta e che cosa hai fatto. Usa almeno tre supposizioni con il futuro e due condizionali giornalistici."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Esprimere dubbio", hint: "Formule utili",
            text: ["«Sarà, ma io non ci credo», «Mi pare strano», «Da dove l'hai saputo?», «Hai controllato la fonte?», «Non è detto che sia vero», «Prendila con le pinze» (con cautela), «Puzza di bufala», «Aspetterei conferme prima di dirlo in giro»."],
          },
          k.rispondi(["Quali fonti di informazione usi ogni giorno?", "Ti fidi più della televisione, dei giornali o dei social?", "Hai mai condiviso una notizia che poi si è rivelata falsa?", "Pensi di vivere in una bolla informativa?", "Leggi giornali di opinioni diverse dalla tua?", "Che cosa faresti per combattere la disinformazione?"]),
          { kind: "speak", title: "Supposizioni", hint: "Guarda ogni situazione e fai almeno due supposizioni (presente e passato).", items: ["Il tuo collega arriva in ufficio con gli occhiali da sole e un cerotto.", "La tua vicina non esce di casa da tre giorni.", "In strada c'è una folla davanti a un negozio.", "Il tuo amico non risponde ai messaggi da ieri."] },
          {
            kind: "roleplay", title: "Il fact-checker", hint: "L'IA è un parente che ti manda notizie sensazionali e ci crede. Tu lo aiuti a verificarle senza offenderlo.",
            steps: ["Ascolta la notizia e esprimi un dubbio con il futuro di supposizione.", "Chiedi la fonte.", "Spiega la differenza tra «ha detto» e «avrebbe detto».", "Proponi un modo per verificare.", "Concludi con un consiglio, con gentilezza."],
          },
          {
            kind: "roleplay", title: "La redazione", hint: "Sei un giornalista. L'IA è il caporedattore che vuole pubblicare subito una notizia non verificata con un titolo sensazionale.",
            steps: ["Esprimi i tuoi dubbi sulla fonte.", "Proponi un titolo più prudente con il condizionale.", "Spiega i rischi di pubblicare una bufala.", "Negozia un compromesso.", "Scrivete insieme il titolo finale."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti del rapporto tra social network e informazione: vantaggi, rischi, soluzioni.", items: ["Oggi i social network…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Probabilmente è malato. (futuro)", "Probabilmente ha dimenticato le chiavi. (futuro anteriore)", "Probabilmente sono le undici. (futuro)", "Il calciatore ha firmato con un'altra squadra. (notizia non confermata)", "L'azienda sta per licenziare duecento persone. (secondo i sindacati)", "Il ladro è entrato dalla finestra. (secondo la polizia)", "Sarà vero? (riscrivi come frase che esprime dubbio con «non so se»)", "Il ministro si sarebbe dimesso. (riscrivi come fatto confermato)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "Due articoli", hint: "Scrivi due versioni della stessa notizia inventata (un furto in un museo, un incidente, una dimissione): la prima (140–160 parole) come un articolo serio, con condizionale per ciò che non è confermato; la seconda (100–120 parole) come una bufala sensazionale. Poi spiega in tre righe le differenze.", rows: 22, items: ["Articolo serio:", "Bufala:", "Le differenze:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: espressioni", ["sarà vero?", "avrà perso il treno", "si sarebbe dimesso", "secondo indiscrezioni", "una fonte attendibile", "prendila con le pinze"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Non risponde: sarà in riunione.", "Il pacco si sarà perso.", "Secondo i testimoni, i ladri sarebbero fuggiti in moto.", "Prima di condividere, verifica sempre la fonte.", "Questa notizia puzza di bufala."]),
          k.media([
            { type: "Sito", title: "Pagella Politica", where: "pagellapolitica.it", why: "Verifica delle dichiarazioni dei politici italiani: leggi un articolo e nota come distinguono vero, falso ed esagerato." },
            { type: "Sito", title: "Facta", where: "facta.news", why: "Redazione di fact-checking sulle notizie virali: ottimo per imparare a riconoscere le bufale." },
            { type: "Film", title: "Fortapàsc (Marco Risi, 2009)", where: "Cerca dove vederlo su JustWatch", why: "La storia vera di Giancarlo Siani, giovane giornalista ucciso dalla camorra nel 1985: il giornalismo come impegno civile." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta una verifica che hai letto su un sito di fact-checking: qual era la notizia, era vera o falsa, come l'hanno scoperto?", items: ["La notizia diceva che…"] },
        ],
      },
    ],

    exam: k.exam(75, {
      parole: ["la fonte", "la testata", "la bufala", "il titolo acchiappaclic", "la verifica dei fatti", "l'indiscrezione", "il sensazionalismo", "la bolla informativa", "attendibile", "fazioso"],
      contrario: ["attendibile → contrario", "imparziale → contrario", "vero → contrario", "confermare → contrario", "verificare → sostantivo", "condividere → sostantivo"],
      verbiHint: "Riscrivi con il futuro o il futuro anteriore di supposizione.",
      verbiCols: ["supposizione"],
      verbi: [["Probabilmente è stanco.", ""], ["Probabilmente sono le otto.", ""], ["Probabilmente ha mangiato.", ""], ["Probabilmente sono usciti.", ""], ["Probabilmente costa poco.", ""], ["Probabilmente si è addormentata.", ""]],
      completaHint: "Completa con il futuro di supposizione o il condizionale giornalistico.",
      completa: ["Non risponde: ___ (dormire).", "Ha gli occhi lucidi: ___ (piangere).", "Secondo indiscrezioni, l'attore ___ (sposarsi) in segreto il mese scorso.", "Il governo ___ (stare) preparando una nuova legge, secondo fonti vicine.", "Chi ___ (essere) a quest'ora?", "La strada è bagnata: ___ (piovere).", "Secondo la polizia, i ladri ___ (fuggire) in auto.", "Quanti anni ___ (avere)? Forse quaranta."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Il ministro si è dimesso. (notizia non confermata)", "La squadra compra un nuovo portiere. (secondo indiscrezioni)", "Probabilmente ha perso l'autobus. (futuro anteriore)", "Forse è a casa. (futuro)", "L'incendio sarebbe partito dalla cucina. (fatto confermato)", "È vero? (domanda di dubbio con il futuro)"],
      leggi: {
        text: [
          "Nei giorni scorsi è diventata virale una foto che mostrerebbe un'enorme folla a una manifestazione nel centro di Roma. Il post è stato condiviso decine di migliaia di volte.",
          "Una verifica dei fatti ha però dimostrato che la foto risale a un concerto di cinque anni fa, in un'altra città. Chi l'ha pubblicata per primo avrà voluto attirare l'attenzione, o forse si sarà semplicemente sbagliato.",
          "Il caso dimostra quanto sia importante controllare la data e l'origine delle immagini prima di condividerle.",
        ],
        questions: ["Che cosa mostrerebbe la foto diventata virale?", "Che cosa ha dimostrato la verifica?", "Quali supposizioni fa il testo su chi l'ha pubblicata?", "Quale lezione si può trarre?"],
      },
      ascolta: {
        script: [
          { who: "Speaker", text: "Ultime notizie: secondo fonti non ufficiali, il famoso cantante si sarebbe ritirato dalle scene." },
          { who: "Ascoltatrice", text: "Ma è vero?" },
          { who: "Speaker", text: "Al momento non c'è nessuna conferma. Il suo ufficio stampa non ha ancora risposto." },
          { who: "Ascoltatrice", text: "Sarà la solita voce per far parlare di sé!" },
        ],
        questions: ["Quale notizia dà lo speaker?", "È confermata? Come lo capisci?", "Che cosa non ha ancora fatto l'ufficio stampa?", "Che supposizione fa l'ascoltatrice?"],
      },
      parla: ["Come verifichi una notizia prima di condividerla?", "Racconta una bufala che hai ricevuto.", "Fai tre supposizioni su una situazione misteriosa.", "Social network e informazione: rischi e vantaggi."],
      role: ["L'IA è un caporedattore che vuole pubblicare una notizia non verificata.", "Proponi un titolo con il condizionale giornalistico.", "Spiega perché è importante verificare."],
      dettato: ["sarà vero?", "avrà perso il treno", "si sarebbe dimesso", "secondo indiscrezioni", "la fonte", "una bufala"],
      traduci: ["Probabilmente è in vacanza. (futuro)", "Probabilmente l'ha dimenticato. (futuro anteriore)", "Il presidente ha firmato. (non confermato)", "Il museo chiude. (secondo indiscrezioni)", "Probabilmente sono le tre. (futuro)", "Pare che si siano lasciati. (condizionale giornalistico)"],
      scrivi: { hint: "Scrivi un breve articolo (180–220 parole) su una notizia inventata, distinguendo con cura i fatti certi (indicativo), le notizie non confermate (condizionale) e le supposizioni (futuro).", start: "Titolo: …" },
    }),
  };
})();
