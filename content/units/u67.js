// Unità 67 · Storia — B2: tutto in italiano. Vedi content/AUTHORING.md
(() => {
  const k = K.at("B2");
  window.UNITS = window.UNITS || {};
  window.UNITS[67] = {
    n: 67,
    level: "B2",
    title: "Storia",
    goal: "Raccontare eventi storici in ordine cronologico con il passato remoto e il trapassato remoto (appena ebbe finito…, dopo che fu arrivato…).",
    pages: [
      /* 1 */ {
        title: "Introduzione",
        skill: "mixto",
        blocks: [
          {
            kind: "intro", title: "In questa unità", hint: "Che cosa imparerai",
            text: [
              "Imparerai a raccontare la storia d'Italia, dal Risorgimento alla Repubblica, con i tempi del racconto storico.",
              "Grammatica: il trapassato remoto (ebbe finito, fu arrivato). È un tempo raro, quasi solo scritto, che si usa dopo «quando», «appena», «non appena», «dopo che», «(non) appena che» se la frase principale è al passato remoto: «Appena Garibaldi fu sbarcato, marciò verso Palermo».",
              "Ripasserai anche gli indicatori cronologici: in quegli anni, l'anno seguente, nel frattempo, da allora in poi.",
            ],
          },
          {
            kind: "intro", title: "Prima e poi nel passato remoto", hint: "Un'anticipazione",
            examples: [
              { it: "Dopo che ebbe conquistato la Sicilia, Garibaldi passò in Calabria.", es: "trapassato remoto + passato remoto" },
              { it: "Appena fu proclamata la Repubblica, il re partì per l'esilio.", es: "azione immediatamente precedente" },
              { it: "Quando i Mille arrivarono a Marsala, la popolazione aveva già sentito parlare di loro.", es: "trapassato prossimo: anteriorità generica" },
            ],
            text: ["Il trapassato remoto indica un'azione appena conclusa prima di un'altra al passato remoto."],
          },
          { kind: "speak", title: "La storia e te", hint: "Prima di cominciare: quale periodo della storia ti interessa di più? Che cosa sai della storia italiana?", items: ["Il periodo che mi interessa di più…"] },
        ],
      },

      /* 2 */ {
        title: "Parole",
        skill: "escritura",
        blocks: [
          {
            kind: "vocab", title: "Il lessico della storia", hint: "Spiega il significato di ogni parola o espressione in italiano.",
            placeholder: "significato",
            items: [
              "il Risorgimento", "l'unificazione", "la monarchia", "la repubblica", "il referendum",
              "la Costituzione", "lo sbarco", "la spedizione", "la battaglia", "l'esercito",
              "la resistenza", "la dittatura", "la caduta", "proclamare", "annettere",
              "insorgere", "il dopoguerra", "il boom economico", "gli anni di piombo", "da allora in poi",
            ],
          },
          {
            kind: "translate", from: "it", placeholder: "sostantivo", title: "Dal verbo al sostantivo",
            hint: "Scrivi il sostantivo corrispondente.",
            items: ["unificare", "proclamare", "annettere", "sbarcare", "cadere", "insorgere", "liberare", "votare"],
          },
          { kind: "speak", title: "Fai una frase", hint: "Fai una frase su un evento storico (del tuo paese o dell'Italia) con ogni espressione.", items: ["in quegli anni", "l'anno seguente", "nel frattempo", "da allora in poi", "pochi anni dopo", "alla fine del secolo", "durante la guerra", "nel dopoguerra"] },
        ],
      },

      /* 3 */ {
        title: "Suoni",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Leggere le date", hint: "Secoli e anni",
            text: [
              "Gli anni si leggono come numeri: 1861 = milleottocentosessantuno. 1946 = millenovecentoquarantasei.",
              "I secoli dal XIII al XX hanno un nome speciale: il Duecento, il Trecento, il Quattrocento… l'Ottocento, il Novecento. Il XXI secolo è il Duemila.",
              "Gli anni Sessanta, gli anni Settanta: per i decenni.",
            ],
          },
          { kind: "shadow", title: "Ascolta e ripeti", hint: "Leggi bene le date.", items: ["Il Regno d'Italia fu proclamato nel 1861.", "Roma diventò capitale nel 1871.", "La Repubblica nacque il 2 giugno 1946.", "La Costituzione entrò in vigore nel 1948.", "Il boom economico ci fu negli anni Sessanta."] },
          { kind: "shadow", title: "Secoli", hint: "Ripeti.", items: ["il Trecento, Dante e Petrarca", "il Quattrocento, il Rinascimento", "l'Ottocento, il Risorgimento", "il Novecento, le due guerre"] },
        ],
      },

      /* 4 */ {
        title: "Verbi",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Il trapassato remoto", hint: "Forma e uso",
            text: [
              "Forma: passato remoto di avere o essere + participio passato: ebbi finito, ebbe parlato, fu arrivato, fummo partiti, furono entrati.",
              "Uso: solo in frasi introdotte da «quando», «dopo che», «appena», «non appena», «come», e solo se la principale è al passato remoto.",
              "Nel parlato si sostituisce quasi sempre con altre costruzioni: «dopo + infinito passato» (dopo aver finito) o il participio passato (finito il lavoro).",
            ],
            table: { head: ["persona", "trapassato remoto"], rows: [["io", "ebbi finito / fui partito"], ["tu", "avesti finito / fosti partito"], ["lui / lei", "ebbe finito / fu partito"], ["noi", "avemmo finito / fummo partiti"], ["voi", "aveste finito / foste partiti"], ["loro", "ebbero finito / furono partiti"]] },
          },
          k.table("Trapassato remoto", [
            ["(lui) mangiare", "ebbe mangiato"],
            ["(lei) uscire", ""],
            ["(noi) scrivere", ""],
            ["(loro) arrivare", ""],
            ["(io) leggere", ""],
            ["(voi) partire", ""],
          ], "Scrivi il trapassato remoto.", ["forma"]),
          {
            kind: "fill", title: "Completa", hint: "Coniuga il verbo tra parentesi al trapassato remoto.",
            items: [
              "Appena i Mille ___ (sbarcare) a Marsala, cominciarono la marcia verso l'interno.", "Dopo che Garibaldi ___ (incontrare) il re a Teano, si ritirò a Caprera.", "Quando il re ___ (firmare) il decreto, l'Italia fu ufficialmente unita.", "Non appena le truppe ___ (entrare) a Roma, il papa si chiuse in Vaticano.", "Dopo che gli italiani ___ (votare), si contarono le schede per giorni.", "Appena la guerra ___ (finire), cominciò la ricostruzione.", "Quando lo scrittore ___ (terminare) il romanzo, lo mandò all'editore.", "Dopo che i soldati ___ (partire), il paese restò in silenzio.",
            ],
          },
        ],
      },

      /* 5 */ {
        title: "Grammatica",
        skill: "escritura",
        blocks: [
          {
            kind: "intro", title: "Alternative al trapassato remoto", hint: "Più leggere e moderne",
            text: [
              "Dopo + infinito passato (stesso soggetto): «Dopo aver conquistato la Sicilia, Garibaldi passò in Calabria».",
              "Participio passato assoluto: «Conquistata la Sicilia, Garibaldi passò in Calabria». «Finita la guerra, cominciò la ricostruzione».",
              "Gerundio passato: «Avendo conquistato la Sicilia, Garibaldi passò in Calabria» (con una sfumatura di causa).",
            ],
          },
          k.negativa(["Dopo che ebbe vinto le elezioni, il partito formò il governo.", "Appena fu finita la guerra, molti emigrarono.", "Dopo che ebbero firmato il trattato, i diplomatici partirono.", "Quando ebbe letto la lettera, il re la bruciò.", "Dopo che fu arrivato a Roma, il generale incontrò il papa.", "Appena ebbe ricevuto la notizia, il ministro si dimise."], "Riscrivi ogni frase in due modi: con «dopo + infinito passato» e con il participio passato assoluto.", "due alternative"),
          {
            kind: "intro", title: "Trapassato prossimo o remoto?", hint: "La differenza",
            text: ["Il trapassato prossimo (aveva finito) indica un'azione anteriore in generale, con qualsiasi tempo passato: «Quando arrivò, il treno era già partito». Il trapassato remoto (ebbe finito) indica un'azione immediatamente anteriore, solo dopo «appena», «dopo che», «quando» + passato remoto: «Quando ebbe finito, uscì»."],
          },
          {
            kind: "fill", title: "Scegli", hint: "Trapassato prossimo o trapassato remoto?",
            items: ["Quando arrivammo, lo spettacolo ___ (cominciare) da un'ora.", "Appena ___ (finire) di cenare, uscirono.", "Il re non sapeva che i ribelli ___ (prendere) la città.", "Dopo che ___ (salutare) tutti, partì per l'esilio.", "Garibaldi ___ (combattere) già in Sud America prima del 1848.", "Non appena il generale ___ (dare) l'ordine, l'esercito avanzò."],
          },
        ],
      },

      /* 6 */ {
        title: "Ascolta",
        skill: "habla",
        blocks: [
          k.listen("La spedizione dei Mille", "Un professore racconta l'impresa di Garibaldi.", [
            { who: "Prof. Testa", text: "Nella notte tra il 5 e il 6 maggio 1860, circa mille volontari partirono da Quarto, vicino a Genova, su due navi. Li guidava Giuseppe Garibaldi." },
            { who: "Prof. Testa", text: "L'11 maggio sbarcarono a Marsala, in Sicilia, che allora faceva parte del Regno delle Due Sicilie. Appena furono sbarcati, si diressero verso l'interno." },
            { who: "Prof. Testa", text: "Dopo alcune vittorie, alla fine di maggio entrarono a Palermo. In poche settimane i volontari diventarono migliaia, perché molti siciliani si unirono a loro." },
            { who: "Studentessa", text: "E dopo la Sicilia?" },
            { who: "Prof. Testa", text: "Dopo che ebbe conquistato l'isola, Garibaldi passò in Calabria e arrivò a Napoli a settembre. A ottobre incontrò il re Vittorio Emanuele II e gli consegnò il Sud. Pochi mesi dopo, nel marzo del 1861, nacque il Regno d'Italia." },
          ], ["Quando e da dove partirono i Mille?", "Dove sbarcarono? A quale stato apparteneva quella zona?", "Perché i volontari diventarono migliaia?", "Che cosa fece Garibaldi dopo aver conquistato la Sicilia?", "Quando nacque il Regno d'Italia?", "Trova il trapassato remoto nel racconto."]),
          k.listen("Il racconto della nonna", "Una nonna racconta il 2 giugno 1946.", [
            { who: "Nonna Rosa", text: "Avevo ventitré anni. Era la prima volta che votavo: alle elezioni nazionali, prima di allora, le donne non avevano mai votato." },
            { who: "Nonna Rosa", text: "Mi misi il vestito più bello. Mia madre piangeva. Quando ebbi messo la scheda nell'urna, mi sentii una persona nuova." },
            { who: "Nipote", text: "E per chi votasti?" },
            { who: "Nonna Rosa", text: "Per la Repubblica, naturalmente! Ma tuo bisnonno votò per il re, e per una settimana in casa non ci parlammo." },
          ], ["Quanti anni aveva la nonna nel 1946?", "Perché quel voto era speciale?", "Come si preparò?", "Che cosa provò dopo aver votato?", "Per chi votò lei e per chi il bisnonno? Che cosa successe?"]),
        ],
      },

      /* 7 */ {
        title: "Leggi",
        skill: "mixto",
        blocks: [
          k.reading("Il 2 giugno 1946", [
            "Nel 1946 l'Italia usciva da vent'anni di dittatura fascista e da una guerra che l'aveva distrutta. Il re Vittorio Emanuele III, accusato di aver sostenuto Mussolini, aveva abdicato a maggio in favore del figlio Umberto.",
            "Il 2 e il 3 giugno gli italiani furono chiamati a scegliere con un referendum tra monarchia e repubblica. Per la prima volta in un voto nazionale votarono anche le donne. L'affluenza fu altissima: quasi nove italiani su dieci andarono alle urne.",
            "La repubblica vinse con circa il 54 per cento dei voti. Il risultato, però, mostrò un paese diviso: il Nord votò in maggioranza per la repubblica, il Sud per la monarchia.",
            "Non appena furono proclamati i risultati, ci furono contestazioni e tensioni. Il 13 giugno Umberto II, che regnò poco più di un mese ed è ricordato come «il re di maggio», lasciò l'Italia per il Portogallo.",
            "Nello stesso giorno del referendum fu eletta l'Assemblea Costituente, che scrisse la Costituzione. Questa entrò in vigore il 1° gennaio 1948 ed è ancora oggi la legge fondamentale della Repubblica. Da allora in poi, il 2 giugno è la Festa della Repubblica.",
          ], ["Qual era la situazione dell'Italia nel 1946?", "Che cosa scelsero gli italiani con il referendum?", "Che cosa c'era di nuovo in quel voto?", "Chi vinse? In che modo il paese era diviso?", "Perché Umberto II è chiamato «il re di maggio»?", "Che cosa successe il 1° gennaio 1948?"]),
          k.spagna("Racconta un momento chiave della storia del tuo paese, usando il passato remoto, il trapassato remoto e almeno due alternative (dopo + infinito passato, participio assoluto)."),
        ],
      },

      /* 8 */ {
        title: "Parla",
        skill: "habla",
        blocks: [
          {
            kind: "intro", title: "Raccontare la storia", hint: "Organizzare il racconto",
            text: ["Cronologia: «In quegli anni…», «L'anno seguente…», «Nel frattempo…», «Pochi mesi dopo…», «Alla fine…». Cause e conseguenze: «Per questo motivo…», «Ciò portò a…», «In seguito a…». Valutazione: «Fu una svolta perché…», «Ancora oggi si discute se…»."],
          },
          k.rispondi(["Quale evento storico del tuo paese ti sembra più importante? Perché?", "Che cosa sapevi del Risorgimento prima di questa unità?", "I tuoi nonni ti hanno raccontato episodi storici che hanno vissuto?", "La storia si studia bene a scuola, secondo te?", "Quale personaggio storico vorresti incontrare?", "Che cosa pensi delle feste nazionali?"]),
          { kind: "speak", title: "La linea del tempo", hint: "Racconta in due minuti la storia d'Italia dal 1860 al 1948, seguendo la linea del tempo: 1860, 1861, 1871, 1915, 1922, 1943, 1945, 1946, 1948. Se non conosci un evento, cercalo.", items: ["Nel 1860…"] },
          {
            kind: "roleplay", title: "Testimone della storia", hint: "L'IA interpreta un garibaldino che partecipò alla spedizione dei Mille. Intervistalo.",
            steps: ["Chiedigli perché partì.", "Chiedigli com'era il viaggio.", "Chiedigli che cosa successe appena sbarcarono.", "Chiedigli che cosa provò alla fine.", "Riassumi la sua storia al passato remoto."],
          },
          {
            kind: "roleplay", title: "Il dibattito storico", hint: "L'IA sostiene che il Risorgimento fu solo una conquista del Sud da parte del Nord. Discuti con lei.",
            steps: ["Riassumi la sua tesi.", "Porta un argomento contrario.", "Ammetti un aspetto vero della sua posizione.", "Fai un esempio storico.", "Concludi con una valutazione equilibrata."],
          },
          { kind: "speak", title: "Due minuti", hint: "Racconta per due minuti la storia della tua famiglia attraverso tre generazioni, collegandola agli eventi storici del tuo paese.", items: ["I miei bisnonni…"] },
        ],
      },

      /* 9 */ {
        title: "Scrivi",
        skill: "escritura",
        blocks: [
          k.traduci(["Garibaldi sbarcò. Subito dopo, marciò su Palermo. (appena + trapassato remoto)", "Il re firmò. Poi partì. (dopo che + trapassato remoto)", "Dopo che ebbe finito il discorso, salutò la folla. (participio assoluto)", "Appena ebbero votato, tornarono a casa. (dopo + infinito passato)", "Finita la guerra, l'Italia si ricostruì. (dopo che + trapassato remoto)", "Quando arrivò, il re era già partito. (spiega perché qui non c'è il trapassato remoto)", "Il popolo votò. La repubblica vinse. (unisci con una congiunzione cronologica)", "Da allora il 2 giugno è festa nazionale. (inizia con «da allora in poi»)"], "Riscrivi ogni frase come indicato."),
          { kind: "write", title: "Una pagina di storia", hint: "Scrivi una pagina (280–320 parole) per un libro di storia per ragazzi su un evento (italiano o del tuo paese): contesto, svolgimento, conseguenze. Usa il passato remoto, almeno tre trapassati remoti e due alternative (participio assoluto, dopo + infinito passato).", rows: 20, items: ["Titolo:", "Testo:"] },
        ],
      },

      /* 10 */ {
        title: "Ripasso e immersione",
        skill: "mixto",
        blocks: [
          k.dettato("Dettato: forme", ["ebbe finito", "furono sbarcati", "appena fu proclamata", "dopo che ebbero votato", "finita la guerra", "dopo aver conquistato"], "Ascolta e scrivi."),
          k.dettato("Dettato: frasi", ["Il Regno d'Italia fu proclamato nel 1861.", "Appena fu sbarcato, marciò verso Palermo.", "Per la prima volta votarono anche le donne.", "La Costituzione entrò in vigore nel 1948.", "Da allora in poi, il 2 giugno è festa nazionale."]),
          k.media([
            { type: "Film", title: "Il Gattopardo (Luchino Visconti, 1963)", where: "Cerca dove vederlo su JustWatch", why: "Dal romanzo di Tomasi di Lampedusa: la Sicilia aristocratica durante lo sbarco dei Mille." },
            { type: "Film", title: "Noi credevamo (Mario Martone, 2010)", where: "Cerca dove vederlo su JustWatch", why: "Il Risorgimento visto da tre giovani del Sud: ideali, delusioni e contraddizioni." },
            { type: "TV", title: "Rai Storia / Passato e Presente", where: "raiplay.it", why: "Programma di divulgazione storica con Paolo Mieli: puntate di quaranta minuti su ogni periodo." },
          ]),
          k.caccia(),
          { kind: "speak", title: "Racconta", hint: "Riassumi al passato remoto la trama del film o di una puntata, con almeno due trapassati remoti.", items: ["Appena il film fu cominciato…"] },
        ],
      },
    ],

    exam: k.exam(67, {
      parole: ["il Risorgimento", "l'unificazione", "il referendum", "la Costituzione", "lo sbarco", "la spedizione", "proclamare", "annettere", "il dopoguerra", "da allora in poi"],
      contrario: ["monarchia → contrario", "unificare → sostantivo", "proclamare → sostantivo", "sbarcare → sostantivo", "dittatura → contrario", "dopoguerra → contrario"],
      verbiHint: "Scrivi il trapassato remoto.",
      verbiCols: ["forma"],
      verbi: [["(io) parlare", ""], ["(tu) venire", ""], ["(lei) decidere", ""], ["(noi) arrivare", ""], ["(voi) vedere", ""], ["(loro) uscire", ""]],
      completaHint: "Coniuga al trapassato remoto o al trapassato prossimo.",
      completa: ["Appena il re ___ (partire), fu proclamata la repubblica.", "Dopo che ___ (loro, firmare), lasciarono la sala.", "Quando arrivò, la battaglia ___ (finire) da ore.", "Non appena ___ (lui, ricevere) l'ordine, attaccò.", "Non sapevano che il nemico ___ (ritirarsi).", "Dopo che ___ (noi, votare), tornammo a casa.", "Quando ___ (lei, leggere) la lettera, scoppiò a piangere.", "I soldati ___ (combattere) già in Crimea prima del 1859."],
      trasformaHint: "Riscrivi ogni frase come indicato.",
      trasforma: ["Dopo che ebbe vinto, tornò a casa. (participio assoluto)", "Appena furono arrivati, si riposarono. (dopo + infinito passato)", "Finita la riunione, uscirono. (dopo che + trapassato remoto)", "Garibaldi incontrò il re a Teano. (al passivo: Il re…)", "Il popolo scelse la repubblica nel 1946. (passato prossimo, registro parlato)", "Dopo aver scritto la Costituzione, l'Assemblea si sciolse. (dopo che + trapassato remoto)"],
      leggi: {
        text: [
          "Il 20 settembre 1870 le truppe italiane aprirono una breccia nelle mura di Roma, vicino a Porta Pia. Appena furono entrate in città, il papa Pio IX si chiuse in Vaticano e si dichiarò prigioniero.",
          "Dopo che ebbero conquistato la città, gli italiani organizzarono un plebiscito: la grande maggioranza dei romani votò per l'annessione al Regno d'Italia.",
          "L'anno seguente Roma diventò ufficialmente capitale. I rapporti tra lo Stato italiano e la Chiesa rimasero tesi per quasi sessant'anni, fino ai Patti Lateranensi del 1929.",
        ],
        questions: ["Che cosa successe il 20 settembre 1870?", "Come reagì il papa?", "Che cosa organizzarono gli italiani e con quale risultato?", "Quando diventò capitale Roma? Fino a quando i rapporti con la Chiesa rimasero tesi?"],
      },
      ascolta: {
        script: [
          { who: "Guida", text: "In questa piazza, il 25 aprile 1945, si radunarono migliaia di persone." },
          { who: "Turista", text: "Che cosa successe quel giorno?" },
          { who: "Guida", text: "Il comitato di liberazione proclamò l'insurrezione. Non appena i partigiani ebbero preso il controllo della città, la popolazione scese in strada a festeggiare." },
          { who: "Turista", text: "E oggi?" },
          { who: "Guida", text: "Da allora in poi il 25 aprile è la Festa della Liberazione." },
        ],
        questions: ["Che cosa successe il 25 aprile 1945?", "Che cosa fece la popolazione e quando?", "Che festa è oggi il 25 aprile?", "Trova il trapassato remoto nel dialogo."],
      },
      parla: ["Racconta un evento storico del tuo paese al passato remoto.", "Riassumi la storia d'Italia dal 1860 al 1948.", "Racconta un episodio storico vissuto dalla tua famiglia.", "Quale evento storico avresti voluto vedere?"],
      role: ["L'IA è una donna che votò il 2 giugno 1946.", "Intervistala sul giorno del voto.", "Riassumi la sua testimonianza al passato remoto, con un trapassato remoto."],
      dettato: ["ebbe finito", "appena fu sbarcato", "dopo che ebbero votato", "il Regno d'Italia", "finita la guerra", "la Costituzione"],
      traduci: ["Il generale entrò in città. Subito dopo, parlò alla folla. (appena + trapassato remoto)", "Finirono il lavoro. Poi andarono via. (dopo che + trapassato remoto)", "Dopo che ebbe letto, spense la luce. (participio assoluto)", "Appena fu arrivata, telefonò. (dopo + infinito passato)", "I Mille partirono da Quarto. (passato prossimo)", "Finito il discorso, il re uscì. (dopo che + trapassato remoto)"],
      scrivi: { hint: "Scrivi (180–220 parole) la storia di un evento importante del tuo paese come in un'enciclopedia: contesto, fatti in ordine cronologico, conseguenze. Usa il passato remoto e almeno due trapassati remoti.", start: "Nel…" },
    }),
  };
})();
