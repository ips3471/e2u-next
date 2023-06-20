import Image from 'next/image';
import { footerLinks } from '../database';
import StyledLink from './Footer/StyledLink';

interface FooterProps {}

function Footer({}: FooterProps) {
	return (
		<div className='flex flex-col'>
			<h1>
				<Image
					src={'https://www.e2u.kr/img/logos/e2u-logo.svg'}
					width={160}
					height={60}
					className='max-h-full'
					alt={'ease to use logo'}
				/>
			</h1>
			<nav>
				{footerLinks.map(item => (
					<StyledLink item={item} key={item.id} />
				))}
			</nav>
			<div>
				<p>
					Copyright © <time>2022</time> E2U All rights reserved
				</p>
				<p>
					대표전화 1600-4191 | 이메일 e2u@e2u.kr | 사업자등록번호 383-87-01545 |
					대표자 이용원
				</p>
				<p>
					(주)이투유 | 경기도 성남시 수정구 위례광장로 19 아이페리온, 10층
					1001호
				</p>
			</div>
		</div>
	);
}

export default Footer;
