import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Body from "./Body.jsx";
import Galerija from "./Galerija.jsx";
import Onama from "./Onama.jsx";
import Fullgalerija from "./Fullgalerija.jsx";
import Onamafull from "./Onamafull.jsx"; // <--- Importuj novu stranicu
import Navigacija from './Navigacija.jsx';
import Footer from "./Footer.jsx";

// ScrollToTop komponenta (uvek baca na vrh kad se promeni ruta)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

// ScrollToHash komponenta (za smooth scroll ka ID-u na istoj stranici)
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* POČETNA STRANICA */}
        <Route
          path="/"
          element={
            <>
              <ScrollToHash />
              <Navigacija />
              <Body />
              <Galerija />
              <Onama />
              <Footer />
            </>
          }
        />

        {/* STRANICA FULL GALERIJA */}
        <Route
          path="/fullgalerija"
          element={<Fullgalerija />}
        />
        
        {/* STRANICA O NAMA FULL */}
        <Route
          path="/Onamafull"
          element={<Onamafull />}
        />
      </Routes>
    </>
  );
}

export default App;