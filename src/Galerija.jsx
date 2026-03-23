import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// --- Importi slika ---
import preSlika from "./assets/pre.jpeg";
import posleSlika from "./assets/posle.jpeg";
import slika1 from "./assets/moleraj-slike/slika1.jpeg";
import slika2 from "./assets/moleraj-slike/moleraj6.jpg";

function Galerija() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX || e.touches?.[0].clientX) - rect.left) / rect.width;
    setSliderPos(Math.max(0, Math.min(100, x * 100)));
  };

  return (
    <section
      id="galerija"
      className="w-full min-h-screen py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden font-['Inter'] flex items-center justify-center"
    >
      <div className="max-w-[1500px] w-full mx-auto px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
          
          {/* 1. NASLOV I TEKST */}
          <motion.div 
            className="w-full lg:w-1/2 lg:order-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gray-500 font-black tracking-[0.5em] uppercase text-[11px] mb-6">
              Projekti
            </h4>
            <h2 className="font-['Archivo'] text-6xl md:text-8xl font-[900] leading-[0.85] mb-8 tracking-tighter uppercase text-white">
              Moć <br />{" "}
              <span className="text-gray-600 italic font-light">promene.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md sm:mb-0 lg:mb-12 border-l-2 border-white/20 pl-6">
              Pogledajte kako precizna ruka i kvalitetna boja menjaju energiju
              prostora. Od zapuštenih zidova do premium završnice.
            </p>

            {/* Desktop grid i CRNO DUGME */}
            <div className="hidden lg:flex flex-col items-start gap-10 w-full max-w-md">
              <div className="grid grid-cols-2 gap-5 w-full">
                <div className="aspect-square overflow-hidden border border-white/10 h-80 w-80">
                  <img src={slika1} className="w-full h-full object-cover" alt="1" />
                </div>
                <div className="aspect-square overflow-hidden border border-white/10 h-80 w-80 ml-30">
                  <img src={slika2} className="w-full h-full object-cover" alt="2" />
                </div>
              </div>
              <button
                onClick={() => navigate("/fullgalerija")}
                // IZMENA: Crno dugme, beli border, hover efekat
                className="w-full md:w-auto bg-black border border-white px-14 py-6 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Svi radovi
              </button>
            </div>
          </motion.div>

          {/* 2. SLIDER SA ORIGINALNIM STRELICAMA */}
          <motion.div
            ref={containerRef}
            className="relative w-full lg:w-1/2 h-[500px] md:h-[650px] overflow-hidden border border-white/10 cursor-ew-resize select-none lg:order-1 shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={posleSlika} className="absolute inset-0 w-full h-full object-cover" alt="Posle" />
            
            <div className="absolute inset-0 overflow-hidden border-r-2 border-white/40 z-10" style={{ width: `${sliderPos}%` }}>
              <img
                src={preSlika}
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7]"
                style={{ width: containerRef.current?.offsetWidth || "600px", maxWidth: "none" }}
                alt="Pre"
              />
            </div>

            {/* VRAĆENE ORIGINALNE STRELICE */}
            <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M8 7l-4 4m0 0l4 4m-4-4h16m0 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-30 bg-black/80 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white border border-white/10">Pre</div>
            <div className="absolute bottom-6 right-6 z-30 bg-white px-5 py-2 text-[10px] font-black uppercase tracking-widest text-black">Posle</div>
          </motion.div>

          {/* 3. MOBILNI DODATAK SA CRNIM DUGMETOM */}
          <div className="flex lg:hidden flex-col items-start gap-10 w-full order-3 mt-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={slika1} className="w-full h-full object-cover" alt="1" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src={slika2} className="w-full h-full object-cover" alt="2" />
              </div>
            </div>
            <button
              onClick={() => navigate("/fullgalerija")}
              className="w-full bg-black border border-white py-6 text-white font-black uppercase text-xs tracking-[0.3em] active:bg-white active:text-black transition-all"
            >
              Svi radovi
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Galerija;