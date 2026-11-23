// Unità 58 · Rimpianti — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[58] = {
    n: 58,
    level: "B2",
    title: "Rimpianti",
    goal: "Parlare di scelte, occasioni perse e rimpianti con il periodo ipotetico dell'irrealtà nel passato (se avessi…, avrei…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a parlare di ciò che non è successo: scelte diverse, occasioni perse, strade non prese. È il terreno dei rimpianti e dei rimorsi.",
              "Grammatica: il periodo ipotetico dell'irrealtà nel passato: «Se avessi studiato medicina, avrei fatto il medico». Vedrai anche la versione colloquiale con il doppio imperfetto («Se lo sapevo, non venivo») e quando si può usare.",
              "Lessico: rimpianto e rimorso, pentirsi, tornare indietro, cogliere o perdere un'occasione.",
            ],
          },
          {
            kind: "intro", title: "Rimpianto o rimorso?", hint: "Un'anticipazione",
            text: ["Il rimpianto è per ciò che non hai fatto: «Rimpiango di non aver imparato a suonare». Il rimorso è per ciò che hai fatto: «Ho il rimorso di averle mentito»."],
            examples: [
              { it: "Se fossi partito, avrei conosciuto un altro mondo.", es: "irrealtà nel passato" },
              { it: "Se me l'avessi detto, ti avrei aiutato.", es: "rimprovero gentile" },
              { it: "Se lo sapevo, non venivo.", es: "versione colloquiale" },
            ],
          },
          { kind: "speak", title: "Tornare indietro", hint: "Prima di cominciare: se potessi tornare indietro di dieci anni, cambieresti qualcosa? Che cosa?", items: ["Se potessi tornare indietro…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Scelte e rimpianti", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il rimpianto", "il rimorso", "pentirsi", "rimpiangere", "cogliere l'occasione",
              "perdere il treno (in senso figurato)", "il bivio", "la svolta", "col senno di poi", "tornare sui propri passi",
              "mordersi le mani", "non avere rimpianti", "la scelta di vita", "rinunciare a", "osare",
              "il senso di colpa", "rimediare", "chiedere perdono", "voltare pagina", "il destino",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["pentirsi → (sostantivo)", "rimpiangere → (sostantivo)", "rinunciare → (sostantivo)", "scegliere → (sostantivo)", "colpa → (aggettivo)", "rimediare → (sostantivo)", "osare → (aggettivo: chi osa)", "perdonare → (sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase personale con ogni espressione. Dilla ad alta voce e scrivila.", items: ["col senno di poi", "cogliere l'occasione", "mordersi le mani", "trovarsi a un bivio", "voltare pagina", "non avere rimpianti", "pentirsi di", "rinunciare a"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Frasi lunghe, respiro corto", hint: "Ritmo del periodo ipotetico",
            text: [
              "Il periodo ipotetico dell'irrealtà è lungo: «Se avessi saputo che…, avrei…». Si fa una pausa dopo la protasi (la parte con «se»), con la voce che resta sospesa.",
              "Nel rimpianto, il tono scende ed è più lento: «Se solo l'avessi ascoltata…».",
              "Attenzione alle forme contratte: «se l'avessi saputo», «te l'avrei detto», «ce l'avrei fatta».",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Pausa dopo la parte con «se».", items: ["Se l'avessi saputo, | te l'avrei detto.", "Se fossimo partiti prima, | non avremmo perso il treno.", "Se solo l'avessi ascoltata…", "Se non avesse piovuto, | saremmo andati al mare.", "Col senno di poi, | avrei scelto diversamente."] },
          { kind: "shadow", title: "Forme contratte", hint: "Ripeti velocemente.", items: ["se l'avessi saputo", "te l'avrei detto", "ce l'avrei fatta", "me ne sarei andato"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il periodo ipotetico dell'irrealtà", hint: "Se + congiuntivo trapassato → condizionale passato",
            text: [
              "Si usa per ipotesi che riguardano il passato e che non si sono realizzate: «Se avessi preso quel treno, avrei conosciuto Marta» (ma non l'ho preso).",
              "Protasi (condizione): se + congiuntivo trapassato. Apodosi (conseguenza): condizionale passato.",
              "L'ordine si può invertire: «Avrei conosciuto Marta, se avessi preso quel treno».",
            ],
            table: { head: ["se…", "conseguenza"], rows: [["se avessi studiato", "avrei passato l'esame"], ["se fossi partito", "sarei arrivato in tempo"], ["se me l'avessi detto", "ti avrei aiutato"], ["se non avesse piovuto", "saremmo usciti"]] },
          },
          k.table("Condizionale passato", [
            ["(io) fare", "avrei fatto"],
            ["(tu) andare", ""],
            ["(lui) dire", ""],
            ["(noi) potere", ""],
            ["(voi) restare", ""],
            ["(loro) capire", ""],
          ], "Scrivi il condizionale passato.", ["forma"]),
          {
            kind: "fill", title: "Completa il periodo", hint: "Coniuga i verbi: congiuntivo trapassato o condizionale passato.",
            items: [
              "Se ___ (io, sapere) che eri in città, ti avrei chiamato.", "Se fossimo usciti prima, non ___ (perdere) il treno.", "Se Luca non ___ (accettare) quel lavoro, non si sarebbe trasferito a Torino.", "Non ___ (lei, sposarsi) con lui, se l'avesse conosciuto meglio.", "Se ___ (tu, studiare) di più, avresti superato l'esame.", "Se i miei genitori non ___ (emigrare), io sarei nato in Argentina.", "Se ci aveste avvisato, vi ___ (noi, aspettare).", "Che cosa ___ (tu, fare) al posto mio?",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il doppio imperfetto", hint: "Registro colloquiale",
            text: [
              "Nel parlato informale è molto diffuso il doppio imperfetto: «Se lo sapevo, non venivo» = «Se l'avessi saputo, non sarei venuto».",
              "È normale con amici e in famiglia, ma va evitato nello scritto formale, negli esami e nelle situazioni di lavoro.",
              "Si può anche mescolare: «Se me lo dicevi, ti avrei aiutato». Anche questo è colloquiale.",
            ],
          },
          k.negativa(["Se lo sapevo, non venivo.", "Se partivi prima, arrivavi in tempo.", "Se me lo chiedevi, te lo davo.", "Se non pioveva, andavamo al mare.", "Se studiavi, passavi l'esame.", "Se mi chiamavi, ti venivo a prendere."], "Trasforma ogni frase colloquiale nel registro formale (congiuntivo trapassato + condizionale passato).", "registro formale"),
          {
            kind: "intro", title: "Esprimere il rimpianto", hint: "Altre strutture",
            text: ["«Se solo + congiuntivo trapassato!»: «Se solo l'avessi ascoltata!». «Magari + congiuntivo trapassato!»: «Magari fossi rimasto!». «Avrei dovuto / potuto + infinito»: «Avrei dovuto dirglielo». «Rimpiango di non + infinito passato»: «Rimpiango di non aver viaggiato di più»."],
          },
          {
            kind: "fill", title: "Rimpianti", hint: "Completa con la forma giusta.",
            items: ["Se solo ___ (io, accettare) quell'offerta!", "Magari ___ (noi, rimanere) a casa!", "Avrei ___ (dovere) chiamarti prima.", "Rimpiango di non ___ (imparare) a suonare il piano.", "Mi pento di ___ (dire) quelle cose.", "Se solo me ne ___ (accorgersi) prima!"],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il bivio", "Due amiche di cinquant'anni ricordano le loro scelte.", [
            { who: "Elisa", text: "Sai che a vent'anni avevo vinto una borsa di studio per New York? E non ci sono andata." },
            { who: "Marta", text: "Davvero? E perché?" },
            { who: "Elisa", text: "Mi ero appena fidanzata con Paolo. Pensavo che, se fossi partita, l'avrei perso." },
            { who: "Marta", text: "E te ne sei pentita?" },
            { who: "Elisa", text: "A volte sì. Se fossi andata, forse avrei fatto carriera all'estero. Però non avrei avuto i miei figli, almeno non questi. Quindi no, non ho rimpianti… o quasi." },
            { who: "Marta", text: "Io invece ho un rimorso: non sono stata vicina a mia madre quando stava male. Se l'avessi capito prima, sarei tornata a casa." },
          ], ["Che cosa aveva vinto Elisa a vent'anni?", "Perché non è partita?", "Che cosa sarebbe successo, secondo lei, se fosse partita?", "Ha rimpianti? Spiega la sua risposta.", "Qual è il rimorso di Marta?", "Che differenza c'è tra il rimpianto di Elisa e il rimorso di Marta?"]),
          k.listen("Il treno perso", "Un dialogo tra due colleghi, molto informale.", [
            { who: "Simone", text: "Ma dov'eri? La riunione è iniziata alle nove!" },
            { who: "Giacomo", text: "Lascia stare: ho perso il treno per due minuti. Se uscivo cinque minuti prima, ce la facevo." },
            { who: "Simone", text: "Il capo era furioso. Se ci avvisavi, almeno ti giustificavo." },
            { who: "Giacomo", text: "Avevo il telefono scarico. Giornata da dimenticare." },
          ], ["Perché Giacomo è arrivato in ritardo?", "Che cosa sarebbe successo se fosse uscito prima?", "Che cosa avrebbe fatto Simone se Giacomo l'avesse avvisato?", "Perché Giacomo non ha avvisato?", "Riscrivi due frasi del dialogo nel registro formale."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I rimpianti di chi se ne va", [
            "Per alcuni anni Bronnie Ware, un'infermiera australiana, ha assistito persone negli ultimi mesi della loro vita. Nel 2011 ha raccolto i loro racconti in un libro che è stato tradotto in moltissime lingue.",
            "Secondo Ware, i rimpianti dei suoi pazienti si somigliavano in modo sorprendente. Molti dicevano che avrebbero voluto avere il coraggio di vivere secondo i propri desideri, e non secondo le aspettative degli altri.",
            "Quasi tutti gli uomini rimpiangevano di aver lavorato troppo e di non aver visto crescere i figli. Altri si pentivano di non aver espresso i propri sentimenti, o di aver perso di vista vecchi amici.",
            "L'ultimo rimpianto era forse il più sorprendente: molti si rendevano conto, solo alla fine, che la felicità era stata in parte una scelta, e che se si fossero concessi di essere più leggeri, avrebbero vissuto meglio.",
            "Il libro non è uno studio scientifico, ma ha toccato milioni di lettori. Forse perché ci ricorda che molti rimpianti si possono ancora evitare.",
          ], ["Chi è Bronnie Ware e che cosa ha fatto?", "Qual era il rimpianto più comune?", "Che cosa rimpiangevano soprattutto gli uomini?", "Quali altri rimpianti sono citati?", "Spiega con parole tue l'ultimo rimpianto.", "Perché, secondo il testo, il libro ha avuto tanto successo?"]),
          k.spagna("Quale di questi rimpianti ti sembra più vicino alla tua cultura? Che cosa faresti oggi per non averlo domani? Usa almeno quattro periodi ipotetici."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Consolare e rassicurare", hint: "Quando qualcuno ha un rimpianto",
            text: ["«Col senno di poi è facile», «Non potevi saperlo», «Hai fatto quello che potevi», «Non tutto il male viene per nuocere», «Non è mai troppo tardi», «Pensa a ciò che hai guadagnato»."],
          },
          k.rispondi(["Hai un rimpianto che ti porti dietro da anni?", "Che cosa avresti fatto diversamente a scuola?", "Se non avessi iniziato a studiare l'italiano, che cosa avresti fatto con quel tempo?", "C'è un'occasione che hai colto e di cui sei felice?", "È meglio avere rimpianti o rimorsi? Perché?", "Che cosa sarebbe successo se i tuoi genitori non si fossero conosciuti?"]),
          { kind: "speak", title: "Catena di ipotesi", hint: "Parti da un fatto reale della tua vita e costruisci una catena: «Se non avessi…, non avrei…; e se non avessi…, non avrei…». Almeno cinque anelli.", items: ["Se non avessi…"] },
          {
            kind: "roleplay", title: "L'amico pentito", hint: "Un amico (l'IA) ha rifiutato un lavoro all'estero e ora se ne pente. Ascoltalo e aiutalo.",
            steps: ["Chiedigli che cosa è successo.", "Fagli immaginare che cosa sarebbe successo se avesse accettato.", "Consolalo con almeno due formule.", "Aiutalo a vedere che cosa ha guadagnato restando.", "Proponi che cosa può fare adesso."],
          },
          {
            kind: "roleplay", title: "Il chiarimento", hint: "Un collega (l'IA) ti rimprovera perché un progetto è fallito. Ammetti le tue responsabilità, ma anche le sue.",
            steps: ["Ammetti un tuo errore con «avrei dovuto».", "Spiega che cosa sarebbe cambiato se ti avessero informato.", "Fagli notare un suo errore, con tatto.", "Usa una volta il registro colloquiale e una volta quello formale.", "Proponi come rimediare."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti di un momento in cui ti sei trovato a un bivio. Che cosa hai scelto e che cosa sarebbe successo con l'altra scelta?", items: ["Mi sono trovato a un bivio quando…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non ho studiato e non ho passato l'esame. (se + periodo ipotetico dell'irrealtà)", "Non mi hai detto niente, quindi non ti ho aiutato. (se)", "È piovuto e non siamo usciti. (se non)", "Se lo sapevo, non venivo. (registro formale)", "Peccato che non l'abbia ascoltata! (se solo)", "Non ho viaggiato abbastanza e mi dispiace. (rimpiango di non)", "Era giusto chiamarla, ma non l'ho fatto. (avrei dovuto)", "Ho mentito e me ne pento. (mi pento di)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Lettera a te stesso", hint: "Scrivi una lettera (280–320 parole) alla persona che eri dieci anni fa. Raccontale che cosa è successo, che cosa avresti fatto diversamente e perché, e che cosa invece rifaresti. Usa almeno sei periodi ipotetici dell'irrealtà, un «se solo» e un «avrei dovuto».", rows: 20, items: ["Caro me di dieci anni fa,"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["se l'avessi saputo", "te l'avrei detto", "se fossimo partiti", "avrei dovuto", "col senno di poi", "non avere rimpianti"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Se solo l'avessi ascoltata!", "Se non avesse piovuto, saremmo usciti.", "Rimpiango di non aver viaggiato.", "Non potevi saperlo.", "Non è mai troppo tardi."]),
          k.media([
            { type: "Film", title: "C'eravamo tanto amati (Ettore Scola, 1974)", where: "Cerca dove vederlo su JustWatch", why: "Tre amici, trent'anni di storia italiana e molte strade non prese: un film sui rimpianti." },
            { type: "Libro", title: "Novecento (Alessandro Baricco, 1994)", where: "Libreria o biblioteca", why: "Un breve monologo sul pianista che non scese mai dalla nave. Lingua ritmica, ottima da leggere ad alta voce." },
            { type: "Film", title: "Le conseguenze dell'amore (Paolo Sorrentino, 2004)", where: "Cerca dove vederlo su JustWatch", why: "Un uomo solo in un hotel svizzero e una scelta che cambia tutto. Ascolta i monologhi interiori." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Che cosa avrebbe potuto fare diversamente un personaggio del film o del libro? Che cosa sarebbe successo?", items: ["Se il protagonista avesse…"] },
        ],
      },
    ],

    exam: k.exam(58, {
      parole: ["il rimpianto", "il rimorso", "pentirsi", "cogliere l'occasione", "il bivio", "col senno di poi", "mordersi le mani", "voltare pagina", "rimediare", "osare"],
      contrario: ["pentirsi → sostantivo", "rimpiangere → sostantivo", "rinunciare → sostantivo", "colpa → aggettivo", "cogliere un'occasione → contrario", "perdonare → sostantivo"],
      verbiHint: "Scrivi il condizionale passato.",
      verbiCols: ["forma"],
      verbi: [["(io) vedere", ""], ["(tu) venire", ""], ["(lei) volere", ""], ["(noi) arrivare", ""], ["(voi) scrivere", ""], ["(loro) trovare", ""]],
      completaHint: "Completa il periodo ipotetico con il tempo giusto.",
      completa: ["Se ___ (io, sapere), sarei venuto.", "Se fossi partita, ___ (tu, conoscere) un altro mondo.", "Se non ___ (piovere), saremmo andati al lago.", "Ti ___ (noi, aiutare), se ce l'avessi chiesto.", "Se solo ___ (io, ascoltare) mia madre!", "Rimpiango di non ___ (imparare) il tedesco.", "Avresti ___ (dovere) avvisarmi.", "Se ___ (loro, prendere) il treno, sarebbero arrivati in tempo."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Non ho risparmiato, quindi non ho comprato casa. (se)", "Se me lo dicevi, ti aiutavo. (registro formale)", "Peccato non averle parlato! (se solo)", "Era meglio partire prima, ma non l'abbiamo fatto. (avremmo dovuto)", "Non ho studiato musica e mi dispiace. (rimpiango di non)", "Ho urlato e ora mi dispiace. (mi pento di)"],
      leggi: {
        text: [
          "Nel 1962 un'importante casa discografica rifiutò di mettere sotto contratto un giovane gruppo di Liverpool: secondo i dirigenti, i gruppi con le chitarre erano ormai fuori moda.",
          "Quel gruppo erano i Beatles. Se la casa discografica avesse avuto più coraggio, avrebbe guadagnato milioni. Il dirigente che prese quella decisione è ricordato ancora oggi per questo errore.",
          "La storia è piena di occasioni perse simili. Ma, col senno di poi, è facile giudicare: nessuno può sapere in anticipo quale scelta si rivelerà giusta.",
        ],
        questions: ["Che cosa successe nel 1962?", "Perché i dirigenti rifiutarono il gruppo?", "Che cosa sarebbe successo se avessero avuto più coraggio?", "Qual è la riflessione finale del testo?"],
      },
      ascolta: {
        script: [
          { who: "Davide", text: "Ho visto che l'appartamento in centro è stato venduto." },
          { who: "Sara", text: "Lo so. Se l'avessimo comprato l'anno scorso, l'avremmo pagato molto meno." },
          { who: "Davide", text: "Sì, ma non avevamo i soldi. Avremmo dovuto chiedere un mutuo enorme." },
          { who: "Sara", text: "Hai ragione. Col senno di poi è facile. Voltiamo pagina e cerchiamo ancora." },
        ],
        questions: ["Che cosa è successo all'appartamento?", "Che cosa rimpiange Sara?", "Perché non l'hanno comprato?", "Come finisce la conversazione?"],
      },
      parla: ["Racconta un rimpianto e che cosa sarebbe successo se avessi scelto diversamente.", "Spiega la differenza tra rimpianto e rimorso con un esempio personale.", "Consola un amico che ha perso un'occasione.", "Che cosa sarebbe successo se non fossi nato nel tuo paese?"],
      role: ["L'IA è un amico che ha lasciato l'università e se ne pente.", "Fagli immaginare l'altra strada con il periodo ipotetico.", "Aiutalo a trovare una soluzione per il presente."],
      dettato: ["se l'avessi saputo", "avrei dovuto", "se solo fossi rimasto", "col senno di poi", "mi pento di", "voltare pagina"],
      traduci: ["Non ho studiato e sono stato bocciato. (se + irrealtà)", "Non sei venuto e non l'hai conosciuta. (se)", "Se lo sapevo, ti chiamavo. (registro formale)", "Peccato che non sia rimasto! (magari)", "Non ho imparato a nuotare e mi dispiace. (rimpiango di non)", "Era giusto scusarsi, ma non l'ho fatto. (avrei dovuto)"],
      scrivi: { hint: "Scrivi (180–220 parole) di una decisione importante della tua vita: che cosa hai scelto, che cosa sarebbe successo con l'altra scelta, se hai rimpianti e che cosa hai imparato.", start: "La decisione più importante della mia vita…" },
    }),
  };
})();
