import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import classes from './App.module.scss';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Spinner from './components/UI/Spinner/Spinner';
import { setToken } from './service/base.service';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const AddRecipe = React.lazy(() =>
	import('./containers/Recipe/AddRecipe/AddRecipe')
);
const AddIngredient = React.lazy(() =>
	import('./containers/Ingredient/AddIngredient/AddIngredient')
);

const token = localStorage.getItem('token');
if (token) {
	setToken(token);
}

const App = (props) => {
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
						path="/new-ingredient"
						render={(props) => (
							<Suspense fallback={<Spinner />}>
								<AddIngredient {...props} />
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
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		</div>
	);
};

export default withRouter(App);
