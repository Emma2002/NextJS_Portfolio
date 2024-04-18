import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedBody from "./animations/AnimatedBody";

const Footer = () => {
  return (
    <motion.section
      className="h-[15vh] w-full items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#121212] pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <div className="flex items-center">
          <a
            href="https://github.com/Emma2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-gray-400 text-3xl"
          >
            <FaGithub className="mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmavandenbroek/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-gray-400 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:emmamyrthe@gmail.com"
            className="text-[#e4ded7] hover:text-gray-400 text-3xl"
          >
            <FaEnvelope className="ml-2" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
          <AnimatedBody text={"Made by"} className={"m-0 p-0"} />
          <Link
            href="https://github.com/Emma2002"
            target="_blank"
            aria-label="Emma's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Emma van den Broek"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
