import { MessageCircle } from "lucide-react";
import bikeTypes from "@/assets/bike-types.png";

const bikeCategories = [
  {
    icon: "🚲",
    name: "Bici da città",
    description:
      "Comode, con posizione verticale, perfette per spostarsi in centro e andare al lavoro o all'università.",
  },
  {
    icon: "🎒",
    name: "Bici per studenti",
    description:
      "Soluzioni semplici e robuste per chi deve muoversi ogni giorno spendendo il giusto.",
  },
  {
    icon: "🚴‍♂️",
    name: "Bici da passeggio",
    description:
      "Per chi vuole pedalare nel tempo libero, fare commissioni o una gita nel weekend.",
  },
];

const TipiBiciSection = () => {
  return (
    <section id="tipi-di-bici" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-on-scroll">
            Che tipo di bici puoi trovare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll animate-on-scroll-delay-1">
            Il modello esatto cambia nel tempo, ma di solito sono disponibili
            queste tipologie di biciclette ricondizionate:
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 md:mb-16 animate-on-scroll">
          <img
            src={bikeTypes}
            alt="Diversi tipi di biciclette ricondizionate"
            className="w-full max-w-3xl mx-auto"
          />
        </div>

        {/* Bike Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {bikeCategories.map((bike, index) => (
            <div
              key={bike.name}
              className={`bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift animate-on-scroll animate-on-scroll-delay-${index + 1}`}
            >
              <div className="text-4xl mb-4">{bike.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {bike.name}
              </h3>
              <p className="text-muted-foreground">{bike.description}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-accent/50 border border-primary/10 rounded-2xl p-6 md:p-8 text-center animate-on-scroll">
          <p className="text-muted-foreground mb-4">
            I modelli cambiano in base alle bici disponibili. Per sapere cosa c'è
            oggi, scrivi direttamente su WhatsApp.
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
