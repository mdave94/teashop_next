"use client";
import { motion } from "framer-motion";

const SecondComponent = () => {
  const imageVariants = {
    initial: {
      opacity: 0,
      x: -20,
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

  const componentVariants = {};

  return (
    <div className=" bg-white w-screen flex flex-row justify-center items-center h-screen p-2 ">
      <motion.div
        variants={imageVariants}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 2, // Animation duration
          },
        }}
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center items-center">
          <div className="flex justify-center items-center">
            <motion.div
              variants={imageVariants}
              //  initial="initial"
              //   animate="animate"
              className="bg-green-600 rounded-full 
      min-w-[500px] min-h-[500px]
      w-[500px] h-[500px]"
            ></motion.div>
          </div>
          <div className="mx-14 ">
            <div className="max-w-[500px]">
              <div className="text-3xl font-bold mb-4">
                Próbálj ki teát a világ minden tájáról !
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                malesuada, sapien sit amet ultricies viverra, nunc libero Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                malesuada, sapien sit amet ultricies viverra, nunc libero Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                malesuada, sapien sit amet ultricies viverra, nunc libero Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                malesuada, sapien sit amet ultricies viverra, nunc libero
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondComponent;
