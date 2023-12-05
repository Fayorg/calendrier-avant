import type { Config } from 'tailwindcss'

const config: Config = {
  colors: {
    'text': '#0f0f0f',
    'background': '#ffffff',
    'primary': '#3a5947',
    'secondary': '#80a256',
    'accent': '#9a1a33',
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
