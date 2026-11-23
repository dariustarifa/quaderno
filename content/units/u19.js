// Unità 19 · Dal medico — ver content/AUTHORING.md
(() => {
  const k = K.at("A2");
  window.UNITS = window.UNITS || {};
  window.UNITS[19] = {
    n: 19,
    level: "A2",
    title: "Dal medico",
    goal: "Decir qué te duele, explicar síntomas en el médico y en la farmacia, y dar consejos de salud.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "En esta unidad",
            text: [
              "Vas a aprender a hablar de salud: las partes del cuerpo, los síntomas, qué decir en el médico y en la farmacia y cómo dar consejos.",
              "Gramática: «mi fa male / mi fanno male» (me duele), el imperativo con tu, noi y voi (bevi, riposati, non uscire) y los imperativos irregulares (fa', va', di', sta').",
              "El imperativo te servirá también para dar instrucciones, recetas e indicaciones.",
            ],
          },
          {
            kind: "intro", title: "Che cosa ti fa male?", hint: "Un adelanto: me duele",
            text: ["«Fare male» funciona como piacere: «Mi fa male la testa» (una cosa), «Mi fanno male i piedi» (varias).", "Para otros síntomas se usa avere: «Ho la febbre», «Ho il raffreddore», «Ho mal di gola»."],
            examples: [
              { it: "Mi fa male la schiena.", es: "Me duele la espalda." },
              { it: "Ho mal di testa e un po' di febbre.", es: "Me duele la cabeza y tengo un poco de fiebre." },
              { it: "Bevi tanta acqua e riposati!", es: "¡Bebe mucha agua y descansa!" },
            ],
          },
          { kind: "speak", title: "Come stai?", hint: "Antes de empezar: ¿cuándo fue la última vez que estuviste enfermo? ¿Qué tenías? Dilo como puedas.", items: ["L'ultima volta…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il corpo", hint: "Busca cada palabra y escribe su traducción al español. Ojo a los plurales irregulares.",
            items: [
              "la testa", "gli occhi", "l'orecchio / le orecchie", "il naso", "la bocca",
              "i denti", "la gola", "il collo", "la spalla", "il braccio / le braccia",
              "la mano / le mani", "il dito / le dita", "la pancia", "lo stomaco", "la schiena",
              "la gamba", "il ginocchio / le ginocchia", "il piede", "il cuore", "la pelle",
            ],
          },
          {
            kind: "vocab", from: "es", title: "Sintomi e cure", hint: "Escribe en italiano.",
            items: ["la fiebre", "la tos", "el resfriado", "la gripe", "dolor de garganta", "dolor de barriga", "estoy mareado", "la receta (del médico)", "la pastilla", "el jarabe", "la farmacia de guardia", "la cita (en el médico)", "la alergia", "tomarse la temperatura", "curarse"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Haz una frase con cada elemento. Dila en voz alta y escríbela. Ejemplo: mi fanno male → Mi fanno male le gambe: ho corso troppo.", items: ["mi fa male", "mi fanno male", "ho la febbre", "la ricetta", "riposati", "non mangiare", "prendi", "da quanto tempo"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Ginocchio, orecchio, stomaco", hint: "Palabras del cuerpo difíciles",
            text: [
              "Algunas palabras del cuerpo tienen sonidos de las unidades anteriores: ginocchio (yi-nòk-kio), orecchio (o-rèk-kio), gola (gò-la), schiena (skiè-na).",
              "«Stomaco» lleva la fuerza en la primera o: stò-ma-co. Muchos hispanohablantes dicen «stomàco».",
              "El imperativo se dice con energía, con la voz bajando al final: «Riposati!», «Bevi!». Para suavizarlo, añade «dai» o «su»: «Dai, prendi la medicina».",
            ],
            table: { head: ["", "suena"], rows: [["ginocchio", "yi-nòk-kio"], ["orecchie", "o-rèk-kie"], ["schiena", "skiè-na"], ["stomaco", "stò-ma-co"]] },
          },
          { kind: "shadow", title: "Il corpo", hint: "Escucha y repite.", items: ["testa, collo, spalla, schiena", "braccio, braccia, dito, dita", "ginocchio, ginocchia, orecchio, orecchie", "gola, stomaco, pancia, cuore"] },
          { kind: "shadow", title: "Dal medico", hint: "Repite con la misma melodía.", items: ["Buongiorno dottore, non mi sento bene.", "Ho mal di gola e la tosse da tre giorni.", "Mi fa male qui, sotto il ginocchio.", "Prenda questo sciroppo tre volte al giorno.", "Riposati e bevi tanta acqua!", "Non uscire con questo freddo!"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "L'imperativo con tu, noi e voi", hint: "El imperativo informal",
            text: [
              "Con noi y voi es igual que el presente: mangiamo!, mangiate!, prendete!, dormite!.",
              "Con tu: los verbos en -are terminan en -a (parla!, mangia!); los verbos en -ere y -ire, en -i (prendi!, dormi!, finisci!).",
              "Negativo con tu: non + infinitivo: «Non mangiare!», «Non uscire!». Con noi y voi: non + imperativo: «Non mangiate!».",
              "Con los reflexivos, el pronombre va pegado detrás: riposati!, alzati!, calmatevi!. Pero en negativo: «Non ti preoccupare» o «Non preoccuparti».",
            ],
            table: {
              head: ["", "tu", "voi"],
              rows: [["parlare", "parla! / non parlare!", "parlate!"], ["prendere", "prendi! / non prendere!", "prendete!"], ["dormire", "dormi! / non dormire!", "dormite!"], ["riposarsi", "riposati!", "riposatevi!"]],
            },
          },
          {
            kind: "intro", title: "Imperativi irregolari", hint: "Imperativos irregulares con tu",
            text: ["Cinco verbos muy usados tienen una forma corta con tu: andare → va' (o vai), fare → fa' (o fai), dare → da' (o dai), stare → sta' (o stai), dire → di'.", "Y dos más: essere → sii, avere → abbi. «Sii paziente!», «Abbi pazienza!»."],
          },
          k.table("Tabella dell'imperativo", [
            ["bere", "bevi!", "", ""],
            ["andare", "", "", "andate!"],
            ["fare", "", "", ""],
            ["stare", "", "non stare!", ""],
            ["mettersi", "", "", ""],
            ["essere", "sii!", "", ""],
          ], "Completa: imperativo con tu, imperativo negativo con tu e imperativo con voi.", ["tu", "tu (negativo)", "voi"]),
          {
            kind: "fill", title: "Consigli", hint: "Completa con el imperativo (tu o voi, según la persona).",
            items: [
              "Hai la febbre? ___ (stare) a letto e ___ (bere) molta acqua.",
              "Ragazzi, ___ (mettersi) la giacca: fa freddo!",
              "Non ___ (mangiare) cioccolato se ti fa male la pancia.",
              "Mamma, ___ (andare) dal medico, per favore!",
              "Hai mal di schiena? Non ___ (sollevare) cose pesanti.",
              "Bambini, ___ (lavarsi) le mani prima di mangiare!",
              "___ (dire) la verità al dottore: fumi o no?",
              "Non ___ (preoccuparsi): è solo un raffreddore.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Mi fa male / mi fanno male", hint: "Me duele, me duelen",
            text: ["«Fare male» concuerda con la parte del cuerpo: «Mi fa male il braccio», «Mi fanno male le braccia».", "Cambia el pronombre como con piacere: ti fa male?, gli fa male, le fa male, ci fanno male…", "Con avere: «Ho mal di testa / di gola / di denti / di pancia / di schiena» (sin artículo)."],
          },
          {
            kind: "fill", title: "Fa o fanno?", hint: "Completa con fa o fanno, y con el pronombre si falta.",
            items: ["Mi ___ male i denti.", "A Luca ___ male la gamba.", "(a lei) ___ fa male lo stomaco.", "Ti ___ male gli occhi quando leggi?", "Dopo la partita ci ___ male i piedi.", "(a lui) ___ fanno male le orecchie."],
          },
          {
            kind: "intro", title: "Da quanto tempo?", hint: "Desde hace cuánto",
            text: ["Para decir desde cuándo te pasa algo que sigue pasando: presente + «da»: «Ho la tosse da tre giorni» (tengo tos desde hace tres días).", "Pregunta: «Da quanto tempo ha la febbre?»."],
            examples: [{ it: "Mi fa male la schiena da una settimana.", es: "Me duele la espalda desde hace una semana." }],
          },
          k.domanda(["Mi fa male la gola.", "Ho la febbre da ieri sera.", "Sì, sono allergico agli antibiotici.", "Lo deve prendere due volte al giorno.", "Ho trentotto e mezzo.", "No, non fumo."], "Escribe la pregunta del médico para cada respuesta. Ejemplo: Mi fa male la testa. → Che cosa ti fa male?"),
          k.negativa(["Bevi il caffè!", "Uscite stasera!", "Prendi l'antibiotico!", "Mangiate il gelato!", "Alzati!"], "Pasa cada imperativo a negativo.", "imperativo negativo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Dal medico di base", "Una paciente en la consulta de su médica de cabecera.", [
            { who: "Dott.ssa Ferri", text: "Buongiorno signora Conti, si accomodi. Che cosa c'è?" },
            { who: "Sig.ra Conti", text: "Buongiorno dottoressa. Da tre giorni ho la tosse e mi fa male la gola. Stanotte ho avuto anche la febbre." },
            { who: "Dott.ssa Ferri", text: "Quanto aveva?" },
            { who: "Sig.ra Conti", text: "Trentotto e due." },
            { who: "Dott.ssa Ferri", text: "Vediamo… apra la bocca. Sì, la gola è molto rossa. È un'influenza. Ha allergie ai farmaci?" },
            { who: "Sig.ra Conti", text: "No, nessuna." },
            { who: "Dott.ssa Ferri", text: "Allora prenda questo sciroppo tre volte al giorno e la tachipirina se la febbre supera i trentotto. Stia a casa almeno tre giorni e beva molto." },
            { who: "Sig.ra Conti", text: "Mi serve un certificato per il lavoro?" },
            { who: "Dott.ssa Ferri", text: "Sì, lo mando io online. Se tra cinque giorni non sta meglio, torni da me." },
          ], ["Che sintomi ha la signora Conti? Da quando?", "Quanta febbre ha avuto?", "Che cosa ha, secondo la dottoressa?", "Che cosa deve prendere e quando?", "Che cosa deve fare se tra cinque giorni non sta meglio?"]),
          k.listen("In farmacia", "Un chico pide consejo al farmacéutico.", [
            { who: "Farmacista", text: "Buonasera, mi dica." },
            { who: "Ragazzo", text: "Buonasera. Ho mal di stomaco da stamattina. Ieri sera ho mangiato troppo a una festa." },
            { who: "Farmacista", text: "Ha anche la nausea?" },
            { who: "Ragazzo", text: "Un po'. Ma niente febbre." },
            { who: "Farmacista", text: "Allora prenda queste bustine dopo i pasti. Oggi mangi in bianco: riso, patate bollite, niente fritti e niente alcol." },
            { who: "Ragazzo", text: "Ci vuole la ricetta?" },
            { who: "Farmacista", text: "No, sono da banco. Sono sei euro e cinquanta." },
          ], ["Che problema ha il ragazzo? Da quando?", "Perché, secondo lui?", "Ha la febbre?", "Che cosa deve mangiare oggi? E che cosa no?", "Serve la ricetta? Quanto costa?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("La salute in Italia", [
            "In Italia c'è il Servizio Sanitario Nazionale: le cure di base e gli ospedali pubblici sono per tutti. Per alcune visite ed esami si paga una piccola quota, il «ticket».",
            "Ogni persona ha un medico di base, o medico di famiglia, che si sceglie nella propria zona. Per vedere uno specialista, di solito serve prima la sua ricetta.",
            "Le farmacie si riconoscono dalla croce verde. I farmacisti danno molti consigli e spesso sono il primo posto dove gli italiani vanno quando stanno male.",
            "La notte e nel fine settimana c'è la guardia medica, e in ogni città c'è sempre una farmacia di turno aperta. Per le emergenze si chiama il 112 (in alcune regioni ancora il 118).",
            "Gli italiani vivono a lungo: l'Italia è uno dei paesi con l'aspettativa di vita più alta d'Europa. Molti dicono che il merito è della dieta mediterranea… e della famiglia.",
          ], ["Che cos'è il Servizio Sanitario Nazionale?", "Che cos'è il «ticket»?", "Chi è il medico di base? Quando serve la sua ricetta?", "Come si riconosce una farmacia?", "Che cosa si fa la notte o il fine settimana? Che numero si chiama per le emergenze?", "Perché, secondo molti, gli italiani vivono a lungo?"]),
          k.spagna("¿Cómo funciona la sanidad en España? ¿Hay médico de cabecera? ¿Qué haces cuando estás enfermo?"),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dal medico: Lei", hint: "El médico te habla de usted",
            text: ["El médico te hablará de Lei, con el imperativo formal (lo estudiarás en la unidad 21): «Si accomodi» (siéntese), «Apra la bocca», «Prenda», «Torni». De momento, reconócelos.", "Tú puedes decir: «Non mi sento bene», «Mi gira la testa» (estoy mareado), «Ho bisogno di un certificato», «Posso prenotare una visita?»."],
          },
          k.rispondi(["Quando sei stato o stata male l'ultima volta? Che cosa avevi?", "Che cosa fai quando hai il raffreddore?", "Sei allergico o allergica a qualcosa?", "Vai spesso dal medico?", "Che cosa fai per stare bene?", "Hai mai avuto un incidente? Che cosa ti sei fatto?"]),
          { kind: "speak", title: "Dai un consiglio", hint: "Da dos consejos con el imperativo (uno positivo y uno negativo) a cada persona. Ejemplo: Ho mal di testa. → Prendi un'aspirina e non guardare il computer.", items: ["Ho mal di schiena.", "Non riesco a dormire.", "Ho il raffreddore e domani ho un esame.", "Mio fratello mangia sempre fast food.", "Siamo stanchissimi dopo il lavoro. (a voi)", "Ho mal di denti."] },
          {
            kind: "roleplay", title: "Dalla dottoressa", hint: "Vas al médico porque no te encuentras bien. La IA hace de médica y te hará preguntas. Usa «Lei».",
            steps: ["Saluda y explica qué te duele y desde cuándo.", "Responde a sus preguntas (fiebre, alergias, si fumas…).", "Pregunta qué tienes que tomar y cuántas veces al día.", "Pide un justificante para el trabajo.", "Da las gracias y despídete."],
          },
          {
            kind: "roleplay", title: "Il coinquilino malato", hint: "Tu compañero de piso está enfermo pero quiere salir a una fiesta. La IA hace del compañero. Es informal.",
            steps: ["Pregúntale qué le pasa.", "Dale consejos con el imperativo.", "Él quiere ir a la fiesta: convéncele de que no vaya (non uscire…).", "Ofrécete a ir a la farmacia.", "Pregúntale qué necesita."],
          },
          { kind: "speak", title: "Stare bene", hint: "Habla un minuto: ¿qué haces para cuidarte? Da también tres consejos de salud a un amigo con el imperativo.", items: ["Per stare bene io…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Me duelen los pies.", "Tengo fiebre desde ayer.", "¡No salgas, hace frío!", "Bebed mucha agua.", "¿Te duele la cabeza?", "Necesito una receta para el antibiótico.", "¡Descansa y no te preocupes!", "A mi madre le duele la espalda."]),
          { kind: "write", title: "Un messaggio a un amico malato", hint: "Un amigo italiano está con gripe. Escríbele un mensaje (8–10 frases): pregúntale cómo está, dale consejos con el imperativo (positivos y negativos) y ofrécele ayuda.", rows: 10, items: ["Ciao! Ho saputo che stai male…"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: il corpo", ["le ginocchia", "le braccia", "le dita", "lo stomaco", "le orecchie", "la schiena"], "Escucha y escribe."),
          k.dettato("Dettato: frasi", ["Mi fanno male i denti.", "Riposati e non uscire!", "Ho la febbre da ieri.", "Prendete le medicine.", "Non ti preoccupare!"]),
          k.media([
            { type: "Serie", title: "Doc – Nelle tue mani", where: "RaiPlay", why: "Serie médica italiana muy vista: un médico pierde la memoria de 12 años. Vocabulario de hospital, síntomas y consejos." },
            { type: "Película", title: "Il medico della mutua (1968)", where: "Busca dónde verla en JustWatch", why: "Clásico con Alberto Sordi sobre un médico de cabecera muy ambicioso. Comedia sobre la sanidad italiana de la época." },
            { type: "YouTube", title: "Easy Italian", where: "YouTube", why: "Busca el episodio sobre ir al médico o la farmacia: gente real que cuenta sus remedios caseros." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Cuenta un caso de la serie: qué le pasaba al paciente y qué le dijo el médico.", items: ["Il paziente aveva…"] },
        ],
      },
    ],

    exam: k.exam(19, {
      parole: ["la gola", "la schiena", "il ginocchio", "le dita", "la tosse", "il raffreddore", "la ricetta", "lo sciroppo", "la farmacia di turno", "mi gira la testa"],
      contrario: ["la fiebre", "la espalda", "los brazos", "las orejas", "la pastilla", "la gripe"],
      verbiHint: "Completa: imperativo con tu, imperativo negativo con tu e imperativo con voi.",
      verbiCols: ["tu", "tu (negativo)", "voi"],
      verbi: [["fare", "", "", ""], ["dire", "", "", ""], ["alzarsi", "", "", ""], ["finire", "", "", ""]],
      completaHint: "Completa con fa / fanno, un pronombre o el imperativo del verbo entre paréntesis.",
      completa: ["Mi ___ male le gambe.", "A Giulia ___ male la testa.", "(a lui) ___ fa male il ginocchio.", "Hai la febbre? ___ (stare) a letto!", "Non ___ (bere) alcol con l'antibiotico!", "Ragazzi, ___ (riposarsi) un po'!", "___ (avere) pazienza, guarirai presto.", "Ho la tosse ___ una settimana."],
      trasformaHint: "Las tres primeras, a imperativo negativo. Las tres últimas, del presente al imperativo con tu.",
      trasforma: ["Mangia il dolce!", "Uscite stasera!", "Alzati presto!", "Vai dal medico.", "Fai sport.", "Dici la verità."],
      leggi: {
        text: [
          "Consigli per il raffreddore: non andare al lavoro i primi due giorni, così non contagi i colleghi. Bevi molta acqua, tè caldo con miele e spremute d'arancia.",
          "Riposati e dormi almeno otto ore. Non prendere antibiotici senza ricetta: contro il raffreddore non servono.",
          "Se hai la febbre alta per più di tre giorni, o se ti fa male il petto, chiama il medico di base.",
        ],
        questions: ["Perché non bisogna andare al lavoro i primi giorni?", "Che cosa bisogna bere?", "Perché non bisogna prendere antibiotici?", "Quando bisogna chiamare il medico?"],
      },
      ascolta: {
        script: [
          { who: "Mamma", text: "Luca, perché sei ancora a letto? Sono le otto!" },
          { who: "Luca", text: "Mamma, non mi sento bene. Mi fa male la pancia e mi gira la testa." },
          { who: "Mamma", text: "Fammi sentire… sei caldo. Hai la febbre! Resta a letto, chiamo la scuola." },
          { who: "Luca", text: "Ma oggi c'è la gita al museo!" },
          { who: "Mamma", text: "Niente gita. Bevi il tè e dormi. Più tardi chiamo il pediatra." },
        ],
        questions: ["Che cosa ha Luca?", "Che cosa scopre la mamma?", "Perché Luca è triste?", "Che cosa deve fare Luca? E la mamma?"],
      },
      parla: ["Spiega al medico che cosa ti fa male e da quando.", "Dai tre consigli a un amico che non dorme bene.", "Racconta l'ultima volta che sei stato male.", "In farmacia: chiedi qualcosa per il mal di gola."],
      roleHint: "Usa «Lei».",
      role: ["Llamas al médico para pedir cita urgente: explica los síntomas.", "Te dicen que no hay hueco hoy: pregunta qué puedes hacer.", "Pregunta dónde está la farmacia de guardia."],
      dettato: ["Mi fa male il ginocchio.", "Non uscire senza giacca!", "Ho mal di gola.", "Bevete molta acqua.", "Da quanto tempo ha la febbre?", "Sii paziente."],
      traduci: ["Me duelen las manos.", "¡No comas tanto chocolate!", "¡Vete a la cama!", "¿Desde cuándo tienes tos?", "A ella le duele la garganta.", "¡Niños, lavaos los dientes!"],
      scrivi: { hint: "Escribe (60–80 palabras) unas instrucciones para tu compañero de piso, que va a cuidar a tu perro enfermo una semana: qué tiene que hacer y qué no (imperativo).", start: "Ciao! Ecco che cosa devi fare con Toby…" },
    }),
  };
})();
