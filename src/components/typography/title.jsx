function Title({ children, ...props }) {
	return (
		<h3
			{...props}
			className={`tracking-tight font-extrabold text-6xl text-${props.color} text-${props.alignment || 'left'}`}>
			{children}
		</h3>
	);
}

export default Title;
