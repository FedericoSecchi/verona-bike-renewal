import { Check } from "lucide-react";
import toolsIllustration from "@/assets/tools-illustration.png";

const checkItems = [
  "Controllata e regolata",
  "Testata su strada",
  "Verificata la sicurezza",
];

const ComeFunzionaSection = () => {
  return (
    <section id="come-funziona" className="section-padding border-t-2 border-foreground">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="border-2 border-foreground p-4 bg-muted">
              <img
                src={toolsIllustration}
                alt="Attrezzi per la manutenzione delle biciclette"
                className="w-full grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4 block animate-on-scroll">
              01 — Processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-10 uppercase leading-tight animate-on-scroll">
              Come funziona
            </h2>
            <div className="space-y-6 border-l-2 border-foreground pl-6">
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Recuperiamo biciclette inutilizzate e diamo loro una seconda vita.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Ogni bici viene controllata con cura: freni, cambio, ruote e sicurezza generale.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                L'obiettivo è offrire bici affidabili e accessibili per l'uso quotidiano.
              </p>
            </div>

            <div className="mt-12 animate-on-scroll animate-on-scroll-delay-2">
              <h3 className="text-sm uppercase tracking-widest text-foreground font-semibold mb-6">
                Prima della consegna:
              </h3>
              <ul className="space-y-4">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 border-2 border-foreground flex items-center justify-center">
                      <Check className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComeFunzionaSection;
