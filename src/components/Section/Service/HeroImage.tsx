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
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    /* aspect-video (16:9) keeps it compact but fits a desktop screenshot perfectly */
    <div className="relative w-full aspect-video max-w-3xl mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-lg bg-gray-50">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Website design preview"
          fill
          priority={i === 0}
          /* object-contain ensures the full image fits inside the box without cropping */
          className={`object-contain p-1 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
