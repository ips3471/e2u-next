import Image from 'next/image';

interface LogoProps {}

function Logo({}: LogoProps) {
	return (
		<h1 className='h-full'>
			<Image
				src='https://www.e2u.kr/img/logos/e2u-logo.svg'
				width={180}
				className='max-h-full'
				height={60}
				alt='logo'
			/>
		</h1>
	);
}

export default Logo;
