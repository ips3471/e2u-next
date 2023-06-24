import { ReactNode } from 'react';

interface TextItemProps {
	children: ReactNode;
}

function TextItem({ children }: TextItemProps) {
	return (
		<div className='flex flex-1 py-1 space-y-2 items-center flex-col '>
			{children}
		</div>
	);
}

export default TextItem;
