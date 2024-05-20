import CarCard from "../car-card/Car-card.jsx";
import "../all-cars/all-cars-styles.css";
import { useEffect, useState } from "react";
import * as carService from '../../../services/CarServices.js';

export default function AllCars() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        carService.getAllCars()
        .then(result => setGames(result));
    }, []);

    console.log(games)

    return (
        <div className="allCars-wrapper">
            <div className="car-row">
                <CarCard/>
            </div>
        </div>
    );
}