import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./images";
import Modal from "../Modal/Modal";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const TeaGallery: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!isDragging) {
      setModalOpen(true);
    }
  };

  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.button
          onClick={handleClick}
          onPointerDown={() => setIsDragging(false)}
          onPointerUp={() => setIsDragging(false)}
          onDragStart={() => setIsDragging(true)}
          key={page}
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="z-10 w-[400px] h-[450px] bg-cover bg-center rounded-3xl cursor-pointer"
        />
      </AnimatePresence>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20 transform scale-x-[-1]"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute top-2 right-2 bg-black bg-opacity-40 rounded-lg w-5 h-5 flex justify-center items-center cursor-pointer z-20"
        onClick={() => window.location.reload()}
      >
        {"⟳"}
      </div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            text="This is a modal animated with Framer Motion"
            closeModal={() => setModalOpen(false)}
            className="z-30"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeaGallery;
