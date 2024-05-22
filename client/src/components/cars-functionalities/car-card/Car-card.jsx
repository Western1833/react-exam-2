import '../car-card/car-card-styles.css';
import { Link } from 'react-router-dom';

export default function CarCard({
    imageUrl,
    model,
    brand,
    price,
    _id
}) {
    return (
        //         <div className="card">
        //     <a routerLink="/data/details" (click)="onDetailsClick()"><img [src]="car.imageUrl" alt="car"/></a>
        //     <ul>
        //         <li>Brand: {{car.brand}}</li>
        //         <li>Model: {{car.model}}</li>
        //         <li>Price: {{car.price}}$</li>
        //     </ul>
        //     <div class="btn-details">
        //         <button routerLink="/data/details" (click)="onDetailsClick()">Details</button>
        //     </div>
        // </div>
        <div className="card">
            <a><img src={imageUrl} alt="car" /></a>
            <ul>
                <li>Brand: {brand}</li>
                <li>Model: {model}</li>
                <li>Price: {price}$</li>
            </ul>
            <div className="btn-details">
                <Link to={`/details/${_id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
}