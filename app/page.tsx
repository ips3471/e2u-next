import Image from 'next/image';
import PageTop from './components/PageTop';
import Navbar from './components/Navbar';
import Cover from './components/Cover';

export default function Home() {
	return (
		<main>
			<PageTop />
			<Navbar />
			<Cover />
		</main>
	);
}
