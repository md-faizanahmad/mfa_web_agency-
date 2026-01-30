// src/components/sections/FAQSchema.tsx

export default function FAQSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical system build take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard high-performance website typically moves from blueprint to deployment in 2-4 weeks. Complex e-commerce systems may require 6-8 weeks for full integration.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hosting and domain management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide global edge hosting and managed DNS services to ensure your system remains fast and secure 24/7.",
        },
      },
      {
        "@type": "Question",
        name: "Will my website be optimized for Google Search?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every system we build includes a technical SEO foundation. We ensure clean semantic code, fast load times, and mobile-first architecture to maximize your organic growth.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of a custom digital system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing is based on the complexity of the infrastructure. We provide custom quotes after the initial Discovery phase to ensure your investment matches your business goals.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
