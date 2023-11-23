// Instead of `require`, you'll use `import`
import animatePlugin from 'tailwindcss-animate';

// Use `export` instead of `module.exports`
const tailwindConfig = {
  darkMode: ['class'],
  content: ['./client/**/*.{html,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'radial-gradient-custom':
          'radial-gradient(circle, hsla(0, 0%, 15%, 1) 0%, hsla(0, 0%, 10%, 1) 100%)',
        'bus-image': 'url(/client/img/busBackground.png)',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        // main color
        primary: {
          DEFAULT: 'hsla(54, 100%, 48%, 1)',
          light: 'hsla(54, 100%, 70%, 1)',
          dark: 'hsla(54, 100%, 45%, 1)',
        },
        // for dark elements
        secondary: {
          DEFAULT: 'hsla(0, 0%, 15%, 1)',
          light: 'hsla(0, 0%, 20%, 1)',
          dark: 'hsla(0, 0%, 10%, 1)',
        },
        // for light elements
        tertiary: {
          DEFAULT: 'hsla(0, 0%, 94%, 1)',
          light: 'hsla(0, 0%, 97%, 1)',
          dark: 'hsla(0, 0%, 85%, 1)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animatePlugin],
};

export default tailwindConfig;
