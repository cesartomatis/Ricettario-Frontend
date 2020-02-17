import * as authService from '../../service/auth.service';
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_LOGOUT
} from './action-types';
import { setToken } from '../../service/base.service';

const loginStart = () => {
	return {
		type: LOGIN_START
	};
};

const loginSuccess = (token) => {
	return {
		type: LOGIN_SUCCESS,
		token
	};
};

const loginFail = (error) => {
	return {
		type: LOGIN_FAIL,
		error
	};
};

const registerStart = () => {
	return {
		type: REGISTER_START
	};
};

const registerSuccess = () => {
	return {
		type: REGISTER_SUCCESS
	};
};

const registerFail = (error) => {
	return {
		type: REGISTER_FAIL,
		error
	};
};

export const login = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(loginStart());
		try {
			const response = await authService.login({ email, password });
			dispatch(loginSuccess(response.data.token));
			localStorage.setItem('token', response.data.token);
			setToken(response.data.token);
		} catch (err) {
			dispatch(loginFail(err));
		}
	};
};

export const register = (userData) => {
	return async (dispatch) => {
		dispatch(registerStart());
		try {
			await authService.register(userData);
			dispatch(registerSuccess());
		} catch (err) {
			dispatch(registerFail(err));
		}
	};
};

export const logout = () => {
	localStorage.removeItem('token');
	return {
		type: AUTH_LOGOUT
	};
};
