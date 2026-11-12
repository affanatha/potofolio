"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarDarkProps {
  activeSection?: string;
}

export default function NavbarDark({ activeSection = "home" }: NavbarDarkProps) {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-sm tracking-wider text-white/90 group-hover:text-white transition-colors font-semibold">
            affan<span className="text-white/40">.dev</span>
          </span>
        </a>

        {/* Center/Right: Floating Glass Pill Nav (Desktop) */}
        <nav className="hidden md:flex items-center rounded-full border border-white/10 bg-[#121212]/80 backdrop-blur-xl p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {navLinks.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick Action / Status */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all font-mono"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-3 text-center py-3 rounded-xl bg-white/10 border border-white/15 text-sm font-mono text-white"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
