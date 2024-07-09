import Logout from '../../authentication/Logout.jsx';
import Login from '../../authentication/login/Login.jsx';
import Register from '../../authentication/register/Register.jsx';
import AllCars from '../../cars-functionalities/all-cars/All-cars.jsx';
import CreateCar from '../../cars-functionalities/create-car/Create-car.jsx';
import { Details } from '../../cars-functionalities/details/Details.jsx';
import { EditCar } from '../../cars-functionalities/edit-car/Edit-car.jsx';
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
                    <Route path='/all-cars' element={<AllCars />} />
                    <Route path='/details/:id' element={<Details />} />
                    <Route element={<AuthGuard/>}>
                        <Route path='/add-car' element={<CreateCar />} />
                        <Route path='/cars/:id/edit' element={<EditCar />} />
                        <Route path='/users/logout'element={<Logout />} />
                    </Route>
                </Routes>
            </section>
    );
};

export default Wrapper;