import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#198ABF',
				secondary: '#073348',
				footer: '#136B95',
				button_1: '#1AAD21',
				button_2: '#F4F4F4',
				background_1: 'linear-gradient(122.49deg, #F1FFF2 14.77%, #D5E2E9 76.19%);',
				background_2: 'linear-gradient(209.69deg, #F1FFF2 -12.24%, #D6E7EF 80.69%);',
				background_3: 'linear-gradient(252.67deg, #F1FFF2 -11.24%, #D5E2E9 83.1%);',
				background_4: 'linear-gradient(160.68deg, #F1FFF2 7.48%, #D5E2E9 94.06%);',
				background_5: '#F2F7FA',
				boxShadow: '0 9px 139.2px 1px #0000001F;'
			}
		},
	},
	darkMode: 'class',
};
export default config;
