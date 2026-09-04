"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimateAll = ({ children, className, idx = 0, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 80, filter: "Blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "Blur(0px)" }}
      transition={{
        duration: 1,
        delay: 0.2 + idx * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateAll;
