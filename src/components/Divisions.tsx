import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
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
  ArrowRight,
} from "lucide-react";

const divisions = [
  {
    icon: TrendingUp,
    title: "Investment & Capital Markets",
    description: "Strategic portfolio management and capital allocation across diverse asset classes.",
  },
  {
    icon: Building2,
    title: "Engineering & Construction",
    description: "Infrastructure development and engineering solutions for modern Africa.",
  },
  {
    icon: Mountain,
    title: "Mining & Mineral Processing",
    description: "Responsible extraction and processing of Zimbabwe's rich mineral resources.",
  },
  {
    icon: Fuel,
    title: "Fuel, Energy & Petroleum",
    description: "Powering progress through reliable energy solutions and fuel distribution.",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Efficient movement of goods and resources across the continent.",
  },
  {
    icon: Home,
    title: "Property Development",
    description: "Creating sustainable residential and commercial spaces for growing communities.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Farming",
    description: "Modern farming techniques driving food security and agricultural exports.",
  },
  {
    icon: Cpu,
    title: "IT & Technology",
    description: "Digital transformation solutions for businesses and government institutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Trading",
    description: "Value-added manufacturing and strategic trading partnerships.",
  },
  {
    icon: Banknote,
    title: "Money Transfer & Financial Services",
    description: "Accessible financial services connecting families and businesses.",
  },
];

export const Divisions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="divisions" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-navy/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            We operate across Zimbabwe and Africa's most vital economic sectors,
            driving growth and creating opportunities at every level.
          </p>
        </motion.div>

        {/* Divisions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-gold-gradient group-hover:scale-110 transition-all duration-300">
                  <division.icon className="w-6 h-6 text-accent group-hover:text-navy-dark transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {division.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  {division.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in partnering with one of our divisions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-navy-dark font-semibold rounded-lg hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
