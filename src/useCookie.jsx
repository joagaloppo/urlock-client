import cookie from './utils/cookie';

function Cookie() {
	const user = cookie.read('user');
	return (
		<div>
			<p>User: {user}</p>
		</div>
	);
}

export default Cookie;
