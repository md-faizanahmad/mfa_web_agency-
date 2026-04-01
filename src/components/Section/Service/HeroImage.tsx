"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/dyefyrszz/image/upload/v1770442153/studio_v8chxa.png",
  "https://res.cloudinary.com/dyefyrszz/image/upload/v1770442155/studio-cards_ko7ucl.png",
  "https://res.cloudinary.com/dyefyrszz/image/upload/v1770442153/studio-footer_lu6mzx.png",
];

export default function HeroImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // slow = premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-75 sm:h-100 md:h-125">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="Website design preview"
          fill
          priority={i === 0}
          className={`object-cover rounded-xl border border-gray-200 shadow-sm transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
