import { httpGet, httpPost } from './base.service';

export const login = (payload) => {
	return httpPost('auth/login', payload);
};

export const register = (payload) => {
	return httpPost('auth/register', payload);
};

export const checkSession = () => {
	return httpGet('auth/checksession');
};
