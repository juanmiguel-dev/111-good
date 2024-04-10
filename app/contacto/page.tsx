import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(contacto.jpg)" }}
      className="w-screen h-screen bg-cover bg-bottom neon-glow"
    >
      <div
        
        className="h-[70%] w-[70%] bg-cover bg-center "
      >
        <div className="top-10 w-[80%] md:w-[80%] sm:w-[100%] ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
