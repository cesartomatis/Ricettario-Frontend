import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPublicRecipes } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import RecipeForm from '../../components/Recipe/RecipeForm/RecipeForm';

const Home = (props) => {
	// const recipes = useSelector((state) => state.recipe.recipes);

	// const dispatch = useDispatch();
	// const onGetPublicRecipes = useCallback(() => dispatch(getPublicRecipes()), [
	// 	dispatch
	// ]);

	// useEffect(() => {
	// 	onGetPublicRecipes();
	// }, [onGetPublicRecipes]);

	// let recipesList = <Spinner />;
	// if (recipes) {
	// 	console.log('[Home.js] - recipes', recipes);
	// 	recipesList = recipes.map((r) => (
	// 		<div key={r._id}>
	// 			<h1>{r.title}</h1>
	// 		</div>
	// 	));
	// }

	// return <Fragment>{recipesList}</Fragment>;

	return (
		<div>
			<RecipeForm />
		</div>
	);
};

export default Home;
