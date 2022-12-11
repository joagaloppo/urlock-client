import { useState, useEffect } from 'react';
import cookie from '../../../utils/cookie';
import SignUp from '../../../components/modals/signup';
import Login from '../../../components/modals/login';
import { Link } from 'react-router-dom';

function Right() {
	const [user, setUser] = useState(null);

	const handleLogout = async (e) => {
		e.preventDefault();
		cookie.delete('user');
		setUser(null);
	};

	useEffect(() => {
		const auth = cookie.read('user');
		setUser(() => auth);
	}, []);

	return (
		<ul className="flex flex-row items-center space-x-4 text-sm">
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
						<Link to="/dashboard" className="cursor-pointer text-white hover:underline">
							Dashboard
						</Link>
					</li>
					<li>
						<button
							href="/logout"
							className="cursor-pointer rounded-md bg-white px-3 py-2 font-semibold text-blue-500 transition hover:bg-gray-100 hover:underline"
							onClick={(e) => handleLogout(e)}>
							Logout
						</button>
					</li>
				</>
			)}
		</ul>
	);
}

export default Right;
