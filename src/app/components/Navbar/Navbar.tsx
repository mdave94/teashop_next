"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="text-teander cursor-pointer  w-screen h-16 border-b-[1px] border-white">
        <div className="flex  w-screen flex-row flex-grow items-center justify-between h-full px-[150px]">
          <motion.div
            className="text-2xl flex flex-row"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image src="/png/logo.png" alt="logo" width={50} height={50} />
            <div className="flex justify-center items-center">TEANDER</div>
          </motion.div>
          <div className="flex items-center space-x-4  ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.1 }}
              className=""
            >
              Home
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className=""
            >
              About
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              className=""
            >
              Contact
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
