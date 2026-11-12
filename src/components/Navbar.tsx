"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export default function Navbar({ currentSlide, onSelectSlide }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Skills", index: 3 },
    { label: "Education", index: 4 },
    { label: "Contact", index: 5 },
  ];

  // Determine navbar theme based on current slide theme
  // Slide 0: Dark, Slide 1: Cream, Slide 2: Cream, Slide 3: Dark, Slide 4: Cream, Slide 5: Dark
  const isDarkSlide = currentSlide === 0 || currentSlide === 3 || currentSlide === 5;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 py-3.5 sm:py-4 px-6 sm:px-10 ${
        isDarkSlide
          ? "bg-[#0d100f]/80 text-white border-b border-white/10"
          : "bg-[#f5f1e8]/85 text-[#191c1a] border-b border-[#ded7c8]"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onSelectSlide(0)}
          className="text-2xl sm:text-3xl font-serif tracking-wider font-bold hover:opacity-80 transition-opacity flex items-center gap-1 text-left"
        >
          <span className="italic font-normal">A</span>FFAN
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = currentSlide === link.index;
            return (
              <button
                key={link.label}
                onClick={() => onSelectSlide(link.index)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                  isActive
                    ? isDarkSlide
                      ? "text-white font-semibold"
                      : "text-[#181a18] font-semibold"
                    : isDarkSlide
                    ? "text-[#9ca39f] hover:text-white"
                    : "text-[#67635a] hover:text-[#181a18]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isDarkSlide ? "bg-white" : "bg-[#181a18]"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Slide Counter Badge */}
        <div className="hidden sm:flex items-center gap-2">
          <span
            className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${
              isDarkSlide
                ? "bg-white/10 text-white/90 border-white/20"
                : "bg-black/5 text-[#333] border-black/10"
            }`}
          >
            0{currentSlide + 1} / 06
          </span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden mt-3 pt-4 pb-2 border-t px-2 flex flex-col space-y-2 ${
            isDarkSlide ? "border-white/10" : "border-black/10"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = currentSlide === link.index;
            return (
              <button
                key={link.label}
                onClick={() => {
                  onSelectSlide(link.index);
                  setIsOpen(false);
                }}
                className={`text-left text-sm py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? isDarkSlide
                      ? "bg-white/10 text-white font-bold"
                      : "bg-black/10 text-black font-bold"
                    : isDarkSlide
                    ? "text-[#a0a6a2] hover:text-white"
                    : "text-[#555] hover:text-black"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono opacity-60">0{link.index + 1}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
