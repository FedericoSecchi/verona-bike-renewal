import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Tipi di bici", href: "#tipi-di-bici" },
  { label: "Richiedi", href: "#come-richiedere" },
  { label: "Donazioni", href: "#donazioni" },
  { label: "Contatto", href: "#contatto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "glass-header" : "bg-background"
      }`}
    >
      <div className="container-width px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 border-b-2 border-foreground">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-display font-bold text-foreground uppercase tracking-tight">
              BiciRinova
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground uppercase tracking-wide hover:underline underline-offset-4 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/393519621721"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex btn-whatsapp text-xs py-3 px-6"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground border-2 border-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 border-b-2 border-foreground ${
            isMobileMenuOpen ? "max-h-[500px] py-6" : "max-h-0 border-b-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-foreground uppercase tracking-wide hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/393519621721"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm w-fit mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
