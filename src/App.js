import React from 'react';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';

const App = (props) => {
	return (
		<div className={classes.App}>
			<Layout>
				<h1>SAPEEEE</h1>
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
