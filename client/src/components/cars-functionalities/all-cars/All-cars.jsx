import CarCard from "../car-card/Car-card.jsx";
import "../all-cars/all-cars-styles.css";

export default function AllCars() {
    return (
        <div class="allCars-wrapper">
            <div class="car-row">
                <CarCard/>
            </div>
        </div>
    );
}