import SignUp from '../../../../components/modals/signup';
import grow from './../../../../assets/img/landing/grow.png';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function CTA() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="w-full bg-[#f2f2f2] py-20">
			<div className="m-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between">
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
					className="min-h-auto max-w-lg space-y-4">
					<div>
						<h3 className="text-6xl font-black tracking-tight text-gray-800">Engaging was </h3>
						<h3 className="text-6xl font-black tracking-tight text-gray-800">never this easy!</h3>
					</div>
					<p className=" text-xl text-gray-700">
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

export default CTA;
