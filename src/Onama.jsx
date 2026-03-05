function Onama() {
  return (
    <section id="onama" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500 uppercase tracking-wider">
            O nama
          </h3>

          <h1 className="text-3xl font-bold mt-2 mb-4 text-gray-800">
            NS PLUS NS
          </h1>

          <p className="text-gray-600 leading-relaxed">
            NS PLUS NS je firma koja se bavi molersko-farbarskim i dekorativnim
            radovima, sa dugogodišnjim iskustvom i bogatom porodičnom
            tradicijom. Temelji našeg rada postavljeni su pre više od 30
            godina, kada je otac bio među prvim građevinskim firmama u
            Smederevu. Znanje, posvećenost i profesionalizam prenosili su se
            sa generacije na generaciju, a danas ponosno nastavljamo porodičnu
            tradiciju, negujući iste vrednosti kvaliteta i pouzdanosti.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-sm text-gray-500 uppercase tracking-wider">
            Naša vizija
          </h3>

          <h1 className="text-3xl font-bold mt-2 mb-4 text-gray-800">
            Zašto nas izabrati?
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            Nudimo vam kvalitetno izvođenje radova.
            NS PLUS NS, pored klasičnih molersko-fasadnih radova,
            izvodi i širok spektar dekorativnih tehnika koje vašem prostoru
            daju jedinstven izgled.
          </p>

          <a
            href="#galerija"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
          >
            Pogledaj više
          </a>
        </div>

      </div>
    </section>
  );
}

export default Onama;