import React, { Suspense, useState,} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

interface Modelo3DProps {
  url: string;
  height?: string;
  width?: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const [rotationSpeed, setRotationSpeed] = useState(0.3); // velocidad inicial rápida
  const targetSpeed = 0.01; // velocidad final constante
  const deceleration = 0.006; // qué tan rápido desacelera

  useFrame(() => {
    scene.rotation.y += rotationSpeed;
    if (rotationSpeed > targetSpeed) {
      setRotationSpeed((speed) => Math.max(speed - deceleration, targetSpeed));
    }
  });

  return <primitive object={scene} position={[0, -15, 0]} scale={[1.5,1.5,1.5]}/>;
}

const Modelo3D: React.FC<Modelo3DProps> = ({ url, height, width }) => (
  <div style={{ width, height, margin: "0 auto" }}>
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