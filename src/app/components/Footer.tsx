"use client";
import { motion, useInView } from "framer-motion";
import SocialMediaIcon from "./ui/svg/SocialMediaIcon";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  const footerVariatns = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const footerRightSideVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={footerRef}
        variants={footerVariatns}
        initial="hidden"
        style={{ backgroundColor: "#0C0C0C" }}
        animate={isInView ? "visible" : "hidden"}
        className="h-full  px-8 text-textGray  justify-center items-center "
      >
        <div className="gap-14 my-6  grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-between bg-w items-center">
          <div className="text-4xl  bg-gray-300 p-2 px-4 rounded-2xl ">
            LogoHolder
          </div>
          <div
            className="flex flex-col ml-4
        "
          >
            <div className="text-2xl font-bold mb-7">Címünk</div>
            <div className="">1119 Random cím 12-14</div>
          </div>

          <div
            className="flex flex-col ml-4
        "
          >
            <div className="text-2xl  font-bold mb-7">Nyitvatartás</div>
            <div className="">Hétfőn zárva</div>
            <div className="">K-P 12:00-19:00</div>
            <div className="">Szombat 12:00-18:00</div>
            <div className="">Vasárnap 13:00-17:00</div>
          </div>

          <motion.div
            variants={footerRightSideVariants}
            className="flex flex-col cursor-pointer ml-4 space-y-2 group"
          >
            <div className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">
              Felelősséválalási nyilatkozat
            </div>
            <div className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full">
              Adatkezelési tájékoztató
            </div>
          </motion.div>

          <motion.div
            variants={footerRightSideVariants}
            className="flex justify-center items-center cursor-pointer  "
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ margin: "0.1rem" }}
              transition={{ type: "spring", bounce: 0.7 }}
            >
              <SocialMediaIcon name="insta" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ margin: "0.1rem" }}
              transition={{ type: "spring", bounce: 0.7 }}
            >
              <SocialMediaIcon name="tiktok" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{ margin: "0.1rem" }}
              transition={{ type: "spring", bounce: 0.7 }}
            >
              <SocialMediaIcon name="fb" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
