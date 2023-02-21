import { Container } from "@/styles/components/button";

import { IButton } from "@/types/button";

export function Button({ children, shape, size, rounded}: IButton) {
	return (
		<Container shape={shape} size={size} rounded={rounded}>
			{children}
		</Container>
	)
}