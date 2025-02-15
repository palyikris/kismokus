"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function BasicAnimationWrapper({ children, x, y }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
