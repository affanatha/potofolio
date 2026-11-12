"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, MapPin, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onNavigateToProjects?: () => void;
  onNextSlide?: () => void;
}

export default function HeroSection({
  onNavigateToProjects,
  onNextSlide,
}: HeroSectionProps) {
  // Rotating tech highlights
  const techPills = ["Next.js", "React", "TypeScript", "Tailwind CSS"];
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techPills.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [techPills.length]);

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-between p-6 sm:p-10 lg:p-16 text-white overflow-hidden">
      {/* Dynamic Animated Ambient Background Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow [animation-delay:2s]" />

      {/* Background Dark Forest Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#182920]/60 via-[#0d100f]/90 to-[#0d100f] pointer-events-none" />

      {/* Grid Pattern Watermark Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto py-6">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Status Badge with Glowing Live Dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium tracking-wider text-[#d0d6d2] uppercase">
              HELLO, I&apos;M AFFAN
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs font-medium text-emerald-400">
              Open to Work
            </span>
          </div>

          {/* Heading with Serif Typography & Shimmer */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] font-serif font-normal text-[#f5f2eb]">
              Affan Athaillah <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0ede4] to-[#a3aba5]">
                Harvi Pradita
              </span>
            </h1>
          </div>

          {/* Subtitle with Animated Rotating Tech Pill */}
          <div className="flex flex-wrap items-center gap-2.5 text-base sm:text-lg text-[#d0d6d2]">
            <span className="font-semibold text-white">Frontend Developer</span>
            <span className="text-[#888f8a]">&amp;</span>
            <span className="text-[#cbd2ce]">Web Enthusiast</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-xs font-mono text-emerald-300 border border-emerald-500/30 transition-all duration-300">
              <Sparkles className="w-3 h-3 text-emerald-400 animate-spin [animation-duration:8s]" />
              {techPills[currentTech]}
            </span>
          </div>

          {/* Short Bio */}
          <p className="text-sm sm:text-base text-[#9da4a0] leading-relaxed max-w-lg">
            {PERSONAL_INFO.heroBio}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateToProjects}
              className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0d100f] text-sm font-bold hover:bg-[#eaece9] hover:gap-3.5 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] group"
            >
              Lihat Proyek Saya
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {onNextSlide && (
              <button
                onClick={onNextSlide}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white text-sm font-semibold transition-all duration-200 backdrop-blur-sm group"
              >
                Tentang Saya
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Person Portrait with Floating Badges */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
          <div className="relative group">
            {/* Glowing Ambient Aura Behind the Photo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Main Portrait Card */}
            <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[430px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#121614]">
              <Image
                src="/images/hero-affan.jpg"
                alt="Affan Athaillah Harvi Pradita"
                fill
                className="object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d100f]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Modern Badge #1: Top Left (Next.js & Web) */}
            <div className="absolute -top-4 -left-6 sm:-left-8 z-30 animate-float-slow">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#141816]/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-medium text-white">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8e9590] uppercase font-mono">Specialist</p>
                  <p className="font-semibold text-white">Web Frontend</p>
                </div>
              </div>
            </div>

            {/* Floating Modern Badge #2: Bottom Left (Location & School) */}
            <div className="absolute bottom-6 -left-6 sm:-left-10 z-30 animate-float-reverse">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#141816]/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-medium text-white">
                <div className="w-6 h-6 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8e9590] uppercase font-mono">SMK Telkom</p>
                  <p className="font-semibold text-white">Malang, ID</p>
                </div>
              </div>
            </div>

            {/* Handwritten Note with Animated Twinkling Star */}
            <div className="absolute -bottom-5 -right-3 sm:-right-8 transform rotate-[-8deg] pointer-events-none select-none z-30">
              <div className="text-white font-script text-2xl sm:text-3xl leading-none tracking-wide text-right drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
                Small steps <br />
                <span className="text-xl sm:text-2xl">big dreams</span>{" "}
                <span className="animate-twinkle text-amber-300">☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons (Bottom Left) */}
      <div className="relative z-10 flex items-center space-x-4 pt-4 border-t border-white/10">
        <a
          href={PERSONAL_INFO.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#c2c8c4] hover:text-white hover:border-emerald-400/80 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
        >
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        <a
          href={PERSONAL_INFO.contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#c2c8c4] hover:text-white hover:border-pink-400/80 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)] transition-all duration-300"
        >
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href={PERSONAL_INFO.contacts.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#c2c8c4] hover:text-white hover:border-blue-400/80 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300"
        >
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
