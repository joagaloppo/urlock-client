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
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
	return (
		<aside className="top-0 left-0 my-8 h-fit w-80 rounded-lg bg-gray-50 shadow-sm">
			<div className="overflow-y-auto py-4 px-3">
				<ul className="space-y-1">
					<li>
						<a
							href="#"
							className="text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100">
							<BiPlusCircle className="h-5 w-5 text-gray-500" />
							<span className="ml-6">Create link</span>
						</a>
					</li>
					<li>
						<NavLink
							to="/dashboard/summary"
							className={({ isActive }) =>
								isActive
									? 'text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-blue-500 hover:bg-gray-100'
									: 'text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100'
							}>
							<BiHome className="h-5 w-5" />
							<span className="ml-6">Dashboard</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/links"
							className={({ isActive }) =>
								isActive
									? 'text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-blue-500 hover:bg-gray-100'
									: 'text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100'
							}>
							<BiLink className="h-5 w-5" />
							<span className="ml-6">Links</span>
						</NavLink>
					</li>
					<li>
						<button
							type="button"
							className="text-md group flex w-full items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown-authentication"
							data-collapse-toggle="dropdown-authentication">
							<BiRocket className="h-5 w-5 text-gray-500" />
							<span className="ml-6 flex-1 whitespace-nowrap text-left">Tools</span>
							<BiChevronDown className="h-5 w-5 text-gray-500" />
						</button>
						<ul id="dropdown-authentication" className="hidden space-y-2 py-2">
							<li>
								<a
									href="#"
									className="text-md group flex w-full items-center rounded-lg p-2 pl-11 font-normal tracking-tight text-gray-500 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Quick link
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-md group flex w-full items-center rounded-lg p-2 pl-11 font-normal tracking-tight text-gray-500 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Mass shrinker
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-md group flex w-full items-center rounded-lg p-2 pl-11 font-normal tracking-tight text-gray-500 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
									Forgot Password
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a
							href="#"
							className="text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100">
							<BiShareAlt className="h-5 w-5 text-gray-500" />
							<span className="ml-6">Referrals</span>
						</a>
					</li>
				</ul>
				<ul className="mt-5 space-y-1 border-t border-gray-200 pt-5">
					<li>
						<a
							href="#"
							className="text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100">
							<BiComment className="h-5 w-5 text-gray-500" />
							<span className="ml-6">Contact us</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100">
							<BiCog className="h-5 w-5 text-gray-500" />
							<span className="ml-6">Settings</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-md flex items-center rounded-lg p-4 font-normal tracking-tight text-gray-500 hover:bg-gray-100">
							<BiLogOut className="h-5 w-5 text-gray-500" />
							<span className="ml-6">Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
