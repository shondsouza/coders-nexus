/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0118D8',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fff8f8',
          100: '#fef5f5',
          200: '#fdeaea',
          300: '#fad5d5',
          400: '#f5acac',
          500: '#ef8484',
          600: '#1B56FD',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        beige: {
          50: '#ffffff',
          100: '#fffdfd',
          200: '#fefafa',
          300: '#fdf6f6',
          400: '#fbeeee',
          500: '#f8e6e6',
          600: '#E9DFC3',
          700: '#d1c9ae',
          800: '#b9b399',
          900: '#a19d84',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}