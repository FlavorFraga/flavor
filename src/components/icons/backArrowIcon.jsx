import React from "react";

function backArrowIcon({ property1 }) {
  return (
    <img
      className="w-[40px] mt-[-10.00px] h-[40px] mb-[-10.00px] relative"
      alt="Back"
      src={
        property1 === "menu"
          ? "https://c.animaapp.com/CXquSxO8/img/menu.svg"
          : "https://c.animaapp.com/CXquSxO8/img/back-1.svg"
      }
    />
  );
}

export default backArrowIcon;
