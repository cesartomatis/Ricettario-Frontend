import React from 'react';

import classes from './Toolbar.module.scss';
import MenuToggle from '../SideMenu/MenuToggle/MenuToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import { NavLink } from 'react-router-dom';

const Toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<div className={classes.MenuIcon}>
				<MenuToggle burgerClicked={props.clicked} open={props.menuOpen} />
			</div>
			<NavLink to="/" exact={props.exact} className={classes.Logo}>
				<p className={classes.Title}></p>
			</NavLink>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
