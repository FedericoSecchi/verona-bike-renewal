import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const steps = [
  "Scrivi su WhatsApp e indica che tipo di bici cerchi.",
  "Riceverai le proposte disponibili in quel momento, con foto e dettagli.",
  "Scegli la bici che preferisci.",
  "Concordate il ritiro a Verona.",
];

const ComeRichiedereSection = () => {
  const [formData, setFormData] = useState({
    tipoBici: "",
    usoPrincipale: "",
    budget: "",
    altezza: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Ciao, sto cercando una bici ricondizionata. Tipo: ${formData.tipoBici || "non specificato"}. Uso principale: ${formData.usoPrincipale || "non specificato"}. Budget: ${formData.budget || "non specificato"} euro. Altezza: ${formData.altezza || "non specificata"}. Mi puoi dire quali bici hai disponibili oggi?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/393519621721?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="come-richiedere" className="section-padding bg-secondary/50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-on-scroll">
              Come richiedere una bici
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-on-scroll animate-on-scroll-delay-1">
              È tutto molto semplice:
            </p>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-4 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Mandami direttamente i tuoi dati
              </h3>
              <p className="text-muted-foreground mb-6">
                Compila questi campi: al click sul pulsante si aprirà WhatsApp con
                un messaggio già pronto da inviare.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="tipoBici"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tipo di bici (città, passeggio, ecc.)
                  </label>
                  <select
                    id="tipoBici"
                    name="tipoBici"
                    value={formData.tipoBici}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Seleziona...</option>
                    <option value="città">Bici da città</option>
                    <option value="passeggio">Bici da passeggio</option>
                    <option value="studente">Bici per studenti</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="usoPrincipale"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Uso principale (lavoro, studio, tempo libero)
                  </label>
                  <select
                    id="usoPrincipale"
                    name="usoPrincipale"
                    value={formData.usoPrincipale}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Seleziona...</option>
                    <option value="lavoro">Andare al lavoro</option>
                    <option value="studio">Andare a studiare</option>
                    <option value="tempo libero">Tempo libero</option>
                    <option value="commissioni">Commissioni in città</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Budget indicativo (€)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="es. 80-120"
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="altezza"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    La tua altezza (per la taglia)
                  </label>
                  <input
                    type="text"
                    id="altezza"
                    name="altezza"
                    value={formData.altezza}
                    onChange={handleInputChange}
                    placeholder="es. 175 cm"
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <button type="submit" className="w-full btn-whatsapp py-4">
                  <Send className="w-5 h-5" />
                  Apri WhatsApp con il messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComeRichiedereSection;
