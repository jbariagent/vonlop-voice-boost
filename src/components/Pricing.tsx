
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "$149",
      period: "/month",
      setupFee: "$299 one-time setup",
      features: [
        "Up to 100 calls per month",
        "Appointment scheduling",
        "Basic service inquiries",
        "Business hours information",
        "Email notifications",
        "Web dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "/month",
      setupFee: "$299 one-time setup",
      features: [
        "Up to 300 calls per month",
        "Advanced appointment management",
        "Detailed service inquiries",
        "Staff availability management",
        "SMS notifications",
        "Calendar integration",
        "Basic analytics"
      ],
      cta: "Request Demo",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      setupFee: "Custom setup & onboarding",
      features: [
        "Unlimited calls",
        "Multiple locations",
        "Custom workflows",
        "API integrations",
        "Priority support",
        "Advanced analytics",
        "White-labeled service"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Simple, Transparent <span className="text-vonlop-primary">Pricing</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees or long-term contracts.
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
                  Most Popular
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
            Need a custom solution? <a href="#" className="text-vonlop-primary font-medium">Contact us</a> for tailored pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
