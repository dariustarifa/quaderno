// Unità 47 · Cinema — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[47] = {
    n: 47,
    level: "B1",
    title: "Cinema",
    goal: "Parlare di film, raccontare trame e scrivere recensioni, usando il gerundio e il participio per frasi più compatte.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di cinema: generi, trame, attori e registi, e a scrivere una recensione. Scoprirai il neorealismo e la commedia all'italiana.",
              "Grammatica: il gerundio con valore di tempo, causa e modo («Uscendo dal cinema, ho incontrato Marco»), il gerundio passato («Avendo visto il film…») e il participio passato assoluto («Finito il film, siamo andati a cena»).",
              "Sono forme tipiche dello scritto, ma anche nel parlato rendono le frasi più eleganti.",
            ],
          },
          {
            kind: "intro", title: "Guardando il film…", hint: "Un'anticipazione: gerundio e participio",
            text: ["Il gerundio può sostituire una frase intera: «Mentre guardavo il film, ho pianto» → «Guardando il film, ho pianto».", "Il participio passato può indicare un'azione già conclusa: «Dopo che è finito il film» → «Finito il film»."],
            examples: [
              { it: "Uscendo dal cinema, abbiamo incontrato il regista.", es: "gerundio = mentre uscivamo" },
              { it: "Avendo letto il libro, conoscevo già il finale.", es: "gerundio passato = poiché avevo letto" },
              { it: "Spente le luci, il film è cominciato.", es: "participio = dopo che hanno spento le luci" },
            ],
          },
          { kind: "speak", title: "Il tuo film preferito", hint: "Prima di cominciare: qual è il tuo film preferito? Conosci qualche film italiano?", items: ["Il mio film preferito è…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il mondo del cinema", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il regista", "la sceneggiatura", "il protagonista", "l'attore non protagonista", "il cast",
              "la trama", "il finale a sorpresa", "il colpo di scena", "la colonna sonora", "la fotografia",
              "girare un film", "le riprese", "il doppiaggio", "i sottotitoli", "la prima",
              "il botteghino", "la recensione", "il capolavoro", "un film d'autore", "il genere",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "genere", title: "I generi",
            hint: "Scrivi a quale genere appartiene ogni descrizione (commedia, dramma, thriller, horror, fantascienza, documentario, film d'animazione, giallo…).",
            items: ["Ci sono mostri e si ha paura.", "Fa ridere.", "Si scopre chi è l'assassino.", "Racconta il futuro e lo spazio.", "Mostra fatti reali, senza attori.", "I personaggi sono disegnati.", "Una storia triste e seria.", "Tensione dall'inizio alla fine."],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni elemento. Dilla ad alta voce e scrivila. Esempio: guardando → Guardando quel film, ho capito molte cose sulla Sicilia.", items: ["guardando", "avendo visto", "finito il film", "la trama", "il colpo di scena", "la colonna sonora", "girare", "il capolavoro"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La voce del doppiaggio", hint: "Ascoltare il cinema",
            text: [
              "In Italia quasi tutti i film stranieri sono doppiati: i doppiatori italiani sono famosi e molto bravi. Per questo gli italiani sono abituati a un italiano «da film», molto chiaro e ben pronunciato.",
              "Per esercitarti, guarda una scena di un film italiano due volte: la prima con i sottotitoli in italiano, la seconda senza.",
              "Il gerundio ha l'accento sulla penultima sillaba: guar-dàn-do, scri-vèn-do, a-vèn-do vì-sto.",
            ],
          },
          { kind: "shadow", title: "Gerundi", hint: "Ripeti curando l'accento.", items: ["guardando, scrivendo, uscendo", "avendo visto, essendo arrivato", "facendo, dicendo, bevendo", "finito il film, spente le luci"] },
          { kind: "shadow", title: "Battute famose (in stile cinema)", hint: "Ripeti con l'interpretazione di un attore.", items: ["Marcello, come here!", "Non ci resta che piangere.", "Buongiorno, principessa!", "La vita è bella.", "Ladri di biciclette… e di sogni."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il gerundio", hint: "Forme e significati",
            text: [
              "Gerundio presente: -ando (-are), -endo (-ere, -ire): guardando, leggendo, partendo. Irregolari: facendo, dicendo, bevendo, ponendo, traducendo.",
              "Gerundio passato: avendo / essendo + participio: avendo visto, essendo partito/a.",
              "Significati: tempo (mentre / quando), causa (poiché), modo (come), mezzo (con che cosa), condizione (se). «Studiando, imparerai» = se studi, imparerai.",
              "Il soggetto del gerundio è di solito lo stesso della frase principale. I pronomi si attaccano: «Vedendolo», «Avendogli parlato».",
            ],
            table: { head: ["significato", "esempio"], rows: [["tempo", "Tornando a casa, ho visto Luca."], ["causa", "Essendo stanco, sono rimasto a casa."], ["modo", "È entrata correndo."], ["condizione", "Leggendo ogni giorno, migliorerai."]] },
          },
          k.table("Gerundio presente e passato", [
            ["vedere", "vedendo", "avendo visto"],
            ["fare", "", ""],
            ["uscire", "", "essendo uscito/a"],
            ["dire", "", ""],
            ["leggere", "", ""],
            ["arrivare", "", ""],
          ], "Completa con il gerundio presente e passato.", ["gerundio presente", "gerundio passato"]),
          {
            kind: "fill", title: "Usa il gerundio", hint: "Completa con il gerundio presente o passato del verbo tra parentesi.",
            items: [
              "___ (uscire) dal cinema, ho incontrato un attore famoso.", "___ (leggere) il libro prima, sapevo già come finiva il film.", "Si impara molto ___ (guardare) film in lingua originale.", "___ (essere) stanchi, siamo andati via prima della fine.", "La regista è entrata in sala ___ (sorridere).", "___ (arrivare) tardi, non abbiamo trovato posto.", "___ (fare) un po' di attenzione, avresti capito la trama.", "Ho conosciuto mia moglie ___ (lavorare) su un set.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il participio", hint: "Presente e passato",
            text: [
              "Participio presente (-ante, -ente): oggi si usa soprattutto come aggettivo o come nome: «un film divertente», «il cantante», «i partecipanti», «interessante».",
              "Participio passato assoluto: sostituisce una frase temporale o causale con un'azione conclusa: «Finito il film, siamo usciti» = Dopo che il film è finito… Concorda con il nome: «Finita la cena…», «Spente le luci…».",
              "Con i verbi transitivi il participio concorda con l'oggetto: «Visti i risultati, abbiamo deciso…».",
            ],
            table: { head: ["frase", "con il participio"], rows: [["Dopo che hanno spento le luci,…", "Spente le luci,…"], ["Dopo che ho finito i compiti,…", "Finiti i compiti,…"], ["Quando arrivò a Roma,…", "Arrivato a Roma,…"]] },
          },
          {
            kind: "fill", title: "Participio assoluto", hint: "Riscrivi la parte tra parentesi con un participio passato (attenzione alla concordanza).",
            items: ["(Dopo che è finito lo spettacolo) ___, siamo andati a cena.", "(Dopo che abbiamo visto il trailer) ___, abbiamo comprato i biglietti.", "(Quando è arrivata a Venezia) ___, l'attrice ha salutato i fan.", "(Dopo che hanno girato l'ultima scena) ___, gli attori hanno festeggiato.", "(Dopo che ha letto le recensioni) ___, ha deciso di non andarci.", "(Dopo che sono spente le luci) ___, il film è cominciato."],
          },
          {
            kind: "intro", title: "Raccontare una trama", hint: "Il presente narrativo",
            text: ["Le trame dei film si raccontano al presente: «Il film racconta la storia di…», «Il protagonista è un uomo che…», «A un certo punto scopre che…».", "Per la recensione: «La sceneggiatura è…», «Gli attori sono…», «Il punto forte / debole del film è…», «Lo consiglio a chi…»."],
          },
          k.negativa(["Mentre guardavo il film, mi sono addormentato.", "Poiché ero stanca, non sono uscita.", "Dopo che ho finito il libro, ho visto il film.", "Se studi ogni giorno, migliorerai.", "Dopo che è arrivato a Roma, ha cercato lavoro.", "Poiché avevamo visto il film, conoscevamo il finale."], "Trasforma ogni frase usando il gerundio (presente o passato) o il participio passato.", "con gerundio o participio"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Che film vediamo?", "Due amici scelgono un film per sabato sera.", [
            { who: "Paolo", text: "Sabato andiamo al cinema? Al Lux danno il nuovo film di Garrone." },
            { who: "Silvia", text: "Ho letto le recensioni: dicono che è bellissimo, ma molto lungo. Quasi tre ore!" },
            { who: "Paolo", text: "Essendo un film d'autore, è normale. Oppure c'è la commedia con Checco Zalone." },
            { who: "Silvia", text: "Mah, avendo visto il trailer, direi che fa ridere solo nei primi cinque minuti." },
            { who: "Paolo", text: "Allora Garrone. Uscendo dal cinema, andiamo a mangiare una pizza." },
            { who: "Silvia", text: "Perfetto. E compriamo i biglietti online: finiti i posti, non si entra." },
          ], ["Che film danno al Lux?", "Che cosa dicono le recensioni?", "Che alternativa propone Paolo?", "Perché Silvia non vuole vedere la commedia?", "Che cosa faranno dopo il film? Perché devono comprare i biglietti online?"]),
          k.listen("Intervista a una regista", "Una giovane regista parla del suo primo film alla radio.", [
            { who: "Giornalista", text: "Il suo film racconta la storia di tre sorelle in un paese della Basilicata. Com'è nata l'idea?" },
            { who: "Regista", text: "Pensando a mia nonna e alle sue sorelle. Crescendo, ho capito che le loro storie erano straordinarie." },
            { who: "Giornalista", text: "Ha lavorato con attori non professionisti?" },
            { who: "Regista", text: "Sì, quasi tutti. Avendo poco budget, ho scelto persone del paese. Recitando la loro vita, erano naturalissimi." },
            { who: "Giornalista", text: "E il finale, così aperto?" },
            { who: "Regista", text: "Finito il film, volevo che lo spettatore continuasse a pensare alle protagoniste." },
          ], ["Che storia racconta il film?", "Com'è nata l'idea?", "Con che attori ha lavorato? Perché?", "Perché gli attori erano naturali?", "Perché il finale è aperto?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il neorealismo", [
            "Finita la Seconda guerra mondiale, l'Italia era un paese distrutto e povero. Proprio in quegli anni nacque uno dei movimenti più importanti della storia del cinema: il neorealismo.",
            "I registi neorealisti, non avendo soldi per i grandi studi, giravano nelle strade vere delle città, con la luce naturale e spesso con attori non professionisti presi dalla gente comune.",
            "«Roma città aperta» di Roberto Rossellini, uscito nel 1945, racconta l'occupazione nazista di Roma. Fu girato mentre i segni della guerra erano ancora visibili.",
            "In «Ladri di biciclette» (1948) di Vittorio De Sica, un operaio disoccupato trova lavoro, ma gli rubano la bicicletta che gli serve per lavorare. Cercandola con il figlio per tutta Roma, scopre la disperazione della città.",
            "Il neorealismo influenzò registi di tutto il mondo, mostrando che il cinema poteva raccontare la vita vera delle persone semplici. Ancora oggi molti registi italiani si ispirano a quella lezione.",
          ], ["Quando e in che situazione nacque il neorealismo?", "Come lavoravano i registi neorealisti? Perché?", "Che cosa racconta «Roma città aperta»?", "Qual è la storia di «Ladri di biciclette»?", "Perché il neorealismo è stato importante?", "Trova nel testo tre gerundi e due participi assoluti."]),
          k.spagna("Parla di un film o di un regista importante del tuo paese: di che cosa parla, perché è famoso? Usa almeno tre gerundi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Consigliare (o sconsigliare) un film", hint: "Formule utili",
            text: ["Positivo: «È un film che ti tiene incollato alla poltrona», «La fotografia è stupenda», «Non te lo puoi perdere».", "Negativo: «È lento», «La trama è prevedibile», «Mi sono annoiato a morte», «Il finale mi ha deluso».", "Senza rovinare la sorpresa: «Non ti dico come finisce», «Niente spoiler!»."],
          },
          k.rispondi(["Che genere di film preferisci? Perché?", "Quali film italiani conosci? Che cosa ne pensi?", "Preferisci vedere i film al cinema o a casa?", "Guardi i film doppiati o in lingua originale?", "Qual è l'ultimo film che ti ha emozionato? Racconta la trama.", "Un buon film deve avere un finale chiaro o aperto?"]),
          { kind: "speak", title: "Racconta senza spoiler", hint: "Racconta l'inizio della trama di ogni film (o di un film a tua scelta dello stesso genere) senza rivelare il finale. Usa il presente e almeno un gerundio.", items: ["un film comico", "un thriller", "un film d'animazione", "un film storico", "un film d'amore"] },
          {
            kind: "roleplay", title: "Il festival di Venezia", hint: "Sei un giornalista alla Mostra del Cinema di Venezia. Intervisti un regista (l'IA) sul suo nuovo film.",
            steps: ["Chiedigli di che cosa parla il film.", "Chiedigli come è nata l'idea.", "Chiedigli come ha scelto gli attori.", "Chiedigli qualcosa sul finale (senza spoiler!).", "Ringrazia e saluta il pubblico."],
          },
          {
            kind: "roleplay", title: "Non siamo d'accordo", hint: "Uscendo dal cinema, tu e un amico (l'IA) avete opinioni opposte sul film.",
            steps: ["Di' che cosa ti è piaciuto.", "Ascolta le sue critiche.", "Difendi il film con esempi.", "Ammetti un difetto.", "Proponi il prossimo film da vedere insieme."],
          },
          { kind: "speak", title: "La mia recensione", hint: "Fai una recensione orale di due minuti di un film che hai visto: trama (senza spoiler), attori, regia, punti forti e deboli, voto da 1 a 10.", items: ["Il film di cui voglio parlare è…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Mentre tornavo a casa, ho pensato al film. (gerundio)", "Poiché era malato, l'attore non è venuto. (gerundio)", "Dopo che ha vinto l'Oscar, è diventato famosissimo. (participio)", "Se guardi film italiani, imparerai molto. (gerundio)", "Poiché avevo letto il libro, il film mi ha deluso. (gerundio passato)", "Dopo che è finita la cena, siamo andati al cinema. (participio)", "Il film fa ridere molto. (aggettivo in -ente)", "Le persone che partecipano al festival. (nome in -anti)"], "Riscrivi ogni frase come indicato tra parentesi."),
          { kind: "write", title: "La recensione", hint: "Scrivi la recensione (220–250 parole) di un film italiano che hai visto (anche uno consigliato in questo quaderno): trama al presente, regia, attori, punti forti e deboli, a chi lo consigli. Usa almeno tre gerundi e due participi.", rows: 18, items: ["Titolo del film:", "Recensione:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: gerundi e participi", ["guardando il film", "avendo letto il libro", "essendo arrivati tardi", "finito lo spettacolo", "spente le luci", "un film divertente"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Uscendo dal cinema, ho visto il regista.", "Finita la cena, siamo andati via.", "La trama è prevedibile.", "Niente spoiler, per favore!", "È un capolavoro del neorealismo."]),
          k.media([
            { type: "Film", title: "Ladri di biciclette (Vittorio De Sica, 1948)", where: "Cerca dove vederlo su JustWatch", why: "Il capolavoro del neorealismo di cui hai letto: breve, semplice e potentissimo." },
            { type: "Film", title: "La grande bellezza (Paolo Sorrentino, 2013)", where: "Cerca dove vederlo su JustWatch", why: "Premio Oscar: un giornalista mondano guarda Roma e la sua vita con malinconia. Visivamente spettacolare." },
            { type: "Film", title: "Nuovo Cinema Paradiso (Giuseppe Tornatore, 1988)", where: "Cerca dove vederlo su JustWatch", why: "Se non l'hai visto nell'unità 17, guardalo ora: è una lettera d'amore al cinema." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta la trama del film che hai visto usando il presente narrativo, almeno due gerundi e un participio assoluto.", items: ["Il film racconta la storia di…"] },
        ],
      },
    ],

    exam: k.exam(47, {
      parole: ["la sceneggiatura", "la colonna sonora", "il doppiaggio", "le riprese", "il botteghino", "il capolavoro", "il cast", "il finale a sorpresa", "un film d'autore", "la prima"],
      contrario: ["Fa ridere. → genere", "Si scopre l'assassino. → genere", "Mostra fatti reali. → genere", "Fa paura. → genere", "Racconta il futuro. → genere", "Storia seria e triste. → genere"],
      verbiHint: "Completa con il gerundio presente e passato.",
      verbiCols: ["gerundio presente", "gerundio passato"],
      verbi: [["bere", "", ""], ["partire", "", ""], ["scrivere", "", ""], ["tradurre", "", ""]],
      completaHint: "Completa con il gerundio (presente o passato) o con il participio passato.",
      completa: ["___ (tornare) dal cinema, abbiamo parlato del film.", "___ (perdere) il treno, siamo arrivati in ritardo.", "___ (finire) le riprese, il regista ha dato una festa.", "Si impara molto ___ (leggere) i sottotitoli.", "___ (vedere) i risultati, il produttore ha deciso di continuare.", "___ (essere) molto famosa, l'attrice non può uscire tranquilla.", "È un film molto ___ (divertire).", "___ (arrivare) a Cannes, la regista ha incontrato i giornalisti."],
      trasformaHint: "Trasforma ogni frase con il gerundio o con il participio assoluto.",
      trasforma: ["Mentre camminavo, ascoltavo la colonna sonora.", "Poiché non avevano soldi, giravano in strada.", "Dopo che è finito il film, è cominciato l'applauso.", "Se lavori molto, ce la farai.", "Poiché aveva vinto il premio, era felicissima.", "Dopo che hanno spento i telefoni, è cominciato lo spettacolo."],
      leggi: {
        text: [
          "«La vita è bella» di Roberto Benigni, uscito nel 1997, racconta la storia di Guido, un uomo ebreo di Arezzo che viene deportato in un campo di concentramento con il figlio piccolo.",
          "Per proteggerlo, Guido gli fa credere che tutto sia un gioco a premi: chi vince, riceverà un carro armato vero. Facendolo ridere, riesce a nascondergli l'orrore.",
          "Il film ha vinto tre premi Oscar, tra cui quello per il miglior attore. Ricevendo il premio, Benigni saltò sulle sedie del teatro per la gioia.",
        ],
        questions: ["Di che cosa parla «La vita è bella»?", "Che cosa fa credere Guido a suo figlio? Perché?", "Quanti Oscar ha vinto il film?", "Che cosa fece Benigni ricevendo il premio?"],
      },
      ascolta: {
        script: [
          { who: "Elena", text: "Hai visto il nuovo film di Sorrentino?" },
          { who: "Marco", text: "Sì, ieri sera. Uscendo, però, non sapevo se mi era piaciuto o no." },
          { who: "Elena", text: "Come mai?" },
          { who: "Marco", text: "La fotografia è stupenda, ma la trama è lentissima. Avendo dormito poco, a un certo punto mi sono addormentato!" },
        ],
        questions: ["Quando ha visto il film Marco?", "Che cosa pensava uscendo dal cinema?", "Che cosa gli è piaciuto e che cosa no?", "Perché si è addormentato?"],
      },
      parla: ["Racconta la trama del tuo film preferito senza spoiler.", "Fai una breve recensione orale di un film italiano.", "Preferisci il cinema d'autore o i film commerciali? Perché?", "Che cosa sai del neorealismo?"],
      role: ["L'IA è un amico che non sa che film vedere: consigliagliene uno.", "Racconta l'inizio della trama senza spoiler.", "Rispondi alle sue obiezioni."],
      dettato: ["guardando la televisione", "avendo visto il film", "finita la proiezione", "un attore emergente", "la colonna sonora", "Essendo tardi, siamo andati via."],
      traduci: ["Mentre leggevo, ascoltavo musica. (gerundio)", "Poiché era stanca, è andata via. (gerundio)", "Dopo che ha finito il libro, l'ha consigliato a tutti. (participio)", "Se ti alleni, vincerai. (gerundio)", "Il film fa paura. (aggettivo in -ante)", "Poiché aveva perso il lavoro, era preoccupato. (gerundio passato)"],
      scrivi: { hint: "Scrivi una breve recensione (150–180 parole) di un film che hai visto di recente, con almeno tre gerundi e due participi.", start: "Ho appena visto…" },
    }),
  };
})();
