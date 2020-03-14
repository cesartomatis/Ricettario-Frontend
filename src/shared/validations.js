export const checkValidity = (value, rules) => {
	let isValid = true;
	isValid = isValid && (!rules.required || value.trim() !== '');
	isValid = isValid && (!rules.minLength || value.length >= rules.minLength);
	isValid = isValid && (!rules.maxLength || value.length <= rules.maxLength);
	isValid = isValid && (!rules.isNumeric || /^\d+$/.test(value));
	isValid =
		isValid &&
		(!rules.isEmail || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value));
	isValid =
		isValid && (!rules.arrayMinLength || (value.length > 0 && value[0] !== ''));
	return isValid;
};
