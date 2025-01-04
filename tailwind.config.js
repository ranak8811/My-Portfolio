import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/globals.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6D28D9", // Purple
          secondary: "#EC4899", // Pink
          accent: "#8B5CF6", // Light Purple
          neutral: "#1F2937", // Black
          "base-100": "#FAFAFA", // Light color
          info: "#3ABFF8", // Optional - Blueish for info elements
          success: "#36D399", // Optional - Green for success
          warning: "#FBBD23", // Optional - Yellow for warnings
          error: "#F87272", // Optional - Red for errors
        },
      },
    ],
  },
};
