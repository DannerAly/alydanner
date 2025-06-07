import { useEffect, useState } from "react";
import InfoCard from "../../components/InfoCard";
import Presentacion from "../../components/presentacion";
import Modelo3D from "../../components/Modelo3D";
import Button from "../../components/utils/Botton";
import LineadeTiempo from "../../components/LineadeTiempo";
import RotatingText from "../../components/Frase";

function SobreMi() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`pt-10 transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
      <main className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="h-[150px] md:h-[400px] md:w-[400px] w-full flex items-center justify-center">
          <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        </div>
        <div className="z-10 w-full md:w-[400px] flex flex-col items-center ">
          <div className="mx-10 md:mx-0">
            <InfoCard>
              Hola, ¡Soy un <b>Desarrollador de aplicaciones</b> & <b>Productor audiovisual</b> independiente con sede en <b>Bolivia</b>!
            </InfoCard>
          </div>
          <Presentacion />
        </div>
      </main>
      {/* Botón debajo de main */}
      <div className="flex justify-center mt-8 ">
        <Button to="/proyectos">Proyectos →</Button>
      </div>

      <div className="flex flex-col items-center">
        <hr className="mt-8 border-t-2 border-[#12F2F2] w-4/5 mx-auto opacity-60" />

        {/*FRASE*/}
        <div className="flex flex-row gap-1 items-center mt-5 mb-2  mx-2 ">
          <h2 className="text-cyan-50 font-bold">Siempre haciendo</h2>
          <RotatingText className="font-black bg-cyan-50 text-zinc-800 px-2 py-1 rounded-lg"
            texts={['Cosas!', 'Videos!', 'Apps!', 'Things!']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-100 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <div className="flex  flex-col items-center md:items-start md:flex-row  gap-2 h-300">


          { /* BIOGRAFIA */}
          <div className="flex flex-col items-start text-1/4xl md:p-5 mx-9 rounded-2xl gap-1">
            <p className="text-cyan-50 text-xl font-bold underline ">Bio</p>
            <LineadeTiempo />
          </div>
        </div>
      </div>

    </div>
  );
}

export default SobreMi;