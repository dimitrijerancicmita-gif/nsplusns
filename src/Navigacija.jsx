function Navigacija() {
  return (
    <>
      {/* Navbar */}
      <div className="p-2 bg-[#00000088] flex items-center justify-between shadow-md fixed w-full z-50">
        <img src="#" alt="logo" className="h-12 w-12 ml-2" />

        <div className="flex gap-3 mr-4">
          <a href="#" className=" border-r-1 pr-3 text-white hover:scale-105 transition transform duration-200">
            Početna
          </a>
          <a href="#onama" className=" border-r-1 pr-3 text-white hover:scale-105 transition transform duration-200">
            O nama
          </a>
          <a href="#galerija" className="text-white hover:scale-105 transition transform duration-200">
            Galerija 
          </a>
        </div>
      </div>

      {/* Hero sekcija */}
      <section className="relative  h-screen w-full overflow-hidden">
        {/* Video u pozadini */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay za tamnjenje i tekst */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profesionalni molersko-farbarski radovi
          </h2>
          <p className="text-white text-lg md:text-xl mb-6">
            Preciznost, kvalitet i dugotrajnost. Vaš prostor zaslužuje najbolje.
          </p>
          <button className="bg-[#373e48be] hover:bg-[#3d6b87] text-white px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105">
            Pozovite nas
          </button>
        </div>
      </section>
    </>
  )
}

export default Navigacija;