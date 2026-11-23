// Unità 27 · Consigli — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[27] = {
    n: 27,
    level: "A2",
    title: "Consigli",
    goal: "Dar y pedir consejos, expresar deseos y pedir las cosas con educación.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a dar consejos (dovresti…, al posto tuo…), a pedirlos, a expresar deseos (mi piacerebbe…, vorrei…) y a pedir cosas con mucha educación.",
              "Gramática: el condizionale presente (farei, potresti, dovrebbe), sus irregulares (que son los mismos que en el futuro) y sus usos.",
              "Ya conoces «vorrei» y «potrei»: ahora verás el tiempo completo.",
            ],
          },
          {
            kind: "intro", title: "Al posto tuo, io…", hint: "Un adelanto: el condicional",
            text: ["El condizionale es el condicional español: «farei» (haría), «dovresti» (deberías), «mi piacerebbe» (me gustaría).", "Para dar un consejo: «Dovresti…» o «Al posto tuo…» (yo en tu lugar…)."],
            examples: [
              { it: "Dovresti dormire di più.", es: "Deberías dormir más." },
              { it: "Al posto tuo, accetterei quel lavoro.", es: "Yo en tu lugar aceptaría ese trabajo." },
              { it: "Mi piacerebbe vivere al mare.", es: "Me gustaría vivir junto al mar." },
            ],
          },
          { kind: "speak", title: "Un consiglio", hint: "Antes de empezar: ¿cuál es el mejor consejo que te han dado? ¿Quién te lo dio?", items: ["Il miglior consiglio…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Consigli e problemi", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "il consiglio", "consigliare", "suggerire", "il problema", "la soluzione",
              "preoccuparsi", "essere stressato", "litigare", "fare pace", "lo sfogo",
              "avere ragione", "avere torto", "decidere", "rinunciare", "il galateo",
              "la buona educazione", "sbagliare", "pentirsi", "rischiare", "valere la pena",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Formule", hint: "Escribe en italiano.",
            items: ["Yo en tu lugar…", "Deberías…", "¿Qué harías tú?", "Me gustaría…", "¿Podrías…?", "¿Te importaría…?", "Sería mejor…", "No te preocupes.", "Tienes razón.", "Merece la pena.", "Te aconsejo que…", "¿Qué me aconsejas?", "Pedir perdón", "dar las gracias", "tener educación"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: dovresti → Dovresti parlare con il tuo capo.", items: ["dovresti", "potresti", "al posto tuo", "mi piacerebbe", "sarebbe meglio", "vorrei", "che cosa faresti", "ti consiglio di"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Farei, faresti, farebbe", hint: "La fuerza en el condicional",
            text: [
              "El condicional lleva la fuerza en la «e» de la terminación: fa-rèi, fa-rè-sti, fa-rèb-be, fa-rèm-mo, fa-rè-ste, fa-rèb-be-ro.",
              "Ojo a la doble m de noi: «faremmo» (haríamos) ≠ «faremo» (haremos). Es la única diferencia entre futuro y condicional con noi, ¡y se oye!",
              "El tono del condicional es suave y educado: «Potrebbe aiutarmi?» suena mucho más amable que «Può aiutarmi?».",
            ],
            table: { head: ["", "noi"], rows: [["futuro", "faremo (fa-rè-mo)"], ["condizionale", "faremmo (fa-rèm-mo)"], ["futuro", "andremo"], ["condizionale", "andremmo"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha la diferencia y repite.", items: ["farei, faresti, farebbe", "faremmo, fareste, farebbero", "faremo / faremmo, andremo / andremmo", "vorrei, potrei, dovrei, sarei"] },
          { kind: "shadow", title: "Con gentilezza", hint: "Repite con tono suave.", items: ["Scusi, potrebbe chiudere la finestra?", "Mi piacerebbe tanto venire.", "Al posto tuo, ci penserei bene.", "Ti dispiacerebbe abbassare la musica?", "Sarebbe meglio partire presto."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il condizionale presente", hint: "Cómo se forma el condicional",
            text: [
              "Se forma como el futuro, pero con otras terminaciones: -ei, -esti, -ebbe, -emmo, -este, -ebbero. Parlare → parlerei; prendere → prenderei; partire → partirei.",
              "Los irregulares son los mismos que en el futuro: essere → sarei; avere → avrei; fare → farei; andare → andrei; venire → verrei; volere → vorrei; potere → potrei; dovere → dovrei; sapere → saprei; vedere → vedrei; bere → berrei; rimanere → rimarrei.",
            ],
            table: {
              head: ["", "parlare", "potere", "essere"],
              rows: [["io", "parlerei", "potrei", "sarei"], ["tu", "parleresti", "potresti", "saresti"], ["lui / lei", "parlerebbe", "potrebbe", "sarebbe"], ["noi", "parleremmo", "potremmo", "saremmo"], ["voi", "parlereste", "potreste", "sareste"], ["loro", "parlerebbero", "potrebbero", "sarebbero"]],
            },
          },
          k.table("Tabella dei verbi", [
            ["dovere", "dovrei", "", "", "", "", ""],
            ["fare", "", "faresti", "", "", "", ""],
            ["andare", "", "", "", "andremmo", "", ""],
            ["volere", "", "", "", "", "", ""],
            ["venire", "", "", "", "", "", "verrebbero"],
            ["piacere (a me / a te / a lui)", "mi piacerebbe", "", "", "—", "—", "—"],
          ], "Completa la tabla en condizionale. En piacere, solo las tres primeras formas: mi, ti, gli piacerebbe."),
          {
            kind: "fill", title: "Che cosa faresti?", hint: "Completa con el condizionale del verbo entre paréntesis.",
            items: [
              "Al posto tuo, io ___ con il capo. (parlare)", "Tu ___ fare più sport. (dovere)", "Scusi, ___ aiutarmi con la valigia? (Lei, potere)", "Mi ___ visitare la Sicilia. (piacere)", "Noi ___ volentieri, ma abbiamo un impegno. (venire)", "Che cosa ___ voi con un milione di euro? (fare)", "Secondo me, ___ meglio prenotare prima. (essere)", "I miei genitori ___ vivere al mare. (volere)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Quando si usa il condizionale", hint: "Los usos del condicional",
            text: [
              "1. Cortesía: «Vorrei un caffè», «Potrebbe ripetere?», «Ti dispiacerebbe…?».",
              "2. Deseos: «Mi piacerebbe…», «Vorrei tanto…», «Andrei volentieri…».",
              "3. Consejos: «Dovresti…», «Potresti…», «Al posto tuo…», «Io farei…», «Sarebbe meglio…».",
              "4. Noticias no confirmadas (en los periódicos): «Il ministro sarebbe in vacanza» (al parecer estaría…).",
            ],
          },
          {
            kind: "fill", title: "Cortesia, desiderio o consiglio", hint: "Transforma con el condizionale el verbo entre paréntesis.",
            items: ["(cortesía) ___ un tavolo per due, per favore. (volere)", "(cortesía) Scusi, ___ dirmi che ore sono? (Lei, sapere)", "(deseo) Mi ___ tanto imparare a ballare. (piacere)", "(deseo) Noi ___ in Giappone un giorno. (andare)", "(consejo) Sei stanco: ___ andare a letto presto. (dovere)", "(consejo) Al posto vostro, io ___ il treno. (prendere)"],
          },
          {
            kind: "intro", title: "Chiedere e dare consigli", hint: "Fórmulas completas",
            text: ["Pedir: «Che cosa mi consigli?», «Tu che cosa faresti?», «Secondo te, dovrei…?».", "Dar: «Ti consiglio di + infinitivo», «Perché non…?», «Prova a…», «Io, al posto tuo,…». Desaconsejar: «Non dovresti…», «Io non lo farei»."],
          },
          k.domanda(["Al posto tuo, cambierei lavoro.", "Mi piacerebbe vivere a Lisbona.", "Sì, potrei aiutarti domani.", "Dovresti parlare con lei.", "Con un milione? Comprerei una casa al mare.", "Vorremmo una camera doppia."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Al posto tuo, partirei. → Che cosa faresti al posto mio?"),
          k.negativa(["Al posto tuo, lo farei.", "Mi piacerebbe vivere in città.", "Dovresti uscire stasera.", "Potremmo venire.", "Sarebbe una buona idea."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Che cosa dovrei fare?", "Una chica pide consejo a su amiga.", [
            { who: "Giada", text: "Ho un problema. Mi hanno offerto un lavoro a Londra, ma non so se accettare." },
            { who: "Bea", text: "Che bello! Perché sei indecisa?" },
            { who: "Giada", text: "Lo stipendio sarebbe il doppio, ma dovrei lasciare Marco, i miei genitori, la mia città…" },
            { who: "Bea", text: "E Marco che cosa dice?" },
            { who: "Giada", text: "Dice che potrebbe raggiungermi dopo qualche mese. Ma non so se ci crede davvero." },
            { who: "Bea", text: "Allora al posto tuo accetterei. Potresti provare un anno e poi decidere. E dovresti parlare chiaramente con Marco prima di partire." },
            { who: "Giada", text: "Hai ragione. Mi piacerebbe avere il tuo coraggio!" },
          ], ["Che cosa hanno offerto a Giada?", "Quali sarebbero i vantaggi? E gli svantaggi?", "Che cosa dice Marco?", "Che cosa le consiglia Bea?", "Che cosa vorrebbe avere Giada?"]),
          k.listen("Alla radio: L'esperto risponde", "Un oyente llama a un programa de consejos.", [
            { who: "Conduttrice", text: "Pronto, è in diretta. Qual è il suo problema?" },
            { who: "Ascoltatore", text: "Buongiorno. Il mio vicino fa feste fino alle tre di notte, tutti i fine settimana. Non riesco a dormire." },
            { who: "Conduttrice", text: "Ha provato a parlargli?" },
            { who: "Ascoltatore", text: "Sì, ma lui dice che la musica non è alta." },
            { who: "Esperto", text: "Allora io le consiglierei prima di scrivere una lettera all'amministratore del condominio. Se non funziona, potrebbe chiamare i vigili." },
            { who: "Esperto", text: "Però, al posto suo, proverei ancora una volta con gentilezza: magari porterei una bottiglia di vino e lo inviterei a prendere un caffè." },
          ], ["Qual è il problema dell'ascoltatore?", "Che cosa ha già provato a fare?", "Che cosa gli consiglia prima l'esperto?", "E se non funziona?", "Che cosa farebbe l'esperto al posto suo?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il galateo", [
            "In italiano le regole della buona educazione si chiamano «galateo». Il nome viene da un libro del 1558, scritto da Giovanni Della Casa, con consigli su come comportarsi in società.",
            "Molte regole sono ancora attuali. A tavola, per esempio, non si dovrebbe cominciare a mangiare prima che tutti siano serviti, e non si dovrebbe parlare con la bocca piena.",
            "Se ti invitano a cena, sarebbe gentile portare qualcosa: una bottiglia di vino, dei fiori o un dolce. Ma attenzione: i crisantemi in Italia si portano solo al cimitero!",
            "Con chi non conosci, all'inizio dovresti usare il «Lei», e aspettare che sia l'altra persona a proporre il «tu».",
            "Oggi ci sono anche regole nuove: in treno non dovresti telefonare a voce alta, e a cena con gli amici sarebbe meglio lasciare il telefono in tasca.",
          ], ["Da dove viene la parola «galateo»?", "Che cosa non si dovrebbe fare a tavola?", "Che cosa sarebbe gentile portare a una cena?", "Perché non si dovrebbero portare i crisantemi?", "Quando si passa dal «Lei» al «tu»?", "Quali sono le regole nuove? Ne aggiungeresti una?"]),
          k.spagna("¿Qué normas de educación son importantes en España? ¿Qué le aconsejarías a un italiano que visita España por primera vez? Usa el condizionale."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Reagire a un consiglio", hint: "Responder a un consejo",
            text: ["Aceptar: «Hai ragione», «Buona idea!», «Ci proverò», «Grazie del consiglio».", "Dudar o rechazar: «Non so…», «Ci penserò», «Non sono sicuro», «Sì, però…», «Facile a dirsi!» (¡qué fácil es decirlo!)."],
          },
          k.rispondi(["A chi chiedi consigli di solito?", "Che cosa ti piacerebbe fare il prossimo anno?", "Che cosa faresti con un mese di vacanza in più?", "Che consiglio daresti a chi comincia a studiare l'italiano?", "Dove vorresti vivere tra dieci anni?", "C'è una cosa che dovresti fare ma non fai mai?"]),
          { kind: "speak", title: "Dai un consiglio", hint: "Da dos consejos a cada persona: uno con «dovresti» y otro con «al posto tuo».", items: ["Ho litigato con la mia migliore amica.", "Non trovo lavoro da sei mesi.", "Voglio imparare l'italiano in un anno.", "Il mio capo mi chiama anche la domenica.", "Mia madre vuole che io torni a vivere con lei.", "Spendo troppi soldi in vestiti."] },
          {
            kind: "roleplay", title: "Lo sportello di ascolto", hint: "Eres voluntario en un servicio de escucha para estudiantes. La IA hace de estudiante con un problema. Es informal.",
            steps: ["Pregúntale qué le pasa.", "Escucha y haz preguntas para entender bien.", "Dale al menos tres consejos con el condizionale.", "Responde a sus dudas («Sì, però…»).", "Despídete animándole."],
          },
          {
            kind: "roleplay", title: "In albergo, con gentilezza", hint: "Tienes varios problemas en el hotel y los pides con mucha educación. La IA hace de recepcionista. Usa «Lei».",
            steps: ["Pide cambiar de habitación porque hay ruido.", "Pregunta si podrían subirte el desayuno a la habitación.", "Pide una recomendación para cenar.", "Pregunta si sería posible salir más tarde el último día.", "Da las gracias."],
          },
          { kind: "speak", title: "Se potessi…", hint: "Habla durante un minuto y medio: ¿qué te gustaría cambiar de tu vida? ¿Qué harías distinto? ¿Qué consejo te darías a ti mismo hace diez años?", items: ["Mi piacerebbe…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Deberías llamar a tu madre.", "Yo en tu lugar no lo haría.", "Me gustaría aprender a tocar la guitarra.", "¿Podría cerrar la puerta, por favor?", "Sería mejor salir antes de las ocho.", "¿Qué harías tú?", "Iríamos con mucho gusto.", "¿Te importaría bajar la música?"]),
          { kind: "write", title: "La posta del cuore", hint: "Lee esta carta a una revista y responde como si fueras el experto (10–12 frases, con el condizionale): «Ho 28 anni e vivo ancora con i miei genitori. Ho un buon lavoro, ma ho paura di andare a vivere da solo. Che cosa dovrei fare? — Matteo, Bari».", rows: 12, items: ["Caro Matteo,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: condizionale", ["dovresti", "faremmo", "vorrebbero", "potrebbe", "sarei", "mi piacerebbe"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Al posto tuo, ci penserei.", "Potrebbe ripetere?", "Mi piacerebbe tanto venire.", "Che cosa faresti?", "Sarebbe meglio partire."]),
          k.media([
            { type: "Canción", title: "Vorrei ma non posto, J-Ax & Fedez", where: "Spotify, YouTube", why: "Éxito de 2016 que juega con «vorrei ma non posso» y las redes sociales («postare»). Fíjate en los condizionali." },
            { type: "Película", title: "Il sorpasso (Dino Risi, 1962)", where: "Busca dónde verla en JustWatch", why: "Un estudiante tímido y un vividor recorren Italia en coche. Uno da consejos de vida al otro… con consecuencias." },
            { type: "Podcast", title: "Daily Italian Words", where: "Spotify, YouTube", why: "Episodios cortos que explican palabras y expresiones italianas con ejemplos. Busca los de consejos y cortesía." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "¿Qué consejo le darías al protagonista de la película? ¿Qué habrías hecho tú en su lugar? Usa el condizionale.", items: ["Al posto suo, io…"] },
        ],
      },
    ],

    exam: k.exam(27, {
      parole: ["suggerire", "avere torto", "fare pace", "pentirsi", "valere la pena", "il galateo", "rinunciare", "lo sfogo", "al posto tuo", "sarebbe meglio"],
      contrario: ["Deberías…", "Me gustaría…", "¿Te importaría…?", "Tienes razón.", "equivocarse", "pedir perdón"],
      verbiHint: "Completa la tabla en condizionale.",
      verbi: [["fare", "", "", "", "", "", ""], ["volere", "", "", "", "", "", ""], ["rimanere", "", "", "", "", "", ""]],
      completaHint: "Completa con el condizionale del verbo entre paréntesis.",
      completa: ["Al posto tuo, io non ___ niente. (dire)", "Scusi, ___ chiudere la finestra? (Lei, potere)", "Ci ___ (piacere) visitare la Puglia quest'estate.", "Voi ___ venire con noi? (volere)", "Secondo me, tu ___ dormire di più. (dovere)", "Loro ___ volentieri, ma lavorano. (venire)", "Noi ___ un caffè, grazie. (prendere)", "Senza di te, io non ___ che cosa fare. (sapere)"],
      trasformaHint: "Hazlo más educado o más suave con el condizionale.",
      trasforma: ["Voglio un bicchiere d'acqua.", "Puoi aiutarmi?", "Devi studiare di più.", "Mi dà il conto?", "Ti dispiace aspettare?", "Preferisco restare a casa."],
      leggi: {
        text: [
          "Cara esperta, ho 35 anni e lavoro in banca da dieci anni. Lo stipendio è buono, ma mi annoio terribilmente. Il mio sogno sarebbe aprire una libreria con un piccolo caffè.",
          "Mia moglie dice che sarebbe una follia: abbiamo due figli e un mutuo. I miei amici, invece, dicono che dovrei provarci.",
          "Non vorrei pentirmi tra vent'anni di non averlo fatto. Ma non vorrei nemmeno mettere in difficoltà la mia famiglia. Che cosa farebbe Lei al posto mio? — Andrea",
        ],
        questions: ["Che lavoro fa Andrea? Che problema ha?", "Qual è il suo sogno?", "Che cosa pensano la moglie e gli amici?", "Di che cosa ha paura Andrea?"],
      },
      ascolta: {
        script: [
          { who: "Luca", text: "Non so che cosa regalare a mia madre per i sessant'anni." },
          { who: "Anna", text: "Le piacerebbe un viaggio? Potresti regalarle un weekend a Venezia." },
          { who: "Luca", text: "Sarebbe bello, ma costa troppo." },
          { who: "Anna", text: "Allora al posto tuo organizzerei una cena a sorpresa con tutti i suoi amici. Costerebbe poco e sarebbe indimenticabile." },
        ],
        questions: ["Che problema ha Luca?", "Che cosa gli consiglia Anna prima?", "Perché non va bene?", "Che cosa farebbe Anna al posto suo? Perché?"],
      },
      parla: ["Che cosa ti piacerebbe fare nei prossimi cinque anni?", "Dai tre consigli a un amico che vuole vivere in Italia.", "Che cosa faresti con un anno sabbatico?", "Chiedi tre cose in un albergo nel modo più gentile possibile."],
      roleHint: "Es informal.",
      role: ["Un amigo te cuenta que quiere dejar los estudios: pregúntale por qué.", "Dale consejos con el condizionale.", "Escucha su respuesta y cierra con un último consejo."],
      dettato: ["Dovresti riposarti.", "Mi piacerebbe tanto.", "Potrebbe aiutarmi?", "Al posto tuo, partirei.", "Faremmo volentieri.", "Sarebbe una buona idea."],
      traduci: ["Yo en tu lugar hablaría con él.", "¿Podría decirme dónde está la estación?", "Nos gustaría visitar Sicilia.", "No deberías trabajar tanto.", "¿Qué harías con un millón de euros?", "Sería mejor esperar."],
      scrivi: { hint: "Escribe un correo (60–80 palabras) a un amigo italiano que viene a tu ciudad: dale consejos sobre qué ver, qué comer y qué no hacer, con el condizionale.", start: "Caro…, ecco i miei consigli:" },
    }),
  };
})();
