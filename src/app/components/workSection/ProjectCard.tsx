import { ProjectProps } from "./ProjectDetails";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BiLoaderAlt } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { IoPlayCircleSharp } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "./video.css";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  demo,
  image,
  video,
  available,
}: ProjectProps) => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  // Set up portal root and cleanup
  useEffect(() => {
    // Create or get the portal root element
    let portalElement = document.getElementById('modal-portal');
    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.id = 'modal-portal';
      document.body.appendChild(portalElement);
    }
    setPortalRoot(portalElement);

    // Cleanup function to reset body overflow
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (modal) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [modal]);

  const closeModal = () => {
    setModal(false);
    setVideoLoading(true);
    document.body.style.overflow = 'auto';
  };

  const openModal = () => {
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleVideoLoad = () => {
    setVideoLoading(false);
  };

  // Handle background click to close modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Modal component
  const ModalComponent = () => (
    <section className="modal__bg" onClick={handleBackgroundClick}>
      <div className="modal__align">
        <div className="modal__content">
          <IoCloseOutline
            className="modal__close"
            aria-label="Close modal"
            onClick={closeModal}
          />
          <div className="modal__video-align">
            {videoLoading && (
              <div className="modal__spinner">
                <BiLoaderAlt className="modal__spinner-style" />
              </div>
            )}
            <video
              className="modal__video-style"
              onLoadedData={handleVideoLoad}
              width="800"
              height="500"
              controls
              autoPlay
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <motion.div
        style={{
          backgroundColor: "#212121",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        }}
        className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
        initial="initial"
        animate="animate"
      >
        <Image
          src={image}
          alt={name}
          layout="responsive"
          loading="eager"
          className={`absolute -bottom-2 w-full sm:w-[85%] md:w-[60%] lg:max-w-[55%] rounded-xl overflow-hidden ${
            id % 2 === 0 ? "right-0" : "left-0"
          }`}
        />

        {video && (
          <button
            onClick={openModal}
            className="focus:outline-none absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(${id % 2 === 0 ? "0%" : "150%"}, -50%)`,
              [id % 2 === 0 ? "right" : "left"]: "5%",
            }}
          >
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                <div className="rounded-full bg-white ">
                  <IoPlayCircleSharp size={150} color="#000" />
                </div>
              </h3>
            </div>
          </button>
        )}

        {demo && (
          <div className="absolute top-0 text-[#0E1016] left-0 ml-8 lg:ml-14 mt-6 flex items-center justify-center gap-4 lg:mt-10">
            <Link
              href={demo}
              target="_blank"
              className="rounded-full"
              aria-label="Open Live Demo"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              />
            </Link>
          </div>
        )}

        <div
          className={`absolute text-white  ${
            !(id % 2 === 0)
              ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-50  lg:mr-4"
              : "left-10 top-32 ml-0 md:mr-12 lg:top-42 lg:ml-4"
          } mb-10  md:mb-16 lg:mb-14 `}
        >
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
            }
          />
          <div className="mt-9 flex gap-4">
            {technologies.map((tech, id) => (
              <AnimatedTitle
                text={tech}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
                key={id}
                className={
                  "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
                }
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Portal Modal - Renders outside of component tree */}
      {modal && video && portalRoot && 
        createPortal(<ModalComponent />, portalRoot)
      }
    </>
  );
};

export default ProjectCard;