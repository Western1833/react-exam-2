import { useContext } from 'react';
import useForm from '../../../hooks/useForm.js';
import '../register/register-styles.css';
import AuthContext from '../../../contexts/authContext.js';

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        rePass: '',
        username: ''
    });

    return (
        <div className="register-form-container">
            <form className="register-form" onSubmit={onSubmit}>
                <h3>Registration</h3>
                <div className="fields">
                    <input type="text" placeholder="Email..." id="email" name="email" autoComplete="email" onChange={onChange} value={values.email}/>
                    {/* <p className="error" >Email is required!</p>
                    <p className="error" >Email is not valid!</p> */}

                    <input type="text" placeholder="Username..." id="username" name="username" autoComplete="username" onChange={onChange} value={values.username}/>
                    {/* <p className="error" >Username is required!</p>
                    <p className="error" >Minimum 4 chars!</p> */}
                    <input type="password" placeholder="Password..." id="password" name="password" onChange={onChange} value={values.password}/>
                    {/* <p className="error" >Password is required!</p>
                    <p className="error" >Minimum 4 chars!</p> */}
                    <input type="password" placeholder="Repeat password..." id="rePass" name="rePass" onChange={onChange} value={values.rePass}/>
                    {/* <p className="error" >Repeat password field does not match password!</p> */}
                    <input type="submit" value="Register" />
                </div>
                {/* <p className="error">errmsg</p> */}
                <div className="message">
                    <p>Already have an account?</p>
                    <a>Sign in</a>
                </div>
            </form>
        </div>
    );
}