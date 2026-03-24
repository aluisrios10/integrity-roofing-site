import { useState } from "react";
import { Phone, MapPin, Mail, CheckCircle, ArrowRight, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "var(--gradient-green-blue)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Let's Talk Roofing
          </h1>
          <p className="text-white/85 text-lg">
            Call or fill out the form below for your free, no-obligation estimate. We typically respond within a few hours.
          </p>
        </div>
      </section>

      {/* Call Buttons Strip */}
      <section className="bg-primary py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-primary-foreground font-semibold text-sm hidden sm:block">Call us directly:</p>
            <a href="tel:5093780590" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl px-5 py-2.5 transition-colors">
              <Phone className="w-4 h-4" /> Noe: 509-378-0590
            </a>
            <a href="tel:2085411919" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl px-5 py-2.5 transition-colors">
              <Phone className="w-4 h-4" /> Dan: 208-541-1919
            </a>
            <a href="tel:5098203129" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl px-5 py-2.5 transition-colors">
              <Phone className="w-4 h-4" /> Office: 509-820-3129
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                Request a Free Estimate
              </h2>
              <p className="text-muted-foreground mb-7">
                Fill out the form and we'll reach out within a few hours with pricing and availability.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-accent p-8 text-center border border-primary/20">
                  <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Request Received!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thanks, <strong>{form.name}</strong>! We'll reach out to you at <strong>{form.phone || form.email}</strong> soon.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Can't wait? Call us directly at{" "}
                    <a href="tel:5098203129" className="text-primary font-semibold">509-820-3129</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="phone">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(509) 000-0000"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="serviceType">
                      Type of Service <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={form.serviceType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow appearance-none cursor-pointer"
                    >
                      <option value="">Select a service…</option>
                      <option value="residential">Residential Roofing</option>
                      <option value="commercial">Commercial Roofing</option>
                      <option value="repair">Roof Repair</option>
                      <option value="inspection">Roof Inspection</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="message">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your roofing needs, approximate size, urgency, etc."
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-cta w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send My Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your info is never shared.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                  Prefer to Call?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Reach our team directly — we're happy to answer questions and schedule your free estimate over the phone.
                </p>
              </div>

              {/* Phone cards */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Noe (Owner)", phone: "509-378-0590", tel: "5093780590", desc: "Direct line to our lead roofer" },
                  { label: "Dan (Owner)", phone: "208-541-1919", tel: "2085411919", desc: "Estimates, scheduling & questions" },
                  { label: "Office Line", phone: "509-820-3129", tel: "5098203129", desc: "General inquiries & support" },
                ].map(({ label, phone, tel, desc }) => (
                  <a
                    key={tel}
                    href={`tel:${tel}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{label}</p>
                      <p className="text-primary font-semibold">{phone}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* Service area */}
              <div className="rounded-2xl bg-accent p-6 border border-primary/15">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Service Area</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We proudly serve the Mid-Columbia region including the Tri-Cities area and surrounding communities in Washington and Idaho.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-bold text-foreground mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    "We call or text you within a few hours",
                    "We schedule a convenient time for your free estimate",
                    "We visit your property and assess the project",
                    "You receive a written estimate — no pressure",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
