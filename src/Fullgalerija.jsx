import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- ASSETS ---
import logo from './assets/logo.png';

// Moleraj
import m1 from './assets/moleraj-slike/molerajslika.jpeg';
import m2 from './assets/moleraj-slike/moleraj6.jpg';
import m4 from './assets/moleraj-slike/slika1.jpeg';
import m5 from './assets/moleraj-slike/moleraj7.jpg';
import m8 from './assets/moleraj-slike/moleraj5.jpeg';
import m9 from './assets/moleraj-slike/moleraj8.jpg';
import m7 from './assets/moleraj-slike/moleraj13.jpg';
import m10 from './assets/moleraj-slike/moleraj14.jpg';



//dekoracije
import d10 from './assets/moleraj-slike/moleraj9.jpg';
import d11 from './assets/moleraj-slike/moleraj10.jpg';
import d12 from './assets/moleraj-slike/moleraj11.jpg';
import d6 from './assets/moleraj-slike/moleraj12.jpg';
import d14 from './assets/dekoracije-slike/cetvrta.jpeg';
import d15 from './assets/dekoracije-slike/slika2.jpeg';
import d3 from './assets/moleraj-slike/moleraj3.jpg';
import d16 from './assets/dekoracije-slike/dekoracije1.jpg';





// Fasade
import f1 from './assets/fasade-slike/fasade1.jpg';
import f2 from './assets/fasade-slike/fasade2.jpg';
import f3 from './assets/fasade-slike/slika3.jpeg';
import f4 from './assets/fasade-slike/fasade5.jpg';
import f5 from './assets/fasade-slike/fasade6.jpg';
import f6 from './assets/fasade-slike/fasade7.jpg';
import f7 from './assets/fasade-slike/fasade8.jpg';
import f8a from './assets/fasade-slike/fasade9.jpg';
import f9a from './assets/fasade-slike/fasade10.jpg';
import f10a from './assets/fasade-slike/fasade13.jpg';
import f11a from './assets/fasade-slike/fasade11.jpg';
import f12a from './assets/fasade-slike/fasade12.jpg';


// Pre/Posle
import f8 from './assets/posle.jpeg';
import f9 from './assets/pre.jpeg';
import f10 from './assets/fasade-slike/fasade5PRE.jpg';
import f11 from './assets/fasade-slike/fasade6PRE.jpg';
import f12 from './assets/fasade-slike/fasade7PRE.jpg';

function Fullgalerija() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  const sliderRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [sliderPos, setSliderPos] = useState([50, 50, 50, 50]);

  const slidersData = [
    { pre: f9, pos: f8 },
    { pre: f10, pos: f4 },
    { pre: f11, pos: f5 },
    { pre: f12, pos: f6 },
  ];

  const handleMove = (e, index) => {
    const containerRef = sliderRefs[index];
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(pos, 100));
    setSliderPos(prev => prev.map((p, i) => (i === index ? pos : p)));
  };

  const molerajImages = [m1, m2, m4, m5, m7, m8, m9, m10 ];
  const fasadeImages = [f1, f3, f11a, f2, f4, f12a, f5, f10a, f6, f7, f8a, f9a];
  const dekoracijeImages = [d10, d11, d12, d6, d3, d14, d15, d16];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-['Inter'] selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* NAV */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-[1400px]">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="logo" 
              className="h-8 w-10 object-cover object-center invert opacity-90 rounded"
            />
            <span className="font-black italic text-sm tracking-tighter uppercase hidden sm:block">NS PLUS NS</span>
          </div>
          <Link to="/" className="text-[10px] font-bold border border-white px-5 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
            Početna
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="h-[110vh] flex items-center justify-center relative px-6">
        <div className="flex flex-col items-center">
          <motion.h1 style={{ y: y1 }} className="text-[18vw] md:text-[14rem] font-black tracking-tighter leading-none uppercase italic text-neutral-900">
            NS<span className="text-white">PLUS</span>
          </motion.h1>
          <motion.h1 style={{ y: y2 }} className="text-[18vw] md:text-[14rem] font-black tracking-tighter leading-none uppercase -mt-8 md:-mt-20">
            GALERIJA
          </motion.h1>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
            <p className="text-[9px] uppercase tracking-[1em] mb-4">Skrolujte ka dole</p>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </header>

      {/* BEFORE/AFTER SLIDERS */}
      <section className="px-6 max-w-[1600px] mx-auto mb-60">
        <div className="mb-20">
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.5em] mb-2">01 / Transformacije</p>
            <h2 className="text-4xl font-black uppercase italic">Pre i Posle</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {slidersData.map((s, i) => (
            <Slider 
              key={i}
              containerRef={sliderRefs[i]}
              sliderPos={sliderPos[i]}
              handleMove={(e) => handleMove(e, i)}
              preImg={s.pre}
              posImg={s.pos}
            />
          ))}
        </div>
      </section>

      {/* MOLERAJ GALLERY - FIXED GRID (2 mobile, 4 desktop) */}
      <section className="px-6 max-w-[1600px] mx-auto mb-60">
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
            <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.5em] mb-2">02 / Enterijer</p>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">Moleraj</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {molerajImages.map((img, i) => (
             <GalleryItem key={i} src={img} onClick={() => setSelectedImg(img)} />
           ))}
        </div>
      </section>

      {/* FASADE GALLERY - FIXED GRID (2 mobile, 4 desktop) */}
      <section className="px-6 max-w-[1600px] mx-auto mb-60">
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
            <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.5em] mb-2">03 / Eksterijer</p>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">Fasade</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {fasadeImages.map((img, i) => (
             <GalleryItem key={i} src={img} onClick={() => setSelectedImg(img)} />
           ))}
        </div>
      </section>

      {/* dekoracije GALLERY - FIXED GRID (2 mobile, 4 desktop) */}
      <section className="px-6 max-w-[1600px] mx-auto mb-60">
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
            <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.5em] mb-2">04 / Enterijer</p>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">Dekoracije</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {dekoracijeImages.map((img, i) => (
             <GalleryItem key={i} src={img} onClick={() => setSelectedImg(img)} />
           ))}
        </div>
      </section>



      {/* MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} className="max-h-[85vh] max-w-full object-contain shadow-2xl"
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
            />
            <p className="absolute bottom-10 text-[9px] uppercase tracking-[1em] text-white/30">Zatvori klikom</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- POMOĆNE KOMPONENTE ---

function Slider({ containerRef, sliderPos, handleMove, preImg, posImg }) {
  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-3xl cursor-ew-resize bg-neutral-900 group border border-white/5 shadow-2xl"
    >
      <img src={posImg} className="absolute inset-0 w-full h-full object-cover" alt="Posle" />
      <div
        className="absolute inset-0 overflow-hidden border-r-2 border-white/50 z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={preImg}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          style={{ width: containerRef.current?.offsetWidth || '100vw', maxWidth: 'none' }}
          alt="Pre"
        />
      </div>
      
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
           <span className="text-black text-xs font-bold">↔</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-30 flex gap-2">
        <span className="text-[9px] uppercase tracking-widest bg-black/60 px-3 py-1 backdrop-blur-md rounded-full">Pre</span>
        <span className="text-[9px] uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full">Posle</span>
      </div>
    </motion.div>
  );
}

function GalleryItem({ src, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="aspect-[3/4] overflow-hidden bg-neutral-900 rounded-xl cursor-pointer relative group"
    >
      <img 
        src={src} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
        alt="Rad" 
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
    </motion.div>
  );
}

export default Fullgalerija;