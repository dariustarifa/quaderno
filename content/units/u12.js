// Unità 12 · Il tempo e le date
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[12] = {
  n: 12,
  level: "A1",
  title: "Il tempo e le date",
  goal: "Hablar del tiempo que hace, de los meses y las estaciones, y decir fechas, años y cumpleaños.",
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
            "Vas a aprender a hablar del tiempo (fa caldo, piove, c'è il sole), de los meses y las estaciones, y a decir fechas, años y tu cumpleaños.",
            "Gramática: las expresiones del tiempo, los números ordinales (primo, secondo…), cómo se dicen las fechas y los años, y los números grandes.",
            "En italiano «il tempo» significa a la vez el tiempo atmosférico y el tiempo que pasa, como en español.",
          ],
        },
        {
          kind: "intro",
          title: "Che tempo fa?",
          hint: "Un adelanto: el tiempo",
          text: [
            "Para preguntar: «Che tempo fa?». Muchas respuestas van con «fa», como en español con «hace»: fa caldo, fa freddo, fa bel tempo.",
            "Otras van con «c'è»: c'è il sole, c'è vento, c'è nebbia. Y la lluvia y la nieve tienen su verbo: piove, nevica.",
          ],
          examples: [
            { it: "Che tempo fa oggi a Milano?", es: "¿Qué tiempo hace hoy en Milán?" },
            { it: "Fa freddo e c'è nebbia.", es: "Hace frío y hay niebla." },
            { it: "A Napoli c'è il sole e ci sono venti gradi.", es: "En Nápoles hace sol y estamos a veinte grados." },
          ],
        },
        {
          kind: "speak",
          title: "Che tempo fa da te?",
          hint: "Antes de empezar: mira por la ventana y di qué tiempo hace, como puedas.",
          items: ["Oggi…"],
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
          title: "Il tempo",
          hint: "Busca cada expresión y escribe su traducción al español.",
          items: [
            "fa caldo", "fa freddo", "fa bel tempo", "fa brutto tempo", "c'è il sole",
            "c'è vento", "c'è nebbia", "è nuvoloso", "è sereno", "piove",
            "nevica", "il temporale", "la pioggia", "la neve", "l'ombrello",
            "i gradi", "le previsioni del tempo", "umido", "afoso", "mite",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Mesi e stagioni",
          hint: "Escribe en italiano. Los meses van en minúscula, como en español.",
          items: [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
            "la primavera", "el verano", "el otoño", "el invierno", "el cumpleaños", "la fecha",
          ],
        },
        {
          kind: "vocab",
          title: "Numeri grandi",
          hint: "Escribe cada número en cifras.",
          placeholder: "cifra",
          items: [
            "duecento", "cinquecentocinquanta", "mille", "duemila", "milleduecento",
            "millenovecentonovantanove", "duemilaventisei", "un milione",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: d'estate → D'estate fa molto caldo a Siviglia.",
          items: ["d'estate", "piove", "il primo", "compiere gli anni", "a gennaio", "c'è nebbia", "nel", "i gradi"],
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
          title: "Gennaio, giugno, luglio",
          hint: "Los meses difíciles",
          text: [
            "Algunos meses tienen sonidos de las unidades anteriores: gennaio (yen-nà-io), giugno (yù-ño), luglio (lù-llio), maggio (màd-yo).",
            "«Giugno» y «luglio» se confunden mucho al oído: uno lleva gn (ñ) y el otro gli (ll).",
            "Los números grandes se escriben en una sola palabra: «millenovecentonovantanove». Al decirlos, separa por bloques: mille · novecento · novantanove.",
          ],
          table: {
            head: ["", "suena"],
            rows: [
              ["gennaio", "yen-nà-io"],
              ["giugno", "yù-ño"],
              ["luglio", "lù-llio"],
              ["maggio", "màd-yo"],
              ["agosto, settembre", "a-gò-sto, set-tèm-bre"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "I mesi",
          hint: "Escucha y repite. Repite la pareja giugno / luglio hasta que salga sola.",
          items: [
            "gennaio, febbraio, marzo",
            "aprile, maggio, giugno",
            "luglio, agosto, settembre",
            "ottobre, novembre, dicembre",
            "giugno, luglio, giugno, luglio",
          ],
        },
        {
          kind: "shadow",
          title: "Date e anni",
          hint: "Repite con la misma melodía. Separa los años por bloques.",
          items: [
            "Oggi è il primo marzo.",
            "Il mio compleanno è il ventitré luglio.",
            "Sono nata nel millenovecentonovantacinque.",
            "Nel duemilaventi c'è stata la pandemia.",
            "Che tempo fa? Piove e fa freddo.",
          ],
        },
        {
          kind: "speak",
          title: "Leggi le date",
          hint: "Di cada fecha en voz alta antes de escucharla. Ejemplo: 1/5 → il primo maggio.",
          items: ["1/1", "14/2", "25/4", "2/6", "15/8", "31/12"],
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
          title: "Piovere, nevicare e fare",
          hint: "Los verbos del tiempo",
          text: [
            "«Piovere» (llover) y «nevicare» (nevar) se usan solo en tercera persona: piove, nevica. Como en español, sin sujeto.",
            "«Fare» va con muchas expresiones del tiempo: fa caldo, fa freddo, fa fresco, fa bel tempo, fa brutto tempo.",
            "«Essere» va con los adjetivos: è nuvoloso, è sereno, è umido. Y «c'è / ci sono» con los sustantivos: c'è il sole, c'è vento, ci sono trenta gradi.",
          ],
          examples: [
            { it: "A Londra piove spesso.", es: "En Londres llueve a menudo." },
            { it: "In montagna nevica da ieri.", es: "En la montaña nieva desde ayer." },
            { it: "Oggi è nuvoloso, ma non fa freddo.", es: "Hoy está nublado, pero no hace frío." },
          ],
        },
        {
          kind: "intro",
          title: "Compiere gli anni",
          hint: "Cumplir años y nacer",
          text: [
            "«Compiere gli anni» es cumplir años: «Domani compio trent'anni». «Compiere» es un poco irregular: compio, compi, compie, compiamo, compite, compiono.",
            "También se dice «Domani è il mio compleanno» o «Faccio trent'anni».",
            "Para decir cuándo naciste: «Sono nato» (hombre) / «Sono nata» (mujer) + nel + año. Es un pasado que verás en la unidad 15; de momento, apréndelo como fórmula.",
          ],
          examples: [
            { it: "Quando compi gli anni? — Il dodici ottobre.", es: "¿Cuándo es tu cumpleaños? — El doce de octubre." },
            { it: "Sono nata nel duemila.", es: "Nací en el año dos mil." },
            { it: "Buon compleanno! Quanti anni compi?", es: "¡Feliz cumpleaños! ¿Cuántos cumples?" },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["compiere", "compio", "", "", "", "", "compiono"],
            ["festeggiare", "", "festeggi", "", "", "", ""],
            ["cominciare", "", "", "", "cominciamo", "", ""],
            ["partire", "", "", "", "", "", ""],
            ["tornare", "", "", "", "", "tornate", ""],
          ],
        },
        {
          kind: "fill",
          title: "Fa, c'è, è o piove?",
          hint: "Completa con fa, c'è, ci sono, è, piove o nevica.",
          items: [
            "Prendi l'ombrello: ___!",
            "Oggi ___ il sole e ___ caldo.",
            "In Val d'Aosta a gennaio ___ spesso.",
            "Il cielo ___ nuvoloso.",
            "D'inverno a Milano ___ nebbia.",
            "A Palermo ___ trentacinque gradi!",
            "Che tempo ___ da voi?",
          ],
        },
        {
          kind: "fill",
          title: "I verbi delle date",
          hint: "Completa con el verbo entre paréntesis.",
          items: [
            "Mia madre ___ sessant'anni a maggio. (compiere)",
            "Come ___ il tuo compleanno? (festeggiare)",
            "Le lezioni ___ il quindici settembre. (cominciare)",
            "Noi ___ per le vacanze il primo agosto. (partire)",
            "Quando ___ dall'Italia, voi? (tornare)",
            "I miei nonni ___ gli anni lo stesso giorno! (compiere)",
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
          title: "Primo, secondo, terzo",
          hint: "Los números ordinales",
          text: [
            "Del primero al décimo: primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo. A partir del 11, se quita la última vocal del número y se añade -esimo: undicesimo, ventesimo, centesimo. Con «tre» se mantiene la e: ventitreesimo.",
            "Concuerdan como un adjetivo: il primo giorno, la prima volta, i primi mesi.",
            "En las fechas solo se usa el ordinal para el día 1: «il primo maggio». Los demás días van con el número normal: «il due giugno», «il ventidue luglio».",
          ],
          table: {
            head: ["", "ordinal"],
            rows: [
              ["1 · 2 · 3", "primo, secondo, terzo"],
              ["4 · 5 · 6", "quarto, quinto, sesto"],
              ["7 · 8 · 9 · 10", "settimo, ottavo, nono, decimo"],
              ["11 · 20 · 100", "undicesimo, ventesimo, centesimo"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Ordinali",
          hint: "Escribe el ordinal en letras, con la terminación correcta.",
          items: [
            "Abito al (5) ___ piano.",
            "È la (1) ___ volta che vengo in Italia.",
            "Il bagno è la (3) ___ porta a destra.",
            "Gennaio è il (1) ___ mese dell'anno; ottobre è il (10) ___.",
            "Prenda la (2) ___ strada a sinistra.",
            "È il nostro (20) ___ anniversario.",
          ],
        },
        {
          kind: "intro",
          title: "Date e anni",
          hint: "Cómo se dicen las fechas",
          text: [
            "La fecha lleva artículo y no lleva «de»: «Oggi è il quattro marzo» (hoy es cuatro de marzo). Con el día de la semana: «Oggi è lunedì quattro marzo».",
            "Para preguntar: «Che giorno è oggi?» o, más coloquial, «Quanti ne abbiamo oggi?».",
            "Los años llevan «nel» (in + il): «nel 1998», «nel 2026». Los meses van con «a» o «in»: «a marzo», «in marzo». Las estaciones con «in» o «d'»: «in estate», «d'estate».",
          ],
          examples: [
            { it: "Che giorno è oggi? — È il venticinque aprile.", es: "¿Qué día es hoy? — Es veinticinco de abril." },
            { it: "Sono nato nel millenovecentottantotto.", es: "Nací en 1988." },
            { it: "D'inverno a Bologna c'è spesso nebbia.", es: "En invierno en Bolonia hay niebla a menudo." },
          ],
        },
        {
          kind: "fill",
          title: "Il, nel, a, in?",
          hint: "Completa con il, l', nel, a, in o d'.",
          items: [
            "Il mio compleanno è ___ otto novembre.",
            "Sono nata ___ 1997.",
            "___ agosto molti italiani vanno in vacanza.",
            "___ inverno fa freddo, ___ estate fa caldo.",
            "Natale è ___ venticinque dicembre.",
            "La scuola comincia ___ settembre.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Piove. → Che tempo fa?",
          items: [
            "Oggi è il tre maggio.",
            "Il mio compleanno è il nove gennaio.",
            "Compio trentadue anni.",
            "Ci sono ventotto gradi.",
            "Sono nato nel millenovecentonovanta.",
            "Preferisco l'autunno.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Oggi piove.", "Fa freddo.", "C'è il sole.", "Festeggio il compleanno.", "A dicembre nevica sempre."],
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
          title: "Le previsioni del tempo",
          hint: "El parte del tiempo de la tele para el fin de semana. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Meteo", text: "Buonasera. Ecco le previsioni per il fine settimana." },
            { who: "Meteo", text: "Al Nord, sabato, cielo nuvoloso e nebbia in pianura la mattina. Domenica arriva la pioggia, con qualche temporale in Liguria." },
            { who: "Meteo", text: "Al Centro bel tempo: sole a Roma e a Firenze, con temperature fino a ventidue gradi." },
            { who: "Meteo", text: "Al Sud e in Sicilia fa ancora caldo per ottobre: a Palermo ci sono ventisei gradi." },
            { who: "Meteo", text: "Attenzione al vento forte in Sardegna. In montagna, sopra i duemila metri, nevica. Buon fine settimana!" },
          ],
          questions: [
            "Che tempo fa al Nord sabato? E domenica?",
            "Dove ci sono i temporali?",
            "Che tempo fa a Roma? Quanti gradi ci sono?",
            "In che mese siamo? Come lo sai?",
            "Dove c'è vento? Dove nevica?",
          ],
        },
        {
          kind: "listen",
          title: "Quand'è il tuo compleanno?",
          hint: "Dos compañeros de trabajo hablan de cumpleaños. Responde en voz alta.",
          script: [
            { who: "Paola", text: "Sai che venerdì Andrea compie quarant'anni?" },
            { who: "Ivan", text: "Davvero? Allora facciamo un regalo insieme! Quand'è esattamente?" },
            { who: "Paola", text: "Il diciotto, venerdì. E tu, quando compi gli anni?" },
            { who: "Ivan", text: "Io il primo aprile. E nessuno ci crede quando lo dico!" },
            { who: "Paola", text: "Ah ah, il pesce d'aprile! Io sono nata il ventinove febbraio." },
            { who: "Ivan", text: "Quindi festeggi solo ogni quattro anni?" },
            { who: "Paola", text: "No, festeggio il ventotto. Ma il vero compleanno è ogni quattro anni!" },
          ],
          questions: [
            "Quanti anni compie Andrea? Quando?",
            "Che cosa propone Ivan?",
            "Quand'è il compleanno di Ivan? Perché nessuno ci crede?",
            "Quand'è nata Paola? Che problema c'è?",
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
          title: "Il calendario italiano",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "L'anno italiano comincia con due feste: Capodanno, il primo gennaio, e l'Epifania, il sei. La notte tra il cinque e il sei arriva la Befana, una vecchia signora che porta dolci ai bambini buoni e carbone a quelli cattivi.",
            "In primavera ci sono due feste importanti per la storia d'Italia: il venticinque aprile, la Festa della Liberazione, e il primo maggio, la Festa dei lavoratori. Il lunedì dopo Pasqua, a Pasquetta, molti fanno un picnic in campagna.",
            "Il due giugno è la Festa della Repubblica: nel 1946 gli italiani hanno scelto la Repubblica al posto della monarchia.",
            "Il quindici agosto è Ferragosto. Fa caldissimo, le città si svuotano e quasi tutti sono al mare o in montagna. Molti negozi chiudono per una o due settimane.",
            "E il clima? Al Nord gli inverni sono freddi e c'è spesso nebbia; al Sud le estati sono lunghe e molto calde, e d'inverno il tempo è più mite.",
          ],
          questions: [
            "Chi è la Befana? Quando arriva?",
            "Che cosa si festeggia il venticinque aprile e il primo maggio?",
            "Che cosa fanno molti italiani a Pasquetta?",
            "Perché il due giugno è una festa?",
            "Che cosa succede a Ferragosto?",
            "Com'è il clima al Nord e al Sud?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Qué fiestas importantes hay en España y cuándo son? ¿Cómo es el clima en tu ciudad en cada estación? 3 o 4 frases, en voz alta.",
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
          title: "Parlare del tempo",
          hint: "La charla del tiempo",
          text: [
            "Hablar del tiempo es la forma más fácil de empezar una conversación con alguien: en el ascensor, en una parada o en el bar.",
            "Frases útiles: «Che caldo oggi!», «Che freddo!», «Che tempaccio!» (¡qué tiempo tan malo!), «Speriamo che non piova» (ojalá no llueva).",
          ],
          examples: [
            { it: "Che caldo oggi, eh?", es: "Qué calor hace hoy, ¿eh?" },
            { it: "Sì, e domani è peggio: trentotto gradi!", es: "Sí, y mañana es peor: ¡treinta y ocho grados!" },
            { it: "Che tempaccio! Piove da tre giorni.", es: "¡Qué tiempo tan malo! Llueve desde hace tres días." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Che tempo fa oggi da te?",
            "Qual è la tua stagione preferita? Perché?",
            "Quand'è il tuo compleanno? Come lo festeggi di solito?",
            "In che anno sei nato o nata?",
            "Che tempo fa nella tua città d'estate e d'inverno?",
            "Qual è il tuo mese preferito? Perché?",
            "Che giorno è oggi?",
          ],
        },
        {
          kind: "speak",
          title: "Date importanti",
          hint: "Di la fecha (o el año) de cada cosa en una frase completa. Ejemplo: Natale → Natale è il venticinque dicembre.",
          items: ["il tuo compleanno", "il compleanno di tua madre", "Capodanno", "l'anno in cui hai cominciato a lavorare o studiare", "il tuo prossimo viaggio", "la festa più importante della tua città"],
        },
        {
          kind: "roleplay",
          title: "In ascensore",
          hint: "Coincides en el ascensor con una vecina mayor. Charla de tiempo con «Lei», con naturalidad. La IA hace de vecina.",
          steps: [
            "Saluda y comenta el tiempo de hoy.",
            "Responde a lo que dice del tiempo de mañana.",
            "Pregunta qué estación prefiere y por qué.",
            "Ella te dice que mañana es su cumpleaños: felicítala y pregunta cuántos años cumple (con educación).",
            "Despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "Organizziamo una festa",
          hint: "Organizáis con un amigo una fiesta sorpresa para otro amigo. La IA hace del amigo. Es informal.",
          steps: [
            "Di cuándo es el cumpleaños y cuántos años cumple.",
            "Decidid el día de la fiesta (fecha exacta) y la hora.",
            "Mirad el tiempo previsto: ¿en el parque o en casa?",
            "Decidid el regalo.",
            "Repasad juntos el plan final.",
          ],
        },
        {
          kind: "speak",
          title: "Il mio anno",
          hint: "Habla un minuto de tu año: tu estación preferida, tus fechas importantes y qué tiempo hace en tu ciudad en cada época.",
          items: ["La mia stagione preferita è…"],
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
            "Hoy hace sol, pero hace frío.",
            "En invierno nieva en la montaña.",
            "Mi cumpleaños es el uno de junio.",
            "Nací en 1993.",
            "¿Qué día es hoy?",
            "En agosto hace mucho calor en el sur.",
            "Es la primera vez que vengo a Roma.",
            "Mañana llueve: coge el paraguas.",
          ],
        },
        {
          kind: "write",
          title: "Una cartolina",
          hint: "Estás de vacaciones en Italia. Escribe una postal (6–8 frases): dónde estás, qué fecha es, qué tiempo hace y qué haces.",
          rows: 8,
          items: ["Cara… / Caro…"],
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
          title: "Dettato: date e numeri",
          hint: "Escucha y escribe en cifras. Ejemplo: il due giugno → 2/6.",
          placeholder: "cifra",
          items: ["il primo maggio", "il quindici agosto", "il ventotto febbraio", "millenovecentosettantacinque", "duemilaundici", "duecentocinquanta"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: ["Che tempo fa?", "Oggi piove e fa freddo.", "D'estate fa caldissimo.", "Compio gli anni a luglio.", "È la prima volta."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "YouTube", title: "Previsioni meteo", where: "YouTube, RaiPlay", why: "Busca «previsioni meteo» de cualquier día: duran dos minutos, usan siempre las mismas palabras y vienen con mapa." },
            { type: "Canción", title: "Estate, Bruno Martino", where: "Spotify, YouTube", why: "Canción de 1960 que se volvió un estándar de jazz. Lenta y muy clara." },
            { type: "Película", title: "La Befana vien di notte (2018)", where: "Busca dónde verla en JustWatch", why: "Comedia familiar sobre la Befana. Ligera y fácil de seguir." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Apunta las fechas y temperaturas.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Cuenta el tiempo de mañana en Italia como si fueras el presentador: Norte, Centro y Sur.",
          items: ["Domani al Nord…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 12",
    hint: "Unos 40 minutos, sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["la nebbia", "il temporale", "afoso", "mite", "è sereno", "l'autunno", "luglio", "compiere gli anni", "le previsioni", "Capodanno"],
      },
      {
        kind: "vocab",
        from: "es",
        title: "2. Al contrario",
        hint: "Traduce al italiano.",
        items: ["nieva", "hace buen tiempo", "junio", "el paraguas", "el quinto", "el vigésimo"],
      },
      {
        kind: "table",
        title: "3. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["compiere", "", "", "", "", "", ""],
          ["festeggiare", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "4. Completa",
        hint: "Completa con fa, c'è, è, piove, una preposición o un ordinal.",
        items: [
          "Oggi ___ freddo e ___ vento.",
          "Il cielo ___ nuvoloso.",
          "Prendi l'ombrello, ___!",
          "Sono nato ___ 1999.",
          "Il mio compleanno è ___ primo ottobre.",
          "___ estate andiamo al mare.",
          "Abito al (3) ___ piano.",
          "Natale è il (25) ___ dicembre.",
        ],
      },
      {
        kind: "translate",
        from: "it",
        placeholder: "trasforma",
        title: "5. Trasforma",
        hint: "Las tres primeras, a negativo. Las tres últimas, escribe la pregunta.",
        items: [
          "Oggi c'è il sole.",
          "A Roma nevica.",
          "Festeggiamo a casa.",
          "Oggi è il dieci marzo.",
          "Compio venticinque anni.",
          "Fa molto caldo.",
        ],
      },
      {
        kind: "reading",
        title: "6. Leggi",
        hint: "Lee el texto y responde en italiano.",
        text: [
          "Marta abita a Trento, in montagna. Il suo mese preferito è dicembre: fa freddo, ma spesso nevica e il paese diventa bianco.",
          "Suo fratello Luca, invece, abita a Catania, in Sicilia, e odia l'inverno del Nord. «Da me a dicembre ci sono quindici gradi e il sole», dice sempre.",
          "Ogni anno, il ventisei dicembre, Luca va a trovare Marta. Il primo giorno è contento della neve; il terzo giorno vuole già tornare al caldo.",
        ],
        questions: ["Dove abita Marta? Qual è il suo mese preferito?", "Che tempo fa a Catania a dicembre?", "Quando va Luca a trovare Marta?", "Come si sente Luca il terzo giorno? Perché?"],
      },
      {
        kind: "listen",
        title: "7. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Sofia", text: "Andiamo al lago domenica? Sono tre giorni che piove." },
          { who: "Marco", text: "Ho visto le previsioni: domenica c'è il sole e ventiquattro gradi." },
          { who: "Sofia", text: "Perfetto! Domenica è il primo giugno, vero?" },
          { who: "Marco", text: "Sì, e il due è festa: possiamo restare anche lunedì." },
          { who: "Sofia", text: "Allora prenoto un albergo per due notti." },
        ],
        questions: ["Che tempo fa da tre giorni?", "Che tempo fa domenica? Quanti gradi?", "Che data è domenica?", "Perché possono restare anche lunedì?", "Che cosa fa Sofia?"],
      },
      {
        kind: "speak",
        title: "8. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Che tempo fa oggi da te? E domani?",
          "Di' la data del tuo compleanno e l'anno in cui sei nato o nata.",
          "Descrivi le quattro stagioni nella tua città.",
          "Leggi queste date: 1/1 · 25/4 · 15/8 · 1989 · 2031",
        ],
      },
      {
        kind: "roleplay",
        title: "9. Alla fermata",
        hint: "Hazlo con la IA, de una vez y sin preparar. Usa «Lei».",
        steps: [
          "Empieza una charla sobre el tiempo con una señora en la parada.",
          "Ella te pregunta de dónde eres y qué tiempo hace allí: responde.",
          "Despídete deseándole un buen día.",
        ],
      },
      {
        kind: "dictation",
        title: "10. Dettato",
        hint: "Escucha y escribe.",
        items: ["il primo gennaio", "Fa bel tempo.", "nel duemilaquindici", "C'è la nebbia.", "il terzo piano", "giugno e luglio"],
      },
      {
        kind: "translate",
        title: "11. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "¿Qué tiempo hace en Milán?",
          "Hoy es tres de abril.",
          "En otoño llueve mucho.",
          "Cumplo treinta años en mayo.",
          "Estamos a cinco grados.",
          "Es la segunda vez que nieva este año.",
        ],
      },
      {
        kind: "write",
        title: "12. Scrivi",
        hint: "Escribe un mensaje a un amigo italiano (50–60 palabras) para invitarlo a tu ciudad: cuándo venir, qué tiempo hace en esa época y qué ropa traer.",
        rows: 6,
        items: ["Ciao! Perché non vieni a trovarmi…"],
      },
    ],
  },
};
