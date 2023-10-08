"use client";
import React from "react";
import HeartIcon from "../icons/heartIcon";
import PropTypes from "prop-types";
import Link from "next/link";

function FoodCardNew({
  className,
  overlapGroupClassName,
  backgroundClassName,
  infoClassName,
  text = "Name",
  hasP = true,
  text1 = "44 Calorías",
  icon = "icon.svg",
  text2 = "18 min",
  text3 = "Price",
  img = "image.svg",
  photoClassName,
  photo = "photo.png",
}) {
  return (
    <div className={`w-[145px] h-[287px] rounded-[12px] ${className}`}>
      <div className={`relative h-[287px] ${overlapGroupClassName}`}>
        <div
          className={`absolute w-[160px] h-[215px] top-[72px] bg-white rounded-[12px] shadow-[0px_0px_20px_#aab1d04c] ${backgroundClassName}`}
        ></div>
        <div
          className={`flex flex-col w-[145px] items-start gap-[5px] pt-0 pb-[10px] px-[10px] absolute top-[155px] left-0 ${infoClassName}`}
        >
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
            {text}
          </div>
          {hasP && (
            <div className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-green text-[12px] tracking-[0] leading-[normal]">
              87% de tu gusto
            </div>
          )}

          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
              🔥
            </div>
            <div className="[font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[12px] relative w-fit mt-[-1.00px] tracking-[0] leading-[normal]">
              {text1}
            </div>
          </div>
          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
            <img
              className="relative w-[13px] h-[13px] ml-[1px] mr-1"
              alt="Icon"
              src={icon}
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-gray-iii text-[12px] tracking-[0] leading-[normal]">
              {text2}
            </div>
          </div>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
              <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] relative w-fit mt-[-1.00px] tracking-[0] leading-[normal]">
                {text3}
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[normal]">
                €
              </div>
            </div>
            <HeartIcon />
          </div>
        </div>
        <Link href="/vr/detail">
          <img
            className={`absolute w-[145px] h-[145px] top-0 left-[20px] object-cover ${photoClassName}`}
            alt="Photo"
            src={photo}
          />
        </Link>
      </div>
    </div>
  );
}

FoodCardNew.propTypes = {
  text: PropTypes.string,
  hasP: PropTypes.bool,
  text1: PropTypes.string,
  icon: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  img: PropTypes.string,
  photo: PropTypes.string,
};

export default FoodCardNew;
