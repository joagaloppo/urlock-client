import create from '../../../assets/steps/shorten.png';
import share from '../../../assets/steps/share.png';
import watch from '../../../assets/steps/watch.png';
import Steps from '../../../components/landing/steps';

import { motion } from 'framer-motion';
import Title from '../../../components/typography/title';

function Two(props) {
	const data = [
		{
			img: create,
			title: '1. Shorten your link',
			description:
				'Using the create tool, create powerful and aesthetic links to your valuable content. Include your preferred social media url to drive people to it.',
		},
		{
			img: share,
			title: '2. Share with users',
			description:
				'Share your recently created link to all of your target audience. Each one of them will have to check out your social media page before getting access to the content.',
		},
		{
			img: watch,
			title: '3. Watch your rise',
			description:
				"Once you shared your link with multiple users, numbers will start to pop in your social media statistics. Now it's your duty to continue creating amazing content for them!",
		},
	];

	return (
		<section id="howItWorks" className="w-full py-20 bg-[#f2f2f2]">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="m-auto pb-24">
				<h2 className="text-center text-gray-800 tracking-tight font-black text-6xl pb-2"></h2>
				<Title color="gray-800" alignment="center">
					How does it works?
				</Title>
				<p className="text-center text-gray-600 tracking-tighter font-light text-2xl ">
					A brief explanation...
				</p>
			</motion.div>

			<div className="max-w-screen-xl m-auto">
				{data && data.map((e, i) => <Steps key={i} data={e} index={i} />)}
			</div>
		</section>
	);
}

export default Two;
