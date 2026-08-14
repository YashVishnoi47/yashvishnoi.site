"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimateAll = ({ children, className, idx, id }) => {

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateAll;
