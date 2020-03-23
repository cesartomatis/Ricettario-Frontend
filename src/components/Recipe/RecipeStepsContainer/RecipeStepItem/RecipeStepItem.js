import React from 'react';

import classes from './RecipeStepItem.module.scss';

const RecipeStepItem = (props) => {
	return (
		<div className={classes.StepContainer}>
			<div className={classes.StepNumberContainer}>
				<label className={classes.StepNumber}>{props.stepNumber}</label>
			</div>
			<label className={classes.StepText}>{props.children}</label>
		</div>
	);
};

export default RecipeStepItem;
