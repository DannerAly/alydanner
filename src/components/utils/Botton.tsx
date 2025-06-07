import React from "react";
import { Link } from "react-router-dom";

function Button({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <> 
        
            <Link
                to={to}
                className="bg-gray-200 text-zinc-800 text-xs md:text-base 
                rounded-xl py-2 px-4 shadow-lg inline-flex items-center justify-center 
                hover:bg-[#12F2F2]  hover:text-gray-200 font-bold transition-colors"
            >
                {children}
            </Link>
        
        </>

    );
}

export default Button;