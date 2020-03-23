import React, { useContext } from 'react';

import classes from './RecipeTips.module.scss';
import { I18nContext } from '../../../i18n';

const RecipeTips = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.RecipeTipsContainer}>
			<label className={classes.TipsTitle}>{translate('RECIPE_TIPS')}</label>
			<label className={classes.TipsText}>{props.tips}</label>
		</div>
	);
};

export default RecipeTips;
