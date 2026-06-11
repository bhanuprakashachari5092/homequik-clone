import React from 'react';

const PartnerMarquee: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="bg-white rounded-2xl shadow-sm border border-border p-6 overflow-hidden relative">
        <div className="flex items-center justify-center mb-8">
           <div className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest shadow-sm hover:shadow-md hover:border-slate-300 transition-all inline-flex items-center gap-3 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
              </span>
              Proud partner's With
           </div>
        </div>
        <div className="flex w-full overflow-hidden relative group">
           {/* We use 3 blocks of the same content to create the seamless infinite scroll */}
           <div className="flex w-max animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused] transition-all duration-300">
              {/* Block 1 */}
              <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>

              </div>
              {/* Block 2 */}
              <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>

              </div>
              {/* Block 3 */}
              <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>
                 <div className="w-32 md:w-48 flex items-center justify-center">
                    <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" />
                 </div>

              </div>
           </div>
        </div>
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
