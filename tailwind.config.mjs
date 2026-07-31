/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"],
        sarasa: ['Sarasa Fixed Slab SC, "sans-serif"'],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui, scrollbar],
};
