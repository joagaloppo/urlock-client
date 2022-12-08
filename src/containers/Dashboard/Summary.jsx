import Nav from '../../layouts/Nav.jsx';
import Dashboard from '../../pages/dashboard/index.jsx';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cookie from '../../utils/cookie.js';

function Summary() {
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
			<Dashboard />
		</>
	);
}

export default Summary;
