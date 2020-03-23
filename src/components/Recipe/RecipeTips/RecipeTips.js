import React, { useContext } from 'react';

import classes from './RecipeTips.module.scss';
import { I18nContext } from '../../../i18n';

const RecipeTips = (props) => {
	const { translate } = useContext(I18nContext);

	let tips = translate('NO_TIPS');
	if (props.tips && props.tips !== '') {
		tips = props.tips;
	}

	return (
		<div className={classes.RecipeTipsContainer}>
			<label className={classes.TipsTitle}>{translate('RECIPE_TIPS')}</label>
			<label className={classes.TipsText}>{tips}</label>
		</div>
	);
};

export default RecipeTips;
