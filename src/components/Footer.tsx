import { MapPin, MessageCircle, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contatto" className="section-padding bg-foreground text-background">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-on-scroll">
              Contatto e zona
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-on-scroll animate-on-scroll-delay-1">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Zona</p>
                  <p className="text-background/70">Disponibile a Verona e dintorni.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-on-scroll animate-on-scroll-delay-2">
                <MessageCircle className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Contatto WhatsApp</p>
                  <a
                    href="https://wa.me/393519621721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    +39 351 962 1721
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 animate-on-scroll animate-on-scroll-delay-3">
                <Clock className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Risposte</p>
                  <p className="text-background/70">
                    Generalmente rapide durante il giorno.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center animate-on-scroll">
            <p className="text-lg text-background/80 mb-6">
              Hai domande sulle bici disponibili? Vuoi sapere i prezzi? Scrivi
              direttamente su WhatsApp!
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
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/60">
            BiciRinova – Biciclette ricondizionate a Verona.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
