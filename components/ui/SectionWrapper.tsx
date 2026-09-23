"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode, 
  className?: string, 
  id?: string 
}) {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 overflow-hidden relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}