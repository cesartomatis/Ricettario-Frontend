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
} from './action-types';
import * as recipeService from '../../service/recipe.service';

const getPublicRecipesStart = () => {
	return {
		type: GET_PUBLIC_RECIPES_START
	};
};

const getPublicRecipesSuccess = (recipes) => {
	return {
		type: GET_PUBLIC_RECIPES_SUCCESS,
		recipes
	};
};

const getPublicRecipesFail = (error) => {
	return {
		type: GET_PUBLIC_RECIPES_FAIL,
		error
	};
};

const getAllRecipesStart = () => {
	return {
		type: GET_ALL_RECIPES_START
	};
};

const getAllRecipesSuccess = (recipes) => {
	return {
		type: GET_ALL_RECIPES_SUCCESS,
		recipes
	};
};

const getAllRecipesFail = (error) => {
	return {
		type: GET_ALL_RECIPES_FAIL,
		error
	};
};

const getUserRecipesStart = () => {
	return {
		type: GET_USER_RECIPES_START
	};
};

const getUserRecipesSuccess = (recipes) => {
	return {
		type: GET_USER_RECIPES_SUCCESS,
		recipes
	};
};

const getUserRecipesFail = (error) => {
	return {
		type: GET_USER_RECIPES_FAIL,
		error
	};
};

export const getPublicRecipes = () => {
	return async (dispatch) => {
		dispatch(getPublicRecipesStart());
		try {
			const response = await recipeService.getPublicRecipes();
			dispatch(getPublicRecipesSuccess(response.data.recipes));
		} catch (err) {
			dispatch(getPublicRecipesFail(err));
		}
	};
};

export const getAllRecipes = () => {
	return async (dispatch) => {
		dispatch(getAllRecipesStart());
		try {
			const response = await recipeService.getAllRecipes();
			dispatch(getAllRecipesSuccess(response.data.recipes));
		} catch (err) {
			dispatch(getAllRecipesFail(err));
		}
	};
};

export const getUserRecipes = () => {
	return async (dispatch) => {
		dispatch(getUserRecipesStart());
		try {
			const response = await recipeService.getUserRecipes();
			dispatch(getUserRecipesSuccess(response.data.recipes));
		} catch (err) {
			dispatch(getUserRecipesFail(err));
		}
	};
};
