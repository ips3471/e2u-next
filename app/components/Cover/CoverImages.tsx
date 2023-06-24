import { Url } from '@/app/database';
import Image from 'next/image';

interface CoverImagesProps {
	links: Url[];
}

function CoverImages({ links }: CoverImagesProps) {
	return (
		<div className='hidden sm:grid -rotate-12 grid-cols-3 gap-3 '>
			{links.map((item, index) => (
				<Image
					key={index}
					alt={'cover image' + index}
					src={item}
					width={300}
					height={380}
				/>
			))}
		</div>
	);
}

export default CoverImages;
