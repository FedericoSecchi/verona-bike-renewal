import { MessageCircle, ArrowDown } from "lucide-react";
import heroBike from "@/assets/hero-bike.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-28 md:pt-36"
    >
      <div className="container-width w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[0.95] mb-8 animate-fade-in-up uppercase">
              Biciclette ricondizionate a Verona.
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              Controllate, sistemate, pronte per pedalare. Per studenti, famiglie e chi si muove in città.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
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
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative border-2 border-foreground p-4 bg-muted">
              <img
                src={heroBike}
                alt="Bicicletta ricondizionata"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-start mt-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#come-funziona"
            className="flex items-center gap-3 text-foreground hover:underline uppercase text-sm tracking-wide font-medium"
          >
            <span>Scorri</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
