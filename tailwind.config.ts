import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-secondary": "rgb(50, 58, 93)",
        "font-color-primary": "rgb(227, 231, 239)",
        "font-color-secondary": "rgb(183, 178, 200)",
        "font-color-terciary": "rgb(132, 135, 141)",
        "green-primary": "#1de49f",
        "green-secondary": "#053625",
        "navbar-color": "#151828",
      },
      spacing: {
        "spacing-xxl": "700px",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontSize: {
      xxs: "0.5rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      m: "1.1rem",
      l: "1.2rem",
      xl: "1.3rem",
      xxl: "1.5rem",
      "2xl": "1.7rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
      "8xl": "8rem",
    },
  },
  plugins: [],
  variants: {},
};
export default config;
