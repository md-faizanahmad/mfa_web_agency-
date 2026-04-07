// src/components/sections/contact/ContactServer.tsx
import ContactClient from "@/components/Section/Contact/ContactClient";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Contact Info & Intent */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
              <h2 className="text-6xl md:text-8xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.8]">
                READY TO <br />
                <span className="text-brand-midnight/10 hover:text-sky-400 cursor-pointer animate-in font-outline-2 text-7xl md:text-9xl">
                  SCALE?
                </span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-sm">
              We only take on 4 projects per quarter to ensure maximum
              performance delivery. Secure your slot now.
            </p>
            <div className="space-y-4 pt-6 border-t border-brand-midnight/5">
              {/* EMAIL */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-md 
      bg-blue-50 text-blue-600 
      transition-all duration-300 
      group-hover:bg-blue-600 group-hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </div>

                <div className="leading-tight">
                  <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-brand-midnight truncate">
                    md.faizan.ahmad.web@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-md 
      bg-green-50 text-green-600 
      transition-all duration-300 
      group-hover:bg-green-600 group-hover:text-white"
                >
                  <Phone className="w-4 h-4" />
                </div>

                <div className="leading-tight">
                  <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-brand-midnight">
                    +91 75630 92029
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Tactical Form (Client-Side) */}
          <div className="lg:col-span-7">
            <ContactClient />
          </div>
        </div>
      </div>
    </section>
  );
}
