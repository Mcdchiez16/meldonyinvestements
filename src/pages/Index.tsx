import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import logo from "@/assets/logo.png";

const sectors = [
  { icon: TrendingUp, name: "Investment & Capital Markets", color: "text-accent" },
  { icon: Building2, name: "Engineering & Construction", color: "text-accent" },
  { icon: Mountain, name: "Mining & Mineral Processing", color: "text-accent" },
  { icon: Fuel, name: "Fuel, Energy & Petroleum", color: "text-accent" },
  { icon: Truck, name: "Transport & Logistics", color: "text-accent" },
  { icon: Home, name: "Property Development", color: "text-accent" },
  { icon: Wheat, name: "Agriculture & Farming", color: "text-accent" },
  { icon: Cpu, name: "IT & Technology", color: "text-accent" },
  { icon: Factory, name: "Manufacturing & Trading", color: "text-accent" },
  { icon: Banknote, name: "Financial Services", color: "text-accent" },
];

const stats = [
  { value: 10, suffix: "+", label: "Business Sectors" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Strategic Partners" },
];

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Unique Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8"
              >
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Zimbabwe's Premier Investment Group
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
              >
                Powering Growth Across{" "}
                <span className="gold-text">Africa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
              >
                Meldony Investments is a diversified investment holding company 
                committed to infrastructure, industry, and economic development 
                across Zimbabwe and the African continent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Request Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/divisions"
                  className="btn-secondary"
                >
                  Explore Divisions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Logo & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex flex-col items-center"
            >
              {/* Large Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative mb-12"
              >
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-150" />
                <img 
                  src={logo} 
                  alt="Meldony Investments" 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-card/50 text-center"
                  >
                    <div className="text-3xl font-display font-bold text-accent mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sectors Marquee */}
      <section className="py-8 bg-card border-y border-border overflow-hidden">
        <div className="flex animate-[slide_30s_linear_infinite]">
          {[...sectors, ...sectors].map((sector, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 whitespace-nowrap"
            >
              <sector.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                {sector.name}
              </span>
              <span className="text-accent/30">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Building Africa's <span className="gold-text">Future</span> Today
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Meldony Investments (Private) Limited is a Zimbabwe-registered 
                multi-industry investment company that operates across the continent's 
                most vital economic sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From mining and energy to technology and agriculture, we invest in 
                businesses that power growth and create lasting impact. Our approach 
                combines local expertise with international standards.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold group"
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Shield, title: "Integrity", desc: "Ethical business practices" },
                { icon: Users, title: "Partnership", desc: "Building lasting relationships" },
                { icon: TrendingUp, title: "Growth", desc: "Driving economic development" },
                { icon: Globe, title: "Africa Focus", desc: "Local knowledge, global standards" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-accent mb-4" />
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
      <section className="section-padding bg-navy/30">
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
              Diversified <span className="gold-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operating across 10+ strategic sectors driving Zimbabwe's economic growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-5 rounded-xl border border-border bg-card/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
              >
                <sector.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium text-foreground text-sm group-hover:text-accent transition-colors">
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-border bg-card p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Partner With <span className="gold-text">Meldony</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Whether you're looking for investment opportunities, strategic collaborations, 
                or partnerships, we're here to help power your success across Africa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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