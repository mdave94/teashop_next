"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setIsVisible] = useState<boolean>(true);
  const { scrollY } = useViewportScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

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
        className="text-teander  fixed z-10 flex justify-center items-center "
      >
        <motion.div className="flex  w-screen flex-row flex-grow items-center bg-white max-w-[90%] rounded-[50px] mt-10 justify-between  px-[150px]">
          <motion.div className="text-2xl flex  cursor-pointer  flex-row">
            <Image src="/images/logo.jpg" alt="logo" width={110} height={110} />
          </motion.div>
          <div className="flex items-center cursor-pointer  space-x-4  ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.1 }}
              className="text-teander  text-xl"
            >
              Home
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-teander  text-xl"
            >
              About
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="text-teander  text-xl"
            >
              Contact
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
