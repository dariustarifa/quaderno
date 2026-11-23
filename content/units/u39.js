// Unità 39 · Notizie — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[39] = {
    n: 39,
    level: "B1",
    title: "Notizie",
    goal: "Capire e raccontare notizie di giornali, radio e telegiornali, usando la forma passiva.",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a capire i titoli e gli articoli dei giornali italiani, a seguire un giornale radio e a raccontare una notizia.",
              "Grammatica: la forma passiva con «essere» e con «venire» (Il ladro è stato arrestato / viene arrestato) e il complemento d'agente con «da».",
              "Nei giornali il passivo è ovunque, perché mette al centro il fatto e non chi lo fa.",
            ],
          },
          {
            kind: "intro", title: "È stato arrestato dalla polizia", hint: "Un'anticipazione: il passivo",
            text: ["Attivo: «La polizia ha arrestato il ladro». Passivo: «Il ladro è stato arrestato dalla polizia».", "Il passivo si forma con essere + participio, che concorda con il soggetto. Chi fa l'azione si introduce con «da»."],
            examples: [
              { it: "Il museo è visitato da migliaia di turisti.", es: "presente passivo" },
              { it: "La nuova legge è stata approvata ieri.", es: "passato prossimo passivo" },
              { it: "Le lettere vengono consegnate ogni mattina.", es: "passivo con venire" },
            ],
          },
          { kind: "speak", title: "Come ti informi?", hint: "Prima di cominciare: come ti informi di solito? Giornali, televisione, radio, social? Ti fidi delle notizie che leggi?", items: ["Di solito mi informo…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il mondo dell'informazione", hint: "Spiega il significato di ogni parola in italiano.",
            placeholder: "significato",
            items: [
              "il quotidiano", "il settimanale", "la testata", "il titolo", "l'articolo di fondo",
              "la cronaca", "la cronaca nera", "la cronaca rosa", "il giornale radio", "il telegiornale",
              "l'inviato", "l'intervista", "la fonte", "la notizia falsa (fake news)", "lo scoop",
              "lo sciopero", "il sindaco", "il governo", "le elezioni", "l'indagine",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sostantivo", title: "Dal verbo al nome",
            hint: "Nei titoli si usano molti sostantivi al posto dei verbi. Scrivi il sostantivo di ogni verbo. Esempio: arrestare → l'arresto.",
            items: ["approvare", "aumentare", "scoprire", "chiudere", "eleggere", "inaugurare", "rapinare", "dimettersi"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase come in una notizia. Dilla ad alta voce e scrivila. Esempio: è stato arrestato → Un uomo è stato arrestato ieri sera a Napoli.", items: ["è stato arrestato", "è stata approvata", "vengono chiusi", "è stato eletto", "secondo le fonti", "lo sciopero", "l'indagine", "è stata inaugurata"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La voce del giornale radio", hint: "Capire una notizia veloce",
            text: [
              "Nei giornali radio si parla veloce, con frasi brevi e molte informazioni: chi, che cosa, dove, quando. Abituati a cercare subito queste quattro informazioni.",
              "L'intonazione è neutra e scende alla fine di ogni frase. Le pause separano le notizie.",
              "Parole difficili da pronunciare nelle notizie: «sciopero» (scò-pe-ro), «inaugurazione», «dimissioni», «Presidenza del Consiglio».",
            ],
          },
          { kind: "shadow", title: "Titoli", hint: "Ripeti come un giornalista radiofonico.", items: ["Sciopero dei treni: venerdì a rischio i collegamenti.", "Approvata la nuova legge sul clima.", "Rapina in centro: arrestati due uomini.", "Inaugurato il nuovo ponte di Genova.", "Il sindaco si dimette dopo lo scandalo."] },
          { kind: "shadow", title: "Una notizia", hint: "Ripeti tutta la notizia, frase per frase.", items: ["Buongiorno, sono le otto.", "Due uomini sono stati arrestati ieri sera a Bologna dopo una rapina in banca.", "I rapinatori sono stati fermati dalla polizia mentre fuggivano in moto.", "Nessuno è stato ferito."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passivo con essere", hint: "Forma",
            text: [
              "Essere al tempo dell'attivo + participio passato che concorda con il soggetto: «La porta è aperta» (presente), «La porta è stata aperta» (passato prossimo), «La porta era stata aperta» (trapassato), «La porta sarà aperta» (futuro).",
              "Nel passato prossimo passivo ci sono due participi: «è stato aperto», «sono state approvate». Il primo (stato) concorda anche lui!",
              "Chi fa l'azione si introduce con «da» (e le preposizioni articolate): «dalla polizia», «dai cittadini».",
            ],
            table: { head: ["tempo", "attivo", "passivo"], rows: [["presente", "costruiscono", "è costruita"], ["passato pr.", "hanno costruito", "è stata costruita"], ["imperfetto", "costruivano", "era costruita"], ["futuro", "costruiranno", "sarà costruita"]] },
          },
          k.table("Dall'attivo al passivo", [
            ["scrivono la lettera", "la lettera è scritta", ""],
            ["vendono le case", "", "le case sono state vendute"],
            ["arrestano il ladro", "", ""],
            ["approvano la legge", "", ""],
            ["chiudono i negozi", "", ""],
          ], "Trasforma al passivo: presente e passato prossimo.", ["passivo presente", "passivo passato prossimo"]),
          {
            kind: "fill", title: "Il passivo", hint: "Completa con il passivo del verbo tra parentesi, al tempo indicato.",
            items: [
              "Il Colosseo ___ (costruire, passato remoto) nel I secolo d.C.", "La nuova biblioteca ___ (inaugurare, passato prossimo) ieri dal sindaco.", "Ogni anno il festival ___ (visitare, presente) da migliaia di persone.", "I due turisti ___ (salvare, passato prossimo) dai vigili del fuoco.", "Le elezioni ___ (vincere, passato prossimo) dal centrosinistra.", "Domani la strada ___ (chiudere, futuro) per lavori.", "Quando sono arrivato, la decisione ___ già ___ (prendere, trapassato).", "Questa canzone ___ (cantare, presente) in tutto il mondo.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il passivo con venire", hint: "Venire al posto di essere",
            text: [
              "Nei tempi semplici (presente, imperfetto, futuro, passato remoto) si può usare «venire» invece di «essere»: «La posta viene consegnata alle dieci».",
              "Con «venire» il passivo indica chiaramente un'azione, non uno stato: «La porta è chiusa» (stato: è chiusa) / «La porta viene chiusa alle venti» (azione: qualcuno la chiude).",
              "Attenzione: «venire» non si usa nei tempi composti. NON «è venuta chiusa», ma «è stata chiusa».",
            ],
            examples: [{ it: "Il pane viene sfornato ogni mattina alle sei.", es: "azione abituale" }, { it: "Le domande verranno esaminate entro un mese.", es: "futuro" }],
          },
          {
            kind: "fill", title: "Essere o venire?", hint: "Completa con «essere» o «venire» al tempo giusto. Se sono possibili tutti e due, scegli «venire».",
            items: ["Il negozio ___ aperto ogni giorno alle nove (azione).", "La finestra ___ aperta da ieri (stato).", "Il ponte ___ stato inaugurato nel 2020.", "I biglietti ___ venduti online e in stazione.", "In passato le lettere ___ scritte a mano.", "Il vincitore ___ annunciato domani sera."],
          },
          {
            kind: "intro", title: "Lo stile dei titoli", hint: "Come si scrivono i titoli",
            text: ["I titoli dei giornali usano spesso frasi senza verbo o con il participio passivo: «Approvata la legge» (= la legge è stata approvata), «Arrestati due giovani», «Chiusa per neve l'autostrada».", "Usano anche il presente per fatti passati e molti sostantivi: «Rapina in banca, fuga in moto»."],
          },
          k.negativa(["La polizia ha arrestato tre persone.", "Il governo approverà la legge.", "Milioni di persone guardano il festival.", "Un giornalista ha scoperto lo scandalo.", "Gli studenti occupavano la scuola.", "I vigili del fuoco hanno salvato un bambino."], "Trasforma ogni frase dall'attivo al passivo, mantenendo il tempo verbale.", "al passivo"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Il giornale radio delle otto", "Le notizie del mattino.", [
            { who: "Speaker", text: "Buongiorno, sono le otto. Apriamo con la politica: la nuova legge sul lavoro è stata approvata ieri sera dal Senato con 98 voti a favore." },
            { who: "Speaker", text: "Cronaca: a Torino tre giovani sono stati arrestati per una serie di furti nelle stazioni della metropolitana. La refurtiva è stata restituita ai proprietari." },
            { who: "Speaker", text: "Trasporti: venerdì è previsto uno sciopero nazionale dei treni. I collegamenti regionali verranno garantiti solo nelle fasce dalle 6 alle 9 e dalle 18 alle 21." },
            { who: "Speaker", text: "Cultura: è stato inaugurato a Matera il nuovo museo della civiltà contadina, che sarà aperto gratuitamente per tutto il mese." },
            { who: "Speaker", text: "Il meteo: oggi cielo sereno al Sud, piogge al Nord. Buona giornata." },
          ], ["Che cosa è stato approvato ieri? Da chi?", "Che cosa è successo a Torino?", "Che cosa succede venerdì? Quando viaggeranno i treni regionali?", "Che cosa è stato inaugurato a Matera? A che condizioni si visita?", "Che tempo fa oggi?"]),
          k.listen("Hai letto la notizia?", "Due amici commentano una notizia letta online.", [
            { who: "Giorgio", text: "Hai visto? Nel mio quartiere verrà costruito un centro commerciale enorme." },
            { who: "Sara", text: "Davvero? E il parco?" },
            { who: "Giorgio", text: "Il parco sarà ridotto della metà. Il progetto è stato approvato dal comune senza chiedere niente ai cittadini." },
            { who: "Sara", text: "Ma è sicuro? Spesso queste notizie sono esagerate. Qual è la fonte?" },
            { who: "Giorgio", text: "Il giornale locale. Domani è stata organizzata un'assemblea pubblica: ci vieni?" },
            { who: "Sara", text: "Certo. Ma prima voglio leggere il documento ufficiale." },
          ], ["Che cosa verrà costruito nel quartiere di Giorgio?", "Che cosa succederà al parco?", "Che cosa critica Giorgio del comune?", "Perché Sara è prudente?", "Che cosa è stato organizzato per domani?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("I giornali italiani", [
            "In Italia i quotidiani nazionali più letti sono il Corriere della Sera, fondato a Milano nel 1876, e la Repubblica, nata a Roma nel 1976. A Torino si pubblica La Stampa e per l'economia c'è Il Sole 24 Ore.",
            "Lo sport è così importante che esistono tre quotidiani sportivi. Il più famoso è La Gazzetta dello Sport, stampata su carta rosa: lo stesso rosa della maglia del Giro d'Italia.",
            "Molto letti sono anche i giornali locali, che raccontano la cronaca della città: un incidente, l'apertura di un nuovo negozio, i risultati della squadra di calcio.",
            "Come in tutto il mondo, le copie vendute sono diminuite molto e oggi le notizie vengono lette soprattutto online. Molti giornali hanno introdotto l'abbonamento digitale.",
            "Una tradizione che resiste è la «rassegna stampa»: alla radio e in TV vengono lette ogni mattina le prime pagine dei giornali, per capire quali sono i temi del giorno.",
          ], ["Quali sono i quotidiani nazionali più letti? Quando sono nati?", "Perché la Gazzetta dello Sport è rosa?", "Di che cosa parlano i giornali locali?", "Come sono cambiate le abitudini dei lettori?", "Che cos'è la rassegna stampa?", "Come ti informi tu? Ti fidi dei giornali?"]),
          k.spagna("Quali sono i giornali più importanti del tuo paese? Come si informano le persone? Usa almeno quattro frasi passive."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare una notizia", hint: "Le cinque W",
            text: ["Una notizia risponde a cinque domande: chi, che cosa, dove, quando, perché. Comincia dal fatto principale, poi aggiungi i dettagli.", "Per riferire con prudenza: «Secondo le prime informazioni…», «Sembra che…» (+ congiuntivo), «Non è ancora chiaro se…», «La notizia non è stata confermata»."],
          },
          k.rispondi(["Qual è l'ultima notizia che ti ha colpito? Raccontala.", "Ti fidi delle notizie che trovi sui social?", "Come riconosci una notizia falsa?", "Preferisci leggere le notizie o ascoltarle?", "Quali notizie ti interessano di più: politica, cronaca, sport, cultura?", "Dovrebbe esserci più spazio per le buone notizie? Perché?"]),
          { kind: "speak", title: "Dal titolo alla notizia", hint: "Trasforma ogni titolo in una notizia di tre frasi, con almeno un passivo.", items: ["Chiuso per neve il passo del Brennero", "Ritrovato un affresco del Trecento in una chiesa di Siena", "Arrestati due finti tecnici del gas", "Approvato il nuovo piano per le piste ciclabili", "Rinviata la partita per pioggia"] },
          {
            kind: "roleplay", title: "In diretta", hint: "Sei un inviato del telegiornale in collegamento dal luogo di un evento (un incendio, un festival, un'alluvione…). L'IA fa il conduttore in studio e ti fa domande.",
            steps: ["Saluta e presenta il luogo e l'evento.", "Racconta che cosa è successo, con il passivo.", "Rispondi alle domande del conduttore.", "Dai le informazioni ancora incerte con prudenza.", "Chiudi il collegamento."],
          },
          {
            kind: "roleplay", title: "La notizia falsa", hint: "Un parente anziano ti manda un messaggio con una notizia allarmante e falsa. L'IA fa il parente, che ci crede molto.",
            steps: ["Chiedigli dove ha letto la notizia.", "Spiega perché pensi che sia falsa.", "Mostrale come si controlla una fonte.", "Rispondi alle sue obiezioni con pazienza.", "Proponi due fonti affidabili."],
          },
          { kind: "speak", title: "Il mio telegiornale", hint: "Presenta per due minuti un breve telegiornale con tre notizie (vere o inventate): politica o cronaca, cultura e sport. Usa il passivo.", items: ["Buonasera, ecco le notizie del giorno…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il comune ha chiuso la piscina. (al passivo)", "Migliaia di persone visitano la mostra. (al passivo)", "I ladri avevano rubato due quadri. (al passivo)", "Il governo approverà la riforma. (al passivo)", "La legge è stata approvata. (come titolo di giornale)", "Due ragazzi sono stati arrestati a Bari. (come titolo di giornale)", "I biglietti sono venduti alla cassa. (con venire)", "Il museo è aperto ogni giorno alle nove (azione). (con venire)"], "Trasforma ogni frase come indicato tra parentesi."),
          { kind: "write", title: "Un articolo di cronaca", hint: "Scrivi un articolo (200–220 parole) per il giornale locale su un fatto avvenuto nel tuo quartiere (vero o inventato). Comincia con un titolo nello stile dei giornali, rispondi alle cinque W e usa almeno sei passivi.", rows: 16, items: ["Titolo:", "Articolo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: passivo", ["è stato arrestato", "sono state approvate", "viene chiuso", "verranno esaminate", "era stata scoperta", "fu costruito"], "Ascolta e scrivi."),
          k.dettato("Dettato: titoli", ["Approvata la riforma della scuola.", "Sciopero dei treni venerdì.", "Arrestati due rapinatori.", "Inaugurato il nuovo museo.", "Chiusa per neve l'autostrada."]),
          k.media([
            { type: "Programma", title: "TG1 / TG3", where: "RaiPlay", why: "I telegiornali della Rai: guarda i primi cinque minuti e annota i passivi che senti." },
            { type: "Podcast", title: "Il Post · Morning", where: "Spotify, app Il Post", why: "La rassegna stampa del mattino in 20 minuti, chiara e ben spiegata." },
            { type: "Film", title: "Fortapàsc (Marco Risi, 2009)", where: "Cerca dove vederlo su JustWatch", why: "La storia vera di Giancarlo Siani, giovane giornalista ucciso dalla camorra nel 1985." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Racconta una notizia che hai sentito nel telegiornale o nel podcast, rispondendo alle cinque W.", items: ["Ieri / Oggi è stato…"] },
        ],
      },
    ],

    exam: k.exam(39, {
      parole: ["il quotidiano", "la cronaca nera", "l'inviato", "la fonte", "lo sciopero", "l'indagine", "la rassegna stampa", "la testata", "lo scoop", "dimettersi"],
      contrario: ["arrestare → sostantivo", "approvare → sostantivo", "aumentare → sostantivo", "chiudere → sostantivo", "eleggere → sostantivo", "scoprire → sostantivo"],
      verbiHint: "Trasforma al passivo: presente e passato prossimo.",
      verbiCols: ["passivo presente", "passivo passato prossimo"],
      verbi: [["costruiscono il ponte", "", ""], ["vendono le biciclette", "", ""], ["eleggono la sindaca", "", ""], ["aprono i musei", "", ""]],
      completaHint: "Completa con il passivo (essere o venire) al tempo giusto.",
      completa: ["La nuova scuola ___ (inaugurare, passato prossimo) dal ministro.", "Ogni giorno ___ (vendere, presente, con venire) migliaia di giornali.", "I ladri ___ (arrestare, passato prossimo) dopo una lunga fuga.", "Le domande ___ (esaminare, futuro) entro fine mese.", "Quando sono arrivato, la sala ___ già ___ (preparare, trapassato).", "La Divina Commedia ___ (leggere, presente) in tutto il mondo.", "Le strade ___ (pulire, presente, con venire) ogni notte.", "Il vincitore ___ (scegliere, passato prossimo) dalla giuria."],
      trasformaHint: "Trasforma dall'attivo al passivo, mantenendo il tempo.",
      trasforma: ["La polizia ha fermato due giovani.", "Il sindaco inaugurerà il parco.", "Molti turisti visitano Matera.", "I ricercatori hanno scoperto un nuovo farmaco.", "Gli operai riparavano la strada.", "Il pubblico ha applaudito i cantanti."],
      leggi: {
        text: [
          "Firenze, ritrovato un disegno di Michelangelo. Un disegno inedito di Michelangelo è stato scoperto in un archivio privato di Firenze durante un inventario.",
          "L'opera, che rappresenta lo studio di una mano, era stata acquistata nell'Ottocento da una famiglia nobile ed era stata dimenticata in una cartella.",
          "Il disegno verrà esaminato dagli esperti degli Uffizi e, se l'autenticità sarà confermata, sarà esposto al pubblico in primavera.",
        ],
        questions: ["Che cosa è stato scoperto? Dove?", "Che cosa rappresenta l'opera?", "Come era arrivata nell'archivio?", "Che cosa succederà adesso?"],
      },
      ascolta: {
        script: [
          { who: "Speaker", text: "Notizie dalla Liguria: l'autostrada tra Genova e Savona è stata chiusa stamattina per una frana." },
          { who: "Speaker", text: "Nessuna auto è stata coinvolta. Il traffico viene deviato sulla strada statale." },
          { who: "Speaker", text: "Secondo i tecnici, i lavori dureranno almeno tre giorni. La strada sarà riaperta probabilmente domenica." },
        ],
        questions: ["Che cosa è stato chiuso? Perché?", "Ci sono state auto coinvolte?", "Dove viene deviato il traffico?", "Quando sarà riaperta la strada?"],
      },
      parla: ["Racconta una notizia recente rispondendo alle cinque W.", "Trasforma in notizia: «Ritrovato un gatto dopo tre anni».", "Come ti informi? Ti fidi delle notizie online?", "Che cosa si potrebbe fare contro le notizie false?"],
      role: ["Sei un giornalista: intervista un testimone di un incendio (l'IA).", "Chiedi le cinque W.", "Riassumi la notizia al pubblico con il passivo."],
      dettato: ["è stata approvata", "Sciopero dei treni", "vengono venduti online", "sarà riaperta domenica", "erano stati arrestati", "Inaugurato il nuovo ponte"],
      traduci: ["Il comune ha aperto un nuovo asilo. (al passivo)", "Migliaia di fan seguono il concerto. (al passivo)", "Il ladro è stato arrestato. (come titolo)", "I treni sono cancellati. (con venire, azione)", "Il premio sarà consegnato domani. (all'attivo, soggetto: il presidente)", "Due turisti sono stati salvati in montagna. (come titolo)"],
      scrivi: { hint: "Scrivi un breve articolo (150–180 parole) sul disegno di Michelangelo della parte 6 come se fosse uscito oggi su un giornale, con un titolo e almeno cinque passivi.", start: "Titolo: …" },
    }),
  };
})();
