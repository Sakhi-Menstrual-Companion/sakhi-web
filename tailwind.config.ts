import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        sakhi: {
          pink: "#F61887",
          "pink-light": "#F8E5EC",
          "pink-hover": "#D4006E",
          bg: "#F8F2F4",
          "bg-dark": "#F0E8EC",
          card: "#FFFFFF",
          text: "#1A1A1A",
          "text-secondary": "#6B6B6B",
          "text-muted": "#A0A0A0",
          border: "#EAD8E0",
          "border-pink": "#F61887",
        },
      },
      backgroundImage: {
        "gradient-sakhi": "linear-gradient(135deg, #F8F2F4 0%, #F8E5EC 50%, #F8F2F4 100%)",
        "gradient-pink": "linear-gradient(135deg, #F61887 0%, #FF4FA0 100%)",
        "gradient-hero": "radial-gradient(ellipse at 60% 0%, #F8E5EC 0%, #F8F2F4 60%)",
      },
      boxShadow: {
        "sakhi-sm": "0 2px 12px rgba(246, 24, 135, 0.08)",
        "sakhi-md": "0 4px 24px rgba(246, 24, 135, 0.12)",
        "sakhi-lg": "0 8px 48px rgba(246, 24, 135, 0.16)",
        card: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 24px rgba(246, 24, 135, 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-pink": "pulsePink 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulsePink: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(246, 24, 135, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(246, 24, 135, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
