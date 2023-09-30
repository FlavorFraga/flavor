import React from "react";

function LoadingComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center relative bg-[rgba(255,255,255,1.0)] [background:linear-gradient(180deg,rgb(45.9,153,90.52)_0%,rgb(61.2,204,120.7)_100%)] w-full min-w-[320px]">
      <img className="relative w-[50px] h-[50px]" alt="Logo" src="/Logo.svg" />
    </div>
  );
}

export default Loading;
