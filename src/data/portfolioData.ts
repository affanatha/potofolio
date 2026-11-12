export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  category: "frontend" | "styling" | "tools" | "language";
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Affan Athaillah Harvi Pradita",
  nickname: "Atha",
  shortName: "AFFAN",
  headline: "Frontend Developer & Web Enthusiast",
  heroBio:
    "Saya adalah siswa yang tertarik dengan dunia web development dan senang membuat website yang modern dan responsif.",
  aboutBio:
    "Saya adalah seorang pelajar yang memiliki ketertarikan di bidang teknologi, khususnya pengembangan web. Saya suka mempelajari hal baru, membangun proyek, dan terus mengasah kemampuan dalam dunia frontend development.",
  details: [
    { label: "Nama Lengkap", value: "Affan Athaillah Harvi Pradita" },
    { label: "Panggilan", value: "Atha" },
    { label: "Tanggal Lahir", value: "16 Desember 2008" },
    { label: "Domisili", value: "Malang" },
    { label: "Sekolah", value: "SMK TELKOM MALANG" },
    { label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
    { label: "Kelas", value: "XII" },
  ],
  education: {
    school: "SMK TELKOM MALANG",
    major: "Rekayasa Perangkat Lunak",
    years: "2024 – 2027",
    description:
      "Selama di SMK TELKOM MALANG, saya mendapatkan banyak ilmu tentang pemrograman, jaringan, dan teknologi informasi yang sangat bermanfaat untuk mengembangkan kemampuan saya di bidang web development.",
    quote: "Ilmu hari ini, masa depan nanti",
  },
  contacts: {
    email: "aditpradita037@gmail.com",
    github: "https://github.com/affanatha",
    githubHandle: "https://github.com/affanatha",
    instagram: "https://instagram.com/affnatha",
    instagramHandle: "@affnatha",
    linkedin: "https://www.linkedin.com/in/affan-atha-b47274422/",
    linkedinHandle: "https://www.linkedin.com/in/affan-atha-b47274422/",
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "ecommerce-elektronik",
    title: "E-Commerce Elektronik",
    description: "Website e-commerce untuk penjualan produk elektronik seperti laptop, HP, dll.",
    longDescription:
      "Platform e-commerce modern dengan fitur katalog produk elektronik lengkap, filter kategori pintar, shopping cart interaktif, serta integrasi REST API untuk manajemen stok dan transaksi.",
    tags: ["Next.js", "Tailwind CSS", "API"],
    image: "/images/project-ecommerce.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/affanatha",
    features: [
      "Katalog produk responsif dengan search & category filtering",
      "Keranjang belanja (Shopping Cart) interaktif real-time",
      "Halaman checkout dan rincian transaksi",
      "Integrasi API produk & inventaris",
    ],
  },
  {
    id: "perpustakaan-sekolah",
    title: "Perpustakaan Sekolah",
    description: "Aplikasi peminjaman buku perpustakaan sekolah dengan sistem login.",
    longDescription:
      "Sistem informasi perpustakaan digital sekolah yang mempermudah siswa dan pustakawan dalam pencarian katalog buku, proses peminjaman terintegrasi, dan pemantauan batas waktu pengembalian buku.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-library.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/affanatha",
    features: [
      "Autentikasi login multi-role (Siswa & Admin)",
      "Pencarian buku berdasarkan ISBN, judul, atau penulis",
      "Sistem peminjaman dan batas waktu pengembalian otomatis",
      "Dashboard statistik buku terpopuler",
    ],
  },
  {
    id: "mie-baday",
    title: "Mie Baday",
    description: "Website product untuk brand mie instan \"Mie Baday\".",
    longDescription:
      "Landing page promosi produk mie instan pedas 'Mie Baday' dengan visual yang menggugah selera, animasi interaktif, display varian rasa, dan tombol pemesanan langsung.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-miebaday.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/affanatha",
    features: [
      "Desain appetizing & high-energy bertema merah pedas",
      "Showcase interaktif varian tingkat kepedasan mie",
      "Integrasi tombol pemesanan instan via WhatsApp / Marketplace",
      "Layout sepenuhnya mobile-friendly dan ringan dibuka",
    ],
  },
];

export const SKILLS: SkillItem[] = [
  { name: "HTML", icon: "html5", category: "frontend" },
  { name: "CSS", icon: "css3", category: "styling" },
  { name: "JavaScript", icon: "javascript", category: "language" },
  { name: "TypeScript", icon: "typescript", category: "language" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "styling" },
  { name: "Git & GitHub", icon: "git", category: "tools" },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2024 – Sekarang",
    title: "Menempuh pendidikan di SMK TELKOM MALANG",
    description: "Jurusan Rekayasa Perangkat Lunak, mendalami keahlian rekayasa software dan teknologi informasi.",
  },
  {
    period: "2024 – Sekarang",
    title: "Eksplorasi & Proyek Web Frontend",
    description: "Aktif membangun berbagai website interaktif, modern, dan responsif menggunakan Next.js, React, dan Tailwind CSS.",
  },
];
