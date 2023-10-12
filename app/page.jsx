"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import ButtonComponent from "@/components/ui/button";
import Desktop from "@/components/responsive/desktop";
import Tablet from "@/components/responsive/tablet";
import Mobile from "@/components/responsive/mobile";
import PriceCard from "@/components/ui/priceCard";
import ButtonLanding from "@/components/ui/landingButton";
import FadeInLeft from "@/helpers/animation/FadeInLeft";
import FadeIn from "@/helpers/animation/FadeIn";

function WelcomeMobile() {
  const router = useRouter();

  return (
    <>
      <Mobile>
        <div className="min-w-[320px] relative flex flex-col items-start gap-[80px] bg-white p-[20px] h-[93vh]">
          <div className="relative w-full flex-1 grow self-stretch bg-white" />
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[20px] self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-[38px] font-bold leading-[46.9px] tracking-[0] text-transparent [font-family:'Poppins',Helvetica]">
              <span className="text-[#010101]">El menú inteligente que </span>
              <span className="text-[#319f60]">se adapta a ti</span>
            </p>
            <p className="relative self-stretch text-[14px] font-normal leading-[normal] tracking-[0] text-black-i [font-family:'Poppins',Helvetica]">
              Guarda los platos y sabores que más te gustan para futuros
              restaurantes.
            </p>
          </div>
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[20px] self-stretch">
            <ButtonComponent
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  router.push("/login");
                }, 400);
              }}
              property1="active"
              propertyDefaultClassName="!self-stretch !bg-green !w-full"
              text="Iniciar Sesión"
            />
            <ButtonComponent
              onClick={() => {
                // Coloca aquí la lógica que deseas ejecutar cuando se hace clic en el botón
                setTimeout(() => {
                  router.push("/menu");
                }, 400);
              }}
              divClassName="!text-green"
              property1="secundario"
              propertyDefaultClassName="!border-green !self-stretch !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !w-full"
              text="Omitir"
            />
          </div>
        </div>
      </Mobile>
      <Tablet>
        <div className="relative flex h-[1080px] flex-col items-center justify-center bg-[#ffffff]">
          <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[40px] self-stretch">
            <p className="relative mt-[-1.00px] self-stretch text-center text-[60px] font-bold leading-[74.1px] tracking-[0] text-transparent [font-family:'Poppins',Helvetica]">
              <span className="text-[#319f60]">¡Ups!</span>
              <span className="text-[#010101]"> Aquí hay mucho espacio</span>
            </p>
            <p className="relative self-stretch text-center text-[20px] font-normal leading-[normal] tracking-[0] text-black-i [font-family:'Poppins',Helvetica]">
              Escanea el QR desde tu dispositivo móvil
            </p>
          </div>
        </div>
      </Tablet>
      <Desktop>
        <div className="bg-[#ffffff] flex flex-row justify-center w-full">
          <div className="bg-white w-full relative">
            {/*Experiencias a la carta */}
            <div className="absolute w-[1676px] h-[998px] top-[2911px] left-[156px]">
              <FadeIn>
                <div className="absolute top-[535px] left-[656px] [font-family:'Poppins',Helvetica] font-medium text-black text-[80px] tracking-[0] leading-[90px] whitespace-nowrap">
                  Experiencias
                </div>
                <img
                  className="w-[677px] h-[998px] left-[2px] object-cover absolute top-0"
                  alt="Image"
                  src="https://c.animaapp.com/3gXe0TqT/img/image-3.png"
                />
                <img
                  className="absolute w-[348px] h-[348px] top-[124px] left-[398px]"
                  alt="Element model"
                  src="https://c.animaapp.com/3gXe0TqT/img/3d-model-3@2x.png"
                />
                <img
                  className="absolute w-[665px] h-[665px] top-[234px] left-[1011px]"
                  alt="Element model"
                  src="https://c.animaapp.com/3gXe0TqT/img/3d-model-2@2x.png"
                />
                <img
                  className="absolute w-[385px] h-[385px] top-[176px] left-[790px]"
                  alt="Element model"
                  src="https://c.animaapp.com/3gXe0TqT/img/3d-model-1@2x.png"
                />
                <img
                  className="absolute w-[424px] h-[424px] top-[158px] left-0"
                  alt="Element model"
                  src="https://c.animaapp.com/3gXe0TqT/img/3d-model@2x.png"
                />
                <div className="top-[637px] left-[909px] font-medium text-black text-[80px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[90px]">
                  a la
                </div>
                <div className="top-[665px] left-[1077px] font-bold text-green text-[160px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[90px]">
                  Carta
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <img
                className="absolute w-[609px] h-[915px] top-[109px] left-[925px] object-cover"
                alt="Pexels blue bird"
                src="https://c.animaapp.com/3gXe0TqT/img/pexels-blue-bird-7242744-1.png"
              />
            </FadeIn>

            <div className="absolute w-[1722px] h-[136px] top-[1324px] left-[100px]">
              <FadeInLeft>
                <p className="absolute w-[912px] top-[2px] left-[410px] [font-family:'Poppins',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal]">
                  Posuere mi nam nullam arcu ac lectus. Adipiscing elementum in
                  tellus duis viverra eget sodales eu. Nunc egestas pellentesque
                  odio ultrices auctor eget aliquam urna. Lectus ullamcorper.
                </p>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center gap-[20px] absolute top-[94px] left-[1528px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] underline">
                    Saber más
                  </div>
                  <img
                    className="relative w-[19.56px] h-[19.56px] mr-[-1.50px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-2-2.svg"
                  />
                </div>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center justify-center px-[30px] py-[10px] absolute top-0 left-0 rounded-[50px] border-[3px] border-solid border-green">
                  <div className="relative w-fit mt-[-3.00px] [font-family:'Poppins',Helvetica] font-normal text-green text-[28px] tracking-[0] leading-[normal]">
                    Nosotros
                  </div>
                </div>
              </FadeInLeft>
            </div>
            {/*services and see more */}
            <div className="absolute w-[1722px] h-[136px] top-[2660px] left-[100px]">
              <FadeInLeft>
                <p className="absolute w-[912px] top-[2px] left-[410px] [font-family:'Poppins',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal]">
                  Posuere mi nam nullam arcu ac lectus. Adipiscing elementum in
                  tellus duis viverra eget sodales eu. Nunc egestas pellentesque
                  odio ultrices auctor eget aliquam urna. Lectus ullamcorper.
                </p>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center gap-[20px] absolute top-[94px] left-[1528px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] underline">
                    Saber más
                  </div>
                  <img
                    className="relative w-[19.56px] h-[19.56px] mr-[-1.50px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-2-2.svg"
                  />
                </div>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center justify-center px-[30px] py-[10px] absolute top-0 left-0 rounded-[50px] border-[3px] border-solid border-green">
                  <div className="relative w-fit mt-[-3.00px] [font-family:'Poppins',Helvetica] font-normal text-green text-[28px] tracking-[0] leading-[normal]">
                    Servicios
                  </div>
                </div>
              </FadeInLeft>
            </div>
            {/*prices */}
            <div className="absolute w-[1722px] h-[136px] top-[4168px] left-[100px]">
              <FadeInLeft>
                <p className="absolute w-[912px] top-[2px] left-[410px] [font-family:'Poppins',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal]">
                  Posuere mi nam nullam arcu ac lectus. Adipiscing elementum in
                  tellus duis viverra eget sodales eu. Nunc egestas pellentesque
                  odio ultrices auctor eget aliquam urna. Lectus ullamcorper.
                </p>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center gap-[20px] absolute top-[94px] left-[1528px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[28px] tracking-[0] leading-[normal] underline">
                    Saber más
                  </div>
                  <img
                    className="relative w-[19.56px] h-[19.56px] mr-[-1.50px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-2.svg"
                  />
                </div>
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center justify-center px-[30px] py-[10px] absolute top-0 left-0 rounded-[50px] border-[3px] border-solid border-green">
                  <div className="relative w-fit mt-[-3.00px] [font-family:'Poppins',Helvetica] font-normal text-green text-[28px] tracking-[0] leading-[normal]">
                    Precios
                  </div>
                </div>
              </FadeInLeft>
            </div>
            <FadeInLeft>
              <p className="w-[793px] top-[367px] left-[100px] font-bold text-transparent text-[80px] absolute [font-family:'Poppins',Helvetica] tracking-[0] leading-[90px]">
                <span className="text-[#010101]">El menú inteligente que </span>
                <span className="text-[#319f60]">se adapta a ti</span>
              </p>
            </FadeInLeft>
            <FadeInLeft>
              <p className="absolute w-[574px] top-[728px] left-[100px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
                <span className="text-[#010101]">
                  Estamos transformando la elección de comida en una experiencia
                  visualmente impactante y personalizada, conectando el mundo
                  físico y digital.
                  <br />
                  <br />
                </span>
                <span className="font-bold text-[#010101]">
                  Nuestro objetivo:
                </span>
                <span className="text-[#010101]">
                  {" "}
                  Llevar la experiencia gastronómica a{" "}
                </span>
                <span className="text-[#319f60]">
                  un nivel completamente nuevo
                </span>
                <span className="text-[#010101]">.</span>
              </p>
            </FadeInLeft>
            <div className="inline-flex items-center gap-[10px] absolute top-[994px] left-[1716px]">
              <img
                className="relative w-[16.44px] h-[22px] ml-[-1.00px]"
                alt="Vector"
                src="https://c.animaapp.com/3gXe0TqT/img/vector.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[20px] tracking-[0] leading-[normal]">
                Explorar
              </div>
            </div>
            {/*info cards */}
            <div className="inline-flex items-start gap-[50px] absolute top-[1620px] left-[100px]">
              <FadeIn>
                <div className="flex flex-col w-[540px] h-[740px] items-start justify-center gap-[70px] p-[40px] relative bg-gray-i rounded-[30px] overflow-hidden">
                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-black-i text-[90px] tracking-[0] leading-[normal]">
                    15M+
                  </div>
                  <img
                    className="relative self-stretch w-full h-[3px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-3-3.svg"
                  />
                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black-i text-[40px] tracking-[0] leading-[normal]">
                    Restaurantes en todo el mundo conectados a iFlavi
                  </p>
                  <p className="relative self-stretch h-[132px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[28px] tracking-[0] leading-[normal]">
                    Donec faucibus sapien est mattis. Metus aliquam a gravida
                    sit aliquet. Nulla.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col w-[540px] h-[740px] items-start justify-center gap-[70px] p-[40px] relative bg-gray-i rounded-[30px] overflow-hidden">
                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-black-i text-[90px] tracking-[0] leading-[normal]">
                    60M+
                  </div>
                  <img
                    className="relative self-stretch w-full h-[3px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-3-3.svg"
                  />
                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black-i text-[40px] tracking-[0] leading-[normal]">
                    Usuarios activos todos los días disfrutando
                  </p>
                  <p className="relative self-stretch h-[132px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[28px] tracking-[0] leading-[normal]">
                    Donec faucibus sapien est mattis. Metus aliquam a gravida
                    sit aliquet. Nulla.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col w-[540px] h-[740px] items-start justify-center gap-[70px] p-[40px] relative bg-gray-i rounded-[30px] overflow-hidden">
                  <div className="relative self-stretch font-medium text-black-i text-[90px] [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                    150+
                  </div>
                  <img
                    className="relative self-stretch w-full h-[3px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-3-3.svg"
                  />
                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-black-i text-[40px] tracking-[0] leading-[normal]">
                    Elementum nunc viverra faucibus vitae interdum
                  </p>
                  <p className="relative self-stretch h-[132px] [font-family:'Poppins',Helvetica] font-normal text-gray-iii text-[28px] tracking-[0] leading-[normal]">
                    Donec faucibus sapien est mattis. Metus aliquam a gravida
                    sit aliquet. Nulla.
                  </p>
                </div>
              </FadeIn>
            </div>
            <PriceCard
              cardCheck="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck1="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck10="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck11="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck12="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck13="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck2="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck3="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck4="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck5="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck6="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck7="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck8="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardCheck9="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardImg="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              cardLine="https://c.animaapp.com/3gXe0TqT/img/line-2.svg"
              cardLine1="https://c.animaapp.com/3gXe0TqT/img/line-2.svg"
              check="https://c.animaapp.com/3gXe0TqT/img/check-15.svg"
              className="!absolute !left-[100px] !top-[4464px]"
              vector="https://c.animaapp.com/3gXe0TqT/img/line-2.svg"
            />
            <div className="absolute w-[1724px] h-[460px] top-[6209px] left-[100px]">
              <FadeIn>
                <div className="absolute w-[927px] h-[30px] top-[224px] left-0">
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Inicio
                  </div>
                  <div className="absolute top-0 left-[113px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Nosotros
                  </div>
                  <div className="absolute top-0 left-[262px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Restaurantes
                  </div>
                  <div className="absolute top-0 left-[455px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Precio
                  </div>
                  <div className="absolute top-0 left-[577px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Trabaja con nosotros
                  </div>
                  <div className="absolute top-0 left-[850px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] tracking-[0] leading-[normal] underline">
                    Ayuda
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="absolute w-[549px] h-[30px] top-[374px] left-[1177px]">
                  <div className="absolute top-0 left-[463px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] text-right tracking-[0] leading-[normal] underline">
                    Cookies
                  </div>
                  <div className="absolute top-0 left-[296px] [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] text-right tracking-[0] leading-[normal] underline">
                    Privacidad
                  </div>
                  <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-black-i text-[20px] text-right tracking-[0] leading-[normal] underline">
                    Términos y condiciones
                  </div>
                </div>
              </FadeIn>
              <FadeInLeft>
                <p className="absolute w-[660px] top-[80px] left-0 font-normal text-gray-iii text-[28px] [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                  Únete a los más de 15M+ de restaurantes que llevan la
                  experiencia a un siguiente nivel.
                </p>
              </FadeInLeft>
              <FadeIn>
                <p className="absolute top-[374px] left-0 font-normal text-gray-iii text-[20px] [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                  ©️ 2023 iFlavi. Todos los derechos reservados
                </p>
              </FadeIn>
              <FadeInLeft>
                <img
                  className="w-[117px] h-[38px] left-0 absolute top-0"
                  alt="Image"
                  src="https://c.animaapp.com/3gXe0TqT/img/image-2-1@2x.png"
                />
              </FadeInLeft>
              <FadeIn>
                <div className="inline-flex flex-col items-start gap-[20px] absolute top-0 left-[1338px]">
                  <p className="relative self-stretch mt-[-1.00px] font-normal text-transparent text-[28px] [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                    <span className="text-[#191c21]">
                      No esperes más,
                      <br />
                    </span>
                    <span className="text-[#319f60]">inicia hoy mismo</span>
                  </p>
                  <ButtonLanding
                    divClassName="!mt-[-6.00px] !text-[20px] !mb-[-4.00px]"
                    property1="active"
                    propertyDefaultClassName="!h-[60px] !inline-flex !bg-green !w-[unset]"
                    text="Iniciar prueba gratuita por 30 días"
                  />
                </div>
              </FadeIn>
              <img
                className="absolute w-[1720px] h-px top-[313px] left-0 object-cover"
                alt="Line"
                src="https://c.animaapp.com/3gXe0TqT/img/line-1.svg"
              />
            </div>
            <div className="flex w-[1820px] items-start justify-between px-[50px] py-[20px] fixed top-[30px] left-[50px] bg-[#ffffff03] rounded-[50px] backdrop-blur-[50px] backdrop-brightness-[100%]">
              <FadeInLeft>
                <img
                  className="relative w-[117px] h-[38px]"
                  alt="Image"
                  src="https://c.animaapp.com/3gXe0TqT/img/image-2@2x.png"
                />
              </FadeInLeft>
              <FadeInLeft>
                <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[66px] h-[15px]"
                    alt="Vector"
                    src="https://c.animaapp.com/3gXe0TqT/img/vector-1.svg"
                  />
                  <div className="relative w-fit mt-[-1.00px] font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] text-center tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
                    Menú
                  </div>
                </div>
              </FadeInLeft>
            </div>
          </div>
        </div>
      </Desktop>
    </>
  );
}

export default WelcomeMobile;
