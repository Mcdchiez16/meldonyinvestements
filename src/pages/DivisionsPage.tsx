import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const divisions = [
  {
    icon: Fuel,
    title: "Fuel, Energy & Petroleum",
    description: "Our flagship division powering progress through reliable energy solutions, petroleum distribution, and strategic fuel supply chains across Zimbabwe.",
    featured: true,
  },
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

const DivisionsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/30" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Our Divisions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Diversified <span className="gold-text">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We operate across Zimbabwe and Africa's most vital economic sectors,
              driving growth and creating opportunities at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`group relative ${division.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`relative p-8 rounded-2xl border ${division.featured ? 'border-accent/40 bg-accent/5' : 'border-border bg-card/50'} hover:border-accent/30 hover:bg-card transition-all duration-300 h-full flex flex-col`}>
                  {division.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
                      Featured
                    </span>
                  )}
                  <div className={`w-14 h-14 rounded-xl ${division.featured ? 'bg-accent' : 'bg-accent/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <division.icon className={`w-7 h-7 ${division.featured ? 'text-accent-foreground' : 'text-accent'}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {division.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Interested in partnering with one of our divisions?
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DivisionsPage;