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
        'light-navy': '#1E3B5A'
      },
    },
    
  
  plugins: [],
}

