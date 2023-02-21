import { styled } from "..";

export const Container = styled('div', {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	gap: '0 1rem',
	marginBottom: '1rem'
})

export const Card = styled('div', {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	justifyContent: 'left',
	background: '$gray500',
	borderRadius: 5,
	padding: '1rem',
	cursor: 'pointer',

	'a': {
		width: '100%',
		textDecoration: 'none',
	},

	'p': {
		fontWeight: 'bold',
		color: '$white',
	},

	'span': {
		fontWeight: 'lighter',
		color: '$white',
	},

	'&:hover': {
		opacity: 0.8
	}
})

export const IconContainer = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '2.25rem',
	height: '2.25rem',
	background: 'transparent',
	border: '1px solid white',
	borderRadius: '50%',
	padding: '0.5rem',
	cursor: 'pointer',
	color: '$white',

	'&:hover': {
		opacity: 0.5
	}
})