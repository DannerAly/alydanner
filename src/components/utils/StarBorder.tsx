import React from "react";

const AnimatedBorderBox = ({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) => (
  <div
    className={`
      relative rounded-2xl p-[2px] overflow-hidden
      ${className}
    `}
    style={{
      background: "linear-gradient(270deg, #12f2f2, #0ea5e9, #12f2f2, #0ea5e9)",
      backgroundSize: "400% 400%",
      animation: "borderMove 3s linear infinite",
    }}
  >
    <style>
      {`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}
    </style>
    <div className="relative rounded-2xl bg-gradient-to-b from-black to-zinc-900 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

export default AnimatedBorderBox;