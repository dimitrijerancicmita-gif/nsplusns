import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-20 px-6 relative overflow-hidden border-t border-white/5">
      
      {/* Veliki "Ghost" Logo u pozadini za vau efekat */}
      <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase italic">
        NS+NS
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Kolona 1: Brend i Tradicija */}
          <div className="space-y-6">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">
              NS PLUS <span className="text-gray-600 font-light">NS</span>
            </h1>
            <p className="text-[11px] leading-relaxed max-w-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
              Moleraj / Fasade / Dekoracije <br />
              <span className="text-white/40">Smederevo</span>
            </p>
          </div>

          {/* Kolona 2: Brza Navigacija */}
          <div className="space-y-6">
            <h2 className="text-white text-xs font-bold uppercase tracking-[0.3em] opacity-50">Meni</h2>
            <ul className="space-y-4 text-[13px] uppercase tracking-widest font-bold">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                  Početna
                </a>
              </li>
              <li>
                <a href="#onama" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                  O nama
                </a>
              </li>
              <li>
                <a href="#galerija" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all duration-300"></span>
                  Projekti
                </a>
              </li>
            </ul>
          </div>

          {/* Kolona 3: Direktni Kontakt */}
          <div className="space-y-6">
            <h2 className="text-white text-xs font-bold uppercase tracking-[0.3em] opacity-50">Kontakt</h2>
            <div className="space-y-4 text-[13px] tracking-widest font-bold uppercase">
              <p className="block text-gray-500">Lokacija: <span className="text-white">Smederevo</span></p>
              <a href="tel:+381637776970" className="block text-white hover:italic transition-all">
                T: +381 63 777 6970
              </a>
              <a href="mailto:slobodanstojkovic72@gmail.com" className="block text-gray-500 hover:text-white transition-all lowercase italic tracking-normal font-medium">
                slobodanstojkovic72@gmail.com
              </a>
            </div>
          </div>

          {/* Kolona 4: Status */}
          <div className="space-y-6">
            <h2 className="text-white text-xs font-bold uppercase tracking-[0.3em] opacity-50">Dostupnost</h2>
            <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-widest font-medium">
              Radimo na teritoriji cele Srbije. Pozovite nas za više informacija.
            </p>
            <div className="pt-2">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/20 bg-green-500/5 rounded-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-green-500 font-black uppercase tracking-widest">Otvoreni za projekte</span>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-600">
            © {new Date().getFullYear()} NS PLUS NS - Sva prava zadržana.
          </p>
          
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;