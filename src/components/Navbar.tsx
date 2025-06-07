import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Max from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Cierra el submenú cuando se cierra el menú móvil
  useEffect(() => {
    if (!open) setSubMenuOpen(false);
  }, [open]);

  return (
    <nav className="w-full bg-[#042F40] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl flex flex-row items-center">
          <b>Aly</b> <p>Danner</p> <img src={Max} className="w-10" alt="" />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 relative">
          <Link to="/" className="hover:text-cyan-400 transition">Sobre Aly</Link>
          <div className="relative">
            <button
              className="hover:text-cyan-400  transition focus:outline-none flex items-center gap-1"
              onClick={() => setSubMenuOpen((v) => !v)}
            >
              Proyectos
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${subMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {subMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-2 bg-zinc- rounded-xl shadow-lg py-2 z-50 min-w-[160px]"
                >
                  <Link
                    to="/proyectos/web"
                    className="block px-4 py-2 hover:bg-cyan-400 hover:text-white transition"
                    onClick={() => setSubMenuOpen(false)}
                  >
                    Desarrollo
                  </Link>
                  <Link
                    to="/proyectos/video"
                    className="block px-4 py-2 hover:bg-cyan-400 hover:text-white transition"
                    onClick={() => setSubMenuOpen(false)}
                  >
                    Audiovisual
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/contacto" className="hover:text-cyan-400 transition">Contacto</Link>
        </div>
        {/* Mobile menu button */}
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
      {/* Mobile menu */}
      <div
        className={`
          md:hidden px-4 pb-4 flex flex-col gap-3 pt-5 space-y-2
          bg-zinc-700
          rounded-l-3xl
          transition-all duration-300
          absolute w-3/6 right-0 top-16 z-20
          transform
          ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
        `}
      >
        <Link to="/" className="hover:text-cyan-400 transition font-bold " onClick={() => setOpen(false)}>Sobre Aly</Link>
        <div className="relative">
          <button
            className="hover:text-cyan-400 transition font-bold w-full text-left focus:outline-none flex items-center gap-1"
            onClick={() => setSubMenuOpen((v) => !v)}
          >
            Proyectos
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${subMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {subMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="ml-4 mt-1 flex flex-col gap-1"
              >
                <Link
                  to="/proyectos/web"
                  className="block px-2 py-1  mt-3 rounded hover:bg-cyan-400 hover:text-white transition"
                  onClick={() => { setOpen(false); setSubMenuOpen(false); }}
                >
                  Desarrollo de Apps
                </Link>
                <Link
                  to="/proyectos/video"
                  className="block px-2 py-1 rounded hover:bg-cyan-400 hover:text-white transition"
                  onClick={() => { setOpen(false); setSubMenuOpen(false); }}
                >
                  Produccion Audiovisual
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link to="/contacto" className="hover:text-cyan-400 font-bold transition" onClick={() => setOpen(false)}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;