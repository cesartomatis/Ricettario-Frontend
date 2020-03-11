import React, { useState, useContext } from 'react';

import { checkValidity } from '../../../shared/validations';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../../store/actions/recipe';
import { I18nContext } from '../../../i18n';

const initialState = {
	isPublic: {
		elementType: 'checkbox',
		elementIcon: '',
		elementConfig: {
			type: 'checkbox',
			placeholder: 'IS_PUBLIC'
		},
		value: true,
		valid: true,
		touched: true
	},
	title: {
		elementType: 'input',
		elementIcon: 'title',
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
		elementIcon: 'help_outline',
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
			required: false
		},
		valid: true,
		touched: false
	}
};

const RecipeForm = (props) => {
	const { translate } = useContext(I18nContext);
	const [controls, setControls] = useState(initialState);
	const [imgDeleted, setImgDeleted] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);

	const dispatch = useDispatch();
	const onAddRecipe = (file, body) => dispatch(addRecipe(file, body));

	const formElementsArray = [];
	for (let key in controls) {
		formElementsArray.push({
			id: key,
			config: controls[key]
		});
	}

	const inputChangedHandler = (controlName, event) => {
		let updatedControls = null;
		if (event) {
			updatedControls = {
				...controls,
				[controlName]: {
					...controls[controlName],
					valid: controls[controlName].validation
						? checkValidity(
								event.target.value,
								controls[controlName].validation
						  )
						: true,
					touched: true
				}
			};
			if (controlName === 'photo') {
				if (event.target.files.length > 0) {
					updatedControls[controlName].imgPreview = URL.createObjectURL(
						event.target.files[event.target.files.length - 1]
					);

					updatedControls[controlName].value = event.target.files[0];
					setImgDeleted(false);
				}
			} else if (controlName === 'isPublic') {
				updatedControls[controlName].value =
					event.target.getAttribute('value') === 'true' ? false : true;
			} else {
				updatedControls[controlName].value = event.target.value;
			}
		} else {
			updatedControls = {
				...controls
			};
		}
		let formIsValid = true;
		for (let elementId in updatedControls) {
			formIsValid = formIsValid && updatedControls[elementId].valid;
		}
		setControls(updatedControls);
		setFormIsValid(formIsValid);
	};

	const deleteImgHandler = () => {
		setImgDeleted(true);
	};

	let form = formElementsArray.map((formElement) => {
		console.log(
			'[RecipeForm.js] - formElementsArray.map() - formElement',
			formElement
		);
		return (
			<Input
				key={formElement.id}
				label={formElement.config.elementConfig.placeholder}
				elementType={formElement.config.elementType}
				elementIcon={formElement.config.elementIcon}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				checked={formElement.config.checked}
				changed={inputChangedHandler.bind(this, formElement.id)}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				imgPreview={formElement.config.imgPreview}
				deleteImg={deleteImgHandler}
			/>
		);
	});

	const submitHandler = (event) => {
		event.preventDefault();
		let photo = null;
		if (!imgDeleted) {
			photo = controls.photo.value;
		}
		onAddRecipe(photo, {
			isPublic: controls.isPublic.value,
			title: controls.title.value,
			tips: controls.tips.value
		});
	};

	return (
		<form onSubmit={submitHandler}>
			{form}
			<Button disabled={!formIsValid} btnType="Success">
				{translate('UPLOAD')}
			</Button>
		</form>
	);
};

export default RecipeForm;
