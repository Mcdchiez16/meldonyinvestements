import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Mountain, Wheat, Fuel, Home } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects = [
  {
    icon: Fuel,
    category: "Energy",
    title: "Fuel Distribution Network",
    description: "Strategic petroleum and energy distribution channels across Zimbabwe, ensuring reliable fuel supply to businesses and communities.",
    status: "Expanding",
    featured: true,
  },
  {
    icon: Fuel,
    category: "Energy",
    title: "Service Station Development",
    description: "Modern fuel service stations with convenience retail, strategically located to serve high-traffic corridors.",
    status: "Active",
    featured: true,
  },
  {
    icon: Mountain,
    category: "Mining",
    title: "Gold & Mineral Extraction",
    description: "Sustainable mining operations with modern extraction technologies.",
    status: "Active",
  },
  {
    icon: Building2,
    category: "Construction",
    title: "Infrastructure Development",
    description: "Major infrastructure projects across Zimbabwe.",
    status: "Ongoing",
  },
  {
    icon: Wheat,
    category: "Agriculture",
    title: "Commercial Farming",
    description: "Large-scale agricultural operations for food security.",
    status: "Active",
  },
  {
    icon: Home,
    category: "Property",
    title: "Real Estate Portfolio",
    description: "Commercial and residential property developments.",
    status: "Growing",
  },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/40" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Projects & Investments
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="gold-text">Active</span> Investments
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse portfolio of projects driving economic growth
              and development across key sectors, with a focus on energy and fuel distribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full p-6 rounded-2xl border ${project.featured ? 'border-accent/40 bg-accent/5' : 'border-border bg-card/60'} hover:border-accent/40 transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${project.featured ? 'bg-accent' : 'bg-navy-light'} flex items-center justify-center group-hover:scale-105 transition-all duration-300`}>
                      <project.icon className={`w-7 h-7 ${project.featured ? 'text-accent-foreground' : 'text-accent'}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.featured ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent border border-accent/20'}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-accent text-sm font-medium mb-2">{project.category}</p>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-2xl border-2 border-dashed border-border bg-card/30 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  More Coming
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  New investment opportunities launching soon.
                </p>
                <Link
                  to="/contact"
                  className="text-accent text-sm font-medium hover:underline"
                >
                  Get Notified →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;