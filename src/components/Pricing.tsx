
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "€149",
      period: "/mese",
      setupFee: "€299 una tantum per configurazione",
      features: [
        "Fino a 100 chiamate al mese",
        "Pianificazione appuntamenti",
        "Informazioni base sui servizi",
        "Orari di apertura",
        "Notifiche email",
        "Pannello di controllo web"
      ],
      cta: "Inizia Ora",
      popular: false
    },
    {
      name: "Professionale",
      price: "€249",
      period: "/mese",
      setupFee: "€299 una tantum per configurazione",
      features: [
        "Fino a 300 chiamate al mese",
        "Gestione appuntamenti avanzata",
        "Informazioni dettagliate sui servizi",
        "Gestione disponibilità del personale",
        "Notifiche SMS",
        "Integrazione calendario",
        "Analisi di base"
      ],
      cta: "Richiedi Demo",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Personalizzato",
      period: "",
      setupFee: "Configurazione e onboarding personalizzati",
      features: [
        "Chiamate illimitate",
        "Sedi multiple",
        "Flussi di lavoro personalizzati",
        "Integrazioni API",
        "Supporto prioritario",
        "Analisi avanzate",
        "Servizio white-label"
      ],
      cta: "Contatta Vendite",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Prezzi <span className="text-vonlop-primary">Semplici e Trasparenti</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Scegli il piano giusto per la tua attività. Nessun costo nascosto o contratti a lungo termine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
                plan.popular ? "border-vonlop-primary" : "border-transparent"
              }`}
            >
              {plan.popular && (
                <div className="bg-vonlop-primary text-white text-center py-2 font-medium">
                  Più Popolare
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-vonlop-text/70">{plan.period}</span>
                  <div className="text-sm text-vonlop-text/70 mt-1">{plan.setupFee}</div>
                </div>
                <hr className="my-6" />
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <Check className="text-vonlop-cta" size={18} />
                      </div>
                      <span className="text-vonlop-text/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-vonlop-cta hover:bg-vonlop-cta/90 text-white" 
                      : "bg-vonlop-primary hover:bg-vonlop-primary/90 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-vonlop-text/70">
            Hai bisogno di una soluzione personalizzata? <a href="#" className="text-vonlop-primary font-medium">Contattaci</a> per prezzi su misura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
