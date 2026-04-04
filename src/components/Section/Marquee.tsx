"use client";

import Image from "next/image";

const LOGOS = [
  {
    name: "Next.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "TypeScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
  },
  {
    name: "Node.js",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Vercel",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg",
  },
];

export function Marquee() {
  return (
    <div className="w-full py-6 border-y border-gray-200">
      {/* Label */}
      <p className="text-[10px] text-center uppercase tracking-widest text-gray-400 mb-6">
        Technologies I Work With
      </p>

      <div className="relative overflow-hidden group">
        {/* Gradient mask */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white via-transparent to-white z-10" />

        {/* Scrolling container */}
        <div className="flex w-max animate-marquee gap-16 group-hover:paused">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={40}
                    height={40}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
