
import { Phone, Calendar, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Connect Your Phone",
      description: "Your AI voice agent integrates with your existing phone system in minutes."
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Customize Your Agent",
      description: "Set your services, business hours, pricing, and booking policies."
    },
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "Let Vonlop Handle Calls",
      description: "Sit back as your AI voice agent books appointments and answers questions 24/7."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            How It <span className="text-vonlop-primary">Works</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Get your AI voice agent up and running in minutes, not months.
            No coding, complex setup, or technical knowledge required.
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
