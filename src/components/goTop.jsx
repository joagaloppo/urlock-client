import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GoTop(props) {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleClick = () => {
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener('scroll', updatePosition);
		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return (
		<AnimatePresence>
			{scrollPosition > 200 && (
				<motion.button
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
					exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 1 }}
					className="fixed h-16 w-16 bottom-6 right-8 rounded-full text-white text-2xl bg-blue-500"
					onClick={() => handleClick()}>
					↑
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default GoTop;
