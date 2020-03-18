import React, { useState, useContext, Fragment } from 'react';

import { checkValidity } from '../../../shared/validations';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../../store/actions/recipe';
import { I18nContext } from '../../../i18n';
import IngredientForm from '../../Ingredients/IngredientForm/IngredientForm';
import Modal from '../../UI/Modal/Modal';
import DishIcon from '../../../assets/images/dish.svg';
import WaiterIcon from '../../../assets/images/restaurant-waiter.svg';

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
	ingredients: {
		elementType: 'itemspopoverlist',
		elementIcon: 'list_alt',
		elementTitle: 'INGREDIENTS',
		elementConfig: {
			type: 'text',
			placeholder: 'RECIPE_DIRECTION'
		},
		value: [],
		validation: {
			arrayMinLength: 1
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
	difficulty: {
		elementType: 'select',
		elementIcon: WaiterIcon,
		elementTitle: 'DIFFICULTY',
		elementConfig: {
			options: [
				{
					value: 'EASY',
					displayValue: 'EASY'
				},
				{
					value: 'MEDIUM',
					displayValue: 'MEDIUM'
				},
				{
					value: 'HARD',
					displayValue: 'HARD'
				}
			]
		},
		value: 'EASY',
		validation: {
			required: true
		},
		valid: true,
		touched: false
	},
	servings: {
		elementType: 'numericinput',
		elementIcon: DishIcon,
		elementTitle: 'SERVINGS',
		elementConfig: {
			type: 'text',
			placeholder: 'SERVINGS'
		},
		value: '',
		validation: {
			required: true,
			isNumeric: true
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
			required: false
		},
		valid: true,
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
	const [showIngredientModal, setShowIngredientModal] = useState(false);

	const dispatch = useDispatch();
	const onAddRecipe = (file, body) => dispatch(addRecipe(file, body));

	const formElementsArray = [];
	for (let key in controls) {
		formElementsArray.push({
			id: key,
			config: controls[key]
		});
	}

	const addIngredientHandler = (ingredient) => {
		const values = [...controls.ingredients.value];
		values.push(ingredient);
		const updatedControls = {
			...controls,
			ingredients: {
				...controls.ingredients,
				value: values,
				valid: checkValidity(values, controls.ingredients.validation)
			}
		};
		setControls(updatedControls);
		ingredientChangedValidation(updatedControls);
	};

	const deleteIngredientHandler = (index) => {
		let values = [...controls.ingredients.value];
		values.splice(index, 1);
		const updatedControls = {
			...controls,
			ingredients: {
				...controls.ingredients,
				value: values,
				valid: checkValidity(values, controls.ingredients.validation)
			}
		};
		setControls(updatedControls);
		ingredientChangedValidation(updatedControls);
	};

	const ingredientChangedValidation = (updatedControls) => {
		let validForm = true;
		for (let elementId in controls) {
			if (elementId !== 'ingredients') {
				validForm = validForm && controls[elementId].valid;
			}
		}
		validForm = validForm && updatedControls.ingredients.valid;
		setFormIsValid(validForm);
	};

	const addItemHandler = () => {
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

	const showIngredientsModalHandler = () => {
		setShowIngredientModal(true);
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
				showIngredientsModal={showIngredientsModalHandler}
				deleteIngredient={deleteIngredientHandler}
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
			ingredients: controls.ingredients.value,
			directions: controls.directions.value,
			preparationTime: controls.preparationTime.value.substring(
				0,
				controls.preparationTime.value.length - 1
			),
			cookingTime: controls.cookingTime.value.substring(
				0,
				controls.cookingTime.value.length - 1
			),
			difficulty: controls.difficulty.value,
			servings: controls.servings.value,
			tips: controls.tips.value
		});
	};

	return (
		<Fragment>
			<Modal
				show={showIngredientModal}
				title={translate('CREATE_INGREDIENT')}
				hasCloseButton
				modalClosed={() => setShowIngredientModal(false)}>
				<IngredientForm
					shouldResetValues={!showIngredientModal}
					clicked={(controls) => {
						setShowIngredientModal(false);
						addIngredientHandler({
							name: controls.name.value,
							caloriesPerServing: controls.calories.value,
							quantity: controls.quantity.value
						});
					}}
				/>
			</Modal>
			<form onSubmit={submitHandler}>
				{form}
				<Button disabled={!formIsValid} btnType="Success">
					{translate('CREATE_RECIPE')}
				</Button>
			</form>
		</Fragment>
	);
};

export default RecipeForm;
