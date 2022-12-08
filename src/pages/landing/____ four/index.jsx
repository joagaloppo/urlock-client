import grow from './../../../assets/grow.png';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import SignUp from '../../../components/modals/signup';

function Four(props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="w-full py-20 bg-[#f2f2f2]">
			<div className="flex flex-row flex-wrap items-center justify-between max-w-screen-xl m-auto">
				<img
					style={{
						transform: isInView ? 'none' : 'translateX(-100px)',
						opacity: isInView ? 1 : 0,
						transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
					}}
					src={grow}
					width="480px"
				/>
				<div
					ref={ref}
					style={{
						transform: isInView ? 'none' : 'translateX(100px)',
						opacity: isInView ? 1 : 0,
						transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
					}}
					className="max-w-lg space-y-4 min-h-auto">
					<div>
						<h3 className="text-gray-800 tracking-tight font-black text-6xl">Engaging was </h3>
						<h3 className="text-gray-800 tracking-tight font-black text-6xl">never this easy!</h3>
					</div>
					<p className=" text-gray-700 text-xl">
						Share valuable content and get recognition you can measure in exchange.
					</p>

					<SignUp
						type={
							'flex flex-row items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-2.5'
						}
						text={'Get started'}
						icon={<FaArrowRight className="ml-2" />}
					/>
				</div>
			</div>
		</section>
	);
}

export default Four;
