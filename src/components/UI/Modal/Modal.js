import React, { Fragment, useContext } from 'react';

import classes from './Modal.module.scss';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';
import { I18nContext } from '../../../i18n';

const Modal = (props) => {
	const { translate } = useContext(I18nContext);
	const closeIconClasses = ['material-icons', classes.CloseIcon];
	return (
		<Fragment>
			<Backdrop show={props.show} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}>
				<div className={classes.ModalHeader}>
					<label className={classes.ModalTitle}>{props.title}</label>
					{props.hasCloseButton ? (
						<i
							className={[...closeIconClasses, classes.ModalExit].join(' ')}
							onClick={props.modalClosed}>
							close
						</i>
					) : null}
				</div>
				<div className={classes.ModalBody}>{props.children}</div>
				{!props.hasCloseButton ? (
					<div className={classes.ModalFooter}>
						<Button btnType="Modal" clicked={props.modalClosed}>
							<i className={closeIconClasses.join(' ')}>close</i>
							<p className={classes.CloseText}>{translate('CLOSE')}</p>
						</Button>
					</div>
				) : null}
			</div>
		</Fragment>
	);
};

export default React.memo(
	Modal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show &&
		nextProps.children === prevProps.children
);
