"use client";

import React from "react";
import dynamic from "next/dynamic";

const ButtonComponent = dynamic(() => import("@/components/ui/button"), {
  ssr: false,
});
const Desktop = dynamic(() => import("@/components/responsive/desktop"), {
  ssr: false,
});

const Tablet = dynamic(() => import("@/components/responsive/tablet"), {
  ssr: false,
});

const Mobile = dynamic(() => import("@/components/responsive/mobile"), {
  ssr: false,
});

import { useRouter } from "next/navigation";

function WelcomeMobile() {
  const router = useRouter();

  return (
    <>
      <Mobile>
        <div className="relative flex flex-col items-start gap-[80px] bg-white p-[20px] h-[93vh]">
          <div className="relative w-full flex-1 grow self-stretch bg-white" />
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[20px] self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-[38px] font-bold leading-[46.9px] tracking-[0] text-transparent [font-family:'Poppins',Helvetica]">
              <span className="text-[#010101]">El menú inteligente que </span>
              <span className="text-[#319f60]">se adapta a ti</span>
            </p>
            <p className="relative self-stretch text-[14px] font-normal leading-[normal] tracking-[0] text-black-i [font-family:'Poppins',Helvetica]">
              Guarda los platos y sabores que más te gustan para futuros
              restaurantes.
            </p>
          </div>
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[20px] self-stretch">
            <ButtonComponent
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  console.log("Login");
                }, 400);
              }}
              property1="active"
              propertyDefaultClassName="!self-stretch !bg-green !w-full"
              text="Iniciar Sesión"
            />
            <ButtonComponent
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  router.push("/menu");
                }, 400);
              }}
              divClassName="!text-green"
              property1="secundario"
              propertyDefaultClassName="!border-green !self-stretch !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !w-full"
              text="Omitir"
            />
          </div>
        </div>
      </Mobile>
      <Tablet>
        <div className="relative flex min-h-screen flex-col items-start gap-[120px] bg-[#ffffff] p-[80px]">
          <div className="relative w-full flex-1 grow self-stretch bg-white" />
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[40px] self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-[60px] font-bold leading-[74.1px] tracking-[0] text-transparent [font-family:'Poppins',Helvetica]">
              <span className="text-[#010101]">El menú inteligente que </span>
              <span className="text-[#319f60]">se adapta a ti</span>
            </p>
            <p className="relative self-stretch text-[20px] font-normal leading-[normal] tracking-[0] text-black-i [font-family:'Poppins',Helvetica]">
              Guarda los platos y sabores que más te gustan para futuros
              restaurantes.
            </p>
          </div>
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[40px] self-stretch">
            <ButtonComponent
              divClassName="!mt-[-9.50px] !text-[20px] !mb-[-7.50px]"
              property1="active"
              propertyDefaultClassName="!self-stretch !bg-green !w-full"
              text="Iniciar Sesión"
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  console.log("Iniciar Sesión");
                }, 400);
              }}
            />
            <ButtonComponent
              divClassName="!mt-[-9.50px] !text-green !text-[20px] !mb-[-5.50px]"
              property1="secundario"
              propertyDefaultClassName="!border-green !self-stretch !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !w-full"
              text="Omitir"
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  console.log("Omitir");
                }, 400);
              }}
            />
          </div>
        </div>
      </Tablet>
      <Desktop>
        <div className="relative flex h-[1080px] flex-col items-center justify-center bg-[#ffffff]">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[40px] self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-center text-[60px] font-bold leading-[74.1px] tracking-[0] text-transparent [font-family:'Poppins',Helvetica]">
              <span className="text-[#319f60]">¡Ups!</span>
              <span className="text-[#010101]"> Aquí hay mucho espacio</span>
            </p>
            <p className="relative self-stretch text-center text-[20px] font-normal leading-[normal] tracking-[0] text-black-i [font-family:'Poppins',Helvetica]">
              Escanea el QR desde tu dispositivo móvil
            </p>
          </div>
        </div>
      </Desktop>
    </>
  );
}

export default WelcomeMobile;
