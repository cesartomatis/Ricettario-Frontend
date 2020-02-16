import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { checkValidity } from '../../../shared/validations';
import { I18nContext } from '../../../i18n/index';
import { register } from '../../../store/actions/index';

const initialState = {
	firstName: {
		elementType: 'input',
		elementIcon: 'person_outline',
		elementConfig: {
			type: 'text',
			placeholder: 'NAME'
		},
		value: '',
		validation: {
			required: true,
			minLength: 1
		},
		valid: false,
		touched: false
	},
	lastName: {
		elementType: 'input',
		elementIcon: 'person_outline',
		elementConfig: {
			type: 'text',
			placeholder: 'LASTNAME'
		},
		value: '',
		validation: {
			required: true,
			minLength: 1
		},
		valid: false,
		touched: false
	},
	email: {
		elementType: 'input',
		elementIcon: 'alternate_email',
		elementConfig: {
			type: 'email',
			placeholder: 'EMAIL'
		},
		value: '',
		validation: {
			required: true,
			isEmail: true
		},
		valid: false,
		touched: false
	},
	password: {
		elementType: 'input',
		elementIcon: 'lock',
		elementConfig: {
			type: 'password',
			placeholder: 'PASSWORD'
		},
		value: '',
		validation: {
			required: true,
			minLength: 6
		},
		valid: false,
		touched: false
	}
};

const Signup = (props) => {
	const { translate } = useContext(I18nContext);
	const [controls, setControls] = useState(initialState);
	const [formIsValid, setFormIsValid] = useState(false);

	const dispatch = useDispatch();
	const onRegister = (firstName, lastName, email, password) =>
		dispatch(register({ firstName, lastName, email, password }));

	const submitHandler = (event) => {
		event.preventDefault();
		onRegister(
			controls.firstName.value,
			controls.lastName.value,
			controls.email.value,
			controls.password.value
		);
	};

	const formElementsArray = [];
	for (let key in controls) {
		formElementsArray.push({
			id: key,
			config: controls[key]
		});
	}

	const inputChangedHandler = (controlName, event) => {
		const updatedControls = {
			...controls,
			[controlName]: {
				...controls[controlName],
				value: event.target.value,
				valid: checkValidity(
					event.target.value,
					controls[controlName].validation
				),
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

	let form = formElementsArray.map((formElement) => (
		<Input
			key={formElement.id}
			label={formElement.config.elementConfig.placeholder}
			elementType={formElement.config.elementType}
			elementIcon={formElement.config.elementIcon}
			elementConfig={formElement.config.elementConfig}
			value={formElement.config.value}
			changed={inputChangedHandler.bind(this, formElement.id)}
			invalid={!formElement.config.valid}
			shouldValidate={formElement.config.validation}
			touched={formElement.config.touched}
		/>
	));

	return (
		<form onSubmit={submitHandler}>
			{form}
			<Button disabled={!formIsValid} btnType="Success">
				{translate('SIGNUP')}
			</Button>
		</form>
	);
};

export default Signup;
