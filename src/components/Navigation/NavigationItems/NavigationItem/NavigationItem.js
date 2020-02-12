import React from 'react';

import classes from './NavigationItem.module.scss';

const NavigationItem = (props) => {
	return (
		<div className={classes.MenuItem}>
			<i className={`material-icons ${classes.MenuIcon}`}>{props.icon}</i>
			<p className={classes.MenuText}>{props.text}</p>
		</div>
	);
};

export default NavigationItem;
