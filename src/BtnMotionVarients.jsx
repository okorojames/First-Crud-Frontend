import React, { createContext } from "react";
import { motion } from "framer-motion";
export const BtnMotionVarients = createContext();
const BtnMotionVarientsProvider = ({ children }) => {
  const BtnVarients = {
    hidden: {
      x: "-2000px",
    },
    visible: {
      x: 0,
      transition: {
        duration: 2.5,
        type: "spring",
        damping: 8,
        stiffness: 85,
      },
    },
  };
  return (
    <BtnMotionVarients.Provider value={{ BtnVarients }}>
      {children}
    </BtnMotionVarients.Provider>
  );
};

export default BtnMotionVarientsProvider;
