import Particles from "../fondo/Particles";
import InfoCard from "../InfoCard";
import Presentacion from "../presentacion";
import Modelo3D from "../Modelo3D";

function SobreMi() {
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

      <main className="flex flex-col md:flex-row gap-8  items-center justify-center pt-24">
        <div className="h-[200px] md:h-[400px] md:w-[400px] w-full flex items-center justify-center">
          <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        </div>
        <div className="z-10 w-full md:w-[400px] flex flex-col items-center ">
          <div className="mx-10 md:mx-0" >
            <InfoCard text="Hola, ¡soy un desarrollador de aplicaciones independiente con sede en Bolivia!" />
          </div>
          <Presentacion />
        
        </div>
      </main>
    </>
  );
}

export default SobreMi;