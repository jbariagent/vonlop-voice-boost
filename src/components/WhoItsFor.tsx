
import { Check } from "lucide-react";

const WhoItsFor = () => {
  const businesses = [
    {
      title: "Hair Salons",
      features: ["24/7 appointment booking", "Service & pricing inquiries", "Stylist availability"]
    },
    {
      title: "Nail Salons",
      features: ["Schedule new appointments", "Answer common questions", "Provide service times"]
    },
    {
      title: "Spas & Wellness",
      features: ["Manage treatment bookings", "Explain services", "Handle cancellations"]
    }
  ];

  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Who It's <span className="text-vonlop-primary">For</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Vonlop is designed for service-based businesses that rely on appointments and customer inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-vonlop-primary">{business.title}</h3>
              <ul className="space-y-4">
                {business.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-vonlop-cta/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="text-vonlop-cta" size={16} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
