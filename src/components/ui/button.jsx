'use client'

import React from 'react'
import { Button } from '@nextui-org/button'

function ButtonComponent({
  property1,
  propertyDefaultClassName,
  text = 'Text',
  divClassName,
  onClick, // Agregar un manejador de clic como prop
}) {
  // Si se proporciona un manejador de clic, se ejecutará cuando se haga clic en el botón
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Button
      className={`relative flex items-center justify-center gap-[10px] overflow-hidden rounded-[12px] bg-white p-[20px] ${
        ['default', 'secundario'].includes(property1) ? 'border-2 border-solid' : ''
      } ${property1 === 'default' ? 'border-gray-i' : property1 === 'secundario' ? 'border-black' : ''} ${
        property1 === 'active' ? 'w-[350px]' : 'w-[352px]'
      } ${property1 === 'active' ? 'shadow-shadow' : ''} ${property1 === 'active' ? 'h-[53px]' : 'h-[55px]'} ${
        property1 === 'default' ? 'bg-gray-i' : property1 === 'active' ? 'bg-black' : ''
      } ${propertyDefaultClassName}`}
      onClick={handleClick} // Asociar el manejador de clic al botón
    >
      <div
        className={`relative mt-[-6.50px] w-fit text-center text-[16px] font-normal leading-[normal] tracking-[0] [font-family:'Poppins',Helvetica] ${
          property1 === 'active' ? 'text-gray-i' : property1 === 'secundario' ? 'text-black' : 'text-gray-iii'
        } ${property1 === 'active' ? 'mb-[-4.50px]' : 'mb-[-2.50px]'} ${divClassName}`}
      >
        {text}
      </div>
    </Button>
  )
}

export default ButtonComponent
