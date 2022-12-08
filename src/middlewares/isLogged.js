import cookie from '../utils/cookie';

export default function isLogged() {
	const user = cookie.read('user');
	return user;
}
