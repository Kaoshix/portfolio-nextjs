import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bouncing: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(-10px)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
