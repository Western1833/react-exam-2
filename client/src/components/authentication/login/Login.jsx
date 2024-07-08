import "../login/login-styles.css";
import useForm from "../../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/api.js";

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, onChange, onSubmit } = useForm(async (formValues) => {
        await loginSubmitHandler(formValues);
        navigate(PATHS.home);
      }, {
        email: '',
        password: ''
      });

    return (
<div className="login-form-container">
    <form className="login-form" onSubmit={onSubmit}>
        <h3>Login</h3>
        <div className="fields-login">
            <input type="text" placeholder="Email..." name="email" autoComplete="email" onChange={onChange} value={values.email}/>
                    {/* <p className="error">Email is required!</p>
                    <p className="error">Email is not valid!</p>                 */}
            <input type="password" placeholder="Password..." name="password" onChange={onChange} value={values.password}/>
            
                {/* <p className="error" >Password is required!</p>
                <p className="error" >Password is too short, minimum 4 chars!</p> */}
            
            <input type="submit" value="Login"/>
        </div>
            <p className="error"></p>
        <div className="message">
            <p>Don't have an account?</p>
            <a>Sign up</a>
        </div>
    </form>
</div>
    );
}