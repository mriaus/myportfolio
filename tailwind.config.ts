import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'bg-yellow-500',
    'bg-blue-800',
    'bg-gray-800',
    'bg-green-800',
    'bg-green-600',
    'bg-black-800',
    // Añade aquí cualquier otra clase que quieras asegurar
  ],
  plugins: [],
};
export default config;
