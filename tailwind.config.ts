import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#222831',
        foreground: '#eeeeee',
        cyan: '#00adb5',
      },
    },
  },
  plugins: [],
}
export default config
