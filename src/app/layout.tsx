import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affan Athaillah Harvi Pradita | Frontend Developer & Web Enthusiast",
  description:
    "Portofolio Affan Athaillah Harvi Pradita - Pelajar SMK Telkom Malang, Frontend Developer & Web Enthusiast.",
  keywords: [
    "Affan Athaillah Harvi Pradita",
    "Affan",
    "Frontend Developer",
    "Web Enthusiast",
    "SMK Telkom Malang",
    "Portfolio",
  ],
  authors: [{ name: "Affan Athaillah Harvi Pradita" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#0e1110] text-[#f5f2eb] antialiased selection:bg-[#344037] selection:text-white">
        {children}
      </body>
    </html>
  );
}
