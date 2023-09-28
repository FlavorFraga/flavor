"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const ref = useRef();

  return (
    <div ref={ref} className="relative w-full h-full touch-auto">
      {children}
      <Scene
        className="!fixed top-0 left-0 w-screen h-screen pointer-events-none"
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { Layout };
