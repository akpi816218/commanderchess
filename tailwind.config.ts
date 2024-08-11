import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {},
			keyframes: {},
			animation: {}
		}
	}
} satisfies Config;

export default config;
