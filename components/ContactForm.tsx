"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen   flex items-top ">
         
      <div className="absolute inline  flex bottom-60 z-[20] right-20 items-center gap-10 grid gap-4 grid-cols-2 ">
     
        <Link
           href="https://wa.me/542235451872"
          className="group bg-trasparent border border-white px-5 py-3 ml-5 text-lg text-white max-w-[140px] neon-button"
        >
          WHATSAPP
        </Link>
        
        <Link
          href="mailto:juanmiguelriveroyhornos@gmail.com"
          className="group bg-trasparent border border-white px-5 py-3 ml-5 text-lg text-white max-w-[99px] neon-button"
        >
          EMAIL
        </Link>
       
      </div>

  
      <div className="absolute bottom-0 z-[5] w-full h-auto ">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full "
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
