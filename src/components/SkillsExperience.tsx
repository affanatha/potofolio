"use client";

import React, { useState } from "react";
import { TIMELINE } from "@/data/portfolioData";
import { Sparkles } from "lucide-react";

export default function SkillsExperience() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillsList = [
    {
      id: "html",
      name: "HTML",
      tag: "Markup",
      level: "Semantic 5",
      delay: "0s",
      hoverBorder: "hover:border-[#e34f26] hover:shadow-[0_0_25px_rgba(227,79,38,0.45)]",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 2L2 20L12 23L22 20L20 2H4Z" fill="#E44D26"/>
          <path d="M12 21.2L20.2 18.7L21.8 3.6H12V21.2Z" fill="#F16529"/>
          <path d="M12 8.3H7.8L7.5 5.5H16.5L16.2 8.3H12V8.3ZM12 14.1L8.3 12.8L8.1 10.4H5.3L5.7 15.1L12 17.1V14.1ZM12 14.1H15.9L15.5 17.1L12 18.1V14.1ZM16.2 10.4H12V12.7H15.7L16.2 10.4Z" fill="white"/>
        </svg>
      ),
    },
    {
      id: "css",
      name: "CSS",
      tag: "Styling",
      level: "Flex & Grid",
      delay: "0.2s",
      hoverBorder: "hover:border-[#1572b6] hover:shadow-[0_0_25px_rgba(21,114,182,0.45)]",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 2L2 20L12 23L22 20L20 2H4Z" fill="#1572B6"/>
          <path d="M12 21.2L20.2 18.7L21.8 3.6H12V21.2Z" fill="#33A9DC"/>
          <path d="M12 8.3H16.2L16.5 5.5H7.5L8.1 12.7H12V8.3ZM12 14.1L8.3 12.8L8.1 10.4H5.3L5.7 15.1L12 17.1V14.1ZM12 14.1H15.9L15.5 17.1L12 18.1V14.1Z" fill="white"/>
        </svg>
      ),
    },
    {
      id: "js",
      name: "JavaScript",
      tag: "Language",
      level: "ES6+ Modern",
      delay: "0.4s",
      hoverBorder: "hover:border-[#f7df1e] hover:shadow-[0_0_25px_rgba(247,223,30,0.45)]",
      icon: (
        <div className="w-8 h-8 rounded bg-[#F7DF1E] flex items-end justify-end p-0.5 font-bold text-[#1a1a1a] text-xs leading-none">
          JS
        </div>
      ),
    },
    {
      id: "ts",
      name: "TypeScript",
      tag: "Type Safe",
      level: "Strict Mode",
      delay: "0.6s",
      hoverBorder: "hover:border-[#3178c6] hover:shadow-[0_0_25px_rgba(49,120,198,0.45)]",
      icon: (
        <div className="w-8 h-8 rounded bg-[#3178C6] flex items-end justify-end p-0.5 font-bold text-white text-xs leading-none">
          TS
        </div>
      ),
    },
    {
      id: "react",
      name: "React",
      tag: "Library",
      level: "Components & Hooks",
      delay: "0.1s",
      hoverBorder: "hover:border-[#61dafb] hover:shadow-[0_0_30px_rgba(97,218,251,0.55)]",
      icon: (
        <svg className="w-8 h-8 text-[#61DAFB] animate-spin-slow" viewBox="0 0 115.3 100" fill="currentColor">
          <path d="M57.6,40.7c-5.1,0-9.3,4.2-9.3,9.3s4.2,9.3,9.3,9.3s9.3-4.2,9.3-9.3S62.7,40.7,57.6,40.7z"/>
          <path d="M57.6,0C25.6,0,0,10.6,0,23.7c0,11.2,18.7,20.6,44.7,23.1c1.3-3.1,2.8-6,4.5-8.8C25.3,35.8,11.8,28.8,11.8,23.7 c0-6.7,20.4-14.4,45.8-14.4s45.8,7.7,45.8,14.4c0,5.1-13.5,12.1-37.4,14.3c1.7,2.8,3.2,5.7,4.5,8.8c26-2.5,44.7-11.9,44.7-23.1 C115.3,10.6,89.6,0,57.6,0z"/>
          <path d="M92.7,76.3c16-27.7,11.6-54.8,0.2-61.4c-9.8-5.6-26.6,0.3-42.3,13.9c1.9,2.8,3.7,5.9,5.2,9.1 c13.4-10.4,26.7-14.9,32.8-11.4c6,3.5,6.5,21.7-5.9,43.2c-12.4,21.5-31.5,33.5-37.5,30c-2.3-1.3-3.6-4.6-4-9.3 c-3.2,0.9-6.4,1.4-9.6,1.7c1.3,7.6,4.6,12.9,9.4,15.7C47.2,112.5,76.7,104,92.7,76.3z"/>
          <path d="M22.6,76.3c-16-27.7-11.6-54.8-0.2-61.4c9.8-5.6,26.6,0.3,42.3,13.9c-1.9,2.8-3.7,5.9-5.2,9.1 C46.1,27.5,32.8,23,26.7,26.5c-6,3.5-6.5,21.7,5.9,43.2c12.4,21.5,31.5,33.5,37.5,30c2.3-1.3,3.6-4.6,4-9.3 c3.2,0.9,6.4,1.4,9.6,1.7c-1.3,7.6-4.6,12.9-9.4,15.7C68.1,112.5,38.6,104,22.6,76.3z"/>
        </svg>
      ),
    },
    {
      id: "nextjs",
      name: "Next.js",
      tag: "Framework",
      level: "App Router & SSR",
      delay: "0.3s",
      hoverBorder: "hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
      icon: (
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-base shadow-sm">
          N
        </div>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      tag: "Utility CSS",
      level: "Responsive UI",
      delay: "0.5s",
      hoverBorder: "hover:border-[#38bdf8] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]",
      icon: (
        <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
    },
    {
      id: "git",
      name: "Git & GitHub",
      tag: "VCS",
      level: "Collaboration",
      delay: "0.7s",
      hoverBorder: "hover:border-[#f05032] hover:shadow-[0_0_25px_rgba(240,80,50,0.45)]",
      icon: (
        <svg className="w-8 h-8 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a1.37 1.37 0 0 1 1.94 0l1.45 1.45L9.4 8.62a1.86 1.86 0 0 0-1.8 2.37l-2.07 2.07a1.86 1.86 0 0 0-2.38 1.8 1.88 1.88 0 0 0 1.33.55 1.88 1.88 0 0 0 1.33.55 1.86 1.86 0 0 0 1.8-2.38l2.03-2.03v5.1a1.87 1.87 0 1 0 1.93 0V11.2a1.87 1.87 0 0 0 .84-.46l2.36 2.36a1.88 1.88 0 1 0 1.33-.55 1.88 1.88 0 0 0-1.33.55l-2.3-2.3a1.86 1.86 0 0 0 .15-1.92l2.37-2.37 6.42 6.42a1.37 1.37 0 0 1 0 1.94l-5.78 5.79a1.37 1.37 0 0 1-1.94 0L2.6 12.53a1.37 1.37 0 0 1 0-1.94z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-center p-6 sm:p-10 lg:p-16 text-white overflow-y-auto">
      {/* Background dark atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#182a20]/40 via-[#0d100f]/95 to-[#0d100f] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-8">
        {/* Left Column: MY SKILLS with Animated Floating Tech Grid */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs tracking-[0.25em] text-[#9ca39f] uppercase font-semibold">
                MY SKILLS
              </p>
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Interactive Stack
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl leading-tight font-serif font-normal text-[#f5f2eb] mt-2 mb-3">
              Tools I use
            </h2>
            <p className="text-sm text-[#9ca39f] leading-relaxed mb-6 max-w-md">
              Saya terus belajar dan mengembangkan kemampuan dengan berbagai tools dan teknologi modern yang saya gunakan.
            </p>
          </div>

          {/* Animated Wave Floating Grid of 8 Skills */}
          <div className="grid grid-cols-4 gap-y-6 gap-x-3 text-center pt-2">
            {skillsList.map((skill) => (
              <div
                key={skill.id}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{ animationDelay: skill.delay }}
                className="animate-icon-float flex flex-col items-center group relative cursor-pointer"
              >
                {/* Floating Skill Level Tooltip on Hover */}
                {activeSkill === skill.id && (
                  <div className="absolute -top-8 z-30 px-2.5 py-1 rounded-md bg-[#1d2320] border border-white/20 text-[10px] font-mono text-white shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200">
                    {skill.level}
                  </div>
                )}

                {/* Animated Skill Icon Container */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#151917] border border-white/10 flex items-center justify-center p-3 transition-all duration-400 shadow-md group-hover:scale-115 group-hover:-translate-y-1.5 ${skill.hoverBorder}`}
                >
                  {skill.icon}
                </div>

                {/* Name Label */}
                <span className="text-xs font-medium text-[#c0c6c2] mt-2 group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </span>

                {/* Small category indicator */}
                <span className="text-[10px] text-[#717873] group-hover:text-[#9ea6a0] transition-colors">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: EXPERIENCE / My Journey (2024 – Sekarang) */}
        <div className="lg:col-span-6 flex flex-col justify-between pt-8 lg:pt-0">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#9ca39f] uppercase font-semibold">
              EXPERIENCE
            </p>
            <h2 className="text-4xl sm:text-5xl leading-tight font-serif font-normal text-[#f5f2eb] mt-2 mb-8">
              My Journey
            </h2>

            {/* Vertical Timeline */}
            <div className="relative pl-8 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/20">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline circle node with glowing pulse */}
                  <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-[#0d100f] group-hover:scale-125 group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-200" />

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 tracking-wide border border-emerald-500/20 mb-1">
                    {item.period}
                  </span>
                  <p className="text-base text-[#e5ebe7] font-semibold leading-relaxed">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9ca49f] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Handwritten Quote bottom-right */}
          <div className="mt-10 text-right select-none pointer-events-none pr-4">
            <p className="font-script text-2xl sm:text-3xl text-[#f0ede6] leading-none transform -rotate-3">
              Keep learning <br />
              <span className="text-xl sm:text-2xl">Keep growing :)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
