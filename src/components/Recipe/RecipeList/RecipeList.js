import React from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecipeList.module.scss';
import Card from '../../UI/Card/Card';

const RecipeList = (props) => {
	let recipesList = <Spinner />;
	if (props.recipes) {
		recipesList = props.recipes.map((r) => (
			<Card InlineStyles={{ backgroundColor: 'white' }} key={r._id}>
				<h1>{r.title}</h1>
			</Card>
		));
	}

	return <div className={classes.RecipeListContainer}>{recipesList}</div>;
};

export default RecipeList;
