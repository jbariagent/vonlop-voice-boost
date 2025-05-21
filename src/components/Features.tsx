
import { Calendar, MessageCircle, Info, Users, Check, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="text-vonlop-primary" size={24} />,
      title: "Prenotazione Appuntamenti 24/7",
      description: "Non perdere mai più un'opportunità di prenotazione, anche fuori dall'orario lavorativo."
    },
    {
      icon: <MessageCircle className="text-vonlop-primary" size={24} />,
      title: "Informazioni su Servizi e Prezzi",
      description: "Rispondi istantaneamente alle domande sui tuoi servizi e tariffe."
    },
    {
      icon: <Info className="text-vonlop-primary" size={24} />,
      title: "Informazioni sull'Attività",
      description: "Condividi orari, posizione e politiche automaticamente con ogni chiamante."
    },
    {
      icon: <Users className="text-vonlop-primary" size={24} />,
      title: "Supporto Multilingua",
      description: "Servi i clienti nella loro lingua preferita senza personale aggiuntivo."
    },
    {
      icon: <Check className="text-vonlop-primary" size={24} />,
      title: "Comunicazione Coerente",
      description: "Fornisci informazioni affidabili con la stessa qualità ogni volta."
    },
    {
      icon: <DollarSign className="text-vonlop-primary" size={24} />,
      title: "Economicamente Vantaggioso",
      description: "Una frazione del costo di assumere un receptionist o un servizio di risposta."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Caratteristiche <span className="text-vonlop-primary">Principali</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Vonlop gestisce le tue chiamate telefoniche di routine così puoi concentrarti su ciò che conta di più – i tuoi clienti e la tua professionalità.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-vonlop-primary/10 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-vonlop-text/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
