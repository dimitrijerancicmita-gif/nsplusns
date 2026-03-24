import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import m2 from './assets/moleraj-slike/moleraj6.jpg';
import f1 from './assets/fasade-slike/fasade1.jpg';
import m1 from './assets/dekoracije-slike/cetvrta.jpeg';
import f3 from './assets/fasade-slike/fasade6.jpg';

const Onamafull = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-white selection:text-black font-['Inter'] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-end px-6 pb-20 overflow-hidden ">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src={m2} alt="Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full ">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[15vw] md:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter"
          >
            <span className="relative -top-4 md:-top-6">
              Naša
            </span>
            <br />
            <span className="text-[15vw] md:text-[12rem] font-black text-[#cccc] uppercase leading-[0.8] tracking-tighter">
              Priča.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* --- SECTION 1: TRADICIJA --- */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeInUp} className="md:col-span-5">
            <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold mb-6">/ 01 Tradicija</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Tri decenije <span className="text-zinc-500">prenošenja znanja</span> sa kolena na koleno.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Naša priča počinje kao porodični posao koji je s vremenom prerastao u ozbiljan i pouzdan brend. 
              Firma je preuzeta od oca, uz veliku odgovornost i želju da se očuva kvalitet rada, ali i unapredi 
              kroz savremen pristup i nove ideje. Danas stojimo iza svakog projekta sa istom posvećenošću, 
              gradeći poverenje kroz rad, trud i rezultate.
            </p>
          </motion.div>
          
          <motion.div 
            {...fadeInUp}
            className="md:col-span-7 aspect-[4/5] bg-zinc-900 overflow-hidden group"
          >
            <img 
              src={f1} 
              alt="Istorija" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: FILOZOFIJA (Full Width Image Reveal) --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ backgroundImage: `url(${f3})` }}
          className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30"
        />
        <motion.div {...fadeInUp} className="relative z-10 max-w-4xl px-6 text-center">
          <blockquote className="text-3xl md:text-6xl italic font-light leading-tight">
            "Svaki potez četkom nosi težinu porodičnog ugleda koji čuvamo punih trideset godina."
          </blockquote>
        </motion.div>
      </section>

      {/* --- SECTION 3: UMETNOST RADA --- */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="md:col-span-7 order-2 md:order-1 aspect-video bg-zinc-900 overflow-hidden"
          >
            <img src={m1} alt="Umetnost" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div {...fadeInUp} className="md:col-span-5 order-1 md:order-2">
            <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold mb-6">/ 02 Vizija</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">Umetnost Detalja.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Za nas, zidovi nisu samo pregrade, već platno na kojem stvaramo atmosferu vašeg svakodnevnog života. 
              Spajamo decenijsko iskustvo sa najsavremenijim tehnikama dekoracije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="py-40 border-t border-white/5 flex flex-col items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => navigate("/")}
            className="relative group overflow-hidden border border-white/20 px-16 py-6 uppercase text-[10px] tracking-[0.4em] font-bold transition-all hover:border-white"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Nazad na početnu
            </span>
            <span className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>
        <p className="mt-12 text-zinc-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Smederevo, Srbija
        </p>
      </footer>

    </div>
  );
}

export default Onamafull;