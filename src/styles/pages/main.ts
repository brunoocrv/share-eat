import Image from "next/image";
import { styled } from "..";

export const Container = styled('div', {
	background: '$background',
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	padding: '0 2rem',

	'> span': {
		color: '$orange',
		fontSize: '$heading',
		fontWeight: 'bold'
	},

	'> p': {
		fontWeight: 'lighter',
		marginBottom: '2rem'
	}
})