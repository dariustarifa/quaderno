// Unità 41 · Se fossi… — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[41] = {
    n: 41,
    level: "B1",
    title: "Se fossi…",
    goal: "Fare ipotesi sul presente e sul futuro, immaginare situazioni diverse ed esprimere desideri con il congiuntivo imperfetto.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a immaginare: «Se vincessi la lotteria…», «Se fossi il sindaco…», «Se avessi più tempo…».",
              "Grammatica: il congiuntivo imperfetto (fossi, avessi, facessi), il periodo ipotetico della possibilità (se + congiuntivo imperfetto, condizionale presente), «vorrei che» + congiuntivo imperfetto e «come se».",
              "È una delle strutture più utili della lingua parlata: la sentirai ogni giorno.",
            ],
          },
          {
            kind: "intro", title: "Se avessi tempo, viaggerei", hint: "Un'anticipazione",
            text: ["Ipotesi possibili ma non reali: se + congiuntivo imperfetto, conseguenza al condizionale presente.", "Il congiuntivo imperfetto si forma in modo molto regolare: parla-ssi, crede-ssi, dormi-ssi."],
            examples: [
              { it: "Se avessi più soldi, comprerei una casa al mare.", es: "ma non ho abbastanza soldi" },
              { it: "Se fossi in te, accetterei.", es: "per dare consigli" },
              { it: "Vorrei che tu restassi.", es: "vorrei che + congiuntivo imperfetto" },
            ],
          },
          { kind: "speak", title: "Se potessi…", hint: "Prima di cominciare: se potessi vivere in qualsiasi città del mondo, quale sceglieresti? Perché?", items: ["Se potessi vivere ovunque, …"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Ipotesi e sogni", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'ipotesi", "immaginare", "supporre", "nel caso in cui", "magari",
              "la lotteria", "vincere un terno al lotto", "il colpo di fortuna", "se fossi in te", "al posto tuo",
              "realizzarsi", "il rimpianto", "il desiderio", "cambiare vita", "mollare tutto",
              "la bacchetta magica", "il superpotere", "come se", "chissà", "fare finta di",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Sinonimi e definizioni",
            hint: "Scrivi un sinonimo o una breve definizione.",
            items: ["supporre", "magari (= desiderio)", "mollare tutto", "un colpo di fortuna", "chissà", "fare finta di", "il rimpianto", "realizzarsi"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: se fossi → Se fossi più paziente, litigherei meno.", items: ["se fossi", "se avessi", "se potessi", "vorrei che", "come se", "magari", "se fossi in te", "nel caso in cui"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Fossi, avessi, facessi", hint: "La doppia s",
            text: [
              "Il congiuntivo imperfetto ha quasi sempre la doppia s: parlassi, avessi, fossi, facessi. Allungala bene: «fòs-si», non «fosi».",
              "Attenzione all'accento con noi: par-làs-si-mo, a-vès-si-mo, fòs-si-mo.",
              "Nel periodo ipotetico la voce sale sulla parte con «se» e scende sulla conseguenza: «Se avessi tempo ↗, viaggerei di più ↘».",
            ],
            table: { head: ["", "pronuncia"], rows: [["fossi / fosse", "fòs-si / fòs-se"], ["avessimo", "a-vès-si-mo"], ["facessero", "fa-cès-se-ro"], ["parlaste", "par-là-ste"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Ripeti allungando la doppia s.", items: ["se io fossi, se tu fossi, se lui fosse", "se avessi, se avessimo, se avessero", "se facessi, se dicessi, se dessi", "se potessi, se volessi, se sapessi"] },
          { kind: "shadow", title: "Ipotesi", hint: "Ripeti con la melodia giusta: su con il «se», giù con la conseguenza.", items: ["Se avessi tempo, viaggerei di più.", "Se fossi in te, non lo farei.", "Se vincessi la lotteria, smetterei di lavorare.", "Se sapessi cucinare, inviterei tutti a cena.", "Parla come se fosse il capo."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il congiuntivo imperfetto", hint: "Forma",
            text: [
              "Si toglie -re all'infinito e si aggiunge -ssi, -ssi, -sse, -ssimo, -ste, -ssero: parlare → parlassi; credere → credessi; partire → partissi.",
              "Irregolari: essere → fossi; dare → dessi; stare → stessi. Hanno la radice lunga (come all'imperfetto indicativo): fare → facessi; dire → dicessi; bere → bevessi; tradurre → traducessi; porre → ponessi.",
              "Avere è regolare: avessi.",
            ],
            table: { head: ["", "parlare", "essere", "fare"], rows: [["io / tu", "parlassi", "fossi", "facessi"], ["lui / lei", "parlasse", "fosse", "facesse"], ["noi / voi", "parlassimo / parlaste", "fossimo / foste", "facessimo / faceste"], ["loro", "parlassero", "fossero", "facessero"]] },
          },
          k.table("Tabella del congiuntivo imperfetto", [
            ["avere", "avessi", "", "", "", "", ""],
            ["essere", "", "", "fosse", "", "", ""],
            ["dire", "", "", "", "", "", ""],
            ["dare", "", "", "", "dessimo", "", ""],
            ["stare", "", "", "", "", "", ""],
            ["potere", "", "", "", "", "", "potessero"],
          ], "Completa con il congiuntivo imperfetto."),
          {
            kind: "fill", title: "Se…", hint: "Completa con il congiuntivo imperfetto del verbo tra parentesi.",
            items: [
              "Se ___ (io, avere) più tempo, imparerei il pianoforte.", "Se ___ (tu, essere) più paziente, andresti d'accordo con tutti.", "Se Marco ___ (sapere) la verità, si arrabbierebbe.", "Se ___ (noi, vivere) al mare, faremmo il bagno ogni giorno.", "Se ___ (voi, venire) a trovarci, vi porteremmo in montagna.", "Se i miei genitori ___ (potere), andrebbero in pensione domani.", "Se ___ (fare) bel tempo, usciremmo.", "Se ___ (io, dire) quello che penso, litigheremmo.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il periodo ipotetico della possibilità", hint: "Se + congiuntivo imperfetto + condizionale",
            text: [
              "Per una situazione immaginaria nel presente o nel futuro: «Se avessi un milione, comprerei un'isola».",
              "L'ordine si può invertire: «Comprerei un'isola se avessi un milione».",
              "Errore tipico (anche di molti italiani): NON «se avrei», ma «se avessi». Dopo «se», mai il condizionale!",
              "Per i consigli: «Se fossi in te…» = «Al posto tuo…».",
            ],
          },
          {
            kind: "fill", title: "Completa l'ipotesi", hint: "Completa con il congiuntivo imperfetto o con il condizionale presente.",
            items: ["Se vincessi la lotteria, ___ (io, smettere) di lavorare.", "Se ___ (io, essere) il presidente, cambierei la legge elettorale.", "Che cosa ___ (tu, fare) se perdessi il lavoro?", "Se non ci ___ (essere) il traffico, arriveremmo in dieci minuti.", "Se fossi in te, non ___ (io, dire) niente.", "Mia madre sarebbe felice se ___ (noi, andare) a trovarla più spesso."],
          },
          {
            kind: "intro", title: "Vorrei che… e come se…", hint: "Altri usi del congiuntivo imperfetto",
            text: [
              "Dopo un verbo al condizionale (vorrei, preferirei, mi piacerebbe) + «che» → congiuntivo imperfetto: «Vorrei che tu fossi qui», «Mi piacerebbe che veniste».",
              "«Come se» + congiuntivo imperfetto: «Parla come se sapesse tutto», «Fa come se niente fosse».",
              "«Magari» + congiuntivo imperfetto per un desiderio: «Magari fosse vero!» (= mi piacerebbe tanto che fosse vero).",
              "Dopo un verbo al passato (pensavo che, volevo che, speravo che) → congiuntivo imperfetto: «Pensavo che fossi a Roma».",
            ],
          },
          {
            kind: "fill", title: "Vorrei che, come se, magari", hint: "Completa con il congiuntivo imperfetto.",
            items: ["Vorrei che tu ___ (restare) ancora un po'.", "Mi piacerebbe che i miei figli ___ (leggere) di più.", "Spende come se ___ (essere) milionario.", "Magari ___ (piovere)! Fa un caldo terribile.", "Pensavo che voi ___ (abitare) ancora a Milano.", "Mi guarda come se non mi ___ (conoscere)."],
          },
          k.negativa(["Non ho tempo, quindi non viaggio.", "Non sono ricco, quindi non compro una barca.", "Non parli italiano, quindi non capisci il film.", "Piove, quindi restiamo a casa.", "Non sanno la verità, quindi non si arrabbiano."], "Trasforma ogni frase in un periodo ipotetico (se + congiuntivo imperfetto, condizionale). Esempio: Non ho soldi, quindi non parto. → Se avessi soldi, partirei.", "periodo ipotetico"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Se vincessimo il Superenalotto…", "Tre amici sognano davanti a un biglietto della lotteria.", [
            { who: "Teo", text: "Il montepremi è di cento milioni. Se vincessimo, che cosa fareste?" },
            { who: "Anna", text: "Io mi licenzierei il giorno dopo e farei il giro del mondo. Partirei dal Giappone." },
            { who: "Luca", text: "Io no. Se vincessi, continuerei a lavorare, ma solo tre giorni alla settimana. Senza lavorare mi annoierei." },
            { who: "Teo", text: "Io comprerei una casa ai miei genitori e aprirei un ristorante in Puglia." },
            { who: "Anna", text: "E se ci invitassi gratis tutti i giorni, saremmo i tuoi clienti migliori!" },
            { who: "Luca", text: "Ragazzi, magari vincessimo… Ma prima bisognerebbe comprare il biglietto!" },
          ], ["Quanto è il montepremi?", "Che cosa farebbe Anna?", "Perché Luca continuerebbe a lavorare?", "Che cosa farebbe Teo?", "Qual è il problema, secondo Luca?"]),
          k.listen("Il consiglio della sorella", "Una ragazza chiede consiglio alla sorella maggiore.", [
            { who: "Giulia", text: "Mi hanno offerto un lavoro a Londra, ma Paolo non vuole trasferirsi. Tu che cosa faresti?" },
            { who: "Elena", text: "Se fossi in te, ci penserei bene. Se Paolo ti amasse davvero, cercherebbe una soluzione con te." },
            { who: "Giulia", text: "Ma se partissi, rischierei di perderlo." },
            { who: "Elena", text: "E se restassi, rischieresti di pentirti per tutta la vita. Vorrei che tu pensassi prima a te stessa." },
            { who: "Giulia", text: "Sembra facile, detto così… Parli come se fosse una decisione semplice." },
          ], ["Che offerta ha ricevuto Giulia? Qual è il problema?", "Che cosa farebbe Elena al suo posto?", "Che cosa rischierebbe Giulia se partisse?", "E se restasse?", "Che cosa rimprovera Giulia alla sorella?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("E se fossi il sindaco?", [
            "Un giornale locale di Bologna ha chiesto ai lettori: «Che cosa fareste se foste il sindaco per un giorno?». Sono arrivate centinaia di risposte.",
            "Giulia, 34 anni, ciclista: «Se fossi sindaca, chiuderei il centro alle auto e trasformerei i parcheggi in giardini. Se le persone vedessero quanto è bella una città silenziosa, nessuno vorrebbe tornare indietro».",
            "Franco, 70 anni, pensionato: «Io metterei più panchine e più bagni pubblici. Se ci fossero più posti per sedersi, gli anziani uscirebbero di più e si sentirebbero meno soli».",
            "Amina, 19 anni, studentessa: «Se potessi, abbasserei gli affitti per gli studenti. Molti miei amici lascerebbero subito l'università se non avessero l'aiuto dei genitori».",
            "Il sindaco vero ha letto le risposte e ha promesso di realizzarne almeno una. «Se tutti i cittadini partecipassero così», ha detto, «governare sarebbe più facile».",
          ], ["Che cosa ha chiesto il giornale?", "Che cosa farebbe Giulia? Perché?", "Che cosa propone Franco? A chi sarebbe utile?", "Qual è il problema di cui parla Amina?", "Come ha reagito il sindaco vero?", "E tu, che cosa faresti se fossi il sindaco della tua città?"]),
          k.spagna("Che cosa cambieresti nel tuo paese se fossi il presidente per un giorno? Usa almeno cinque periodi ipotetici."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Immaginare", hint: "Formule per le ipotesi",
            text: ["«Immagina di…», «Mettiamo che…» (+ congiuntivo), «Nel caso in cui…» (+ congiuntivo), «Supponiamo che…».", "Per reagire: «Che bello sarebbe!», «Magari!», «Non ci penso nemmeno!», «Dipende da…»."],
          },
          k.rispondi(["Che cosa faresti se vincessi un milione di euro?", "Se potessi cambiare una cosa del tuo passato, che cosa cambieresti?", "Dove vivresti se potessi scegliere qualsiasi posto?", "Che superpotere vorresti avere? Che cosa ne faresti?", "Se fossi un animale, quale saresti? Perché?", "Che cosa faresti se ti offrissero un lavoro dall'altra parte del mondo?"]),
          { kind: "speak", title: "Che cosa faresti se…?", hint: "Rispondi a ogni situazione con un periodo ipotetico completo.", items: ["…trovassi un portafoglio con mille euro?", "…il tuo migliore amico ti chiedesse di mentire per lui?", "…restassi chiuso in un museo di notte?", "…potessi parlare con una persona famosa del passato?", "…domani non ci fosse internet in tutto il mondo?", "…ti svegliassi in un altro paese senza documenti?"] },
          {
            kind: "roleplay", title: "Il dilemma", hint: "L'IA ti propone un dilemma morale. Discutete che cosa fareste e perché.",
            steps: ["Ascolta il dilemma.", "Di' che cosa faresti, con un periodo ipotetico.", "Spiega le conseguenze della tua scelta.", "Chiedi all'IA che cosa farebbe lei.", "Discutete le differenze."],
          },
          {
            kind: "roleplay", title: "Il colloquio impossibile", hint: "In un colloquio di lavoro ti fanno domande ipotetiche. L'IA fa la selezionatrice. Usa il «Lei».",
            steps: ["Rispondi: «Che cosa farebbe se un cliente si arrabbiasse?»", "Rispondi: «Come si comporterebbe se un collega non lavorasse?»", "Rispondi a una domanda a sorpresa.", "Fai tu una domanda ipotetica alla selezionatrice.", "Concludi il colloquio."],
          },
          { kind: "speak", title: "La mia vita parallela", hint: "Parla per due minuti di come sarebbe la tua vita se avessi fatto un'altra scelta (lavoro, città, studi): immagina il presente con «se fossi…, avrei…, vivrei…».", items: ["Se fossi…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non ho la macchina, quindi vado a piedi. (periodo ipotetico)", "Non conosco la risposta, quindi non posso aiutarti. (periodo ipotetico)", "Al posto tuo non accetterei. (Se fossi…)", "Voglio che tu venga. (più gentile, con il condizionale)", "Si comporta da padrone ma non lo è. (come se)", "Spero tanto che sia vero! (Magari…)", "Pensavo: «È a casa». (Pensavo che…)", "Nel caso piova, restiamo dentro. (Nel caso in cui…)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Se avessi un anno sabbatico", hint: "Scrivi un testo (200–220 parole): che cosa faresti se avessi un anno libero, pagato, senza obblighi? Dove andresti, che cosa impareresti, con chi lo passeresti. Usa almeno otto periodi ipotetici o congiuntivi imperfetti.", rows: 16, items: ["Se avessi un anno sabbatico…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: congiuntivo imperfetto", ["se fossi", "se avessimo", "se facessero", "come se sapesse", "vorrei che venissi", "magari fosse vero"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Se avessi tempo, viaggerei.", "Se fossi in te, accetterei.", "Vorrei che tu restassi.", "Parla come se fosse il capo.", "Magari vincessimo!"]),
          k.media([
            { type: "Canzone", title: "Se telefonando, Mina", where: "Spotify, YouTube", why: "Classico del 1966, già nel titolo un'ipotesi. Una delle canzoni più belle della musica italiana." },
            { type: "Film", title: "Il primo giorno della mia vita (Paolo Genovese, 2023)", where: "Cerca dove vederlo su JustWatch", why: "Quattro persone hanno una settimana per vedere come sarebbe il mondo senza di loro. Pieno di ipotesi." },
            { type: "Podcast", title: "Podcast Italiano", where: "Spotify, YouTube", why: "Cerca l'episodio sul periodo ipotetico: spiegato bene, con esempi naturali." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che cosa faresti se fossi il protagonista del film? Usa almeno tre periodi ipotetici.", items: ["Se fossi il protagonista…"] },
        ],
      },
    ],

    exam: k.exam(41, {
      parole: ["supporre", "magari", "mollare tutto", "il colpo di fortuna", "il rimpianto", "chissà", "fare finta di", "nel caso in cui", "come se", "il montepremi"],
      contrario: ["realizzare → sostantivo", "immaginare → sostantivo", "ipotesi → aggettivo", "desiderare → sostantivo", "fortuna → contrario", "possibile → contrario"],
      verbiHint: "Completa con il congiuntivo imperfetto.",
      verbi: [["essere", "", "", "", "", "", ""], ["fare", "", "", "", "", "", ""], ["stare", "", "", "", "", "", ""]],
      completaHint: "Completa con il congiuntivo imperfetto o con il condizionale presente.",
      completa: ["Se ___ (io, sapere) cantare, farei il cantante.", "Se tu studiassi di più, ___ (passare) l'esame.", "Che cosa ___ (voi, fare) se perdeste il treno?", "Vorrei che i miei amici ___ (venire) più spesso.", "Si comporta come se non ___ (succedere) niente.", "Magari ___ (essere) già venerdì!", "Pensavo che tu ___ (avere) già cenato.", "Se fossi in te, non lo ___ (comprare)."],
      trasformaHint: "Trasforma ogni frase in un periodo ipotetico della possibilità.",
      trasforma: ["Non ho soldi, quindi non compro casa.", "Non è qui, quindi non può aiutarci.", "Piove, quindi non andiamo al mare.", "Non conosco nessuno, quindi non esco.", "Non parlano inglese, quindi non trovano lavoro a Londra.", "Non c'è il sole, quindi non prendiamo la bici."],
      leggi: {
        text: [
          "Lettera alla rubrica: Ho 40 anni, un buon lavoro in banca e una famiglia. Eppure a volte immagino come sarebbe la mia vita se mollassi tutto e aprissi un piccolo albergo in Sardegna.",
          "Se lo facessi, guadagnerei meno, ma vivrei vicino al mare e passerei più tempo con i miei figli. Mia moglie dice che sarebbe una follia: se l'albergo non funzionasse, perderemmo tutto.",
          "Io vorrei solo che qualcuno mi dicesse se è un sogno sensato o una crisi di mezza età. Voi che cosa fareste al posto mio? — Giorgio",
        ],
        questions: ["Che cosa immagina a volte Giorgio?", "Quali sarebbero i vantaggi del cambiamento?", "Che cosa pensa sua moglie? Perché?", "Che cosa vorrebbe Giorgio?"],
      },
      ascolta: {
        script: [
          { who: "Sara", text: "Se domani potessi svegliarti in un altro paese, quale sceglieresti?" },
          { who: "Davide", text: "L'Islanda. Se ci andassi, vorrei vedere l'aurora boreale e fare il bagno nelle sorgenti calde." },
          { who: "Sara", text: "Io sceglierei il Messico. Se vivessi lì, mangerei tacos tutti i giorni!" },
          { who: "Davide", text: "Magari potessimo partire davvero… Ma lunedì si lavora." },
        ],
        questions: ["Che paese sceglierebbe Davide? Che cosa farebbe?", "E Sara? Perché?", "Che cosa desidera Davide alla fine?", "Perché non possono partire?"],
      },
      parla: ["Che cosa faresti se vincessi la lotteria?", "Dai un consiglio a un amico che vuole cambiare lavoro, con «se fossi in te».", "Che cosa cambieresti della tua città se fossi il sindaco?", "Racconta come sarebbe la tua vita se fossi nato in Italia."],
      role: ["L'IA ti propone una situazione ipotetica difficile: rispondi che cosa faresti.", "Spiega le conseguenze con il condizionale.", "Fai tu una domanda ipotetica all'IA."],
      dettato: ["se fossimo ricchi", "Se avessi tempo, verrei.", "Vorrei che tu capissi.", "come se fosse facile", "Magari piovesse!", "Se fossi in te…"],
      traduci: ["Non ho tempo, quindi non leggo. (periodo ipotetico)", "Al posto tuo telefonerei subito. (Se fossi…)", "Voglio che tu dica la verità. (più gentile, con vorrei)", "Fa il simpatico, ma non lo è. (come se)", "Speriamo che sia vero! (Magari…)", "Credevo: «Lui lavora qui». (Credevo che…)"],
      scrivi: { hint: "Rispondi a Giorgio (parte 6) come esperto della rubrica (150–180 parole): che cosa faresti al suo posto e perché. Usa almeno cinque periodi ipotetici.", start: "Caro Giorgio," },
    }),
  };
})();
