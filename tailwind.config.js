/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	primary: '#A40D0D',
	'dark-primary': '#9C0D0F',
	'white-ping': '#F0E2E3',
	white: '#ffffff',
	'white-gray': '#d5d4d4',
	gray: '#9D9C9D',
	'dark-gray': '#5D5D5D',
	black: '#090909',
	'dark-d': '#101010',
	'medium-magentap': '#8170d8',
	'moderate-purple': '#623e63',
	'steel-blue': '#332134',
	'vivid-purple': '#915b92',
	red: colors.red[400]
}

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16'
		},
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			screens: {
				xs: '360px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		// require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio')
	]
}
