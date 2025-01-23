"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal/Modal";
import { AnimatePresence } from "framer-motion";
import TeaGallery from "./TeaGallery/TeaGallery";
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
    <div className=" bg-green-200 w-screen flex flex-row justify-center items-center h-screen p-2 ">
      <motion.div
        initial={{ x: 200 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
      >
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
            <TeaGallery />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstComponent;
