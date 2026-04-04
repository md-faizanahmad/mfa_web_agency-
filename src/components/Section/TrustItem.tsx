"use client";

import { motion } from "framer-motion";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function TrustItem({ icon, title, description, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-2"
    >
      <div className="text-gray-500">{icon}</div>

      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{title}</span>

        {/* Desktop only */}
        <span className="hidden md:block text-xs text-gray-500">
          {description}
        </span>
      </div>
    </motion.div>
  );
}
