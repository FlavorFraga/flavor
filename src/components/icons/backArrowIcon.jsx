import React from "react";

function backArrowIcon({ className }) {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="36"
      viewBox="0 0 40 36"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20 11.414C18.0006 9.07937 14.6597 8.35787 12.1547 10.4957C9.64964 12.6335 9.29697 16.2078 11.2642 18.7362C12.8998 20.8383 17.8498 25.272 19.4721 26.707C19.6536 26.8675 19.7444 26.9478 19.8502 26.9794C19.9426 27.0069 20.0437 27.0069 20.1361 26.9794C20.2419 26.9478 20.3327 26.8675 20.5142 26.707C22.1365 25.272 27.0865 20.8383 28.7221 18.7362C30.6893 16.2078 30.3797 12.611 27.8316 10.4957C25.2835 8.38036 21.9994 9.07937 20 11.414Z"
        fillRule="evenodd"
        stroke="#999EA4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default backArrowIcon;
