//import { BrowserRouter as BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";

import Particles from "./components/fondo/Particles";
import AppRoutes from "./routes/routes";

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


      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </>
  );
}

export default App;
