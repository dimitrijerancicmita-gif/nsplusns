import { Routes, Route } from "react-router-dom";
import Body from "./Body.jsx";
import Galerija from "./Galerija.jsx";
import Onama from "./Onama.jsx";
import Fullgalerija from "./Fullgalerija.jsx";
import Navigacija from './Navigacija.jsx'

function App() {
  return (
    <Routes>
      {/* Glavna stranica */}
      <Route
        path="/"
        element={
          <>
            <Navigacija/>
            <Body />
            <Galerija />
            <Onama />
          </>
        }
      />

      {/* Samo Fullgalerija, nova “stranica” */}
      <Route
        path="/fullgalerija"
        element={<Fullgalerija />}
      />
    </Routes>
  );
}

export default App;