/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["_site/**/*.{html,njk}"],
	theme: {
	extend: {
		colors: {
			theme: {
					1: '#30b1ce',
					2: '#29a4c3',
					3: '#318db2',
					4: '#046997',
					5: '#003b61',
			}
		}
	},
	plugins: [],
	}
}
