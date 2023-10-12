import React from "react";
import { Providers } from "@/app/providers";
import "@/app/global.css";

export const metadata = {
  title: "iFlavi",
  description: "iFlavi Menu Web Mobile App.",
};

function RootLayout({ children }) {
  return (
    <html lang="es" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
