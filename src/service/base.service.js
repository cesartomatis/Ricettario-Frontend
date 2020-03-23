import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const setToken = (token) => {
	instance.interceptors.request.use((req) => {
		req.headers.Authorization = `Bearer ${token}`;
		return req;
	});
};

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

export const httpPostFormData = (url, image, data) => {
	const token = localStorage.getItem('token');
	const formData = new FormData();
	formData.append('image', image);
	formData.append('data', JSON.stringify(data));
	const instanceFormData = axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${token}`
		}
	});
	instanceFormData.post(url, formData);
};

export default instance;
