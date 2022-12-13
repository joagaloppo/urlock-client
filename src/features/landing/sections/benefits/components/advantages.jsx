import { motion } from 'framer-motion';

function Advantages({ data, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: (index % 2 === 0 ? -1 : 1) * 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className="mb-10 flex min-h-[200px] max-w-[620px] flex-row items-center space-x-12 rounded-lg bg-white px-8">
			<img src={data.img} width="120px" />
			<div>
				<h3 className="pb-2 text-2xl font-bold tracking-tight text-blue-500">{data.title}</h3>
				<p className="text-lg tracking-tighter text-gray-500">{data.description}</p>
			</div>
		</motion.div>
	);
}

export default Advantages;
