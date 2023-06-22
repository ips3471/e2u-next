import Image from 'next/image';

interface LogoProps {}

function Logo({}: LogoProps) {
	return (
		<h1 className='flex items-center max-h-full'>
			<Image
				src='https://www.e2u.kr/img/logos/e2u-logo.svg'
				width={100}
				height={40}
				alt='logo'
			/>
		</h1>
	);
}

export default Logo;
