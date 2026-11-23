// Unità 55 · Discutere — B1: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B1");
  window.UNITS = window.UNITS || {};
  window.UNITS[55] = {
    n: 55,
    level: "B1",
    title: "Discutere",
    goal: "Esprimere e difendere un'opinione in modo ordinato, con i connettivi per argomentare (innanzitutto, inoltre, tuttavia, infatti, quindi, insomma…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a discutere: dare un'opinione, sostenerla con argomenti ed esempi, ammettere le ragioni dell'altro e arrivare a una conclusione.",
              "Grammatica: i connettivi dell'argomentazione. Per ordinare (innanzitutto, in primo luogo, poi, infine), aggiungere (inoltre, per di più, anche), opporre (tuttavia, però, eppure, invece), spiegare (infatti, cioè, in effetti), concludere (quindi, dunque, pertanto, insomma).",
              "Ripasserai anche il congiuntivo dopo «penso che», «credo che», «non sono sicuro che».",
            ],
          },
          {
            kind: "intro", title: "Un argomento ben costruito", hint: "Un'anticipazione",
            text: ["Un buon argomento ha una struttura: tesi → argomenti → esempio → obiezione → conclusione.", "I connettivi sono i «cartelli stradali» del discorso: dicono a chi ascolta dove stai andando."],
            examples: [
              { it: "Innanzitutto, il cellulare distrae.", es: "primo argomento" },
              { it: "Inoltre, riduce il tempo per lo sport.", es: "argomento aggiunto" },
              { it: "Tuttavia, può essere utile per studiare.", es: "obiezione" },
              { it: "Insomma, serve, ma con delle regole.", es: "conclusione" },
            ],
          },
          { kind: "speak", title: "Sei d'accordo?", hint: "Prima di cominciare: rispondi con un'opinione e almeno un motivo.", items: ["I compiti a casa sono utili.", "Il lavoro da casa è meglio del lavoro in ufficio."] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della discussione", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "la tesi", "l'argomento", "l'obiezione", "il punto di vista", "il pro e il contro",
              "sostenere", "ribattere", "convincere", "ammettere", "contraddire",
              "a mio avviso", "secondo me", "dal mio punto di vista", "è vero che…, però", "non è detto che",
              "avere ragione", "avere torto", "mettersi d'accordo", "il compromesso", "il luogo comune",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "connettivo", title: "Sinonimi dei connettivi",
            hint: "Scrivi un connettivo con lo stesso significato.",
            items: ["inoltre", "tuttavia", "quindi", "infatti", "innanzitutto", "insomma", "cioè", "invece"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase con ogni connettivo, su un tema a scelta. Esempio: tuttavia → Il centro è bello; tuttavia è troppo caro.", items: ["innanzitutto", "inoltre", "per di più", "tuttavia", "eppure", "infatti", "pertanto", "insomma"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "La pausa dopo il connettivo", hint: "Ritmo del discorso",
            text: [
              "Nel discorso argomentativo si fa una breve pausa dopo il connettivo iniziale: «Inoltre, | il prezzo è alto». La pausa dà peso all'argomento.",
              "«Tuttavia» e «eppure» si dicono con un leggero rallentamento: segnalano una svolta.",
              "Per sembrare sicuri: voce che scende alla fine dell'affermazione. Per sembrare dubbiosi: voce sospesa.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Rispetta le pause.", items: ["Innanzitutto, | il progetto costa troppo.", "Inoltre, | non c'è abbastanza tempo.", "Tuttavia, | l'idea è interessante.", "Insomma, | io sono contrario.", "È vero che costa, | però conviene."] },
          { kind: "shadow", title: "Sicuro o dubbioso?", hint: "Ripeti ogni frase due volte: prima con sicurezza, poi con dubbio.", items: ["Secondo me ha ragione.", "Non è detto che funzioni.", "Forse è meglio aspettare.", "Penso che sia giusto."] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Opinione e verbo", hint: "Indicativo o congiuntivo?",
            text: [
              "Con i verbi di opinione (penso che, credo che, mi sembra che, non sono sicuro che, dubito che) si usa il congiuntivo: «Penso che abbia ragione».",
              "Con «secondo me», «a mio avviso», «sono sicuro che», «è chiaro che», «è evidente che» si usa l'indicativo: «Secondo me ha ragione», «È chiaro che ha ragione».",
              "«Non è detto che» + congiuntivo: «Non è detto che sia vero».",
            ],
            table: { head: ["espressione", "modo"], rows: [["penso che, credo che", "congiuntivo"], ["dubito che, non è detto che", "congiuntivo"], ["secondo me, a mio avviso", "indicativo"], ["sono sicuro che, è chiaro che", "indicativo"]] },
          },
          k.table("Indicativo o congiuntivo?", [
            ["Penso che (essere) una buona idea.", "sia"],
            ["Secondo me (essere) una buona idea.", ""],
            ["Dubito che loro (avere) ragione.", ""],
            ["È chiaro che il progetto (costare) troppo.", ""],
            ["Non è detto che il sindaco (cambiare) idea.", ""],
            ["Sono sicura che voi (potere) farcela.", ""],
          ], "Scrivi la forma giusta del verbo.", ["verbo"]),
          {
            kind: "fill", title: "Completa con il verbo", hint: "Scegli il modo giusto (indicativo o congiuntivo).",
            items: [
              "Credo che i giovani ___ (leggere) meno di una volta.", "A mio avviso i giovani ___ (leggere) in modo diverso.", "Mi sembra che tu ___ (esagerare).", "È evidente che il problema ___ (esistere).", "Non sono sicuro che la legge ___ (servire).", "Dal mio punto di vista la legge ___ (servire).", "Non è detto che più regole ___ (essere) la soluzione.", "Sono convinto che ___ (esserci) un compromesso.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "I connettivi per funzione", hint: "La mappa del discorso",
            text: [
              "Ordinare: innanzitutto, in primo luogo, in secondo luogo, poi, infine, per finire.",
              "Aggiungere: inoltre, per di più, oltre a questo, anche, non solo… ma anche.",
              "Opporre: però, ma, tuttavia, eppure, invece, al contrario, d'altra parte.",
              "Spiegare e fare esempi: infatti, in effetti, cioè, ossia, per esempio, come dimostra…",
              "Concludere: quindi, dunque, pertanto, perciò, insomma, in conclusione, per concludere.",
            ],
          },
          {
            kind: "fill", title: "Il connettivo giusto", hint: "Completa con un connettivo adatto: inoltre, tuttavia, infatti, quindi, invece, insomma, innanzitutto, eppure.",
            items: ["___, vorrei ringraziare tutti per essere qui.", "Il treno è comodo; ___ è più ecologico dell'aereo.", "L'aereo è veloce; ___ inquina molto di più.", "Marco è stanchissimo: ___ ha lavorato dodici ore.", "Ha piovuto tutta la settimana, ___ la partita è rinviata.", "Io preferisco il mare; mia sorella, ___, ama la montagna.", "Ha studiato pochissimo; ___ ha preso il voto più alto.", "Costa poco, è vicino e funziona bene: ___, è la scelta migliore."],
          },
          {
            kind: "intro", title: "Ammettere e ribattere", hint: "La concessione nel dibattito",
            text: ["«È vero che…, però…», «Hai ragione su…, ma…», «Capisco il tuo punto di vista; tuttavia…», «Sarà anche vero, ma…», «D'accordo, ma non dimentichiamo che…»."],
          },
          k.negativa(["Il progetto è caro. Il progetto è utile. (è vero che…, però)", "I compiti stancano. I compiti aiutano a ricordare. (tuttavia)", "Ha ragione sul prezzo. Ha torto sui tempi. (ha ragione su…, ma)", "Lo smartphone distrae. Lo smartphone aiuta a cercare informazioni. (d'altra parte)", "Non ha studiato. Ha passato l'esame. (eppure)", "Il treno costa meno ed è più comodo. (non solo… ma anche)"], "Unisci le frasi con la struttura indicata.", "frase unica"),
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("Cellulari in classe", "Una discussione alla radio tra un'insegnante e uno studente.", [
            { who: "Conduttore", text: "Oggi parliamo del divieto di usare il cellulare in classe. Professoressa Ferri, lei è favorevole?" },
            { who: "Prof.ssa Ferri", text: "Sì, assolutamente. Innanzitutto, il cellulare distrae: basta una notifica e l'attenzione è persa. Inoltre, i ragazzi parlano sempre meno tra loro." },
            { who: "Conduttore", text: "Tommaso, tu che ne pensi?" },
            { who: "Tommaso", text: "È vero che distrae, però può essere uno strumento utile: per cercare una parola, per una ricerca veloce…" },
            { who: "Prof.ssa Ferri", text: "Per quello ci sono i computer della scuola. Infatti li usiamo ogni settimana." },
            { who: "Tommaso", text: "Insomma, secondo me non serve vietare: serve insegnare a usarlo bene." },
          ], ["Di che cosa si parla?", "Quali argomenti usa la professoressa?", "Che cosa ammette Tommaso?", "Come risponde la professoressa alla sua obiezione?", "Qual è la conclusione di Tommaso?"]),
          k.listen("La riunione di condominio", "I vicini discutono se installare i pannelli solari sul tetto.", [
            { who: "Sig.ra Galli", text: "Io sono favorevole: in primo luogo risparmiamo sulla bolletta, in secondo luogo inquiniamo meno." },
            { who: "Sig. Bruno", text: "D'accordo, ma l'investimento iniziale è alto. Non tutti possono pagare subito." },
            { who: "Sig.ra Galli", text: "Si può pagare a rate. E dopo pochi anni l'impianto si ripaga da solo." },
            { who: "Sig. Bruno", text: "Non è detto che i prezzi dell'energia restino così alti. Comunque, se c'è la possibilità di pagare a rate, ci penso." },
          ], ["Che cosa vuole fare la signora Galli?", "Quali sono i suoi due argomenti?", "Qual è l'obiezione del signor Bruno?", "Che soluzione propone la signora?", "Come finisce la discussione?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Settimana corta: sì o no?", [
            "In diversi paesi europei alcune aziende stanno sperimentando la settimana lavorativa di quattro giorni, a parità di stipendio. Anche in Italia alcune grandi aziende hanno avviato progetti simili.",
            "I sostenitori presentano tre argomenti. Innanzitutto, i lavoratori riposano di più e quindi sono più produttivi. In secondo luogo, diminuiscono le assenze per malattia. Infine, le aziende diventano più attraenti per i giovani.",
            "I critici, invece, sottolineano che il modello non funziona per tutti: un ospedale, un negozio o una scuola non possono chiudere un giorno in più. Per di più, temono che le giornate diventino troppo lunghe e stressanti.",
            "Insomma, la settimana corta sembra funzionare in alcuni settori, ma non è detto che si possa applicare ovunque. Il dibattito è appena cominciato.",
          ], ["Che cos'è la settimana corta?", "Quali sono i tre argomenti dei sostenitori?", "Quali settori, secondo i critici, non possono applicarla?", "Quale altro rischio vedono i critici?", "Qual è la conclusione del testo?", "Trova nel testo cinque connettivi e spiega la loro funzione."]),
          k.spagna("Come si lavora nel tuo paese? Si discute della settimana corta o del lavoro da casa? Scrivi la tua opinione con almeno sei connettivi diversi."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Prendere la parola", hint: "Gestire la discussione",
            text: ["Intervenire: «Posso dire una cosa?», «Scusa se ti interrompo, ma…». Mantenere la parola: «Lasciami finire», «Un attimo, non ho finito». Chiedere chiarimenti: «In che senso?», «Cioè?». Riassumere: «Se ho capito bene, tu dici che…»."],
          },
          k.rispondi(["Sei favorevole al divieto del cellulare a scuola? Perché?", "La settimana di quattro giorni funzionerebbe nel tuo lavoro?", "È meglio vivere in città o in campagna?", "I social network fanno più bene o più male?", "Bisognerebbe vietare le auto nei centri storici?", "Qual è un luogo comune sugli italiani che non è vero?"]),
          { kind: "speak", title: "Tesi in un minuto", hint: "Scegli una tesi e difendila per un minuto: innanzitutto…, inoltre…, per esempio…, è vero che…, però…, insomma…", items: ["Il turismo di massa va limitato.", "La scuola dovrebbe iniziare più tardi.", "Gli animali non dovrebbero vivere negli zoo.", "Imparare una lingua da adulti è più facile."] },
          {
            kind: "roleplay", title: "Il dibattito", hint: "L'IA è contraria al lavoro da casa; tu sei favorevole. Discutete in modo civile.",
            steps: ["Presenta la tua tesi con due argomenti ordinati.", "Ascolta la sua obiezione e riassumila.", "Ammetti una sua ragione e ribatti.", "Fai un esempio concreto.", "Concludi e proponi un compromesso."],
          },
          {
            kind: "roleplay", title: "Convincere un amico", hint: "Un amico (l'IA) non vuole venire con te a un corso di teatro. Convincilo.",
            steps: ["Spiega perché il corso è una buona idea.", "Rispondi alla sua prima scusa.", "Aggiungi un argomento in più.", "Ammetti che ha ragione su una cosa.", "Fai una proposta finale."],
          },
          { kind: "speak", title: "Riassumi l'altro", hint: "Ascolta un'opinione (di un amico, di un video, dell'IA) e riassumila: «Se ho capito bene, tu sostieni che…». Poi rispondi.", items: ["Se ho capito bene…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Il treno è comodo. È anche economico. (inoltre)", "La città è cara. Ci vivono molti giovani. (eppure)", "Non ha dormito. È stanco. (quindi)", "È stanco. Non ha dormito. (infatti)", "Il film è lungo. È bellissimo. (è vero che…, però)", "Prima parlo dei vantaggi, poi degli svantaggi. (in primo luogo… in secondo luogo)", "Costa poco, è veloce, è comodo. È perfetto. (insomma)", "Credo: lui ha ragione. (penso che + congiuntivo)"], "Riscrivi ogni frase con il connettivo o la struttura indicata."),
          { kind: "write", title: "Un testo argomentativo", hint: "Scegli una tesi (cellulare a scuola, settimana corta, turismo, auto in centro) e scrivi un testo argomentativo (230–260 parole): tesi, due o tre argomenti, un esempio, un'obiezione con la tua risposta, conclusione. Usa almeno dieci connettivi diversi.", rows: 18, items: ["Tesi:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: connettivi", ["innanzitutto", "per di più", "tuttavia", "eppure", "pertanto", "in conclusione"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["A mio avviso ha ragione.", "Non è detto che sia vero.", "È vero che costa, però conviene.", "Se ho capito bene, tu dici che…", "Insomma, troviamo un compromesso."]),
          k.media([
            { type: "Film", title: "Perfetti sconosciuti (Paolo Genovese, 2016)", where: "Cerca dove vederlo su JustWatch", why: "Una cena tra amici diventa una lunga discussione: ascolta come si interrompono, ribattono e si difendono." },
            { type: "TV", title: "Otto e mezzo (La7)", where: "la7.it", why: "Programma di approfondimento con ospiti che discutono di attualità: nota i connettivi e le formule per prendere la parola." },
            { type: "YouTube", title: "TEDx Talks in italiano", where: "YouTube", why: "Scegli un intervento di dieci minuti e individua tesi, argomenti ed esempi." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi una discussione che hai visto nel film o in TV: chi sosteneva che cosa, con quali argomenti, e chi ti ha convinto di più.", items: ["Nella discussione…"] },
        ],
      },
    ],

    exam: k.exam(55, {
      parole: ["la tesi", "l'obiezione", "sostenere", "ribattere", "ammettere", "il compromesso", "il luogo comune", "a mio avviso", "avere torto", "convincere"],
      contrario: ["inoltre → sinonimo", "tuttavia → sinonimo", "quindi → sinonimo", "infatti → sinonimo", "avere ragione → contrario", "favorevole → contrario"],
      verbiHint: "Scrivi la forma giusta del verbo (indicativo o congiuntivo).",
      verbiCols: ["verbo"],
      verbi: [["Penso che tu (avere) ragione.", ""], ["Secondo me lui (avere) torto.", ""], ["Dubito che (essere) possibile.", ""], ["È chiaro che (servire) più tempo.", ""]],
      completaHint: "Completa con un connettivo adatto.",
      completa: ["___, vorrei presentare la mia tesi.", "Il progetto è utile; ___ costa poco.", "È una buona idea; ___ ci sono dei rischi.", "Era stanchissima: ___ non dormiva da giorni.", "Non c'era più tempo, ___ abbiamo rinunciato.", "Lui ama il caldo; lei, ___, preferisce il freddo.", "Non si è mai allenato; ___ ha vinto la gara.", "Economico, veloce, comodo: ___, perfetto."],
      trasformaHint: "Unisci o riscrivi le frasi con la struttura indicata.",
      trasforma: ["Il centro è bello. È troppo caro. (è vero che…, però)", "Ha studiato poco. Ha superato l'esame. (eppure)", "Piove. Restiamo a casa. (pertanto)", "Il lavoro da casa fa risparmiare tempo. Fa anche risparmiare soldi. (non solo… ma anche)", "Credo: la legge è giusta. (credo che + congiuntivo)", "Riassumi: tu dici che il progetto è inutile. (se ho capito bene…)"],
      leggi: {
        text: [
          "Molte città italiane discutono se rendere gratuiti i mezzi pubblici. I sostenitori dicono che, innanzitutto, meno persone userebbero l'auto e, inoltre, l'aria sarebbe più pulita.",
          "I critici rispondono che i mezzi gratuiti costano molto ai comuni e che, per di più, senza investimenti diventerebbero ancora più affollati.",
          "Alcuni propongono un compromesso: mezzi gratuiti solo per studenti e anziani. Insomma, la discussione è aperta.",
        ],
        questions: ["Che cosa discutono le città italiane?", "Quali argomenti usano i sostenitori?", "Che cosa rispondono i critici?", "Quale compromesso viene proposto?"],
      },
      ascolta: {
        script: [
          { who: "Elena", text: "Secondo me dovremmo andare in vacanza in treno, non in aereo." },
          { who: "Marco", text: "Ma ci mettiamo dieci ore!" },
          { who: "Elena", text: "È vero, però il treno inquina molto meno. Inoltre, possiamo leggere e guardare il paesaggio." },
          { who: "Marco", text: "Mah… e se prendessimo il treno di notte? Così non perdiamo un giorno." },
          { who: "Elena", text: "Ottima idea! Allora siamo d'accordo." },
        ],
        questions: ["Che cosa propone Elena?", "Qual è l'obiezione di Marco?", "Quali argomenti usa Elena?", "Quale compromesso trovano?"],
      },
      parla: ["Difendi una tesi a scelta per un minuto, con argomenti ordinati.", "Riassumi un'opinione contraria alla tua e rispondi.", "Racconta una discussione in cui hai cambiato idea.", "Il cellulare a scuola: sì o no?"],
      role: ["L'IA sostiene che i compiti a casa siano inutili: tu non sei d'accordo.", "Ammetti almeno una sua ragione.", "Concludete con un compromesso."],
      dettato: ["innanzitutto", "per di più", "tuttavia", "non è detto che", "a mio avviso", "in conclusione"],
      traduci: ["È economico. È anche veloce. (inoltre)", "È caro. Lo comprano tutti. (eppure)", "Ha piovuto. La partita è rinviata. (quindi)", "È nervoso. Ha un esame domani. (infatti)", "Lo sport è utile. Non bisogna esagerare. (è vero che…, però)", "Penso: hai torto. (penso che + congiuntivo)"],
      scrivi: { hint: "Scrivi un testo argomentativo (150–180 parole) sulla tesi «Le città dovrebbero vietare le auto nel centro storico». Usa almeno otto connettivi.", start: "A mio avviso…" },
    }),
  };
})();
