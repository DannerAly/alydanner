import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({ to, children, onClick }: { to: string, children: React.ReactNode, onClick?: () => void }) {
    return (
        <Link to={to} onClick={onClick}>
            <motion.span
                className="bg-gray-100 text-zinc-900 text-xs md:text-base
                rounded-xl py-2 px-6 shadow shadow-cyan-200/40 inline-flex items-center justify-center
                hover:bg-cyan-400 hover:text-white hover:shadow-cyan-300/60 font-bold transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 cursor-pointer"
                initial={{ boxShadow: "0 0 8px 0 rgba(34,211,238,0.4)" }}
                animate={{
                    boxShadow: [
                        "0 0 8px 0 rgba(34,211,238,0.4)",
                        "0 0 14px 2px rgba(34,211,238,0.85)",
                        "0 0 8px 0 rgba(34,211,238,0.4)"
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                tabIndex={0}
            >
                {children}
            </motion.span>
        </Link>
    );
}

export default Button;