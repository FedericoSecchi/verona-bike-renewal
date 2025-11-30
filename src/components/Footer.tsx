import { MapPin, MessageCircle, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contatto" className="section-padding bg-foreground text-background border-t-2 border-foreground">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm uppercase tracking-widest text-background/50 font-medium mb-4 block animate-on-scroll">
              05 — Contatto
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 uppercase animate-on-scroll">
              Contatto e zona
            </h2>
            <div className="space-y-6 border-l-2 border-background/30 pl-6">
              <div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-1">
                <MapPin className="w-5 h-5 mt-1 text-background/70" />
                <div>
                  <p className="font-semibold uppercase text-sm tracking-wide">Zona</p>
                  <p className="text-background/70">Verona e dintorni</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-2">
                <MessageCircle className="w-5 h-5 mt-1 text-background/70" />
                <div>
                  <p className="font-semibold uppercase text-sm tracking-wide">WhatsApp</p>
                  <a
                    href="https://wa.me/393519621721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background hover:underline transition-colors"
                  >
                    +39 351 962 1721
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-3">
                <Clock className="w-5 h-5 mt-1 text-background/70" />
                <div>
                  <p className="font-semibold uppercase text-sm tracking-wide">Risposte</p>
                  <p className="text-background/70">
                    Rapide durante il giorno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center animate-on-scroll">
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Hai domande sulle bici disponibili? Vuoi sapere i prezzi? Scrivi direttamente su WhatsApp.
            </p>
            <a
              href="https://wa.me/393519621721?text=Ciao%2C%20sono%20interessato%20a%20una%20bici%20ricondizionata.%20Mi%20puoi%20dire%20cosa%20hai%20disponibile%20oggi%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-fit"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivi su WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-background/20">
          <p className="text-background/50 text-sm uppercase tracking-widest">
            BiciRinova — Biciclette ricondizionate a Verona
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
