import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// Loader animado simple
const Loader = () => (
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0, left: 0, zIndex: 10,
    background: "transparent"
  }}>
    <svg className="animate-spin" width={48} height={48} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="4" opacity="0.25" />
      <path fill="#38bdf8" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" opacity="0.75" />
    </svg>
  </div>
);

interface Modelo3DProps {
  url: string;
  height?: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const [angle, setAngle] = useState(0);
  const [speed, setSpeed] = useState(0.3); // velocidad inicial rápida
  const finalSpeed = 0.01; // velocidad final lenta

  useFrame(() => {
    setAngle((prev) => prev + speed);

    // Disminuye la velocidad suavemente hasta llegar a la final
    setSpeed((prev) => {
      if (prev > finalSpeed) {
        const next = prev * 0.97; // Cambia 0.97 para ajustar la desaceleración
        return next < finalSpeed ? finalSpeed : next;
      }
      return prev;
    });
  });

  // Aplica la rotación al modelo
  scene.rotation.y = angle;

  return <primitive object={scene} />;
}

const Modelo3D: React.FC<Modelo3DProps> = ({ url, height = "320px" }) => (
  <div style={{ width: "100%", height, margin: "0 auto", position: "relative" }}>
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model url={url} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default Modelo3D;