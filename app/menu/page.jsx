"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const FoodCardComponent = dynamic(() => import("@/components/ui/foodCard"), {
  ssr: false,
});
const HeartIcon = dynamic(() => import("@/components/icons/heartIcon"), {
  ssr: false,
});

function MainMen() {
  return (
    <div className="relative flex flex-col items-center gap-[40px] bg-gray-i">
      <div className="relative flex w-full items-center justify-between self-stretch bg-[#ffffff03] px-[20px] pb-[20px] pt-[30px] backdrop-blur-[30px] backdrop-brightness-[100%]">
        <Link href="/">
          <img
            className="relative my-[-10.00px] h-[40px] w-[40px]"
            alt="Menu"
            src="https://c.animaapp.com/DB9yliXt/img/menu.svg"
          />
        </Link>
        <img
          className="relative my-[-10.00px] h-[40px] w-[130.32px]"
          alt="Logo"
          src="https://c.animaapp.com/DB9yliXt/img/logo@2x.png"
        />
        <HeartIcon className="!relative !my-[-7.78px] !h-[35.56px] !w-[40px]" />
      </div>
      <div className="relative flex w-full items-center gap-[10px] self-stretch px-[20px] py-0">
        <p className="relative mt-[-1.00px] flex-1 font-title-big text-[length:var(--title-big-font-size)] font-[number:var(--title-big-font-weight)] leading-[var(--title-big-line-height)] tracking-[var(--title-big-letter-spacing)] text-transparent [font-style:var(--title-big-font-style)]">
          <span className="font-title-big text-[length:var(--title-big-font-size)] font-[number:var(--title-big-font-weight)] leading-[var(--title-big-line-height)] tracking-[var(--title-big-letter-spacing)] text-[#010101] [font-style:var(--title-big-font-style)]">
            Disfruta de la{" "}
          </span>
          <span className="font-title-big text-[length:var(--title-big-font-size)] font-[number:var(--title-big-font-weight)] leading-[var(--title-big-line-height)] tracking-[var(--title-big-letter-spacing)] text-[#319f60] [font-style:var(--title-big-font-style)]">
            mejor experiencia{" "}
          </span>
          <span className="font-title-big text-[length:var(--title-big-font-size)] font-[number:var(--title-big-font-weight)] leading-[var(--title-big-line-height)] tracking-[var(--title-big-letter-spacing)] text-[#010101] [font-style:var(--title-big-font-style)]">
            culinaria.
          </span>
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center gap-[20px] self-stretch rounded-[30px_30px_0px_0px] bg-[#ffffff] p-[20px]">
        <div className="relative mt-[-1.00px] self-stretch text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins',Helvetica]">
          Categorías
        </div>
        <div className="relative flex w-full items-start gap-[20px] self-stretch overflow-x-scroll py-0 pl-0 pr-[20px]">
          <div className="relative inline-flex items-center gap-[5px] rounded-[12px] bg-green p-[10px]">
            <img
              className="relative h-[12px] w-[12px]"
              alt="Vector"
              src="https://c.animaapp.com/DB9yliXt/img/vector-4.svg"
            />
            <div className="relative mt-[-1.00px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-i [font-family:'Poppins',Helvetica]">
              Sorprendeme
            </div>
          </div>
          <div className="relative inline-flex items-center justify-center gap-[5px] rounded-[12px] bg-gray-i p-[10px]">
            <img
              className="relative h-[15px] w-[9px]"
              alt="Vector"
              src="https://c.animaapp.com/DB9yliXt/img/vector-3.svg"
            />
            <div className="relative mt-[-1.00px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              Bebidas
            </div>
          </div>
          <div className="relative inline-flex items-center justify-center gap-[5px] rounded-[12px] bg-gray-i p-[10px]">
            <img
              className="relative h-[12px] w-[12px]"
              alt="Vector"
              src="https://c.animaapp.com/DB9yliXt/img/vector-2.svg"
            />
            <div className="relative mt-[-1.00px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              Desayuno
            </div>
          </div>
          <div className="relative inline-flex items-center justify-center gap-[5px] rounded-[12px] bg-gray-i p-[10px]">
            <img
              className="relative h-[12px] w-[16px]"
              alt="Vector"
              src="https://c.animaapp.com/DB9yliXt/img/vector-1@2x.png"
            />
            <div className="relative mt-[-1.00px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              Almuerzo/Cena
            </div>
          </div>
          <div className="relative inline-flex items-center justify-center gap-[5px] rounded-[12px] bg-gray-i p-[10px]">
            <img
              className="relative h-[12px] w-[13.33px]"
              alt="Vector"
              src="https://c.animaapp.com/DB9yliXt/img/vector@2x.png"
            />
            <div className="relative mt-[-1.00px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              Postres
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-wrap items-start justify-between self-stretch">
          <FoodCardComponent
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            icon="https://c.animaapp.com/DB9yliXt/img/icon-8.svg"
            infoClassName="!left-[10px] !top-[190px]"
            overlapGroupClassName="!h-[302px] !left-[-10px] !w-[185px] !top-[-15px]"
            photoClassName="!h-[76px] ![object-fit:unset] !left-[13px] !w-[160px] !mt-2"
            text="Pizza Cuatro Est..."
            text1="91% de tu gusto"
            text2="1816 Calorías"
            text3="20 min"
            text4="14.00"
          />
          <FoodCardComponent
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            icon="https://c.animaapp.com/DB9yliXt/img/icon-8.svg"
            infoClassName="!left-[10px] !top-[190px]"
            overlapGroupClassName="!h-[302px] !left-[-10px] !w-[185px] !top-[-15px]"
            photoClassName="!h-[76px] ![object-fit:unset] !left-[13px] !w-[160px] !mt-2"
            text="Risotto"
            text1="87% de tu gusto"
            text2="307 Calorías"
            text3="26 min"
            text4="22.00"
          />
          <FoodCardComponent
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            icon="https://c.animaapp.com/DB9yliXt/img/icon-8.svg"
            infoClassName="!left-[10px] !top-[190px]"
            overlapGroupClassName="!h-[302px] !left-[-10px] !w-[185px] !top-[-15px]"
            photoClassName="!h-[76px] ![object-fit:unset] !left-[13px] !w-[160px] !mt-2"
            text="Tosta Mediterra..."
            text1="72% de tu gusto"
            text2="96 Calorías"
            text3="13 min"
            text4="26.00"
          />
          <FoodCardComponent
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            icon="https://c.animaapp.com/DB9yliXt/img/icon-8.svg"
            infoClassName="!left-[10px] !top-[190px]"
            overlapGroupClassName="!h-[302px] !left-[-10px] !w-[185px] !top-[-15px]"
            photoClassName="!h-[76px] ![object-fit:unset] !left-[13px] !w-[160px] !mt-2"
            text="Tarta Red Velvet"
            text1="65% de tu gusto"
            text2="293 Calorías"
            text3="4 min"
            text4="8.00"
          />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
