import React, { useContext, Fragment } from 'react';

import classes from './Input.module.scss';
import { I18nContext } from '../../../i18n/index';
import Checkbox from '../Checkbox/Checkbox';
import ImageUploader from '../ImageUploader/ImageUploader';

const Input = (props) => {
	const { translate } = useContext(I18nContext);
	let inputElement = null;
	const inputClasses = [classes.InputItem];
	const txtAreaStyle = {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	};
	const iconClasses = ['material-icons', classes.Icon];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case 'checkbox':
			inputElement = (
				<Fragment>
					<Checkbox {...props}>{translate('PUBLIC_RECIPE')}</Checkbox>
				</Fragment>
			);
			break;
		case 'input':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')}>
						<i className={iconClasses.join(' ')}>{props.elementIcon}</i>
						<input
							className={classes.InputElement}
							{...props.elementConfig}
							placeholder={translate(props.elementConfig.placeholder)}
							value={props.value}
							onChange={props.changed}
						/>
					</div>
				</Fragment>
			);
			break;
		case 'textarea':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')} style={txtAreaStyle}>
						<i className={iconClasses.join(' ')}>{props.elementIcon}</i>
						<textarea
							className={[classes.InputElement, classes.TextArea].join(' ')}
							{...props.elementConfig}
							placeholder={translate(props.elementConfig.placeholder)}
							value={props.value}
							onChange={props.changed}
						/>
					</div>
				</Fragment>
			);
			break;
		case 'select':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<select
						className={classes.InputElement}
						value={props.value}
						onChange={props.changed}>
						{props.elementConfig.options.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.displayValue}
							</option>
						))}
					</select>
				</Fragment>
			);
			break;
		case 'file':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<ImageUploader {...props} />
				</Fragment>
			);
			break;
		default:
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<input
						className={classes.InputElement}
						{...props.elementConfig}
						value={props.value}
						onChange={props.changed}
					/>
				</Fragment>
			);
	}

	return <div className={classes.Input}>{inputElement}</div>;
};

export default Input;
