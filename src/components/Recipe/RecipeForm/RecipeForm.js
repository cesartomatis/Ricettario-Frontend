import React, { useState, useContext } from 'react';

import { checkValidity } from '../../../shared/validations';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../../store/actions/recipe';
import { I18nContext } from '../../../i18n';

const initialState = {
	title: {
		elementType: 'input',
		elementIcon: 'title',
		elementTitle: 'RECIPE_TITLE',
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
	directions: {
		elementType: 'itemslist',
		elementIcon: 'list_alt',
		elementTitle: 'RECIPE_DIRECTIONS',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_DIRECTION'
		},
		value: [''],
		validation: {
			arrayMinLength: 1
		},
		valid: false,
		touched: false
	},
	preparationTime: {
		elementType: 'timeinput',
		elementIcon: 'timer',
		elementTitle: 'RECIPE_PREPARATION_TIME',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_TIME_PLACEHOLDER'
		},
		value: '',
		validation: {
			required: true,
			isTime: true
		},
		valid: false,
		touched: false
	},
	cookingTime: {
		elementType: 'timeinput',
		elementIcon: 'timer',
		elementTitle: 'RECIPE_COOKING_TIME',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_TIME_PLACEHOLDER'
		},
		value: '',
		validation: {
			required: true,
			isTime: true
		},
		valid: false,
		touched: false
	},
	tips: {
		elementType: 'textarea',
		elementIcon: 'help_outline',
		elementTitle: 'RECIPE_TIPS',
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
		elementTitle: 'RECIPE_PHOTO',
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
	},
	isPublic: {
		elementType: 'checkbox',
		elementIcon: '',
		elementTitle: 'IS_PUBLIC',
		elementConfig: {
			type: 'checkbox',
			placeholder: 'IS_PUBLIC'
		},
		value: true,
		valid: true,
		touched: true
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

	const addItemHandler = () => {
		console.log('>>> ADD ITEM <<<');
		const values = [...controls.directions.value];
		values.push('');
		const updatedControls = {
			...controls,
			directions: {
				...controls.directions,
				value: values
			}
		};
		setControls(updatedControls);
	};

	const deleteItemHandler = (index) => {
		let values = [...controls.directions.value];
		// const index = values.findIndex((i) => i === item);
		console.log('>>> DELETEM ITEM <<<', index);
		values.splice(index, 1);
		const updatedControls = {
			...controls,
			directions: {
				...controls.directions,
				value: values
			}
		};
		setControls(updatedControls);
	};

	const itemListChangedHandler = (index, event) => {
		const values = [...controls.directions.value];
		values[index] = event.target.value;
		console.log('>>> ITEM CHANGED <<<', controls.directions.value, values);
		const updatedControls = {
			...controls,
			directions: {
				...controls.directions,
				value: values,
				valid: checkValidity(values, controls.directions.validation)
			}
		};

		let validForm = true;
		for (let elementId in controls) {
			if (elementId !== 'directions') {
				validForm = validForm && controls[elementId].valid;
			}
		}
		validForm = validForm && updatedControls.directions.valid;
		setFormIsValid(validForm);
		setControls(updatedControls);
	};

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
			} else if (controlName !== 'itemslist') {
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
		// console.log(
		// 	'[RecipeForm.js] - formElementsArray.map() - formElement',
		// 	formElement
		// );
		return (
			<Input
				key={formElement.id}
				label={formElement.config.elementTitle}
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
				addItem={addItemHandler}
				deleteItem={deleteItemHandler}
				itemChanged={(index, e) => itemListChangedHandler(index, e)}
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
				{translate('CREATE_RECIPE')}
			</Button>
		</form>
	);
};

export default RecipeForm;
