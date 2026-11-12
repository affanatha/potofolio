"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/tiktok/SplashScreen";
import NavbarDark from "@/components/tiktok/NavbarDark";
import HeroDark from "@/components/tiktok/HeroDark";
import AboutDark from "@/components/tiktok/AboutDark";
import PortfolioShowcase from "@/components/tiktok/PortfolioShowcase";
import ContactComments from "@/components/tiktok/ContactComments";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  // Check nosplash query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("nosplash") === "true" || params.get("nosplash") === "1") {
      setShowSplash(false);
    }
  }, []);

  // Close splash screen on Esc, Enter, or Space key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSplash && (e.key === "Enter" || e.key === " " || e.key === "Escape")) {
        setShowSplash(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSplash]);

  return (
    <main className="min-h-screen bg-[#050505] text-[#ededed] relative selection:bg-white selection:text-black">
      {/* Welcome Splash Screen matching TikTok intro */}
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}

      {/* Global Background Ambient Lighting & Cyber Grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-white blur-[120px] opacity-20" />
        <div className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-zinc-300 blur-[130px] opacity-15" />
        <div className="absolute bottom-10 left-10 w-52 h-52 md:w-80 md:h-80 rounded-full bg-zinc-500 blur-[140px] opacity-15" />
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-white blur-[120px] opacity-15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      {/* Fixed Top Navbar */}
      <NavbarDark />

      {/* Main Sections */}
      <div className="relative z-10 flex flex-col">
        <HeroDark />
        <AboutDark />
        <PortfolioShowcase />
        <ContactComments />
      </div>
    </main>
  );
}
