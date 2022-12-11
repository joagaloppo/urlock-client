function Footer(props) {
	return (
		<footer className="w-full bg-gray-200 py-6">
			<div className="m-auto flex max-w-screen-xl flex-row place-content-between items-center  text-sm">
				<div className="flex flex-row space-x-1">
					<h2 className="font-normal text-gray-600">© 2022 - URLock.net</h2>
				</div>
				<ul className="flex flex-row items-center space-x-2">
					<li className="cursor-pointer text-gray-600 hover:underline">About</li>
					<li className="cursor-pointer text-gray-600 hover:underline">Contact</li>
					<li className="cursor-pointer text-gray-600 hover:underline">Terms</li>
					<li className="cursor-pointer text-gray-600 hover:underline">Policy</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
