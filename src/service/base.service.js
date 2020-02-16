import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const httpGet = (url) => {
	return instance.get(url);
};

export const httpPost = (url, payload) => {
	return instance.post(url, payload);
};

export const httpPut = (url, payload) => {
	return instance.post(url, payload);
};

export const httpDelete = (url) => {
	return instance.delete(url);
};

export default instance;
