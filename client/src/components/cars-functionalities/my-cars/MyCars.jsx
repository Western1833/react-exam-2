import '../my-cars/myCars.styles.css';
import CarCard from '../car-card/Car-card.jsx';
import { useContext, useEffect, useState } from "react";
import { getMyCars } from '../../../services/CarServices.js';
import AuthContext from '../../../contexts/authContext.jsx';

export default function MyCars() {
    const [cars, setCars] = useState([]);
    const {_id} = useContext(AuthContext);

    useEffect(() => {
        getMyCars(_id)
        .then(cars => setCars(cars))
        .catch(err => console.log(err));
    });

    return (
        <div className="myCars-wrapper">
            <div className="myCar-row">
                {cars.map(car => (
                    <CarCard {...car} key={car._id}/>
                ))}
            </div>
        </div>
    );
}