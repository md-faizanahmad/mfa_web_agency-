import { Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function MobileSocial() {
  return (
    <div className="flex items-center mb-8 justify-between border border-black/10 rounded-2xl px-4 py-3 ">
      {/* Call */}
      <a
        href="tel:+917563092029"
        className="flex-1 flex items-center justify-center group"
      >
        <Phone
          size={18}
          className="text-black/60 group-hover:text-black transition"
        />
      </a>

      {/* divider */}
      <div className="w-px h-5 bg-black/10" />

      {/* WhatsApp */}
      <a
        href="https://wa.me/917563092029"
        target="_blank"
        className="flex-1 flex items-center justify-center group"
      >
        <MessageCircle
          size={18}
          className="text-black/60 group-hover:text-black transition"
        />
      </a>

      <div className="w-px h-5 bg-black/10" />

      {/* Instagram */}
      <a
        href="https://instagram.com/webgrowth_studio"
        target="_blank"
        className="flex-1 flex items-center justify-center group"
      >
        <Instagram
          size={18}
          className="text-black/60 group-hover:text-black transition"
        />
      </a>

      <div className="w-px h-5 bg-black/10" />

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61576438480066"
        target="_blank"
        className="flex-1 flex items-center justify-center group"
      >
        <Facebook
          size={18}
          className="text-black/60 group-hover:text-black transition"
        />
      </a>
    </div>
  );
}
