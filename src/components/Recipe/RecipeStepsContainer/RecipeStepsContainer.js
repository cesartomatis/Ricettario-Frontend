import React, { useContext } from 'react';

import RecipeStepItem from './RecipeStepItem/RecipeStepItem';
import classes from './RecipeStepsContainer.module.scss';
import { I18nContext } from '../../../i18n';

const RecipeStepsContainer = (props) => {
	const { translate } = useContext(I18nContext);

	const steps = props.steps.map((s, index) => (
		<RecipeStepItem key={index} stepNumber={index + 1}>
			{s}
		</RecipeStepItem>
	));

	return (
		<div className={classes.StepsContainer}>
			<label className={classes.StepsTitle}>
				{translate('RECIPE_DIRECTIONS')}
			</label>
			{steps}
		</div>
	);
};

export default RecipeStepsContainer;
