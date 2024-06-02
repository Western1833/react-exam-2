import Login from '../../authentication/login/Login.jsx';
import AllCars from '../../cars-functionalities/all-cars/All-cars.jsx';
import CreateCar from '../../cars-functionalities/create-car/Create-car.jsx';
import { Details } from '../../cars-functionalities/details/Details.jsx';
import LastThreeCars from '../../cars-functionalities/last-three-cars/Last-three-cars.jsx';
import '../wrapper/wrapper-styles.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthContext from '../../../contexts/authContext.js';
import * as authService from '../../../services/UserServices.js';


const Wrapper = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{loginSubmitHandler}}>
            <section className="site-section banner">
                <Routes>
                    <Route path='/' element={<LastThreeCars />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/add-car' element={<CreateCar />} />
                    <Route path='/all-cars' element={<AllCars />} />
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
            </section>
        </AuthContext.Provider>
    );
};

export default Wrapper;