function Footer(props) {
	return (
		<footer className="py-6 w-full bg-gray-200">
			<div className="flex flex-row max-w-screen-xl place-content-between items-center m-auto  text-sm">
				<div className="flex flex-row space-x-1">
					<h2 className="text-gray-600 font-normal">© 2022 - URLock.net</h2>
				</div>
				<ul className="flex flex-row space-x-2 items-center">
					<li className="text-gray-600 cursor-pointer hover:underline">About</li>
					<li className="text-gray-600 cursor-pointer hover:underline">Contact</li>
					<li className="text-gray-600 cursor-pointer hover:underline">Terms</li>
					<li className="text-gray-600 cursor-pointer hover:underline">Policy</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
