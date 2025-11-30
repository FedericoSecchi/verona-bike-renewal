import { MessageCircle, Recycle } from "lucide-react";
import bikeTransform from "@/assets/bike-transform.png";

const DonazioniSection = () => {
  return (
    <section id="donazioni" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-on-scroll">
              <Recycle className="w-4 h-4" />
              Economia circolare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-on-scroll animate-on-scroll-delay-1">
              Dai una seconda vita alla tua bici
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-1">
                Hai una bicicletta che non usi più e sta solo prendendo polvere?
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                Valutiamo biciclette inutilizzate per ricondizionarle e rimetterle
                in circolo.
              </p>
              <p className="text-lg text-muted-foreground animate-on-scroll animate-on-scroll-delay-2">
                In questo modo liberi spazio, eviti sprechi e aiuti qualcuno a
                trovare una bici accessibile.
              </p>
            </div>
            <a
              href="https://wa.me/393519621721?text=Ciao%2C%20ho%20una%20bici%20che%20non%20uso%20pi%C3%B9%20e%20vorrei%20sapere%20se%20pu%C3%B2%20essere%20ricondizionata."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex animate-on-scroll animate-on-scroll-delay-3"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivi su WhatsApp per parlarne
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={bikeTransform}
                alt="Trasformazione di una bici vecchia in una ricondizionata"
                className="relative w-full max-w-lg mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonazioniSection;
