import { FooterLink } from '@/app/database';
import Link from 'next/link';

interface StyledLinkProps {
	item: FooterLink;
}

function StyledLink({ item }: StyledLinkProps) {
	const { href, isEmp, name } = item;
	return (
		<div className={`${isEmp ? 'border rounded-[25px] font-semibold' : ''}`}>
			<Link href={href}>{name}</Link>
		</div>
	);
}

export default StyledLink;
