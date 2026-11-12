"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Upload,
  Heart,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Pin,
  Image as ImageIcon,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CommentItem {
  id: string;
  name: string;
  avatarBg: string;
  time: string;
  text: string;
  image?: string;
  likes: number;
  isLiked?: boolean;
  isPinned?: boolean;
}

export default function ContactComments() {
  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSent(true);
    setTimeout(() => {
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setContactSent(false);
    }, 4000);
  };

  // Guestbook Comments State
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState<string | null>(null);

  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "c-1",
      name: "Rifqi Aliya",
      avatarBg: "from-blue-500 to-indigo-600",
      time: "1 day ago",
      text: "Keren banget portofolionya Fan! Animasi lanyard ID card nya smooth banget. Sukses terus belajarnya di SMK Telkom!",
      likes: 18,
      isLiked: false,
      isPinned: true,
    },
    {
      id: "c-2",
      name: "Daffa Ramadhan",
      avatarBg: "from-emerald-500 to-teal-600",
      time: "3 days ago",
      text: "Desain dark minimalisnya mantap, perpaduan Next.js dan Tailwind rapi pol.",
      likes: 12,
      isLiked: false,
    },
    {
      id: "c-3",
      name: "Siti Nurhaliza",
      avatarBg: "from-purple-500 to-pink-600",
      time: "5 days ago",
      text: "Website nya responsif dan estetik banget. Semangat terus Affan!",
      likes: 9,
      isLiked: false,
    },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCommentImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const gradients = [
      "from-rose-500 to-orange-500",
      "from-violet-500 to-purple-600",
      "from-amber-500 to-yellow-600",
      "from-cyan-500 to-blue-600",
    ];
    const randomBg = gradients[Math.floor(Math.random() * gradients.length)];

    const newComment: CommentItem = {
      id: "c-" + Date.now(),
      name: commentName.trim(),
      avatarBg: randomBg,
      time: "Just now",
      text: commentText.trim(),
      image: commentImage || undefined,
      likes: 1,
      isLiked: true,
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentText("");
    setCommentImage(null);
  };

  const handleToggleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const isLiked = !c.isLiked;
          return {
            ...c,
            isLiked,
            likes: isLiked ? c.likes + 1 : c.likes - 1,
          };
        }
        return c;
      })
    );
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1500px] mx-auto px-5 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 lg:pt-28 pb-20 text-white relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-white/[0.02] blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
          Contact Me
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
          Have something in mind? Send a message and let's connect.
        </p>
      </div>

      {/* Split Grid: Left (Contact & Socials) | Right (Guestbook Comments) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* LEFT COLUMN: Hubungi Saya & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold mb-2 text-white">
              Hubungi Saya
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mb-7 font-light">
              Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-black/30 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-black/30 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-white/40 w-4 h-4" />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-black/30 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/40 outline-none resize-none transition duration-200 focus:border-white focus:ring-1 focus:ring-white/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl py-3.5 bg-white text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-lg active:scale-[0.99]"
              >
                {contactSent ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Pesan Terkirim! Terima kasih.</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Connect With Me Social Grid */}
          <div className="border-t border-white/10 pt-6 mt-8">
            <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3">
              Connect With Me
            </p>

            {/* LinkedIn Highlight Card */}
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3.5 mb-3 flex items-center justify-between hover:border-white/30 transition-all duration-300 block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0077B5]/20 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66a1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">LinkedIn</p>
                  <p className="text-[11px] font-mono text-white/40">Affan Athaillah</p>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/20 transition">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Grid 3 Socials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={PERSONAL_INFO.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/30 p-3 flex items-center justify-between hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-white/80">IG</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>

              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/30 p-3 flex items-center justify-between hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-white/80">GitHub</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>

              <a
                href="https://tiktok.com/@affanatha"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/30 p-3 flex items-center justify-between hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-white/80">TikTok</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Comments / Guestbook */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-[28px] md:rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-syne text-xl sm:text-2xl font-bold mb-1 text-white">
                  Comments
                </h3>
                <p className="text-xs sm:text-sm text-white/40 font-light">
                  Leave your thoughts here
                </p>
              </div>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-white/60">
                {comments.length} comments
              </span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handlePostComment} className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                required
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white transition"
              />

              <textarea
                rows={3}
                placeholder="Your Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                className="w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none resize-none focus:border-white transition"
              />

              {/* Upload Image Bar */}
              <div className="flex items-center gap-3">
                <label className="flex-1 rounded-2xl border border-dashed border-white/15 bg-black/20 p-2.5 sm:p-3 flex items-center justify-center gap-2 cursor-pointer hover:border-white/30 hover:bg-black/30 transition">
                  <Upload className="w-4 h-4 text-white/50" />
                  <span className="text-xs text-white/65 font-mono">
                    {commentImage ? "Ganti Gambar" : "Upload Image"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                {commentImage && (
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                    <img
                      src={commentImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 sm:py-3 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shrink-0 active:scale-95"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Scrollable Comment Feed */}
            <div className="rounded-[24px] border border-white/10 bg-black/30 p-4 h-[330px] sm:h-[370px] overflow-y-auto custom-scroll space-y-3.5">
              {comments.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between gap-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0`}
                      >
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-white">
                            {item.name}
                          </span>
                          {item.isPinned && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                              <Pin className="w-2.5 h-2.5" /> Pinned
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-white/40 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Like button */}
                    <button
                      onClick={() => handleToggleLike(item.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono transition ${
                        item.isLiked
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : "bg-white/5 text-white/40 hover:text-white/80 border border-white/10"
                      }`}
                    >
                      <Heart
                        className={`w-3 h-3 ${item.isLiked ? "fill-rose-500 text-rose-500" : ""}`}
                      />
                      <span>{item.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed pl-10">
                    {item.text}
                  </p>

                  {/* Attached Image if present */}
                  {item.image && (
                    <div className="pl-10 pt-1">
                      <div className="relative w-40 aspect-video rounded-xl overflow-hidden border border-white/15">
                        <img
                          src={item.image}
                          alt="Uploaded comment attachment"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer matching reference */}
      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="font-mono text-xs text-white/35 tracking-wider">
          © 2026 Affan Athaillah Harvi Pradita — All rights reserved.
        </p>
      </footer>
    </section>
  );
}
