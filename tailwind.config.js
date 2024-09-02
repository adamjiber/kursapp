/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',  // Lägg till HTML-filer
    './src/**/*.{js,jsx,ts,tsx}',  // Lägg till alla filer som kan innehålla Tailwind-klasser
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
