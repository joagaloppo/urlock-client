import Nav from '../../../layouts/Nav';
import Footer from '../../../layouts/Footer';
import { Link } from 'react-router-dom';

function Error({ error }) {
	return (
		<>
			<Nav />
			<section className="flex min-h-[calc(100vh-136px)] flex-col justify-center bg-gray-100">
				<div className="mx-auto flex w-full max-w-md flex-col rounded-lg bg-white py-8 px-4 text-center shadow-sm">
					<Link to="/">Error: {error.message}</Link>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Error;
