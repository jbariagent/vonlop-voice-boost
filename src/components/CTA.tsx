
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-vonlop-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Never Miss Another Call?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join the growing number of salons and spas that are streamlining their business with Vonlop's AI voice agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-vonlop-primary hover:bg-white/90 px-8 py-6 text-lg">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Book Consultation
            </Button>
          </div>
          <p className="mt-8 text-white/70 text-sm">
            Limited spots available for our beta program. Get priority access today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
