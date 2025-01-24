"use client";
import { motion } from "framer-motion";
import { Header } from "../EventGallery/Header";
import { CardList } from "../EventGallery/CardList";

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
      <Header />
      <CardList />
    </div>
  );
};

export default SecondComponent;
