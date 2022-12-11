import axios from 'axios';
import cookie from '../utils/cookie';

const httpRequest = (verb, endpoint, data, headers = {}) => {
	const config = {
		headers,
	};

	const { token } = cookie.read('user') || '';
	if (token) config.headers.Authorization = `Bearer ${token}`;

	config.method = verb;

	config.url = import.meta.env.VITE_API_URL + endpoint;

	if (data) config.data = data;

	return new Promise((resolve, reject) => {
		axios(config)
			.then((res) => resolve(res.data))
			.catch((error) => reject(error));
	});
};

export const getRequest = (endpoint, headers) => httpRequest('get', endpoint, null, headers);
export const postRequest = (endpoint, data, headers) => httpRequest('post', endpoint, data, headers);
export const putRequest = (endpoint, data, headers) => httpRequest('put', endpoint, data, headers);
export const patchRequest = (endpoint, data, headers) => httpRequest('patch', endpoint, data, headers);
export const deleteRequest = (endpoint, headers) => httpRequest('delete', endpoint, null, headers);
