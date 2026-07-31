/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        desa: {
          green: {
            50: '#EAF7EF',
            100: '#CDEEDA',
            200: '#9BDCB6',
            300: '#63C591',
            400: '#2FA871',
            500: '#0E8A5C',
            600: '#0B7049',
            700: '#095C3C',
            800: '#06452D',
            900: '#043420',
          },
          blue: {
            50: '#EAF2FC',
            100: '#CBDFF7',
            200: '#98BFEE',
            300: '#639FE4',
            400: '#3A7FD6',
            500: '#1565C0',
            600: '#11529C',
            700: '#0D3F78',
            800: '#0A2E58',
            900: '#071F3C',
          },
          sand: '#F6F8F6',
          ink: '#0F2A1D',
        },
      },
      backgroundImage: {
        'anyaman': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%230E8A5C' stroke-opacity='0.06' stroke-width='2'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(6, 69, 45, 0.25)',
        'premium-lg': '0 25px 60px -15px rgba(6, 69, 45, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
