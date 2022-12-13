/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{jsx,js}'],
	theme: {
		extend: {
			transitionProperty: {
				button: 'height, background-color',
			},
		},
	},
	plugins: [],
};
