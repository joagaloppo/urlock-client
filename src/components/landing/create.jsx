import {
	FaYoutube,
	FaTwitch,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTiktok,
	FaPinterest,
	FaGithub,
	FaReddit,
	FaDiscord,
	FaPlus,
	FaInfoCircle,
} from 'react-icons/fa';

import { motion } from 'framer-motion';

function Create(props) {
	const options = [
		{ name: 'Youtube', icon: <FaYoutube className="w-3" />, color: '#ff0000' },
		{ name: 'Linkedin', icon: <FaLinkedin className="w-3" />, color: '#0a63bc' },
		{ name: 'Twitter', icon: <FaTwitter className="w-3" />, color: '#1c96e8' },
		{ name: 'Twitch', icon: <FaTwitch className="w-3" />, color: '#8c44f7' },
		{ name: 'Instagram', icon: <FaInstagram className="w-3" />, color: '#e8572e' },
		{ name: 'TikTok', icon: <FaTiktok className="w-3" />, color: '#f52b51' },
		{ name: 'Facebook', icon: <FaFacebook className="w-3" />, color: '#1773ea' },
		{ name: 'Pinterest', icon: <FaPinterest className="w-3" />, color: '#df0022' },
		{ name: 'Github', icon: <FaGithub className="w-3" />, color: '#df0022' },
		{ name: 'Reddit', icon: <FaReddit className="w-3" />, color: '#df0022' },
		{ name: 'Discord', icon: <FaDiscord className="w-3" />, color: '#df0022' },
		{ name: 'Other', icon: <FaPlus className="w-3" />, color: '#593e31' },
	];

	return (
		<motion.div
			initial={{ opacity: 0, x: 60 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'just', duration: 0.7 }}
			className="bg-white max-w-lg mr-0 shadow-md rounded-xl">
			<div className="px-6 py-8 text-center">
				<div className="pb-4">
					<h3 className="text-2xl leading-tight font-bold text-gray-700">Create your first link</h3>
					<p className="text-md font-thin tracking-tight text-gray-500">
						Fill this form to generate your first sharable url
					</p>
				</div>
				<form className="space-y-2">
					<div>
						<div className="flex flex-row flex-wrap justify-center">
							{options.map((e, i) => {
								return (
									<div
										key={i}
										className={
											'flex flex-row text-gray-600 items-center mr-2 space-x-2 py-2 px-3 cursor-pointer border border-gray-300 rounded-lg mb-2 hover:text-[' +
											'e.color' +
											'] hover:border-[' +
											e.color +
											'] transition'
										}>
										{e.icon}
										<span className="text-sm tracking-tighter">{e.name}</span>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<label className="mb-2 text-sm font-medium text-gray-700 flex flex-row items-center">
							Action URL <FaInfoCircle className="ml-2" />
						</label>
						<input
							type="text"
							className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:border-gray-600  w-full p-2.5 focus:outline-none"
							placeholder="https://www.instagram.com/joagaloppo/"
						/>
					</div>
					<div>
						<label className="mb-2 text-sm font-medium text-gray-700 flex flex-row items-center">
							Final URL <FaInfoCircle className="ml-2" />
						</label>
						<input
							type="text"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-gray-600  w-full p-2.5 focus:outline-none"
							placeholder="https://www.mediafire.com/5agl0yeuo/"
						/>
					</div>
					<div className="pt-4">
						<button
							type="submit"
							className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5">
							Create
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default Create;
