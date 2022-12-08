import Nav from '../layouts/nav';
import Footer from '../layouts/footer';

function Error(props) {
	return (
		<>
			<Nav />
			<section className="flex flex-col justify-center min-h-[calc(100vh-136px)]">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
					<h1 className="text-blue-600 mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
					<p className="text-gray-900 mb-4 text-3xl tracking-tight font-bold md:text-4xl">
						Something's missing.
					</p>
					<p className="text-gray-500 mb-4 text-lg font-light">
						Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
					</p>
					<a
						href="/"
						className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
						Back to Homepage
					</a>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Error;
