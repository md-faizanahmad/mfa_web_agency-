// src/components/sections/contact/ContactServer.tsx
import ContactClient from "@/components/Section/Contact/ContactClient";
import { Mail, MapPin, Phone } from "lucide-react";

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
                <span className="text-brand-midnight/10 font-outline-2 text-7xl md:text-9xl">
                  SCALE?
                </span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-sm">
              We only take on 4 projects per quarter to ensure maximum
              performance delivery. Secure your slot now.
            </p>

            <div className="space-y-6 pt-8 border-t border-brand-midnight/5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 rounded-lg bg-brand-ice text-brand-cobalt group-hover:bg-brand-cobalt group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Email Us
                  </p>
                  <p className="text-lg font-black text-brand-midnight tracking-tight">
                    hello@mfa.agency
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 rounded-lg bg-brand-ice text-brand-cobalt group-hover:bg-brand-cobalt group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Call Directly
                  </p>
                  <p className="text-lg font-black text-brand-midnight tracking-tight">
                    +1 (555) 000-MFA
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
