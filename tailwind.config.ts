import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#2a9d80",
          light: "#33c49f",
          dark: "#1d7a61",
        },
        dark: {
          DEFAULT: "#0f0f0f",
          card: "#181818",
          card2: "#1e1e1e",
          card3: "#242424",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
