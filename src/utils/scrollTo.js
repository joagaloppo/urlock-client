const scrollTo = (e, id) => {
	e.preventDefault();
	const scrollTo = document.getElementById(id);
	scrollTo.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;
