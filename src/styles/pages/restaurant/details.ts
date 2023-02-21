import { styled } from "@/styles";

export const Container = styled('div', {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	padding: '0 2rem',

	'> h1': {
		color: '$orange'
	},

	'> span': {
		fontWeight: 'lighter',
		marginBottom: '2rem'
	},

	'button': {
		position: 'absolute',
		right: '2rem',
		bottom: '2rem'
	}
});

export const Content = styled('div', {
	width: '100%',
	display: 'flex',
	flexWrap: 'wrap',

	'@sm': {
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	},

	'@md': {
		justifyContent: 'start',
		alignItems: 'center',
		gap: '1rem 2rem',
	},

	'@lg': {
		justifyContent: 'start',
		alignItems: 'start',
		gap: '1rem 2rem',
	},
});

export const CardHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	'span': {
		fontWeight: 'bold'
	},
});

export const Dish = styled('div', {
	height: '10rem',
	background: '$gray500',
	borderLeft: '4px solid $orange',
	borderRadius: 2,
	padding: '1rem',

	'p': {
		fontWeight: 'lighter',
		padding: '0.5rem 0',
	},

	'@sm': {
		width: '100%',
		maxHeight: '20rem',
	},

	'@md': {
		width: '20rem',
		maxHeight: '20rem',
	},

	'@lg': {
		width: '20rem',
		maxHeight: '20rem',
	}
});
