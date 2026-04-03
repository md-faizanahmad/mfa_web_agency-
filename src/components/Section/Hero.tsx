// components/sections/Hero.tsx

"use client";

import { fadeUp, staggerContainer } from "@/motion/motion";
import { Container } from "../Layouts/Container";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { MediaVideo } from "../Layouts/MediaVideo";

export function Hero() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT - TEXT */}
          <div className="space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            >
              A complete digital system
              <br />
              built for growth.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-500 max-w-md">
              Websites, performance, and marketing — aligned into one scalable
              system.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              <Button href="/project-request">Start project</Button>
              <Button href="/work" variant="secondary">
                View work
              </Button>
            </motion.div>
          </div>

          {/* RIGHT - VIDEO */}
          <motion.div variants={fadeUp}>
            <MediaVideo
              src="/videos/services_hero.mp4"
              className="aspect-4/3 rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
