import cookie from '../utils/cookie';

import { postRequest } from './httpRequest';

export const login = async (username, password) => {
	try {
		const body = await postRequest('/auth/login', { username, password });
		console.log('success:', body);
		cookie.write('user', body.tokens.access, 7);
		return body;
	} catch (error) {
		throw new Error(error);
	}
};

export const logout = () => cookie.delete('user');
