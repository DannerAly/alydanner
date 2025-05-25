import React from "react";

interface InfoCardProps {
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text }) => (
  <div className="bg-zinc-700 text-gray-200 rounded-xl px-8 py-4 shadow-lg ">
    {text}
  </div>
);

export default InfoCard;