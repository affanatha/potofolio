"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Instagram, Linkedin, Github, Moon } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Mohon lengkapi semua kolom formulir.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-80px)] flex flex-col justify-between p-6 sm:p-10 lg:p-16 text-white overflow-y-auto">
      {/* Background dark atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#16241e]/50 via-[#0d100f]/90 to-[#0d100f] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-8">
        <p className="text-xs tracking-[0.25em] text-[#9ca39f] uppercase font-semibold">
          GET IN TOUCH
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif font-normal text-[#f5f2eb] mt-2 mb-3">
          Let&apos;s connect
        </h2>
        <p className="text-sm sm:text-base text-[#9ca39f] leading-relaxed max-w-xl mb-10">
          Jika kamu tertarik dengan saya atau ingin berkolaborasi, jangan ragu untuk menghubungi saya melalui kontak atau formulir di bawah.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links with Icons */}
          <div className="lg:col-span-6 space-y-5 pt-2">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className="flex items-center gap-4 text-sm sm:text-base text-[#d0d6d2] hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#161a18] border border-white/10 flex items-center justify-center text-[#9ca39f] group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <span className="truncate font-medium">{PERSONAL_INFO.contacts.email}</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm sm:text-base text-[#d0d6d2] hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#161a18] border border-white/10 flex items-center justify-center text-[#9ca39f] group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm">
                <Github className="w-5 h-5" />
              </div>
              <span className="truncate font-medium">{PERSONAL_INFO.contacts.githubHandle}</span>
            </a>

            {/* Instagram */}
            <a
              href={PERSONAL_INFO.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm sm:text-base text-[#d0d6d2] hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#161a18] border border-white/10 flex items-center justify-center text-[#9ca39f] group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="truncate font-medium">{PERSONAL_INFO.contacts.instagramHandle}</span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm sm:text-base text-[#d0d6d2] hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#161a18] border border-white/10 flex items-center justify-center text-[#9ca39f] group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="truncate font-medium">{PERSONAL_INFO.contacts.linkedinHandle}</span>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6 bg-[#131615]/85 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-sm text-[#9ca39f] max-w-sm mx-auto">
                  Terima kasih sudah menghubungi saya, {formData.name}. Saya akan segera membalas pesan Anda!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#b0b7b2] mb-1.5">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-2.5 text-sm rounded-xl dark-input placeholder:text-[#5d645f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b0b7b2] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Masukkan email kamu"
                    className="w-full px-4 py-2.5 text-sm rounded-xl dark-input placeholder:text-[#5d645f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b0b7b2] mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tulis pesan kamu..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl dark-input placeholder:text-[#5d645f] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-white text-[#0d100f] text-sm font-bold hover:bg-[#e4e8e5] transition-all group disabled:opacity-50 shadow-lg"
                >
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Integrated Slide Footer */}
      <div className="relative z-10 w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#828a85]">
        <div className="flex items-center space-x-2">
          <span className="text-[#adb4af] font-medium">{PERSONAL_INFO.name}</span>
          <span>•</span>
          <span>&copy; {currentYear}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Portfolio Presentation Slide</span>
          <span>|</span>
          <Moon className="w-3.5 h-3.5 text-[#9ca39f]" />
        </div>
      </div>
    </div>
  );
}
