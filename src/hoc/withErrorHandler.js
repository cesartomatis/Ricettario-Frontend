import React, { Fragment } from 'react';

import ErrorModal from '../components/UI/ErrorModal/ErrorModal';
import useHttpErrorHandler from '../hooks/http-error-handler';
import httpClient from '../service/base.service';

const withErrorHandler = (WrappedComponent) => {
	return (props) => {
		const [error, clearError] = useHttpErrorHandler(httpClient);

		return (
			<Fragment>
				<ErrorModal show={error} modalClosed={clearError}>
					{error ? error.message : null}
				</ErrorModal>
				<WrappedComponent {...props} />
			</Fragment>
		);
	};
};

export default withErrorHandler;
