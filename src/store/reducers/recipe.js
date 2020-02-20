import {
	GET_PUBLIC_RECIPES_START,
	GET_PUBLIC_RECIPES_SUCCESS,
	GET_PUBLIC_RECIPES_FAIL,
	GET_ALL_RECIPES_START,
	GET_ALL_RECIPES_SUCCESS,
	GET_ALL_RECIPES_FAIL,
	GET_USER_RECIPES_START,
	GET_USER_RECIPES_SUCCESS,
	GET_USER_RECIPES_FAIL,
	ADD_RECIPE_START,
	ADD_RECIPE_SUCCESS,
	ADD_RECIPE_FAIL
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

const addRecipeStart = (state, action) => {
	return {
		...state,
		error: null
	};
};

const addRecipeSuccess = (state, action) => {
	return {
		...state,
		recipes: [...state.recipes, action.recipe],
		error: null
	};
};

const addRecipeFail = (state, action) => {
	return {
		...state,
		recipes: null,
		error: action.error
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PUBLIC_RECIPES_START:
			return getPublicRecipesStart(state, action);
		case GET_PUBLIC_RECIPES_SUCCESS:
			return getPublicRecipesSuccess(state, action);
		case GET_PUBLIC_RECIPES_FAIL:
			return getPublicRecipesFail(state, action);
		case GET_ALL_RECIPES_START:
			return getAllRecipesStart(state, action);
		case GET_ALL_RECIPES_SUCCESS:
			return getAllRecipesSuccess(state, action);
		case GET_ALL_RECIPES_FAIL:
			return getAllRecipesFail(state, action);
		case GET_USER_RECIPES_START:
			return getUserRecipesStart(state, action);
		case GET_USER_RECIPES_SUCCESS:
			return getUserRecipesSuccess(state, action);
		case GET_USER_RECIPES_FAIL:
			return getUserRecipesFail(state, action);
		case ADD_RECIPE_START:
			return addRecipeStart(state, action);
		case ADD_RECIPE_SUCCESS:
			return addRecipeSuccess(state, action);
		case ADD_RECIPE_FAIL:
			return addRecipeFail(state, action);
		default:
			return { ...state };
	}
};

export default reducer;
