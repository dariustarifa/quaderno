// Unità 59 · Se avessi saputo — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[59] = {
    n: 59,
    level: "B2",
    title: "Se avessi saputo",
    goal: "Collegare passato e presente nelle ipotesi con il periodo ipotetico misto (se avessi studiato, ora farei…; se fossi più coraggioso, l'avrei fatto).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Nell'unità precedente hai immaginato un passato diverso. Adesso colleghi quel passato al presente: «Se avessi studiato medicina, adesso farei il medico».",
              "Il periodo ipotetico misto ha due forme: condizione nel passato e conseguenza nel presente, oppure condizione sempre valida e conseguenza nel passato.",
              "Tema: le vite parallele e la storia alternativa (l'ucronia): che cosa sarebbe oggi l'Italia se la storia fosse andata diversamente?",
            ],
          },
          {
            kind: "intro", title: "Due direzioni", hint: "Un'anticipazione",
            text: ["Passato → presente: la condizione è passata, la conseguenza è attuale. Sempre → passato: la condizione è una caratteristica stabile, la conseguenza è un fatto passato."],
            examples: [
              { it: "Se fossi nato a Napoli, adesso parlerei napoletano.", es: "passato → presente" },
              { it: "Se avessi accettato quel lavoro, ora vivrei a Londra.", es: "passato → presente" },
              { it: "Se fossi più paziente, non avrei litigato con lui.", es: "sempre → passato" },
            ],
          },
          { kind: "speak", title: "Un'altra vita", hint: "Prima di cominciare: se avessi scelto un altro lavoro o un altro paese, come sarebbe la tua vita oggi?", items: ["Se avessi scelto…, oggi…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Ipotesi e storia alternativa", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "l'ucronia", "la vita parallela", "il caso", "la coincidenza", "l'effetto farfalla",
              "la conseguenza", "determinare", "influire su", "cambiare le carte in tavola", "il punto di svolta",
              "l'imprevisto", "andare diversamente", "per un pelo", "a un passo da", "il corso degli eventi",
              "ipotizzare", "immaginare", "supporre", "fantasticare", "il «e se…?»",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "parola", title: "Famiglie di parole",
            hint: "Scrivi la parola richiesta.",
            items: ["ipotizzare → (sostantivo)", "supporre → (sostantivo)", "conseguire → (sostantivo)", "influire → (sostantivo)", "determinare → (aggettivo: decisivo)", "immaginare → (aggettivo: non reale)", "caso → (aggettivo)", "prevedere → (contrario del sostantivo)"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni espressione. Dilla ad alta voce e scrivila.", items: ["per un pelo", "il punto di svolta", "l'effetto farfalla", "per caso", "cambiare le carte in tavola", "a un passo da", "andare diversamente", "influire su"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Avverbi di tempo in evidenza", hint: "Ora, adesso, oggi",
            text: [
              "Nel periodo ipotetico misto gli avverbi di tempo sono fondamentali per capire: «Se avessi studiato, ADESSO avrei un lavoro migliore». Dagli rilievo con la voce.",
              "«Se fossi in te» e «al posto tuo» si pronunciano con una piccola pausa dopo.",
              "Attenzione a «sarei» (sa-rèi) e «sarebbe» (sa-rèb-be): l'accento cade sulla penultima sillaba.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Dai rilievo agli avverbi di tempo.", items: ["Se avessi studiato, adesso avrei un lavoro migliore.", "Se fossi nato in Italia, oggi parlerei senza accento.", "Se fosse più attento, non avrebbe perso le chiavi.", "Se non avessimo perso quel treno, ora saremmo a Roma.", "Se fossi in te, | ci penserei."] },
          { kind: "shadow", title: "Coppie", hint: "Ripeti e senti la differenza.", items: ["sarei / sarei stato", "avrei / avrei avuto", "farebbe / avrebbe fatto", "vivremmo / avremmo vissuto"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il periodo ipotetico misto", hint: "Le due combinazioni",
            text: [
              "Passato → presente: se + congiuntivo trapassato → condizionale presente. «Se avessi risparmiato, adesso potrei comprare casa».",
              "Sempre → passato: se + congiuntivo imperfetto → condizionale passato. «Se fossi più organizzato, avrei finito in tempo» (sono sempre disorganizzato, e quindi non ho finito).",
              "Gli indicatori di tempo (adesso, oggi, ieri, l'anno scorso) aiutano a scegliere.",
            ],
            table: { head: ["condizione", "conseguenza"], rows: [["se avessi studiato (ieri)", "adesso saprei"], ["se fossi nato a Roma", "oggi sarei romano"], ["se fossi più attento (sempre)", "non avrei sbagliato"], ["se parlassi inglese (sempre)", "avrei avuto quel lavoro"]] },
          },
          k.table("Passato o presente?", [
            ["Se avessi dormito di più, oggi (essere) meno stanco.", "sarei"],
            ["Se fossi più coraggioso, (parlarle) ieri sera.", ""],
            ["Se avessimo comprato quella casa, adesso (avere) un giardino.", ""],
            ["Se lei non fosse così timida, (chiedere) aiuto.", ""],
            ["Se non avessi perso il passaporto, ora (essere) in vacanza.", ""],
            ["Se tu conoscessi meglio la città, non (perdersi).", ""],
          ], "Scrivi la forma giusta del verbo tra parentesi.", ["verbo"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo: guarda gli indicatori di tempo.",
            items: [
              "Se ___ (io, imparare) l'italiano da piccolo, adesso lo parlerei perfettamente.", "Se Marco fosse più puntuale, non ___ (perdere) il volo ieri.", "Se non ___ (noi, incontrarsi) quella sera, ora non saremmo sposati.", "Se ___ (tu, essere) meno testardo, avresti accettato il consiglio.", "Se avessi accettato quel lavoro, oggi ___ (vivere) a Milano.", "Se la città ___ (avere) più trasporti, non avremmo comprato la macchina.", "Se ieri non avesse nevicato, oggi le strade ___ (essere) libere.", "Se ___ (io, sapere) cucinare, avrei invitato tutti a cena.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Altri modi di esprimere l'ipotesi", hint: "Senza «se»",
            text: [
              "Gerundio: «Partendo prima, saremmo arrivati in tempo» = Se fossimo partiti prima…",
              "Participio o «con / senza»: «Senza il tuo aiuto, non ce l'avrei fatta». «Con un po' di fortuna, avremmo vinto».",
              "«Nel caso in cui / qualora» + congiuntivo (registro formale): «Qualora fosse necessario, La contatteremo».",
              "«Al posto tuo / se fossi in te» + condizionale: «Al posto tuo, avrei accettato».",
            ],
          },
          k.negativa(["Se non ci fosse stato il tuo aiuto, non ce l'avrei fatta. (senza)", "Se avessimo avuto un po' di fortuna, avremmo vinto. (con)", "Se fossimo partiti prima, saremmo arrivati in tempo. (gerundio)", "Se io fossi stato te, avrei accettato. (al posto tuo)", "Se fosse necessario, La chiameremo. (qualora)", "Se avessi saputo la verità, non ti avrei creduto. (sapendo)"], "Riscrivi ogni frase con la struttura indicata.", "ipotesi senza se"),
          {
            kind: "intro", title: "Ucronia: parlare di storia alternativa", hint: "Formule utili",
            text: ["«Se la storia fosse andata diversamente…», «Proviamo a immaginare che…», «Supponiamo che + congiuntivo», «In quel caso, oggi…», «Chissà come sarebbe…»."],
          },
          {
            kind: "fill", title: "Storia alternativa", hint: "Coniuga i verbi nel tempo giusto.",
            items: ["Se Colombo non ___ (partire) nel 1492, oggi in America forse non si parlerebbe spagnolo.", "Supponiamo che l'Italia non ___ (unificarsi) nel 1861.", "In quel caso, oggi ___ (esserci) diversi stati nella penisola.", "Se l'italiano non ___ (diventare) lingua nazionale, oggi parleremmo soprattutto dialetti.", "Chissà come ___ (essere) la musica senza l'opera italiana.", "Se internet non ___ (esistere), oggi lavoreremmo in modo molto diverso."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Due vite", "Due gemelli separati da una scelta raccontano la loro vita.", [
            { who: "Andrea", text: "A diciotto anni io e mio fratello Matteo abbiamo fatto scelte opposte: io sono rimasto a Bari, lui è andato a studiare a Bologna." },
            { who: "Matteo", text: "Se fossi rimasto anch'io, probabilmente oggi lavorerei nel negozio di nostro padre, come Andrea." },
            { who: "Andrea", text: "E io, se fossi partito, adesso forse non avrei tre figli e una casa vicino al mare." },
            { who: "Matteo", text: "Però, sinceramente, se non fossi così irrequieto, non sarei mai partito. È il mio carattere." },
            { who: "Andrea", text: "Infatti. Se io fossi stato come te, avrei venduto il negozio dieci anni fa!" },
          ], ["Quali scelte hanno fatto i gemelli a diciotto anni?", "Che cosa farebbe oggi Matteo se fosse rimasto?", "Che cosa non avrebbe Andrea se fosse partito?", "Perché Matteo è partito, secondo lui?", "Classifica ogni frase con «se»: passato → presente o sempre → passato?"]),
          k.listen("E se…?", "Due amici giocano a immaginare una storia alternativa.", [
            { who: "Luisa", text: "Giochiamo? Se Leonardo da Vinci fosse nato oggi, che cosa farebbe?" },
            { who: "Pietro", text: "Facile: lavorerebbe nella Silicon Valley e avrebbe già fondato tre aziende!" },
            { who: "Luisa", text: "E se il Rinascimento non fosse iniziato a Firenze?" },
            { who: "Pietro", text: "Allora forse oggi la capitale dell'arte sarebbe un'altra città… e noi non avremmo fatto la fila agli Uffizi l'estate scorsa!" },
          ], ["A che cosa giocano Luisa e Pietro?", "Che cosa farebbe oggi Leonardo secondo Pietro?", "Quale seconda ipotesi fa Luisa?", "Quale conseguenza personale immagina Pietro?", "Inventa un'altra domanda «E se…?» per continuare il gioco."]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Contro-passato prossimo", [
            "L'ucronia è un genere letterario che immagina come sarebbe il mondo se un evento storico fosse andato diversamente. In Italia uno degli esempi più noti è «Contro-passato prossimo» di Guido Morselli.",
            "Morselli, nato a Bologna nel 1912, scrisse molti romanzi, ma nessun editore volle pubblicarli mentre era in vita. Morì nel 1973 e solo dopo la sua morte i suoi libri furono pubblicati e scoperti dalla critica.",
            "Nel romanzo, scritto all'inizio degli anni Settanta, la Prima guerra mondiale ha un esito diverso: l'Austria-Ungheria vince grazie a un attacco a sorpresa attraverso le Alpi, e l'Europa prende una strada completamente diversa.",
            "Il libro non è solo un gioco intellettuale. Immaginando un passato alternativo, Morselli invita il lettore a chiedersi quanto il presente sia frutto del caso e quanto delle scelte degli uomini.",
            "Se i suoi romanzi fossero stati pubblicati quando li scriveva, forse oggi Morselli sarebbe considerato uno dei grandi scrittori del Novecento. È il destino ironico di uno scrittore che si interrogava proprio sulle strade non prese.",
          ], ["Che cos'è l'ucronia?", "Che cosa c'è di particolare nella vita di Morselli?", "Qual è l'ipotesi storica del romanzo?", "Che cosa vuole far riflettere l'autore?", "Spiega l'ultima frase: perché il destino di Morselli è «ironico»?", "Trova nel testo un periodo ipotetico misto e spiegalo."]),
          k.spagna("Scegli un evento della storia del tuo paese e immagina che sia andato diversamente. Come sarebbe oggi il tuo paese? Usa almeno cinque periodi ipotetici misti."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Dare consigli con l'ipotesi", hint: "Al posto tuo…",
            text: ["«Se fossi in te, …», «Al posto tuo, …», «Io, nella tua situazione, …», «Se avessi la tua età, …», «Io avrei fatto così: …». Ricorda: con il condizionale passato il consiglio diventa un piccolo rimprovero."],
          },
          k.rispondi(["Se fossi nato in un altro paese, chi saresti oggi?", "Quale scelta del passato ha determinato di più la tua vita attuale?", "Se fossi più paziente, quali errori non avresti fatto?", "Che cosa faresti oggi se avessi imparato l'italiano da bambino?", "Credi più nel caso o nelle scelte?", "Quale evento storico avresti voluto cambiare? Come sarebbe il mondo oggi?"]),
          { kind: "speak", title: "Effetto farfalla", hint: "Racconta un piccolo episodio casuale che ha cambiato la tua vita. Che cosa sarebbe diverso oggi se non fosse successo?", items: ["Un giorno, per caso…"] },
          {
            kind: "roleplay", title: "Il consulente", hint: "Un amico (l'IA) ti racconta la sua situazione: lavoro che non gli piace, studi abbandonati. Dagli consigli.",
            steps: ["Fagli domande sul suo passato.", "Collega una sua scelta passata alla sua situazione attuale.", "Dai un consiglio con «se fossi in te».", "Fai un piccolo rimprovero con «al posto tuo, avrei…».", "Incoraggialo per il futuro."],
          },
          {
            kind: "roleplay", title: "Gioco dell'ucronia", hint: "Con l'IA, inventate una storia alternativa a turno. Ognuno aggiunge una conseguenza.",
            steps: ["Proponi un evento storico da cambiare.", "Di' quale sarebbe stata la prima conseguenza.", "Di' come sarebbe il mondo oggi.", "Rispondi alle obiezioni dell'IA.", "Concludete con una frase su caso e scelte."],
          },
          { kind: "speak", title: "Due minuti", hint: "Parla per due minuti: se avessi fatto un'altra scelta importante, come sarebbe la tua giornata tipo oggi? Descrivila dalla mattina alla sera.", items: ["Se avessi…, oggi mi sveglierei…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Non ho imparato a guidare, quindi oggi dipendo dagli altri. (se)", "Sono timido, quindi ieri non le ho parlato. (se non fossi)", "Non abbiamo prenotato, perciò adesso non troviamo posto. (se)", "È distratto: per questo ha perso il treno. (se fosse)", "Senza il tuo aiuto, non avrei finito. (se non ci fosse stato)", "Se fossi stato te, avrei rifiutato. (al posto tuo)", "Partendo prima, saremmo arrivati in tempo. (se)", "Se dovesse servire, chiamami. (qualora)"], "Riscrivi ogni frase con la struttura indicata."),
          { kind: "write", title: "Racconto ucronico", hint: "Scrivi un breve racconto (280–320 parole) in cui un evento storico o personale va diversamente. Descrivi il punto di svolta, le conseguenze e come sarebbe oggi la vita del protagonista. Usa almeno quattro periodi ipotetici misti, uno dell'irrealtà e due ipotesi senza «se».", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["se fossi nato a Roma", "adesso parlerei", "se fossi più paziente", "non avrei litigato", "al posto tuo", "qualora fosse necessario"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Se avessi studiato, adesso saprei rispondere.", "Se fosse più attento, non avrebbe sbagliato.", "Senza il tuo aiuto, non ce l'avrei fatta.", "Supponiamo che la storia sia andata diversamente.", "Chissà come sarebbe oggi."]),
          k.media([
            { type: "Film", title: "Non ci resta che piangere (Roberto Benigni e Massimo Troisi, 1984)", where: "Cerca dove vederlo su JustWatch", why: "Due amici finiscono nel 1492 e provano a cambiare la storia. Commedia di culto, con napoletano e toscano." },
            { type: "Libro", title: "Contro-passato prossimo (Guido Morselli)", where: "Libreria o biblioteca (Adelphi)", why: "Il romanzo ucronico del testo di lettura. Prova a leggerne il primo capitolo." },
            { type: "Podcast", title: "Il podcast di Alessandro Barbero", where: "App di podcast", why: "Lezioni di storia raccontate con grande chiarezza: ascoltane una e chiediti che cosa sarebbe successo se fosse andata diversamente." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Nel film o nella lezione, quale momento avrebbe potuto cambiare tutto? Come sarebbe il mondo oggi?", items: ["Se in quel momento…"] },
        ],
      },
    ],

    exam: k.exam(59, {
      parole: ["l'ucronia", "il caso", "l'effetto farfalla", "il punto di svolta", "per un pelo", "influire su", "ipotizzare", "supporre", "l'imprevisto", "cambiare le carte in tavola"],
      contrario: ["ipotizzare → sostantivo", "supporre → sostantivo", "influire → sostantivo", "caso → aggettivo", "reale → contrario", "prevedibile → contrario"],
      verbiHint: "Scrivi la forma giusta del verbo tra parentesi.",
      verbiCols: ["verbo"],
      verbi: [["Se avessi studiato legge, oggi (fare) l'avvocato.", ""], ["Se fosse meno pigro, (finire) il lavoro ieri.", ""], ["Se non ci fossimo conosciuti, ora non (stare) insieme.", ""], ["Se fossi più prudente, non (avere) l'incidente.", ""]],
      completaHint: "Completa con il tempo giusto (periodo ipotetico misto o ipotesi senza «se»).",
      completa: ["Se ___ (io, nascere) in Italia, adesso parlerei senza accento.", "Se tu fossi più attento, non ___ (sbagliare) l'esercizio.", "Se avessimo prenotato, ora ___ (avere) un tavolo.", "Se ___ (lei, essere) meno timida, avrebbe cantato alla festa.", "___ il tuo aiuto, non ce l'avrei fatta.", "___ tuo, avrei accettato subito.", "___ fosse necessario, La contatteremo.", "Se non avesse nevicato, oggi le scuole ___ (essere) aperte."],
      trasformaHint: "Riscrivi ogni frase con la struttura indicata.",
      trasforma: ["Non ho risparmiato, quindi adesso non posso viaggiare. (se)", "È disordinato e ha perso i documenti. (se non fosse)", "Senza la pioggia, avremmo fatto la gita. (se)", "Se io fossi stato te, gli avrei parlato. (al posto tuo)", "Se avessimo saputo, non saremmo venuti. (sapendo)", "Nel caso in cui ci fossero problemi, telefonami. (qualora)"],
      leggi: {
        text: [
          "Nel 1955 un giovane ingegnere torinese ricevette due offerte di lavoro: una dalla Fiat e una da un piccolo laboratorio di elettronica. Scelse il laboratorio, contro il parere di tutta la famiglia.",
          "Quel laboratorio sarebbe diventato una delle aziende informatiche più innovative d'Europa. «Se avessi scelto la Fiat», raccontava da anziano, «oggi sarei un pensionato tranquillo, ma non avrei mai visto nascere un computer.»",
          "E aggiungeva: «Se non fossi stato così testardo, avrei ascoltato mio padre. Per fortuna non l'ho fatto.»",
        ],
        questions: ["Quali offerte ricevette l'ingegnere?", "Che cosa scelse e come reagì la famiglia?", "Che cosa sarebbe oggi se avesse scelto la Fiat?", "Quale tratto del suo carattere ha determinato la scelta?"],
      },
      ascolta: {
        script: [
          { who: "Irene", text: "Lo sai che ho conosciuto mio marito perché avevo perso l'autobus?" },
          { who: "Bruno", text: "Davvero? Racconta!" },
          { who: "Irene", text: "Ho chiesto un passaggio a un collega, e in macchina c'era lui. Se quel giorno fossi arrivata puntuale, adesso non saremmo sposati." },
          { who: "Bruno", text: "E se tu fossi più puntuale in generale, non l'avresti mai conosciuto!" },
        ],
        questions: ["Come ha conosciuto Irene suo marito?", "Chi c'era in macchina?", "Che cosa sarebbe diverso oggi se fosse stata puntuale?", "Che battuta fa Bruno? Che tipo di periodo ipotetico usa?"],
      },
      parla: ["Racconta come sarebbe la tua vita oggi se avessi fatto un'altra scelta.", "Descrivi un tuo tratto del carattere e un errore che ti ha fatto fare.", "Immagina un evento storico andato diversamente.", "Dai un consiglio a un amico con «al posto tuo»."],
      role: ["L'IA è un amico che ha abbandonato la musica da giovane e oggi fa un lavoro noioso.", "Collegate le sue scelte passate alla sua vita attuale.", "Proponigli che cosa potrebbe fare adesso."],
      dettato: ["se fossi nato a Roma", "adesso parlerei", "non avrei sbagliato", "senza il tuo aiuto", "al posto tuo", "qualora fosse necessario"],
      traduci: ["Non ho studiato informatica e oggi non lavoro in quel settore. (se)", "È impaziente, per questo ha litigato. (se non fosse)", "Non abbiamo prenotato e ora non c'è posto. (se)", "Se non ci fossi stato tu, avrei perso tutto. (senza di te)", "Se fossi stato in lei, avrei rifiutato. (al posto suo)", "Se dovessero esserci ritardi, La avviseremo. (qualora)"],
      scrivi: { hint: "Scrivi (180–220 parole) di un piccolo caso che ha cambiato la tua vita: che cosa è successo, come sarebbe oggi la tua vita se non fosse successo, e quanto conta per te il caso rispetto alle scelte.", start: "Tutto è cominciato per caso…" },
    }),
  };
})();
