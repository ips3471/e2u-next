import { ReactNode } from 'react';

interface TextItemSectionProps {
	children: ReactNode;
}

function TextItemSection({ children }: TextItemSectionProps) {
	return <section className='py-container-md space-y-2'>{children}</section>;
}

export default TextItemSection;
