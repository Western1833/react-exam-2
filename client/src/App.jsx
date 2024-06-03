import Footer from "./components/shared/footer/Footer.jsx"
import Navigation from "./components/shared/navigation/Navigation.jsx"
import Wrapper from "./components/shared/wrapper/Wrapper.jsx";
import AuthContext from "./contexts/authContext.js";
import { useState } from "react";
import * as authService from '../src/services/UserServices.js';
import { useNavigate } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
    }

    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password, values.username);
      setAuth(result);
      navigate('/');
    }

    const logoutHandler = () => {
      setAuth({});
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
      <Navigation/>
        <Wrapper/>
      <Footer/>
    </AuthContext.Provider>
  )
}

export default App
