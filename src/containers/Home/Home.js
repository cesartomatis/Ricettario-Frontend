import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	getPublicRecipes,
	getAllRecipes,
	setSelectedRecipe
} from '../../store/actions/index';
import RecipeList from '../../components/Recipe/RecipeList/RecipeList';

const Home = (props) => {
	const recipes = useSelector((state) => state.recipe.recipes);
	const token = useSelector((state) => state.auth.token);

	const dispatch = useDispatch();
	const onSetSelectedRecipe = (recipe) => dispatch(setSelectedRecipe(recipe));
	const onGetRecipes = useCallback(
		() => (token ? dispatch(getAllRecipes()) : dispatch(getPublicRecipes())),
		[dispatch, token]
	);

	useEffect(() => {
		onGetRecipes();
	}, [onGetRecipes]);

	const recipeClickedHandler = (recipe) => {
		onSetSelectedRecipe(recipe);
		props.history.push(`/recipe/${recipe._id}`);
	};

	return <RecipeList recipes={recipes} recipeClicked={recipeClickedHandler} />;
};

export default Home;
