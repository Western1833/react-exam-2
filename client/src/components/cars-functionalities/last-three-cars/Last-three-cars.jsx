import CarCard from '../car-card/Car-card.jsx';
import '../last-three-cars/last-three-cars-styles.css';

export default function LastThreeCars() {
    return (
        //         <div class="container-last-three">
        //     <div class="if-cars" *ngIf="cars.length > 0">
        //         <h4>Last three added cars</h4>

        //         <div class="products">
        //             <app-card *ngFor="let car of cars" [car]="car"/>
        //         </div>
        //     </div>

        //     <div class="if-noCars" *ngIf="cars.length === 0">
        //         <p>There are no cars added yet, to add a car please <a routerLink="/register">register</a>.</p>
        //     </div>
        // </div>
        <div className="container-last-three">
            <div className="if-cars">
                <h4>Last three added cars</h4>

                <div className="products">
                    <CarCard />
                </div>
            </div>

            <div className="if-noCars">
                <p>There are no cars added yet, to add a car please <a>register</a>.</p>
            </div>
        </div>
    )
}