import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Lightbulb, CheckCircle2, Calendar, Building } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const values = [{
  icon: Shield,
  title: "Integrity",
  description: "Transparent and ethical business practices in all dealings"
}, {
  icon: Users,
  title: "Partnership",
  description: "Building lasting relationships with stakeholders"
}, {
  icon: Lightbulb,
  title: "Innovation",
  description: "Delivering reliable and innovative solutions"
}, {
  icon: Heart,
  title: "Impact",
  description: "Creating value for communities and economies"
}];
const companyHighlights = ["Duly registered under the Zimbabwe Company Registration Act", "200,000 ordinary shares authorized capital", "Highest standards of corporate governance", "Full legal compliance and transparency"];
const AboutPage = () => {
  return <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/30" />
        
        <div className="container-wide relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
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
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Left Content */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                <span className="font-semibold text-accent">Meldony Investments (Private) Limited</span>{" "}
                is a duly registered entity under the Zimbabwe Company Registration Act, 
                operating with a solid foundation and compliance record. Our core focus 
                is delivering reliable and innovative investment solutions tailored to 
                meet the dynamic needs of our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pride ourselves on maintaining the highest standards of corporate 
                governance and transparency in all our dealings. From mining and energy 
                to technology and agriculture, we invest in businesses that power growth 
                and create lasting impact across Africa's most vital economic sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our approach combines local expertise with international standards,
                partnering with governments, corporations, and entrepreneurs to unlock
                Africa's vast potential. We believe in building infrastructure that
                transforms communities and industries that create sustainable employment.
              </p>

              {/* Company Highlights */}
              <div className="space-y-3 mb-8">
                {companyHighlights.map((highlight, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1
              }} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>)}
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.6
              }} className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                  <Target className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    To drive sustainable economic development through strategic investments
                    that create value for stakeholders and communities.
                  </p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.7
              }} className="p-6 rounded-xl border border-accent/20 bg-accent/5">
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

            {/* Right Content - Company Info Cards */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="space-y-6">
              {/* Established Card */}
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Established</h4>
                    <p className="text-2xl font-display font-bold text-accent">April 2022</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Incorporated under the Companies and Other Business Entities Act [Chapter 24:31]
                </p>
              </div>

              {/* Registration Card */}
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Legal Entity</h4>
                    <p className="text-lg font-medium text-accent">Private Limited Company</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Registered in Harare, Zimbabwe with full legal compliance
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card/30 text-center">
                  <div className="text-2xl font-display font-bold text-accent">10+</div>
                  <div className="text-xs text-muted-foreground">Business Sectors</div>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/30 text-center">
                  <div className="text-2xl font-display font-bold text-accent">​2</div>
                  <div className="text-xs text-muted-foreground">Directors</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => <motion.div key={value.title} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.9 + index * 0.1
            }} className="group p-6 rounded-xl border border-border bg-card/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default AboutPage;