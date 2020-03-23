import React from 'react';

import classes from './RecipeDetailItem.module.scss';

const RecipeDetailItem = (props) => {
	let icon = null;
	if (props.image) {
		icon = (
			<img className={classes.RecipeDetailItemImg} src={props.image} alt="" />
		);
	} else {
		icon = (
			<i className={['material-icons', classes.RecipeDetailIcon].join(' ')}>
				{props.icon}
			</i>
		);
	}

	return (
		<section className={classes.RecipeDetailItem}>
			{icon}
			<label className={classes.RecipeDetailItemText}>{props.children}</label>
		</section>
	);
};

export default RecipeDetailItem;
