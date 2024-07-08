import { useContext, useEffect } from "react";
import * as authService from '../../services/UserServices.js';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext.jsx";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        const logout = () => {
          try {
            authService.logout();
            logoutHandler();
            navigate('/');
          } catch (error) {
            navigate('/');
          }
        };
    
        logout();
      }, [logoutHandler]);
}