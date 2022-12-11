import cookie from './utils/cookie';

function Cookie() {
	const user = cookie.read('user');
	return (
		<div className="flex space-x-2 w-fit mx-auto my-6">
			<p className="text-sm">User:</p>
			<p className="text-sm">{user}</p>
		</div>
	);
}

export default Cookie;
