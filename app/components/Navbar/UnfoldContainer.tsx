import { LinkItem } from '@/app/database';

interface UnfoldContainerProps {
	items: LinkItem[];
}

function UnfoldContainer({ items }: UnfoldContainerProps) {
	return (
		<div className='absolute w-48 border top-8 right-0 flex flex-col'>
			{items.map(item => (
				<a href={item.href} key={item.id}>
					{item.name}
				</a>
			))}
		</div>
	);
}

export default UnfoldContainer;
