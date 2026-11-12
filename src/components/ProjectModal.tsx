"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#fcfbf9] text-[#191c1a] rounded-2xl shadow-2xl overflow-hidden border border-[#e4ded0] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e2d4] bg-[#f7f3ec]">
          <div>
            <span className="text-[11px] tracking-widest text-[#787265] uppercase font-bold">
              PROJECT DETAIL
            </span>
            <h3 className="text-xl font-serif font-bold text-[#171a18]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#eae4d5] text-[#555] hover:text-[#111] transition-colors"
            aria-label="Tutup Detail Proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Project Image Preview */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#dfd7c6] shadow-sm bg-neutral-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#ede7dc] text-[#3e3b34] border border-[#ded5c5]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#716c60] mb-1.5">
              Deskripsi Proyek
            </h4>
            <p className="text-sm text-[#3b3832] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#716c60] mb-2">
                Fitur Utama
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#45423b]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2d5236] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-3 border-t border-[#e8e2d4] flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl || "https://github.com/affanatha"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191c1a] text-white text-xs font-medium hover:bg-[#2c332e] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
            <a
              href={project.demoUrl || "#"}
              onClick={(e) => {
                if (project.demoUrl === "#") {
                  e.preventDefault();
                  alert("Demo preview sedang dalam proses deployment!");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#191c1a] border border-[#d2c9b8] text-xs font-medium hover:bg-[#f3eee4] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
