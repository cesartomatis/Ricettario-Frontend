import React, { Suspense, useCallback, useEffect } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Spinner from './components/UI/Spinner/Spinner';
import { tryAutoLogin } from './store/actions/index';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const AddRecipe = React.lazy(() =>
	import('./containers/Recipe/AddRecipe/AddRecipe')
);
const Recipe = React.lazy(() => import('./containers/Recipe/Recipe'));

const App = (props) => {
	const token = useSelector((state) => state.auth.token);

	const dispatch = useDispatch();
	const onTryAutoLogin = useCallback(() => dispatch(tryAutoLogin()), [
		dispatch
	]);

	useEffect(() => {
		onTryAutoLogin();
	}, [onTryAutoLogin]);

	return (
		<div className={classes.App}>
			<Layout>
				<Switch>
					<Route
						path="/auth"
						render={(props) => (
							<Suspense fallback={<Spinner />}>
								<Auth {...props} />
							</Suspense>
						)}
					/>
					<Route
						path="/new-recipe"
						render={(props) => (
							<Suspense fallback={<Spinner />}>
								<AddRecipe {...props} />
							</Suspense>
						)}
					/>
					<Route
						path="/recipe/:id"
						render={(props) => (
							<Suspense fallback={<Spinner />}>
								<Recipe {...props} />
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
