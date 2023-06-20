import { navbarItems } from '../database';
import Logo from './Navbar/Logo';
import Link from 'next/link';
import NavbarChildren from './Navbar/NavbarChildren';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
	return (
		<div className='flex justify-between items-center h-10'>
			<Link className='h-full' href='https://www.e2u.kr/'>
				<Logo />
			</Link>

			<section className='flex gap-7'>
				{navbarItems.map(item => {
					if (typeof item.actionType === 'string') {
						return (
							<Link key={item.id} href={item.actionType}>
								{item.name}
							</Link>
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
			</section>
		</div>
	);
}

export default Navbar;
