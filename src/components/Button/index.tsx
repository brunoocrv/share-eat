import { Container } from "@/styles/components/button";

type IButton = {
	children: React.ReactNode;
	shape: 'primary' | 'outlined';
	size: 'md' | 'lg' | 'fullWidth';
	rounded?: 'isRounded';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, shape, size, rounded}: IButton) {
	return (
		<Container shape={shape} size={size} rounded={rounded}>
			{children}
		</Container>
	)
}