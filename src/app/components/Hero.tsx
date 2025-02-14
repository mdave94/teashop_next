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
    <div className="relative flex items-center justify-start w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/images/HeroPicture.jpg')" }}
      ></div>
      <div className="flex items-center justify-center w-screen h-screen  ">
        <div className="relative flex w-full pl-2 lg:max-w-[1500px] flex-row flex-grow items-center justify-between h-full ">
          <div className="h-[400px] flex flex-col p-4 justify-center items-start ">
            {heroTexts.map((text, index) => (
              <motion.div
                key={index}
                className="lg:text-7xl pl-2 text-4xl  mb-4 text-white"
                variants={textVariants(index)}
                initial="initial"
                animate="animate"
              >
                {text}
              </motion.div>
            ))}
            <motion.div
              className="lg:text-9xl text-6xl  text-white font-bold flex flex-row"
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
          >
            {/* Your image or other content here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
