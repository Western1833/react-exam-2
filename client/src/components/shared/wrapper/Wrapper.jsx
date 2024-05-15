import LastThreeCars from '../../cars-functionalities/last-three-cars/Last-three-cars.jsx';
import '../wrapper/wrapper-styles.css';

const Wrapper = () => {
    return (
        <section className="site-section banner">
            <LastThreeCars/>
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