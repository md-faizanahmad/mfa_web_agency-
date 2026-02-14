"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2, LineChart, Zap, Smartphone } from "lucide-react";

const IconMap = {
  Code2,
  LineChart,
  Zap,
  Smartphone,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => {
        const Icon = IconMap[service.iconName as keyof typeof IconMap] || Code2;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative h-[420px] overflow-hidden rounded-xl border border-border cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={service.img}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-midnight/20 group-hover:bg-brand-midnight/80 transition-all duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              {/* Top Right Arrow */}
              <div className="flex justify-end">
                <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45" />
              </div>

              {/* Bottom Content Reveal */}
              <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-md bg-primary/20 text-primary">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
