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
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        whiteIsh: '#F9FAFB',
        blackIsh: '#163646',
        accent: '#00699E',
        blueGrey: '#9ABBCB',
        blueOcean: '#265D78',
      },
    },
  },
  plugins: [],
};

export default config;
