import { Link } from "react-router-dom";
import { Home, Building2, Wrench, CheckCircle, Phone, ArrowRight, ShieldCheck, Zap, Droplets } from "lucide-react";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Roofing",
    tagline: "Protect Your Home with Quality You Can See",
    desc: "Your home is your biggest investment. We install, replace, and repair residential roofs using premium materials that stand up to the Pacific Northwest weather. From asphalt shingles to metal roofing — we get it done right the first time.",
    features: [
      "Full roof replacements & new installs",
      "Asphalt shingles, metal, tile & more",
      "Ventilation & insulation improvements",
      "Gutters and flashing installation",
      "Roof inspections for home sales",
      "Manufacturer warranty on materials",
    ],
    color: "bg-accent",
    iconColor: "text-primary",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Roofing",
    tagline: "Built for Business, Designed to Last",
    desc: "Downtime costs money. We work efficiently to complete commercial roofing projects on schedule and within budget. We handle flat roofs, TPO, EPDM, metal roofing, and more for businesses of all sizes.",
    features: [
      "Flat roof systems (TPO, EPDM, PVC)",
      "Metal roofing & standing seam",
      "Low-slope & commercial applications",
      "Maintenance programs available",
      "Minimal business disruption",
      "Licensed & fully insured",
    ],
    color: "bg-brand-blue-pale",
    iconColor: "text-secondary",
  },
  {
    id: "repairs",
    icon: Wrench,
    title: "Roof Repairs",
    tagline: "Fast Repairs Before Small Problems Get Big",
    desc: "A small leak can become a major disaster quickly. Our repair team responds promptly to assess and fix leaks, storm damage, missing shingles, and more. We make lasting repairs — not band-aids.",
    features: [
      "Leak detection & waterproofing",
      "Storm & wind damage repairs",
      "Missing or damaged shingle replacement",
      "Flashing & valley repairs",
      "Emergency tarping available",
      "Insurance claim assistance",
    ],
    color: "bg-accent",
    iconColor: "text-primary",
  },
];

const additional = [
  { icon: ShieldCheck, title: "Roof Inspections", desc: "Thorough inspections for peace of mind, home purchases, or insurance claims." },
  { icon: Droplets, title: "Leak Detection", desc: "Advanced diagnosis to find leaks fast and prevent interior water damage." },
  { icon: Zap, title: "Emergency Service", desc: "Emergency tarping and rapid-response repairs when you need help right away." },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "var(--gradient-green-blue)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Roofing Solutions for<br />Every Need
          </h1>
          <p className="text-white/85 text-lg mb-8 leading-relaxed">
            From new residential installs to large commercial projects — Mid-Columbia Integrity Roofing handles it all with quality craftsmanship and honest pricing.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-xl px-7 py-3.5 text-base hover:bg-white/90 transition-all shadow-cta">
            Get Free Estimate <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      {services.map(({ id, icon: Icon, title, tagline, desc, features, color, iconColor }, index) => (
        <section
          key={id}
          id={id}
          className={`section-pad ${index % 2 === 0 ? "bg-background" : "section-green"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Text */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">{title}</h2>
                <p className="text-primary font-semibold mb-4">{tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-7">{desc}</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-cta">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="tel:5098203129" className="btn-outline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* Visual card */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className={`rounded-3xl ${color} p-8 sm:p-10`}>
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-card mx-auto flex items-center justify-center mb-4 shadow-card`}>
                      <Icon className={`w-10 h-10 ${iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Included in Every Job
                    </p>
                    <ul className="space-y-2.5">
                      {["Free written estimate", "Licensed & insured crew", "Quality materials", "Clean job site", "Final walkthrough"].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional */}
      <section className="section-pad bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Additional Services</h2>
            <p className="text-muted-foreground">We go beyond just roofing to keep your property protected.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {additional.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card text-center">
                <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--gradient-cta)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for a Free Estimate?</h2>
          <p className="text-white/85 mb-8 text-lg">No pressure. No obligation. Just honest answers from experienced roofers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold rounded-xl px-7 py-3.5 hover:bg-white/90 transition-all shadow-cta">
              Request Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:5098203129" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold rounded-xl px-7 py-3.5 hover:bg-white/25 transition-all">
              <Phone className="w-5 h-5" /> 509-820-3129
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
