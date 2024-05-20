import CarCard from "../car-card/Car-card.jsx";
import "../all-cars/all-cars-styles.css";
import { useEffect, useState } from "react";
import * as carService from '../../../services/CarServices.js';

export default function AllCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAllCars()
        .then(result => setCars(result));
    }, []);

    return (
        <div className="allCars-wrapper">
            <div className="car-row">
                {cars.map(car => (
                    <CarCard {...car} key={car._id}/>
                ))}
            </div>
        </div>
    );
}