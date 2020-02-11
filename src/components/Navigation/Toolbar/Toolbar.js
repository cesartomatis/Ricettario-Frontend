import React from 'react';

import classes from './Toolbar.module.scss';
import MenuToggle from '../SideMenu/MenuToggle/MenuToggle';

const Toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<div className={classes.MenuIcon}>
				<MenuToggle burgerClicked={props.clicked} open={props.menuOpen} />
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
