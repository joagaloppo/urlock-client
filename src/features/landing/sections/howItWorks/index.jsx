import create from '../../../../assets/img/landing/steps/shorten.png';
import share from '../../../../assets/img/landing/steps/share.png';
import watch from '../../../../assets/img/landing/steps/watch.png';
import Steps from './components/steps';
import { motion } from 'framer-motion';

function HowItWorks(props) {
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
		<section id="howItWorks" className="w-full bg-[#f2f2f2] py-20">
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="m-auto pb-24">
				<h2 className="pb-2 text-center text-6xl font-black tracking-tight text-gray-800"></h2>
				<h3 className="text-center text-6xl font-extrabold tracking-tight text-gray-800">How does it works?</h3>
				<p className="text-center text-2xl font-light tracking-tighter text-gray-600 ">
					A brief explanation...
				</p>
			</motion.div>

			<div className="m-auto max-w-screen-xl">
				{data && data.map((e, i) => <Steps key={i} data={e} index={i} />)}
			</div>
		</section>
	);
}

export default HowItWorks;
