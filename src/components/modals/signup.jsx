import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function SignUp({ type, text, icon }) {
	const [hidden, setHidden] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		setHidden((prev) => !prev);
		document.body.classList.toggle('no-scroll');
	};

	return (
		<>
			<button className={type} onClick={handleClick}>
				{text} {icon && icon}
			</button>
			<AnimatePresence initial={true}>
				{hidden ? null : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.2 } }}
						exit={{ opacity: 0 }}
						transition={{ type: 'tween' }}
						id="authentication-modal"
						tabIndex="-1"
						aria-hidden="true"
						className="flex items-center bg-black/40 fixed top-0 right-0 left-0 min-h-full min-w-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.2 } }}
							transition={{ type: 'tween' }}
							className="relative mx-auto bg-white w-full md:max-w-md max-w-[94%] rounded-lg shadow-lg">
							<button
								type="button"
								className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
								data-modal-toggle="authentication-modal"
								onClick={handleClick}>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
							<div className="py-6 px-6 lg:px-8">
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									Sign up to our platform
								</h3>
								<form className="space-y-6" action="#">
									<div>
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											placeholder="name@company.com"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											required
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Your password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
											required
										/>
									</div>
									<button
										type="submit"
										className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										Register
									</button>
									<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
										Already have an account?{' '}
										<a href="#" className="text-blue-500 hover:underline">
											Login
										</a>
									</div>
								</form>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default SignUp;
