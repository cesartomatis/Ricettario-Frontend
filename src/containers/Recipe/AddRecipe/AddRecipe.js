import React from 'react';

import RecipeForm from '../../../components/Recipe/RecipeForm/RecipeForm';
import classes from './AddRecipe.module.scss';
import Card from '../../../components/UI/Card/Card';

const AddRecipe = (props) => {
	return (
		<div className={classes.FormContainer}>
			<Card classStyle={classes.CardStyle}>
				<RecipeForm />
			</Card>
		</div>
	);
};

export default AddRecipe;
