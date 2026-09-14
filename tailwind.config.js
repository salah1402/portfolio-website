/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F6F2',      // cooler off-white base
        surface: '#EFEDE7', // slightly darker panel
        fg: '#1A1714',      // warm near-black (keep)
        muted: '#7E776A',   // warm taupe (keep — not cool grey)
        border: '#E0DDD5',  // neutral cool-warm hairline
        accent: '#A8896A',  // warm brown (keep — for diamonds + particles)
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
