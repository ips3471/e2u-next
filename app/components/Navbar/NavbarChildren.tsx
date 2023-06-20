'use client';

import { useState } from 'react';
import Button from './Button';
import { LinkItem } from '@/app/database';
import UnfoldContainer from './UnfoldContainer';

interface NavbarChildrenProps {
	name: string;
	items: LinkItem[];
}

function NavbarChildren({ items, name }: NavbarChildrenProps) {
	const [isFold, setIsFold] = useState(true);
	const toggle = () => setIsFold(!isFold);
	return (
		<div className='relative'>
			{<Button name={name} isFold={isFold} onClick={toggle} />}
			{!isFold && <UnfoldContainer items={items} />}
		</div>
	);
}

export default NavbarChildren;
