// Unità 29 · Sport e benessere — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[29] = {
    n: 29,
    level: "A2",
    title: "Sport e benessere",
    goal: "Hablar de deporte, hábitos saludables y normas generales: qué se hace, qué hay que hacer y qué no se debe hacer.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de deporte y bienestar: qué deportes practicas, cómo te cuidas, las normas de un gimnasio o una piscina y los grandes deportes italianos.",
              "Gramática: el «si» impersonal (in Italia si mangia tardi), «bisogna» y otras formas de expresar obligación general (è necessario, è vietato, si deve).",
              "Funciona como el «se» impersonal español: «se come bien», «se dice que…».",
            ],
          },
          {
            kind: "intro", title: "Si mangia bene, bisogna correre", hint: "Un adelanto: el impersonal",
            text: ["«Si» + verbo en tercera persona habla de la gente en general: «In palestra si suda» (en el gimnasio se suda).", "«Bisogna» + infinitivo = hay que: «Bisogna bere molta acqua»."],
            examples: [
              { it: "In Italia si gioca molto a calcio.", es: "En Italia se juega mucho al fútbol." },
              { it: "Bisogna allenarsi con costanza.", es: "Hay que entrenar con constancia." },
              { it: "In piscina è obbligatorio usare la cuffia.", es: "En la piscina es obligatorio usar gorro." },
            ],
          },
          { kind: "speak", title: "Fai sport?", hint: "Antes de empezar: ¿haces deporte? ¿Cuál? ¿Cuántas veces a la semana?", items: ["Io faccio…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Sport", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "allenarsi", "l'allenamento", "l'allenatore", "la squadra", "la partita",
              "vincere / perdere", "pareggiare", "il campionato", "il tifoso", "lo stadio",
              "la palestra", "la piscina", "la corsa", "il ciclismo", "la pallavolo",
              "lo sci", "fare stretching", "sudare", "la cuffia", "lo spogliatoio",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Benessere", hint: "Escribe en italiano.",
            items: ["estar en forma", "adelgazar", "engordar", "la dieta equilibrada", "dormir bien", "el estrés", "relajarse", "la meditación", "dar un paseo", "subir escaleras", "el agua", "las verduras", "los dulces", "fumar", "sano"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: bisogna → Per stare bene bisogna dormire otto ore.", items: ["si mangia", "si fa", "bisogna", "è vietato", "ci si allena", "il tifoso", "stare in forma", "dimagrire"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Gol! Forza Italia!", hint: "El ritmo del deporte",
            text: [
              "Los comentaristas italianos de fútbol son famosos por su energía: alargan las vocales («Goool!») y repiten nombres. Imitar ese ritmo es un gran ejercicio de pronunciación.",
              "Palabras con sonidos difíciles: allenatore (al-le-na-tò-re), squadra (skuà-dra), pallavolo (pal-la-vò-lo), spogliatoio (spo-llia-tò-io).",
              "En «ci si allena», «ci si» se dice muy rápido y junto: «chisi-al-lè-na».",
            ],
            table: { head: ["", "suena"], rows: [["squadra", "skuà-dra"], ["spogliatoio", "spo-llia-tò-io"], ["pallavolo", "pal-la-vò-lo"], ["ci si allena", "chi-si-al-lè-na"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite.", items: ["allenatore, allenamento, allenarsi", "squadra, partita, campionato", "spogliatoio, pallavolo, piscina", "ci si allena, ci si diverte, ci si stanca"] },
          { kind: "shadow", title: "La telecronaca", hint: "¡Con energía de comentarista!", items: ["Palla a Rossi, che corre sulla destra…", "Passa al centro, tira… gol! Gol! Gol!", "Uno a zero per l'Italia al ventesimo minuto!", "La squadra sta giocando benissimo.", "Fischio finale: l'Italia vince!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il si impersonale", hint: "El «se» impersonal",
            text: [
              "«Si» + verbo en tercera persona singular para hablar de la gente en general: «In Spagna si cena tardi».",
              "Si el verbo tiene un objeto en plural, el verbo va en plural (es el «si» pasivo): «Si mangiano molte verdure», «Si vendono biglietti».",
              "Con un verbo reflexivo, «si si» se convierte en «ci si»: «Ci si allena», «Ci si diverte».",
              "Con essere + adjetivo, el adjetivo va en plural: «Quando si è stanchi, si dorme male».",
              "En el passato prossimo usa essere: «Si è mangiato bene», «Si è parlato molto».",
            ],
            table: { head: ["", "ejemplo"], rows: [["si + verbo", "si cammina molto"], ["si + verbo plural", "si fanno molti sport"], ["ci si + reflexivo", "ci si diverte"], ["si è + adj. plural", "si è contenti"]] },
          },
          k.table("Io, noi, si", [
            ["allenarsi", "mi alleno", "ci alleniamo", "ci si allena"],
            ["correre", "corro", "", ""],
            ["divertirsi", "", "", ""],
            ["fare sport", "", "", ""],
            ["essere stanco", "sono stanco", "siamo stanchi", ""],
            ["stancarsi", "", "", ""],
          ], "Completa: io, noi y la forma impersonal.", ["io", "noi", "impersonale"]),
          {
            kind: "fill", title: "Si fa così", hint: "Completa con la forma impersonal del verbo entre paréntesis (singular o plural, con «ci si» cuando haga falta).",
            items: [
              "In Italia ___ molto a calcio. (giocare)", "In palestra ___ asciugamani puliti. (usare)", "Al mare ___ bene: c'è aria pulita. (dormire)", "Con lo sport ___ e ___ amici. (divertirsi, fare)", "Dopo una maratona ___ stanchissimi. (essere)", "In montagna ___ presto la mattina. (alzarsi)", "Allo stadio ___ cori per la squadra. (cantare)", "Qui non ___ fumare. (potere)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Bisogna, è necessario, è vietato", hint: "Normas y obligaciones generales",
            text: [
              "«Bisogna» + infinitivo (hay que): «Bisogna fare la doccia prima di entrare in piscina». No cambia nunca.",
              "«È necessario / è importante / è meglio» + infinitivo: «È importante bere molto».",
              "«È vietato / è proibito» + infinitivo (está prohibido): «È vietato correre a bordo vasca». «È obbligatorio»: es obligatorio.",
              "«Si deve / non si deve» + infinitivo: «Non si deve mangiare prima di nuotare».",
            ],
          },
          {
            kind: "fill", title: "Le regole della piscina", hint: "Completa con bisogna, è vietato, è obbligatorio, si può o non si può.",
            items: ["___ fare la doccia prima di entrare in acqua.", "___ correre intorno alla vasca: si scivola!", "___ usare la cuffia.", "___ nuotare nella corsia veloce solo se sei bravo.", "___ mangiare negli spogliatoi.", "Per iscriversi ___ portare un certificato medico."],
          },
          {
            kind: "intro", title: "Consigli per stare bene", hint: "Dar consejos generales",
            text: ["Para consejos generales, sin hablar con nadie en concreto, se usa el impersonal o bisogna: «Per dormire bene bisogna spegnere il telefono», «Si dovrebbe camminare almeno trenta minuti al giorno»."],
          },
          k.domanda(["In Italia si gioca soprattutto a calcio.", "Bisogna portare la cuffia.", "Ci si allena tre volte alla settimana.", "Si mangia alle otto.", "È vietato fumare.", "Si vendono allo stadio."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Si mangia bene. → Come si mangia in questo ristorante?"),
          k.negativa(["Si fuma qui.", "Bisogna correre.", "Ci si diverte.", "Si può entrare.", "Si mangiano dolci."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il primo giorno in palestra", "Un entrenador explica las normas a un nuevo socio.", [
            { who: "Istruttore", text: "Benvenuto! Prima di cominciare ti spiego un po' di regole." },
            { who: "Istruttore", text: "Qui si entra solo con le scarpe da ginnastica pulite, e bisogna sempre portare un asciugamano." },
            { who: "Nicola", text: "E dopo gli esercizi?" },
            { who: "Istruttore", text: "Si puliscono gli attrezzi con lo spray. È una questione di rispetto." },
            { who: "Nicola", text: "Quante volte alla settimana dovrei venire?" },
            { who: "Istruttore", text: "All'inizio tre volte bastano. È meglio non esagerare: quando si è stanchi ci si fa male più facilmente." },
            { who: "Istruttore", text: "Ah, e nello spogliatoio è vietato usare il telefono per fare foto." },
          ], ["Come si entra in palestra?", "Che cosa bisogna sempre portare?", "Che cosa si fa dopo gli esercizi? Perché?", "Quante volte deve andare Nicola all'inizio? Perché non di più?", "Che cosa è vietato nello spogliatoio?"]),
          k.listen("Il tifoso", "Un aficionado habla de su equipo.", [
            { who: "Gennaro", text: "Io tifo Napoli da quando sono nato. A Napoli il calcio non è uno sport, è una religione." },
            { who: "Gennaro", text: "Quando si vince lo scudetto, si fa festa per settimane: si dipingono le strade d'azzurro e si suona il clacson tutta la notte." },
            { who: "Gennaro", text: "Allo stadio si canta per novanta minuti. Non ci si siede mai!" },
            { who: "Gennaro", text: "E quando si perde? Si soffre in silenzio… fino alla partita dopo." },
          ], ["Da quando tifa Napoli Gennaro?", "Che cos'è il calcio a Napoli, secondo lui?", "Che cosa si fa quando si vince lo scudetto?", "Che cosa si fa allo stadio?", "Che cosa succede quando si perde?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il Giro d'Italia", [
            "Dopo il calcio, uno degli sport più amati dagli italiani è il ciclismo. La sua festa più grande è il Giro d'Italia, una corsa a tappe che si fa ogni anno a maggio dal 1909.",
            "Per tre settimane i corridori attraversano tutto il paese: pianure, colline e le grandi salite delle Alpi e delle Dolomiti, dove si arriva a più di duemila metri.",
            "Il leader della classifica porta la maglia rosa. Il colore viene dalle pagine della Gazzetta dello Sport, il giornale sportivo che ha organizzato la prima edizione.",
            "Il giorno in cui il Giro passa da un paese, si fa festa: la gente aspetta ore sulla strada, si scrivono i nomi dei campioni sull'asfalto e si fanno picnic sui prati.",
            "Campioni come Fausto Coppi, Gino Bartali o Marco Pantani sono ancora oggi delle leggende. Per molti italiani il Giro è un modo per scoprire il proprio paese, tappa dopo tappa.",
          ], ["Quando si corre il Giro d'Italia? Da quando esiste?", "Che percorso fanno i corridori?", "Che cos'è la maglia rosa? Perché è rosa?", "Che cosa si fa quando il Giro passa da un paese?", "Chi sono alcuni campioni del passato?", "Ti piacerebbe vedere una tappa del Giro? Perché?"]),
          k.spagna("¿Qué deportes se siguen más en España? ¿Cómo se vive un partido importante? Usa el «si» impersonal."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di abitudini sane", hint: "Hablar de hábitos",
            text: ["Para hablar de tus hábitos: «Cerco di + infinitivo» (intento), «Ho smesso di…» (he dejado de), «Ho cominciato a…», «Mi sforzo di…» (me esfuerzo en).", "Para hablar en general: «Si dice che…», «In Spagna si…», «Secondo i medici, bisogna…»."],
          },
          k.rispondi(["Che sport fai o facevi da piccolo?", "Che cosa fai per stare in forma?", "Sei tifoso di qualche squadra?", "Che cosa si mangia di sano nel tuo paese?", "Che cosa bisogna fare per dormire bene, secondo te?", "Hai mai smesso di fare qualcosa di poco sano?"]),
          { kind: "speak", title: "Le regole", hint: "Di al menos tres normas para cada lugar, con bisogna, si deve, è vietato o non si può.", items: ["la piscina comunale", "una biblioteca", "un museo", "il treno", "la tua casa", "una lezione di yoga"] },
          {
            kind: "roleplay", title: "Il personal trainer", hint: "Vas por primera vez a un entrenador personal. La IA hace del entrenador y te hace preguntas. Usa «Lei».",
            steps: ["Explica qué objetivo tienes (adelgazar, correr una carrera…).", "Responde a sus preguntas sobre tus hábitos.", "Pregunta qué hay que hacer y qué no se debe hacer.", "Pregunta cuántas veces por semana hay que entrenar.", "Pregunta el precio y despídete."],
          },
          {
            kind: "roleplay", title: "La partita", hint: "Ves un partido en un bar con un aficionado italiano. La IA hace del aficionado. Es informal.",
            steps: ["Pregúntale de qué equipo es.", "Comenta lo que pasa en el partido.", "Pregúntale cómo se vive el fútbol en su ciudad.", "Habla de tu equipo o de un deporte que te guste.", "Celebrad el resultado (o consolaos)."],
          },
          { kind: "speak", title: "Il mio benessere", hint: "Habla durante un minuto y medio de cómo te cuidas: deporte, comida, sueño, estrés. Termina con tres consejos generales («bisogna…»).", items: ["Per stare bene io…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["En Italia se cena a las ocho.", "Hay que beber dos litros de agua al día.", "Está prohibido fumar en el gimnasio.", "Aquí uno se divierte mucho.", "Cuando uno está cansado, no se entrena bien.", "Se venden entradas en la taquilla.", "He dejado de comer dulces.", "Intento correr tres veces a la semana."]),
          { kind: "write", title: "Il regolamento", hint: "Escribe el reglamento (10–12 normas) de un lugar que conozcas: tu gimnasio, tu piso compartido, tu oficina… con el «si» impersonal, bisogna, è vietato y è obbligatorio.", rows: 12, items: ["Regolamento di…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: sport", ["l'allenatore", "lo spogliatoio", "la maglia rosa", "il campionato", "pareggiare", "la pallavolo"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Ci si allena ogni giorno.", "Bisogna bere molta acqua.", "È vietato correre.", "Si mangiano molte verdure.", "Quando si è stanchi, si dorme."]),
          k.media([
            { type: "Película", title: "Il campione (2019)", where: "Busca dónde verla en JustWatch", why: "Un joven futbolista rico y caprichoso de la Roma y su profesor particular. Fútbol, educación y amistad." },
            { type: "Serie", title: "Speravo de morì prima", where: "Sky, NOW", why: "Los últimos años de Francesco Totti en la Roma, con mucho humor y mucho romano." },
            { type: "YouTube", title: "Giro d'Italia", where: "YouTube", why: "Mira los resúmenes de alguna etapa de montaña: el comentario en italiano es rápido pero muy repetitivo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta cómo se vive el deporte en la película o en el vídeo: qué se hace, cómo se celebra, qué se siente.", items: ["Nel film si vede che…"] },
        ],
      },
    ],

    exam: k.exam(29, {
      parole: ["allenarsi", "pareggiare", "il tifoso", "lo spogliatoio", "la cuffia", "sudare", "lo scudetto", "la maglia rosa", "dimagrire", "è vietato"],
      contrario: ["el equipo", "el entrenamiento", "estar en forma", "engordar", "relajarse", "sano"],
      verbiHint: "Completa: io, noi y la forma impersonal.",
      verbiCols: ["io", "noi", "impersonale"],
      verbi: [["divertirsi", "", "", ""], ["vincere", "", "", ""], ["essere felice", "", "", ""], ["alzarsi", "", "", ""]],
      completaHint: "Completa con la forma impersonal, bisogna o è vietato.",
      completa: ["In Italia ___ molto caffè. (bere)", "In piscina ___ la doccia prima di entrare. (fare)", "Allo stadio ___ molto. (divertirsi)", "Quando ___ (essere) giovani, si ha molta energia.", "___ correre a bordo vasca.", "Per stare in forma ___ dormire bene.", "Al Giro ___ i nomi sulle strade. (scrivere)", "Ieri alla festa ___ benissimo. (mangiare, passato)"],
      trasformaHint: "Pasa cada frase a la forma impersonal con «si».",
      trasforma: ["La gente cena tardi.", "Noi facciamo molti sport.", "Tutti si divertono alla festa.", "Le persone vendono i biglietti online.", "Quando siamo stanchi, dormiamo male.", "In palestra usiamo gli asciugamani."],
      leggi: {
        text: [
          "Regolamento della piscina comunale: si entra solo con ciabatte e cuffia. Prima di entrare in acqua bisogna fare la doccia.",
          "È vietato correre a bordo vasca, tuffarsi nella corsia dei principianti e mangiare negli spogliatoi.",
          "Per iscriversi ai corsi è necessario un certificato medico. Gli armadietti si chiudono con un lucchetto personale.",
        ],
        questions: ["Come si entra in piscina?", "Che cosa bisogna fare prima di nuotare?", "Che cosa è vietato?", "Che cosa serve per iscriversi ai corsi?"],
      },
      ascolta: {
        script: [
          { who: "Medico", text: "Signor Bassi, deve cambiare qualche abitudine." },
          { who: "Sig. Bassi", text: "Ma io sto bene, dottore!" },
          { who: "Medico", text: "Il colesterolo è alto. Bisogna camminare almeno mezz'ora al giorno e mangiare meno formaggio." },
          { who: "Sig. Bassi", text: "E il vino?" },
          { who: "Medico", text: "Un bicchiere a cena si può bere. Ma le sigarette sono vietate." },
        ],
        questions: ["Qual è il problema del signor Bassi?", "Quanto deve camminare?", "Che cosa deve mangiare di meno?", "Che cosa può bere? Che cosa è vietato?"],
      },
      parla: ["Racconta che sport fai e quante volte.", "Spiega come si vive il calcio nel tuo paese con il si impersonale.", "Dai tre regole per una vita sana.", "Racconta un'abitudine che hai cambiato."],
      roleHint: "Usa «Lei».",
      role: ["Te inscribes en una piscina: pregunta las normas.", "Pregunta qué documentos hacen falta.", "Pregunta horarios y precio, y elige un curso."],
      dettato: ["Ci si diverte molto.", "Bisogna fare la doccia.", "È vietato fumare.", "Si vendono i biglietti.", "Quando si è stanchi.", "la maglia rosa"],
      traduci: ["En España se cena muy tarde.", "Hay que llevar gorro en la piscina.", "Uno se cansa mucho en la montaña.", "Se hacen muchos deportes en mi ciudad.", "Está prohibido hacer fotos.", "He empezado a ir al gimnasio."],
      scrivi: { hint: "Escribe (60–80 palabras) un texto para un blog: cómo se vive el deporte en tu ciudad y qué hay que hacer para estar en forma.", start: "Nella mia città si…" },
    }),
  };
})();
