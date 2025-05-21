
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Come funziona l'assistente vocale AI Vonlop?",
      answer: "I nostri assistenti vocali AI utilizzano l'elaborazione avanzata del linguaggio naturale per comprendere e rispondere alle richieste dei chiamanti. Si integrano con il tuo sistema telefonico esistente e possono gestire appuntamenti, rispondere a domande sui servizi, fornire informazioni sui prezzi e altro ancora, tutto in modo naturale e conversazionale."
    },
    {
      question: "Ho bisogno di apparecchiature speciali o di un nuovo sistema telefonico?",
      answer: "No, Vonlop funziona con il tuo sistema telefonico esistente. Configuriamo semplicemente l'inoltro di chiamata al nostro sistema AI quando vuoi che le chiamate vengano gestite automaticamente. Puoi facilmente attivare o disattivare questa funzione secondo necessità."
    },
    {
      question: "Quanto tempo ci vuole per la configurazione?",
      answer: "La maggior parte delle attività è operativa entro 48 ore. Gestiamo noi la configurazione tecnica, e tu devi solo fornire informazioni sui tuoi servizi, prezzi, orari di lavoro e politiche di prenotazione."
    },
    {
      question: "I clienti sapranno che stanno parlando con un'AI?",
      answer: "Crediamo nella trasparenza, quindi sì, il nostro assistente AI si identifica come assistente virtuale. Tuttavia, la nostra AI è così naturale ed efficace che i clienti apprezzano la comodità e il servizio tempestivo."
    },
    {
      question: "Cosa succede se l'AI non sa rispondere a una domanda specifica?",
      answer: "Se l'AI incontra una domanda che non può gestire, può prendere un messaggio, trasferire la chiamata a un membro dello staff, o offrire di far richiamare il cliente, a seconda delle tue preferenze."
    },
    {
      question: "Come gestisce Vonlop la prenotazione degli appuntamenti?",
      answer: "Vonlop si integra con il tuo sistema di calendario esistente (Google Calendar, Microsoft Outlook, ecc.) per verificare la disponibilità e pianificare appuntamenti in tempo reale. Può anche gestire modifiche e cancellazioni in base alle tue politiche."
    },
    {
      question: "Posso personalizzare le informazioni che l'AI fornisce?",
      answer: "Assolutamente. Durante la configurazione, fornirai informazioni dettagliate sui tuoi servizi, prezzi, politiche e altro. Puoi aggiornare queste informazioni in qualsiasi momento attraverso il nostro pannello di controllo web."
    },
    {
      question: "Quali lingue supporta Vonlop?",
      answer: "Attualmente, Vonlop supporta italiano, inglese, spagnolo, francese e mandarino, con altre lingue in arrivo. Questo ti permette di servire una clientela diversificata senza personale aggiuntivo."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Domande <span className="text-vonlop-primary">Frequenti</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Hai domande su Vonlop? Abbiamo le risposte.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-vonlop-text">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-vonlop-primary transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-vonlop-text/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
