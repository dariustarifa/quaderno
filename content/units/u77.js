// Unità 77 · Carriera — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[77] = {
    n: 77,
    level: "B2",
    title: "Carriera",
    goal: "Scrivere testi formali per il lavoro (curriculum, lettera di presentazione, mail professionali, lettera di dimissioni) e affrontare un colloquio con il lessico e le formule giuste.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a muoverti nel mondo del lavoro in italiano: leggere un annuncio, scrivere un curriculum e una lettera di presentazione, rispondere a un colloquio, scrivere mail professionali e, se serve, una lettera di dimissioni.",
              "Lingua: la scrittura formale. Ripasserai il registro formale dell'unità 62 e lo applicherai a testi completi: struttura, connettivi formali, lessico professionale (maturare esperienza, avere dimestichezza con, essere in grado di…), condizionale e congiuntivo di cortesia.",
            ],
          },
          {
            kind: "intro", title: "Lo stesso messaggio, due registri", hint: "Un'anticipazione",
            examples: [
              { it: "Ho visto il vostro annuncio e vorrei il lavoro. → In riferimento al Vostro annuncio, desidero proporre la mia candidatura.", es: "apertura formale" },
              { it: "So usare Excel. → Ho buona dimestichezza con i principali strumenti di analisi dei dati.", es: "competenze" },
              { it: "Me ne vado. → Con la presente comunico le mie dimissioni.", es: "dimissioni" },
            ],
            text: ["Nel lavoro, il registro giusto è parte della tua competenza professionale."],
          },
          { kind: "speak", title: "Il tuo lavoro", hint: "Prima di cominciare: che lavoro fai o vorresti fare? Ti piacerebbe lavorare in Italia o con aziende italiane?", items: ["Lavoro come… / Vorrei lavorare come…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico del lavoro", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'annuncio di lavoro", "la candidatura", "la lettera di presentazione", "il curriculum vitae", "le competenze trasversali",
              "maturare esperienza", "avere dimestichezza con", "essere in grado di", "il contratto a tempo indeterminato", "il contratto a tempo determinato",
              "il periodo di prova", "la retribuzione lorda", "la tredicesima", "lo smart working", "il preavviso",
              "le dimissioni", "la promozione", "l'aumento di stipendio", "la formazione", "il tirocinio",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "versione professionale", title: "Riformula in modo professionale",
            hint: "Riscrivi ogni frase con il lessico del curriculum.",
            items: ["So usare bene Excel.", "Ho lavorato tre anni in un hotel.", "Parlo bene l'inglese.", "Sono bravo a lavorare in gruppo.", "Ho fatto uno stage in una banca.", "Posso cominciare subito.", "Mi piace imparare cose nuove.", "Ho guidato un gruppo di cinque persone."],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase sulla tua esperienza professionale con ogni espressione.", items: ["maturare esperienza", "avere dimestichezza con", "essere in grado di", "le competenze trasversali", "il periodo di prova", "lo smart working", "il preavviso", "la formazione"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Presentarsi al colloquio", hint: "Sicurezza nella voce",
            text: [
              "Al colloquio si parla con calma, voce ferma e frasi complete. Si evitano le esitazioni troppo lunghe («ehm…») e gli intercalari («cioè», «tipo»).",
              "La presentazione iniziale va preparata e provata: due minuti, chiari e ordinati.",
              "Attenzione alle parole lunghe del lavoro: retribuzione, disponibilità, responsabilità, competenze, candidatura.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con voce sicura.", items: ["Buongiorno, sono qui per il colloquio delle dieci.", "Ho maturato cinque anni di esperienza nel settore.", "Sono in grado di gestire un gruppo di lavoro.", "Ho buona dimestichezza con i principali programmi.", "Sono disponibile a trasferte."] },
          { kind: "shadow", title: "Parole lunghe", hint: "Ripeti piano, poi veloce.", items: ["retribuzione, disponibilità", "responsabilità, competenze", "candidatura, dimissioni", "indeterminato, determinato"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Verbi e strutture della scrittura professionale", hint: "Il registro del lavoro",
            text: [
              "Verbi formali: ritenere (pensare), desiderare (volere), disporre di (avere), occuparsi di (lavorare su), ricoprire un ruolo, svolgere un'attività, maturare esperienza, acquisire competenze.",
              "Condizionale e congiuntivo di cortesia: «Sarei lieto di approfondire…», «Qualora riteneste il mio profilo interessante…», «Desidererei sapere se…».",
              "Gerundio e participio per frasi compatte: «Avendo maturato esperienza nel settore…», «Conclusi gli studi, ho svolto un tirocinio…».",
            ],
            table: { head: ["informale", "formale"], rows: [["penso che", "ritengo che"], ["voglio", "desidero"], ["ho", "dispongo di"], ["ho fatto il manager", "ho ricoperto il ruolo di manager"], ["ho imparato", "ho acquisito competenze in"]] },
          },
          k.table("Alza il registro", [
            ["Penso di essere adatto al posto.", "Ritengo di essere adatto alla posizione."],
            ["Voglio fare domanda per questo lavoro.", ""],
            ["Ho lavorato come responsabile vendite.", ""],
            ["Ho imparato molto sul marketing.", ""],
            ["Se vi interessa, possiamo vederci.", ""],
            ["Vorrei sapere quanto si guadagna.", ""],
          ], "Riscrivi ogni frase in registro professionale.", ["registro formale"]),
          {
            kind: "fill", title: "Completa la lettera", hint: "Completa con il verbo adatto al tempo e modo giusti: ritenere, ricoprire, maturare, essere lieto, desiderare, qualora, acquisire, svolgere.",
            items: [
              "Con la presente ___ candidarmi per la posizione di responsabile commerciale.", "Negli ultimi sei anni ho ___ esperienza nel settore turistico.", "Attualmente ___ il ruolo di coordinatrice di un gruppo di otto persone.", "Durante il tirocinio ho ___ attività di analisi dei dati.", "Ho ___ ottime competenze nella gestione dei clienti.", "___ che il mio profilo possa rispondere alle Vostre esigenze.", "___ riteneste opportuno, sono disponibile per un colloquio.", "Sarei ___ di approfondire la mia candidatura di persona.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La lettera di presentazione", hint: "Struttura e formule",
            text: [
              "1. Apertura: «Gentile Dott.ssa…» / «Spett.le Azienda», «Alla cortese attenzione dell'Ufficio Risorse Umane».",
              "2. Motivo: «In riferimento al Vostro annuncio pubblicato su… desidero proporre la mia candidatura per la posizione di…».",
              "3. Profilo: chi sei, esperienza, competenze più rilevanti per quel lavoro (non ripetere tutto il curriculum).",
              "4. Motivazione: perché quell'azienda, che cosa puoi portare.",
              "5. Chiusura: «Allego il mio curriculum vitae», «Resto a disposizione per un eventuale colloquio», «In attesa di un Vostro gentile riscontro, porgo distinti saluti».",
              "In Italia nel curriculum si aggiunge di solito l'autorizzazione al trattamento dei dati personali secondo il Regolamento europeo (GDPR).",
            ],
          },
          k.negativa(["Ciao, ho visto il vostro annuncio su internet.", "Vi mando il mio CV.", "Ho lavorato tanto nei ristoranti.", "Secondo me sarei perfetto per voi.", "Se volete, ci vediamo per parlarne.", "Grazie e a presto!"], "Riscrivi ogni frase per una lettera di presentazione formale.", "versione formale"),
          {
            kind: "intro", title: "Altre mail professionali", hint: "Richieste, solleciti, dimissioni",
            text: ["Sollecito: «Faccio seguito alla mia mail del… per chiedere un aggiornamento in merito a…». Richiesta: «Le sarei grato se potesse…». Dimissioni: «Con la presente comunico la mia decisione di rassegnare le dimissioni dalla posizione di…, nel rispetto del periodo di preavviso previsto dal contratto. Desidero ringraziare…»."],
          },
          {
            kind: "fill", title: "Completa", hint: "Completa le formule.",
            items: ["Faccio ___ alla mia mail del 3 marzo.", "Le sarei ___ se potesse inviarmi il contratto.", "Con la presente comunico la mia decisione di ___ le dimissioni.", "Nel rispetto del periodo di ___ previsto dal contratto.", "___ il mio curriculum vitae.", "In attesa di un Vostro gentile ___, porgo distinti saluti."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il colloquio", "Un colloquio per un posto di responsabile marketing.", [
            { who: "Selezionatrice", text: "Buongiorno, si accomodi. Mi parli un po' di lei." },
            { who: "Candidato", text: "Buongiorno. Mi sono laureato in Economia a Madrid e, conclusi gli studi, ho svolto un tirocinio in un'agenzia di comunicazione a Milano. Negli ultimi quattro anni ho ricoperto il ruolo di responsabile dei social media per un'azienda di moda." },
            { who: "Selezionatrice", text: "Perché vorrebbe lasciare il suo lavoro attuale?" },
            { who: "Candidato", text: "Mi trovo bene, ma ritengo di aver raggiunto un limite. Desidero assumere maggiori responsabilità e lavorare su una strategia più ampia." },
            { who: "Selezionatrice", text: "Quali sono le sue aspettative economiche?" },
            { who: "Candidato", text: "Sarei interessato a conoscere prima la proposta complessiva dell'azienda, inclusa la formazione e la possibilità di smart working. In ogni caso, la mia retribuzione attuale è di circa quarantamila euro lordi annui." },
          ], ["Che cosa ha studiato il candidato e dove?", "Quali esperienze ha avuto?", "Perché vuole cambiare lavoro?", "Come risponde alla domanda sullo stipendio?", "Trova cinque espressioni del registro professionale.", "Come valuti le sue risposte? Che cosa avresti detto tu?"]),
          k.listen("Le dimissioni", "Una dipendente comunica le dimissioni al suo capo.", [
            { who: "Giulia", text: "Dottor Rossi, ha un minuto? Volevo parlarle di persona prima di mandare la lettera." },
            { who: "Dott. Rossi", text: "Certo, Giulia, mi dica." },
            { who: "Giulia", text: "Ho ricevuto un'offerta da un'altra azienda e ho deciso di accettarla. Rispetterò naturalmente il mese di preavviso." },
            { who: "Dott. Rossi", text: "Mi dispiace molto. C'è qualcosa che potremmo fare per farla restare?" },
            { who: "Giulia", text: "La ringrazio, ma la decisione è presa. Desidero ringraziarla per tutto quello che ho imparato qui." },
          ], ["Perché Giulia vuole parlare di persona con il capo?", "Perché lascia il lavoro?", "Che cosa rispetterà?", "Che cosa le propone il capo?", "Come chiude la conversazione Giulia?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il curriculum all'italiana", [
            "Chi cerca lavoro in Italia scopre presto che il curriculum ha alcune caratteristiche particolari. Molte aziende si aspettano ancora una foto professionale, la data di nascita e talvolta la nazionalità: dati che in altri paesi vengono omessi per evitare discriminazioni.",
            "Molto diffuso è il formato Europass, il modello europeo standard, che facilita il confronto tra candidati di paesi diversi. Tuttavia, molti selezionatori ritengono che sia troppo rigido e preferiscono curriculum più sintetici e personalizzati.",
            "Un elemento che sorprende molti stranieri è la frase finale sul trattamento dei dati personali. In Italia è consuetudine autorizzare esplicitamente l'azienda a usare i propri dati ai sensi del Regolamento europeo sulla protezione dei dati: senza questa frase, alcuni uffici del personale non prendono nemmeno in considerazione la candidatura.",
            "Infine, i selezionatori consigliano di non superare le due pagine, di mettere le esperienze più recenti all'inizio e di adattare il curriculum a ogni annuncio. «Un curriculum generico», spiega una responsabile delle risorse umane, «dice soprattutto che il candidato non si è informato sull'azienda».",
          ], ["Quali dati personali si aspettano molte aziende italiane?", "Che cos'è il formato Europass? Che cosa ne pensano alcuni selezionatori?", "Che cosa sorprende molti stranieri? Perché è importante?", "Quali consigli danno i selezionatori?", "Che cosa dice un curriculum generico, secondo la responsabile?", "Com'è il curriculum tipico nel tuo paese? Che differenze ci sono?"]),
          k.spagna("Confronta il mondo del lavoro del tuo paese con quello italiano: curriculum, colloqui, contratti, rapporti con i capi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Domande difficili al colloquio", hint: "Come rispondere",
            text: ["«Mi parli di un suo difetto»: un difetto reale ma non grave, e che cosa fai per migliorarlo. «Perché dovremmo scegliere lei?»: tre punti di forza collegati all'annuncio. «Dove si vede fra cinque anni?»: ambizione realistica. «Ha domande?»: sempre sì: «Come è organizzato il gruppo?», «Quali sono le prospettive di crescita?»."],
          },
          k.rispondi(["Qual è stato il tuo primo lavoro? Che cosa hai imparato?", "Che cosa cerchi in un lavoro: stipendio, stabilità, crescita, flessibilità?", "Hai mai dato le dimissioni? Com'è andata?", "Lo smart working è un vantaggio o un problema?", "Che cosa pensi della foto sul curriculum?", "Dove ti vedi fra cinque anni?"]),
          { kind: "speak", title: "La presentazione", hint: "Prepara e registra la tua presentazione per un colloquio (due minuti): formazione, esperienze, competenze, motivazione. Usa il registro professionale.", items: ["Buongiorno, mi chiamo… e…"] },
          {
            kind: "roleplay", title: "Il colloquio completo", hint: "L'IA è la selezionatrice di un'azienda italiana per un lavoro nel tuo settore. Simulate un colloquio completo.",
            steps: ["Presentati in due minuti.", "Rispondi alla domanda sui tuoi difetti.", "Spiega perché dovrebbero scegliere te.", "Gestisci la domanda sullo stipendio.", "Fai due domande sull'azienda e chiudi."],
          },
          {
            kind: "roleplay", title: "La trattativa", hint: "Hai ricevuto un'offerta. L'IA è il responsabile del personale. Negozia le condizioni.",
            steps: ["Ringrazia per l'offerta.", "Chiedi chiarimenti sul contratto e sul periodo di prova.", "Negozia la retribuzione con argomenti.", "Chiedi lo smart working almeno due giorni a settimana.", "Riassumi l'accordo e chiedi la conferma scritta."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti del lavoro dei tuoi sogni: che cosa faresti, dove, con chi, e che cosa ti manca per arrivarci.", items: ["Il lavoro dei miei sogni…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ho visto il vostro annuncio. (apertura formale)", "Vi mando il mio CV. (allegare)", "So usare bene i programmi di grafica. (avere dimestichezza)", "Ho lavorato come capo reparto per tre anni. (ricoprire il ruolo)", "Se vi interessa, sono libero per un colloquio. (qualora)", "Mi rispondete, per favore? (chiusura formale)", "Vi ho scritto il 5 maggio e non ho avuto risposta. (fare seguito)", "Me ne vado dall'azienda. (dimissioni, registro formale)"], "Riscrivi ogni frase in registro professionale."),
          { kind: "write", title: "La candidatura", hint: "Scegli un annuncio di lavoro (reale, su un sito italiano, o inventato) e scrivi la lettera di presentazione completa (280–320 parole), con tutte le parti: apertura, motivo, profilo, motivazione, chiusura. Poi scrivi le prime tre righe del tuo curriculum in formato italiano.", rows: 22, items: ["Annuncio:", "Lettera di presentazione:", "Curriculum (inizio):"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: formule", ["in riferimento al Vostro annuncio", "desidero proporre la mia candidatura", "ho maturato esperienza", "allego il mio curriculum", "rassegnare le dimissioni", "il periodo di preavviso"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ho ricoperto il ruolo di responsabile vendite.", "Ho buona dimestichezza con i principali programmi.", "Qualora riteneste il mio profilo interessante, sono disponibile per un colloquio.", "Faccio seguito alla mia mail del 3 marzo.", "In attesa di un Vostro gentile riscontro, porgo distinti saluti."]),
          k.media([
            { type: "Film", title: "Generazione mille euro (Massimo Venier, 2009)", where: "Cerca dove vederlo su JustWatch", why: "Un giovane precario milanese tra contratti a termine, colloqui e coinquilini: commedia sul lavoro dei trentenni." },
            { type: "Sito", title: "Europass", where: "europass.europa.eu", why: "Crea il tuo curriculum in formato europeo in italiano e confrontalo con quello che usi di solito." },
            { type: "Sito", title: "InfoJobs Italia", where: "infojobs.it", why: "Leggi annunci reali nel tuo settore: annota le competenze richieste e il lessico usato." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Scegli un annuncio reale che hai letto e spiega perché saresti (o non saresti) adatto a quella posizione.", items: ["L'annuncio che ho scelto…"] },
        ],
      },
    ],

    exam: k.exam(77, {
      parole: ["la candidatura", "la lettera di presentazione", "le competenze trasversali", "maturare esperienza", "avere dimestichezza con", "il periodo di prova", "la retribuzione lorda", "il preavviso", "le dimissioni", "il tirocinio"],
      contrario: ["tempo determinato → contrario", "assumere → contrario", "promozione → contrario (retrocessione)", "lordo → contrario", "candidarsi → sostantivo", "dimettersi → sostantivo"],
      verbiHint: "Riscrivi in registro professionale.",
      verbiCols: ["registro formale"],
      verbi: [["Penso di essere adatto.", ""], ["Voglio fare domanda.", ""], ["Ho fatto il direttore.", ""], ["Ho imparato molte cose.", ""], ["Vi mando il CV.", ""], ["Se vi interessa, chiamatemi.", ""]],
      completaHint: "Completa la formula formale.",
      completa: ["In riferimento al Vostro ___, desidero proporre la mia candidatura.", "Negli ultimi anni ho ___ esperienza nel settore.", "Attualmente ___ il ruolo di coordinatore.", "Ho buona ___ con i programmi di grafica.", "___ il mio curriculum vitae.", "___ riteneste interessante il mio profilo, sono disponibile per un colloquio.", "Faccio ___ alla mia mail della settimana scorsa.", "Comunico la mia decisione di rassegnare le ___."],
      trasformaHint: "Riscrivi ogni frase in registro professionale.",
      trasforma: ["Ciao, ho visto l'annuncio.", "So parlare bene il tedesco.", "Ho fatto uno stage in banca.", "Posso cominciare subito.", "Grazie e a presto!", "Me ne vado tra un mese."],
      leggi: {
        text: [
          "Secondo un'indagine tra i responsabili delle risorse umane, il primo motivo per cui una candidatura viene scartata è la lettera di presentazione generica, uguale per tutte le aziende.",
          "Al secondo posto ci sono gli errori di ortografia e di registro: dare del tu al selezionatore o chiudere la mail con «ciao» fa una pessima impressione.",
          "Il consiglio degli esperti è semplice: informarsi sull'azienda, citare l'annuncio, collegare le proprie competenze alle esigenze indicate e rileggere tutto prima di inviare.",
        ],
        questions: ["Qual è il primo motivo per cui una candidatura viene scartata?", "Che cosa c'è al secondo posto?", "Quali errori di registro vengono citati?", "Che cosa consigliano gli esperti?"],
      },
      ascolta: {
        script: [
          { who: "Selezionatore", text: "Perché dovremmo scegliere proprio lei?" },
          { who: "Candidata", text: "Per tre motivi. Ho maturato sei anni di esperienza nel vostro settore, ho già coordinato gruppi internazionali e parlo quattro lingue." },
          { who: "Selezionatore", text: "E un suo difetto?" },
          { who: "Candidata", text: "A volte faccio fatica a delegare. Ma negli ultimi anni ho imparato a fidarmi di più dei miei collaboratori." },
        ],
        questions: ["Quali sono i tre motivi della candidata?", "Quale difetto ammette?", "Che cosa ha fatto per migliorare?", "Ti sembra una buona risposta? Perché?"],
      },
      parla: ["Presentati come in un colloquio di lavoro.", "Rispondi: «Perché dovremmo scegliere lei?»", "Racconta la tua esperienza professionale più importante.", "Smart working: vantaggi e svantaggi."],
      role: ["L'IA è il responsabile del personale e ti offre un posto.", "Negozia stipendio e condizioni.", "Chiudi l'accordo in modo formale."],
      dettato: ["desidero proporre la mia candidatura", "ho maturato esperienza", "allego il curriculum", "il periodo di prova", "rassegnare le dimissioni", "distinti saluti"],
      traduci: ["Ho visto il vostro annuncio. (formale)", "So usare Excel. (avere dimestichezza)", "Ho fatto il responsabile. (ricoprire il ruolo)", "Se vi interessa, sono libero. (qualora)", "Vi ho già scritto. (fare seguito)", "Lascio il lavoro. (dimissioni)"],
      scrivi: { hint: "Scrivi una mail formale (180–220 parole) al responsabile del personale di un'azienda per comunicare le tue dimissioni: motivo (con discrezione), periodo di preavviso, ringraziamenti, disponibilità per il passaggio di consegne.", start: "Gentile Dottor…," },
    }),
  };
})();
