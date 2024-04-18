import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-between backdrop-blur-md px-4 py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-center flex-grow">
        <Link
          href="#home"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Home Section"
          className="mx-2 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="#about"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to About Section"
          className="mx-2 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
        >
          About
        </Link>
        <Link
          href="#work"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Work Section"
          className="mx-2 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
        >
          Work
        </Link>
        <Link
          href="#contact"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Contact Section"
          className="mx-2 text-[#e4ded7] hover:text-gray-400 cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/Emma2002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Emma's GitHub Profile"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl mx-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/emmavandenbroek/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Emma's LinkedIn Profile"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl mx-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:emmamyrthe@gmail.com"
          aria-label="Send email to Emma"
          className="text-[#e4ded7] hover:text-gray-400 text-3xl mx-2"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
