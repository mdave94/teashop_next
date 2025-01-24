import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Modal from "../Modal/Modal";
import { GalleryItems } from "./galleryItems";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export const TeaGallery: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number | null>(null);

  const imageIndex = wrap(0, GalleryItems.length, page);

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

  const handlePointerDown = (e: React.PointerEvent) => {
    setStartX(e.clientX);
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startX !== null && Math.abs(e.clientX - startX) > 5) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) {
      // Open modal if not dragging
      setModalOpen(true);
    }
    setStartX(null);
    setIsDragging(false);
  };

  return (
    <div className="relative max-w-[400px] h-screen flex justify-center items-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.button
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          key={page}
          style={{
            backgroundImage: `url(${GalleryItems[imageIndex].picturePath})`,
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { stiffness: 100, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className={`z-10 w-[400px] h-[450px] bg-cover bg-center rounded-3xl ${
            isDragging ? "cursor-grabbing" : "cursor-pointer"
          } `}
        />
      </AnimatePresence>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20 scale-x-[-1]"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </div>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            GalleryItem={GalleryItems[imageIndex]}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeaGallery;
