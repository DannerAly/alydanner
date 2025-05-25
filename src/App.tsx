import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Particles from "./components/fondo/Particles";
import Navbar from "./components/Navbar";
import Contacto from "./components/vistas/Contacto";
import Proyectos from "./components/vistas/Proyectos";
import SobreMi from "./components/vistas/SobreMi";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#042F40",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>


      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
