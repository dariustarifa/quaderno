// Unità 68 · Scienza — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[68] = {
    n: 68,
    level: "B2",
    title: "Scienza",
    goal: "Parlare di scienza e di scoperte esprimendo contrasti e concessioni (benché, sebbene, nonostante, per quanto, anche se, pur + gerundio).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di scienza, ricerca e scoperte, e di scienziati italiani che hanno superato grandi ostacoli.",
              "Grammatica: le frasi concessive, che esprimono un ostacolo che non impedisce un fatto. Con il congiuntivo: benché, sebbene, nonostante, malgrado, per quanto. Con l'indicativo: anche se. Con il gerundio: pur.",
              "Imparerai anche le forme «qualunque / chiunque / dovunque + congiuntivo» e «per quanto + aggettivo».",
            ],
          },
          {
            kind: "intro", title: "Nonostante tutto", hint: "Un'anticipazione",
            examples: [
              { it: "Benché le fosse vietato lavorare, continuò le sue ricerche.", es: "benché + congiuntivo" },
              { it: "Anche se l'esperimento è fallito, abbiamo imparato molto.", es: "anche se + indicativo" },
              { it: "Pur avendo pochi fondi, il laboratorio ottiene ottimi risultati.", es: "pur + gerundio" },
            ],
            text: ["Tutte queste frasi dicono: c'è un ostacolo, ma il fatto succede lo stesso."],
          },
          { kind: "speak", title: "Scienza e te", hint: "Prima di cominciare: quale scoperta scientifica ti sembra la più importante della storia? Perché?", items: ["Secondo me la scoperta più importante…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della scienza", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la ricerca", "il ricercatore", "l'ipotesi", "l'esperimento", "il laboratorio",
              "la scoperta", "l'invenzione", "il risultato", "la verifica", "la pubblicazione scientifica",
              "il finanziamento", "la borsa di ricerca", "la fuga dei cervelli", "il metodo scientifico", "la teoria",
              "dimostrare", "confutare", "osservare", "brevettare", "il premio Nobel",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["scoprire → (sostantivo)", "inventare → (chi inventa)", "dimostrare → (sostantivo)", "osservare → (sostantivo)", "verificare → (sostantivo)", "scienza → (aggettivo)", "ricercare → (chi ricerca)", "sperimentare → (aggettivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione.", items: ["formulare un'ipotesi", "fare un esperimento", "ottenere un risultato", "pubblicare una ricerca", "vincere il premio Nobel", "dimostrare una teoria", "la fuga dei cervelli", "ricevere un finanziamento"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Il contrasto nella voce", hint: "Intonazione concessiva",
            text: [
              "Nelle frasi concessive la prima parte ha un tono sospeso, che prepara il contrasto: «Benché fosse stanca ↗, | continuò a lavorare ↘».",
              "«Eppure» e «tuttavia» si pronunciano con una piccola pausa e un leggero accento.",
              "Parole difficili: ipotesi (i-pò-te-si), laboratorio (la-bo-ra-tò-rio), scientifico (scien-tì-fi-co), neurone (neu-ró-ne).",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Pausa e contrasto.", items: ["Benché fosse vietato, | continuò le ricerche.", "Anche se è difficile, | non mi arrendo.", "Pur avendo pochi soldi, | il laboratorio funziona.", "Per quanto sia giovane, | è già molto stimata.", "Eppure, | la Terra si muove."] },
          { kind: "shadow", title: "Parole", hint: "Ripeti piano, poi veloce.", items: ["ipotesi, analisi, sintesi", "laboratorio, osservatorio", "scientifico, specifico", "neurone, molecola, cellula"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Le concessive", hint: "Quale modo?",
            text: [
              "Con il congiuntivo: benché, sebbene, nonostante (che), malgrado (che), per quanto. «Benché sia tardi, resto». «Sebbene avesse paura, partì».",
              "Con l'indicativo: anche se. «Anche se è tardi, resto». (Anche se + congiuntivo imperfetto ha valore ipotetico: «Anche se fosse vero, non cambierebbe niente».)",
              "Con il gerundio: pur. «Pur essendo tardi, resto». Il soggetto deve essere lo stesso.",
              "«Nonostante» e «malgrado» si usano anche con un nome: «Nonostante la pioggia, uscimmo».",
            ],
            table: { head: ["connettivo", "modo"], rows: [["benché, sebbene", "congiuntivo"], ["nonostante, malgrado", "congiuntivo / nome"], ["per quanto", "congiuntivo"], ["anche se", "indicativo"], ["pur", "gerundio"]] },
          },
          k.table("Il connettivo giusto", [
            ["È stanca. Lavora ancora. (benché)", "Benché sia stanca, lavora ancora."],
            ["Era tardi. Restammo. (anche se)", ""],
            ["Ha pochi fondi. Il progetto va avanti. (nonostante)", ""],
            ["Conosco la teoria. Non la capisco. (pur)", ""],
            ["Pioveva. Uscirono. (malgrado + nome)", ""],
            ["È difficile. Ci proverò. (per quanto)", ""],
          ], "Unisci le due frasi con il connettivo indicato.", ["frase unica"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo tra parentesi nel modo e nel tempo giusti.",
            items: [
              "Benché ___ (essere) giovane, la ricercatrice dirige già un laboratorio.", "Anche se l'esperimento ___ (fallire), i dati sono utili.", "Sebbene ___ (avere) pochi strumenti, Galileo osservò le lune di Giove.", "Pur ___ (sapere) che era pericoloso, Marie Curie continuò a studiare il radio.", "Nonostante ___ (piovere), siamo andati all'osservatorio.", "Per quanto ___ (sembrare) strano, la teoria era corretta.", "Malgrado i medici ___ (consigliare) riposo, tornò al lavoro.", "Anche se ___ (lui, avere) ragione, nessuno lo ascoltò.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Qualunque, chiunque, dovunque", hint: "Concessive indefinite",
            text: [
              "«Qualunque / qualsiasi cosa + congiuntivo»: «Qualunque cosa succeda, chiamami».",
              "«Chiunque + congiuntivo»: «Chiunque abbia fatto questa scoperta, merita il Nobel».",
              "«Dovunque / ovunque + congiuntivo»: «Dovunque tu vada, ti seguirò».",
              "«Comunque + congiuntivo»: «Comunque vada, sarà un successo».",
              "«Per quanto + aggettivo / avverbio + congiuntivo»: «Per quanto sia intelligente, non sa tutto».",
            ],
          },
          k.negativa(["Succede qualsiasi cosa: non preoccuparti. (qualunque cosa)", "Non importa chi ha scritto questo articolo: è un genio. (chiunque)", "Vai in qualsiasi posto: troverai ricercatori italiani. (dovunque)", "Non importa come andrà: sarà un'esperienza utile. (comunque)", "È molto bravo, ma non può fare tutto da solo. (per quanto)", "È famosa, ma è rimasta umile. (pur)"], "Riscrivi ogni frase con la struttura indicata.", "concessiva"),
          {
            kind: "intro", title: "Concessive e avversative", hint: "Ma, però, tuttavia, eppure",
            text: ["Lo stesso contrasto si può esprimere con due frasi principali e un connettivo avversativo: «È stanca, eppure lavora ancora» = Benché sia stanca, lavora ancora. «Tuttavia» e «eppure» sono più forti di «ma»."],
          },
          {
            kind: "fill", title: "Concessiva o avversativa?", hint: "Completa con benché, anche se, pur, eppure, tuttavia o nonostante.",
            items: ["___ fosse malato, Leopardi continuò a scrivere.", "Il vaccino è sicuro; ___ molti hanno paura.", "___ i rischi, gli astronauti partirono.", "___ essendo una scienziata famosa, insegnava ancora ai bambini.", "La teoria sembrava assurda, ___ era vera.", "___ non è un esperto, ha capito subito il problema."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Una giovane ricercatrice", "Intervista a Chiara, biologa italiana che lavora in un centro di ricerca all'estero.", [
            { who: "Giornalista", text: "Chiara, lei lavora a Heidelberg da cinque anni. Perché è partita?" },
            { who: "Chiara", text: "Benché amassi molto il mio paese, in Italia non c'erano posti stabili per i giovani ricercatori. Avevo solo contratti di un anno." },
            { who: "Giornalista", text: "E qui?" },
            { who: "Chiara", text: "Qui ho un laboratorio mio e un gruppo di sei persone. Anche se lavoro tantissimo, mi sento valorizzata." },
            { who: "Giornalista", text: "Pensa di tornare?" },
            { who: "Chiara", text: "Per quanto mi manchi l'Italia, per ora no. Ma qualunque cosa decida, continuerò a collaborare con le università italiane: la qualità della formazione, lì, è eccellente." },
          ], ["Dove lavora Chiara e da quanto tempo?", "Perché è partita dall'Italia?", "Com'è la sua situazione attuale?", "Pensa di tornare? Perché?", "Che cosa pensa della formazione italiana?", "Trova quattro concessive e indica il modo del verbo."]),
          k.listen("Il dibattito sul nucleare", "Due amici discutono di energia.", [
            { who: "Franco", text: "Secondo me bisognerebbe tornare al nucleare. Anche se fa paura, inquina pochissimo." },
            { who: "Elena", text: "Sì, ma pur essendo pulito, produce scorie che restano pericolose per migliaia di anni." },
            { who: "Franco", text: "Le tecnologie moderne sono più sicure, sebbene nessuna sia perfetta." },
            { who: "Elena", text: "Per quanto siano sicure, ci vogliono vent'anni per costruire una centrale. Nel frattempo, meglio investire nelle rinnovabili." },
          ], ["Che cosa propone Franco? Con quale argomento?", "Qual è l'obiezione di Elena?", "Che cosa risponde Franco?", "Qual è l'ultimo argomento di Elena?", "Con chi sei d'accordo? Usa almeno una concessiva."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Un laboratorio in camera da letto", [
            "Rita Levi-Montalcini nacque a Torino nel 1909 in una famiglia ebrea. Sebbene il padre pensasse che una donna non dovesse studiare, riuscì a iscriversi a medicina e si laureò con il massimo dei voti nel 1936.",
            "Due anni dopo, le leggi razziali fasciste vietarono agli ebrei di lavorare nelle università. Benché le fosse proibito fare ricerca, Rita non si arrese: allestì un piccolo laboratorio nella sua camera da letto e continuò a studiare lo sviluppo del sistema nervoso negli embrioni di pollo.",
            "Nonostante la guerra e i bombardamenti, che la costrinsero a spostarsi più volte, non smise mai di lavorare. Dopo la guerra fu invitata negli Stati Uniti, a Saint Louis, dove sarebbe rimasta per circa trent'anni.",
            "Lì, insieme al biochimico Stanley Cohen, scoprì il fattore di crescita nervoso (NGF), una proteina fondamentale per lo sviluppo delle cellule nervose. Per questa scoperta ricevettero il premio Nobel per la medicina nel 1986.",
            "Pur essendo diventata famosa in tutto il mondo, continuò a lavorare fino a tarda età. Nel 2001 fu nominata senatrice a vita. Morì a Roma nel 2012, a 103 anni. Diceva che il corpo può invecchiare, ma il cervello, se lo si usa, resta giovane.",
          ], ["Quale ostacolo incontrò da giovane in famiglia?", "Che cosa le vietarono le leggi razziali?", "Come reagì?", "Che cosa scoprì? Con chi?", "Quali riconoscimenti ricevette?", "Trova nel testo tutte le concessive e trasforma due di esse con «anche se»."]),
          k.spagna("Scegli uno scienziato o una scienziata del tuo paese che ha superato ostacoli importanti. Racconta la sua storia con almeno cinque concessive diverse."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Parlare di scienza con prudenza", hint: "Certezze e dubbi",
            text: ["«Gli studi dimostrano che…», «Secondo la comunità scientifica…», «Non ci sono prove che + congiuntivo», «È ancora presto per dire se…», «I dati suggeriscono che…», «Benché alcuni sostengano che…, la maggior parte degli esperti…»."],
          },
          k.rispondi(["La scienza ti interessava a scuola? Perché?", "Che cosa ne pensi della fuga dei cervelli?", "La ricerca dovrebbe essere finanziata dallo Stato o dai privati?", "Quale scoperta futura ti piacerebbe vedere?", "Ti fidi della scienza? Anche quando i risultati cambiano nel tempo?", "Conosci uno scienziato che ha lottato contro molti ostacoli?"]),
          { kind: "speak", title: "Nonostante tutto", hint: "Racconta tre cose che hai fatto nonostante un ostacolo. Usa ogni volta un connettivo diverso.", items: ["Benché…", "Anche se…", "Pur…"] },
          {
            kind: "roleplay", title: "La conferenza", hint: "Sei una ricercatrice che presenta i risultati di uno studio. L'IA è un giornalista scettico.",
            steps: ["Presenta brevemente la scoperta.", "Ammetti i limiti dello studio con una concessiva.", "Rispondi a una domanda difficile con prudenza.", "Distingui i fatti dimostrati dalle ipotesi.", "Concludi spiegando perché la ricerca è utile nonostante i limiti."],
          },
          {
            kind: "roleplay", title: "Il colloquio per la borsa", hint: "Chiedi una borsa di ricerca. L'IA è la commissione e ti fa notare i punti deboli del tuo profilo.",
            steps: ["Presenta il tuo progetto.", "Rispondi a una critica con «pur…».", "Rispondi a un'altra critica con «benché…».", "Spiega che cosa farai qualunque cosa succeda.", "Ringrazia e chiudi."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti della storia di Rita Levi-Montalcini (o di un altro scienziato) usando almeno quattro concessive.", items: ["Benché…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Era vietato. Continuò le ricerche. (benché)", "L'esperimento è fallito. Abbiamo imparato molto. (anche se)", "Ha pochi fondi. Il gruppo lavora bene. (pur)", "C'era la guerra. Non smise di studiare. (nonostante + nome)", "È difficilissimo. Lo capiremo. (per quanto)", "Non importa che cosa scoprirai: sarò orgoglioso di te. (qualunque cosa)", "È intelligente, eppure sbaglia spesso. (sebbene)", "Anche se fosse vero, non cambierebbe niente. (spiega il valore ipotetico)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Un ritratto di scienziato", hint: "Scrivi un ritratto (280–320 parole) di uno scienziato o di una scienziata (italiano o del tuo paese) per una rivista di divulgazione: ostacoli, scoperte, eredità. Usa almeno otto concessive diverse, di cui una con «qualunque / chiunque / dovunque».", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: connettivi", ["benché fosse vietato", "sebbene avesse paura", "pur essendo famosa", "nonostante la guerra", "per quanto sia difficile", "qualunque cosa succeda"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Benché le fosse proibito, continuò a lavorare.", "Anche se l'esperimento è fallito, i dati sono utili.", "Pur avendo pochi fondi, ottengono ottimi risultati.", "Non ci sono prove che sia pericoloso.", "Comunque vada, sarà un'esperienza utile."]),
          k.media([
            { type: "Podcast", title: "Ci vuole una scienza (Il Post)", where: "ilpost.it o app di podcast", why: "Divulgazione scientifica settimanale in italiano chiaro: ascolta come i conduttori distinguono fatti e ipotesi." },
            { type: "TV", title: "Superquark (Rai)", where: "raiplay.it", why: "Il programma storico di divulgazione scientifica della televisione italiana: puntate su natura, corpo umano e spazio." },
            { type: "Film", title: "Rita Levi-Montalcini (Rai, 2024)", where: "raiplay.it", why: "Film televisivo sulla scienziata del testo di lettura: rivedi la sua storia e le sue scelte." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi una puntata o un episodio: quale scoperta è stata raccontata e quali ostacoli hanno incontrato gli scienziati?", items: ["La puntata parlava di…"] },
        ],
      },
    ],

    exam: k.exam(68, {
      parole: ["l'ipotesi", "l'esperimento", "la scoperta", "il ricercatore", "il finanziamento", "la borsa di ricerca", "dimostrare", "confutare", "brevettare", "il metodo scientifico"],
      contrario: ["scoprire → sostantivo", "inventare → chi inventa", "dimostrare → sostantivo", "confermare → contrario", "successo → contrario", "teoria → contrario (pratica)"],
      verbiHint: "Unisci le frasi con il connettivo indicato.",
      verbiCols: ["frase unica"],
      verbi: [["È stanco. Lavora. (benché)", ""], ["Piove. Esco. (anche se)", ""], ["È ricco. Vive semplicemente. (pur)", ""], ["C'era il traffico. Arrivammo in tempo. (nonostante + nome)", ""]],
      completaHint: "Coniuga il verbo nel modo e nel tempo giusti.",
      completa: ["Benché ___ (essere) tardi, continuarono l'esperimento.", "Anche se ___ (lui, studiare) molto, non ha superato l'esame.", "Pur ___ (avere) pochi mezzi, fecero una grande scoperta.", "Sebbene il risultato ___ (sembrare) strano, era corretto.", "Per quanto ___ (essere) brava, ha bisogno di aiuto.", "Qualunque cosa ___ (tu, decidere), ti sosterrò.", "Chiunque ___ (fare) questa scoperta, merita un premio.", "Nonostante ___ (loro, avere) ragione, nessuno li ascoltò."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["È malata, ma va al lavoro. (benché)", "Benché sia giovane, è molto esperta. (pur)", "Anche se fa freddo, usciamo. (nonostante)", "Non importa dove andrai: ti troverò. (dovunque)", "È intelligente, ma non sa tutto. (per quanto)", "Malgrado avesse paura, partì. (anche se)"],
      leggi: {
        text: [
          "Nel 2014 Samantha Cristoforetti diventò la prima donna italiana nello spazio. Benché il viaggio fosse lungo e faticoso, durante la missione condivise ogni giorno foto e messaggi con milioni di persone sui social.",
          "Rimase in orbita per quasi duecento giorni, un record per una donna europea a quel tempo. Pur essendo impegnatissima con gli esperimenti scientifici, trovò il tempo per rispondere alle domande degli studenti.",
          "Anche se oggi è famosa in tutto il mondo, dice di sentirsi soprattutto una ricercatrice e di voler ispirare le ragazze a studiare materie scientifiche.",
        ],
        questions: ["Quale primato ottenne Samantha Cristoforetti nel 2014?", "Che cosa fece durante la missione, nonostante la fatica?", "Quanto tempo rimase in orbita?", "Come si definisce oggi? Che cosa vuole fare?"],
      },
      ascolta: {
        script: [
          { who: "Professore", text: "Galileo, benché sapesse di rischiare molto, pubblicò le sue idee sul movimento della Terra." },
          { who: "Studente", text: "E che cosa successe?" },
          { who: "Professore", text: "Nel 1633 fu processato e costretto a rinnegarle. Pur avendo accettato la condanna, continuò a studiare fino alla morte." },
          { who: "Studente", text: "Anche se l'avevano condannato, aveva ragione lui!" },
        ],
        questions: ["Che cosa fece Galileo nonostante il rischio?", "Che cosa successe nel 1633?", "Che cosa fece dopo la condanna?", "Che cosa osserva lo studente alla fine?"],
      },
      parla: ["Racconta la storia di uno scienziato che ha superato ostacoli.", "Racconta una cosa che hai fatto nonostante un grande ostacolo.", "La ricerca va finanziata dallo Stato? Argomenta con almeno due concessive.", "Che cosa pensi della fuga dei cervelli?"],
      role: ["L'IA è un giornalista scettico sulla tua ricerca.", "Ammetti i limiti con almeno tre concessive diverse.", "Difendi l'utilità della ricerca."],
      dettato: ["benché fosse vietato", "pur essendo famosa", "nonostante la guerra", "qualunque cosa succeda", "per quanto sia difficile", "il premio Nobel"],
      traduci: ["Era malato. Scrisse il libro. (benché)", "Abbiamo poco tempo. Finiremo il progetto. (anche se)", "È un esperto. Ha sbagliato. (pur)", "Faceva caldo. Corsero la maratona. (nonostante + nome)", "Non importa chi arriverà: aprigli la porta. (chiunque)", "È difficile, ma lo imparerò. (per quanto)"],
      scrivi: { hint: "Scrivi (180–220 parole) di un tuo progetto o sogno che porti avanti nonostante gli ostacoli. Usa almeno sei concessive diverse.", start: "Benché molti mi dicano che…" },
    }),
  };
})();
