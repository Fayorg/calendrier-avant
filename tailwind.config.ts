import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"],
    },
    extend: {
      colors: {
        "backgroundColor": "#000000",
        "textColor": "#F0F0F0",
        "textFades": "#B0B0B0",
        "primary": "#3A5945",
        "secondary": "#86A95B",
        "accent": "#991A33"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
