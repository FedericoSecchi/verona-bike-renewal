import { Check } from "lucide-react";
import toolsIllustration from "@/assets/tools-illustration.png";

const checkItems = [
  "Controllata e regolata",
  "Testata su strada",
  "Verificata la sicurezza generale",
];

const ComeFunzionaSection = () => {
  return (
    <section id="come-funziona" className="section-padding bg-secondary/50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={toolsIllustration}
                alt="Attrezzi per la manutenzione delle biciclette"
                className="relative w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-on-scroll">
              Come funziona
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Recuperiamo biciclette inutilizzate e diamo loro una seconda vita.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Ogni bici viene controllata con cura: freni, cambio, ruote e
                sicurezza generale.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                L'obiettivo è offrire bici affidabili e accessibili, perfette per
                l'uso quotidiano in città.
              </p>
            </div>

            <div className="mt-10 animate-on-scroll animate-on-scroll-delay-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Prima di consegnarti una bici, viene sempre:
              </h3>
              <ul className="space-y-3">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
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
