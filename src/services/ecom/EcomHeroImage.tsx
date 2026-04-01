"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/daqb5wglu/image/upload/v1766169968/ShopUI_evspte.png",
  "https://res.cloudinary.com/daqb5wglu/image/upload/v1766866025/AdminDash_hgfg18.png",
];

export default function EcomHeroImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-sm aspect-4/3 sm:aspect-video">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Ecommerce Preview ${i + 1}`}
            fill
            priority={i === 0}
            className="object-contain p-2 md:p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
