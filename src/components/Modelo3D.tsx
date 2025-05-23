import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

interface Modelo3DProps {
  url: string;
  height?: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const Modelo3D: React.FC<Modelo3DProps> = ({ url, height }) => (
  <div style={{ width: "100%", height, margin: "0 auto" }}>
    <Canvas camera={{ position: [0, 0, 70], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Model url={url} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default Modelo3D;