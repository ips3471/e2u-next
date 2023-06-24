import { CallToActionItem } from '@/app/database';

interface CallToActionProps {
	item: CallToActionItem;
}

function CallToAction({ item }: CallToActionProps) {
	const { description, links, title } = item;
	return (
		<div className='space-y-3 p-container-sm'>
			<h2 className='font-extrabold'>{title}</h2>
			<p className='font-light'>{description}</p>
			<div className='flex gap-1 text-center flex-col'>
				{links.map(link => (
					<a
						className='bg-brand p-2 rounded-sm text-white'
						key={link.id}
						href={link.href}
					>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
}

export default CallToAction;
