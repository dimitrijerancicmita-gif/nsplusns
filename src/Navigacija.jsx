import { motion } from "framer-motion";

import logoImg from "./assets/logo.png";
import heroImg from "./assets/hero2.avif";

function Navigacija() {
  // Sada koristimo uvezene objekte umesto stringova
  const assets = {
    logo: logoImg,
    hero: heroImg
  };

  return (
    <>
      {/* --- NAVIGACIJA --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-3 rounded-sm">
          
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src={assets.logo} 
              alt="logo" 
              className="h-8 md:h-10 w-auto grayscale brightness-200" 
            />
            <span className="font-['Archivo'] font-black text-white text-lg md:text-xl tracking-tighter uppercase italic hidden sm:block">
              NS PLUS <span className="text-gray-500 not-italic font-light">NS</span>
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-8 font-['Inter']">
            <a href="#" className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-gray-400 transition-all duration-300">
              Početna
            </a>
            <a href="#onama" className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-gray-400 transition-all duration-300">
              O nama
            </a>
            <a href="#galerija" className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em] border border-white/20 px-3 py-1.5 md:px-4 md:py-2 hover:bg-white hover:text-black transition-all">
              Galerija
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SEKCIJA --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-['Inter'] bg-black pb-10">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 grayscale-[0.3]"
          src={assets.hero}
          alt="Hero background"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

        <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <img 
              src={assets.logo}
              alt="logo central" 
              className="h-auto w-[60%] max-w-[300px] md:max-w-[450px] mb-[-30px] md:mb-[-40px] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] grayscale brightness-110" 
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-['Archivo'] text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[1.1] md:leading-none w-full max-w-5xl"
          >
            <span className="text-gray-400 italic font-light block md:inline mr-5">molersko-farbarsko</span> radovi
          </motion.h2>

          <div className="w-16 md:w-24 h-[2px] bg-white/30 mb-6 md:mb-8"></div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-xs sm:text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.4em] font-light mb-8 md:mb-10 max-w-2xl"
          >
            Preciznost. Kvalitet. Dugotrajnost. <br />
            <span className="text-[9px] md:text-[10px] text-gray-500 mt-2 block tracking-[0.4em] md:tracking-[0.6em]">Vaš prostor zaslužuje najbolje</span>
          </motion.p>

          <motion.a 
            href="tel:+381637776970"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <button className="group relative overflow-hidden border border-white px-8 py-3 md:px-10 md:py-4 transition-all duration-500 active:scale-95">
              <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs text-white group-hover:text-black transition-colors duration-500 font-['Inter']">
                Pozovite nas odmah
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </motion.a>
        </div>
      </section>
    </>
  );
}

export default Navigacija;