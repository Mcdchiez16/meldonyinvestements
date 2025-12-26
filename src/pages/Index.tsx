import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Mountain, Fuel, Truck, Home, Wheat, Cpu, Factory, Banknote, Globe, Shield, Users, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.webp";
const sectors = [{
  icon: TrendingUp,
  name: "Investment & Capital"
}, {
  icon: Building2,
  name: "Construction"
}, {
  icon: Mountain,
  name: "Mining"
}, {
  icon: Fuel,
  name: "Energy"
}, {
  icon: Truck,
  name: "Logistics"
}, {
  icon: Home,
  name: "Property"
}, {
  icon: Wheat,
  name: "Agriculture"
}, {
  icon: Cpu,
  name: "Technology"
}, {
  icon: Factory,
  name: "Manufacturing"
}, {
  icon: Banknote,
  name: "Finance"
}];
const values = [{
  icon: Shield,
  title: "Integrity",
  desc: "Transparent governance and ethical practices define every decision we make."
}, {
  icon: Users,
  title: "Partnership",
  desc: "We build lasting relationships that create shared value for all stakeholders."
}, {
  icon: TrendingUp,
  title: "Growth",
  desc: "Driving sustainable economic development and employment across Africa."
}, {
  icon: Globe,
  title: "Vision",
  desc: "Local expertise combined with global standards for exceptional outcomes."
}];
const Index = () => {
  return <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Clean Editorial Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-navy" />
        
        {/* Subtle Accent Glow */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-3xl" />

        <div className="container-wide relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="inline-flex items-center gap-2 mb-8">
                <div className="w-8 h-px bg-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-widest">ZIMBABWE'S PREMIER PRIVATE LIMITED COMPANY</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
                Powering Growth
                <br />
                <span className="gold-text">Across Africa</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
                A diversified investment holding company driving sustainable 
                economic development through strategic partnerships in mining, 
                energy, infrastructure, and beyond.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="group px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-gold-dark">
                  <span className="flex items-center gap-2">
                    Request Partnership
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/divisions" className="group px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Explore Divisions
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right - Logo & Visual */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="lg:col-span-5 flex items-center justify-center">
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 -m-8 border border-accent/10 rounded-full" />
                <div className="absolute inset-0 -m-16 border border-accent/5 rounded-full" />
                
                {/* Logo Container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-full" />
                  <img src={logo} alt="Meldony Investments" className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div animate={{
          y: [0, 6, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-px h-10 bg-accent/30" />
        </motion.div>
      </section>

      {/* Sectors Strip */}
      <section className="py-5 border-y border-border/50 bg-card/50 overflow-hidden">
        <div className="flex animate-[slide_35s_linear_infinite]">
          {[...sectors, ...sectors, ...sectors].map((sector, index) => <div key={index} className="flex items-center gap-2 px-6 whitespace-nowrap">
              <sector.icon className="w-4 h-4 text-accent/60" />
              <span className="text-sm text-muted-foreground/70">
                {sector.name}
              </span>
              <span className="text-border/50 mx-4">•</span>
            </div>)}
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Text */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-widest">
                  Who We Are
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                Building Africa's
                <br />
                <span className="gold-text">Economic Future</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meldony Investments Private Limited is a duly registered entity 
                under the Zimbabwe Company Registration Act, operating with a solid 
                foundation and compliance record.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our core focus is delivering reliable and innovative investment 
                solutions tailored to meet the dynamic needs of our clients. We 
                pride ourselves on maintaining the highest standards of corporate 
                governance and transparency in all our dealings.
              </p>

              <Link to="/about" className="inline-flex items-center gap-2 text-accent font-semibold group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Right - Values Grid */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="grid grid-cols-2 gap-4">
              {values.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} className="group p-6 rounded-xl border border-border bg-card/30 hover:border-accent/30 hover:bg-card/50 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="section-padding bg-navy/30">
        <div className="container-wide">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Our Portfolio
              </span>
              <div className="w-8 h-px bg-accent" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Diversified <span className="gold-text">Investments</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic operations across multiple sectors powering Zimbabwe's 
              economic development and continental growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {sectors.map((sector, index) => <motion.div key={sector.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.05
          }} className="group p-5 rounded-xl border border-border bg-card/20 hover:border-accent/40 hover:bg-card/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300">
                  <sector.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground text-sm group-hover:text-accent transition-colors">
                  {sector.name}
                </h3>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="text-center mt-12">
            <Link to="/divisions" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300">
              View All Divisions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative rounded-2xl border border-border bg-card overflow-hidden">
            {/* Subtle Background Accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-widest">
                    Partner With Us
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Ready to Build
                  <br />
                  <span className="gold-text">Something Great?</span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                  Whether you're seeking investment opportunities or strategic 
                  collaborations, we're ready to help power your success across Africa.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact" className="group px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-gold-dark">
                    <span className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link to="/projects" className="px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300">
                    View Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default Index;