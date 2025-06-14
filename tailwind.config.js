/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
      colors: {
        background: "#0C0F1A",
        box: "#121624",
        box2: "#1E2333",
        primary: "#F4F4F4",
        muted: "#A1A1AA",
        accent1: "#14B8A6", // teal
        accent2: "#D9A5B3", // pinky lotus
      },
    },
  },
  plugins: [],
};
