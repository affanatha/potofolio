"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <>
      <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-center p-6 sm:p-10 lg:p-16 text-[#191c1a] paper-pattern overflow-y-auto">
        <div className="relative z-10 max-w-6xl mx-auto w-full py-8">
          {/* Header Row */}
          <p className="text-xs tracking-[0.25em] text-[#6b665c] uppercase font-semibold">
            MY PROJECTS
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end mb-8 mt-2">
            <div className="lg:col-span-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif font-normal text-[#171a18]">
                Some of my <br className="hidden sm:inline" />
                works
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base text-[#57534a] leading-relaxed">
                Berikut adalah beberapa proyek yang pernah saya kerjakan. Semua proyek ini dibuat dengan semangat belajar dan eksplorasi teknologi web modern.
              </p>
            </div>
          </div>

          {/* 3 Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="project-card rounded-2xl p-4 flex flex-col justify-between hover:border-[#b8af9c] cursor-pointer group shadow-sm bg-[#fbf9f4]"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Screenshot Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#e2dacf] bg-neutral-900 mb-4 shadow-xs">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-semibold text-[#181b19] font-sans group-hover:text-[#2d5236] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5f5a50] leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#ede6d8]">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#ede6da] text-[#4a463d]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Detail Link */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1c1f1d] hover:text-[#2d5236] hover:gap-2.5 transition-all"
                  >
                    Lihat Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal View for Project */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
