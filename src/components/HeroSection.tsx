import { MessageCircle, ChevronDown } from "lucide-react";
import heroBike from "@/assets/hero-bike.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-24 md:pt-32"
    >
      <div className="container-width w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Biciclette ricondizionate, affidabili e convenienti a{" "}
              <span className="text-primary">Verona</span>.
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Bici controllate, sistemate e pronte per pedalare. Ideali per
              studenti, famiglie e chi si muove ogni giorno in città.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://wa.me/393519621721?text=Ciao%2C%20sono%20interessato%20a%20una%20bici%20ricondizionata.%20Mi%20puoi%20dire%20cosa%20hai%20disponibile%20oggi%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                Scrivi su WhatsApp
              </a>
              <a href="#come-funziona" className="btn-secondary">
                Come funziona
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40 rounded-full blur-3xl scale-110" />
              <img
                src={heroBike}
                alt="Bicicletta ricondizionata verde"
                className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#come-funziona"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scopri di più</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
