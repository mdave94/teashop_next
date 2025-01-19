"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = (index: number) => ({
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1 + index * 0.6, // Adjust delay based on index
      },
    },
  });

  const imageVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        delay: 0.5,
      },
    },
  };

  const teanderVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 3,
      },
    },
  };
  const heroTexts = ["TEA", "ÉLMÉNY", "KÖZÖSSÉG"];

  return (
    <div className="flex bg-slate-300 w-screen flex-row flex-grow items-center justify-between  h-screen px-[150px]">
      <div className="h-[400px] flex flex-col justify-center items-start  ">
        {heroTexts.map((text, index) => (
          <motion.div
            key={index}
            className="text-6xl mb-4"
            variants={textVariants(index)}
            initial="initial"
            animate="animate"
          >
            {text}
          </motion.div>
        ))}
        <motion.div
          className="text-8xl text-teander flex flex-row"
          style={{ color: "#818181" }}
          variants={teanderVariants}
          initial="initial"
          animate="animate"
        >
          TEANDER
        </motion.div>
      </div>
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
