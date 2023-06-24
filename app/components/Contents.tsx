import { textItems } from '../database';
import TextItem from './Contents/TextItem';
import TextItemSection from './Contents/TextItemSection';
import Image from 'next/image';

interface ContentsProps {}

function Contents({}: ContentsProps) {
	const [section1, section2, section3] = textItems;

	return (
		<>
			<div className='p-container-sm sm:p-container-md'>
				<TextItemSection>
					<h1 className='font-extrabold text-center text-2xl'>
						{section1.title}
					</h1>
					<p className='font-light text-center'>{section1.description}</p>

					<article className='flex flex-col py-4 space-y-2 md:space-y-0 md:gap-4 md:flex-row md:items-stretch'>
						{section1.items.map(item => {
							const { description, id, title, logoImg } = item;
							return (
								<TextItem>
									{logoImg && (
										<Image
											alt='text item'
											className='border w-14 rounded-full bg-brand/10 p-4'
											width={60}
											height={60}
											src={logoImg}
										/>
									)}
									<div className='text-center'>
										<h2 className='font-semibold'>{title}</h2>
										<p className='font-light text-center'>{description}</p>
									</div>
								</TextItem>
							);
						})}
					</article>
				</TextItemSection>
				<TextItemSection>
					<h1 className='font-extrabold text-2xl'>{section2.title}</h1>
					<p className='font-light'>{section2.description}</p>
					<article className='flex flex-col  py-4'>
						{section2.items.map(item => {
							const { description, title } = item;
							return (
								<TextItem>
									<h2 className='font-semibold text-brand text-lg text-left w-full '>
										{title}
									</h2>
									<p className='font-light text-left w-full'>{description}</p>
								</TextItem>
							);
						})}
					</article>
				</TextItemSection>
			</div>
			<div className='bg-gradient-to-t from-brand/10 p-container-sm sm:p-container-md'>
				<TextItemSection>
					<article className='sm:grid  sm:grid-cols-2 sm:gap-4'>
						{section3.items.map(item => {
							const { description, logoImg, title } = item;

							return (
								<TextItem>
									<div className='border bg-white shadow-inner p-5 space-y-2  w-full'>
										{logoImg && (
											<div className='w-full text-left'>
												<Image
													alt='text item'
													className='border w-12 rounded-full bg-brand p-4'
													width={60}
													height={60}
													src={logoImg}
												/>
											</div>
										)}
										<h2 className='text-lg w-full '>{title}</h2>
										<p className='font-light whitespace-pre-line text-sm'>
											{description}
										</p>
									</div>
								</TextItem>
							);
						})}
					</article>
				</TextItemSection>
			</div>
		</>
	);
}

export default Contents;
