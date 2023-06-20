import './globals.css';

export const metadata = {
	title: 'e2u-next',
	description: 'more SEO friendly',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko'>
			<body> {children}</body>
		</html>
	);
}
