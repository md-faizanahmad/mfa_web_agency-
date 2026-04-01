import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss";

const config: Config = {
  // We removed dark mode to keep the UI clean and light-focused
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1A1A1A",
          graphite: "#262626",
          sand: "#F5F2ED",
          clay: "#D9D2C5",
          olive: "#556B2F",
        },
        // Mapping shadcn variables to our theme
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "slow-flow": "flow 20s infinite alternate ease-in-out",
      },
      keyframes: {
        flow: {
          "0%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": {
            transform: "translate(30vw, 20vh) scale(1.2) rotate(10deg)",
          },
          "66%": {
            transform: "translate(-10vw, 50vh) scale(0.8) rotate(-10deg)",
          },
          "100%": {
            transform: "translate(20vw, 80vh) scale(1.1) rotate(5deg)",
          },
        },
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
