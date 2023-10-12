"use client";

import React from "react";
import FoodCardNew from "@/components/ui/foodCard";
import Link from "next/link";
import HeartIcon from "@/components/icons/heartIcon";
function MainMen() {
  return (
    <div className="min-w-[320px] h-fit pb-10 flex flex-col items-center gap-[40px] relative bg-gray-i">
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
      <div className="flex flex-col items-center gap-[20px] p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff] rounded-[30px_30px_0px_0px] overflow-hidden">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
          Categorías
        </div>
        <div className="flex items-start gap-[20px] pl-0 pr-[20px] py-0 relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
          <div className="inline-flex items-center gap-[5px] p-[10px] relative flex-[0_0_auto] bg-green rounded-[12px] overflow-hidden">
            <img
              className="relative w-[12px] h-[12px]"
              alt="Vector"
              src="/icons/star.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-i text-[14px] text-center tracking-[0] leading-[normal]">
              Sorprendeme
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[5px] p-[10px] relative flex-[0_0_auto] bg-gray-i rounded-[12px] overflow-hidden">
            <img
              className="relative w-[9px] h-[15px]"
              alt="Vector"
              src="/icons/drink.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] text-center tracking-[0] leading-[normal]">
              Bebidas
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[5px] p-[10px] relative flex-[0_0_auto] bg-gray-i rounded-[12px] overflow-hidden">
            <img
              className="relative w-[12px] h-[12px]"
              alt="Vector"
              src="/icons/breakfast.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] text-center tracking-[0] leading-[normal]">
              Desayuno
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[5px] p-[10px] relative flex-[0_0_auto] bg-gray-i rounded-[12px] overflow-hidden">
            <img
              className="relative w-[16px] h-[12px]"
              alt="Vector"
              src="/icons/breakfast.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] text-center tracking-[0] leading-[normal]">
              Comida Rápida
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[5px] p-[10px] relative flex-[0_0_auto] bg-gray-i rounded-[12px] overflow-hidden">
            <img
              className="relative w-[10px] h-[16px]"
              alt="Vector"
              src="/icons/breakfast.svg"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[14px] text-center tracking-[0] leading-[normal]">
              Almuerzo
            </div>
          </div>
        </div>
      </div>
      <div className="mr-3">
        <div className="grid grid-cols-2 gap-x-8">
          <FoodCardNew
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            hasP={false}
            icon="/icons/clock.svg"
            img="icon-3.svg"
            infoClassName="!left-[10px] !top-[193px]"
            overlapGroupClassName=" !left-[-10px] !top-[-15px]"
            photo="/img/image.png"
            photoClassName="!h-[185px] !top-[15px]"
            text="Pizza"
            text1="1816 Calorías"
            text2="20 min"
            text3="14.00"
          />
          <FoodCardNew
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            hasP={false}
            icon="/icons/clock.svg"
            img="icon-5.svg"
            infoClassName="!left-[10px] !top-[193px]"
            overlapGroupClassName=" !left-[-10px] !top-[-15px]"
            photo="/img/photo-2.png"
            photoClassName="!h-[190px] !top-[20px]"
            text="Risotto"
            text1="307 Calorías"
            text2="26 min"
            text3="22.00"
          />
          <FoodCardNew
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            hasP={false}
            icon="/icons/clock.svg"
            img="icon-7.svg"
            infoClassName="!left-[10px] !top-[193px]"
            overlapGroupClassName=" !left-[-10px] !top-[-15px]"
            photo="/img/photo-3.png"
            photoClassName="!h-[188px] !top-[25px]"
            text="Mediterránea"
            text1="96 Calorías"
            text2="13 min"
            text3="26.00"
          />
          <FoodCardNew
            backgroundClassName="!left-[10px] !top-[87px]"
            className="!relative"
            hasP={false}
            icon="/icons/clock.svg"
            img="icon-9.svg"
            infoClassName="!left-[10px] !top-[193px]"
            overlapGroupClassName=" !left-[-10px] !top-[-15px]"
            photo="/img/photo-4.png"
            photoClassName="!h-[186px] !top-[15px]"
            text="Tarta Red Velvet"
            text1="293 Calorías"
            text2="4 min"
            text3="8.00"
          />
        </div>
      </div>
    </div>
  );
}

export default MainMen;
