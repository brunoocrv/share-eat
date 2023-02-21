import { createStitches } from '@stitches/react'

export const {
	config,
	styled,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	css
} = createStitches({
	media: {
		sm: '(min-width: 320px)',
		md: '(min-width: 740px)',
		lg: '(min-width: 1200px)',
	},
	theme: {
		colors: {
			white: '#FFFF',
			background: '#292929',
			orange: '#F3AA00',
			gray500: '#333333',
			gray300: '#0000004D',
			gray100: '#DEDEDF',
			black: '#121212'
		},
		fontSizes: {
			heading: '2.25rem',
			regular: '1rem',
		},
	}
})