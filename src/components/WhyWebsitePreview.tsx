"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WhyWebsitePreview() {
  const router = useRouter();

  return (
    <section className="bg-background py-24 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-4xl md:text-5xl text-foreground leading-tight">
            Why Businesses <br />
            <span className="text-primary">Need a Website</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            8 strategic reasons a professionally built website can accelerate
            growth, improve visibility, and strengthen your brand presence.
          </p>

          <button
            onClick={() => router.push("/whywebsite")}
            className="px-8 py-4 cursor-pointer bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-all"
          >
            Explore All 8 Reasons
          </button>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden border border-border"
        >
          <Image
            src="/eight-reason.png"
            alt="8 reasons your business needs a website"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
