import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets' | 'theme' | 'plugins' | 'darkMode'> = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        'hint-of-red': '#f8f5f0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
