// Unità 15 · In viaggio — ver content/AUTHORING.md
(() => {
  const k = K.at("A1");
  window.UNITS = window.UNITS || {};
  window.UNITS[15] = {
    n: 15,
    level: "A1",
    title: "In viaggio",
    goal: "Viajar: comprar billetes, moverte en tren y en avión, alojarte en un hotel y contar un viaje.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a viajar por Italia: comprar un billete de tren, entender los anuncios de la estación, reservar un hotel y contar un viaje.",
              "Gramática: el passato prossimo con essere (sono andato, siamo partiti), la concordancia del participio y cuándo usar avere o essere.",
              "Esta unidad cierra el pasado de A1: después ya puedes contar casi cualquier cosa que te haya pasado.",
            ],
          },
          {
            kind: "intro", title: "Sono andato, sono andata", hint: "Un adelanto: el pasado con essere",
            text: [
              "Los verbos de movimiento y de cambio (andare, venire, partire, arrivare, uscire, tornare, restare…) forman el pasado con essere, no con avere.",
              "Con essere el participio concuerda con el sujeto, como un adjetivo: Marco è andato, Giulia è andata, i ragazzi sono andati, le ragazze sono andate.",
            ],
            examples: [
              { it: "Sono andata a Napoli in treno.", es: "Fui a Nápoles en tren. (habla una mujer)" },
              { it: "Siamo arrivati tardi.", es: "Llegamos tarde." },
              { it: "A che ora sei partito?", es: "¿A qué hora saliste? (a un hombre)" },
            ],
          },
          { kind: "speak", title: "Il tuo ultimo viaggio", hint: "Antes de empezar: ¿dónde fue tu último viaje? ¿Con quién? Dilo como puedas.", items: ["Il mio ultimo viaggio…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "In viaggio", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il biglietto", "andata e ritorno", "il binario", "il treno regionale", "il treno ad alta velocità",
              "la coincidenza", "il ritardo", "la partenza", "l'arrivo", "obliterare / convalidare",
              "l'aeroporto", "il volo", "la carta d'imbarco", "il bagaglio a mano", "la valigia",
              "l'albergo", "la camera singola", "la camera doppia", "la colazione inclusa", "la ricevuta",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Verbi di movimento", hint: "Escribe el infinitivo italiano.",
            items: ["salir (de viaje)", "llegar", "volver", "quedarse", "subir (al tren)", "bajar (del tren)", "entrar", "caer", "nacer", "morir", "cambiar de tren", "perder el avión", "reservar", "facturar (la maleta)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: binario → Il treno per Firenze parte dal binario 8.", items: ["il binario", "in ritardo", "sono partito / partita", "siamo arrivati", "prenotare", "la coincidenza", "andata e ritorno", "sono rimasto / rimasta"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Gli annunci in stazione", hint: "Entender los anuncios",
            text: [
              "Los anuncios de las estaciones siempre siguen el mismo orden: tipo de tren, número, destino, hora, andén y si hay retraso. Si conoces ese orden, los entiendes aunque vayan rápido.",
              "Los números de los trenes se leen de dos en dos o cifra a cifra: «treno 9 5 3 2» o «novantacinque trentadue».",
              "Palabras que se oyen siempre: «in partenza», «in arrivo», «binario», «ritardo previsto di… minuti», «si ferma a…» (para en…).",
            ],
            table: { head: ["", "significa"], rows: [["in partenza", "que sale"], ["in arrivo", "que llega"], ["ritardo previsto", "retraso previsto"], ["allontanarsi dalla linea gialla", "alejarse de la línea amarilla"]] },
          },
          {
            kind: "shadow", title: "Annunci", hint: "Escucha y repite cada anuncio con su ritmo.",
            items: [
              "Il treno regionale delle ore otto e quindici per Bologna è in partenza dal binario tre.",
              "Il treno Frecciarossa per Milano centrale viaggia con un ritardo previsto di dieci minuti.",
              "Attenzione: allontanarsi dalla linea gialla.",
              "Il treno si ferma a Prato, Firenze e Arezzo.",
            ],
          },
          { kind: "shadow", title: "Frasi", hint: "Repite con la misma melodía.", items: ["Un biglietto per Venezia, andata e ritorno.", "Da quale binario parte?", "Il treno è in ritardo.", "Siamo arrivati a mezzanotte.", "Sono rimasta tre giorni a Roma.", "Ho prenotato una camera doppia."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passato prossimo con essere", hint: "El pasado con essere",
            text: [
              "Se forma con essere en presente + participio: sono andato, sei andato, è andato, siamo andati, siete andati, sono andati.",
              "El participio termina en -o, -a, -i, -e según el sujeto. Si el grupo es mixto, masculino plural: «Marco e Giulia sono partiti».",
              "Usan essere: los verbos de movimiento (andare, venire, partire, arrivare, tornare, uscire, entrare, salire, scendere), los de cambio de estado (nascere, morire, diventare), restare / rimanere, essere y piacere, y todos los reflexivos (mi sono svegliato).",
            ],
            table: {
              head: ["", "andare", "partire"],
              rows: [["io", "sono andato / -a", "sono partito / -a"], ["tu", "sei andato / -a", "sei partito / -a"], ["lui / lei", "è andato / -a", "è partito / -a"], ["noi", "siamo andati / -e", "siamo partiti / -e"], ["voi", "siete andati / -e", "siete partiti / -e"], ["loro", "sono andati / -e", "sono partiti / -e"]],
            },
          },
          {
            kind: "intro", title: "Participi irregolari con essere", hint: "Participios irregulares",
            text: ["Algunos de estos verbos tienen el participio irregular: venire → venuto, essere → stato, nascere → nato, morire → morto, rimanere → rimasto, scendere → sceso.", "Ojo: «essere» y «stare» comparten participio: «sono stato» = he estado / fui."],
          },
          k.table("Tabella dei verbi", [
            ["arrivare", "sono arrivato/a", "", "", "", "", ""],
            ["venire", "", "", "è venuto/a", "", "", ""],
            ["essere", "", "", "", "", "", ""],
            ["rimanere", "", "", "", "siamo rimasti/e", "", ""],
            ["svegliarsi", "mi sono svegliato/a", "", "", "", "", ""],
          ], "Completa la tabla en passato prossimo. Escribe las dos terminaciones cuando haga falta (-o / -a)."),
          {
            kind: "fill", title: "Avere o essere?", hint: "Completa con el passato prossimo. Cuidado con el auxiliar y la terminación.",
            items: [
              "Giulia ___ a Roma in aereo. (andare)",
              "Noi ___ il treno delle sei. (prendere)",
              "I miei genitori ___ ieri sera. (tornare)",
              "Tu, Marta, a che ora ___? (arrivare)",
              "Io ___ due notti in un ostello. (dormire)",
              "Le ragazze ___ a casa tutto il giorno. (rimanere)",
              "Sabato ___ con Luca: siamo stati al cinema. (io, uscire — habla una mujer)",
              "Mio nonno ___ nel 1940. (nascere)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "In, a, con, da… per viaggiare", hint: "Preposiciones de viaje",
            text: [
              "Medio de transporte: «in» + medio sin artículo: in treno, in aereo, in macchina, in autobus, in bici. Pero «a piedi».",
              "Origen: «da» (vengo da Milano; il treno da Roma). Destino de un tren: «per» (il treno per Napoli).",
              "Duración: «per» o nada: «Sono rimasto (per) tre giorni». Desde hace: «da»: «Sono qui da una settimana».",
            ],
            examples: [{ it: "Siamo andati in Sicilia in nave.", es: "Fuimos a Sicilia en barco." }, { it: "Il treno da Torino è arrivato con mezz'ora di ritardo.", es: "El tren de Turín llegó con media hora de retraso." }],
          },
          {
            kind: "fill", title: "Preposizioni", hint: "Completa con in, a, da o per.",
            items: ["Sono venuta ___ treno.", "Andiamo in centro ___ piedi.", "Il treno ___ Bari parte alle nove.", "Sono qui ___ tre giorni e parto domani.", "Questo autobus arriva ___ Fiumicino.", "Siamo rimasti a Lecce ___ una settimana."],
          },
          {
            kind: "intro", title: "Il participio si accorda", hint: "La concordancia del participio",
            text: ["Con essere, mira siempre quién es el sujeto para elegir la terminación: «Anna è partita», «Anna e Laura sono partite», «Anna e Luca sono partiti».", "Con avere, el participio no cambia: «Anna ha viaggiato», «Le ragazze hanno viaggiato»."],
          },
          {
            kind: "fill", title: "-o, -a, -i, -e", hint: "Completa la terminación del participio (o déjala en -o si no cambia).",
            items: ["Laura è arrivat___ ieri.", "I miei amici sono partit___ per la Grecia.", "Mia sorella ha prenotat___ l'albergo.", "Le studentesse sono tornat___ dall'Erasmus.", "Paolo e Silvia sono venut___ in macchina.", "Signora, Lei è già stat___ a Venezia?"],
          },
          k.domanda(["Sono andata a Torino.", "Siamo partiti alle sette.", "Sono rimasto quattro giorni.", "Siamo venuti in macchina.", "Sì, sono già stata in Sicilia.", "Il treno è arrivato in ritardo."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Sono andata a Roma. → Dove sei andata?"),
          k.negativa(["Sono uscita ieri sera.", "Il treno è partito in orario.", "Siamo stati a Firenze.", "Hanno preso l'aereo.", "Mi sono svegliato presto."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Alla biglietteria", "Una turista compra un billete en la estación de Roma Termini.", [
            { who: "Turista", text: "Buongiorno. Un biglietto per Firenze, per favore." },
            { who: "Impiegato", text: "Solo andata o andata e ritorno?" },
            { who: "Turista", text: "Andata e ritorno. Torno domenica sera." },
            { who: "Impiegato", text: "Frecciarossa o regionale? Il Frecciarossa ci mette un'ora e mezza, il regionale quasi quattro ore." },
            { who: "Turista", text: "Il Frecciarossa. Quanto costa?" },
            { who: "Impiegato", text: "Novantotto euro andata e ritorno. Parte alle dieci e venti dal binario quattordici." },
            { who: "Turista", text: "Devo convalidare il biglietto?" },
            { who: "Impiegato", text: "No, per il Frecciarossa non serve. Per il regionale, invece, sì. Buon viaggio!" },
          ], ["Dove va la turista? Quando torna?", "Quanto dura il viaggio in Frecciarossa? E in regionale?", "Quanto costa il biglietto?", "A che ora parte il treno? Da che binario?", "Quando bisogna convalidare il biglietto?"]),
          k.listen("Il check-in", "Un hombre llega a un hotel de Venecia.", [
            { who: "Receptionist", text: "Buonasera, benvenuto! Ha una prenotazione?" },
            { who: "Sig. Duarte", text: "Sì, a nome Duarte. Una camera doppia per tre notti." },
            { who: "Receptionist", text: "Ecco: camera 214, al secondo piano. La colazione è inclusa, dalle sette alle dieci." },
            { who: "Sig. Duarte", text: "Perfetto. Scusi, siamo arrivati in ritardo e non abbiamo cenato. C'è un ristorante qui vicino?" },
            { who: "Receptionist", text: "Sì, la trattoria qui a destra è aperta fino a mezzanotte." },
            { who: "Sig. Duarte", text: "Grazie. E per andare all'aeroporto, domenica?" },
            { who: "Receptionist", text: "C'è il vaporetto o il bus dalla stazione. Glielo spiego domani mattina." },
          ], ["A nome di chi è la prenotazione? Per quante notti?", "Che camera hanno? A che piano?", "Fino a che ora c'è la colazione?", "Perché il signor Duarte chiede un ristorante?", "Come si va all'aeroporto?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Viaggiare in treno in Italia", [
            "Il treno è uno dei modi più comodi per viaggiare in Italia. Le grandi città sono collegate dall'alta velocità: da Roma a Milano ci vogliono circa tre ore.",
            "Ci sono due tipi principali di treni: i regionali, lenti ed economici, che si fermano in tutte le stazioni, e i treni ad alta velocità, come il Frecciarossa e l'Italo, veloci ma più cari.",
            "Attenzione: se compri un biglietto regionale di carta, devi convalidarlo nella macchinetta prima di salire. Se non lo fai, puoi prendere una multa.",
            "Gli italiani si lamentano spesso dei ritardi, soprattutto sui treni regionali. Per questo molti controllano l'app prima di uscire di casa.",
            "Molti stranieri, però, scoprono che il treno è il modo migliore per vedere il paesaggio: le colline della Toscana, il mare della Liguria, le montagne del Trentino.",
          ], ["Quanto tempo ci vuole da Roma a Milano con l'alta velocità?", "Che differenza c'è tra un regionale e un Frecciarossa?", "Che cosa bisogna fare con un biglietto regionale di carta?", "Che cosa succede se non lo fai?", "Di che cosa si lamentano spesso gli italiani?", "Che cosa si può vedere dal treno?"]),
          k.spagna("¿Cómo se viaja en España: tren, autobús, coche? Cuenta un viaje que hiciste en passato prossimo."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "In albergo e in stazione", hint: "Frases de viaje",
            text: ["En la estación: «Da che binario parte…?», «È in orario?», «Devo cambiare?». En el hotel: «Ho prenotato una camera a nome…», «A che ora è la colazione?», «Posso lasciare qui la valigia?».", "Si hay un problema: «Il riscaldamento non funziona», «Manca l'asciugamano», «C'è troppo rumore»."],
            examples: [{ it: "Scusi, questo treno si ferma a Prato?", es: "Perdone, ¿este tren para en Prato?" }, { it: "Posso lasciare la valigia fino alle cinque?", es: "¿Puedo dejar la maleta hasta las cinco?" }],
          },
          k.rispondi(["Qual è stato il tuo ultimo viaggio? Dove sei andato o andata?", "Come sei andato: in treno, in aereo, in macchina?", "Quanto tempo sei rimasto o rimasta?", "Dove hai dormito?", "Che cosa ti è piaciuto di più?", "Sei mai stato o stata in Italia? Dove?"]),
          { kind: "speak", title: "Racconta al passato", hint: "Cuenta en passato prossimo lo que hizo cada persona. Ejemplo: Marta / partire alle otto → Marta è partita alle otto.", items: ["io / arrivare a Milano alle nove", "Giulia e Sara / andare al mare", "noi / restare in albergo", "tu (una chica) / tornare tardi", "i miei genitori / venire in macchina", "Luca / perdere il treno"] },
          {
            kind: "roleplay", title: "Il treno è in ritardo", hint: "Tu tren a Florencia lleva 50 minutos de retraso y pierdes el enlace. Hablas con el empleado de la estación. La IA hace de empleado. Usa «Lei».",
            steps: ["Explica qué ha pasado y enseña tu billete.", "Pregunta cuál es el próximo tren.", "Pregunta si tienes que pagar otro billete.", "Pregunta si puedes pedir un reembolso («un rimborso»).", "Da las gracias y despídete."],
          },
          {
            kind: "roleplay", title: "In albergo", hint: "Llegas al hotel y hay un problema con tu habitación. La IA hace de recepcionista. Usa «Lei».",
            steps: ["Di tu nombre y que tienes una reserva.", "Te dan una habitación individual, pero reservaste una doble: explícalo.", "Acepta la solución que te propone o pide otra.", "Pregunta por el desayuno y la conexión wifi.", "Pregunta cómo llegar al centro y despídete."],
          },
          { kind: "speak", title: "Un viaggio indimenticabile", hint: "Cuenta durante un minuto el mejor viaje de tu vida: adónde fuiste, cómo, con quién, cuánto tiempo y qué hiciste.", items: ["Il mio viaggio più bello…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Fuimos a Roma en tren.", "¿A qué hora llegasteis?", "Mi hermana se quedó tres días en Venecia.", "El tren salió con retraso.", "Un billete de ida y vuelta para Milán, por favor.", "Nunca he estado en Sicilia.", "Anoche volví tarde y me acosté a las dos.", "He reservado una habitación doble con desayuno."]),
          { kind: "write", title: "Una recensione dell'albergo", hint: "Escribe una reseña (7–9 frases) de un hotel donde estuviste: cuándo fuiste, cuántas noches te quedaste, cómo era la habitación, el desayuno, el personal y si lo recomiendas.", rows: 9, items: ["Sono stato / stata all'albergo…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: annunci", ["binario sette", "in ritardo di venti minuti", "andata e ritorno", "il treno per Napoli", "la carta d'imbarco", "camera doppia"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Siamo arrivate ieri.", "Sei mai stato a Roma?", "Il treno è partito.", "Sono rimasti a casa.", "Mi sono svegliata tardi."]),
          k.media([
            { type: "Película", title: "Benvenuti al Sud (2010)", where: "Busca dónde verla en JustWatch", why: "Un empleado de correos del norte es trasladado a un pueblo cerca de Nápoles. Comedia sobre los tópicos entre norte y sur." },
            { type: "YouTube", title: "Easy Italian", where: "YouTube", why: "Busca episodios en estaciones o aeropuertos: preguntas reales a viajeros." },
            { type: "Canción", title: "Azzurro, Adriano Celentano", where: "Spotify, YouTube", why: "Un verano en la ciudad soñando con irse de viaje. Ya la conoces de la unidad 9: ahora entenderás más." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta el viaje del protagonista de la película: adónde fue, qué le pasó y cómo volvió.", items: ["È andato… È arrivato…"] },
        ],
      },
    ],

    exam: k.exam(15, {
      parole: ["il binario", "la coincidenza", "convalidare", "il ritardo", "la carta d'imbarco", "il bagaglio a mano", "colazione inclusa", "la ricevuta", "rimanere", "scendere"],
      contrario: ["el billete de ida y vuelta", "el vuelo", "llegar", "volver", "la maleta", "nacer"],
      verbi: [["partire", "", "", "", "", "", ""], ["venire", "", "", "", "", "", ""], ["alzarsi", "", "", "", "", "", ""]],
      verbiHint: "Completa la tabla en passato prossimo (con las dos terminaciones, -o / -a).",
      completaHint: "Completa con el passato prossimo (avere o essere) o con una preposición.",
      completa: ["Le mie cugine ___ ieri da Londra. (tornare)", "Noi ___ due biglietti per Bari. (comprare)", "Mio padre ___ nel 1965. (nascere)", "Tu, Anna, ___ mai ___ a Napoli? (essere)", "Il treno ___ con un'ora di ritardo. (partire)", "Siamo venuti ___ macchina.", "Sono qui ___ tre giorni.", "Il treno ___ Torino è in arrivo."],
      trasformaHint: "Pasa cada frase al passato prossimo.",
      trasforma: ["Marta va a Roma in treno.", "I ragazzi arrivano alle otto.", "Restiamo a casa.", "Le mie amiche escono stasera.", "Mi sveglio alle sei.", "Prendono l'aereo per Palermo."],
      leggi: {
        text: [
          "La settimana scorsa Lorenzo è andato a Torino per un colloquio di lavoro. È partito da Roma alle sei di mattina con il Frecciarossa.",
          "A Bologna il treno si è fermato per un problema tecnico ed è rimasto fermo un'ora. Lorenzo ha chiamato l'azienda e ha spiegato tutto.",
          "È arrivato con un'ora e mezza di ritardo, ma il colloquio è andato benissimo. Due giorni dopo gli hanno telefonato: comincia a lavorare a gennaio.",
        ],
        questions: ["Perché Lorenzo è andato a Torino?", "Che problema c'è stato? Dove?", "Che cosa ha fatto Lorenzo?", "Com'è finita la storia?"],
      },
      ascolta: {
        script: [
          { who: "Annuncio", text: "Il treno regionale delle diciotto e dieci per Verona è in partenza dal binario due." },
          { who: "Annuncio", text: "Il Frecciarossa per Napoli delle diciotto e venticinque viaggia con un ritardo previsto di quindici minuti." },
          { who: "Annuncio", text: "Il treno per Venezia, previsto al binario cinque, partirà dal binario sette." },
          { who: "Annuncio", text: "Attenzione: allontanarsi dalla linea gialla." },
        ],
        questions: ["A che ora parte il treno per Verona? Da che binario?", "Quanto ritardo ha il treno per Napoli?", "Che cosa è cambiato per il treno per Venezia?", "Che cosa devono fare i passeggeri alla fine?"],
      },
      parla: ["Racconta il tuo ultimo viaggio: dove, come, con chi, quanto tempo.", "Compra un biglietto andata e ritorno per Firenze e chiedi il binario.", "Racconta che cosa hai fatto ieri, dalla mattina alla sera.", "Chiedi in albergo a che ora è la colazione e se puoi lasciare la valigia."],
      roleHint: "Usa «Lei».",
      role: ["Has perdido tu vuelo: explícalo en el mostrador de la aerolínea.", "Pregunta cuándo sale el próximo y si tienes que pagar.", "Reserva un hotel para esta noche cerca del aeropuerto."],
      dettato: ["Siamo partiti presto.", "il binario dodici", "È arrivata in ritardo.", "Sono stato in Sicilia.", "Le ragazze sono uscite.", "andata e ritorno"],
      traduci: ["Llegamos a Nápoles a medianoche.", "Mis amigas se quedaron en el hotel.", "¿Has estado alguna vez en Venecia? (a una chica)", "El tren para Bolonia sale del andén tres.", "Me levanté tarde y perdí el autobús.", "Mi abuela nació en 1938."],
      scrivi: { hint: "Escribe una postal (50–60 palabras) desde Italia: cuándo llegaste, cómo viajaste, dónde te alojas y qué has visitado.", start: "Ciao a tutti! Sono arrivata / arrivato…" },
    }),
  };
})();
