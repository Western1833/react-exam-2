import { useState } from "react";

export default function useForm(submitHandler, initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }));

        if (validate) {
            const validationErrors = validate({ [name]: value });
            setErrors(state => ({
                ...state,
                ...validationErrors
            }));

            if (!validationErrors[name]) {
                const { [name]: removedError, ...rest } = errors;
                setErrors(rest);
            }
        }
    }

    const onBlur = (e) => {
        const { name, value } = e.target;
        if (validate) {
            const validationErrors = validate({ [name]: value });
            setErrors(state => ({
                ...state,
                ...validationErrors
            }));

            if (!validationErrors[name]) {
                const { [name]: removedError, ...rest } = errors;
                setErrors(rest);
            }
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length === 0) {
                await submitHandler(values);
            }
        } else {
            await submitHandler(values);
        }
    }

    return {
        values,
        errors,
        onChange,
        onBlur,
        onSubmit
    }
}
