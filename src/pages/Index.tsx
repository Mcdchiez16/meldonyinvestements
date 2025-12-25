import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Mountain,
  Fuel,
  Truck,
  Home,
  Wheat,
  Cpu,
  Factory,
  Banknote,
  Globe,
  Shield,
  Users,
  ChevronRight,
  Award,
  Target,
  Briefcase,
} from "lucide-react";
import logo from "@/assets/logo.webp";

const sectors = [
  { icon: TrendingUp, name: "Investment & Capital Markets" },
  { icon: Building2, name: "Engineering & Construction" },
  { icon: Mountain, name: "Mining & Mineral Processing" },
  { icon: Fuel, name: "Fuel, Energy & Petroleum" },
  { icon: Truck, name: "Transport & Logistics" },
  { icon: Home, name: "Property Development" },
  { icon: Wheat, name: "Agriculture & Farming" },
  { icon: Cpu, name: "IT & Technology" },
  { icon: Factory, name: "Manufacturing & Trading" },
  { icon: Banknote, name: "Financial Services" },
];

const stats = [
  { value: 10, suffix: "+", label: "Business Sectors" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Strategic Partners" },
];

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, hasAnimated]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Premium Executive Design */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Premium Background Layers */}
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] w-20 h-20 border border-accent/20 rounded-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[10%] w-16 h-16 border border-accent/15 rounded-full"
        />

        <div className="container-wide relative z-10 pt-20 pb-16">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150" />
                <img 
                  src={logo} 
                  alt="Meldony Investments" 
                  className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain"
                />
              </div>
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent tracking-wide">
                Zimbabwe's Premier Investment Group
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Powering{" "}
              <span className="relative inline-block">
                <span className="gold-text">Strategic Growth</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-accent/40 rounded-full"
                />
              </span>
              <br />
              Across Africa
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              A diversified investment holding company committed to infrastructure, 
              industry, and sustainable economic development across Zimbabwe and the African continent.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/divisions"
                className="group px-8 py-4 border-2 border-border text-foreground font-semibold rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Explore Our Divisions
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-3xl"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Trust Bar / Sectors Marquee */}
      <section className="py-6 bg-card/80 border-y border-border/50 overflow-hidden backdrop-blur-sm">
        <div className="flex animate-[slide_40s_linear_infinite]">
          {[...sectors, ...sectors].map((sector, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
            >
              <sector.icon className="w-4 h-4 text-accent/70" />
              <span className="text-sm font-medium text-muted-foreground/80">
                {sector.name}
              </span>
              <span className="text-accent/20 mx-4">|</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Why Meldony
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Africa's <span className="gold-text">Future</span> Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine deep local expertise with international standards to deliver 
              exceptional value across every investment we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Shield, 
                title: "Corporate Excellence", 
                desc: "Transparent governance and ethical business practices at every level",
                highlight: "100% Compliant"
              },
              { 
                icon: Target, 
                title: "Strategic Focus", 
                desc: "Targeted investments in high-growth sectors with proven returns",
                highlight: "10+ Sectors"
              },
              { 
                icon: Award, 
                title: "Proven Track Record", 
                desc: "Over 100 successful projects delivered across the continent",
                highlight: "100+ Projects"
              },
              { 
                icon: Briefcase, 
                title: "Partnership First", 
                desc: "Building long-term relationships with stakeholders and communities",
                highlight: "50+ Partners"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-border bg-card/50 hover:border-accent/30 hover:bg-card transition-all duration-500"
              >
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-semibold text-accent/70 bg-accent/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <item.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-navy/40 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.02]" />
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                A Trusted Partner for <span className="gold-text">Sustainable Growth</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Meldony Investments (Private) Limited is a Zimbabwe-registered 
                multi-industry investment company operating across the continent's 
                most vital economic sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From mining and energy to technology and agriculture, we strategically 
                invest in businesses that power growth, create employment, and deliver 
                lasting positive impact for communities across Africa.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Shield, title: "Integrity", desc: "Ethical practices in all we do" },
                { icon: Users, title: "Partnership", desc: "Building lasting relationships" },
                { icon: TrendingUp, title: "Growth", desc: "Driving economic development" },
                { icon: Globe, title: "Africa Focus", desc: "Local expertise, global reach" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 hover:bg-card transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Our Divisions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Diversified <span className="gold-text">Investment Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operating across 10+ strategic sectors that power Zimbabwe's economic growth and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-5 rounded-xl border border-border bg-card/30 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-pointer text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <sector.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground text-sm leading-tight group-hover:text-accent transition-colors">
                  {sector.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/divisions"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Divisions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-navy/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-border bg-card overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8"
              >
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Start Your Journey With Us</span>
              </motion.div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Partner With <span className="gold-text">Meldony</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Whether you're seeking investment opportunities, strategic collaborations, 
                or partnerships, we're ready to help power your success across Africa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)]"
                >
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="btn-secondary"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;