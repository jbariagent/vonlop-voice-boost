
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-vonlop-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-6">
            <h1 className="text-4xl md:text-5xl font-bold text-vonlop-text tracking-tight">
              <span className="text-vonlop-primary">AI Voice Agents</span> That Answer Your Business Calls
            </h1>
            <p className="text-lg md:text-xl text-vonlop-text/80">
              Vonlop delivers ready-to-use AI voice agents that handle inbound calls, book appointments, and answer service-related questions — with zero coding or complex setup.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>24/7 appointment scheduling</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>Handles service and pricing inquiries</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>Multilingual support</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white px-8 py-6 text-lg">
                Request Demo
              </Button>
              <Button variant="outline" className="border-vonlop-primary text-vonlop-primary hover:bg-vonlop-primary/5 px-8 py-6 text-lg">
                Book Consultation
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vonlop-accent/20 rounded-full -mr-16 -mt-16 z-0"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-vonlop-primary/10 rounded-full -ml-12 -mb-12 z-0"></div>
            <div className="relative z-10 space-y-6">
              <div className="bg-vonlop-background p-4 rounded-lg border border-vonlop-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-vonlop-primary" />
                  <h3 className="font-medium">Appointment Booking</h3>
                </div>
                <p className="text-sm text-vonlop-text/70">
                  "I'd like to schedule a haircut for next Tuesday afternoon."
                </p>
                <div className="mt-3 p-2 bg-white rounded border border-vonlop-accent/30">
                  <p className="text-sm text-vonlop-text/80">
                    "Great! I have availability at 2:00 PM or 4:30 PM next Tuesday. Which would you prefer?"
                  </p>
                </div>
              </div>
              
              <div className="bg-vonlop-background p-4 rounded-lg border border-vonlop-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="text-vonlop-primary" />
                  <h3 className="font-medium">Service Information</h3>
                </div>
                <p className="text-sm text-vonlop-text/70">
                  "How long does a full set of acrylic nails take?"
                </p>
                <div className="mt-3 p-2 bg-white rounded border border-vonlop-accent/30">
                  <p className="text-sm text-vonlop-text/80">
                    "A full set of acrylic nails typically takes about 60-90 minutes. Would you like to book an appointment?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
