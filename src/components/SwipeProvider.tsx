// src/components/layout/SwipeProvider.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/navigation";

export default function SwipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Find current index in navigation
  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 100;

    // Swipe Left -> Go to Next Page
    if (info.offset.x < -swipeThreshold && currentIndex < navItems.length - 1) {
      router.push(navItems[currentIndex + 1].href);
    }
    // Swipe Right -> Go to Previous Page
    else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      router.push(navItems[currentIndex - 1].href);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="min-h-screen cursor-grab active:cursor-grabbing overflow-x-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* MOBILE UI HINT: Progress Bar */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-1 z-50 md:hidden">
        {navItems.map((item, i) => (
          <div
            key={item.href}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? "w-8 bg-sky-400" : "w-2 bg-slate-200"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
