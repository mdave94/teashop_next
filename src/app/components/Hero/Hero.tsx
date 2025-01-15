"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="flex w-screen flex-row flex-grow items-center justify-between  h-full px-[150px]">
      <motion.div
        className="text-6xl"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        TEANDER
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate="animate"
        className="bg-teander rounded-full w-[500px] h-[500px]"
      ></motion.div>
    </div>
  );
};

export default Hero;
