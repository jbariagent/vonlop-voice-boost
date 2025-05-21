
import { Phone, Calendar, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Collega il Tuo Telefono",
      description: "Il tuo assistente vocale AI si integra con il tuo sistema telefonico esistente in pochi minuti."
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Personalizza il Tuo Assistente",
      description: "Imposta i tuoi servizi, orari di lavoro, prezzi e politiche di prenotazione."
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "Lascia che Vonlop Gestisca le Chiamate",
      description: "Rilassati mentre il tuo assistente vocale AI prenota appuntamenti e risponde a domande 24/7."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Come <span className="text-vonlop-primary">Funziona</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Attiva il tuo assistente vocale AI in pochi minuti, non mesi.
            Nessun codice, configurazione complessa o conoscenze tecniche richieste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-full h-1 bg-vonlop-primary/20 z-0" />
              )}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-vonlop-primary mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-vonlop-text/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
