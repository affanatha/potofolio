"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PERSONAL_INFO;

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-center p-6 sm:p-10 lg:p-16 text-[#191c1a] paper-pattern overflow-y-auto">
      {/* Botanical floral sketch watermark on the right */}
      <div className="absolute right-6 bottom-4 w-48 h-64 opacity-20 pointer-events-none select-none overflow-hidden text-[#5a564c]">
        <svg viewBox="0 0 120 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M60 190 Q65 120 50 20" strokeLinecap="round"/>
          <path d="M56 150 Q40 135 30 142 Q45 152 56 150 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M58 130 Q78 115 88 122 Q72 134 58 130 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M54 100 Q35 85 24 92 Q42 104 54 100 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M52 70 Q70 55 82 60 Q66 74 52 70 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M50 40 Q38 25 32 30 Q44 42 50 40 Z" fill="currentColor" fillOpacity="0.3"/>
          <path d="M50 20 Q54 5 60 8 Q56 22 50 20 Z" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full py-8">
        <p className="text-xs tracking-[0.25em] text-[#6b665c] uppercase font-semibold">
          EDUCATION
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif font-normal text-[#171a18] mt-2 mb-8">
          My Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left School Card with Prominent Enlarged School Photo */}
          <div className="lg:col-span-7 bg-[#fcfaf5] rounded-3xl p-6 sm:p-7 border border-[#e4ded0] shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-xl transition-all group">
            {/* Enlarged School Photo */}
            <div className="relative w-48 sm:w-56 lg:w-64 h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shrink-0 border border-[#dfd8ca] bg-neutral-100 shadow-md">
              <Image
                src="/images/education-telkom.png"
                alt="Gedung SMK TELKOM MALANG"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* School Info */}
            <div className="space-y-3 text-center sm:text-left my-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-[#e32726]/10 text-[#d32726] text-xs font-mono font-bold tracking-wider uppercase border border-[#e32726]/20">
                SMK TELKOM MALANG
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#181a18]">
                {education.school}
              </h3>
              <p className="text-base sm:text-lg text-[#4a4740] font-medium">
                {education.major}
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede6da] text-xs text-[#4a463d] font-mono font-semibold">
                <span>Periode:</span>
                <span className="text-[#181a18] font-bold">{education.years}</span>
              </div>
            </div>
          </div>

          {/* Right Description & Quote */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-0">
            <p className="text-sm sm:text-base text-[#4c4840] leading-relaxed">
              {education.description}
            </p>

            {/* Handwritten Note "Ilmu hari ini, masa depan nanti" */}
            <div className="pt-4 select-none pointer-events-none">
              <p className="font-script text-3xl sm:text-4xl text-[#262420] tracking-wide transform -rotate-2">
                {education.quote}
              </p>
              <div className="w-44 h-0.5 bg-[#4c4840] mt-1 opacity-60 rounded transform -rotate-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
