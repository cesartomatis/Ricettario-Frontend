import React from 'react';

import classes from './BurgerIcon.module.scss';

const BurgerIcon = (props) => {
	let burgerClasses = `${classes.burger} ${classes['burger-rotate']}`;
	console.log('props.open', props.open);
	if (props.open) {
		burgerClasses += ` ${classes.open}`;
	}
	return (
		<div className={burgerClasses} onClick={props.burgerClicked}>
			<div className={classes['burger-lines']}></div>
		</div>
	);
};

export default BurgerIcon;
