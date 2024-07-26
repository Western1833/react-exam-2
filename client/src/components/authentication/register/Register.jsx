import { useContext } from 'react';
import useForm from '../../../hooks/useForm.js';
import '../register/register-styles.css';
import AuthContext from '../../../contexts/authContext.jsx';
import { registerValidations } from './registerValidations.js';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../utils/api.js';

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);
    const navigate = useNavigate();

    const {values, errors, onChange, onSubmit, onBlur} = useForm(async (formValues) => {
        await registerSubmitHandler(formValues);
        navigate(PATHS.home);
    }, {
        email: '',
        password: '',
        username: '',
        rePass: ''
    }, (fieldValues) => registerValidations(fieldValues, values));

    return (
        <div className="register-form-container">
            <form className="register-form" onSubmit={onSubmit}>
                <h3>Registration</h3>
                <div className="fields">
                    <input type="text" placeholder="Email..." id="email" name="email" autoComplete="email" onBlur={onBlur} onChange={onChange} value={values.email}/>
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input type="text" placeholder="Username..." id="username" name="username" autoComplete="username" onBlur={onBlur} onChange={onChange} value={values.username}/>
                    {errors.username && <p className='error'>{errors.username}</p>}

                    <input type="password" placeholder="Password..." id="password" name="password" onBlur={onBlur} onChange={onChange} value={values.password}/>
                    {errors.password && <p className='error'>{errors.password}</p>}

                    <input type="password" placeholder="Repeat password..." id="rePass" name="rePass" onBlur={onBlur} onChange={onChange} value={values.rePass}/>
                    {errors.rePass && <p className='error'>{errors.rePass}</p>}
                    <input type="submit" value="Register" />
                </div>
                
                <div className="message">
                    <p>Already have an account?</p>
                    <a>Sign in</a>
                </div>
            </form>
        </div>
    );
}