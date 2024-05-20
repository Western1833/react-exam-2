import CarCard from '../car-card/Car-card.jsx';
import '../last-three-cars/last-three-cars-styles.css';
import { useEffect, useState } from 'react';
import * as carServices from '../../../services/CarServices.js';

export default function LastThreeCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carServices.getLastThreeCars()
            .then(result => setCars(result));
    }, []);

    return (
        <div className="container-last-three">
            {
                cars.length === 0 ? 
                <div className="if-noCars">
                    <p>There are no cars added yet, to add a car please <a>register</a>.</p>
                </div> :
                <div className="if-cars">
                    <h4>Last three added cars</h4>
                    <div className="products">
                        {cars.map(car => (
                            <CarCard {...car} key={car._id}/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}