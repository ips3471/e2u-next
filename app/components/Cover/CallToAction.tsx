import { CallToActionItem } from '@/app/database';

interface CallToActionProps {
	item: CallToActionItem;
}

function CallToAction({ item }: CallToActionProps) {
	const { description, links, title } = item;
	return (
		<div className='space-y-6 max-w-md mx-auto p-container-sm sm:p-container-md'>
			<div className='space-y-2'>
				<h2 className='font-extrabold text-lg'>{title}</h2>
				<p className='font-light'>{description}</p>
			</div>
			<div className='flex gap-2 md:max-w-[40rem] md:justify-center md:flex-row text-center rounded-md flex-col'>
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
