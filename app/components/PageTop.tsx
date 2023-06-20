import { pageTopItems } from '../database';

interface PageTopProps {}

function PageTop({}: PageTopProps) {
	return (
		<div className='flex justify-end gap-3'>
			{pageTopItems.map(item => (
				<a href={item.href}>
					<span>{item.tagName}</span>
					{item.name}
				</a>
			))}
		</div>
	);
}

export default PageTop;
