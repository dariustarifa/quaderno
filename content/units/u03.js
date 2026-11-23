// Unità 3 · La mia famiglia
// Mismo formato que u01.js (ver los tipos de bloque allí).
window.UNITS = window.UNITS || {};
window.UNITS[3] = {
  n: 3,
  level: "A1",
  title: "La mia famiglia",
  goal: "Hablar de tu familia y describir a personas por fuera y de carácter.",
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
            "Vas a aprender a hablar de tu familia y a describir a personas: cómo son por fuera y cómo son de carácter.",
            "Gramática: el artículo determinado (il, lo, la, i, gli, le…), los posesivos (mio, tuo, suo…), los adjetivos y su concordancia, y los primeros plurales.",
            "Vuelven essere y avere: los dos sirven para describir, y aquí verás cuándo va cada uno.",
          ],
        },
        {
          kind: "intro",
          title: "Mia madre o la mia mamma?",
          hint: "Un adelanto: los posesivos",
          text: [
            "En italiano el posesivo suele llevar artículo: «la mia casa» (mi casa), «il tuo lavoro» (tu trabajo).",
            "Con un familiar en singular, el artículo desaparece: «mia madre», «tuo fratello». Lo verás en detalle en la página 5.",
          ],
          examples: [
            { it: "Questa è la mia famiglia.", es: "Esta es mi familia." },
            { it: "Mia sorella si chiama Laura.", es: "Mi hermana se llama Laura." },
            { it: "I miei genitori abitano a Siviglia.", es: "Mis padres viven en Sevilla." },
          ],
        },
        {
          kind: "speak",
          title: "Chi c'è nella tua famiglia?",
          hint: "Antes de empezar: di los nombres de las personas de tu familia, aunque sea con palabras sueltas. Ejemplo: Mamma: Carmen. Papà: Luis…",
          items: ["La mia famiglia"],
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
          title: "La famiglia",
          hint: "Traduce al español. Ojo: alguna palabra tiene dos traducciones y otra es un falso amigo.",
          items: [
            "il padre", "la madre", "i genitori", "il fratello", "la sorella",
            "il figlio", "la figlia", "il nonno", "la nonna", "lo zio",
            "la zia", "il cugino", "la cugina", "il / la nipote", "il marito",
            "la moglie", "il fidanzato", "la fidanzata", "i parenti", "figlio unico",
          ],
        },
        {
          kind: "vocab",
          from: "es",
          title: "Com'è?",
          hint: "Escribe cada adjetivo en italiano, en masculino. Hay falsos amigos: búscalos bien.",
          items: [
            "alto", "bajo", "delgado", "joven", "mayor (de edad)", "guapo",
            "feo", "rubio", "moreno (de pelo)", "simpático", "antipático", "amable",
            "tímido", "gracioso", "serio", "trabajador", "vago", "hablador",
          ],
        },
        {
          kind: "vocab",
          title: "Capelli e occhi",
          hint: "Traduce al español.",
          items: [
            "i capelli lunghi", "i capelli corti", "i capelli ricci", "i capelli lisci", "i capelli bianchi",
            "gli occhi azzurri", "gli occhi verdi", "gli occhi castani", "la barba", "gli occhiali", "calvo",
          ],
        },
        {
          kind: "speak",
          title: "Fai una frase",
          hint: "Haz una frase con cada palabra. Dila en voz alta y escríbela. Ejemplo: azzurro → Mio fratello ha gli occhi azzurri.",
          items: ["azzurro", "simpatica", "mia sorella", "i miei genitori", "alto", "figlio unico", "i nonni", "gli occhiali"],
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
          title: "Gli, gn e l'accento finale",
          hint: "gli, gn y el acento al final",
          text: [
            "«Gli» suena parecido a «lli» dicho rápido, con la lengua pegada al paladar: famiglia, figlio, moglie. El artículo «gli» (gli occhi, gli zii) se pronuncia igual.",
            "«Gn» suena como la ñ: bagno, signora, cognome.",
            "Cuando el acento va en la última sílaba, se escribe: papà, città, età, perché. Si no se escribe, cambia la palabra: «papa» es el Papa de Roma y «papà» es tu padre.",
            "Y las dobles otra vez: nonno, mamma, sorella, fratello. Si no las alargas, «nonno» suena como «nono» (noveno).",
          ],
          table: {
            head: ["", "ejemplos", "suena parecido a"],
            rows: [
              ["gli", "figlio, moglie", "fi-llo, mo-lle"],
              ["gn", "cognome, bagno", "coñome, baño"],
              ["-à, -é, -ò", "papà, perché, però", "fuerza en la última sílaba"],
            ],
          },
        },
        {
          kind: "shadow",
          title: "Ascolta e ripeti",
          hint: "Escucha cada línea, primero lenta y luego normal. Repite hasta que suene igual.",
          items: [
            "famiglia, figlio, figlia, moglie",
            "gli zii, gli occhi, gli amici",
            "cognome, bagno, signora, sogno",
            "papà, città, età, perché",
            "nonno, nonna, mamma, sorella, fratello",
          ],
        },
        {
          kind: "shadow",
          title: "Coppie",
          hint: "Exagera la diferencia entre las dos palabras de cada pareja.",
          items: ["nono, nonno", "papa, papà", "sono, sonno", "fato, fatto"],
        },
        {
          kind: "shadow",
          title: "Frasi",
          hint: "Repite con la misma melodía.",
          items: [
            "Questa è mia moglie, Giulia.",
            "Ho due figli e una figlia.",
            "Mio fratello ha gli occhi azzurri.",
            "I miei nonni abitano in campagna.",
            "Mia sorella è alta e molto simpatica.",
            "Sei figlio unico?",
          ],
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
          title: "Descrivere: essere o avere?",
          hint: "Describir: essere o avere",
          text: [
            "Para el carácter, el aspecto general y el estado civil se usa essere: «È alto», «È simpatica», «È sposato».",
            "Para el pelo, los ojos, la barba o las gafas se usa avere, como «tener» en español: «Ha i capelli ricci», «Ha gli occhi verdi», «Ha la barba».",
            "La edad exacta también va con avere: «Ha sessant'anni». Pero «joven» o «mayor» van con essere: «È giovane».",
          ],
          examples: [
            { it: "Mio padre è alto e ha la barba.", es: "Mi padre es alto y tiene barba." },
            { it: "Lucia è bionda e ha gli occhi azzurri.", es: "Lucia es rubia y tiene los ojos azules." },
            { it: "Mio nonno è anziano: ha ottantacinque anni.", es: "Mi abuelo es mayor: tiene ochenta y cinco años." },
          ],
        },
        {
          kind: "intro",
          title: "Altri verbi in -are",
          hint: "Más verbos en -are para hablar de la familia",
          text: [
            "Estos verbos son regulares. Solo giocare cambia al escribirlo, como cercare: tu giochi, noi giochiamo. Si dudas, mira el modelo de parlare en la unidad 1.",
            "«Assomigliare a» significa parecerse a: «Assomiglio a mia madre».",
          ],
          examples: [
            { it: "Gioco a tennis con mio padre.", es: "Juego al tenis con mi padre." },
            { it: "Assomigli molto a tua sorella.", es: "Te pareces mucho a tu hermana." },
            { it: "Telefono a mia nonna ogni domenica.", es: "Llamo a mi abuela todos los domingos." },
          ],
        },
        {
          kind: "table",
          title: "Tabella dei verbi",
          hint: "Completa la tabla. Essere y avere son repaso: intenta hacerlos sin mirar.",
          cols: ["io", "tu", "lui / lei", "noi", "voi", "loro"],
          rows: [
            ["essere", "", "", "è", "", "", ""],
            ["avere", "", "", "", "", "avete", ""],
            ["giocare", "", "giochi", "", "", "", ""],
            ["assomigliare", "assomiglio", "", "", "", "", ""],
            ["telefonare", "", "", "", "", "", ""],
          ],
        },
        {
          kind: "fill",
          title: "Essere o avere?",
          hint: "Completa con essere o avere en la forma correcta.",
          items: [
            "Mia sorella ___ i capelli lunghi.",
            "Mio padre ___ molto simpatico.",
            "I miei nonni ___ ottant'anni.",
            "Tu ___ gli occhi verdi?",
            "Mio zio ___ calvo e ___ la barba.",
            "Noi ___ alti, ma i nostri genitori ___ bassi.",
            "Luca ___ sposato e ___ due figli.",
          ],
        },
        {
          kind: "fill",
          title: "Giocare, assomigliare, telefonare",
          hint: "Completa con el verbo que toca en la forma correcta.",
          items: [
            "Io ___ a mio padre: abbiamo gli stessi occhi.",
            "Tu ___ a calcio con tuo fratello?",
            "Mia madre ___ a mia nonna ogni sera.",
            "Noi ___ a carte con i nonni.",
            "Voi ___ molto a vostra madre.",
            "I bambini ___ in giardino.",
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
          title: "Il, lo, la, l', i, gli, le",
          hint: "El artículo determinado",
          text: [
            "Sigue la misma lógica que un, uno, una, un': depende del género y de cómo empieza la palabra.",
            "Masculino: il (il padre); lo delante de s + consonante, z, gn y ps (lo zio); l' delante de vocal (l'amico). En plural: i (i padri) y gli (gli zii, gli amici).",
            "Femenino: la (la madre) y l' delante de vocal (l'amica). En plural, siempre le (le madri, le amiche).",
            "El plural básico: -o → -i (fratello, fratelli), -a → -e (sorella, sorelle), -e → -i (padre, padri). Las excepciones llegan en la unidad 4.",
          ],
          table: {
            head: ["", "singular", "plural"],
            rows: [
              ["masculino + consonante", "il nonno", "i nonni"],
              ["masculino + vocal", "l'amico", "gli amici"],
              ["masculino + s + cons., z, gn, ps", "lo zio", "gli zii"],
              ["femenino + consonante", "la nonna", "le nonne"],
              ["femenino + vocal", "l'amica", "le amiche"],
            ],
          },
        },
        {
          kind: "fill",
          title: "L'articolo",
          hint: "Completa con el artículo determinado.",
          items: [
            "___ nonno", "___ zio", "___ amica", "___ genitori", "___ studenti", "___ sorelle",
            "___ occhi", "___ moglie", "___ figli", "___ zaino", "___ insegnante (lei)", "___ cugine",
          ],
        },
        {
          kind: "intro",
          title: "I possessivi",
          hint: "Los posesivos: mio, tuo, suo…",
          text: [
            "El posesivo concuerda con la cosa poseída, no con el dueño: «la mia casa», «il mio libro», «i miei libri», «le mie case».",
            "Casi siempre lleva artículo delante: «il mio lavoro», «la sua macchina».",
            "Excepción: con un familiar en singular, sin artículo: «mio padre», «tua sorella», «suo marito». En plural vuelve el artículo: «i miei fratelli». Con «loro», siempre artículo: «il loro figlio». Con mamma, papà o nonna en tono cariñoso se suele poner: «la mia mamma».",
            "«Suo» significa de él, de ella y de usted: «suo fratello» puede ser el hermano de Marco, el de Giulia o el suyo.",
          ],
          table: {
            head: ["", "masc. sing.", "fem. sing.", "masc. pl.", "fem. pl."],
            rows: [
              ["io", "il mio", "la mia", "i miei", "le mie"],
              ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
              ["lui / lei / Lei", "il suo", "la sua", "i suoi", "le sue"],
              ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
              ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
              ["loro", "il loro", "la loro", "i loro", "le loro"],
            ],
          },
        },
        {
          kind: "fill",
          title: "Con o senza articolo?",
          hint: "Completa con el posesivo de la persona entre paréntesis, y con el artículo si hace falta.",
          items: [
            "(io) ___ madre si chiama Rosa.",
            "(io) ___ genitori abitano a Cadice.",
            "(tu) ___ sorella è sposata?",
            "(lui) ___ moglie è insegnante.",
            "(noi) ___ casa è piccola.",
            "(loro) ___ figlio studia a Bologna.",
            "(io) ___ cugine sono simpatiche.",
            "(voi) ___ nonno ha novant'anni?",
          ],
        },
        {
          kind: "intro",
          title: "Gli aggettivi",
          hint: "Los adjetivos",
          text: [
            "El adjetivo va normalmente detrás del sustantivo y concuerda con él en género y número: un ragazzo alto, una ragazza alta, due ragazzi alti, due ragazze alte.",
            "Los adjetivos en -e tienen solo dos formas: gentile (singular) y gentili (plural), para masculino y femenino.",
            "Ojo con -co: simpatico → simpatici, pero simpatica → simpatiche.",
          ],
          table: {
            head: ["", "singular", "plural"],
            rows: [
              ["-o / -a", "alto, alta", "alti, alte"],
              ["-e", "gentile", "gentili"],
              ["-co / -ca", "simpatico, simpatica", "simpatici, simpatiche"],
            ],
          },
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "al plurale",
          title: "Dal singolare al plurale",
          hint: "Pasa cada frase al plural. Ejemplo: Mia sorella è alta. → Le mie sorelle sono alte.",
          items: [
            "Mio fratello è simpatico.",
            "La mia amica è gentile.",
            "Mio cugino è biondo.",
            "Tua zia è giovane.",
            "Il nostro gatto è nero.",
            "Sua figlia è timida.",
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "la domanda",
          title: "Fai la domanda",
          hint: "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Ho due fratelli. → Quanti fratelli hai?",
          items: [
            "Mia madre si chiama Rosa.",
            "Mio padre ha sessantadue anni.",
            "Sì, sono sposata.",
            "Mia sorella abita a Londra.",
            "No, sono figlio unico.",
            "È alto e ha i capelli neri.",
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
          title: "Le foto di Natale",
          hint: "Sofia enseña unas fotos a un amigo. Escucha sin leer, las veces que haga falta. Abre la transcripción solo al final.",
          script: [
            { who: "Sofia", text: "Guarda, queste sono le foto di Natale con la mia famiglia." },
            { who: "Andrea", text: "Che belle! Chi è questo signore con la barba?" },
            { who: "Sofia", text: "È mio padre. E la signora bionda accanto a lui è mia madre." },
            { who: "Andrea", text: "E questa ragazza con gli occhiali? È tua sorella?" },
            { who: "Sofia", text: "No, è mia cugina Marta. Mia sorella è qui, con i capelli ricci." },
            { who: "Andrea", text: "Vi assomigliate molto!" },
            { who: "Sofia", text: "Sì, tutti dicono così. Lei ha ventidue anni, io venticinque." },
            { who: "Andrea", text: "E il bambino?" },
            { who: "Sofia", text: "È mio nipote Leo, il figlio di mio fratello. Ha solo tre anni." },
          ],
          questions: [
            "Che foto guardano Sofia e Andrea?",
            "Com'è il padre di Sofia?",
            "Chi è la ragazza con gli occhiali?",
            "Com'è la sorella di Sofia? Quanti anni ha?",
            "Chi è Leo?",
          ],
        },
        {
          kind: "listen",
          title: "La nonna Pina",
          hint: "Luca habla de su abuela. Responde en voz alta.",
          script: [
            { who: "Luca", text: "Vi presento mia nonna Pina. Ha ottantasette anni ed è una donna molto forte." },
            { who: "Luca", text: "È piccola e magra, ha i capelli bianchi e gli occhi azzurri, come me." },
            { who: "Luca", text: "Abita da sola in un paese in Calabria. Ha cinque figli e dodici nipoti!" },
            { who: "Luca", text: "Ogni domenica tutta la famiglia pranza a casa sua. Lei cucina per venti persone." },
            { who: "Luca", text: "È simpatica e molto chiacchierona, ma quando è arrabbiata… attenzione!" },
          ],
          questions: [
            "Quanti anni ha la nonna Pina?",
            "Com'è fisicamente?",
            "Dove abita? Con chi?",
            "Quanti figli e quanti nipoti ha?",
            "Che cosa succede ogni domenica?",
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
          title: "La famiglia italiana",
          hint: "Lee el texto (o escúchalo). Busca las palabras que no conozcas y responde a las preguntas en italiano.",
          text: [
            "Per molti italiani la famiglia è al centro della vita. La domenica, spesso, tutta la famiglia pranza insieme, a casa dei nonni.",
            "I nonni sono molto importanti: tanti bambini passano il pomeriggio con loro, perché i genitori lavorano.",
            "I giovani italiani vanno a vivere da soli tardi: in media verso i trent'anni. Spesso il motivo è economico: gli affitti sono cari e il lavoro è precario.",
            "Per questo alcuni stranieri chiamano gli italiani «mammoni». Ma molti giovani rispondono: «Non è una scelta, è una necessità».",
            "Le famiglie oggi sono piccole: in Italia nascono pochi bambini, circa 1,2 figli per donna. Molte coppie hanno un figlio solo.",
          ],
          questions: [
            "Dove pranza spesso la famiglia la domenica?",
            "Perché i nonni sono importanti?",
            "A che età vanno a vivere da soli i giovani italiani, in media?",
            "Perché così tardi?",
            "Che cosa significa «mammone», secondo te?",
            "Le famiglie italiane sono grandi o piccole?",
          ],
          translate: "Traduce el texto entero al español.",
        },
        {
          kind: "speak",
          title: "E in Spagna?",
          hint: "¿Y en España? ¿A qué edad se van los jóvenes de casa? ¿Se come en familia el domingo? Explícalo en italiano con 3 o 4 frases, en voz alta.",
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
          title: "Com'è? Che tipo è?",
          hint: "Preguntar cómo es alguien",
          text: [
            "«Com'è tua sorella?» pregunta cómo es, por fuera o de carácter. Para el carácter también se dice «Che tipo è?».",
            "Para matizar: molto (muy), abbastanza (bastante), un po' (un poco), non… per niente (nada). «Un po'» se usa sobre todo con cosas negativas: «È un po' timido».",
          ],
          examples: [
            { it: "Com'è tuo padre? — È alto e un po' serio.", es: "¿Cómo es tu padre? — Es alto y un poco serio." },
            { it: "Che tipo è Marta? — È molto simpatica.", es: "¿Qué tal es Marta? — Es muy simpática." },
            { it: "Non è per niente pigro.", es: "No es nada vago." },
          ],
        },
        {
          kind: "speak",
          title: "Rispondi ad alta voce",
          hint: "Pulsa el micro y contesta con frases completas.",
          items: [
            "Quanti siete in famiglia?",
            "Hai fratelli o sorelle? Come si chiamano?",
            "Quanti anni hanno i tuoi genitori?",
            "A chi assomigli?",
            "Com'è il tuo migliore amico o la tua migliore amica?",
            "Abiti con la tua famiglia?",
            "Hai un animale? Com'è?",
            "Che tipo sei tu?",
          ],
        },
        {
          kind: "speak",
          title: "Descrivi",
          hint: "Describe a cada persona por fuera y de carácter, con 2 o 3 frases.",
          items: ["Una persona della tua famiglia", "Un personaggio famoso", "Il tuo vicino di casa"],
        },
        {
          kind: "speak",
          title: "No, non è così",
          hint: "Niega y corrige. Ejemplo: Tuo fratello è biondo? (castano) → No, non è biondo, ha i capelli castani.",
          items: [
            "Tua madre è bassa? (alta)",
            "I tuoi nonni abitano in città? (in campagna)",
            "Hai due sorelle? (una sorella e un fratello)",
            "Sei timido? (per niente)",
            "Tuo padre ha la barba? (gli occhiali)",
          ],
        },
        {
          kind: "roleplay",
          title: "Indovina chi",
          hint: "Juega con la IA: piensa en una persona famosa y tú haces preguntas de sí o no para adivinarla. Después, al revés.",
          steps: [
            "Pregunta si es un hombre o una mujer («È un uomo?»).",
            "Pregunta por el pelo y los ojos («Ha i capelli…?»).",
            "Pregunta por la edad («È giovane?»).",
            "Pregunta por el carácter y la profesión.",
            "Di quién crees que es («Secondo me è…»).",
            "Ahora piensas tú en alguien y respondes.",
          ],
        },
        {
          kind: "roleplay",
          title: "A cena con i suoi genitori",
          hint: "Conoces a los padres de tu pareja italiana en una cena. Usa «Lei» con ellos.",
          steps: [
            "Saluda formalmente y preséntate.",
            "Responde: ¿tienes hermanos? ¿Cómo son?",
            "Pregunta a la madre si tiene más hijos.",
            "Pregunta por los abuelos: ¿dónde viven?, ¿cuántos años tienen?",
            "Haz un cumplido sobre la familia («una famiglia molto simpatica»).",
            "Despídete formalmente.",
          ],
        },
        {
          kind: "speak",
          title: "Presenta la tua famiglia",
          hint: "Presenta a tu familia durante un minuto sin parar: quiénes son, cómo se llaman, cuántos años tienen, cómo son y dónde viven.",
          items: ["La mia famiglia"],
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
            "Mi madre se llama Carmen y tiene cincuenta y ocho años.",
            "Mis abuelos viven en un pueblo.",
            "¿Tienes hermanos?",
            "Su mujer es muy simpática.",
            "Nuestros primos son altos y rubios.",
            "Mi hermano tiene los ojos verdes y lleva gafas.",
            "Me parezco a mi padre.",
            "Sus hijos (de ellos) viven en Milán.",
          ],
        },
        {
          kind: "write",
          title: "Una mail alla famiglia ospitante",
          hint: "Vas a pasar un mes en Italia con una familia de acogida. Escríbeles un correo: preséntate y describe a tu familia (quiénes son y cómo son). Entre 6 y 8 frases.",
          rows: 9,
          items: ["Cara famiglia Ricci,"],
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
          title: "Dettato: articoli e parole",
          hint: "Escucha y escribe el artículo y la palabra.",
          items: ["gli zii", "le sorelle", "lo studente", "l'amica", "i nonni", "gli occhi", "la moglie", "il nipote"],
        },
        {
          kind: "dictation",
          title: "Dettato: frasi",
          hint: "Escucha y escribe la frase tal como la oyes.",
          items: [
            "Mio padre ha la barba.",
            "Le mie cugine sono simpatiche.",
            "Assomiglio a mia madre.",
            "I nostri nonni abitano in campagna.",
            "Com'è tua sorella?",
          ],
        },
        {
          kind: "media",
          title: "Da guardare e ascoltare",
          hint: "Elige al menos uno esta semana. No hace falta entenderlo todo.",
          items: [
            { type: "Película", title: "Mine vaganti (Ferzan Özpetek, 2010)", where: "Busca dónde verla en JustWatch", why: "Comedia sobre una familia de Lecce y sus secretos. Fíjate en cómo se hablan padres, hijos y abuelos." },
            { type: "Serie", title: "Un medico in famiglia", where: "RaiPlay", why: "Serie familiar de la Rai, sencilla y larga. Mira un episodio: abuelo, padre, hijos y nietos en la misma casa." },
            { type: "Canción", title: "Viva la mamma, Edoardo Bennato", where: "Spotify, YouTube", why: "Canción alegre de 1989 dedicada a la madre. El estribillo se pega." },
          ],
        },
        {
          kind: "write",
          title: "Caccia alle parole",
          hint: "Mientras escuchas o miras, anota 5 palabras que reconozcas y 5 que no conozcas (y búscalas).",
          rows: 5,
          items: ["Parole che conosco:", "Parole nuove:"],
        },
        {
          kind: "speak",
          title: "Racconta",
          hint: "Describe a una persona de la película o de la serie: cómo es por fuera, cómo es de carácter y qué relación tiene con los demás.",
          items: ["È… Ha… È il padre di…"],
        },
      ],
    },
  ],

  exam: {
    title: "Esame · Unità 3",
    hint: "Sin buscar nada. Hazlo de una sentada, copia tus respuestas para corregir y anota tu nota. Aprobado: 70 %.",
    blocks: [
      {
        kind: "vocab",
        title: "1. Parole",
        hint: "Traduce al español.",
        items: ["i parenti", "il nipote", "la moglie", "gli occhiali", "i capelli ricci", "pigro", "divertente", "figlio unico"],
      },
      {
        kind: "table",
        title: "2. Possessivi",
        hint: "Completa la tabla con el artículo y el posesivo.",
        cols: ["masc. sing.", "fem. sing.", "masc. pl.", "fem. pl."],
        rows: [
          ["io", "il mio", "", "", ""],
          ["tu", "", "", "", ""],
          ["lui / lei", "", "", "", ""],
          ["noi", "", "", "", ""],
          ["loro", "", "", "", ""],
        ],
      },
      {
        kind: "fill",
        title: "3. Completa",
        hint: "Completa con un artículo, un posesivo, essere, avere o la terminación del adjetivo.",
        items: [
          "___ zii di Marco abitano a Bari.",
          "___ studentesse sono spagnole.",
          "(io) ___ fratello si chiama Luca.",
          "(io) ___ genitori sono giovani.",
          "Marta ___ gli occhi azzurri ed ___ molto simpatica.",
          "Le mie cugine sono simpatic___.",
          "(loro) ___ figlia è medico.",
        ],
      },
      {
        kind: "listen",
        title: "4. Ascolta",
        hint: "Escucha dos veces como máximo y responde en voz alta.",
        script: [
          { who: "Giulia", text: "Allora, com'è il tuo nuovo ragazzo?" },
          { who: "Elisa", text: "Si chiama Tommaso. È alto, moro e ha gli occhi verdi." },
          { who: "Giulia", text: "E che tipo è?" },
          { who: "Elisa", text: "È molto gentile, ma un po' timido." },
          { who: "Giulia", text: "Quanti anni ha?" },
          { who: "Elisa", text: "Trentuno. Ha due sorelle e abita ancora con i suoi genitori." },
        ],
        questions: ["Come si chiama il ragazzo di Elisa?", "Com'è fisicamente?", "Che tipo è?", "Con chi abita?"],
      },
      {
        kind: "speak",
        title: "5. Parla",
        hint: "Responde en voz alta con frases completas.",
        items: [
          "Presenta la tua famiglia in un minuto.",
          "Descrivi il tuo migliore amico o la tua migliore amica: fisico e carattere.",
          "Chiedi a una signora se ha figli e quanti anni hanno (formale).",
          "A chi assomigli? Perché?",
        ],
      },
      {
        kind: "dictation",
        title: "6. Dettato",
        hint: "Escucha y escribe.",
        items: ["gli zii", "Mia sorella è alta e bionda.", "Ha gli occhi castani.", "I loro figli sono simpatici."],
      },
      {
        kind: "translate",
        title: "7. Traduci",
        hint: "Traduce al italiano.",
        items: [
          "Mi padre es bajo y tiene barba.",
          "Nuestras primas son muy simpáticas.",
          "¿Cómo es tu hermano?",
          "Sus padres (de ella) viven en Roma.",
        ],
      },
    ],
  },
};
