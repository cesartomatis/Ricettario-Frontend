import React, { useContext, Fragment } from 'react';

import classes from './RecipeDetailsContainer.module.scss';
import { I18nContext } from '../../../i18n';
import RecipeDetailItem from './RecipeDetailItem/RecipeDetailItem';
import ChefIcon from '../../../assets/images/chef.svg';
import WaiterIcon from '../../../assets/images/restaurant-waiter.svg';
import DishIcon from '../../../assets/images/dish.svg';
import FireIcon from '../../../assets/images/fire.svg';

const RecipeDetailsContainer = (props) => {
	const { translate } = useContext(I18nContext);

	const calories = Math.round(
		props.recipe.ingredients.reduce((a, b) => {
			return {
				caloriesPerServing: +a.caloriesPerServing + +b.caloriesPerServing
			};
		}).caloriesPerServing / +props.recipe.servings
	);

	return (
		<div className={classes.RecipeDetailsContainer}>
			<RecipeDetailItem image={ChefIcon}>
				{`${translate('BY')} 
							${props.recipe.creator.lastName}, 
							${props.recipe.creator.firstName}`}
			</RecipeDetailItem>
			<RecipeDetailItem image={WaiterIcon}>
				<Fragment>
					{`${translate('DIFFICULTY')}: `}
					<strong>{translate(props.recipe.difficulty)}</strong>
				</Fragment>
			</RecipeDetailItem>
			<RecipeDetailItem icon="timer">
				<Fragment>
					{`${translate('PREPARATION')}: `}
					<strong>{`${props.recipe.preparationTime}'`}</strong>
				</Fragment>
			</RecipeDetailItem>
			<RecipeDetailItem icon="timer">
				<Fragment>
					{`${translate('COOKING')}: `}
					<strong>{`${props.recipe.cookingTime}'`}</strong>
				</Fragment>
			</RecipeDetailItem>
			<RecipeDetailItem image={DishIcon}>
				<Fragment>
					{`${translate('SERVINGS')}: `}
					<strong>{translate(props.recipe.servings)}</strong>
				</Fragment>
			</RecipeDetailItem>
			<RecipeDetailItem image={FireIcon}>
				<Fragment>
					<strong>{calories}</strong>
					{` ${translate('CALORIESxSERVING')}`}
				</Fragment>
			</RecipeDetailItem>
		</div>
	);
};

export default RecipeDetailsContainer;
