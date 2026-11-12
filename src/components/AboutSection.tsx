"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-center p-6 sm:p-10 lg:p-16 text-[#191c1a] paper-pattern overflow-y-auto">
      <div className="relative z-10 max-w-6xl mx-auto w-full py-6">
        <p className="text-xs tracking-[0.25em] text-[#6b665c] uppercase font-semibold">
          ABOUT ME
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif font-normal text-[#171a18] mt-2 mb-6">
          A little about <br className="hidden sm:inline" />
          myself
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text & Info Details */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-[#4a4740] leading-relaxed">
              {PERSONAL_INFO.aboutBio}
            </p>

            {/* Profile Info Table */}
            <div className="pt-2 space-y-2 text-sm sm:text-base bg-white/70 p-6 rounded-2xl border border-[#ded7c8] shadow-xs">
              {PERSONAL_INFO.details.map((item) => (
                <div key={item.label} className="grid grid-cols-12 py-1">
                  <span className="col-span-4 sm:col-span-4 text-[#5c5850] font-medium">
                    {item.label}
                  </span>
                  <span className="col-span-1 text-center text-[#5c5850]">:</span>
                  <span className="col-span-7 text-[#191c1a] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Enlarged Polaroid Photo */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-2 lg:pt-0">
            {/* Enlarged Single Polaroid Photo */}
            <div className="relative group z-10 w-64 sm:w-72 lg:w-80 transform transition-transform duration-300 hover:rotate-1">
              {/* Kraft Masking Tape */}
              <div className="kraft-tape -top-3.5 left-1/2 -translate-x-1/2 w-24 rotate-1" />
              
              {/* Polaroid Frame */}
              <div className="polaroid-frame rounded-sm">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 rounded-xs">
                  <Image
                    src="/images/about-person.jpg"
                    alt="Affan Portrait Polaroid"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Handwritten Note "Better Version of Me ~" */}
            <div className="mt-5 text-center pointer-events-none select-none z-20">
              <p className="font-script text-2xl sm:text-3xl text-[#2b2823] tracking-wide transform -rotate-2">
                Better Version of Me ~
              </p>
              <div className="w-36 h-0.5 bg-[#4a453e] mx-auto mt-1 opacity-60 rounded transform -rotate-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
