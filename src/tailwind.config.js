module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        luxury: {
          gold: '#C6A567',
          navy: '#1A2238',
          cream: '#F5F0E9',
          charcoal: '#2C3E50'
        }
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(to right, #1A2238, #0F1629)'
      }
    }
  },
  plugins: []
};