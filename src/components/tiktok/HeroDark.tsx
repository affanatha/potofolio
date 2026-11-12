"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function HeroDark() {
  // Cycling typewriter texts
  const titles = [
    "Frontend Developer",
    "SMK Telkom Malang Student",
    "Next.js & React Enthusiast",
    "UI/UX Web Crafter",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTextIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, typingSpeed]);

  // 3D Card tilt effect on mouse move
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[720px] max-h-[880px] flex items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow orbs matching reference */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-white/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-zinc-400/10 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Available for work pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-white/70 uppercase tracking-widest">
              ✦ Available for work
            </span>
          </div>

          {/* Massive Display Heading in Syne */}
          <div className="space-y-1 mb-5">
            <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.02]">
              Frontend
            </h1>
            <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-[#8c8c8c] leading-[1.02]">
              Developer
            </h1>
          </div>

          {/* Dynamic Typewriter Role */}
          <div className="min-h-[30px] mb-6 flex items-center">
            <span className="font-mono text-sm sm:text-base text-white/70 tracking-wide font-medium">
              {">"} {displayText}
            </span>
            <span className="inline-block w-2.5 h-4 ml-1 bg-white animate-pulse" />
          </div>

          {/* Short Bio */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-light">
            Menciptakan website modern dengan tampilan clean, responsif, dan elegan.
            Mengubah ide dan desain menjadi pengalaman digital yang menarik, cepat,
            dan mudah digunakan.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {["TypeScript", "React.js", "Tailwind CSS", "Next.js"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-white/70 border border-white/15 rounded-full px-3.5 py-1.5 bg-[#121212]/60 backdrop-blur-sm hover:border-white/40 hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="space-y-2.5 font-mono text-xs sm:text-sm text-white/45">
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <span className="text-white/80">↓</span>
              <span>explore my work below</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <span className="text-white/80">↗</span>
              <span>open to full-time & freelance opportunities</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Hanging Lanyard with ID Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          <div
            className="relative flex flex-col items-center select-none"
            style={{ perspective: "1000px" }}
          >
            {/* Lanyard Top Strap hanging from ceiling */}
            <div className="w-12 h-32 relative flex justify-center overflow-hidden">
              {/* Strap Texture */}
              <div className="w-7 h-full bg-[#151515] border-x border-white/10 shadow-2xl relative flex flex-col items-center justify-around">
                <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:4px_4px] opacity-60" />
                <span className="[writing-mode:vertical-rl] font-mono text-[9px] tracking-widest text-white/30 rotate-180 uppercase font-semibold">
                  AFFAN • RPL MALANG
                </span>
              </div>
            </div>

            {/* Metal Carabiner Clip & Badge Ring */}
            <div className="relative -mt-1 z-20 flex flex-col items-center">
              {/* Metallic clamp */}
              <div className="w-8 h-4 rounded-sm bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 shadow-md border border-white/30 flex items-center justify-center">
                <div className="w-3 h-1 bg-zinc-800 rounded-full" />
              </div>
              {/* Metal ring */}
              <div className="w-5 h-6 rounded-full border-2 border-zinc-300 bg-transparent -mt-1 shadow-inner" />
            </div>

            {/* Swaying & 3D Interactive ID Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className={`relative -mt-2 transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing ${
                !isHovered ? "animate-lanyard" : ""
              }`}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
                  isHovered ? 1.04 : 1
                }, ${isHovered ? 1.04 : 1}, 1)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Badge Slot Cutout */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full bg-[#050505] border border-white/20 z-30 shadow-inner" />

              {/* Glossy ID Card Badge Body */}
              <div className="w-[280px] sm:w-[310px] rounded-3xl p-5 border border-white/15 bg-gradient-to-b from-[#181818]/90 via-[#0e0e0e]/95 to-[#080808] backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden">
                {/* Gloss reflection sheen */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pt-3 pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-white/50">
                      IDENTIFICATION CARD
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-white/40 tracking-widest font-semibold">
                    2024-2027
                  </span>
                </div>

                {/* Affan's Portrait Photo */}
                <div className="relative w-full aspect-[4/3.8] rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 mb-4 shadow-inner group">
                  <Image
                    src="/images/about-person.jpg"
                    alt="Affan Athaillah"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                      RPL DEPT
                    </span>
                    <span className="text-white/60">SMK TELKOM</span>
                  </div>
                </div>

                {/* Identity Information */}
                <div className="space-y-1 mb-4 text-center">
                  <h3 className="font-syne text-lg font-bold text-white tracking-tight">
                    Affan Athaillah H. P.
                  </h3>
                  <p className="font-mono text-xs text-white/60">
                    Frontend Developer & Student
                  </p>
                </div>

                {/* Barcode & Signature Section */}
                <div className="pt-3 border-t border-white/10 flex flex-col items-center">
                  {/* Stylized Barcode */}
                  <div className="flex items-center gap-[2px] h-6 mb-1.5 opacity-60">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 2, 1, 4, 2, 1].map(
                      (w, i) => (
                        <div
                          key={i}
                          className="bg-white h-full rounded-[0.5px]"
                          style={{ width: `${w}px` }}
                        />
                      )
                    )}
                  </div>
                  <span className="font-mono text-[9px] text-white/35 tracking-[0.25em]">
                    *AFFAN-NISN-MALANG*
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase hover:text-white transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
