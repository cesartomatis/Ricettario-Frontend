import React, { useContext, Fragment } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import classes from './Input.module.scss';
import { I18nContext } from '../../../i18n/index';
import Checkbox from '../Checkbox/Checkbox';
import ImageUploader from '../ImageUploader/ImageUploader';
import IngIcon from '../../../assets/images/ingredient.svg';
import FireIcon from '../../../assets/images/fire.svg';
import ScaleIcon from '../../../assets/images/scale.svg';

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
		case 'specialinput':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')}>
						<img src={props.elementIcon} alt="" className={classes.IconImg} />
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
		case 'numericinput':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')}>
						<img src={props.elementIcon} alt="" className={classes.IconImg} />
						<input
							className={classes.InputElement}
							{...props.elementConfig}
							placeholder={translate(props.elementConfig.placeholder)}
							value={props.value}
							onChange={(e) => {
								if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
									props.changed(e);
								}
							}}
						/>
					</div>
				</Fragment>
			);
			break;
		case 'quantityinput':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')}>
						<img src={props.elementIcon} alt="" className={classes.IconImg} />
						<input
							className={classes.InputElement}
							{...props.elementConfig}
							placeholder={translate(props.elementConfig.placeholder)}
							value={props.value.amount}
							onChange={(e) => {
								if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
									props.setQuantity(e.target.value, null);
								}
							}}
						/>
						<select
							className={classes.InputElement}
							value={props.value.unit}
							onChange={(e) => {
								props.setQuantity(null, e.target.value);
							}}>
							{props.quantityOptions.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{translate(opt.displayValue)}
								</option>
							))}
						</select>
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
						<TextareaAutosize
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
		case 'itemslist':
			const items = [];
			let step = 1;
			for (let val of props.value) {
				const index = step - 1;
				items.push(
					<div className={classes.Setp} key={step}>
						<p className={classes.StepText}>{step}</p>
						<TextareaAutosize
							className={[classes.InputElement, classes.TextArea].join(' ')}
							{...props.elementConfig}
							placeholder={`${translate(
								props.elementConfig.placeholder
							)} ${step}`}
							value={val}
							onChange={(e) => props.itemChanged(index, e)}
						/>
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
					</div>
				</Fragment>
			);
			break;
		case 'itemspopoverlist':
			const ingredients = [];
			let ingCounter = 1;
			for (let val of props.value) {
				const index = ingCounter - 1;
				ingredients.push(
					<label className={classes.Setp} key={index}>
						<p className={classes.StepText}>{index + 1}</p>
						<div className={classes.IngredientItem}>
							<div className={classes.IngredientLabel}>
								<img src={IngIcon} alt="" className={classes.IconImg} />
								<label className={classes.IngredientText}>{val.name}</label>
							</div>
							<div className={classes.IngredientLabel}>
								<img src={FireIcon} alt="" className={classes.IconImg} />
								<label className={classes.IngredientText}>
									{val.caloriesPerServing}
								</label>
							</div>
							<div className={classes.IngredientLabel}>
								<img src={ScaleIcon} alt="" className={classes.IconImg} />
								<label
									className={
										classes.IngredientText
									}>{`${val.quantity.amount} ${val.quantity.unit}`}</label>
							</div>
						</div>
						<i
							className={['material-icons', classes.StepDelete].join(' ')}
							onClick={() => {
								props.deleteIngredient(index);
							}}>
							delete_forever
						</i>
					</label>
				);
				ingCounter++;
			}
			inputElement = (
				<Fragment>
					<div className={classes.SetpsTitle}>
						<label className={classes.Label}>{translate(props.label)}</label>
						<i
							className={['material-icons', classes.IconAdd].join(' ')}
							onClick={props.showIngredientsModal}>
							add_circle_outline
						</i>
					</div>
					<div className={inputClasses.join(' ')} style={txtAreaStyle}>
						<i className={iconClasses.join(' ')}>{props.elementIcon}</i>
						<div className={classes.SetpContainer}>{ingredients}</div>
					</div>
				</Fragment>
			);
			break;
		case 'select':
			inputElement = (
				<Fragment>
					<label className={classes.Label}>{translate(props.label)}</label>
					<div className={inputClasses.join(' ')}>
						<img src={props.elementIcon} alt="" className={classes.IconImg} />
						<select
							className={classes.SelectElement}
							value={props.value}
							onChange={props.changed}>
							{props.elementConfig.options.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{translate(opt.displayValue)}
								</option>
							))}
						</select>
					</div>
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
		case 'timeinput':
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
							onChange={(e) => {
								const start = e.target.selectionStart;
								const end = e.target.selectionEnd;
								if (e.target.value.includes("'")) {
									e.target.value = e.target.value.substring(
										0,
										e.target.value.length - 1
									);
								}
								if (e.target.value === '') {
									props.changed(e);
								} else if (/^\d+$/.test(e.target.value)) {
									e.target.value = `${e.target.value}'`;
									props.changed(e);
								}
								if (start === e.target.value.length) {
									e.target.setSelectionRange(start - 1, end - 1);
								} else {
									e.target.setSelectionRange(start, end);
								}
							}}
						/>
					</div>
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
