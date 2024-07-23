import "../login/login-styles.css";
import useForm from "../../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/api.js";
import { loginValidations } from "./loginValidations.js";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, errors, onChange, onBlur, onSubmit } = useForm(async (formValues) => {
        await loginSubmitHandler(formValues);
        navigate(PATHS.home);
    }, {
        email: '',
        password: ''
    }, loginValidations);

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h3>Login</h3>
                <div className="fields-login">
                    <input 
                        type="text" 
                        placeholder="Email..." 
                        name="email" 
                        autoComplete="email" 
                        onChange={onChange} 
                        onBlur={onBlur}
                        value={values.email} 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    
                    <input 
                        type="password" 
                        placeholder="Password..." 
                        name="password" 
                        onChange={onChange} 
                        onBlur={onBlur}
                        value={values.password} 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    
                    <input type="submit" value="Login" />
                </div>
                <div className="message">
                    <p>Don't have an account?</p>
                    <a>Sign up</a>
                </div>
            </form>
        </div>
    );
}
