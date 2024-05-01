/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        blue: '#377DFF',
        green: '#38CB89',
        orange: '#FFAB00',
        neutral: '#141718',
        gray: '#E8ECEF',
      },
      backgroundImage: {
        'card': "url('/cards/chair.svg')"
      },
    },
  },
  plugins: [],
};
