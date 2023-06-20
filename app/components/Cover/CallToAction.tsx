import { CallToActionItem } from '@/app/database';

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
					<a key={link.id} href={link.href}>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
}

export default CallToAction;
