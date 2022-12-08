import Faq from '../../../components/landing/faq';

import { motion } from 'framer-motion';

function Five(props) {
	const data = [
		{
			question: 'Does the use of the site follow the community guidelines?',
			answer: "Yes, don't worry, it is safe and the use of this website is done according to the general rules of the community.",
		},
		{
			question: 'Does the use of the site follow the community guidelines?',
			answer: "Yes, don't worry, it is safe and the use of this website is done according to the general rules of the community.",
		},
		{
			question: 'Does the use of the site follow the community guidelines?',
			answer: "Yes, don't worry, it is safe and the use of this website is done according to the general rules of the community.",
		},
		{
			question: 'Does the use of the site follow the community guidelines?',
			answer: "Yes, don't worry, it is safe and the use of this website is done according to the general rules of the community.",
		},
	];

	return (
		<section className="w-full pt-20 pb-20 bg-gray-200">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="m-auto pb-10">
				<h2 className="text-center text-gray-800 tracking-tight font-black text-6xl pb-2">FAQ</h2>
				<p className="text-center text-gray-600 tracking-tighter font-light text-2xl ">
					Frequently asked questions.
				</p>
			</motion.div>
			<div className="mx-auto max-w-screen-xl">
				<div className="flex flex-row flex-wrap justify-between">
					{data &&
						data.map((e, i) => {
							return <Faq key={i} data={e} index={i} />;
						})}
				</div>
			</div>
		</section>
	);
}

export default Five;
