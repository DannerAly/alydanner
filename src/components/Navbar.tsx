import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#042F40] text-white shadow-md fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl"> <b>Aly</b> Danner</div>
        <div className="hidden md:flex space-x-8">
          <a href="#presentacion" className="hover:text-cyan-400 transition">Presentación</a>
          <a href="#proyectos" className="hover:text-cyan-400 transition">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Menú móvil */}
      <div
        className={`
          md:hidden  px-4 pb-4 flex flex-col gap-3 pt-5 space-y-2
          bg-zinc-700
          rounded-r-3xl
          transition-all duration-300
          absolute w-3/6 left-0 top-16 z-20
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        
          <Link to="/" className="hober:text-cyan-400 transition" onClick={()=> setOpen(!open)}>Sobre Aly</Link>
          <Link to="/proyectos" className="hover:text-cyan-400 transition" onClick={()=> setOpen(!open)}>Proyectos</Link>
          <Link to="/contacto" className="hover:text-cyan-400 transition" onClick={()=> setOpen(!open)}>Contacto</Link>

         </div>
    </nav>
  );
};

export default Navbar;