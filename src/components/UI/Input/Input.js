import React, { useContext, Fragment, useEffect } from 'react';
import autosize from 'autosize';

import classes from './Input.module.scss';
import { I18nContext } from '../../../i18n/index';
import Checkbox from '../Checkbox/Checkbox';
import ImageUploader from '../ImageUploader/ImageUploader';

const Input = (props) => {
	const { translate } = useContext(I18nContext);
	let txtArea = null;
	const txtAreas = [];

	useEffect(() => {
		if (txtArea) {
			autosize(txtArea);
		}
		if (txtAreas.length > 0) {
			autosize(txtAreas);
		}
	}, [txtArea, txtAreas]);

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
							ref={(ta) => (txtArea = ta)}
						/>
					</div>
				</Fragment>
			);
			break;
		case 'itemslist':
			const items = [];
			let step = 1;
			for (let val of props.value) {
				const index = step - 1;
				items.push(
					<div className={classes.Setp} key={step}>
						<p className={classes.StepText}>{step}</p>
						<textarea
							className={[classes.InputElement, classes.TextArea].join(' ')}
							{...props.elementConfig}
							placeholder={`${translate(
								props.elementConfig.placeholder
							)} ${step}`}
							value={val}
							onChange={(e) => props.itemChanged(index, e)}
							ref={(ta) => txtAreas.push(ta)}
						/>
						{/* <input
							className={classes.InputElement}
							{...props.elementConfig}
							placeholder={`${translate(
								props.elementConfig.placeholder
							)} ${step}`}
							value={val}
							onChange={(e) => props.itemChanged(index, e)}
						/> */}
						{props.value.length > 1 ? (
							<i
								className={['material-icons', classes.StepDelete].join(' ')}
								onClick={() => {
									props.deleteItem(index);
								}}>
								delete_forever
							</i>
						) : null}
					</div>
				);
				step++;
			}
			inputElement = (
				<Fragment>
					<div className={classes.SetpsTitle}>
						<label className={classes.Label}>{translate(props.label)}</label>
						<i
							className={['material-icons', classes.IconAdd].join(' ')}
							onClick={props.addItem}>
							add_circle_outline
						</i>
					</div>
					<div className={inputClasses.join(' ')} style={txtAreaStyle}>
						<i className={iconClasses.join(' ')}>{props.elementIcon}</i>
						<div className={classes.SetpContainer}>{items}</div>
						{/* <textarea
							className={[classes.InputElement, classes.TextArea].join(' ')}
							{...props.elementConfig}
							placeholder={translate(props.elementConfig.placeholder)}
							value={props.value}
							onChange={props.changed}
							ref={(ta) => (txtArea = ta)}
						/> */}
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
