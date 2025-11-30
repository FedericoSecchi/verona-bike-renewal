import { MessageCircle } from "lucide-react";
import bikeTypes from "@/assets/bike-types.png";

const bikeCategories = [
  {
    number: "01",
    name: "Bici da città",
    description:
      "Comode, con posizione verticale. Per spostarsi in centro, andare al lavoro o all'università.",
  },
  {
    number: "02",
    name: "Bici per studenti",
    description:
      "Soluzioni semplici e robuste per muoversi ogni giorno spendendo il giusto.",
  },
  {
    number: "03",
    name: "Bici da passeggio",
    description:
      "Per pedalare nel tempo libero, fare commissioni o una gita nel weekend.",
  },
];

const TipiBiciSection = () => {
  return (
    <section id="tipi-di-bici" className="section-padding border-t-2 border-foreground bg-muted">
      <div className="container-width">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4 block animate-on-scroll">
            02 — Tipologie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground uppercase leading-tight animate-on-scroll max-w-2xl">
            Che tipo di bici puoi trovare
          </h2>
        </div>

        {/* Illustration */}
        <div className="mb-16 animate-on-scroll border-2 border-foreground p-4 bg-background">
          <img
            src={bikeTypes}
            alt="Diversi tipi di biciclette ricondizionate"
            className="w-full grayscale"
          />
        </div>

        {/* Bike Cards */}
        <div className="grid md:grid-cols-3 gap-0 border-2 border-foreground mb-16">
          {bikeCategories.map((bike, index) => (
            <div
              key={bike.name}
              className={`p-8 bg-background hover-lift animate-on-scroll animate-on-scroll-delay-${index + 1} ${
                index < 2 ? "md:border-r-2 border-b-2 md:border-b-0 border-foreground" : ""
              }`}
            >
              <span className="text-4xl font-display font-bold text-muted-foreground/30 mb-4 block">
                {bike.number}
              </span>
              <h3 className="text-xl font-display font-bold text-foreground mb-4 uppercase">
                {bike.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{bike.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="border-2 border-foreground p-8 bg-background animate-on-scroll">
          <p className="text-muted-foreground mb-6 text-lg">
            I modelli cambiano in base alle bici disponibili. Per sapere cosa c'è oggi, scrivi su WhatsApp.
          </p>
          <a
            href="https://wa.me/393519621721?text=Ciao%2C%20sono%20interessato%20a%20una%20bici%20ricondizionata.%20Mi%20puoi%20dire%20cosa%20hai%20disponibile%20oggi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Scrivi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TipiBiciSection;
