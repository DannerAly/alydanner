import React from "react";
import { Link } from "react-router-dom";

function Button({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <>

            <Link
                to={to}
                className="bg-white border-2 border-cyan-400 text-zinc-800 text-xs md:text-base
    rounded-xl py-2 px-6 shadow-xl shadow-cyan-400/30 inline-flex items-center justify-center
    hover:bg-cyan-400 hover:text-white hover:shadow-cyan-400/60 font-bold transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
                {children}
            </Link>

        </>

    );
}

export default Button;