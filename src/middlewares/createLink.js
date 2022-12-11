import { postRequest } from '../services/httpRequest';

export const createLink = async (type, actionUrl, finalUrl) => {
	try {
		const body = await postRequest('/links', { type, actionUrl, finalUrl });
		console.log('success:', body);
		return body;
	} catch (error) {
		throw new Error(error);
	}
};
