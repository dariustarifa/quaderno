// Unità 14 · Il weekend scorso — ver content/AUTHORING.md
(() => {
  const k = K.at("A1");
  window.UNITS = window.UNITS || {};
  window.UNITS[14] = {
    n: 14,
    level: "A1",
    title: "Il weekend scorso",
    goal: "Contar lo que hiciste: el fin de semana, ayer, las vacaciones pasadas.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a contar lo que hiciste: qué hiciste el fin de semana, ayer o en tus últimas vacaciones.",
              "Gramática: el passato prossimo con avere (ho mangiato, hai visto…), los participios irregulares (fatto, visto, preso…) y las expresiones de tiempo pasado (ieri, la settimana scorsa, due giorni fa).",
              "Es el pasado más usado del italiano hablado: sirve para casi todo lo que en español dices con «comí» o «he comido».",
            ],
          },
          {
            kind: "intro", title: "Che cosa hai fatto?", hint: "Un adelanto: el pasado",
            text: [
              "El passato prossimo se forma como el pretérito perfecto español: avere en presente + participio. «Ho mangiato» = he comido.",
              "La diferencia: en italiano se usa también donde en España dirías «comí»: «Ieri ho mangiato la pizza» (ayer comí pizza).",
            ],
            examples: [
              { it: "Che cosa hai fatto sabato?", es: "¿Qué hiciste el sábado?" },
              { it: "Ho visto un film con Marta.", es: "Vi una película con Marta." },
              { it: "Ieri sera abbiamo cenato fuori.", es: "Anoche cenamos fuera." },
            ],
          },
          { kind: "speak", title: "Il tuo weekend", hint: "Antes de empezar: ¿qué hiciste el fin de semana pasado? Dilo como puedas, aunque mezcles presente y pasado.", items: ["Sabato…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Che cosa hai fatto?", hint: "Busca cada expresión y escribe su traducción al español.",
            items: [
              "ieri", "ieri sera", "l'altro ieri", "la settimana scorsa", "il mese scorso",
              "l'anno scorso", "due giorni fa", "stamattina", "sabato scorso", "una volta",
              "dormire fino a tardi", "fare una gita", "vedere una mostra", "prendere il sole", "fare le pulizie",
              "fare un giro in bici", "ricevere", "perdere", "vincere", "riposarsi",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Participi", hint: "Escribe el participio italiano de cada verbo (búscalo si no lo sabes). Ejemplo: comer (mangiare) → mangiato.",
            placeholder: "participio",
            items: [
              "hacer (fare)", "ver (vedere)", "coger (prendere)", "leer (leggere)", "escribir (scrivere)",
              "abrir (aprire)", "decir (dire)", "beber (bere)", "poner (mettere)", "perder (perdere)",
              "elegir (scegliere)", "pedir (chiedere)", "responder (rispondere)", "vivir (vivere)", "gastar (spendere)",
            ],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: fa → Due giorni fa ho visto Marco.", items: ["ieri", "fa", "ho fatto", "hai visto", "abbiamo preso", "l'anno scorso", "non ho mai", "già"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ho mangiato, hai visto", hint: "El ritmo del passato prossimo",
            text: [
              "En el passato prossimo, «ho, hai, ha» se pegan al participio y no llevan fuerza: «homangiàto», «haivìsto». La fuerza va en el participio.",
              "Recuerda que la h no suena: «ho visto» suena igual que «o visto». Al escribir, no la olvides.",
              "Muchos participios llevan doble: fatto, detto, scritto, letto, messo, preso no (pre-so). Escucha cuáles.",
            ],
            table: { head: ["", "fuerza en"], rows: [["ho mangiato", "-già-"], ["abbiamo visto", "-vì-"], ["hanno scritto", "-scrìt-"], ["ha letto", "lèt-"]] },
          },
          { kind: "shadow", title: "Participi", hint: "Escucha y repite. Marca las dobles.", items: ["fatto, detto, scritto, letto", "visto, preso, messo, chiesto", "aperto, risposto, scelto, speso", "bevuto, vissuto, perso, vinto"] },
          {
            kind: "shadow", title: "Frasi", hint: "Repite con la misma melodía.",
            items: ["Che cosa hai fatto ieri?", "Sabato ho dormito fino a tardi.", "Abbiamo visto un film bellissimo.", "Non ho fatto niente di speciale.", "Hai già mangiato?", "Ho perso il treno!"],
          },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passato prossimo con avere", hint: "El pasado con avere",
            text: [
              "Se forma con avere en presente + participio. El participio regular: -are → -ato (parlato), -ere → -uto (venduto), -ire → -ito (dormito).",
              "El participio no cambia con avere: «Marta ha mangiato», «I ragazzi hanno mangiato».",
              "La mayoría de verbos usan avere. Los de movimiento o cambio (andare, partire, arrivare…) usan essere: los verás en la unidad 15.",
            ],
            table: {
              head: ["", "mangiare", "dormire"],
              rows: [["io", "ho mangiato", "ho dormito"], ["tu", "hai mangiato", "hai dormito"], ["lui / lei", "ha mangiato", "ha dormito"], ["noi", "abbiamo mangiato", "abbiamo dormito"], ["voi", "avete mangiato", "avete dormito"], ["loro", "hanno mangiato", "hanno dormito"]],
            },
          },
          {
            kind: "intro", title: "Participi irregolari", hint: "Participios irregulares",
            text: [
              "Muchos verbos en -ere tienen el participio irregular. Hay que aprenderlos de memoria, como en español «hecho, visto, dicho».",
              "Algunos grupos ayudan: -endere → -eso (prendere → preso, spendere → speso); -ettere → -esso (mettere → messo); -ivere → -itto (scrivere → scritto).",
            ],
            table: {
              head: ["infinito", "participio"],
              rows: [["fare / dire", "fatto / detto"], ["vedere / leggere", "visto / letto"], ["prendere / chiedere", "preso / chiesto"], ["aprire / scegliere", "aperto / scelto"], ["bere / vincere", "bevuto / vinto"]],
            },
          },
          k.table("Tabella dei verbi", [
            ["fare", "ho fatto", "", "", "", "", ""],
            ["vedere", "", "hai visto", "", "", "", ""],
            ["prendere", "", "", "", "", "", ""],
            ["scrivere", "", "", "", "abbiamo scritto", "", ""],
            ["lavorare", "", "", "", "", "", ""],
          ], "Completa la tabla en passato prossimo."),
          {
            kind: "fill", title: "Che cosa hanno fatto?", hint: "Completa con el passato prossimo del verbo entre paréntesis.",
            items: [
              "Ieri io ___ fino alle dieci. (dormire)",
              "Sabato Marco ___ la casa. (pulire)",
              "Tu ___ il nuovo film di Sorrentino? (vedere)",
              "Noi ___ una pizza in centro. (mangiare)",
              "Che cosa ___ voi domenica? (fare)",
              "I miei genitori ___ una lettera al sindaco. (scrivere)",
              "Io ___ un caffè e ___ il giornale. (prendere, leggere)",
              "Giulia ___ trenta euro al mercato. (spendere)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ieri, fa, scorso", hint: "Expresiones de tiempo pasado",
            text: [
              "«Ieri» (ayer), «l'altro ieri» (anteayer), «stamattina» (esta mañana), «ieri sera» (anoche).",
              "«Fa» va detrás de la cantidad de tiempo: «due giorni fa» (hace dos días), «un anno fa» (hace un año).",
              "«Scorso» concuerda: il mese scorso, la settimana scorsa, l'anno scorso, sabato scorso.",
            ],
            examples: [
              { it: "Tre anni fa ho visitato Roma.", es: "Hace tres años visité Roma." },
              { it: "La settimana scorsa ho lavorato molto.", es: "La semana pasada trabajé mucho." },
            ],
          },
          {
            kind: "fill", title: "Quando?", hint: "Completa con fa, scorso / scorsa, ieri o stamattina.",
            items: ["Ho visto Paolo due giorni ___.", "La settimana ___ siamo andati al mare.", "___ sera ho cenato con i miei.", "Sabato ___ ho dormito tutto il giorno.", "___ ho preso solo un caffè: ho fame!", "Ho comprato questa macchina cinque anni ___."],
          },
          {
            kind: "intro", title: "Già, ancora, mai", hint: "Ya, todavía y nunca con el pasado",
            text: [
              "En el passato prossimo, «già», «ancora», «mai» y «sempre» van entre el auxiliar y el participio: «Ho già mangiato», «Non ho ancora finito», «Non ho mai visto Venezia».",
              "«Non… ancora» = todavía no. «Non… mai» = nunca. «Non… niente» = nada.",
            ],
            examples: [
              { it: "Hai già finito? — No, non ho ancora finito.", es: "¿Ya has terminado? — No, todavía no he terminado." },
              { it: "Non ho mai mangiato il sushi.", es: "Nunca he comido sushi." },
            ],
          },
          k.domanda(["Ho passato il weekend al mare.", "Sabato ho visto Giulia.", "Abbiamo mangiato in una trattoria.", "Sì, ho già fatto la spesa.", "Ho speso cinquanta euro.", "Ho conosciuto Marta un anno fa."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Ho visto un film. → Che cosa hai visto?"),
          k.negativa(["Ho fatto la spesa.", "Abbiamo visto il film.", "Hai già finito?", "Marco ha mangiato tutto.", "Ho letto quel libro."], "Pasa cada frase a negativo. En la última, usa «non… mai»."),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Com'è andato il weekend?", "Dos compañeros de trabajo el lunes por la mañana.", [
            { who: "Sara", text: "Buongiorno Davide! Com'è andato il weekend?" },
            { who: "Davide", text: "Benissimo! Sabato ho fatto una gita in montagna con mia sorella." },
            { who: "Sara", text: "Che bello! Avete camminato molto?" },
            { who: "Davide", text: "Cinque ore! Poi abbiamo mangiato in un rifugio: polenta e formaggio." },
            { who: "Sara", text: "E domenica?" },
            { who: "Davide", text: "Domenica non ho fatto niente: ho dormito e ho guardato una serie. E tu?" },
            { who: "Sara", text: "Io ho lavorato tutto sabato e domenica ho pulito la casa. Un weekend noioso!" },
          ], ["Che cosa ha fatto Davide sabato? Con chi?", "Quanto hanno camminato?", "Che cosa hanno mangiato? Dove?", "Che cosa ha fatto Davide domenica?", "Com'è stato il weekend di Sara? Perché?"]),
          k.listen("Un messaggio di Chiara", "Chiara deja un audio a una amiga.", [
            { who: "Chiara", text: "Ciao Ele! Scusa se non ho risposto ieri, ma ho avuto una giornata pazzesca." },
            { who: "Chiara", text: "La mattina ho perso il treno, così ho preso un taxi e ho speso quaranta euro!" },
            { who: "Chiara", text: "Al lavoro ho avuto tre riunioni e non ho mangiato niente fino alle quattro." },
            { who: "Chiara", text: "La sera, però, ho visto Luca: abbiamo bevuto qualcosa e abbiamo parlato tanto." },
            { who: "Chiara", text: "Ti racconto tutto domani. Un bacio!" },
          ], ["Perché Chiara non ha risposto ieri?", "Che cosa è successo la mattina?", "Quanto ha speso?", "Che cosa non ha fatto al lavoro?", "Che cosa ha fatto la sera?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La domenica di Ferragosto", [
            "Lo scorso Ferragosto la famiglia Esposito ha fatto quello che fanno molte famiglie italiane: una grande gita fuori porta.",
            "Hanno preparato tutto il giorno prima: la parmigiana, le polpette, il pane e tanta frutta. Il nonno ha portato il vino del suo paese.",
            "La mattina presto hanno preso la macchina e hanno guidato fino a un lago, vicino a casa. Hanno trovato un posto all'ombra e hanno aperto il tavolino.",
            "Hanno mangiato per tre ore! Poi i bambini hanno giocato a pallone, i genitori hanno dormito sotto gli alberi e la nonna ha letto il giornale.",
            "La sera, al ritorno, hanno trovato molto traffico. Ma nessuno si è lamentato: «È stata una giornata perfetta», ha detto il nonno.",
          ], ["Che cosa ha fatto la famiglia Esposito a Ferragosto?", "Che cosa hanno preparato il giorno prima?", "Dove sono andati? Come?", "Che cosa hanno fatto dopo pranzo?", "Che problema hanno avuto la sera?", "Che cosa ha detto il nonno?"]),
          k.spagna("¿Qué se hace en España el 15 de agosto o en un festivo de verano? Usa el passato prossimo: «L'anno scorso ho…»."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare", hint: "Contar algo en orden",
            text: [
              "Para contar una historia: prima (primero), poi (luego), dopo (después), alla fine (al final), all'improvviso (de repente).",
              "Para reaccionar cuando alguien te cuenta algo: «Davvero?», «Che bello!», «Che sfortuna!», «E poi?», «Com'è andata?».",
            ],
            examples: [
              { it: "Prima ho fatto colazione, poi ho preso il treno.", es: "Primero desayuné, luego cogí el tren." },
              { it: "Com'è andata la festa? — Benissimo!", es: "¿Qué tal fue la fiesta? — ¡Genial!" },
            ],
          },
          k.rispondi(["Che cosa hai fatto ieri sera?", "Che cosa hai fatto lo scorso fine settimana?", "Che cosa hai mangiato oggi?", "Quando hai visto per l'ultima volta i tuoi amici?", "Hai mai visto un film italiano? Quale?", "Che cosa hai fatto di bello l'estate scorsa?"]),
          { kind: "speak", title: "Non ancora o già?", hint: "Responde con già o non… ancora, y añade un detalle. Ejemplo: Hai fatto la spesa? → Sì, ho già fatto la spesa stamattina. / No, non ancora.", items: ["Hai fatto colazione?", "Hai finito di lavorare oggi?", "Hai già visto la nuova serie?", "Hai mai mangiato il tiramisù?", "Hai già fatto gli esercizi della pagina 5?"] },
          {
            kind: "roleplay", title: "Lunedì in ufficio", hint: "Un compañero te pregunta por tu fin de semana. La IA hace del compañero. Es informal.",
            steps: ["Saluda y pregunta qué tal su fin de semana.", "Reacciona a lo que te cuenta y pide detalles.", "Cuenta tu sábado: al menos 4 cosas en orden.", "Cuenta algo que salió mal el domingo.", "Proponed hacer algo juntos el fin de semana que viene."],
          },
          {
            kind: "roleplay", title: "Il testimone", hint: "Te han robado la bici delante de un bar. Un policía te pregunta qué pasó. La IA hace de policía. Usa «Lei».",
            steps: ["Explica qué ha pasado (ho lasciato la bici…).", "Di a qué hora y dónde.", "Describe qué has visto: una persona, cómo era, qué llevaba.", "Di qué has hecho después.", "Da tus datos y despídete."],
          },
          { kind: "speak", title: "Il mio weekend", hint: "Cuenta durante un minuto tu último fin de semana, del viernes por la noche al domingo, con prima, poi y alla fine.", items: ["Venerdì sera…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Ayer vi a Marco en el centro.", "¿Qué hiciste el fin de semana?", "No he terminado todavía.", "Hace dos años visitamos Florencia.", "Nunca he leído ese libro.", "El sábado dormí hasta las once.", "Perdí el tren y cogí un taxi.", "¿Ya habéis comido?"]),
          { kind: "write", title: "Il diario", hint: "Escribe tu diario de ayer (6–8 frases): qué hiciste por la mañana, por la tarde y por la noche, y qué no hiciste.", rows: 8, items: ["Caro diario, ieri…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: participi", ["fatto", "visto", "preso", "scritto", "aperto", "speso", "bevuto", "scelto"], "Escucha y escribe el participio."),
          k.dettato("Dettato: frasi", ["Che cosa hai fatto?", "Ho visto un bel film.", "Non ho ancora finito.", "Due giorni fa ho perso le chiavi.", "Avete già mangiato?"]),
          k.media([
            { type: "Serie", title: "L'amica geniale", where: "RaiPlay, HBO Max", why: "Basada en las novelas de Elena Ferrante: dos amigas en el Nápoles de los años 50. Todo es pasado y recuerdo." },
            { type: "Canción", title: "Albachiara, Vasco Rossi", where: "Spotify, YouTube", why: "Uno de los grandes clásicos del rock italiano (1979). Fíjate en los verbos que reconoces." },
            { type: "Podcast", title: "Coffee Break Italian", where: "Spotify, Apple Podcasts", why: "Busca los episodios sobre el passato prossimo: lo explican despacio con ejemplos." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué ha pasado en el episodio o qué te ha recordado la canción. Usa el passato prossimo.", items: ["Nell'episodio…"] },
        ],
      },
    ],

    exam: k.exam(14, {
      parole: ["l'altro ieri", "stamattina", "fa (due giorni fa)", "scorso", "perdere", "vincere", "fare le pulizie", "già", "non ancora", "una gita"],
      contrario: ["anoche", "el año pasado", "nunca (he…)", "abierto", "pedido (de pedir)", "elegido"],
      verbi: [["fare", "", "", "", "", "", ""], ["leggere", "", "", "", "", "", ""], ["spendere", "", "", "", "", "", ""]],
      verbiHint: "Completa la tabla en passato prossimo.",
      completaHint: "Completa con el passato prossimo del verbo entre paréntesis o con una expresión de tiempo.",
      completa: ["Ieri io ___ due ore. (correre)", "Marco non ___ niente. (dire)", "Voi ___ la finestra? (aprire)", "Loro ___ il treno delle otto. (prendere)", "Tu ___ già ___ quel film? (vedere)", "Ho conosciuto Luca tre anni ___.", "La settimana ___ ho lavorato molto.", "Noi ___ un regalo per la nonna. (scegliere)"],
      trasformaHint: "Las tres primeras, pásalas al passato prossimo. Las tres últimas, a negativo con la palabra entre paréntesis.",
      trasforma: ["Leggo il giornale.", "Scriviamo una mail.", "Bevono un caffè.", "Ho fatto la spesa. (ancora)", "Ho visto Venezia. (mai)", "Abbiamo mangiato. (niente)"],
      leggi: {
        text: [
          "Sabato scorso Anna ha compiuto trent'anni e ha organizzato una festa a sorpresa… per sé stessa! Ha invitato venti amici e ha detto a tutti di arrivare alle nove.",
          "Ha preparato la cena da sola: ha cucinato tre tipi di pasta e ha comprato una torta enorme. Alle nove, però, non è arrivato nessuno.",
          "Alle dieci ha sentito il campanello: tutti i suoi amici, con un regalo e una torta… uguale alla sua. Hanno riso tanto e hanno mangiato due torte.",
        ],
        questions: ["Perché Anna ha fatto una festa?", "Che cosa ha preparato?", "Che cosa è successo alle nove?", "Perché hanno mangiato due torte?"],
      },
      ascolta: {
        script: [
          { who: "Paolo", text: "Allora, com'è andata la vacanza in Puglia?" },
          { who: "Irene", text: "Benissimo! Abbiamo visitato Lecce e Otranto e abbiamo fatto il bagno ogni giorno." },
          { who: "Paolo", text: "E avete mangiato bene?" },
          { who: "Irene", text: "Troppo! Ho provato le orecchiette e il pasticciotto. Ma ho perso il telefono l'ultimo giorno." },
          { who: "Paolo", text: "Che sfortuna! E le foto?" },
          { who: "Irene", text: "Per fortuna le ha fatte mio marito con il suo." },
        ],
        questions: ["Dove sono andati Irene e suo marito?", "Che cosa hanno fatto ogni giorno?", "Che cosa ha mangiato Irene?", "Che problema ha avuto? Quando?", "Chi ha le foto?"],
      },
      parla: ["Racconta il tuo ultimo fine settimana in un minuto.", "Di' tre cose che hai già fatto oggi e due che non hai ancora fatto.", "Racconta una giornata in cui tutto è andato male.", "Che cosa hai fatto l'estate scorsa?"],
      roleHint: "Es informal.",
      role: ["Un amigo te pregunta qué tal tu viaje: cuéntale tres cosas.", "Él te cuenta algo: reacciona y pide detalles.", "Pregúntale si ha visto la última película que has visto tú."],
      dettato: ["Ho fatto una gita.", "Che cosa avete visto?", "due anni fa", "Non ho ancora scritto.", "Hanno speso troppo.", "Hai mai bevuto il limoncello?"],
      traduci: ["Ayer no hice nada.", "¿Habéis visto a Giulia?", "Hace un mes perdí las llaves.", "Todavía no he leído el periódico.", "El sábado pasado cocinamos para diez personas.", "¿Qué te dijo?"],
      scrivi: { hint: "Escribe un mensaje (50–60 palabras) a un amigo contándole tu último fin de semana: qué hiciste, con quién y qué salió bien o mal.", start: "Ciao! Ti racconto il mio weekend…" },
    }),
  };
})();
