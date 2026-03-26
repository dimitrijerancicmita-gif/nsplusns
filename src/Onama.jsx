import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Onama() {
  const navigate = useNavigate();

  return (
    <section id="onama" className="w-full bg-[#111111] py-24 md:py-40 px-6 relative overflow-hidden font-['Inter']">
      
      {/* Suptilna tekstura betona u pozadini */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall.png')` }}></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEVA STRANA - TRADICIJA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l border-white/10 pl-8 md:pl-12 flex flex-col items-start"
          >
            <h3 className="text-gray-500 uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">
              Nasleđe & Iskustvo
            </h3>

            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-10 uppercase font-['Archivo']">
              NS PLUS <br /> <span className="text-gray-600">NS</span>
            </h2>

            <div className="flex items-center gap-6 mb-10">
                <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter">50+</span>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                  pet decenija prenošenja znanja sa kolena na koleno. Od prvih građevinskih firmi u Smederevu.
                </p>
            </div>

            <p className="text-gray-500 leading-relaxed font-light italic mb-12 max-w-md">
              Znanje, posvećenost i profesionalizam prenosili su se sa generacije na generaciju, negujući vrednosti kvaliteta i pouzdanosti.
            </p>

            {/* NOVO DUGME ZA NOVU STRANICU */}
            <button
              onClick={() => navigate("/Onamafull")}
              className="group relative overflow-hidden border border-white px-10 py-4 mt-[-20px] transition-all duration-300 hover:bg-white"
            >
              <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-black transition-colors duration-300 ">
                Naša priča
              </span>
            </button>
          </motion.div>

          {/* DESNA STRANA - VIZIJA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/5 p-10 md:p-16 rounded-sm relative"
          >
            <h3 className="text-gray-500 uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">
              Naša Vizija
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-8 uppercase font-['Archivo']">
              Zašto <span className="text-gray-400">mi?</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
              Pored klasičnih molersko-fasaderskih radova, specijalizovani smo za 
              širok spektar dekorativnih tehnika koje vašem prostoru daju 
              unikatan karakter. Naš cilj nije samo farbanje, već stvaranje 
              atmosfere u kojoj uživate.
            </p>

            <a
              href="#galerija"
              className="group inline-block relative overflow-hidden border border-white/20 px-10 py-4 transition-all duration-500 hover:border-white"
            >
              <span className="relative z-10 text-white font-bold uppercase tracking-[0.2em] text-xs group-hover:text-black transition-colors duration-500">
                Pogledaj radove
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>

            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Onama;