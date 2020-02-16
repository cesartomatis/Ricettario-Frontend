import React from 'react';

import classes from './Spinner.module.scss';

// const spinner = () => {
// 	const iconClasses = ['material-icons', classes.LoaderIcon];
// 	return (
// 		<div className={classes.Loader}>
// 			<i className={iconClasses.join(' ')}>fastfood</i>
// 			<p className={classes.LoaderText}>Loading...</p>
// 		</div>
// 	);
// };

const spinner = () => <div className={classes.Loader}></div>;

export default spinner;
