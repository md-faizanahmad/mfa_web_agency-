import { Shield, Zap, Cpu } from "lucide-react";
import { TrustItem } from "./TrustItem";
import { Marquee } from "./Marquee";

const METRICS = [
  {
    icon: <Shield size={14} />,
    title: "Reliable",
    desc: "Works smoothly without breaking.",
  },
  {
    icon: <Zap size={14} />,
    title: "Fast",
    desc: "Loads quickly on all devices.",
  },
  {
    icon: <Cpu size={14} />,
    title: "Scalable",
    desc: "Easy to grow as your business grows.",
  },
];

export default function TrustBar() {
  return (
    <div className="w-full  bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-6 px-4 py-3 text-sm">
        {METRICS.map((item) => (
          <TrustItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
      <div className="">
        <Marquee />
      </div>
    </div>
  );
}
