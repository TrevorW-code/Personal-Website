// https://codepen.io/swillis/pen/RwzpbP
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["_site/**/*.{html,njk}"],
	theme: {
		extend: {
			colors: {
				theme: {
					1: '#E59F71', // highlight
					2: '#BA5A31', // lighter
					3: '#c2b2a3', // text
					4: '#4b3d32', // second dark
					5: '#262626', // base dark
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
