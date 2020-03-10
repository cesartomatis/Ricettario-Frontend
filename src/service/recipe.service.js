import { httpGet, httpPostFormData } from './base.service';

export const getPublicRecipes = () => {
	return httpGet('recipe/listpublic');
};

export const getAllRecipes = () => {
	return httpGet('recipe/listall');
};

export const getUserRecipes = () => {
	return httpGet('recipe/userlist');
};

export const addRecipe = (image, data) => {
	return httpPostFormData('recipe/add', image, data);
};
