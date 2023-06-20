import { FooterLink } from '@/app/database';

interface StyledLinkProps {
	item: FooterLink;
}

function StyledLink({ item }: StyledLinkProps) {
	const { href, isEmp, name } = item;
	return (
		<div className={`${isEmp ? 'border rounded-[25px] font-semibold' : ''}`}>
			<a href={href}>{name}</a>
		</div>
	);
}

export default StyledLink;
