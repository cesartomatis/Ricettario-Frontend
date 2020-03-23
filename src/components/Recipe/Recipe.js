import React from 'react';

import classes from './Recipe.module.scss';
import Card from '../UI/Card/Card';
import RecipeDetailsContainer from './RecipeDetailsContainer/RecipeDetailsContainer';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeStepsContainer from './RecipeStepsContainer/RecipeStepsContainer';
import RecipeTips from './RecipeTips/RecipeTips';

const Recipe = (props) => {
	const { recipe } = props;
	return (
		<div className={classes.Container}>
			<Card classStyle={classes.CardContainer}>
				<div className={classes.RecipeContainer}>
					<section className={classes.RecipeImgContainer}>
						<img
							className={classes.RecipeImg}
							src={`${process.env.REACT_APP_BASE_URL}${recipe.photo}`}
							alt=""
						/>
					</section>
					<section className={classes.RecipeHeader}>
						<label className={classes.RecipeTitle}>{recipe.title}</label>
						<span className={['material-icons', classes.ShareIcon].join(' ')}>
							share
						</span>
					</section>
					<section className={classes.RecipeDetailsContainer}>
						<RecipeDetailsContainer recipe={recipe} />
					</section>
					<section className={classes.RecipeIngredientsContainer}>
						<RecipeIngredients ingredients={recipe.ingredients} />
					</section>
					<section className={classes.RecipeStepsContainer}>
						<RecipeStepsContainer steps={recipe.directions} />
					</section>
					<sections className={classes.RecipeTipsContainer}>
						<RecipeTips tips={recipe.tips} />
					</sections>
				</div>
			</Card>
		</div>
	);
};

export default Recipe;
