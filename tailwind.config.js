/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(./assets/hero-bg-img.png)",
        'web-pattern': "url(./assets/web-service-bg.png)",
      }
    },
  },
  plugins: [],
}
