import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, ArrowRight, Users, Heart, Award } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Craftsmanship", desc: "We never cut corners. Every roof is installed to the highest standard using quality materials built for the Pacific Northwest." },
  { icon: Heart, title: "Honest Pricing", desc: "We believe in transparent, fair pricing. You'll know exactly what you're getting and exactly what it costs — no surprises." },
  { icon: Users, title: "Community Focused", desc: "We live and work in this community. Our reputation depends on your satisfaction, and that means everything to us." },
];

const team = [
  { name: "Noe", role: "Owner / Lead Roofer", phone: "509-378-0590", tel: "5093780590", bio: "With years of hands-on roofing experience, Noe leads every project with skill and dedication. He's on-site ensuring quality control from start to finish." },
  { name: "Dan", role: "Owner / Project Manager", phone: "208-541-1919", tel: "2085411919", bio: "Dan manages customer relationships, project timelines, and estimating. He's your first call for questions, concerns, or scheduling." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "var(--gradient-green-blue)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Roofing Built on<br />Integrity
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Mid-Columbia Integrity Roofing LLC was founded on a simple principle: treat every customer the way we'd want to be treated. Quality work, honest pricing, and a job done right.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5">
                Serving the Mid-Columbia Region with Pride
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mid-Columbia Integrity Roofing LLC was founded by Noe and Dan — two experienced roofing professionals who wanted to build a company where integrity wasn't just a name, but a daily standard.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in the Mid-Columbia region, we serve homeowners and businesses across Washington and Idaho. Whether it's a single repair or a full commercial re-roof, every job gets the same dedication and attention to detail.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                We're proud of the relationships we've built in our community, and we're proud of the roofs we've put over families' and businesses' heads.
              </p>
              <ul className="space-y-3">
                {["Fully licensed & insured", "Serving WA", "Residential & Commercial", "Free written estimates", "Quality materials & workmanship"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Projects Completed", bg: "bg-accent" },
                { value: "5.0", label: "Average Star Rating", bg: "bg-brand-blue-pale" },
                { value: "WA", label: "Service Area", bg: "bg-brand-blue-pale" },
                { value: "100%", label: "Free Estimates", bg: "bg-accent" },
              ].map(({ value, label, bg }) => (
                <div key={label} className={`${bg} rounded-2xl p-6 text-center`}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1">{value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad section-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">What Drives Us Every Day</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Meet the Owners</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map(({ name, role, phone, tel, bio }) => (
              <div key={name} className="service-card flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-primary">{name[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{name}</h3>
                  <p className="text-primary font-semibold text-sm">{role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
                <a href={`tel:${tel}`} className="call-link text-sm w-fit">
                  <Phone className="w-4 h-4" /> {phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad section-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Don't Take Our Word For It</h2>
            <p className="text-muted-foreground">Real feedback from real customers across the Mid-Columbia region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Paul McCullugh.", text: "Outstanding roofing contractor, showed up on time, cleaned up perfectly and the new roof looks great. Price was the best of 3 bids, zero problems. Family business, great people!", stars: 5 },
              { name: "Jackie Stout.", text: "Positive Responsiveness, Punctuality, Quality, Professionalism, Value.", stars: 5 },
              { name: "Master Tech Automotive.", text: "The crew at Mid Columbia are great. They did a really good job, with attention to detail, and cleaned up like madmen. Cant say enough about them. The work was excellent and they were very professional.", stars: 5 },
            ].map(({ name, text, stars }) => (
              <div key={name} className="service-card flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-foreground/80 text-sm leading-relaxed flex-1">"{text}"</p>
                <p className="text-sm font-bold text-primary">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--gradient-blue)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/85 mb-8 text-lg">Call or click for your free estimate today.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-secondary font-bold rounded-xl px-7 py-3.5 hover:bg-white/90 transition-all shadow-blue">
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
