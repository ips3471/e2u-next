import { ReactNode } from 'react';
import { textItems } from '../database';
import TextItem from './Contents/TextItem';
import TextItemSection from './Contents/TextItemSection';

interface ContentsProps {}

function Contents({}: ContentsProps) {
	const [section1, section2, section3] = textItems;

	return (
		<div>
			<TextItemSection
				title={section1.title}
				description={section1.description}
			>
				<article>
					{section1.items.map(item => (
						<TextItem key={item.id} item={item} />
					))}
				</article>
			</TextItemSection>
			<TextItemSection
				title={section2.title}
				description={section2.description}
			>
				<article>
					{section2.items.map(item => (
						<TextItem key={item.id} item={item} />
					))}
				</article>
			</TextItemSection>
			<TextItemSection
				title={section3.title}
				description={section3.description}
			>
				<article>
					{section3.items.map(item => (
						<TextItem key={item.id} item={item} />
					))}
				</article>
			</TextItemSection>
		</div>
	);
}

export default Contents;
