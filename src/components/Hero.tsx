
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Hero = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showConsultation, setShowConsultation] = useState(false);

  return (
    <section className="bg-vonlop-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-6">
            <h1 className="text-4xl md:text-5xl font-bold text-vonlop-text tracking-tight">
              <span className="text-vonlop-primary">Assistenti Vocali AI</span> Che Rispondono Alle Chiamate Della Tua Attività
            </h1>
            <p className="text-lg md:text-xl text-vonlop-text/80">
              Vonlop offre assistenti vocali AI pronti all'uso che gestiscono chiamate in entrata, prenotano appuntamenti e rispondono a domande sui servizi — senza necessità di programmazione o configurazioni complesse.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>Pianificazione degli appuntamenti 24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>Gestisce domande su servizi e prezzi</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-vonlop-cta" size={20} />
                <p>Supporto multilingua</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white px-8 py-6 text-lg"
                onClick={() => setShowDemoForm(true)}
              >
                Richiedi Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-vonlop-primary text-vonlop-primary hover:bg-vonlop-primary/5 px-8 py-6 text-lg"
                onClick={() => setShowConsultation(true)}
              >
                Prenota Consulenza
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
                  <h3 className="font-medium">Prenotazione Appuntamento</h3>
                </div>
                <p className="text-sm text-vonlop-text/70">
                  "Vorrei prenotare un taglio di capelli per martedì pomeriggio."
                </p>
                <div className="mt-3 p-2 bg-white rounded border border-vonlop-accent/30">
                  <p className="text-sm text-vonlop-text/80">
                    "Perfetto! Ho disponibilità alle 14:00 o alle 16:30 martedì. Quale preferisci?"
                  </p>
                </div>
              </div>
              
              <div className="bg-vonlop-background p-4 rounded-lg border border-vonlop-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="text-vonlop-primary" />
                  <h3 className="font-medium">Informazioni sui Servizi</h3>
                </div>
                <p className="text-sm text-vonlop-text/70">
                  "Quanto tempo ci vuole per una ricostruzione completa con acrilico?"
                </p>
                <div className="mt-3 p-2 bg-white rounded border border-vonlop-accent/30">
                  <p className="text-sm text-vonlop-text/80">
                    "Una ricostruzione unghie completa in acrilico richiede circa 60-90 minuti. Desideri prenotare un appuntamento?"
                  </p>
                </div>
              </div>
            </div>
          </div>
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
              <label htmlFor="consult-name" className="text-left text-sm font-medium">
                Nome
              </label>
              <input
                id="consult-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo nome"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="consult-email" className="text-left text-sm font-medium">
                Email
              </label>
              <input
                id="consult-email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Il tuo indirizzo email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="consult-date" className="text-left text-sm font-medium">
                Data Preferita
              </label>
              <input
                id="consult-date"
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

export default Hero;
