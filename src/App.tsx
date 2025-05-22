import "./App.css";

import Particles from "./components/fondo/Particles";
import InfoCard from "./components/InfoCard";
import Navbar from "./components/Navbar";
import Presentacion from "./components/presentacion";
import Proyectos from "./components/proyectos";
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


      <Navbar />
      <main className="flex flex-col space-y-20 items-center justify-center pt-24">
        <InfoCard text="Hola, ¡soy un desarrollador de aplicaciones independiente con sede en Bolivia!" />
        <Presentacion />
        <Proyectos />
      </main>
    </>
  );
}

export default App;
