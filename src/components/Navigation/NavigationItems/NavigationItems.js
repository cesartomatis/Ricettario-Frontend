import React, { useContext } from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { I18nContext } from '../../../i18n/index';

const NavigationItems = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.Options}>
			<NavigationItem
				icon="account_circle"
				text={translate('ACCOUNT')}
				link="/auth"
			/>
		</div>
	);
};

export default NavigationItems;
