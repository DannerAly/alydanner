import { useEffect, useState } from "react";
import InfoCard from "../../components/InfoCard";
import Presentacion from "../../components/presentacion";
import Modelo3D from "../../components/Modelo3D";
import Button from "../../components/utils/Botton";

function SobreMi() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`pt-24 transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}>
      <main className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="h-[150px] md:h-[400px] md:w-[400px] w-full flex items-center justify-center">
          <Modelo3D url="/maximo.glb" width="400px" height="100%" />
        </div>
        <div className="z-10 w-full md:w-[400px] flex flex-col items-center ">
          <div className="mx-10 md:mx-0">
            <InfoCard>
              Hola, ¡Soy un <b>Desarrollador de aplicaciones</b> independiente con sede en <b>Bolivia</b>!
            </InfoCard>
          </div>
          <Presentacion />
        </div>
      </main>
      {/* Botón debajo de main */}
      <div className="flex justify-center mt-8">
        <Button to="/proyectos">Proyectos →</Button>
      </div>


      <br /><br /><br />
    </div>
  );
}

export default SobreMi;