/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const BackArrowIcon = dynamic(
  () => import("@/components/icons/backArrowIcon"),
  {
    ssr: false,
  }
);

function NavComponent({ property1, className }) {
  return (
    <div
      className={`!w-full flex items-center pt-[30px] pb-[20px] px-[20px] h-[70px] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] justify-between bg-[#ffffff03] backdrop-blur-[30px] backdrop-brightness-[100%] relative ${className}`}
    >
      <Link href="/menu">
        <BackArrowIcon />
      </Link>

      <img
        className="w-[130.32px] mt-[-10.00px] h-[40px] mb-[-10.00px] relative"
        alt="Logo"
        src="https://c.animaapp.com/CXquSxO8/img/logo-2@2x.png"
      />
      {property1 === "menu" && (
        <BackArrowIcon className="!relative !w-[40px] !h-[35.56px] !mt-[-7.78px] !mb-[-7.78px]" />
      )}

      {property1 === "dish" && (
        <div className="relative w-[40px] h-[40px] mt-[-10.00px] mb-[-10.00px]" />
      )}
    </div>
  );
}

export default NavComponent;
