import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        secondaryText: "var(--secondary-text-color)",
      },
      fontFamily: {
        chakra: ['"Chakra Petch"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
