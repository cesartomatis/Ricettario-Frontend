import React from 'react';

import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
	let checkBox = <div className={classes.CheckboxUnchecked}></div>;
	if (props.value) {
		checkBox = (
			<div className={classes.CheckboxChecked}>
				<i className={[classes.CheckboxIcon, 'material-icons'].join(' ')}>
					check
				</i>
			</div>
		);
	}
	return (
		<div
			className={[classes.CheckboxContainer, classes.InputItem].join(' ')}
			onClick={props.changed}>
			{checkBox}
			<p className={classes.CheckboxText}>{props.children}</p>
		</div>
	);
};

export default Checkbox;
