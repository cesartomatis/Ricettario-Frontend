import React, { Fragment, useState } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';

const Layout = (props) => {
	const [showSideMenu, setShowSideMenu] = useState(false);
	const [burgerOpen, setBurgerOpen] = useState(false);

	const sideMenuClosedHandler = () => {
		setShowSideMenu(false);
		setBurgerOpen(false);
	};

	const sideMenuToggleHandler = () => {
		setShowSideMenu(!showSideMenu);
		setBurgerOpen(!burgerOpen);
	};
	return (
		<Fragment>
			<Toolbar clicked={sideMenuToggleHandler} menuOpen={burgerOpen} />
			<SideMenu open={showSideMenu} closed={sideMenuClosedHandler} />
			<main className={classes.Content}>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
