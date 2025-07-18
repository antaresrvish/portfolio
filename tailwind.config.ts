import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'blur-fade-in': 'blurFadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        blurFadeIn: {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateY(0px)'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
