import { LinkItem } from '@/app/database';

interface UnfoldContainerProps {
	items: LinkItem[];
}

function UnfoldContainer({ items }: UnfoldContainerProps) {
	console.log('render');

	return (
		<div className='md:absolute md:bg-body m-2 md:m-0 md:my-4 space-y-2 md:top-4 w-40 md:w-30 md:p-4 md:border-t-4 md:text-sm md:font-light md:border-brand md:right-0 flex flex-col'>
			{items.map(item => (
				<a href={item.href} key={item.id}>
					{item.name}
				</a>
			))}
		</div>
	);
}

export default UnfoldContainer;
