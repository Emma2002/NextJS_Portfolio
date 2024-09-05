"use client";
import React from "react";
import "./animations/animate.css";
import AnimatedBody from "./animations/AnimatedBody";
import AnimatedTitle from "./animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#121212] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-6"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"I AM EMMA"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I live in the Netherlands and I am currently pursuing my bachelor's degree in Creative Technology at the University of Twente. As someone who is interested in both technology and art, this is the perfect fit for me."
              }
            />

            

            <AnimatedBody
              text={
                "During my Creative Technology studies, I have the opportunity to learn a wide range of skills, including programming, design, prototyping and User Experience research."
              }
            />
            <AnimatedBody
              text={
                "I like 3D modelling, which allows me to bring my ideas to life in a digital space. I also enjoy graphic design and find great satisfaction in creating visually appealing designs. In addition to these creative pursuits, I enjoy learning about new technologies and how they can be used to solve problems."
              }
            />
                  
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />

              <AnimatedBody text={"React, Next.js, Git/GitHub."} />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Programming languages"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Java, Python, C#, html & css."} />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects,  Figma & Blender."
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28"></div>
      </div>
    </section>
  );
};

export default About;
