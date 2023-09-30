"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@nextui-org/button";

const NavComponent = dynamic(() => import("@/components/ui/nav"), {
  ssr: false,
});
const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

const Food = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Food),
  { ssr: false }
);

function MoreInfoPizza() {
  const [seeMore, setSeeMore] = useState(false);
  const handleClick = () => {
    console.log("pressed");
  };

  const renderDescription = () => {
    if (seeMore) {
      return (
        <div className="min-w-[320px] flex flex-col items-start gap-[10px] px-[20px] py-0 relative">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Una explosión de sabores en cada bocado, con alcachofas tiernas,
              tomates jugosos, albahaca fragante, champiñones suculentos y jamón
              ahumado, todo sobre una masa crujiente con el sabor del queso
              derretido.{"  "}
            </span>
          </p>
          <br />

          <span className=" [font-family:'Poppins-Bold',Helvetica] font-bold">
            Ingredientes:
            <br />
          </span>
          <ul className="list-disc ml-[28px]">
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Alcachofas (100 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Tomates (80 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Albahaca fresca (5 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Champiñones (60 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Jamón (50 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Masa de pizza (150 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Salsa de tomate (30 g)
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Queso mozzarella (80 g)
            </li>
          </ul>
          <br />
          <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
            Información Nutricional (Porción):
            <br />
          </span>
          <ul className="list-disc ml-[28px]">
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              🔥 1816 Calorías
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Carbohidratos: 40 g
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Proteínas: 15 g
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Grasas: 15 g
            </li>
            <li className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#010101] text-[16px] tracking-[0]">
              Fibra: 4 g
            </li>
          </ul>

          <p
            onClick={() => {
              setSeeMore(false);
            }}
            className=" cursor-pointer mt-1 relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]"
          >
            <span className="text-[#010101]">&nbsp;</span>
            <span className="text-[#319f60] hover:underline">Ver menos</span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-start gap-[10px] px-[20px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            Una explosión de sabores en cada bocado, con alcachofas tiernas...
          </p>
          <p
            onClick={() => {
              setSeeMore(true);
            }}
            className=" cursor-pointer relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal]"
          >
            <span className="text-[#010101]">&nbsp;</span>
            <span className="text-[#319f60] hover:underline">Ver más</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-[30px] relative bg-white">
      <NavComponent
        className="![backdrop-filter:unset] ![-webkit-backdrop-filter:unset] !w-[unset]"
        property1="dish"
      />
      <View orbit className="relative w-[340px] h-[340px]">
        <Suspense fallback={null}>
          <Food scale={0.085} position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <Common color={"white"} />
        </Suspense>
      </View>
      {/*      <img
        className="relative w-[340px] h-[340px]"
        alt="Element model"
        src="https://c.animaapp.com/tayVNL83/img/3d-model@2x.png"
      /> */}
      <div className="flex items-center px-[20px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
          Pizza Cuatro Estaciones
        </div>
      </div>
      {renderDescription()}
      <div className="flex flex-col items-start gap-[10px] px-[20px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
            🔥
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[16px] tracking-[0] leading-[normal]">
            1816 Calorías
          </div>
        </div>
        <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[19px] h-[19px] ml-[-0.50px]"
            alt="Icon"
            src="https://c.animaapp.com/tayVNL83/img/icon-1.svg"
          />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[16px] tracking-[0] leading-[normal]">
            20 min
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[40px] px-[20px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
              14.00
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
              €
            </div>
          </div>
          <img
            className="relative w-[20px] h-[18px] mr-[-1.00px]"
            alt="Like"
            src="https://c.animaapp.com/tayVNL83/img/like.svg"
          />
        </div>
        <Button
          onClick={handleClick}
          className="flex mb-6 h-[50px] items-center justify-center gap-[10px] p-[20px] relative self-stretch w-full bg-green rounded-[12px] overflow-hidden shadow-shadow"
        >
          <img
            className="relative w-[13.46px] h-[15px] mt-[-2.50px] mb-[-2.50px]"
            alt="Icon"
            src="https://c.animaapp.com/tayVNL83/img/icon-2.svg"
          />
          <div className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-[16px] text-center tracking-[0] leading-[normal]">
            Ver sobre la mesa
          </div>
        </Button>
      </div>
    </div>
  );
}

export default MoreInfoPizza;
