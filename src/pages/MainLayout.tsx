import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </>
  );
}