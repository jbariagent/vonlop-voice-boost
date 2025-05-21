
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-vonlop-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vonlop-text mb-4">
            Prezzi <span className="text-vonlop-primary">Semplici e Trasparenti</span>
          </h2>
          <p className="text-lg text-vonlop-text/70 max-w-2xl mx-auto">
            Scegli il piano giusto per la tua attività. Nessun costo nascosto o contratti a lungo termine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Table className="border rounded-lg overflow-hidden">
            <TableHeader className="bg-vonlop-background">
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead className="text-center w-1/3 font-bold text-lg">Standard</TableHead>
                <TableHead className="text-center w-1/3 bg-vonlop-primary/5 font-bold text-lg">
                  <div className="flex flex-col items-center">
                    <span>Professionale</span>
                    <span className="text-xs font-normal mt-1 bg-vonlop-cta text-white py-1 px-2 rounded-full">Più Popolare</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Prezzo Mensile</TableCell>
                <TableCell className="text-center font-bold text-lg">€249/mese</TableCell>
                <TableCell className="text-center font-bold text-lg bg-vonlop-primary/5">€299/mese</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Setup Iniziale</TableCell>
                <TableCell className="text-center">€499 una tantum</TableCell>
                <TableCell className="text-center bg-vonlop-primary/5">€499 una tantum</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium align-top">Funzionalità</TableCell>
                <TableCell className="align-top">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span>Pianificazione appuntamenti</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span>Informazioni base sui servizi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span>Orari di apertura</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span>Notifiche email</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span>Pannello di controllo web</span>
                    </li>
                  </ul>
                </TableCell>
                <TableCell className="align-top bg-vonlop-primary/5">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span className="font-medium">Gestione appuntamenti avanzata</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span className="font-medium">Informazioni dettagliate sui servizi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span className="font-medium">Notifiche SMS</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span className="font-medium">Integrazione con calendario</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-vonlop-cta mr-2 mt-1 shrink-0" size={16} />
                      <span className="font-medium">Analisi di base</span>
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="text-center py-6">
                  <Button className="bg-vonlop-primary hover:bg-vonlop-primary/90 text-white px-8">
                    Inizia Ora
                  </Button>
                </TableCell>
                <TableCell className="text-center py-6 bg-vonlop-primary/5">
                  <Button className="bg-vonlop-cta hover:bg-vonlop-cta/90 text-white px-8">
                    Inizia Ora
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-vonlop-text/70">
            Hai bisogno di una soluzione personalizzata? <a href="#" className="text-vonlop-primary font-medium">Contattaci</a> per prezzi su misura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
