import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import { I18nContextProvider } from './i18n/index';
import authReducer from './store/reducers/auth';
import recipeReducer from './store/reducers/recipe';

const composeEnhancers =
	(process.env.REACT_APP_ENVIRONMENT.trim() === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose;

const rootReducer = combineReducers({
	auth: authReducer,
	recipe: recipeReducer
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const app = (
	<I18nContextProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</I18nContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
