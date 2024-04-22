// https://codepen.io/swillis/pen/RwzpbP

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["_site/**/*.{html,njk}"],
	theme: {
		extend: {
			colors: {
				theme: {
					1: '#FAF9F6',
					2: '#FAF9F6',
					3: '#FAF9F6',
					4: '#FAF9F6',
					5: '#2b2d2f',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
