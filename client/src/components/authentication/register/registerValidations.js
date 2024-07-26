export const registerValidations = (fieldValues, formValues) => {

    let errors = {};

    if ('email' in fieldValues) {
        if (!fieldValues.email) {
            errors.email = "Email is required!";
        } else if (!/^\w{2,}(\.\w+)*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/.test(fieldValues.email)) {
            errors.email = "Email is not valid!";
        }
    }

    if ('username' in fieldValues) {
        if(!fieldValues.username) {
            errors.username = 'Username is required!';
        }else if (fieldValues.username.length < 3) {
            errors.username = 'Username is too short, minimum 3 chars!'
        }
    }

    if ('password' in fieldValues) {
        if (!fieldValues.password) {
            errors.password = "Password is required!";
        } else if (fieldValues.password.length < 4) {
            errors.password = "Password is too short, minimum 4 chars!";
        }
    }

    if ('rePass' in fieldValues) {
        if (fieldValues.rePass !== formValues.password) {
            errors.rePass = 'Passwords missmatch!';
        }
    }

    return errors;
}