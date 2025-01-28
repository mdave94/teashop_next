"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [visible, setIsVisible] = useState<boolean>(true);

  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and past 100px, hide the navbar
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up, show the navbar
      setIsVisible(true);
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const translateY = visible ? 0 : -100; // Translate to -100px when hidden, 0 when visible
  return (
    <>
      <motion.div
        style={{
          transform: `translateY(${translateY}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-teander hidden fixed z-10 md:flex  justify-center items-center  "
      >
        <motion.div className="flex  w-screen flex-row flex-grow items-center h-[5rem] bg-white max-w-[90%] rounded-[50px] mt-10 justify-between  px-[150px]">
          <motion.div className="text-2xl flex  cursor-pointer  flex-row">
            <Image src="/images/logo.jpg" alt="logo" width={140} height={140} />
          </motion.div>
          <div className="flex items-center cursor-pointer  space-x-4  ">
            <div className="text-teander  text-xl">Home</div>
            <div className="text-teander  text-xl">About</div>
            <div className="text-teander  text-xl">Contact</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
