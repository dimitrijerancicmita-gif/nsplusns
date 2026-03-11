import { Routes, Route, useLocation } from "react-router-dom"; // <--- dodaj useLocation
import { useEffect } from "react"; // <--- dodaj useEffect
import Body from "./Body.jsx";
import Galerija from "./Galerija.jsx";
import Onama from "./Onama.jsx";
import Fullgalerija from "./Fullgalerija.jsx";
import Navigacija from './Navigacija.jsx';
import Footer from "./Footer.jsx";

// ScrollToTop komponenta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

// ScrollToHash komponenta
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
  return(
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToHash />
              <Navigacija/>
              <Body />
              <Galerija />
              <Onama />
              <Footer/>
            </>
          }
        />

        <Route
          path="/fullgalerija"
          element={<Fullgalerija />}
        />
      </Routes>
    </>
  )
}

export default App;