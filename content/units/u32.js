// Unità 32 · Emozioni (repaso integrado de A2) — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[32] = {
    n: 32,
    level: "A2",
    title: "Emozioni",
    goal: "Expresar sentimientos y reacciones, describir el carácter y repasar toda la gramática de A2.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de emociones: cómo te sientes, qué te hace feliz o te enfada, cómo reaccionas, y a describir el carácter de las personas con más matices.",
              "Es la unidad de repaso de A2: vuelven el imperfetto y el passato prossimo, el futuro, el condizionale, el imperativo, los pronombres, ci y ne, y los comparativos.",
              "Si algo de aquí te cuesta, vuelve a su unidad antes del examen de nivel A2.",
            ],
          },
          {
            kind: "intro", title: "Mi fa arrabbiare", hint: "Un adelanto: hablar de emociones",
            text: ["«Mi fa + infinitivo» = me hace…: «Mi fa ridere» (me hace reír), «Mi fa arrabbiare» (me enfada), «Mi fa paura» (me da miedo).", "«Essere / sentirsi + adjetivo»: «Sono felice», «Mi sento solo»."],
            examples: [
              { it: "Quando qualcuno arriva in ritardo, mi fa arrabbiare.", es: "Cuando alguien llega tarde, me enfada." },
              { it: "Mi sento un po' giù oggi.", es: "Hoy estoy un poco de bajón." },
              { it: "Sono orgogliosa di te!", es: "¡Estoy orgullosa de ti!" },
            ],
          },
          { kind: "speak", title: "Come ti senti oggi?", hint: "Antes de empezar: ¿cómo te sientes hoy? ¿Por qué?", items: ["Oggi mi sento…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Emozioni", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "felice", "contento", "triste", "arrabbiato", "deluso",
              "geloso", "invidioso", "emozionato", "nervoso", "agitato",
              "orgoglioso", "imbarazzato", "annoiato", "sorpreso", "spaventato",
              "commosso", "di buon umore", "giù (di morale)", "la nostalgia", "la vergogna",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Il carattere", hint: "Escribe en italiano.",
            items: ["generoso", "tacaño", "paciente", "impaciente", "sincero", "mentiroso", "optimista", "pesimista", "sensible", "testarudo", "seguro de sí mismo", "inseguro", "cariñoso", "frío", "con sentido del humor"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: mi fa ridere → Mio fratello mi fa ridere sempre.", items: ["mi fa ridere", "mi fa arrabbiare", "sono deluso / delusa", "mi sento", "ho nostalgia di", "sono orgoglioso / orgogliosa di", "mi vergogno", "mi commuovo"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La voce delle emozioni", hint: "La entonación de las emociones",
            text: [
              "En italiano la entonación cambia mucho el sentido: «Bravo!» puede ser un elogio o una ironía. «Che bello!» puede ser alegría o fastidio.",
              "Exclamaciones útiles: «Che bello!», «Che peccato!» (¡qué pena!), «Che rabbia!», «Che schifo!» (¡qué asco!), «Che noia!», «Meno male!», «Mamma mia!».",
              "Los italianos acompañan las emociones con gestos: los verás en la lectura de la página 7.",
            ],
          },
          { kind: "shadow", title: "Esclamazioni", hint: "Repite cada exclamación con la emoción que corresponde.", items: ["Che bello! (felicità)", "Che peccato! (dispiacere)", "Che rabbia! (rabbia)", "Mamma mia! (sorpresa)", "Che noia! (noia)", "Meno male! (sollievo)"] },
          { kind: "shadow", title: "Frasi", hint: "Repite con la emoción de cada frase.", items: ["Ho passato l'esame! Non ci credo!", "Mi dispiace tanto per tuo nonno.", "Ma come ti permetti?", "Che vergogna, ho sbagliato nome!", "Mi manchi tantissimo."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso dei tempi di A2", hint: "Repaso de todos los tiempos de A2",
            text: [
              "Imperfetto: costumbres y descripciones en el pasado (ero, avevo, facevo). Passato prossimo: hechos (sono stato, ho fatto).",
              "Futuro: planes, predicciones, suposiciones (sarò, farò). Condizionale: cortesía, deseos, consejos (sarei, farei).",
              "Imperativo: tu (fa'!, non fare!), voi (fate!), Lei (faccia!). Stare + gerundio: acción en curso (sto facendo).",
            ],
          },
          k.table("Un verbo, tutti i tempi", [
            ["essere", "ero", "sono stato/a", "sarò", "sarei"],
            ["avere", "", "", "", ""],
            ["fare", "", "", "", ""],
            ["andare", "", "", "", ""],
            ["venire", "", "", "", ""],
            ["sentirsi", "", "", "", ""],
          ], "Completa con io en cada tiempo.", ["imperfetto", "passato", "futuro", "condizionale"]),
          {
            kind: "fill", title: "Il tempo giusto", hint: "Completa con el tiempo y el modo correctos.",
            items: [
              "Da piccola ___ (io, avere) paura del buio, ma adesso no.", "Ieri ___ (io, piangere) guardando un film.", "Domani ___ (io, essere) nervosissimo: ho un colloquio.", "Al posto tuo, ___ (io, parlare) con lei.", "Non ___ (tu, preoccuparsi): andrà tutto bene!", "Mentre ___ (noi, ridere), è entrato il professore.", "Mi ___ (piacere) tanto rivederti, un giorno.", "Shh, la bambina ___ (dormire). (stare + gerundio)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: pronomi, ci e ne", hint: "Repaso de pronombres",
            text: ["Directos: lo, la, li, le. Indirectos: gli, le, Le. Combinados: me lo, glielo. Lugar y «a eso»: ci. Cantidad y «de eso»: ne.", "Con las emociones aparecen mucho: «Mi manca», «Gli dispiace», «Non ci penso più», «Ne ho abbastanza!» (¡ya estoy harto!)."],
          },
          {
            kind: "fill", title: "Pronomi", hint: "Completa con el pronombre correcto.",
            items: ["Sono triste perché ___ manca la mia famiglia.", "Ho visto Giulia: ___ ho detto che sono orgoglioso di lei.", "La notizia? ___ ho saputa ieri.", "Basta, ___ ho abbastanza di questa situazione!", "Il regalo per Marco? ___ do stasera.", "Non pensare più al problema: non ___ pensare!"],
          },
          {
            kind: "intro", title: "Ripasso: confrontare", hint: "Repaso: comparativos",
            text: ["«Più / meno… di / che», «tanto… quanto», «il più…», «-issimo», «migliore / meglio», «peggiore / peggio»."],
          },
          {
            kind: "fill", title: "Confronti", hint: "Completa con di, che, quanto, migliore, meglio, peggio o -issimo.",
            items: ["Mio fratello è più paziente ___ me.", "È più facile ridere ___ piangere.", "Sono tanto felice ___ te.", "Oggi mi sento ___ di ieri: finalmente sto bene!", "È stato il giorno ___ della mia vita.", "Ero emozionat___ (muy) al matrimonio."],
          },
          k.domanda(["Mi fa arrabbiare la gente maleducata.", "Mi sento un po' giù.", "Ho nostalgia della mia città.", "Sì, le ho chiesto scusa.", "Mi commuovo con i film romantici.", "Mi sentirei più tranquillo con un lavoro fisso."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Mi fa ridere Luca. → Chi ti fa ridere?"),
          k.negativa(["Sono deluso.", "Mi fa paura.", "Gliel'ho detto.", "Ci penso spesso.", "Mi vergogno."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Una notizia inaspettata", "Dos hermanas hablan por teléfono.", [
            { who: "Marta", text: "Sei seduta? Devo darti una notizia." },
            { who: "Chiara", text: "Mi fai paura! Che cosa è successo?" },
            { who: "Marta", text: "Niente di brutto: aspetto un bambino!" },
            { who: "Chiara", text: "Ma dai! Che bello! Sono emozionatissima! Diventerò zia!" },
            { who: "Marta", text: "Sì! Nascerà a maggio. Io e Paolo siamo felicissimi, ma anche un po' agitati." },
            { who: "Chiara", text: "È normale. Lo sa già la mamma?" },
            { who: "Marta", text: "No, ancora no. Glielo diciamo domenica a pranzo. Non dirglielo tu, mi raccomando!" },
            { who: "Chiara", text: "Prometto! Ma come farò a stare zitta fino a domenica?" },
          ], ["Perché Chiara si spaventa all'inizio?", "Qual è la notizia?", "Come si sentono Marta e Paolo?", "Quando lo diranno alla mamma?", "Che cosa promette Chiara? Che problema avrà?"]),
          k.listen("Il carattere di mio padre", "Un chico describe a su padre.", [
            { who: "Tommaso", text: "Mio padre è una persona difficile da descrivere. Da una parte è generosissimo: aiuta tutti, anche gli sconosciuti." },
            { who: "Tommaso", text: "Dall'altra è testardo come un mulo: quando ha un'idea, non c'è modo di fargliela cambiare." },
            { who: "Tommaso", text: "Quando ero piccolo, mi faceva paura perché era molto severo. Adesso invece mi fa ridere: è diventato molto più dolce." },
            { who: "Tommaso", text: "Non dice mai «ti voglio bene», ma lo dimostra: ogni volta che torno a casa, mi prepara il mio piatto preferito." },
          ], ["Com'è il padre di Tommaso, da una parte?", "Che difetto ha?", "Come si sentiva Tommaso da piccolo? Perché?", "Com'è cambiato il padre?", "Come dimostra il suo affetto?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Parlare con le mani", [
            "Gli italiani sono famosi per i loro gesti: per molti stranieri, sembra che parlino più con le mani che con la voce. Alcuni studiosi dicono che ci sono più di duecentocinquanta gesti comuni.",
            "Il più famoso è la «mano a borsa»: le dita unite verso l'alto, la mano che si muove su e giù. Significa «Ma che cosa vuoi?» o «Ma che dici?», e si usa quando si è un po' irritati.",
            "Per dire che qualcosa è buonissimo si gira l'indice sulla guancia. Per dire «Me ne frego» si passa il dorso della mano sotto il mento. E per «Ho fame» si batte la mano sul fianco.",
            "Molti gesti servono a esprimere emozioni senza parole: rabbia, sorpresa, noia, ironia. Per questo, al telefono, un italiano gesticola anche se nessuno lo vede!",
            "Esistono anche gesti regionali: a Napoli c'è un vero e proprio vocabolario di gesti, nato forse quando nelle strade affollate era difficile farsi sentire.",
          ], ["Per che cosa sono famosi gli italiani?", "Com'è la «mano a borsa»? Che cosa significa?", "Come si dice che qualcosa è buonissimo?", "A che cosa servono molti gesti?", "Perché a Napoli, forse, ci sono così tanti gesti?", "Conosci altri gesti italiani? E spagnoli?"]),
          k.spagna("¿Los españoles gesticulan mucho? Describe tres gestos españoles y qué emoción expresan."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Reagire alle emozioni degli altri", hint: "Reaccionar a lo que sienten los demás",
            text: ["Ante una buena noticia: «Che bella notizia!», «Sono felicissimo per te!», «Te lo meriti!». Ante una mala: «Mi dispiace tanto», «Coraggio!», «Se hai bisogno, ci sono».", "Para preguntar: «Che cos'hai?» (¿qué te pasa?), «Tutto bene?», «Ti vedo giù…»."],
          },
          k.rispondi(["Che cosa ti fa ridere?", "Che cosa ti fa arrabbiare?", "Quando è stata l'ultima volta che ti sei commosso o commossa?", "Di che cosa hai nostalgia?", "Com'eri da bambino e come sei adesso?", "Che cosa ti renderebbe più felice?"]),
          { kind: "speak", title: "Reagisci", hint: "Reacciona a cada noticia con una exclamación y una frase completa.", items: ["Ho trovato lavoro a Roma!", "Il mio gatto è morto ieri.", "Mi sposo a settembre!", "Ho perso il portafoglio con tutti i documenti.", "Ho passato l'esame di guida al primo tentativo.", "Il mio migliore amico si trasferisce in Australia."] },
          {
            kind: "roleplay", title: "L'amico giù di morale", hint: "Un amigo está triste y no quiere contar por qué. La IA hace del amigo. Es informal.",
            steps: ["Pregúntale qué le pasa.", "Él no quiere hablar: insiste con delicadeza.", "Cuando te lo cuente, reacciona con empatía.", "Dale consejos (imperativo y condizionale).", "Propón un plan para animarle."],
          },
          {
            kind: "roleplay", title: "Chiarire un malinteso", hint: "Una compañera de trabajo está enfadada contigo por un malentendido. La IA hace de la compañera. Usa «tu».",
            steps: ["Pregúntale si está enfadada contigo.", "Escucha su versión.", "Explica qué pasó realmente (pasado).", "Pide perdón por lo que corresponda.", "Haced las paces y proponed algo para el futuro."],
          },
          { kind: "speak", title: "Ripasso A2", hint: "Habla dos minutos seguidos: cómo eras de pequeño, algo importante que te pasó, cómo te sientes ahora, qué planes tienes y qué te gustaría cambiar. Es todo A2 en una respuesta.", items: ["Da piccolo / piccola…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Me hace reír cuando imita a los profesores.", "Estaba muy nervioso antes del examen.", "Echo de menos a mi familia.", "Estoy orgullosa de ti.", "Si tienes un problema, llámame.", "Me gustaría ser más paciente.", "No te preocupes, todo saldrá bien.", "Ya estoy harto de esta situación."]),
          { kind: "write", title: "Una lettera", hint: "Escribe una carta (14–16 frases) a una persona importante de tu vida: recuerda un momento que vivisteis juntos (pasado), di qué sientes por ella ahora, qué te gustaría hacer con ella (condizionale) y qué haréis en el futuro.", rows: 16, items: ["Caro / Cara…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: emozioni", ["emozionatissima", "deluso", "orgoglioso", "la nostalgia", "imbarazzato", "giù di morale"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Mi fa arrabbiare.", "Sono felicissimo per te!", "Ne ho abbastanza!", "Mi manchi tanto.", "Che peccato!"]),
          k.media([
            { type: "Película", title: "La vita è bella (Roberto Benigni, 1997)", where: "Busca dónde verla en JustWatch", why: "Un padre convierte el horror de un campo de concentración en un juego para su hijo. Risa y lágrimas en la misma película." },
            { type: "Canción", title: "Vita spericolata, Vasco Rossi", where: "Spotify, YouTube", why: "Himno de 1983 sobre vivir con intensidad. Uno de los conciertos más cantados de Italia." },
            { type: "YouTube", title: "Gesti italiani", where: "YouTube", why: "Busca «gesti italiani» o «Italian hand gestures»: aprende cinco y úsalos al hablar." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué emociones viven los personajes de la película y en qué momentos.", items: ["All'inizio il protagonista è… Poi…"] },
        ],
      },
    ],

    exam: k.exam(32, {
      parole: ["deluso", "geloso", "commosso", "imbarazzato", "orgoglioso", "giù di morale", "la nostalgia", "testardo", "Che peccato!", "Meno male!"],
      contrario: ["tacaño", "paciente", "cariñoso", "inseguro", "la vergüenza", "sorprendido"],
      verbiHint: "Completa con io en cada tiempo.",
      verbiCols: ["imperfetto", "passato", "futuro", "condizionale"],
      verbi: [["avere", "", "", "", ""], ["fare", "", "", "", ""], ["volere", "", "", "", ""]],
      completaHint: "Completa con el tiempo correcto, un pronombre o un comparativo.",
      completa: ["Quando ___ (io, essere) piccolo, ___ (io, avere) paura dei cani.", "Ieri ___ (noi, ridere) tantissimo.", "Domani ___ (io, sentirsi) meglio, spero.", "Al posto tuo, non ___ (io, preoccuparsi).", "La verità? Non ___ ho ancora detta a Marco.", "Mi ___ molto i miei nonni. (mancare)", "È più facile arrabbiarsi ___ chiedere scusa.", "Oggi sto ___ di ieri."],
      trasformaHint: "Transforma cada frase como se indica entre paréntesis.",
      trasforma: ["Sono felice. (futuro)", "Mi arrabbio. (passato prossimo)", "Puoi aiutarmi? (más educado, condizionale)", "Non piangi! (imperativo negativo, tu)", "Ho detto la notizia a Luca. (con pronombre combinado)", "Ho due fratelli. (con ne)"],
      leggi: {
        text: [
          "Cara Giulia, ti scrivo da Londra. Sono qui da sei mesi e il lavoro va benissimo, ma a volte mi sento sola e ho tanta nostalgia di casa.",
          "Ieri ho trovato in un negozio italiano i biscotti che mangiavamo da bambine dalla nonna: mi sono commossa davanti a tutti! Che vergogna!",
          "A Natale tornerò a Bari per due settimane. Mi piacerebbe tanto passare una giornata con te al mare, come ai vecchi tempi. Ti voglio bene, Anna.",
        ],
        questions: ["Da quanto tempo Anna è a Londra? Come va il lavoro?", "Come si sente a volte?", "Che cosa è successo ieri?", "Che cosa le piacerebbe fare a Natale?"],
      },
      ascolta: {
        script: [
          { who: "Luca", text: "Che cos'hai? Ti vedo giù." },
          { who: "Sofia", text: "Non mi hanno presa per il lavoro. Ero sicura di farcela." },
          { who: "Luca", text: "Mi dispiace tantissimo. Ma sai che cosa ti dico? Troverai di meglio." },
          { who: "Sofia", text: "Lo spero. Adesso sono delusa e un po' arrabbiata con me stessa." },
          { who: "Luca", text: "Dai, stasera ti porto a mangiare la pizza. Non dire di no!" },
        ],
        questions: ["Come sta Sofia? Perché?", "Che cosa pensava prima?", "Come la consola Luca?", "Che cosa le propone?"],
      },
      parla: ["Racconta un momento molto felice della tua vita.", "Che cosa ti fa arrabbiare? Che cosa ti fa ridere?", "Descrivi il carattere di una persona che conosci bene.", "Che cosa faresti per cambiare l'umore di un amico triste?"],
      roleHint: "Es informal.",
      role: ["Un amigo te da una noticia muy buena: reacciona.", "Pregúntale cómo se siente y qué hará ahora.", "Propón celebrarlo."],
      dettato: ["Mi fa ridere.", "Sono orgogliosa di te.", "Ho nostalgia di casa.", "Non ce la faccio più!", "Mi dispiace tanto.", "Che bella notizia!"],
      traduci: ["Me da miedo volar.", "De pequeño era muy tímido.", "Estaré muy nerviosa el día de la boda.", "Yo en tu lugar le pediría perdón.", "¡No te enfades!", "Echamos de menos el mar."],
      scrivi: { hint: "Escribe (80–100 palabras) sobre un día en que sentiste una emoción muy fuerte: qué pasó, cómo te sentiste y qué aprendiste.", start: "Non dimenticherò mai il giorno in cui…" },
    }),
  };
})();
