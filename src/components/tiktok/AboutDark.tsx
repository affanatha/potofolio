"use client";

import React from "react";
import Image from "next/image";
import { Download, FolderGit2, Sparkles, MapPin, GraduationCap, Code2, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutDark() {
  return (
    <section
      id="about"
      className="relative w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-28 text-white"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-white/[0.03] blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3.5 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
            ABOUT ME
          </span>
        </div>
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Affan Athaillah Harvi Pradita
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-2xl font-light">
          Pelajar Rekayasa Perangkat Lunak (RPL) SMK Telkom Malang dengan antusiasme tinggi dalam
          dunia frontend web development.
        </p>
      </div>

      {/* Main Grid: Info & Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Left Column: Biography & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Halo! Saya biasa dipanggil <strong className="text-white font-medium">Atha</strong>.
            Bagi saya, web development bukan hanya sekadar menulis baris kode, melainkan seni
            mengubah ide abstrak menjadi antarmuka visual yang hidup, intuitif, dan memberikan nilai
            nyata bagi penggunanya.
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Saat ini saya aktif mengeksplorasi ekosistem modern seperti{" "}
            <span className="text-white font-medium underline underline-offset-4 decoration-white/20">
              Next.js, React, TypeScript, dan Tailwind CSS
            </span>
            . Saya selalu berusaha menerapkan prinsip clean code, responsivitas tinggi, dan estetika
            desain minimalis yang rapi.
          </p>

          {/* Quote Pill */}
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/40" />
            <p className="font-mono text-xs sm:text-sm text-white/80 italic">
              "Turning ideas into clean, modern, and meaningful digital experiences."
            </p>
          </div>

          {/* Personal Info Grid Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-black/30">
              <MapPin className="w-4 h-4 text-white/50 shrink-0" />
              <div>
                <span className="block text-[10px] font-mono text-white/40 uppercase">Domisili</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">Malang, Indonesia</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-black/30">
              <GraduationCap className="w-4 h-4 text-white/50 shrink-0" />
              <div>
                <span className="block text-[10px] font-mono text-white/40 uppercase">Sekolah</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">SMK Telkom Malang</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-black/30">
              <Code2 className="w-4 h-4 text-white/50 shrink-0" />
              <div>
                <span className="block text-[10px] font-mono text-white/40 uppercase">Jurusan</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">Rekayasa Perangkat Lunak</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-black/30">
              <Award className="w-4 h-4 text-white/50 shrink-0" />
              <div>
                <span className="block text-[10px] font-mono text-white/40 uppercase">Fokus</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium">Frontend & UI/UX</span>
              </div>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10"
            >
              <Download className="w-4 h-4" />
              <span>Download CV / Resume</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white text-xs sm:text-sm hover:bg-white/10 hover:border-white/30 transition-all font-mono"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </a>
          </div>
        </div>

        {/* Right Column: Glowing Circular Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group">
            {/* Outer Glowing Pulsing Ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-white/20 via-zinc-400/10 to-transparent blur-xl group-hover:scale-105 transition-transform duration-700" />

            {/* Circular Border Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 border border-white/20 bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-xl shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/images/about-person.jpg"
                  alt="Affan Athaillah"
                  fill
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Pill badge floating on bottom of image */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-white/20 bg-[#121212]/90 backdrop-blur-md shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-white/90 whitespace-nowrap font-medium">
                  SMK Telkom Malang RPL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 transition-all group">
          <div className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-2 group-hover:translate-x-1 transition-transform">
            3+
          </div>
          <h4 className="text-sm font-semibold text-white/90 mb-1">
            Proyek Web Selesai
          </h4>
          <p className="text-xs text-white/45 leading-relaxed font-light">
            E-Commerce modern, sistem peminjaman perpustakaan sekolah, & landing page interaktif.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 transition-all group">
          <div className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-2 group-hover:translate-x-1 transition-transform">
            2024
          </div>
          <h4 className="text-sm font-semibold text-white/90 mb-1">
            Tahun Mulai Perjalanan
          </h4>
          <p className="text-xs text-white/45 leading-relaxed font-light">
            Memulai studi di SMK Telkom Malang dengan dedikasi penuh pada teknologi web.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 transition-all group">
          <div className="font-syne text-4xl sm:text-5xl font-extrabold text-white mb-2 group-hover:translate-x-1 transition-transform">
            100%
          </div>
          <h4 className="text-sm font-semibold text-white/90 mb-1">
            Komitmen Kualitas & Clean Code
          </h4>
          <p className="text-xs text-white/45 leading-relaxed font-light">
            Mengedepankan performa, kerapian kode TypeScript/React, dan antarmuka modern.
          </p>
        </div>
      </div>
    </section>
  );
}
