/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})

const Food = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Food), { ssr: false })

function FoodCardComponent({
  className,
  overlapGroupClassName,
  backgroundClassName,
  infoClassName,
  text = 'Name',
  text1 = '87% de tu gusto',
  text2 = '44 Calorías',
  text3 = '18 min',
  text4 = 'Price',
  icon = 'https://c.animaapp.com/DB9yliXt/img/icon-1.svg',
  photoClassName,
  photo = 'https://c.animaapp.com/DB9yliXt/img/photo-4@2x.png',
}) {
  return (
    <div className={`h-[287px] w-[165px] rounded-[12px] ${className}`}>
      <div className={`relative h-[287px] ${overlapGroupClassName}`}>
        <div
          className={`absolute left-0 top-[72px] h-[215px] w-[165px] rounded-[12px] bg-white shadow-[0px_0px_20px_#aab1d04c] ${backgroundClassName}`}
        />
        <div
          className={`absolute left-0 top-[155px] flex w-[165px] flex-col items-start gap-[5px] px-[10px] pb-[10px] pt-0 ${infoClassName}`}
        >
          <div className="relative mt-[-1.00px] w-fit text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins',Helvetica]">
            {text}
          </div>
          <div className="relative self-stretch text-[12px] font-normal leading-[normal] tracking-[0] text-green [font-family:'Poppins',Helvetica]">
            {text1}
          </div>
          <div className='relative inline-flex flex-[0_0_auto] items-center gap-[5px]'>
            <div className="relative w-fit whitespace-nowrap text-[12px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              🔥
            </div>
            <div className="relative mt-[-1.00px] w-fit text-[12px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              {text2}
            </div>
          </div>
          <div className='relative inline-flex flex-[0_0_auto] items-center gap-[5px]'>
            <img
              className='relative ml-[-0.50px] h-[13px] w-[13px]'
              alt='Icon'
              src='https://c.animaapp.com/DB9yliXt/img/icon-9.svg'
            />
            <div className="relative mt-[-1.00px] w-fit text-[12px] font-normal leading-[normal] tracking-[0] text-gray-iii [font-family:'Poppins',Helvetica]">
              {text3}
            </div>
          </div>
          <div className='relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch'>
            <div className='relative inline-flex flex-[0_0_auto] items-center gap-[2px]'>
              <div className="relative mt-[-1.00px] w-fit text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins',Helvetica]">
                {text4}
              </div>
              <div className="relative mt-[-1.00px] w-fit text-[16px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Poppins',Helvetica]">
                €
              </div>
            </div>
            <img className='relative mr-[-0.75px] h-[19.28px] w-[21.5px]' alt='Icon' src={icon} />
          </div>
        </div>
        <View orbit className={`absolute left-[10px] top-[87px] h-[145px] w-[122px] object-cover ${photoClassName}`}>
          <Suspense fallback={null}>
            <Food scale={0.1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
            <Common color={'white'} />
          </Suspense>
        </View>
      </div>
    </div>
  )
}

export default FoodCardComponent
