export type PageTopItem = {
	id: string;
	name: string;
	href: string;
	tagName: TagName;
	isEmp?: boolean;
};
export type TagName = 'API' | '솔루션' | '#';
export const pageTopItems: PageTopItem[] = [
	{
		id: '1',
		name: '결제 연동 문서',
		href: 'https://doc.e2u.kr/',
		tagName: 'API',
		isEmp: false,
	},
	{
		id: '2',
		name: '결제/정산 시스템',
		href: 'https://pg.e2u.kr/',
		tagName: '솔루션',
		isEmp: true,
	},
	{
		id: '3',
		name: '결제 내역 조회',
		href: 'https://www.e2u.kr/payment-search',
		tagName: '#',
		isEmp: false,
	},
];

export type LinkItem = {
	id: string;
	name: string;
	href: Url;
};
export type Url = string;
export type Unfold = LinkItem[];
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

export type CallToActionItem = {
	title: string;
	description: string;
	links: LinkItem[];
};

export const callToActions: Record<'cover' | 'main', CallToActionItem> = {
	cover: {
		title: '쉽고 빠른 결제/정산시스템',
		description:
			'가장 쉽게 결제하는 시스템 이투유를 사용해보세요. 누구보다 쉽지만, 누구보다 알찹니다.',
		links: [
			{
				href: 'https://www.e2u.kr/service-apply',
				id: '1',
				name: '서비스 신청하기',
			},
			{
				href: 'https://www.e2u.kr/payment-search',
				id: '2',
				name: '결제내역 조회',
			},
		],
	},
	main: {
		title: '이투유와 함께 결제와 정산을 해보세요.',
		description:
			'이투유가 함께 한다면 멋지고 새로운 경험을 하실 수 있습니다. 이투유는 지금도 계속 발전하고 있어요!',
		links: [
			{
				href: 'https://www.e2u.kr/service-apply',
				id: '1',
				name: '서비스 신청하기',
			},
		],
	},
};

export type ImageUrls = Record<'cover', Url[]>;
export const imageUrls: ImageUrls = {
	cover: [
		'https://www.e2u.kr/img/main/career-listing.png',
		'https://www.e2u.kr/img/main/service.png',
		'https://www.e2u.kr/img/main/faq.png',
		'https://www.e2u.kr/img/main/desktop-app.png',
		'https://www.e2u.kr/img/main/company-terms.png',
		'https://www.e2u.kr/img/main/privacy.png',
	],
};

export type TextItemSection = {
	id: string;
	title: string;
	description: string;
	items: TextItemDetail[];
};
export type TextItemDetail = {
	id: string;
	title: string;
	description: string;
	logoImg?: string;
};

export const textItems: TextItemSection[] = [
	{
		id: '1',
		description:
			'실무에서 사용되는 기능들을 보다 빠르고 쉽게 사용 할 수 있도록 설계되었습니다.',
		items: [
			{
				id: '1',
				description: '클릭 한번으로 간편하게 결제와 정산을 할 수 있어요.',
				title: '원클릭 결제/정산',
				logoImg: '/imgs/pointer.svg',
			},
			{
				id: '2',
				description:
					'사용자 경험을 바탕으로 사용자가 편리하게 사용 할 수 있도록 화면이 설계되어 있어요.',
				title: '사용자 경험 기반의 디자인',
				logoImg: '/imgs/interactive.svg',
			},
			{
				id: '3',
				description:
					'인증 결제, 수기 결제, 단말기 결제 등등 API를 통해 빠르게 결제 기능을 연동 할 수 있어요.',
				title: '손쉬운 API 연동',
				logoImg: '/imgs/codeblock.svg',
			},
		],
		title: '효율적인 결제/정산 시스템을 활용하세요.',
	},
	{
		id: '2',
		description:
			'이투유가 제공하는 결제/정산 시스템을 사용하면 보다 효율적으로 결제와 정산을 할 수 있어요.',
		items: [
			{
				id: '1',
				description:
					'거래 다음날 바로 정산 할 수 있어요. 여유있게 자금을 유용해보세요.',
				title: '1일 정산',
			},
			{
				id: '2',
				description:
					'지금 3만개 이상의 가맹점에서 E2U 정산 시스템을 사용하고 있어요.',
				title: '3만개 이상',
			},
			{
				id: '3',
				description: '월 평균 400억 이상의 거래가 원활히 이루어지고 있어요.',
				title: '400억',
			},
		],
		title: '결제와 정산이 더 이상 어렵지 않습니다.',
	},
	{
		id: '3',
		description: '',
		items: [
			{
				id: '1',
				description:
					'더 이상 가입비와 연회비는 받지 않습니다. 부담없이 정산/결제 서비스를 이용해보세요.',
				title: '가입비, 연회비 무료',
				logoImg: '/imgs/heart.svg',
			},
			{
				id: '2',
				description:
					'전산화 된 서비스를 통해 보다 신속하고, 정확해진 정산/결제 기능을 사용 할 수 있어요.',
				title: '자동화 시스템',
				logoImg: '/imgs/moon.svg',
			},
			{
				id: '3',
				description:
					'새로워진 화면 설계를 기반으로 더 나은 사용자 UI/UX 환경을 제공해요.',
				title: '편의성',
				logoImg: '/imgs/interactive-white.svg',
			},
			{
				id: '4',
				description:
					'대행사, 에이전시, 가맹점, 터미널 등 계층 관리를 사용해 가시적인 통합 관리 기능을 제공해요.',
				title: '체계적인 관리',
				logoImg: '/imgs/puzzle.svg',
			},
			{
				id: '5',
				description:
					'Restful한 API를 이용해 빠르게 결제 기능을 연동 할 수 있어요.',
				title: '결제 기능 연동 편의성',
				logoImg: '/imgs/lightning.svg',
			},
			{
				id: '6',
				description:
					'자체적인 개발 인력을 통해 점진적으로 솔루션을 개선하고 있어요.',
				title: '지속적인 관리',
				logoImg: '/imgs/turning.svg',
			},
		],
		title: '',
	},
];

export type FooterLink = LinkItem & { isEmp: boolean };
export const footerLinks: FooterLink[] = [
	{
		id: '1',
		href: 'https://www.e2u.kr/',
		name: '홈',
		isEmp: false,
	},
	{
		id: '2',
		href: 'https://doc.e2u.kr/',
		name: '결제 연동 문서',
		isEmp: false,
	},
	{
		id: '3',
		href: 'https://pg.e2u.kr/',
		name: '결제/정산 시스템',
		isEmp: true,
	},
];
