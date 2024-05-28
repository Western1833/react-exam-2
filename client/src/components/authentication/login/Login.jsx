import "../login/login-styles.css";
import useForm from "../../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext.js";

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);
    
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    return (
//         <div class="login-form-container">
//             <form class="login-form" #form="ngForm" (ngSubmit)="login(form)">
//             <h3>Login</h3>
//             <div class="fields">
//                 <input type="text" placeholder="Email..." name="email" ngModel #inputEmail="ngModel" [appEmail]="''" autocomplete="email" required>
//                 <ng-container *ngIf="inputEmail.touched">
//                 <p class="error" *ngIf="inputEmail.errors?.['required']">Email is required!</p>
//             <p class="error" *ngIf="inputEmail.errors?.['invalidEmail'] && !inputEmail.errors?.['required']">Email is not valid!</p>
//                 </ng - container >
//             <input type="password" placeholder="Password..." name="password" ngModel #inputPassword="ngModel" required minlength="4">
//             <ng-container *ngIf="inputPassword.touched">
//                 <p class="error" *ngIf="inputPassword.errors?.['required']">Password is required!</p>
//                 <p class="error" * ngIf="inputPassword.errors?.['minlength']" > Password is too short, minimum 4 chars!</p >
//             </ng - container >
//         <input type="submit" value="Login" [disabled] = "form.invalid" >
//         </div >
//         <ng-container * ngIf="errorMessage" >
//             <p class="error">{{ errorMessage }}</p>
//         </ng - container >
//         <div class="message">
//             <p>Don't have an account?</p>
//             <a routerLink="/register">Sign up</a>
//         </div>
//     </form >
// </div >
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