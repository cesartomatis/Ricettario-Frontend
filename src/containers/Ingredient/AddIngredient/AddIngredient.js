import React from 'react';

import classes from './AddIngredient.module.scss';
import Card from '../../../components/UI/Card/Card';
import IngredientForm from '../../../components/Ingredients/IngredientForm/IngredientForm';

const AddIngredient = (props) => {
	return (
		<div className={classes.FormContainer}>
			<Card classStyle={classes.CardStyle}>
				<IngredientForm />
			</Card>
		</div>
	);
};

export default AddIngredient;
