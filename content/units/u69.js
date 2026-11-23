// Unità 69 · Tecnologia ed etica — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[69] = {
    n: 69,
    level: "B2",
    title: "Tecnologia ed etica",
    goal: "Discutere i dilemmi della tecnologia (intelligenza artificiale, privacy, social network) con connettivi avanzati di causa, fine, condizione e conseguenza (dal momento che, affinché, purché, a meno che, senza che, ragion per cui…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a discutere temi complessi di tecnologia ed etica: l'intelligenza artificiale, la protezione dei dati, la dipendenza dagli schermi, il lavoro del futuro.",
              "Grammatica: i connettivi avanzati, molti dei quali vogliono il congiuntivo. Causa: dal momento che, giacché, in quanto. Fine: affinché, perché + congiuntivo. Condizione: purché, a patto che, a condizione che, a meno che (non). Modo e tempo: senza che, prima che. Conseguenza: cosicché, ragion per cui, al punto che.",
            ],
          },
          {
            kind: "intro", title: "Ragionare con precisione", hint: "Un'anticipazione",
            examples: [
              { it: "Dal momento che i dati sono preziosi, vanno protetti.", es: "causa" },
              { it: "Le regole servono affinché la tecnologia sia al servizio delle persone.", es: "fine + congiuntivo" },
              { it: "L'IA è utile, purché venga usata con trasparenza.", es: "condizione + congiuntivo" },
              { it: "Le app raccolgono dati senza che ce ne accorgiamo.", es: "modo + congiuntivo" },
            ],
            text: ["I connettivi giusti trasformano un'opinione in un ragionamento."],
          },
          { kind: "speak", title: "Tecnologia e te", hint: "Prima di cominciare: quale tecnologia ti ha cambiato di più la vita negli ultimi dieci anni? In meglio o in peggio?", items: ["La tecnologia che mi ha cambiato di più…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della tecnologia", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'intelligenza artificiale", "l'algoritmo", "i dati personali", "la privacy", "il consenso",
              "la sorveglianza", "il pregiudizio algoritmico", "la trasparenza", "la dipendenza digitale", "la disinformazione",
              "il deepfake", "la sicurezza informatica", "l'hacker", "automatizzare", "sostituire",
              "regolamentare", "il dilemma etico", "la responsabilità", "il diritto all'oblio", "il divario digitale",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["automatizzare → (sostantivo)", "regolamentare → (sostantivo)", "trasparente → (sostantivo)", "responsabile → (sostantivo)", "sorvegliare → (sostantivo)", "dipendere → (sostantivo)", "sicuro → (sostantivo)", "digitale → (verbo: rendere digitale)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione.", items: ["dare il consenso", "proteggere i dati personali", "il pregiudizio algoritmico", "la dipendenza digitale", "diffondere disinformazione", "il diritto all'oblio", "regolamentare l'IA", "il divario digitale"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Anglicismi in italiano", hint: "Come si pronunciano",
            text: [
              "L'italiano usa molti anglicismi nel campo della tecnologia, pronunciati «all'italiana»: computer (compiùter), software (sòftuer), privacy (pràivasi), smartphone (smàrtfon), app (èp), chat (ciat).",
              "Molti hanno un equivalente italiano: download → scaricamento, password → parola d'accesso, hardware → componenti. Nello scritto formale si preferisce spesso l'equivalente.",
              "I connettivi lunghi si pronunciano con chiarezza: dal momento che, a condizione che, ragion per cui.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Pronuncia gli anglicismi all'italiana.", items: ["Ho scaricato una nuova app sullo smartphone.", "Leggi l'informativa sulla privacy.", "Il software va aggiornato.", "Non condividere la password con nessuno.", "L'algoritmo decide che cosa vediamo."] },
          { kind: "shadow", title: "Connettivi", hint: "Ripeti con chiarezza.", items: ["dal momento che", "a condizione che", "a meno che non", "ragion per cui", "senza che nessuno se ne accorga"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Connettivi con il congiuntivo", hint: "Fine, condizione, modo, tempo",
            text: [
              "Fine: affinché, perché (= affinché), in modo che + congiuntivo. «Spiego bene affinché tutti capiscano».",
              "Condizione: purché, a patto che, a condizione che, a meno che (non), qualora + congiuntivo. «Ti presto il computer, purché tu me lo restituisca».",
              "Modo: senza che + congiuntivo (soggetti diversi). «Ha preso i dati senza che lo sapessimo». Con lo stesso soggetto: senza + infinito.",
              "Tempo: prima che + congiuntivo (soggetti diversi). «Prima che sia troppo tardi». Con lo stesso soggetto: prima di + infinito.",
            ],
            table: { head: ["connettivo", "esempio"], rows: [["affinché", "affinché tutti capiscano"], ["purché", "purché sia sicuro"], ["a meno che non", "a meno che non piova"], ["senza che", "senza che lo sapessimo"], ["prima che", "prima che sia tardi"]] },
          },
          k.table("Unisci con il connettivo", [
            ["Ti do la password. Non la dai a nessuno. (purché)", "Ti do la password, purché tu non la dia a nessuno."],
            ["Ho spento il telefono. I bambini dormono. (affinché)", ""],
            ["L'app registra la posizione. Non lo sappiamo. (senza che)", ""],
            ["Uscirò. Non piove. (a meno che non)", ""],
            ["Aggiorna il sistema. Arrivano gli hacker. (prima che)", ""],
            ["Uso l'IA. È trasparente. (a condizione che)", ""],
          ], "Unisci le due frasi con il connettivo indicato.", ["frase unica"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo al congiuntivo (presente o imperfetto).",
            items: [
              "Ho scritto istruzioni semplici affinché anche i nonni ___ (potere) usare l'app.", "Accetto i cookie purché non ___ (venire) venduti i miei dati.", "Hanno cambiato le condizioni senza che gli utenti ___ (accorgersene).", "Non pubblicherò la foto a meno che tu non ___ (essere) d'accordo.", "Bisogna regolamentare l'IA prima che ___ (essere) troppo tardi.", "Ti prestavo il tablet a condizione che lo ___ (usare) solo per studiare.", "Qualora il sistema ___ (bloccarsi), riavviate il computer.", "Parlava piano in modo che nessuno ___ (sentire).",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Causa e conseguenza", hint: "Connettivi con l'indicativo",
            text: [
              "Causa (registro curato): dal momento che, giacché, poiché, in quanto, visto che, dato che. «Dal momento che i dati sono preziosi, vanno protetti». «In quanto» si usa spesso dopo la principale: «Il sistema è rischioso in quanto non è trasparente».",
              "Conseguenza: cosicché, sicché, al punto che, tanto che, ragion per cui, per cui. «Le regole erano vaghe, ragion per cui le aziende facevano ciò che volevano».",
              "«Laddove» (formale) = mentre / nel caso in cui: «Laddove fosse necessario, interverremo».",
            ],
          },
          k.negativa(["I dati sono preziosi, quindi vanno protetti. (dal momento che)", "Il sistema è pericoloso perché non è trasparente. (in quanto)", "Le regole erano vaghe e le aziende ne approfittavano. (ragion per cui)", "Usava il telefono così tanto che non dormiva più. (al punto che)", "Ha capito il problema e ha cambiato le impostazioni. (giacché)", "Se fosse necessario, cancelleremo i dati. (qualora)"], "Riscrivi ogni frase con il connettivo indicato.", "connettivo avanzato"),
          {
            kind: "intro", title: "Perché: causa o fine?", hint: "Attenzione!",
            text: ["«Perché» + indicativo = causa: «Lo uso perché è comodo». «Perché» + congiuntivo = fine: «Te lo spiego perché tu capisca» (= affinché)."],
          },
          {
            kind: "fill", title: "Causa o fine?", hint: "Coniuga il verbo all'indicativo (causa) o al congiuntivo (fine).",
            items: ["Uso questa app perché ___ (essere) gratuita.", "Ti mando il link perché tu ___ (potere) iscriverti.", "Non pubblico foto dei bambini perché ___ (volere) proteggerli.", "Ho cambiato password perché nessuno ___ (entrare) nel mio account.", "Hanno multato l'azienda perché ___ (violare) la privacy.", "Il governo ha fatto una legge perché i cittadini ___ (essere) più protetti."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("L'IA in ospedale", "Un medico e un'esperta di etica discutono alla radio.", [
            { who: "Conduttore", text: "Dottor Ferraro, nel suo ospedale l'intelligenza artificiale aiuta a leggere le radiografie. Funziona?" },
            { who: "Dott. Ferraro", text: "Molto bene. Dal momento che analizza migliaia di immagini in pochi minuti, ci permette di individuare i casi urgenti prima che sia troppo tardi." },
            { who: "Conduttore", text: "Professoressa Leone, lei ha qualche dubbio?" },
            { who: "Prof.ssa Leone", text: "Non sull'utilità. Ma l'IA va usata a condizione che la decisione finale resti al medico. E bisogna verificare i dati con cui è stata addestrata, affinché non riproduca pregiudizi." },
            { who: "Dott. Ferraro", text: "Sono d'accordo. Nessun paziente viene diagnosticato senza che un medico controlli il risultato." },
            { who: "Prof.ssa Leone", text: "Bene. Purché resti così, è uno strumento straordinario." },
          ], ["Come usa l'IA l'ospedale del dottor Ferraro?", "Qual è il vantaggio principale?", "A quale condizione l'IA è accettabile per la professoressa?", "Perché bisogna verificare i dati di addestramento?", "Su che cosa sono d'accordo alla fine?", "Trova tutti i connettivi con il congiuntivo."]),
          k.listen("Il telefono a cena", "Una famiglia discute di regole sullo smartphone.", [
            { who: "Madre", text: "Da stasera, niente telefoni a tavola. A meno che non ci sia un'emergenza." },
            { who: "Figlio", text: "Ma io devo rispondere al gruppo della classe!" },
            { who: "Padre", text: "Puoi rispondere dopo cena, purché tu abbia finito i compiti." },
            { who: "Figlio", text: "Allora anche voi dovete lasciare il telefono in cucina, senza che io debba ricordarvelo!" },
            { who: "Madre", text: "Giusto. Regole uguali per tutti." },
          ], ["Quale nuova regola stabilisce la madre?", "Quale eccezione c'è?", "A quale condizione il figlio può rispondere ai messaggi?", "Che cosa chiede il figlio ai genitori?", "Ti sembra una regola giusta? Perché?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Regolare l'intelligenza artificiale", [
            "Nel marzo del 2023 l'Italia fece notizia in tutto il mondo: il Garante per la protezione dei dati personali bloccò temporaneamente un popolare servizio di intelligenza artificiale, in quanto non era chiaro come venissero trattati i dati degli utenti. Il servizio tornò disponibile alcune settimane dopo, a condizione che l'azienda introducesse maggiori garanzie.",
            "Il caso aprì un dibattito che va ben oltre l'Italia. Dal momento che i sistemi di IA vengono usati per decidere chi ottiene un prestito, chi viene selezionato per un lavoro o quali notizie vediamo, è necessario che le loro decisioni siano comprensibili e verificabili.",
            "Nel 2024 l'Unione Europea ha approvato una legge sull'intelligenza artificiale, la prima di questo tipo al mondo. Il principio è semplice: più un sistema è rischioso per i diritti delle persone, più regole deve rispettare. Alcuni usi, come la sorveglianza di massa con il riconoscimento facciale, sono fortemente limitati.",
            "I critici temono che troppe regole frenino l'innovazione, cosicché le aziende europee resterebbero indietro rispetto a quelle americane e cinesi. I sostenitori rispondono che la fiducia è essa stessa un vantaggio competitivo: le persone useranno l'IA purché siano sicure che rispetta i loro diritti.",
          ], ["Che cosa successe in Italia nel marzo 2023? Perché?", "A quale condizione il servizio tornò disponibile?", "Perché è importante che le decisioni dell'IA siano verificabili?", "Qual è il principio della legge europea?", "Che cosa temono i critici? Che cosa rispondono i sostenitori?", "Trova sei connettivi avanzati nel testo e classificali (causa, fine, condizione, conseguenza)."]),
          k.spagna("Come si discute di intelligenza artificiale e privacy nel tuo paese? Scrivi la tua posizione con almeno sei connettivi avanzati diversi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Porre condizioni", hint: "Negoziare una posizione",
            text: ["«Sono d'accordo, purché…», «Lo accetterei a condizione che…», «Non ho niente in contrario, a meno che…», «Va bene, a patto che…», «Fino a un certo punto: dipende da…», «In linea di principio sì, ma…»."],
          },
          k.rispondi(["Usi strumenti di intelligenza artificiale? Per che cosa?", "Leggi mai le condizioni sulla privacy prima di accettarle?", "A quale età daresti uno smartphone a un bambino? A quali condizioni?", "Quali lavori rischiano di essere sostituiti dalle macchine?", "Faresti curare la tua salute da un'IA, a quali condizioni?", "Hai mai provato a disintossicarti dagli schermi? Com'è andata?"]),
          { kind: "speak", title: "Sì, purché…", hint: "Rispondi a ogni proposta con una condizione: «Sì, purché…», «No, a meno che…», «Solo a condizione che…».", items: ["Auto senza conducente in città.", "Riconoscimento facciale negli stadi.", "Compiti scolastici fatti con l'IA.", "Lavoro da casa per tutti.", "Smartphone vietati sotto i quattordici anni.", "Voto elettronico online."] },
          {
            kind: "roleplay", title: "Il comitato etico", hint: "Fate parte del comitato etico di un'azienda che vuole usare l'IA per selezionare il personale. L'IA (la tua interlocutrice) è favorevole; tu hai dei dubbi.",
            steps: ["Esprimi i tuoi dubbi con connettivi di causa.", "Poni tre condizioni (purché, a condizione che, a meno che).", "Proponi una procedura affinché non ci siano discriminazioni.", "Ascolta le sue risposte e rispondi con «in quanto» o «dal momento che».", "Trovate un accordo e riassumetelo."],
          },
          {
            kind: "roleplay", title: "Genitori e figli", hint: "L'IA è un genitore che vuole controllare il telefono del figlio adolescente con un'app. Tu sei l'altro genitore e non sei d'accordo.",
            steps: ["Spiega le tue ragioni.", "Ammetti i rischi reali.", "Proponi un'alternativa con «affinché».", "Poni una condizione con «purché».", "Decidete insieme una regola."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti: l'intelligenza artificiale è più un'opportunità o un rischio? Usa almeno sei connettivi avanzati.", items: ["Dal momento che…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["I dati sono sensibili, quindi vanno protetti. (dal momento che)", "Spiego le regole così tutti le capiscono. (affinché)", "Accetto, ma solo se la decisione resta umana. (purché)", "Usciamo, se non piove. (a meno che non)", "Hanno raccolto i dati e non lo sapevamo. (senza che)", "Cambia password, presto, prima di un attacco. (prima che)", "Le regole erano vaghe e quindi c'erano abusi. (ragion per cui)", "Ti chiamo così lo sai subito. (perché + congiuntivo)"], "Riscrivi ogni frase con il connettivo indicato."),
          { kind: "write", title: "Un saggio breve", hint: "Scrivi un saggio breve (280–320 parole) sul tema «Fino a che punto dobbiamo fidarci degli algoritmi?». Introduzione, due argomenti a favore, due contro, conclusione con le tue condizioni. Usa almeno dieci connettivi avanzati diversi.", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: connettivi", ["dal momento che", "affinché tutti capiscano", "purché sia trasparente", "a meno che non", "senza che lo sapessimo", "ragion per cui"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["L'IA è utile, purché venga usata con trasparenza.", "Hanno cambiato le regole senza che ce ne accorgessimo.", "Bisogna intervenire prima che sia troppo tardi.", "Il sistema è rischioso in quanto non è trasparente.", "Qualora il problema si ripetesse, contattateci."]),
          k.media([
            { type: "TV", title: "PresaDiretta (Rai 3)", where: "raiplay.it", why: "Inchieste giornalistiche, spesso su tecnologia, lavoro e diritti: lessico di attualità e argomentazione." },
            { type: "TV", title: "Codice – La vita è digitale (Rai 1)", where: "raiplay.it", why: "Programma dedicato a innovazione e trasformazione digitale, con interviste a esperti." },
            { type: "Sito", title: "Garante per la protezione dei dati personali", where: "garanteprivacy.it", why: "Leggi una delle guide per i cittadini (sui social, sui figli, sull'IA): lessico preciso e registro formale." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi un'inchiesta o una guida: quale problema affronta e quali soluzioni propone? Usa almeno tre connettivi avanzati.", items: ["L'inchiesta parlava di…"] },
        ],
      },
    ],

    exam: k.exam(69, {
      parole: ["l'algoritmo", "i dati personali", "il consenso", "la sorveglianza", "la trasparenza", "la dipendenza digitale", "la disinformazione", "regolamentare", "il dilemma etico", "il diritto all'oblio"],
      contrario: ["trasparente → contrario", "automatizzare → sostantivo", "sicuro → sostantivo", "responsabile → sostantivo", "privato → contrario", "online → contrario"],
      verbiHint: "Unisci le frasi con il connettivo indicato.",
      verbiCols: ["frase unica"],
      verbi: [["Te lo spiego. Lo capisci. (affinché)", ""], ["Vengo. Non piove. (a meno che non)", ""], ["Ti aiuto. Mi ascolti. (purché)", ""], ["È uscito. Non l'ho visto. (senza che)", ""], ["Partiamo. Fa buio. (prima che)", ""], ["È rischioso. Non è chiaro. (in quanto)", ""]],
      completaHint: "Coniuga il verbo all'indicativo o al congiuntivo.",
      completa: ["Ho scritto le istruzioni affinché tutti le ___ (capire).", "Accetto, purché i dati non ___ (essere) venduti.", "Dal momento che l'app ___ (essere) gratuita, guadagnano con la pubblicità.", "Hanno cambiato le regole senza che nessuno ___ (protestare).", "Non uscirò a meno che tu non ___ (venire) con me.", "Uso il computer perché ___ (essere) più comodo.", "Ti mando il file perché tu lo ___ (leggere).", "Qualora il sistema non ___ (funzionare), chiamate il tecnico."],
      trasformaHint: "Riscrivi ogni frase con il connettivo indicato.",
      trasforma: ["Le regole non erano chiare, quindi ci furono abusi. (ragion per cui)", "Poiché i dati sono preziosi, vanno protetti. (dal momento che)", "Usava il telefono così tanto da non dormire. (al punto che)", "Ti presto il tablet se lo usi per studiare. (a condizione che)", "Ha cancellato i file e io non lo sapevo. (senza che)", "Se fosse necessario, interverremo. (qualora)"],
      leggi: {
        text: [
          "Sempre più scuole italiane vietano lo smartphone in classe, affinché gli studenti si concentrino sulle lezioni e parlino di più tra loro.",
          "I sostenitori del divieto osservano che, dal momento che i ragazzi passano già molte ore davanti agli schermi, la scuola dovrebbe essere uno spazio protetto. I critici rispondono che vietare non basta, a meno che non si insegni anche a usare la tecnologia in modo consapevole.",
          "Molti insegnanti propongono una via di mezzo: il telefono si può usare in classe, purché serva per un'attività didattica.",
        ],
        questions: ["Perché molte scuole vietano lo smartphone?", "Qual è l'argomento dei sostenitori del divieto?", "Che cosa rispondono i critici?", "Quale via di mezzo propongono molti insegnanti?"],
      },
      ascolta: {
        script: [
          { who: "Utente", text: "Buongiorno, ho ricevuto una mail che dice che il mio account è stato bloccato." },
          { who: "Tecnico", text: "Non clicchi su nessun link, a meno che non sia sicuro che la mail venga da noi. Spesso sono truffe." },
          { who: "Utente", text: "E che cosa devo fare?" },
          { who: "Tecnico", text: "Cambi la password prima che qualcuno possa usarla, e attivi la verifica in due passaggi, affinché l'account sia più protetto." },
        ],
        questions: ["Che cosa ha ricevuto l'utente?", "Che cosa gli consiglia di non fare il tecnico?", "Che cosa deve fare subito?", "Perché deve attivare la verifica in due passaggi?"],
      },
      parla: ["L'IA è un'opportunità o un rischio? Argomenta con connettivi avanzati.", "A quali condizioni daresti uno smartphone a un bambino?", "Racconta un problema che hai avuto con la privacy online.", "Quali lavori verranno sostituiti dalle macchine?"],
      role: ["L'IA vuole introdurre il riconoscimento facciale nella tua azienda.", "Poni almeno tre condizioni con il congiuntivo.", "Trovate un accordo e riassumetelo."],
      dettato: ["dal momento che", "affinché capiscano", "purché sia sicuro", "a meno che non", "senza che lo sapessi", "ragion per cui"],
      traduci: ["Il servizio è gratuito, quindi raccoglie dati. (dal momento che)", "Parlo piano così nessuno sente. (affinché)", "Ti do il numero se non lo dai a nessuno. (purché)", "Andiamo in bici, se non piove. (a meno che non)", "Ha letto i messaggi e io non lo sapevo. (senza che)", "Facciamo una copia dei file, prima di un guasto. (prima che)"],
      scrivi: { hint: "Scrivi (180–220 parole) le regole digitali che vorresti per la tua famiglia o il tuo ufficio, spiegando il perché di ognuna. Usa almeno sei connettivi avanzati diversi.", start: "Affinché tutti possano…" },
    }),
  };
})();
