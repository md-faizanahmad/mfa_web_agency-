// src/components/sections/FAQ.tsx
import FAQSchema from "@/components/Section/FaqSchema/FaqSchema";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How long does a typical system build take?",
    answer:
      "A standard high-performance website typically moves from blueprint to deployment in 2-4 weeks. Complex e-commerce systems may require 6-8 weeks for full integration.",
  },
  {
    question: "Do you provide hosting and domain management?",
    answer:
      "Yes. We provide global edge hosting and managed DNS services to ensure your system remains fast and secure 24/7.",
  },
  {
    question: "Will my website be optimized for Google Search?",
    answer:
      "Every system we build includes a technical SEO foundation. We ensure clean semantic code, fast load times, and mobile-first architecture to maximize your organic growth.",
  },
  {
    question: "What is the cost of a custom digital system?",
    answer:
      "Pricing is based on the complexity of the infrastructure. We provide custom quotes after the initial Discovery phase to ensure your investment matches your business goals.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQSchema />{" "}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Support_Intel
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Common <br />{" "}
              <span className="text-sky-400 italic">Queries.</span>
            </h2>
          </header>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-100 bg-white transition-all duration-300 open:border-sky-400 open:shadow-xl open:shadow-sky-50"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-slate-900">
                    {faq.question}
                  </h3>
                  <div className="text-slate-300 group-open:rotate-180 group-open:text-sky-400 transition-transform duration-300">
                    <ChevronDown size={18} />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Still have questions? Our engineering team is available.
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest text-sky-500 hover:text-slate-950 transition-colors">
              Initialize Contact _
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
