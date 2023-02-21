import { styled } from "@/styles";

export const Container = styled('div', {
	padding: '0 2rem',

	'h1': {
		color: '$orange',
		marginBottom: '2rem'
	}
});

export const Form = styled('form', {
	display: 'flex',
	flexDirection: 'column',

	'@sm': {
		width: '100%',
	},

	'@md': {
		width: '30rem',
	},

	'@lg': {
		width: '30rem',
	},

	'label, span': {
		fontSize: '0.87rem'
	},

	'span': {
		fontWeight: 'lighter',
		marginBottom: '2rem'
	},

	'input[type=number]': {
		width: '10rem'
	},

	'input, textarea': {
		padding: '1rem',
		marginBottom: '2rem',
		borderRadius: 5,
		background: '$white',
		border: 0,
		outline: 'none',
	},

	'textarea': {
		height: '8.5rem',
		marginBottom: 0,
	}
})