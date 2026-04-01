// src/components/layout/footer/FooterVideo.tsx
"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function FooterVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute inset-0 z-0 opacity-2.5 grayscale transition-opacity duration-700">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/hero/Website_Footer.mp4" type="video/mp4" />
      </video>

      {/* Control Trigger */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-10 left-6 z-50 p-3 bg-white/5 border border-white/10 hover:bg-brand-cobalt transition-all group"
        aria-label={isPlaying ? "Pause Background" : "Play Background"}
      >
        {isPlaying ? (
          <Pause size={12} className="text-white" />
        ) : (
          <Play size={12} className="text-white" />
        )}
      </button>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_50%)] bg-size-[100%_4px] pointer-events-none" />
    </div>
  );
}
