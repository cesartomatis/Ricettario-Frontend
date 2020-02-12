import React, { useContext } from 'react';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';
import { I18nContext } from './i18n/index';

const App = (props) => {
	const { translate } = useContext(I18nContext);
	return (
		<div className={classes.App}>
			<Layout>
				<h1>{translate('test')}</h1>
			</Layout>
		</div>
	);
	// return (
	// 	<div className={classes.App}>
	// 		<header className={classes['App-header']}>
	// 			<img src={logo} className={classes['App-logo']} alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className={classes['App-link']}
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer">
	// 				Learn React
	// 			</a>
	// 		</header>
	// 	</div>
	// );
};

export default App;
