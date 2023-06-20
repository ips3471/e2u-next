type PageTopItem = {
	id: string;
	name: string;
	href: string;
	tagName: string;
};
export const pageTopItems: PageTopItem[] = [
	{
		id: '1',
		name: '결제 연동 문서',
		href: 'https://doc.e2u.kr/',
		tagName: 'API',
	},
	{
		id: '2',
		name: '결제/정산 시스템',
		href: 'https://pg.e2u.kr/',
		tagName: '솔루션',
	},
	{
		id: '3',
		name: '결제 내역 조회',
		href: 'https://www.e2u.kr/payment-search',
		tagName: '#',
	},
];

export type NavbarUnfoldItem = {
	id: string;
	name: string;
	href: string;
};
export type Url = string;
export type Unfold = NavbarUnfoldItem[];
export type NavbarItem = {
	id: string;
	name: string;
	actionType: Url | Unfold;
};
export const navbarItems: NavbarItem[] = [
	{
		id: '1',
		name: '회사 소개',
		actionType: 'https://www.e2u.kr/company-intro',
	},
	{
		id: '2',
		name: '서비스 안내',
		actionType: [
			{
				id: '1',
				name: '개요',
				href: 'https://www.e2u.kr/service#top',
			},
			{
				id: '2',
				name: '카드 결제 서비스',
				href: 'https://www.e2u.kr/service#feature',
			},
			{
				id: '3',
				name: '앱 결제 서비스',
				href: 'https://www.e2u.kr/service#feature-two',
			},
			{
				id: '4',
				name: '계좌이체 서비스',
				href: 'https://www.e2u.kr/service#feature-three',
			},
		],
	},
	{
		id: '3',
		name: '서비스 신청 안내',
		actionType: 'https://www.e2u.kr/service-apply',
	},
	{
		id: '4',
		name: '고객지원',
		actionType: [
			{
				id: '1',
				name: '자주하는 질문',
				href: 'https://www.e2u.kr/faq',
			},
			{
				id: '2',
				name: '이용약관',
				href: 'https://www.e2u.kr/company-terms',
			},
			{
				id: '3',
				name: '개인정보처리방침',
				href: 'https://www.e2u.kr/privacy',
			},
		],
	},
];
