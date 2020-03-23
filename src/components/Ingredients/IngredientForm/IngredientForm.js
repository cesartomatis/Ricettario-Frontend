import React, { useState, useContext, Fragment, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { checkValidity } from '../../../shared/validations';
import { I18nContext } from '../../../i18n';
import IngIcon from '../../../assets/images/ingredient.svg';
import FireIcon from '../../../assets/images/fire.svg';
import ScaleIcon from '../../../assets/images/scale.svg';

const initialState = {
	name: {
		elementType: 'specialinput',
		elementIcon: IngIcon,
		elementTitle: 'INGREDIENT',
		elementConfig: {
			type: 'text',
			placeholder: 'INGREDIENT'
		},
		value: '',
		validation: {
			required: true,
			minLength: 1
		},
		valid: false,
		touched: false
	},
	calories: {
		elementType: 'numericinput',
		elementIcon: FireIcon,
		elementTitle: 'CALORIES',
		elementConfig: {
			type: 'text',
			placeholder: 'CALORIES'
		},
		value: '',
		validation: {
			required: true,
			isNumeric: true
		},
		valid: false,
		touched: false
	},
	quantity: {
		elementType: 'quantityinput',
		elementIcon: ScaleIcon,
		elementTitle: 'QUANTITY',
		elementConfig: {
			type: 'text',
			placeholder: 'QUANTITY'
		},
		quantityOptions: [
			{
				value: 'u',
				displayValue: 'UNITS'
			},
			{
				value: 'g',
				displayValue: 'GRAMS'
			},
			{
				value: 'kg',
				displayValue: 'KILOGRAMS'
			},
			{
				value: 'ml',
				displayValue: 'MILLILITERS'
			},
			{
				value: 'cc',
				displayValue: 'CENTILITERS'
			},
			{
				value: 'l',
				displayValue: 'LITERS'
			}
		],
		value: {
			amount: '',
			unit: 'u'
		},
		validation: {
			isQuantity: true
		},
		valid: false,
		touched: false
	}
};

const IngredientForm = (props) => {
	const { translate } = useContext(I18nContext);
	const [controls, setControls] = useState(initialState);
	const [formIsValid, setFormIsValid] = useState(false);

	const { shouldResetValues } = props;

	const resetControlsValue = () => {
		setControls(initialState);
		setFormIsValid(false);
	};

	useEffect(() => {
		if (shouldResetValues) {
			resetControlsValue();
		}
	}, [shouldResetValues]);

	const formElementsArray = [];
	for (let key in controls) {
		formElementsArray.push({
			id: key,
			config: controls[key]
		});
	}

	const setQuantityHandler = (amount, unit) => {
		const a = amount !== null ? amount : controls.quantity.value.amount;
		const u = unit ? unit : controls.quantity.value.unit;
		const updatedControls = {
			...controls,
			quantity: {
				...controls.quantity,
				value: {
					...controls.quantity.value,
					amount: a,
					unit: u
				},
				valid: checkValidity(
					{
						amount: a,
						unit: u
					},
					controls.quantity.validation
				)
			}
		};
		let validForm = true;
		for (let elementId in controls) {
			if (elementId !== 'quantity') {
				validForm = validForm && controls[elementId].valid;
			}
		}
		validForm = validForm && updatedControls.quantity.valid;
		setFormIsValid(validForm);
		setControls(updatedControls);
	};

	const inputChangedHandler = (controlName, event) => {
		const updatedControls = {
			...controls,
			[controlName]: {
				...controls[controlName],
				value: event.target.value,
				valid: controls[controlName].validation
					? checkValidity(event.target.value, controls[controlName].validation)
					: true,
				touched: true
			}
		};

		let formIsValid = true;
		for (let elementId in updatedControls) {
			formIsValid = formIsValid && updatedControls[elementId].valid;
		}
		setControls(updatedControls);
		setFormIsValid(formIsValid);
	};

	let form = formElementsArray.map((formElement) => {
		return (
			<Input
				key={formElement.id}
				label={formElement.config.elementTitle}
				elementType={formElement.config.elementType}
				elementIcon={formElement.config.elementIcon}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				changed={inputChangedHandler.bind(this, formElement.id)}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				setQuantity={setQuantityHandler}
				quantityOptions={formElement.config.quantityOptions}
			/>
		);
	});

	const submitHandler = (event) => {
		event.preventDefault();
		props.clicked(controls);
		resetControlsValue();
	};

	return (
		<Fragment>
			<form onSubmit={submitHandler}>
				{form}
				<Button disabled={!formIsValid} btnType="Success">
					{translate('CREATE_INGREDIENT')}
				</Button>
			</form>
		</Fragment>
	);
};

export default IngredientForm;
