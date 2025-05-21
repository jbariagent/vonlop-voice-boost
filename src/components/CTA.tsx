
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CTA = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

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
            <Button 
              className="bg-white text-vonlop-primary hover:bg-white/90 px-8 py-6 text-lg"
              onClick={() => setShowDemoForm(true)}
            >
              Richiedi Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => setShowConsultation(true)}
            >
              Prenota Consulenza
            </Button>
          </div>
          <p className="mt-8 text-white/70 text-sm">
            Posti limitati disponibili per il nostro programma beta. Ottieni accesso prioritario oggi.
          </p>
        </div>
      </div>

      {/* Dialog for Demo Request */}
      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Richiedi una Demo</DialogTitle>
            <DialogDescription>
              Compila il form sottostante per richiedere una demo personalizzata di Vonlop.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="name" className="text-left text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="email" className="text-left text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo indirizzo email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="business" className="text-left text-sm font-medium">
                Tipo di Attività
              </label>
              <input
                id="business"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Es. Salone di bellezza, Spa, ecc."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setShowDemoForm(false)} className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white">
              Invia Richiesta
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for Consultation */}
      <Dialog open={showConsultation} onOpenChange={setShowConsultation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Prenota una Consulenza</DialogTitle>
            <DialogDescription>
              Seleziona una data e ora per la tua consulenza gratuita con un esperto Vonlop.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="name" className="text-left text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="email" className="text-left text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo indirizzo email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="date" className="text-left text-sm font-medium">
                Data Preferita
              </label>
              <input
                id="date"
                type="date"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setShowConsultation(false)} className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white">
              Prenota
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
