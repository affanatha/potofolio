"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  CheckCircle2,
  Award,
  Layers,
  Sparkles,
  Code2,
} from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "tech">("projects");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialId: string;
    skills: string[];
  } | null>(null);

  // Certificates list for Affan
  const certificates = [
    {
      id: "cert-telkom-rpl",
      title: "Kompetensi Keahlian Rekayasa Perangkat Lunak",
      issuer: "SMK Telkom Malang",
      date: "2024 - Sekarang",
      image: "/images/education-telkom.png",
      credentialId: "SMKTELKOM-RPL-2024-0891",
      skills: ["Software Engineering", "Algorithms", "Web Development", "Database Management"],
    },
    {
      id: "cert-frontend-dev",
      title: "Junior Web Developer & Frontend Specialist",
      issuer: "Dicoding Academy & BNSP",
      date: "2024",
      image: "/images/project-ecommerce.jpg",
      credentialId: "DCD-FE-99214732",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: "cert-git-github",
      title: "Git & Collaborative Version Control Essentials",
      issuer: "GitHub Education",
      date: "2024",
      image: "/images/project-library.jpg",
      credentialId: "GH-EDU-MALANG-0422",
      skills: ["Git Workflow", "Branching", "CI/CD Basics", "Open Source"],
    },
  ];

  // Tech stack list
  const techStack = [
    {
      name: "React.js",
      category: "Frontend Library",
      desc: "Component-driven interactive web UI",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#61DAFB]">
          <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "Fullstack Framework",
      desc: "SSR, App Router & optimal performance",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.87 14.28L8.68 7.39V6.2h2.09v7.7l4.85-6.32h2.25v10.7h-2v-2z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      desc: "Type safety and scalable maintainability",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3178C6]">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8h-7v2.5h2.2v7.5h2.6v-7.5h2.2V8zm4.3 5.4c0-.7.3-1.2.9-1.5.6-.3 1.4-.5 2.5-.6l1-.1v-.7c0-.4-.1-.7-.4-.9-.3-.2-.7-.3-1.2-.3-.5 0-.9.1-1.3.3-.4.2-.6.5-.7 1h-2.3c.1-.8.5-1.5 1.2-2s1.8-.8 3.1-.8c1.3 0 2.4.3 3.1.9.7.6 1.1 1.4 1.1 2.5V18h-2.3v-1.1c-.4.4-.8.7-1.4.9-.6.2-1.3.3-2 .3-1.1 0-2-.3-2.6-.9-.6-.6-.9-1.3-.9-2.2zm4.4.7c.4 0 .7-.1 1-.3.3-.2.5-.5.7-.9v-1.4l-.8.1c-.7.1-1.2.2-1.5.4-.3.2-.4.5-.4.9 0 .4.1.6.3.8.2.3.4.4.7.4z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Styling Framework",
      desc: "Utility-first modern styling system",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#38BDF8]">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      desc: "ES6+, DOM Manipulation & Web APIs",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5v-1.6c.5.3 1.1.5 1.7.5.9 0 1.4-.4 1.4-1.2v-6.7h2.1v6.7c0 1.8-1.1 2.8-3.3 2.8-.7 0-1.4-.2-1.9-.5zm7.3 0c-1.3 0-2.3-.4-3-1.1l1.1-1.5c.5.5 1.1.8 1.8.8.7 0 1.2-.3 1.2-.8 0-.4-.3-.7-1.1-.9l-.9-.3c-1.4-.4-2-1.2-2-2.3 0-1.4 1.2-2.4 2.9-2.4 1 0 1.9.3 2.6.8l-1 1.4c-.5-.4-1-.6-1.6-.6-.6 0-1 .3-1 .7 0 .4.3.6 1 .8l.9.3c1.6.5 2.2 1.3 2.2 2.5 0 1.5-1.2 2.6-3.1 2.6z" fill="#000" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      category: "Markup Standard",
      desc: "Semantic structure & accessibility",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#E34F26]">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.8 5.7h-9l.2 2.2h8.6l-.6 6.8-5 1.4-5-1.4-.3-3.6h2.2l.2 1.8 2.9.8 2.9-.8.3-3.4H6.5l-.6-6.4h12.2l-.3 2.6z" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      category: "Stylesheet Standard",
      desc: "Flexbox, CSS Grid & keyframe animations",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1572B6]">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.8 5.7h-9l.2 2.2h8.6l-.6 6.8-5 1.4-5-1.4-.3-3.6h2.2l.2 1.8 2.9.8 2.9-.8.3-3.4H6.5l-.6-6.4h12.2l-.3 2.6z" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      desc: "Source code branching & team workflow",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#F05032]">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4c-.3.3-.5.7-.5 1.1 0 .4.2.8.5 1.1l2.4 2.4v5.3c-.6.3-1.1.9-1.3 1.5l-2.6-1.3c0-.2.1-.4.1-.6 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.5 0 1-.2 1.4-.5l2.7 1.4c0 .2-.1.4-.1.6 0 1.1.9 2 2 2s2-.9 2-2v-5.4c.6-.3 1.1-.9 1.3-1.5l2.5 2.5c.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l1.6-1.6c.6-.6.6-1.5 0-2.1z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Backend Runtime",
      desc: "NPM packages & server-side execution",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#339933]">
          <path d="M12 2L3 7.2v10.4L12 22l9-4.4V7.2L12 2zm0 2.2l6.8 3.9v7.9L12 19.8l-6.8-3.8V8.1L12 4.2z" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "Relational Database",
      desc: "Data schemas, SQL queries & relational models",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4479A1]">
          <path d="M12 3C7.5 3 4 5 4 7.5S7.5 12 12 12s8-2 8-4.5S16.5 3 12 3zm0 10.5c-4.5 0-8-1.5-8-3.5v3c0 2 3.5 3.5 8 3.5s8-1.5 8-3.5v-3c0 2-3.5 3.5-8 3.5zm0 5c-4.5 0-8-1.5-8-3.5v3c0 2 3.5 3.5 8 3.5s8-1.5 8-3.5v-3c0 2-3.5 3.5-8 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-24 text-white relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />

      {/* Section Header matching TikTok */}
      <div className="text-center mb-10">
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Portfolio Showcase
        </h2>
        <p className="text-white/55 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-light">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      {/* 3-Tab Pill Filter */}
      <div className="flex justify-center mb-14">
        <div className="w-full max-w-2xl rounded-full border border-white/10 bg-white/5 p-1.5 flex gap-1.5 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-white/15 text-white shadow-md border border-white/15"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex-1 rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-white/15 text-white shadow-md border border-white/15"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex-1 rounded-full py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "tech"
                ? "bg-white/15 text-white shadow-md border border-white/15"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            Tech Stack
          </button>
        </div>
      </div>

      {/* TAB 1: PROJECTS */}
      {activeTab === "projects" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/25 transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              {/* Image Preview */}
              <div className="relative w-full aspect-video overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/70 text-white/80 border border-white/15 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-syne text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Details Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/80 hover:text-white transition-colors group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
                        title="GitHub Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: CERTIFICATES */}
      {activeTab === "certificates" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-500 cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              {/* Certificate Preview Image */}
              <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/60 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {cert.date}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/15 text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-colors">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-1.5">
                  {cert.issuer}
                </span>
                <h3 className="font-syne text-lg font-bold text-white mb-2 leading-snug group-hover:text-white">
                  {cert.title}
                </h3>
                <p className="font-mono text-[11px] text-white/40 mb-4">
                  ID: {cert.credentialId}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-white/70"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: TECH STACK */}
      {activeTab === "tech" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 flex flex-col items-center text-center justify-center hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              {/* Subtle top sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>

              <h4 className="font-syne text-sm font-bold text-white mb-1">
                {tech.name}
              </h4>
              <span className="font-mono text-[10px] text-white/45 tracking-wide">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0e0e0e] p-6 sm:p-8 text-white relative shadow-2xl custom-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/15">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/15 text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-light">
              {selectedProject.longDescription}
            </p>

            {/* Key Features List */}
            <div className="mb-8">
              <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">
                Key Features & Architecture
              </h4>
              <div className="space-y-2.5">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-white/80 font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs sm:text-sm hover:bg-white/10 transition"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl border border-white/20 bg-[#0e0e0e] p-6 sm:p-8 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/15 bg-neutral-900">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                {selectedCert.issuer} • {selectedCert.date}
              </span>
              <span className="font-mono text-xs text-white/40">
                ID: {selectedCert.credentialId}
              </span>
            </div>

            <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-4">
              {selectedCert.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {selectedCert.skills.map((sk) => (
                <span
                  key={sk}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/15 text-white/80"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
