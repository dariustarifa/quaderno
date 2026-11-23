// Esame di livello A2 · 60 minutos · 5 partes de 20 puntos. Va a lo más difícil de A2.
window.LEVELS = window.LEVELS || {};
window.LEVELS.A2 = {
  id: "A2",
  title: "Esame di livello A2",
  minutes: 60,
  hint: "Una hora, de un tirón y sin buscar nada. Cinco partes de 20 puntos. Aprobado: 70 en total y al menos 10 en cada parte. Al terminar, copia el examen para corregir y pide la nota por partes.",
  parts: [
    {
      title: "Ascolto",
      minutes: 12,
      blocks: [
        {
          kind: "listen",
          title: "A. Al servizio clienti",
          hint: "Escucha dos veces como máximo y responde.",
          script: [
            { who: "Operatore", text: "Servizio clienti TrenoVeloce, buongiorno. Come posso aiutarLa?" },
            { who: "Sig.ra Ruiz", text: "Buongiorno. Ieri il mio treno da Roma a Milano è arrivato con due ore di ritardo e ho perso un appuntamento di lavoro importante." },
            { who: "Operatore", text: "Mi dispiace molto. Mi dice il codice del biglietto?" },
            { who: "Sig.ra Ruiz", text: "Sì: X come xilofono, quattro sette, nove due, A come Ancona." },
            { who: "Operatore", text: "Perfetto. Con un ritardo di più di un'ora Le restituiamo il venticinque per cento del biglietto; con più di due ore, il cinquanta per cento." },
            { who: "Sig.ra Ruiz", text: "Il ritardo è stato di due ore e dieci minuti." },
            { who: "Operatore", text: "Allora Le spetta la metà. Glielo restituiamo sulla carta entro quindici giorni. Le mando la conferma per email." },
            { who: "Sig.ra Ruiz", text: "Grazie. Però avrei preferito arrivare in orario…" },
          ],
          questions: [
            "Che cosa è successo ieri alla signora Ruiz? Che conseguenza ha avuto?",
            "Qual è il codice del biglietto?",
            "Quanto si restituisce con più di un'ora di ritardo? E con più di due?",
            "Quanto riceverà la signora? Come e entro quando?",
            "È contenta alla fine? Perché?",
          ],
        },
        {
          kind: "listen",
          title: "B. Un ricordo",
          hint: "Escucha dos veces como máximo y responde.",
          script: [
            { who: "Nonna Lia", text: "Quando ero ragazza, a Trieste, d'estate andavamo tutti i giorni al bagno Ausonia, sul mare." },
            { who: "Nonna Lia", text: "C'era una regola strana: gli uomini da una parte e le donne dall'altra, separati da un muro. Ci divertivamo lo stesso!" },
            { who: "Nonna Lia", text: "Un giorno, mentre nuotavo, ho perso l'anello di mia madre. Ho pianto tutto il pomeriggio." },
            { who: "Nonna Lia", text: "Il giorno dopo un ragazzo l'ha trovato sulla sabbia e me l'ha riportato. Era tuo nonno: ci siamo sposati quattro anni dopo." },
            { who: "Nonna Lia", text: "Se potessi tornare indietro, rifarei tutto. Anche perdere l'anello!" },
          ],
          questions: [
            "Dove andava la nonna d'estate da ragazza?",
            "Qual era la regola strana?",
            "Che cosa è successo un giorno mentre nuotava?",
            "Chi ha trovato l'anello? Che cosa è successo dopo?",
            "Che cosa farebbe la nonna se potesse tornare indietro?",
          ],
        },
        {
          kind: "dictation",
          title: "C. Dettato",
          hint: "Escucha y escribe. Cuidado con los pronombres, las dobles y los acentos.",
          items: ["Gliel'ho già detto ieri.", "Quando ero piccola, abitavamo in campagna.", "Ce ne sono ancora tre.", "Al posto tuo, ci penserei bene.", "Non preoccuparti, ce la faremo!", "Stava piovendo quando siamo usciti."],
        },
      ],
    },
    {
      title: "Lettura",
      minutes: 15,
      blocks: [
        {
          kind: "reading",
          title: "A. Una lettera alla rubrica dei consigli",
          hint: "Lee la carta y responde.",
          text: [
            "Cara redazione, ho 26 anni e da due anni lavoro in uno studio di architettura a Bologna. Il lavoro mi piace, ma lo stipendio è basso e faccio sempre gli straordinari senza essere pagata.",
            "Il mese scorso un'azienda di Monaco di Baviera mi ha offerto un posto: guadagnerei il doppio e avrei un contratto a tempo indeterminato. Il problema è che non parlo tedesco e che il mio ragazzo non può lasciare il suo lavoro.",
            "Lui dice che dovrei accettare e che ci vedremmo nei fine settimana. I miei genitori, invece, pensano che sia un errore lasciare l'Italia proprio adesso che mio padre sta male.",
            "Ho tempo fino a venerdì per rispondere. Non dormo da giorni. Che cosa fareste voi al posto mio? — Francesca, 26 anni",
          ],
          questions: [
            "Che lavoro fa Francesca? Che problemi ha?",
            "Che cosa le hanno offerto? Quali sarebbero i vantaggi?",
            "Quali sono gli ostacoli?",
            "Che cosa pensa il ragazzo? E i genitori? Perché?",
            "Entro quando deve decidere? Come si sente?",
            "Che cosa le consiglieresti tu? Perché?",
          ],
        },
        {
          kind: "reading",
          title: "B. Un articolo",
          hint: "Lee el artículo y responde.",
          text: [
            "Negli ultimi dieci anni il numero di italiani che vivono all'estero è cresciuto moltissimo. Sono soprattutto giovani tra i 25 e i 35 anni, spesso laureati.",
            "Chi parte racconta di trovare più opportunità, stipendi migliori e meno burocrazia. Ma quasi tutti dicono che la cosa più difficile è la lontananza dalla famiglia e dagli amici.",
            "Molti pensano di tornare «un giorno», ma solo uno su quattro lo fa davvero. Chi torna, spesso lo fa dopo aver avuto figli: «Volevo che crescessero vicino ai nonni», spiega Matteo, rientrato a Torino da Dublino.",
          ],
          questions: [
            "Chi sono gli italiani che partono, soprattutto?",
            "Perché partono?",
            "Qual è la cosa più difficile per loro?",
            "Quanti tornano davvero? Perché tornano, spesso?",
          ],
        },
      ],
    },
    {
      title: "Grammatica e lessico",
      minutes: 13,
      blocks: [
        {
          kind: "fill",
          title: "A. Completa",
          hint: "Completa cada hueco con una sola palabra o forma.",
          items: [
            "Mentre ___ (noi, cenare), è andata via la luce.",
            "Il libro che mi hai prestato? ___ ho già restituito. (a te)",
            "Quando ___ (io, finire) l'università, andrò a vivere da sola.",
            "Al posto tuo, io non ___ (dire) niente a nessuno.",
            "Non ___ (tu, preoccuparsi): ti aiuto io!",
            "Quante sorelle hai? — ___ ho due.",
            "Per arrivare in centro ___ vogliono quaranta minuti.",
            "Milano è più cara ___ Napoli.",
            "È più facile parlare ___ ascoltare.",
            "Ho telefonato a Giulia e ___ ho detto tutto.",
            "Signora, ___ (Lei, accomodarsi), prego.",
            "Il treno ___ (stare per) partire: corri!",
          ],
        },
        {
          kind: "table",
          title: "B. Verbi",
          hint: "Completa con lei en cada tiempo.",
          cols: ["imperfetto", "passato prossimo", "futuro", "condizionale"],
          rows: [
            ["fare", "", "", "", ""],
            ["venire", "", "", "", ""],
            ["rimanere", "", "", "", ""],
            ["accorgersi", "", "", "", ""],
          ],
        },
        {
          kind: "translate",
          from: "it",
          placeholder: "trasforma",
          title: "C. Trasforma",
          hint: "Sigue la indicación entre paréntesis.",
          items: [
            "Ho dato le chiavi a Marco. (con pronombre combinado)",
            "Bevi il caffè! (imperativo negativo)",
            "Vuoi un tè? (más educado, condizionale)",
            "La gente mangia tardi in Spagna. (con «si» impersonal)",
            "Ha finito l'università. Poi è partita. (une con «dopo + infinitivo pasado»)",
            "Puoi aiutarmi, signora? (imperativo formal, Lei)",
          ],
        },
      ],
    },
    {
      title: "Scrittura",
      minutes: 10,
      blocks: [
        {
          kind: "write",
          title: "A. Una mail di consigli",
          hint: "Responde a Francesca (la de la parte de Lettura) con un correo de 80–100 palabras: di qué harías tú en su lugar y por qué, y dale al menos tres consejos (condizionale e imperativo).",
          rows: 10,
          items: ["Cara Francesca,"],
        },
        {
          kind: "write",
          title: "B. Un racconto breve",
          hint: "Cuenta (50–60 palabras) un viaje que salió mal: cómo era la situación (imperfetto) y qué pasó (passato prossimo).",
          rows: 6,
          items: ["L'anno scorso…"],
        },
      ],
    },
    {
      title: "Parlato",
      minutes: 10,
      blocks: [
        {
          kind: "speak",
          title: "A. Monologo",
          hint: "Habla sin parar el tiempo indicado. Graba la respuesta con el micro.",
          items: [
            "(1 minuto) Racconta com'era la tua vita dieci anni fa e che cosa è cambiato.",
            "(1 minuto) Descrivi i tuoi progetti per i prossimi anni e che cosa ti piacerebbe fare.",
            "(1 minuto e mezzo) Confronta la vita in città e in un piccolo paese: dove vivresti meglio? Perché?",
          ],
        },
        {
          kind: "roleplay",
          title: "B. Il reclamo (con imprevisto)",
          hint: "Hazlo con la IA, de una vez y sin preparar. Usa «Lei». La IA hace de responsable de un hotel y te pondrá un problema que no conoces.",
          steps: [
            "Llegas al hotel y tu reserva no aparece: explica la situación.",
            "Resuelve el problema que te ponga el recepcionista.",
            "Pide algo como compensación, con educación.",
            "Cierra el acuerdo y pide confirmación por escrito.",
          ],
        },
      ],
    },
  ],
};
