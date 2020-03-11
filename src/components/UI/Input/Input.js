import React, { useContext } from 'react';

import classes from './Input.module.scss';
import { I18nContext } from '../../../i18n/index';
import Checkbox from '../Checkbox/Checkbox';
import ImageUploader from '../ImageUploader/ImageUploader';

const Input = (props) => {
	const { translate } = useContext(I18nContext);
	let inputElement = null;
	const inputClasses = [classes.InputItem];
	const iconClasses = ['material-icons', classes.Icon];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case 'checkbox':
			inputElement = (
				<Checkbox {...props}>{translate('PUBLIC_RECIPE')}</Checkbox>
			);
			break;
		case 'input':
			inputElement = (
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
			);
			break;
		case 'textarea':
			inputElement = (
				<div className={inputClasses.join(' ')}>
					<i className={iconClasses.join(' ')}>{props.elementIcon}</i>
					<textarea
						className={classes.InputElement}
						{...props.elementConfig}
						placeholder={translate(props.elementConfig.placeholder)}
						value={props.value}
						onChange={props.changed}
					/>
				</div>
			);
			break;
		case 'select':
			inputElement = (
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
			);
			break;
		case 'file':
			inputElement = <ImageUploader {...props} />;
			break;
		default:
			inputElement = (
				<input
					className={classes.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{translate(props.label)}</label>
			{inputElement}
		</div>
	);
};

export default Input;
