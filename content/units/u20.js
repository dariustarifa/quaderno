// Unità 20 · Progetti — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[20] = {
    n: 20,
    level: "A2",
    title: "Progetti",
    goal: "Hablar de planes, propósitos y predicciones: qué harás mañana, el año que viene y dentro de diez años.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar del futuro: planes, propósitos de año nuevo, predicciones, el horóscopo y tus sueños a largo plazo.",
              "Gramática: el futuro semplice (andrò, farò, sarò), sus irregulares, cuándo se usa el presente para el futuro y el futuro para hacer suposiciones («Saranno le otto»).",
              "Como en español, el italiano hablado usa mucho el presente para planes cercanos: «Domani parto».",
            ],
          },
          {
            kind: "intro", title: "L'anno prossimo andrò…", hint: "Un adelanto: el futuro",
            text: ["El futuro italiano se parece mucho al español: «andrò» (iré), «farò» (haré), «sarò» (seré).", "La fuerza va siempre en la última sílaba con tu, io y lui: an-drò, an-drai, an-drà."],
            examples: [
              { it: "L'anno prossimo andrò a vivere a Bologna.", es: "El año que viene me iré a vivir a Bolonia." },
              { it: "Che cosa farai dopo la laurea?", es: "¿Qué harás después de la carrera?" },
              { it: "Domani pioverà al Nord.", es: "Mañana lloverá en el norte." },
            ],
          },
          { kind: "speak", title: "I tuoi progetti", hint: "Antes de empezar: ¿qué planes tienes para este año? Dilo como puedas, aunque sea en presente.", items: ["Quest'anno…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Progetti e futuro", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il progetto", "il sogno", "il buon proposito", "l'obiettivo", "prossimo",
              "fra / tra (due anni)", "in futuro", "un giorno", "prima o poi", "sperare",
              "pensare di", "avere intenzione di", "risparmiare", "trasferirsi", "laurearsi",
              "sposarsi", "andare in pensione", "cambiare vita", "l'oroscopo", "la previsione",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Quando?", hint: "Escribe en italiano.",
            items: ["mañana", "pasado mañana", "la semana que viene", "el mes que viene", "el año que viene", "dentro de tres días", "dentro de diez años", "pronto", "algún día", "tarde o temprano", "este verano", "cuando sea mayor", "nunca más", "seguramente", "quizás"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: tra → Tra due anni finirò l'università.", items: ["tra", "l'anno prossimo", "andrò", "sarà", "spero di", "ho intenzione di", "prima o poi", "quando avrò"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Andrò, farò, sarà", hint: "La fuerza al final",
            text: [
              "En el futuro, io y lui / lei llevan tilde y la fuerza va al final: andrò, farò, sarà, pioverà. Si no marcas esa fuerza, puede sonar a otra cosa: «parlo» (hablo) / «parlerò» (hablaré).",
              "Con noi, voi y loro la fuerza va antes: andremo (an-drè-mo), andrete (an-drè-te), andranno (an-dràn-no). Ojo a la doble n de loro.",
              "Algunos futuros pierden una vocal: andare → andrò, avere → avrò, potere → potrò, vedere → vedrò, vivere → vivrò.",
            ],
            table: { head: ["", "fuerza en"], rows: [["parlerò / parlerà", "-rò / -rà"], ["parleremo / parlerete", "-rè-"], ["parleranno", "-ràn-"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite. Marca la fuerza final.", items: ["andrò, andrai, andrà", "andremo, andrete, andranno", "sarò, avrò, farò, verrò", "potrò, dovrò, vorrò, saprò"] },
          { kind: "shadow", title: "Frasi", hint: "Repite con la misma melodía.", items: ["Domani sarà una bella giornata.", "L'anno prossimo andremo in Giappone.", "Quando avrò tempo, imparerò a suonare il piano.", "Che cosa farete quest'estate?", "Saranno le otto, più o meno."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il futuro semplice", hint: "Cómo se forma el futuro",
            text: [
              "Verbos regulares: se quita la -e final del infinitivo y se añade -ò, -ai, -à, -emo, -ete, -anno. En los verbos en -are, la a pasa a e: parlare → parlerò.",
              "Ortografía: -care / -gare añaden h (cercherò, pagherò); -ciare / -giare pierden la i (comincerò, mangerò).",
              "Irregulares: essere → sarò; avere → avrò; fare → farò; andare → andrò; venire → verrò; volere → vorrò; potere → potrò; dovere → dovrò; sapere → saprò; vedere → vedrò; bere → berrò; rimanere → rimarrò; vivere → vivrò; stare → starò; dare → darò.",
            ],
            table: {
              head: ["", "parlare", "prendere", "partire"],
              rows: [["io", "parlerò", "prenderò", "partirò"], ["tu", "parlerai", "prenderai", "partirai"], ["lui / lei", "parlerà", "prenderà", "partirà"], ["noi", "parleremo", "prenderemo", "partiremo"], ["voi", "parlerete", "prenderete", "partirete"], ["loro", "parleranno", "prenderanno", "partiranno"]],
            },
          },
          k.table("Tabella dei verbi", [
            ["essere", "sarò", "", "", "", "", ""],
            ["avere", "", "", "", "avremo", "", ""],
            ["fare", "", "", "", "", "", ""],
            ["venire", "verrò", "", "", "", "", ""],
            ["cercare", "", "cercherai", "", "", "", ""],
            ["mangiare", "", "", "", "", "", ""],
          ], "Completa la tabla en futuro."),
          {
            kind: "fill", title: "Che cosa succederà?", hint: "Completa con el futuro del verbo entre paréntesis.",
            items: [
              "L'anno prossimo io ___ a Milano. (trasferirsi)",
              "Domani ___ e ___ freddo. (piovere, fare)",
              "Quando ___ grande, Luca ___ il pilota. (essere, fare)",
              "Noi ___ in vacanza ad agosto. (andare)",
              "Voi ___ alla festa sabato? (venire)",
              "I miei genitori ___ in pensione tra due anni. (andare)",
              "Tu ___ la cena o la ___ io? (pagare, pagare)",
              "Non so se ___ tempo, ma ___ di venire. (avere, cercare)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Presente o futuro?", hint: "Cuándo se usa cada uno",
            text: [
              "Planes seguros y cercanos: casi siempre presente. «Domani vado dal dentista», «Stasera esco con Marta».",
              "Predicciones, intenciones a largo plazo, promesas, cosas inseguras: futuro. «Un giorno vivrò al mare», «Ti chiamerò, promesso!».",
              "Después de «quando», «se» y «appena» (en cuanto), si hablas del futuro, el italiano usa futuro en las dos partes: «Quando avrò tempo, verrò a trovarti» (en español: cuando tenga tiempo…).",
            ],
            examples: [
              { it: "Appena arriverò, ti scriverò.", es: "En cuanto llegue, te escribiré." },
              { it: "Se domani farà bel tempo, andremo al mare.", es: "Si mañana hace buen tiempo, iremos a la playa." },
            ],
          },
          {
            kind: "fill", title: "Quando, se, appena", hint: "Completa con el futuro.",
            items: ["Quando ___ (io, finire) l'università, ___ (io, viaggiare) per un anno.", "Se ___ (tu, studiare), ___ (tu, superare) l'esame.", "Appena ___ (noi, arrivare) a Roma, vi ___ (noi, chiamare).", "Quando ___ (loro, avere) i soldi, ___ (loro, comprare) una casa.", "Se ___ (piovere), ___ (noi, restare) a casa.", "Appena ___ (io, sapere) qualcosa, te lo ___ (io, dire)."],
          },
          {
            kind: "intro", title: "Il futuro per fare ipotesi", hint: "El futuro de suposición",
            text: ["Como en español («serán las ocho»), el futuro sirve para hacer suposiciones sobre el presente: «Dov'è Marco? — Sarà in ufficio» (estará en la oficina).", "Es muy frecuente en el italiano hablado: «Quanti anni avrà? — Avrà trent'anni»."],
            examples: [{ it: "Che ore sono? — Saranno le sei.", es: "¿Qué hora es? — Serán las seis." }],
          },
          k.domanda(["L'anno prossimo andrò in Australia.", "Partiremo il dieci luglio.", "Resterò tre mesi.", "Sarà a casa, credo.", "Sì, verremo con piacere.", "Quando finirò l'università."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Andrò in Italia. → Dove andrai?"),
          k.negativa(["Domani pioverà.", "Verrò alla festa.", "Avremo tempo.", "Lo farò domani.", "Andranno in pensione presto."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("I buoni propositi", "Tres amigos en la cena de Nochevieja hablan de sus propósitos.", [
            { who: "Giorgio", text: "Allora, quali sono i vostri buoni propositi per l'anno nuovo?" },
            { who: "Elisa", text: "Io smetterò di fumare. Questa volta davvero! E andrò in palestra tre volte alla settimana." },
            { who: "Giorgio", text: "Lo dici ogni anno!" },
            { who: "Elisa", text: "Sì, ma quest'anno ho un motivo: a giugno correrò la mezza maratona con mia sorella." },
            { who: "Carlo", text: "Io invece imparerò lo spagnolo. A settembre mi trasferirò a Valencia per lavoro." },
            { who: "Giorgio", text: "Davvero? Allora verremo tutti a trovarti! Io… io non farò buoni propositi: così non sarò deluso." },
          ], ["Che cosa farà Elisa?", "Perché quest'anno è diverso per lei?", "Che cosa farà Carlo? Perché?", "Che cosa faranno gli amici?", "Perché Giorgio non fa buoni propositi?"]),
          k.listen("L'oroscopo della settimana", "El horóscopo de la radio para Aries y Leo.", [
            { who: "Radio", text: "Ariete: questa settimana sarà piena di sorprese. Al lavoro avrete una proposta interessante, ma dovrete decidere in fretta." },
            { who: "Radio", text: "In amore, attenzione a mercoledì: potrete avere qualche discussione. Il fine settimana, invece, sarà perfetto per un viaggio." },
            { who: "Radio", text: "Leone: giorni un po' stanchi. Dormite di più e non spendete troppo: a fine mese arriverà una spesa imprevista." },
            { who: "Radio", text: "Ma niente paura: domenica incontrerete una persona speciale." },
          ], ["Che cosa succederà all'Ariete al lavoro?", "Che cosa succederà mercoledì?", "Com'è il fine settimana per l'Ariete?", "Che consigli dà l'oroscopo al Leone?", "Che cosa succederà domenica al Leone?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Partire o restare?", [
            "Ogni anno migliaia di giovani italiani partono per lavorare all'estero: Germania, Regno Unito, Spagna, Francia. I giornali la chiamano «fuga dei cervelli».",
            "Giulia, 27 anni, ingegnera di Bari, partirà per Monaco di Baviera a marzo. «In Italia ho mandato cento curriculum. Là lo stipendio sarà il doppio», spiega.",
            "Suo fratello Nicola, invece, resterà in Puglia. «Aprirò un agriturismo con mio padre. Sarà difficile, ma qui c'è la mia vita».",
            "Molti di quelli che partono dicono che un giorno torneranno. Ma non è facile: chi trova lavoro e famiglia all'estero spesso ci resta.",
            "Negli ultimi anni, però, qualcosa sta cambiando: con il lavoro da remoto alcuni giovani tornano nei paesi del Sud e lavorano per aziende di Milano o di Londra.",
          ], ["Che cos'è la «fuga dei cervelli»?", "Dove andrà Giulia? Perché?", "Che cosa farà Nicola?", "Tornano quelli che partono? Perché è difficile?", "Che cosa sta cambiando negli ultimi anni?", "E tu: partiresti o resteresti? Perché?"]),
          k.spagna("¿Pasa lo mismo con los jóvenes en España? ¿Te irías a vivir fuera? Usa el futuro para hablar de tus planes."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Fare progetti", hint: "Hablar de planes con matices",
            text: ["Seguro: «Sicuramente…», «Ho deciso di…». Probable: «Probabilmente…», «Penso di…». Deseo: «Spero di…», «Mi piacerebbe…». Duda: «Forse…», «Non so ancora se…».", "Con «pensare di», «sperare di», «avere intenzione di», «decidere di» va el infinitivo: «Spero di trovare lavoro»."],
            examples: [{ it: "Penso di cambiare lavoro l'anno prossimo.", es: "Pienso cambiar de trabajo el año que viene." }, { it: "Non so ancora se andrò in vacanza.", es: "Todavía no sé si me iré de vacaciones." }],
          },
          k.rispondi(["Che cosa fai questo fine settimana?", "Dove andrai in vacanza la prossima estate?", "Che cosa farai fra cinque anni?", "Hai dei buoni propositi per quest'anno?", "Dove ti piacerebbe vivere in futuro?", "Come sarà il mondo nel 2050, secondo te?"]),
          { kind: "speak", title: "Ipotesi", hint: "Responde haciendo una suposición con el futuro. Ejemplo: Dov'è Luca? → Sarà ancora in ufficio.", items: ["Perché Giulia non risponde al telefono?", "Quanti anni ha il professore?", "Di chi è questo ombrello?", "Che ore sono, più o meno?", "Perché c'è tanta gente in piazza?"] },
          {
            kind: "roleplay", title: "Organizziamo il viaggio", hint: "Planificáis con un amigo un viaje de una semana por Italia. La IA hace del amigo. Es informal.",
            steps: ["Propón la ruta: dónde iréis primero.", "Decidid cómo viajaréis y dónde dormiréis.", "Tu amigo propone un cambio: discútelo.", "Decidid qué haréis cada día.", "Repasad el plan final en futuro."],
          },
          {
            kind: "roleplay", title: "Il colloquio di orientamento", hint: "Hablas con un orientador laboral sobre tu futuro profesional. La IA hace del orientador. Usa «Lei».",
            steps: ["Explica qué estudias o en qué trabajas ahora.", "Di qué te gustaría hacer en el futuro.", "Responde a sus preguntas sobre tus planes a 5 años.", "Pregunta qué cursos o pasos te recomienda.", "Da las gracias y despídete."],
          },
          { kind: "speak", title: "Fra dieci anni", hint: "Habla un minuto y medio: ¿cómo será tu vida dentro de diez años? Trabajo, casa, familia, dónde vivirás y qué harás en tu tiempo libre.", items: ["Fra dieci anni…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["El año que viene viviré en Roma.", "¿Qué harás este verano?", "Cuando tenga dinero, me compraré una moto.", "Mañana lloverá en todo el país.", "En cuanto llegue, te llamo.", "¿Dónde está Marta? — Estará en el gimnasio.", "Espero encontrar trabajo pronto.", "Nunca más comeré tanto."]),
          { kind: "write", title: "Lettera a me stesso", hint: "Escribe una carta a ti mismo para leerla dentro de cinco años (10–12 frases): cómo crees que será tu vida, qué habrás conseguido, qué planes tienes y qué consejos te das.", rows: 12, items: ["Caro me / Cara me del futuro,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: futuro", ["andremo", "sarà", "avrete", "verranno", "potrò", "cercherai"], "Escucha y escribe el verbo."),
          k.dettato("Dettato: frasi", ["Domani pioverà.", "Che cosa farai l'anno prossimo?", "Quando avrò tempo, verrò.", "Saranno le dieci.", "Spero di vederti presto."]),
          k.media([
            { type: "Canción", title: "L'anno che verrà, Lucio Dalla", where: "Spotify, YouTube", why: "Canción de 1979 escrita como una carta a un amigo sobre cómo será el año nuevo. Llena de futuros." },
            { type: "Película", title: "La meglio gioventù (Marco Tullio Giordana, 2003)", where: "Busca dónde verla en JustWatch", why: "Dos hermanos y sus planes de vida, de los años 60 a los 2000. Larga, pero se puede ver por partes." },
            { type: "Podcast", title: "Podcast Italiano", where: "Spotify, YouTube", why: "Busca el episodio sobre el futuro y los planes o sobre los jóvenes italianos en el extranjero." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué planes tenía un personaje y qué crees que le pasará después.", items: ["Secondo me, in futuro…"] },
        ],
      },
    ],

    exam: k.exam(20, {
      parole: ["il buon proposito", "prima o poi", "trasferirsi", "laurearsi", "risparmiare", "andare in pensione", "appena", "avere intenzione di", "l'oroscopo", "fra due anni"],
      contrario: ["el año que viene", "dentro de un mes", "algún día", "tarde o temprano", "quizás", "pasado mañana"],
      verbiHint: "Completa la tabla en futuro.",
      verbi: [["andare", "", "", "", "", "", ""], ["bere", "", "", "", "", "", ""], ["rimanere", "", "", "", "", "", ""]],
      completaHint: "Completa con el futuro o el presente, según el sentido.",
      completa: ["Quando ___ (io, avere) trent'anni, ___ (io, vivere) al mare.", "Stasera ___ (io, uscire) con Marta: abbiamo già i biglietti.", "Se ___ (voi, venire) a Roma, ___ (voi, dormire) da noi.", "Dov'è Paolo? — ___ (essere) ancora in palestra.", "Appena ___ (noi, sapere) il risultato, vi ___ (noi, scrivere).", "Domani ___ (fare) caldo al Sud.", "Non so se ___ (io, potere) venire.", "Tu ___ (pagare) il conto, va bene?"],
      trasformaHint: "Pasa cada frase al futuro y añade la expresión entre paréntesis.",
      trasforma: ["Vado a Parigi. (l'anno prossimo)", "Facciamo una festa. (sabato prossimo)", "Sono in ritardo. (domani)", "Vengono a trovarci. (fra due settimane)", "Cominci un nuovo lavoro. (a gennaio)", "Ho più tempo. (in estate)"],
      leggi: {
        text: [
          "Marco e Sara si sposeranno il 14 giugno in un piccolo paese della Toscana. La cerimonia sarà in una chiesa del Duecento e la festa in un agriturismo con vista sulle colline.",
          "Ci saranno ottanta invitati. I parenti di Sara arriveranno dalla Sicilia due giorni prima, e molti amici dormiranno nell'agriturismo.",
          "Dopo il matrimonio, gli sposi partiranno per il Giappone. «Resteremo tre settimane», dice Sara, «e quando torneremo cercheremo casa a Firenze».",
        ],
        questions: ["Quando e dove si sposeranno Marco e Sara?", "Dove sarà la festa?", "Quando arriveranno i parenti di Sara?", "Che cosa faranno dopo il matrimonio e dopo il viaggio?"],
      },
      ascolta: {
        script: [
          { who: "Anna", text: "Allora, hai deciso? Che cosa farai dopo la maturità?" },
          { who: "Filippo", text: "Mi iscriverò a medicina a Padova. Se non passerò il test, farò un anno in Irlanda per imparare l'inglese." },
          { who: "Anna", text: "E i tuoi che cosa dicono?" },
          { who: "Filippo", text: "Mia madre spera di vedermi medico, come lei. Mio padre dice che deciderò io." },
        ],
        questions: ["Che cosa farà Filippo dopo la maturità?", "Che cosa farà se non passerà il test?", "Che cosa spera la madre? Perché?", "Che cosa dice il padre?"],
      },
      parla: ["Racconta i tuoi progetti per i prossimi cinque anni.", "Che cosa farai il prossimo fine settimana?", "Fai tre previsioni su come sarà il mondo nel 2050.", "Rispondi con un'ipotesi: «Perché Marta non è venuta?»"],
      roleHint: "Es informal.",
      role: ["Un amigo te propone un viaje: pregunta adónde iréis y cuándo.", "No puedes en esas fechas: propón otras.", "Decidid juntos el plan final en futuro."],
      dettato: ["L'anno prossimo andrò in Cina.", "Che cosa farete?", "Quando avrò tempo.", "Sarà a casa.", "Domani nevicherà.", "Spero di vincere."],
      traduci: ["El mes que viene empezaré un curso de cocina.", "Si mañana hace sol, iremos a la playa.", "¿Cuántos años tendrá?", "En cuanto termine, te ayudo.", "Mis padres se jubilarán dentro de dos años.", "Algún día viviré en Italia."],
      scrivi: { hint: "Escribe (60–80 palabras) tus propósitos para el año que viene: tres cosas que harás, una que no harás nunca más y por qué.", start: "L'anno prossimo…" },
    }),
  };
})();
