"use client"; // if you're using Next.js App Router

import { motion } from "framer-motion";

export default function FadeInSection({
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  once = true,
  amount = 0.3,
  className = "",
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay }}
      variants={variants}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
