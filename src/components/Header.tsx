import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-header py-2"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <Link to="/" className="flex flex-col leading-none shrink-0">
          <span className="text-xs font-semibold tracking-wider text-brand-blue uppercase">
            Mid-Columbia
          </span>
          <span className="text-base sm:text-lg font-extrabold text-foreground leading-tight">
            Integrity Roofing LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-150 ${
                location.pathname === link.to
                  ? "text-primary bg-accent font-semibold"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a href="tel:5098203129" className="call-link text-sm">
            <Phone className="w-4 h-4" />
            <span>509-820-3129</span>
          </a>
          <Link to="/contact" className="btn-cta text-sm px-5 py-2.5">
            Free Estimate
          </Link>
        </div>

        {/* Mobile: call + burger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:5098203129"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold text-sm rounded-xl px-3 py-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xs:inline">Call Now</span>
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/98 backdrop-blur-md px-4 pt-3 pb-5 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-accent text-primary font-semibold"
                  : "hover:bg-accent text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
              Call Us Directly
            </p>
            <a href="tel:5093780590" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent hover:bg-primary/10 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Noe: 509-378-0590</span>
            </a>
            <a href="tel:2085411919" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent hover:bg-primary/10 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Dan: 208-541-1919</span>
            </a>
            <a href="tel:5098203129" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent hover:bg-primary/10 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Office: 509-820-3129</span>
            </a>
            <Link to="/contact" className="btn-cta text-center mt-1">
              Get Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
