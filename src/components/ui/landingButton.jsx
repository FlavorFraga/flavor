/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
"use client";

import React from "react";

function ButtonLanding({
  property1,
  propertyDefaultClassName,
  divClassName,
  text = "Text",
}) {
  return (
    <>
      {["active", "default", "secundario"].includes(property1) && (
        <div
          className={`flex items-center gap-[10px] p-[20px] overflow-hidden rounded-[12px] justify-center relative ${
            ["default", "secundario"].includes(property1)
              ? "border-2 border-solid"
              : ""
          } ${
            property1 === "default"
              ? "border-gray-i"
              : property1 === "secundario"
              ? "border-black"
              : ""
          } ${property1 === "active" ? "w-[350px]" : "w-[352px]"} ${
            property1 === "active" ? "shadow-shadow" : ""
          } ${property1 === "active" ? "h-[53px]" : "h-[55px]"} ${
            property1 === "default"
              ? "bg-gray-i"
              : property1 === "active"
              ? "bg-black"
              : ""
          } ${propertyDefaultClassName}`}
        >
          <div
            className={`[font-family:'Poppins',Helvetica] w-fit mt-[-6.50px] tracking-[0] text-[16px] relative font-normal text-center leading-[normal] ${
              property1 === "active"
                ? "text-gray-i"
                : property1 === "secundario"
                ? "text-black"
                : "text-gray-iii"
            } ${
              property1 === "active" ? "mb-[-4.50px]" : "mb-[-2.50px]"
            } ${divClassName}`}
          >
            {text}
          </div>
        </div>
      )}

      {["loading-II", "loading"].includes(property1) && (
        <img
          className={`w-[370px] left-0 top-0 h-[73px] absolute ${propertyDefaultClassName}`}
          alt="Property loading"
          src={
            property1 === "loading-II"
              ? "https://c.animaapp.com/3gXe0TqT/img/property-1-loading-ii.svg"
              : "https://c.animaapp.com/3gXe0TqT/img/property-1-loading.svg"
          }
        />
      )}
    </>
  );
}

export default ButtonLanding;
