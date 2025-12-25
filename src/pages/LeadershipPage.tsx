import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const leaders = [
  {
    name: "Melody Nyasha Nemaire",
    title: "Director & Chief Executive",
    bio: "Visionary leader with extensive experience in investment strategy and corporate governance across African markets.",
    initials: "MN",
  },
  {
    name: "Mcdonald Tafadzwa Chizhowezha",
    title: "Director & Investment Executive",
    bio: "Expert in capital markets and strategic acquisitions with a proven track record in portfolio management.",
    initials: "MC",
  },
  {
    name: "Diana Thandiwe Mpofu",
    title: "Director & Operations Executive",
    bio: "Experienced operations leader specializing in multi-sector business development and stakeholder relations.",
    initials: "DM",
  },
];

const whyChooseUs = [
  { title: "Corporate Governance", desc: "Transparent, ethical, and accountable" },
  { title: "Registered & Compliant", desc: "Full legal registration in Zimbabwe" },
  { title: "Multi-Sector Expertise", desc: "10+ industries, one trusted partner" },
  { title: "Africa-Focused", desc: "Local knowledge, global standards" },
];

const LeadershipPage = () => {
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
              Leadership
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="gold-text">Directors</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in investment,
              operations, and strategic growth across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 hover:border-accent/30 transition-all duration-500">
                  {/* Photo Area */}
                  <div className="relative h-64 bg-navy-light overflow-hidden">
                    {/* Avatar with initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-32 h-32 rounded-full bg-accent flex items-center justify-center shadow-2xl"
                      >
                        <span className="font-display text-4xl font-bold text-accent-foreground">
                          {leader.initials}
                        </span>
                      </motion.div>
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-card/80" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-4">{leader.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3">
                      <button className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Why Partner With <span className="gold-text">Meldony</span>?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="p-6 rounded-xl border border-border bg-card/30 text-center hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default LeadershipPage;