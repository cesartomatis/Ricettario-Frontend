import React, { Fragment, useContext } from 'react';

import classes from './ErrorModal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import { I18nContext } from '../../../i18n';

const ErrorModal = (props) => {
	const { translate } = useContext(I18nContext);
	const errorIconClasses = ['material-icons', classes.ErrorIcon];
	const closeIconClasses = ['material-icons', classes.CloseIcon];
	return (
		<Fragment>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}>
				<div className={classes.ModalHeader}>
					<i className={errorIconClasses.join(' ')}>error</i>
				</div>
				<div className={classes.ModalBody}>{props.children}</div>
				<div className={classes.ModalFooter}>
					<Button btnType="Modal" clicked={props.modalClosed}>
						<i className={closeIconClasses.join(' ')}>close</i>
						<p className={classes.CloseText}>{translate('CLOSE')}</p>
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default React.memo(
	ErrorModal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show &&
		nextProps.children === prevProps.children
);
