import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#F5F5F3",
        surface: "#FFFFFF",
        ink: "#1C1917",          // deep warm near-black
        "ink-muted": "#78716C",  // muted stone
        accent: "#E63946",       // vibrant red accent
        "accent-soft": "#FFF1F2",
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(28,25,23,0.07), 0 1px 3px 0 rgba(28,25,23,0.04)",
        "card-hover": "0 8px 32px 0 rgba(28,25,23,0.13), 0 2px 8px 0 rgba(28,25,23,0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
