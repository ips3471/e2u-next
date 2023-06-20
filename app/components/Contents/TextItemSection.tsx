import { ReactNode } from 'react';

interface TextItemSectionProps {
	children: ReactNode;
	title?: string;
	description?: string;
}

function TextItemSection({
	children,
	title,
	description,
}: TextItemSectionProps) {
	return (
		<section>
			{title && <h1>{title}</h1>}
			{description && <p>{description}</p>}
			{children}
		</section>
	);
}

export default TextItemSection;
