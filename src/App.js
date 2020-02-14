import React, { Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));

const App = (props) => {
	return (
		<div className={classes.App}>
			<Layout>
				<Switch>
					<Route
						path="/auth"
						render={() => (
							<Suspense fallback={<p>LOADING...</p>}>
								<Auth />
							</Suspense>
						)}
					/>
				</Switch>
			</Layout>
		</div>
	);
};

export default withRouter(App);
