// components/sections/CTA.tsx

import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-black text-white py-24 text-center">
      <div className="max-w-xl mx-auto space-y-6 px-6">
        <h2 className="text-3xl font-semibold">
          Ready to build something that performs?
        </h2>

        <p className="text-white/60 text-sm">
          Stop wasting traffic on weak websites.
        </p>

        <Link
          href="/project-request"
          className="inline-block bg-white text-black px-8 py-3 text-sm font-medium"
        >
          Start your project
        </Link>
      </div>
    </section>
  );
}
