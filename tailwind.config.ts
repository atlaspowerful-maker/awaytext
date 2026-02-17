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
        // Design System - AwayText
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#DBEAFE",
        },
        success: {
          DEFAULT: "#10B981",
          dark: "#059669",
        },
        danger: {
          DEFAULT: "#EF4444",
          dark: "#DC2626",
        },
        warning: "#F59E0B",
        surface: "#F8FAFC",
        border: "#E2E8F0",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
