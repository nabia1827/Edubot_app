import React from "react";
import { motion } from "framer-motion";

export const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`bounce-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CardTitle = ({ children }) => {
  return (
    <h3 className="bcard-title">{children}</h3>
  );
};
