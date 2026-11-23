// Unità 5 · La mia giornata
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[5] = {
  n: 5,
  level: "A1",
  title: "La mia giornata",
  goal: "Contar tu rutina diaria con horas y con qué frecuencia haces cada cosa.",
  pages: [
    /* 1 ------------------------------------------------------------ */
    {
      title: "Introduzione",
      skill: "mixto",
      blocks: [
        {
          kind: "intro",
          title: "In questa unità",
          hint: "En esta unidad",
          text: [
            "Vas a aprender a contar tu día a día: a qué hora te levantas, qué haces por la mañana, por la tarde y por la noche, y con qué frecuencia.",
            "Gramática: los verbos en -ere y en -ire (también los que llevan -isc-), los verbos reflexivos (svegliarsi, alzarsi…), la hora y los adverbios de frecuencia.",
            "Al terminar esta unidad ya conoces los tres grupos de verbos del presente.",
          ],
        },
        {
          kind: "intro",
          title: "Che ore sono?",
          hint: "Un adelanto: la hora",
          text: [
            "Para preguntar la hora: «Che ore sono?» o «Che ora è?». Se responde con «sono le…», en plural, porque son horas: «Sono le tre». Con la una va en singular: «È l'una».",
            "Lo verás todo en la página 5.",
          ],
          examples: [
            { it: "Che ore sono? — Sono le otto.", es: "¿Qué hora es? — Son las ocho." },
            { it: "È l'una.", es: "Es la una." },
            { it: "A che ora ti svegli? — Alle sette.", es: "¿A qué hora te despiertas? — A las siete." },
          ],
        },
        {
          kind: "speak",
          title: "La tua mattina",
          hint: "Antes de empezar: cuenta qué haces por la mañana con las palabras que ya sabes, aunque sean sueltas: «caffè, lavoro, autobus…».",
          items: ["La mattina…"],
        },
      ],
    },

    /* 2 ------------------------------------------------------------ */
    {
      title: "Parole",
      skill: "escritura",
      blocks: [
        {
          kind: "vocab",
          title: "La giornata",
          hint: "Busca cada expresión y escribe su traducción al español.",
          items: [
            "svegliarsi", "alzarsi", "lavarsi", "farsi la doccia", "vestirsi",
            "fare colazione", "uscire di casa", "prendere l'autobus", "arrivare", "pranzare",
            "fare la spesa", "tornare a casa", "cucinare", "cenare", "guardare la tv",
            "leggere", "riposarsi", "andare a letto", "dormire", "la sveglia",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Quando?",
          hint: "Ahora al revés: escribe en italiano. Ojo con «pronto»: en italiano significa otra cosa.",
          items: [
            "por la mañana", "al mediodía", "por la tarde (después de comer)", "por la noche (antes de dormir)",
            "de madrugada", "pronto / temprano", "tarde", "siempre",
            "a menudo", "a veces", "nunca", "todos los días",
            "después / luego", "antes", "normalmente",
          ],
        },
        {
          kind: "vocab",
          title: "Che ore sono?",
          hint: "Escribe la hora en cifras. Ejemplo: le otto e un quarto → 8:15.",
          placeholder: "hh:mm",
          items: [
            "le sette e mezza", "le nove e un quarto", "le undici meno un quarto", "mezzogiorno", "le tre e venti",
            "le cinque meno dieci", "l'una e mezza", "le dieci e cinque", "mezzanotte", "le sei meno venti",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: presto → Mi sveglio sempre presto, alle sei.",
          items: ["svegliarsi", "di solito", "mai", "prendere", "il pomeriggio", "tardi", "fare colazione", "andare a letto"],
        },
      ],
    },

    /* 3 ------------------------------------------------------------ */
    {
      title: "Suoni",
      skill: "habla",
      blocks: [
        {
          kind: "intro",
          title: "Capisco o capisci?",
          hint: "Los sonidos de esta unidad",
          text: [
            "Muchos verbos de esta unidad cambian de sonido según la terminación. «Capisco» (entiendo) se dice «ka-pis-ko», con c dura delante de o; «capisci» (entiendes) se dice «ka-pi-shi».",
            "Pasa lo mismo con «esco / esci» (de uscire, salir) y con «finisco / finisci». Y con la g: «leggo» suena dura, «leggi» suena como la j inglesa.",
            "«Sveglia» y «svegliarsi» llevan gli, como «famiglia». «Mezzo» y «mezzanotte» llevan zz con sonido «ds».",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["capisco, esco, finisco", "«sko»"],
              ["capisci, esci, finisci", "«shi»"],
              ["leggo / leggi", "«go» duro / «dji», la j inglesa de jeans"],
              ["sveglia, mi sveglio", "como en famiglia"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "I suoni",
          hint: "Escucha cada línea, primero lenta y luego normal. Repite hasta que suene igual.",
          items: [
            "capisco, capisci, capisce",
            "finisco, finisci, finisce",
            "esco, esci, esce, uscire",
            "leggo, leggi, legge",
            "sveglia, mi sveglio, ti svegli",
            "mezzo, mezza, mezzogiorno, mezzanotte",
          ],
        },
        {
          kind: "shadow",
          title: "L'ora",
          hint: "Repite con la misma melodía.",
          items: [
            "Che ore sono?",
            "Sono le sette e mezza.",
            "È l'una e un quarto.",
            "Sono le dieci meno cinque.",
            "È mezzogiorno.",
            "A che ora pranzi? All'una.",
          ],
        },
        {
          kind: "shadow",
          title: "Frasi",
          hint: "Frases más largas: respira donde hay coma.",
          items: [
            "Mi sveglio alle sette, ma mi alzo alle sette e un quarto.",
            "Faccio colazione e poi esco di casa.",
            "Il pomeriggio finisco di lavorare alle sei.",
            "La sera leggo un libro e vado a letto presto.",
          ],
        },
        {
          kind: "speak",
          title: "Che ore sono?",
          hint: "Di cada hora en voz alta antes de escucharla. Ejemplo: 8:15 → Sono le otto e un quarto.",
          items: ["7:30", "12:00", "13:15", "18:45", "21:10", "0:00"],
        },
      ],
    },

    /* 4 ------------------------------------------------------------ */
    {
      title: "Verbi",
      skill: "escritura",
      blocks: [
        {
          kind: "intro",
          title: "Verbi in -ere e in -ire",
          hint: "Los verbos en -ere y en -ire",
          text: [
            "Ya conoces los verbos en -are. Los otros dos grupos funcionan igual: quitas -ere o -ire y añades la terminación.",
            "Los verbos en -ere y en -ire solo se diferencian en voi: prendete / dormite. El resto de terminaciones es igual.",
            "Muchos verbos en -ire añaden -isc- en io, tu, lui / lei y loro: finire → finisco, finisci, finisce, finiamo, finite, finiscono. Otros como él: capire, preferire, pulire. No hay regla: se aprenden de memoria.",
          ],
          table: {
            head: ["", "prendere", "dormire", "finire"],
            rows: [
              ["io", "prendo", "dormo", "finisco"],
              ["tu", "prendi", "dormi", "finisci"],
              ["lui / lei / Lei", "prende", "dorme", "finisce"],
              ["noi", "prendiamo", "dormiamo", "finiamo"],
              ["voi", "prendete", "dormite", "finite"],
              ["loro", "prendono", "dormono", "finiscono"],
            ],
          },
        },
        {
          kind: "intro",
          title: "I verbi riflessivi",
          hint: "Los verbos reflexivos",
          text: [
            "Funcionan como chiamarsi en la unidad 1: mi, ti, si, ci, vi, si delante del verbo. Igual que en español: «mi sveglio» (me despierto), «ti alzi» (te levantas).",
            "En el infinitivo el pronombre va pegado al final y el verbo pierde la última -e: svegliare → svegliarsi, vestire → vestirsi.",
            "Con «non», el orden es non + pronombre + verbo: «Non mi alzo presto».",
          ],
          table: {
            head: ["", "svegliarsi", "vestirsi"],
            rows: [
              ["io", "mi sveglio", "mi vesto"],
              ["tu", "ti svegli", "ti vesti"],
              ["lui / lei / Lei", "si sveglia", "si veste"],
              ["noi", "ci svegliamo", "ci vestiamo"],
              ["voi", "vi svegliate", "vi vestite"],
              ["loro", "si svegliano", "si vestono"],
            ],
          },
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Fíjate en qué modelo sigue cada verbo: prendere, dormire, finire o los reflexivos.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["leggere", "leggo", "", "", "", "", ""],
            ["scrivere", "", "", "", "", "", ""],
            ["aprire", "", "", "", "", "aprite", ""],
            ["capire", "capisco", "", "", "", "", ""],
            ["preferire", "", "", "", "", "", ""],
            ["alzarsi", "mi alzo", "", "", "", "", ""],
            ["riposarsi", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "-ere o -ire?",
          hint: "Completa con la forma correcta del verbo entre paréntesis.",
          items: [
            "Io ___ l'autobus alle otto. (prendere)",
            "Tu ___ molto la notte? (dormire)",
            "Marco ___ di lavorare alle sei. (finire)",
            "Noi ___ il giornale a colazione. (leggere)",
            "Voi ___ la finestra la mattina? (aprire)",
            "Loro non ___ l'inglese. (capire)",
            "Io ___ il tè al caffè. (preferire)",
            "Che cosa ___, Giulia? (scrivere)",
          ],
        },
        {
          kind: "fill",
          title: "I riflessivi",
          hint: "Completa con el verbo reflexivo entre paréntesis.",
          items: [
            "Io ___ alle sette. (svegliarsi)",
            "A che ora ___ tu? (alzarsi)",
            "Mia sorella ___ in dieci minuti. (vestirsi)",
            "Noi ___ la domenica. (riposarsi)",
            "Voi ___ le mani prima di mangiare? (lavarsi)",
            "I bambini ___ presto. (svegliarsi)",
            "Io non ___ mai prima delle nove la domenica. (alzarsi)",
          ],
        },
      ],
    },

    /* 5 ------------------------------------------------------------ */
    {
      title: "Grammatica",
      skill: "escritura",
      blocks: [
        {
          kind: "intro",
          title: "L'ora",
          hint: "La hora",
          text: [
            "Pregunta: «Che ore sono?» o «Che ora è?». Se responde con «sono le» + hora, salvo la una, el mediodía y la medianoche, que van en singular: «è l'una», «è mezzogiorno», «è mezzanotte».",
            "Los minutos se suman con «e» y se restan con «meno», como en español: «le tre e dieci», «le quattro meno cinque». Y cuarto es «un quarto»; media, «mezza» (o «mezzo»).",
            "Para decir a qué hora haces algo: «A che ora…?», y se responde con «alle» + hora: «alle otto», «all'una», «a mezzogiorno».",
            "En horarios oficiales (trenes, tiendas, televisión) se usan las 24 horas: «Il treno parte alle diciotto e trenta».",
          ],
          examples: [
            { it: "A che ora pranzi? — All'una.", es: "¿A qué hora comes? — A la una." },
            { it: "A che ora comincia il film? — Alle nove meno un quarto.", es: "¿A qué hora empieza la película? — A las nueve menos cuarto." },
            { it: "Ci vediamo a mezzogiorno.", es: "Nos vemos a mediodía." },
          ],
          table: {
            head: ["", "Che ore sono?"],
            rows: [
              ["1:00", "È l'una."],
              ["8:00", "Sono le otto."],
              ["8:15", "Sono le otto e un quarto."],
              ["8:30", "Sono le otto e mezza."],
              ["8:45", "Sono le nove meno un quarto."],
              ["12:00", "È mezzogiorno."],
            ],
          },
        },
        {
          kind: "fill",
          title: "Che ore sono? A che ora?",
          hint: "Completa con sono le, è l', è, alle, all' o a.",
          items: [
            "Che ore sono? ___ otto e dieci.",
            "Che ore sono? ___ una e mezza.",
            "La lezione comincia ___ nove.",
            "Pranzo sempre ___ una.",
            "Il bar apre ___ sei e mezza.",
            "Ci vediamo ___ mezzogiorno.",
            "___ mezzanotte: vado a letto!",
          ],
        },
        {
          kind: "intro",
          title: "Sempre, spesso, mai",
          hint: "Con qué frecuencia",
          text: [
            "Los adverbios de frecuencia van normalmente detrás del verbo: «Mi alzo sempre presto», «Leggo spesso la sera».",
            "«Mai» (nunca) necesita «non» delante del verbo: «Non guardo mai la tv». En español se puede decir «nunca veo la tele», pero en italiano el non es obligatorio.",
            "De más a menos: sempre → di solito → spesso → a volte → raramente → non… mai.",
          ],
          examples: [
            { it: "Di solito pranzo a casa.", es: "Normalmente como en casa." },
            { it: "A volte ceno al ristorante.", es: "A veces ceno en un restaurante." },
            { it: "Non mi sveglio mai prima delle sette.", es: "Nunca me despierto antes de las siete." },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "con non… mai",
          title: "Non… mai",
          hint: "Pasa cada frase a negativo con «non… mai». Ejemplo: Mi alzo presto. → Non mi alzo mai presto.",
          items: [
            "Prendo l'autobus.",
            "Mi sveglio tardi.",
            "Leggo il giornale.",
            "Pranziamo a casa.",
            "Marco si riposa il pomeriggio.",
            "Guardano la tv la sera.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Mi sveglio alle sette. → A che ora ti svegli?",
          items: [
            "Pranzo all'una e mezza.",
            "Sono le dieci e un quarto.",
            "Di solito ceno a casa.",
            "No, non mi alzo mai presto la domenica.",
            "Finisco di lavorare alle sei.",
            "Preferisco il tè.",
          ],
        },
      ],
    },

    /* 6 ------------------------------------------------------------ */
    {
      title: "Ascolta",
      skill: "habla",
      blocks: [
        {
          kind: "listen",
          title: "Il fornaio",
          hint: "Una entrevista a un panadero con horarios muy especiales. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Giornalista", text: "Buongiorno, signor Esposito. Lei fa il fornaio da trent'anni. Com'è la sua giornata?" },
            { who: "Sig. Esposito", text: "Buongiorno! Allora, io mi sveglio alle tre di notte." },
            { who: "Giornalista", text: "Alle tre? È molto presto!" },
            { who: "Sig. Esposito", text: "Sì, ma per me è normale. Alle tre e mezza comincio a lavorare: preparo il pane e i cornetti." },
            { who: "Giornalista", text: "E a che ora apre il forno?" },
            { who: "Sig. Esposito", text: "Alle sette. Lavoro fino all'una, poi torno a casa e pranzo con mia moglie." },
            { who: "Giornalista", text: "E il pomeriggio?" },
            { who: "Sig. Esposito", text: "Dormo due ore, dalle tre alle cinque. La sera ceno presto, alle sette e mezza, e vado a letto alle nove." },
            { who: "Giornalista", text: "E la domenica?" },
            { who: "Sig. Esposito", text: "La domenica il forno è chiuso. Mi sveglio tardi… alle sei!" },
          ],
          questions: [
            "A che ora si sveglia il signor Esposito?",
            "Che cosa prepara la mattina presto?",
            "A che ora apre il forno?",
            "Che cosa fa il pomeriggio?",
            "A che ora va a letto?",
            "Che cosa significa «tardi» per lui la domenica?",
          ],
        },
        {
          kind: "listen",
          title: "I coinquilini",
          hint: "Dos compañeros de piso se organizan por las mañanas: solo hay un baño. Responde en voz alta.",
          script: [
            { who: "Giacomo", text: "Senti, Irene, dobbiamo organizzarci con il bagno. Tu a che ora ti alzi?" },
            { who: "Irene", text: "Mi alzo alle sette, ma mi faccio la doccia la sera." },
            { who: "Giacomo", text: "Perfetto. Io mi alzo alle sette e un quarto e mi faccio la doccia subito." },
            { who: "Irene", text: "Va bene. La mattina mi lavo solo la faccia e mi trucco: dieci minuti." },
            { who: "Giacomo", text: "E la colazione? Io di solito la faccio al bar." },
            { who: "Irene", text: "Io no, preferisco a casa. Preparo il caffè anche per te?" },
            { who: "Giacomo", text: "Sì, grazie! Sei un tesoro." },
          ],
          questions: [
            "A che ora si alza Irene?",
            "Quando si fa la doccia Irene?",
            "Che cosa fa Giacomo alle sette e un quarto?",
            "Dove fa colazione Giacomo? E Irene?",
            "Che cosa offre Irene a Giacomo?",
          ],
        },
      ],
    },

    /* 7 ------------------------------------------------------------ */
    {
      title: "Leggi",
      skill: "mixto",
      blocks: [
        {
          kind: "reading",
          title: "Una giornata all'italiana",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "La giornata di molti italiani comincia con una colazione veloce: un caffè o un cappuccino, con un cornetto o qualche biscotto. Una colazione salata è rara.",
            "Si pranza verso l'una. Nelle grandi città molte persone mangiano un panino o un'insalata vicino al lavoro; nei paesi, invece, tanti tornano a casa per pranzo.",
            "Nelle piccole città molti negozi chiudono dall'una alle quattro circa e riaprono fino alle sette e mezza o alle otto. Nelle grandi città, invece, tanti negozi fanno orario continuato: non chiudono mai a pranzo.",
            "Si cena verso le otto, al Nord anche prima. Al Sud, soprattutto d'estate, si cena più tardi.",
            "Dopo cena, in estate, è tradizione fare due passi in centro: è la «passeggiata». Si incontrano gli amici, si mangia un gelato e si chiacchiera.",
          ],
          questions: [
            "Che cosa mangiano molti italiani a colazione?",
            "A che ora si pranza? Dove?",
            "Quando chiudono i negozi nelle piccole città?",
            "Che cos'è l'«orario continuato»?",
            "A che ora si cena al Nord e al Sud?",
            "Che cos'è la «passeggiata»?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "Compara con España: ¿a qué hora se come y se cena? ¿Cierran las tiendas a mediodía? Explícalo en italiano con 3 o 4 frases, en voz alta.",
          items: ["In Spagna…"],
        },
      ],
    },

    /* 8 ------------------------------------------------------------ */
    {
      title: "Parla",
      skill: "habla",
      blocks: [
        {
          kind: "intro",
          title: "Prima, poi, dopo",
          hint: "Contar las cosas en orden",
          text: [
            "Para contar tu día en orden: prima (primero), poi (luego), dopo (después), alla fine (al final).",
            "También «prima di» + infinitivo y «dopo» + sustantivo: «prima di dormire», «dopo cena».",
          ],
          examples: [
            { it: "Prima mi alzo, poi mi faccio la doccia.", es: "Primero me levanto, luego me ducho." },
            { it: "Dopo pranzo mi riposo un po'.", es: "Después de comer descanso un poco." },
            { it: "Prima di dormire leggo.", es: "Antes de dormir leo." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "A che ora ti svegli di solito?",
            "Ti alzi subito o resti a letto un po'?",
            "Che cosa mangi a colazione?",
            "A che ora pranzi? E dove?",
            "Che cosa fai il pomeriggio?",
            "A che ora vai a letto?",
            "Che cosa fai sempre prima di dormire?",
            "Che cosa non fai mai la domenica?",
          ],
        },
        {
          kind: "speak",
          title: "Con che frequenza?",
          hint: "Di con qué frecuencia haces cada cosa, con sempre, spesso, a volte o non… mai. Ejemplo: cucinare → Cucino spesso la sera.",
          items: ["cucinare", "leggere un libro", "svegliarsi prima delle sette", "pranzare al ristorante", "guardare la tv", "riposarsi il pomeriggio"],
        },
        {
          kind: "roleplay",
          title: "Il sondaggio",
          hint: "Una encuestadora te para por la calle para una encuesta sobre hábitos. Usa «Lei». Al final, haz tú las preguntas a la IA.",
          steps: [
            "Acepta con educación.",
            "Di a qué hora te despiertas y te levantas.",
            "Di dónde y a qué hora comes.",
            "Cuenta qué haces por la tarde y por la noche.",
            "Di cuántas horas duermes.",
            "Ahora pregunta tú: «E Lei, a che ora si sveglia?»…",
          ],
        },
        {
          kind: "roleplay",
          title: "Il nuovo coinquilino",
          hint: "Vas a compartir piso con alguien. Organizad los horarios del baño, la cocina y el ruido. Es informal.",
          steps: [
            "Pregunta a qué hora se levanta y se ducha.",
            "Explica tu horario de la mañana.",
            "Decidid quién usa el baño primero.",
            "Pregunta a qué hora cena y si cocina.",
            "Di a qué hora te acuestas y pide silencio a partir de esa hora.",
            "Cerrad el acuerdo: «Va bene, allora…».",
          ],
        },
        {
          kind: "speak",
          title: "La mia giornata",
          hint: "Cuenta tu día de un tirón durante un minuto, de la mañana a la noche, con horas y con prima, poi y dopo.",
          items: ["La mia giornata"],
        },
      ],
    },

    /* 9 ------------------------------------------------------------ */
    {
      title: "Scrivi",
      skill: "escritura",
      blocks: [
        {
          kind: "translate",
          title: "Traduci in italiano",
          hint: "Traduce al italiano.",
          items: [
            "Me despierto a las siete, pero me levanto a las siete y media.",
            "¿A qué hora terminas de trabajar?",
            "Nunca desayuno en casa.",
            "Los niños duermen nueve horas.",
            "Normalmente comemos a la una.",
            "Prefiero leer por la noche.",
            "¿Entiendes el italiano?",
            "Son las doce menos cuarto.",
          ],
        },
        {
          kind: "write",
          title: "Due giornate",
          hint: "Escribe dos textos cortos: cómo es un día normal entre semana y cómo es tu domingo ideal. Usa horas, verbos reflexivos y adverbios de frecuencia. Entre 5 y 7 frases cada uno.",
          rows: 7,
          items: ["Un giorno normale:", "La mia domenica ideale:"],
        },
      ],
    },

    /* 10 ----------------------------------------------------------- */
    {
      title: "Ripasso e immersione",
      skill: "mixto",
      blocks: [
        {
          kind: "dictation",
          title: "Dettato: l'ora",
          hint: "Escucha y escribe la hora en cifras.",
          placeholder: "hh:mm",
          items: ["le otto e venti", "l'una meno un quarto", "le sei e mezza", "mezzogiorno", "le dieci meno cinque", "le quattro e un quarto"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Mi sveglio alle sette.", "Non capisco.", "A che ora finisci?", "Ci riposiamo il pomeriggio.", "Leggo sempre prima di dormire."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Serie", title: "Skam Italia", where: "Netflix", why: "El día a día de unos adolescentes de un instituto de Roma. Italiano real y actual: ponlo con subtítulos en italiano." },
            { type: "Podcast", title: "Italiano Automatico", where: "Spotify, YouTube", why: "Alberto habla despacio de la vida diaria y de cómo aprender. Empieza por un episodio corto." },
            { type: "Canción", title: "Una giornata uggiosa, Lucio Battisti", where: "Spotify, YouTube", why: "Clásico de 1980. «Uggioso» significa gris y aburrido: escucha cómo describe un día cualquiera." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Si oyes una hora, apúntala.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Cuenta un día de un personaje de la serie: a qué hora se levanta, qué hace, cuándo come y qué hace por la noche.",
          items: ["Si sveglia… Poi…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 5",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["svegliarsi", "la sveglia", "riposarsi", "il pomeriggio", "spesso", "tardi", "di solito", "pranzare"],
      },
      {
        kind: "table",
        title: "2. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["prendere", "", "", "", "", "", ""],
          ["finire", "", "", "", "", "", ""],
          ["alzarsi", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con el verbo entre paréntesis, la hora o «non… mai».",
        items: [
          "Noi ___ alle sette. (svegliarsi)",
          "Loro ___ di lavorare alle cinque. (finire)",
          "Voi ___ il treno? (prendere)",
          "Tu ___ l'inglese? (capire)",
          "Che ore sono? ___ una e mezza.",
          "Il negozio apre ___ nove.",
          "Io ___ guardo ___ la tv. (nunca)",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Luca", text: "Martina, tu lavori e studi, vero? Com'è la tua giornata?" },
          { who: "Martina", text: "Lunga! Mi sveglio alle sei e mezza e alle otto sono già in ufficio." },
          { who: "Luca", text: "E quando studi?" },
          { who: "Martina", text: "Finisco di lavorare alle due, pranzo veloce e il pomeriggio vado all'università." },
          { who: "Luca", text: "E la sera ti riposi?" },
          { who: "Martina", text: "Mai! La sera studio fino a mezzanotte. Ma il sabato dormo fino alle dieci." },
        ],
        questions: ["A che ora si sveglia Martina?", "Quando finisce di lavorare?", "Che cosa fa il pomeriggio?", "Quando si riposa?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Racconta la tua giornata in un minuto.",
          "Chiedi a un collega a che ora comincia e finisce di lavorare (formale).",
          "Di' tre cose che fai sempre e tre che non fai mai.",
          "Che ore sono? 7:45 · 13:30 · 0:00",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Mi alzo alle sette meno un quarto.", "capisco", "Preferite il tè?", "Non mi riposo mai."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Mi hermano se despierta tarde y nunca desayuna.",
          "¿A qué hora os levantáis?",
          "Las tiendas abren a las nueve y media.",
          "Es la una y cuarto.",
        ],
      },
    ],
  },
};
