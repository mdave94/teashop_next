import { motion } from "framer-motion";
import React from "react";

type BackdropProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick, children }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
