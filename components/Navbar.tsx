import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        
        <Image src="/logo-pachadev.png"  alt="cliff" width={60} height={60} />

      </div>

     
    </div>
  );
};

export default Navbar;
