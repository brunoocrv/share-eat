export type IButton = {
	children: React.ReactNode;
	shape: 'primary' | 'outlined';
	size: 'md' | 'lg' | 'fullWidth';
	rounded?: 'isRounded';
} & React.ButtonHTMLAttributes<HTMLButtonElement>