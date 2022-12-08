import { FaQuestionCircle } from 'react-icons/fa';

import { motion } from 'framer-motion';

function Faq({ data, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true }}
			className={(index < 2 ? 'mb-8 ' : '') + 'max-w-xl'}>
			<h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
				<FaQuestionCircle className="text-gray-600 mr-2" />
				{data.question}
			</h3>
			<p className="text-gray-500">{data.answer}</p>
		</motion.div>
	);
}

export default Faq;
