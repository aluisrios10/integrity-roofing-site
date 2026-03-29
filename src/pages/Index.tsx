import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Star, ArrowRight, Home, Building2, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: CheckCircle, label: "Free Estimates" },
  { icon: Star, label: "5-Star Rated" },
];

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    desc: "New roofs, replacements, and expert installations for homes of every size. Quality materials and lasting results.",
    href: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    desc: "Reliable commercial roofing solutions for businesses, warehouses, and flat-roof buildings. Built to last.",
    href: "/services#commercial",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Fast, effective repairs for leaks, storm damage, missing shingles, and more. Protect your investment.",
    href: "/services#repairs",
  },
];

const reviews = [
  {
    name: "Ofelia Ochoa.",
    stars: 5,
    text: "Mid Columbia Integrity Roofing is very professional company and reliable. Here are some pictures of their work!",
  },
  {
    name: "J.K.",
    stars: 5,
    text: "We had Mid-Columbia Integrity Roofing come out to complete a partway completed homeowner DIY replacement skylight installation after we found it was a little more work than we had time to finish. They were professional and understanding, and the work they did was high quality. We are very happy with the quality of the finish of the work and with how responsive the team was in getting our job completed. With winter just around the corner, we wanted to get this project finished and finished well. Mid-Columbia Integrity Roofing delivered. Definitely would recommend.",
  },
  {
    name: "Paul McCullugh.",
    stars: 5,
    text: "Outstanding roofing contractor, showed up on time, cleaned up perfectly and the new roof looks great. Price was the best of 3 bids, zero problems. Family business, great people!",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG image */}
        <img
          src={heroImg}
          alt="Residential neighborhood with quality roofing"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white pt-24 pb-16">
          {/* Pill badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Commercial &amp; Residential · Free Estimates
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Roofing You Can{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, hsl(112 65% 62%), hsl(199 72% 70%))" }}>
              Trust.
            </span>
            <br />
            Results That Last.
          </h1>

          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Mid-Columbia Integrity Roofing LLC delivers expert commercial and residential roofing across Washington and Idaho. Quality craftsmanship, honest pricing.
          </p>

          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link to="/contact" className="btn-cta text-base w-full sm:w-auto justify-center">
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:5098203129" className="btn-blue text-base w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" />
              Call 509-820-3129
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">
                <Icon className="w-4 h-4 text-green-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* ── CALL STRIP ── */}
      <section className="bg-primary py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <p className="text-primary-foreground font-semibold text-sm sm:text-base text-center">
            📞 Call us today for a <span className="underline">FREE estimate</span>:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="tel:5093780590" className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-xl px-4 py-2 transition-colors">
              <Phone className="w-4 h-4" /> Noe: 509-378-0590
            </a>
            <a href="tel:2085411919" className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-xl px-4 py-2 transition-colors">
              <Phone className="w-4 h-4" /> Dan: 208-541-1919
            </a>
            <a href="tel:5098203129" className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-xl px-4 py-2 transition-colors">
              <Phone className="w-4 h-4" /> Office: 509-820-3129
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad section-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Expert Roofing Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From residential replacements to large commercial projects — we handle it all with the integrity and quality you expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} to={href} className="service-card group flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-cta">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-pad bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5">
                Built on Integrity,<br />Backed by Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                At Mid-Columbia Integrity Roofing, we take pride in delivering top-quality roofing services with honesty and professionalism. Every job, big or small, gets our full attention.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully licensed and insured contractors",
                  "Free, no-obligation estimates",
                  "High-quality materials with manufacturer warranties",
                  "Clean job sites — we respect your property",
                  "Serving Washington",
                  "Veteran-owned, community-focused",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="btn-cta">
                  About Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get Estimate
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Roofs Installed", color: "bg-accent" },
                { value: "5★", label: "Average Rating", color: "bg-brand-blue-pale" },
                { value: "100%", label: "Free Estimates", color: "bg-brand-blue-pale" },
                { value: "WA", label: "Service Areas", color: "bg-accent" },
              ].map(({ value, label, color }) => (
                <div key={label} className={`${color} rounded-2xl p-6 text-center`}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1">{value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-pad section-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ name, stars, text }) => (
              <div key={name} className="service-card flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed text-sm flex-1">"{text}"</p>
                <p className="text-sm font-bold text-primary">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--gradient-green-blue)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Contact us today for your free, no-obligation estimate. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary font-bold rounded-xl px-7 py-3.5 text-base hover:bg-white/90 transition-all duration-200 shadow-cta"
            >
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:5098203129"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold rounded-xl px-7 py-3.5 text-base hover:bg-white/25 transition-all duration-200"
            >
              <Phone className="w-5 h-5" /> 509-820-3129
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
