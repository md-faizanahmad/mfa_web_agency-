"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { SectionWrapper } from "../Layouts/SectionWrapper";
import { Container } from "../Layouts/Container";
import { fadeUp, staggerContainer } from "@/motion/motion";

export function Hero() {
  return (
    <SectionWrapper>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* TEXT */}
          <div className="space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold leading-tight"
            >
              Websites that drive real business growth.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-500 max-w-md">
              Built for performance, clarity, and conversion.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <Button href="/project-request">Start project</Button>
              <Button href="/work" variant="secondary">
                View work
              </Button>
            </motion.div>
          </div>

          {/* VISUAL */}
          <motion.div
            variants={fadeUp}
            className="aspect-[4/3] bg-gray-100 rounded-2xl"
          />
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
