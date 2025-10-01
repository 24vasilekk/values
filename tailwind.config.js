module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.8)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        acne: ['acne-studios', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
      boxShadow: {
        'glass': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}