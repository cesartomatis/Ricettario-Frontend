import { httpGet } from './base.service';

export const getPublicRecipes = () => {
	return httpGet('recipe/listpublic');
};

export const getAllRecipes = () => {
	return httpGet('recipe/listall');
};

export const getUserRecipes = () => {
	return httpGet('recipe/userlist');
};
