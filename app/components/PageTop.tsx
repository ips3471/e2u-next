import { PageTopItem, TagName, pageTopItems } from '../database';

interface PageTopProps {
	isCol?: boolean;
	isMobile?: boolean;
}

function PageTop({ isCol = false, isMobile = false }: PageTopProps) {
	function selectBackgroundColor(tagName: TagName) {
		switch (tagName) {
			case 'API':
				return 'bg-blue-400';
			case '솔루션':
				return 'bg-yellow-500';
			case '#':
				return 'bg-blue-800';
		}
	}
	function mapPageTop(item: PageTopItem) {
		return (
			<a href={item.href} className={`${isCol ? '' : 'flex '}`}>
				<div className={`${!isCol ? 'flex' : ''}`}>
					{!isCol && (
						<p
							className={`text-white whitespace-nowrap p-[0.15rem] text-[0.6rem] min-w-[2.1rem] text-center inline-block rounded-md ${selectBackgroundColor(
								item.tagName,
							)}`}
						>
							{item.tagName}
						</p>
					)}
					<p
						className={`${
							isCol
								? 'text-center text-sm rounded-md border p-2 border-brand'
								: 'whitespace-nowrap'
						} ${isCol && item.isEmp ? 'bg-brand text-white' : ''}
		${isCol && !item.isEmp ? 'text-brand' : ''}
		`}
					>
						{item.name}
					</p>
				</div>
			</a>
		);
	}

	return (
		<div
			className={`${
				isCol
					? ' flex-col md:hidden gap-1'
					: `flex-row flex-1 sm:justify-end gap-2 overflow-x-auto `
			} flex `}
		>
			{pageTopItems.map(mapPageTop)}
		</div>
	);
}

export default PageTop;
