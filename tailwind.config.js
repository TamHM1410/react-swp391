/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*", // Tailwind sẽ quét các file trong thư mục src
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
