"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BonusReasonCard from "./BonusContactCard";

const reasons = [
  {
    id: "#Reason1",
    title: "Google will love your new website.",
    desc: "Your website is structured with clean code, proper metadata, and optimized architecture so search engines can clearly understand and rank your business.",
    points: [
      "Technical SEO foundations from day one",
      "Structured metadata and semantic markup",
    ],
    img: "/eight-reason/seo-graph.svg",
  },
  {
    id: "#Reason2",
    title: "Reliable Modern Hosting",
    desc: "Deployed on fast, scalable infrastructure designed to handle traffic growth without complicated server management.",
    points: [
      "High-performance global hosting",
      "Scalable architecture for growth",
    ],
    img: "/eight-reason/hosting-domain.png",
  },
  {
    id: "#Reason3",
    title: "Security by Architecture",
    desc: "Security is not added later — it is built into the system with secure coding practices and modern infrastructure.",
    points: ["SSL encryption included", "Reduced vulnerability risk"],
    img: "/eight-reason/privacy-shield.png",
  },
  {
    id: "#Reason4",
    title: "No Plugin Dependency",
    desc: "Unlike traditional theme-based websites, your system does not rely on multiple plugins that create instability.",
    points: ["No plugin conflicts", "No update surprises"],
    img: "/eight-reason/no-Plugin.png",
  },
  {
    id: "#Reason5",
    title: "Flexible Content Systems",
    desc: "Content is structured intelligently, allowing your website to grow without breaking layout or performance.",
    points: ["Custom structured content types", "API-ready architecture"],
    img: "/eight-reason/custom-Design.png",
  },
  {
    id: "#Reason6",
    title: "Smooth Platform Transition",
    desc: "Moving from an outdated website is handled with planning to ensure minimal disruption and improved performance.",
    points: ["Structured content migration", "SEO preservation"],
    img: "/eight-reason/switch-arrows.svg",
  },
];

const ColorizeLove = ({ text }: { text: string }) => {
  if (!text.includes("love")) return <>{text}</>;
  const parts = text.split(/(love)/gi);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === "love" ? (
          <span key={i} className="inline-block font-bold">
            <span style={{ color: "#4285F4" }}>l</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>v</span>
            <span style={{ color: "#34A853" }}>e</span>
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
};

export default function WhyWebsiteContent() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            8 Reasons a Website
            <span className="block text-primary"> Grows Your Business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-100 flex flex-col border border-border rounded-3xl overflow-hidden bg-card transition-all hover:border-primary/50"
            >
              {/* Background Image Container */}
              <span className="bg-amber-500 mt-4 w-25 ms-4 rounded-full  px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                {reason.id}
              </span>
              <div className="absolute inset-0 z-0">
                <Image
                  src={reason.img}
                  alt={reason.title}
                  fill
                  className="object-contain object-bottom translate-y-1    group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-b from-card via-card/90 to-transparent" />
              </div>

              {/* Content Layer (On top) */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <ColorizeLove text={reason.title} />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {reason.desc}
                </p>

                {/* <ul className="space-y-2 mt-auto">
                  {reason.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs font-medium text-foreground/80"
                    >
                      <span className="mr-2 text-primary">✦</span> {point}
                    </li>
                  ))}
                </ul> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BonusReasonCard />
    </section>
  );
}
