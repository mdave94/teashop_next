import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import ModalCard from "./ModalCard";

type ModalProps = {
  CardPicture: string;
  CardText: string;
  closeModal: () => void;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  CardPicture,
  CardText,
  closeModal,
  className,
}) => {
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
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the backdrop
        className={`flex justify-center align-middle items-center `}
        variants={variants}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        <ModalCard CardPicture={CardPicture} CardText={CardText} />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
