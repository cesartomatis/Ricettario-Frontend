import React from 'react';

import classes from './Card.module.scss';

const Card = (props) => {
	let classStyles = [classes.Card];
	if (props.classStyle) {
		classStyles.push(props.classStyle);
	}

	return (
		<div className={classStyles.join(' ')} style={{ ...props.InlineStyles }}>
			{props.children}
		</div>
	);
};

export default Card;
