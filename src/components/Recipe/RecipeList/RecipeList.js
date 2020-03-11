import React from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecipeList.module.scss';

const RecipeList = (props) => {
	let recipesList = <Spinner />;
	if (props.recipes) {
		recipesList = props.recipes.map((r) => (
			<div key={r._id}>
				<h1>{r.title}</h1>
			</div>
		));
	}

	return <div className={classes.RecipeListContainer}>{recipesList}</div>;
};

export default RecipeList;
