// Unità 31 · Tecnologia — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[31] = {
    n: 31,
    level: "A2",
    title: "Tecnologia",
    goal: "Hablar de móviles, internet y redes sociales, resolver problemas técnicos y usar expresiones muy coloquiales.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de tecnología: el móvil, las apps, las redes, los problemas técnicos y cómo la tecnología ha cambiado nuestra vida.",
              "Gramática: los verbos pronominales, unos verbos con «ci», «ne» o «la» pegados que cambian de significado: farcela (lograrlo), andarsene (irse), smetterla (dejarlo ya), sentirsela (atreverse).",
              "Son muy coloquiales y los oirás todo el rato en conversaciones reales.",
            ],
          },
          {
            kind: "intro", title: "Ce la faccio! Me ne vado", hint: "Un adelanto: verbos pronominales",
            text: ["«Farcela» = conseguirlo: «Ce la fai?» (¿puedes?, ¿llegas?), «Non ce la faccio più» (no puedo más).", "«Andarsene» = irse de un sitio: «Me ne vado» (me voy)."],
            examples: [
              { it: "Il telefono è scarico: non ce la faccio a chiamarti.", es: "El móvil no tiene batería: no puedo llamarte." },
              { it: "C'è troppo rumore, me ne vado.", es: "Hay demasiado ruido, me voy." },
              { it: "Smettila di guardare il telefono!", es: "¡Deja ya de mirar el móvil!" },
            ],
          },
          { kind: "speak", title: "Tu e il telefono", hint: "Antes de empezar: ¿cuántas horas usas el móvil al día? ¿Para qué?", items: ["Uso il telefono…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Tecnologia", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "lo schermo", "il tasto", "scaricare", "caricare", "l'aggiornamento",
              "la password", "accedere", "il profilo", "condividere", "il like / mi piace",
              "i follower", "la storia (sui social)", "la chiavetta", "il portatile", "la stampante",
              "bloccarsi", "riavviare", "il virus", "la rete wifi", "la privacy",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Problemi tecnici", hint: "Escribe en italiano.",
            items: ["el móvil se ha colgado", "no hay cobertura", "la batería dura poco", "he olvidado la contraseña", "la pantalla está rota", "apagar y encender", "guardar el archivo", "borrar", "hacer una copia de seguridad", "la nube", "enviar un archivo", "actualizar la app", "el ordenador va lento", "el cargador", "el ratón"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: ce la faccio → Non ce la faccio a finire il lavoro entro stasera.", items: ["ce la faccio", "me ne vado", "smettila", "te la senti?", "scaricare", "condividere", "si è bloccato", "l'aggiornamento"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "L'inglese all'italiana", hint: "Palabras inglesas con acento italiano",
            text: [
              "El italiano usa muchas palabras inglesas de tecnología, pero las pronuncia a su manera: «computer» (com-più-ter), «file» (fàil), «password» (pàs-uord), «mouse» (màus), «wifi» (uài-fai).",
              "Muchas son masculinas y no cambian en plural: il file, i file; il computer, i computer.",
              "Y se inventan verbos italianos: «postare» (publicar), «chattare», «googlare», «scrollare», «taggare».",
            ],
            table: { head: ["", "suena"], rows: [["computer", "com-più-ter"], ["password", "pàs-uord"], ["wifi", "uài-fai"], ["postare / taggare", "pos-tà-re / tag-gà-re"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha y repite con acento italiano.", items: ["il computer, il file, il mouse", "la password, il wifi, il link", "postare, chattare, scrollare, taggare", "ce la faccio, me ne vado, smettila"] },
          { kind: "shadow", title: "Frasi", hint: "Repite con la misma melodía.", items: ["Mi si è bloccato il computer!", "Hai provato a riavviarlo?", "Non ce la faccio più con questa connessione.", "Me ne vado, qui non c'è campo.", "Smettila di postare foto del gatto!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I verbi pronominali", hint: "Verbos con pronombres pegados",
            text: [
              "Son verbos que llevan pegados uno o dos pronombres que ya no se refieren a nada concreto y cambian el significado del verbo.",
              "farcela (conseguirlo, poder): ce la faccio, ce la fai, ce la fa, ce la facciamo, ce la fate, ce la fanno. Pasado: ce l'ho fatta.",
              "andarsene (irse): me ne vado, te ne vai, se ne va, ce ne andiamo, ve ne andate, se ne vanno. Pasado: me ne sono andato/a.",
              "smetterla (dejar de hacer algo molesto): smettila!, smettetela!. sentirsela (sentirse capaz, atreverse): «Non me la sento di guidare».",
            ],
            table: { head: ["", "farcela", "andarsene"], rows: [["io", "ce la faccio", "me ne vado"], ["tu", "ce la fai", "te ne vai"], ["lui / lei", "ce la fa", "se ne va"], ["noi", "ce la facciamo", "ce ne andiamo"], ["voi / loro", "ce la fate / fanno", "ve ne andate / se ne vanno"]] },
          },
          k.table("Presente e passato", [
            ["farcela", "ce la faccio", "ce l'ho fatta"],
            ["andarsene", "", "me ne sono andato/a"],
            ["sentirsela", "", ""],
            ["smetterla", "", ""],
          ], "Completa el presente y el passato prossimo con io.", ["presente (io)", "passato (io)"]),
          {
            kind: "fill", title: "Ce la fai?", hint: "Completa con farcela, andarsene, smetterla o sentirsela en la forma correcta.",
            items: [
              "È tardi: io ___. Ci vediamo domani! (andarsene)", "Non ___ a scaricare il file: la connessione è lentissima. (farcela, io)", "Bambini, ___ di giocare con il tablet! (smetterla)", "Abbiamo finito il progetto in tempo: ___! (farcela, passato, noi)", "Non ___ di parlare in pubblico: sono troppo timido. (sentirsela, io)", "La festa era noiosa e i miei amici ___ presto. (andarsene, passato)", "Tranquilla, ___ a sistemare il computer? (farcela, tu)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Altri verbi pronominali utili", hint: "Más verbos de la conversación",
            text: [
              "«Prendersela» = enfadarse, ofenderse: «Non prendertela!» (¡no te lo tomes a mal!).",
              "«Cavarsela» = apañárselas: «Con l'italiano me la cavo» (me defiendo).",
              "«Fregarsene» = pasar de algo (muy coloquial): «Me ne frego» (me da igual). Úsalo solo con amigos.",
              "«Volerci» y «metterci» ya los conoces de la unidad 26.",
            ],
            examples: [
              { it: "Con la tecnologia me la cavo abbastanza bene.", es: "Con la tecnología me apaño bastante bien." },
              { it: "Non prendertela, era solo uno scherzo.", es: "No te lo tomes a mal, era solo una broma." },
            ],
          },
          {
            kind: "fill", title: "Quale verbo?", hint: "Completa con prendersela, cavarsela, farcela o andarsene en la forma correcta.",
            items: ["Con i computer mia nonna ___ benissimo. (presente)", "Ho dimenticato il suo compleanno e lui ___. (passato)", "Questo sito è pieno di pubblicità: ___ subito. (io, andarsene)", "Non ___ a ricordare tutte le password. (io, farcela)", "Sei arrabbiato? Dai, non ___!", "Ieri Marco ___ con me perché non gli ho risposto. (prendersela, passato)"],
          },
          k.domanda(["Ce l'ho fatta, finalmente!", "Me ne vado alle sei.", "Me la cavo abbastanza bene.", "Sì, se l'è presa molto.", "No, non me la sento.", "Si è bloccato di nuovo."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Ce l'ho fatta. → Sei riuscito a finire?"),
          k.negativa(["Ce la faccio.", "Me ne vado.", "Se l'è presa.", "Me la sento.", "Ce l'abbiamo fatta."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il nonno e lo smartphone", "Un chico ayuda a su abuelo con el móvil nuevo.", [
            { who: "Nonno", text: "Luca, aiutami tu, io con questo telefono non ce la faccio!" },
            { who: "Luca", text: "Tranquillo, nonno. Che cosa vuoi fare?" },
            { who: "Nonno", text: "Voglio mandare una foto a tua zia in Australia. Ma lo schermo si blocca sempre." },
            { who: "Luca", text: "Hai troppe app aperte. Ecco, le chiudo. Adesso apri WhatsApp, scegli la foto e premi questo tasto." },
            { who: "Nonno", text: "Ce l'ho fatta! E come faccio una videochiamata?" },
            { who: "Luca", text: "Premi qui, sull'icona della videocamera. Vedi? Te la cavi benissimo!" },
            { who: "Nonno", text: "Altro che! Tra un mese apro un profilo su Instagram." },
          ], ["Che problema ha il nonno?", "A chi vuole mandare la foto?", "Perché il telefono si blocca?", "Che cosa vuole fare dopo?", "Che cosa vuole fare tra un mese?"]),
          k.listen("Disintossicazione digitale", "Una chica cuenta su experiencia de una semana sin móvil.", [
            { who: "Elisa", text: "Il mese scorso ho fatto un esperimento: una settimana senza smartphone." },
            { who: "Elisa", text: "I primi due giorni sono stati terribili. Cercavo il telefono in tasca ogni cinque minuti e non me la sentivo di uscire senza." },
            { who: "Elisa", text: "Poi le cose sono migliorate: ho letto due libri, ho dormito meglio e ho parlato di più con i miei coinquilini." },
            { who: "Elisa", text: "Il problema? Il lavoro e gli amici: alcuni se la sono presa perché non rispondevo." },
            { who: "Elisa", text: "Adesso il telefono lo uso ancora, ma la sera lo spengo alle dieci. E ce la faccio!" },
          ], ["Che esperimento ha fatto Elisa?", "Com'erano i primi due giorni?", "Che cosa è migliorato dopo?", "Qual è stato il problema?", "Che cosa fa adesso la sera?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Inventori italiani", [
            "Molte tecnologie che usiamo ogni giorno hanno un pezzo di storia italiana. Antonio Meucci, emigrato a New York, ha costruito un telefono prima di Graham Bell, ma non aveva i soldi per il brevetto definitivo.",
            "Guglielmo Marconi, di Bologna, ha inventato il telegrafo senza fili e, nel 1901, ha mandato il primo messaggio radio attraverso l'Atlantico. Nel 1909 ha vinto il premio Nobel per la fisica.",
            "Nel 1965 l'azienda Olivetti, di Ivrea, ha presentato la Programma 101, considerata uno dei primi computer da scrivania della storia. Ne sono stati venduti circa quarantamila.",
            "Federico Faggin, nato a Vicenza, ha guidato negli Stati Uniti la progettazione del primo microprocessore commerciale, l'Intel 4004, nel 1971.",
            "Oggi l'Italia è forte in robotica, nel design industriale e nell'aerospazio. Ma molti giovani ingegneri, come Meucci e Faggin, se ne vanno all'estero per lavorare.",
          ], ["Che cosa ha costruito Antonio Meucci? Perché non è famoso come Bell?", "Che cosa ha fatto Marconi nel 1901?", "Che cos'era la Programma 101? Chi l'ha prodotta?", "Chi è Federico Faggin?", "In che settori è forte oggi l'Italia?", "Che cosa fanno molti giovani ingegneri?"]),
          k.spagna("¿Conoces algún inventor o empresa tecnológica española? ¿Cómo ha cambiado la tecnología la vida en España?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dare istruzioni tecniche", hint: "Explicar cómo se hace algo con el móvil",
            text: ["Pasos: «Apri l'app», «Vai su Impostazioni», «Premi / tocca il tasto…», «Scorri verso il basso» (desliza hacia abajo), «Inserisci la password», «Salva», «Riavvia».", "Para comprobar: «Ci sei?» (¿me sigues?), «Ce la fai?», «Ti si è aperto?»."],
          },
          k.rispondi(["Quante ore al giorno usi lo smartphone?", "Quali social usi? Che cosa ci pubblichi?", "Te la cavi bene con la tecnologia?", "Qual è l'ultima app che hai scaricato?", "Riusciresti a vivere una settimana senza telefono? Ce la faresti?", "La tecnologia ci rende più felici o meno? Perché?"]),
          { kind: "speak", title: "Spiega come si fa", hint: "Explica paso a paso, con el imperativo, cómo se hace cada cosa.", items: ["mandare una foto su WhatsApp", "cambiare la password", "fare una videochiamata", "scaricare un'app", "spegnere le notifiche"] },
          {
            kind: "roleplay", title: "L'assistenza tecnica", hint: "Llamas al servicio técnico porque tu portátil no se enciende. La IA hace del técnico y te da instrucciones. Usa «Lei».",
            steps: ["Explica el problema.", "Sigue las instrucciones del técnico y di qué pasa.", "Nada funciona: pregunta qué opciones tienes.", "Pregunta si está en garantía y cuánto tardarán.", "Cierra con un resumen."],
          },
          {
            kind: "roleplay", title: "La cena senza telefoni", hint: "Propones a un amigo una cena sin móviles. Él no está convencido. La IA hace del amigo. Es informal.",
            steps: ["Propón la idea y explica por qué.", "Él pone excusas: respóndele.", "Usa farcela y smetterla en la discusión.", "Llegad a un acuerdo con una regla concreta.", "Despedíos."],
          },
          { kind: "speak", title: "La mia vita digitale", hint: "Habla durante un minuto y medio de cómo usas la tecnología, qué te gusta y qué te molesta, y de un cambio que te gustaría hacer.", items: ["Per me la tecnologia…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["No puedo más con este ordenador.", "¡Lo hemos conseguido!", "Se fueron sin despedirse.", "¡Deja ya de mirar el móvil!", "Con el italiano me defiendo.", "No te lo tomes a mal.", "Se me ha colgado el móvil.", "He olvidado la contraseña otra vez."]),
          { kind: "write", title: "Pro e contro", hint: "Escribe un texto de opinión (12–14 frases): «¿Los niños deberían tener móvil antes de los 14 años?». Da argumentos a favor y en contra y termina con tu opinión.", rows: 14, items: ["Secondo me…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: tecnologia", ["l'aggiornamento", "la password", "condividere", "il portatile", "si è bloccato", "riavviare"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Non ce la faccio più.", "Me ne vado.", "Smettila!", "Ce l'abbiamo fatta!", "Non me la sento."]),
          k.media([
            { type: "Película", title: "Perfetti sconosciuti (2016)", where: "Busca dónde verla en JustWatch", why: "Si no la viste en la unidad 16, es obligatoria aquí: los móviles destapan todos los secretos de un grupo de amigos." },
            { type: "Película", title: "Lo chiamavano Jeeg Robot (2015)", where: "Busca dónde verla en JustWatch", why: "Superhéroe romano en la periferia de Roma. Cine de género italiano moderno, muy coloquial." },
            { type: "Podcast", title: "Il Post · Globo / Morning", where: "Spotify, app Il Post", why: "Busca un episodio sobre tecnología o redes sociales: el italiano de hoy." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué papel tienen los móviles o la tecnología en la película.", items: ["Nel film il telefono…"] },
        ],
      },
    ],

    exam: k.exam(31, {
      parole: ["scaricare", "condividere", "l'aggiornamento", "riavviare", "bloccarsi", "farcela", "andarsene", "smetterla", "cavarsela", "prendersela"],
      contrario: ["la contraseña", "la pantalla", "borrar", "no hay cobertura", "la nube", "el portátil"],
      verbiHint: "Completa el presente y el passato prossimo con io.",
      verbiCols: ["presente (io)", "passato (io)"],
      verbi: [["farcela", "", ""], ["andarsene", "", ""], ["cavarsela", "", ""], ["prendersela", "", ""]],
      completaHint: "Completa con el verbo pronominal en la forma correcta.",
      completa: ["Sono stanco morto: non ___ più! (farcela)", "È tardi, ___ a casa. (noi, andarsene)", "Bambini, ___ di urlare! (smetterla)", "Con l'inglese mio padre ___ abbastanza bene. (cavarsela)", "Finalmente ___: ho trovato lavoro! (farcela, passato)", "Lucia ___ perché non l'abbiamo invitata. (prendersela, passato)", "Ieri sera i miei amici ___ prima del dolce. (andarsene, passato)", "Non ___ di guidare di notte. (sentirsela, io)"],
      trasformaHint: "Sustituye la expresión por el verbo pronominal equivalente (farcela, andarsene, smetterla, cavarsela, prendersela).",
      trasforma: ["Riesco a finire.", "Vado via da qui.", "Basta con questo rumore! (a tu)", "Si è offeso.", "Mi arrangio con il computer.", "Siamo riusciti a prendere il treno."],
      leggi: {
        text: [
          "Una ricerca dice che gli italiani passano in media più di sei ore al giorno su internet, e quasi due sui social network.",
          "I più giovani usano soprattutto TikTok e Instagram; gli adulti preferiscono Facebook e WhatsApp, dove ci sono i famosi gruppi della famiglia.",
          "Molti genitori se la prendono con la tecnologia, ma ammettono che anche loro non ce la fanno a stare un giorno senza telefono.",
        ],
        questions: ["Quante ore passano in media gli italiani su internet?", "Quali social usano i giovani? E gli adulti?", "Che cosa pensano molti genitori?", "Che cosa ammettono?"],
      },
      ascolta: {
        script: [
          { who: "Sara", text: "Aiuto! Ho perso tutte le foto del viaggio!" },
          { who: "Davide", text: "Calma. Hai fatto il backup sul cloud?" },
          { who: "Sara", text: "Non lo so… come si controlla?" },
          { who: "Davide", text: "Vai su Impostazioni, poi tocca il tuo nome e cerca «Foto». Ecco: sono tutte lì!" },
          { who: "Sara", text: "Ce l'abbiamo fatta! Sei un genio." },
        ],
        questions: ["Che problema ha Sara?", "Che cosa le chiede Davide?", "Come si controlla?", "Com'è finita?"],
      },
      parla: ["Racconta come usi la tecnologia ogni giorno.", "Spiega come si manda una foto con WhatsApp.", "Racconta una volta in cui non ce l'hai fatta e una in cui ce l'hai fatta.", "La tecnologia è un aiuto o un problema? Argomenta."],
      roleHint: "Usa «Lei».",
      role: ["Llamas al servicio técnico: tu móvil nuevo no carga.", "Sigue sus instrucciones y explica qué pasa.", "Pide una solución (cambio o reparación)."],
      dettato: ["Ce la fai?", "Me ne sono andata.", "Smettetela!", "Me la cavo.", "Non prendertela.", "Si è bloccato lo schermo."],
      traduci: ["¿Puedes con todo esto?", "Nos fuimos a las once.", "Con la informática me defiendo.", "No te enfades.", "¡Lo he conseguido!", "No me atrevo a decírselo."],
      scrivi: { hint: "Escribe un mensaje (60–80 palabras) a un amigo explicándole paso a paso cómo hacer algo con el móvil o el ordenador.", start: "Allora, è facilissimo: prima…" },
    }),
  };
})();
