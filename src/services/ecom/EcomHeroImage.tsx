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
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative w-full h-80 sm:h-105 md:h-130">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="Ecommerce UI"
          fill
          className={`object-cover rounded-xl border border-gray-200 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
