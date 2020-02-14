import React, { useReducer } from 'react';

// Detect and use browser language as default
const userLang = navigator.language || navigator.userLanguage;
let langJSON = userLang;
if (userLang.includes('-')) {
	langJSON = userLang.split('-')[0];
}

let translate;
try {
	translate = require(`./${langJSON}.json`);
} catch {
	translate = require('./en.json');
}

// This function will lazy load the language json file to be used by the context
const getTranslate = (langCode) => (key) => translate[key] || key;

/* We will have two things in our context state, 
langCode will be the current language of the page
and translate will be the method to translate keys
into meaningful texts. Default language will be English */
const initialState = {
	langCode: langJSON,
	translate: getTranslate(langJSON)
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
	/* This is where magic starts to happen. We're creating
  a reducer to manage the global state which will sit in
  I18nContext. For now, the only action we will have
  is setting language */
	const reducer = (state, action) => {
		switch (action.type) {
			case 'setLanguage':
				return {
					langCode: action.payload,
					translate: getTranslate(action.payload)
				};
			default:
				return { ...initialState };
		}
	};

	/* useReducer hook receives a reducer and an initialState to
  return the current state object with a dispatch method to
  dispatch actions. */

	const [state, dispatch] = useReducer(reducer, initialState);

	/* We're Providing state object (langCode and translate method
  in this case) and also the dispatch for the children components */
	return (
		<I18nContext.Provider value={{ ...state, dispatch }}>
			{children}
		</I18nContext.Provider>
	);
};
