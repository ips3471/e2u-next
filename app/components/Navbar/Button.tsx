'use client';

interface ButtonProps {
	name: string;
	onClick: () => void;
	isFold: boolean;
}

function Button({ name, onClick, isFold }: ButtonProps) {
	return (
		<button className='flex w-full justify-between' onClick={onClick}>
			<p>{name}</p>
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
