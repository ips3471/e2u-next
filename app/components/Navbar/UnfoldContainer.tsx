import { LinkItem } from '@/app/database';
import Link from 'next/link';

interface UnfoldContainerProps {
	items: LinkItem[];
}

function UnfoldContainer({ items }: UnfoldContainerProps) {
	return (
		<div className='absolute w-48 border top-8 right-0 flex flex-col'>
			{items.map(item => (
				<Link href={item.href} key={item.id}>
					{item.name}
				</Link>
			))}
		</div>
	);
}

export default UnfoldContainer;
