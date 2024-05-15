import '../car-card/car-card-styles.css';

export default function CarCard() {
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
            <a><img alt="car" /></a>
            <ul>
                <li>Brand: BMW</li>
                <li>Model: 530d</li>
                <li>Price: 7600$</li>
            </ul>
            <div className="btn-details">
                <button>Details</button>
            </div>
        </div>
    )
}