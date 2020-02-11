import React from 'react';

import classes from './MenuToggle.module.scss';

const MenuToggle = (props) => {
	const burgerClasses = [classes.burger, classes['burger-rotate']];
	console.log('props.open', props.open);
	if (props.open) {
		burgerClasses.push(classes.open);
	}
	return (
		<div className={burgerClasses.join(' ')} onClick={props.burgerClicked}>
			<div className={classes['burger-lines']}></div>
		</div>
	);
};

export default MenuToggle;
