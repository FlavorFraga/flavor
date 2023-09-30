"use client";

import PropTypes from "prop-types";
import React, { useState } from "react";

function InputComponent({ property1, property2, className, placeholder }) {
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor del input

  const handleChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input al escribir
  };

  return (
    <div
      className={`flex items-center p-[20px] overflow-hidden rounded-[12px] relative ${
        (property1 === "password" && property2 === "selected") ||
        (property1 === "search" && property2 === "default") ||
        (property1 === "text" && property2 === "selected")
          ? "border-2 border-solid"
          : ""
      } ${
        (property1 === "password" && property2 === "selected") ||
        (property1 === "search" && property2 === "default") ||
        (property1 === "text" && property2 === "selected")
          ? "border-gray-i"
          : ""
      } ${
        (property1 === "password" && property2 === "default") ||
        (property1 === "search" && property2 === "selected") ||
        (property1 === "text" && property2 === "default")
          ? "w-[350px]"
          : "w-[352px]"
      } ${["search", "text"].includes(property1) ? "gap-[10px]" : ""} ${
        property2 === "selected" && ["password", "text"].includes(property1)
          ? "shadow-shadow"
          : ""
      } ${
        (property1 === "password" && property2 === "default") ||
        (property1 === "search" && property2 === "selected") ||
        (property1 === "text" && property2 === "default")
          ? "h-[48px]"
          : "h-[50px]"
      } ${property1 === "password" ? "justify-between" : ""} ${
        (property1 === "password" && property2 === "default") ||
        (property1 === "search" && property2 === "selected") ||
        (property1 === "text" && property2 === "default")
          ? "bg-gray-ii"
          : "bg-white"
      } ${className}`}
    >
      {property1 === "password" && (
        <>
          <input
            type="password"
            value={inputValue}
            onChange={handleChange}
            className={`w-full py-[10px] px-3 border-none outline-none mt-[-7.50px] text-gray-iii relative ${
              property2 === "default"
                ? "font-text-mobile"
                : "[font-family:'Poppins-Regular',Helvetica]"
            } ${
              property2 === "default"
                ? "tracking-[var(--text-mobile-letter-spacing)]"
                : "tracking-[0]"
            } ${
              property2 === "default"
                ? "text-[length:var(--text-mobile-font-size)]"
                : "text-[14px]"
            } ${
              property2 === "default"
                ? "[font-style:var(--text-mobile-font-style)]"
                : ""
            } ${
              property2 === "default"
                ? "font-[number:var(--text-mobile-font-weight)]"
                : "font-normal"
            } ${
              property2 === "default"
                ? "leading-[var(--text-mobile-line-height)]"
                : "leading-[normal]"
            } ${property2 === "default" ? "mb-[-5.50px]" : "mb-[-3.50px]"}`}
            placeholder={placeholder}
          />
        </>
      )}

      {property1 === "search" && (
        <>
          <img
            className={`w-[15px] mt-[-3.50px] ml-[-0.50px] h-[15px] relative ${
              property2 === "selected" ? "mb-[-3.50px]" : "mb-[-1.50px]"
            }`}
            alt="Vector"
            src={property2 === "selected" ? "vector-2.svg" : "vector.svg"}
          />
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={`w-full py-[10px] px-3 border-none outline-none [font-family:'Poppins-Regular',Helvetica] mt-[-7.50px] tracking-[0] text-[14px] flex-1 text-gray-iii relative font-normal leading-[normal] ${
              ["search", "text"].includes(property1) &&
              (property1 === "search" || property2 === "default") &&
              (property1 === "text" || property2 === "selected") &&
              ["selected", "default"].includes(property2)
                ? "mb-[-5.50px]"
                : "mb-[-3.50px]"
            }`}
            placeholder={placeholder}
          />
        </>
      )}

      {property1 === "text" && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={`w-full py-[10px] px-3 border-none outline-none [font-family:'Poppins-Regular',Helvetica] mt-[-7.50px] tracking-[0] text-[14px] flex-1 text-gray-iii relative font-normal leading-[normal] ${
              property2 === "selected" ? "mb-[-5.50px]" : "mb-[-3.50px]"
            }`}
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
}

InputComponent.propTypes = {
  property1: PropTypes.oneOf(["search", "text", "password"]),
  property2: PropTypes.oneOf(["selected", "default"]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputComponent;
