/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
'use client'

import React from 'react'

function InputComponent({ property1, property2, className, vectorClassName, eyeClassName }) {
  return (
    <div
      className={`relative flex items-center overflow-hidden rounded-[12px] p-[20px] ${
        (property1 === 'password' && property2 === 'selected') ||
        (property1 === 'search' && property2 === 'default') ||
        (property1 === 'text' && property2 === 'selected')
          ? 'border-2 border-solid'
          : ''
      } ${
        (property1 === 'password' && property2 === 'selected') ||
        (property1 === 'search' && property2 === 'default') ||
        (property1 === 'text' && property2 === 'selected')
          ? 'border-gray-i'
          : ''
      } ${
        (property1 === 'password' && property2 === 'default') ||
        (property1 === 'search' && property2 === 'selected') ||
        (property1 === 'text' && property2 === 'default')
          ? 'w-[350px]'
          : 'w-[352px]'
      } ${['search', 'text'].includes(property1) ? 'gap-[10px]' : ''} ${
        property2 === 'selected' && ['password', 'text'].includes(property1) ? 'shadow-shadow' : ''
      } ${
        (property1 === 'password' && property2 === 'default') ||
        (property1 === 'search' && property2 === 'selected') ||
        (property1 === 'text' && property2 === 'default')
          ? 'h-[48px]'
          : 'h-[50px]'
      } ${property1 === 'password' ? 'justify-between' : ''} ${
        (property1 === 'password' && property2 === 'default') ||
        (property1 === 'search' && property2 === 'selected') ||
        (property1 === 'text' && property2 === 'default')
          ? 'bg-gray-ii'
          : 'bg-white'
      } ${className}`}
    >
      {property1 === 'text' && (
        <div
          className={`relative mt-[-7.50px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica] ${
            property2 === 'default' ? 'mb-[-5.50px]' : 'mb-[-3.50px]'
          }`}
        >
          Correo electrónico
        </div>
      )}

      {property1 === 'password' && (
        <>
          <div
            className={`relative mt-[-7.50px] w-fit text-center text-gray-iii ${
              property2 === 'default' ? 'font-text' : "[font-family:'Poppins',Helvetica]"
            } ${property2 === 'default' ? 'tracking-[var(--text-letter-spacing)]' : 'tracking-[0]'} ${
              property2 === 'default' ? 'text-[length:var(--text-font-size)]' : 'text-[14px]'
            } ${property2 === 'default' ? '[font-style:var(--text-font-style)]' : ''} ${
              property2 === 'default' ? 'font-[number:var(--text-font-weight)]' : 'font-normal'
            } ${property2 === 'default' ? 'mb-[-5.50px]' : 'mb-[-3.50px]'} ${
              property2 === 'default' ? 'leading-[var(--text-line-height)]' : 'leading-[normal]'
            } ${vectorClassName}`}
          >
            Contraseña
          </div>
          <img
            className={`relative mt-[-3.00px] h-[14px] w-[14px] ${
              property2 === 'default' ? 'mb-[-3.00px]' : 'mb-[-1.00px]'
            } ${eyeClassName}`}
            alt='Eye'
            src='https://c.animaapp.com/DB9yliXt/img/eye-1.svg'
          />
        </>
      )}

      {property1 === 'search' && (
        <>
          <img
            className={`relative ml-[-0.50px] mt-[-3.50px] h-[15px] w-[15px] ${
              property2 === 'selected' ? 'mb-[-3.50px]' : 'mb-[-1.50px]'
            } ${vectorClassName}`}
            alt='Vector'
            src='https://c.animaapp.com/DB9yliXt/img/vector-7.svg'
          />
          <p
            className={`relative mt-[-7.50px] w-fit text-center text-[14px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica] ${
              property2 === 'selected' ? 'mb-[-5.50px]' : 'mb-[-3.50px]'
            } ${eyeClassName}`}
          >
            Escribe un plato o un sabor
          </p>
        </>
      )}
    </div>
  )
}

export default InputComponent
