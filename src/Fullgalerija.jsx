 import { Link } from 'react-router-dom'

function Fullgalerija() {
  
    return(
        <>
            <div className="p-2 bg-[#00000088] flex items-center justify-between shadow-md fixed w-full z-50 mt-[-100px]">
                <img src="src\assets\logo.png" alt="logo" className="h-12  w-12 ml-2" />
                             
                <div className="flex gap-3 mr-4 ">
                    <Link to="/#galerija" className="text-white hover:scale-105 transition transform duration-200">
                        Vrati se na pocetnu
                    </Link>
                </div>
            </div>

            <h1 class=" xl:justify-start xl:ml-6 flex md:align-center justify-center my-7 text-taupe-700 text-4xl mt-25"><b>GALERIJA RADOVA</b></h1>
            <div className="linijadva"></div>
            <div class="mx-3 pb-10 xl:pb-0 mb-6 rounded-3xl">
                <p id="#moleraj" class="flex align-center justify-center my-2 mt-5 text-taupe-700 text-5xl"><b>Moleraj</b></p>
                <p class="mx-5 mb-4 xl:flex justify-center align-center">Galerija molerajskih slika pomaže da se vizualizuju boje i efekti pre stvarnog farbanja.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">

                    <img
                        src="src/assets/molerajslika.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/slika1.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/treca.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj2.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj4.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj5.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src\assets\moleraj3.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj6.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                </div>

            <div class="mx-3 pb-10 xl:pb-0 mb-6 rounded-3xl mt-7">
                <div className="linijatri"></div>
                <p class="flex align-center justify-center my-2 mt-5 text-taupe-700 text-5xl"><b>Moleraj</b></p>
                <p class="mx-5 mb-4 xl:flex justify-center align-center">Galerija molerajskih slika pomaže da se vizualizuju boje i efekti pre stvarnog farbanja.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">

                    <img
                        src="src/assets/molerajslika.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/slika1.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/treca.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj2.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj4.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj5.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src\assets\moleraj3.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                    <img
                        src="src/assets/moleraj6.jpeg"
                        alt="moleraj"
                        className="animate-fadeIn"
                    />
                </div>

                
           
            </div>
           
            </div>
        </>
    ) 
}

export default Fullgalerija;