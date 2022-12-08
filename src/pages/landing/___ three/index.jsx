import one from '../../../assets/advantages/1.png';
import two from '../../../assets/advantages/2.png';
import three from '../../../assets/advantages/3.png';
import four from '../../../assets/advantages/4.png';
import five from '../../../assets/advantages/5.png';
import six from '../../../assets/advantages/6.png';
import Advantages from '../../../components/landing/advantages';

import { motion } from 'framer-motion';

function Three(props) {
	const text = [
		{
			img: one,
			title: 'Real time statistics',
			description:
				'See in real time the unlocks that have the best results, and modify your strategy to increase your growth.',
		},
		{
			img: two,
			title: 'Promotion in socials',
			description:
				'With our advanced methods to capture the attention of your visitors you can grow your community quickly and reach more people.',
		},
		{
			img: three,
			title: 'Auto growth',
			description:
				"Don't worry about the number of subscribers you have on your YouTube channel, we take care of growing that number.",
		},
		{
			img: four,
			title: 'Safe ads',
			description:
				'Our entire advertising system is safe for all audiences. Our antivirus checks them 24 hours a day, we show safe and reliable advertising.',
		},
		{
			img: five,
			title: 'Responsive design',
			description:
				'The design of our platform was designed to adapt to all devices, from computers to mobile phones.',
		},
		{
			img: six,
			title: 'Online support',
			description:
				'Contact us at any time about anything, we will be waiting for the chat to help you in your growth process.',
		},
	];

	return (
		<section className="w-full py-20  bg-gray-200">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="m-auto pb-10">
				<h2 className="text-center text-gray-800 tracking-tight font-black text-6xl pb-2">What do we offer?</h2>
				<p className="text-center text-gray-600 tracking-tighter font-light text-2xl ">All our benefits...</p>
			</motion.div>

			<div className="flex flex-row items-center justify-between flex-wrap max-w-screen-xl m-auto mb-[-40px]">
				{text &&
					text.map((e, i) => {
						return <Advantages key={i} data={e} index={i} />;
					})}
			</div>
		</section>
	);
}

export default Three;
