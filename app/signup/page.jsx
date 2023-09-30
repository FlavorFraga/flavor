"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ButtonComponent = dynamic(() => import("@/components/ui/button"), {
  ssr: false,
});

const InputComponent = dynamic(() => import("@/components/ui/input"), {
  ssr: false,
});

const BackArrowIcon = dynamic(
  () => import("@/components/icons/backArrowIcon"),
  {
    ssr: false,
  }
);

function SignUp() {
  return (
    <div className="min-w-[320px] flex flex-col min-h-screen items-center justify-between p-[20px] relative bg-white">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <Link href="/login">
          <BackArrowIcon />
        </Link>

        <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Registrate
        </div>
        <div className="relative w-[40px] h-[40px]" />
      </div>
      <p className="relative self-stretch font-title-big font-[number:var(--title-big-font-weight)] text-transparent text-[length:var(--title-big-font-size)] tracking-[var(--title-big-letter-spacing)] leading-[var(--title-big-line-height)] [font-style:var(--title-big-font-style)]">
        <span className="text-[#010101] font-title-big [font-style:var(--title-big-font-style)] font-[number:var(--title-big-font-weight)] tracking-[var(--title-big-letter-spacing)] leading-[var(--title-big-line-height)] text-[length:var(--title-big-font-size)]">
          Crea la cuenta de{" "}
        </span>
        <span className="text-[#319f60] font-title-big [font-style:var(--title-big-font-style)] font-[number:var(--title-big-font-weight)] tracking-[var(--title-big-letter-spacing)] leading-[var(--title-big-line-height)] text-[length:var(--title-big-font-size)]">
          tus sabores
        </span>
      </p>
      <div className="flex flex-col items-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
        <InputComponent
          property1="text"
          className="h-[50px] mt-[-7.50px] ml-[-1.00px] mr-[-1.00px] bg-white border-2 border-solid border-gray-i shadow-shadow p-[20px] relative self-stretch w-full rounded-[12px] overflow-hidden flex-1 grow mb-[-3.50px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] tracking-[0] leading-[normal]"
          placeholder="Correo electrónico"
        />
        <InputComponent
          property1="password"
          className="h-[50px] mt-[-7.50px] ml-[-1.00px] mr-[-1.00px] bg-white border-2 border-solid border-gray-i shadow-shadow p-[20px] relative self-stretch w-full rounded-[12px] overflow-hidden flex-1 grow mb-[-3.50px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] tracking-[0] leading-[normal]"
          placeholder="Contraseña"
        />
        <InputComponent
          property1="password"
          className="h-[50px] mt-[-7.50px] ml-[-1.00px] mr-[-1.00px] bg-white border-2 border-solid border-gray-i shadow-shadow p-[20px] relative self-stretch w-full rounded-[12px] overflow-hidden flex-1 grow mb-[-3.50px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] tracking-[0] leading-[normal]"
          placeholder="Confirmar contraseña"
        />
        <div className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-green text-[16px] tracking-[0] leading-[normal]">
          Olvidaste la contraseña?
        </div>
      </div>
      <ButtonComponent
        property1="active"
        propertyDefaultClassName="!bg-green !w-full"
        text="Continuar"
      />
      <div className="flex flex-row justify-center items-center relative w-full">
        <p className="text-black relative [font-family:'Poppins-Regular',Helvetica] font-normal text-[16px] text-center tracking-[0] leading-[normal]">
          ¿Ya tienes una cuenta?
        </p>
        <Link href="/login">
          <p className="hover:underline ml-2 text-green relative [font-family:'Poppins-Regular',Helvetica] font-normal text-[16px] text-center tracking-[0] leading-[normal]">
            Iniciar sesión
          </p>
        </Link>
      </div>
      <p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-black-i text-[14px] text-center tracking-[0] leading-[normal]">
        Términos de uso y políticas de privacidad
      </p>
    </div>
  );
}

export default SignUp;
