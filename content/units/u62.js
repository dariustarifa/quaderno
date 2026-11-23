// Unità 62 · Registri — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[62] = {
    n: 62,
    level: "B2",
    title: "Registri",
    goal: "Passare con naturalezza dal registro informale a quello formale: dare del tu o del Lei, scegliere il lessico e le formule di cortesia adatte alla situazione.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Ogni lingua ha diversi registri: si parla in un modo con gli amici, in un altro con un professore, in un altro ancora in una lettera ufficiale. Al livello B2 devi saper scegliere e cambiare registro.",
              "Grammatica e lessico: il Lei e le sue forme (pronomi, imperativo, possessivi), il condizionale di cortesia, le coppie di parole informali e formali (andare / recarsi, fare / effettuare, dire / comunicare), le formule di apertura e chiusura delle lettere e delle mail.",
            ],
          },
          {
            kind: "intro", title: "Tre registri, una richiesta", hint: "Un'anticipazione",
            text: ["La stessa richiesta può essere detta in modi molto diversi."],
            examples: [
              { it: "Mi passi il file?", es: "informale, tra colleghi amici" },
              { it: "Mi potrebbe mandare il documento, per favore?", es: "cortese, con il Lei" },
              { it: "Con la presente si richiede l'invio della documentazione.", es: "formale, burocratico" },
            ],
          },
          { kind: "speak", title: "Tu o Lei?", hint: "Prima di cominciare: con chi usi il tu e con chi il Lei (o il suo equivalente) nella tua lingua? Ti è mai capitato di sbagliare registro?", items: ["Nella mia lingua…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Formale e informale", hint: "Per ogni parola formale, scrivi un equivalente informale o una spiegazione.",
            placeholder: "equivalente informale",
            items: [
              "recarsi", "effettuare", "comunicare", "ricevere", "pervenire",
              "usufruire di", "provvedere a", "inoltrare", "il riscontro", "la presente",
              "in allegato", "cortesemente", "qualora", "pertanto", "in merito a",
              "porgere", "rimanere a disposizione", "gradire", "il disguido", "codesto",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "versione formale", title: "Alza il registro",
            hint: "Scrivi un equivalente formale.",
            items: ["andare", "fare (un pagamento)", "dire", "mandare (una mail)", "rispondere (a una mail)", "quindi", "su questo argomento", "ciao (alla fine di una mail)"],
          },
          { kind: "speak", title: "Abbassa il registro", hint: "Di' ogni frase come la diresti a un amico.", items: ["Si prega di non effettuare fotografie.", "La informiamo che il volo ha subito un ritardo.", "Rimango a disposizione per eventuali chiarimenti.", "Qualora fosse interessato, La preghiamo di contattarci.", "Le porgo i miei più cordiali saluti.", "Ci scusiamo per il disguido."] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il tono della cortesia", hint: "Voce e registro",
            text: [
              "Nel registro formale si parla più lentamente, si articolano bene le parole e si evitano le forme contratte del parlato («sto», «’sta», «’ste»).",
              "Nel registro informale sono normali le riduzioni: «Ma che fai?», «Boh», «Dai!», «Mica male», «Vabbè».",
              "Gli intercalari («cioè», «tipo», «praticamente», «insomma») sono normali tra amici, ma in un colloquio o in una riunione vanno ridotti.",
            ],
          },
          { kind: "shadow", title: "Formale", hint: "Lentamente, con cortesia.", items: ["Buongiorno, posso esserLe utile?", "Le dispiacerebbe attendere un momento?", "La ringrazio per la Sua disponibilità.", "Mi scusi per il disturbo.", "Resto a Sua disposizione."] },
          { kind: "shadow", title: "Informale", hint: "Velocemente, con naturalezza.", items: ["Ehi, come va?", "Boh, non lo so.", "Dai, sbrigati!", "Vabbè, ci sentiamo dopo.", "Mica male, eh?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il Lei", hint: "Forme e pronomi",
            text: [
              "Il Lei usa la terza persona singolare femminile, anche per un uomo: «Lei è stanco?» (a un uomo), «L'ho vista ieri» (riferito a una donna) / «L'ho visto ieri» (a un uomo, nell'uso moderno).",
              "Pronomi: La (oggetto), Le (a Lei), Si (riflessivo), Suo/Sua (possessivo). Nella scrittura formale si scrivono spesso con la maiuscola.",
              "Imperativo: congiuntivo presente: «Si accomodi», «Mi dica», «Venga pure», «Non si preoccupi».",
              "Al plurale si usa normalmente «voi»: «Accomodatevi». «Loro» (Si accomodino) è molto formale e raro.",
            ],
            table: { head: ["tu", "Lei"], rows: [["siediti", "si sieda"], ["dimmi", "mi dica"], ["vieni", "venga"], ["non ti preoccupare", "non si preoccupi"], ["ti ringrazio", "La ringrazio"]] },
          },
          k.table("Dal tu al Lei", [
            ["Entra pure!", "Entri pure!"],
            ["Scusami.", ""],
            ["Aspettami qui.", ""],
            ["Dammi il tuo numero.", ""],
            ["Non ti preoccupare, ti chiamo io.", ""],
            ["Fammi sapere se ti serve qualcosa.", ""],
          ], "Trasforma ogni frase dal tu al Lei.", ["con il Lei"]),
          {
            kind: "fill", title: "Completa con il Lei", hint: "Completa con il pronome o la forma verbale del Lei.",
            items: [
              "Signora, ___ ringrazio per la pazienza.", "Dottore, ___ ho mandato i documenti ieri.", "Professoressa, posso chieder___ un consiglio?", "Signor Bianchi, ___ (accomodarsi), prego.", "Ha dimenticato il ___ ombrello, signora!", "___ (scusare), sa dov'è la farmacia?", "Non ___ (preoccuparsi): ci pensiamo noi.", "Avvocato, ___ chiamo appena ho notizie.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Lettere e mail formali", hint: "Le formule",
            text: [
              "Apertura: «Gentile Signora / Gentile Dott.ssa Rossi» (cortese), «Egregio Signore / Egregio Avvocato» (molto formale, per uomini), «Spettabile Ditta / Spett.le» (per un'azienda), «Alla cortese attenzione di…».",
              "Inizio: «Le scrivo in merito a…», «Con la presente desidero…», «Faccio seguito alla nostra telefonata…».",
              "Chiusura: «In attesa di un Suo cortese riscontro», «Resto a disposizione per qualsiasi chiarimento», «Cordiali saluti», «Distinti saluti» (più formale).",
            ],
          },
          k.negativa(["Ciao Marco, ti scrivo per l'affitto.", "Ti mando il curriculum in allegato.", "Rispondimi presto, ok?", "Se hai domande, chiamami.", "Scusa per il casino con la fattura.", "Un abbraccio, Giulia"], "Riscrivi ogni frase in registro formale, per una mail a un ufficio.", "registro formale"),
          {
            kind: "intro", title: "Il condizionale di cortesia", hint: "Attenuare",
            text: ["Il condizionale attenua le richieste e le opinioni: «Vorrei», «Potrebbe», «Avrei bisogno di», «Direi che…», «Sarebbe possibile…?». Anche l'imperfetto attenua: «Volevo chiederLe…», «Cercavo un paio di scarpe»."],
          },
          {
            kind: "fill", title: "Attenua", hint: "Completa con un condizionale o un imperfetto di cortesia.",
            items: ["___ un caffè, per favore.", "___ chiederLe un'informazione.", "___ possibile spostare l'appuntamento?", "Mi ___ un favore enorme se mi aiutasse.", "___ bisogno di un certificato.", "___ dire che il progetto è quasi pronto."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Dal tu al Lei e ritorno", "Una studentessa incontra il suo professore fuori dall'università.", [
            { who: "Sofia", text: "Professore! Buongiorno! Mi scusi, non l'avevo vista." },
            { who: "Prof. Galli", text: "Buongiorno, Sofia. Come sta? Pronta per l'esame?" },
            { who: "Sofia", text: "Insomma… Volevo chiederLe se fosse possibile ricevere il programma aggiornato." },
            { who: "Prof. Galli", text: "Certo, glielo mando stasera. Senta, ormai ci conosciamo da tre anni: diamoci del tu, che ne dice?" },
            { who: "Sofia", text: "Oddio, non so se ci riesco… Va bene: grazie… Marco!" },
            { who: "Prof. Galli", text: "Vedi? Non è difficile. Ci vediamo lunedì." },
          ], ["Dove si incontrano Sofia e il professore?", "Che cosa chiede Sofia? Con quale formula?", "Che cosa propone il professore? Perché?", "Come reagisce Sofia?", "In quale momento il professore passa dal Lei al tu?", "Chi propone di passare al tu in Italia, di solito?"]),
          k.listen("Il centralino", "Una telefonata a un ufficio e, subito dopo, una telefonata a un'amica.", [
            { who: "Impiegato", text: "Ufficio anagrafe, buongiorno. Mi dica." },
            { who: "Sig.ra Russo", text: "Buongiorno. Le telefono in merito alla richiesta di un certificato di residenza. L'avevo inoltrata la settimana scorsa, ma non mi è ancora pervenuto." },
            { who: "Impiegato", text: "Mi può dire il Suo codice fiscale? Provvedo subito a verificare." },
            { who: "Sig.ra Russo", text: "Pronto, Carla? Senti, ho appena chiamato il Comune: ’sto certificato non arriva mai! Ti giuro, che pazienza…" },
          ], ["Perché telefona la signora Russo all'ufficio?", "Quali parole formali usa con l'impiegato?", "Che cosa chiede l'impiegato?", "Come cambia il suo modo di parlare con Carla?", "Riscrivi la frase a Carla in registro formale."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Breve storia del Lei", [
            "Nel Medioevo, in italiano, ci si dava del tu o del voi. Il Lei si diffuse soprattutto nel Rinascimento, sotto l'influenza dello spagnolo e della vita di corte: all'inizio era un modo di riferirsi alla «Vostra Signoria», cioè a «Lei», alla terza persona.",
            "Per secoli il Lei e il voi convissero. Nel 1938, però, il regime fascista lanciò una campagna contro il Lei, considerato straniero e poco virile, e impose il voi negli uffici e sui giornali. Dopo la guerra il Lei tornò rapidamente in uso.",
            "Ancora oggi in alcune zone del Sud, soprattutto tra le persone anziane, il voi si usa come forma di rispetto: «Voi come state?», si può sentire a Napoli.",
            "Negli ultimi decenni il tu si è diffuso moltissimo: tra colleghi, nei negozi, sui social network. Molte aziende, soprattutto online, danno del tu ai clienti per sembrare più vicine.",
            "Eppure il Lei resiste: con un medico, con un professore, con una persona anziana che non si conosce, dare del tu può ancora sembrare una mancanza di rispetto. Nel dubbio, il consiglio è sempre lo stesso: cominciare con il Lei e aspettare che sia l'altro a proporre il tu.",
          ], ["Quali forme si usavano nel Medioevo?", "Da dove viene il Lei?", "Che cosa successe nel 1938? Perché?", "Dove si usa ancora il voi come forma di rispetto?", "Perché molte aziende danno del tu?", "Qual è il consiglio finale del testo?"]),
          k.spagna("Come funziona la cortesia nella tua lingua? Si usa sempre meno la forma formale? Confronta con l'italiano, con esempi concreti."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Cambiare registro", hint: "Proporre il tu, scusarsi, rimediare",
            text: ["Proporre il tu: «Possiamo darci del tu?», «Diamoci del tu». Scusarsi per un errore di registro: «Mi scusi, Le ho dato del tu senza accorgermene». Chiedere: «Preferisce che Le dia del Lei?». Rispondere: «Ma no, figurati, dammi pure del tu!»."],
          },
          k.rispondi(["Ti è mai capitato di dare del tu a qualcuno che si aspettava il Lei?", "Ti piace quando un negozio o un'azienda ti dà del tu? Perché?", "Che differenze ci sono tra una mail a un amico e una mail a un professore?", "Quali parole o espressioni usi solo con gli amici?", "Il registro formale è segno di rispetto o di distanza?", "Come parleresti a un colloquio di lavoro in Italia?"]),
          { kind: "speak", title: "Tre volte la stessa cosa", hint: "Di' ogni messaggio in tre registri: a un amico, a un collega che conosci poco, a un ufficio pubblico.", items: ["Arriverò in ritardo.", "Non ho capito la tua mail.", "Mi serve un documento entro venerdì.", "Grazie per l'aiuto."] },
          {
            kind: "roleplay", title: "Il reclamo", hint: "Telefoni a una compagnia elettrica (l'IA) perché la bolletta è sbagliata. Usa un registro formale e cortese, ma deciso.",
            steps: ["Presentati e spiega il motivo della telefonata.", "Descrivi il problema con lessico formale.", "Chiedi una soluzione con il condizionale di cortesia.", "Insisti con garbo se la risposta non ti soddisfa.", "Chiudi con una formula formale."],
          },
          {
            kind: "roleplay", title: "La cena con il capo", hint: "Sei a cena con il tuo capo (l'IA). A metà cena ti propone di darvi del tu.",
            steps: ["Cominciate con il Lei.", "Fai un complimento formale sul ristorante.", "Reagisci alla proposta di passare al tu.", "Continua la conversazione con il tu, sbagliando una volta e correggendoti.", "Saluta in modo adeguato al nuovo registro."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti delle regole non scritte della cortesia nel tuo paese: saluti, tu e Lei, mail, telefono.", items: ["Nel mio paese…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ciao, ti scrivo per il corso di italiano. (alla segreteria della scuola)", "Mandami i dati, grazie. (a un fornitore)", "Scusa per il ritardo! (a un cliente)", "Dimmi se va bene. (al direttore)", "Ti mando il file in allegato. (a un ufficio)", "Ci vediamo! (fine di una mail formale)", "Vorrei sapere quanto costa. (più cortese)", "Non ho ricevuto niente. (registro burocratico: pervenire)"], "Riscrivi ogni frase nel registro indicato."),
          { kind: "write", title: "Due mail", hint: "Scrivi due mail sullo stesso argomento: hai perso un esame per motivi di salute e vuoi recuperarlo. La prima (100–120 parole) a un compagno di corso; la seconda (180–200 parole) al professore. Cambia lessico, saluti, pronomi e struttura.", rows: 22, items: ["Mail al compagno:", "Mail al professore:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: formule", ["in attesa di un Suo cortese riscontro", "distinti saluti", "la presente", "in merito a", "resto a disposizione", "si accomodi"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Le scrivo in merito alla Sua richiesta.", "Mi scusi, Le ho dato del tu.", "Possiamo darci del tu?", "Il documento non mi è ancora pervenuto.", "Volevo chiederLe un'informazione."]),
          k.media([
            { type: "Film", title: "Fantozzi (Luciano Salce, 1975)", where: "Cerca dove vederlo su JustWatch", why: "Il ragioniere più famoso d'Italia e il suo rapporto servile con i superiori: un catalogo comico del registro formale esagerato." },
            { type: "Serie", title: "Boris (2007–2022)", where: "Cerca dove vederla su JustWatch", why: "Dietro le quinte di una fiction televisiva: italiano colloquiale, gergo di lavoro e continui cambi di registro." },
            { type: "Sito", title: "Accademia della Crusca — Consulenza linguistica", where: "accademiadellacrusca.it", why: "Risposte a dubbi sulla lingua: cerca «Lei maiuscolo» o «dare del voi»." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Descrivi una scena del film o della serie in cui un personaggio cambia registro. Con chi parla e come cambia il suo modo di parlare?", items: ["Nella scena…"] },
        ],
      },
    ],

    exam: k.exam(62, {
      parole: ["recarsi", "effettuare", "pervenire", "inoltrare", "il riscontro", "in allegato", "qualora", "porgere", "il disguido", "usufruire di"],
      contrario: ["andare → formale", "dire → formale", "mandare → formale", "quindi → formale", "ciao (fine mail) → formale", "rispondere → sostantivo formale"],
      verbiHint: "Trasforma dal tu al Lei.",
      verbiCols: ["con il Lei"],
      verbi: [["Siediti.", ""], ["Dimmi pure.", ""], ["Non ti preoccupare.", ""], ["Ti ringrazio.", ""], ["Aspettami qui.", ""], ["Dammi il tuo indirizzo.", ""]],
      completaHint: "Completa con la parola o la forma giusta del registro formale.",
      completa: ["Gentile Dottoressa, ___ scrivo in merito alla Sua richiesta.", "___ attesa di un Suo cortese riscontro, porgo distinti saluti.", "Il pacco non mi è ancora ___ .", "Signora, ___ (accomodarsi), prego.", "___ un'informazione, per favore. (condizionale di cortesia)", "___ fosse interessato, La preghiamo di contattarci.", "Le mando il documento ___ allegato.", "Ci scusiamo per il ___ ."],
      trasformaHint: "Riscrivi ogni frase nel registro indicato.",
      trasforma: ["Ti scrivo per l'affitto. (formale)", "Rispondimi presto. (formale)", "Ci scusiamo per il disguido. (informale)", "La preghiamo di non effettuare fotografie. (informale)", "Voglio un certificato. (cortese)", "Ciao, a presto! (chiusura formale)"],
      leggi: {
        text: [
          "Secondo un sondaggio recente, la maggior parte degli italiani sotto i trent'anni dà del tu ai colleghi fin dal primo giorno di lavoro. Tra gli over sessanta, invece, il Lei resta la regola.",
          "Molti giovani considerano il Lei una formalità inutile; gli anziani, al contrario, lo vedono come un segno di educazione. «Quando un ragazzo mi dà del tu al supermercato mi sento offesa», racconta una signora milanese.",
          "Gli esperti di comunicazione consigliano di osservare l'ambiente: in un'azienda giovane il tu è normale, in uno studio legale o in un ospedale è meglio cominciare con il Lei.",
        ],
        questions: ["Chi dà del tu ai colleghi fin dal primo giorno?", "Come vedono il Lei i giovani e gli anziani?", "Perché la signora milanese si sente offesa?", "Che cosa consigliano gli esperti?"],
      },
      ascolta: {
        script: [
          { who: "Commessa", text: "Buongiorno, posso esserLe utile?" },
          { who: "Cliente", text: "Sì, grazie. Cercavo una giacca blu, taglia 50." },
          { who: "Commessa", text: "Si accomodi pure nel camerino, gliela porto subito." },
          { who: "Cliente", text: "Gentilissima. Senta, ma possiamo darci del tu? Mi fa sentire vecchio!" },
        ],
        questions: ["Che cosa cerca il cliente?", "Con quale formula di cortesia chiede?", "Che cosa gli dice la commessa?", "Che cosa propone il cliente alla fine? Perché?"],
      },
      parla: ["Spiega quando usi il tu e quando il Lei in italiano.", "Racconta un errore di registro che hai fatto o visto.", "Fai la stessa richiesta in tre registri diversi.", "Il tu dei negozi e delle aziende: ti piace o no?"],
      role: ["Telefoni a un ufficio pubblico (l'IA) per un documento che non arriva.", "Usa il registro formale e il lessico burocratico.", "Poi racconta la telefonata a un amico in registro informale."],
      dettato: ["distinti saluti", "in merito a", "si accomodi", "resto a disposizione", "non mi è pervenuto", "possiamo darci del tu"],
      traduci: ["Scusami tanto! (al direttore)", "Mandami il preventivo. (a un'azienda)", "Ti scrivo per il colloquio. (a un selezionatore)", "Non ho ricevuto il pacco. (formale: pervenire)", "Voglio parlare con il responsabile. (cortese)", "Ciao, a presto! (chiusura di una mail formale)"],
      scrivi: { hint: "Scrivi una mail formale (180–220 parole) al responsabile di un hotel in cui hai soggiornato: ringrazia per un aspetto positivo, segnala un problema con garbo e chiedi un rimborso parziale. Usa le formule di apertura e chiusura e almeno tre condizionali di cortesia.", start: "Gentile Responsabile," },
    }),
  };
})();
