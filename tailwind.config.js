/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],    
    extend: {},
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'navy': '#28263e',
        'gold': '#fcc743',
        'white': '#ffffff',
        'beige': '#e6e0d0',
        'light-navy': '#4A4763',
        'blue': '#3b82f6',
      },
    },
    
  
  plugins: [],
}

