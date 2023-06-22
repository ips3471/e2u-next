import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTop from './components/PageTop';

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
			<body>
				<header className='p-container-sm space-y-3 '>
					<PageTop />
					<Navbar />
				</header>

				{children}
			</body>
			<Footer />
		</html>
	);
}
