// Unità 16 · Messaggi e telefonate (repaso integrado de A1) — ver content/AUTHORING.md
(() => {
  const k = K.at("A1");
  window.UNITS = window.UNITS || {};
  window.UNITS[16] = {
    n: 16,
    level: "A1",
    title: "Messaggi e telefonate",
    goal: "Llamar por teléfono, dejar un mensaje, escribir un correo formal y un WhatsApp, repasando todo A1.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar por teléfono (formal e informal), dejar un mensaje en el contestador, escribir un correo formal y mensajes cortos.",
              "Es la unidad de repaso de A1: vuelven el presente regular e irregular, el passato prossimo, los artículos, las preposiciones, piacere y los modales.",
              "Si algo de aquí te cuesta, vuelve a su unidad antes del examen de nivel.",
            ],
          },
          {
            kind: "intro", title: "Pronto?", hint: "Un adelanto: al teléfono",
            text: ["Al coger el teléfono, los italianos dicen «Pronto?» (¿diga?). Para presentarte: «Sono Ana» o, en formal, «Buongiorno, sono Ana Ruiz».", "Para preguntar por alguien: «C'è Marco?» (informal) o «Potrei parlare con il dottor Neri?» (formal)."],
            examples: [{ it: "Pronto? — Ciao, sono io, Luca!", es: "¿Diga? — ¡Hola, soy yo, Luca!" }, { it: "Mi dispiace, in questo momento non c'è.", es: "Lo siento, ahora mismo no está." }, { it: "Può richiamare più tardi?", es: "¿Puede volver a llamar más tarde?" }],
          },
          { kind: "speak", title: "Al telefono", hint: "Antes de empezar: ¿con quién hablas por teléfono? ¿Prefieres llamar o escribir? Dilo en italiano.", items: ["Di solito…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Telefono e messaggi", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "chiamare / telefonare", "richiamare", "la chiamata persa", "la segreteria telefonica", "lasciare un messaggio",
              "il numero sbagliato", "la linea", "riattaccare", "il messaggio vocale", "l'allegato",
              "l'oggetto (della mail)", "inoltrare", "rispondere", "lo squillo", "scarico (il telefono)",
              "la batteria", "il caricabatterie", "la rete / il campo", "occupato", "spento",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Formule", hint: "Escribe en italiano la fórmula equivalente.",
            items: ["¿Diga?", "¿De parte de quién?", "Un momento, por favor.", "Le paso con…", "Se ha equivocado de número.", "Te llamo luego.", "Estimado señor Rossi (en un correo)", "Un saludo cordial", "Hasta pronto (por escrito, informal)", "Quedo a la espera de su respuesta"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: richiamare → Ti richiamo tra dieci minuti.", items: ["richiamare", "la batteria", "ho lasciato un messaggio", "potrebbe", "occupato", "l'allegato", "mi piace scrivere", "ieri ho chiamato"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Numeri e lettere al telefono", hint: "Dictar números y deletrear",
            text: [
              "Al teléfono se deletrea con nombres de ciudades italianas: A come Ancona, B come Bologna, C come Como, D come Domodossola, E come Empoli, F come Firenze, G come Genova…",
              "Los números de teléfono se dictan de dos en dos o de tres en tres: 347 / 22 / 18 / 905 → «tre quattro sette, ventidue, diciotto, nove zero cinque».",
              "Si no entiendes: «Come, scusi?», «Può ripetere più lentamente?», «Non si sente bene».",
            ],
            table: { head: ["letra", "come…"], rows: [["A · B · C", "Ancona, Bologna, Como"], ["D · E · F", "Domodossola, Empoli, Firenze"], ["G · H · I", "Genova, hotel, Imola"], ["L · M · N", "Livorno, Milano, Napoli"], ["R · S · T", "Roma, Savona, Torino"]] },
          },
          { kind: "shadow", title: "Detta il tuo nome", hint: "Escucha cómo se deletrean estos apellidos y repítelo.", items: ["Ruiz: R come Roma, U come Udine, I come Imola, Z come Zara.", "Gómez: G come Genova, O come Otranto, M come Milano, E come Empoli, Z come Zara.", "Neri: N come Napoli, E come Empoli, R come Roma, I come Imola."] },
          { kind: "shadow", title: "Al telefono", hint: "Repite con la misma melodía.", items: ["Pronto, chi parla?", "Buongiorno, sono Ana Ruiz. Potrei parlare con la dottoressa Neri?", "Un attimo, gliela passo.", "Mi dispiace, è in riunione. Vuole lasciare un messaggio?", "Sì, grazie. Può dirle di richiamarmi?", "Certo. Mi lascia il suo numero?"] },
          { kind: "speak", title: "Detta", hint: "Deletrea y dicta en voz alta como si estuvieras al teléfono.", items: ["Il tuo nome e cognome", "Il tuo numero di telefono", "La tua email", "Il nome della tua via"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: presente e passato", hint: "Repaso de los tiempos de A1",
            text: [
              "En A1 has aprendido dos tiempos: el presente (para lo habitual, lo de ahora y el futuro cercano: «Domani parto») y el passato prossimo (para lo que pasó).",
              "Los irregulares más usados: essere, avere, fare, andare, venire, uscire, stare, dare, bere, sapere, volere, potere, dovere, dire, scegliere, salire, rimanere.",
              "En el pasado, recuerda: avere con la mayoría de verbos; essere con movimiento, cambio, restare y reflexivos.",
            ],
          },
          k.table("Presente e passato", [
            ["andare", "vado", "", ""],
            ["fare", "", "", "ho fatto"],
            ["venire", "", "vengono", ""],
            ["dire", "dico", "", ""],
            ["volere", "", "", ""],
            ["rimanere", "", "", ""],
            ["uscire", "", "", ""],
            ["bere", "", "", ""],
          ], "Completa: presente con io, presente con loro y passato prossimo con io.", ["presente (io)", "presente (loro)", "passato (io)"]),
          {
            kind: "fill", title: "Presente o passato?", hint: "Completa con el presente o el passato prossimo del verbo entre paréntesis, según el sentido.",
            items: [
              "Di solito io ___ alle sette, ma ieri ___ alle nove. (svegliarsi)",
              "Adesso Marco non ___: è in riunione. (potere)",
              "Ieri ti ___ tre volte! Perché non ___? (chiamare, rispondere)",
              "Domani ___ a Milano per lavoro. (noi, andare)",
              "Che cosa ti ___ la professoressa? (dire)",
              "Non ___ il caricabatterie: il telefono è scarico. (io, trovare)",
              "Ogni sera mia madre mi ___ un messaggio. (mandare)",
              "Ieri le ragazze ___ a casa tutto il giorno. (rimanere)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: articoli e preposizioni", hint: "Repaso: artículos y preposiciones",
            text: [
              "Artículos: il, lo, l', la / i, gli, le, y un, uno, una, un'. Recuerda «lo / uno» delante de s + consonante, z, gn, ps.",
              "Preposiciones articuladas: di, a, da, in, su + artículo (del, al, dal, nel, sul…). Sin artículo: a casa, in ufficio, in treno, a scuola.",
            ],
          },
          {
            kind: "fill", title: "Articoli e preposizioni", hint: "Completa con el artículo o la preposición (simple o articulada) que falta.",
            items: [
              "Ho lasciato ___ telefono ___ tavolo ___ cucina.",
              "___ zio di Marco lavora ___ banca.",
              "Ti mando ___ mail con ___ allegati.",
              "Siamo andati ___ cinema e poi ___ casa di Giulia.",
              "Il numero è ___ agenda, ___ prima pagina.",
              "Ho ___ appuntamento ___ dentista ___ cinque.",
            ],
          },
          {
            kind: "intro", title: "Ripasso: piacere e i modali", hint: "Repaso: piacere y los modales",
            text: ["Piacere: mi piace + una cosa o un verbo; mi piacciono + varias cosas. «Gli» = a él, «le» = a ella / a usted.", "Volere, potere, dovere + infinitivo. Para pedir con educación: vorrei, potrei, mi può…?"],
          },
          {
            kind: "fill", title: "Piacere e modali", hint: "Completa con piace / piacciono, un pronombre o el modal entre paréntesis.",
            items: [
              "A Luca non ___ i messaggi vocali.",
              "(a lei) ___ piace scrivere lunghe mail.",
              "Scusi, ___ parlare con il direttore? (io, potere)",
              "Domani ___ alzarmi presto. (dovere)",
              "Ragazzi, ___ venire a cena da me? (volere)",
              "Mi ___ molto le tue foto!",
            ],
          },
          k.domanda(["Sono Paola, la collega di Marco.", "È in riunione fino alle tre.", "Il mio numero è 333 45 67 890.", "L'ho chiamato ieri sera.", "Sì, gli ho lasciato un messaggio.", "Preferisco scrivere."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Sono Paola. → Chi parla?"),
          k.negativa(["Ti ho chiamato.", "Il direttore c'è.", "Mi piacciono le telefonate.", "Posso richiamare.", "Ho letto il tuo messaggio."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Una telefonata formale", "Ana llama a una academia de idiomas.", [
            { who: "Segretaria", text: "Scuola Dante, buongiorno!" },
            { who: "Ana", text: "Buongiorno, sono Ana Ruiz. Potrei parlare con la professoressa Neri?" },
            { who: "Segretaria", text: "Mi dispiace, in questo momento è a lezione. Vuole lasciare un messaggio?" },
            { who: "Ana", text: "Sì, grazie. Ieri ho fatto il test di livello e vorrei sapere il risultato." },
            { who: "Segretaria", text: "Va bene. Mi può dire il suo numero?" },
            { who: "Ana", text: "Tre quattro sette, dodici, ottantacinque, sei zero due." },
            { who: "Segretaria", text: "Perfetto. La professoressa la richiama dopo le due." },
            { who: "Ana", text: "Grazie mille, arrivederci." },
          ], ["Con chi vuole parlare Ana?", "Perché non può parlare con lei?", "Che cosa ha fatto Ana ieri?", "Qual è il numero di Ana? Scrivilo in cifre.", "Quando la richiama la professoressa?"]),
          k.listen("La segreteria telefonica", "Un mensaje en el contestador de Ana.", [
            { who: "Prof.ssa Neri", text: "Buongiorno Ana, sono Claudia Neri della scuola Dante. Ho visto il suo test: è andato molto bene." },
            { who: "Prof.ssa Neri", text: "Il suo livello è A1 completo, quindi può cominciare il corso A2." },
            { who: "Prof.ssa Neri", text: "Il corso comincia lunedì tre marzo, il martedì e il giovedì dalle sei alle otto." },
            { who: "Prof.ssa Neri", text: "Deve venire in segreteria entro venerdì per l'iscrizione. Se ha domande, mi scriva una mail. A presto!" },
          ], ["Com'è andato il test di Ana?", "Che corso può fare?", "Quando comincia il corso? Che giorni?", "Che cosa deve fare Ana entro venerdì?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Gli italiani e il telefono", [
            "In Italia quasi tutti hanno uno smartphone e WhatsApp è il modo più usato per comunicare: con gli amici, con la famiglia e spesso anche con il medico o con la scuola dei figli.",
            "Gli italiani amano i messaggi vocali. Molti preferiscono registrare un audio di due minuti piuttosto che scrivere un messaggio lungo. Altri, invece, li odiano!",
            "Ci sono anche i famosi gruppi di WhatsApp: il gruppo della famiglia, quello del calcetto, quello dei genitori della classe… con decine di messaggi al giorno.",
            "Per le cose formali, invece, si scrive una mail. Si comincia con «Gentile» o «Egregio» e si finisce con «Cordiali saluti». Usare «Ciao» con un professore o con un ufficio non va bene.",
            "E al telefono? Quando si risponde si dice «Pronto?». Al lavoro, invece, si risponde con il nome dell'azienda: «Studio Bianchi, buongiorno».",
          ], ["Qual è il modo più usato per comunicare?", "Che cosa pensano gli italiani dei messaggi vocali?", "Che gruppi di WhatsApp ci sono?", "Come comincia e come finisce una mail formale?", "Come si risponde al telefono a casa? E al lavoro?", "E tu: preferisci messaggi scritti o vocali? Perché?"]),
          k.spagna("¿Cómo se comunica la gente en España: llamadas, mensajes, audios? ¿Cómo se escribe un correo formal?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Telefonate formali e informali", hint: "Llamadas: tú y usted",
            text: ["Informal: «Ciao, sono io», «Ti richiamo dopo», «Ci sentiamo!» (hablamos).", "Formal: «Buongiorno, sono…», «Potrei parlare con…?», «La richiamo più tardi», «Mi scusi il disturbo»."],
            examples: [{ it: "Ci sentiamo domani, va bene?", es: "Hablamos mañana, ¿vale?" }, { it: "Mi scusi il disturbo, chiamo per l'annuncio.", es: "Perdone la molestia, llamo por el anuncio." }],
          },
          k.rispondi(["Quante volte al giorno usi il telefono?", "Chi hai chiamato ieri? Perché?", "Preferisci chiamare o scrivere?", "Che cosa ti piace e che cosa non ti piace dei gruppi di WhatsApp?", "Quando hai scritto l'ultima mail formale? A chi?", "Che cosa fai quando il telefono è scarico?"]),
          { kind: "speak", title: "Lascia un messaggio", hint: "Deja un mensaje en el contestador para cada situación: saluda, di quién eres, para qué llamas y cómo te pueden localizar.", items: ["Al tuo amico: vuoi andare al cinema stasera.", "Al dentista: devi spostare l'appuntamento.", "A un albergo: hai dimenticato il caricabatterie in camera.", "Alla professoressa: ieri non sei venuto o venuta a lezione."] },
          {
            kind: "roleplay", title: "Il numero sbagliato", hint: "Llamas a un amigo pero contesta un desconocido. Después llamas al número correcto. La IA hace las dos personas.",
            steps: ["Saluda y pregunta por tu amigo.", "Te has equivocado: discúlpate.", "Llama de nuevo: tu amigo contesta.", "Cuéntale lo que ha pasado.", "Quedad para hacer algo y despedíos con «Ci sentiamo»."],
          },
          {
            kind: "roleplay", title: "Chiamata all'ufficio", hint: "Llamas a una empresa para hablar con la responsable de personal sobre tu solicitud de trabajo. La IA hace de recepcionista. Usa «Lei».",
            steps: ["Saluda formalmente y preséntate.", "Pide hablar con la señora Galli.", "No está: deja un mensaje explicando por qué llamas.", "Deletrea tu apellido y dicta tu número.", "Pregunta cuándo puedes volver a llamar y despídete."],
          },
          { kind: "speak", title: "Ripasso A1", hint: "Habla durante un minuto y medio: preséntate, habla de tu familia, de tu casa, de tu día normal y de lo que hiciste el fin de semana. Es todo A1 en una sola respuesta.", items: ["Mi chiamo…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["¿Diga? ¿Quién es?", "Ahora no puede ponerse: está en una reunión.", "¿Quiere dejar un mensaje?", "Te llamé ayer, pero no contestaste.", "Te mando el archivo adjunto.", "Estimada profesora, le escribo porque…", "Mi móvil está sin batería.", "Hablamos mañana."]),
          { kind: "write", title: "Due messaggi", hint: "Escribe dos textos: un correo formal a una academia para pedir información sobre un curso (6–8 frases, con «Gentile…» y «Cordiali saluti»), y un WhatsApp a un amigo contándole que te has apuntado (3–4 frases).", rows: 8, items: ["Gentile segreteria,", "Messaggio all'amico:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: numeri e nomi", ["tre quattro otto, venti, cinquantadue, uno uno", "Bianchi: B come Bologna", "chiamata persa", "segreteria telefonica", "Cordiali saluti", "Gentile signora"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Pronto, chi parla?", "Ti richiamo dopo.", "Non mi ha risposto.", "Vorrei lasciare un messaggio.", "Ci sentiamo domani!"]),
          k.media([
            { type: "Película", title: "Perfetti sconosciuti (2016)", where: "Busca dónde verla en JustWatch", why: "Siete amigos en una cena deciden leer en voz alta todos los mensajes y llamadas que reciben. Muchísimo italiano de teléfono." },
            { type: "Canción", title: "Telefonami tra vent'anni, Lucio Dalla", where: "Spotify, YouTube", why: "Una canción de 1984 sobre una llamada que llegará dentro de veinte años." },
            { type: "YouTube", title: "Learn Italian with Lucrezia", where: "YouTube", why: "Busca su vídeo sobre cómo hablar por teléfono en italiano: fórmulas formales e informales." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué pasa en la película con los teléfonos: quién llama, qué mensajes llegan y qué problemas causan.", items: ["Durante la cena…"] },
        ],
      },
    ],

    exam: k.exam(16, {
      parole: ["richiamare", "la chiamata persa", "riattaccare", "inoltrare", "l'allegato", "occupato", "scarico", "la segreteria telefonica", "Cordiali saluti", "Ci sentiamo!"],
      contrario: ["¿Diga?", "¿De parte de quién?", "Se ha equivocado de número.", "el cargador", "contestar", "Estimado señor"],
      verbiHint: "Completa: presente con io, presente con loro y passato prossimo con io.",
      verbiCols: ["presente (io)", "presente (loro)", "passato (io)"],
      verbi: [["venire", "", "", ""], ["dire", "", "", ""], ["scegliere", "", "", ""], ["uscire", "", "", ""]],
      completaHint: "Completa con el verbo en el tiempo correcto, un artículo, una preposición o piace / piacciono.",
      completa: ["Ieri ti ___ ma non hai risposto. (chiamare)", "Di solito io ___ i messaggi la sera. (leggere)", "Le mie amiche ___ alla festa sabato scorso. (venire)", "Ho lasciato le chiavi ___ macchina.", "___ studente di Marta è spagnolo.", "A mio padre non ___ i messaggi vocali.", "Scusi, ___ parlare con la direttrice? (io, potere)", "Il telefono è ___ borsa, ___ tavolo."],
      trasformaHint: "Pasa las tres primeras al passato prossimo y las tres últimas a la forma formal (Lei).",
      trasforma: ["Marco mi chiama alle otto.", "Le ragazze escono insieme.", "Rimaniamo a casa.", "Ciao, come stai?", "Puoi ripetere il tuo numero?", "Ti richiamo più tardi."],
      leggi: {
        text: [
          "Oggetto: Richiesta di informazioni corso A2. Gentile segreteria, mi chiamo Pablo Gil e sono spagnolo. Abito a Bologna da sei mesi e ho finito il corso A1 a dicembre.",
          "Vorrei sapere quando comincia il corso A2, quanto costa e se ci sono lezioni la sera, perché lavoro fino alle sei.",
          "Posso venire in segreteria lunedì o martedì mattina. Resto in attesa di una vostra risposta. Cordiali saluti, Pablo Gil.",
        ],
        questions: ["Da quanto tempo abita a Bologna Pablo?", "Che cosa vuole sapere?", "Perché chiede lezioni la sera?", "Quando può andare in segreteria?"],
      },
      ascolta: {
        script: [
          { who: "Luca", text: "Pronto, Sara? Sono Luca. Scusa, ti ho chiamato tre volte!" },
          { who: "Sara", text: "Scusa, il telefono era scarico. Che succede?" },
          { who: "Luca", text: "Il concerto di stasera è stato spostato a domani, alle nove." },
          { who: "Sara", text: "Ah, peccato! Domani lavoro fino alle otto e mezza." },
          { who: "Luca", text: "Non c'è problema, ti aspetto davanti al teatro alle nove meno cinque." },
          { who: "Sara", text: "Perfetto, ci sentiamo domani!" },
        ],
        questions: ["Perché Sara non ha risposto?", "Che cosa è cambiato per il concerto?", "Fino a che ora lavora Sara domani?", "Dove e quando si vedono?"],
      },
      parla: ["Presentati in un minuto: chi sei, dove vivi, che lavoro fai, che cosa ti piace.", "Racconta il tuo ultimo fine settimana.", "Lascia un messaggio alla segreteria di un albergo per cambiare la prenotazione.", "Detta il tuo nome lettera per lettera e il tuo numero di telefono."],
      roleHint: "Usa «Lei».",
      role: ["Llamas a un médico para pedir cita: preséntate y explica qué quieres.", "No hay cita esta semana: propón otro día.", "Confirma día y hora, deletrea tu apellido y despídete."],
      dettato: ["Pronto, chi parla?", "Mi può richiamare?", "Ho lasciato un messaggio.", "Gentile professoressa", "Non mi piacciono i vocali.", "Ci sentiamo dopo!"],
      traduci: ["¿Puedo hablar con el señor Neri?", "Ayer te escribí un mensaje.", "Lo siento, está ocupado.", "¿Me puede dar su número de teléfono?", "Mis padres volvieron el domingo.", "No me gustan las llamadas largas."],
      scrivi: { hint: "Escribe un correo formal (50–60 palabras) a un hotel: llegas un día más tarde y quieres cambiar la reserva.", start: "Gentile Hotel Miramare," },
    }),
  };
})();
