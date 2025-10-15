"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({ as: Component = "div", className = "", children, delay = 0 }: { as?: any; className?: string; children?: React.ReactNode; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
