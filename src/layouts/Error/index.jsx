import Nav from '../Nav';
import Footer from '../Footer';

function Error(props) {
	return (
		<>
			<Nav />
			<section className="flex min-h-[calc(100vh-136px)] flex-col justify-center">
				<div className="mx-auto max-w-screen-xl py-8 px-4 text-center">
					<h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">404</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Something's missing.
					</p>
					<p className="mb-4 text-lg font-light text-gray-500">
						Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
					</p>
					<a
						href="/"
						className="focus:ring-primary-300 my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4">
						Back to Homepage
					</a>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Error;
