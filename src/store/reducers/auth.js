import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_LOGOUT
} from '../actions/action-types';

const initialState = {
	token: null,
	error: null
};

const loginStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const loginSuccess = (state, action) => {
	return {
		...state,
		token: action.token,
		error: null
	};
};

const loginFail = (state, action) => {
	return {
		...state,
		token: null,
		error: action.error
	};
};

const registerStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const registerSuccess = (state, action) => {
	return {
		...state,
		error: null
	};
};

const registerFail = (state, action) => {
	return {
		...state,
		token: null,
		error: action.error
	};
};

const authLogout = (state, action) => {
	return {
		...state,
		token: null
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return loginStart(state, action);
		case LOGIN_SUCCESS:
			return loginSuccess(state, action);
		case LOGIN_FAIL:
			return loginFail(state, action);
		case REGISTER_START:
			return registerStart(state, action);
		case REGISTER_SUCCESS:
			return registerSuccess(state, action);
		case REGISTER_FAIL:
			return registerFail(state, action);
		case AUTH_LOGOUT:
			return authLogout(state, action);
		default:
			return {
				...state
			};
	}
};

export default reducer;
