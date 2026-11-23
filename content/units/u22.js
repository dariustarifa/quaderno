// Unità 22 · Regali e favori — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[22] = {
    n: 22,
    level: "A2",
    title: "Regali e favori",
    goal: "Elegir y hacer regalos, pedir y hacer favores, y dar las gracias.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de regalos (qué regalar, a quién, para qué ocasión), a pedir favores con educación, a aceptarlos o rechazarlos y a dar las gracias.",
              "Gramática: los pronombres de objeto indirecto (mi, ti, gli, le, Le, ci, vi, gli) con regalare, dare, prestare, chiedere, telefonare, y verbos como sembrare y servire.",
              "Ya conoces algunos por piacere: «mi piace», «gli piace». Ahora los usarás con todos los verbos.",
            ],
          },
          {
            kind: "intro", title: "Che cosa gli regali?", hint: "Un adelanto: «le» y «gli»",
            text: ["Los pronombres indirectos responden a «¿a quién?»: «Regalo un libro a Marco» → «Gli regalo un libro».", "Recuerda la trampa: gli = a él (y a ellos), le = a ella (y Le = a usted)."],
            examples: [
              { it: "Mia madre? Le regalo dei fiori.", es: "¿Mi madre? Le regalo flores." },
              { it: "Mi presti la bici?", es: "¿Me prestas la bici?" },
              { it: "Signora, Le serve aiuto?", es: "Señora, ¿necesita ayuda?" },
            ],
          },
          { kind: "speak", title: "Il regalo più bello", hint: "Antes de empezar: ¿cuál es el mejor regalo que te han hecho? ¿Quién te lo hizo?", items: ["Il regalo più bello…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Regali e occasioni", hint: "Busca cada palabra y escribe su traducción al español.",
            items: [
              "regalare", "il regalo", "incartare", "il pacchetto", "il biglietto d'auguri",
              "gli auguri", "il compleanno", "l'anniversario", "il matrimonio", "la laurea",
              "il buono regalo", "la lista nozze", "la bomboniera", "i confetti", "fare una sorpresa",
              "prestare", "restituire", "fare un favore", "ringraziare", "sdebitarsi",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Formule utili", hint: "Escribe en italiano.",
            items: ["¡Felicidades!", "¡Feliz cumpleaños!", "¡Muchas gracias!", "No hacía falta.", "¡Qué detalle!", "¿Me haces un favor?", "Claro, con mucho gusto.", "Lo siento, no puedo.", "Te debo una.", "De nada / No hay de qué.", "¿Te importa si…?", "¿Me echas una mano?", "devolver", "pedir prestado", "envolver para regalo"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: gli regalo → Luca ama il jazz: gli regalo un disco.", items: ["gli regalo", "le scrivo", "mi presti", "ti serve", "Le sembra", "ci hanno dato", "fare un favore", "grazie mille"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Gli, le, li", hint: "Distinguir gli / le / li al oído",
            text: [
              "Tres pronombres que se confunden al oír: «gli» (con el sonido ll de famiglia), «li» (con l normal) y «le».",
              "«Gli do il libro» (le doy el libro a él) ≠ «Li do a Marco» (los doy a Marco). Escucha bien la diferencia entre gli y li.",
              "Los augurios se dicen con entusiasmo y la voz arriba: «Auguri!», «Tanti auguri!», «Congratulazioni!».",
            ],
            table: { head: ["", "significa"], rows: [["gli do", "le doy (a él)"], ["li do", "los doy"], ["le do", "le doy (a ella) / las doy"]] },
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Escucha la diferencia y repite.", items: ["gli scrivo, li scrivo", "gli regalo, li regalo, le regalo", "Gli piace. Li compra. Le serve.", "Tanti auguri! Congratulazioni!"] },
          { kind: "shadow", title: "Favori", hint: "Repite con tono amable.", items: ["Mi fai un favore?", "Certo, dimmi!", "Mi presti la macchina sabato?", "Mi dispiace, ma mi serve.", "Grazie mille, ti devo un favore!", "Ma figurati, di niente!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I pronomi indiretti", hint: "Pronombres de objeto indirecto",
            text: [
              "mi (a me), ti (a te), gli (a lui), le (a lei), Le (a Lei, usted), ci (a noi), vi (a voi), gli (a loro).",
              "Van delante del verbo conjugado y pegados al infinitivo y al imperativo de tu: «Gli scrivo», «Devo scrivergli», «Scrivigli!».",
              "En el passato prossimo, al contrario que con lo / la, el participio NO concuerda: «Le ho scritto» (le he escrito a ella), no «scritta».",
              "Con los imperativos cortos (da', di', fa') la consonante se duplica: dammi, dimmi, fammi, dagli (pero no con gli: «dagli»).",
            ],
            table: { head: ["", "pronombre", "ejemplo"], rows: [["a me / a te", "mi / ti", "mi regali, ti scrivo"], ["a lui / a lei", "gli / le", "gli presto, le telefono"], ["a Lei", "Le", "Le serve?"], ["a noi / a voi", "ci / vi", "ci dai, vi mando"], ["a loro", "gli", "gli rispondo"]] },
          },
          {
            kind: "intro", title: "Sembrare, servire, mancare", hint: "Verbos que funcionan como piacere",
            text: ["«Sembrare» (parecer), «servire» (hacer falta), «mancare» (echar de menos / faltar), «interessare», «dispiacere»: lo que se siente o se necesita es el sujeto y la persona va con pronombre indirecto.", "«Mi serve un regalo» (necesito un regalo), «Mi servono due biglietti», «Ti sembra bello?»."],
          },
          k.table("Regalare, prestare, chiedere…", [
            ["regalare (a lui)", "gli regalo", "", ""],
            ["telefonare (a lei)", "", "le ho telefonato", ""],
            ["scrivere (a loro)", "", "", "scrivigli!"],
            ["dire (a me)", "", "", "dimmi!"],
            ["dare (a noi)", "", "", ""],
            ["chiedere (a voi)", "", "", ""],
          ], "Completa con el pronombre indirecto: presente (io), passato prossimo (io) e imperativo (tu).", ["presente", "passato", "imperativo"]),
          {
            kind: "fill", title: "Mi, ti, gli, le…", hint: "Completa con el pronombre indirecto.",
            items: [
              "È il compleanno di Luca: ___ regalo un libro.", "Mia madre? ___ telefono ogni sera.", "Ragazzi, ___ porto un dolce domani!", "Signor Rossi, ___ posso fare una domanda?", "Ieri i miei amici ___ hanno fatto una sorpresa: a me!", "I bambini sono stanchi: ___ leggo una favola.", "Dimmi la verità: ___ piace il mio regalo?", "Anna e io abbiamo cambiato casa: Marco ___ ha aiutato con il trasloco. (noi)",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Diretto o indiretto?", hint: "¿Lo o gli? ¿La o le?",
            text: [
              "Pregunta al verbo: ¿qué? → directo (lo, la, li, le). ¿A quién? → indirecto (gli, le).",
              "«Vedo Marco» → «Lo vedo» (veo a Marco: directo, sin «a» en italiano). «Telefono a Marco» → «Gli telefono» (indirecto, con «a»).",
              "Trampa para hispanohablantes: en italiano «aiutare», «ringraziare», «chiamare», «ascoltare», «invitare» llevan directo: «La aiuto», «Li ringrazio». «Telefonare», «rispondere», «scrivere», «dare», «regalare» llevan indirecto.",
            ],
          },
          {
            kind: "fill", title: "Lo, la, li, le o gli, le?", hint: "Completa con el pronombre directo o indirecto correcto.",
            items: ["Giulia è triste: ___ telefono e ___ invito a cena.", "Il regalo per papà? ___ ho comprato ieri e ___ do domani.", "I miei nonni? ___ chiamo e ___ racconto tutto.", "Marco mi ha aiutato: ___ ringrazio e ___ offro un caffè.", "Le mie amiche? ___ scrivo spesso, ma non ___ vedo mai.", "Il professore ha fatto una domanda e io non ___ ho risposto."],
          },
          {
            kind: "intro", title: "Chiedere un favore", hint: "Pedir un favor con educación",
            text: ["De menos a más formal: «Mi presti…?», «Mi fai un favore?», «Ti dispiace se…?», «Potresti…?», «Le dispiacerebbe…?» (¿le importaría…?).", "Respuestas: «Certo!», «Figurati!», «Volentieri», «Mi dispiace, ma…», «Purtroppo non posso perché…»."],
          },
          k.domanda(["Le ho regalato un profumo.", "Gli ho scritto ieri sera.", "Mi serve una mano con il trasloco.", "Sì, ti presto la macchina.", "Ci hanno regalato un viaggio.", "No, non gli ho ancora risposto."], "Escribe la pregunta que corresponde a cada respuesta. Ejemplo: Le regalo dei fiori. → Che cosa regali a tua madre?"),
          k.negativa(["Gli ho telefonato.", "Le piace il regalo.", "Prestami la penna!", "Ci servono i biglietti.", "Vi ho scritto una lettera."]),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il regalo per la mamma", "Dos hermanos deciden qué regalar a su madre.", [
            { who: "Chiara", text: "Domenica è il compleanno della mamma. Che cosa le regaliamo?" },
            { who: "Simone", text: "Le regaliamo un profumo? L'anno scorso le è piaciuto tanto." },
            { who: "Chiara", text: "No, le abbiamo già regalato un profumo due volte. Le serve qualcosa di nuovo." },
            { who: "Simone", text: "Allora un buono per una giornata alla spa. Si lamenta sempre che è stanca." },
            { who: "Chiara", text: "Ottima idea! E a papà diciamo di portarla a cena fuori." },
            { who: "Simone", text: "Perfetto. Tu le scrivi il biglietto, io lo compro e lo incarto." },
          ], ["Quando è il compleanno della mamma?", "Perché non le regalano un profumo?", "Che cosa decidono di regalarle? Perché?", "Che cosa deve fare il papà?", "Come si dividono il lavoro i fratelli?"]),
          k.listen("Mi fai un favore?", "Un chico pide un favor a su vecina.", [
            { who: "Davide", text: "Buongiorno signora Marini, scusi il disturbo. Le posso chiedere un favore?" },
            { who: "Sig.ra Marini", text: "Certo, Davide, dimmi pure." },
            { who: "Davide", text: "Parto per una settimana. Le dispiacerebbe dare da mangiare al mio gatto? Le lascio le chiavi." },
            { who: "Sig.ra Marini", text: "Ma figurati, lo faccio volentieri! Mi piacciono tanto i gatti." },
            { who: "Davide", text: "Grazie mille! Le porto qualcosa da Napoli: un babà o un po' di caffè?" },
            { who: "Sig.ra Marini", text: "Non serve niente… ma un babà non lo rifiuto mai!" },
          ], ["Che favore chiede Davide?", "Per quanto tempo parte?", "Che cosa le lascia?", "Perché la signora accetta volentieri?", "Che cosa le porterà Davide?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Bomboniere e confetti", [
            "In Italia, ai matrimoni, ai battesimi e alle lauree, non sono solo gli invitati a fare regali: anche i festeggiati regalano qualcosa a tutti, la bomboniera.",
            "La bomboniera è un piccolo oggetto, spesso di ceramica o d'argento, con un sacchetto di confetti: mandorle ricoperte di zucchero. Il numero dei confetti è sempre dispari, di solito cinque.",
            "I cinque confetti rappresentano cinque auguri per gli sposi: salute, fertilità, lunga vita, felicità e ricchezza. Il colore cambia con l'occasione: bianco per il matrimonio, rosso per la laurea, rosa o azzurro per un battesimo.",
            "Per il regalo di nozze, molte coppie fanno la «lista nozze» in un negozio o un'agenzia di viaggi: gli invitati scelgono un oggetto o contribuiscono al viaggio di nozze.",
            "Un altro regalo molto italiano è il denaro in una busta, soprattutto al Sud. Non è considerato freddo: anzi, è un aiuto concreto per la nuova famiglia.",
          ], ["Che cos'è la bomboniera? Chi la regala?", "Che cosa sono i confetti?", "Perché sono cinque? Che cosa rappresentano?", "Di che colore sono per una laurea?", "Che cos'è la lista nozze?", "Che cosa pensano molti italiani del denaro come regalo?"]),
          k.spagna("¿Qué se regala en España en una boda o un bautizo? ¿Existe algo parecido a las bomboniere? Usa los pronombres indirectos."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ringraziare e fare gli auguri", hint: "Agradecer y felicitar",
            text: ["Al recibir un regalo: «Grazie, che pensiero gentile!», «Non dovevi!» (no hacía falta), «È bellissimo!». Al darlo: «È solo un pensiero», «Spero che ti piaccia».", "Felicitaciones: «Buon compleanno!», «Tanti auguri!», «Congratulazioni!» (por un logro), «Auguri e figli maschi» es antigua: ¡no la uses!"],
          },
          k.rispondi(["Che cosa regali di solito ai tuoi amici?", "Qual è il regalo più strano che hai ricevuto?", "Preferisci fare o ricevere regali?", "Che cosa regalerai alla prossima persona che compie gli anni?", "Ti piace chiedere favori? A chi li chiedi?", "Qual è l'ultimo favore che hai fatto a qualcuno?"]),
          { kind: "speak", title: "Che cosa gli regali?", hint: "Di qué regalarías a cada persona y por qué, usando gli / le. Ejemplo: tuo padre → Gli regalo un libro perché gli piace leggere.", items: ["tua madre", "il tuo migliore amico", "una collega che va in pensione", "due amici che si sposano", "il tuo professore di italiano", "un bambino di sei anni"] },
          {
            kind: "roleplay", title: "Il favore impossibile", hint: "Un amigo te pide un favor muy grande. La IA hace del amigo. Es informal.",
            steps: ["Tu amigo te pide un favor: escúchale.", "Pide detalles (cuándo, cuánto tiempo…).", "Rechaza con educación y explica por qué.", "Propón otra forma de ayudarle.", "Cerrad el acuerdo."],
          },
          {
            kind: "roleplay", title: "In negozio: un regalo", hint: "Buscas un regalo para una persona mayor. La IA hace de dependiente y te hace preguntas. Usa «Lei».",
            steps: ["Explica para quién es y qué ocasión.", "Responde: qué le gusta, cuánto quieres gastar.", "Elige entre las propuestas.", "Pregunta si se puede cambiar.", "Pide que te lo envuelvan y paga."],
          },
          { kind: "speak", title: "Un regalo indimenticabile", hint: "Cuenta durante un minuto y medio un regalo especial que hiciste o recibiste: para quién, por qué, cómo reaccionó.", items: ["Una volta ho regalato…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["¿Qué le regalas a tu padre?", "Le he escrito un mensaje a Giulia.", "¿Me prestas tu paraguas?", "Necesitamos dos billetes.", "Señora, ¿le parece bien?", "No les he contestado todavía.", "Dime la verdad.", "Te debo una, gracias."]),
          { kind: "write", title: "Biglietti", hint: "Escribe tres tarjetas cortas (3–4 frases cada una): felicitación de cumpleaños para un amigo, agradecimiento por un regalo para tu tía, y felicitación de boda para unos compañeros de trabajo.", rows: 5, items: ["Per un amico:", "Per la zia:", "Per i colleghi:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: pronomi", ["gli scrivo", "le telefono", "dimmi", "Le serve", "ci hanno regalato", "dagli"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Che cosa gli regali?", "Mi fai un favore?", "Le è piaciuto il regalo.", "Grazie, non dovevi!", "Tanti auguri!"]),
          k.media([
            { type: "Película", title: "Il grande giorno (Aldo, Giovanni e Giacomo, 2022)", where: "Busca dónde verla en JustWatch", why: "Comedia sobre una boda de lujo en el lago de Como: regalos, favores, suegros y caos." },
            { type: "Canción", title: "Tanti auguri, Raffaella Carrà", where: "Spotify, YouTube", why: "Clásico de 1978, una de las canciones más alegres de la televisión italiana." },
            { type: "YouTube", title: "Learn Italian with Lucrezia", where: "YouTube", why: "Busca su vídeo sobre los pronombres indirectos: los explica con ejemplos muy claros." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta qué regalos o favores aparecen en la película o el vídeo: quién le da qué a quién.", items: ["Le regala… Gli chiede…"] },
        ],
      },
    ],

    exam: k.exam(22, {
      parole: ["incartare", "il biglietto d'auguri", "la bomboniera", "i confetti", "prestare", "restituire", "sdebitarsi", "il buono regalo", "Non dovevi!", "Figurati!"],
      contrario: ["¡Felicidades! (por un logro)", "¿Me echas una mano?", "Te debo una.", "devolver", "envolver para regalo", "pedir prestado"],
      verbiHint: "Completa con el pronombre indirecto: presente (io), passato prossimo (io) e imperativo (tu).",
      verbiCols: ["presente", "passato", "imperativo"],
      verbi: [["dare (a lui)", "", "", ""], ["dire (a me)", "", "", ""], ["telefonare (a lei)", "", "", ""], ["scrivere (a noi)", "", "", ""]],
      completaHint: "Completa con un pronombre directo o indirecto, o con el verbo entre paréntesis.",
      completa: ["A Marco ___ piacciono i libri gialli: ___ regalo l'ultimo di Camilleri.", "Mia nonna? ___ chiamo ogni domenica e ___ racconto la settimana.", "Signora, ___ serve una mano?", "Il regalo? ___ ho incartato io.", "Ieri le mie amiche ___ hanno fatto una sorpresa. (a me)", "Mi ___ (servire) due biglietti per il concerto.", "Ti ___ (sembrare) un buon regalo?", "Ai miei genitori ___ ho detto tutto."],
      trasformaHint: "Sustituye las palabras con «a» por un pronombre indirecto (gli, le, ci…).",
      trasforma: ["Regalo un libro a mio fratello.", "Ho telefonato a Giulia.", "Scrivi a Luca!", "Abbiamo dato i soldi ai bambini.", "Ho chiesto un favore alla vicina.", "Hanno mandato un pacco a noi."],
      leggi: {
        text: [
          "Cara Martina, grazie mille per il regalo di laurea! Il libro di ricette siciliane è bellissimo e ti prometto che ti inviterò a cena per provare la caponata.",
          "Mi è piaciuto tantissimo anche il biglietto: mi hai fatto ridere e piangere insieme. Lo terrò per sempre.",
          "Ti devo un favore enorme anche per il trasloco: senza di te non ce l'avrei fatta. Un abbraccio grande, Valeria.",
        ],
        questions: ["Per quale occasione Martina ha fatto un regalo?", "Che cosa le ha regalato?", "Che cosa promette Valeria?", "Per che cosa ringrazia ancora Martina?"],
      },
      ascolta: {
        script: [
          { who: "Lorenzo", text: "Pronto, Ilaria? Mi fai un favore enorme?" },
          { who: "Ilaria", text: "Dimmi." },
          { who: "Lorenzo", text: "Domani è l'anniversario dei miei genitori e ho dimenticato il regalo. Tu domani passi dal centro?" },
          { who: "Ilaria", text: "Sì, alle cinque. Che cosa gli compro?" },
          { who: "Lorenzo", text: "Due biglietti per l'opera: gli piace tanto. Ti restituisco i soldi stasera." },
        ],
        questions: ["Che favore chiede Lorenzo?", "Che cosa ha dimenticato?", "Che cosa compra Ilaria? Perché?", "Quando le restituisce i soldi?"],
      },
      parla: ["Racconta il regalo più bello che hai ricevuto.", "Chiedi un favore a un vicino che conosci poco.", "Che cosa regali ai tuoi familiari a Natale? Usa gli / le.", "Ringrazia un'amica per un regalo che non ti piace molto."],
      roleHint: "Es informal.",
      role: ["Pides prestado el coche a un amigo para el fin de semana.", "Él tiene una condición: acéptala o negocia.", "Agradécelo y ofrécele algo a cambio."],
      dettato: ["Gli ho regalato un libro.", "Mi presti la bici?", "Le serve aiuto?", "Dimmi tutto!", "Non le ho risposto.", "Ci piacciono i regali."],
      traduci: ["¿Qué le has regalado a tu madre?", "Le he prestado mi coche a Luca.", "¿Te parece un buen regalo?", "Hazme un favor, por favor.", "No les he escrito todavía.", "Señor Bianchi, ¿le hace falta algo?"],
      scrivi: { hint: "Escribe un mensaje (60–80 palabras) a un amigo para pedirle un favor importante: qué necesitas, cuándo y por qué, y cómo se lo agradecerás.", start: "Ciao! Ti posso chiedere un favore?" },
    }),
  };
})();
