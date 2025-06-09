import { useEffect, useRef, useState } from "react";
import InfoCard from "../../components/utils/InfoCard";
import Presentacion from "../../components/presentacion";
import Modelo3D from "../../components/Modelo3D";
import Button from "../../components/utils/Botton";
import LineadeTiempo from "../../components/LineadeTiempo";
import RotatingText from "../../components/Frase";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Softwares from "../../components/Softwares";

function SobreMi() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShow(true);
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
      <div className="flex justify-center gap-2 mt-8 ">
        <div ref={menuRef} className="relative">
          <Button to="#" onClick={() => setMenuOpen((v) => !v)}>Proyectos</Button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 -translate-x-1/2 mt-2 bg-cyan-50 rounded-xl shadow-lg py-2 z-50 min-w-[160px]"
              >
                <Link
                  to="/proyectos/web"
                  className="block px-4 py-2 hover:bg-cyan-400 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Desarrollo de Apps
                </Link>
                <Link
                  to="/proyectos/video"
                  className="block px-4 py-2 hover:bg-cyan-400 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Producción Audiovisual
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button to="/contactar">Contactar</Button>
      </div>

      <div className="flex flex-col items-center">
    
        {/*FRASE*/}
        <div className="flex flex-row gap-1 items-center mt-7 mb-2  mx-2 ">
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

  <hr className="my-5 border-t-2 md:m-10 border-zinc-700 md:border-zinc-700 w-4/5 mx-auto opacity-60" />

        {/* --------------------------------------------ESTE ES EL CONTENEDOR PRINCIPAL ------------------------------------------------------------ */}
        <div className="flex  flex-col items-center md:items-start md:flex-row md:w-[80%]  md- ">

          {/* BIOGRAFIA */}
          <div className="flex flex-col items-start w-[80%] text-1/4xl md:p-5 mx-9 rounded-2xl gap-1">
            <p className="text-cyan-50 text-xl font-bold underline mt-3 ">Biografía</p>
            <LineadeTiempo />
          </div>

        <hr className="block md:hidden my-9 border-t-2 border-zinc-700 w-4/5 mx-auto opacity-60" />
          {/* HOBBIES */}
          <div className="flex flex-col items-start text-1/4xl w-[80%] md:p-5 mx-9 rounded-2xl gap-1">
            <p className="text-cyan-50 text-xl font-bold underline">Yo ❤️</p>
            <motion.p
              className="text-cyan-50 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-[#12F2F2]">Fotografía</span>,
              Tocar la Guitarra, Jugar Basquetbol,
              <span className="text-[#12F2F2]"> Videografía</span> Machine Learning,
              <span className="text-[#12F2F2]"> Enseñar Matemáticas e Inteligencia Artificial</span>
            </motion.p>
          </div>

        <hr className="block md:hidden my-9 border-t-2 border-zinc-700 w-4/5 mx-auto opacity-60" />

          {/* HABILIDADES */}
          <div className="flex flex-col items-start text-1/4xl w-[80%] md:p-5 mx-9 rounded-2xl gap-1">
            <p className="text-cyan-50 text-xl font-bold underline mt-3 ">Habilidades</p>
            <Softwares />
          </div>

          <br /><br /><br /><br /><br />


        </div>
      </div>
    </div>
  );
}

export default SobreMi;