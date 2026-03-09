import { useState } from "react";
import { Link } from "react-router-dom"
import preSlika from "./assets/pre.jpeg";
import posleSlika from "./assets/posle.jpeg";
import slika1 from "./assets/slika1.jpeg";
import slika2 from "./assets/slika2.jpeg";
import slika3 from "./assets/slika3.jpeg";
import slika4 from "./assets/slika4.jpeg";

function Galerija() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <section id="galerija" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEVO - PRE POSLE */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">

          <div
            className={`flex h-full transition-transform duration-700 ${
              showSecond ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <img
              src={preSlika}
              alt="Pre radova"
              className="w-full h-full object-cover flex-shrink-0"
            />

            <img
              src={posleSlika}
              alt="Posle radova"
              className="w-full h-full object-cover flex-shrink-0"
            />
          </div>

          <button
            onClick={() => setShowSecond(!showSecond)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            {showSecond ? "Prikaži pre" : "Prikaži posle"}
          </button>
        </div>

        {/* DESNO - GALERIJA */}
        <div>

          <h2 className="text-4xl font-bold mb-4">
            Pogledajte naše radove
          </h2>

          <p className="text-gray-600 mb-8">
            Naši projekti govore sami za sebe. Pogledajte deo radova koje smo
            realizovali i uverite se u kvalitet, preciznost i posvećenost
            svakom detalju. Dugogodišnje iskustvo omogućava nam da svaki
            prostor pretvorimo u nešto posebno.
          </p>

          {/* GRID GALERIJA */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src={slika1}
              alt=""
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={slika2}
              alt=""
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={slika3}
              alt=""
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition cursor-pointer"
            />
            <img
              src={slika4}
              alt=""
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition cursor-pointer"
            />
          </div>

          <Link to="/fullgalerija">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Pogledaj celu galeriju
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Galerija;