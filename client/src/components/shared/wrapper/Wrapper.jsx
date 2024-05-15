import Login from '../../authentication/login/Login.jsx';
import CreateCar from '../../cars-functionalities/create-car/Create-car.jsx';
import LastThreeCars from '../../cars-functionalities/last-three-cars/Last-three-cars.jsx';
import '../wrapper/wrapper-styles.css';
import {Route, Routes} from 'react-router-dom';

const Wrapper = () => {
    return (
        <section className="site-section banner">
            <Routes>
                <Route path='/' element={<LastThreeCars/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/add-car' element={<CreateCar/>} />
            </Routes>
            {/* <app-last-three-products />
  <app-login/>
  <app-register/>
  <app-create-car-form/>
  <app-edit/>
  <app-details/>
  <app-all-cars/>
  <router-outlet/> */}
        </section>
    );
};

export default Wrapper;