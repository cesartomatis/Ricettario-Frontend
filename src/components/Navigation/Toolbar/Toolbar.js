import React, { useState } from 'react';

import classes from './Toolbar.module.scss';
import BurgerIcon from '../../UI/BurgerIcon/BurgerIcon';

const Toolbar = (props) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	return (
		<header className={classes.Toolbar}>
			<div className={classes.MenuIcon}>
				<BurgerIcon
					burgerClicked={() => {
						setBurgerOpen(!burgerOpen);
						console.log('Burgerclicked', burgerOpen);
					}}
					open={burgerOpen}
				/>
			</div>
			<div className={classes.Logo}>
				<p className={classes.Title}></p>
			</div>
			<div className={classes.Options}>
				<i className={`material-icons ${classes.OptionsIcon}`}>
					account_circle
				</i>
			</div>
		</header>
	);
};

export default Toolbar;
