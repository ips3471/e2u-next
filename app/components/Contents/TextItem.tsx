import { TextItem } from '@/app/database';
import Image from 'next/image';

interface TextItemProps {
	item: TextItem;
}

function TextItem({ item }: TextItemProps) {
	const { description, id, logoImg, title } = item;
	return (
		<div className='flex flex-col'>
			{logoImg && (
				<Image alt='text item' width={60} height={60} src={logoImg} />
			)}
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

export default TextItem;
