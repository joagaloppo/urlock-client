import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Steps({ data, index }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className={
				(index % 2 === 0 ? 'flex-row ' : 'flex-row-reverse ') + 'flex items-center justify-between pb-24 '
			}>
			<img
				style={{
					transform: isInView ? (index % 2 === 0 ? 'translateX(100px)' : 'translateX(-100px)') : 'none',
					opacity: isInView ? 1 : 0,
					transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
				}}
				src={data.img}
				width="500px"
				className="my-[-60px]"
			/>
			<div
				ref={ref}
				style={{
					transform: isInView ? 'none' : index % 2 === 0 ? 'translateX(100px)' : 'translateX(-100px)',
					opacity: isInView ? 1 : 0,
					transition: 'all cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
				}}
				className="max-w-xl">
				<h3 className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text pb-4 text-6xl font-black tracking-tight text-transparent">
					{data.title}
				</h3>
				<span className="text-xl text-gray-600">{data.description}</span>
			</div>
		</div>
	);
}

export default Steps;
