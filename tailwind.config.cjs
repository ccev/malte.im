/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend'],
        poppins: ['Poppins']
      },
      colors: {
        back: 'rgb(var(--color-menu-background) / <alpha-value>)',
        fore: 'rgb(var(--color-menu-foreground) / <alpha-value>)',
        outline: 'rgb(var(--color-menu-outline) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
