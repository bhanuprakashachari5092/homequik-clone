import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, Shield, CheckCircle2, MapPin, ArrowRight } from "lucide-react";

export function Hero3D({ location }: { location: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values for subtle 3D card tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  // Transforms for very subtle rotation (max 6 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="relative bg-[#fdfbf7] pt-16 pb-24 md:py-32 overflow-hidden flex items-center z-20"
      style={{ perspective: "1500px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#7d9c82]/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#b35d38]/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 animate-fade-in" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Typography & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#e2ded7] bg-[#f5f2eb] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2d3e35]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#b35d38]" /> 
              <span>Premium Tech & Security Partner</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2d3e35] leading-[1.15]"
              >
                Smart Protection & <br />
                <span className="bg-linear-to-r from-[#b35d38] via-[#c46c44] to-[#7d9c82] bg-clip-text text-transparent">
                  Security Services
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl"
              >
                Connecting you with verified tech specialists for professional installation, repairs, AMC, and upgrades in <span className="text-[#b35d38] font-bold border-b border-[#b35d38]/30 pb-0.5">{location}</span>.
              </motion.p>
            </div>

            {/* Clean Feature Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 w-full"
            >
              {[
                { icon: Shield, text: "Verified Experts" },
                { icon: CheckCircle2, text: "Upfront Pricing" },
                { icon: MapPin, text: `Auto-Detected: ${location}` }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#e2ded7]/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-xs font-bold text-[#2d3e35]"
                >
                  <item.icon className="h-4 w-4 text-[#7d9c82]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Quick Navigation CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pt-2"
            >
              <a 
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#b35d38] hover:bg-[#8f4727] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>View Our Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Premium 3D Camera Card */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full h-100 md:h-125">
            
            {/* Soft Shadow Base */}
            <div className="absolute w-75 h-75 rounded-full bg-[#7d9c82]/10 blur-2xl z-0 pointer-events-none" />

            {/* Minimalist Interactive Tilt Card */}
            <motion.div
              style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full max-w-85 md:max-w-92.5 aspect-4/5 rounded-[2.5rem] shadow-[0_25px_55px_rgba(45,62,53,0.12)] overflow-hidden group select-none border border-[#e2ded7] bg-white"
            >
              {/* Glass glare sweep on hover */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-20" />

              <motion.div
                style={{ 
                  transform: "translateZ(30px)",
                  transformStyle: "preserve-3d"
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <img 
                  src="/professional_security_hero.png" 
                  alt="Premium Security System Setup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
