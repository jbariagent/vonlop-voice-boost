
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vonlop has revolutionized our salon's booking process. We're booking 30% more appointments and our staff can focus on clients actually in the salon.",
      name: "Sarah Johnson",
      role: "Owner, Elegance Hair Salon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The AI voice agent handles all our routine calls perfectly. Our clients love that they can book appointments any time, even at 2 AM!",
      name: "Michael Chen",
      role: "Manager, Tranquil Spa",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "As a small nail salon, we couldn't afford a full-time receptionist. Vonlop gives us the same capabilities at a fraction of the cost.",
      name: "Jessica Williams",
      role: "Owner, Polished Nail Boutique",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            What Our <span className="text-vonlop-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Hear from businesses that have transformed their customer experience with Vonlop.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-vonlop-background rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="absolute top-0 right-0 w-40 h-40 bg-vonlop-primary/5 rounded-full -mr-10 -mt-10 z-0"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-vonlop-accent/10 rounded-full -ml-8 -mb-8 z-0"></div>
            
            <div className="relative z-10">
              <svg className="text-vonlop-primary/30 h-16 w-16 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <blockquote className="text-xl md:text-2xl font-medium text-vonlop-text mb-8">
                {testimonials[activeIndex].quote}
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-vonlop-text/70">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? "bg-vonlop-primary" : "bg-vonlop-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              variant="ghost" 
              onClick={nextTestimonial}
              className="text-vonlop-primary hover:bg-vonlop-primary/5 flex items-center"
            >
              Next testimonial <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
