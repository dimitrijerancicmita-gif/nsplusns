function Fullgalerija() {
  
    return(
        <>
            <h1 class="flex align-center justify-center my-7 text-taupe-700 "><b>GALERIJA RADOVA</b></h1>
            <div className="linijadva"></div>
            <div class="border-1 mx-3 pb-10 xl:pb-0 mb-6 rounded-3xl">
                <p class="flex align-center justify-center my-2 mt-5"><b>Moleraj</b></p>
                <p class="mx-5 mb-4">Galerija molerajskih slika pomaže da se vizualizuju boje i efekti pre stvarnog farbanja.</p>

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
        </>
    ) 
}

export default Fullgalerija;