
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-vonlop-primary">
            vonlop
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-vonlop-text hover:text-vonlop-primary transition-colors">
            Come Funziona
          </a>
          <a href="#who-its-for" className="text-vonlop-text hover:text-vonlop-primary transition-colors">
            Per Chi È
          </a>
          <a href="#features" className="text-vonlop-text hover:text-vonlop-primary transition-colors">
            Funzionalità
          </a>
          <a href="#pricing" className="text-vonlop-text hover:text-vonlop-primary transition-colors">
            Prezzi
          </a>
          <a href="#faq" className="text-vonlop-text hover:text-vonlop-primary transition-colors">
            FAQ
          </a>
        </div>

        <div className="hidden md:block">
          <Button 
            className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white"
            onClick={() => setShowDemoForm(true)}
          >
            Richiedi Demo
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-vonlop-text">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-vonlop-text hover:text-vonlop-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Come Funziona
            </a>
            <a 
              href="#who-its-for" 
              className="text-vonlop-text hover:text-vonlop-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Per Chi È
            </a>
            <a 
              href="#features" 
              className="text-vonlop-text hover:text-vonlop-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Funzionalità
            </a>
            <a 
              href="#pricing" 
              className="text-vonlop-text hover:text-vonlop-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Prezzi
            </a>
            <a 
              href="#faq" 
              className="text-vonlop-text hover:text-vonlop-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white w-full"
              onClick={() => {
                setIsMenuOpen(false);
                setShowDemoForm(true);
              }}
            >
              Richiedi Demo
            </Button>
          </div>
        </div>
      )}

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
    </nav>
  );
};

export default Navbar;
