import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicRecipes } from '../../store/actions/index';
import RecipeList from '../../components/Recipe/RecipeList/RecipeList';

const Home = (props) => {
	const recipes = useSelector((state) => state.recipe.recipes);

	const dispatch = useDispatch();
	const onGetPublicRecipes = useCallback(() => dispatch(getPublicRecipes()), [
		dispatch
	]);

	useEffect(() => {
		onGetPublicRecipes();
	}, [onGetPublicRecipes]);

	return <RecipeList recipes={recipes} />;
};

export default Home;
