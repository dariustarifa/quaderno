// Unità 30 · Biografie — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[30] = {
    n: 30,
    level: "A2",
    title: "Biografie",
    goal: "Contar una vida, la tuya o la de un personaje famoso, con fechas, etapas y acontecimientos.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a contar una biografía: dónde y cuándo nació alguien, cómo era su infancia, qué estudió, qué hizo y qué recuerdan de él o de ella.",
              "Gramática: los tiempos del pasado juntos (passato prossimo e imperfetto), los años y los siglos (nel 1870, nell'Ottocento), y «prima di + infinitivo» / «dopo + infinitivo pasado» (dopo aver studiato).",
              "Es la unidad que junta todo el pasado de A2.",
            ],
          },
          {
            kind: "intro", title: "È nata nel 1870", hint: "Un adelanto: fechas y etapas",
            text: ["Los años van con «nel»: «nel 1870», «nel 2001». Las décadas: «negli anni Sessanta». Los siglos, con una palabra especial a partir del 1200: «il Novecento» = el siglo XX.", "Para ordenar la vida: «da bambino», «a vent'anni», «dopo la laurea», «più tardi», «alla fine della sua vita»."],
            examples: [
              { it: "Maria Montessori è nata nel 1870 a Chiaravalle.", es: "Maria Montessori nació en 1870 en Chiaravalle." },
              { it: "A ventisei anni si è laureata in medicina.", es: "A los veintiséis años se licenció en medicina." },
              { it: "È una delle donne più importanti del Novecento.", es: "Es una de las mujeres más importantes del siglo XX." },
            ],
          },
          { kind: "speak", title: "Una persona che ammiri", hint: "Antes de empezar: ¿qué persona famosa admiras? ¿Qué sabes de su vida?", items: ["Ammiro…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Una vita", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "nascere", "crescere", "trasferirsi", "laurearsi", "sposarsi",
              "divorziare", "avere figli", "diventare", "vincere un premio", "pubblicare",
              "morire", "la giovinezza", "la vecchiaia", "la carriera", "il successo",
              "il fallimento", "la svolta", "il secolo", "il dopoguerra", "l'eredità",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Date e periodi", hint: "Escribe en italiano.",
            items: ["en 1990", "en los años ochenta", "el siglo XIX", "el siglo XX", "a los treinta años", "de joven", "de mayor (de viejo)", "después de la guerra", "antes de morir", "al final de su vida", "hace un siglo", "durante diez años", "desde 2015", "a principios de los 2000", "a finales de los noventa"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: negli anni Sessanta → Negli anni Sessanta i miei nonni si sono trasferiti a Milano.", items: ["è nato / nata nel", "negli anni Sessanta", "il Novecento", "a vent'anni", "dopo aver", "prima di", "è diventato / diventata", "è morto / morta"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Millenovecento…", hint: "Leer años y siglos",
            text: [
              "Los años se leen como un número entero: 1870 = milleottocentosettanta; 1999 = millenovecentonovantanove; 2008 = duemilaotto.",
              "Los siglos desde el 1200 tienen nombre propio y se escriben con mayúscula: il Duecento, il Trecento, il Quattrocento, il Cinquecento… il Novecento. «Il Rinascimento» es el Renacimiento (siglos XV y XVI).",
              "Las décadas: gli anni Venti, Trenta… Ottanta, Novanta. «Gli anni Duemila» son los 2000.",
            ],
            table: { head: ["", "secolo"], rows: [["1300–1399", "il Trecento (XIV)"], ["1500–1599", "il Cinquecento (XVI)"], ["1800–1899", "l'Ottocento (XIX)"], ["1900–1999", "il Novecento (XX)"]] },
          },
          { kind: "shadow", title: "Anni", hint: "Escucha y repite los años.", items: ["milleottocentosettanta", "millenovecentoquarantacinque", "millenovecentosessantotto", "duemilauno, duemilaventicinque"] },
          { kind: "shadow", title: "Una biografia", hint: "Repite con ritmo de documental.", items: ["Dante Alighieri è nato a Firenze nel 1265.", "Nel Cinquecento Firenze era il centro del Rinascimento.", "Negli anni Sessanta l'Italia è cambiata moltissimo.", "Dopo aver finito gli studi, si è trasferita a Roma.", "È morto a Parigi nel 1960, a novant'anni."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I tempi della biografia", hint: "Qué pasado usar en una biografía",
            text: [
              "Passato prossimo para los hechos concretos de la vida: «è nata», «si è laureata», «ha scritto», «è morta». (En los libros de historia verás el passato remoto: lo aprenderás en B1.)",
              "Imperfetto para describir cómo era y qué hacía habitualmente: «era una bambina curiosa», «viveva a Roma», «lavorava di notte».",
              "Recuerda los participios irregulares de la vida: nascere → nato, morire → morto, vivere → vissuto, scrivere → scritto, vincere → vinto, scoprire → scoperto.",
            ],
          },
          k.table("Verbi della vita", [
            ["nascere", "nasceva", "è nato/a"],
            ["morire", "", ""],
            ["vivere", "", "ha vissuto"],
            ["scrivere", "", ""],
            ["vincere", "", ""],
            ["diventare", "", ""],
            ["scoprire", "", ""],
          ], "Completa con lui / lei: imperfetto y passato prossimo.", ["imperfetto", "passato prossimo"]),
          {
            kind: "fill", title: "Una vita", hint: "Completa con passato prossimo o imperfetto.",
            items: [
              "Federico Fellini ___ (nascere) a Rimini nel 1920.", "Da bambino ___ (amare) il circo e ___ (disegnare) sempre.", "Nel 1939 ___ (trasferirsi) a Roma, dove ___ (lavorare) per un giornale umoristico.", "Nel 1943 ___ (sposarsi) con l'attrice Giulietta Masina.", "Con «La dolce vita» ___ (diventare) famoso in tutto il mondo.", "___ (vincere) cinque Oscar.", "Quando ___ (morire), nel 1993, tutta Roma ___ (andare) a salutarlo.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Prima di… dopo aver…", hint: "Antes de… después de…",
            text: [
              "«Prima di» + infinitivo: «Prima di diventare attrice, faceva la cameriera».",
              "«Dopo» + infinitivo pasado (avere / essere + participio): «Dopo aver studiato medicina, ha aperto una scuola». Con essere, el participio concuerda: «Dopo essere tornata in Italia, ha scritto un libro».",
              "Las dos frases deben tener el mismo sujeto.",
            ],
            examples: [
              { it: "Prima di partire, ha venduto la casa.", es: "Antes de irse, vendió la casa." },
              { it: "Dopo essersi laureata, ha lavorato in ospedale.", es: "Después de licenciarse, trabajó en un hospital." },
            ],
          },
          {
            kind: "fill", title: "Prima di o dopo aver?", hint: "Completa con prima di + infinitivo o dopo + infinitivo pasado.",
            items: ["___ (finire) la scuola, ha viaggiato per un anno. (después)", "___ (diventare) famoso, lavorava in un bar. (antes)", "___ (arrivare) a Milano, ha cercato lavoro. (después, con essere: lui)", "___ (morire), ha scritto le sue memorie. (antes)", "___ (vincere) il premio, ha ringraziato la madre. (después)", "___ (sposarsi), vivevano in città diverse. (antes)"],
          },
          {
            kind: "intro", title: "Da quanto, per quanto, fa", hint: "Duraciones",
            text: ["«Per» + tiempo para una duración terminada: «Ha vissuto a Parigi per dieci anni».", "«Da» + tiempo para algo que todavía continúa: «Vive a Roma da dieci anni» (presente).", "«Fa» para hace cuánto: «È morto vent'anni fa»."],
          },
          k.domanda(["È nata a Chiaravalle.", "Si è laureata nel 1896.", "Ha vissuto in India per sette anni.", "Ha scritto più di venti libri.", "È diventata famosa con il suo metodo.", "È morta in Olanda nel 1952."], "Escribe la pregunta para una entrevista sobre Maria Montessori. Ejemplo: È nata nel 1870. → Quando è nata?"),
          k.negativa(["Si è sposato.", "Ha vinto il premio.", "Viveva a Roma.", "È diventata famosa da giovane.", "Ha avuto figli."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La storia del nonno", "Un chico cuenta la vida de su abuelo.", [
            { who: "Marco", text: "Mio nonno Antonio è nato in Calabria nel 1938, in una famiglia di contadini. Erano otto fratelli e non avevano soldi." },
            { who: "Marco", text: "A quindici anni ha lasciato la scuola e ha cominciato a lavorare nei campi." },
            { who: "Marco", text: "Nel 1958, a vent'anni, è emigrato a Torino, come tantissimi ragazzi del Sud. Ha lavorato alla Fiat per trentacinque anni." },
            { who: "Marco", text: "A Torino ha conosciuto mia nonna, che era veneta. Si sono sposati nel 1963 e hanno avuto tre figli." },
            { who: "Marco", text: "Dopo essere andato in pensione, è tornato al suo paese e ha piantato un orto enorme. Dice che è stato il periodo più felice della sua vita." },
          ], ["Dove e quando è nato il nonno? Com'era la sua famiglia?", "Che cosa ha fatto a quindici anni?", "Dove è andato nel 1958? Che lavoro ha fatto?", "Chi ha conosciuto a Torino?", "Che cosa ha fatto dopo la pensione?"]),
          k.listen("Intervista a un'attrice", "Una entrevista en la radio a una actriz de teatro.", [
            { who: "Giornalista", text: "Lei è nata a Napoli, ma è cresciuta a Milano. Come ha cominciato a recitare?" },
            { who: "Attrice", text: "Da bambina ero timidissima. Mia madre mi ha iscritta a un corso di teatro per aiutarmi, e lì ho scoperto la mia passione." },
            { who: "Giornalista", text: "E poi?" },
            { who: "Attrice", text: "Prima di entrare all'accademia ho fatto mille lavori: cameriera, commessa, baby-sitter. Ero sempre stanca, ma felice." },
            { who: "Giornalista", text: "Qual è stata la svolta della sua carriera?" },
            { who: "Attrice", text: "Nel 2010, quando un regista mi ha vista in un piccolo teatro e mi ha dato il ruolo principale nel suo film." },
          ], ["Dove è nata e dove è cresciuta l'attrice?", "Com'era da bambina? Perché ha cominciato il teatro?", "Che cosa faceva prima dell'accademia?", "Come si sentiva in quel periodo?", "Qual è stata la svolta della sua carriera?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Maria Montessori", [
            "Maria Montessori è nata a Chiaravalle, nelle Marche, nel 1870. Da ragazza era molto brava in matematica e voleva fare l'ingegnere, una cosa rara per una donna di quell'epoca.",
            "Poi ha scelto la medicina e nel 1896 si è laureata a Roma: è stata una delle prime donne medico in Italia. Lavorava con i bambini con difficoltà e ha capito che avevano bisogno di un'educazione diversa.",
            "Nel 1907 ha aperto a Roma, nel quartiere di San Lorenzo, la prima «Casa dei Bambini». Il suo metodo era rivoluzionario: i bambini sceglievano le attività, usavano materiali speciali e imparavano con le mani.",
            "Il metodo ha avuto un successo enorme e Maria ha viaggiato in tutto il mondo per presentarlo. Durante il fascismo ha lasciato l'Italia e ha vissuto in Spagna, nei Paesi Bassi e in India.",
            "È morta nei Paesi Bassi nel 1952. Oggi ci sono scuole Montessori in tutti i continenti, e per anni il suo volto è stato sulla banconota italiana da mille lire.",
          ], ["Dove e quando è nata Maria Montessori? Che cosa voleva fare da ragazza?", "Che cosa ha studiato? Perché è stato importante?", "Che cosa ha aperto nel 1907? Dove?", "Com'era il suo metodo?", "Dove ha vissuto durante il fascismo?", "Dove possiamo vedere oggi il suo «volto» e il suo lavoro?"]),
          k.spagna("Cuenta la vida de una persona española importante (escritor, científica, artista, deportista): cuándo nació, qué hizo y por qué es importante."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare una vita", hint: "Estructura de una biografía oral",
            text: ["Orden: 1) nacimiento y familia; 2) infancia (imperfetto); 3) estudios y primeros trabajos; 4) la gran «svolta»; 5) logros; 6) cómo se le recuerda hoy.", "Conectores: «All'inizio…», «In seguito…» (después), «Qualche anno dopo…», «Nel frattempo…», «Alla fine…»."],
          },
          k.rispondi(["Dove e quando sei nato o nata?", "Com'eri da bambino o bambina?", "Qual è stato il momento più importante della tua vita finora?", "Che cosa facevi prima del tuo lavoro attuale?", "Chi è il tuo personaggio storico preferito? Perché?", "Quale persona della tua famiglia ha avuto una vita interessante?"]),
          { kind: "speak", title: "Indovina chi è", hint: "Describe la vida de una persona famosa en cinco frases sin decir su nombre. Luego di quién es.", items: ["Personaggio 1 (un artista)", "Personaggio 2 (uno scienziato o una scienziata)", "Personaggio 3 (uno sportivo o una sportiva)"] },
          {
            kind: "roleplay", title: "L'intervista", hint: "Entrevistas a una persona mayor italiana sobre su vida para un proyecto. La IA hace de la persona. Usa «Lei».",
            steps: ["Preséntate y explica el proyecto.", "Pregunta dónde y cuándo nació y cómo era su infancia.", "Pregunta por su trabajo y su familia.", "Pregunta cuál fue el momento más importante de su vida.", "Pregunta qué consejo le daría a un joven, y despídete."],
          },
          {
            kind: "roleplay", title: "Il personaggio misterioso", hint: "Juego: la IA piensa en un personaje histórico italiano. Tú haces preguntas en pasado para adivinarlo. Después, al revés.",
            steps: ["Pregunta en qué siglo vivió.", "Pregunta si era hombre o mujer y a qué se dedicaba.", "Pregunta dónde vivió y qué hizo de importante.", "Di quién crees que es.", "Ahora piensa tú en uno y responde."],
          },
          { kind: "speak", title: "La mia autobiografia", hint: "Cuenta tu vida durante dos minutos, de tu nacimiento a hoy, con fechas, etapas y un momento clave.", items: ["Sono nato / nata…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Nació en Florencia en 1452.", "De pequeño vivía con su abuela.", "A los veinte años se mudó a Roma.", "Después de licenciarse, trabajó en un hospital.", "Antes de hacerse famoso, era camarero.", "Vivió en París durante diez años.", "Murió hace cincuenta años.", "En los años sesenta Italia cambió mucho."]),
          { kind: "write", title: "Una biografia", hint: "Escribe la biografía (12–15 frases) de una persona de tu familia o de un personaje famoso, siguiendo la estructura de la página 8. Usa passato prossimo, imperfetto, prima di y dopo aver.", rows: 14, items: ["… è nato / nata…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: date", ["nel millenovecentosessantotto", "il Cinquecento", "negli anni Ottanta", "nel duemilaotto", "l'Ottocento", "a trentacinque anni"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["È nata a Roma nel 1950.", "Dopo aver studiato, è partito.", "Prima di morire, ha scritto un libro.", "Viveva in campagna.", "È diventata famosa."]),
          k.media([
            { type: "Película", title: "La dolce vita (Federico Fellini, 1960)", where: "Busca dónde verla en JustWatch", why: "La película más famosa de Fellini, cuya vida has leído en la página 4. Roma, periodistas y la famosa escena de la Fontana di Trevi." },
            { type: "Película", title: "Il giovane favoloso (Mario Martone, 2014)", where: "Busca dónde verla en JustWatch", why: "La vida del poeta Giacomo Leopardi, de su infancia en Recanati a Nápoles." },
            { type: "Serie", title: "Ulisse: il piacere della scoperta (Alberto Angela)", where: "RaiPlay", why: "Documentales muy famosos sobre historia y personajes italianos. Alberto Angela habla despacio y con mucha claridad." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta la vida del personaje de la película o del documental en un minuto.", items: ["È nato… Da giovane… Poi…"] },
        ],
      },
    ],

    exam: k.exam(30, {
      parole: ["la svolta", "il dopoguerra", "l'eredità", "trasferirsi", "divorziare", "il Novecento", "il Rinascimento", "la vecchiaia", "pubblicare", "emigrare"],
      contrario: ["en los años setenta", "el siglo XIX", "a los treinta años", "después de licenciarse", "el éxito", "crecer"],
      verbiHint: "Completa con lui / lei: imperfetto y passato prossimo.",
      verbiCols: ["imperfetto", "passato prossimo"],
      verbi: [["nascere", "", ""], ["vivere", "", ""], ["morire", "", ""], ["scoprire", "", ""]],
      completaHint: "Completa con el pasado correcto o con prima di / dopo aver / dopo essere.",
      completa: ["Leonardo ___ (nascere) a Vinci nel 1452.", "Da giovane ___ (dipingere) e ___ (studiare) anatomia.", "___ (finire) la scuola, si è trasferita a Londra. (después)", "___ (diventare) attore, faceva il cameriere. (antes)", "Ha vissuto a Parigi ___ dieci anni.", "Vive a Roma ___ 2010.", "È morta trent'anni ___.", "___ (tornare) in Italia, ha aperto un ristorante. (después, lei)"],
      trasformaHint: "Une las dos frases con «prima di» o «dopo aver / essere».",
      trasforma: ["Ha studiato medicina. Poi ha aperto una scuola.", "Si è laureato. Poi è partito per l'America.", "È arrivata a Roma. Poi ha cercato casa.", "Prima ha venduto la casa. Poi si è trasferito.", "Ha vinto il premio. Poi ha smesso di scrivere.", "Prima faceva la commessa. Poi è diventata cantante."],
      leggi: {
        text: [
          "Rita Levi-Montalcini è nata a Torino nel 1909. Il padre non voleva che le figlie studiassero all'università, ma lei ha insistito e si è laureata in medicina nel 1936.",
          "Durante la guerra, con le leggi razziali, non poteva lavorare all'università perché era ebrea: ha creato un piccolo laboratorio nella sua camera da letto.",
          "Nel 1986 ha vinto il premio Nobel per la medicina. È morta a Roma nel 2012, a 103 anni, e lavorava ancora.",
        ],
        questions: ["Dove e quando è nata Rita Levi-Montalcini?", "Che cosa pensava il padre dello studio delle figlie?", "Dove lavorava durante la guerra? Perché?", "Che premio ha vinto? Quanti anni aveva quando è morta?"],
      },
      ascolta: {
        script: [
          { who: "Guida", text: "Questa è la casa dove è nato Giuseppe Verdi, nel 1813, a Roncole, vicino a Parma." },
          { who: "Guida", text: "La sua famiglia era povera: il padre aveva una piccola osteria. Da bambino suonava l'organo nella chiesa del paese." },
          { who: "Guida", text: "A diciotto anni è andato a Milano per studiare al conservatorio, ma non l'hanno ammesso!" },
          { who: "Guida", text: "Ha studiato privatamente e nel 1842, con il Nabucco, è diventato famosissimo." },
        ],
        questions: ["Dove e quando è nato Verdi?", "Com'era la sua famiglia?", "Che cosa faceva da bambino?", "Che cosa è successo a Milano? Come è diventato famoso?"],
      },
      parla: ["Racconta la tua vita in due minuti.", "Racconta la vita di una persona famosa che ammiri.", "Che cosa facevi prima del tuo lavoro o dei tuoi studi attuali?", "Qual è stata la svolta più importante della tua vita?"],
      roleHint: "Usa «Lei».",
      role: ["Entrevistas a una escritora sobre su vida: pregunta por su infancia.", "Pregunta cuándo y cómo empezó a escribir.", "Pregunta cuál fue el momento clave de su carrera."],
      dettato: ["È nato nel 1920.", "negli anni Sessanta", "Dopo essersi laureata.", "Prima di partire.", "il Novecento", "Viveva con i nonni."],
      traduci: ["Nació en Nápoles en 1965.", "De joven trabajaba en una fábrica.", "Después de casarse, se mudaron a Milán.", "Antes de escribir novelas, era periodista.", "Vivió en Londres durante cinco años.", "Murió hace diez años, en 2015."],
      scrivi: { hint: "Escribe (70–90 palabras) la biografía de un abuelo o una abuela, real o inventada.", start: "Mia nonna / Mio nonno è nato / nata…" },
    }),
  };
})();
