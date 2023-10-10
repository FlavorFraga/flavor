"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { Line, useCursor, MeshDistortMaterial } from "@react-three/drei";
import { useRouter } from "next/navigation";

export const Blob = ({ route = "/", ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        roughness={0}
        color={hovered ? "hotpink" : "#1fb2f5"}
      />
    </mesh>
  );
};

export const Logo = ({ route = "/blob", ...props }) => {
  const mesh = useRef(null);
  const router = useRouter();

  const [hovered, hover] = useState(false);
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  useCursor(hovered);
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8);
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8);
    mesh.current.rotation.z -= delta / 4;
  });

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="#1fb2f5"
        lineWidth={0.15}
        rotation={[0, 0, 1]}
      />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="#1fb2f5"
        lineWidth={0.15}
        rotation={[0, 0, -1]}
      />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0}
          color={hovered ? "hotpink" : "#1fb2f5"}
        />
      </mesh>
    </group>
  );
};

export function Duck(props) {
  const { scene } = useGLTF("/duck.glb");

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}
export function Dog(props) {
  const { scene } = useGLTF("/dog.glb");

  return <primitive object={scene} {...props} />;
}

export function Food(props) {
  const { camera } = useThree();
  const [selected, setSelected] = useState(false);

  const { scene } = useGLTF("/output.glb");

  // Establecer la rotación deseada para la cámara
  const cameraRotation = {
    _order: "XYZ",
    _x: -1.1548961942960847,
    _y: 0.2266207290535417,
    _z: 0.4706039769981553,
  };

  const cameraPosition = {
    _order: "XYZ",
    _x: 2.202350591000231,
    _y: 8.73706562218947,
    _z: 1.8588474716968744,
  };

  camera.position.set(cameraPosition._x, cameraPosition._y, cameraPosition._z);
  // Actualizar la rotación de la cámara
  camera.rotation.set(cameraRotation._x, cameraRotation._y, cameraRotation._z);
  /* 
  const handleInteraction = () => {
    if (selected) {
      // Imprime la posición y rotación del objeto cuando está seleccionado
      console.log("Posición:", scene.position);
      console.log("Rotación:", scene.rotation);

      // También puedes acceder a la posición y rotación de la cámara
      console.log("Posición de la cámara:", camera.position);
      console.log("Rotación de la cámara:", camera.rotation);

      // Realiza cualquier otra lógica de interacción que desees
    }
  };
  useFrame(() => {
    handleInteraction();
  }); */

  return (
    <primitive
      object={scene}
      {...props}
      /*   onClick={(event) => {
        setSelected(!selected);
      }} */
    />
  );
}

export function Beans(props) {
  const { camera } = useThree();
  const [selected, setSelected] = useState(false);

  const { scene } = useGLTF("/beans.glb");

  // Establecer la rotación deseada para la cámara
  const cameraRotation = {
    _order: "XYZ",
    _x: -1.1548961942960847,
    _y: 0.2266207290535417,
    _z: 0.4706039769981553,
  };

  const cameraPosition = {
    _order: "XYZ",
    _x: 2.202350591000231,
    _y: 8.73706562218947,
    _z: 1.8588474716968744,
  };

  camera.position.set(cameraPosition._x, cameraPosition._y, cameraPosition._z);
  // Actualizar la rotación de la cámara
  camera.rotation.set(cameraRotation._x, cameraRotation._y, cameraRotation._z);
  /* 
  const handleInteraction = () => {
    if (selected) {
      // Imprime la posición y rotación del objeto cuando está seleccionado
      console.log("Posición:", scene.position);
      console.log("Rotación:", scene.rotation);

      // También puedes acceder a la posición y rotación de la cámara
      console.log("Posición de la cámara:", camera.position);
      console.log("Rotación de la cámara:", camera.rotation);

      // Realiza cualquier otra lógica de interacción que desees
    }
  };
  useFrame(() => {
    handleInteraction();
  }); */

  return (
    <primitive
      object={scene}
      {...props}
      /*   onClick={(event) => {
        setSelected(!selected);
      }} */
    />
  );
}
