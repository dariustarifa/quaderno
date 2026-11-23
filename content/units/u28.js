// Unità 28 · Al telefono (reclami) — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[28] = {
    n: 28,
    level: "A2",
    title: "Al telefono",
    goal: "Llamar a un servicio de atención al cliente, explicar un problema, reclamar con educación y conseguir una solución.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a reclamar: llamar a la compañía de internet, a una tienda online o a la luz, entender los menús automáticos, explicar el problema y pedir un reembolso o una solución.",
              "Gramática: repaso de todos los pronombres (lo, gli, glielo, ci, ne) con la forma de usted: «La richiamo», «Le mando», «Glielo spedisco».",
              "Es una unidad práctica: lo que aprendas aquí lo usarás en cuanto vivas en Italia.",
            ],
          },
          {
            kind: "intro", title: "La richiamiamo noi", hint: "Un adelanto: los pronombres de usted",
            text: ["Con Lei (usted), el pronombre directo es «La» y el indirecto «Le»: «La richiamo» (le vuelvo a llamar), «Le mando una mail» (le mando un correo).", "Combinado: «Glielo mando» (se lo mando a usted)."],
            examples: [
              { it: "La ringrazio per la pazienza.", es: "Le agradezco la paciencia." },
              { it: "Le mandiamo un tecnico domani.", es: "Le mandamos un técnico mañana." },
              { it: "Il codice? Glielo leggo subito.", es: "¿El código? Se lo leo ahora mismo." },
            ],
          },
          { kind: "speak", title: "Un problema", hint: "Antes de empezar: ¿has tenido que reclamar algo alguna vez? ¿Qué pasó?", items: ["Una volta…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il servizio clienti", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il servizio clienti", "l'operatore", "il reclamo", "reclamare / lamentarsi", "il guasto",
              "la bolletta", "l'addebito", "il rimborso", "la ricevuta", "il codice cliente",
              "disdire (un contratto)", "il recesso", "la garanzia", "il pacco", "la consegna",
              "il corriere", "prema 1", "resti in linea", "la pratica", "risolvere",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Formule per reclamare", hint: "Escribe en italiano.",
            items: ["Llamo porque…", "No funciona.", "Me han cobrado dos veces.", "Quisiera hablar con un responsable.", "Es la tercera vez que llamo.", "No estoy satisfecho.", "Exijo una solución.", "¿Me puede dar un número de incidencia?", "¿En cuánto tiempo?", "Quisiera darme de baja.", "el paquete no ha llegado", "está roto", "devolver un producto", "la queja formal", "Gracias por su ayuda."],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: il rimborso → Vorrei chiedere il rimborso del biglietto.", items: ["il guasto", "la bolletta", "il rimborso", "La richiamo", "Le mando", "glielo", "ne", "disdire"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "I messaggi automatici", hint: "Entender los menús automáticos",
            text: [
              "Los menús automáticos siempre usan las mismas fórmulas: «Benvenuto nel servizio clienti di…», «Per informazioni sulla bolletta, prema 1», «Per parlare con un operatore, prema 9», «Resti in linea per non perdere la priorità».",
              "Los números del código se dictan cifra a cifra: «zero tre sette due…». Aprende a decir el tuyo rápido.",
              "Cuando te enfadas, baja la velocidad y sube la cortesía: «Capisco, però…» funciona mejor que gritar.",
            ],
          },
          { kind: "shadow", title: "Il menù automatico", hint: "Escucha y repite como una grabación.", items: ["Benvenuto nel servizio clienti.", "Per informazioni sulla bolletta, prema uno.", "Per segnalare un guasto, prema due.", "Per parlare con un operatore, prema nove.", "Resti in linea: il primo operatore libero risponderà al più presto."] },
          { kind: "shadow", title: "Reclamare con calma", hint: "Repite con tono firme pero educado.", items: ["Buongiorno, chiamo perché internet non funziona da tre giorni.", "È la terza volta che chiamo.", "Capisco, però ho bisogno di una soluzione.", "Mi può dare il numero della pratica?", "La ringrazio, è stato molto gentile."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Tutti i pronomi con il Lei", hint: "Los pronombres en formal",
            text: [
              "Directo de usted: La (para hombre y mujer): «La aspetto», «La ringrazio», «La richiamo».",
              "Indirecto de usted: Le: «Le spiego», «Le mando», «Le dispiace?».",
              "Combinado: Glielo / Gliela / Glieli / Gliele: «Il modulo? Glielo mando».",
              "Con el imperativo formal, siempre delante: «Mi dica», «Me lo mandi», «Non si preoccupi».",
            ],
            table: { head: ["", "tu", "Lei"], rows: [["directo", "ti chiamo", "La chiamo"], ["indirecto", "ti scrivo", "Le scrivo"], ["combinado", "te lo mando", "glielo mando"], ["imperativo", "dimmi", "mi dica"]] },
          },
          k.table("Dal tu al Lei", [
            ["ti richiamo", "La richiamo", ""],
            ["ti mando la mail", "", "Le ho mandato la mail"],
            ["te lo spiego", "", ""],
            ["dimmi il codice", "", ""],
            ["non preoccuparti", "", ""],
            ["ne vuoi due?", "", ""],
          ], "Pasa cada expresión al «Lei» en presente y después en passato prossimo (o en imperativo formal si es imperativo).", ["Lei (presente)", "Lei (passato / imperativo)"]),
          {
            kind: "fill", title: "La, Le, glielo", hint: "Completa con el pronombre de usted correcto.",
            items: [
              "Signora, ___ ringrazio per la telefonata.", "Il numero di pratica? ___ dico subito. (a Lei)", "Un attimo, ___ passo il responsabile.", "Le dispiace se ___ richiamo domani?", "___ mandiamo il rimborso entro dieci giorni.", "Il modulo? ___ invio per email oggi.", "Mi ___ il suo codice cliente, per favore. (Lei, dire)", "Non ___ preoccupi: risolviamo tutto.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Ripasso: lo, gli, glielo, ci, ne", hint: "Repaso de todos los pronombres",
            text: [
              "Directo (¿qué?): lo, la, li, le. Indirecto (¿a quién?): gli, le. Combinados: me lo, te la, glielo. Lugar o «a eso»: ci. Cantidad o «de eso»: ne.",
              "Truco para elegir: ¿la frase tiene «a + persona»? → gli / le. ¿Hay una cantidad? → ne. ¿Un lugar? → ci.",
            ],
            table: { head: ["frase", "con pronombre"], rows: [["Ho pagato la bolletta.", "L'ho pagata."], ["Ho scritto all'operatore.", "Gli ho scritto."], ["Ho mandato il modulo alla banca.", "Gliel'ho mandato."], ["Ho ricevuto due pacchi.", "Ne ho ricevuti due."]] },
          },
          {
            kind: "fill", title: "Quale pronome?", hint: "Completa con el pronombre correcto (directo, indirecto, combinado, ci o ne).",
            items: ["La bolletta? ___ ho già pagata.", "Hai chiamato il servizio clienti? — Sì, ___ ho chiamato due volte.", "Hai scritto al tecnico? — No, non ___ ho ancora scritto.", "Il codice, lo dai a me? — Sì, ___ do subito.", "Quanti pacchi sono arrivati? — ___ è arrivato solo uno.", "Sei andata all'ufficio postale? — Sì, ___ sono andata stamattina.", "La ricevuta? ___ ho mandata alla signora ieri.", "Hai parlato del problema con tua madre? — Sì, ___ ho parlato."],
          },
          {
            kind: "intro", title: "Lamentarsi con educazione", hint: "Reclamar con educación",
            text: ["Estructura de una buena reclamación: 1) quién eres y tu número de cliente; 2) qué ha pasado y desde cuándo; 3) qué has hecho ya; 4) qué pides; 5) agradecimiento.", "Fórmulas: «Purtroppo…», «Nonostante le mie richieste…» (a pesar de mis peticiones), «Le chiedo di…», «Resto in attesa di una risposta»."],
          },
          k.domanda(["Il mio codice cliente è 4078 21.", "Internet non funziona da lunedì.", "Gliel'ho già mandata ieri.", "Ne ho ricevuti solo due.", "Ci sono andato stamattina.", "Il rimborso arriverà entro dieci giorni."], "Escribe la pregunta del operador para cada respuesta. Ejemplo: Da lunedì. → Da quando non funziona?"),
          k.negativa(["L'ho pagata.", "Gliel'ho detto.", "Ne abbiamo ricevuti tre.", "La richiamo domani.", "Ci vado oggi."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Internet non funziona", "Un cliente llama a su compañía de internet.", [
            { who: "Operatrice", text: "Servizio clienti, sono Valentina. Come posso aiutarLa?" },
            { who: "Cliente", text: "Buongiorno. Internet non funziona da tre giorni e lavoro da casa. È la seconda volta che chiamo." },
            { who: "Operatrice", text: "Mi dispiace. Mi dice il suo codice cliente?" },
            { who: "Cliente", text: "Sì: sette due nove, zero quattro, uno uno." },
            { who: "Operatrice", text: "Grazie. Vedo che c'è un guasto nella sua zona. Le mandiamo un tecnico giovedì mattina." },
            { who: "Cliente", text: "Giovedì? È troppo tardi! E questi giorni senza internet li devo pagare?" },
            { who: "Operatrice", text: "No, Le facciamo uno sconto sulla prossima bolletta. Le mando adesso il numero della pratica per SMS." },
            { who: "Cliente", text: "Va bene. La ringrazio." },
          ], ["Da quanto tempo non funziona internet? Perché è un problema?", "Qual è il codice cliente? Scrivilo in cifre.", "Che cosa ha scoperto l'operatrice?", "Quando arriva il tecnico? Il cliente è contento?", "Che cosa gli offrono per i giorni senza internet?"]),
          k.listen("Il pacco sparito", "Una chica llama a una tienda online por un pedido.", [
            { who: "Chiara", text: "Buongiorno, ho ordinato un paio di scarpe dieci giorni fa e non sono ancora arrivate." },
            { who: "Operatore", text: "Mi dà il numero dell'ordine?" },
            { who: "Chiara", text: "Certo, è l'ordine B come Bologna, quattro cinque otto due." },
            { who: "Operatore", text: "Risulta consegnato venerdì… al suo vicino, il signor Galli." },
            { who: "Chiara", text: "Ma io non conosco nessun signor Galli! Nel mio palazzo non c'è." },
            { who: "Operatore", text: "Allora apro una pratica con il corriere. Se entro cinque giorni non lo troviamo, Le rimborsiamo tutto o Gliele rispediamo." },
          ], ["Che cosa ha ordinato Chiara? Quando?", "Qual è il numero dell'ordine?", "A chi risulta consegnato il pacco?", "Perché è strano?", "Che cosa succederà se non trovano il pacco?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Come reclamare in Italia", [
            "In Italia, per reclamare con un'azienda, il primo passo è il servizio clienti, al telefono o in chat. Ma spesso l'attesa è lunga e bisogna avere pazienza.",
            "Se il problema non si risolve, è meglio scrivere: un reclamo scritto lascia una prova. Molti usano ancora la «raccomandata con ricevuta di ritorno», una lettera che la posta consegna con firma.",
            "Oggi esiste anche la PEC, la «posta elettronica certificata»: è una mail con lo stesso valore legale di una raccomandata. Aziende e uffici pubblici la usano moltissimo.",
            "Per gli acquisti online, la legge dà quattordici giorni per cambiare idea e restituire il prodotto: è il «diritto di recesso». E ogni prodotto ha almeno due anni di garanzia.",
            "Se l'azienda non risponde, ci si può rivolgere alle associazioni dei consumatori, che aiutano a trovare una soluzione senza andare dal giudice.",
          ], ["Qual è il primo passo per reclamare?", "Perché è meglio scrivere un reclamo?", "Che cos'è una raccomandata con ricevuta di ritorno?", "Che cos'è la PEC?", "Che cos'è il diritto di recesso? Quanti giorni dura?", "A chi ci si può rivolgere se l'azienda non risponde?"]),
          k.spagna("¿Cómo se reclama en España? ¿Has tenido problemas con alguna empresa? ¿Cómo se resolvió?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Mantenere la calma", hint: "Frases para no perder los nervios",
            text: ["Para insistir con educación: «Capisco, però…», «Mi rendo conto, ma…» (me doy cuenta, pero…), «Le chiedo cortesemente di…», «Potrei parlare con un responsabile?».", "Para cerrar: «Mi può confermare per email?», «Quindi, se ho capito bene…», «La ringrazio per l'aiuto»."],
          },
          k.rispondi(["Hai mai fatto un reclamo? Com'è andato?", "Che cosa ti fa arrabbiare di più dei servizi clienti?", "Preferisci reclamare al telefono, in chat o per email? Perché?", "Hai mai restituito un prodotto? Perché?", "Che cosa faresti se ti arrivasse una bolletta sbagliata?", "Qual è stato il miglior servizio clienti che hai trovato?"]),
          { kind: "speak", title: "Rispondi con il pronome", hint: "Responde con el pronombre adecuado (también de usted). Ejemplo: Ha pagato la bolletta? → Sì, l'ho pagata ieri.", items: ["Ha ricevuto la nostra email?", "Mi può dare il suo codice?", "Quanti pacchi ha ricevuto?", "È andato all'ufficio postale?", "Ha detto il problema al tecnico?", "Vuole che La richiamiamo?"] },
          {
            kind: "roleplay", title: "La bolletta sbagliata", hint: "Te ha llegado una factura de la luz de 400 euros, el triple de lo normal. Llamas al servicio de atención al cliente. La IA hace de operador y pone pegas. Usa «Lei».",
            steps: ["Preséntate y da tu código de cliente.", "Explica el problema con calma.", "El operador dice que es correcta: insiste con argumentos.", "Pide hablar con un responsable o un número de incidencia.", "Cierra con un resumen de lo que habéis acordado."],
          },
          {
            kind: "roleplay", title: "Disdire la palestra", hint: "Quieres darte de baja del gimnasio, pero el recepcionista intenta convencerte de que te quedes. La IA hace del recepcionista. Usa «Lei».",
            steps: ["Di que quieres darte de baja y por qué.", "Rechaza la oferta que te hace.", "Pregunta qué documentos necesitas.", "Pregunta si tienes que pagar algo más.", "Pide confirmación por escrito."],
          },
          { kind: "speak", title: "Il mio peggior servizio clienti", hint: "Cuenta durante un minuto y medio la peor experiencia que hayas tenido con una empresa: qué pasó, qué hiciste y cómo terminó.", items: ["Una volta ho avuto un problema con…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Llamo porque internet no funciona desde el lunes.", "Es la tercera vez que llamo.", "Le mando el recibo por correo.", "¿Se lo puedo mandar mañana?", "Me han cobrado dos veces la misma factura.", "Quisiera darme de baja.", "Le agradezco su ayuda.", "Solo me han llegado dos paquetes de tres."]),
          { kind: "write", title: "Il reclamo scritto", hint: "Escribe una reclamación formal (10–12 frases) a una tienda online: el producto llegó roto, ya llamaste dos veces y nadie te ha respondido. Sigue la estructura de la página 5.", rows: 12, items: ["Oggetto: Reclamo ordine n. …", "Gentile servizio clienti,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: codici", ["codice cliente tre zero sette uno", "ordine numero quattro cinque due", "prema nove", "la bolletta di marzo", "il numero della pratica", "il diritto di recesso"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["La richiamo domani.", "Glielo mando subito.", "Non si preoccupi.", "Ne ho ricevuto solo uno.", "È la terza volta che chiamo."]),
          k.media([
            { type: "Película", title: "Fantozzi (1975)", where: "Busca dónde verla en JustWatch", why: "El oficinista más desgraciado del cine italiano contra jefes, burocracia y mala suerte. Una sátira que todos los italianos conocen." },
            { type: "Serie", title: "Boris", where: "Disney+", why: "Comedia de culto sobre el rodaje caótico de una telenovela italiana. Ritmo rápido, pero muy divertida." },
            { type: "YouTube", title: "Altroconsumo", where: "YouTube, web", why: "La asociación de consumidores más conocida de Italia: vídeos cortos sobre derechos, devoluciones y reclamaciones." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta un momento en el que un personaje tiene un problema con una oficina o una empresa. ¿Qué le aconsejarías?", items: ["Il protagonista… Al posto suo, io…"] },
        ],
      },
    ],

    exam: k.exam(28, {
      parole: ["il guasto", "la bolletta", "l'addebito", "il rimborso", "disdire", "il recesso", "il corriere", "resti in linea", "la pratica", "la raccomandata"],
      contrario: ["la queja", "devolver un producto", "darse de baja", "el paquete", "la garantía", "Le agradezco."],
      verbiHint: "Pasa cada expresión al «Lei» (presente) y después al passato prossimo o al imperativo formal.",
      verbiCols: ["Lei (presente)", "Lei (passato / imperativo)"],
      verbi: [["ti aspetto", "", ""], ["ti scrivo", "", ""], ["te la spedisco", "", ""], ["dimmelo", "", ""]],
      completaHint: "Completa con el pronombre correcto (también de usted).",
      completa: ["Signora, ___ ringrazio per la pazienza.", "Il codice? ___ dico subito. (a Lei)", "La bolletta? ___ ho pagata ieri.", "Hai scritto alla banca? — Sì, ___ ho scritto.", "Quanti pacchi sono arrivati? — ___ sono arrivati due.", "Sei andato in posta? — Sì, ___ sono andato.", "Non ___ preoccupi, signor Rossi.", "Il rimborso? ___ mandiamo entro venerdì. (a Lei)"],
      trasformaHint: "Sustituye las partes repetidas por pronombres.",
      trasforma: ["Ho mandato il modulo alla signora.", "Ho chiamato il tecnico due volte.", "Abbiamo ricevuto tre email.", "Ho parlato del problema con l'operatore.", "Restituisco le scarpe al negozio.", "Sono andata all'ufficio reclami."],
      leggi: {
        text: [
          "Oggetto: reclamo bolletta n. 4471. Gentile servizio clienti, nella bolletta di febbraio mi avete addebitato 380 euro, mentre di solito pago circa 90 euro.",
          "Vi ho chiamato due volte, il 3 e il 10 marzo, ma l'operatore mi ha detto solo di aspettare. Vi chiedo di controllare la lettura del contatore e di correggere l'importo.",
          "Resto in attesa di una risposta scritta entro quindici giorni. In caso contrario, mi rivolgerò a un'associazione dei consumatori. Cordiali saluti, Elena Duarte.",
        ],
        questions: ["Qual è il problema della bolletta?", "Che cosa ha fatto Elena prima di scrivere?", "Che cosa chiede all'azienda?", "Che cosa farà se non riceve risposta?"],
      },
      ascolta: {
        script: [
          { who: "Operatore", text: "Buongiorno, mi dica." },
          { who: "Cliente", text: "Ho comprato un frigorifero da voi un mese fa e non raffredda." },
          { who: "Operatore", text: "Mi dispiace. È in garanzia, quindi Le mandiamo un tecnico. Va bene martedì?" },
          { who: "Cliente", text: "Martedì lavoro. Potrebbe venire sabato?" },
          { who: "Operatore", text: "Sabato mattina sì. Le mando la conferma per SMS." },
        ],
        questions: ["Qual è il problema?", "Perché il cliente non deve pagare?", "Perché martedì non va bene?", "Quando viene il tecnico? Come riceve la conferma?"],
      },
      parla: ["Spiega al telefono che il tuo pacco non è arrivato.", "Reclama per una bolletta sbagliata con calma e fermezza.", "Racconta un'esperienza con un servizio clienti.", "Rispondi con i pronomi: Ha pagato la bolletta? Ha scritto al direttore? Quanti figli ha?"],
      roleHint: "Usa «Lei».",
      role: ["Llamas porque tu tren se canceló y quieres el reembolso.", "El operador dice que no es posible: insiste con educación.", "Consigue una solución y pide confirmación por email."],
      dettato: ["Glielo mando oggi.", "La ringrazio.", "Ne abbiamo ricevuti due.", "Resti in linea.", "il diritto di recesso", "Mi dica il codice."],
      traduci: ["Le llamo porque el paquete no ha llegado.", "¿Se lo puedo enviar por correo electrónico?", "Le agradezco mucho su ayuda.", "Quisiera hablar con un responsable.", "Ya la he pagado.", "No se preocupe, le volvemos a llamar."],
      scrivi: { hint: "Escribe un correo de reclamación (60–80 palabras) a una aerolínea: perdieron tu maleta y no te han respondido.", start: "Oggetto: bagaglio smarrito" },
    }),
  };
})();
