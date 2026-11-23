// Unità 2 · Chi sei?
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[2] = {
  n: 2,
  level: "A1",
  title: "Chi sei?",
  goal: "Decir tu edad, tu profesión y tus datos personales, y contar hasta 100.",
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
            "Vas a aprender a decir tu edad, a qué te dedicas y tus datos personales (teléfono, correo, dirección), y a contar hasta 100.",
            "Gramática: el verbo avere, el artículo indeterminado (un, uno, una, un'), el masculino y el femenino de las profesiones y los verbos en -are que cambian al escribirlos.",
            "Vuelven essere, la negación y las preguntas de la unidad 1. Si algo no te sale, repásala antes.",
          ],
        },
        {
          kind: "intro",
          title: "Quanti anni hai? Che lavoro fai?",
          hint: "La edad y la profesión",
          text: [
            "La edad se dice con «avere», igual que en español con «tener»: «Ho trent'anni» (tengo treinta años).",
            "Para la profesión hay dos maneras: «Sono insegnante» (sin artículo) o «Faccio l'insegnante» (con artículo). Las dos son normales. «Faccio» viene de «fare» (hacer); de momento apréndelo como fórmula.",
          ],
          examples: [
            { it: "Quanti anni hai?", es: "¿Cuántos años tienes?" },
            { it: "Ho ventotto anni.", es: "Tengo veintiocho años." },
            { it: "Che lavoro fai?", es: "¿A qué te dedicas?" },
            { it: "Sono medico.", es: "Soy médico." },
            { it: "Faccio la cameriera.", es: "Trabajo de camarera." },
            { it: "Lavoro in un ufficio.", es: "Trabajo en una oficina." },
          ],
        },
        {
          kind: "speak",
          title: "Ripasso: presentati",
          hint: "Antes de empezar, preséntate como en la unidad 1: saludo, nombre, de dónde eres y dónde vives.",
          items: ["Ciao, mi chiamo…"],
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
          title: "Le professioni",
          hint: "Traduce al español. Fíjate en cuáles tienen una forma para él y otra para ella.",
          items: [
            "l'insegnante", "il medico", "l'infermiere / l'infermiera", "il cameriere / la cameriera",
            "il commesso / la commessa", "l'avvocato", "l'ingegnere", "l'impiegato / l'impiegata",
            "il cuoco / la cuoca", "l'attore / l'attrice", "il / la giornalista", "il parrucchiere",
            "lo studente / la studentessa", "il pensionato", "disoccupato", "il / la dentista",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Dati personali",
          hint: "Ahora al revés: escribe cada palabra en italiano, con su artículo si es un sustantivo.",
          items: [
            "el nombre", "el apellido", "la edad", "la dirección",
            "la calle", "el número de teléfono", "el móvil", "el correo electrónico",
            "casado / casada", "soltero / soltera", "la oficina", "el hospital",
            "el colegio", "la tienda", "trabajar", "buscar trabajo",
          ],
        },
        {
          kind: "vocab",
          title: "I numeri fino a 100",
          hint: "Escribe cada número en cifras.",
          placeholder: "cifra",
          items: [
            "ventuno", "trentotto", "quarantatré", "cinquantasei", "sessantuno", "settantadue",
            "ottantotto", "novantanove", "trentatré", "quarantasette", "cento", "sessantotto",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: anni → Giulia ha venticinque anni.",
          items: ["avere", "lavoro", "un'amica", "ospedale", "sposato", "numero di telefono", "uno studente", "cercare"],
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
          title: "L'acca muta e i numeri",
          hint: "La h que no suena y las decenas",
          text: [
            "La h no se pronuncia nunca en italiano. Sirve para distinguir palabras que suenan igual: «ho» (tengo) y «o» (o); «ha» (tiene) y «a» (a); «hanno» (tienen) y «anno» (año).",
            "La «è» con acento es el verbo (es); la «e» sin acento significa «y»: «Marco è alto e simpatico».",
            "Las decenas pierden la vocal final delante de uno y otto: ventuno, ventotto, trentuno, trentotto. Y el tre del final lleva acento: ventitré, trentatré.",
          ],
          table: {
            head: ["", "+ 1", "+ 8"],
            rows: [
              ["venti", "ventuno", "ventotto"],
              ["trenta", "trentuno", "trentotto"],
              ["quaranta", "quarantuno", "quarantotto"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti: i numeri",
          hint: "Escucha cada línea, primero lenta y luego normal. Repite en voz alta hasta que suene igual.",
          items: [
            "dieci, venti, trenta, quaranta, cinquanta",
            "sessanta, settanta, ottanta, novanta, cento",
            "ventuno, trentuno, quarantuno",
            "ventotto, trentotto, quarantotto",
            "ventitré, trentatré, novantatré",
            "diciassette, settanta, settantasette",
          ],
        },
        {
          kind: "shadow",
          title: "Ho, hai, ha",
          hint: "La h no suena: las parejas se dicen igual. Repite las frases.",
          items: ["ho, o", "ha, a", "hanno, anno", "Ho un fratello.", "Ha un amico a Roma.", "Hanno trent'anni."],
        },
        {
          kind: "shadow",
          title: "Frasi",
          hint: "Repite con la misma melodía.",
          items: [
            "Quanti anni hai?",
            "Ho ventisei anni.",
            "Che lavoro fai?",
            "Faccio l'infermiera.",
            "Qual è il tuo numero di telefono?",
            "La mia email è anna punto rossi chiocciola gmail punto com.",
          ],
        },
        {
          kind: "speak",
          title: "I tuoi numeri",
          hint: "Di en voz alta estos números en italiano. Los teléfonos se leen cifra a cifra o de dos en dos.",
          items: ["Il tuo numero di telefono", "La tua età", "Il numero di casa tua", "Il codice postale della tua città"],
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
          title: "Il verbo avere",
          hint: "El verbo avere (tener)",
          text: [
            "«Avere» significa tener y también haber. Es irregular, como essere, y es de los verbos más usados: sirve para la edad, para lo que tienes y, más adelante, para hablar del pasado. Busca sus formas para completar la tabla.",
            "Recuerda: la h de ho, hai, ha y hanno no se pronuncia.",
            "Con avere se dicen sensaciones que en español van con tener: ho fame (hambre), ho sete (sed), ho freddo (frío), ho caldo (calor), ho sonno (sueño).",
          ],
          examples: [
            { it: "Ho un fratello e una sorella.", es: "Tengo un hermano y una hermana." },
            { it: "Quanti anni ha Marco?", es: "¿Cuántos años tiene Marco?" },
            { it: "Abbiamo una casa al mare.", es: "Tenemos una casa en la playa." },
            { it: "Hai fame?", es: "¿Tienes hambre?" },
          ],
        },
        {
          kind: "intro",
          title: "Verbi in -are con trappola",
          hint: "Verbos en -are que cambian al escribirlos",
          text: [
            "Los verbos en -care y -gare (cercare, pagare) añaden una h delante de i para mantener el sonido duro: tu cerchi, noi cerchiamo; tu paghi, noi paghiamo.",
            "Los verbos en -iare (studiare, mangiare) no repiten la i: tu studi, noi studiamo. Nunca «studii» ni «studiiamo».",
          ],
          table: {
            head: ["", "cercare", "studiare"],
            rows: [
              ["io", "cerco", "studio"],
              ["tu", "cerchi", "studi"],
              ["lui / lei / Lei", "cerca", "studia"],
              ["noi", "cerchiamo", "studiamo"],
              ["voi", "cercate", "studiate"],
              ["loro", "cercano", "studiano"],
            ],
          },
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Essere va entero: es repaso de la unidad 1.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["avere", "ho", "", "", "", "", ""],
            ["essere", "", "", "", "", "", ""],
            ["lavorare", "", "", "", "", "", "lavorano"],
            ["insegnare", "", "", "", "insegniamo", "", ""],
            ["pagare", "", "paghi", "", "", "", ""],
            ["mangiare", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Il verbo avere",
          hint: "Completa con la forma correcta de «avere».",
          items: [
            "Io ___ ventinove anni.",
            "Tu ___ un fratello?",
            "Giulia ___ un gatto e un cane.",
            "Noi ___ una casa a Bari.",
            "Voi ___ fame?",
            "Marco e Luca ___ trent'anni.",
            "Quanti anni ___, signora?",
            "Io non ___ il numero di Paolo.",
          ],
        },
        {
          kind: "fill",
          title: "Essere o avere?",
          hint: "Completa con essere o avere en la forma correcta.",
          items: [
            "Io ___ medico e ___ quarantadue anni.",
            "Lucia ___ spagnola, ma ___ una casa a Roma.",
            "Tu ___ sposato?",
            "Noi ___ studenti e ___ sempre fame.",
            "Lei ___ freddo, signora?",
            "Loro ___ di Milano e ___ due figli.",
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
          title: "Un, uno, una, un'",
          hint: "El artículo indeterminado",
          text: [
            "En español hay un y una. En italiano hay cuatro formas: dependen del género y de cómo empieza la palabra siguiente.",
            "Masculino: «un» casi siempre (un libro, un amico); «uno» delante de s + consonante, z, gn y ps (uno studente, uno zio, uno psicologo).",
            "Femenino: «una» delante de consonante (una casa) y «un'» con apóstrofo delante de vocal (un'amica).",
            "Ojo: «un amico» (masculino) va sin apóstrofo; «un'amica» (femenino) lo lleva.",
          ],
          table: {
            head: ["", "masculino", "femenino"],
            rows: [
              ["delante de consonante", "un ragazzo", "una ragazza"],
              ["delante de vocal", "un amico", "un'amica"],
              ["delante de s + consonante, z, gn, ps", "uno studente, uno zio", "una studentessa, una zia"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Un, uno, una o un'?",
          hint: "Completa con el artículo indeterminado.",
          items: [
            "Lavoro in ___ ufficio.",
            "Paolo è ___ studente.",
            "Ho ___ amica a Pisa.",
            "Lei è ___ insegnante di inglese.",
            "Cerco ___ zaino nuovo.",
            "Lavora in ___ ospedale.",
            "È ___ scuola molto grande.",
            "Luca è ___ psicologo.",
            "Scrivo ___ email a Giulia.",
            "Ho ___ zio in Argentina.",
          ],
        },
        {
          kind: "intro",
          title: "Maschile e femminile delle professioni",
          hint: "Masculino y femenino de las profesiones",
          text: [
            "Muchas cambian -o por -a: il cuoco, la cuoca. Las que acaban en -iere pasan a -iera: il cameriere, la cameriera.",
            "Algunas en -e no cambian: l'insegnante, il / la cantante. Otras pasan a -essa: lo studente, la studentessa; il professore, la professoressa.",
            "Las que acaban en -tore pasan a -trice: l'attore, l'attrice; il direttore, la direttrice. Las que acaban en -ista son iguales: il / la giornalista.",
            "Con medico, avvocato, ingegnere o architetto se usa a menudo la misma forma para los dos («Lei è avvocato»), aunque cada vez se oye más «avvocata» o «architetta».",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "al femminile",
          title: "Al femminile",
          hint: "Pasa cada frase al femenino. Ejemplo: Lui è un cuoco. → Lei è una cuoca.",
          items: [
            "Lui è un cameriere.",
            "Lui è uno studente.",
            "Lui è un attore.",
            "Lui è un insegnante.",
            "Lui è un commesso.",
            "Lui è un giornalista.",
            "Lui è un professore.",
            "Lui è un infermiere.",
          ],
        },
        {
          kind: "intro",
          title: "Domande personali",
          hint: "Preguntar los datos de alguien",
          text: [
            "Para la edad: «Quanti anni hai?». Para la profesión: «Che lavoro fai?» o «Che cosa fai nella vita?».",
            "Para un dato concreto se usa «qual è» (cuál es): «Qual è il tuo numero?», «Qual è la tua email?». «Il tuo / la tua» es tu; lo verás bien en la unidad 3.",
            "En los correos, @ se dice «chiocciola» (caracol) y el punto, «punto».",
          ],
          examples: [
            { it: "Qual è il tuo indirizzo?", es: "¿Cuál es tu dirección?" },
            { it: "Sei sposato?", es: "¿Estás casado?" },
            { it: "Dove lavori?", es: "¿Dónde trabajas?" },
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Ho ventisei anni. → Quanti anni hai?",
          items: [
            "Ho ventisei anni.",
            "Sono ingegnere.",
            "Lavoro in un ospedale.",
            "Il mio numero è 347 285 1190.",
            "No, non sono sposato.",
            "La mia email è luca.bianchi@libero.it.",
            "Abito in via Garibaldi 14.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "in forma negativa",
          title: "Frasi negative",
          hint: "Pasa cada frase a negativo.",
          items: ["Ho un cane.", "Luisa è infermiera.", "Abbiamo fame.", "Lavorano in un negozio.", "Sono sposato.", "Paolo cerca lavoro."],
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
          title: "In palestra",
          hint: "Una persona se apunta a un gimnasio. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Impiegata", text: "Buongiorno! Desidera?" },
            { who: "Davide", text: "Buongiorno. Cerco informazioni per l'iscrizione." },
            { who: "Impiegata", text: "Certo. Come si chiama?" },
            { who: "Davide", text: "Davide Ferri. Ferri con due erre." },
            { who: "Impiegata", text: "Quanti anni ha?" },
            { who: "Davide", text: "Ho trentaquattro anni." },
            { who: "Impiegata", text: "E che lavoro fa?" },
            { who: "Davide", text: "Sono infermiere. Lavoro in un ospedale qui vicino." },
            { who: "Impiegata", text: "Bene. Qual è il suo numero di telefono?" },
            { who: "Davide", text: "Tre quattro sette, ventidue, sessantotto, novantuno." },
            { who: "Impiegata", text: "E l'email?" },
            { who: "Davide", text: "Davide punto ferri chiocciola gmail punto com." },
            { who: "Impiegata", text: "Perfetto. L'abbonamento costa quaranta euro al mese." },
          ],
          questions: [
            "Come si chiama l'uomo? Come si scrive il cognome?",
            "Quanti anni ha?",
            "Che lavoro fa?",
            "Qual è il suo numero di telefono? Scrivilo in cifre.",
            "Quanto costa la palestra al mese?",
          ],
        },
        {
          kind: "listen",
          title: "Al parco",
          hint: "Dos amigos se encuentran. Ahora es informal. Responde en voz alta.",
          script: [
            { who: "Chiara", text: "Ehi, Matteo! Come va?" },
            { who: "Matteo", text: "Ciao Chiara! Bene, e tu? Hai un cane nuovo?" },
            { who: "Chiara", text: "Sì, si chiama Bruno. Ha solo un anno." },
            { who: "Matteo", text: "È bellissimo! E il lavoro? Sei ancora commessa?" },
            { who: "Chiara", text: "No, adesso faccio la cuoca in un ristorante. E tu, lavori?" },
            { who: "Matteo", text: "No, sono disoccupato. Cerco lavoro come cameriere." },
            { who: "Chiara", text: "Ma il mio ristorante cerca un cameriere!" },
            { who: "Matteo", text: "Davvero? Hai il numero del capo?" },
            { who: "Chiara", text: "Sì, ecco: tre tre tre, quaranta, cinquantadue, diciotto." },
          ],
          questions: [
            "Come si chiama il cane di Chiara? Quanti anni ha?",
            "Che lavoro fa Chiara adesso?",
            "Matteo lavora?",
            "Che lavoro cerca Matteo?",
            "Perché è una buona notizia per Matteo?",
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
          title: "Buongiorno, dottore!",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "In Italia i titoli sono importanti. Una persona con la laurea è spesso «dottore» o «dottoressa», anche se non è medico.",
            "Al lavoro si dice «Buongiorno, dottor Bianchi» o «Buongiorno, ingegnere». Davanti al cognome, «dottore» diventa «dottor», come «signore» diventa «signor»: «Buongiorno, dottore», ma «il dottor Rossi».",
            "Anche altre professioni sono titoli: «avvocato», «architetto», «professore». E a volte, al bar o in un negozio, un cliente è «dottore» anche se nessuno sa che lavoro fa.",
            "I giovani, invece, usano poco i titoli: tra colleghi giovani si usano spesso il «tu» e il nome.",
            "E le donne? Oggi molte dicono «l'avvocata» o «l'architetta». Altre preferiscono «l'avvocato» o «l'architetto». Sono due scelte possibili.",
          ],
          questions: [
            "Chi è «dottore» in Italia?",
            "Come diventa «dottore» davanti al cognome?",
            "Quali altre professioni sono titoli?",
            "I giovani usano molto i titoli?",
            "Come si dice «avvocato» al femminile? Quante possibilità ci sono?",
            "Tu hai un titolo? Quale?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿En España se usan títulos como «doctor» o «licenciado»? ¿Con quién? Explícalo en italiano con 3 o 4 frases, en voz alta.",
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
          title: "I dati con il Lei",
          hint: "Preguntar datos de usted",
          text: [
            "Con Lei, el verbo va en tercera persona y «il tuo / la tua» pasa a «il suo / la sua», como «tu» y «su» en español.",
          ],
          examples: [
            { it: "Quanti anni hai? → Quanti anni ha?", es: "¿Cuántos años tienes? → ¿Cuántos años tiene?" },
            { it: "Che lavoro fai? → Che lavoro fa?", es: "¿A qué te dedicas? → ¿A qué se dedica?" },
            { it: "Qual è il tuo numero? → Qual è il suo numero?", es: "¿Cuál es tu número? → ¿Cuál es su número?" },
            { it: "Sei sposato? → È sposato?", es: "¿Estás casado? → ¿Está casado?" },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas. Si no sabes una palabra, búscala y vuelve a intentarlo.",
          items: [
            "Quanti anni hai?",
            "Che lavoro fai?",
            "Dove lavori o dove studi?",
            "Sei sposato o sposata?",
            "Hai fratelli o sorelle?",
            "Hai un cane o un gatto?",
            "Qual è la tua email? Dilla lettera per lettera.",
            "Hai fame adesso?",
          ],
        },
        {
          kind: "speak",
          title: "Dal tu al Lei",
          hint: "Convierte la pregunta informal en formal. Ejemplo: Quanti anni hai? → Quanti anni ha?",
          items: ["Che lavoro fai?", "Hai un figlio?", "Dove lavori?", "Sei medico?", "Qual è il tuo indirizzo?"],
        },
        {
          kind: "speak",
          title: "No, non è così",
          hint: "Niega y corrige. Ejemplo: Hai vent'anni? (25) → No, non ho vent'anni, ho venticinque anni.",
          items: [
            "Hai trent'anni? (33)",
            "Sei medico? (infermiere)",
            "Luca è cameriere? (cuoco)",
            "Avete un cane? (un gatto)",
            "Lavori in un negozio? (in un ufficio)",
          ],
        },
        {
          kind: "roleplay",
          title: "In biblioteca",
          hint: "Te sacas el carné de una biblioteca en Bolonia. Hablas con el bibliotecario: usa «Lei». Si quieres, pide a la IA que haga de bibliotecario.",
          steps: [
            "Saluda (es por la tarde) y di que quieres el carné («la tessera»).",
            "Di tu nombre y deletrea tu apellido.",
            "Di tu edad y tu profesión.",
            "Da tu dirección y tu número de teléfono.",
            "Da tu correo electrónico.",
            "Da las gracias y despídete.",
          ],
        },
        {
          kind: "roleplay",
          title: "Lo scambio linguistico",
          hint: "Primer encuentro de un intercambio de idiomas. Es informal.",
          steps: [
            "Saluda y preséntate.",
            "Pregunta qué edad tiene y a qué se dedica.",
            "Responde tú a las mismas preguntas.",
            "Pregunta si tiene hermanos o mascotas.",
            "Pide su número de teléfono y da el tuyo.",
            "Despídete y propón veros la semana que viene («la settimana prossima»).",
          ],
        },
        {
          kind: "speak",
          title: "Presentati",
          hint: "Preséntate durante 45 segundos sin parar: nombre, edad, de dónde eres, dónde vives, a qué te dedicas y si tienes hermanos o mascotas.",
          items: ["La mia presentazione"],
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
            "Tengo treinta y cuatro años.",
            "¿A qué te dedicas?",
            "Ana es enfermera y trabaja en un hospital.",
            "No tengo perro, tengo un gato.",
            "¿Cuántos años tiene usted?",
            "Soy estudiante, pero busco trabajo.",
            "Él es actor y ella es actriz.",
            "Tenemos hambre.",
            "¿Cuál es tu correo electrónico?",
          ],
        },
        {
          kind: "write",
          title: "Il modulo d'iscrizione",
          hint: "Rellena la ficha de inscripción de un curso de italiano con tus datos (puedes inventarlos).",
          rows: 1,
          items: ["Nome:", "Cognome:", "Età:", "Nazionalità:", "Professione:", "Indirizzo:", "Telefono:", "Email:"],
        },
        {
          kind: "write",
          title: "Una persona che conosco",
          hint: "Describe a alguien que conozcas (un amigo, un compañero de trabajo): cómo se llama, cuántos años tiene, de dónde es, dónde vive y a qué se dedica. Entre 5 y 6 frases.",
          rows: 7,
          items: ["Si chiama…"],
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
          title: "Dettato: numeri",
          hint: "Escucha y escribe el número en cifras.",
          placeholder: "cifra",
          items: ["trentadue", "quarantotto", "cinquantuno", "sessantasei", "settantatré", "ottantanove", "novantaquattro", "cento"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes. Cuidado con la h y los apóstrofos.",
          items: ["Ho ventisette anni.", "Che lavoro fa?", "Sono un'infermiera.", "Hanno un cane.", "Lavoro in un ufficio."],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "YouTube", title: "Learn Italian with Lucrezia", where: "YouTube", why: "Vídeos cortos para principiantes, explicados con calma. Busca uno sobre los números o las profesiones." },
            { type: "Película", title: "Smetto quando voglio (2014)", where: "Busca dónde verla en JustWatch", why: "Comedia sobre investigadores con título universitario que no encuentran trabajo. Pon subtítulos en italiano o en español." },
            { type: "Canción", title: "50 Special, Lùnapop", where: "Spotify, YouTube", why: "Pop de 1999 sobre ir en Vespa. Ritmo alegre y fácil de seguir." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas). Si oyes números o profesiones, anótalos también.",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Habla de una persona del vídeo, la película o la canción: cómo se llama, cuántos años tiene más o menos y a qué se dedica.",
          items: ["Si chiama… Ha… anni. Fa…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 2",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["l'impiegata", "il cuoco", "il cognome", "l'indirizzo", "sposato", "disoccupato", "la chiocciola", "settantasei"],
      },
      {
        kind: "table",
        title: "2. Verbi",
        hint: "Completa la tabla.",
        cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
        rows: [
          ["avere", "", "", "", "", "", ""],
          ["cercare", "", "", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con un artículo (un, uno, una, un'), con essere o con avere.",
        items: [
          "Ho ___ amica a Napoli.",
          "Lui è ___ studente di medicina.",
          "Quanti anni ___ Giulia?",
          "Noi ___ sete.",
          "Lei è ___ attrice famosa.",
          "Tu non ___ sposato, vero?",
          "Lavoro in ___ zoo.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Impiegato", text: "Buongiorno. Lei cerca lavoro?" },
          { who: "Irene", text: "Sì. Mi chiamo Irene Costa, ho ventinove anni." },
          { who: "Impiegato", text: "Che lavoro fa?" },
          { who: "Irene", text: "Sono cuoca, ma adesso sono disoccupata." },
          { who: "Impiegato", text: "Va bene. Qual è il suo numero di telefono?" },
          { who: "Irene", text: "Tre due otto, quindici, settantaquattro, sessanta." },
          { who: "Impiegato", text: "Grazie. C'è un ristorante che cerca una cuoca." },
        ],
        questions: ["Quanti anni ha Irene?", "Che lavoro fa?", "Lavora adesso?", "Qual è il suo numero? Scrivilo in cifre."],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Presentati con età e professione.",
          "Chiedi a una signora quanti anni ha e che lavoro fa (formale).",
          "Di' il tuo numero di telefono e la tua email.",
          "Descrivi una persona che conosci: nome, età, lavoro.",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["Ha cinquantotto anni.", "novantadue", "Uno zio e un'amica.", "Che lavoro fai?"],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Ella es actriz y tiene veintinueve años.",
          "¿A qué se dedica usted?",
          "No tenemos frío.",
          "Buscamos un camarero.",
        ],
      },
    ],
  },
};
