import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#0e0e0e",
          800: "#121212",
          700: "#1a1a1a",
          600: "#222222",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
        script: ["var(--font-script)", "Caveat", "cursive"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
