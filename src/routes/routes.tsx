import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import SobreMi from "../pages/vistas/SobreMi";
import Contacto from "../pages/vistas/Contacto";
import ProyectosDev from "../pages/vistas/ProyectosDev";
import ProyectosAud from "../pages/vistas/ProyectosAud";


export default function AppRoutes() {


    return (
        <Routes>
            <Route element={<MainLayout />} >

                <Route path="/" element={<SobreMi/>}></Route>
                <Route path="/sobreAly" element={<SobreMi />} />
                <Route path="/proyectos/web" element={<ProyectosDev />} />
                <Route path="/proyectos/video" element={<ProyectosAud />} />
                <Route path="/contacto" element={<Contacto />} />
                
            </Route>
        </Routes>
    )

}