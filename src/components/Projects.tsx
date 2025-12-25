import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building2, Mountain, Wheat, Fuel, Home } from "lucide-react";

const projects = [
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
    icon: Fuel,
    category: "Energy",
    title: "Fuel Distribution Network",
    description: "Strategic petroleum and energy distribution channels.",
    status: "Expanding",
  },
  {
    icon: Home,
    category: "Property",
    title: "Real Estate Portfolio",
    description: "Commercial and residential property developments.",
    status: "Growing",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy/40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Projects & Investments
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="gold-text">Active</span> Investments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse portfolio of projects driving economic growth
            and development across key sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-navy-light flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <project.icon className="w-7 h-7 text-accent group-hover:text-navy-dark transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              <a
                href="#contact"
                className="text-accent text-sm font-medium hover:underline"
              >
                Get Notified →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
