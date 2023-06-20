import PageTop from './components/PageTop';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Contents from './components/Contents';

export default function Home() {
	return (
		<main>
			<PageTop />
			<Navbar />
			<Cover />
			<Contents />
		</main>
	);
}
