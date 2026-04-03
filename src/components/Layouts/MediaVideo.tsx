// components/ui/MediaVideo.tsx

"use client";

import { fadeUp } from "@/motion/motion";
import { motion } from "framer-motion";

type Props = {
  src: string;
  className?: string;
};

export function MediaVideo({ src, className }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={`relative w-full overflow-hidden ${className}`}
    >
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* subtle depth layer */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </motion.div>
  );
}
