import {
	GET_PUBLIC_RECIPES_START,
	GET_PUBLIC_RECIPES_SUCCESS,
	GET_PUBLIC_RECIPES_FAIL,
	GET_ALL_RECIPES_START,
	GET_ALL_RECIPES_SUCCESS,
	GET_ALL_RECIPES_FAIL,
	GET_USER_RECIPES_START,
	GET_USER_RECIPES_SUCCESS,
	GET_USER_RECIPES_FAIL
} from '../actions/action-types';

const initialState = {
	recipes: null,
	error: null
};

const getPublicRecipesStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const getPublicRecipesSuccess = (state, action) => {
	return {
		...state,
		recipes: action.recipes,
		error: null
	};
};

const getPublicRecipesFail = (state, action) => {
	return {
		...state,
		recipes: null,
		error: action.error
	};
};

const getAllRecipesStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const getAllRecipesSuccess = (state, action) => {
	return {
		...state,
		recipes: action.recipes,
		error: null
	};
};

const getAllRecipesFail = (state, action) => {
	return {
		...state,
		recipes: null,
		error: action.error
	};
};

const getUserRecipesStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const getUserRecipesSuccess = (state, action) => {
	return {
		...state,
		recipes: action.recipes,
		error: null
	};
};

const getUserRecipesFail = (state, action) => {
	return {
		...state,
		recipes: null,
		error: action.error
	};
};
