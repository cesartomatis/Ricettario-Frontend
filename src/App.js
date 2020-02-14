import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));

const App = (props) => {
	return (
		<div className={classes.App}>
			<Layout>
				<Switch>
					<Route
						path="/auth"
						render={(props) => (
							<Suspense fallback={<p>LOADING...</p>}>
								<Auth {...props} />
							</Suspense>
						)}
					/>
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		</div>
	);
};

export default withRouter(App);
