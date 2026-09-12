"use client";

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
    <div
      className="
        flex snap-x snap-mandatory gap-4
        overflow-x-auto pb-4
        scrollbar-hide
        sm:grid sm:grid-cols-2 sm:overflow-visible
        lg:grid-cols-5
      "
    >
      {services.map((service) => {
        const Icon = IconMap[service.iconName as keyof typeof IconMap] || Code2;

        return (
          <article
            key={service.id}
            className="
              group relative
              h-105
              w-[82vw] min-w-[82vw] shrink-0 snap-start
              overflow-hidden
              border border-border
              sm:w-auto sm:min-w-0
            "
          >
            {/* Background */}
            <Image
              src={service.img}
              alt={service.title}
              fill
              sizes="(max-width: 639px) 82vw, (max-width: 1024px) 50vw, 20vw"
              className="
                object-cover
                transition-transform duration-700
                sm:group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-brand-midnight/45
                transition-colors duration-500
                sm:group-hover:bg-brand-midnight/80
              "
            />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6">
              {/* Arrow */}
              <div className="flex justify-end">
                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-6 w-6 text-white
                    transition-all duration-300
                    sm:opacity-0
                    sm:group-hover:rotate-45
                    sm:group-hover:opacity-100
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  sm:translate-y-6 sm:opacity-0
                  sm:transition-all sm:duration-500
                  sm:group-hover:translate-y-0
                  sm:group-hover:opacity-100
                "
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {service.desc}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
