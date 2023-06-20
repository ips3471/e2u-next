import Link from 'next/link';
import { pageTopItems } from '../database';

interface PageTopProps {}

function PageTop({}: PageTopProps) {
	return (
		<div className='flex justify-end gap-3'>
			{pageTopItems.map(item => (
				<Link href={item.href}>
					<span>{item.tagName}</span>
					{item.name}
				</Link>
			))}
		</div>
	);
}

export default PageTop;
