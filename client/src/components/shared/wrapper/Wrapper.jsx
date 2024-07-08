import Logout from '../../authentication/Logout.jsx';
import Login from '../../authentication/login/Login.jsx';
import Register from '../../authentication/register/Register.jsx';
import AllCars from '../../cars-functionalities/all-cars/All-cars.jsx';
import CreateCar from '../../cars-functionalities/create-car/Create-car.jsx';
import { Details } from '../../cars-functionalities/details/Details.jsx';
import LastThreeCars from '../../cars-functionalities/last-three-cars/Last-three-cars.jsx';
import AuthGuard from '../../guards/AuthGuard.jsx';
import '../wrapper/wrapper-styles.css';
import { Route, Routes } from 'react-router-dom';

const Wrapper = () => {
    return (
            <section className="site-section banner">
                <Routes>
                    <Route path='/' element={<LastThreeCars />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/add-car' element={<AuthGuard><CreateCar /></AuthGuard>} />
                    <Route path='/all-cars' element={<AllCars />} />
                    <Route path='/details/:id' element={<Details />} />
                    <Route path='/users/logout'element={<Logout />} />
                </Routes>
            </section>
    );
};

export default Wrapper;