import React, { useCallback, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSelectedRecipe } from '../../store/actions';
import RecipeView from '../../components/Recipe/Recipe';
import Spinner from '../../components/UI/Spinner/Spinner';

const Recipe = (props) => {
	const { match } = props;
	const { id } = match.params;
	const recipe = useSelector((state) => state.recipe.selectedRecipe);

	const dispatch = useDispatch();
	const onGetSelectedRecipe = useCallback(
		(id) => dispatch(getSelectedRecipe(id)),
		[dispatch]
	);

	useEffect(() => {
		if (!recipe) {
			onGetSelectedRecipe(id);
		}
	}, [onGetSelectedRecipe, recipe, id]);

	return (
		<Fragment>{recipe ? <RecipeView recipe={recipe} /> : <Spinner />}</Fragment>
	);
};

export default Recipe;
