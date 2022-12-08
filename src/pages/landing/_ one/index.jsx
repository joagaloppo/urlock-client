import Create from '../../../components/landing/create';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Title from '../../../components/typography/title';

import SignUp from '../../../components/modals/signup';

function One(props) {
	const handleClick = (e) => {
		e.preventDefault();
		const scrollTo = document.getElementById('howItWorks');
		scrollTo.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="w-full pt-20 pb-[148px] bg-blue-500">
			<div className="flex flex-row flex-wrap justify-between max-w-screen-xl m-auto">
				<motion.div
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: 'just', duration: 0.7 }}
					className="flex flex-col justify-center">
					<Title color="white">Shorten links and</Title>
					<Title color="white">earn real followers</Title>
					<p className=" text-white leading-loose tracking-tighter text-2xl">Make your work count</p>
					<div className="flex flex-row mt-4 items-center ">
						<SignUp
							type={
								'flex flex-row items-center text-blue-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2.5 text-center'
							}
							text={'Get started'}
							icon={<FaArrowRight className="ml-2" />}
						/>

						<a
							href="#"
							className="text-lg font-light text-white ml-4 hover:underline"
							onClick={(e) => handleClick(e)}>
							How it works?
						</a>
					</div>
				</motion.div>
				<Create />
			</div>
		</section>
	);
}

export default One;
