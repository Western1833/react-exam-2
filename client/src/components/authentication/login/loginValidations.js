export const loginValidations = (fieldValues) => {
    let errors = {};

    if ('email' in fieldValues) {
        if (!fieldValues.email) {
            errors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) {
            errors.email = "Email is not valid!";
        }
    }

    if ('password' in fieldValues) {
        if (!fieldValues.password) {
            errors.password = "Password is required!";
        } else if (fieldValues.password.length < 4) {
            errors.password = "Password is too short, minimum 4 chars!";
        }
    }

    return errors;
}