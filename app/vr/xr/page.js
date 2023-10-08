"use client";

import React, { Suspense, useState } from "react";
import { XR, ARButton, Controllers } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const Food = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Food),
  { ssr: false }
);

const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <boxGeometry args={size} /> {/* Cambia BoxBufferGeometry a boxGeometry */}
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
}

// Resto del código sin cambios

function Button(props) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("blue");

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  return (
    <Suspense fallback={null}>
      <Food scale={0.023} position={[0, -3, 0]} rotation={[0, 0, 0]} />
      <Common color={"lightblue"} />
    </Suspense>
  );
}

function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
