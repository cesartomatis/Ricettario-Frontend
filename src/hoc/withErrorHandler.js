import React, { Fragment } from 'react';

import Modal from '../components/UI/Modal/Modal';
import useHttpErrorHandler from '../hooks/http-error-handler';
import httpClient from '../service/base.service';

const withErrorHandler = (WrappedComponent) => {
	return (props) => {
		const [error, clearError] = useHttpErrorHandler(httpClient);

		return (
			<Fragment>
				<Modal show={error} modalClosed={clearError}>
					{error ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</Fragment>
		);
	};
};

export default withErrorHandler;
