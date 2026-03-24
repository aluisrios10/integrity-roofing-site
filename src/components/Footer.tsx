import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-wider text-brand-blue-light uppercase mb-0.5">
              Mid-Columbia
            </p>
            <h3 className="text-xl font-extrabold text-white leading-tight">
              Integrity Roofing LLC
            </h3>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Commercial & Residential roofing with the integrity you deserve. Serving the Mid-Columbia region with quality craftsmanship.
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-white/70 ml-2">5.0 Rating</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
            Services
          </h4>
          <ul className="space-y-2.5">
            {[
              "Residential Roofing",
              "Commercial Roofing",
              "Roof Repairs",
              "Free Estimates",
              "Roof Inspections",
            ].map((svc) => (
              <li key={svc} className="text-sm text-white/70">
                {svc}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:5098203129"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-brand-green-light" />
                <span>Office: 509-820-3129</span>
              </a>
            </li>
            <li>
              <a
                href="tel:5093780590"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-brand-green-light" />
                <span>Noe: 509-378-0590</span>
              </a>
            </li>
            <li>
              <a
                href="tel:2085411919"
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-brand-green-light" />
                <span>Dan: 208-541-1919</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/70">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-blue-light" />
              <span>Mid-Columbia Region, WA & ID</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mid-Columbia Integrity Roofing LLC. All rights reserved.</p>
          <p>Commercial &amp; Residential · Free Estimates · Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
