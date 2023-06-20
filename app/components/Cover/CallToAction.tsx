import { CallToActionItem } from '@/app/database';
import Link from 'next/link';

interface CallToActionProps {
	item: CallToActionItem;
}

function CallToAction({ item }: CallToActionProps) {
	const { description, links, title } = item;
	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className='flex flex-col'>
				{links.map(link => (
					<Link key={link.id} href={link.href}>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
}

export default CallToAction;
