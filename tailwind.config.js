/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cool: '#7E7F9A',
        light: '#C4F5FC',
        snow: '#FCF7F8',
        french: '#CED3DC',
        spring: '#0FFF95',
        british: '#054A29',
      },
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rubik: ['Rubik Doodle Shadow', 'system-ui'],
      },
    },
  },
  plugins: [],
};
