function Footer() {
  return (
    <footer className="bg-[#1a1919] text-gray-300 py-15 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h1 className="text-xl font-semibold text-white mb-3">NS PLUS NS</h1>
          <p className="text-sm text-gray-400">
            Molersko-farbarski i dekorativni radovi sa više od 30 godina
            porodične tradicije i iskustva.
          </p>
        </div>

        <div>
          <h2 className="text-white font-medium mb-3">Navigacija</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Početna</a></li>
            <li><a href="#onama" className="hover:text-white transition">O nama</a></li>
            <li><a href="#usluge" className="hover:text-white transition">Usluge</a></li>
            <li><a href="#galerija" className="hover:text-white transition">Galerija Radova</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-medium mb-3">Kontakt</h2>
          <p className="text-sm text-gray-400">Smederevo, Srbija</p>
          <p className="text-sm text-gray-400">Telefon: +381 63 7776970</p>
          <p className="text-sm text-gray-400">Email: slobodanstojkovic72@gmail.com</p>
        </div>

      </div>

      <div className="border-t-1 border-gray-500 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NS PLUS NS
      </div>
    </footer>
  )
}

export default Footer