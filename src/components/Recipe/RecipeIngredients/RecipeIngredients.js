import React, { Fragment, useContext } from 'react';

import classes from './RecipeIngredients.module.scss';
import { I18nContext } from '../../../i18n';

const RecipeIngredients = (props) => {
	const { translate } = useContext(I18nContext);

	const ingredients = props.ingredients.map((i) => (
		<div key={i._id} className={classes.IngredientItem}>
			<span className={['material-icons', classes.IngredientIcon].join(' ')}>
				radio_button_checked
			</span>
			<label className={classes.IngredientText}>
				<strong>{`${i.name} `}</strong>
				{`${i.quantity.amount} ${i.quantity.unit}`}
			</label>
		</div>
	));
	return (
		<div className={classes.Container}>
			<label className={classes.IngredientTitle}>
				{translate('INGREDIENTS')}
			</label>
			<div className={classes.IngredientsContainer}>{ingredients}</div>
		</div>
	);
};

export default RecipeIngredients;
