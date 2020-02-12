import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
	<div className={classes.Options}>
		<NavigationItem icon="account_circle" text="Account" />
	</div>
);

export default NavigationItems;
