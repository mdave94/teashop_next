"use client";
import { motion } from "framer-motion";

const FirstComponent = () => {
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
  return (
    <div className=" bg-white w-screen flex flex-row justify-center items-center h-screen p-2 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-center items-center">
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

        <div className="flex justify-center items-center">
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="bg-blue-600 rounded-full 
          min-w-[500px] min-h-[500px]
          w-[500px] h-[500px]"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
