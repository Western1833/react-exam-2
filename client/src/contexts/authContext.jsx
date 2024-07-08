import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/UserServices.js'
import usePersistedState from "../hooks/usePersistedState.js";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = usePersistedState('auth', {});
    
    const navigate = useNavigate();
  
      const loginSubmitHandler = async (values) => {
          const result = await authService.login(values.email, values.password);
          setAuth(result);
          localStorage.setItem('accessToken', result.accessToken)
      }
  
      const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password, values.username);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/');
      }
  
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/');
      }
    
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth.email,
      username: auth.username || auth.email,
      isAuthenticated: !!auth.email
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}
 export default AuthContext;