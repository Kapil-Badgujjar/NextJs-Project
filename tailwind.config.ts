import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        HelveticaNeueThin: ["Helvetica-Neue-Thin"],
        HelveticaNeueLight: ["Helvetica-Neue-Light"],
        HelveticaNeueItalic: ["Helvetica-Neue-Italic"],
        HelveticaNeueRegular: ["Helvetica-Neue-Regular"],
        HelveticaNeueMedium: ["Helvetica-Neue-Medium"],
        HelveticaNeueBold: ["Helvetica-Neue-Bold"],
        InterMedium: "Inter",
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
