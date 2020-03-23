import React from 'react';

import classes from './RecipeItem.module.scss';
import RecipeDetailsContainer from '../../RecipeDetailsContainer/RecipeDetailsContainer';

const RecipeItem = (props) => {
	return (
		<div className={classes.Container} onClick={props.clicked}>
			<div className={classes.RecipeImgContainer}>
				<img
					className={classes.RecipeImg}
					src={`${process.env.REACT_APP_BASE_URL}${props.recipe.photo}`}
					alt=""
				/>
			</div>
			<div className={classes.RecipeDataContainer}>
				<div className={classes.RecipeTitleContainer}>
					<label className={classes.RecipeTitle}>{props.recipe.title}</label>
					<i className="material-icons">chevron_right</i>
				</div>
				<RecipeDetailsContainer recipe={props.recipe} />
			</div>
		</div>
	);
};

export default RecipeItem;
