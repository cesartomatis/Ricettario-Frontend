import React from 'react';

import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
	return (
		<NavLink to={props.link} exact={props.exact} className={classes.MenuLink}>
			<div className={classes.MenuItem}>
				<i className={`material-icons ${classes.MenuIcon}`}>{props.icon}</i>
				<p className={classes.MenuText}>{props.text}</p>
			</div>
		</NavLink>
	);
};

export default NavigationItem;
