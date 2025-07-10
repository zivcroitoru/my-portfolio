/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        'bg-dark': 'oklch(0.1 0.05 264)',
        'bg': 'oklch(0.15 0.05 264)',
        'bg-light': 'oklch(0.2 0.05 264)',
        'text': 'oklch(0.96 0.1 264)',
        'text-muted': 'oklch(0.76 0.1 264)',
        'highlight': 'oklch(0.5 0.1 264)',
        'border': 'oklch(0.4 0.1 264)',
        'border-muted': 'oklch(0.3 0.1 264)',
        'primary': 'oklch(0.76 0.1 264)',
        'secondary': 'oklch(0.76 0.1 84)',
        'danger': 'oklch(0.7 0.1 30)',
        'warning': 'oklch(0.7 0.1 100)',
        'success': 'oklch(0.7 0.1 160)',
        'info': 'oklch(0.7 0.1 260)'
      }
    },
  },
  plugins: [],
}
