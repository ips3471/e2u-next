import { ReactNode } from 'react';

interface MobileWrapperProps {
	children: ReactNode;
}

function MobileWrapper({ children }: MobileWrapperProps) {
	return <div className='group'>{children}</div>;
}

export default MobileWrapper;
