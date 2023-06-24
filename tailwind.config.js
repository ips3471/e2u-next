/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					'0%, 100%': { transform: 'translateX(-30%)' },
				},
			},
			animation: {
				scroller: 'scroll 10s linear infinite alternate',
			},
			colors: {
				brand: '#377dff',
			},
			backgroundColor: {
				body: '#fff',
			},
			padding: {
				'container-sm': '0.8rem;',
				'container-md': '1.5rem',
				'container-lg': '2.5rem',
			},
		},
	},
	plugins: [],
};
