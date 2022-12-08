import {
	BiChevronDown,
	BiPlusCircle,
	BiHome,
	BiLink,
	BiRocket,
	BiShareAlt,
	BiLogOut,
	BiComment,
	BiCog,
} from 'react-icons/bi';

function Sidebar(props) {
	return (
		<aside className="top-0 left-0 w-80 bg-gray-50 h-fit rounded-lg shadow-sm my-8">
			<div className="overflow-y-auto py-4 px-3">
				<ul className="space-y-1">
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiPlusCircle className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Create link</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiHome className="w-5 h-5 text-blue-500" />
							<span className="ml-6 text-blue-500">Dashboard</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiLink className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Links</span>
						</a>
					</li>
					<li>
						<button
							type="button"
							className="flex items-center p-4 w-full text-md font-normal text-gray-500 tracking-tight rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown-authentication"
							data-collapse-toggle="dropdown-authentication">
							<BiRocket className="w-5 h-5 text-gray-500" />
							<span className="flex-1 ml-6 text-left whitespace-nowrap">Tools</span>
							<BiChevronDown className="h-5 w-5 text-gray-500" />
						</button>
						<ul id="dropdown-authentication" className="hidden py-2 space-y-2">
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-md font-normal text-gray-500 tracking-tight rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Quick link
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-md font-normal text-gray-500 tracking-tight rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Mass shrinker
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-md font-normal text-gray-500 tracking-tight rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Forgot Password
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiShareAlt className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Referrals</span>
						</a>
					</li>
				</ul>
				<ul className="pt-5 mt-5 space-y-1 border-t border-gray-200">
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiComment className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Contact us</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiCog className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Settings</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center p-4 text-md font-normal text-gray-500 tracking-tight rounded-lg hover:bg-gray-100">
							<BiLogOut className="w-5 h-5 text-gray-500" />
							<span className="ml-6">Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
