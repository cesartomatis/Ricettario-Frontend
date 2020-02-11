import React, { Fragment } from 'react';

import classes from './SideMenu.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideMenu = (props) => {
	const menuClasses = [classes.SideMenu];
	if (props.open) {
		menuClasses.push(classes.Open);
	} else {
		menuClasses.push(classes.Close);
	}
	return (
		<Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={menuClasses.join(' ')} onClick={props.closed}>
				<nav>
					<h1>ACCOUNT</h1>
					<h1>SARASA</h1>
				</nav>
			</div>
		</Fragment>
	);
};

export default SideMenu;
