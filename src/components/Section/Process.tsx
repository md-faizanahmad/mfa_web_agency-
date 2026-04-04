"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../Layouts/Container";
import { SectionWrapper } from "../Layouts/SectionWrapper";

const steps = [
  {
    title: "Briefing",
    desc: "Defining project scope, user personas, and core business objectives.",
  },
  {
    title: "Prototyping",
    desc: "Creating low-fidelity wireframes to validate UX and user flows early.",
  },
  {
    title: "Visual Design",
    desc: "Applying brand identity, typography, and high-fidelity UI components.",
  },
  {
    title: "Handoff",
    desc: "Delivering pixel-perfect assets and documentation for development.",
  },
];

export function Process() {
  return (
    <SectionWrapper className="bg-white py-24">
      <Container>
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-4 block"
          >
            Phase-Based Delivery
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-black">
            Our <span className="italic font-serif text-gray-400">proven</span>{" "}
            workflow.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 border border-gray-100 hover:bg-gray-50 transition-colors duration-500 min-h-75 flex flex-col justify-center"
            >
              {/* Step Number - Top Left */}
              <span className="absolute top-8 left-10 text-xs font-mono text-gray-300 group-hover:text-black transition-colors">
                0{i + 1}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed antialiased">
                  {step.desc}
                </p>
              </div>

              {/* THE CONNECTING ARROW - Middle Right */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex items-center justify-center w-12 h-12 bg-white border border-gray-100 rounded-full shadow-sm group-hover:border-black group-hover:shadow-md transition-all duration-500"
                  >
                    {/* Inner Pulse Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gray-100 -z-10"
                    />

                    <ArrowRight
                      size={18}
                      className="text-gray-400 group-hover:text-black transition-colors"
                    />
                  </motion.div>
                </div>
              )}

              {/* Bottom Decorative Line */}
              <motion.div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
