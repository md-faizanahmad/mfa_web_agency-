// src/components/sections/ServicesClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2, LineChart, Zap, Smartphone } from "lucide-react";

// Map the string keys to the actual Lucide components
const IconMap = {
  Code2: Code2,
  LineChart: LineChart,
  Zap: Zap,
  Smartphone: Smartphone,
};

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  iconName: string;
}

export default function ServicesClient({
  services,
}: {
  services: ServiceItem[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => {
        // Resolve the icon component safely
        // const Icon = IconMap[service.iconName as keyof typeof IconMap] || Code2;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative cursor-pointer h-105 overflow-hidden rounded-2xl border border-brand-midnight/5 bg-white shadow-sm"
          >
            {/* Parallax Image Overlay */}
            <div className="absolute inset-0 z-0 ">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw,
             33vw"
                className="object-cover  transition-all duration-700 group-hover:scale-105 "
                priority={false}
              />
              {/* <div className="absolute inset-0 bg-linear-to-t from-sky-200/90 via-sky/100 to-transparent" /> */}
            </div>

            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              {/* <div className="flex justify-between items-start">
                <div className="p-3  rounded-xl bg-brand-ice text-brand-midnight border border-brand-midnight/5 group-hover:bg-green-900 group-hover:text-white transition-colors duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-brand-midnight/10 group-hover:text-green-800 transition-colors transform group-hover:rotate-45">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div> */}

              {/* <div>
                <h3 className="text-2xl  font-black text-brand-midnight tracking-tighter uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-semibold leading-relaxed">
                  {service.desc}
                </p>
              </div> */}
            </div>

            {/* Tactical Lighting Line */}
            {/* <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-sky-600 transition-all duration-700 group-hover:w-full" /> */}
          </motion.div>
        );
      })}
    </div>
  );
}
