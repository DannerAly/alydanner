import { useState } from "react";

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
          md:hidden bg-[#042F40] px-4 pb-4 flex flex-col space-y-2
          transition-all duration-300
          absolute w-full left-0 top-16 z-20
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <a href="#presentacion" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Presentación</a>
        <a href="#proyectos" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#contacto" className="hover:text-cyan-400 transition" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;