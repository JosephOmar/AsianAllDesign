import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node-modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node-modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'main-gradient': 'linear-gradient(45deg, #e884e8, #d37deb, #bf75ee, #aa6ff1, #9469f4, #7b6ff6)',
        
      },
      gridTemplateAreas: {
        'layout': [
          'aside header header',
          'aside main main',
          'aside main main',
        ],
      },
      gridTemplateColumns: {
        'layout': 'auto 1fr 1fr',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr 1fr',
      },
      fontFamily: {
        exl: ['exl', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  daisyui: {
    themes: ["light", "dark", "valentine"],
  },
};
 
module.exports = withMT(config)

export default config;
