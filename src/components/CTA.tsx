
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-vonlop-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a Non Perdere Mai Più Una Chiamata?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Unisciti al crescente numero di saloni e spa che stanno ottimizzando la loro attività con gli assistenti vocali AI di Vonlop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-vonlop-primary hover:bg-white/90 px-8 py-6 text-lg">
              Richiedi Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Prenota Consulenza
            </Button>
          </div>
          <p className="mt-8 text-white/70 text-sm">
            Posti limitati disponibili per il nostro programma beta. Ottieni accesso prioritario oggi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
