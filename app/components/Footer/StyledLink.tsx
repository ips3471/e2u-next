import { FooterLink } from '@/app/database';

interface StyledLinkProps {
	item: FooterLink;
}

function StyledLink({ item }: StyledLinkProps) {
	const { href, isEmp, name } = item;
	return (
		<div
			className={`${
				isEmp ? 'border border-brand rounded-md p-2 text-brand ' : ''
			}`}
		>
			<a href={href}>{name}</a>
		</div>
	);
}

export default StyledLink;
