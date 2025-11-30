import { MessageCircle } from "lucide-react";
import bikeTransform from "@/assets/bike-transform.png";

const DonazioniSection = () => {
  return (
    <section id="donazioni" className="section-padding border-t-2 border-foreground bg-muted">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4 block animate-on-scroll">
              04 — Donazioni
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-10 uppercase leading-tight animate-on-scroll">
              Dai una seconda vita alla tua bici
            </h2>
            <div className="space-y-6 border-l-2 border-foreground pl-6 mb-10">
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Hai una bicicletta che non usi più e sta solo prendendo polvere?
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                Valutiamo biciclette inutilizzate per ricondizionarle e rimetterle in circolo.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                Liberi spazio, eviti sprechi e aiuti qualcuno a trovare una bici accessibile.
              </p>
            </div>
            <a
              href="https://wa.me/393519621721?text=Ciao%2C%20ho%20una%20bici%20che%20non%20uso%20pi%C3%B9%20e%20vorrei%20sapere%20se%20pu%C3%B2%20essere%20ricondizionata."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex animate-on-scroll animate-on-scroll-delay-3"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivi su WhatsApp
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="border-2 border-foreground p-4 bg-background">
              <img
                src={bikeTransform}
                alt="Trasformazione di una bici vecchia in una ricondizionata"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonazioniSection;
