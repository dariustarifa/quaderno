// Unità 18 · Che cosa è successo? — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[18] = {
    n: 18,
    level: "A2",
    title: "Che cosa è successo?",
    goal: "Contar anécdotas y pequeños incidentes: qué pasó, cómo era la situación y cómo terminó.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a contar anécdotas: un robo, una caída, un malentendido, un día de mala suerte… con todos sus detalles.",
              "Gramática: cuándo usar passato prossimo y cuándo imperfetto en la misma historia, y los conectores para narrar (mentre, quando, all'improvviso, a un certo punto, alla fine).",
              "Es el punto más difícil del pasado italiano, pero funciona casi igual que «comí / comía» en español.",
            ],
          },
          {
            kind: "intro", title: "Mentre camminavo, ho visto…", hint: "Un adelanto: los dos pasados juntos",
            text: ["El imperfetto pinta la escena (qué pasaba, cómo era); el passato prossimo cuenta lo que pasó, la acción que avanza la historia.", "Es como en español: «Mientras caminaba (escena), vi a Marco (acción)»."],
            examples: [
              { it: "Mentre aspettavo l'autobus, ha cominciato a piovere.", es: "Mientras esperaba el autobús, empezó a llover." },
              { it: "Era tardi e non c'era nessuno: all'improvviso ho sentito un rumore.", es: "Era tarde y no había nadie: de repente oí un ruido." },
            ],
          },
          { kind: "speak", title: "Una cosa strana", hint: "Antes de empezar: ¿te ha pasado algo raro o divertido últimamente? Cuéntalo como puedas.", items: ["Una volta…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Incidenti e imprevisti", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "succedere", "cadere", "rompere", "rubare", "il ladro",
              "il portafoglio", "dimenticare", "accorgersi", "spaventarsi", "scivolare",
              "farsi male", "l'incidente", "la denuncia", "per fortuna", "purtroppo",
              "all'improvviso", "a un certo punto", "alla fine", "nel frattempo", "che figuraccia!",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Raccontare", hint: "Escribe en italiano.",
            items: ["de repente", "mientras", "en ese momento", "al final", "entonces / así que", "¿Qué pasó?", "por suerte", "por desgracia", "me di cuenta de que", "se me cayó el móvil", "perder las llaves", "llamar a la policía", "asustarse", "reírse mucho", "¡Qué vergüenza!"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: all'improvviso → All'improvviso è andata via la luce.", items: ["mentre", "all'improvviso", "è successo", "mi sono accorto / accorta", "ho rotto", "sono caduto / caduta", "per fortuna", "alla fine"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare con il ritmo giusto", hint: "La entonación de una historia",
            text: [
              "Cuando cuentas una historia, la voz se queda «suspendida» en la escena (imperfetto) y baja en la acción (passato prossimo): «Era tardi, pioveva… → e all'improvviso è entrato un uomo.»",
              "Las palabras de sorpresa se dicen con fuerza: «All'improvviso!», «Pensa che…», «Figurati!».",
              "Ojo con «è successo»: doble s y doble c → «suc-ces-so».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite con el mismo ritmo.", items: ["è successo, sono caduto, ho rotto", "Era sera, faceva freddo e non c'era nessuno.", "Mentre aspettavo il treno, ho visto un vecchio amico.", "All'improvviso è andata via la luce!", "Per fortuna non mi sono fatto male."] },
          { kind: "shadow", title: "Reazioni", hint: "Cuando alguien te cuenta algo, se reacciona. Repite con expresión.", items: ["Davvero? E poi?", "Ma dai! Non ci credo!", "Che sfortuna!", "Che figuraccia!", "Meno male!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Verbi di una storia", hint: "Verbos que aparecen en cualquier anécdota",
            text: [
              "Repasa los participios irregulares: rompere → rotto, succedere → successo, scoprire → scoperto, correre → corso, accorgersi → accorto.",
              "Con essere: cadere (sono caduto), succedere (è successo), scappare (è scappato) y los reflexivos (mi sono spaventato, mi sono fatto male).",
              "Ojo: «correre» usa avere si dices cuánto o dónde corriste en general («Ho corso un'ora») y essere si corres hacia un lugar («Sono corso a casa»).",
            ],
          },
          k.table("Imperfetto o passato?", [
            ["essere", "ero", ""],
            ["cadere", "", "sono caduto/a"],
            ["rompere", "", ""],
            ["succedere (lui)", "succedeva", ""],
            ["accorgersi", "", ""],
            ["scoprire", "", ""],
            ["fare", "", ""],
          ], "Completa la forma de io en imperfetto y en passato prossimo (para succedere, la de lui).", ["imperfetto", "passato prossimo"]),
          {
            kind: "fill", title: "Passato prossimo o imperfetto?", hint: "Completa con el tiempo correcto del verbo entre paréntesis.",
            items: [
              "Mentre ___ (io, fare) la doccia, ___ (suonare) il telefono.",
              "Ieri ___ (piovere) e io non ___ (avere) l'ombrello.",
              "Quando ___ (noi, arrivare) alla stazione, il treno ___ (partire) già.",
              "___ (essere) le tre di notte quando ___ (io, sentire) un rumore.",
              "Mia sorella ___ (cadere) dalla bici mentre ___ (tornare) a casa.",
              "Che cosa ___ (succedere)? Perché ___ (tu, piangere)?",
              "Il ladro ___ (scappare) mentre la polizia ___ (arrivare).",
              "Da bambino ___ (io, avere) un cane, ma un giorno ___ (scappare).",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Scena e azione", hint: "Cuándo usar cada pasado",
            text: [
              "Imperfetto: la escena y el fondo (descripción, hora, tiempo, edad, estado físico o de ánimo, acción en curso, costumbre).",
              "Passato prossimo: la acción concreta y terminada que hace avanzar la historia, sobre todo con «all'improvviso», «a un certo punto», «poi», «alla fine».",
              "Truco: si la pregunta es «¿qué pasaba / cómo era?», imperfetto. Si es «¿y entonces qué pasó?», passato prossimo.",
            ],
            table: {
              head: ["imperfetto", "passato prossimo"],
              rows: [["Era tardi.", "Ho chiuso la porta."], ["Pioveva.", "È arrivato un taxi."], ["Ero stanca.", "Sono andata a letto."], ["Mentre leggevo…", "…è suonato il campanello."]],
            },
          },
          {
            kind: "fill", title: "Una storia", hint: "Completa la historia con passato prossimo o imperfetto.",
            items: [
              "Sabato scorso ___ (essere) una bella giornata e ___ (fare) caldo.",
              "Così io e Marta ___ (decidere) di andare al lago.",
              "Mentre ___ (noi, mangiare) i panini, ___ (arrivare) un cane enorme.",
              "Il cane ___ (prendere) il mio panino e ___ (scappare)!",
              "Marta ___ (ridere) tantissimo, ma io ___ (avere) ancora fame.",
              "Alla fine un signore ci ___ (offrire) due pizzette. Che giornata!",
            ],
          },
          {
            kind: "intro", title: "Connettivi del racconto", hint: "Conectores para narrar",
            text: ["Para empezar: «Una volta», «L'altro giorno», «Sabato scorso». Para la escena: «Mentre», «Era…». Para el giro: «All'improvviso», «A un certo punto», «In quel momento». Para seguir: «Poi», «Dopo», «Allora», «Così». Para acabar: «Alla fine», «Per fortuna», «Purtroppo»."],
          },
          k.domanda(["È successo ieri sera, verso le dieci.", "Mi hanno rubato il portafoglio in metro.", "Ero con mia sorella.", "Sì, sono andato alla polizia.", "Mi sono accorta del furto solo a casa.", "No, per fortuna non mi sono fatta male."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: È successo ieri. → Quando è successo?"),
          k.negativa(["Me ne sono accorto subito.", "Il ladro è scappato.", "Faceva freddo.", "Ho rotto il bicchiere.", "Mi sono spaventata."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("In metro", "Una chica cuenta un robo a una amiga.", [
            { who: "Laura", text: "Non sai che cosa mi è successo stamattina!" },
            { who: "Paola", text: "Che cosa?" },
            { who: "Laura", text: "Ero in metro, alle otto. C'era tantissima gente e io leggevo un libro." },
            { who: "Laura", text: "A un certo punto un ragazzo mi ha chiesto l'ora. Io ho guardato il telefono e gli ho risposto." },
            { who: "Laura", text: "Quando sono scesa, ho aperto la borsa e… il portafoglio non c'era più!" },
            { who: "Paola", text: "Ma dai! E che cosa hai fatto?" },
            { who: "Laura", text: "Ho chiamato la banca e ho bloccato le carte. Poi sono andata a fare la denuncia. Per fortuna avevo solo venti euro." },
          ], ["Dov'era Laura e che cosa faceva?", "Com'era la metro?", "Che cosa le ha chiesto il ragazzo?", "Quando si è accorta del furto?", "Che cosa ha fatto dopo? Che cosa c'era nel portafoglio?"]),
          k.listen("Che figuraccia!", "Un chico cuenta un momento de vergüenza.", [
            { who: "Tommaso", text: "La settimana scorsa avevo un colloquio di lavoro importante. Ero nervosissimo." },
            { who: "Tommaso", text: "Nell'ascensore c'era un signore anziano che parlava al telefono a voce altissima. Io, stanco, gli ho detto: «Scusi, può parlare più piano?»" },
            { who: "Tommaso", text: "Lui mi ha guardato e non ha risposto. Poi sono entrato nella sala del colloquio e… chi c'era? Il signore dell'ascensore. Era il direttore!" },
            { who: "Tommaso", text: "Alla fine, però, ha riso e mi ha detto: «Ha ragione, parlo sempre troppo forte». E mi hanno preso!" },
          ], ["Perché Tommaso era nervoso?", "Chi c'era nell'ascensore? Che cosa faceva?", "Che cosa gli ha detto Tommaso?", "Chi era il signore?", "Com'è finita la storia?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il furto della Gioconda", [
            "Era il 21 agosto del 1911, un lunedì. Il Louvre di Parigi era chiuso e nelle sale c'erano solo gli operai e i custodi.",
            "Un uomo con il camice bianco, come gli altri operai, si è avvicinato alla Gioconda, l'ha staccata dal muro e l'ha nascosta sotto il camice. Poi è uscito tranquillamente dal museo.",
            "Il ladro si chiamava Vincenzo Peruggia ed era un imbianchino italiano che lavorava al Louvre. Secondo lui, la Gioconda era italiana e doveva tornare in Italia, il paese di Leonardo.",
            "Per due anni il quadro è rimasto nascosto in una valigia, a Parigi. Nel 1913 Peruggia è andato a Firenze e ha provato a venderlo alla Galleria degli Uffizi.",
            "Il direttore ha chiamato la polizia e Peruggia è stato arrestato. La Gioconda è tornata a Parigi, ma dopo il furto è diventata il quadro più famoso del mondo.",
          ], ["Che giorno era? Com'era il museo?", "Come ha fatto il ladro a portare via il quadro?", "Chi era Vincenzo Peruggia?", "Perché ha rubato la Gioconda?", "Dov'è rimasto il quadro per due anni? Che cosa è successo nel 1913?", "Che cosa è cambiato per la Gioconda dopo il furto?"]),
          k.spagna("¿Conoces algún robo famoso o una anécdota curiosa de la historia de España? Cuéntala con passato prossimo e imperfetto."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare e reagire", hint: "Contar y reaccionar",
            text: ["Para empezar una anécdota: «Sai che cosa mi è successo?», «Ti racconto una cosa incredibile».", "Para reaccionar: «Davvero?», «E poi?», «Ma dai!», «Che paura!», «Che sfortuna!», «Meno male!» (¡menos mal!), «Che figuraccia!» (¡qué vergüenza!)."],
          },
          k.rispondi(["Ti hanno mai rubato qualcosa? Che cosa è successo?", "Hai mai perso qualcosa di importante?", "Racconta una figuraccia che hai fatto.", "Ti sei mai fatto male? Come?", "Qual è stata la giornata più sfortunata della tua vita?", "Racconta una cosa bella e inaspettata che ti è successa."]),
          { kind: "speak", title: "Continua la storia", hint: "Continúa cada inicio con al menos 4 frases, mezclando imperfetto y passato prossimo.", items: ["Era mezzanotte e io ero solo in casa…", "Mentre facevo la spesa al supermercato…", "Ero in aereo e a un certo punto…", "Quella mattina mi sono svegliato tardi e…"] },
          {
            kind: "roleplay", title: "Alla polizia", hint: "Te han robado el bolso en un bar. Haces la denuncia. La IA hace de policía y te hará muchas preguntas. Usa «Lei».",
            steps: ["Explica qué ha pasado.", "Di dónde estabas, a qué hora y qué hacías.", "Describe a la persona sospechosa: cómo era y qué llevaba.", "Di qué había en el bolso.", "Pregunta qué tienes que hacer ahora."],
          },
          {
            kind: "roleplay", title: "Che ti è successo?", hint: "Llegas tarde a una cena con amigos. La IA hace de amigo y no se cree tu excusa. Es informal.",
            steps: ["Discúlpate por el retraso.", "Cuenta qué te ha pasado con detalles (escena + acciones).", "Tu amigo no se lo cree: añade más detalles.", "Al final confiesa la verdad… o mantén la historia.", "Proponed pedir ya la cena."],
          },
          { kind: "speak", title: "La mia storia", hint: "Cuenta durante un minuto y medio una anécdota real de tu vida, con principio, escena, giro y final.", items: ["Una volta…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Mientras volvía a casa, empezó a llover.", "¿Qué pasó ayer?", "Eran las tres de la mañana y todos dormían.", "Me di cuenta de que no tenía las llaves.", "Mi hermano se cayó y se rompió un brazo.", "De repente se fue la luz.", "Por suerte no me hice daño.", "Al final llegamos a tiempo."]),
          { kind: "write", title: "Una giornata da dimenticare", hint: "Cuenta un día en el que todo salió mal (real o inventado). Empieza describiendo la situación y cuenta qué pasó paso a paso. Entre 10 y 12 frases.", rows: 12, items: ["Era un lunedì…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: verbi", ["è successo", "sono caduta", "ho rotto", "mi sono accorto", "stavano", "scappava"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Mentre dormivo, è suonato il telefono.", "Che cosa è successo?", "All'improvviso è andata via la luce.", "Per fortuna non mi sono fatta male.", "Era tardi e non c'era nessuno."]),
          k.media([
            { type: "Serie", title: "Il commissario Montalbano", where: "RaiPlay", why: "Cada episodio es un caso: testigos que cuentan qué pasó, dónde estaban y qué hacían. Passato prossimo e imperfetto todo el rato." },
            { type: "Podcast", title: "Indagini (Stefano Nazzi, Il Post)", where: "Spotify, Apple Podcasts", why: "Podcast muy famoso sobre casos reales de la crónica italiana. Nivel alto, pero la narración es lenta y clara: escucha los primeros minutos." },
            { type: "Película", title: "Il ladro di bambini (Gianni Amelio, 1992)", where: "Busca dónde verla en JustWatch", why: "Un carabiniere acompaña a dos niños por Italia. Una historia de viaje llena de pequeños incidentes." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta el caso o la historia que has visto o escuchado: cuál era la situación y qué pasó.", items: ["Era… All'improvviso…"] },
        ],
      },
    ],

    exam: k.exam(18, {
      parole: ["succedere", "accorgersi", "scivolare", "farsi male", "il ladro", "la denuncia", "all'improvviso", "nel frattempo", "che figuraccia!", "per fortuna"],
      contrario: ["de repente", "mientras", "al final", "romper", "robar", "asustarse"],
      verbiHint: "Completa con la forma de io en imperfetto y en passato prossimo.",
      verbiCols: ["imperfetto", "passato prossimo"],
      verbi: [["cadere", "", ""], ["accorgersi", "", ""], ["scoprire", "", ""], ["dire", "", ""]],
      completaHint: "Completa con passato prossimo o imperfetto.",
      completa: ["Mentre ___ (noi, cenare), ___ (andare) via la luce.", "Quando Laura ___ (arrivare), io ___ (dormire) già.", "___ (essere) le sei e ___ (fare) buio.", "Il bambino ___ (piangere) perché ___ (cadere).", "Ieri ___ (io, rompere) il telefono: ___ (io, correre) e mi è caduto.", "Che cosa ___ (succedere) ieri sera?", "Non ___ (io, accorgersi) che il ladro mi ___ (seguire).", "Da piccola ___ (io, avere) paura dei cani."],
      trasformaHint: "Une cada pareja de frases en una sola con «mentre» o «quando», con el tiempo correcto.",
      trasforma: ["Guardo la tv. Suona il telefono.", "Arriviamo. Il film comincia già.", "Cammino in centro. Incontro Luca.", "Lei studia. Il fratello ascolta musica.", "Esco di casa. Comincia a piovere.", "Il ladro scappa. La polizia arriva."],
      leggi: {
        text: [
          "L'estate scorsa Giada era in vacanza in Sardegna con due amiche. Una sera erano in spiaggia e guardavano il tramonto.",
          "A un certo punto Giada si è accorta che il suo anello non c'era più: era l'anello della nonna. Le ragazze l'hanno cercato per un'ora nella sabbia, ma niente.",
          "Il giorno dopo un bambino che giocava con la sabbia ha trovato qualcosa che brillava: era l'anello. Sua madre l'ha portato al bar della spiaggia e Giada l'ha recuperato.",
        ],
        questions: ["Dov'era Giada e che cosa faceva?", "Che cosa ha perso? Perché era importante?", "Chi ha trovato l'anello? Come?", "Come l'ha recuperato Giada?"],
      },
      ascolta: {
        script: [
          { who: "Marco", text: "Scusate il ritardo! Non immaginate che cosa mi è successo." },
          { who: "Anna", text: "Che cosa?" },
          { who: "Marco", text: "Ero in autobus e leggevo. Quando ho alzato gli occhi, ero al capolinea, dall'altra parte della città!" },
          { who: "Anna", text: "Ma dai! E poi?" },
          { who: "Marco", text: "Non c'erano taxi, così ho preso un altro autobus. Ci ho messo un'ora." },
        ],
        questions: ["Che cosa faceva Marco in autobus?", "Dov'era quando ha alzato gli occhi?", "Perché non ha preso un taxi?", "Quanto tempo ci ha messo?"],
      },
      parla: ["Racconta una cosa che ti è successa la settimana scorsa.", "Racconta una figuraccia.", "Continua la storia: «Era una notte buia e tempestosa…»", "Spiega a un amico perché sei arrivato in ritardo."],
      roleHint: "Usa «Lei».",
      role: ["Has perdido la maleta en el aeropuerto: explica qué pasó.", "Describe la maleta y qué había dentro.", "Pregunta qué va a pasar ahora y deja tus datos."],
      dettato: ["Che cosa è successo?", "Mentre leggevo, ho sentito un rumore.", "Si è fatto male.", "All'improvviso ha cominciato a piovere.", "Non me ne sono accorta.", "Era mezzanotte."],
      traduci: ["Mientras hacía la compra, me robaron el móvil.", "Hacía mucho calor y no había nadie en la calle.", "¿Cuándo te diste cuenta?", "Se rompió el vaso mientras lo lavaba.", "De repente entró un hombre muy alto.", "Por suerte llegó la policía."],
      scrivi: { hint: "Cuenta (60–80 palabras) una anécdota divertida que te pasó de viaje: dónde estabas, qué pasaba y qué pasó.", start: "Una volta, in vacanza…" },
    }),
  };
})();
