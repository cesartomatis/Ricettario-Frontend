import React from 'react';

import RecipeForm from '../../../components/Recipe/RecipeForm/RecipeForm';
import classes from './AddRecipe.module.scss';

const AddRecipe = (props) => {
	return (
		<div className={classes.FormContainer}>
			<RecipeForm />
		</div>
	);
};

export default AddRecipe;
