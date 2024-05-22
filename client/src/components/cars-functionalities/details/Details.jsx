import { DetailsFunctionalities } from '../details-functionalities/Details-functionalities.jsx';
import '../details/details-styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleCar } from '../../../services/CarServices.js';

export function Details() {
    const {id} = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        getSingleCar(id)
        .then(car => setCar(car))
        .catch(err => console.log(err));
    }, [id]);

    console.log(car)

    return (
        <div className="card-details">
            <img src={ car.imageUrl } />
            <div className="edit-content-wrapper">
                <ul>
                    <li>Brand: { car.brand }</li>
                    <li>Model: { car.model }</li>
                    <li>Year: { car.year }</li>
                    <li>Price: { car.price }$</li>
                </ul>

                <aside>
                    <textarea name="edit-textarea" id="edit-content-wrapper" cols="27" rows="4" disabled value={car.description}></textarea>
                    <span>Phone number: { car.phoneNumber }</span>
                </aside>
            </div>
            <DetailsFunctionalities/>
        </div>
    );
}