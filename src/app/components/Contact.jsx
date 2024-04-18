"use client";
import React from "react";
import "./animations/animate.css";
import AnimatedBody from "./animations/AnimatedBody";
import AnimatedTitle from "./animations/AnimatedTitle";

const Contact = () => {
  return (
<section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#121212] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-6"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"CONTACT ME"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
    
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28"></div>
      </div>
    </section>
  );
};
export default Contact;
