import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const values = [
  { icon: Shield, title: "Integrity", description: "Transparent and ethical business practices" },
  { icon: Users, title: "Partnership", description: "Building lasting relationships with stakeholders" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing change and driving progress" },
  { icon: Heart, title: "Impact", description: "Creating value for communities and economies" },
];

const AboutPage = () => {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Africa's <span className="gold-text">Future</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diversified investment holding company committed to infrastructure,
              industry, and economic development across Zimbabwe and Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                <span className="font-semibold text-accent">Meldony Investments (Private) Limited</span>{" "}
                is a Zimbabwe-registered multi-industry investment company that operates
                across the continent's most vital economic sectors. From mining and energy
                to technology and agriculture, we invest in businesses that power growth
                and create lasting impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our approach combines local expertise with international standards,
                partnering with governments, corporations, and entrepreneurs to unlock
                Africa's vast potential. We believe in building infrastructure that
                transforms communities and industries that create sustainable employment.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 rounded-xl border border-accent/20 bg-accent/5"
                >
                  <Target className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    To drive sustainable economic development through strategic investments
                    that create value for stakeholders and communities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-6 rounded-xl border border-accent/20 bg-accent/5"
                >
                  <Eye className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    To be Africa's most trusted investment partner, recognized for
                    integrity, innovation, and impactful growth.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-accent/10" />
                <div className="absolute inset-4 rounded-full border border-accent/10" />
                <div className="absolute inset-8 rounded-full border border-accent/20" />
                <div className="absolute inset-12 rounded-full border border-accent/20" />
                
                {/* Center content */}
                <div className="absolute inset-16 rounded-full bg-accent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-accent-foreground font-display text-4xl font-bold">15+</div>
                    <div className="text-accent-foreground/80 text-sm font-medium">Years of Excellence</div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 right-8 p-3 rounded-lg bg-card border border-border shadow-lg"
                >
                  <div className="text-accent font-bold">100+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-12 left-4 p-3 rounded-lg bg-card border border-border shadow-lg"
                >
                  <div className="text-accent font-bold">10+</div>
                  <div className="text-xs text-muted-foreground">Sectors</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;