"use client";

import React, { useState, useEffect } from "react";
import { Code, User, Globe, ArrowRight } from "lucide-react";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);

  const handleStart = () => {
    setExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  // Optional: Auto enter after 3.5s or click anywhere
  useEffect(() => {
    const timer = setTimeout(() => {
      handleStart();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={handleStart}
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ${
        exiting ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/70 to-[#050505] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-in fade-in zoom-in-95 duration-700">
        {/* Top 3 Round Icon Buttons */}
        <div className="flex items-center gap-3.5 mb-8">
          <div className="w-11 h-11 rounded-full bg-[#121212] border border-white/15 flex items-center justify-center text-white/80 shadow-lg hover:border-white/50 transition-colors">
            <Code className="w-4 h-4" />
          </div>
          <div className="w-11 h-11 rounded-full bg-[#121212] border border-white/15 flex items-center justify-center text-white/80 shadow-lg hover:border-white/50 transition-colors">
            <User className="w-4 h-4" />
          </div>
          <div className="w-11 h-11 rounded-full bg-[#121212] border border-white/15 flex items-center justify-center text-white/80 shadow-lg hover:border-white/50 transition-colors">
            <Globe className="w-4 h-4" />
          </div>
        </div>

        {/* Big Geometric Heading matching TikTok video */}
        <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-[1.08]">
          Welcome to my
        </h1>
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.08]">
          Portfolio Website
        </h2>

        {/* Pill URL Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleStart();
          }}
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#111111] border border-white/15 text-xs sm:text-sm font-mono text-white/70 hover:text-white hover:border-white/40 hover:bg-[#181818] transition-all duration-300 shadow-xl"
        >
          <span>www.affan.dev</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[11px] font-mono text-white/30 mt-6 tracking-widest uppercase">
          Click anywhere or press Enter to explore
        </p>
      </div>
    </div>
  );
}
