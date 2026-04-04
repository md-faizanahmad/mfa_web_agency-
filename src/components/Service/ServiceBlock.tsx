"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  outcomes: string[];
  reverse?: boolean;
  image: string;
};

export function ServiceBlock({
  title,
  description,
  outcomes,
  reverse,
  image,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="py-10 px-4 md:px-0 overflow-hidden">
      <div
        className={`flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE - Compact Size Retained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-65 md:h-105 w-full md:w-1/2 rounded-2xl overflow-hidden shadow-sm"
        >
          <Image src={image} alt={title} fill className="object-cover " />
        </motion.div>

        {/* TEXT - Animated & Compact */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2 flex flex-col"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-gray-900"
          >
            {title}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-base mb-5 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-3 mb-6">
            {outcomes.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm md:text-base text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants}>
            <Link href="/project-request" className="inline-block">
              <div className="flex items-center cursor-pointer gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors group">
                Start project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
