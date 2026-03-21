import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import molerajSlika from "./assets/moleraj-slike/molerajslika.jpeg";
import drugaSlika from "./assets/posle.jpeg";
import trecaSlika from "./assets/moleraj-slike/moleraj7.jpg";
import cetvrtaSlika from "./assets/dekoracije-slike/cetvrta.jpeg";

const usluge = [
  { id: "moleraj", naslov: "Moleraj", opis: "Vrhunski kvalitet završne obrade i osvežavanje vašeg prostora.", img: molerajSlika },
  { id: "fasade", naslov: "Fasade", opis: "Dugotrajna zaštita i moderna estetika vašeg eksterijera.", img: drugaSlika },
  { id: "unutrasnji", naslov: "Gletovanje", opis: "Precizna priprema zidova do savršeno glatke površine.", img: trecaSlika },
  { id: "dekorativni", naslov: "Dekoracije", opis: "Unikatne tehnike koje daju karakter svakom zidu.", img: cetvrtaSlika },
];

function Body() {
  return (
    <section className="px-6 py-24 md:py-40 bg-[#111111] relative overflow-hidden">
      
      {/* Pozadinska tekstura koja se slaže sa Hero sekcijom */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall.png')` }}></div>

      {/* Kontejner proširen na 1800px za full-screen efekat */}
      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Naslovna Sekcija - Brutalistički stil */}
        <div className="mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-4">
              Naš Fokus
            </h4>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
              Usluge <span className="text-gray-600 italic font-light">&</span> Rešenja
            </h2>
            <div className="w-24 h-1 bg-white mt-8 opacity-20"></div>
          </motion.div>
        </div>

        {/* Grid sa masivnim karticama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {usluge.map((usluga, index) => (
            <motion.div
              key={usluga.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Link to={`/fullgalerija#${usluga.id}`} className="group block relative h-[500px] xl:h-[700px] w-full">
                
                {/* Kartica sa oštrim ivicama za industrial look */}
                <div className="relative h-full w-full overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-700 group-hover:border-white/20">
                  
                  {/* Slika - Default je blago desaturisana, na hover dobija punu boju */}
                  <img
                    src={usluga.img}
                    alt={usluga.naslov}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110"
                  />

                  {/* Dark Overlay - Agresivniji gradijent odozdo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Sadržaj Kartice */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 xl:p-12 z-10">
                    
                    <h3 className="text-3xl xl:text-4xl font-bold text-white mb-4 tracking-tighter uppercase">
                        {usluga.naslov}
                    </h3>
                    
                    {/* Opis - Vidljiv odmah na mobilnom, na desktopu izlazi na hover */}
                    <p className="text-gray-400 text-sm xl:text-base leading-relaxed mb-8 font-light
                                  opacity-100 max-h-40
                                  xl:opacity-0 xl:max-h-0 xl:group-hover:opacity-100 xl:group-hover:max-h-32 
                                  transition-all duration-700 ease-in-out">
                      {usluga.opis}
                    </p>

                    {/* Industrial indikator (Linija koja se širi) */}
                    <div className="flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                        <span className="h-[1px] w-8 bg-white transition-all duration-700 group-hover:w-20 group-hover:bg-gray-400" />
                        Detalji
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Body;