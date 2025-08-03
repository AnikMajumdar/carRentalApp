import type { Config } from 'tailwindcss';

const config: Config = {
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
      // You can extend other theme properties like colors, spacing, fonts, etc.
      colors: {
        'custom-blue': '#1fb6ff',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
};

export default config;