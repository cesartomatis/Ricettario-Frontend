import React, { useContext } from 'react';

import classes from './RecipeItem.module.scss';
import ChefIcon from '../../../../assets/images/chef.svg';
import WaiterIcon from '../../../../assets/images/restaurant-waiter.svg';
import DishIcon from '../../../../assets/images/dish.svg';
import FireIcon from '../../../../assets/images/fire.svg';
import { I18nContext } from '../../../../i18n';

const RecipeItem = (props) => {
	const { translate } = useContext(I18nContext);

	const calories = Math.round(
		props.recipe.ingredients.reduce((a, b) => {
			return {
				caloriesPerServing: +a.caloriesPerServing + +b.caloriesPerServing
			};
		}).caloriesPerServing / +props.recipe.servings
	);

	return (
		<div className={classes.Container}>
			<img
				className={classes.RecipeImg}
				src={`${process.env.REACT_APP_BASE_URL}${props.recipe.photo}`}
				alt=""
			/>
			<div className={classes.RecipeDataContainer}>
				<label className={classes.RecipeTitle}>{props.recipe.title}</label>
				<div className={classes.RecipeDetailsContainer}>
					<section className={classes.RecipeDetailItem}>
						<img
							className={classes.RecipeDetailItemImg}
							src={ChefIcon}
							alt=""
						/>
						<label className={classes.RecipeDetailItemText}>
							{`${translate('BY')} 
							${props.recipe.creator.lastName}, 
							${props.recipe.creator.firstName}`}
						</label>
					</section>
					<section className={classes.RecipeDetailItem}>
						<img
							className={classes.RecipeDetailItemImg}
							src={WaiterIcon}
							alt=""
						/>
						<label className={classes.RecipeDetailItemText}>
							{`${translate('DIFFICULTY')}: `}
							<strong>{translate(props.recipe.difficulty)}</strong>
						</label>
					</section>
					<section className={classes.RecipeDetailItem}>
						<i
							className={['material-icons', classes.RecipeDetailIcon].join(
								' '
							)}>
							timer
						</i>
						<label className={classes.RecipeDetailItemText}>
							{`${translate('PREPARATION')}: `}
							<strong>{`${props.recipe.preparationTime}'`}</strong>
						</label>
					</section>
					<section className={classes.RecipeDetailItem}>
						<i
							className={['material-icons', classes.RecipeDetailIcon].join(
								' '
							)}>
							timer
						</i>
						<label className={classes.RecipeDetailItemText}>
							{`${translate('COOKING')}: `}
							<strong>{`${props.recipe.cookingTime}'`}</strong>
						</label>
					</section>
					<section className={classes.RecipeDetailItem}>
						<img
							className={classes.RecipeDetailItemImg}
							src={DishIcon}
							alt=""
						/>
						<label className={classes.RecipeDetailItemText}>
							{`${translate('SERVINGS')}: `}
							<strong>{translate(props.recipe.servings)}</strong>
						</label>
					</section>
					<section className={[classes.RecipeDetailItem].join(' ')}>
						<img
							className={classes.RecipeDetailItemImg}
							src={FireIcon}
							alt=""
						/>
						<label className={classes.RecipeDetailItemText}>
							<strong>{calories}</strong>
							{` ${translate('CALORIESxSERVING')}`}
						</label>
					</section>
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
