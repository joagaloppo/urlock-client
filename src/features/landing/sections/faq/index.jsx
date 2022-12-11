import Loop from './components/loop';
import { motion } from 'framer-motion';

function FAQ() {
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
		<section className="w-full bg-gray-200 pt-20 pb-20">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="m-auto pb-10">
				<h2 className="pb-2 text-center text-6xl font-black tracking-tight text-gray-800">FAQ</h2>
				<p className="text-center text-2xl font-light tracking-tighter text-gray-600 ">
					Frequently asked questions.
				</p>
			</motion.div>
			<div className="mx-auto max-w-screen-xl">
				<div className="flex flex-row flex-wrap justify-between">
					{data &&
						data.map((e, i) => {
							return <Loop key={i} data={e} index={i} />;
						})}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
