"use client";
import { motion } from "framer-motion";
import TeaGallery from "./TeaGallery/TeaGallery";
const FirstComponent = () => {
  return (
    <div className=" bg-green-200 w-full flex flex-row justify-center items-center h-full  ">
      <motion.div
        initial={{ x: 80 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
      >
        <div className="grid h-full  w-full lg:grid-cols-2 md:grid-cols-1 justify-center items-center">
          <div className="lg:mx-14 px-2 w-fit">
            <div className="lg:max-w-[500px] w-screen my-8 p-2">
              <div className="lg:text-3xl  text-2xl mb-4  w-screen font-bold lg:mb-4">
                Próbálj ki teát a világ minden tájáról !
              </div>
              <p className="p-2">
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
            <TeaGallery />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstComponent;
