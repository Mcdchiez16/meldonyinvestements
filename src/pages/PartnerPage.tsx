import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Handshake, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building2, 
  Pickaxe, 
  Wheat, 
  Zap,
  Send, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const partnershipTypes = [
  {
    icon: TrendingUp,
    title: "Equity Partnerships",
    description: "Join us as an equity partner in high-growth ventures across Africa's emerging markets.",
  },
  {
    icon: Building2,
    title: "Joint Ventures",
    description: "Collaborate on large-scale infrastructure and development projects with shared expertise.",
  },
  {
    icon: Shield,
    title: "Strategic Alliances",
    description: "Form strategic partnerships to leverage combined strengths and market reach.",
  },
  {
    icon: Globe,
    title: "International Investors",
    description: "Access Africa's growth potential through our established network and local expertise.",
  },
];

const investmentSectors = [
  {
    icon: Pickaxe,
    title: "Mining & Resources",
    description: "Chrome, gold, and mineral extraction opportunities",
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    description: "Commercial and residential development projects",
  },
  {
    icon: Wheat,
    title: "Agriculture & Agribusiness",
    description: "Large-scale farming and food processing ventures",
  },
  {
    icon: Zap,
    title: "Energy & Infrastructure",
    description: "Renewable energy and power generation projects",
  },
];

const PartnerPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Partnership Inquiry Received",
      description: "Our investment team will contact you within 48 hours.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/40" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Investment Opportunities
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Partner With <span className="gold-text">Meldony Investments</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Join one of Africa's leading investment holding companies. We offer strategic 
              partnership opportunities across mining, construction, agriculture, and energy sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#partnership-form" className="btn-primary inline-flex items-center gap-2">
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#sectors" className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300">
                Explore Sectors
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-navy-light/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Partnership <span className="gold-text">Opportunities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer diverse partnership structures tailored to your investment goals and risk appetite.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <type.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section id="sectors" className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Investment Sectors
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              High-Growth <span className="gold-text">Industries</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore investment opportunities across our diversified portfolio of African industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <sector.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partnership-form" className="section-padding bg-navy-light/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Start Your Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Submit a Partnership <span className="gold-text">Inquiry</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to explore investment opportunities with Meldony Investments? 
                Complete the form and our investment team will review your inquiry 
                and respond within 48 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground">Direct access to investment opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground">Fully compliant and transparent processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground">Strong local presence across Africa</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card/50">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Partnership Type *
                      </label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="equity">Equity Partnership</option>
                        <option value="joint-venture">Joint Venture</option>
                        <option value="strategic">Strategic Alliance</option>
                        <option value="investor">Investment Opportunity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Investment Sector *
                      </label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      >
                        <option value="">Select sector</option>
                        <option value="mining">Mining & Resources</option>
                        <option value="construction">Real Estate & Construction</option>
                        <option value="agriculture">Agriculture & Agribusiness</option>
                        <option value="energy">Energy & Infrastructure</option>
                        <option value="multiple">Multiple Sectors</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Investment Range
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all">
                      <option value="">Prefer not to disclose</option>
                      <option value="under-100k">Under $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m-5m">$1,000,000 - $5,000,000</option>
                      <option value="over-5m">Over $5,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Brief Description of Interest *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="Tell us about your investment goals and interests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Inquiry Submitted!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Partnership Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnerPage;
