/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				softRed: 'hsl(7, 99%, 70%)',
				yellow: 'hsl(51, 100%, 49%)',
				darkDesaturatedCyan: 'hsl(168, 40%, 70%)',
				darkBlue: 'hsl(198, 62%, 26%)',
				darkModerateCyan: 'hsl(167, 34%, 41%)',
				veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
				veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
				darkGrayishBlue: 'hsl(232, 10%, 55%)',
				grayishBlue: 'hsl(210, 4%, 67%)',
			},
			fontFamily: {
				sans: ['var(--font-barlow)'],
				serif: ['var(--font-fraunces)'],
			},
			backgroundImage: {
				mobileHeader: 'url("/images/mobile/image-header.jpg")',
				desktopHeader: 'url("/images/desktop/image-header.jpg")',
				mobilePhotography: 'url("/images/mobile/image-photography.jpg")',
				desktopPhotography: 'url("/images/desktop/image-photography.jpg")',
				mobileDesign: 'url("/images/mobile/image-graphic-design.jpg")',
				desktopDesign: 'url("/images/desktop/image-graphic-design.jpg")',
			},
		},
	},
	plugins: [],
}
