import { motion } from 'framer-motion';

function Advantages({ data, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: (index % 2 === 0 ? -1 : 1) * 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className="mb-10 flex min-h-[200px] max-w-[620px] flex-row items-center space-x-12 rounded-2xl bg-white p-8 shadow-sm">
			<img src={data.img} width="120px" />
			<div>
				<h3 className="bg-gradient-to-l from-blue-800 to-blue-500 bg-clip-text pb-1 text-2xl font-bold tracking-tight text-transparent">
					{data.title}
				</h3>
				<p className="text-lg tracking-tighter text-slate-800">{data.description}</p>
			</div>
		</motion.div>
	);
}

export default Advantages;
