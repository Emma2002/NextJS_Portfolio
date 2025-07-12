import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedBody from "./animations/AnimatedBody";
import AnimatedTitle from "./animations/AnimatedTitle";

const Contact = () => {
  return (
    <section
      className="w-full items-center justify-center overflow-hidden bg-[#121212] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-6"
      id="contact"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] text-center">
        <AnimatedTitle
          text={"CONTACT"}
          className={
            "mb-10 text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
        <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
          <AnimatedBody
            text={"Got a question or just want to say hi? Feel free to drop me an email anytime."}
          />
          <motion.a
            href="mailto:emmamyrthe@gmail.com"
            className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-white-500 hover:bg-white-600 focus:outline-none focus:border-white-700 focus:shadow-outline-white active:bg-white-700 transition ease-in-out duration-150"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: "white" }}
          >
            <FaEnvelope className="mr-1" />
            Send Email
          </motion.a>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28"></div>
      </div>
    </section>
  );
};

export default Contact;