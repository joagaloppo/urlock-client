import { motion } from 'framer-motion';

function Advantages({ data, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: (index % 2 === 0 ? -1 : 1) * 100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className="flex flex-row items-center bg-white space-x-12 min-h-[200px] max-w-[620px] p-8 mb-10 shadow-sm rounded-2xl">
			<img src={data.img} width="120px" />
			<div>
				<h3 className="text-transparent bg-clip-text bg-gradient-to-l from-blue-800 to-blue-500 tracking-tight font-bold text-2xl pb-1">
					{data.title}
				</h3>
				<p className="text-slate-800 tracking-tighter text-lg">{data.description}</p>
			</div>
		</motion.div>
	);
}

export default Advantages;
