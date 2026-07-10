"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleSphere(props: any) {
  const ref = useRef<any>(null);
  
  // Generate random points on a sphere
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < points.length; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.5 * Math.cbrt(Math.random());
      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#C084FC"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
