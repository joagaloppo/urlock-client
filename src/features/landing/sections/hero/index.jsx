import Create from './components/create';
import SignUp from '../../../../components/modals/signup';
import scrollTo from '../../../../utils/scrollTo';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function Hero() {
	return (
		<section className="w-full bg-blue-500 pt-20 pb-[148px]">
			<div className="m-auto flex max-w-screen-xl flex-row flex-wrap justify-between">
				<motion.div
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: 'just', duration: 0.7 }}
					className="flex flex-col justify-center">
					<h3 className="text-6xl font-extrabold tracking-tight text-white">Shorten links and</h3>
					<h3 className="text-6xl font-extrabold tracking-tight text-white">earn real followers</h3>
					<p className=" text-2xl leading-loose tracking-tighter text-white">Make your work count</p>
					<div className="mt-4 flex flex-row items-center ">
						<SignUp
							type={
								'flex flex-row items-center text-blue-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-2.5 text-center'
							}
							text={'Get started'}
							icon={<FaArrowRight className="ml-2" />}
						/>

						<a
							href="#"
							className="ml-4 text-lg font-light text-white hover:underline"
							onClick={(e) => scrollTo(e, 'howItWorks')}>
							How it works?
						</a>
					</div>
				</motion.div>
				<Create />
			</div>
		</section>
	);
}

export default Hero;
