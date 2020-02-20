import React, { useState, useContext } from 'react';

import { checkValidity } from '../../../shared/validations';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { I18nContext } from '../../../i18n';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../../store/actions/recipe';

const initialState = {
	// isPublic: {
	// 	elementType: 'checkbox',
	// 	elementIcon: '',
	// 	elementConfig: {
	// 		type: '',
	// 		placeholder: 'IS_PUBLIC'
	// 	},
	// 	value: true,
	// 	validation: {
	// 		required: true,
	// 	},
	// 	valid: false,
	// 	touched: false
	// },
	title: {
		elementType: 'input',
		elementIcon: 'person_outline',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_TITLE'
		},
		value: '',
		validation: {
			required: true,
			minLength: 1
		},
		valid: false,
		touched: false
	},
	tips: {
		elementType: 'textarea',
		elementIcon: 'person_outline',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_TIPS'
		},
		value: '',
		validation: {
			required: true,
			minLength: 1
		},
		valid: false,
		touched: false
	},
	photo: {
		elementType: 'file',
		elementIcon: 'person_outline',
		elementConfig: {
			type: 'file',
			placeholder: 'RECIPE_PHOTO'
		},
		value: null,
		validation: {
			required: true
		},
		valid: false,
		touched: false
	}
};

const RecipeForm = (props) => {
	const { translate } = useContext(I18nContext);
	const [controls, setControls] = useState(initialState);
	const [formIsValid, setFormIsValid] = useState(true);

	const dispatch = useDispatch();
	const onAddRecipe = (file, body) => dispatch(addRecipe({ file, body }));

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
				value:
					controlName === 'photo' ? event.target.files[0] : event.target.value,
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

	const submitHandler = (event) => {
		event.preventDefault();
		onAddRecipe(controls.photo.value, {
			title: controls.title.value,
			tips: controls.tips.value
		});
	};

	return (
		<form onSubmit={submitHandler}>
			{form}
			<Button disabled={!formIsValid} btnType="Success">
				upload
			</Button>
		</form>
	);
};

export default RecipeForm;
