
import { Calendar, MessageCircle, Info, Users, Check, DollarSign } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="text-vonlop-primary" size={24} />,
      title: "24/7 Appointment Booking",
      description: "Never miss another booking opportunity, even outside business hours."
    },
    {
      icon: <MessageCircle className="text-vonlop-primary" size={24} />,
      title: "Service & Pricing Inquiries",
      description: "Instantly answer questions about your services and rates."
    },
    {
      icon: <Info className="text-vonlop-primary" size={24} />,
      title: "Business Information",
      description: "Share hours, location, and policies automatically with every caller."
    },
    {
      icon: <Users className="text-vonlop-primary" size={24} />,
      title: "Multilingual Support",
      description: "Serve customers in their preferred language without additional staff."
    },
    {
      icon: <Check className="text-vonlop-primary" size={24} />,
      title: "Consistent Communication",
      description: "Deliver reliable information with the same quality every time."
    },
    {
      icon: <DollarSign className="text-vonlop-primary" size={24} />,
      title: "Cost-Efficient",
      description: "Fraction of the cost of hiring a receptionist or answering service."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Key <span className="text-vonlop-primary">Features</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Vonlop handles your routine phone calls so you can focus on what matters most – your clients and your craft.
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
