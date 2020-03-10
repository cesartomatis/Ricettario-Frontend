import React from 'react';

import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
	let cbClass = classes.CheckboxUnchecked;
	if (props.value) {
		cbClass = classes.CheckboxChecked;
	}
	return (
		<div
			className={[classes.CheckboxContainer, classes.InputItem].join(' ')}
			onClick={props.changed}>
			<div className={cbClass}>
				<i
					value={props.value}
					className={[classes.CheckboxIcon, 'material-icons'].join(' ')}>
					check
				</i>
			</div>
			<p value={props.value} className={classes.CheckboxText}>
				{props.children}
			</p>
		</div>
	);
};

export default Checkbox;
