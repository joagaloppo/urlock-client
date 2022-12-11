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

function Create() {
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
			className="mr-0 max-w-lg rounded-xl bg-white shadow-md">
			<div className="px-6 py-8 text-center">
				<div className="pb-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-700">Create your first link</h3>
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
											'hover:text-[ mr-2 mb-2 flex cursor-pointer flex-row items-center space-x-2 rounded-lg border border-gray-300 py-2 px-3 text-gray-600' +
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
						<label className="mb-2 flex flex-row items-center text-sm font-medium text-gray-700">
							Action URL <FaInfoCircle className="ml-2" />
						</label>
						<input
							type="text"
							className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-700  focus:border-gray-600 focus:outline-none sm:text-sm"
							placeholder="https://www.instagram.com/joagaloppo/"
						/>
					</div>
					<div>
						<label className="mb-2 flex flex-row items-center text-sm font-medium text-gray-700">
							Final URL <FaInfoCircle className="ml-2" />
						</label>
						<input
							type="text"
							className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900  focus:border-gray-600 focus:outline-none sm:text-sm"
							placeholder="https://www.mediafire.com/5agl0yeuo/"
						/>
					</div>
					<div className="pt-4">
						<button
							type="submit"
							className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
							Create
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default Create;
