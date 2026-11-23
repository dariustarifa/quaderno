// Unità 24 · La città e il paese — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[24] = {
    n: 24,
    level: "A2",
    title: "La città e il paese",
    goal: "Comparar lugares, cosas y personas: la ciudad y el pueblo, el norte y el sur, antes y ahora.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a comparar: la vida en la ciudad y en el pueblo, dos ciudades, dos épocas, dos personas, y a decir qué es lo mejor, lo peor o lo más bonito.",
              "Gramática: los comparativos (più… di / che, meno… di, tanto… quanto), los superlativos (il più bello, bellissimo) y las formas irregulares (migliore, peggiore, meglio, peggio).",
              "Hay una trampa clásica: cuándo se dice «di» y cuándo «che». La verás en la página 5.",
            ],
          },
          {
            kind: "intro", title: "Più grande di, bellissimo", hint: "Un adelanto: comparar",
            text: ["«Più» es más y «meno» es menos. El segundo término va con «di» (más alto que Marco → più alto di Marco).", "Para «muy» se puede añadir -issimo: bello → bellissimo, caro → carissimo."],
            examples: [
              { it: "Milano è più grande di Bologna.", es: "Milán es más grande que Bolonia." },
              { it: "In paese la vita è meno cara che in città.", es: "En el pueblo la vida es menos cara que en la ciudad." },
              { it: "Questo borgo è bellissimo!", es: "¡Este pueblo es bonitísimo!" },
            ],
          },
          { kind: "speak", title: "Città o paese?", hint: "Antes de empezar: ¿vives en una ciudad o en un pueblo? ¿Qué prefieres? Dilo como puedas.", items: ["Io abito in…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Città e paese", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il paese", "il borgo", "la frazione", "il capoluogo", "la periferia",
              "il centro storico", "gli abitanti", "il traffico", "l'inquinamento", "il rumore",
              "i servizi", "i mezzi pubblici", "la campagna", "la collina", "il lago",
              "spopolarsi", "trasferirsi", "vivace", "tranquillo", "isolato",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Aggettivi per confrontare", hint: "Escribe en italiano.",
            items: ["caro", "barato", "ruidoso", "seguro", "peligroso", "contaminado", "limpio", "sucio", "moderno", "antiguo", "aburrido", "animado", "cómodo", "lento", "estresante"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: più… di → Roma è più caotica di Firenze.", items: ["più… di", "meno… che", "tanto… quanto", "il più bello", "migliore", "meglio", "carissimo", "peggio"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "-issimo e l'enfasi", hint: "Superlativos con emoción",
            text: [
              "El superlativo en -issimo lleva la fuerza en -ìs-: bel-lìs-si-mo, ca-rìs-si-mo, buo-nìs-si-mo. La doble s se alarga.",
              "Los italianos lo usan con mucha emoción. También repiten el adjetivo: «bello bello» = bellissimo; «piano piano» = muy despacio.",
              "En las comparaciones, la fuerza va en el adjetivo: «è PIÙ BELLA di Roma».",
            ],
            table: { head: ["", "suena"], rows: [["bellissimo", "bel-lìs-si-mo"], ["buonissimo", "buo-nìs-si-mo"], ["tantissimo", "tan-tìs-si-mo"], ["piccolissimo", "pic-co-lìs-si-mo"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite con entusiasmo.", items: ["bellissimo, buonissimo, carissimo", "pochissimo, tantissimo, lunghissimo", "migliore, peggiore, maggiore, minore", "meglio, peggio, benissimo, malissimo"] },
          { kind: "shadow", title: "Frasi", hint: "Repite con la misma melodía.", items: ["Roma è più caotica di Milano.", "In paese si vive meglio che in città.", "Il traffico è peggiore la mattina.", "È il borgo più bello d'Italia!", "Questa pizza è buonissima."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Buono, migliore, meglio", hint: "Comparativos irregulares",
            text: [
              "Adjetivos: buono → migliore (mejor) → il migliore / ottimo; cattivo → peggiore → il peggiore / pessimo; grande → maggiore (mayor, de edad) ; piccolo → minore (menor). También se puede decir «più buono», «più grande».",
              "Adverbios: bene → meglio (mejor) → benissimo; male → peggio (peor) → malissimo.",
              "Truco: si en español dices «mejor» con un verbo (vivo mejor), es «meglio». Si va con un nombre (un trabajo mejor), es «migliore».",
            ],
            table: { head: ["", "comparativo", "superlativo"], rows: [["buono", "migliore", "ottimo / il migliore"], ["cattivo", "peggiore", "pessimo / il peggiore"], ["bene", "meglio", "benissimo"], ["male", "peggio", "malissimo"]] },
          },
          {
            kind: "intro", title: "Verbi per cambiare vita", hint: "Verbos para hablar de mudanzas",
            text: ["Trasferirsi (mudarse de ciudad), traslocare (hacer la mudanza), spostarsi (desplazarse), crescere (crecer), diventare (convertirse en), migliorare, peggiorare.", "Diventare, crescere y peggiorare (cuando no tienen objeto) usan essere en el pasado: «Il paese è diventato più tranquillo»."],
          },
          k.table("Tabella dei verbi", [
            ["trasferirsi", "mi trasferisco", "mi sono trasferito/a"],
            ["diventare", "", ""],
            ["crescere", "", "sono cresciuto/a"],
            ["migliorare", "", ""],
            ["spostarsi", "", ""],
          ], "Completa el presente (io) y el passato prossimo (io).", ["presente (io)", "passato (io)"]),
          {
            kind: "fill", title: "Migliore o meglio?", hint: "Completa con migliore, migliori, meglio, peggiore, peggiori o peggio.",
            items: ["In campagna si dorme ___ che in città.", "Questo ristorante è il ___ della zona.", "Oggi il traffico va ___ di ieri: siamo arrivati tardissimo!", "Napoli ha la pizza ___ d'Italia, dicono i napoletani.", "Sto ___, grazie: la febbre è passata.", "I mezzi pubblici di questa città sono i ___ del paese: sempre in ritardo."],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Di o che?", hint: "La trampa: «di» o «che»",
            text: [
              "«Di» cuando comparas dos personas o cosas con un adjetivo o un verbo: «Milano è più cara di Napoli», «Marco lavora più di me».",
              "«Che» cuando comparas dos adjetivos, dos verbos, dos cantidades o dos elementos con preposición: «È più bella che utile», «Mi piace più leggere che guardare la tv», «Ci sono più turisti che abitanti», «Si vive meglio in paese che in città».",
              "Igualdad: «tanto… quanto» o «così… come»: «Firenze è (tanto) bella quanto Roma».",
            ],
            table: { head: ["", "ejemplo"], rows: [["di", "Roma è più grande di Torino."], ["che", "È più facile scrivere che parlare."], ["che", "Ci sono più bar che negozi."], ["quanto", "È tanto simpatico quanto suo fratello."]] },
          },
          {
            kind: "fill", title: "Di o che?", hint: "Completa con di (o di + artículo) o che.",
            items: ["Torino è più tranquilla ___ Milano.", "In estate ci sono più turisti ___ abitanti.", "È più comodo andare in bici ___ in macchina.", "Mio fratello è più alto ___ me.", "La vita in campagna è più sana ___ stressante.", "Il treno è più veloce ___ autobus.", "Preferisco vivere al mare ___ in montagna.", "Qui gli affitti sono meno cari ___ centro."],
          },
          {
            kind: "intro", title: "Il superlativo", hint: "El más… / muy…",
            text: ["Relativo: artículo + più / meno + adjetivo + di: «È la città più bella d'Italia», «È il quartiere meno caro della città».", "Absoluto: -issimo o «molto»: «bellissimo», «molto bello». Algunos tienen forma propia: ottimo, pessimo, massimo, minimo."],
          },
          k.domanda(["Firenze è più piccola di Roma.", "Preferisco vivere in campagna.", "Il quartiere più tranquillo è Monteverde.", "Sì, si vive meglio che a Milano.", "Il paese ha duemila abitanti.", "Perché è meno cara e più tranquilla."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Roma è più grande. → Quale città è più grande?"),
          k.negativa(["Napoli è più caotica di Bari.", "Si vive meglio in città.", "È il ristorante migliore della zona.", "Il traffico è peggiorato.", "Mi piace più il mare che la montagna."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Milano o il paese?", "Dos amigos discuten dónde es mejor vivir.", [
            { who: "Federico", text: "Ho deciso: lascio Milano e torno al mio paese in Umbria. Lavoro da casa, quindi posso vivere dove voglio." },
            { who: "Serena", text: "Sei sicuro? A Milano c'è tutto: cinema, teatri, ristoranti, mostre…" },
            { who: "Federico", text: "Sì, ma l'affitto qui è tre volte più caro che lì, e c'è più traffico che in qualsiasi altra città." },
            { who: "Serena", text: "Però al paese ti annoierai. Quanti abitanti ha?" },
            { who: "Federico", text: "Milleduecento. È piccolissimo, ma è il posto più bello del mondo: colline, silenzio, aria pulita." },
            { who: "Serena", text: "E se ti serve un ospedale? O un treno?" },
            { who: "Federico", text: "Il treno più vicino è a venti minuti. Non è perfetto, ma per me si vive meglio lì che qui." },
          ], ["Dove vuole andare a vivere Federico? Perché può farlo?", "Che cosa c'è a Milano, secondo Serena?", "Quanto costa l'affitto a Milano rispetto al paese?", "Quanti abitanti ha il paese? Com'è?", "Quali sono gli svantaggi del paese?"]),
          k.listen("Due città", "Una chica española compara dos ciudades donde ha vivido.", [
            { who: "Nerea", text: "Ho vissuto un anno a Torino e un anno a Palermo, e sono due mondi diversi." },
            { who: "Nerea", text: "Torino è più ordinata e più tranquilla: i mezzi pubblici funzionano meglio e la gente è più riservata." },
            { who: "Nerea", text: "Palermo è più caotica, ma anche più vivace. La gente è più aperta e il cibo di strada è il migliore che ho mai mangiato." },
            { who: "Nerea", text: "D'inverno a Torino fa molto più freddo che a Palermo. Ma a Palermo d'estate si muore di caldo!" },
            { who: "Nerea", text: "Quale preferisco? Per lavorare Torino, per vivere Palermo." },
          ], ["Dove ha vissuto Nerea?", "Com'è Torino rispetto a Palermo?", "Che cosa le piace di Palermo?", "Dove fa più freddo? E più caldo?", "Quale città preferisce? Per che cosa?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I borghi che si svuotano", [
            "L'Italia ha migliaia di piccoli paesi, chiamati borghi: alcuni sono tra i luoghi più belli d'Europa, con case di pietra, castelli e piazze medievali.",
            "Molti, però, si svuotano: i giovani partono per studiare e lavorare nelle città più grandi, e restano soprattutto gli anziani. In alcuni paesi ci sono più gatti che abitanti!",
            "Per questo diversi comuni, soprattutto in Sicilia, Sardegna e Abruzzo, hanno messo in vendita vecchie case a un euro. Chi le compra deve ristrutturarle entro pochi anni.",
            "Dopo la pandemia, con il lavoro da remoto, alcune persone hanno scelto di vivere nei borghi: la vita è meno cara, più lenta e più a contatto con la natura.",
            "Ma i problemi restano: meno servizi, meno trasporti e connessioni internet a volte peggiori che in città. Il futuro dei borghi è una delle sfide più grandi del paese.",
          ], ["Che cosa sono i borghi? Come sono?", "Perché molti si svuotano? Chi resta?", "Che cosa hanno fatto alcuni comuni? Che cosa deve fare chi compra?", "Perché alcune persone sono andate a vivere nei borghi dopo la pandemia?", "Quali problemi ci sono?", "Andresti a vivere in un borgo? Perché?"]),
          k.spagna("¿Pasa lo mismo con los pueblos en España? Compara la vida en una ciudad española y en un pueblo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Esprimere preferenze", hint: "Dar tu opinión comparando",
            text: ["«Per me…», «Secondo me…», «Preferisco… perché…», «Da una parte… dall'altra…» (por un lado… por otro), «Il vantaggio è che…, lo svantaggio è che…»."],
          },
          k.rispondi(["Com'è la tua città rispetto a una città italiana che conosci?", "Dove si vive meglio, secondo te: in città o in paese?", "Qual è il posto più bello che hai visitato?", "Il tuo quartiere è cambiato negli ultimi anni? È migliorato o peggiorato?", "Sei più simile a tua madre o a tuo padre?", "Qual è il mese migliore per visitare la tua città?"]),
          { kind: "speak", title: "Confronta", hint: "Compara cada pareja con al menos dos frases (una con «di» y otra con «che»).", items: ["il treno e l'aereo", "Madrid e Roma", "l'estate e l'inverno", "il tuo lavoro di adesso e il tuo primo lavoro", "cucinare e mangiare fuori", "il mare e la montagna"] },
          {
            kind: "roleplay", title: "Dove andiamo a vivere?", hint: "Tu pareja y tú tenéis que elegir entre un piso en el centro de Bolonia y una casa en un pueblo a 30 km. La IA hace de tu pareja y prefiere la otra opción. Es informal.",
            steps: ["Explica qué opción prefieres y por qué.", "Escucha sus argumentos y compáralos con los tuyos.", "Hablad del precio, el transporte y el tiempo libre.", "Buscad un compromiso.", "Decidid juntos."],
          },
          {
            kind: "roleplay", title: "All'ufficio turistico", hint: "Estás en la oficina de turismo de Umbría. Tienes dos días. La IA hace de empleada. Usa «Lei».",
            steps: ["Pregunta cuál es el pueblo más bonito de la zona.", "Pide comparar dos pueblos que te propone.", "Pregunta cuál es mejor para comer bien.", "Pregunta cuál está mejor comunicado en autobús.", "Decide y da las gracias."],
          },
          { kind: "speak", title: "La mia città ideale", hint: "Describe durante un minuto y medio tu ciudad o pueblo ideal, comparándolo con el sitio donde vives.", items: ["La mia città ideale è più…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Milán es más cara que Nápoles.", "En el pueblo se vive mejor que en la ciudad.", "Es el pueblo más bonito de la región.", "Mi hermana es tan alta como yo.", "Hay más coches que bicicletas.", "Este restaurante es peor que el otro.", "La pizza estaba buenísima.", "Me mudé a Turín hace dos años."]),
          { kind: "write", title: "Due posti", hint: "Escribe un texto (10–12 frases) comparando dos lugares donde has vivido o que conoces bien: tamaño, gente, precios, transporte, ocio, clima. Termina diciendo cuál prefieres y por qué.", rows: 12, items: ["Ho vissuto a… e a…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: comparativi", ["più caro di", "meno traffico che", "tanto bello quanto", "il migliore", "peggio", "bellissimo"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Si vive meglio in campagna.", "È più facile parlare che scrivere.", "È il borgo più bello d'Italia.", "Il paese si sta svuotando.", "Ci sono più turisti che abitanti."]),
          k.media([
            { type: "Película", title: "Un paese quasi perfetto (2016)", where: "Busca dónde verla en JustWatch", why: "Los habitantes de un pueblo de montaña casi vacío intentan convencer a un médico de la ciudad para que se quede." },
            { type: "Película", title: "Benvenuti al Sud (2010)", where: "Busca dónde verla en JustWatch", why: "La comparación norte / sur más famosa del cine italiano. Ahora entenderás todos los chistes." },
            { type: "YouTube", title: "I borghi più belli d'Italia", where: "YouTube", why: "Busca vídeos de la asociación «I borghi più belli d'Italia» o de pueblos como Civita di Bagnoregio o Matera." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Compara la vida en el pueblo de la película con la vida en la ciudad.", items: ["Nel paese… invece in città…"] },
        ],
      },
    ],

    exam: k.exam(24, {
      parole: ["il borgo", "la periferia", "il capoluogo", "spopolarsi", "l'inquinamento", "i mezzi pubblici", "ottimo", "pessimo", "maggiore", "vivace"],
      contrario: ["barato", "ruidoso", "seguro", "aburrido", "mejor (adverbio)", "peor (adjetivo)"],
      verbiHint: "Completa el presente (io) y el passato prossimo (io).",
      verbiCols: ["presente (io)", "passato (io)"],
      verbi: [["trasferirsi", "", ""], ["crescere", "", ""], ["diventare", "", ""], ["peggiorare", "", ""]],
      completaHint: "Completa con di (o di + artículo), che, quanto, migliore / meglio o peggiore / peggio.",
      completa: ["Bologna è più piccola ___ Roma.", "Preferisco camminare ___ prendere l'autobus.", "In centro ci sono più bar ___ negozi.", "Il treno è più veloce ___ autobus.", "Firenze è tanto bella ___ Venezia.", "Oggi sto ___ di ieri: la febbre è passata.", "Questo è il ristorante ___ della città.", "Il traffico è ___ la mattina che la sera."],
      trasformaHint: "Transforma cada frase como se indica entre paréntesis.",
      trasforma: ["Roma è grande. Milano è meno grande. (compara con «più… di»)", "La casa è bella. (superlativo en -issimo)", "Marco è simpatico. Luca è simpatico. (igualdad con «quanto»)", "È un buon ristorante. (el mejor de la ciudad)", "Si vive bene qui. Si vive peggio lì. (compara con «meglio… che»)", "Questa città è cara. (la más cara de Italia)"],
      leggi: {
        text: [
          "Civita di Bagnoregio, in provincia di Viterbo, è chiamata «la città che muore». Si trova su una collina che lentamente si sgretola e si raggiunge solo a piedi, con un lungo ponte.",
          "Oggi ci abitano poco più di dieci persone, ma ogni anno arrivano centinaia di migliaia di turisti. Per entrare si paga un biglietto.",
          "Per alcuni è il borgo più bello d'Italia; per altri è diventato troppo turistico. Di sicuro è uno dei posti più fotografati del paese.",
        ],
        questions: ["Perché Civita è chiamata «la città che muore»?", "Come si arriva al borgo?", "Quanti abitanti ha? E quanti turisti?", "Che cosa pensano le persone di Civita?"],
      },
      ascolta: {
        script: [
          { who: "Agente", text: "Allora, ha visto i due appartamenti. Quale le piace di più?" },
          { who: "Cliente", text: "Quello in centro è più piccolo, ma è più luminoso. Quello in periferia è più grande e costa meno." },
          { who: "Agente", text: "Sì, duecento euro in meno al mese. Però per arrivare in centro ci vogliono quaranta minuti." },
          { who: "Cliente", text: "È troppo. Prendo quello in centro: preferisco spendere di più che passare due ore al giorno in autobus." },
        ],
        questions: ["Com'è l'appartamento in centro?", "Com'è quello in periferia?", "Quanto costa di meno quello in periferia? Qual è il problema?", "Quale sceglie il cliente? Perché?"],
      },
      parla: ["Confronta la tua città con una città italiana.", "Dove si vive meglio: in città o in campagna? Argomenta.", "Descrivi il posto più bello che hai visitato.", "Confronta te stesso o te stessa di dieci anni fa e di oggi."],
      roleHint: "Es informal.",
      role: ["Un amigo duda entre dos ciudades para su Erasmus: pregúntale cuáles son.", "Compara las dos con él.", "Aconséjale una con argumentos."],
      dettato: ["È più caro di Roma.", "Si vive meglio qui.", "il paese più bello", "ci sono più gatti che abitanti", "buonissimo", "peggio di ieri"],
      traduci: ["Turín es más tranquila que Milán.", "Prefiero leer que ver la tele.", "Es el barrio menos caro de la ciudad.", "Mi hermano mayor vive en el campo.", "Hoy estoy peor que ayer.", "El pueblo es tan bonito como la ciudad."],
      scrivi: { hint: "Escribe (60–80 palabras) una reseña de un pueblo italiano (real o inventado) para una web de viajes, comparándolo con la ciudad más cercana.", start: "Se cercate un posto tranquillo…" },
    }),
  };
})();
