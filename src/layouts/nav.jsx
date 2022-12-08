import SignUp from '../components/modals/signup';
import Login from '../components/modals/login';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import isLogged from '../middlewares/isLogged';
import cookie from '../utils/cookie';

function Nav() {
	const [user, setUser] = useState(null);

	const handleLogout = async (e) => {
		e.preventDefault();
		cookie.delete('user');
		setUser(null);
	};

	useEffect(() => {
		setUser(() => isLogged());
	}, []);

	return (
		<nav className="py-4 w-full bg-blue-500">
			<motion.div
				// initial={{ opacity: 0, y: -40 }}
				// animate={{ opacity: 1, y: 0 }}
				// transition={{ type: 'just', duration: 0.7 }}
				className="flex flex-row max-w-screen-xl place-content-between items-center m-auto">
				<div className="flex flex-row space-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="w-5 h-5">
						<path
							fill="#ffffff"
							d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm3 17c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm2-6c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
						/>
					</svg>
					<h2 className="text-white font-semibold">URLock</h2>
				</div>
				<ul className="flex flex-row space-x-4 items-center text-sm">
					{!user ? (
						<>
							<li>
								<Login type={'text-white hover:underline cursor-pointer'} />
							</li>
							<li>
								<SignUp
									type={
										'px-3 py-2 bg-white text-blue-500 rounded-md font-semibold cursor-pointer hover:bg-gray-100 transition'
									}
									text={'Sign Up'}
								/>
							</li>
						</>
					) : (
						<>
							<li>
								<a href="/dashboard" className="text-white hover:underline cursor-pointer">
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="/logout"
									className="text-white hover:underline cursor-pointer"
									onClick={(e) => handleLogout(e)}>
									Logout
								</a>
							</li>
						</>
					)}
				</ul>
			</motion.div>
		</nav>
	);
}

export default Nav;
