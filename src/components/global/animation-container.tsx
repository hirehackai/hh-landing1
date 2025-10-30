"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimationContainerProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "scaleUp";
  delay?: number;
  className?: string;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
}) => {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
