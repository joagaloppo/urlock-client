import { motion } from 'framer-motion';
import Create from '../landing/create';

function CreateDashboard({ setLoginVisible, handleClick }) {
	return (
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
					onClick={(e) => handleClick(e, setLoginVisible)}>
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
					<Create />
				</div>
			</motion.div>
		</motion.div>
	);
}

export default CreateDashboard;