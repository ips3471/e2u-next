import Image from 'next/image';
import Logo from './Logo';
import { NavbarItem } from '@/app/database';
import NavbarChildren from './NavbarChildren';
import PageTop from '../PageTop';

interface NavbarItemProps {
	items: NavbarItem[];
	isMobile: boolean;
}

function NavbarItem({ items, isMobile }: NavbarItemProps) {
	const styleString = `${isMobile ? 'block md:hidden' : 'hidden md:block'}`;
	return (
		<div className='flex-1 flex justify-end items-center'>
			<div className={`${styleString}`}>
				<button
					aria-hidden='true'
					className={`md:hidden p-1 border focus:scale-0 hover:border-brand hover:bg-brand/10  transition-all rounded-md`}
				>
					<Image
						src='/imgs/burgermenu.svg'
						width={30}
						height={30}
						alt='menu button'
					/>
				</button>
			</div>
			<section
				className={`${styleString} absolute ${
					isMobile ? 'border-r' : ''
				} md:static -translate-x-full md:translate-x-0 group-focus-within:translate-x-0 z-20 transition-transform 
				md:flex overflow-y-scroll md:overflow-visible  space-y-6 md:space-y-0 h-screen md:h-full p-5   md:p-0 w-60 md:w-auto bg-body md:bg-auto   
			   left-0 top-0 gap-7 md:gap-0  `}
			>
				<a className='md:hidden' href='https://www.e2u.kr/'>
					<Logo />
				</a>
				<div className='flex flex-col  md:flex-row gap-5 '>
					{items.map(item => {
						if (typeof item.actionType === 'string') {
							return (
								<a key={item.id} href={item.actionType}>
									{item.name}
								</a>
							);
						}
						if (typeof item.actionType === 'object') {
							return (
								<NavbarChildren
									key={item.id}
									name={item.name}
									items={item.actionType}
								/>
							);
						}
					})}
				</div>
				<div className={`${styleString}`}>
					<PageTop isCol={true} isMobile={isMobile} />
				</div>
			</section>
		</div>
	);
}

export default NavbarItem;
