import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Importi slika ostaju isti ---
import preSlika from "./assets/pre.jpeg";
import posleSlika from "./assets/posle.jpeg";
import slika1 from "./assets/moleraj-slike/slika1.jpeg";
import slika2 from "./assets/moleraj-slike/moleraj6.jpg";

function Galerija() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX || e.touches?.[0].clientX) - rect.left) / rect.width;
    setSliderPos(Math.max(0, Math.min(100, x * 100)));
  };

  return (
    <section id="galerija" className="w-full py-24 md:py-40 bg-[#0d0d0d] relative overflow-hidden font-['Inter']">
      
      <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEVO - FIXED SLIDER */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative w-full h-[450px] md:h-[650px] overflow-hidden border border-white/10 cursor-ew-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Slika POSLE (Osnova) */}
          <img 
            src={posleSlika} 
            alt="Posle" 
            className="absolute inset-0 w-full h-full object-cover" 
          />

          {/* Slika PRE (Overlay koji se seče) */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-2 border-white/50 z-10"
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src={preSlika} 
              alt="Pre" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
              style={{ 
                width: containerRef.current ? containerRef.current.offsetWidth : '100%',
                maxWidth: 'none' 
              }} 
            />
          </div>

          {/* Kontroler (Krug sa strelicama) */}
          <div 
            className="absolute inset-y-0 z-20 pointer-events-none" 
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7l-4 4m0 0l4 4m-4-4h16m0 0l-4-4m4 4l-4 4" />
              </svg>
            </div>
          </div>

          {/* Labeli */}
          <div className="absolute bottom-4 left-4 z-30 bg-black/80 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">Pre</div>
          <div className="absolute bottom-4 right-4 z-30 bg-white px-4 py-1 text-[10px] font-black uppercase tracking-widest text-black">Posle</div>
        </motion.div>

        {/* DESNO - SADRŽAJ (Ovaj deo ostaje sličan, usklađen sa tvojim "Heavy" stilom) */}
        <div className="text-white">
          <h4 className="text-gray-500 font-black tracking-[0.5em] uppercase text-[11px] mb-6">Projekti</h4>
          <h2 className="font-['Archivo'] text-5xl md:text-8xl font-[900] leading-[0.85] mb-8 tracking-tighter uppercase">
            Moć <br /> <span className="text-gray-600 italic font-light">promene.</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg mb-12 border-l-2 border-white/20 pl-6">
            Pogledajte kako precizna ruka i kvalitetna boja menjaju energiju prostora. Od zapuštenih zidova do premium završnice.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="aspect-square overflow-hidden transition-all duration-500 border border-white/5">
              <img src={slika1} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="aspect-square overflow-hidden transition-all duration-500 border border-white/5">
              <img src={slika2} className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          <Link to="/fullgalerija" className="group relative inline-block w-full md:w-auto">
            <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
            <button className="relative z-10 w-full md:w-auto bg-black border border-white px-12 py-5 text-white font-[900] uppercase text-xs tracking-[0.3em] group-hover:bg-white group-hover:text-black transition-colors">
              Svi radovi
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Galerija;