import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between backdrop-blur-md px-4 py-2 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      style={{ textAlign: "center", fontFamily: "" }}
    >
      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center navbar-nav" style={{ marginLeft: "150px" }}>
          <Link
            href="#home"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Home Section"
            className="mr-6 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="#about"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to About Section"
            className="mr-6 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            href="#work"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Work Section"
            className="mr-6 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
          >
            Work
          </Link>
          <Link
            href="#contact"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Contact Section"
            className="text-[#e4ded7] hover:text-gray-400 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <a
          href="https://github.com/Emma2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Emma's GitHub Profile"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl mr-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/emmavandenbroek/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Emma's LinkedIn Profile"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl mr-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:emmamyrthe@gmail.com"
          aria-label="Send email to Emma"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
