// Unità 60 · Attualità — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[60] = {
    n: 60,
    level: "B2",
    title: "Attualità",
    goal: "Riferire con precisione dichiarazioni, notizie e conversazioni con il discorso indiretto completo (tempi, pronomi, avverbi, imperativi e domande).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a riferire che cosa hanno detto politici, esperti e testimoni, come fa un giornalista: con precisione, senza cambiare il senso e scegliendo bene il verbo introduttivo.",
              "Grammatica: il discorso indiretto completo. Ripassi i cambi di tempo che conosci dal B1 e aggiungi i casi difficili: il congiuntivo, il periodo ipotetico, l'imperativo, i pronomi e gli avverbi di tempo e luogo.",
              "Lessico: i verbi per riferire (dichiarare, sostenere, ammettere, smentire, annunciare, precisare…).",
            ],
          },
          {
            kind: "intro", title: "Dal diretto all'indiretto", hint: "Un'anticipazione",
            text: ["Quando il verbo introduttivo è al passato, quasi tutto si sposta «indietro» nel tempo, e cambiano anche pronomi e avverbi."],
            examples: [
              { it: "«Domani presenterò il piano.» → Ha annunciato che il giorno dopo avrebbe presentato il piano.", es: "futuro → condizionale passato" },
              { it: "«Se avessimo più fondi, assumeremmo.» → Ha detto che se avessero avuto più fondi, avrebbero assunto.", es: "ipotesi → irrealtà" },
              { it: "«Restate a casa!» → Ha invitato i cittadini a restare a casa.", es: "imperativo → a + infinito" },
            ],
          },
          { kind: "speak", title: "Che cosa hai letto oggi?", hint: "Prima di cominciare: riferisci una notizia che hai letto o sentito oggi. Chi ha detto che cosa?", items: ["Oggi ho letto che…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "I verbi per riferire", hint: "Spiega il significato di ogni verbo o espressione in italiano.",
            placeholder: "significato",
            items: [
              "dichiarare", "sostenere", "affermare", "ammettere", "negare",
              "smentire", "confermare", "annunciare", "precisare", "sottolineare",
              "ribadire", "assicurare", "promettere", "minacciare", "rivelare",
              "la dichiarazione", "la smentita", "il comunicato stampa", "il portavoce", "secondo fonti vicine a…",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sostantivo", title: "Dal verbo al sostantivo",
            hint: "Scrivi il sostantivo corrispondente.",
            items: ["dichiarare", "smentire", "ammettere", "annunciare", "promettere", "rivelare", "affermare", "precisare"],
          },
          { kind: "speak", title: "Il verbo giusto", hint: "Per ogni situazione scegli il verbo introduttivo più preciso e fai una frase. Esempio: il ministro dice che la notizia è falsa → Il ministro ha smentito la notizia.", items: ["dice di nuovo una cosa già detta", "dice che una notizia è vera", "dice una cosa segreta", "riconosce un errore", "dice che una cosa succederà presto", "aggiunge un dettaglio importante", "dice che farà qualcosa", "dice che non ha fatto qualcosa"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La voce del notiziario", hint: "Leggere una notizia",
            text: [
              "Il tono del telegiornale è neutro, regolare, con pause brevi dopo il soggetto lungo: «Il presidente del Consiglio | ha dichiarato che…».",
              "Le citazioni dirette si introducono con una pausa e un leggero cambio di voce: «Il ministro ha detto: | “Siamo soddisfatti”».",
              "Sigle: si leggono lettera per lettera (UE: u-e) o come parola (ISTAT: ìstat; NATO: nàto).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Con il tono del notiziario.", items: ["Il ministro dell'economia | ha annunciato nuove misure.", "Il portavoce ha smentito | le voci di dimissioni.", "Secondo i dati dell'Istat, | la disoccupazione è scesa.", "Il sindaco ha ribadito | che i lavori finiranno a giugno.", "Fonti vicine al governo | parlano di un accordo."] },
          { kind: "shadow", title: "Sigle", hint: "Ripeti.", items: ["l'UE, l'ONU, la NATO", "l'Istat, l'Inps, la Rai", "il PIL, l'IVA", "la BCE, l'FMI"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I tempi nel discorso indiretto", hint: "Verbo introduttivo al passato",
            text: [
              "Presente → imperfetto. Passato prossimo → trapassato prossimo. Futuro → condizionale passato. Imperfetto e trapassato: non cambiano.",
              "Congiuntivo presente → congiuntivo imperfetto. Congiuntivo passato → congiuntivo trapassato.",
              "Periodo ipotetico (realtà o possibilità) → diventa irrealtà nel passato: «Se piove, resto» → Ha detto che se fosse piovuto, sarebbe rimasto.",
              "Imperativo → di + infinito (o che + congiuntivo imperfetto).",
            ],
            table: { head: ["diretto", "indiretto"], rows: [["parto", "partiva"], ["sono partito", "era partito"], ["partirò", "sarebbe partito"], ["che parta", "che partisse"], ["parti!", "di partire"]] },
          },
          k.table("Al discorso indiretto", [
            ["«Sono stanco.» → Ha detto che…", "era stanco"],
            ["«Ho finito.» → Ha detto che…", ""],
            ["«Verrò domani.» → Ha detto che…", ""],
            ["«Credo che sia giusto.» → Ha detto che credeva che…", ""],
            ["«Chiudete la porta!» → Ci ha detto…", ""],
            ["«Se posso, vengo.» → Ha detto che se…", ""],
          ], "Completa la frase indiretta.", ["indiretto"]),
          {
            kind: "fill", title: "Completa", hint: "Trasforma il verbo tra parentesi nel discorso indiretto al passato.",
            items: [
              "Il ministro ha dichiarato che il governo ___ (approverà) la legge entro l'estate.", "Il sindaco ha ammesso che i lavori ___ (sono cominciati) in ritardo.", "Il portavoce ha precisato che il presidente ___ (sta) bene.", "Ha detto che sperava che la situazione ___ (migliori) presto.", "L'esperto ha sostenuto che se ___ (aumentano) i prezzi, i consumi calerebbero.", "La polizia ha invitato i cittadini ___ (non uscite) di casa.", "Ha rivelato che non ___ (sapeva) niente dell'accordo.", "Ha assicurato che ___ (pagheremo) tutti i debiti.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Pronomi, avverbi, dimostrativi", hint: "Tutto si sposta",
            text: [
              "Persone: io → lui/lei; noi → loro; mio → suo. «Il mio partito» → il suo partito.",
              "Tempo: oggi → quel giorno; ieri → il giorno prima; domani → il giorno dopo / l'indomani; ora → allora; fra una settimana → una settimana dopo; la settimana scorsa → la settimana precedente.",
              "Luogo e dimostrativi: qui → lì; questo → quello; venire → andare (spesso).",
            ],
          },
          k.negativa(["«Domani verrò qui con i miei collaboratori.»", "«Ieri ho firmato questo accordo.»", "«Oggi la nostra città festeggia.»", "«La settimana prossima presenteremo il nostro piano.»", "«Ora non posso rispondere a questa domanda.»", "«Fra un mese tornerò in questa scuola.»"], "Riferisci ogni frase cominciando con «Il sindaco ha detto che…». Cambia tempi, pronomi e avverbi.", "discorso indiretto"),
          {
            kind: "intro", title: "Riassumere invece di citare", hint: "Il discorso indiretto libero e il riassunto",
            text: ["Un giornalista spesso non riporta ogni parola, ma riassume con un verbo preciso: «“No, non è vero, non mi dimetto”» → Ha smentito le voci sulle sue dimissioni. «“Sì, ho sbagliato”» → Ha ammesso il proprio errore."],
          },
          {
            kind: "fill", title: "Riassumi con un verbo", hint: "Completa con il verbo introduttivo più adatto al passato prossimo (smentire, ammettere, promettere, ribadire, minacciare, rivelare).",
            items: ["«Non è vero che lascio il partito.» → Ha ___ la notizia.", "«Sì, abbiamo commesso degli errori.» → Ha ___ gli errori.", "«Lo ripeto: non ci saranno nuove tasse.» → Ha ___ che non ci sarebbero state nuove tasse.", "«Se non pagate, vi denuncio.» → Ha ___ di denunciarli.", "«Vi garantisco che l'ospedale riaprirà.» → Ha ___ che l'ospedale avrebbe riaperto.", "«Vi dico un segreto: mi sposo.» → Ha ___ che si sarebbe sposato."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La conferenza stampa", "Il sindaco di una città risponde ai giornalisti dopo un'alluvione.", [
            { who: "Sindaco", text: "Buongiorno. Voglio innanzitutto ringraziare i volontari che da ieri lavorano senza sosta." },
            { who: "Giornalista", text: "Signor sindaco, è vero che l'allerta era stata data già tre giorni fa?" },
            { who: "Sindaco", text: "Sì, lo ammetto: l'allerta c'era. Ma nessuno si aspettava una pioggia così intensa." },
            { who: "Giornalista", text: "Quando potranno tornare a casa le famiglie evacuate?" },
            { who: "Sindaco", text: "Spero che entro domenica la maggior parte possa rientrare. Chiedo a tutti di non avvicinarsi al fiume e di seguire le indicazioni della protezione civile." },
            { who: "Giornalista", text: "Ci saranno aiuti economici?" },
            { who: "Sindaco", text: "Domani incontrerò il presidente della Regione. Se otterremo i fondi, li distribuiremo entro un mese." },
          ], ["Chi ringrazia il sindaco?", "Che cosa ammette?", "Che cosa spera per le famiglie evacuate?", "Che cosa chiede ai cittadini?", "Che cosa farà il giorno dopo? Che cosa succederà se otterrà i fondi?", "Riferisci tutta la conferenza stampa al discorso indiretto, come in un articolo."]),
          k.listen("Il pettegolezzo", "Due colleghe si riferiscono una conversazione.", [
            { who: "Laura", text: "Indovina che cosa mi ha detto ieri Paolo! Mi ha detto che lascia l'azienda." },
            { who: "Giulia", text: "Ma va'! E perché?" },
            { who: "Laura", text: "Ha detto che aveva ricevuto un'offerta da Milano e che ci avrebbe pensato fino a lunedì. Mi ha chiesto di non dirlo a nessuno…" },
            { who: "Giulia", text: "E tu l'hai appena detto a me!" },
          ], ["Che cosa ha rivelato Paolo a Laura?", "Perché lascia l'azienda?", "Che cosa le ha chiesto?", "Perché Giulia ride?", "Nota: Laura dice «lascia» e non «lasciava». Perché, secondo te, nel parlato si fa così?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Come si scrive una notizia", [
            "Ogni giorno le redazioni dei giornali ricevono decine di dichiarazioni, comunicati stampa e interviste. Il lavoro del giornalista è trasformarli in notizie chiare, verificate e corrette.",
            "La prima regola è la fedeltà: chi riferisce non deve cambiare il senso delle parole altrui. Per questo la scelta del verbo introduttivo è decisiva. «Ha detto» è neutro; «ha ammesso» suggerisce che si tratti di qualcosa di negativo; «ha sostenuto» lascia intendere che non tutti siano d'accordo.",
            "La seconda regola è la verifica. Una dichiarazione non è un fatto: se un ministro afferma che la disoccupazione è scesa, il giornalista dovrebbe controllare i dati prima di presentarli come veri.",
            "Infine, c'è la distinzione tra virgolette e discorso indiretto. Le virgolette garantiscono l'esattezza, ma il discorso indiretto permette di riassumere e contestualizzare. Un buon articolo usa entrambi.",
            "Nell'epoca dei social network, in cui chiunque può riportare le parole di chiunque, queste regole non riguardano più solo i giornalisti, ma tutti noi.",
          ], ["Qual è il lavoro del giornalista secondo il testo?", "Perché la scelta del verbo introduttivo è decisiva? Fai gli esempi del testo.", "Che differenza c'è tra una dichiarazione e un fatto?", "Quali sono i vantaggi delle virgolette e del discorso indiretto?", "Perché queste regole riguardano tutti noi?", "Riscrivi una frase del testo cambiando il verbo introduttivo e spiega come cambia il senso."]),
          k.spagna("Scegli una dichiarazione recente di un politico del tuo paese e riferiscila in tre modi diversi (neutro, critico, favorevole) cambiando solo il verbo introduttivo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Riferire nel parlato", hint: "Formule colloquiali",
            text: ["«Mi ha detto che…», «A quanto pare…», «Dice che…», «Pare che + congiuntivo», «Gira voce che…», «Da quello che ho capito…», «Non so se è vero, ma…». Nel parlato, se il fatto è ancora attuale, spesso non si cambia il tempo: «Mi ha detto che lascia l'azienda»."],
          },
          k.rispondi(["Qual è l'ultima notizia che ti ha colpito? Chi ha detto che cosa?", "Ti fidi delle dichiarazioni dei politici? Perché?", "Come verifichi una notizia prima di condividerla?", "Riferisci una conversazione interessante che hai avuto questa settimana.", "Che cosa ti ha detto l'ultima volta il tuo medico o il tuo capo?", "Che cosa ti avevano promesso che poi non è successo?"]),
          { kind: "speak", title: "Telegiornale", hint: "Leggi una notizia breve (in italiano, da un giornale online) e poi riferiscila a memoria in un minuto, con almeno quattro verbi introduttivi diversi.", items: ["Secondo quanto dichiarato da…"] },
          {
            kind: "roleplay", title: "L'intervista e l'articolo", hint: "L'IA è un'esperta di clima che ti rilascia un'intervista. Dopo, tu riferisci al direttore del giornale che cosa ha detto.",
            steps: ["Fai tre domande all'esperta.", "Prendi nota delle sue risposte.", "Riferisci al direttore con il discorso indiretto al passato.", "Usa almeno tre verbi introduttivi diversi.", "Riferisci anche un consiglio che ha dato (imperativo → di + infinito)."],
          },
          {
            kind: "roleplay", title: "Il telefono senza fili", hint: "L'IA ti racconta un pettegolezzo complicato. Tu lo riferisci a un'altra persona (sempre l'IA) cercando di non cambiare niente.",
            steps: ["Ascolta il pettegolezzo.", "Fai domande per chiarire.", "Riferiscilo con «mi ha detto che» e «a quanto pare».", "Distingui ciò che è sicuro da ciò che è una voce.", "Aggiungi la tua opinione, separandola dal racconto."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di una promessa pubblica (di un politico, di un'azienda) che non è stata mantenuta. Che cosa era stato promesso e che cosa è successo?", items: ["Avevano promesso che…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["«Domani firmerò l'accordo.» (Il ministro ha annunciato che…)", "«Ieri non ero in ufficio.» (Ha precisato che…)", "«Non ho mai detto questo.» (Ha negato di…)", "«Se vinciamo, abbasseremo le tasse.» (Ha promesso che se…)", "«Restate calmi!» (Ha invitato tutti a…)", "«Spero che capiate.» (Ha detto che sperava che…)", "«Sì, abbiamo sbagliato.» (riassumi con un verbo)", "«Questo progetto è il nostro futuro.» (Ha sottolineato che…)"], "Riscrivi ogni frase al discorso indiretto con l'inizio indicato."),
          { kind: "write", title: "Un articolo di cronaca", hint: "Scrivi un articolo (280–320 parole) su un evento inventato o reale (un'inaugurazione, una protesta, un'alluvione). Riporta le dichiarazioni di almeno tre persone: usa le virgolette per una sola frase e il discorso indiretto per tutto il resto, con almeno sei verbi introduttivi diversi.", rows: 20, items: ["Titolo:", "Sottotitolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: verbi e formule", ["ha smentito la notizia", "ha ribadito che", "il giorno dopo", "secondo fonti vicine", "il comunicato stampa", "ha invitato i cittadini a"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Ha detto che sarebbe tornato il giorno dopo.", "Ha ammesso di aver sbagliato.", "Ha promesso che se avesse vinto, avrebbe abbassato le tasse.", "Pare che il ministro si dimetta.", "Ci ha chiesto di non dirlo a nessuno."]),
          k.media([
            { type: "TV", title: "Tg1 o Tg La7", where: "raiplay.it / la7.it", why: "Guarda un telegiornale serale e annota tre dichiarazioni e i verbi usati per introdurle." },
            { type: "Podcast", title: "Il Post — Morning", where: "ilpost.it o app di podcast", why: "Rassegna stampa: ascolta come vengono riferite e confrontate le notizie dei diversi giornali." },
            { type: "Sito", title: "Internazionale", where: "internazionale.it", why: "Articoli della stampa estera tradotti in italiano: ottimo per il discorso indiretto giornalistico." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riferisci la notizia più interessante del telegiornale o del podcast, come se la stessi raccontando a un amico.", items: ["Hai sentito? Pare che…"] },
        ],
      },
    ],

    exam: k.exam(60, {
      parole: ["dichiarare", "smentire", "ammettere", "ribadire", "precisare", "rivelare", "il comunicato stampa", "il portavoce", "la smentita", "sottolineare"],
      contrario: ["dichiarare → sostantivo", "smentire → sostantivo", "confermare → contrario", "ammettere → contrario", "promettere → sostantivo", "rivelare → sostantivo"],
      verbiHint: "Completa la frase indiretta (verbo introduttivo al passato).",
      verbiCols: ["indiretto"],
      verbi: [["«Parto.» → Ha detto che…", ""], ["«Sono partito.» → Ha detto che…", ""], ["«Partirò.» → Ha detto che…", ""], ["«Partite!» → Ci ha detto…", ""], ["«Spero che tu parta.» → Ha detto che sperava che…", ""], ["«Se posso, parto.» → Ha detto che se…", ""]],
      completaHint: "Completa con la forma giusta o con l'avverbio giusto del discorso indiretto.",
      completa: ["Ha detto che ___ (domani) sarebbe partito.", "Ha detto che ___ (ieri) non era venuto.", "Ha detto che in ___ (questo) momento non poteva rispondere.", "Ha promesso che ci ___ (aiuterà).", "Ha detto che voleva che noi ___ (veniamo).", "Ci ha chiesto ___ (non fate) rumore.", "Ha ammesso di ___ (ha sbagliato).", "Ha detto che se ___ (avrà) tempo, sarebbe passato."],
      trasformaHint: "Riferisci al discorso indiretto, cominciando con «Ha detto che…» o con il verbo indicato.",
      trasforma: ["«Domani torno qui con mio figlio.»", "«La settimana scorsa ho incontrato il presidente.»", "«Se piove, rimandiamo la partita.»", "«Chiudete le finestre!» (ha ordinato di)", "«Non è vero, non mi sono dimesso.» (riassumi: ha smentito)", "«Credo che abbiano capito.»"],
      leggi: {
        text: [
          "Ieri la ministra dell'istruzione ha presentato la riforma della scuola. Ha dichiarato che dal prossimo anno le classi non avrebbero superato i venti alunni e che sarebbero stati assunti diecimila nuovi insegnanti.",
          "I sindacati hanno accolto la notizia con prudenza. Il segretario ha sottolineato che le promesse erano già state fatte in passato e ha chiesto che le risorse venissero indicate con precisione.",
          "La ministra ha ribadito che i fondi c'erano e ha invitato i sindacati a un incontro la settimana successiva.",
        ],
        questions: ["Che cosa ha dichiarato la ministra?", "Come hanno reagito i sindacati?", "Che cosa ha chiesto il segretario?", "Che cosa ha ribadito la ministra e a che cosa ha invitato i sindacati?"],
      },
      ascolta: {
        script: [
          { who: "Giornalista", text: "Presidente, conferma le voci di un accordo con l'azienda tedesca?" },
          { who: "Presidente", text: "Non confermo e non smentisco. Posso solo dire che stiamo parlando con diversi partner." },
          { who: "Giornalista", text: "Quando ci saranno novità?" },
          { who: "Presidente", text: "Entro la fine del mese faremo un comunicato. Vi chiedo di avere pazienza." },
        ],
        questions: ["Che cosa chiede il giornalista?", "Che cosa risponde il presidente?", "Quando ci saranno novità?", "Riferisci la risposta finale del presidente al discorso indiretto."],
      },
      parla: ["Riferisci una notizia recente con almeno tre verbi introduttivi.", "Racconta che cosa ti ha detto una persona importante per te.", "Riferisci una promessa non mantenuta.", "Spiega come verifichi una notizia."],
      role: ["L'IA è un testimone di un incidente. Intervistalo.", "Poi riferisci al commissario che cosa ha detto, al discorso indiretto.", "Distingui ciò che ha visto da ciò che suppone."],
      dettato: ["ha smentito", "il giorno dopo", "ha ribadito che", "aveva promesso che", "ci ha chiesto di", "il comunicato stampa"],
      traduci: ["«Ora sono a Roma.» (Ha detto che…)", "«Ho vinto la gara.» (Ha annunciato che…)", "«Vi chiamerò domani.» (Ha promesso che…)", "«Non toccate niente!» (Ci ha ordinato di…)", "«Se ho tempo, vengo.» (Ha detto che se…)", "«Sì, è colpa mia.» (riassumi con «ammettere»)"],
      scrivi: { hint: "Scrivi un breve articolo (180–220 parole) su una conferenza stampa inventata: chi ha parlato, che cosa ha annunciato, che cosa hanno chiesto i giornalisti e che cosa ha risposto. Una sola citazione tra virgolette, il resto al discorso indiretto.", start: "Nel corso della conferenza stampa di ieri…" },
    }),
  };
})();
