import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

type ModelProps = {
  text: string;
  closeModal: () => void;
};

const Modal: React.FC<ModelProps> = ({ text, closeModal }) => {
  const variants = {
    initial: {
      y: "-200%",
      opacity: 1,
    },
    visible: {
      y: "50%",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 32,
        stiffness: 500,
      },
    },
    exit: {
      y: "200%",
    },
  };

  return (
    <>
      <Backdrop onClick={closeModal}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal bg-red-500 cursor-pointer flex justify-center text-center "
          variants={variants}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.div>
      </Backdrop>
    </>
  );
};

export default Modal;
