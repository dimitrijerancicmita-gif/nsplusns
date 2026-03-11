import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Fullgalerija() {
    return (
        <div className="bg-black min-h-screen text-white font-['Inter'] selection:bg-white selection:text-black">
            
            {/* --- FIXNI NAV --- */}
            <nav className="fixed top-0 w-full z-[100] px-4 py-4">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-3">
                    <div className="flex items-center gap-3">
                        <img src="src/assets/logo.png" alt="logo" className="h-8 w-auto brightness-200" />
                        <span className="font-['Archivo'] font-black text-white text-lg tracking-tighter uppercase italic hidden sm:block">
                            NS PLUS <span className="text-gray-500 not-italic font-light">NS</span>
                        </span>
                    </div>
                    
                    <Link 
                        to="/" 
                        className="text-[10px] font-black text-black bg-white px-6 py-2 uppercase tracking-tighter hover:bg-gray-300 transition-all"
                    >
                        Vrati se na početnu
                    </Link>
                </div>
            </nav>

            {/* --- GLAVNI SADRŽAJ --- */}
            <div className="pt-32 pb-20 px-6 max-w-[1600px] mx-auto">
                
                {/* Naslov Stranice */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-20 border-l-8 border-white pl-6"
                >
                    <h1 className="font-['Archivo'] text-5xl md:text-8xl font-[900] tracking-tighter uppercase leading-none">
                        Galerija <br /> <span className="text-gray-600 italic font-light">radova</span>
                    </h1>
                </motion.div>

                {/* --- SEKCIJA 01: MOLERAJ --- */}
                <section id="moleraj" className="mb-32">
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="font-['Archivo'] text-3xl md:text-5xl font-[900] uppercase tracking-tighter text-white">
                            01. Moleraj
                        </h2>
                        <div className="h-[2px] flex-grow bg-white/10"></div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "src/assets/molerajslika.jpeg",
                            "src/assets/slika1.jpeg",
                            "src/assets/treca.jpeg",
                            "src/assets/moleraj2.jpeg",
                            "src/assets/moleraj4.jpeg",
                            "src/assets/moleraj5.jpeg",
                            "src/assets/moleraj3.jpeg",
                            "src/assets/moleraj6.jpeg"
                        ].map((src, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative aspect-[4/5] overflow-hidden bg-gray-900 border border-white/5"
                            >
                                <img
                                    src={src}
                                    alt="Rad moleraj"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 cursor-pointer"
                                />
                                {/* Overlay sa tekstom na hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest border border-white px-4 py-2 bg-black/20 backdrop-blur-sm">
                                        Pregledaj
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- SEKCIJA 02: FASADE --- */}
                <section id="fasade" className="mb-32">
                    <div className="flex items-center gap-6 mb-10">
                        <h2 className="font-['Archivo'] text-3xl md:text-5xl font-[900] uppercase tracking-tighter text-white">
                            02. Fasade
                        </h2>
                        <div className="h-[2px] flex-grow bg-white/10"></div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "src/assets/molerajslika.jpeg", 
                            "src/assets/slika1.jpeg",
                            "src/assets/treca.jpeg",
                            "src/assets/moleraj2.jpeg",
                            "src/assets/moleraj4.jpeg",
                            "src/assets/moleraj5.jpeg",
                            "src/assets/moleraj3.jpeg",
                            "src/assets/moleraj6.jpeg"
                        ].map((src, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative aspect-square overflow-hidden bg-gray-900 border border-white/5"
                            >
                                <img
                                    src={src}
                                    alt="Rad fasada"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest border border-white px-4 py-2 bg-black/20 backdrop-blur-sm">
                                        Pregledaj
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-white/5 bg-[#050505] text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-700">
                    © NS PLUS NS — Smederevo 
                </p>
            </footer>
        </div>
    );
}

export default Fullgalerija;