import React, { useContext, useState } from 'react';

import classes from './Auth.module.scss';
import Signin from '../../components/Auth/Signin/Signin';
import Signup from '../../components/Auth/Signup/Signup';
import Button from '../../components/UI/Button/Button';
import { I18nContext } from '../../i18n';
import withErrorHandler from '../../hoc/withErrorHandler';

const Auth = (props) => {
	const { translate } = useContext(I18nContext);
	const [isSignIn, setIsSignIn] = useState(true);

	const authChangedHandler = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div className={classes.Auth}>
			<div className={classes.AuthSwitch}>
				<Button
					btnType="Neutral"
					btnSelected={isSignIn ? 'Selected' : ''}
					clicked={authChangedHandler}
					disabled={isSignIn}>
					{translate('SIGNIN')}
				</Button>
				<p className={classes.Separator}>{translate('OR')}</p>
				<Button
					btnType="Neutral"
					btnSelected={!isSignIn ? 'Selected' : ''}
					clicked={authChangedHandler}
					disabled={!isSignIn}>
					{translate('SIGNUP')}
				</Button>
			</div>
			{isSignIn ? <Signin /> : <Signup />}
		</div>
	);
};

export default withErrorHandler(Auth);
