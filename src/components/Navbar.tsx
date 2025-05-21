
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Button className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white">
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
            <Button className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white w-full">
              Richiedi Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
