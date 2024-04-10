"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen  items-center relative overflow-hidden">
      <div
        className="flex items-center w-full h-full bg-cover bg-center   "
        style={{ backgroundImage: "url(/main-bg.jpg)" }}
      >
        <div className="pl-[40px] pt-[70px] sm:pl-32 flex flex-col flex-wrap gap-6 z-[10] max-w-[750px]">
          <h1 className="text-[38px] text-white font-semibold sm:text-[43px]">
           Desarrollo Web  
            <span className="text-[18px] sm:text-[25px] text-white font-light  block  ">
       
              WordPress | Elementor | Customizaciones
            </span>
          </h1>
          <h2 className="md:text-[25px] text-[22px] z-[50] text-white  font-regular neon-text pb-[370px] px-5 fondo-animado ">
          <b>+15 años</b> de experiencia<br></br>en el mundo <b>digital</b>. 
          </h2>
         
        </div>
      </div>
     
      <div className="absolute flex inline-flex bottom-40 z-[20] md:right-[300px] items-center gap-4 pl-10">
     
     <Link
       href="/portfolio"
       className="group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] neon-button"
     >
       PORTFOLIO
     </Link>
     <Link
       href="/contacto"
       className=" group bg-trasparent border border-white px-5 py-3 text-lg text-white neon-button"
     >
       CONTACTO
     </Link>
   </div>
    

      <div className="absolute  sm-bottom-0 bottom-[-150px] right-0 z-[10] movimiento overflow-hidden">
        <Image
          src="/horse.png"
          alt="horse"
          height={500}
          width={200}
          className="absolute right-20 top-10 "
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={380}   
/>
      </div>

      <div className="absolute bottom-0 z-[5] overflow-hidden w-full h-auto ">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full overflow-hidden neon-glow"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
