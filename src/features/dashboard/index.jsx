import Nav from '../../layouts/Nav';
import Sidebar from './components/sidebar';
import cookie from '../../utils/cookie';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const log = cookie.read('user');
		if (!log) {
			navigate('/', { replace: true });
		}
		setUser(() => log);
	}, []);

	return (
		<>
			<Nav />
			<div className="min-h-[calc(100vh-68px)] w-full bg-gray-200">
				<div className="m-auto flex min-h-full max-w-screen-xl flex-row">
					<Sidebar />
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
