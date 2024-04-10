"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
    style={{ backgroundImage: "url(/22.jpg)" }}
      className="h-screen w-screen flex inline-flex items-center justify-center   bg-no-repeat  bg-center"
    >
      <div className="flex flex-col gap-5 max-w-[100%] text-center items-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-semibold text-white text-[40px]">
           
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
              BIO{" "}
            </span>
          
          </h1>
          <p className="text-white md:text-[18px] text-[18px] md:max-w-[60%] text-left  lg:px-[170px] min-w-80 max-w-80 mx-8 pb-[70px]
">   
        Mi nombre es Juan y soy un desarrollador web con más de 15 años de experiencia.
 <br></br> <br></br>
Mi enfoque se centra en la creación de soluciones digitales que sean visualmente atractivas, y también funcionales y efectivas.
<br></br> <br></br>
<b>Con un profundo conocimiento de WordPress y su ecosistema, tengo la capacidad de personalizar y optimizar cada proyecto.</b>
<br></br> <br></br>
Mi experiencia abarca desde el diseño y customización de temas y plugins personalizados, hasta la optimización del rendimiento y la seguridad del sitio.
<br></br> <br></br>
Además, estoy constantemente actualizado sobre las últimas tendencias y mejores prácticas en el mundo del desarrollo web, lo que me permite ofrecer <b>soluciones innovadoras y de vanguardia.</b> <br></br> <br></br>
          </p>
        </div>
        <Swiper
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={7000}
          modules={[Autoplay]}
          className="max-w-[60%] invisible sm:visible"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      
      </div>
    </div>
  );
};

export default Page;
