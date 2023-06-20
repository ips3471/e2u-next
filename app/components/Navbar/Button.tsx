'use client';

interface ButtonProps {
	name: string;
	onClick: () => void;
	isFold: boolean;
}

function Button({ name, onClick, isFold }: ButtonProps) {
	return (
		<button onClick={onClick}>
			{name}
			<span
				className={`inline-block transition-transform ${
					isFold ? '' : '-scale-y-100'
				}`}
			>
				∨
			</span>
		</button>
	);
}

export default Button;
