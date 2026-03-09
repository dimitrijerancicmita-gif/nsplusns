import molerajSlika from "./assets/molerajslika.jpeg";
import drugaSlika from "./assets/druga.jpeg";
import trecaSlika from "./assets/treca.jpeg";
import cetvrtaSlika from "./assets/cetvrta.jpeg";
import { Link } from "react-router-dom";


function Body() {
  return (
    <div className="px-6 py-10 bg-gray-100  ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {/* KARTICA 1 */}
        <Link to="/fullgalerija#moleraj">
        <div
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm 
                        hover:shadow-xl transform hover:scale-105 
                        transition duration-300">

          <div className className="relative overflow-hidden">
            <img
              src={molerajSlika}
              alt="Moleraj"
                className="
                w-full h-64 object-cover
                transition duration-700
                grayscale-0
                brightness-100

                xl:grayscale
                xl:brightness-100
                xl:group-hover:scale-110
                xl:group-hover:grayscale-0
                xl:group-hover:brightness-125
                "
            />

            <div className="absolute inset-0 xl:bg-black/50 
                            group-hover:bg-black/0 
                            transition duration-500">
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Moleraj
            </h2>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Farbanje i osvežavanje prostora uz vrhunski kvalitet završne obrade.
            </p>
          </div>
        </div>
        </Link>

        {/* KARTICA 2 */}
        <div className="kartica" className="group bg-white rounded-3xl overflow-hidden shadow-sm 
                        hover:shadow-xl transform hover:scale-105 
                        transition duration-300">

          <div className="relative overflow-hidden">
            <img
              src={drugaSlika}
              alt="Fasade"
                className="
                w-full h-64 object-cover
                transition duration-700
                /* MOBILNI: totalno normalno */
                grayscale-0
                brightness-100

                xl:grayscale
                xl:brightness-100
                xl:group-hover:scale-110
                xl:group-hover:grayscale-0
                xl:group-hover:brightness-125
                "
            />

            <div className="absolute inset-0 xl:bg-black/50 
                            group-hover:bg-black/0 
                            transition duration-500">
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Fasade
            </h2>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Profesionalno farbanje spolja i završne fasaderske radove.
            </p>
          </div>
        </div>

        {/* KARTICA 3 */}
        <div className="kartica" className="group bg-white rounded-3xl overflow-hidden shadow-sm 
                        hover:shadow-xl transform hover:scale-105 
                        transition duration-300">

          <div className="relative overflow-hidden">
            <img
              src={trecaSlika}
              alt="Unutrašnji radovi"
                className="
                w-full h-64 object-cover
                transition duration-700
                /* MOBILNI: totalno normalno */
                grayscale-0
                brightness-100

                xl:grayscale
                xl:brightness-100
                xl:group-hover:scale-110
                xl:group-hover:grayscale-0
                xl:group-hover:brightness-125
                "
            />

            <div className="absolute inset-0 xl:bg-black/50 
                            group-hover:bg-black/0 
                            transition duration-500">
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Unutrašnji radovi
            </h2>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Gletovanje i priprema zidova za savršen završni sloj.
            </p>
          </div>
        </div>

        {/* KARTICA 4 */}
        <div className="kartica" className="group bg-white rounded-3xl overflow-hidden shadow-sm 
                        hover:shadow-xl transform hover:scale-105 
                        transition duration-300">

          <div className="relative overflow-hidden">
            <img
              src={cetvrtaSlika}
              alt="Dekorativni radovi"
                className="
                w-full h-64 object-cover
                transition duration-700
                /* MOBILNI: totalno normalno */
                grayscale-0
                brightness-100

                xl:grayscale
                xl:brightness-100
                xl:group-hover:scale-110
                xl:group-hover:grayscale-0
                xl:group-hover:brightness-125
                "
            />

            <div className="absolute inset-0 xl:bg-black/50 
                            group-hover:bg-black/0 
                            transition duration-500">
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-center mb-4 tracking-wide">
              Dekorativni radovi
            </h2>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Unikatne dekorativne tehnike i završni detalji po meri.
            </p>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Body;