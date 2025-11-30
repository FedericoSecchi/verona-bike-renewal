import { useState } from "react";
import { Send } from "lucide-react";

const steps = [
  "Scrivi su WhatsApp e indica che tipo di bici cerchi.",
  "Riceverai le proposte disponibili con foto e dettagli.",
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
    <section id="come-richiedere" className="section-padding border-t-2 border-foreground">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Steps */}
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4 block animate-on-scroll">
              03 — Richiesta
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-12 uppercase leading-tight animate-on-scroll">
              Come richiedere una bici
            </h2>
            <div className="space-y-0 border-l-2 border-foreground">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-6 pl-6 py-4 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 border-2 border-foreground bg-foreground text-background flex items-center justify-center font-display font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll">
            <div className="border-2 border-foreground bg-background">
              <div className="border-b-2 border-foreground p-6">
                <h3 className="text-lg font-display font-bold text-foreground uppercase">
                  Invia i tuoi dati
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Al click si aprirà WhatsApp con un messaggio pronto.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label
                    htmlFor="tipoBici"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Tipo di bici
                  </label>
                  <select
                    id="tipoBici"
                    name="tipoBici"
                    value={formData.tipoBici}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground focus:outline-none focus:ring-0 transition-all"
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
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Uso principale
                  </label>
                  <select
                    id="usoPrincipale"
                    name="usoPrincipale"
                    value={formData.usoPrincipale}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground focus:outline-none focus:ring-0 transition-all"
                  >
                    <option value="">Seleziona...</option>
                    <option value="lavoro">Andare al lavoro</option>
                    <option value="studio">Andare a studiare</option>
                    <option value="tempo libero">Tempo libero</option>
                    <option value="commissioni">Commissioni</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Budget (€)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="es. 80-120"
                    className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="altezza"
                    className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide"
                  >
                    Altezza (per la taglia)
                  </label>
                  <input
                    type="text"
                    id="altezza"
                    name="altezza"
                    value={formData.altezza}
                    onChange={handleInputChange}
                    placeholder="es. 175 cm"
                    className="w-full px-4 py-3 bg-background border-2 border-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-all"
                  />
                </div>

                <button type="submit" className="w-full btn-whatsapp py-4">
                  <Send className="w-5 h-5" />
                  Apri WhatsApp
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
