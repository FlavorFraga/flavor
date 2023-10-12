/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import ButtonLanding from "./landingButton";
import Card from "./card";
import FadeIn from "@/helpers/animation/fadeIn";
import { useTranslations } from "next-intl";

function PriceCard({
  className,
  cardLine = "https://c.animaapp.com/3gXe0TqT/img/line-5.svg",
  cardCheck = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardImg = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck1 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck2 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck3 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardLine1 = "https://c.animaapp.com/3gXe0TqT/img/line-5.svg",
  cardCheck4 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck5 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck6 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck7 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck8 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck9 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck10 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck11 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck12 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  cardCheck13 = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
  vector = "https://c.animaapp.com/3gXe0TqT/img/line-5.svg",
  check = "https://c.animaapp.com/3gXe0TqT/img/check-41.svg",
}) {
  const t = useTranslations("Index");
  return (
    <div
      className={`inline-flex items-start justify-center gap-[50px] relative ${className}`}
    >
      <Card
        check={cardImg}
        check1={cardCheck}
        check2={cardCheck1}
        check3={cardCheck3}
        hasDiv={false}
        hasTags={false}
        hasTags1={false}
        hasTags2={false}
        img={cardCheck2}
        line={cardLine}
        text={t("appetizer")}
        text1="4"
        text2={
          <>
            {t("billingOption")}
            <br />
            6€ {t("periodicInterval")}
          </>
        }
        text3={t("basicSubscriptionPlanTitle")}
        text4={t("basicSubscriptionPlanDescription")}
        visible={false}
      />
      <Card
        check={cardCheck8}
        check1={cardCheck6}
        check2={cardCheck9}
        check3={cardCheck13}
        check4={cardCheck11}
        check5={cardCheck12}
        check6={cardCheck7}
        check7={cardCheck4}
        check8={cardCheck5}
        img={cardCheck10}
        line={cardLine1}
        text={t("mainCourse")}
        text1="8"
        text2={
          <>
            {t("billingOption")}
            <br />
            12€ {t("periodicInterval")}
          </>
        }
        text3={t("customSubscriptionPlanTitle")}
        text4={t("customSubscriptionPlanDescription")}
      />
      <FadeIn>
        <div className="flex flex-col w-[540px] items-start gap-[40px] p-[40px] relative bg-gray-i rounded-[30px] overflow-hidden">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black-i text-[30px] tracking-[0] leading-[44.6px]">
            {t("recommendation")}
          </div>
          <div className="flex flex-col h-[187px] items-start gap-[10px] relative self-stretch w-full">
            <div className="relative self-stretch h-[100px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black-i text-[71px] tracking-[0] leading-[normal]">
              {t("letsTalk")} →
            </div>
            <div className="flex-1 self-stretch font-normal text-gray-iii text-[28px] relative [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
              {t("annualBilling")}
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-[3px]"
            alt="Vector"
            src={vector}
          />
          <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black-i text-[40px] tracking-[0] leading-[normal]">
            {t("customOneSubscriptionPlanTitleOne")}
            <br />
            {t("customOneSubscriptionPlanTitleTwo")}
          </p>
          <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[28px] tracking-[0] leading-[normal]">
            {t("customOneSubscriptionPlanDescription")}
          </p>
          <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[20px] h-[20px]"
              alt="Check"
              src={check}
            />
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#000000] text-[28px] tracking-[0] leading-[normal]">
              {t("premiumAndCustom")}
            </p>
          </div>
          <ButtonLanding
            divClassName="!mt-[-6.00px] !text-[20px] !mb-[-4.00px] !font-medium"
            property1="active"
            propertyDefaultClassName="!self-stretch !h-[60px] !bg-green !w-full"
            text="Contactar con ventas"
          />
        </div>
      </FadeIn>
    </div>
  );
}

export default PriceCard;
