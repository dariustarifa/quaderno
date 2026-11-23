// Unità 26 · Cercare casa — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[26] = {
    n: 26,
    level: "A2",
    title: "Cercare casa",
    goal: "Buscar piso: entender anuncios, llamar al propietario, negociar condiciones y hablar de compañeros de piso.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a buscar piso en Italia: leer anuncios con sus abreviaturas, llamar para pedir información, preguntar por el contrato y la fianza y convivir con compañeros de piso.",
              "Gramática: las partículas «ci» (allí, en eso) y «ne» (de eso, de ellos), dos palabras pequeñas que los italianos usan constantemente y que en español casi nunca se dicen.",
              "Expresiones muy útiles con ci: ci vuole / ci vogliono (hace falta), ci metto (tardo), ci penso io (yo me encargo).",
            ],
          },
          {
            kind: "intro", title: "Ci vado, ne ho due", hint: "Un adelanto: ci y ne",
            text: ["«Ci» sustituye a un lugar ya mencionado: «Vai a Milano? — Sì, ci vado domani» (voy allí).", "«Ne» sustituye a una cantidad de algo: «Quante stanze ha? — Ne ha tre» (tiene tres)."],
            examples: [
              { it: "Abiti ancora a Roma? — No, non ci abito più.", es: "¿Todavía vives en Roma? — No, ya no vivo allí." },
              { it: "Quanti bagni ci sono? — Ce n'è uno solo.", es: "¿Cuántos baños hay? — Solo hay uno." },
              { it: "Che ne pensi di questa casa?", es: "¿Qué te parece esta casa?" },
            ],
          },
          { kind: "speak", title: "Hai mai cercato casa?", hint: "Antes de empezar: ¿has buscado piso alguna vez? ¿Fue fácil? Cuéntalo como puedas.", items: ["Quando ho cercato casa…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Annunci", hint: "Busca cada palabra o abreviatura y escribe su significado en español.",
            items: [
              "affittasi / vendesi", "il bilocale", "il trilocale", "il monolocale", "il posto letto",
              "la stanza singola", "arredato", "le spese condominiali", "la caparra", "l'agenzia immobiliare",
              "il proprietario", "l'inquilino", "il contratto 4+4", "la cauzione", "riscaldamento autonomo",
              "piano alto", "luminoso", "ristrutturato", "mq (metri quadri)", "trattabile",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Convivere", hint: "Escribe en italiano.",
            items: ["el compañero de piso", "compartir piso", "la fianza", "pagar el alquiler", "las facturas", "la luz y el gas", "la limpieza", "el turno de limpieza", "la mudanza", "mudarse (de casa)", "la llave", "el casero", "ruidoso", "ordenado", "desordenado"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: ci vogliono → Per arrivare in centro ci vogliono venti minuti.", items: ["ci vado", "ne ho", "ci vogliono", "ci metto", "ne parliamo", "il bilocale", "la caparra", "il coinquilino"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ce n'è, ce ne sono", hint: "Pronunciar ci y ne juntos",
            text: [
              "Cuando ci va delante de ne, se convierte en «ce»: «ce n'è» (hay uno / hay de eso), «ce ne sono» (hay varios). Se dice todo junto: «cenè», «cenesóno».",
              "«Ci» delante de vocal suena como «chi» suave: «c'è», «c'era», «c'abito» (raro). Recuerda que c + e / i = «ch».",
              "Abreviaturas de anuncios que oirás leer: «bilocale» (bi-lo-cà-le), «trilocale», «mq» se lee «metri quadri».",
            ],
            table: { head: ["", "suena"], rows: [["ce n'è", "che-nè"], ["ce ne sono", "che-ne-sò-no"], ["non ce n'è", "non-che-nè"], ["ci vuole", "chi-vuò-le"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite todo seguido.", items: ["ce n'è uno, ce ne sono due", "non ce n'è, non ce ne sono", "ci vado, ci abito, ci penso", "ci vuole un'ora, ci vogliono due giorni"] },
          { kind: "shadow", title: "Al telefono con il proprietario", hint: "Repite con la misma melodía.", items: ["Buongiorno, chiamo per l'annuncio del bilocale.", "Quanti metri quadri sono?", "Le spese sono comprese?", "Quanto ci vuole per arrivare in centro?", "Quanti mesi di caparra ci vogliono?", "Posso venire a vederlo domani?"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Volerci e metterci", hint: "Hace falta / tardar",
            text: [
              "«Volerci» = hacer falta (tiempo, dinero, cosas). Concuerda con lo que hace falta: «Ci vuole un'ora», «Ci vogliono due ore». En el pasado, con essere: «Ci è voluta un'ora».",
              "«Metterci» = tardar (una persona): «Ci metto venti minuti», «Quanto ci metti?». Pasado con avere: «Ci ho messo un'ora».",
              "Otros verbos con ci: «pensarci» (pensar en ello: ci penso io = yo me encargo), «crederci» (creérselo), «riuscirci» (lograrlo), «entrarci» (tener que ver: «Che c'entra?»).",
            ],
            table: { head: ["", "presente", "passato"], rows: [["volerci (1 cosa)", "ci vuole", "ci è voluto/a"], ["volerci (varias)", "ci vogliono", "ci sono voluti/e"], ["metterci (io)", "ci metto", "ci ho messo"], ["metterci (loro)", "ci mettono", "ci hanno messo"]] },
          },
          k.table("Tabella dei verbi", [
            ["metterci", "ci metto", "", ""],
            ["pensarci", "", "ci pensi", ""],
            ["riuscirci", "", "", "ci riusciamo"],
            ["andarci", "", "", ""],
            ["crederci", "", "", ""],
          ], "Completa el presente de cada verbo con ci con io, tu y noi.", ["io", "tu", "noi"]),
          {
            kind: "fill", title: "Ci vuole o ci metto?", hint: "Completa con ci vuole, ci vogliono, ci metto, ci metti, ci mette… o en pasado.",
            items: [
              "Per arrivare all'università ___ mezz'ora in autobus.", "Io a piedi ___ dieci minuti.", "Per affittare questo appartamento ___ tre mesi di caparra.", "Quanto ___ tu ad arrivare in ufficio?", "Ieri ___ (io) un'ora per trovare parcheggio!", "Per fare il trasloco ___ due giorni. (pasado)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "La particella ci", hint: "Ci: lugar y «en eso»",
            text: [
              "1. Lugar ya mencionado (allí, ahí): «Vai in palestra? — Sì, ci vado ogni giorno».",
              "2. «A eso / en eso» con verbos que llevan «a»: pensare a → «Ci penso», credere a → «Non ci credo».",
              "3. Expresiones fijas: c'è / ci sono, ci vuole, metterci, entrarci, «Ci sto!» (¡me apunto!).",
              "Posición: como los pronombres, delante del verbo conjugado o pegado al infinitivo e imperativo: «Devo andarci», «Vacci!».",
            ],
          },
          {
            kind: "intro", title: "La particella ne", hint: "Ne: cantidad y «de eso»",
            text: [
              "1. Cantidad: sustituye a un sustantivo cuando dices cuánto: «Quante stanze ci sono? — Ce ne sono tre». «Vuoi delle mele? — Sì, ne voglio due». También «ne ho molti», «non ne ho nessuno».",
              "2. «De eso» con verbos que llevan «di»: parlare di → «Ne parliamo domani», pensare di (opinión) → «Che ne pensi?».",
              "En el passato prossimo, con ne + cantidad el participio concuerda: «Le mele? Ne ho comprate tre»."],
            table: { head: ["", "ejemplo"], rows: [["ci (lugar)", "Roma? Ci vado domani."], ["ci (a eso)", "Ci penso io."], ["ne (cantidad)", "Ne voglio due."], ["ne (de eso)", "Che ne pensi?"]] },
          },
          {
            kind: "fill", title: "Ci o ne?", hint: "Completa con ci, ne o ce n'è / ce ne sono.",
            items: ["Vai spesso al mare? — Sì, ___ vado ogni fine settimana.", "Quanti coinquilini hai? — ___ ho due.", "Hai pensato al contratto? — Sì, ___ ho pensato tutta la notte.", "Quanti bagni ci sono? — ___ uno solo.", "Che ___ pensi di questo appartamento?", "Abiti ancora a Torino? — No, non ___ abito più.", "Hai delle uova? — No, non ___ ho.", "Quante stanze ha? — ___ tre, tutte luminose."],
          },
          k.domanda(["Ci vado in autobus.", "Ne ha tre.", "Ci vogliono quaranta minuti.", "Ne pago cinquecento.", "Sì, ci abito da due anni.", "Ne parliamo domani, va bene?"], "Escribe la pregunta que corresponde a cada respuesta (piensa qué sustituye ci o ne). Ejemplo: Ci vado domani. → Quando vai a Roma?"),
          k.negativa(["Ci vado spesso.", "Ne ho due.", "Ci penso io.", "Ce ne sono molti.", "Ci abitiamo da un anno."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Una telefonata per un annuncio", "Una estudiante llama por un anuncio de habitación en Bolonia.", [
            { who: "Proprietaria", text: "Pronto?" },
            { who: "Inés", text: "Buongiorno, chiamo per l'annuncio della stanza in via Zamboni. È ancora libera?" },
            { who: "Proprietaria", text: "Sì, è libera da settembre. È una singola in un appartamento con altre tre ragazze." },
            { who: "Inés", text: "Quanto costa?" },
            { who: "Proprietaria", text: "Quattrocentoventi euro al mese, più le spese: ce ne sono circa cinquanta per luce, gas e internet." },
            { who: "Inés", text: "E di caparra quanto ci vuole?" },
            { who: "Proprietaria", text: "Due mensilità. Il contratto è di un anno, per studenti." },
            { who: "Inés", text: "Quanto ci vuole per arrivare all'università?" },
            { who: "Proprietaria", text: "Ci vogliono cinque minuti a piedi. Vuole venire a vederla?" },
            { who: "Inés", text: "Sì, ci posso venire giovedì pomeriggio?" },
          ], ["Com'è la stanza? Con chi vivrebbe Inés?", "Quanto costa al mese? E le spese?", "Quanto ci vuole di caparra?", "Che contratto è?", "Quanto ci vuole per arrivare all'università? Quando va a vederla Inés?"]),
          k.listen("La riunione dei coinquilini", "Tres compañeros de piso discuten.", [
            { who: "Marco", text: "Ragazzi, dobbiamo parlare della pulizia. Il bagno è un disastro." },
            { who: "Elena", text: "Hai ragione. Facciamo dei turni: una settimana a testa?" },
            { who: "Luca", text: "Per me va bene. E la spesa comune? Il latte finisce sempre e nessuno lo compra." },
            { who: "Marco", text: "Ci penso io: faccio un gruppo su WhatsApp con la lista." },
            { who: "Elena", text: "Un'ultima cosa: Luca, la musica di notte… ce n'è un po' troppa." },
            { who: "Luca", text: "Ok, ok, d'ora in poi uso le cuffie. Ci sto!" },
          ], ["Qual è il primo problema?", "Che soluzione propone Elena?", "Che problema c'è con la spesa? Chi ci pensa?", "Che cosa fa Luca di notte?", "Che cosa promette Luca?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Affittare casa in Italia", [
            "Trovare casa in affitto nelle grandi città italiane non è facile. A Milano, Bologna e Roma gli affitti sono cresciuti molto e per una stanza singola ci vogliono spesso più di cinquecento euro.",
            "Il contratto più comune è il «4+4»: dura quattro anni e si rinnova automaticamente per altri quattro. Per gli studenti c'è il contratto transitorio, da sei mesi a tre anni.",
            "Di solito il proprietario chiede una caparra, cioè un deposito di due o tre mensilità, che restituisce alla fine se la casa è in buono stato. Se c'è un'agenzia, si paga anche la sua provvigione.",
            "Negli annunci ci sono molte abbreviazioni: «bilocale» significa due stanze (una camera e un soggiorno), «spese condominiali» sono le spese del palazzo, come le pulizie delle scale o l'ascensore.",
            "Molti giovani vivono con coinquilini fino a trent'anni o più. Ci sono vantaggi: si spende meno e non si è mai soli. Ma ci vuole pazienza!",
          ], ["Perché non è facile trovare casa nelle grandi città?", "Che cos'è il contratto «4+4»? E quello per studenti?", "Che cos'è la caparra? Quando si restituisce?", "Che cosa significa «bilocale»?", "Che cosa sono le spese condominiali?", "Quali sono i vantaggi di vivere con coinquilini?"]),
          k.spagna("¿Cómo es buscar piso en tu ciudad? ¿Cuánto cuesta? ¿Has compartido piso alguna vez? Usa ci y ne."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Negoziare", hint: "Negociar con el propietario",
            text: ["Para negociar: «Il prezzo è trattabile?», «Si può fare uno sconto?», «Sarebbe possibile…?», «E se pago tre mesi in anticipo?».", "Para pedir arreglos: «Il riscaldamento non funziona», «Si può cambiare il frigorifero?», «Chi paga le riparazioni?»."],
          },
          k.rispondi(["Dove abiti? Da quanto tempo ci abiti?", "Quanto ci metti ad arrivare al lavoro o a scuola?", "Quante stanze ha la tua casa? E quanti bagni ci sono?", "Hai mai vissuto con coinquilini? Com'è stato?", "Che cosa ne pensi degli affitti nella tua città?", "Che cosa ci vuole per essere un buon coinquilino?"]),
          { kind: "speak", title: "Rispondi con ci o ne", hint: "Responde usando ci o ne, sin repetir la palabra. Ejemplo: Quanti fratelli hai? → Ne ho due.", items: ["Vai spesso in centro?", "Quanti caffè bevi al giorno?", "Pensi spesso al futuro?", "Quanti libri hai letto quest'anno?", "Sei mai stato a Napoli?", "Quante lingue parli?"] },
          {
            kind: "roleplay", title: "Dal proprietario", hint: "Vas a ver un piso y negocias con el propietario. La IA hace del propietario, que es un poco duro. Usa «Lei».",
            steps: ["Pregunta por el precio y lo que incluye.", "Pregunta cuántos meses de fianza hacen falta.", "Señala un problema del piso (calefacción, humedad, muebles…).", "Intenta negociar el precio.", "Decide si lo coges y despídete."],
          },
          {
            kind: "roleplay", title: "Il nuovo coinquilino", hint: "Entrevistas a un candidato para la habitación libre de tu piso. La IA hace del candidato. Es informal.",
            steps: ["Explica cómo es el piso y cuánto cuesta.", "Pregúntale a qué se dedica y cuáles son sus horarios.", "Pregúntale si es ordenado y si hace fiestas.", "Explica las normas de la casa.", "Dile cuándo le darás una respuesta."],
          },
          { kind: "speak", title: "La casa perfetta", hint: "Describe durante un minuto y medio tu casa ideal para vivir en Italia: dónde, cuántas habitaciones, cuánto pagarías, con quién vivirías y cuánto tardarías en llegar al trabajo.", items: ["La mia casa ideale…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["¿Vas al gimnasio? — Sí, voy los lunes.", "¿Cuántas habitaciones tiene? — Tiene dos.", "Se tarda una hora en llegar.", "Hacen falta dos meses de fianza.", "¿Qué te parece el piso?", "No hay ningún baño libre.", "Yo me encargo de las facturas.", "Tardé tres días en hacer la mudanza."]),
          { kind: "write", title: "Un annuncio e una mail", hint: "Escribe dos textos: un anuncio para buscar compañero de piso (5–6 frases, con precio, zona y normas) y un correo a un casero pidiendo información sobre un piso (6–8 frases).", rows: 8, items: ["Cercasi coinquilino/a:", "Gentile proprietario,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: annunci", ["bilocale arredato", "spese condominiali", "due mensilità di caparra", "riscaldamento autonomo", "prezzo trattabile", "ottanta metri quadri"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Ce ne sono tre.", "Ci vado domani.", "Quanto ci metti?", "Ci vogliono due ore.", "Che ne pensi?"]),
          k.media([
            { type: "YouTube", title: "Cercare casa in Italia", where: "YouTube", why: "Busca vídeos de estudiantes o expatriados contando cómo encontraron piso en Milán, Bolonia o Roma: precios, estafas y consejos." },
            { type: "Serie", title: "Generazione 56k", where: "Netflix", why: "Napolitanos treintañeros, pisos, trabajo y amor entre los años 90 y hoy." },
            { type: "Web", title: "Immobiliare.it / Idealista", where: "Web", why: "Entra en la web de alquileres y lee tres anuncios de verdad en Bolonia o Roma: precios, abreviaturas y condiciones." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Describe el piso de la película o un anuncio real: cuántas habitaciones hay, cuánto cuesta y qué te parece. Usa ci y ne.", items: ["Ci sono… Ce n'è…"] },
        ],
      },
    ],

    exam: k.exam(26, {
      parole: ["il bilocale", "il posto letto", "la caparra", "le spese condominiali", "l'inquilino", "trattabile", "ci vuole", "metterci", "il coinquilino", "ristrutturato"],
      contrario: ["el casero", "la fianza", "la mudanza", "las facturas", "compartir piso", "desordenado"],
      verbiHint: "Completa el presente con io, tu y noi.",
      verbiCols: ["io", "tu", "noi"],
      verbi: [["metterci", "", "", ""], ["andarci", "", "", ""], ["pensarci", "", "", ""], ["riuscirci", "", "", ""]],
      completaHint: "Completa con ci, ne, ce n'è / ce ne sono, ci vuole / ci vogliono o ci metto / ci metti…",
      completa: ["Vai spesso a Roma? — Sì, ___ vado ogni mese.", "Quanti coinquilini hai? — ___ ho tre.", "Quanti bagni ci sono? — ___ due.", "Per affittare casa ___ tre mesi di caparra.", "Quanto ___ tu ad arrivare in ufficio?", "Che ___ pensi del nuovo contratto?", "Hai mai pensato a cambiare casa? — Sì, ___ penso spesso.", "Le mele? ___ ho comprate cinque."],
      trasformaHint: "Sustituye el lugar, la cantidad o el «a / di + algo» por ci o ne.",
      trasforma: ["Vado a Milano domani.", "Ho tre fratelli.", "Penso al viaggio ogni giorno.", "Abbiamo comprato due chili di arance.", "Non credo a questa storia.", "Parliamo del contratto stasera."],
      leggi: {
        text: [
          "AFFITTASI trilocale di 85 mq a Torino, zona San Salvario, al terzo piano senza ascensore. Due camere, soggiorno con cucina a vista, un bagno, balcone.",
          "Parzialmente arredato, riscaldamento centralizzato. Affitto: 750 euro al mese, spese condominiali 80 euro. Caparra: tre mensilità. Contratto 4+4.",
          "No animali. Fermata del tram a 100 metri, ci vogliono dieci minuti per la stazione di Porta Nuova. Libero da novembre. Prezzo trattabile per contratti lunghi.",
        ],
        questions: ["Com'è l'appartamento? Quante camere ci sono?", "Quanto si paga in totale al mese?", "Quanto ci vuole di caparra?", "Quanto ci vuole per arrivare alla stazione? Il prezzo è fisso?"],
      },
      ascolta: {
        script: [
          { who: "Sara", text: "Allora, com'è la nuova casa?" },
          { who: "Pietro", text: "Bellissima, ma è lontana dal lavoro: ci metto quasi un'ora." },
          { who: "Sara", text: "E i coinquilini?" },
          { who: "Pietro", text: "Ce ne sono due, simpatici. Ma ci vuole pazienza: uno suona la chitarra fino all'una!" },
          { who: "Sara", text: "E l'affitto?" },
          { who: "Pietro", text: "Trecentottanta euro. A Milano non ne trovi di più economici." },
        ],
        questions: ["Qual è il problema della nuova casa?", "Quanti coinquilini ha Pietro?", "Perché ci vuole pazienza?", "Quanto paga di affitto? Che cosa pensa del prezzo?"],
      },
      parla: ["Descrivi la tua casa e quanto ci metti ad arrivare al lavoro.", "Rispondi con ci o ne: Quanti amici italiani hai? Vai spesso al cinema? Pensi mai al futuro?", "Spiega a un amico come si cerca casa nel tuo paese.", "Racconta un'esperienza con coinquilini o vicini."],
      roleHint: "Usa «Lei».",
      role: ["Llamas por un anuncio: pregunta si el piso sigue libre y cuánto cuesta.", "Pregunta cuánto se tarda al centro y cuánta fianza hace falta.", "Queda para verlo."],
      dettato: ["Ce n'è uno solo.", "Ci metto mezz'ora.", "Ne abbiamo due.", "Ci vogliono tre mesi.", "Che ne pensate?", "Non ci abito più."],
      traduci: ["¿Cuánto tardas en llegar? — Tardo veinte minutos.", "¿Tienes hermanos? — Tengo uno.", "Ya no vivo allí.", "Hace falta mucha paciencia.", "Hablamos de ello mañana.", "No hay ningún piso barato en el centro."],
      scrivi: { hint: "Escribe un correo (60–80 palabras) al casero para explicar un problema del piso (calefacción, humedad…) y pedirle una solución.", start: "Gentile signor Fabbri," },
    }),
  };
})();
