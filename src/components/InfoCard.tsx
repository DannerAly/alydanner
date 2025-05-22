import React from "react";

interface InfoCardProps {
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text }) => (
  <div style={{
    background: "rgba(35,35,40,0.7)",
    color: "#e5e7eb",
    borderRadius: "12px",
    padding: "1rem 2rem",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    maxWidth: "350px",
    margin: "0 auto"
  }}>
    {text}
  </div>
);

export default InfoCard;