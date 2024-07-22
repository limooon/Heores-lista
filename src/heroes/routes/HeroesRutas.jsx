import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import Marvel from "../pages/Marvel";
import DC from "../pages/DC";
import Serch from "../pages/Serch";
import Heroe from "../pages/Heroe";

const HeroesRutas = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Routes>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<DC />} />
          <Route path="/serch" element={<Serch />} />
          <Route path="/hero/:id" element={<Heroe />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRutas;
