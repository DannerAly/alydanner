import React from "react";

interface InfoCardProps {
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ children }) => (
  <div className="relative flex flex-col items-center md:items-start">
    <div className="bg-zinc-700/80 text-gray-200 text-xs md:text-base rounded-xl px-8 py-4 shadow-lg">
      {children}
    </div>
    {/* Flecha abajo en mobile, en la esquina inferior izquierda en md+ */}
    <div
      className="
        w-0 h-0
        border-l-8 border-r-8 border-t-8
        border-l-transparent border-r-transparent border-t-zinc-700/80
        md:absolute md:left-20 md:bottom-0
        md:translate-y-full
      "
    ></div>
  </div>
);

export default InfoCard;