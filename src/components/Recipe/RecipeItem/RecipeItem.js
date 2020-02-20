import React from 'react';

import classes from './RecipeItem.module.scss';

const RecipeItem = (props) => {
	return (
		<div className={classes.Container}>
			<div className={classes.Header}></div>
			<div className={classes.Body}></div>
			<div className={classes.Footer}></div>
		</div>
	);
};

export default RecipeItem;
