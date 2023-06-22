import Image from 'next/image';
import { navbarItems } from '../database';
import Logo from './Navbar/Logo';
import NavbarChildren from './Navbar/NavbarChildren';
import PageTop from './PageTop';
import NavbarItem from './Navbar/NavbarItem';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
	return (
		<div className='p-2 flex justify-between items-center h-10 '>
			<a className='h-full block' href='https://www.e2u.kr/'>
				<Logo />
			</a>

			<div className='group md:hidden w-full'>
				<NavbarItem items={navbarItems} isMobile={true} />
			</div>
			<NavbarItem items={navbarItems} isMobile={false} />
		</div>
	);
}

export default Navbar;
