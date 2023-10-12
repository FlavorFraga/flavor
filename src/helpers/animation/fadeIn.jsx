"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";

function FadeIn({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.9s ease", // Cambia la duración y la función de temporización según tus preferencias
          transitionDelay: "0.5s", // Añade un retraso de 1 segundo antes de que comience la animación
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default FadeIn;
