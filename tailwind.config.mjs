/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		colors: {
			'NavColor': 'rgba(255, 105, 5, 0.29)',
			'BorderColor': '#7d787a',
			'Boton1': {100: '#ef1362',
						200: '#d61057'},

			'Boton2': '#724649',
			'BubbleColor':'#dbaa7c',
			'NicknameColor': '#715819'
		},
		extend: {		

		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}