import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Star, Clock, Video, Lock, Home as HomeIcon, ChevronDown, UserPlus, LogIn, Briefcase, FileText } from "lucide-react";

export function Hero3D({ location }: { location: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="relative bg-white pt-20 pb-32 min-h-screen flex items-center z-50"
      style={{ perspective: "2000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Animated Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-brand/30 to-red-600/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-orange-400/20 to-brand/30 blur-[120px]" 
        />
      </div>

      {/* Floating 3D Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <FloatingCard 
          icon={<Video className="h-8 w-8 text-brand" />} 
          title="CCTV & Security" 
          delay={0}
          initialPosition={{ x: -350, y: -150, z: -100 }}
        />
        <FloatingCard 
          icon={<Lock className="h-8 w-8 text-orange-500" />} 
          title="Biometrics" 
          delay={1}
          initialPosition={{ x: 350, y: -80, z: -50 }}
        />
        <FloatingCard 
          icon={<HomeIcon className="h-8 w-8 text-brand" />} 
          title="Smart Home" 
          delay={2}
          initialPosition={{ x: -250, y: 150, z: -150 }}
        />
        <FloatingCard 
          icon={<Sparkles className="h-8 w-8 text-red-400" />} 
          title="Electrical" 
          delay={1.5}
          initialPosition={{ x: 280, y: 180, z: 50 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10" ref={ref}>
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, z: -50 }}
            animate={{ scale: 1, opacity: 1, z: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 backdrop-blur-3xl px-5 py-2 text-sm font-semibold text-slate-800 shadow-[inset_0_0_20px_rgba(255,255,255,0.9),0_8px_30px_rgba(217,46,16,0.08)] mb-8 transform-gpu"
          >
            <Sparkles className="h-4 w-4 text-brand" /> Premium Services in {location}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20, z: 0 }}
            animate={{ opacity: 1, y: 0, z: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl text-slate-900 drop-shadow-lg transform-gpu"
          >
            Vendor99
            <br />
            <span className="bg-gradient-to-r from-brand via-red-500 to-orange-500 bg-clip-text text-transparent">
              Tech & Security
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, z: -20 }}
            animate={{ opacity: 1, z: 60 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium transform-gpu"
          >
            Connect with verified tech professionals for installation, repair, AMC maintenance, and smart security solutions at competitive prices.
          </motion.p>

          {/* Call to Action Buttons / Menu */}
          <motion.div 
            initial={{ opacity: 0, z: 0 }}
            animate={{ opacity: 1, z: 80 }}
            transition={{ delay: 0.5 }}
            className="mt-12 relative flex justify-center transform-gpu"
          >
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group overflow-hidden bg-brand text-white font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(217,46,16,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 pointer-events-auto"
            >
              <span className="relative z-10">Explore Services</span>
              <ChevronDown className={`h-5 w-5 relative z-10 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute top-full mt-4 w-[320px] sm:w-[380px] bg-white/60 backdrop-blur-3xl rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.9),0_20px_50px_rgba(0,0,0,0.1)] border border-white/80 overflow-hidden pointer-events-auto z-50 text-left"
                >
                  <div className="p-2 space-y-1 bg-white/40">
                    <Link to="/quote" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                      <div className="bg-brand/10 p-2 rounded-xl group-hover:bg-brand/20 transition-colors"><FileText className="h-5 w-5 text-brand" /></div>
                      <div>
                        <div className="font-bold text-slate-800">Get Free Quote</div>
                        <div className="text-xs text-slate-500">Estimate your project cost</div>
                      </div>
                    </Link>
                    <Link to="/book" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all group">
                      <div className="bg-orange-500/10 p-2 rounded-xl group-hover:bg-orange-500/20 transition-colors"><Briefcase className="h-5 w-5 text-orange-500" /></div>
                      <div>
                        <div className="font-bold text-slate-800">Book Service</div>
                        <div className="text-xs text-slate-500">Schedule an expert visit</div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="p-2 space-y-1 bg-white/60 border-t border-white/40">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pt-2 pb-1">Partner Portal</div>
                    <Link to="/partner" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all group">
                      <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-slate-200 transition-colors"><UserPlus className="h-5 w-5 text-slate-600" /></div>
                      <div className="font-bold text-slate-700 text-sm">Dealer Registration</div>
                    </Link>
                    <Link to="/dealer-portal" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all group">
                      <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-slate-200 transition-colors"><LogIn className="h-5 w-5 text-slate-600" /></div>
                      <div className="font-bold text-slate-700 text-sm">Dealer Login</div>
                    </Link>
                    <Link to="/become-partner" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all group">
                      <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-slate-200 transition-colors"><ShieldCheck className="h-5 w-5 text-slate-600" /></div>
                      <div className="font-bold text-slate-700 text-sm">Become a Partner</div>
                    </Link>
                  </div>

                  <div className="bg-slate-900/90 backdrop-blur-2xl p-4 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-brand" /> Verified Experts</div>
                    <div className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-500" /> 4.9/5 Rating</div>
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4 text-blue-400" /> 24/7 Support</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, delay, initialPosition }: { icon: React.ReactNode, title: string, delay: number, initialPosition: { x: number, y: number, z: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y + 100, z: initialPosition.z, scale: 0.8 }}
      animate={{ 
        opacity: [0, 1, 1, 0.8, 1],
        x: initialPosition.x,
        y: [initialPosition.y, initialPosition.y - 20, initialPosition.y],
        rotateX: [0, 15, -15, 0],
        rotateY: [0, 25, -25, 0],
        z: initialPosition.z
      }}
      transition={{ 
        opacity: { duration: 1, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className="absolute bg-white/30 backdrop-blur-3xl border border-white/60 p-6 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.9),0_16px_40px_rgba(0,0,0,0.08)] flex flex-col items-center gap-4 transform-gpu hidden md:flex"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="p-4 bg-gradient-to-br from-white/90 to-white/40 border border-white/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl relative">
        <div className="absolute inset-0 bg-white/50 rounded-2xl blur-md -z-10" />
        {icon}
      </div>
      <p className="text-slate-800 font-bold tracking-wide text-sm whitespace-nowrap">{title}</p>
    </motion.div>
  );
}
