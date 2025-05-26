import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import SobreMi from "../pages/vistas/SobreMi";
import Proyectos from "../pages/vistas/Proyectos";
import Contacto from "../pages/vistas/Contacto";


export default function AppRoutes() {


    return (
        <Routes>
            <Route element={<MainLayout />} >

                <Route path="/" element={<SobreMi/>}></Route>
                <Route path="/sobreAly" element={<SobreMi />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/contacto" element={<Contacto />} />
            </Route>
        </Routes>
    )


}