import "./Componentes/Styles/App.css";
import Cartelera from "./pages/Cartelera";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Cartelera" element={<Cartelera />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
};
//<Route path="/NavBarHome" element={<NavBarHome />} />