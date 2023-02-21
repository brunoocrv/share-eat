import { styled } from "..";

export const LogoContainer = styled('div', {
	margin: '0 auto',
	marginTop: '1rem',
	marginBottom: '2rem',
	variants: {
		shape: {
			hasIcon: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				margin: '0 auto',
				marginTop: '1rem',
				marginBottom: '2rem',

				'svg': {
					position: 'absolute',
					left: '2rem',
					top: '1rem',
					cursor: 'pointer',
					color: '$white',

					'&:hover': {
						opacity: 0.8
					}
				}
			},
		}
	}
})