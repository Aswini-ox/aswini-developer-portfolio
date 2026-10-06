"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 900); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>{show && (
      <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink" role="status" aria-label="Loading">
        <div className="text-center"><p className="font-display text-3xl font-semibold tracking-[0.2em] grad-text">ASWINI.DEV</p>
          <motion.div className="mx-auto mt-4 h-px bg-gradient-to-r from-electric via-violet to-cyan" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} /></div>
      </motion.div>)}</AnimatePresence>
  );
}
