import React from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecipeList.module.scss';
import Card from '../../UI/Card/Card';
import RecipeItem from './RecipeItem/RecipeItem';

const RecipeList = (props) => {
	let recipesList = <Spinner />;
	if (props.recipes) {
		recipesList = props.recipes.map((r) => (
			<RecipeItem key={r._id} recipe={r} />
		));
	}

	return (
		<div className={classes.RecipeListContainer}>
			<Card InlineStyles={{ backgroundColor: 'white' }}>{recipesList}</Card>
		</div>
	);
};

export default RecipeList;
