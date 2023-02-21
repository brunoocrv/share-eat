import { styled } from "..";

export const Container = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '0.5rem',
	cursor: 'pointer',
	borderRadius: 5,
	fontWeight: 'bold',

	'&:hover': {
		opacity: 0.5
	},

	variants: {
		rounded: {
			isRounded: {
				borderRadius: '50%',
			}
		},
		shape: {
			primary: {
				background: '$orange',
				color: '$black',
				border: 'none',
			},
			outlined: {
				background: 'transparent',
				color: '$white',
				border: '1px solid white',
			},
		},
		size: {
			md: {
				width: '2.25rem',
				height: '2.25rem'
			},
			lg: {
				width: '4rem',
				height: '4rem'
			},
			fullWidth: {
				width: '100%',
				height: '5em'
			}
		}
	}
})