"use client";
import React from "react";
import ButtonLanding from "./landingButton";
import FadeIn from "@/helpers/animation/fadeIn";
import { useTranslations } from "next-intl";

function Card({
  text = "Nombre",
  text1 = "00",
  text2 = "Facturado anualmente o<br/>000€ mes a mes",
  line = "https://c.animaapp.com/3gXe0TqT/img/line-5.svg",
  check = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  img = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check1 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check2 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check3 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  hasTags = true,
  hasDiv = true,
  visible = true,
  hasTags1 = true,
  hasTags2 = true,
  text3 = "Plan básico por suscripción",
  text4 = "Con el Plan Entrada tendrás acceso al servicio de menú inteligente completo.",
  check4 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check5 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check6 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check7 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  check8 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
}) {
  const t = useTranslations("Index");
  return (
    <FadeIn>
      <div className="flex flex-col w-[540px] items-start gap-[40px] p-[40px] relative bg-gray-i rounded-[30px] overflow-hidden">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black-i text-[30px] tracking-[0] leading-[normal]">
          {text}
        </div>
        <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[100px] items-center gap-[5px] relative self-stretch w-full">
            <div className="relative w-fit mt-[-18.50px] mb-[-16.50px] [font-family:'Poppins',Helvetica] font-medium text-black-i text-[90px] tracking-[0] leading-[normal]">
              {text1}
            </div>
            <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-black-i text-[60px] tracking-[0] leading-[normal]">
              €
            </div>
            <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-gray-iii text-[30px] tracking-[0] leading-[normal]">
              &nbsp;&nbsp;{t("platePerMonth")}
            </div>
          </div>
          <p className="self-stretch font-normal text-gray-iii text-[28px] relative [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
            {text2}
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-[3px]"
          alt="Line"
          src={line}
        />
        <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black-i text-[40px] tracking-[0] leading-[normal]">
          {text3}
        </div>
        <p className="self-stretch font-normal text-gray-iii text-[28px] relative [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
          {text4}
        </p>
        <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Check"
              src={check}
            />
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("smartMenu")}
            </div>
          </div>
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img className="relative w-[20px] h-[20px]" alt="Check" src={img} />
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("threeMenu")}
            </div>
          </div>
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Check"
              src={check1}
            />
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("arVisualization")}
            </div>
          </div>
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Check"
              src={check2}
            />
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("aiAssistant")}
            </div>
          </div>
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Check"
              src={check3}
            />
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("dataAnalyst")}
            </div>
          </div>
          {hasTags && (
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Check"
                src={check4}
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                {t("interfaceCustomization")}
              </div>
            </div>
          )}

          {hasDiv && (
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Check"
                src={check5}
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                {t("advancedMetrics")}
              </div>
            </div>
          )}

          {visible && (
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Check"
                src={check6}
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                {t("inventoryManagement")}
              </div>
            </div>
          )}

          {hasTags1 && (
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Check"
                src={check7}
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                {t("orderTaking")}
              </div>
            </div>
          )}

          {hasTags2 && (
            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[20px] h-[20px]"
                alt="Check"
                src={check8}
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
                {t("paymentGateway")}
              </div>
            </div>
          )}
        </div>
        <ButtonLanding
          divClassName="!mt-[-6.00px] !text-[20px] !mb-[-4.00px] !font-medium"
          property1="active"
          propertyDefaultClassName="!self-stretch !h-[60px] !bg-green !w-full"
          text={t("selectButton")}
        />
        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-green text-[20px] text-center tracking-[0] leading-[normal] underline">
          {t("freeTrial")}
        </p>
      </div>
    </FadeIn>
  );
}

export default Card;
