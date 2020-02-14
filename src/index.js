import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import { I18nContextProvider } from './i18n/index';

const app = (
	<I18nContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</I18nContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
